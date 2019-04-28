var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function s(t){try{a(o.next(t))}catch(t){r(t)}}function l(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,l)}a((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};NbComponent.loadBundle("p7fmnwvw",["exports"],function(t){var e=window.NbComponent.h,n=function(){function t(){this.visible=!1,this.position="center",this.duration=2e3,this.maxLength=480,this.theme="default",this.transition="",this.scrollTop=0,this.originStyles=""}return t.prototype.show=function(t){return void 0===t&&(t=""),__awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return""!==t&&(this.el.innerHTML=t),this.visible=!0,this.onShowToast(),[2,this.close.bind(this)]})})},t.prototype.onVisibleChange=function(t,e){t&&!1===e&&this.onShowToast(),t?(this.originStyles=document.body.getAttribute("style")||"",this.scrollTop=this.getScrollTop(),document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=-this.scrollTop+"px",document.body.style.bottom="0px"):(document.body.setAttribute("style",this.originStyles),document.body.scrollTop=document.documentElement.scrollTop=this.scrollTop||0)},t.prototype.close=function(){this.transition="leave",this.visible=!1},t.prototype.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},t.prototype.onShowToast=function(){var t=this;this.timer&&clearTimeout(this.timer),this.transition="enter",0!==this.duration&&(this.timer=setTimeout(function(){t.close()},this.duration))},Object.defineProperty(t.prototype,"styleName",{get:function(){return this.theme+" "+this.position+" "+this.transition},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxWidth",{get:function(){return this.maxLength/75+"rem"},enumerable:!0,configurable:!0}),t.prototype.render=function(){return[e("div",{class:"toast "+this.styleName},e("div",{class:"wrapper"},e("div",{class:"message",style:{maxWidth:this.maxWidth}},e("slot",null))))]},Object.defineProperty(t,"is",{get:function(){return"nb-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{duration:{type:Number,attr:"duration"},el:{elementRef:!0},maxLength:{type:Number,attr:"max-length"},position:{type:String,attr:"position"},show:{method:!0},theme:{type:String,attr:"theme"},transition:{state:!0},visible:{type:Boolean,attr:"visible",reflectToAttr:!0,mutable:!0,watchCallbacks:["onVisibleChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".toast.sc-nb-toast{position:absolute;top:0;left:0;height:100vh;width:100vw;z-index:-1}.toast.sc-nb-toast   .wrapper.sc-nb-toast{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.toast.sc-nb-toast   .message.sc-nb-toast{min-width:2.666666666666667rem;background:rgba(0,0,0,.75);-webkit-box-shadow:0 0 .10666666666666667rem 0 rgba(0,0,0,.1);box-shadow:0 0 .10666666666666667rem 0 rgba(0,0,0,.1);color:hsla(0,0%,100%,.75);font-size:.4rem;border-radius:.10666666666666667rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.26666666666666666rem .4rem;line-height:.64rem;word-break:break-all;opacity:0;-webkit-transition:all .3s;transition:all .3s}.toast.center.sc-nb-toast   .message.sc-nb-toast{text-align:center;position:fixed;top:49%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin:0 auto}.toast.enter.sc-nb-toast{z-index:999}.toast.enter.sc-nb-toast   .message.sc-nb-toast{top:50%;opacity:1}.toast.leave.sc-nb-toast{z-index:-1}.toast.leave.sc-nb-toast   .message.sc-nb-toast{top:49%;opacity:0}"},enumerable:!0,configurable:!0}),t}();t.NbToast=n,Object.defineProperty(t,"__esModule",{value:!0})});