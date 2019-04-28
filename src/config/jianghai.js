/**
 * 江海经济圈配置
 */

export default {
  appName: '江海经济圈',
  api: {
    development: 'http://zsbackendtest.xpe.com:12173',
    production: 'http://zsbackendtest.xpe.com:28090',
  }[__ENV__]
}