import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * 搜索框
 */
export declare class SearchBar {
    /**
     * 输入框内的值（可变化反射）
     */
    value: string;
    /**
     * 输入框最大长度限制
     */
    maxLength: number;
    /**
     * 搜索框内的提示文案
     */
    placeholder: string;
    /**
     * 取消操作文案
     */
    cancelText: string;
    /**
     * 搜索触发延迟
     */
    searchDelay: number;
    onInputFocusChange(isInputFocus: any): void;
    /**
     * 控制输入框是否聚焦的状态
     */
    isInputFocus: boolean;
    /**
     * 当输入框发生变动时
     */
    focusChange: EventEmitter;
    /**
     * 当输入框发生变动时
     */
    search: EventEmitter;
    /**
     * 当发生提交操作时
     */
    submit: EventEmitter;
    /**
     * 提交搜索框内容
     */
    submitForm(ev: any): Promise<this>;
    /**
     * 清除搜索框内容
     */
    removeValue(): Promise<boolean>;
    /**
     * 取消搜索操作
     */
    cancelSearch(): Promise<boolean>;
    /**
     * 延迟搜索计时器
     */
    private delayTimer;
    /**
     * 输入框 DOM
     */
    private refInput;
    /**
     * 当输入框有内容变化时
     */
    private onInput;
    /**
     * 当输入框激活
     */
    private onFocus;
    /**
     * 当输入框失去激活
     */
    private onBlur;
    /**
     * 带搜索图标的提示信息
     */
    readonly placeholderWithIcon: JSX.Element;
    /**
     * 输入框有内容或者激活中
     */
    readonly inputActived: boolean;
    /**
     * 清除搜索框内容按钮
     */
    readonly removeValueButton: JSX.Element;
    componentDidLoad(): void;
    render(): JSX.Element;
}
