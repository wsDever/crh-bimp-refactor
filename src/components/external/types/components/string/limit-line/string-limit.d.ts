import '../../../stencil.core';
/**
 * 限制显示文字长度
 * length 模式：固定长度，超出的使用...
 * line 模式：固定最大行数
 */
export declare class StringLimit {
    el: HTMLElement;
    /**
     * 选择限制长度的模式
     */
    mode: 'line' | 'length';
    /**
     * 针对模式设置数值 line 代表行数， length 代表长度
     */
    number: number;
    /**
     * 限制行数样式
     */
    readonly limitLineStyles: {
        '-webkit-line-clamp': string;
    };
    /**
     * 限制长度样式
     */
    limitLengthString(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
