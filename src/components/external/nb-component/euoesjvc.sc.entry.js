const t=window.NbComponent.h;class e{constructor(){this.styles={},this.line=!1,this.titlePosition="center",this.space=30,this.fixed=99,this.visible=!0}get containerStyles(){return Object.assign({},{height:88,background:"#ffffff",color:"#272727"},this.styles,{padding:`0 ${this.space/75}rem`,width:`${(750-2*this.space)/75}rem`,height:`${(this.styles.height||88)/75}rem`,position:this.fixed>0?"fixed":"relative",zIndex:this.fixed})}handleClick(t){this.tap.emit({position:t})}render(){return t("div",{class:"header",style:Object.assign({},this.containerStyles)},"center"===this.titlePosition&&t("div",{class:"left",onClick:this.handleClick.bind(this,"left")},t("slot",{name:"left"})),t("div",{class:`title ${this.titlePosition}`},t("slot",{name:"title"})),t("div",{class:"right",onClick:this.handleClick.bind(this,"right")},t("slot",{name:"right"})))}static get is(){return"nb-header-nav"}static get encapsulation(){return"shadow"}static get properties(){return{fixed:{type:Number,attr:"fixed"},line:{type:Boolean,attr:"line"},space:{type:Number,attr:"space"},styles:{type:"Any",attr:"styles"},titlePosition:{type:String,attr:"title-position"},visible:{type:Boolean,attr:"visible"}}}static get events(){return[{name:"tap",method:"tap",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".header.sc-nb-header-nav{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:.48rem}.header.sc-nb-header-nav, .header.sc-nb-header-nav   .title.center.sc-nb-header-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.header.sc-nb-header-nav   .title.center.sc-nb-header-nav{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:1.6rem;right:1.6rem;top:0;bottom:0;pointer-events:none}"}}export{e as NbHeaderNav};