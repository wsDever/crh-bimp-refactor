export class Marquee {
    constructor() {
        this.styleId = 'tow-row-66h';
        this.items = [];
        this.speed = 3000;
        this.rollupClassName = '';
        this.rollup = () => {
            this.items.push(this.items.slice(0, 1)[0]);
            this.rollupClassName = 'fadeOut';
            setTimeout(() => {
                this.items.splice(0, 1);
                this.rollupClassName = '';
            }, 180);
        };
    }
    render() {
        return h("div", { class: `marquee ${this.styleId}` }, this.items.map((item, i) => {
            return h("a", { href: item.link, class: `item ${i === 0 ? this.rollupClassName : ''} l-${this.items.length}` }, this.styleId === 'tow-row-66h' && [h("div", { class: "text" }, item.text), h("div", { class: "time" }, item.time)]);
        }));
    }
    componentDidLoad() {
        if (this.styleId == 'tow-row-66h' && this.items.length > 2) {
            this.timer = setInterval(this.rollup, this.speed);
        }
    }
    componentDidUnload() {
        clearInterval(this.timer);
    }
    static get is() { return "nb-marquee"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "items": {
            "type": "Any",
            "attr": "items",
            "mutable": true
        },
        "rollupClassName": {
            "state": true
        },
        "speed": {
            "type": Number,
            "attr": "speed"
        },
        "styleId": {
            "type": String,
            "attr": "style-id"
        }
    }; }
    static get style() { return "/**style-placeholder:nb-marquee:**/"; }
}
