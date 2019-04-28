export class VscrollNav {
    constructor() {
        this.keywords = ['A', 'B'];
        this.idPrefix = 'vscroll-';
        this.scroller = null;
    }
    async scrollToId(id) {
        const scrollToTarget = this.el.querySelector(`#${id}`);
        if (!scrollToTarget)
            return false;
        const offsetY = scrollToTarget.offsetTop;
        if (!this.scroller) {
            window.scrollTo(0, offsetY);
        }
        else {
            const scroller = document.querySelector(this.scroller);
            if (!scroller)
                return false;
            scroller.scrollTop = offsetY;
        }
        this.scrollTo.emit({
            y: offsetY
        });
        return offsetY;
    }
    onNavClick(ev) {
        const key = ev.target.innerText;
        if (~this.keywords.indexOf(key)) {
            this.scrollToId(`${this.idPrefix}${key}`);
        }
    }
    onNavMove(ev) {
        const pointLocation = ev.changedTouches[0];
        const realTarget = this.el.shadowRoot.elementFromPoint(pointLocation.clientX, pointLocation.clientY);
        const key = realTarget ? realTarget.innerHTML : '';
        if (~this.keywords.indexOf(key)) {
            this.scrollToId(`${this.idPrefix}${key}`);
        }
    }
    render() {
        return (h("div", { class: "vscroll-nav" },
            h("div", { class: "list" },
                h("slot", null)),
            h("ul", { class: "nav", onClick: this.onNavClick.bind(this), onTouchMove: this.onNavMove.bind(this) }, this.keywords.map(key => {
                return (h("li", { key: key }, key));
            }))));
    }
    static get is() { return "nb-vscroll-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "idPrefix": {
            "type": String,
            "attr": "id-prefix"
        },
        "keywords": {
            "type": "Any",
            "attr": "keywords"
        },
        "scroller": {
            "type": String,
            "attr": "scroller"
        },
        "scrollToId": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "scrollTo",
            "method": "scrollTo",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-vscroll-nav:**/"; }
}
