/**
 * 配置信息
 */

export default {
  // 基础配置
  mobileDevTool: true, // 开启手机调试工具
  tokenSessName: `${__CLIENT__}_token`, // 存储 token 的session 名字

  // 客户专属配置
  client: async () => {
    const data = await import(/* webpackChunkName: "client-config" */ `./${__CLIENT__}.js`);
    return data.default;
  }
}