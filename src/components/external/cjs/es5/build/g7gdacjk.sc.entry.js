"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var nb_component_core_js_1 = require("../nb-component.core.js");
var debug = !1, EXIF = function (e) { return e instanceof EXIF ? e : this instanceof EXIF ? void (this.EXIFwrapped = e) : new EXIF(e); }, ExifTags = EXIF.Tags = { 36864: "ExifVersion", 40960: "FlashpixVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 37121: "ComponentsConfiguration", 37122: "CompressedBitsPerPixel", 37500: "MakerNote", 37510: "UserComment", 40964: "RelatedSoundFile", 36867: "DateTimeOriginal", 36868: "DateTimeDigitized", 37520: "SubsecTime", 37521: "SubsecTimeOriginal", 37522: "SubsecTimeDigitized", 33434: "ExposureTime", 33437: "FNumber", 34850: "ExposureProgram", 34852: "SpectralSensitivity", 34855: "ISOSpeedRatings", 34856: "OECF", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37379: "BrightnessValue", 37380: "ExposureBias", 37381: "MaxApertureValue", 37382: "SubjectDistance", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37396: "SubjectArea", 37386: "FocalLength", 41483: "FlashEnergy", 41484: "SpatialFrequencyResponse", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41488: "FocalPlaneResolutionUnit", 41492: "SubjectLocation", 41493: "ExposureIndex", 41495: "SensingMethod", 41728: "FileSource", 41729: "SceneType", 41730: "CFAPattern", 41985: "CustomRendered", 41986: "ExposureMode", 41987: "WhiteBalance", 41988: "DigitalZoomRation", 41989: "FocalLengthIn35mmFilm", 41990: "SceneCaptureType", 41991: "GainControl", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness", 41995: "DeviceSettingDescription", 41996: "SubjectDistanceRange", 40965: "InteroperabilityIFDPointer", 42016: "ImageUniqueID" }, TiffTags = EXIF.TiffTags = { 256: "ImageWidth", 257: "ImageHeight", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer", 40965: "InteroperabilityIFDPointer", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 274: "Orientation", 277: "SamplesPerPixel", 284: "PlanarConfiguration", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 282: "XResolution", 283: "YResolution", 296: "ResolutionUnit", 273: "StripOffsets", 278: "RowsPerStrip", 279: "StripByteCounts", 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength", 301: "TransferFunction", 318: "WhitePoint", 319: "PrimaryChromaticities", 529: "YCbCrCoefficients", 532: "ReferenceBlackWhite", 306: "DateTime", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 315: "Artist", 33432: "Copyright" }, GPSTags = EXIF.GPSTags = { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude", 5: "GPSAltitudeRef", 6: "GPSAltitude", 7: "GPSTimeStamp", 8: "GPSSatellites", 9: "GPSStatus", 10: "GPSMeasureMode", 11: "GPSDOP", 12: "GPSSpeedRef", 13: "GPSSpeed", 14: "GPSTrackRef", 15: "GPSTrack", 16: "GPSImgDirectionRef", 17: "GPSImgDirection", 18: "GPSMapDatum", 19: "GPSDestLatitudeRef", 20: "GPSDestLatitude", 21: "GPSDestLongitudeRef", 22: "GPSDestLongitude", 23: "GPSDestBearingRef", 24: "GPSDestBearing", 25: "GPSDestDistanceRef", 26: "GPSDestDistance", 27: "GPSProcessingMethod", 28: "GPSAreaInformation", 29: "GPSDateStamp", 30: "GPSDifferential" }, IFD1Tags = EXIF.IFD1Tags = { 256: "ImageWidth", 257: "ImageHeight", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 273: "StripOffsets", 274: "Orientation", 277: "SamplesPerPixel", 278: "RowsPerStrip", 279: "StripByteCounts", 282: "XResolution", 283: "YResolution", 284: "PlanarConfiguration", 296: "ResolutionUnit", 513: "JpegIFOffset", 514: "JpegIFByteCount", 529: "YCbCrCoefficients", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 532: "ReferenceBlackWhite" }, StringValues = EXIF.StringValues = { ExposureProgram: { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }, MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }, LightSource: { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }, Flash: { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }, SensingMethod: { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }, SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" }, SceneType: { 1: "Directly photographed" }, CustomRendered: { 0: "Normal process", 1: "Custom process" }, WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" }, GainControl: { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }, Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" }, Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" }, Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" }, SubjectDistanceRange: { 0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view" }, FileSource: { 3: "DSC" }, Components: { 0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" } };
function imageHasData(e) { return !!e.exifdata; }
function base64ToArrayBuffer(e, t) { t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || "", e = e.replace(/^data\:([^\;]+)\;base64,/gim, ""); for (var n = atob(e), i = n.length, r = new ArrayBuffer(i), a = new Uint8Array(r), o = 0; o < i; o++)
    a[o] = n.charCodeAt(o); return r; }
