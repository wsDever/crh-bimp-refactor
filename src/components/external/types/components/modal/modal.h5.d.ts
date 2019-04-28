import '../../stencil.core';
/**
 * 弹窗提示
 */
export declare class Modal {
    el: HTMLElement;
    /**
     * 可见开关
     */
    visible: boolean;
    /**
     * 弹窗类型
     */
    type: 'alert' | 'confirm';
    /**
     * 显示位置
     */
    position: 'center';
    /**
     * 样式定义
     */
    theme: string;
    /**
     * 过渡动画
     */
    transition: string;
    /**
     * 标题（不填则去掉头部区域）
     */
    headTitle?: string;
    /**
     * 当弹窗类型是 alert, confirm 时确认按钮文案
     */
    okText: string;
    /**
     * 点击确认按钮对应的操作
     */
    onOk: Function;
    /**
     * 当弹窗类型是 confirm 时取消按钮文案
     */
    noText: string;
    /**
     * 点击取消按钮对应的操作
     */
    onNo: Function;
    onVisibleChange(newValue: boolean): void;
    /**
     * 显示
     * @param {String} type modal 类型
     * @param {Object} opts 配置参数
     * @returns {Promise} 可手动关闭的方法
     */
    show(type: any, opts?: {}): Promise<any>;
    /**
     * 暂存滚动条位置用于恢复
     */
    private scrollTop;
    /**
     * body 原有样式寄存
     */
    private originStyles;
    /**
     * 获取当前滚动位置
     */
    private getScrollTop;
    /**
     * 关闭
     */
    private close;
    /**
     * 当前样式
     */
    private readonly styleName;
    componentDidLoad(): void;
    render(): JSX.Element[];
}
