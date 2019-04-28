import '../../stencil.core';
/**
 * 区块项目
 */
export declare class ListItem {
    /**
     * 区块元素
     */
    itemEl: HTMLElement;
    /**
     * 滑动元素
     */
    slideEl: HTMLElement;
    /**
     * 下边框, 0则不显示
     */
    border: number;
    /**
     * 线条颜色
     */
    color: string;
    /**
     * 短线条方向
     */
    short?: 'left' | 'right' | 'both';
    /**
     * 设置单元高度
     */
    height?: number;
    /**
     * 设置横线左右间距
     */
    sideSpace?: number;
    /**
     * 是否启用横滑操作开关
     */
    slide: boolean;
    /**
     * 滑动开关
     */
    slideIn: boolean;
    /**
     * 像素转为rem
     */
    px2rem(px: any): number | "auto";
    /**
     * 是否要某一边缩进
     * @param side 方向
     */
    isShort(side: any): boolean;
    /**
     * touch X 起点
     */
    startPageX: number;
    /**
     * 滑动开始
     * @param ev 滑动事件
     */
    private onTouchStart;
    /**
     * touch X 移动长度
     */
    movePageX: number;
    /**
     * 滑动中
     * @param ev 滑动事件
     */
    private onTouchMove;
    /**
     * 滑动结束
     */
    private onTouchEnd;
    render(): JSX.Element;
}
