import { h } from '../nb-component.core.js';

class Marquee {
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
    static get style() { return ".marquee.tow-row-66h.sc-nb-marquee{height:.88rem;overflow:hidden;font-size:.32rem;line-height:1}.marquee.tow-row-66h.sc-nb-marquee   .item.sc-nb-marquee{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:.44rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s;transition:all .2s;text-decoration:none;overflow:hidden}.marquee.tow-row-66h.sc-nb-marquee   .item.l-1.sc-nb-marquee{margin-top:.24rem}.marquee.tow-row-66h.sc-nb-marquee   .item.sc-nb-marquee   .text.sc-nb-marquee{width:5.6rem;height:.44rem;color:#595959;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-height:.44rem;overflow:hidden}.marquee.tow-row-66h.sc-nb-marquee   .item.sc-nb-marquee   .time.sc-nb-marquee{color:#8c8c8c}.marquee.tow-row-66h.sc-nb-marquee   .item.fadeOut.sc-nb-marquee{-webkit-animation:fadeout .2s;animation:fadeout .2s}\@-webkit-keyframes fadeout{0%{height:.4266666666666667rem;opacity:1;margin-bottom:.10666666666666667rem}to{height:0;margin-bottom:0;opacity:0}}\@keyframes fadeout{0%{height:.4266666666666667rem;opacity:1;margin-bottom:.10666666666666667rem}to{height:0;margin-bottom:0;opacity:0}}"; }
}

export { Marquee as NbMarquee };
