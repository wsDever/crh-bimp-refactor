export class LimitTextara {
    constructor() {
        this.limit = 120;
        this.placeholder = '请输入内容';
        this.height = 160;
        this.text = '';
    }
    onTextChange(newText) {
        const text = newText.trim();
        if (text.length > this.limit) {
            this.text = text.slice(0, this.limit);
            this.textarea.value = this.text;
        }
        else
            this.text = text;
    }
    async getContent() {
        return this.text;
    }
    onInput(ev) {
        this.text = ev.target.value.trim();
    }
    get textLength() {
        return this.text.length;
    }
    get heightRem() {
        return `${(this.height / 75)}rem`;
    }
    componentDidLoad() {
        this.text = this.el.innerHTML.trim();
        this.ready.emit({
            textarea: this.textarea
        });
    }
    render() {
        return (h("div", { class: "textarea" },
            h("textarea", { style: {
                    height: this.heightRem
                }, placeholder: this.placeholder, ref: el => (this.textarea = el), onInput: this.onInput.bind(this) }, this.text),
            h("span", { class: "counter" },
                this.textLength,
                "/",
                this.limit)));
    }
    static get is() { return "nb-limit-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "getContent": {
            "method": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "limit": {
            "type": Number,
            "attr": "limit"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "text": {
            "state": true,
            "watchCallbacks": ["onTextChange"]
        }
    }; }
    static get events() { return [{
            "name": "ready",
            "method": "ready",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-limit-textarea:**/"; }
}
