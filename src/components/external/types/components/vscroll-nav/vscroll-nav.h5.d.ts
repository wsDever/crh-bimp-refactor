import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * 仿通讯录侧边垂直滑动定位条
 * @slot 用于定位的内容列表
 */
export declare class VscrollNav {
    el: HTMLElement;
    /**
     * 触发滚动
     */
    scrollTo: EventEmitter;
    /**
     * 可用于导航滑动的关键字数组
     */
    keywords: string[];
    /**
     * 定义滚动元素 id 的前置与选中的keyword 合并成完整的 id
     * eg：'vscroll-' + 'A' -> id='vscroll-A'
     */
    idPrefix: string;
    /**
     * 包裹可滚动的容器，不填写的话默认为window级别滚动
     */
    scroller?: string;
    /**
     * 滚动列表到指定id位置
     * @param id ID名称
     */
    scrollToId(id: string): Promise<any>;
    /**
     * 处理点击
     * @param ev 点击对象
     */
    private onNavClick;
    /**
     * 处理滑动
     * @param ev 滑动对象
     */
    private onNavMove;
    render(): JSX.Element;
}
