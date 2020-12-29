// import React from 'react';
// import { request } from 'umi';
import { queryCurrent } from './services/identity';
import { setAccessToken } from './utils/token';
// import tk, { privateRequest } from './utils/token';

// import { UmiUIFlag } from 'umi';
// import extraRoutes from '@/routes';

export const request = {
  errorConfig: {},
  prefix: localStorage.getItem('accessToken') || 'http://localhost:3000', // /api/manage/statusList.json
  getResponse: true,
  errorHandler: error => {
    if (error.response.status === 401) {
      // clean all token
      setAccessToken(null);
      // setRefreshToken(null);

      const event = new CustomEvent('request.error', {
        detail: error,
      });
      window.dispatchEvent(event);
      return error;
    }

    return error;
  },
};


export async function getInitialState() {
  const currentUser = await queryCurrent();

  return {
    currentUser
  };
}

// export function patchRoutes({ routes }) {
//   routes[0].routes = extraRoutes.concat(routes[0].routes);
// }

// export function rootContainer(container) {
//   return React.createElement('div', null, UmiUIFlag, container);
// }
