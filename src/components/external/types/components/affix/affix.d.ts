import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * 固钉组件
 * @description 根据滑动来切换固定跟原始状态的组件
 */
export declare class Affix {
    /**
     * 参照对象
     */
    target?: HTMLElement;
    /**
     * 初始化时固定对象在滚动区域的位置
     */
    startFixedScrollTop?: number;
    getStartFixedScrollTop(): Promise<number>;
    /**
     * 当固定状态发生变化对外发送事件
     */
    change: EventEmitter;
    /**
     * 观察固定状态变化
     * @param isFixed
     */
    onCurrentPageChange(isFixed: any): void;
    /**
     * 组件自身
     */
    el: HTMLElement;
    /**
     * 固定时候zindex值
     */
    zIndex: number;
    /**
     * 距离偏移量后触发（正数举例上沿，负数下沿）
     */
    offset: number;
    /**
     * 计算举例的参照dom
     */
    relativeSelector?: string;
    /**
     * 是否处于固定状态
     */
    fixed: boolean;
    /**
     * 直接返回是否处于固定状态
     */
    isFixed(): Promise<boolean>;
    /**
     * 根据设置来切换固定状态
     */
    handleFix: () => void;
    /**
     * 计算出固定时候的高度
     */
    readonly fixedTop: number;
    componentDidLoad(): void;
    componentDidUnload(): void;
    render(): JSX.Element;
}
