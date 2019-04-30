export class Modal {
    constructor() {
        this.visible = false;
        this.type = 'alert';
        this.position = 'center';
        this.theme = 'default';
        this.transition = '';
        this.headTitle = '';
        this.okText = '确定';
        this.onOk = () => this.close();
        this.noText = '取消';
        this.onNo = () => this.close();
        this.scrollTop = 0;
        this.originStyles = '';
    }
    onVisibleChange(newValue) {
        this.visible = newValue;
        if (newValue) {
            this.transition = 'enter';
            this.originStyles = document.body.getAttribute('style') || '';
            this.scrollTop = this.getScrollTop();
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = -this.scrollTop + 'px';
            document.body.style.bottom = '0px';
        }
        else {
            this.transition = 'leave';
            document.body.setAttribute('style', this.originStyles);
            document.body.scrollTop = document.documentElement.scrollTop =
                this.scrollTop || 0;
        }
    }
    async show(type, opts = {}) {
        const options = Object.assign({ title: '', content: '', okText: this.okText, onOk: this.onOk }, opts);
        if (this.visible)
            this.visible = false;
        this.type = type;
        this.headTitle = options.title;
        this.okText = options.okText;
        this.onOk = options.onOk;
        this.el.innerHTML = options.content;
        this.visible = true;
        return this.close.bind(this);
    }
    getScrollTop() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }
    close() {
        this.visible = false;
    }
    get styleName() {
        return `${this.theme} ${this.position} ${this.transition}`;
    }
    componentDidLoad() {
        this.onVisibleChange(this.visible);
    }
    render() {
        return [
            h("div", { class: `modal ${this.styleName}` },
                h("div", { class: "wrapper" },
                    h("div", { class: "box" },
                        h("div", { class: "title" }, this.headTitle),
                        h("div", { class: "content" },
                            h("slot", null)),
                        h("div", { class: "buttons" },
                            this.type === 'confirm' && (h("button", { class: "cancel", onClick: this.onNo.bind(this) }, this.noText)),
                            h("button", { class: "ok", onClick: this.onOk.bind(this) }, this.okText))))),
            this.visible && h("div", { class: "mask" })
        ];
    }
    static get is() { return "nb-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "headTitle": {
            "type": String,
            "attr": "head-title",
            "mutable": true
        },
        "noText": {
            "type": String,
            "attr": "no-text",
            "mutable": true
        },
        "okText": {
            "type": String,
            "attr": "ok-text",
            "mutable": true
        },
        "onNo": {
            "type": "Any",
            "attr": "on-no",
            "mutable": true
        },
        "onOk": {
            "type": "Any",
            "attr": "on-ok",
            "mutable": true
        },
        "position": {
            "type": String,
            "attr": "position",
            "mutable": true
        },
        "show": {
            "method": true
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "transition": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["onVisibleChange"]
        }
    }; }
    static get style() { return "/**style-placeholder:nb-modal:**/"; }
}
