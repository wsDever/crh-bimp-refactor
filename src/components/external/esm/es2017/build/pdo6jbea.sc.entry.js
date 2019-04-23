import { h } from '../nb-component.core.js';

let _positionSaver = {};
class PullToRefresh {
    constructor() {
        this.noMore = false;
        this.dampHeight = 30;
        this.positionSaveId = null;
        this.dampingLen = 0;
        this.loading = false;
        this.handleTouchStart = (ev) => {
            this.startPageY = ev.touches[0].pageY;
        };
        this.handleTouchMove = (ev) => {
            this.movePageY = ev.touches[0].pageY;
            if (this.noMore)
                return;
            if (this.loading)
                return;
            this.recordStartDampLen();
            if (this.startDampLen > 0 && this.disable !== 'refresh') {
                if (this.pullLength > this.startDampLen) {
                    this.dampingLen = this.pullLength - this.startDampLen;
                    if (this.dampingLen > this.dampHeight)
                        this.dampingLen = this.dampHeight;
                }
                else if (this.pullLength + 3 < this.startDampLen) {
                    this.dampingLen = 0;
                }
            }
            if (this.startDampLen < 0 && this.disable !== 'more') {
                if (this.pullLength < this.startDampLen) {
                    this.dampingLen = this.pullLength + this.startDampLen;
                    if (this.dampingLen < -this.dampHeight)
                        this.dampingLen = -this.dampHeight;
                }
                else if (this.pullLength - 3 > this.startDampLen) {
                    this.dampingLen = 0;
                }
            }
            if (this.startDampLen !== 0) {
                this.$content.style.webkitTransition = 'transform 0.3s';
                this.$content.style.webkitTransform = `translateY(${this.dampingLen}px)`;
            }
        };
        this.handleTouchEnd = () => {
            this.startDampLen = null;
            if (this.noMore) {
                return;
            }
            console.log(this.dampingLen);
            if (Math.abs(this.dampingLen) > 3) {
                this.loading = true;
            }
            this.dampingLen > 3 && this.disable !== 'refresh' && this.refresh.emit();
            this.dampingLen < -3 && this.disable !== 'more' && this.more.emit();
            if (this.positionSaveId) {
                _positionSaver[this.positionSaveId] = this.getScrollTop();
            }
        };
    }
    async done() {
        this.$content.style.transform = `translateY(0px)`;
        this.dampingLen = 0;
        this.loading = false;
        return true;
    }
    async restoreLastPosition() {
        if (this.positionSaveId && _positionSaver[this.positionSaveId]) {
            this.$wrapper.scrollTop = _positionSaver[this.positionSaveId];
        }
        return _positionSaver[this.positionSaveId] || 0;
    }
    get pullLength() {
        return this.movePageY - this.startPageY;
    }
    getScrollTop() {
        return this.$wrapper.scrollTop;
    }
    getWrapperScrollTop() {
        return this.$wrapper.scrollHeight - this.$wrapper.clientHeight;
    }
    recordStartDampLen() {
        if (this.startDampLen)
            return;
        if ((this.getScrollTop() === 0 && this.pullLength > 0) ||
            (Math.abs(this.getScrollTop() - this.getWrapperScrollTop()) < 2 &&
                this.pullLength < 0)) {
            this.startDampLen = this.pullLength;
        }
    }
    bindTouchScroll(bind = true) {
        try {
            this.$wrapper = document.querySelector(this.wrapperSelector);
            this.$content = document.querySelector(this.contentSelector);
        }
        catch (e) {
            console.log(e);
            throw new TypeError('"wrapperSelector" or "contentSelector" props maybe not a valid scroll dom selector.');
        }
        if (!this.$wrapper) {
            return console.log('$wrapper undefined');
        }
        if (bind) {
            this.$wrapper.addEventListener('touchstart', this.handleTouchStart, false);
            this.$wrapper.addEventListener('touchmove', this.handleTouchMove, false);
            this.$wrapper.addEventListener('touchend', this.handleTouchEnd, false);
        }
        else {
            this.$wrapper.removeEventListener('touchstart', this.handleTouchStart, false);
            this.$wrapper.removeEventListener('touchmove', this.handleTouchMove, false);
            this.$wrapper.removeEventListener('touchend', this.handleTouchEnd, false);
        }
    }
    componentDidLoad() {
        this.bindTouchScroll();
        if (this.positionSaveId && _positionSaver[this.positionSaveId]) {
            console.log('上次位置', _positionSaver[this.positionSaveId]);
        }
    }
    componentDidUnload() {
        this.bindTouchScroll(false);
    }
    render() {
        return (h("div", { class: `pull-to-do` },
            h("div", { class: `${(this.dampingLen > this.dampHeight * 0.8 && !this.noMore) ? 'show' : 'hide'}` },
                h("div", { class: this.loading ? 'show' : 'hide' },
                    h("slot", { name: "refresh-loading" })),
                h("div", { class: this.loading ? 'hide' : 'show' },
                    h("slot", { name: "refresh" }))),
            h("slot", { name: "main" }),
            h("div", { class: `bottom ${this.noMore && !this.loading ? 'show' : 'hide'}` },
                h("slot", { name: "no-more" })),
            h("div", { class: `bottom ${this.loading ? 'show' : 'hide'}` },
                h("slot", { name: "more-loading" })),
            h("div", { class: `bottom ${!this.loading && !this.noMore ? 'show' : 'hide'}` },
                h("slot", { name: "more" }))));
    }
    static get is() { return "nb-pull-to-do"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "contentSelector": {
            "type": String,
            "attr": "content-selector"
        },
        "dampHeight": {
            "type": Number,
            "attr": "damp-height"
        },
        "dampingLen": {
            "state": true
        },
        "disable": {
            "type": String,
            "attr": "disable"
        },
        "done": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "loading": {
            "type": Boolean,
            "attr": "loading",
            "mutable": true
        },
        "noMore": {
            "type": Boolean,
            "attr": "no-more"
        },
        "positionSaveId": {
            "type": String,
            "attr": "position-save-id"
        },
        "restoreLastPosition": {
            "method": true
        },
        "wrapperSelector": {
            "type": String,
            "attr": "wrapper-selector"
        }
    }; }
    static get events() { return [{
            "name": "refresh",
            "method": "refresh",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "more",
            "method": "more",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".pull-to-do.sc-nb-pull-to-do{position:relative;padding-bottom:.64rem}.pull-to-do.sc-nb-pull-to-do   .hide.sc-nb-pull-to-do, .pull-to-do.sc-nb-pull-to-do   .show.sc-nb-pull-to-do{position:absolute;width:100%;opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s;min-height:.64rem;z-index:1}.pull-to-do.sc-nb-pull-to-do   .hide.sc-nb-pull-to-do{opacity:0;z-index:-1}.pull-to-do.sc-nb-pull-to-do   .bottom.sc-nb-pull-to-do{top:auto;bottom:0}"; }
}

export { PullToRefresh as NbPullToDo };
