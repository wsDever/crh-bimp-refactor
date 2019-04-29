import { h } from '../nb-component.core.js';

class StringLimit {
    constructor() {
        this.mode = 'line';
        this.number = 1;
    }
    get limitLineStyles() {
        if (this.mode === 'line') {
            return {
                '-webkit-line-clamp': String(this.number)
            };
        }
    }
    limitLengthString() {
        if (this.mode === 'length') {
            const originString = this.el.innerText.trim();
            this.el.shadowRoot.innerHTML = originString.slice(0, this.number) + '...';
        }
    }
    componentDidLoad() {
        this.limitLengthString();
    }
    render() {
        return this.mode === 'line' ?
            h("div", { class: "limit-line", style: Object.assign({}, this.limitLineStyles) },
                h("slot", null))
            :
                h("span", { class: "limit-length" },
                    h("slot", null));
    }
    static get is() { return "nb-string-limit"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "number": {
            "type": Number,
            "attr": "number"
        }
    }; }
    static get style() { return ".limit-line.sc-nb-string-limit{line-height:1.4;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}"; }
}

export { StringLimit as NbStringLimit };
