import Vue from 'vue';
import router from './router';

// 全局样式
import '@assets/main';

// 启用 rem
import '@lib/rem';

// 工具函数
import Utils from '@lib/utils';

// 外部引入标准组件
import { defineCustomElements } from '@com/external/loader';
defineCustomElements(window);
Vue.config.ignoredElements = [/nb-\w*/];

(async () => {
  // 客户 root vue
  const App = await import(/* webpackChunkName: "app-root" */ `./apps/${__CLIENT__}/app`);

  // 全局配置
  const ConfigPromise = await import('./config');
  const Config = await ConfigPromise.default;

  // Vue 全局设置
  Vue.productionTip = false;
  Vue.prototype.$utils = Utils;
  Vue.prototype.$config = Config;
  console.log('Vue全局', { Utils, Config });

  // 启动 Vue
  new Vue({
    el: '#app',
    router,
    render: h => h(App.default)
  });
})();
