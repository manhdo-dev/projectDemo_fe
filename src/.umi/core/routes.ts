// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/doducmanh/Documents/ReactJs/projectdemo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/layouts/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/index').default,
        "exact": true
      },
      {
        "path": "/login",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/login').default,
        "exact": true
      },
      {
        "path": "/forgot-password",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/forgotPassword').default,
        "exact": true
      },
      {
        "path": "/verify",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/verify').default,
        "exact": true
      },
      {
        "path": "/register",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/register').default,
        "exact": true
      },
      {
        "path": "/profile",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/profile').default,
        "exact": true
      },
      {
        "path": "/authentication",
        "component": require('/Users/doducmanh/Documents/ReactJs/projectdemo/src/pages/authentication').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
