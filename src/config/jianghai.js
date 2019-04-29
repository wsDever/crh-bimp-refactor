/**
 * 江海经济圈配置
 */

export default {
  // 项目名
  appName: '江海经济圈',
  // 版本号
  version: '3.0',
  // 显示文案
  text: {
    mobile_error: '请输入有效手机号'
  },
  // 接口地址
  api: {
    development: 'http://jhbackendtest.xpe.com:12271',
    production: 'http://zsbackendtest.xpe.com:28090',
  }[__ENV__]
}