import { request, setRefreshToken, setAccessToken } from '../../utils/token';

export const login = async ({ username, password }) => {
  const res = await request('/auth/login', {
    method: 'POST',
    data: { username, password },
  });

  // console.log('res', res);
  // console.log(res.response)

  if (res.response.ok) {

    setAccessToken(res.data.access_token);
    setRefreshToken(res.data.resfresh_token);

    return {
      success: true,
    };
  }

  if (res.response.status === 422) {
    throw new Error(Object.values(res.data).join('\n'));
  }

  throw new Error(res.data.message);
};

