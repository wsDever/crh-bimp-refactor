import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * 滑动开关
 */
export declare class Switch {
    /**
     * 是否默认选中
     */
    checked: boolean;
    /**
     * 是否不可修改
     */
    disabled: boolean;
    /**
     * 开关背景颜色
     */
    color: string;
    /**
     * 宽度
     */
    w: number;
    /**
     * 高度
     */
    h: number;
    /**
     * 当状态发生改变
     */
    change: EventEmitter;
    /**
     * 点击处理
     */
    protected onChange: () => void;
    /**
     * 计算出对应的rem 宽高
     */
    readonly remStyles: {
        container: {
            width: string;
            height: string;
            borderRadius: string;
        };
        ball: {
            width: string;
            height: string;
        };
    };
    render(): JSX.Element;
}
