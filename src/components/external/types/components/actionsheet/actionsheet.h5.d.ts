import '../../stencil.core';
/**
 * 上滑交互框
 */
export declare class Actionsheet {
    /**
     * 暂存滚动条位置用于恢复
     * @type {Number}
     */
    private scrollTop;
    /**
     * body 原有样式寄存
     */
    private originStyles;
    /**
     * 获取当前滚动位置
     * @return {Number}
     */
    private getScrollTop;
    /**
     * 观察显示状态来控制滚动条（显示时滑动屏幕不能让背景内容一起滚动）
     * @param  {String} visible 最新的显示状态值
     * @return {Void}
     */
    scrollHandler(visible: any): void;
    /**
     * 展示开关
     */
    visible: boolean;
    /**
     * 展示标题内容 （不用title避免跟原生属性冲突）
     */
    headTitle?: string;
    /**
     * 是否需要遮罩 0 不需要，其他数字代表透明度
     */
    mask: number;
    private readonly visibleClassName;
    /**
     * 关闭显示
     */
    onClose: () => void;
    /**
     * 关闭显示
     */
    close(): void;
    /**
     * 显示
     */
    show(): void;
    render(): JSX.Element[];
}
