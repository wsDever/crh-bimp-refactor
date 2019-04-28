import { h } from '../nb-component.core.js';

class ListItem {
    constructor() {
        this.border = 1;
        this.color = '#f5f5f5';
        this.height = 88;
        this.sideSpace = 30;
        this.slide = false;
        this.slideIn = false;
    }
    px2rem(px) {
        return px == 0 ? 'auto' : px / 75;
    }
    isShort(side) {
        return this.short === side || this.short === 'both';
    }
    onTouchStart(ev) {
        if (!this.slide)
            return;
        this.itemEl.style.transition = `none`;
        this.startPageX = ev.touches[0].pageX;
    }
    onTouchMove(ev) {
        if (!this.slide)
            return;
        const touchLength = this.startPageX - this.movePageX;
        this.movePageX = ev.touches[0].pageX;
        if (Math.abs(touchLength) < this.slideEl.clientWidth) {
            const moveOffset = (this.slideIn ? -this.slideEl.clientWidth : 0) - touchLength;
            if (touchLength > 0 && this.slideIn)
                return;
            if (touchLength < 0 && !this.slideIn)
                return;
            this.itemEl.style.transform = `translateX(${moveOffset}px)`;
        }
    }
    onTouchEnd() {
        if (!this.slide)
            return;
        const offsetX = Number(this.itemEl.style.transform.match(/\((.+)px\)/)[1]);
        this.slideIn = offsetX < -(Number(this.slideEl.clientWidth) / 2);
        this.itemEl.style.transition = `transform 0.3s`;
        if (this.slideIn) {
            this.itemEl.style.transform = `translateX(${-this.slideEl.clientWidth}px)`;
        }
        else {
            this.itemEl.style.transform = `translateX(0)`;
        }
    }
    render() {
        return (h("div", { class: "item-wrapper" },
            h("div", { class: `item`, ref: ev => {
                    this.itemEl = ev;
                }, style: {
                    paddingLeft: `${this.isShort('left') === false
                        ? `${this.px2rem(this.sideSpace)}rem`
                        : '0'}`,
                    paddingRight: `${this.isShort('right') === false
                        ? `${this.px2rem(this.sideSpace)}rem`
                        : '0'}`,
                    height: `${this.px2rem(this.height)}rem`,
                    borderBottom: `${this.border > 0 ? `${this.border}px` : '0'} solid ${this.color}`,
                    marginLeft: `${this.isShort('left') ? this.px2rem(this.sideSpace) + 'rem' : '0'}`,
                    marginRight: `${this.isShort('right') ? this.px2rem(this.sideSpace) + 'rem' : '0'}`
                }, onTouchStart: this.onTouchStart.bind(this), onTouchMove: this.onTouchMove.bind(this), onTouchEnd: this.onTouchEnd.bind(this) },
                h("slot", null),
                this.slide && (h("div", { class: "slide", ref: ev => {
                        this.slideEl = ev;
                    } },
                    h("slot", { name: "slide" }))))));
    }
    static get is() { return "nb-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "border": {
            "type": Number,
            "attr": "border"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "short": {
            "type": String,
            "attr": "short"
        },
        "sideSpace": {
            "type": Number,
            "attr": "side-space"
        },
        "slide": {
            "type": Boolean,
            "attr": "slide"
        },
        "slideIn": {
            "state": true
        }
    }; }
    static get style() { return ".item-wrapper.sc-nb-list-item{position:relative;overflow:hidden}.item.sc-nb-list-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.item.left.sc-nb-list-item{padding-left:0}.item.right.sc-nb-list-item{padding-right:0}.item.both.sc-nb-list-item{margin:0 $sideSpace;padding:0}.item.sc-nb-list-item   .slide.sc-nb-list-item{position:absolute;right:0;top:0;bottom:0;-webkit-transform:translateX(100%);transform:translateX(100%)}"; }
}

export { ListItem as NbListItem };
