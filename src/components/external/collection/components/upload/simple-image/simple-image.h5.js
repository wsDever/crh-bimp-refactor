import EXIF from './exif';
const ICONS = {
    qingchu: `<svg class="icon icon-qingchu" viewBox="0 0 1024 1024"><path d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z m45.248-384l90.528-90.496a32 32 0 0 0-45.28-45.28L512 466.752l-90.496-90.528a32 32 0 0 0-45.28 45.28L466.752 512l-90.528 90.496a32 32 0 0 0 45.28 45.28L512 557.248l90.496 90.528a32 32 0 0 0 45.28-45.28L557.248 512z"  ></path></svg>`
};
export class UploadSimpleImage {
    constructor() {
        this.maxLength = 4;
        this.imageSize = 1024 * 4;
        this.rate = 2;
        this.previewSize = 175;
        this.uploadText = '上传截图';
        this.previewImages = [];
        this.loading = false;
    }
    async getImages() {
        return this.previewImages;
    }
    selectImage() {
        if (this.loading)
            return;
        this.uploader.click();
    }
    removeImage(image) {
        this.previewImages.splice(this.previewImages.indexOf(image), 1);
        this.previewImages = [...this.previewImages];
        this.change.emit();
    }
    countImageBase64Szie(base64) {
        var strLength = base64.length - 23;
        var fileLength = parseInt(String(strLength - (strLength / 8) * 2));
        var size = '';
        size = (fileLength / 1024).toFixed(2);
        return parseInt(size);
    }
    async handleImage(file) {
        let canvas = document.createElement('canvas');
        let rCanvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let rctx = rCanvas.getContext('2d');
        let reader = new FileReader();
        let image = new Image();
        return new Promise((resolve, reject) => {
            reader.onload = () => {
                let url = reader.result;
                image.src = String(url);
            };
            image.onload = () => {
                let w = image.naturalWidth;
                let h = image.naturalHeight;
                let rW = 0;
                let rH = 0;
                if (w > 750 * this.rate) {
                    rW = 750 * this.rate;
                    rH = h * ((750 * this.rate) / w);
                }
                else {
                    rW = w;
                    rH = h;
                }
                canvas.width = w;
                canvas.height = h;
                rCanvas.width = rW;
                rCanvas.height = rH;
                EXIF.getData(image, function () {
                    let orientation = EXIF.getTag(this, 'Orientation');
                    switch (orientation) {
                        case 1:
                            console.log('旋转0°');
                            ctx.rotate((0 * Math.PI) / 180);
                            ctx.drawImage(image, 0, 0);
                            rctx.drawImage(canvas, 0, 0, w, h, 0, 0, rCanvas.width, rCanvas.height);
                            break;
                        case 6:
                            console.log('旋转90°');
                            canvas.width = h;
                            canvas.height = w;
                            ctx.rotate((90 * Math.PI) / 180);
                            ctx.translate(0, -h);
                            ctx.drawImage(image, 0, 0);
                            rCanvas.width = rH;
                            rCanvas.height = rW;
                            rctx.drawImage(canvas, 0, 0, h, w, 0, 0, rCanvas.width, rCanvas.height);
                            break;
                        case 3:
                            console.log('旋转180°');
                            ctx.rotate((180 * Math.PI) / 180);
                            ctx.translate(-w, -h);
                            ctx.drawImage(image, 0, 0);
                            rctx.drawImage(canvas, 0, 0, w, h, 0, 0, rCanvas.width, rCanvas.height);
                            break;
                        case 8:
                            console.log('旋转270°');
                            canvas.width = h;
                            canvas.height = w;
                            ctx.rotate((270 * Math.PI) / 180);
                            ctx.translate(-w, 0);
                            ctx.drawImage(image, 0, 0);
                            rCanvas.width = rH;
                            rCanvas.height = rW;
                            rctx.drawImage(canvas, 0, 0, h, w, 0, 0, rCanvas.width, rCanvas.height);
                            break;
                        case undefined:
                            console.log('undefined  不旋转');
                            ctx.rotate((0 * Math.PI) / 180);
                            ctx.drawImage(image, 0, 0);
                            rctx.drawImage(canvas, 0, 0, w, h, 0, 0, rCanvas.width, rCanvas.height);
                            break;
                    }
                });
                const base64 = rCanvas.toDataURL(file.type);
                if (this.countImageBase64Szie(base64) > this.imageSize) {
                    const info = `上传的图片尺寸过大(压缩后依然大于${this.imageSize}KB)`;
                    reject(info);
                }
                resolve(base64);
            };
            reader.readAsDataURL(file);
        });
    }
    async upload(ev) {
        let files = ev.target.files;
        let fileLen = files.length;
        if (fileLen === 0)
            return;
        if (fileLen + this.previewImages.length > this.maxLength) {
            this.error.emit({
                info: `不能上传超过${this.maxLength}张`
            });
            return;
        }
        this.change.emit({
            images: files
        });
        this.loading = true;
        for (let i = 0; i < files.length; i++) {
            const base64 = await this.handleImage(files[i]).catch(info => {
                this.error.emit({ info });
            });
            if (base64) {
                this.previewImages.push({ base64 });
                this.previewImages = [...this.previewImages];
            }
        }
        this.uploader.value = '';
        this.loading = false;
    }
    get previewStyles() {
        return {
            width: `${this.previewSize / 75}rem`,
            height: `${this.previewSize / 75}rem`,
            borderRadius: `${7 / 75}rem`
        };
    }
    render() {
        return [
            h("div", { class: "upload-images" },
                this.previewImages.map(img => {
                    return (h("div", { class: "preview", style: Object.assign({}, this.previewStyles, { backgroundImage: `url(${img.url || img.base64})` }) },
                        h("i", { innerHTML: ICONS.qingchu, onClick: this.removeImage.bind(this, img) })));
                }),
                this.previewImages.length < this.maxLength && (h("div", { class: "up-btn", style: Object.assign({}, this.previewStyles), onClick: this.selectImage.bind(this) },
                    this.loading && (h("div", { class: "lds-ring" },
                        h("div", null),
                        h("div", null),
                        h("div", null),
                        h("div", null))),
                    !this.loading && h("div", { class: "cross-x" }),
                    !this.loading && h("div", { class: "cross-y" }),
                    !this.loading && h("span", { class: "text" }, this.uploadText)))),
            h("input", { onChange: this.upload.bind(this), ref: el => (this.uploader = el), style: {
                    display: 'none'
                }, type: "file", accept: "image/jpeg, image/jpg, image/png, image/bmp, image/gif", multiple: true })
        ];
    }
    static get is() { return "nb-upload-simple-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "getImages": {
            "method": true
        },
        "imageSize": {
            "type": Number,
            "attr": "image-size"
        },
        "loading": {
            "state": true
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "previewImages": {
            "state": true
        },
        "previewSize": {
            "type": Number,
            "attr": "preview-size"
        },
        "rate": {
            "type": Number,
            "attr": "rate"
        },
        "uploadText": {
            "type": String,
            "attr": "upload-text"
        }
    }; }
    static get events() { return [{
            "name": "error",
            "method": "error",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nb-upload-simple-image:**/"; }
}
