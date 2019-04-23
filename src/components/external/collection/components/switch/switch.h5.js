export class Switch {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.color = '#4C98FC';
        this.w = 80;
        this.h = 48;
        this.onChange = () => {
            if (this.disabled)
                return;
            this.checked = !this.checked;
            this.change.emit({ checked: this.checked });
        };
    }
    get remStyles() {
        return {
            container: {
                width: `${this.w / 75}rem`,
                height: `${this.h / 75}rem`,
                borderRadius: `${this.h / 2 / 75}rem`
            },
            ball: {
                width: `${(this.h - 8) / 75}rem`,
                height: `${(this.h - 8) / 75}rem`
            }
        };
    }
    render() {
        return (h("div", { onClick: this.onChange, class: `switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`, style: Object.assign({}, this.remStyles.container, { backgroundColor: this.checked ? this.color : '#C7C7C7' }) },
            h("div", { style: Object.assign({}, this.remStyles.ball, { transform: this.checked ? `translateX(${(this.w - this.h) / 75}rem)` : 'none' }), class: "roundball" })));
    }
    static get is() { return "nb-switch"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "h": {
            "type": Number,
            "attr": "h"
        },
        "w": {
            "type": Number,
            "attr": "w"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-switch:**/"; }
}
