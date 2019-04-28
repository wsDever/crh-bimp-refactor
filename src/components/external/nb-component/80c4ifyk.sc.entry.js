const o=window.NbComponent.h;"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var t,n=(function(o,t){o.exports=function(){var o=function(){};function t(o){return Array.isArray?Array.isArray(o):o instanceof Array}function n(o){var t=Object.prototype.toString.call(o).match(/^\[object\s(.*)\]$/)[1];return"String"!==t&&"Number"!==t&&"Boolean"!==t&&"Undefined"!==t&&"Null"!==t}function s(o){return o&&o===window}function i(o){return n(o)&&!s(o)&&Object.getPrototypeOf(o)===Object.prototype}function e(){var o=arguments,s=arguments.length,r=(arguments.length<=0?void 0:arguments[0])||{},a=1,l=!1;"boolean"==typeof r&&(l=r,r=(arguments.length<=a?void 0:arguments[a])||{},a++),n(r)||(r={});for(var c=function(){var s=o.length<=a?void 0:o[a];s&&n(s)&&Object.keys(s).forEach(function(o){var n=r[o],a=s[o],c=i(a),p=t(a),u=void 0;r!==a&&(l&&a&&(p||c)?(p?(p=!1,u=n&&t(n)?n:[]):u=n&&i(n)?n:{},r[o]=e(l,u,a)):void 0!==a&&(r[o]=a))})};a<s;a++)c();return r}function r(o){var t=o;return"string"==typeof t&&(t=document.querySelector(t)),t}function a(o){var t=o.clientHeight;return o===document.body&&"CSS1Compat"===document.compatMode&&(t=document.documentElement.clientHeight),t}function l(o,t,n){if(!t)return o;for(var s=t.split("."),i=s.length,e=o,r=0;r<i-1;r+=1){var a=s[r];e[a]=e[a]||{},e=e[a]}return e[s[i-1]]=n,n}var c=Object.freeze({getNow:function(){return window.performance&&(window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date)},noop:o,isArray:t,isObject:n,isWindow:s,isPlainObject:i,extend:e,selector:r,getClientHeightByDom:a,namespace:l}),p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(o){return window.setTimeout(o,(o.interval||1e3/60)/2)},u=function(){function o(o,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}return function(t,n,s){return n&&o(t.prototype,n),s&&o(t,s),t}}(),h=function(){function o(t){!function(t,n){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),this.contentWrap=t.contentWrap,this.scrollWrap=t.scrollWrap,this.options=t.options,this.os=t.os,this.events={},this.hooks={},this.isScrollTo=!1,this.upLoading=!1,this.downLoading=!1,this.isFinishUp=!1,this._init()}return u(o,[{key:"_init",value:function(){var o=this;this._initPullDown(),this._initPullUp(),setTimeout(function(){o.options.down&&o.options.down.isAuto&&!o.options.down.isLock?o.options.down.isAllowAutoLoading?o.triggerDownLoading():o.events.downLoading&&o.events.downLoading(!0):o.options.up&&o.options.up.isAuto&&!o.options.up.isLock&&o.triggerUpLoading(),o.events.initScroll&&o.events.initScroll()})}},{key:"refreshOptions",value:function(o){this.options=o}},{key:"translateContentWrap",value:function(o,t){var n=o||0,s=t||0;if(this.downHight=n,this.options.down.isScrollCssTranslate){var i=this.contentWrap;i.style.webkitTransitionDuration=s+"ms",i.style.transitionDuration=s+"ms",i.style.webkitTransform="translate(0px, "+n+"px) translateZ(0px)",i.style.transform="translate(0px, "+n+"px) translateZ(0px)"}}},{key:"_scrollWrapAnimation",value:function(){this.scrollWrap.webkitTransitionTimingFunction="cubic-bezier(0.1, 0.57, 0.1, 1)",this.scrollWrap.transitionTimingFunction="cubic-bezier(0.1, 0.57, 0.1, 1)"}},{key:"_initPullDown",value:function(){var o=this,t=this.scrollWrap,n=document.documentElement.clientHeight;this._scrollWrapAnimation();var s=function(n){o.isScrollTo&&n.preventDefault(),o.startTop=t.scrollTop,o.startY=n.touches?n.touches[0].pageY:n.clientY,o.startX=n.touches?n.touches[0].pageX:n.clientX};t.addEventListener("touchstart",s),t.addEventListener("mousedown",s);var i=function(){var t=o.options;o.isMoveDown&&(o.downHight>=t.down.offset?o.triggerDownLoading():(o.translateContentWrap(0,t.down.bounceTime),o.events.cancelLoading&&o.events.cancelLoading()),o.isMoveDown=!1),o.startY=0,o.startX=0,o.preY=0,o.startTop=void 0,o.isBounce=!1};t.addEventListener("touchend",i),t.addEventListener("mouseup",i),t.addEventListener("mouseleave",i);var e=function(s){var e=o.options,r=!0;if(o.downLoading?r=!1:!e.down.isAways&&o.upLoading&&(r=!1),void 0!==o.startTop&&o.startTop<=0&&r&&!o.options.down.isLock){var a=s.touches?s.touches[0].pageY:s.clientY,l=s.touches?s.touches[0].pageX:s.clientX;if(a>n)return void i();o.preY||(o.preY=a);var c=a-o.preY;o.preY=a;var p=a-o.startY;if(e.isLockX&&Math.abs(l-o.startX)>Math.abs(p))return void s.preventDefault();if(o.isBounce&&o.os.ios)return;if(p>0){o.isMoveDown=!0,s.preventDefault(),o.downHight||(o.downHight=0);var u=e.down.offset;o.downHight+=c>0?c*(o.downHight<u?e.down.dampRateBegin:e.down.dampRate):c,o.events.pull&&o.events.pull(o.downHight,u),o.translateContentWrap(o.downHight)}else o.isBounce=!0,t.scrollTop<=0&&(t.scrollTop+=Math.abs(c))}};t.addEventListener("touchmove",e),t.addEventListener("mousemove",e)}},{key:"_initPullUp",value:function(){var o=this,t=this.scrollWrap;(t===document.body?window:t).addEventListener("scroll",function(){var n=t.scrollTop,s=t.scrollHeight,i=a(t),e=o.options;o.events.scroll&&o.events.scroll(n);var r=!0;(o.upLoading?r=!1:!e.down.isAways&&o.downLoading&&(r=!1),r&&!o.options.up.isLock&&!o.isFinishUp&&s>0)&&(s-i-n<=e.up.offset&&o.triggerUpLoading())})}},{key:"_loadFull",value:function(){var o=this,t=this.scrollWrap,n=this.options;setTimeout(function(){!o.options.up.isLock&&n.up.loadFull.isEnable&&0===t.scrollTop&&t.scrollHeight>0&&t.scrollHeight<=a(t)&&o.triggerUpLoading()},n.up.loadFull.delay||0)}},{key:"triggerDownLoading",value:function(){var o=this.options;this.hooks.beforeDownLoading&&!this.hooks.beforeDownLoading(this.downHight,o.down.offset)||(this.downLoading=!0,this.translateContentWrap(o.down.offset,o.down.bounceTime),this.events.downLoading&&this.events.downLoading())}},{key:"endDownLoading",value:function(){this.downLoading&&(this.translateContentWrap(0,this.options.down.bounceTime),this.downLoading=!1)}},{key:"triggerUpLoading",value:function(){this.upLoading=!0,this.events.upLoading&&this.events.upLoading()}},{key:"endUpLoading",value:function(o){this.upLoading&&(this.upLoading=!1,o?this.isFinishUp=!0:this._loadFull())}},{key:"resetUpLoading",value:function(){this.isFinishUp&&(this.isFinishUp=!1),this._loadFull(),this.events.resetUpLoading&&this.events.resetUpLoading()}},{key:"scrollTo",value:function(o,t){var n=this,s=this.scrollWrap,i=t||0,e=s.scrollHeight-a(s),r=o||0;r=Math.max(r,0),r=Math.min(r,e);var l=s.scrollTop-r;if(0!==l&&0!==i){var c=Math.floor(i/(1e3/60)),u=l/c,h=0;this.isScrollTo=!0,p(function o(){h<c?(h===c-1?s.scrollTop=r:s.scrollTop-=u,h+=1,p(o)):(s.scrollTop=r,n.isScrollTo=!1)})}else s.scrollTop=r}},{key:"on",value:function(o,t){o&&"function"==typeof t&&(this.events[o]=t)}},{key:"hook",value:function(o,t){o&&"function"==typeof t&&(this.hooks[o]=t)}}]),o}(),d=function(){function o(o,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}return function(t,n,s){return n&&o(t.prototype,n),s&&o(t,s),t}}(),f={down:{isLock:!1,isAuto:!1,isAllowAutoLoading:!0,isAways:!1,isScrollCssTranslate:!0,isAutoResetUpLoading:!0,offset:75,dampRateBegin:1,dampRate:.3,bounceTime:300,successAnim:{isEnable:!1,duration:300},onPull:null,onCalcel:null,callback:o},up:{isLock:!1,isAuto:!0,isShowUpLoading:!0,offset:100,loadFull:{isEnable:!0,delay:300},onScroll:null,callback:o},container:"#minirefresh",isLockX:!0,isScrollBar:!0,isUseBodyScroll:!1},w="minirefresh-hide-scrollbar",g=function(){function o(t){!function(t,n){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),function(o){this.os={};var t=o.match(/(Android);?[\s\/]+([\d.]+)?/);t&&(this.os.android=!0,this.os.version=t[2],this.os.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion));var n=o.match(/(iPhone\sOS)\s([\d_]+)/);n&&(this.os.ios=!0,this.os.iphone=!0,this.os.version=n[2].replace(/_/g,"."));var s=o.match(/(iPad).*OS\s([\d_]+)/);s&&(this.os.ios=!0,this.os.ipad=!0,this.os.version=s[2].replace(/_/g,"."));var i=o.match(/QuickHybrid/i);i&&(this.os.quick=!0);var e=o.match(/EpointEJS/i);e&&(this.os.ejs=!0);var r=o.match(/DingTalk/i);r&&(this.os.dd=!0),e||r||i||(this.os.h5=!0)}.call(this,navigator.userAgent),this.options=e(!0,{},f,t),this.container=r(this.options.container),this.contentWrap=this.container.children[0],this.scrollWrap=this.options.isUseBodyScroll?document.body:this.container,this.options.isScrollBar||this.container.classList.add(w),this._initHook&&this._initHook(this.options.down.isLock,this.options.up.isLock),this.scroller=new h(this),this._initEvent(),this.options.up.isLock&&this._lockUpLoading(this.options.up.isLock),this.options.down.isLock&&this._lockDownLoading(this.options.down.isLock)}return d(o,[{key:"_initEvent",value:function(){var o=this,t=this.options;this.scroller.on("initScroll",function(){o._initScrollHook&&o._initScrollHook()}),this.scroller.on("downLoading",function(n){!n&&o._downLoaingHook&&o._downLoaingHook(),t.down.callback&&t.down.callback()}),this.scroller.on("cancelLoading",function(){o._cancelLoaingHook&&o._cancelLoaingHook(),t.down.onCalcel&&t.down.onCalcel()}),this.scroller.on("pull",function(n,s){o._pullHook&&o._pullHook(n,s),t.down.onPull&&t.down.onPull(n,s)}),this.scroller.on("upLoading",function(){o._upLoaingHook&&o._upLoaingHook(o.options.up.isShowUpLoading),t.up.callback&&t.up.callback(o.options.up.isShowUpLoading)}),this.scroller.on("resetUpLoading",function(){o._resetUpLoadingHook&&o._resetUpLoadingHook()}),this.scroller.on("scroll",function(n){o._scrollHook&&o._scrollHook(n),t.up.onScroll&&t.up.onScroll(n)}),this.scroller.hook("beforeDownLoading",function(t,n){return!o._beforeDownLoadingHook||o._beforeDownLoadingHook(t,n)})}},{key:"_endDownLoading",value:function(o,t){var n=this;if(this.options.down&&this.scroller.downLoading){var s=this.options.down.successAnim.duration;this.options.down.successAnim.isEnable?this._downLoaingSuccessHook&&this._downLoaingSuccessHook(o,t):s=0,setTimeout(function(){n.scroller.endDownLoading(),n._downLoaingEndHook&&n._downLoaingEndHook(o)},s)}}},{key:"_lockUpLoading",value:function(o){this.options.up.isLock=o,this._lockUpLoadingHook&&this._lockUpLoadingHook(o)}},{key:"_lockDownLoading",value:function(o){this.options.down.isLock=o,this._lockDownLoadingHook&&this._lockDownLoadingHook(o)}},{key:"refreshOptions",value:function(o){this.options=e(!0,{},this.options,o),this.scroller.refreshOptions(this.options),this._lockUpLoading(this.options.up.isLock),this._lockDownLoading(this.options.down.isLock),this._refreshHook&&this._refreshHook()}},{key:"endDownLoading",value:function(){this._endDownLoading(!(arguments.length>0&&void 0!==arguments[0])||arguments[0],arguments[1]),this.options.down.isAutoResetUpLoading&&this.resetUpLoading()}},{key:"resetUpLoading",value:function(){this.scroller.resetUpLoading()}},{key:"endUpLoading",value:function(o){this.scroller.upLoading&&(this.scroller.endUpLoading(o),this._upLoaingEndHook&&this._upLoaingEndHook(o))}},{key:"triggerUpLoading",value:function(){this.scroller.triggerUpLoading()}},{key:"triggerDownLoading",value:function(){this.scroller.scrollTo(0),this.scroller.triggerDownLoading()}},{key:"scrollTo",value:function(o,t){this.scroller.scrollTo(o,t)}},{key:"getPosition",value:function(){return this.scrollWrap.scrollTop}}]),o}(),v={};Object.keys(c).forEach(function(o){v[o]=c[o]}),v.namespace=function(o,t){l(v,o,t)},v.Core=g,v.version="2.0.0",window.MiniRefreshTools=v;var L=function(){function o(o,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}return function(t,n,s){return n&&o(t.prototype,n),s&&o(t,s),t}}(),m=MiniRefreshTools.Core,k=MiniRefreshTools.version,y=MiniRefreshTools.extend,b=MiniRefreshTools.namespace,W="minirefresh-rotate",T="minirefresh-hidden",_={down:{successAnim:{isEnable:!1,duration:300},contentdown:"下拉刷新",contentover:"释放刷新",contentrefresh:"加载中...",contentsuccess:"刷新成功",contenterror:"刷新失败",isWrapCssTranslate:!1},up:{toTop:{isEnable:!0,duration:300,offset:800},contentdown:"",contentrefresh:"加载中...",contentnomore:"没有更多数据了"}},H=function(o){function t(o){!function(o,n){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this);var n=y(!0,{},_,o);return function(o,t){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?o:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}return function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t)}(t,m),L(t,[{key:"_initHook",value:function(){var o=this.container,t=this.contentWrap;o.classList.add("minirefresh-theme-default"),t.classList.add("minirefresh-hardware-speedup"),this.options.isUseBodyScroll&&(o.classList.add("body-scroll-wrap"),t.classList.add("body-scroll-wrap")),this._initDownWrap(),this._initUpWrap(),this._initToTop()}},{key:"_refreshHook",value:function(){this.options.down.isWrapCssTranslate?this._transformDownWrap(-this.downWrapHeight):this._transformDownWrap(0,0,!0),this.options.up.toTop.isEnable||(this.toTopBtn&&this.toTopBtn.classList.add(T),this.isShowToTopBtn=!1)}},{key:"_initDownWrap",value:function(){var o=this.container,n=this.contentWrap,s=this.options,i=document.createElement("div");i.className="minirefresh-downwrap minirefresh-hardware-speedup",i.innerHTML=' \n            <div class="downwrap-content">\n                <p class="downwrap-progress"></p>\n                <p class="downwrap-tips">'+s.down.contentdown+"</p>\n            </div>\n        ",o.insertBefore(i,n),this.downWrap=i,this.downWrapProgress=this.downWrap.querySelector(".downwrap-progress"),this.downWrapTips=this.downWrap.querySelector(".downwrap-tips"),this.isCanPullDown=!1,this.downWrapHeight=i.offsetHeight||75,this._transformDownWrap(-this.downWrapHeight),t._changeWrapStatusClass(this.downWrap,"status-default")}},{key:"_transformDownWrap",value:function(){if(arguments[2]||this.options.down.isWrapCssTranslate){var o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+"ms",t="translateY("+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+"px)  translateZ(0px)";this.downWrap.style.webkitTransitionDuration=o,this.downWrap.style.transitionDuration=o,this.downWrap.style.webkitTransform=t,this.downWrap.style.transform=t}}},{key:"_initUpWrap",value:function(){var o=this.contentWrap,n=this.options,s=document.createElement("div");s.className="minirefresh-upwrap minirefresh-hardware-speedup",s.innerHTML=' \n            <p class="upwrap-progress"></p>\n            <p class="upwrap-tips">'+n.up.contentdown+"</p>\n        ",s.style.visibility="hidden",o.appendChild(s),this.upWrap=s,this.upWrapProgress=this.upWrap.querySelector(".upwrap-progress"),this.upWrapTips=this.upWrap.querySelector(".upwrap-tips"),t._changeWrapStatusClass(this.upWrap,"status-default")}},{key:"_initToTop",value:function(){var o=this,t=this.options,n=t.up.toTop.duration;if(t.up.toTop.isEnable){var s=document.createElement("div");s.className="minirefresh-totop minirefresh-theme-default",s.onclick=function(){o.scroller.scrollTo(0,n)},s.classList.add(T),this.toTopBtn=s,this.isShowToTopBtn=!1,this.container.appendChild(s)}}},{key:"_pullHook",value:function(o,n){var s=this.options;if(o<n?this.isCanPullDown&&(this.isCanPullDown=!1,t._changeWrapStatusClass(this.downWrap,"status-default"),this.downWrapTips.innerText=s.down.contentdown):this.isCanPullDown||(this.downWrapTips.innerText=s.down.contentover,this.isCanPullDown=!0,t._changeWrapStatusClass(this.downWrap,"status-pull")),this.downWrapProgress){var i="rotate("+360*(o/n)+"deg)";this.downWrapProgress.style.webkitTransform=i,this.downWrapProgress.style.transform=i}this._transformDownWrap(-this.downWrapHeight+o)}},{key:"_scrollHook",value:function(o){var t=this.options,n=this.toTopBtn;t.up.toTop.isEnable&&n&&(o>=t.up.toTop.offset?this.isShowToTopBtn||(n.classList.remove("minirefresh-fade-out"),n.classList.remove(T),n.classList.add("minirefresh-fade-in"),this.isShowToTopBtn=!0):this.isShowToTopBtn&&(n.classList.add("minirefresh-fade-out"),n.classList.remove("minirefresh-fade-in"),this.isShowToTopBtn=!1))}},{key:"_downLoaingHook",value:function(){this._transformDownWrap(-this.downWrapHeight+this.options.down.offset,this.options.down.bounceTime),this.downWrapTips.innerText=this.options.down.contentrefresh,this.downWrapProgress.classList.add(W),t._changeWrapStatusClass(this.downWrap,"status-loading")}},{key:"_downLoaingSuccessHook",value:function(o,n){this.options.down.contentsuccess=n||this.options.down.contentsuccess,this.downWrapTips.innerText=o?this.options.down.contentsuccess:this.options.down.contenterror,this.downWrapProgress.classList.remove(W),this.downWrapProgress.classList.add("minirefresh-fade-out"),this.downWrapProgress.classList.add(o?"downwrap-success":"downwrap-error"),t._changeWrapStatusClass(this.downWrap,o?"status-success":"status-error")}},{key:"_downLoaingEndHook",value:function(o){this.downWrapTips.innerText=this.options.down.contentdown,this.downWrapProgress.classList.remove(W),this.downWrapProgress.classList.remove("minirefresh-fade-out"),this.downWrapProgress.classList.remove(o?"downwrap-success":"downwrap-error"),this.isCanPullDown=!1,this._transformDownWrap(-this.downWrapHeight,this.options.down.bounceTime),t._changeWrapStatusClass(this.downWrap,"status-default")}},{key:"_cancelLoaingHook",value:function(){this._transformDownWrap(-this.downWrapHeight,this.options.down.bounceTime),t._changeWrapStatusClass(this.downWrap,"status-default")}},{key:"_upLoaingHook",value:function(o){o?(this.upWrapTips.innerText=this.options.up.contentrefresh,this.upWrapProgress.classList.add(W),this.upWrapProgress.classList.remove(T),this.upWrap.style.visibility="visible"):this.upWrap.style.visibility="hidden",t._changeWrapStatusClass(this.upWrap,"status-loading")}},{key:"_upLoaingEndHook",value:function(o){o?(this.upWrapTips.innerText=this.options.up.contentnomore,t._changeWrapStatusClass(this.upWrap,"status-nomore")):(this.upWrapTips.innerText=this.options.up.contentdown,t._changeWrapStatusClass(this.upWrap,"status-default")),this.upWrapProgress.classList.remove(W),this.upWrapProgress.classList.add(T)}},{key:"_resetUpLoadingHook",value:function(){this.upWrapTips.innerText=this.options.up.contentdown,this.upWrapProgress.classList.remove(W),this.upWrapProgress.classList.add(T),t._changeWrapStatusClass(this.upWrap,"status-default")}},{key:"_lockUpLoadingHook",value:function(o){this.upWrap.style.visibility=o?"hidden":"visible"}},{key:"_lockDownLoadingHook",value:function(o){this.downWrap.style.visibility=o?"hidden":"visible"}}],[{key:"_changeWrapStatusClass",value:function(o,t){o.classList.remove("status-nomore"),o.classList.remove("status-default"),o.classList.remove("status-pull"),o.classList.remove("status-loading"),o.classList.remove("status-success"),o.classList.remove("status-error"),o.classList.add(t)}}]),t}();return H.sign="default",H.version=k,b("theme.defaults",H),window.MiniRefresh=H,v}()}(t={exports:{}}),t.exports);class s{constructor(){this.lockRefresh=!1,this.lockScrollLoad=!1,this.autoScrollLoad=!1,this.offset=60,this.refreshOptions={},this.scrollLoadOptions={}}async getRefresh(){return this.MiniRefresh}componentDidLoad(){const o=this.el.shadowRoot.querySelector(".minirefresh-wrap"),t=n.theme.defaults,s=Object.assign({isWrapCssTranslate:!1,contentdown:"下拉刷新",contentover:"释放刷新",contentrefresh:"加载中...",contentsuccess:"刷新成功",contenterror:"刷新失败"},this.refreshOptions),i=Object.assign({contentdown:"上拉显示更多",contentrefresh:"加载中...",contentnomore:"没有更多了",toTop:{isEnable:!1,duration:300,offset:800}},this.scrollLoadOptions);this.MiniRefresh=new t({container:o,down:Object.assign({isLock:this.lockRefresh,offset:this.offset,callback:async()=>{const o=await this.getRefresh();this.refresh.emit({finish:o.endDownLoading.bind(o)})}},s),up:Object.assign({isLock:this.lockScrollLoad,isAuto:this.autoScrollLoad,offset:this.offset,callback:async()=>{const o=await this.getRefresh();this.scrollLoad.emit({noMore:o.endUpLoading.bind(o)})}},i)})}render(){return o("div",{class:"minirefresh-wrap"},o("div",{class:"minirefresh-scroll"},o("slot",null)))}static get is(){return"nb-refresh"}static get encapsulation(){return"shadow"}static get properties(){return{autoScrollLoad:{type:Boolean,attr:"auto-scroll-load"},el:{elementRef:!0},getRefresh:{method:!0},lockRefresh:{type:Boolean,attr:"lock-refresh"},lockScrollLoad:{type:Boolean,attr:"lock-scroll-load"},offset:{type:Number,attr:"offset"},refreshOptions:{type:"Any",attr:"refresh-options"},scrollLoadOptions:{type:"Any",attr:"scroll-load-options"}}}static get events(){return[{name:"refresh",method:"refresh",bubbles:!0,cancelable:!0,composed:!0},{name:"scrollLoad",method:"scrollLoad",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".minirefresh-wrap.sc-nb-refresh{position:absolute;top:0;bottom:0;left:0;width:100%;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;z-index:1}.minirefresh-scroll.sc-nb-refresh{position:relative;background:#fff}.body-scroll-wrap.sc-nb-refresh{position:relative}.minirefresh-hardware-speedup.sc-nb-refresh{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0)}.minirefresh-hidden.sc-nb-refresh{display:none!important}.minirefresh-wrap.sc-nb-refresh::-webkit-scrollbar-track{background-color:transparent}.minirefresh-wrap.sc-nb-refresh::-webkit-scrollbar{width:6px}.minirefresh-hide-scrollbar.sc-nb-refresh::-webkit-scrollbar{width:0}.minirefresh-wrap.sc-nb-refresh::-webkit-scrollbar-thumb{border-radius:6px;background-color:#ccc}.minirefresh-wrap.sc-nb-refresh::-webkit-scrollbar-thumb:hover{background-color:#aaa}.minirefresh-rotate.sc-nb-refresh{-webkit-animation:minirefresh-rotate .6s linear infinite;animation:minirefresh-rotate .6s linear infinite}.minirefresh-fade-in.sc-nb-refresh{-webkit-animation:minirefresh-fade-in .5s linear forwards;animation:minirefresh-fade-in .5s linear forwards}.minirefresh-fade-out.sc-nb-refresh{pointer-events:none;-webkit-animation:minirefresh-fade-out .5s linear forwards;animation:minirefresh-fade-out .5s linear forwards}.minirefresh-totop.sc-nb-refresh{position:fixed;z-index:9990;right:10px;bottom:30px;width:36px;height:36px;border-radius:50%;background-image:url(images/minirefresh-totop.png);background-size:100% 100%}\@-moz-keyframes minirefresh-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes minirefresh-fade-in{0%{opacity:0}to{opacity:1}}\@-o-keyframes minirefresh-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes minirefresh-fade-in{0%{opacity:0}to{opacity:1}}\@-moz-keyframes minirefresh-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes minirefresh-fade-out{0%{opacity:1}to{opacity:0}}\@-o-keyframes minirefresh-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes minirefresh-fade-out{0%{opacity:1}to{opacity:0}}\@-moz-keyframes minirefresh-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-moz-transform:rotate(1turn)}}\@-webkit-keyframes minirefresh-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-moz-transform:rotate(1turn)}}\@-o-keyframes minirefresh-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-moz-transform:rotate(1turn)}}\@keyframes minirefresh-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-moz-transform:rotate(1turn)}}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh{position:absolute;top:0;left:0;width:100%;height:75px}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-upwrap.sc-nb-refresh{min-height:30px;padding:15px 0;text-align:center}.minirefresh-theme-default.sc-nb-refresh   .downwrap-content.sc-nb-refresh{width:100%;padding:10px 0;text-align:center}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-progress.sc-nb-refresh, .minirefresh-theme-default.sc-nb-refresh   .minirefresh-upwrap.sc-nb-refresh   .upwrap-progress.sc-nb-refresh{width:16px;height:16px;border:1px solid grey;margin-right:8px}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-error.sc-nb-refresh, .minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-success.sc-nb-refresh{display:none}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-tips.sc-nb-refresh, .minirefresh-theme-default.sc-nb-refresh   .minirefresh-upwrap.sc-nb-refresh   .upwrap-tips.sc-nb-refresh{font-size:12px;color:grey}.minirefresh-theme-default.sc-nb-refresh   .status-nomore.sc-nb-refresh   .upwrap-tips.sc-nb-refresh{padding:15px 0}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-progress.sc-nb-refresh, .minirefresh-theme-default.sc-nb-refresh   .minirefresh-upwrap.sc-nb-refresh   .upwrap-progress.sc-nb-refresh{display:inline-block;width:.32rem;height:.32rem;border-radius:50%;border:1px solid #ccc;margin-right:.10666666666666667rem;border-bottom-color:transparent;vertical-align:middle}.minirefresh-theme-default.sc-nb-refresh   .minirefresh-downwrap.sc-nb-refresh   .downwrap-tips.sc-nb-refresh, .minirefresh-theme-default.sc-nb-refresh   .minirefresh-upwrap.sc-nb-refresh   .upwrap-tips.sc-nb-refresh{display:inline-block;font-size:.32rem;color:#ccc;vertical-align:middle}"}}export{s as NbRefresh};