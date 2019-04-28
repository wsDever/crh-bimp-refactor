import '../../stencil.core';
/**
 * 轻提示
 */
export declare class Toast {
    el: HTMLElement;
    /**
     * 可见开关
     */
    visible: boolean;
    /**
     * 显示位置
     */
    position: 'center';
    /**
     * 消失延时时间 0 -> 不自动消失
     */
    duration: number;
    /**
     * 最大显示宽度
     */
    maxLength: number;
    /**
     * 样式定义
     */
    theme: string;
    /**
     * 过渡动画
     */
    transition: string;
    /**
     * 显示
     * @param {String} message 如果需要覆盖原有信息则填写
     */
    show(message?: string): Promise<any>;
    onVisibleChange(newValue: boolean, oldValue: boolean): void;
    /**
     * 展示定时器
     */
    private timer;
    /**
     * 暂存滚动条位置用于恢复
     */
    private scrollTop;
    /**
     * body 原有样式寄存
     */
    private originStyles;
    /**
     * 关闭
     */
    private close;
    /**
     * 获取当前滚动位置
     */
    private getScrollTop;
    /**
     * 处理显示提示
     */
    private onShowToast;
    /**
     * 当前样式
     */
    private readonly styleName;
    /**
     * 内容展示的最大宽度
     */
    private readonly maxWidth;
    render(): JSX.Element[];
}
