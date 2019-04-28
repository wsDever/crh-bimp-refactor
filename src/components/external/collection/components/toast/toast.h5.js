export class Toast {
    constructor() {
        this.visible = false;
        this.position = 'center';
        this.duration = 2000;
        this.maxLength = 480;
        this.theme = 'default';
        this.transition = '';
        this.scrollTop = 0;
        this.originStyles = '';
    }
    async show(message = '') {
        if (message !== '') {
            this.el.innerHTML = message;
        }
        this.visible = true;
        this.onShowToast();
        return this.close.bind(this);
    }
    onVisibleChange(newValue, oldValue) {
        if (newValue && oldValue === false) {
            this.onShowToast();
        }
        if (newValue) {
            this.originStyles = document.body.getAttribute('style') || '';
            this.scrollTop = this.getScrollTop();
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = -this.scrollTop + 'px';
            document.body.style.bottom = '0px';
        }
        else {
            document.body.setAttribute('style', this.originStyles);
            document.body.scrollTop = document.documentElement.scrollTop =
                this.scrollTop || 0;
        }
    }
    close() {
        this.transition = 'leave';
        this.visible = false;
    }
    getScrollTop() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }
    onShowToast() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.transition = 'enter';
        if (this.duration === 0)
            return;
        this.timer = setTimeout(() => {
            this.close();
        }, this.duration);
    }
    get styleName() {
        return `${this.theme} ${this.position} ${this.transition}`;
    }
    get maxWidth() {
        return `${this.maxLength / 75}rem`;
    }
    render() {
        return [
            h("div", { class: `toast ${this.styleName}` },
                h("div", { class: "wrapper" },
                    h("div", { class: "message", style: {
                            maxWidth: this.maxWidth
                        } },
                        h("slot", null))))
        ];
    }
    static get is() { return "nb-toast"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "duration": {
            "type": Number,
            "attr": "duration"
        },
        "el": {
            "elementRef": true
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "position": {
            "type": String,
            "attr": "position"
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
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["onVisibleChange"]
        }
    }; }
    static get style() { return "/**style-placeholder:nb-toast:**/"; }
}
