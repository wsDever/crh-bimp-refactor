import { h } from '../nb-component.core.js';

class Modal {
    constructor() {
        this.visible = false;
        this.type = 'alert';
        this.position = 'center';
        this.theme = 'default';
        this.transition = '';
        this.headTitle = '';
        this.okText = '确定';
        this.onOk = () => this.close();
        this.noText = '取消';
        this.onNo = () => this.close();
        this.scrollTop = 0;
        this.originStyles = '';
    }
    onVisibleChange(newValue) {
        this.visible = newValue;
        if (newValue) {
            this.transition = 'enter';
            this.originStyles = document.body.getAttribute('style') || '';
            this.scrollTop = this.getScrollTop();
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = -this.scrollTop + 'px';
            document.body.style.bottom = '0px';
        }
        else {
            this.transition = 'leave';
            document.body.setAttribute('style', this.originStyles);
            document.body.scrollTop = document.documentElement.scrollTop =
                this.scrollTop || 0;
        }
    }
    async show(type, opts = {}) {
        const options = Object.assign({ title: '', content: '', okText: this.okText, onOk: this.onOk }, opts);
        if (this.visible)
            this.visible = false;
        this.type = type;
        this.headTitle = options.title;
        this.okText = options.okText;
        this.onOk = options.onOk;
        this.el.innerHTML = options.content;
        this.visible = true;
        return this.close.bind(this);
    }
    getScrollTop() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }
    close() {
        this.visible = false;
    }
    get styleName() {
        return `${this.theme} ${this.position} ${this.transition}`;
    }
    componentDidLoad() {
        this.onVisibleChange(this.visible);
    }
    render() {
        return [
            h("div", { class: `modal ${this.styleName}` },
                h("div", { class: "wrapper" },
                    h("div", { class: "box" },
                        this.headTitle !== '' && h("div", { class: "title" }, this.headTitle),
                        this.headTitle !== '' && (h("div", { class: "content" },
                            h("slot", null))),
                        h("div", { class: "buttons" },
                            this.type === 'confirm' && (h("button", { class: "cancel", onClick: this.onNo.bind(this) }, this.noText)),
                            h("button", { class: "ok", onClick: this.onOk.bind(this) }, this.okText))))),
            this.visible && h("div", { class: "mask" })
        ];
    }
    static get is() { return "nb-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "headTitle": {
            "type": String,
            "attr": "head-title",
            "mutable": true
        },
        "noText": {
            "type": String,
            "attr": "no-text",
            "mutable": true
        },
        "okText": {
            "type": String,
            "attr": "ok-text",
            "mutable": true
        },
        "onNo": {
            "type": "Any",
            "attr": "on-no",
            "mutable": true
        },
        "onOk": {
            "type": "Any",
            "attr": "on-ok",
            "mutable": true
        },
        "position": {
            "type": String,
            "attr": "position",
            "mutable": true
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
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["onVisibleChange"]
        }
    }; }
    static get style() { return ".modal{position:absolute;top:0;left:0;height:100vh;width:100vw;z-index:-1}.modal .wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.modal .box{width:8rem;background:#fff;border-radius:.26666666666666666rem;overflow:hidden;opacity:0;-webkit-transition:all .3s;transition:all .3s}.modal .box .title{text-align:center;font-size:.4266666666666667rem;color:#272727;font-weight:600;padding:.5333333333333333rem}.modal .box .content{padding:0 .5333333333333333rem .5333333333333333rem .5333333333333333rem;color:#595959;font-size:.37333333333333335rem;line-height:.5333333333333333rem}.modal .box .buttons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:1.2rem;border-top:1px solid #f5f5f5}.modal .box .buttons .cancel,.modal .box .buttons .ok{width:100%;text-align:center;color:#3e86f7;font-size:.48rem;border:none;background:#fff;outline:none}.modal .box .buttons button:nth-child(2){border-left:1px solid #f5f5f5}.modal.center .box{text-align:center;position:fixed;top:49%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin:0 auto}.modal.enter{z-index:999}.modal.enter .box{top:50%;opacity:1}.modal.leave{z-index:-1}.modal.leave .box{top:49%;opacity:0}.mask{position:absolute;top:0;left:0;height:100vh;width:100vw;z-index:998;background:rgba(0,0,0,.1)}"; }
}

export { Modal as NbModal };
