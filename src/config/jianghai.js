/**
 * 江海经济圈配置
 */

export default {
  // 项目名
  appName: '江海经济圈',
  // 版本号
  version: '3.0',
  // 500001：经纪人注册业务 | 500002:经纪人签约风险揭示 | 500003:经纪人签约合同
  agreementBusinType: '500001',
  // 脚底导航
  footerNavItems: [
    {
      key: "home",
      icon: "iconshouyex",
      iconAx: "iconshouyeAx",
      text: "首页"
    },
    {
      key: "client",
      icon: "iconkehux",
      iconAx: "iconkehuAx",
      text: "客户"
    },
    {
      key: "achievement",
      icon: "iconyejix",
      iconAx: "iconyejiAx",
      text: "业绩"
    },
    {
      key: "my",
      icon: "iconwodex",
      iconAx: "iconwodex",
      text: "我的"
    }
  ],
  // 显示文案
  text: {},
  // 接口地址
  api: {
    development: 'http://jhbackendtest.xpe.com:12271',
    production: 'http://zsbackendtest.xpe.com:28090',
  }[__ENV__]
}