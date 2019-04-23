export default [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home-page" */ '@page/home/home-page')
  },
  {
    name: 'shop',
    path: '/shop',
    meta: {
      keepScroll: true
    },
    component: () => import(/* webpackChunkName: "shop-page" */ '@page/shop/shop-page')
  }
];