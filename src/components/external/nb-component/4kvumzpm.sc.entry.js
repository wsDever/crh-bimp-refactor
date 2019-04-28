const e=window.NbComponent.h;class t{constructor(){this.keywords=["A","B"],this.idPrefix="vscroll-",this.scroller=null}async scrollToId(e){const t=this.el.querySelector(`#${e}`);if(!t)return!1;const s=t.offsetTop;if(this.scroller){const e=document.querySelector(this.scroller);if(!e)return!1;e.scrollTop=s}else window.scrollTo(0,s);return this.scrollTo.emit({y:s}),s}onNavClick(e){const t=e.target.innerText;~this.keywords.indexOf(t)&&this.scrollToId(`${this.idPrefix}${t}`)}onNavMove(e){const t=e.changedTouches[0],s=this.el.shadowRoot.elementFromPoint(t.clientX,t.clientY),o=s?s.innerHTML:"";~this.keywords.indexOf(o)&&this.scrollToId(`${this.idPrefix}${o}`)}render(){return e("div",{class:"vscroll-nav"},e("div",{class:"list"},e("slot",null)),e("ul",{class:"nav",onClick:this.onNavClick.bind(this),onTouchMove:this.onNavMove.bind(this)},this.keywords.map(t=>e("li",{key:t},t))))}static get is(){return"nb-vscroll-nav"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},idPrefix:{type:String,attr:"id-prefix"},keywords:{type:"Any",attr:"keywords"},scroller:{type:String,attr:"scroller"},scrollToId:{method:!0}}}static get events(){return[{name:"scrollTo",method:"scrollTo",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".vscroll-nav.sc-nb-vscroll-nav   .nav.sc-nb-vscroll-nav{list-style:none;position:fixed;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:.24rem;color:#8c8c8c;font-size:.32rem;line-height:.3466666666666667rem;z-index:99}"}}export{t as NbVscrollNav};