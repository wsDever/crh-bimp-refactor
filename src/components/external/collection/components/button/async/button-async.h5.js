const COUNTDOWN_SESSION = '$_BUTTON_COUNTDOWN';
export class ButtonAsync {
    constructor() {
        this.width = 690;
        this.height = 88;
        this.bg = '#3E86F7';
        this.color = '#ffffff';
        this.radius = 8;
        this.noBorder = false;
        this.countdown = 0;
        this.countdownUnit = 's';
        this.countdownContainer = '.countdown';
        this.loading = false;
        this.disable = false;
        this.countdownDisplay = Number(sessionStorage.getItem(COUNTDOWN_SESSION) || 0);
    }
    async done() {
        const countdownEl = this.el.querySelector(this.countdownContainer);
        this.disable = false;
        this.loading = false;
        this.countdownDisplay = 0;
        sessionStorage.removeItem(COUNTDOWN_SESSION);
        this.count.emit({
            status: 'finish'
        });
        if (countdownEl) {
            countdownEl.innerHTML = '';
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
        if (countdownEl) {
            countdownEl.innerHTML = String(this.countdownDisplay) + this.countdownUnit;
        }
        sessionStorage.setItem(COUNTDOWN_SESSION, String(this.countdownDisplay));
        if (this.countdownDisplay > 0) {
            this.countdownDisplay--;
            this.countdownTimer = setTimeout(this.handleCountdown.bind(this), 1000);
        }
        else {
            clearTimeout(this.countdownTimer);
            this.done();
        }
    }
    onClick() {
        this.loading = true;
        if (this.countdown > 0) {
            this.countdownDisplay = this.countdown;
            this.count.emit({
                status: 'start'
            });
            this.handleCountdown();
        }
        this.tap.emit({
            done: this.done.bind(this)
        });
    }
    componentDidLoad() {
        if (this.countdownDisplay > 0 && this.countdown > 0) {
            this.count.emit({
                status: 'start'
            });
            this.handleCountdown();
        }
    }
    render() {
        return (h("button", { onClick: this.onClick.bind(this), disabled: this.disable || this.loading, class: `btn ${this.loading ? 'loading' : ''}`, style: Object.assign({}, this.btnStyles) },
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
        "countdownUnit": {
            "type": String,
            "attr": "countdown-unit"
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
