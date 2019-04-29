import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * 带异步处理的按钮
 */
export declare class ButtonAsync {
    el: HTMLElement;
    /**
     * 处理点击
     */
    tap: EventEmitter;
    /**
     * 在进行倒计时
     */
    count: EventEmitter;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 背景
     */
    bg: string;
    /**
     * 字体色
     */
    color: string;
    /**
     * 圆角
     */
    radius: number;
    /**
     * 没有外边框
     */
    noBorder: boolean;
    /**
     * 如果按钮有倒计时功能该属性设置起始数字
     */
    countdown: number;
    /**
     * 倒计时后面追加的单位
     */
    countdownUnit: string;
    /**
     * 倒计时显示占位符（在 slot 对应的选择器内容会被加入倒计秒数）
     */
    countdownContainer: string;
    /**
     * 点击对应的处理已经完成
     */
    done(): Promise<boolean>;
    /**
     * 是否处于loading状态
     */
    loading: boolean;
    /**
     * 是否处于disable状态
     */
    disable: boolean;
    /**
     * 显示倒计时数字
     */
    countdownDisplay: number;
    /**
     * 设置按钮样式
     */
    readonly btnStyles: {
        width: string;
        height: string;
        borderRadius: string;
        background: string;
        color: string;
        border: string;
    };
    /**
     * 倒计时计时器
     */
    private countdownTimer;
    /**
     * 处理倒计时
     */
    private handleCountdown;
    /**
     * 处理点击
     */
    private onClick;
    componentDidLoad(): void;
    render(): JSX.Element;
}
