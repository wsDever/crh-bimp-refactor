import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * miniRefresh封装，API地址：
 * http://www.minirefresh.com/minirefresh-doc/api/api_minirefresh.html
 */
/**
 * @slot 滚动框的具体内容
 */
export declare class Refresh {
    /**
     * 根元素
     */
    el: HTMLElement;
    /**
     * 禁用下拉刷新
     */
    lockRefresh: boolean;
    /**
     * 禁用上拉加载更多
     */
    lockScrollLoad: boolean;
    /**
     * 自动执行一次上拉加载
     */
    autoScrollLoad: boolean;
    /**
     * 上下拉动的阀值
     */
    offset: number;
    /**
     * 提示文字区域的背景色
     */
    background: string;
    /**
     * 下拉刷新文案方面的配置
     * 参数	参数类型	默认值	说明
        isWrapCssTranslate	Boolean	false	是否下拉时wrap（下拉区域不是内容区域，与scroll区分开）会跟随css translate
        contentdown	String	'下拉刷新'	下拉刷新默认提示
        contentover	String	'释放刷新'	在超过阈值后的提示
        contentrefresh	String	'加载中...'	正在刷新中的提示
        contentsuccess	String	'刷新成功'	刷新成功后，结束前，成功状态的提示
        contenterror	String	'刷新失败'	刷新成功后，结束前，失败状态的提示
     */
    refreshOptions: object;
    /**
     * 下拉刷新文案方面的配置
     * 参数	参数类型	默认值	说明
        contentdown	String	'上拉显示更多'	上拉加载默认提示，一般默认情况会隐藏用不到它
        contentrefresh	String	'加载中...'	上拉加载时的提示
        contentnomore	String	'没有更多数据了'	没有更多数据时的提示
        toTop	Object	默认配置	滚动到顶部的相关配置，图片的话请在css中修改
        toTop.isEnable	Boolean	true	是否开启自动滚动到顶部
        toTop.duration	Number	300	滚动到顶部的过渡时间
        toTop.offset	Number	800	阈值，滚动超过多少距离后才会显示滚动到顶部按钮
     */
    scrollLoadOptions: object;
    /**
     * 获取 refresh 实例化对象
     */
    getRefresh(): Promise<any>;
    /**
     * refresh 实例化对象
     */
    private MiniRefresh;
    /**
     * 下拉刷新事件
     */
    refresh: EventEmitter;
    /**
     * 上拉加载事件
     */
    scrollLoad: EventEmitter;
    componentDidLoad(): void;
    render(): JSX.Element;
}
