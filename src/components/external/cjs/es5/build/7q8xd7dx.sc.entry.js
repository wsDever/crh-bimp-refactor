"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var nb_component_core_js_1 = require("../nb-component.core.js");
var COUNTDOWN_SESSION = "$_BUTTON_COUNTDOWN", ButtonAsync = function () { function t() { this.width = 690, this.height = 88, this.bg = "#3E86F7", this.color = "#ffffff", this.radius = 8, this.noBorder = !1, this.countdown = 0, this.countdownUnit = "s", this.countdownContainer = ".countdown", this.loading = !1, this.disable = !1, this.countdownDisplay = Number(sessionStorage.getItem(COUNTDOWN_SESSION) || 0); } return t.prototype.done = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var t; return tslib_1.__generator(this, function (n) { return t = this.el.querySelector(this.countdownContainer), this.disable = !1, this.loading = !1, this.countdownDisplay = 0, sessionStorage.removeItem(COUNTDOWN_SESSION), this.count.emit({ status: "finish" }), t && (t.innerHTML = ""), [2, !0]; }); }); }, Object.defineProperty(t.prototype, "btnStyles", { get: function () { var t = "1px solid transparent"; return "#ffffff" === this.bg && "#ffffff" !== this.color && (t = "1px solid " + this.color), { width: this.width / 75 + "rem", height: this.height / 75 + "rem", borderRadius: this.radius / 75 + "rem", background: this.bg, color: this.color, border: this.noBorder ? "none" : t }; }, enumerable: !0, configurable: !0 }), t.prototype.handleCountdown = function () { this.disable = !0; var t = this.el.querySelector(this.countdownContainer); t && (t.innerHTML = String(this.countdownDisplay) + this.countdownUnit), sessionStorage.setItem(COUNTDOWN_SESSION, String(this.countdownDisplay)), this.countdownDisplay > 0 ? (this.countdownDisplay--, this.countdownTimer = setTimeout(this.handleCountdown.bind(this), 1e3)) : (clearTimeout(this.countdownTimer), this.done()); }, t.prototype.onClick = function () { this.loading = !0, this.countdown > 0 && (this.countdownDisplay = this.countdown, this.count.emit({ status: "start" }), this.handleCountdown()), this.tap.emit({ done: this.done.bind(this) }); }, t.prototype.componentDidLoad = function () { this.countdownDisplay > 0 && this.countdown > 0 && (this.count.emit({ status: "start" }), this.handleCountdown()); }, t.prototype.render = function () { return nb_component_core_js_1.h("button", { onClick: this.onClick.bind(this), disabled: this.disable || this.loading, class: "btn " + (this.loading ? "loading" : ""), style: Object.assign({}, this.btnStyles) }, nb_component_core_js_1.h("slot", null)); }, Object.defineProperty(t, "is", { get: function () { return "nb-button-async"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { bg: { type: String, attr: "bg" }, color: { type: String, attr: "color" }, countdown: { type: Number, attr: "countdown" }, countdownContainer: { type: String, attr: "countdown-container" }, countdownDisplay: { state: !0 }, countdownUnit: { type: String, attr: "countdown-unit" }, disable: { type: Boolean, attr: "disable", mutable: !0 }, done: { method: !0 }, el: { elementRef: !0 }, height: { type: Number, attr: "height" }, loading: { type: Boolean, attr: "loading", mutable: !0 }, noBorder: { type: Boolean, attr: "no-border" }, radius: { type: Number, attr: "radius" }, width: { type: Number, attr: "width" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "events", { get: function () { return [{ name: "tap", method: "tap", bubbles: !0, cancelable: !0, composed: !0 }, { name: "count", method: "count", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ".btn.sc-nb-button-async{border:none;outline:none}.btn.loading.sc-nb-button-async, .btn[disabled].sc-nb-button-async{opacity:.5}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.NbButtonAsync = ButtonAsync;
