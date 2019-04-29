"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var nb_component_core_js_1 = require("../nb-component.core.js");
function _typeof(e) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
function _classCallCheck(e, t) { if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, t) { for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
} }
function _createClass(e, t, n) { return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e; }
function _toConsumableArray(e) { return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread(); }
function _arrayWithoutHoles(e) { if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
        n[t] = e[t];
    return n;
} }
function _iterableToArray(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
    return Array.from(e); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
var DEFAULTS = { container: null, controls: !1, date: null, format: "YYYY-MM-DD HH:mm", headers: !1, increment: 1, inline: !1, language: "zh-CN", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], rows: 5, text: { title: "Pick a date and time", cancel: "Cancel", confirm: "OK", year: "Year", month: "Month", day: "Day", hour: "Hour", minute: "Minute", second: "Second", millisecond: "Millisecond" }, translate: function (e, t) { return t; }, show: null, shown: null, hide: null, hidden: null, pick: null }, TEMPLATE = '<div class="picker" data-picker-action="hide" touch-action="none" tabindex="-1" role="dialog"><div class="picker-dialog" role="document"><div class="picker-header"><button type="button" class="picker-cancel" data-picker-action="hide">{{ cancel }}</button><h4 class="picker-title">{{ title }}</h4><button type="button" class="picker-confirm" data-picker-action="pick">{{ confirm }}</button></div><div class="picker-body"><div class="picker-grid"></div><div class="picker-picked-line"></div></div></div></div>', IS_BROWSER = "undefined" != typeof window, WINDOW = IS_BROWSER ? window : {}, IS_TOUCH_DEVICE = !!IS_BROWSER && "ontouchstart" in WINDOW.document.documentElement, HAS_POINTER_EVENT = !!IS_BROWSER && "PointerEvent" in WINDOW, NAMESPACE = "picker", LANGUAGES = { "zh-CN": { months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], text: { title: "选择日期时间", cancel: "取消", confirm: "确认", year: "年", month: "月", day: "日", hour: "时", minute: "分", second: "秒", millisecond: "毫秒" } } }, ACTION_HIDE = "hide", ACTION_NEXT = "next", ACTION_PICK = "pick", ACTION_PREV = "prev", CLASS_OPEN = "".concat(NAMESPACE, "-open"), CLASS_OPENED = "".concat(NAMESPACE, "-opened"), CLASS_PICKED = "".concat(NAMESPACE, "-picked"), DATA_ACTION = "".concat(NAMESPACE, "Action"), DATA_TOKEN = "token", DATA_TYPE = "type", DATA_NAME = "name", DATA_VALUE = "value", EVENT_CLICK = "click", EVENT_FOCUS = "focus", EVENT_HIDDEN = "hidden", EVENT_HIDE = "hide", EVENT_KEY_DOWN = "keydown", EVENT_PICK = "pick", EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown", EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove", EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup", EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START, EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE, EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END, EVENT_SHOW = "show", EVENT_SHOWN = "shown", EVENT_WHEEL = "wheel mousewheel DOMMouseScroll", _Object$prototype = Object.prototype, hasOwnProperty = _Object$prototype.hasOwnProperty, toString = _Object$prototype.toString;
function typeOf(e) { return toString.call(e).slice(8, -1).toLowerCase(); }
function isString(e) { return "string" == typeof e; }
var isFinite = Number.isFinite || WINDOW.isFinite, isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(e) { return "number" == typeof e && !isNaN(e); }
function isObject(e) { return "object" === _typeof(e) && null !== e; }
function isPlainObject(e) { if (!isObject(e))
    return !1; try {
    var t = e.constructor, n = t.prototype;
    return t && n && hasOwnProperty.call(n, "isPrototypeOf");
}
catch (e) {
    return !1;
} }
function isFunction(e) { return "function" == typeof e; }
function isDate(e) { return "date" === typeOf(e); }
function isValidDate(e) { return isDate(e) && "Invalid Date" !== e.toString(); }
function forEach(e, t) { if (e && isFunction(t))
    if (Array.isArray(e) || isNumber(e.length)) {
        var n, i = e.length;
        for (n = 0; n < i && !1 !== t.call(e, e[n], n, e); n += 1)
            ;
    }
    else
        isObject(e) && Object.keys(e).forEach(function (n) { t.call(e, e[n], n, e); }); return e; }
