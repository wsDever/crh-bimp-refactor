import MiniRefreshTools from 'minirefresh';
export class Refresh {
    constructor() {
        this.lockRefresh = false;
        this.lockScrollLoad = false;
        this.autoScrollLoad = false;
        this.offset = 60;
        this.refreshOptions = {};
        this.scrollLoadOptions = {};
    }
    async getRefresh() {
        return this.MiniRefresh;
    }
    componentDidLoad() {
        const container = this.el.shadowRoot.querySelector('.minirefresh-wrap');
        const MiniRefresh = MiniRefreshTools.theme.defaults;
        const refreshOptions = Object.assign({ isWrapCssTranslate: false, contentdown: '下拉刷新', contentover: '释放刷新', contentrefresh: '加载中...', contentsuccess: '刷新成功', contenterror: '刷新失败' }, this.refreshOptions);
        const scrollLoadOptions = Object.assign({ contentdown: '上拉显示更多', contentrefresh: '加载中...', contentnomore: '没有更多了', toTop: {
                isEnable: false,
                duration: 300,
                offset: 800
            } }, this.scrollLoadOptions);
        this.MiniRefresh = new MiniRefresh({
            container,
            down: Object.assign({ isLock: this.lockRefresh, offset: this.offset, callback: async () => {
                    const refresh = await this.getRefresh();
                    this.refresh.emit({
                        finish: refresh.endDownLoading.bind(refresh)
                    });
                } }, refreshOptions),
            up: Object.assign({ isLock: this.lockScrollLoad, isAuto: this.autoScrollLoad, offset: this.offset, callback: async () => {
                    const refresh = await this.getRefresh();
                    this.scrollLoad.emit({
                        noMore: refresh.endUpLoading.bind(refresh)
                    });
                } }, scrollLoadOptions)
        });
    }
    render() {
        return (h("div", { class: "minirefresh-wrap" },
            h("div", { class: "minirefresh-scroll" },
                h("slot", null))));
    }
    static get is() { return "nb-refresh"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autoScrollLoad": {
            "type": Boolean,
            "attr": "auto-scroll-load"
        },
        "el": {
            "elementRef": true
        },
        "getRefresh": {
            "method": true
        },
        "lockRefresh": {
            "type": Boolean,
            "attr": "lock-refresh"
        },
        "lockScrollLoad": {
            "type": Boolean,
            "attr": "lock-scroll-load"
        },
        "offset": {
            "type": Number,
            "attr": "offset"
        },
        "refreshOptions": {
            "type": "Any",
            "attr": "refresh-options"
        },
        "scrollLoadOptions": {
            "type": "Any",
            "attr": "scroll-load-options"
        }
    }; }
    static get events() { return [{
            "name": "refresh",
            "method": "refresh",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "scrollLoad",
            "method": "scrollLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-refresh:**/"; }
}
