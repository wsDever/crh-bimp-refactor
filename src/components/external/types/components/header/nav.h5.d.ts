import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * 头部h5导航组件
 */
export declare class HeaderNav {
    /**
     * 处理点击事件
     */
    tap: EventEmitter;
    /**
     * 设置样式合集
     */
    styles: any;
    /**
     * 有下划线
     */
    line: boolean;
    /**
     * 标题显示位置
     */
    titlePosition: 'left' | 'center';
    /**
     * 左右间距
     */
    space: number;
    /**
     * 是否固定悬浮在顶部 z-index 值
     */
    fixed: number;
    /**
     * 是否显示
     */
    visible: boolean;
    /**
     * 实际给容器的定制样式
     */
    readonly containerStyles: any;
    /**
     * 处理点击
     * @param way 点击方位
     */
    private handleClick;
    render(): JSX.Element;
}
