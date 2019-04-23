import { h } from '../nb-component.core.js';

class Affix {
    constructor() {
        this.zIndex = 2;
        this.handleFix = () => {
            const rectTop = this.el.getBoundingClientRect().top;
            const parentTop = this.target.getBoundingClientRect().top;
            if (this.offset >= 0) {
                this.fixed = (rectTop - parentTop) <= this.offset;
            }
        };
    }
    async getStartFixedScrollTop() {
        return this.startFixedScrollTop;
    }
    onCurrentPageChange(isFixed) {
        if (isFixed) {
            this.startFixedScrollTop = this.target.scrollTop;
        }
        this.change.emit({
            isFixed
        });
    }
    async isFixed() {
        return this.fixed;
    }
    get fixedTop() {
        if (!this.target) {
            return this.el.getBoundingClientRect().top;
        }
        return this.target.getBoundingClientRect().top + this.offset;
    }
    componentDidLoad() {
        try {
            setTimeout(() => {
                this.target = this.relativeSelector ? document.querySelector(this.relativeSelector) : document.body;
                this.target.addEventListener('scroll', this.handleFix, false);
            }, 10);
        }
        catch (e) {
            throw new TypeError(e);
        }
    }
    componentDidUnload() {
        this.target && this.target.removeEventListener('scroll', this.handleFix, false);
    }
    render() {
        return (h("div", { style: {
                position: this.fixed ? `fixed` : 'relative',
                top: this.fixed ? `${this.fixedTop}px` : 'auto',
                zIndex: String(this.zIndex),
            } },
            h("slot", null)));
    }
    static get is() { return "nb-affix"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "fixed": {
            "state": true,
            "watchCallbacks": ["onCurrentPageChange"]
        },
        "getStartFixedScrollTop": {
            "method": true
        },
        "isFixed": {
            "method": true
        },
        "offset": {
            "type": Number,
            "attr": "offset"
        },
        "relativeSelector": {
            "type": String,
            "attr": "relative-selector"
        },
        "zIndex": {
            "type": Number,
            "attr": "z-index"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}

export { Affix as NbAffix };
