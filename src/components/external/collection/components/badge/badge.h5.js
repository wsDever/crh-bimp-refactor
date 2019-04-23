export class Badge {
    constructor() {
        this.maxCount = 99;
        this.dot = false;
        this.showZero = false;
        this.bgColor = '#FB5B4C';
        this.offset = 0;
    }
    get dotCountClassNames() {
        let classNames = [];
        if (this.showZero)
            classNames.push('visible');
        if (this.dot)
            classNames.push('dot');
        if (!this.dot)
            classNames.push('count');
        if (!this.showZero && this.count === 0)
            classNames.push('hidden');
        if (this.offset !== 0) {
            classNames.push(`offset-${this.offset}`);
        }
        return classNames.join(' ');
    }
    get displayCount() {
        if (this.dot)
            return '';
        if (this.count === 0 && this.showZero)
            return 0;
        if (this.count <= this.maxCount)
            return this.count;
        if (this.count > this.maxCount)
            return `${this.maxCount}+`;
    }
    render() {
        return (h("div", { class: "badge" },
            h("i", { class: this.dotCountClassNames, style: {
                    backgroundColor: this.bgColor
                } }, this.displayCount),
            h("slot", null)));
    }
    static get is() { return "nb-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bgColor": {
            "type": String,
            "attr": "bg-color"
        },
        "count": {
            "type": Number,
            "attr": "count"
        },
        "dot": {
            "type": Boolean,
            "attr": "dot"
        },
        "maxCount": {
            "type": Number,
            "attr": "max-count"
        },
        "offset": {
            "type": Number,
            "attr": "offset"
        },
        "showZero": {
            "type": Boolean,
            "attr": "show-zero"
        }
    }; }
    static get style() { return "/**style-placeholder:nb-badge:**/"; }
}
