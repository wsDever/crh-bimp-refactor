import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * 简单的 H5实现图片选择上传，可设置最大上传几张
 */
export declare class UploadSimpleImage {
    /**
     * 最多能上传几张
     */
    maxLength: number;
    /**
     * 图片最大尺寸单位（KB）
     */
    imageSize: number;
    /**
     * 将原图缩放至750宽度*多少倍
     */
    rate: number;
    /**
     * 预览图的尺寸
     */
    previewSize: number;
    /**
     * 提示上传按钮的文案
     */
    uploadText: string;
    /**
     * 已经选中的图片
     */
    previewImages: any[];
    /**
     * 各种异步加载状态
     */
    loading: boolean;
    /**
     * 当发生错误
     */
    error: EventEmitter;
    /**
     * 触发图片选择改动
     */
    change: EventEmitter;
    /**
     * 获取预览图片合集
     */
    getImages(): Promise<any[]>;
    /**
     * 上传 input
     */
    private uploader;
    /**
     * 触发选择图片上传
     */
    private selectImage;
    /**
     * 移除图片
     */
    private removeImage;
    /**
     * 获取 base64尺寸
     * @param base64
     */
    private countImageBase64Szie;
    /**
     * 逐个处理上传的图片
     */
    private handleImage;
    /**
     * 当选择的图片发生变化处理上传图片
     */
    private upload;
    /**
     * 预览样式
     */
    readonly previewStyles: {
        width: string;
        height: string;
        borderRadius: string;
    };
    render(): JSX.Element[];
}
