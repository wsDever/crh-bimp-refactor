import { h } from '../nb-component.core.js';

class TabSlide {
    constructor() {
        this.position = 'bottom';
        this.index = 0;
        this.width = 750;
        this.height = 88;
        this.slideLeft = '0px';
    }
    get slidePositionStyle() {
        return {
            [this.position]: '0',
        };
    }
    onIndexChange(newIndex) {
        this.change.emit({
            index: newIndex,
        });
        this.setCurrentTab();
    }
    get tabContainerWidth() {
        return `${this.width / 75}rem`;
    }
    get tabContainerHeight() {
        return `${this.height / 75}rem`;
    }
    setCurrentTab() {
        const tabItems = this.el.querySelectorAll('div');
        if (tabItems.length === 0) {
            throw new Error('请在 <nb-tab-slide> 标签内输入 div为容器的选项卡内容.');
        }
        [].forEach.call(tabItems, (item, i) => {
            this.setWidth(item, tabItems.length);
            item.classList.toggle('active', i === this.index);
            item.onclick = () => {
                this.index = i;
            };
        });
        this.setSlideLeft();
    }
    setWidth(item, length) {
        item.style.width = `${(100 / length)}%`;
        item.style.textAlign = `center`;
    }
    setSlideLeft() {
        const slide = this.el.shadowRoot.querySelector('.slide');
        const slideWidth = slide.clientWidth;
        const tabWidth = this.el.shadowRoot.querySelector('.container').clientWidth;
        const tabItemNum = this.el.querySelectorAll('div').length;
        const itemWidth = tabWidth / tabItemNum;
        const slideOffsetLeft = (itemWidth - slideWidth) / 2;
        this.slideLeft = `${(this.index * itemWidth) + slideOffsetLeft}px`;
    }
    componentDidLoad() {
        this.setCurrentTab();
    }
    render() {
        return (h("div", { class: "container", style: {
                width: this.tabContainerWidth,
                height: this.tabContainerHeight,
            } },
            h("slot", null),
            h("div", { class: "slide", style: Object.assign({ visibility: this.slideLeft === '0px' ? 'hidden' : 'visible', left: String(this.slideLeft) }, this.slidePositionStyle) })));
    }
    static get is() { return "nb-tab-slide"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "index": {
            "type": Number,
            "attr": "index",
            "mutable": true,
            "watchCallbacks": ["onIndexChange"]
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "slideLeft": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".container.sc-nb-tab-slide{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.container.sc-nb-tab-slide   .slide.sc-nb-tab-slide{width:.5333333333333333rem;height:.05333333333333334rem;background:#3e86f7;position:absolute;-webkit-transition:left .2s ease;transition:left .2s ease}"; }
}

export { TabSlide as NbTabSlide };
