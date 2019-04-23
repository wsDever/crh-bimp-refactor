import Vue from 'vue';
import Router from 'vue-router';
import scrollBehavior from '@lib/vue-router-scroller-keeper';

Vue.use(Router);

let router = new Router({
  routes: [
    // 基础路由
  ]
});

router.beforeEach(function(to, from, next) {
  if (from.name) {
    scrollBehavior.apply(router, [to, from]);
  }
  next();
});

(async () => {
  // 插入客户特殊路由
  const clientRoutes = await import(/* webpackChunkName: "client-route" */ `./${__CLIENT__}`);
  router.addRoutes([
    ...clientRoutes.default
  ]);
})();

export default router;