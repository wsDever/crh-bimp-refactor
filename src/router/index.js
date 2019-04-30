import Vue from 'vue';
import Router from 'vue-router';
import scrollBehavior from '@lib/vue-router-scroller-keeper';

Vue.use(Router);

let router = new Router({
  routes: [
    // 基础路由
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@page/login')
    },
    // 账号注册 ?type=find -> 忘记密码
    {
      name: 'register',
      path: '/account/register',
      meta: {
        header: {
          left: 'backward',
          title: '注册'
        },
        bg: 'grey'
      },
      component: () =>
        import(/* webpackChunkName: "register" */ '@page/register')
    },
    // 注册设置密码 ?type=find -> 确认新密码
    {
      name: 'register.password',
      path: '/account/set-password',
      meta: {
        header: {
          left: 'backward',
          title: '设置密码'
        },
        bg: 'grey'
      },
      component: () =>
        import(/* webpackChunkName: "set-password" */ '@page/register/password')
    }
  ]
});

router.beforeEach(function(to, from, next) {
  if (from.name) {
    // 保持滚动位置
    scrollBehavior.apply(router, [to, from]);
  }
  // 注册找回密码逻辑复用
  if (to.name === 'register') {
    to.meta.header.title = {
      '': '注册',
      find: '忘记密码'
    }[to.query.type || ''];
  }
  next();
});

(async () => {
  // 插入客户特殊路由
  const clientRoutes = await import(
    /* webpackChunkName: "client-route" */ `./${__CLIENT__}`
  );
  router.addRoutes([...clientRoutes.default]);
})();

export default router;
