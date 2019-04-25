## 江海经济圈、展业宝...整合重构版

#### 重构思路

虽然有些业务重叠，但考虑到定制的弹性，`容器`组件基本是根据客户独立到单独页面
`src/apps/客户id`

在 `UI组件`方面需要产品尽量做到交互的一致性，功能以及交互的组件会统一放入
`src/components`

其中 `external` 目录存放的是标准的 Web 组件，基于 [Stencil](https://stenciljs.com) 编译开发，只要是功能性复用的组件统一用此组件开发，清单：

- [x] 列表 `<nb-list>`, `<nb-list-item>`
- [x] 滑动开关 Switch `<nb-switch>`
- [x] 横向滑动操作 `<nb-item-slide>`
- 视频控制器 `<nb-video>`
- [x] toast `<nb-toast>`
- [x] modal `<nb-modal>`
- [x] 时间选择器 `<nb-datetime-picker>`
- [x] 搜索框带历史记录 `<nb-search-bar>`
- 分享弹出层 `<nb-share>`
- [x] 限制文本字数的输入框 `<nb-limit-textarea>`
- 输入校验 `<nb-validator>`
- [x] tab 内容切换 `<nb-tab>`
- 滚播图 `<nb-swiper>`
- [x] 下拉刷新（包含上拉刷新） `<nb-refresh>`
- 二维码展示 `<nb-qrcode>`
- 图片裁切 `<nb-cropper>`
- [x] 按照字母滑动导航列表 `<nb-vscroll-nav>`
- [x] 图片多张上传组件 `<nb-upload-simple-image>`
- ...

`common` 内的为 vue 的公共组件，只能跟 vue 捆绑使用的复用组件放置在此，比如页面过渡组件， 这里可以创建其客户 ID 目录（如果有必要）一般是非容器组件又复用性较强的

`样式`方面全部以 `assets/common` 内的样式作为主样式，客户 ID 引入的样式 `assets/客户ID` 作为扩展订制样式。`@assets` 指向的目录也是客户目录，因此修改 common 下的样式要相对谨慎（默认会影响全局）

`配置`信息类同样式 `config/index` 作为基础配置，客户 ID 对应的配置作为覆盖项

`数据模型` 如果有可复用的部分放入 common

`路由` 基于 `router/index` 再根据客户 id 扩充

