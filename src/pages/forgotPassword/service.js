import { request, setRefreshToken, setAccessToken } from '../../utils/token';

export const forgotPassword = async ({ email}) => {
  const res = await request('/auth/forgot-password', {
    method: 'POST',
    data: { email },
  });

  // console.log('res', res);
  // console.log(res.response)

  if (res.response.ok) {

    setAccessToken(res.data.access_token);
    // setRefreshToken(res.data.refreshToken);

    return {
      success: true,
    };
  }

  if (res.response.status === 422) {
    throw new Error(Object.values(res.data).join('\n'));
  }

  throw new Error(res.data.message);
};
