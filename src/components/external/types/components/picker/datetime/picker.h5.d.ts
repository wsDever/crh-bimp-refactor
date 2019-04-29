import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * 时间选择器
 * 核心代码封装自：https://github.com/fengyuanchen/pickerjs
 */
export declare class DatetimePicker {
    el: HTMLElement;
    ready: EventEmitter;
    /**
     * 日期时间格式设置
      YYYY: 4 digits year with leading zero
      YYY: 3 digits year with leading zero
      YY: 2 digits year with leading zero and be converted to a year near 2000
      Y: Years with any number of digits and sign
      MMMM: Month name
      MMM: Short month name
      MM: Month number with leading zero
      M: Month number
      DD: Day of month with leading zero
      D: Day of month
      HH: Hours with leading zero
      H: Hours
      mm: Minutes with leading zero
      m: Minutes
      ss: Seconds with leading zero
      s: Seconds
      SSS: Milliseconds with leading zero
      SS: Milliseconds with leading zero
      S: Milliseconds
     */
    format: string;
    /**
     * 当前选中时间
     * new Date(2048, 9, 24, 5, 12) or '2048-10-24 05:12'
     * @type {String|Date} 字符串或者时间对象
     */
    date?: any;
    /**
     * 触发选择显示开关的对象，一般是 input 框，可以是选择器字符串
     */
    for: string;
    /**
     * 每个选项上是否显示提示性文字
     */
    /**
     * 选项可见行数
     */
    rows: number;
    /**
     * 标题内容
     */
    textTitle: string;
    /**
     * 确定按钮文案
     */
    textConfirm: string;
    /**
     * 取消按钮文案
     */
    textCancel: string;
    /**
     * 获取实例化选择器
     * 之后可以使用API中对应的方法
     * show() how the picker.
     * hide() Hide the picker.
     * pick() Pick the current date to the target element.
     * getDate([formatted: 是否使用格式化]) Get the current date.
     * setDate(date: Date) Override the current date with a new date.
     * update() Update the picker with the current the element value / text.
     * reset() Reset the picker and the element value / text.
     * parseDate(date) @return {Date} Parse a date string with the set date format.
     * formatDate(date) @return {String} Format a date object to a string with the set date format.
     * destroy() Destroy the picker and remove the instance from the target element.
     */
    getPicker(): Promise<any>;
    /**
     * 选择器
     */
    private Picker;
    componentDidLoad(): void;
    render(): JSX.Element;
}
