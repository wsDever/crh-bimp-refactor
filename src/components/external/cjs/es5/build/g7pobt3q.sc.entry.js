"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nb_component_core_js_1 = require("../nb-component.core.js");
var StringLimit = function () { function e() { this.mode = "line", this.number = 1; } return Object.defineProperty(e.prototype, "limitLineStyles", { get: function () { if ("line" === this.mode)
        return { "-webkit-line-clamp": String(this.number) }; }, enumerable: !0, configurable: !0 }), e.prototype.limitLengthString = function () { if ("length" === this.mode) {
    var e = this.el.innerText.trim();
    this.el.shadowRoot.innerHTML = e.slice(0, this.number) + "...";
} }, e.prototype.componentDidLoad = function () { this.limitLengthString(); }, e.prototype.render = function () { return "line" === this.mode ? nb_component_core_js_1.h("div", { class: "limit-line", style: Object.assign({}, this.limitLineStyles) }, nb_component_core_js_1.h("slot", null)) : nb_component_core_js_1.h("span", { class: "limit-length" }, nb_component_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "nb-string-limit"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { el: { elementRef: !0 }, mode: { type: String, attr: "mode" }, number: { type: Number, attr: "number" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".limit-line.sc-nb-string-limit{line-height:1.4;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.NbStringLimit = StringLimit;
