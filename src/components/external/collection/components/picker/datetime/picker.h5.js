import Picker from './picker.esm';
export class DatetimePicker {
    constructor() {
        this.format = 'YYYY-MM-DD HH:mm';
        this.date = null;
        this.for = null;
        this.rows = 7;
        this.textTitle = '选择日期时间';
        this.textConfirm = '确定';
        this.textCancel = '取消';
    }
    async getPicker() {
        return this.Picker;
    }
    componentDidLoad() {
        const el = document.querySelector(this.for);
        const container = this.el.shadowRoot.querySelector('.picker-container');
        this.Picker = new Picker(el, {
            container,
            rows: this.rows,
            format: this.format,
            date: this.date,
            headers: false,
            language: 'zh-CN',
            text: {
                title: this.textTitle,
                confirm: this.textConfirm,
                cancel: this.textCancel
            },
            translate(type, text) {
                const suffixes = {
                    year: '年',
                    month: '月',
                    day: '日',
                    hour: '时',
                    minute: '分'
                };
                return Number(text) + suffixes[type];
            }
        });
        this.ready.emit({
            picker: this.Picker
        });
    }
    render() {
        return (h("div", { class: "datetime-picker" },
            h("slot", null),
            h("div", { class: "picker-container" })));
    }
    static get is() { return "nb-datetime-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "date": {
            "type": "Any",
            "attr": "date"
        },
        "el": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for"
        },
        "format": {
            "type": String,
            "attr": "format"
        },
        "getPicker": {
            "method": true
        },
        "rows": {
            "type": Number,
            "attr": "rows"
        },
        "textCancel": {
            "type": String,
            "attr": "text-cancel"
        },
        "textConfirm": {
            "type": String,
            "attr": "text-confirm"
        },
        "textTitle": {
            "type": String,
            "attr": "text-title"
        }
    }; }
    static get events() { return [{
            "name": "ready",
            "method": "ready",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-datetime-picker:**/"; }
}
