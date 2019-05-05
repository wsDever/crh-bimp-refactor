const COUNTDOWN_SESSION = '$_BUTTON_COUNTDOWN';
export class ButtonAsync {
    constructor() {
        this.width = 690;
        this.height = 88;
        this.bg = '#3E86F7';
        this.color = '#ffffff';
        this.radius = 8;
        this.noBorder = false;
        this.countdownId = '';
        this.countdown = 0;
        this.countdownContainer = '.countdown';
        this.countdownOrigin = '.origin';
        this.countdownReplace = '%n';
        this.countdownHtml = '倒计时%n秒';
        this.loading = false;
        this.disable = false;
        this.countdownDisplay = 0;
    }
    async done() {
        const countdownEl = this.el.querySelector(this.countdownContainer);
        const originEl = this.el.querySelector(this.countdownOrigin);
        this.disable = false;
        this.loading = false;
        this.countdownTimer = null;
        this.countdownDisplay = 0;
        sessionStorage.removeItem(COUNTDOWN_SESSION + this.countdownId);
        this.count.emit({
            status: 'finish'
        });
        if (countdownEl) {
            countdownEl.innerHTML = '';
        }
        if (originEl) {
            originEl.style.display = 'block';
        }
        return true;
    }
    get btnStyles() {
        let border = '1px solid transparent';
        if (this.bg === '#ffffff' && this.color !== '#ffffff') {
            border = `1px solid ${this.color}`;
        }
        return {
            width: `${this.width / 75}rem`,
            height: `${this.height / 75}rem`,
            borderRadius: `${this.radius / 75}rem`,
            background: this.bg,
            color: this.color,
            border: this.noBorder ? 'none' : border
        };
    }
    handleCountdown() {
        this.disable = true;
        const countdownEl = this.el.querySelector(this.countdownContainer);
        const originEl = this.el.querySelector(this.countdownOrigin);
        if (countdownEl) {
            countdownEl.innerHTML = this.countdownHtml.replace(this.countdownReplace, String(this.countdownDisplay));
        }
        if (originEl) {
            originEl.style.display = 'none';
        }
        sessionStorage.setItem(COUNTDOWN_SESSION + this.countdownId, String(this.countdownDisplay));
        if (this.countdownDisplay > 0) {
            this.countdownDisplay--;
            this.countdownTimer = setTimeout(this.handleCountdown.bind(this), 1000);
        }
        else {
            clearTimeout(this.countdownTimer);
            this.done();
        }
        return true;
    }
    async handleClick() {
        this.loading = true;
        if (this.countdown > 0) {
            if (this.countdownDisplay == 0) {
                this.countdownDisplay = this.countdown;
                this.count.emit({
                    status: 'start'
                });
            }
            if (!this.countdownTimer)
                this.handleCountdown();
        }
        this.tap.emit({
            done: this.done.bind(this)
        });
        return true;
    }
    componentWillLoad() {
        this.countdownDisplay = Number(sessionStorage.getItem(COUNTDOWN_SESSION + this.countdownId) || 0);
    }
    componentDidLoad() {
        if (this.countdownDisplay > 0 && this.countdown > 0) {
            this.handleCountdown();
        }
    }
    componentDidUnload() {
        clearTimeout(this.countdownTimer);
    }
    render() {
        return (h("button", { onClick: this.handleClick.bind(this), disabled: this.disable || this.loading, class: `btn ${this.loading ? 'loading' : ''}`, style: Object.assign({}, this.btnStyles) },
            h("slot", null)));
    }
    static get is() { return "nb-button-async"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bg": {
            "type": String,
            "attr": "bg"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "countdown": {
            "type": Number,
            "attr": "countdown"
        },
        "countdownContainer": {
            "type": String,
            "attr": "countdown-container"
        },
        "countdownDisplay": {
            "state": true
        },
        "countdownHtml": {
            "type": String,
            "attr": "countdown-html"
        },
        "countdownId": {
            "type": String,
            "attr": "countdown-id"
        },
        "countdownOrigin": {
            "type": String,
            "attr": "countdown-origin"
        },
        "countdownReplace": {
            "type": String,
            "attr": "countdown-replace"
        },
        "disable": {
            "type": Boolean,
            "attr": "disable",
            "mutable": true
        },
        "done": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "handleClick": {
            "method": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "loading": {
            "type": Boolean,
            "attr": "loading",
            "mutable": true
        },
        "noBorder": {
            "type": Boolean,
            "attr": "no-border"
        },
        "radius": {
            "type": Number,
            "attr": "radius"
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "tap",
            "method": "tap",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "count",
            "method": "count",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-button-async:**/"; }
}
