"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var nb_component_core_js_1 = require("../nb-component.core.js");
var ICONS = { qingchu: '<svg class="icon icon-qingchu" viewBox="0 0 1024 1024"><path d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z m45.248-384l90.528-90.496a32 32 0 0 0-45.28-45.28L512 466.752l-90.496-90.528a32 32 0 0 0-45.28 45.28L466.752 512l-90.528 90.496a32 32 0 0 0 45.28 45.28L512 557.248l90.496 90.528a32 32 0 0 0 45.28-45.28L557.248 512z"  ></path></svg>', sousuo: '<svg class="icon icon-sousuo" viewBox="0 0 1024 1024"><path d="M718.496 673.28l190.816 190.784a32 32 0 1 1-45.248 45.248l-190.816-190.816A350.56 350.56 0 0 1 448 800C253.6 800 96 642.4 96 448S253.6 96 448 96s352 157.6 352 352c0 85.664-30.624 164.224-81.504 225.28zM448 736a288 288 0 1 0 0-576 288 288 0 0 0 0 576z"  ></path></svg>' }, SearchBar = function () { function e() { this.value = "", this.maxLength = 15, this.placeholder = "输入搜索关键字", this.cancelText = "取消", this.searchDelay = 500, this.isInputFocus = !1; } return e.prototype.onInputFocusChange = function (e) { this.focusChange.emit({ isInputFocus: e }); }, e.prototype.submitForm = function (e) { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (t) { return e && e.preventDefault(), this.submit.emit({ value: this.value }), [2, this]; }); }); }, e.prototype.removeValue = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return this.value = "", this.search.emit({ value: "" }), this.refInput.focus(), [2, !0]; }); }); }, e.prototype.cancelSearch = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { switch (e.label) {
    case 0: return this.value = "", this.search.emit({ value: "" }), [4, this.submitForm(null)];
    case 1: return e.sent(), [2, !0];
} }); }); }, e.prototype.onInput = function (e) { var t = this, n = e.target.value.trim(); this.delayTimer && clearTimeout(this.delayTimer), this.value = n, this.delayTimer = setTimeout(function () { t.search.emit({ value: n }); }, this.searchDelay); }, e.prototype.onFocus = function () { this.isInputFocus = !0; }, e.prototype.onBlur = function () { this.isInputFocus = !1; }, Object.defineProperty(e.prototype, "placeholderWithIcon", { get: function () { return nb_component_core_js_1.h("div", { class: "placeholder " + (this.inputActived ? "focus" : "") }, nb_component_core_js_1.h("i", { innerHTML: ICONS.sousuo }), " ", this.inputActived ? "" : this.placeholder); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "inputActived", { get: function () { return this.isInputFocus || this.value.length > 0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "removeValueButton", { get: function () { return this.value.length > 0 ? nb_component_core_js_1.h("i", { innerHTML: ICONS.qingchu, onClick: this.removeValue.bind(this) }) : ""; }, enumerable: !0, configurable: !0 }), e.prototype.componentDidLoad = function () { "" !== this.value && this.search.emit({ value: this.value }); }, e.prototype.render = function () { var e = this; return nb_component_core_js_1.h("form", { action: "", onSubmit: this.submitForm.bind(this), class: "search-bar" }, nb_component_core_js_1.h("input", { type: "text", class: "input " + (this.inputActived ? "focus" : ""), maxlength: this.maxLength, ref: function (t) { return e.refInput = t; }, onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), value: this.value }), this.placeholderWithIcon, this.removeValueButton, this.inputActived && nb_component_core_js_1.h("a", { class: "cancelSearch", href: "javascript:;", onClick: this.cancelSearch.bind(this) }, this.cancelText)); }, Object.defineProperty(e, "is", { get: function () { return "nb-search-bar"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { cancelSearch: { method: !0 }, cancelText: { type: String, attr: "cancel-text" }, isInputFocus: { state: !0, watchCallbacks: ["onInputFocusChange"] }, maxLength: { type: Number, attr: "max-length" }, placeholder: { type: String, attr: "placeholder" }, removeValue: { method: !0 }, searchDelay: { type: Number, attr: "search-delay" }, submitForm: { method: !0 }, value: { type: String, attr: "value", mutable: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "focusChange", method: "focusChange", bubbles: !0, cancelable: !0, composed: !0 }, { name: "search", method: "search", bubbles: !0, cancelable: !0, composed: !0 }, { name: "submit", method: "submit", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".search-bar.sc-nb-search-bar{width:10rem;height:1.173333333333333rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;position:relative;overflow:hidden}.search-bar.sc-nb-search-bar   .input.sc-nb-search-bar{padding:0;height:.8533333333333334rem;width:9.2rem;background:#f5f5f5;font-size:.4rem;border:1px solid #f5f5f5;border-radius:.4266666666666667rem;margin:0 auto 0 .4rem;-webkit-transition:width .2s;transition:width .2s;outline:none;color:#444;text-indent:.8666666666666667rem}.search-bar.sc-nb-search-bar   .input.sc-nb-search-bar::-webkit-input-placeholder{color:#999}.search-bar.sc-nb-search-bar   .input.sc-nb-search-bar:-ms-input-placeholder{color:#999}.search-bar.sc-nb-search-bar   .input.sc-nb-search-bar::-ms-input-placeholder{color:#999}.search-bar.sc-nb-search-bar   .input.sc-nb-search-bar::placeholder{color:#999}.search-bar.sc-nb-search-bar   .input.focus.sc-nb-search-bar{width:7.733333333333333rem;border-color:#eee}.search-bar.sc-nb-search-bar   .placeholder.sc-nb-search-bar{position:absolute;height:1.173333333333333rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:10rem;font-size:.37333333333333335rem;pointer-events:none;color:#999}.search-bar.sc-nb-search-bar   .placeholder.sc-nb-search-bar   .icon-sousuo.sc-nb-search-bar{width:.5333333333333333rem}.search-bar.sc-nb-search-bar   .placeholder.focus.sc-nb-search-bar{-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;left:.6666666666666666rem;color:#444}.search-bar.sc-nb-search-bar   .icon.sc-nb-search-bar{fill:currentColor;overflow:hidden;vertical-align:-.15em;display:inline-block}.search-bar.sc-nb-search-bar   .icon-qingchu.sc-nb-search-bar{position:absolute;right:2rem;top:.26666666666666666rem;color:#ccc;width:.64rem}.search-bar.sc-nb-search-bar   .cancelSearch.sc-nb-search-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:.4266666666666667rem;color:#3b98fc;text-decoration:none;width:1.733333333333333rem;height:.8533333333333334rem}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.NbSearchBar = SearchBar;