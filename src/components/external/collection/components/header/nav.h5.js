export class HeaderNav {
    constructor() {
        this.styles = {};
        this.line = false;
        this.titlePosition = 'center';
        this.space = 30;
        this.fixed = 99;
        this.visible = true;
    }
    get containerStyles() {
        const defaultStyles = {
            height: 88,
            background: '#ffffff',
            color: '#272727'
        };
        const height = `${(this.styles.height || 88) / 75}rem`;
        const width = `${(750 - this.space * 2) / 75}rem`;
        const padding = `0 ${this.space / 75}rem`;
        const position = this.fixed > 0 ? 'fixed' : 'relative';
        const zIndex = this.fixed;
        return Object.assign({}, defaultStyles, this.styles, { padding,
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
    static get style() { return "/**style-placeholder:nb-header-nav:**/"; }
}
