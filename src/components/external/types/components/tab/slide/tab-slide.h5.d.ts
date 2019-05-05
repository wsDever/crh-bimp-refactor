import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * 滑动效果的 tab 切换
 * @slot 以 div 作为单位作为选项卡展示
 */
export declare class TabSlide {
    /**
     * 根元素
     */
    el: HTMLElement;
    /**
     * 滑动块的位置，默认：底部
     */
    position: 'bottom' | 'top';
    readonly slidePositionStyle: {
        [x: string]: string;
    };
    /**
     * 当前选中的 index
     */
    index: number;
    onIndexChange(newIndex: any): void;
    /**
     * 当 tab 切换发生变化
     */
    change: EventEmitter;
    /**
     * tab 的宽度
     */
    width: number;
    readonly tabContainerWidth: string;
    /**
     * tab 高度
     */
    height: number;
    readonly tabContainerHeight: string;
    /**
     * slide 左边距离
     */
    slideLeft: string;
    /**
     * 设置当前激活的 tab
     */
    private setCurrentTab;
    /**
     * 设置每个tabItem宽度
     */
    private setWidth;
    /**
     * 根据当前激活 index 以及 tab总宽度来计算 slide 应该设置的 left 距离
     */
    private setSlideLeft;
    componentDidLoad(): void;
    render(): JSX.Element;
}
