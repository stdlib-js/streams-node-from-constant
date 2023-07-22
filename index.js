// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).constantStream=r(e.require$$0$3,e.require$$0$1,e.require$$0$2)}(this,(function(e,r,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,s=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,o,i,p;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(l.call(e,r)||s.call(e,r)?(n=e.__proto__,e.__proto__=a,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,p="set"in t,o&&(i||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e};var p=o;function g(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function h(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var y=/./;function d(e){return"boolean"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function j(e,r){return null!=e&&w.call(e,r)}var E="function"==typeof Symbol?Symbol.toStringTag:"";var _=v()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[E],r=j(e,E);try{e[E]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[E]=t:delete e[E],n}:function(e){return m.call(e)},O=Boolean.prototype.toString;var S=v();function T(e){return"object"==typeof e&&(e instanceof Boolean||(S?function(e){try{return O.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function A(e){return d(e)||T(e)}function V(){return new Function("return this;")()}g(A,"isPrimitive",d),g(A,"isObject",T);var k="object"==typeof self?self:null,x="object"==typeof window?window:null,M="object"==typeof global?global:null;function I(e){if(arguments.length){if(!d(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return V()}if(k)return k;if(x)return x;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}var P=I(),F=P.document&&P.document.childNodes,B=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var $,C=/^\s*function\s*([^(]*)/i;g(L,"REGEXP",C),$=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};var N=$;function R(e){return null!==e&&"object"==typeof e}var W=function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!N(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(R);function U(e){return R(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function q(e){var r,t,n;if(("Object"===(t=_(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return U(e)?"Buffer":t}g(R,"isObjectLikeArray",W);var G="function"==typeof y||"object"==typeof B||"function"==typeof F?function(e){return q(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?q(e).toLowerCase():r};function X(e){return"function"===G(e)}var Z,Y=Object.getPrototypeOf;Z=X(Object.getPrototypeOf)?Y:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===_(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var D=Z;function z(e){return null==e?null:(e=Object(e),D(e))}function H(e){return"string"==typeof e}var J=String.prototype.valueOf;var K=v();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object String]"===_(e)))}function ee(e){return H(e)||Q(e)}g(ee,"isPrimitive",H),g(ee,"isObject",Q);var re="function"==typeof Uint8Array;function te(e){return re&&e instanceof Uint8Array||"[object Uint8Array]"===_(e)}var ne="function"==typeof Buffer?Buffer:null;var oe,ie=r.Buffer;oe=function(){var e,r;if("function"!=typeof ne)return!1;try{e=U(r="function"==typeof ne.from?ne.from([1,2,3,4]):new ne([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")};var ae=oe;var ue=Object.prototype;function ce(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!N(e)}(e)&&(!(r=z(e))||!j(e,"constructor")&&j(r,"constructor")&&X(r.constructor)&&"[object Function]"===_(r.constructor)&&j(r,"isPrototypeOf")&&X(r.isPrototypeOf)&&(r===ue||function(e){var r;for(r in e)if(!j(e,r))return!1;return!0}(e)))}var fe=Object.prototype.toString;var le=new Function("try {return this === global;} catch ( err ) {return false;}")(),se=t,pe=I(),ge=/node|io\.js/;var he,ye,de="object"==typeof global&&global===pe&&pe===pe.global&&("[object global]"===_(pe)||"[object Object]"===_(pe))&&!0===le&&"object"==typeof se&&"[object process]"===(he=se,fe.call(he))&&ce(se.versions)&&H(se.versions.node)&&(void 0===se.release||ce(se.release)&&H(se.release.name)&&ge.test(se.release.name)),be=t.versions.node,ve=(ye=de?be:null,ye?parseInt(ye.split(".")[0],10):-1),me=X(ae.from)&&ve>=5,we="function"==typeof ArrayBuffer;function je(e){return we&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===_(e)}function Ee(e){return"number"==typeof e}var _e=Number,Oe=_e.prototype.toString;var Se=v();function Te(e){return"object"==typeof e&&(e instanceof _e||(Se?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function Ae(e){return Ee(e)||Te(e)}g(Ae,"isPrimitive",Ee),g(Ae,"isObject",Te);var Ve=Number.POSITIVE_INFINITY,ke=_e.NEGATIVE_INFINITY,xe=Math.floor;function Me(e){return xe(e)===e}function Ie(e){return e<Ve&&e>ke&&Me(e)}function Pe(e){return Ee(e)&&Ie(e)}function Fe(e){return Te(e)&&Ie(e.valueOf())}function Be(e){return Pe(e)||Fe(e)}function Le(e){return Pe(e)&&e>=0}function $e(e){return Fe(e)&&e.valueOf()>=0}function Ce(e){return Le(e)||$e(e)}g(Be,"isPrimitive",Pe),g(Be,"isObject",Fe),g(Ce,"isPrimitive",Le),g(Ce,"isObject",$e);var Ne="function"==typeof Uint8Array?Uint8Array:null;var Re,We="function"==typeof Uint8Array?Uint8Array:void 0;Re=function(){var e,r;if("function"!=typeof Ne)return!1;try{e=te(r=new Ne(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?We:function(){throw new Error("not implemented")};var Ue=Re,qe=X(ae.from);function Ge(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Me(e.length)&&e.length>=0&&e.length<=9007199254740991}var Xe,Ze=qe?function(e){if(!Ge(e))throw new TypeError("invalid argument. Must provide an array-like object. Value: `"+e+"`");return ae.from(e)}:function(e){if(!Ge(e))throw new TypeError("invalid argument. Must provide an array-like object. Value: `"+e+"`");return new ae(e)};Xe=me?function(e,r,t){var n,o;if(!je(e))throw new TypeError("invalid argument. First argument must be an ArrayBuffer. Value: `"+e+"`");if(arguments.length>1){if(!Le(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(r>e.byteLength)throw new RangeError("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+r+"`.");if(n=r,arguments.length>2){if(!Le(t))throw new TypeError("invalid argument. Last argument must be a nonnegative integer. Value: `"+t+"`.");if(t>e.byteLength)throw new RangeError("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+t+"`.");o=t}else o=e.byteLength-n}else n=0,o=e.byteLength;return 0===o&&ve<6?ae.from([]):ae.from(e,n,o)}:function(e,r,t){var n;if(!je(e))throw new TypeError("invalid argument. First argument must be an ArrayBuffer. Value: `"+e+"`");if(arguments.length>1){if(!Le(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(r>e.byteLength)throw new RangeError("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+r+"`.");if(arguments.length>2){if(!Le(t))throw new TypeError("invalid argument. Last argument must be a nonnegative integer. Value: `"+t+"`.");if(t>e.byteLength)throw new RangeError("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+t+"`.");n=t}else n=e.byteLength-r;return Ze(new Ue(e,r,n))}return ve<3?Ze(new Ue(e)):0===e.byteLength?new ae([]):new ae(e)};var Ye=Xe,De=X(ae.from);function ze(e){return"number"==typeof e}function He(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Je(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+He(o):He(o)+e,n&&(e="-"+e)),e}var Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase;function er(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ze(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Je(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Je(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Qe.call(e.specifier)?Qe.call(t):Ke.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function rr(e){return"string"==typeof e}var tr=Math.abs,nr=String.prototype.toLowerCase,or=String.prototype.toUpperCase,ir=String.prototype.replace,ar=/e\+(\d)$/,ur=/e-(\d)$/,cr=/^(\d+)$/,fr=/^(\d+)e/,lr=/\.0$/,sr=/\.0*e/,pr=/(\..*[^0])0*e/;function gr(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ze(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":tr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ir.call(t,pr,"$1e"),t=ir.call(t,sr,"e"),t=ir.call(t,lr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ir.call(t,ar,"e+0$1"),t=ir.call(t,ur,"e-0$1"),e.alternate&&(t=ir.call(t,cr,"$1."),t=ir.call(t,fr,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===or.call(e.specifier)?or.call(t):nr.call(t)}function hr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function yr(e,r,t){var n=r-e.length;return n<0?e:e=t?e+hr(n):hr(n)+e}var dr=String.fromCharCode,br=isNaN,vr=Array.isArray;function mr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wr(e){var r,t,n,o,i,a,u,c,f;if(!vr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(rr(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=mr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,br(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,br(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=er(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!br(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=br(i)?String(n.arg):dr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=gr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Je(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=yr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var jr,Er=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Or(e){var r,t,n,o;for(t=[],o=0,n=Er.exec(e);n;)(r=e.slice(o,Er.lastIndex-n[0].length)).length&&t.push(r),t.push(_r(n)),o=Er.lastIndex,n=Er.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function Sr(e){return"string"==typeof e}function Tr(e){var r,t,n;if(!Sr(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Or(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return wr.apply(null,t)}jr=De?function(e,r){if(!H(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!H(r))throw new TypeError(Tr("invalid argument. Second argument must be a string. Value: `%s`.",r));return ae.from(e,r)}return ae.from(e,"utf8")}:function(e,r){if(!H(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!H(r))throw new TypeError(Tr("invalid argument. Second argument must be a string. Value: `%s`.",r));return new ae(e,r)}return new ae(e,"utf8")};var Ar=jr,Vr=X(Object.assign),kr=Object.assign,xr=Object;function Mr(e){return Object.keys(Object(e))}var Ir,Pr=void 0!==Object.keys;function Fr(e){return"[object Arguments]"===_(e)}Ir=function(){return Fr(arguments)}();var Br=Ir;function Lr(e){return e!=e}function $r(e){return Ee(e)&&Lr(e)}function Cr(e){return Te(e)&&Lr(e.valueOf())}function Nr(e){return $r(e)||Cr(e)}g(Nr,"isPrimitive",$r),g(Nr,"isObject",Cr);var Rr=Object.prototype.propertyIsEnumerable;var Wr=!Rr.call("beep","0");function Ur(e,r){var t;return null!=e&&(!(t=Rr.call(e,r))&&Wr&&ee(e)?!$r(r=+r)&&Pe(r)&&r>=0&&r<e.length:t)}var qr;qr=Br?Fr:function(e){return null!==e&&"object"==typeof e&&!N(e)&&"number"==typeof e.length&&Me(e.length)&&e.length>=0&&e.length<=4294967295&&j(e,"callee")&&!Ur(e,"callee")};var Gr=qr,Xr=Array.prototype.slice;var Zr=Ur((function(){}),"prototype"),Yr=!Ur({toString:null},"toString");function Dr(e,r,t){var n,o;if(!Ge(e)&&!H(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!Pe(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Nr(r)){for(;o<n;o++)if(Nr(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function zr(e){return e.constructor&&e.constructor.prototype===e}var Hr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Jr="undefined"==typeof window?void 0:window;var Kr=function(){var e;if("undefined"===G(Jr))return!1;for(e in Jr)try{-1===Dr(Hr,e)&&j(Jr,e)&&null!==Jr[e]&&"object"===G(Jr[e])&&zr(Jr[e])}catch(e){return!0}return!1}(),Qr="undefined"!=typeof window;var et,rt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];et=Pr?function(){return 2!==(Mr(arguments)||"").length}(1,2)?function(e){return Gr(e)?Mr(Xr.call(e)):Mr(e)}:Mr:function(e){var r,t,n,o,i,a,u;if(o=[],Gr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!j(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!R(e))return o;t=Zr&&n}for(i in e)t&&"prototype"===i||!j(e,i)||o.push(String(i));if(Yr)for(r=function(e){if(!1===Qr&&!Kr)return zr(e);try{return zr(e)}catch(e){return!1}}(e),u=0;u<rt.length;u++)a=rt[u],r&&"constructor"===a||!j(e,a)||o.push(String(a));return o};var tt,nt=et,ot=xr.getOwnPropertyDescriptor;tt=Vr?kr:function(e){var r,t,n,o,i,a,u,c;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(a=xr(e),u=1;u<arguments.length;u++)if(null!=(r=arguments[u]))for(i=(n=nt(xr(r))).length,c=0;c<i;c++)o=n[c],void 0!==(t=ot(r,o))&&t.enumerable&&(a[o]=r[o]);return a};var it=tt;function at(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function ut(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+e+"`."):null}var ct=Object.create;function ft(){}var lt="function"==typeof ct?ct:function(e){return ft.prototype=e,new ft};function st(e,r,t){p(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var pt=t;var gt={objectMode:!1,encoding:null,sep:"\n",iter:1e308};function ht(e){return Ee(e)&&e>=0}function yt(e){return Te(e)&&e.valueOf()>=0}function dt(e){return ht(e)||yt(e)}function bt(e,r){return ce(r)?j(r,"sep")&&(e.sep=r.sep,!H(e.sep))?new TypeError(at("0g02i","sep",e.sep)):j(r,"objectMode")&&(e.objectMode=r.objectMode,!d(e.objectMode))?new TypeError(at("0g030","objectMode",e.objectMode)):j(r,"encoding")&&(e.encoding=r.encoding,!H(e.encoding)&&null!==e.encoding)?new TypeError(at("0g084","encoding",e.encoding)):j(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!ht(e.highWaterMark))?new TypeError(at("0g04x","highWaterMark",e.highWaterMark)):j(r,"iter")&&(e.iter=r.iter,!Le(e.iter))?new TypeError(at("0g035","iter",e.iter)):null:new TypeError(at("0g02h",r))}g(dt,"isPrimitive",ht),g(dt,"isObject",yt);var vt=h(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-constant-stream"),mt=e.Readable;function wt(e,r){var t,n;if(!(this instanceof wt))return arguments.length>1?new wt(e,r):new wt(e);if(t=it({},gt),arguments.length>1&&(n=bt(t,r)))throw n;if(!1===t.objectMode)if(H(e))e=Ar(e);else if(U(e));else{if(!te(e))throw new TypeError(at("0g0Av",e));e=Ye(e.buffer,e.byteOffset,e.length)}return vt("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),mt.call(this,t),st(this,"_destroyed",!1),g(this,"_objectMode",t.objectMode),g(this,"_sep",Ar(t.sep)),g(this,"_iter",t.iter),g(this,"_value",e),st(this,"_i",0),this}return function(e,r){var t=ut(e);if(t)throw t;if(t=ut(r))throw t;if(void 0===r.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+r.prototype+"`.");e.prototype=lt(r.prototype),p(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(wt,mt),g(wt.prototype,"_read",(function(){var e;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return vt("Finished iteration."),this.push(null);vt("Value: %s. Iter: %d.",this._value,this._i),e=!1===this._objectMode&&this._i>1?this.push(ae.concat([this._sep,this._value])):this.push(this._value)}})),g(wt.prototype,"destroy",(function(e){var r;return this._destroyed?(vt("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}pt.nextTick(n)}((function(){e&&(vt("Stream was destroyed due to an error. Error: %s.",function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===_(e))return!0;e=z(e)}return!1}(e)?e.message:JSON.stringify(e)),r.emit("error",e));vt("Closing the stream..."),r.emit("close")})),this)})),g(wt,"objectMode",(function(e,r){var t;if(arguments.length>1){if(!ce(t=r))throw new TypeError(at("0g02h",t));t=it({},r)}else t={};return t.objectMode=!0,new wt(e,t)})),g(wt,"factory",(function(e,r){var t,n,o;return 0===(t=arguments.length)?(n={},o=!0):1===t?null!==e&&"object"==typeof e&&(j(e,"sep")||j(e,"iter")||j(e,"objectMode")||j(e,"encoding")||j(e,"highWaterMark"))?(n=it({},e),o=!0):n={}:n=it({},r),o?i:a;function i(e){return new wt(e,n)}function a(){return new wt(e,n)}})),wt}));
//# sourceMappingURL=index.js.map