function objectURLToBlob(e, t) { var n = new XMLHttpRequest; n.open("GET", e, !0), n.responseType = "blob", n.onload = function (e) { 200 != this.status && 0 !== this.status || t(this.response); }, n.send(); }
function getImageData(e, t) { function n(n) { var i = findEXIFinJPEG(n); e.exifdata = i || {}; var r = findIPTCinJPEG(n); if (e.iptcdata = r || {}, EXIF.isXmpEnabled) {
    var a = findXMPinJPEG(n);
    e.xmpdata = a || {};
} t && t.call(e); } if (e.src)
    if (/^data\:/i.test(e.src))
        n(base64ToArrayBuffer(e.src));
    else if (/^blob\:/i.test(e.src))
        (r = new FileReader).onload = function (e) { n(e.target.result); }, objectURLToBlob(e.src, function (e) { r.readAsArrayBuffer(e); });
    else {
        var i = new XMLHttpRequest;
        i.onload = function () { if (200 != this.status && 0 !== this.status)
            throw "Could not load image"; n(i.response), i = null; }, i.open("GET", e.src, !0), i.responseType = "arraybuffer", i.send(null);
    }
else if (self.FileReader && (e instanceof self.Blob || e instanceof self.File)) {
    var r;
    (r = new FileReader).onload = function (e) { n(e.target.result); }, r.readAsArrayBuffer(e);
} }
function findEXIFinJPEG(e) { var t = new DataView(e); if (255 != t.getUint8(0) || 216 != t.getUint8(1))
    return !1; for (var n = 2, i = e.byteLength; n < i;) {
    if (255 != t.getUint8(n))
        return !1;
    if (225 == t.getUint8(n + 1))
        return readEXIFData(t, n + 4, t.getUint16(n + 2) - 2);
    n += 2 + t.getUint16(n + 2);
} }
function findIPTCinJPEG(e) { var t = new DataView(e); if (255 != t.getUint8(0) || 216 != t.getUint8(1))
    return !1; for (var n = 2, i = e.byteLength, r = function (e, t) { return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5); }; n < i;) {
    if (r(t, n)) {
        var a = t.getUint8(n + 7);
        return a % 2 != 0 && (a += 1), 0 === a && (a = 4), readIPTCData(e, n + 8 + a, t.getUint16(n + 6 + a));
    }
    n++;
} }
var IptcFieldMap = { 120: "caption", 110: "credit", 25: "keywords", 55: "dateCreated", 80: "byline", 85: "bylineTitle", 122: "captionWriter", 105: "headline", 116: "copyright", 15: "category" };
function readIPTCData(e, t, n) { for (var i, r, a, o, s = new DataView(e), l = {}, g = t; g < t + n;)
    28 === s.getUint8(g) && 2 === s.getUint8(g + 1) && (o = s.getUint8(g + 2)) in IptcFieldMap && (a = s.getInt16(g + 3), r = IptcFieldMap[o], i = getStringFromDB(s, g + 5, a), l.hasOwnProperty(r) ? l[r] instanceof Array ? l[r].push(i) : l[r] = [l[r], i] : l[r] = i), g++; return l; }
function readTags(e, t, n, i, r) { var a, o, s, l = e.getUint16(n, !r), g = {}; for (s = 0; s < l; s++)
    !(o = i[e.getUint16(a = n + 12 * s + 2, !r)]) && debug && console.log("Unknown tag: " + e.getUint16(a, !r)), g[o] = readTagValue(e, a, t, n, r); return g; }
