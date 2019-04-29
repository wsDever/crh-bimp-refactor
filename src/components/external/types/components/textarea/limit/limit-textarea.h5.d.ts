import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * 限制输入内容长度的文本框
 */
export declare class LimitTextara {
    el: HTMLElement;
    ready: EventEmitter;
    /**
     * 最大长度
     */
    limit: number;
    /**
     * placeholder 提示信息
     */
    placeholder: string;
    /**
     * 输入框高度
     */
    height: number;
    /**
     * 内容
     */
    text: any;
    onTextChange(newText: any): void;
    /**
     * 获取内容
     */
    getContent(): Promise<any>;
    /**
     * 输入框对象
     */
    private textarea;
    /**
     * 输入文本框更新内容
     * @param ev
     */
    private onInput;
    /**
     * 文本长度计算
     */
    readonly textLength: any;
    /**
     * 文本框高度
     */
    readonly heightRem: string;
    componentDidLoad(): void;
    render(): JSX.Element;
}
