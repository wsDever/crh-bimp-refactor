export default [
  // 注册设置密码前签约页面
  {
    name: 'register.agreement',
    path: '/account/agreement',
    meta: {
      header: {
        left: 'backward',
        title: '江海经济圈用户注册协议'
      },
      bg: 'grey'
    },
    component: () =>
      import(
        /* webpackChunkName: "register-agreement" */ '@page/register/agreement'
      )
  },
  {
    name: 'home',
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/home/home-page')
  },
  {
    name: 'shop',
    path: '/shop',
    meta: {
      keepScroll: true
    },
    component: () =>
      import(/* webpackChunkName: "shop-page" */ '@page/shop/shop-page')
  }
];
