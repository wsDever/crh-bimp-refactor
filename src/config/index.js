/**
 * 配置信息
 */

export default {
  // 基础配置
  mobileDevTool: true, // 开启手机调试工具
  tokenSessName: `${__CLIENT__}_token`, // 存储 token 的session 名字
  userInfoSessName: `${__CLIENT__}_user`, // 用户信息
  accountLocalName: `${__CLIENT__}_account`, // 记住账号
  // 客户专属配置
  client: async () => {
    const data = await import(/* webpackChunkName: "client-config" */ `./${__CLIENT__}.js`);
    return data.default;
  }
}