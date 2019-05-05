import{h}from"../nb-component.core.js";var HeaderNav=function(){function e(){this.styles={},this.line=!1,this.titlePosition="center",this.space=30,this.fixed=99,this.visible=!0}return Object.defineProperty(e.prototype,"containerStyles",{get:function(){return Object.assign({},{height:88,background:"#ffffff",color:"#272727"},this.styles,{padding:"0 "+this.space/75+"rem",width:(750-2*this.space)/75+"rem",height:(this.styles.height||88)/75+"rem",position:this.fixed>0?"fixed":"relative",zIndex:this.fixed})},enumerable:!0,configurable:!0}),e.prototype.handleClick=function(e){this.tap.emit({position:e})},e.prototype.render=function(){return h("div",{class:"header",style:Object.assign({},this.containerStyles)},"center"===this.titlePosition&&h("div",{class:"left",onClick:this.handleClick.bind(this,"left")},h("slot",{name:"left"})),h("div",{class:"title"},h("slot",{name:"title"})),h("div",{class:"right",onClick:this.handleClick.bind(this,"right")},h("slot",{name:"right"})))},Object.defineProperty(e,"is",{get:function(){return"nb-header-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{fixed:{type:Number,attr:"fixed"},line:{type:Boolean,attr:"line"},space:{type:Number,attr:"space"},styles:{type:"Any",attr:"styles"},titlePosition:{type:String,attr:"title-position"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"tap",method:"tap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:.48rem}"},enumerable:!0,configurable:!0}),e}();export{HeaderNav as NbHeaderNav};