import { h } from '../nb-component.core.js';

class HeaderNav {
    constructor() {
        this.styles = {
            height: 88,
            background: '#ffffff',
            color: '#272727'
        };
        this.line = false;
        this.titlePosition = 'center';
        this.space = 30;
        this.fixed = 99;
        this.visible = true;
    }
    get containerStyles() {
        const height = `${(this.styles.height || 88) / 75}rem`;
        const width = `${(750 - this.space * 2) / 75}rem`;
        const padding = `0 ${this.space / 75}rem`;
        const position = this.fixed > 0 ? 'fixed' : 'relative';
        const zIndex = this.fixed;
        return Object.assign({}, this.styles, { padding,
            width,
            height,
            position,
            zIndex });
    }
    handleClick(position) {
        this.tap.emit({
            position
        });
    }
    render() {
        return (h("div", { class: "header", style: Object.assign({}, this.containerStyles) },
            this.titlePosition === 'center' && (h("div", { class: "left", onClick: this.handleClick.bind(this, 'left') },
                h("slot", { name: "left" }))),
            h("div", { class: "title" },
                h("slot", { name: "title" })),
            h("div", { class: "right", onClick: this.handleClick.bind(this, 'right') },
                h("slot", { name: "right" }))));
    }
    static get is() { return "nb-header-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "fixed": {
            "type": Number,
            "attr": "fixed"
        },
        "line": {
            "type": Boolean,
            "attr": "line"
        },
        "space": {
            "type": Number,
            "attr": "space"
        },
        "styles": {
            "type": "Any",
            "attr": "styles"
        },
        "titlePosition": {
            "type": String,
            "attr": "title-position"
        },
        "visible": {
            "type": Boolean,
            "attr": "visible"
        }
    }; }
    static get events() { return [{
            "name": "tap",
            "method": "tap",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:.48rem}"; }
}

export { HeaderNav as NbHeaderNav };
