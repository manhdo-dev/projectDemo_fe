import * as path from 'path';

// ref: https://umijs.org/config/
const config = {
  // treeShaking: true,
  // datahub: {
  //   proxy: {
  //     '^/api': {
  //       hub: 'demo',
  //     },
  //   },
  //   store: path.join(__dirname, 'data'),
  // },
  // metas: [
  //   { name: "google-signin-scope", content: "profile email"},
  //   { name: "google-signin-client_id", content: "168287242909-kcsqvqa2uku89nddsahkqivnvo9ksohh.apps.googleusercontent.com"},
  // ],
  scripts: [
    `
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '254645145583672',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v9.0'
      });
    };`,
  { src: "https://connect.facebook.net/en_US/sdk.js", async: true, defer: true, crossorigin: "anonymous"},
  { src: "https://apis.google.com/js/platform.js", async: true, defer: true}
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/forgot-password',
          component: './forgotPassword',
        },
        {
          path: '/verify',
          component: './verify',
        },
        {
          path: '/register',
          component: './register',
        },
        {
          path: '/profile',
          component: './profile',
        },
        {
          path: '/authentication',
          component: './authentication',
        }
      ]
    }
  ],

  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   // ['umi-plugin-react', {
  //   //   antd: true,
  //   //   dva: false,
  //   //   dynamicImport: false,
  //   //   title: 'project-demo',
  //   //   dll: true,
  //   //   lessLoaderOptions: {
  //   //     modifyVars: {
  //   //       compact: false,
  //   //     }
  //   //   },
  //   //   routes: {
  //   //     exclude: [
  //   //       /components\//,
  //   //     ],
  //   //   },
  //   // }],

  theme: {
    'input-height-base': '42px',
    'btn-height-base': '42px',
    'primary-color': '#f5222d'
  },

  // ],
  antd: {
    compact: false
  },
}

export default config;