function deepAssign(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i]; return isObject(e) && n.length > 0 && n.forEach(function (t) { isObject(t) && Object.keys(t).forEach(function (n) { e[n] = isPlainObject(e[n]) && isPlainObject(t[n]) ? deepAssign({}, e[n], t[n]) : t[n]; }); }), e; }
function addClass(e, t) { if (t)
    if (isNumber(e.length))
        forEach(e, function (e) { addClass(e, t); });
    else if (e.classList)
        e.classList.add(t);
    else {
        var n = e.className.trim();
        n ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t)) : e.className = t;
    } }
function removeClass(e, t) { t && (isNumber(e.length) ? forEach(e, function (e) { removeClass(e, t); }) : e.classList ? e.classList.remove(t) : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ""))); }
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
function hyphenate(e) { return e.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase(); }
function getData(e, t) { return isObject(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(hyphenate(t))); }
function setData(e, t, n) { isObject(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute("data-".concat(hyphenate(t)), n); }
function removeData(e, t) { if (isObject(e[t]))
    try {
        delete e[t];
    }
    catch (n) {
        e[t] = void 0;
    }
else if (e.dataset)
    try {
        delete e.dataset[t];
    }
    catch (n) {
        e.dataset[t] = void 0;
    }
else
    e.removeAttribute("data-".concat(hyphenate(t))); }
var REGEXP_SPACES = /\s\s*/, onceSupported = function () { var e = !1; if (IS_BROWSER) {
    var t = !1, n = function () { }, i = Object.defineProperty({}, "once", { get: function () { return e = !0, t; }, set: function (e) { t = e; } });
    WINDOW.addEventListener("test", n, i), WINDOW.removeEventListener("test", n, i);
} return e; }();
function removeListener(e, t, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = n; t.trim().split(REGEXP_SPACES).forEach(function (t) { if (!onceSupported) {
    var a = e.listeners;
    a && a[t] && a[t][n] && (r = a[t][n], delete a[t][n], 0 === Object.keys(a[t]).length && delete a[t], 0 === Object.keys(a).length && delete e.listeners);
} e.removeEventListener(t, r, i); }); }
function addListener(e, t, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = n; t.trim().split(REGEXP_SPACES).forEach(function (t) { if (i.once && !onceSupported) {
    var a = e.listeners, s = void 0 === a ? {} : a;
    r = function () { delete s[t][n], e.removeEventListener(t, r, i); for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++)
        o[c] = arguments[c]; n.apply(e, o); }, s[t] || (s[t] = {}), s[t][n] && e.removeEventListener(t, s[t][n], i), s[t][n] = r, e.listeners = s;
} e.addEventListener(t, r, i); }); }
function dispatchEvent(e, t, n) { var i; return isFunction(Event) && isFunction(CustomEvent) ? i = new CustomEvent(t, { detail: n, bubbles: !0, cancelable: !0 }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(i); }
function isLeapYear(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0; }
function getDaysInMonth(e, t) { return [31, isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]; }
function addLeadingZero(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = String(Math.abs(e)), i = n.length, r = ""; for (e < 0 && (r += "-"); i < t;)
    i += 1, r += "0"; return r + n; }
function tokenToType(e) { return { Y: "year", M: "month", D: "day", H: "hour", m: "minute", s: "second", S: "millisecond" }[e.charAt(0)]; }
var REGEXP_TOKENS = /(Y|M|D|H|m|s|S)\1*/g;
function parseFormat(e) { var t = e.match(REGEXP_TOKENS); if (!t)
    throw new Error("Invalid format."); var n = { tokens: t = t.filter(function (e, n) { return t.indexOf(e) === n; }) }; return t.forEach(function (e) { n[tokenToType(e)] = e; }), n; }
var events = { bind: function () { var e = this.element, t = this.options, n = this.grid; isFunction(t.show) && addListener(e, EVENT_SHOW, t.show), isFunction(t.shown) && addListener(e, EVENT_SHOWN, t.shown), isFunction(t.hide) && addListener(e, EVENT_HIDE, t.hide), isFunction(t.hidden) && addListener(e, EVENT_HIDDEN, t.hidden), isFunction(t.pick) && addListener(e, EVENT_PICK, t.pick), addListener(e, EVENT_FOCUS, this.onFocus = this.focus.bind(this)), addListener(e, EVENT_CLICK, this.onFocus), addListener(this.picker, EVENT_CLICK, this.onClick = this.click.bind(this)), addListener(n, EVENT_WHEEL, this.onWheel = this.wheel.bind(this)), addListener(n, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this)), addListener(document, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this)), addListener(document, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this)), addListener(document, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this)); }, unbind: function () { var e = this.element, t = this.options, n = this.grid; isFunction(t.show) && removeListener(e, EVENT_SHOW, t.show), isFunction(t.shown) && removeListener(e, EVENT_SHOWN, t.shown), isFunction(t.hide) && removeListener(e, EVENT_HIDE, t.hide), isFunction(t.hidden) && removeListener(e, EVENT_HIDDEN, t.hidden), isFunction(t.pick) && removeListener(e, EVENT_PICK, t.pick), removeListener(e, EVENT_FOCUS, this.onFocus), removeListener(e, EVENT_CLICK, this.onFocus), removeListener(this.picker, EVENT_CLICK, this.onClick), removeListener(n, EVENT_WHEEL, this.onWheel), removeListener(n, EVENT_POINTER_DOWN, this.onPointerDown), removeListener(document, EVENT_POINTER_MOVE, this.onPointerMove), removeListener(document, EVENT_POINTER_UP, this.onPointerUp), removeListener(document, EVENT_KEY_DOWN, this.onKeyDown); } }, handlers = { focus: function (e) { e.target.blur(), this.show(); }, click: function (e) { var t = e.target, n = getData(t, DATA_ACTION); switch (n) {
        case ACTION_HIDE:
            this.hide();
            break;
        case ACTION_PICK:
            this.pick();
            break;
        case ACTION_PREV:
        case ACTION_NEXT: this[n](getData(t.parentElement, DATA_TYPE));
    } }, wheel: function (e) { var t = e.target; if (t !== this.grid) {
        for (e.preventDefault(); t.parentElement && t.parentElement !== this.grid;)
            t = t.parentElement;
        var n = getData(t, DATA_TYPE);
        e.deltaY < 0 ? this.prev(n) : this.next(n);
    } }, pointerdown: function (e) { var t = e.target; if (t !== this.grid && !getData(t, DATA_ACTION)) {
        for (e.preventDefault(); t.parentElement && t.parentElement !== this.grid;)
            t = t.parentElement;
        var n = t.querySelector(".".concat(NAMESPACE, "-list")), i = n.firstElementChild.offsetHeight;
        this.cell = { elem: t, list: n, moveY: 0, maxMoveY: i, minMoveY: i / 2, startY: e.changedTouches ? e.changedTouches[0].pageY : e.pageY, type: getData(t, DATA_TYPE) };
    } }, pointermove: function (e) { var t = this.cell; if (t) {
        e.preventDefault();
        var n = e.changedTouches ? e.changedTouches[0].pageY : e.pageY, i = t.moveY + (n - t.startY);
        t.startY = n, t.moveY = i, Math.abs(i) < t.maxMoveY ? t.list.style.top = "".concat(i, "px") : (t.list.style.top = 0, t.moveY = 0, i >= t.maxMoveY ? this.prev(t.type) : i <= -t.maxMoveY && this.next(t.type));
    } }, pointerup: function (e) { var t = this.cell; t && (e.preventDefault(), t.list.style.top = 0, t.moveY >= t.minMoveY ? this.prev(t.type) : t.moveY <= -t.minMoveY && this.next(t.type), this.cell = null); }, keydown: function (e) { !this.shown || "Escape" !== e.key && 27 !== e.keyCode || this.hide(); } }, helpers = { render: function (e) { var t = this; if (e) {
        var n = this.options, i = this.data[e], r = this.current(e), a = isFunction(i.max) ? i.max() : i.max, s = isFunction(i.min) ? i.min() : i.min, o = 0;
        isFinite(a) && (o = s > 0 ? a : a + 1), i.list.innerHTML = "", i.current = r;
        for (var c = 0; c < n.rows + 2; c += 1) {
            var l = document.createElement("li"), d = c - i.index, h = r + d * i.increment;
            o && (h %= o) < s && (h += o), l.textContent = n.translate(e, i.aliases ? i.aliases[h] : addLeadingZero(h + i.offset, i.digit)), setData(l, DATA_NAME, e), setData(l, DATA_VALUE, h), addClass(l, "".concat(NAMESPACE, "-item")), 0 === d && (addClass(l, CLASS_PICKED), i.item = l), i.list.appendChild(l);
        }
    }
    else
        this.format.tokens.forEach(function (e) { return t.render(tokenToType(e)); }); }, current: function (e, t) { var n = this.date, i = this.format, r = i[e]; switch (r.charAt(0)) {
        case "Y": return isNumber(t) && (n.setFullYear(2 === r.length ? 2e3 + t : t), i.month && this.render(tokenToType(i.month)), i.day && this.render(tokenToType(i.day))), n.getFullYear();
        case "M": return isNumber(t) && (n.setMonth(t, Math.min(n.getDate(), getDaysInMonth(n.getFullYear(), t))), i.day && this.render(tokenToType(i.day))), n.getMonth();
        case "D": return isNumber(t) && n.setDate(t), n.getDate();
        case "H": return isNumber(t) && n.setHours(t), n.getHours();
        case "m": return isNumber(t) && n.setMinutes(t), n.getMinutes();
        case "s": return isNumber(t) && n.setSeconds(t), n.getSeconds();
        case "S": return isNumber(t) && n.setMilliseconds(t), n.getMilliseconds();
    } return n; }, getValue: function () { var e = this.element; return this.isInput ? e.value : e.textContent; }, setValue: function (e) { var t = this.element; this.isInput ? t.value = e : this.options.container && (t.textContent = e); }, open: function () { var e = this.body; e.style.overflow = "hidden", e.style.paddingRight = "".concat(this.scrollBarWidth + (parseFloat(this.initialBodyPaddingRight) || 0), "px"); }, close: function () { var e = this.body; e.style.overflow = "", e.style.paddingRight = this.initialBodyPaddingRight; } }, methods = { show: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.element, n = this.picker; if (this.inline || this.shown)
        return this; if (!1 === dispatchEvent(t, EVENT_SHOW))
        return this; this.shown = !0, this.open(), addClass(n, CLASS_OPEN); var i = function () { dispatchEvent(t, EVENT_SHOWN); }; return addClass(n, CLASS_OPENED), e ? i() : setTimeout(i, 300), this; }, hide: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this.element, i = this.picker; if (this.inline || !this.shown)
        return this; if (!1 === dispatchEvent(n, EVENT_HIDE))
        return this; this.shown = !1, removeClass(i, CLASS_OPENED); var r = function () { e.close(), removeClass(i, CLASS_OPEN), dispatchEvent(n, EVENT_HIDDEN); }; return t ? r() : setTimeout(r, 300), this; }, prev: function (e) { var t = this.options, n = this.format[e], i = this.data[e], r = i.list, a = r.lastElementChild, s = isFunction(i.max) ? i.max() : i.max, o = isFunction(i.min) ? i.min() : i.min, c = i.item.previousElementSibling, l = Number(getData(r.firstElementChild, DATA_VALUE)) - i.increment; return l < o && (l += s - o + 1), a.textContent = t.translate(e, i.aliases ? i.aliases[l] : addLeadingZero(l + i.offset, n.length)), setData(a, DATA_VALUE, l), c && (removeClass(i.item, CLASS_PICKED), addClass(c, CLASS_PICKED), i.item = c), r.insertBefore(a, r.firstElementChild), i.current = Number(getData(i.item, DATA_VALUE)), this.current(e, i.current), this.inline && t.container && this.pick(), this; }, next: function (e) { var t = this.options, n = this.format[e], i = this.data[e], r = i.list, a = r.firstElementChild, s = isFunction(i.max) ? i.max() : i.max, o = isFunction(i.min) ? i.min() : i.min, c = i.item.nextElementSibling, l = Number(getData(r.lastElementChild, DATA_VALUE)) + i.increment; return l > s && (l -= s - o + 1), a.textContent = t.translate(e, i.aliases ? i.aliases[l] : addLeadingZero(l + i.offset, n.length)), setData(a, DATA_VALUE, l), r.appendChild(a), c && (removeClass(i.item, CLASS_PICKED), addClass(c, CLASS_PICKED), i.item = c), i.current = Number(getData(i.item, DATA_VALUE)), this.current(e, i.current), this.inline && t.container && this.pick(), this; }, pick: function () { var e = this.element; if (!1 === dispatchEvent(e, EVENT_PICK))
        return this; var t = this.formatDate(this.date); return this.setValue(t), this.isInput && !1 === dispatchEvent(e, "change") && this.reset(), this.hide(), this; }, getDate: function () { var e = this.date; return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this.formatDate(e) : new Date(e); }, setDate: function (e) { return e && (this.date = this.parseDate(e), this.render()), this; }, update: function () { return this.date = this.parseDate(this.getValue()), this.render(), this; }, reset: function () { return this.setValue(this.initialValue), this.date = new Date(this.initialDate), this.render(), this; }, parseDate: function (e) { var t = this.options, n = this.format, i = []; if (isDate(e))
        return new Date(e); if (isString(e)) {
        var r = [].concat(_toConsumableArray(t.months), _toConsumableArray(t.monthsShort), ["\\d+"]);
        if ((i = e.match(new RegExp("(".concat(r.join("|"), ")"), "g"))) && e.length === t.format.length && i.length !== n.tokens.length && (i = n.tokens.map(function (n) { return e.substr(t.format.indexOf(n), n.length); })), !i || i.length !== n.tokens.length)
            return new Date;
    } var a = new Date; return i.forEach(function (i, r) { var s = n.tokens[r], o = Number(i); switch (s) {
        case "YYYY":
        case "YYY":
        case "Y":
            var c = e.indexOf(i), l = "-" === e.substr(c - 1, 1), d = c > 1 && l && /\S/.test(e.substr(c - 2, 1)) || 1 === c && l;
            a.setFullYear(d ? -o : o);
            break;
        case "YY":
            a.setFullYear(2e3 + o);
            break;
        case "MMMM":
            a.setMonth(t.months.indexOf(i));
            break;
        case "MMM":
            a.setMonth(t.monthsShort.indexOf(i));
            break;
        case "MM":
        case "M":
            a.setMonth(o - 1);
            break;
        case "DD":
        case "D":
            a.setDate(o);
            break;
        case "HH":
        case "H":
            a.setHours(o);
            break;
        case "mm":
        case "m":
            a.setMinutes(o);
            break;
        case "ss":
        case "s":
            a.setSeconds(o);
            break;
        case "SSS":
        case "SS":
        case "S": a.setMilliseconds(o);
    } }), a; }, formatDate: function (e) { var t = this.options, n = this.format, i = ""; if (isValidDate(e)) {
        var r = e.getFullYear(), a = e.getMonth(), s = e.getDate(), o = e.getHours(), c = e.getMinutes(), l = e.getSeconds(), d = e.getMilliseconds();
        i = t.format, n.tokens.forEach(function (e) { var n = ""; switch (e) {
            case "YYYY":
            case "YYY":
            case "Y":
                n = addLeadingZero(r, e.length);
                break;
            case "YY":
                n = addLeadingZero(r % 100, 2);
                break;
            case "MMMM":
                n = t.months[a];
                break;
            case "MMM":
                n = t.monthsShort[a];
                break;
            case "MM":
            case "M":
                n = addLeadingZero(a + 1, e.length);
                break;
            case "DD":
            case "D":
                n = addLeadingZero(s, e.length);
                break;
            case "HH":
            case "H":
                n = addLeadingZero(o, e.length);
                break;
            case "mm":
            case "m":
                n = addLeadingZero(c, e.length);
                break;
            case "ss":
            case "s":
                n = addLeadingZero(l, e.length);
                break;
            case "SSS":
            case "SS":
            case "S": n = addLeadingZero(d, e.length);
        } i = i.replace(e, n); });
    } return i; }, destroy: function () { var e = this.element, t = this.picker; return getData(e, NAMESPACE) ? (this.hide(!0), this.unbind(), removeData(e, NAMESPACE), t.parentNode.removeChild(t), this) : this; } }, REGEXP_DELIMITER = /\{\{\s*(\w+)\s*\}\}/g, REGEXP_INPUTS = /input|textarea/i, AnotherPicker = WINDOW.Picker, Picker = function () { function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (_classCallCheck(this, e), !t || 1 !== t.nodeType)
    throw new Error("The first argument is required and must be an element."); this.element = t, this.options = deepAssign({}, DEFAULTS, LANGUAGES[n.language], isPlainObject(n) && n), this.shown = !1, this.init(); } return _createClass(e, [{ key: "init", value: function () { var e = this, t = this.element; if (!getData(t, NAMESPACE)) {
            setData(t, NAMESPACE, this);
            var n = this.options, i = REGEXP_INPUTS.test(t.tagName), r = n.inline && (n.container || !i), a = document.createElement("div");
            a.insertAdjacentHTML("afterbegin", TEMPLATE.replace(REGEXP_DELIMITER, function () { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i]; return n.text[t[1]]; }));
            var s = a.getElementsByClassName(NAMESPACE)[0], o = s.getElementsByClassName("".concat(NAMESPACE, "-grid"))[0], c = n.container;
            if (isString(c) && (c = document.querySelector(c)), r)
                addClass(s, CLASS_OPEN), addClass(s, CLASS_OPENED), c || (c = t);
            else {
                var l = t.ownerDocument, d = l.body || l.documentElement;
                this.body = d, this.scrollBarWidth = WINDOW.innerWidth - l.documentElement.clientWidth, this.initialBodyPaddingRight = WINDOW.getComputedStyle(d).paddingRight, addClass(s, "".concat(NAMESPACE, "-fixed")), c || (c = document.body);
            }
            this.isInput = i, this.inline = r, this.container = c, this.picker = s, this.grid = o, this.cell = null, this.format = parseFormat(n.format);
            var h = this.getValue(), u = this.parseDate(n.date || h);
            this.date = u, this.initialDate = new Date(u), this.initialValue = h, this.data = {};
            var E = Number(n.rows);
            E % 2 || (E += 1), n.rows = E || 5, addClass(o, "".concat(NAMESPACE, "-").concat(n.rows > 1 ? "multiple" : "single")), n.controls && addClass(o, "".concat(NAMESPACE, "-controls"));
            var m = n.headers, f = n.increment;
            m && (addClass(o, "".concat(NAMESPACE, "-headers")), m = isPlainObject(m) ? m : n.text), isPlainObject(f) || (f = { year: f, month: f, day: f, hour: f, minute: f, second: f, millisecond: f }), this.format.tokens.forEach(function (t) { var i = tokenToType(t), r = document.createElement("div"), a = document.createElement("div"), s = document.createElement("ul"), c = { digit: t.length, increment: Math.abs(Number(f[i])) || 1, list: s, max: 1 / 0, min: -1 / 0, index: Math.floor((n.rows + 2) / 2), offset: 0 }; switch (t.charAt(0)) {
                case "Y":
                    2 === c.digit && (c.max = 99, c.min = 0);
                    break;
                case "M":
                    c.max = 11, c.min = 0, c.offset = 1, 3 === c.digit ? c.aliases = n.monthsShort : 4 === c.digit && (c.aliases = n.months);
                    break;
                case "D":
                    c.max = function () { return getDaysInMonth(e.date.getFullYear(), e.date.getMonth()); }, c.min = 1;
                    break;
                case "H":
                    c.max = 23, c.min = 0;
                    break;
                case "m":
                case "s":
                    c.max = 59, c.min = 0;
                    break;
                case "S": c.max = 999, c.min = 0;
            } if (setData(r, DATA_TYPE, i), setData(r, DATA_TOKEN, t), m) {
                var l = document.createElement("div");
                addClass(l, "".concat(NAMESPACE, "-cell__header")), l.textContent = m[i] || i[0].toUpperCase() + i.substr(1), r.appendChild(l);
            } if (n.controls) {
                var d = document.createElement("div");
                addClass(d, "".concat(NAMESPACE, "-cell__control")), addClass(d, "".concat(NAMESPACE, "-cell__control--prev")), setData(d, DATA_ACTION, ACTION_PREV), r.appendChild(d);
            } if (addClass(s, "".concat(NAMESPACE, "-list")), addClass(a, "".concat(NAMESPACE, "-cell__body")), addClass(r, "".concat(NAMESPACE, "-cell")), addClass(r, "".concat(NAMESPACE, "-").concat(i, "s")), a.appendChild(s), r.appendChild(a), n.controls) {
                var h = document.createElement("div");
                addClass(h, "".concat(NAMESPACE, "-cell__control")), addClass(h, "".concat(NAMESPACE, "-cell__control--next")), setData(h, DATA_ACTION, ACTION_NEXT), r.appendChild(h);
            } o.appendChild(r), e.data[i] = c, e.render(i); }), r && (c.innerHTML = ""), c.appendChild(s), this.bind();
        } } }], [{ key: "noConflict", value: function () { return WINDOW.Picker = AnotherPicker, e; } }, { key: "setDefaults", value: function (e) { deepAssign(DEFAULTS, LANGUAGES[e.language], isPlainObject(e) && e); } }]), e; }();
