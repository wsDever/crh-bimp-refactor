const ICONS = {
    qingchu: `<svg class="icon icon-qingchu" viewBox="0 0 1024 1024"><path d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z m45.248-384l90.528-90.496a32 32 0 0 0-45.28-45.28L512 466.752l-90.496-90.528a32 32 0 0 0-45.28 45.28L466.752 512l-90.528 90.496a32 32 0 0 0 45.28 45.28L512 557.248l90.496 90.528a32 32 0 0 0 45.28-45.28L557.248 512z"  ></path></svg>`,
    sousuo: `<svg class="icon icon-sousuo" viewBox="0 0 1024 1024"><path d="M718.496 673.28l190.816 190.784a32 32 0 1 1-45.248 45.248l-190.816-190.816A350.56 350.56 0 0 1 448 800C253.6 800 96 642.4 96 448S253.6 96 448 96s352 157.6 352 352c0 85.664-30.624 164.224-81.504 225.28zM448 736a288 288 0 1 0 0-576 288 288 0 0 0 0 576z"  ></path></svg>`
};
export class SearchBar {
    constructor() {
        this.value = '';
        this.maxLength = 15;
        this.placeholder = '输入搜索关键字';
        this.cancelText = '取消';
        this.searchDelay = 500;
        this.isInputFocus = false;
    }
    onInputFocusChange(isInputFocus) {
        this.focusChange.emit({
            isInputFocus
        });
    }
    async submitForm(ev) {
        ev && ev.preventDefault();
        this.submit.emit({
            value: this.value
        });
        return this;
    }
    async removeValue() {
        this.value = '';
        this.search.emit({
            value: ''
        });
        this.refInput.focus();
        return true;
    }
    async cancelSearch() {
        this.value = '';
        this.search.emit({
            value: ''
        });
        await this.submitForm(null);
        return true;
    }
    onInput(ev) {
        const value = ev.target.value.trim();
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
        }
        this.value = value;
        this.delayTimer = setTimeout(() => {
            this.search.emit({
                value
            });
        }, this.searchDelay);
    }
    onFocus() {
        this.isInputFocus = true;
    }
    onBlur() {
        this.isInputFocus = false;
    }
    get placeholderWithIcon() {
        return (h("div", { class: `placeholder ${this.inputActived ? 'focus' : ''}` },
            h("i", { innerHTML: ICONS.sousuo }),
            "\u00A0",
            this.inputActived ? '' : this.placeholder));
    }
    get inputActived() {
        return this.isInputFocus || this.value.length > 0;
    }
    get removeValueButton() {
        return this.value.length > 0 ? (h("i", { innerHTML: ICONS.qingchu, onClick: this.removeValue.bind(this) })) : ('');
    }
    componentDidLoad() {
        if (this.value !== '') {
            this.search.emit({
                value: this.value
            });
        }
    }
    render() {
        return (h("form", { action: "", onSubmit: this.submitForm.bind(this), class: "search-bar" },
            h("input", { type: "text", class: `input ${this.inputActived ? 'focus' : ''}`, maxlength: this.maxLength, ref: el => (this.refInput = el), onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), value: this.value }),
            this.placeholderWithIcon,
            this.removeValueButton,
            this.inputActived && (h("a", { class: "cancelSearch", href: "javascript:;", onClick: this.cancelSearch.bind(this) }, this.cancelText))));
    }
    static get is() { return "nb-search-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cancelSearch": {
            "method": true
        },
        "cancelText": {
            "type": String,
            "attr": "cancel-text"
        },
        "isInputFocus": {
            "state": true,
            "watchCallbacks": ["onInputFocusChange"]
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "removeValue": {
            "method": true
        },
        "searchDelay": {
            "type": Number,
            "attr": "search-delay"
        },
        "submitForm": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "focusChange",
            "method": "focusChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "search",
            "method": "search",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "submit",
            "method": "submit",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-search-bar:**/"; }
}
