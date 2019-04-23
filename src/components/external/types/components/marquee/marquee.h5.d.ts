import '../../stencil.core';
/**
 * 跑马灯H5
 */
export declare class Marquee {
    /**
     * 跑动计时器
     */
    timer: any;
    /**
     * 跑马灯预设样式
     */
    styleId: 'tow-row-66h';
    /**
     * 跑动内容列表
     */
    items?: {
        key: number;
        text: string;
        time?: string;
        link: string;
    }[];
    /**
     * 多少间隔动一次
     */
    speed: number;
    /**
     * 上移样式名
     */
    rollupClassName: string;
    /**
     * 滚动操作
     */
    rollup: () => void;
    render(): JSX.Element;
    componentDidLoad(): void;
    componentDidUnload(): void;
}