function readTagValue(e, t, n, i, r) { var a, o, s, l, g, u, c = e.getUint16(t + 2, !r), d = e.getUint32(t + 4, !r), m = e.getUint32(t + 8, !r) + n; switch (c) {
    case 1:
    case 7:
        if (1 == d)
            return e.getUint8(t + 8, !r);
        for (a = d > 4 ? m : t + 8, o = [], l = 0; l < d; l++)
            o[l] = e.getUint8(a + l);
        return o;
    case 2: return getStringFromDB(e, a = d > 4 ? m : t + 8, d - 1);
    case 3:
        if (1 == d)
            return e.getUint16(t + 8, !r);
        for (a = d > 2 ? m : t + 8, o = [], l = 0; l < d; l++)
            o[l] = e.getUint16(a + 2 * l, !r);
        return o;
    case 4:
        if (1 == d)
            return e.getUint32(t + 8, !r);
        for (o = [], l = 0; l < d; l++)
            o[l] = e.getUint32(m + 4 * l, !r);
        return o;
    case 5:
        if (1 == d)
            return g = e.getUint32(m, !r), u = e.getUint32(m + 4, !r), (s = new Number(g / u)).numerator = g, s.denominator = u, s;
        for (o = [], l = 0; l < d; l++)
            g = e.getUint32(m + 8 * l, !r), u = e.getUint32(m + 4 + 8 * l, !r), o[l] = new Number(g / u), o[l].numerator = g, o[l].denominator = u;
        return o;
    case 9:
        if (1 == d)
            return e.getInt32(t + 8, !r);
        for (o = [], l = 0; l < d; l++)
            o[l] = e.getInt32(m + 4 * l, !r);
        return o;
    case 10:
        if (1 == d)
            return e.getInt32(m, !r) / e.getInt32(m + 4, !r);
        for (o = [], l = 0; l < d; l++)
            o[l] = e.getInt32(m + 8 * l, !r) / e.getInt32(m + 4 + 8 * l, !r);
        return o;
} }
function getNextIFDOffset(e, t, n) { var i = e.getUint16(t, !n); return e.getUint32(t + 2 + 12 * i, !n); }
function readThumbnailImage(e, t, n, i) { var r = getNextIFDOffset(e, t + n, i); if (!r)
    return {}; if (r > e.byteLength)
    return {}; var a = readTags(e, t, t + r, IFD1Tags, i); if (a.Compression)
    switch (a.Compression) {
        case 6:
            a.JpegIFOffset && a.JpegIFByteCount && (a.blob = new Blob([new Uint8Array(e.buffer, t + a.JpegIFOffset, a.JpegIFByteCount)], { type: "image/jpeg" }));
            break;
        case 1:
            console.log("Thumbnail image format is TIFF, which is not implemented.");
            break;
        default: console.log("Unknown thumbnail image format '%s'", a.Compression);
    }
else
    2 == a.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented."); return a; }
function getStringFromDB(e, t, n) { for (var i = "", r = t; r < t + n; r++)
    i += String.fromCharCode(e.getUint8(r)); return i; }
function readEXIFData(e, t) { if ("Exif" != getStringFromDB(e, t, 4))
    return !1; var n, i, r, a, o, s = t + 6; if (18761 == e.getUint16(s))
    n = !1;
else {
    if (19789 != e.getUint16(s))
        return !1;
    n = !0;
} if (42 != e.getUint16(s + 2, !n))
    return !1; var l = e.getUint32(s + 4, !n); if (l < 8)
    return !1; if ((i = readTags(e, s, s + l, TiffTags, n)).ExifIFDPointer)
    for (r in a = readTags(e, s, s + i.ExifIFDPointer, ExifTags, n)) {
        switch (r) {
            case "LightSource":
            case "Flash":
            case "MeteringMode":
            case "ExposureProgram":
            case "SensingMethod":
            case "SceneCaptureType":
            case "SceneType":
            case "CustomRendered":
            case "WhiteBalance":
            case "GainControl":
            case "Contrast":
            case "Saturation":
            case "Sharpness":
            case "SubjectDistanceRange":
            case "FileSource":
                a[r] = StringValues[r][a[r]];
                break;
            case "ExifVersion":
            case "FlashpixVersion":
                a[r] = String.fromCharCode(a[r][0], a[r][1], a[r][2], a[r][3]);
                break;
            case "ComponentsConfiguration": a[r] = StringValues.Components[a[r][0]] + StringValues.Components[a[r][1]] + StringValues.Components[a[r][2]] + StringValues.Components[a[r][3]];
        }
        i[r] = a[r];
    } if (i.GPSInfoIFDPointer)
    for (r in o = readTags(e, s, s + i.GPSInfoIFDPointer, GPSTags, n)) {
        switch (r) {
            case "GPSVersionID": o[r] = o[r][0] + "." + o[r][1] + "." + o[r][2] + "." + o[r][3];
        }
        i[r] = o[r];
    } return i.thumbnail = readThumbnailImage(e, s, l, n), i; }
function findXMPinJPEG(e) { if ("DOMParser" in self) {
    var t = new DataView(e);
    if (255 != t.getUint8(0) || 216 != t.getUint8(1))
        return !1;
    for (var n = 2, i = e.byteLength, r = new DOMParser; n < i - 4;) {
        if ("http" == getStringFromDB(t, n, 4)) {
            var a = n - 1, o = t.getUint16(n - 2) - 1, s = getStringFromDB(t, a, o), l = s.indexOf("xmpmeta>") + 8, g = (s = s.substring(s.indexOf("<x:xmpmeta"), l)).indexOf("x:xmpmeta") + 10;
            return s = s.slice(0, g) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + s.slice(g), xml2Object(r.parseFromString(s, "text/xml"));
        }
        n++;
    }
} }
function xml2json(e) { var t = {}; if (1 == e.nodeType) {
    if (e.attributes.length > 0) {
        t["@attributes"] = {};
        for (var n = 0; n < e.attributes.length; n++) {
            var i = e.attributes.item(n);
            t["@attributes"][i.nodeName] = i.nodeValue;
        }
    }
}
else if (3 == e.nodeType)
    return e.nodeValue; if (e.hasChildNodes())
    for (var r = 0; r < e.childNodes.length; r++) {
        var a = e.childNodes.item(r), o = a.nodeName;
        if (null == t[o])
            t[o] = xml2json(a);
        else {
            if (null == t[o].push) {
                var s = t[o];
                t[o] = [], t[o].push(s);
            }
            t[o].push(xml2json(a));
        }
    } return t; }
function xml2Object(e) { try {
    var t = {};
    if (e.children.length > 0)
        for (var n = 0; n < e.children.length; n++) {
            var i = e.children.item(n), r = i.attributes;
            for (var a in r) {
                var o = r[a], s = o.nodeName;
                void 0 !== s && (t[s] = o.nodeValue);
            }
            var l = i.nodeName;
            if (void 0 === t[l])
                t[l] = xml2json(i);
            else {
                if (void 0 === t[l].push) {
                    var g = t[l];
                    t[l] = [], t[l].push(g);
                }
                t[l].push(xml2json(i));
            }
        }
    else
        t = e.textContent;
    return t;
}
catch (e) {
    console.log(e.message);
} }
EXIF.enableXmp = function () { EXIF.isXmpEnabled = !0; }, EXIF.disableXmp = function () { EXIF.isXmpEnabled = !1; }, EXIF.getData = function (e, t) { return !((self.Image && e instanceof self.Image || self.HTMLImageElement && e instanceof self.HTMLImageElement) && !e.complete || (imageHasData(e) ? t && t.call(e) : getImageData(e, t), 0)); }, EXIF.getTag = function (e, t) { if (imageHasData(e))
    return e.exifdata[t]; }, EXIF.getIptcTag = function (e, t) { if (imageHasData(e))
    return e.iptcdata[t]; }, EXIF.getAllTags = function (e) { if (!imageHasData(e))
    return {}; var t, n = e.exifdata, i = {}; for (t in n)
    n.hasOwnProperty(t) && (i[t] = n[t]); return i; }, EXIF.getAllIptcTags = function (e) { if (!imageHasData(e))
    return {}; var t, n = e.iptcdata, i = {}; for (t in n)
    n.hasOwnProperty(t) && (i[t] = n[t]); return i; }, EXIF.pretty = function (e) { if (!imageHasData(e))
    return ""; var t, n = e.exifdata, i = ""; for (t in n)
    n.hasOwnProperty(t) && ("object" == typeof n[t] ? n[t] instanceof Number ? i += t + " : " + n[t] + " [" + n[t].numerator + "/" + n[t].denominator + "]\r\n" : i += t + " : [" + n[t].length + " values]\r\n" : i += t + " : " + n[t] + "\r\n"); return i; }, EXIF.readFromBinaryFile = function (e) { return findEXIFinJPEG(e); };
var ICONS = { qingchu: '<svg class="icon icon-qingchu" viewBox="0 0 1024 1024"><path d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z m45.248-384l90.528-90.496a32 32 0 0 0-45.28-45.28L512 466.752l-90.496-90.528a32 32 0 0 0-45.28 45.28L466.752 512l-90.528 90.496a32 32 0 0 0 45.28 45.28L512 557.248l90.496 90.528a32 32 0 0 0 45.28-45.28L557.248 512z"  ></path></svg>' }, UploadSimpleImage = function () { function e() { this.maxLength = 4, this.imageSize = 4096, this.rate = 2, this.previewSize = 175, this.uploadText = "上传截图", this.previewImages = [], this.loading = !1; } return e.prototype.getImages = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return [2, this.previewImages]; }); }); }, e.prototype.selectImage = function () { this.loading || this.uploader.click(); }, e.prototype.removeImage = function (e) { this.previewImages.splice(this.previewImages.indexOf(e), 1), this.previewImages = this.previewImages.slice(), this.change.emit(); }, e.prototype.countImageBase64Szie = function (e) { var t, n = e.length - 23; return t = (parseInt(String(n - n / 8 * 2)) / 1024).toFixed(2), parseInt(t); }, e.prototype.handleImage = function (e) { return tslib_1.__awaiter(this, void 0, void 0, function () { var t, n, i, r, a, o, s = this; return tslib_1.__generator(this, function (l) { return t = document.createElement("canvas"), n = document.createElement("canvas"), i = t.getContext("2d"), r = n.getContext("2d"), a = new FileReader, o = new Image, [2, new Promise(function (l, g) { a.onload = function () { o.src = String(a.result); }, o.onload = function () { var a = o.naturalWidth, u = o.naturalHeight, c = 0, d = 0; a > 750 * s.rate ? (c = 750 * s.rate, d = u * (750 * s.rate / a)) : (c = a, d = u), t.width = a, t.height = u, n.width = c, n.height = d, EXIF.getData(o, function () { switch (EXIF.getTag(this, "Orientation")) {
        case 1:
            console.log("旋转0°"), i.rotate(0 * Math.PI / 180), i.drawImage(o, 0, 0), r.drawImage(t, 0, 0, a, u, 0, 0, n.width, n.height);
            break;
        case 6:
            console.log("旋转90°"), t.width = u, t.height = a, i.rotate(90 * Math.PI / 180), i.translate(0, -u), i.drawImage(o, 0, 0), n.width = d, n.height = c, r.drawImage(t, 0, 0, u, a, 0, 0, n.width, n.height);
            break;
        case 3:
            console.log("旋转180°"), i.rotate(180 * Math.PI / 180), i.translate(-a, -u), i.drawImage(o, 0, 0), r.drawImage(t, 0, 0, a, u, 0, 0, n.width, n.height);
            break;
        case 8:
            console.log("旋转270°"), t.width = u, t.height = a, i.rotate(270 * Math.PI / 180), i.translate(-a, 0), i.drawImage(o, 0, 0), n.width = d, n.height = c, r.drawImage(t, 0, 0, u, a, 0, 0, n.width, n.height);
            break;
        case void 0: console.log("undefined  不旋转"), i.rotate(0 * Math.PI / 180), i.drawImage(o, 0, 0), r.drawImage(t, 0, 0, a, u, 0, 0, n.width, n.height);
    } }); var m = n.toDataURL(e.type); s.countImageBase64Szie(m) > s.imageSize && g("上传的图片尺寸过大(压缩后依然大于" + s.imageSize + "KB)"), l(m); }, a.readAsDataURL(e); })]; }); }); }, e.prototype.upload = function (e) { return tslib_1.__awaiter(this, void 0, void 0, function () { var t, n, i, r, a = this; return tslib_1.__generator(this, function (o) { switch (o.label) {
    case 0:
        if (0 === (n = (t = e.target.files).length))
            return [2];
        if (n + this.previewImages.length > this.maxLength)
            return this.error.emit({ info: "不能上传超过" + this.maxLength + "张" }), [2];
        this.change.emit({ images: t }), this.loading = !0, i = 0, o.label = 1;
    case 1: return i < t.length ? [4, this.handleImage(t[i]).catch(function (e) { a.error.emit({ info: e }); })] : [3, 4];
    case 2: (r = o.sent()) && (this.previewImages.push({ base64: r }), this.previewImages = this.previewImages.slice()), o.label = 3;
    case 3: return i++, [3, 1];
    case 4: return this.uploader.value = "", this.loading = !1, [2];
} }); }); }, Object.defineProperty(e.prototype, "previewStyles", { get: function () { return { width: this.previewSize / 75 + "rem", height: this.previewSize / 75 + "rem", borderRadius: 7 / 75 + "rem" }; }, enumerable: !0, configurable: !0 }), e.prototype.render = function () { var e = this; return [nb_component_core_js_1.h("div", { class: "upload-images" }, this.previewImages.map(function (t) { return nb_component_core_js_1.h("div", { class: "preview", style: Object.assign({}, e.previewStyles, { backgroundImage: "url(" + (t.url || t.base64) + ")" }) }, nb_component_core_js_1.h("i", { innerHTML: ICONS.qingchu, onClick: e.removeImage.bind(e, t) })); }), this.previewImages.length < this.maxLength && nb_component_core_js_1.h("div", { class: "up-btn", style: Object.assign({}, this.previewStyles), onClick: this.selectImage.bind(this) }, this.loading && nb_component_core_js_1.h("div", { class: "lds-ring" }, nb_component_core_js_1.h("div", null), nb_component_core_js_1.h("div", null), nb_component_core_js_1.h("div", null), nb_component_core_js_1.h("div", null)), !this.loading && nb_component_core_js_1.h("div", { class: "cross-x" }), !this.loading && nb_component_core_js_1.h("div", { class: "cross-y" }), !this.loading && nb_component_core_js_1.h("span", { class: "text" }, this.uploadText))), nb_component_core_js_1.h("input", { onChange: this.upload.bind(this), ref: function (t) { return e.uploader = t; }, style: { display: "none" }, type: "file", accept: "image/jpeg, image/jpg, image/png, image/bmp, image/gif", multiple: !0 })]; }, Object.defineProperty(e, "is", { get: function () { return "nb-upload-simple-image"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { getImages: { method: !0 }, imageSize: { type: Number, attr: "image-size" }, loading: { state: !0 }, maxLength: { type: Number, attr: "max-length" }, previewImages: { state: !0 }, previewSize: { type: Number, attr: "preview-size" }, rate: { type: Number, attr: "rate" }, uploadText: { type: String, attr: "upload-text" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "events", { get: function () { return [{ name: "error", method: "error", bubbles: !0, cancelable: !0, composed: !0 }, { name: "change", method: "change", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".upload-images.sc-nb-upload-simple-image{padding:.4rem 0 0 .4rem}.upload-images.sc-nb-upload-simple-image   .preview.sc-nb-upload-simple-image, .upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image{display:inline-block;margin-right:.26666666666666666rem;margin-bottom:.26666666666666666rem;background-size:cover;background-repeat:no-repeat;background-position:50%;position:relative}.upload-images.sc-nb-upload-simple-image   .preview.sc-nb-upload-simple-image   i.sc-nb-upload-simple-image, .upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image   i.sc-nb-upload-simple-image{width:.48rem;height:.48rem;position:absolute;right:-.24rem;top:-.24rem;color:#666}.upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;border:1px dashed #ccc;cursor:pointer;vertical-align:top}.upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image   .cross-x.sc-nb-upload-simple-image, .upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image   .cross-y.sc-nb-upload-simple-image{position:absolute;width:.8rem;height:3px;margin-top:-.26666666666666666rem;border-radius:3px;background:#666}.upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image   .cross-y.sc-nb-upload-simple-image{width:3px;height:.8rem}.upload-images.sc-nb-upload-simple-image   .up-btn.sc-nb-upload-simple-image   .text.sc-nb-upload-simple-image{position:absolute;bottom:15%;color:#666;font-size:.37333333333333335rem}.upload-images.sc-nb-upload-simple-image   .icon.sc-nb-upload-simple-image{fill:currentColor;overflow:hidden;vertical-align:-.15em;display:inline-block}.upload-images.sc-nb-upload-simple-image   .lds-ring.sc-nb-upload-simple-image{display:inline-block;position:relative;width:.8533333333333334rem;height:.8533333333333334rem}.upload-images.sc-nb-upload-simple-image   .lds-ring.sc-nb-upload-simple-image   div.sc-nb-upload-simple-image{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:.68rem;height:.68rem;margin:.08rem;border:3px solid #ccc;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#ccc transparent transparent transparent}.upload-images.sc-nb-upload-simple-image   .lds-ring.sc-nb-upload-simple-image   div.sc-nb-upload-simple-image:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.upload-images.sc-nb-upload-simple-image   .lds-ring.sc-nb-upload-simple-image   div.sc-nb-upload-simple-image:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.upload-images.sc-nb-upload-simple-image   .lds-ring.sc-nb-upload-simple-image   div.sc-nb-upload-simple-image:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}\@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes lds-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.NbUploadSimpleImage = UploadSimpleImage;