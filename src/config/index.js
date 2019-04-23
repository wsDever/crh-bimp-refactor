/**
 * 配置信息
 */

 export default (async () => {

  // 客户配置
  const clientConfig = await import(/* webpackChunkName: "client-config" */ `./${__CLIENT__}.js`);

  return {
    // 基础配置
    mobileDevTool: true, // 开启手机调试工具
    

    // 客户配置覆盖
    ...clientConfig.default
  }

 })();