import{h}from"../nb-component.core.js";var Marquee=function(){function e(){var e=this;this.styleId="tow-row-66h",this.items=[],this.speed=3e3,this.rollupClassName="",this.rollup=function(){e.items.push(e.items.slice(0,1)[0]),e.rollupClassName="fadeOut",setTimeout(function(){e.items.splice(0,1),e.rollupClassName=""},180)}}return e.prototype.render=function(){var e=this;return h("div",{class:"marquee "+this.styleId},this.items.map(function(t,r){return h("a",{href:t.link,class:"item "+(0===r?e.rollupClassName:"")+" l-"+e.items.length},"tow-row-66h"===e.styleId&&[h("div",{class:"text"},t.text),h("div",{class:"time"},t.time)])}))},e.prototype.componentDidLoad=function(){"tow-row-66h"==this.styleId&&this.items.length>2&&(this.timer=setInterval(this.rollup,this.speed))},e.prototype.componentDidUnload=function(){clearInterval(this.timer)},Object.defineProperty(e,"is",{get:function(){return"nb-marquee"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{items:{type:"Any",attr:"items",mutable:!0},rollupClassName:{state:!0},speed:{type:Number,attr:"speed"},styleId:{type:String,attr:"style-id"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".marquee.tow-row-66h{height:.88rem;overflow:hidden;font-size:.32rem;line-height:1}.marquee.tow-row-66h .item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:.44rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s;transition:all .2s;text-decoration:none;overflow:hidden}.marquee.tow-row-66h .item.l-1{margin-top:.24rem}.marquee.tow-row-66h .item .text{width:5.6rem;height:.44rem;color:#595959;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-height:.44rem;overflow:hidden}.marquee.tow-row-66h .item .time{color:#8c8c8c}.marquee.tow-row-66h .item.fadeOut{-webkit-animation:fadeout .2s;animation:fadeout .2s}\@-webkit-keyframes fadeout{0%{height:.4266666666666667rem;opacity:1;margin-bottom:.10666666666666667rem}to{height:0;margin-bottom:0;opacity:0}}\@keyframes fadeout{0%{height:.4266666666666667rem;opacity:1;margin-bottom:.10666666666666667rem}to{height:0;margin-bottom:0;opacity:0}}"},enumerable:!0,configurable:!0}),e}();export{Marquee as NbMarquee};