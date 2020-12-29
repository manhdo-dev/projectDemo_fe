import jwtDecode from 'jwt-decode';
import { request, history } from 'umi';
import TokenManagement from 'token-management';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const ROLES = 'roles';

const tenantSessionStorage = {
  getItem: name => sessionStorage.getItem(name),
  setItem: (name, value) => sessionStorage.setItem(name, value),
  removeItem: name => sessionStorage.removeItem(name),
};

export { request };

export const getAccessToken = () => tenantSessionStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = token => {
  if (token) {
    tenantSessionStorage.setItem(ACCESS_TOKEN, token);
    window.dispatchEvent(new StorageEvent('token-management'));
    return;
  }

  tenantSessionStorage.removeItem(ACCESS_TOKEN);
  window.dispatchEvent(new StorageEvent('token-management'));
};

export const setRoles = roles => {
  tenantSessionStorage.setItem(ROLES, JSON.stringify(roles));
  window.dispatchEvent(new StorageEvent('token-management'));
};

export const getRoles = () => {
  try {
    const roles = tenantSessionStorage.getItem(ROLES);
    const token = getAccessToken();
    return token ? ['@', ...JSON.parse(roles || '[]')] : [];
  } catch (e) {
    console.warn(e);
  }

  return [];
};

export const getRefreshToken = () => tenantSessionStorage.getItem(REFRESH_TOKEN);
export const setRefreshToken = token => {
  if (token) {
    tenantSessionStorage.setItem(REFRESH_TOKEN, token);
    return;
  }

  tenantSessionStorage.removeItem(REFRESH_TOKEN);
};

const tk = new TokenManagement({
  isTokenValid(token) {
    try {
      const decoded = jwtDecode(token);
      return true;
      // eslint-disable-next-line no-unreachable
      console.log('decoded', decoded);
      const { exp } = decoded;
      const currentTime = Date.now() / 1000;

      if (exp - 10 > currentTime) {
        return true;
      }
    } catch (e) {
      console.warn('Invalid token', e);
    }
    return false;
  },

  getAccessToken,

  onRefreshToken(done) {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      return done(null);
    }

    request('/auth/refresh', {
      data: {
        refreshToken,
      },
      method: 'POST',
      getResponse: false,
    })
      .then(result => {
        if (result.refreshToken && result.accessToken) {
          setAccessToken(result.accessToken);
          setRefreshToken(result.refreshToken);
          setRoles([]); ///
          done(result.accessToken);
          return;
        }

        done(null);
      })
      .catch(err => {
        console.error(err);
        done(null);
      });
  },
});

export default tk;

export const privateRequest = async (url, options = {}) => {
  const token = await tk.getToken();

  if (token) {
    return await request(url, {
      ...options,
      getResponse: false,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });
  }

  // trigger logout ...
  // force to login

  // return await request(url, options);
  if (history.location.pathname !== '/login') {
    history.replace('/login');
  }

  return null;
};
