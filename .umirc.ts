
// ref: https://umijs.org/config/
const config = {
  // treeShaking: true,
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