deepAssign(Picker.prototype, events, handlers, helpers, methods), Picker.languages = LANGUAGES;
var DatetimePicker = function () { function e() { this.format = "YYYY-MM-DD HH:mm", this.date = null, this.for = null, this.rows = 7, this.textTitle = "选择日期时间", this.textConfirm = "确定", this.textCancel = "取消"; } return e.prototype.getPicker = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return [2, this.Picker]; }); }); }, e.prototype.componentDidLoad = function () { var e = document.querySelector(this.for), t = this.el.shadowRoot.querySelector(".picker-container"); this.Picker = new Picker(e, { container: t, rows: this.rows, format: this.format, date: this.date, headers: !1, language: "zh-CN", text: { title: this.textTitle, confirm: this.textConfirm, cancel: this.textCancel }, translate: function (e, t) { return Number(t) + { year: "年", month: "月", day: "日", hour: "时", minute: "分" }[e]; } }), this.ready.emit({ picker: this.Picker }); }, e.prototype.render = function () { return nb_component_core_js_1.h("div", { class: "datetime-picker" }, nb_component_core_js_1.h("slot", null), nb_component_core_js_1.h("div", { class: "picker-container" })); }, Object.defineProperty(e, "is", { get: function () { return "nb-datetime-picker"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { date: { type: "Any", attr: "date" }, el: { elementRef: !0 }, for: { type: String, attr: "for" }, format: { type: String, attr: "format" }, getPicker: { method: !0 }, rows: { type: Number, attr: "rows" }, textCancel: { type: String, attr: "text-cancel" }, textConfirm: { type: String, attr: "text-confirm" }, textTitle: { type: String, attr: "text-title" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "ready", method: "ready", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".picker{background-color:rgba(0,0,0,.2);color:#333;direction:ltr;display:none;line-height:1.5;overflow:hidden;-ms-touch-action:none;touch-action:none;-webkit-transition:opacity .15s;transition:opacity .15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-fixed{bottom:0;left:0;position:fixed;right:0;top:0;z-index:1986}.picker-fixed>.picker-dialog{bottom:-100%;left:0;max-height:100%;position:absolute;right:0;-webkit-transition:bottom .3s;transition:bottom .3s}.picker-fixed .picker-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.picker-fixed .picker-footer{display:table}.picker-open{display:block;opacity:0}.picker-opened{opacity:1}.picker-opened>.picker-dialog{bottom:0}.picker-dialog{background-color:#fff;border:1px solid #eee}.picker-header{border-bottom:1px solid #eee;display:none;height:1.066666666666667rem;position:relative}.picker-title{font-size:.4266666666666667rem;font-weight:500;color:#272727;margin:0}.picker-close:focus,.picker-close:hover{opacity:1;outline:none}.picker-body{overflow:hidden;position:relative}.picker-body .picker-picked-line{position:absolute;height:.9333333333333333rem;width:100%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:1px solid #eee;pointer-events:none}.picker-grid{display:table;table-layout:fixed;width:100%}.picker-cell{display:table-cell;position:relative}.picker-cell:after,.picker-cell:before{content:\"\";display:block;left:0;position:absolute;right:0;z-index:3}.picker-headers .picker-cell:before{margin-bottom:0}.picker-headers .picker-cell:after{margin-top:32px}.picker-cell__header,.picker-single:not(.picker-controls):not(.picker-headers) .picker-cell:after,.picker-single:not(.picker-controls):not(.picker-headers) .picker-cell:before{display:none}.picker-cell__control{cursor:pointer;height:32px;padding:4px 8px;position:relative;z-index:4}.picker-cell__control:before{border:0 solid #ccc;content:\"\";display:block;height:8px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg);width:8px}.picker-cell__control:hover:before{border-color:#ccc}.picker-cell__control--prev:before{border-right-width:1px;border-top-width:1px;margin-top:2px}.picker-cell__control--next:before{border-bottom-width:1px;border-left-width:1px;margin-bottom:2px}.picker-cell__body{overflow:hidden;position:relative}.picker-cell__body:after,.picker-cell__body:before{content:\"\";height:1.866666666666667rem;left:0;position:absolute;right:0;z-index:1}.picker-cell__body:before{background-image:-webkit-linear-gradient(bottom,hsla(0,0%,100%,0),#fff);background-image:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#fff));background-image:linear-gradient(0deg,hsla(0,0%,100%,0),#fff);top:0}.picker-cell__body:after{background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,0),#fff);background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff);bottom:0}.picker-single .picker-cell__body:after,.picker-single .picker-cell__body:before{display:none}.picker-list{list-style:none;margin:-32px 0;padding:0;position:relative}.picker-item{color:#999;height:.9333333333333333rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;white-space:nowrap;font-size:.4266666666666667rem}.picker-picked{color:#272727;font-size:.5066666666666667rem}.picker-cancel,.picker-confirm{background-color:transparent;border-width:0;cursor:pointer;display:table-cell;font-size:.37333333333333335rem;width:1.6rem;color:#3e86f7}.picker-cancel:focus,.picker-cancel:hover,.picker-confirm:focus,.picker-confirm:hover{background-color:#fcfcfc;outline:none}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.NbDatetimePicker = DatetimePicker;
