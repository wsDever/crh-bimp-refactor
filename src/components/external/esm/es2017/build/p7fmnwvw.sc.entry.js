import { h } from '../nb-component.core.js';

class Toast {
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
    static get style() { return ".toast.sc-nb-toast{position:absolute;top:0;left:0;height:100vh;width:100vw;z-index:-1}.toast.sc-nb-toast   .wrapper.sc-nb-toast{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.toast.sc-nb-toast   .message.sc-nb-toast{min-width:2.666666666666667rem;background:rgba(0,0,0,.75);-webkit-box-shadow:0 0 .10666666666666667rem 0 rgba(0,0,0,.1);box-shadow:0 0 .10666666666666667rem 0 rgba(0,0,0,.1);color:hsla(0,0%,100%,.75);font-size:.4rem;border-radius:.10666666666666667rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.26666666666666666rem .4rem;line-height:.64rem;word-break:break-all;opacity:0;-webkit-transition:all .3s;transition:all .3s}.toast.center.sc-nb-toast   .message.sc-nb-toast{text-align:center;position:fixed;top:49%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin:0 auto}.toast.enter.sc-nb-toast{z-index:999}.toast.enter.sc-nb-toast   .message.sc-nb-toast{top:50%;opacity:1}.toast.leave.sc-nb-toast{z-index:-1}.toast.leave.sc-nb-toast   .message.sc-nb-toast{top:49%;opacity:0}"; }
}

export { Toast as NbToast };
