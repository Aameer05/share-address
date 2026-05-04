var Y0=Object.defineProperty;var G0=(e,t,n)=>t in e?Y0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Qt=(e,t,n)=>G0(e,typeof t!="symbol"?t+"":t,n);function k1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j1={exports:{}},Wa={},R1={exports:{}},kt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),K0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),rv=Symbol.for("react.suspense"),ov=Symbol.for("react.memo"),iv=Symbol.for("react.lazy"),Pf=Symbol.iterator;function sv(e){return e===null||typeof e!="object"?null:(e=Pf&&e[Pf]||e["@@iterator"],typeof e=="function"?e:null)}var L1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E1=Object.assign,N1={};function Zi(e,t,n){this.props=e,this.context=t,this.refs=N1,this.updater=n||L1}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function M1(){}M1.prototype=Zi.prototype;function vd(e,t,n){this.props=e,this.context=t,this.refs=N1,this.updater=n||L1}var xd=vd.prototype=new M1;xd.constructor=vd;E1(xd,Zi.prototype);xd.isPureReactComponent=!0;var If=Array.isArray,T1=Object.prototype.hasOwnProperty,yd={current:null},A1={key:!0,ref:!0,__self:!0,__source:!0};function $1(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)T1.call(t,r)&&!A1.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:el,type:e,key:i,ref:s,props:o,_owner:yd.current}}function lv(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function av(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zf=/\/+/g;function xc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?av(""+e.key):t.toString(36)}function Wl(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case el:case K0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+xc(s,0):r,If(o)?(n="",e!=null&&(n=e.replace(zf,"$&/")+"/"),Wl(o,t,n,"",function(u){return u})):o!=null&&(bd(o)&&(o=lv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(zf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",If(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+xc(i,a);s+=Wl(i,t,n,c,o)}else if(c=sv(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+xc(i,a++),s+=Wl(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pl(e,t,n){if(e==null)return e;var r=[],o=0;return Wl(e,r,"","",function(i){return t.call(n,i,o++)}),r}function cv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Un={current:null},Ul={transition:null},uv={ReactCurrentDispatcher:Un,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:yd};function _1(){throw Error("act(...) is not supported in production builds of React.")}kt.Children={map:pl,forEach:function(e,t,n){pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pl(e,function(){t++}),t},toArray:function(e){return pl(e,function(t){return t})||[]},only:function(e){if(!bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Component=Zi;kt.Fragment=q0;kt.Profiler=J0;kt.PureComponent=vd;kt.StrictMode=Q0;kt.Suspense=rv;kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;kt.act=_1;kt.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=E1({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=yd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)T1.call(t,c)&&!A1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:el,type:e.type,key:o,ref:i,props:r,_owner:s}};kt.createContext=function(e){return e={$$typeof:tv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ev,_context:e},e.Consumer=e};kt.createElement=$1;kt.createFactory=function(e){var t=$1.bind(null,e);return t.type=e,t};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:nv,render:e}};kt.isValidElement=bd;kt.lazy=function(e){return{$$typeof:iv,_payload:{_status:-1,_result:e},_init:cv}};kt.memo=function(e,t){return{$$typeof:ov,type:e,compare:t===void 0?null:t}};kt.startTransition=function(e){var t=Ul.transition;Ul.transition={};try{e()}finally{Ul.transition=t}};kt.unstable_act=_1;kt.useCallback=function(e,t){return Un.current.useCallback(e,t)};kt.useContext=function(e){return Un.current.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e){return Un.current.useDeferredValue(e)};kt.useEffect=function(e,t){return Un.current.useEffect(e,t)};kt.useId=function(){return Un.current.useId()};kt.useImperativeHandle=function(e,t,n){return Un.current.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return Un.current.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return Un.current.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return Un.current.useMemo(e,t)};kt.useReducer=function(e,t,n){return Un.current.useReducer(e,t,n)};kt.useRef=function(e){return Un.current.useRef(e)};kt.useState=function(e){return Un.current.useState(e)};kt.useSyncExternalStore=function(e,t,n){return Un.current.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return Un.current.useTransition()};kt.version="18.3.1";R1.exports=kt;var h=R1.exports;const Dt=S1(h),dv=k1({__proto__:null,default:Dt},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=h,pv=Symbol.for("react.element"),hv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,mv=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function P1(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)gv.call(t,r)&&!vv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pv,type:e,key:i,ref:s,props:o,_owner:mv.current}}Wa.Fragment=hv;Wa.jsx=P1;Wa.jsxs=P1;j1.exports=Wa;var l=j1.exports,I1={exports:{}},cr={},z1={exports:{}},O1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(H,se){var J=H.length;H.push(se);e:for(;0<J;){var ie=J-1>>>1,de=H[ie];if(0<o(de,se))H[ie]=se,H[J]=de,J=ie;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var se=H[0],J=H.pop();if(J!==se){H[0]=J;e:for(var ie=0,de=H.length,Re=de>>>1;ie<Re;){var He=2*(ie+1)-1,Ke=H[He],ve=He+1,te=H[ve];if(0>o(Ke,J))ve<de&&0>o(te,Ke)?(H[ie]=te,H[ve]=J,ie=ve):(H[ie]=Ke,H[He]=J,ie=He);else if(ve<de&&0>o(te,J))H[ie]=te,H[ve]=J,ie=ve;else break e}}return se}function o(H,se){var J=H.sortIndex-se.sortIndex;return J!==0?J:H.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],p=1,d=null,f=3,v=!1,x=!1,m=!1,R=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var se=n(u);se!==null;){if(se.callback===null)r(u);else if(se.startTime<=H)r(u),se.sortIndex=se.expirationTime,t(c,se);else break;se=n(u)}}function S(H){if(m=!1,C(H),!x)if(n(c)!==null)x=!0,B(E);else{var se=n(u);se!==null&&ee(S,se.startTime-H)}}function E(H,se){x=!1,m&&(m=!1,y(T),T=-1),v=!0;var J=f;try{for(C(se),d=n(c);d!==null&&(!(d.expirationTime>se)||H&&!re());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var de=ie(d.expirationTime<=se);se=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(c)&&r(c),C(se)}else r(c);d=n(c)}if(d!==null)var Re=!0;else{var He=n(u);He!==null&&ee(S,He.startTime-se),Re=!1}return Re}finally{d=null,f=J,v=!1}}var P=!1,b=null,T=-1,W=5,N=-1;function re(){return!(e.unstable_now()-N<W)}function D(){if(b!==null){var H=e.unstable_now();N=H;var se=!0;try{se=b(!0,H)}finally{se?k():(P=!1,b=null)}}else P=!1}var k;if(typeof g=="function")k=function(){g(D)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,z=M.port2;M.port1.onmessage=D,k=function(){z.postMessage(null)}}else k=function(){R(D,0)};function B(H){b=H,P||(P=!0,k())}function ee(H,se){T=R(function(){H(e.unstable_now())},se)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,B(E))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(H){switch(f){case 1:case 2:case 3:var se=3;break;default:se=f}var J=f;f=se;try{return H()}finally{f=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,se){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var J=f;f=H;try{return se()}finally{f=J}},e.unstable_scheduleCallback=function(H,se,J){var ie=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=J+de,H={id:p++,callback:se,priorityLevel:H,startTime:J,expirationTime:de,sortIndex:-1},J>ie?(H.sortIndex=J,t(u,H),n(c)===null&&H===n(u)&&(m?(y(T),T=-1):m=!0,ee(S,J-ie))):(H.sortIndex=de,t(c,H),x||v||(x=!0,B(E))),H},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(H){var se=f;return function(){var J=f;f=se;try{return H.apply(this,arguments)}finally{f=J}}}})(O1);z1.exports=O1;var xv=z1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=h,ar=xv;function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D1=new Set,$s={};function si(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for($s[e]=t,e=0;e<t.length;e++)D1.add(t[e])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of={},Df={};function wv(e){return du.call(Df,e)?!0:du.call(Of,e)?!1:bv.test(e)?Df[e]=!0:(Of[e]=!0,!1)}function Cv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kv(e,t,n,r){if(t===null||typeof t>"u"||Cv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Zn(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _n={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_n[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_n[t]=new Zn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_n[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_n[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_n[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_n[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_n[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_n[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_n[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wd,Cd);_n[t]=new Zn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wd,Cd);_n[t]=new Zn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wd,Cd);_n[t]=new Zn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_n[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});_n.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_n[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});function kd(e,t,n,r){var o=_n.hasOwnProperty(t)?_n[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kv(t,n,o,r)&&(n=null),r||o===null?wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var oo=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),gi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),F1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),ao=Symbol.for("react.lazy"),V1=Symbol.for("react.offscreen"),Ff=Symbol.iterator;function es(e){return e===null||typeof e!="object"?null:(e=Ff&&e[Ff]||e["@@iterator"],typeof e=="function"?e:null)}var un=Object.assign,yc;function fs(e){if(yc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yc=t&&t[1]||""}return`
`+yc+e}var bc=!1;function wc(e,t){if(!e||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fs(e):""}function Sv(e){switch(e.tag){case 5:return fs(e.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 2:case 15:return e=wc(e.type,!1),e;case 11:return e=wc(e.type.render,!1),e;case 1:return e=wc(e.type,!0),e;default:return""}}function gu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mi:return"Fragment";case gi:return"Portal";case fu:return"Profiler";case Sd:return"StrictMode";case pu:return"Suspense";case hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B1:return(e.displayName||"Context")+".Consumer";case F1:return(e._context.displayName||"Context")+".Provider";case jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rd:return t=e.displayName||null,t!==null?t:gu(e.type)||"Memo";case ao:t=e._payload,e=e._init;try{return gu(e(t))}catch{}}return null}function jv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gu(t);case 8:return t===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function H1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rv(e){var t=H1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gl(e){e._valueTracker||(e._valueTracker=Rv(e))}function W1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function la(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mu(e,t){var n=t.checked;return un({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lo(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function U1(e,t){t=t.checked,t!=null&&kd(e,"checked",t,!1)}function vu(e,t){U1(e,t);var n=Lo(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xu(e,t.type,n):t.hasOwnProperty("defaultValue")&&xu(e,t.type,Lo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xu(e,t,n){(t!=="number"||la(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ps=Array.isArray;function Ni(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lo(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ye(91));return un({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ye(92));if(ps(n)){if(1<n.length)throw Error(ye(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lo(n)}}function Z1(e,t){var n=Lo(t.value),r=Lo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function X1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?X1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ml,Y1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ml.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _s(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lv=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){Lv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cs[t]=Cs[e]})});function G1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cs.hasOwnProperty(e)&&Cs[e]?(""+t).trim():t+"px"}function K1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=G1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ev=un({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(e,t){if(t){if(Ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ye(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ye(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ye(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ye(62))}}function Cu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function Ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Su=null,Mi=null,Ti=null;function Uf(e){if(e=rl(e)){if(typeof Su!="function")throw Error(ye(280));var t=e.stateNode;t&&(t=Ga(t),Su(e.stateNode,e.type,t))}}function q1(e){Mi?Ti?Ti.push(e):Ti=[e]:Mi=e}function Q1(){if(Mi){var e=Mi,t=Ti;if(Ti=Mi=null,Uf(e),t)for(e=0;e<t.length;e++)Uf(t[e])}}function J1(e,t){return e(t)}function eg(){}var Cc=!1;function tg(e,t,n){if(Cc)return e(t,n);Cc=!0;try{return J1(e,t,n)}finally{Cc=!1,(Mi!==null||Ti!==null)&&(eg(),Q1())}}function Ps(e,t){var n=e.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ye(231,t,typeof n));return n}var ju=!1;if(Qr)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){ju=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{ju=!1}function Nv(e,t,n,r,o,i,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var ks=!1,aa=null,ca=!1,Ru=null,Mv={onError:function(e){ks=!0,aa=e}};function Tv(e,t,n,r,o,i,s,a,c){ks=!1,aa=null,Nv.apply(Mv,arguments)}function Av(e,t,n,r,o,i,s,a,c){if(Tv.apply(this,arguments),ks){if(ks){var u=aa;ks=!1,aa=null}else throw Error(ye(198));ca||(ca=!0,Ru=u)}}function li(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ng(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zf(e){if(li(e)!==e)throw Error(ye(188))}function $v(e){var t=e.alternate;if(!t){if(t=li(e),t===null)throw Error(ye(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zf(o),e;if(i===r)return Zf(o),t;i=i.sibling}throw Error(ye(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(ye(189))}}if(n.alternate!==r)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?e:t}function rg(e){return e=$v(e),e!==null?og(e):null}function og(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=og(e);if(t!==null)return t;e=e.sibling}return null}var ig=ar.unstable_scheduleCallback,Xf=ar.unstable_cancelCallback,_v=ar.unstable_shouldYield,Pv=ar.unstable_requestPaint,vn=ar.unstable_now,Iv=ar.unstable_getCurrentPriorityLevel,Ed=ar.unstable_ImmediatePriority,sg=ar.unstable_UserBlockingPriority,ua=ar.unstable_NormalPriority,zv=ar.unstable_LowPriority,lg=ar.unstable_IdlePriority,Ua=null,Fr=null;function Ov(e){if(Fr&&typeof Fr.onCommitFiberRoot=="function")try{Fr.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Mr=Math.clz32?Math.clz32:Bv,Dv=Math.log,Fv=Math.LN2;function Bv(e){return e>>>=0,e===0?32:31-(Dv(e)/Fv|0)|0}var vl=64,xl=4194304;function hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=hs(a):(i&=s,i!==0&&(r=hs(i)))}else s=n&~o,s!==0?r=hs(s):i!==0&&(r=hs(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mr(t),o=1<<n,r|=e[n],t&=~o;return r}function Vv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Mr(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=Vv(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ag(){var e=vl;return vl<<=1,!(vl&4194240)&&(vl=64),e}function kc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mr(t),e[t]=n}function Wv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Mr(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mr(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ft=0;function cg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ug,Md,dg,fg,pg,Eu=!1,yl=[],xo=null,yo=null,bo=null,Is=new Map,zs=new Map,uo=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(e,t){switch(e){case"focusin":case"focusout":xo=null;break;case"dragenter":case"dragleave":yo=null;break;case"mouseover":case"mouseout":bo=null;break;case"pointerover":case"pointerout":Is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(t.pointerId)}}function ns(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=rl(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zv(e,t,n,r,o){switch(t){case"focusin":return xo=ns(xo,e,t,n,r,o),!0;case"dragenter":return yo=ns(yo,e,t,n,r,o),!0;case"mouseover":return bo=ns(bo,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Is.set(i,ns(Is.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zs.set(i,ns(zs.get(i)||null,e,t,n,r,o)),!0}return!1}function hg(e){var t=Wo(e.target);if(t!==null){var n=li(t);if(n!==null){if(t=n.tag,t===13){if(t=ng(n),t!==null){e.blockedOn=t,pg(e.priority,function(){dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ku=r,n.target.dispatchEvent(r),ku=null}else return t=rl(n),t!==null&&Md(t),e.blockedOn=n,!1;t.shift()}return!0}function Gf(e,t,n){Zl(e)&&n.delete(t)}function Xv(){Eu=!1,xo!==null&&Zl(xo)&&(xo=null),yo!==null&&Zl(yo)&&(yo=null),bo!==null&&Zl(bo)&&(bo=null),Is.forEach(Gf),zs.forEach(Gf)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,Eu||(Eu=!0,ar.unstable_scheduleCallback(ar.unstable_NormalPriority,Xv)))}function Os(e){function t(o){return rs(o,e)}if(0<yl.length){rs(yl[0],e);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xo!==null&&rs(xo,e),yo!==null&&rs(yo,e),bo!==null&&rs(bo,e),Is.forEach(t),zs.forEach(t),n=0;n<uo.length;n++)r=uo[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<uo.length&&(n=uo[0],n.blockedOn===null);)hg(n),n.blockedOn===null&&uo.shift()}var Ai=oo.ReactCurrentBatchConfig,fa=!0;function Yv(e,t,n,r){var o=Ft,i=Ai.transition;Ai.transition=null;try{Ft=1,Td(e,t,n,r)}finally{Ft=o,Ai.transition=i}}function Gv(e,t,n,r){var o=Ft,i=Ai.transition;Ai.transition=null;try{Ft=4,Td(e,t,n,r)}finally{Ft=o,Ai.transition=i}}function Td(e,t,n,r){if(fa){var o=Nu(e,t,n,r);if(o===null)$c(e,t,r,pa,n),Yf(e,r);else if(Zv(o,e,t,n,r))r.stopPropagation();else if(Yf(e,r),t&4&&-1<Uv.indexOf(e)){for(;o!==null;){var i=rl(o);if(i!==null&&ug(i),i=Nu(e,t,n,r),i===null&&$c(e,t,r,pa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else $c(e,t,r,null,n)}}var pa=null;function Nu(e,t,n,r){if(pa=null,e=Ld(r),e=Wo(e),e!==null)if(t=li(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ng(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function gg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iv()){case Ed:return 1;case sg:return 4;case ua:case zv:return 16;case lg:return 536870912;default:return 16}default:return 16}}var po=null,Ad=null,Xl=null;function mg(){if(Xl)return Xl;var e,t=Ad,n=t.length,r,o="value"in po?po.value:po.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Xl=o.slice(e,1<r?1-r:void 0)}function Yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Kf(){return!1}function ur(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bl:Kf,this.isPropagationStopped=Kf,this}return un(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=ur(Xi),nl=un({},Xi,{view:0,detail:0}),Kv=ur(nl),Sc,jc,os,Za=un({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==os&&(os&&e.type==="mousemove"?(Sc=e.screenX-os.screenX,jc=e.screenY-os.screenY):jc=Sc=0,os=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),qf=ur(Za),qv=un({},Za,{dataTransfer:0}),Qv=ur(qv),Jv=un({},nl,{relatedTarget:0}),Rc=ur(Jv),ex=un({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=ur(ex),nx=un({},Xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=ur(nx),ox=un({},Xi,{data:0}),Qf=ur(ox),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lx[e])?!!t[e]:!1}function _d(){return ax}var cx=un({},nl,{key:function(e){if(e.key){var t=ix[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ux=ur(cx),dx=un({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=ur(dx),fx=un({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),px=ur(fx),hx=un({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=ur(hx),mx=un({},Za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=ur(mx),xx=[9,13,27,32],Pd=Qr&&"CompositionEvent"in window,Ss=null;Qr&&"documentMode"in document&&(Ss=document.documentMode);var yx=Qr&&"TextEvent"in window&&!Ss,vg=Qr&&(!Pd||Ss&&8<Ss&&11>=Ss),ep=" ",tp=!1;function xg(e,t){switch(e){case"keyup":return xx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function bx(e,t){switch(e){case"compositionend":return yg(t);case"keypress":return t.which!==32?null:(tp=!0,ep);case"textInput":return e=t.data,e===ep&&tp?null:e;default:return null}}function wx(e,t){if(vi)return e==="compositionend"||!Pd&&xg(e,t)?(e=mg(),Xl=Ad=po=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vg&&t.locale!=="ko"?null:t.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cx[e.type]:t==="textarea"}function bg(e,t,n,r){q1(r),t=ha(t,"onChange"),0<t.length&&(n=new $d("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var js=null,Ds=null;function kx(e){Tg(e,0)}function Xa(e){var t=bi(e);if(W1(t))return e}function Sx(e,t){if(e==="change")return t}var wg=!1;if(Qr){var Lc;if(Qr){var Ec="oninput"in document;if(!Ec){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Ec=typeof rp.oninput=="function"}Lc=Ec}else Lc=!1;wg=Lc&&(!document.documentMode||9<document.documentMode)}function op(){js&&(js.detachEvent("onpropertychange",Cg),Ds=js=null)}function Cg(e){if(e.propertyName==="value"&&Xa(Ds)){var t=[];bg(t,Ds,e,Ld(e)),tg(kx,t)}}function jx(e,t,n){e==="focusin"?(op(),js=t,Ds=n,js.attachEvent("onpropertychange",Cg)):e==="focusout"&&op()}function Rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(Ds)}function Lx(e,t){if(e==="click")return Xa(t)}function Ex(e,t){if(e==="input"||e==="change")return Xa(t)}function Nx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ar=typeof Object.is=="function"?Object.is:Nx;function Fs(e,t){if(Ar(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!du.call(t,o)||!Ar(e[o],t[o]))return!1}return!0}function ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=ip(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function kg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sg(){for(var e=window,t=la();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=la(e.document)}return t}function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mx(e){var t=Sg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kg(n.ownerDocument.documentElement,n)){if(r!==null&&Id(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=sp(n,i);var s=sp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tx=Qr&&"documentMode"in document&&11>=document.documentMode,xi=null,Mu=null,Rs=null,Tu=!1;function lp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||xi==null||xi!==la(r)||(r=xi,"selectionStart"in r&&Id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&Fs(Rs,r)||(Rs=r,r=ha(Mu,"onSelect"),0<r.length&&(t=new $d("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xi)))}function wl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yi={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Nc={},jg={};Qr&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Ya(e){if(Nc[e])return Nc[e];if(!yi[e])return e;var t=yi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jg)return Nc[e]=t[n];return e}var Rg=Ya("animationend"),Lg=Ya("animationiteration"),Eg=Ya("animationstart"),Ng=Ya("transitionend"),Mg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mo(e,t){Mg.set(e,t),si(t,[e])}for(var Mc=0;Mc<ap.length;Mc++){var Tc=ap[Mc],Ax=Tc.toLowerCase(),$x=Tc[0].toUpperCase()+Tc.slice(1);Mo(Ax,"on"+$x)}Mo(Rg,"onAnimationEnd");Mo(Lg,"onAnimationIteration");Mo(Eg,"onAnimationStart");Mo("dblclick","onDoubleClick");Mo("focusin","onFocus");Mo("focusout","onBlur");Mo(Ng,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function cp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Av(r,t,void 0,e),e.currentTarget=null}function Tg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;cp(o,a,u),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;cp(o,a,u),i=c}}}if(ca)throw e=Ru,ca=!1,Ru=null,e}function Jt(e,t){var n=t[Iu];n===void 0&&(n=t[Iu]=new Set);var r=e+"__bubble";n.has(r)||(Ag(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),Ag(n,e,r,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[Cl]){e[Cl]=!0,D1.forEach(function(n){n!=="selectionchange"&&(_x.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,Ac("selectionchange",!1,t))}}function Ag(e,t,n,r){switch(gg(t)){case 1:var o=Yv;break;case 4:o=Gv;break;default:o=Td}n=o.bind(null,t,n,e),o=void 0,!ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $c(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Wo(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}tg(function(){var u=i,p=Ld(n),d=[];e:{var f=Mg.get(e);if(f!==void 0){var v=$d,x=e;switch(e){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":v=ux;break;case"focusin":x="focus",v=Rc;break;case"focusout":x="blur",v=Rc;break;case"beforeblur":case"afterblur":v=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=px;break;case Rg:case Lg:case Eg:v=tx;break;case Ng:v=gx;break;case"scroll":v=Kv;break;case"wheel":v=vx;break;case"copy":case"cut":case"paste":v=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jf}var m=(t&4)!==0,R=!m&&e==="scroll",y=m?f!==null?f+"Capture":null:f;m=[];for(var g=u,C;g!==null;){C=g;var S=C.stateNode;if(C.tag===5&&S!==null&&(C=S,y!==null&&(S=Ps(g,y),S!=null&&m.push(Vs(g,S,C)))),R)break;g=g.return}0<m.length&&(f=new v(f,x,null,n,p),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ku&&(x=n.relatedTarget||n.fromElement)&&(Wo(x)||x[Jr]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?Wo(x):null,x!==null&&(R=li(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(m=qf,S="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=Jf,S="onPointerLeave",y="onPointerEnter",g="pointer"),R=v==null?f:bi(v),C=x==null?f:bi(x),f=new m(S,g+"leave",v,n,p),f.target=R,f.relatedTarget=C,S=null,Wo(p)===u&&(m=new m(y,g+"enter",x,n,p),m.target=C,m.relatedTarget=R,S=m),R=S,v&&x)t:{for(m=v,y=x,g=0,C=m;C;C=ui(C))g++;for(C=0,S=y;S;S=ui(S))C++;for(;0<g-C;)m=ui(m),g--;for(;0<C-g;)y=ui(y),C--;for(;g--;){if(m===y||y!==null&&m===y.alternate)break t;m=ui(m),y=ui(y)}m=null}else m=null;v!==null&&up(d,f,v,m,!1),x!==null&&R!==null&&up(d,R,x,m,!0)}}e:{if(f=u?bi(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var E=Sx;else if(np(f))if(wg)E=Ex;else{E=Rx;var P=jx}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Lx);if(E&&(E=E(e,u))){bg(d,E,n,p);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&xu(f,"number",f.value)}switch(P=u?bi(u):window,e){case"focusin":(np(P)||P.contentEditable==="true")&&(xi=P,Mu=u,Rs=null);break;case"focusout":Rs=Mu=xi=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,lp(d,n,p);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":lp(d,n,p)}var b;if(Pd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vi?xg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vg&&n.locale!=="ko"&&(vi||T!=="onCompositionStart"?T==="onCompositionEnd"&&vi&&(b=mg()):(po=p,Ad="value"in po?po.value:po.textContent,vi=!0)),P=ha(u,T),0<P.length&&(T=new Qf(T,e,null,n,p),d.push({event:T,listeners:P}),b?T.data=b:(b=yg(n),b!==null&&(T.data=b)))),(b=yx?bx(e,n):wx(e,n))&&(u=ha(u,"onBeforeInput"),0<u.length&&(p=new Qf("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=b))}Tg(d,t)})}function Vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ps(e,n),i!=null&&r.unshift(Vs(e,i,o)),i=Ps(e,t),i!=null&&r.push(Vs(e,i,o))),e=e.return}return r}function ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function up(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Ps(n,i),c!=null&&s.unshift(Vs(n,c,a))):o||(c=Ps(n,i),c!=null&&s.push(Vs(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Px=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(Px,`
`).replace(Ix,"")}function kl(e,t,n){if(t=dp(t),dp(e)!==t&&n)throw Error(ye(425))}function ga(){}var Au=null,$u=null;function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(e){return fp.resolve(null).then(e).catch(Dx)}:Pu;function Dx(e){setTimeout(function(){throw e})}function _c(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Os(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Os(t)}function wo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),Or="__reactFiber$"+Yi,Hs="__reactProps$"+Yi,Jr="__reactContainer$"+Yi,Iu="__reactEvents$"+Yi,Fx="__reactListeners$"+Yi,Bx="__reactHandles$"+Yi;function Wo(e){var t=e[Or];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jr]||n[Or]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pp(e);e!==null;){if(n=e[Or])return n;e=pp(e)}return t}e=n,n=e.parentNode}return null}function rl(e){return e=e[Or]||e[Jr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ye(33))}function Ga(e){return e[Hs]||null}var zu=[],wi=-1;function To(e){return{current:e}}function en(e){0>wi||(e.current=zu[wi],zu[wi]=null,wi--)}function Zt(e,t){wi++,zu[wi]=e.current,e.current=t}var Eo={},Dn=To(Eo),er=To(!1),Jo=Eo;function Ii(e,t){var n=e.type.contextTypes;if(!n)return Eo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tr(e){return e=e.childContextTypes,e!=null}function ma(){en(er),en(Dn)}function hp(e,t,n){if(Dn.current!==Eo)throw Error(ye(168));Zt(Dn,t),Zt(er,n)}function $g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(ye(108,jv(e)||"Unknown",o));return un({},n,r)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Eo,Jo=Dn.current,Zt(Dn,e),Zt(er,er.current),!0}function gp(e,t,n){var r=e.stateNode;if(!r)throw Error(ye(169));n?(e=$g(e,t,Jo),r.__reactInternalMemoizedMergedChildContext=e,en(er),en(Dn),Zt(Dn,e)):en(er),Zt(er,n)}var Xr=null,Ka=!1,Pc=!1;function _g(e){Xr===null?Xr=[e]:Xr.push(e)}function Vx(e){Ka=!0,_g(e)}function Ao(){if(!Pc&&Xr!==null){Pc=!0;var e=0,t=Ft;try{var n=Xr;for(Ft=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xr=null,Ka=!1}catch(o){throw Xr!==null&&(Xr=Xr.slice(e+1)),ig(Ed,Ao),o}finally{Ft=t,Pc=!1}}return null}var Ci=[],ki=0,xa=null,ya=0,gr=[],mr=0,ei=null,Yr=1,Gr="";function Do(e,t){Ci[ki++]=ya,Ci[ki++]=xa,xa=e,ya=t}function Pg(e,t,n){gr[mr++]=Yr,gr[mr++]=Gr,gr[mr++]=ei,ei=e;var r=Yr;e=Gr;var o=32-Mr(r)-1;r&=~(1<<o),n+=1;var i=32-Mr(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Yr=1<<32-Mr(t)+o|n<<o|r,Gr=i+e}else Yr=1<<i|n<<o|r,Gr=e}function zd(e){e.return!==null&&(Do(e,1),Pg(e,1,0))}function Od(e){for(;e===xa;)xa=Ci[--ki],Ci[ki]=null,ya=Ci[--ki],Ci[ki]=null;for(;e===ei;)ei=gr[--mr],gr[mr]=null,Gr=gr[--mr],gr[mr]=null,Yr=gr[--mr],gr[mr]=null}var lr=null,sr=null,on=!1,Er=null;function Ig(e,t){var n=vr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lr=e,sr=wo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lr=e,sr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ei!==null?{id:Yr,overflow:Gr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lr=e,sr=null,!0):!1;default:return!1}}function Ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Du(e){if(on){var t=sr;if(t){var n=t;if(!mp(e,t)){if(Ou(e))throw Error(ye(418));t=wo(n.nextSibling);var r=lr;t&&mp(e,t)?Ig(r,n):(e.flags=e.flags&-4097|2,on=!1,lr=e)}}else{if(Ou(e))throw Error(ye(418));e.flags=e.flags&-4097|2,on=!1,lr=e}}}function vp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function Sl(e){if(e!==lr)return!1;if(!on)return vp(e),on=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_u(e.type,e.memoizedProps)),t&&(t=sr)){if(Ou(e))throw zg(),Error(ye(418));for(;t;)Ig(e,t),t=wo(t.nextSibling)}if(vp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ye(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){sr=wo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}sr=null}}else sr=lr?wo(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=sr;e;)e=wo(e.nextSibling)}function zi(){sr=lr=null,on=!1}function Dd(e){Er===null?Er=[e]:Er.push(e)}var Hx=oo.ReactCurrentBatchConfig;function is(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var r=n.stateNode}if(!r)throw Error(ye(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,e))}return e}function jl(e,t){throw e=Object.prototype.toString.call(t),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xp(e){var t=e._init;return t(e._payload)}function Og(e){function t(y,g){if(e){var C=y.deletions;C===null?(y.deletions=[g],y.flags|=16):C.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function o(y,g){return y=jo(y,g),y.index=0,y.sibling=null,y}function i(y,g,C){return y.index=C,e?(C=y.alternate,C!==null?(C=C.index,C<g?(y.flags|=2,g):C):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,g,C,S){return g===null||g.tag!==6?(g=Vc(C,y.mode,S),g.return=y,g):(g=o(g,C),g.return=y,g)}function c(y,g,C,S){var E=C.type;return E===mi?p(y,g,C.props.children,S,C.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ao&&xp(E)===g.type)?(S=o(g,C.props),S.ref=is(y,g,C),S.return=y,S):(S=ta(C.type,C.key,C.props,null,y.mode,S),S.ref=is(y,g,C),S.return=y,S)}function u(y,g,C,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==C.containerInfo||g.stateNode.implementation!==C.implementation?(g=Hc(C,y.mode,S),g.return=y,g):(g=o(g,C.children||[]),g.return=y,g)}function p(y,g,C,S,E){return g===null||g.tag!==7?(g=Go(C,y.mode,S,E),g.return=y,g):(g=o(g,C),g.return=y,g)}function d(y,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,y.mode,C),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hl:return C=ta(g.type,g.key,g.props,null,y.mode,C),C.ref=is(y,null,g),C.return=y,C;case gi:return g=Hc(g,y.mode,C),g.return=y,g;case ao:var S=g._init;return d(y,S(g._payload),C)}if(ps(g)||es(g))return g=Go(g,y.mode,C,null),g.return=y,g;jl(y,g)}return null}function f(y,g,C,S){var E=g!==null?g.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return E!==null?null:a(y,g,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case hl:return C.key===E?c(y,g,C,S):null;case gi:return C.key===E?u(y,g,C,S):null;case ao:return E=C._init,f(y,g,E(C._payload),S)}if(ps(C)||es(C))return E!==null?null:p(y,g,C,S,null);jl(y,C)}return null}function v(y,g,C,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(C)||null,a(g,y,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return y=y.get(S.key===null?C:S.key)||null,c(g,y,S,E);case gi:return y=y.get(S.key===null?C:S.key)||null,u(g,y,S,E);case ao:var P=S._init;return v(y,g,C,P(S._payload),E)}if(ps(S)||es(S))return y=y.get(C)||null,p(g,y,S,E,null);jl(g,S)}return null}function x(y,g,C,S){for(var E=null,P=null,b=g,T=g=0,W=null;b!==null&&T<C.length;T++){b.index>T?(W=b,b=null):W=b.sibling;var N=f(y,b,C[T],S);if(N===null){b===null&&(b=W);break}e&&b&&N.alternate===null&&t(y,b),g=i(N,g,T),P===null?E=N:P.sibling=N,P=N,b=W}if(T===C.length)return n(y,b),on&&Do(y,T),E;if(b===null){for(;T<C.length;T++)b=d(y,C[T],S),b!==null&&(g=i(b,g,T),P===null?E=b:P.sibling=b,P=b);return on&&Do(y,T),E}for(b=r(y,b);T<C.length;T++)W=v(b,y,T,C[T],S),W!==null&&(e&&W.alternate!==null&&b.delete(W.key===null?T:W.key),g=i(W,g,T),P===null?E=W:P.sibling=W,P=W);return e&&b.forEach(function(re){return t(y,re)}),on&&Do(y,T),E}function m(y,g,C,S){var E=es(C);if(typeof E!="function")throw Error(ye(150));if(C=E.call(C),C==null)throw Error(ye(151));for(var P=E=null,b=g,T=g=0,W=null,N=C.next();b!==null&&!N.done;T++,N=C.next()){b.index>T?(W=b,b=null):W=b.sibling;var re=f(y,b,N.value,S);if(re===null){b===null&&(b=W);break}e&&b&&re.alternate===null&&t(y,b),g=i(re,g,T),P===null?E=re:P.sibling=re,P=re,b=W}if(N.done)return n(y,b),on&&Do(y,T),E;if(b===null){for(;!N.done;T++,N=C.next())N=d(y,N.value,S),N!==null&&(g=i(N,g,T),P===null?E=N:P.sibling=N,P=N);return on&&Do(y,T),E}for(b=r(y,b);!N.done;T++,N=C.next())N=v(b,y,T,N.value,S),N!==null&&(e&&N.alternate!==null&&b.delete(N.key===null?T:N.key),g=i(N,g,T),P===null?E=N:P.sibling=N,P=N);return e&&b.forEach(function(D){return t(y,D)}),on&&Do(y,T),E}function R(y,g,C,S){if(typeof C=="object"&&C!==null&&C.type===mi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case hl:e:{for(var E=C.key,P=g;P!==null;){if(P.key===E){if(E=C.type,E===mi){if(P.tag===7){n(y,P.sibling),g=o(P,C.props.children),g.return=y,y=g;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ao&&xp(E)===P.type){n(y,P.sibling),g=o(P,C.props),g.ref=is(y,P,C),g.return=y,y=g;break e}n(y,P);break}else t(y,P);P=P.sibling}C.type===mi?(g=Go(C.props.children,y.mode,S,C.key),g.return=y,y=g):(S=ta(C.type,C.key,C.props,null,y.mode,S),S.ref=is(y,g,C),S.return=y,y=S)}return s(y);case gi:e:{for(P=C.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===C.containerInfo&&g.stateNode.implementation===C.implementation){n(y,g.sibling),g=o(g,C.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Hc(C,y.mode,S),g.return=y,y=g}return s(y);case ao:return P=C._init,R(y,g,P(C._payload),S)}if(ps(C))return x(y,g,C,S);if(es(C))return m(y,g,C,S);jl(y,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,g!==null&&g.tag===6?(n(y,g.sibling),g=o(g,C),g.return=y,y=g):(n(y,g),g=Vc(C,y.mode,S),g.return=y,y=g),s(y)):n(y,g)}return R}var Oi=Og(!0),Dg=Og(!1),ba=To(null),wa=null,Si=null,Fd=null;function Bd(){Fd=Si=wa=null}function Vd(e){var t=ba.current;en(ba),e._currentValue=t}function Fu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){wa=e,Fd=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Jn=!0),e.firstContext=null)}function br(e){var t=e._currentValue;if(Fd!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(wa===null)throw Error(ye(308));Si=e,wa.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Uo=null;function Hd(e){Uo===null?Uo=[e]:Uo.push(e)}function Fg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Hd(t)):(n.next=o.next,o.next=n),t.interleaved=n,eo(e,r)}function eo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var co=!1;function Wd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Mt&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,eo(e,n)}return o=r.interleaved,o===null?(t.next=t,Hd(r)):(t.next=o.next,o.next=t),r.interleaved=t,eo(e,n)}function Gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}function yp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ca(e,t,n,r){var o=e.updateQueue;co=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;s=0,p=u=c=null,a=i;do{var f=a.lane,v=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,m=a;switch(f=t,v=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){d=x.call(v,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,f=typeof x=="function"?x.call(v,d,f):x,f==null)break e;d=un({},d,f);break e;case 2:co=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,c=d):p=p.next=v,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(p===null&&(c=d),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ni|=s,e.lanes=s,e.memoizedState=d}}function bp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(ye(191,o));o.call(r)}}}var ol={},Br=To(ol),Ws=To(ol),Us=To(ol);function Zo(e){if(e===ol)throw Error(ye(174));return e}function Ud(e,t){switch(Zt(Us,t),Zt(Ws,e),Zt(Br,ol),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bu(t,e)}en(Br),Zt(Br,t)}function Di(){en(Br),en(Ws),en(Us)}function Vg(e){Zo(Us.current);var t=Zo(Br.current),n=bu(t,e.type);t!==n&&(Zt(Ws,e),Zt(Br,n))}function Zd(e){Ws.current===e&&(en(Br),en(Ws))}var an=To(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ic=[];function Xd(){for(var e=0;e<Ic.length;e++)Ic[e]._workInProgressVersionPrimary=null;Ic.length=0}var Kl=oo.ReactCurrentDispatcher,zc=oo.ReactCurrentBatchConfig,ti=0,cn=null,Sn=null,En=null,Sa=!1,Ls=!1,Zs=0,Wx=0;function Pn(){throw Error(ye(321))}function Yd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Gd(e,t,n,r,o,i){if(ti=i,cn=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kl.current=e===null||e.memoizedState===null?Yx:Gx,e=n(r,o),Ls){i=0;do{if(Ls=!1,Zs=0,25<=i)throw Error(ye(301));i+=1,En=Sn=null,t.updateQueue=null,Kl.current=Kx,e=n(r,o)}while(Ls)}if(Kl.current=ja,t=Sn!==null&&Sn.next!==null,ti=0,En=Sn=cn=null,Sa=!1,t)throw Error(ye(300));return e}function Kd(){var e=Zs!==0;return Zs=0,e}function zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?cn.memoizedState=En=e:En=En.next=e,En}function wr(){if(Sn===null){var e=cn.alternate;e=e!==null?e.memoizedState:null}else e=Sn.next;var t=En===null?cn.memoizedState:En.next;if(t!==null)En=t,Sn=e;else{if(e===null)throw Error(ye(310));Sn=e,e={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},En===null?cn.memoizedState=En=e:En=En.next=e}return En}function Xs(e,t){return typeof t=="function"?t(e):t}function Oc(e){var t=wr(),n=t.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=e;var r=Sn,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,u=i;do{var p=u.lane;if((ti&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=d,s=r):c=c.next=d,cn.lanes|=p,ni|=p}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=a,Ar(r,t.memoizedState)||(Jn=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,cn.lanes|=i,ni|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dc(e){var t=wr(),n=t.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ar(i,t.memoizedState)||(Jn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hg(){}function Wg(e,t){var n=cn,r=wr(),o=t(),i=!Ar(r.memoizedState,o);if(i&&(r.memoizedState=o,Jn=!0),r=r.queue,qd(Xg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||En!==null&&En.memoizedState.tag&1){if(n.flags|=2048,Ys(9,Zg.bind(null,n,r,o,t),void 0,null),Nn===null)throw Error(ye(349));ti&30||Ug(n,t,o)}return o}function Ug(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=cn.updateQueue,t===null?(t={lastEffect:null,stores:null},cn.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zg(e,t,n,r){t.value=n,t.getSnapshot=r,Yg(t)&&Gg(e)}function Xg(e,t,n){return n(function(){Yg(t)&&Gg(e)})}function Yg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Gg(e){var t=eo(e,1);t!==null&&Tr(t,e,1,-1)}function wp(e){var t=zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=Xx.bind(null,cn,e),[t.memoizedState,e]}function Ys(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=cn.updateQueue,t===null?(t={lastEffect:null,stores:null},cn.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kg(){return wr().memoizedState}function ql(e,t,n,r){var o=zr();cn.flags|=e,o.memoizedState=Ys(1|t,n,void 0,r===void 0?null:r)}function qa(e,t,n,r){var o=wr();r=r===void 0?null:r;var i=void 0;if(Sn!==null){var s=Sn.memoizedState;if(i=s.destroy,r!==null&&Yd(r,s.deps)){o.memoizedState=Ys(t,n,i,r);return}}cn.flags|=e,o.memoizedState=Ys(1|t,n,i,r)}function Cp(e,t){return ql(8390656,8,e,t)}function qd(e,t){return qa(2048,8,e,t)}function qg(e,t){return qa(4,2,e,t)}function Qg(e,t){return qa(4,4,e,t)}function Jg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,qa(4,4,Jg.bind(null,t,e),n)}function Qd(){}function tm(e,t){var n=wr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nm(e,t){var n=wr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return ti&21?(Ar(n,t)||(n=ag(),cn.lanes|=n,ni|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Jn=!0),e.memoizedState=n)}function Ux(e,t){var n=Ft;Ft=n!==0&&4>n?n:4,e(!0);var r=zc.transition;zc.transition={};try{e(!1),t()}finally{Ft=n,zc.transition=r}}function om(){return wr().memoizedState}function Zx(e,t,n){var r=So(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},im(e))sm(t,n);else if(n=Fg(e,t,n,r),n!==null){var o=Wn();Tr(n,e,r,o),lm(n,t,r)}}function Xx(e,t,n){var r=So(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(e))sm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Ar(a,s)){var c=t.interleaved;c===null?(o.next=o,Hd(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Fg(e,t,o,r),n!==null&&(o=Wn(),Tr(n,e,r,o),lm(n,t,r))}}function im(e){var t=e.alternate;return e===cn||t!==null&&t===cn}function sm(e,t){Ls=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}var ja={readContext:br,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Yx={readContext:br,useCallback:function(e,t){return zr().memoizedState=[e,t===void 0?null:t],e},useContext:br,useEffect:Cp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ql(4194308,4,Jg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var n=zr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zx.bind(null,cn,e),[r.memoizedState,e]},useRef:function(e){var t=zr();return e={current:e},t.memoizedState=e},useState:wp,useDebugValue:Qd,useDeferredValue:function(e){return zr().memoizedState=e},useTransition:function(){var e=wp(!1),t=e[0];return e=Ux.bind(null,e[1]),zr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=cn,o=zr();if(on){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=t(),Nn===null)throw Error(ye(349));ti&30||Ug(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cp(Xg.bind(null,r,i,e),[e]),r.flags|=2048,Ys(9,Zg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=zr(),t=Nn.identifierPrefix;if(on){var n=Gr,r=Yr;n=(r&~(1<<32-Mr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gx={readContext:br,useCallback:tm,useContext:br,useEffect:qd,useImperativeHandle:em,useInsertionEffect:qg,useLayoutEffect:Qg,useMemo:nm,useReducer:Oc,useRef:Kg,useState:function(){return Oc(Xs)},useDebugValue:Qd,useDeferredValue:function(e){var t=wr();return rm(t,Sn.memoizedState,e)},useTransition:function(){var e=Oc(Xs)[0],t=wr().memoizedState;return[e,t]},useMutableSource:Hg,useSyncExternalStore:Wg,useId:om,unstable_isNewReconciler:!1},Kx={readContext:br,useCallback:tm,useContext:br,useEffect:qd,useImperativeHandle:em,useInsertionEffect:qg,useLayoutEffect:Qg,useMemo:nm,useReducer:Dc,useRef:Kg,useState:function(){return Dc(Xs)},useDebugValue:Qd,useDeferredValue:function(e){var t=wr();return Sn===null?t.memoizedState=e:rm(t,Sn.memoizedState,e)},useTransition:function(){var e=Dc(Xs)[0],t=wr().memoizedState;return[e,t]},useMutableSource:Hg,useSyncExternalStore:Wg,useId:om,unstable_isNewReconciler:!1};function Sr(e,t){if(e&&e.defaultProps){t=un({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:un({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qa={isMounted:function(e){return(e=e._reactInternals)?li(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Wn(),o=So(e),i=qr(r,o);i.payload=t,n!=null&&(i.callback=n),t=Co(e,i,o),t!==null&&(Tr(t,e,o,r),Gl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Wn(),o=So(e),i=qr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Co(e,i,o),t!==null&&(Tr(t,e,o,r),Gl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wn(),r=So(e),o=qr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Co(e,o,r),t!==null&&(Tr(t,e,r,n),Gl(t,e,r))}};function kp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Fs(n,r)||!Fs(o,i):!0}function am(e,t,n){var r=!1,o=Eo,i=t.contextType;return typeof i=="object"&&i!==null?i=br(i):(o=tr(t)?Jo:Dn.current,r=t.contextTypes,i=(r=r!=null)?Ii(e,o):Eo),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qa.enqueueReplaceState(t,t.state,null)}function Vu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=br(i):(i=tr(t)?Jo:Dn.current,o.context=Ii(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Qa.enqueueReplaceState(o,o.state,null),Ca(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t){try{var n="",r=t;do n+=Sv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Fc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function cm(e,t,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){La||(La=!0,Ju=r),Hu(e,t)},n}function um(e,t,n){n=qr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hu(e,t),typeof r!="function"&&(ko===null?ko=new Set([this]):ko.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=d5.bind(null,e,t,n),t.then(e,e))}function Rp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qr(-1,1),t.tag=2,Co(n,t,1))),n.lanes|=1),e)}var Qx=oo.ReactCurrentOwner,Jn=!1;function Hn(e,t,n,r){t.child=e===null?Dg(t,null,n,r):Oi(t,e.child,n,r)}function Ep(e,t,n,r,o){n=n.render;var i=t.ref;return $i(t,o),r=Gd(e,t,n,r,i,o),n=Kd(),e!==null&&!Jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,to(e,t,o)):(on&&n&&zd(t),t.flags|=1,Hn(e,t,r,o),t.child)}function Np(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dm(e,t,i,r,o)):(e=ta(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fs,n(s,r)&&e.ref===t.ref)return to(e,t,o)}return t.flags|=1,e=jo(i,r),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fs(i,r)&&e.ref===t.ref)if(Jn=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Jn=!0);else return t.lanes=e.lanes,to(e,t,o)}return Wu(e,t,n,r,o)}function fm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(Ri,or),or|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Zt(Ri,or),or|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Zt(Ri,or),or|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Zt(Ri,or),or|=r;return Hn(e,t,o,n),t.child}function pm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wu(e,t,n,r,o){var i=tr(n)?Jo:Dn.current;return i=Ii(t,i),$i(t,o),n=Gd(e,t,n,r,i,o),r=Kd(),e!==null&&!Jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,to(e,t,o)):(on&&r&&zd(t),t.flags|=1,Hn(e,t,n,o),t.child)}function Mp(e,t,n,r,o){if(tr(n)){var i=!0;va(t)}else i=!1;if($i(t,o),t.stateNode===null)Ql(e,t),am(t,n,r),Vu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=br(u):(u=tr(n)?Jo:Dn.current,u=Ii(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Sp(t,s,r,u),co=!1;var f=t.memoizedState;s.state=f,Ca(t,r,s,o),c=t.memoizedState,a!==r||f!==c||er.current||co?(typeof p=="function"&&(Bu(t,n,p,r),c=t.memoizedState),(a=co||kp(t,n,a,r,f,c,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Sr(t.type,a),s.props=u,d=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=br(c):(c=tr(n)?Jo:Dn.current,c=Ii(t,c));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==c)&&Sp(t,s,r,c),co=!1,f=t.memoizedState,s.state=f,Ca(t,r,s,o);var x=t.memoizedState;a!==d||f!==x||er.current||co?(typeof v=="function"&&(Bu(t,n,v,r),x=t.memoizedState),(u=co||kp(t,n,u,r,f,x,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Uu(e,t,n,r,i,o)}function Uu(e,t,n,r,o,i){pm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&gp(t,n,!1),to(e,t,i);r=t.stateNode,Qx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Oi(t,e.child,null,i),t.child=Oi(t,null,a,i)):Hn(e,t,a,i),t.memoizedState=r.state,o&&gp(t,n,!0),t.child}function hm(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),Ud(e,t.containerInfo)}function Tp(e,t,n,r,o){return zi(),Dd(o),t.flags|=256,Hn(e,t,n,r),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,n){var r=t.pendingProps,o=an.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Zt(an,o&1),e===null)return Du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=tc(s,r,0,null),e=Go(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xu(n),t.memoizedState=Zu,e):Jd(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Jx(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=jo(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=jo(a,i):(i=Go(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Xu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Zu,r}return i=e.child,e=i.sibling,r=jo(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jd(e,t){return t=tc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rl(e,t,n,r){return r!==null&&Dd(r),Oi(t,e.child,null,n),e=Jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jx(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Fc(Error(ye(422))),Rl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tc({mode:"visible",children:r.children},o,0,null),i=Go(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Oi(t,e.child,null,s),t.child.memoizedState=Xu(s),t.memoizedState=Zu,i);if(!(t.mode&1))return Rl(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(ye(419)),r=Fc(i,r,void 0),Rl(e,t,s,r)}if(a=(s&e.childLanes)!==0,Jn||a){if(r=Nn,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,eo(e,o),Tr(r,e,o,-1))}return sf(),r=Fc(Error(ye(421))),Rl(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=f5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,sr=wo(o.nextSibling),lr=t,on=!0,Er=null,e!==null&&(gr[mr++]=Yr,gr[mr++]=Gr,gr[mr++]=ei,Yr=e.id,Gr=e.overflow,ei=t),t=Jd(t,r.children),t.flags|=4096,t)}function Ap(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fu(e.return,t,n)}function Bc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Hn(e,t,r.children,n),r=an.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ap(e,n,t);else if(e.tag===19)Ap(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Zt(an,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bc(t,!0,n,null,i);break;case"together":Bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function to(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ni|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ye(153));if(t.child!==null){for(e=t.child,n=jo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function e5(e,t,n){switch(t.tag){case 3:hm(t),zi();break;case 5:Vg(t);break;case 1:tr(t.type)&&va(t);break;case 4:Ud(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Zt(ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Zt(an,an.current&1),t.flags|=128,null):n&t.child.childLanes?gm(e,t,n):(Zt(an,an.current&1),e=to(e,t,n),e!==null?e.sibling:null);Zt(an,an.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Zt(an,an.current),r)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return to(e,t,n)}var vm,Yu,xm,ym;vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};xm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zo(Br.current);var i=null;switch(n){case"input":o=mu(e,o),r=mu(e,r),i=[];break;case"select":o=un({},o,{value:void 0}),r=un({},r,{value:void 0}),i=[];break;case"textarea":o=yu(e,o),r=yu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ga)}wu(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Jt("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function ss(e,t){if(!on)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function In(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function t5(e,t,n){var r=t.pendingProps;switch(Od(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(t),null;case 1:return tr(t.type)&&ma(),In(t),null;case 3:return r=t.stateNode,Di(),en(er),en(Dn),Xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Er!==null&&(nd(Er),Er=null))),Yu(e,t),In(t),null;case 5:Zd(t);var o=Zo(Us.current);if(n=t.type,e!==null&&t.stateNode!=null)xm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ye(166));return In(t),null}if(e=Zo(Br.current),Sl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Or]=t,r[Hs]=i,e=(t.mode&1)!==0,n){case"dialog":Jt("cancel",r),Jt("close",r);break;case"iframe":case"object":case"embed":Jt("load",r);break;case"video":case"audio":for(o=0;o<gs.length;o++)Jt(gs[o],r);break;case"source":Jt("error",r);break;case"img":case"image":case"link":Jt("error",r),Jt("load",r);break;case"details":Jt("toggle",r);break;case"input":Bf(r,i),Jt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Jt("invalid",r);break;case"textarea":Hf(r,i),Jt("invalid",r)}wu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,a,e),o=["children",""+a]):$s.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Jt("scroll",r)}switch(n){case"input":gl(r),Vf(r,i,!0);break;case"textarea":gl(r),Wf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ga)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=X1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Or]=t,e[Hs]=r,vm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cu(n,r),n){case"dialog":Jt("cancel",e),Jt("close",e),o=r;break;case"iframe":case"object":case"embed":Jt("load",e),o=r;break;case"video":case"audio":for(o=0;o<gs.length;o++)Jt(gs[o],e);o=r;break;case"source":Jt("error",e),o=r;break;case"img":case"image":case"link":Jt("error",e),Jt("load",e),o=r;break;case"details":Jt("toggle",e),o=r;break;case"input":Bf(e,r),o=mu(e,r),Jt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=un({},r,{value:void 0}),Jt("invalid",e);break;case"textarea":Hf(e,r),o=yu(e,r),Jt("invalid",e);break;default:o=r}wu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?K1(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Y1(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&_s(e,c):typeof c=="number"&&_s(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($s.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Jt("scroll",e):c!=null&&kd(e,i,c,s))}switch(n){case"input":gl(e),Vf(e,r,!1);break;case"textarea":gl(e),Wf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lo(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ni(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return In(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ye(166));if(n=Zo(Us.current),Zo(Br.current),Sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Or]=t,(i=r.nodeValue!==n)&&(e=lr,e!==null))switch(e.tag){case 3:kl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Or]=t,t.stateNode=r}return In(t),null;case 13:if(en(an),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(on&&sr!==null&&t.mode&1&&!(t.flags&128))zg(),zi(),t.flags|=98560,i=!1;else if(i=Sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(ye(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ye(317));i[Or]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;In(t),i=!1}else Er!==null&&(nd(Er),Er=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||an.current&1?jn===0&&(jn=3):sf())),t.updateQueue!==null&&(t.flags|=4),In(t),null);case 4:return Di(),Yu(e,t),e===null&&Bs(t.stateNode.containerInfo),In(t),null;case 10:return Vd(t.type._context),In(t),null;case 17:return tr(t.type)&&ma(),In(t),null;case 19:if(en(an),i=t.memoizedState,i===null)return In(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ss(i,!1);else{if(jn!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ka(e),s!==null){for(t.flags|=128,ss(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Zt(an,an.current&1|2),t.child}e=e.sibling}i.tail!==null&&vn()>Bi&&(t.flags|=128,r=!0,ss(i,!1),t.lanes=4194304)}else{if(!r)if(e=ka(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ss(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!on)return In(t),null}else 2*vn()-i.renderingStartTime>Bi&&n!==1073741824&&(t.flags|=128,r=!0,ss(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=vn(),t.sibling=null,n=an.current,Zt(an,r?n&1|2:n&1),t):(In(t),null);case 22:case 23:return of(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?or&1073741824&&(In(t),t.subtreeFlags&6&&(t.flags|=8192)):In(t),null;case 24:return null;case 25:return null}throw Error(ye(156,t.tag))}function n5(e,t){switch(Od(t),t.tag){case 1:return tr(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Di(),en(er),en(Dn),Xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zd(t),null;case 13:if(en(an),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ye(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(an),null;case 4:return Di(),null;case 10:return Vd(t.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var Ll=!1,On=!1,r5=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ji(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fn(e,t,r)}else n.current=null}function Gu(e,t,n){try{n()}catch(r){fn(e,t,r)}}var $p=!1;function o5(e,t){if(Au=fa,e=Sg(),Id(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++p===r&&(c=s),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:e,selectionRange:n},fa=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){t=Oe;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,R=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:Sr(t.type,m),R);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(S){fn(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}return x=$p,$p=!1,x}function Es(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gu(t,n,i)}o=o.next}while(o!==r)}}function Ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Or],delete t[Hs],delete t[Iu],delete t[Fx],delete t[Bx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wm(e){return e.tag===5||e.tag===3||e.tag===4}function _p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ga));else if(r!==4&&(e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}function Qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qu(e,t,n),e=e.sibling;e!==null;)Qu(e,t,n),e=e.sibling}var Tn=null,jr=!1;function io(e,t,n){for(n=n.child;n!==null;)Cm(e,t,n),n=n.sibling}function Cm(e,t,n){if(Fr&&typeof Fr.onCommitFiberUnmount=="function")try{Fr.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:On||ji(n,t);case 6:var r=Tn,o=jr;Tn=null,io(e,t,n),Tn=r,jr=o,Tn!==null&&(jr?(e=Tn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tn.removeChild(n.stateNode));break;case 18:Tn!==null&&(jr?(e=Tn,n=n.stateNode,e.nodeType===8?_c(e.parentNode,n):e.nodeType===1&&_c(e,n),Os(e)):_c(Tn,n.stateNode));break;case 4:r=Tn,o=jr,Tn=n.stateNode.containerInfo,jr=!0,io(e,t,n),Tn=r,jr=o;break;case 0:case 11:case 14:case 15:if(!On&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Gu(n,t,s),o=o.next}while(o!==r)}io(e,t,n);break;case 1:if(!On&&(ji(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fn(n,t,a)}io(e,t,n);break;case 21:io(e,t,n);break;case 22:n.mode&1?(On=(r=On)||n.memoizedState!==null,io(e,t,n),On=r):io(e,t,n);break;default:io(e,t,n)}}function Pp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new r5),t.forEach(function(r){var o=p5.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Tn=a.stateNode,jr=!1;break e;case 3:Tn=a.stateNode.containerInfo,jr=!0;break e;case 4:Tn=a.stateNode.containerInfo,jr=!0;break e}a=a.return}if(Tn===null)throw Error(ye(160));Cm(i,s,o),Tn=null,jr=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){fn(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)km(t,e),t=t.sibling}function km(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kr(t,e),Ir(e),r&4){try{Es(3,e,e.return),Ja(3,e)}catch(m){fn(e,e.return,m)}try{Es(5,e,e.return)}catch(m){fn(e,e.return,m)}}break;case 1:kr(t,e),Ir(e),r&512&&n!==null&&ji(n,n.return);break;case 5:if(kr(t,e),Ir(e),r&512&&n!==null&&ji(n,n.return),e.flags&32){var o=e.stateNode;try{_s(o,"")}catch(m){fn(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&U1(o,i),Cu(a,s);var u=Cu(a,i);for(s=0;s<c.length;s+=2){var p=c[s],d=c[s+1];p==="style"?K1(o,d):p==="dangerouslySetInnerHTML"?Y1(o,d):p==="children"?_s(o,d):kd(o,p,d,u)}switch(a){case"input":vu(o,i);break;case"textarea":Z1(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Ni(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ni(o,!!i.multiple,i.defaultValue,!0):Ni(o,!!i.multiple,i.multiple?[]:"",!1))}o[Hs]=i}catch(m){fn(e,e.return,m)}}break;case 6:if(kr(t,e),Ir(e),r&4){if(e.stateNode===null)throw Error(ye(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){fn(e,e.return,m)}}break;case 3:if(kr(t,e),Ir(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(t.containerInfo)}catch(m){fn(e,e.return,m)}break;case 4:kr(t,e),Ir(e);break;case 13:kr(t,e),Ir(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nf=vn())),r&4&&Pp(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(On=(u=On)||p,kr(t,e),On=u):kr(t,e),Ir(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(Oe=e,p=e.child;p!==null;){for(d=Oe=p;Oe!==null;){switch(f=Oe,v=f.child,f.tag){case 0:case 11:case 14:case 15:Es(4,f,f.return);break;case 1:ji(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(m){fn(r,n,m)}}break;case 5:ji(f,f.return);break;case 22:if(f.memoizedState!==null){zp(d);continue}}v!==null?(v.return=f,Oe=v):zp(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=G1("display",s))}catch(m){fn(e,e.return,m)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){fn(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kr(t,e),Ir(e),r&4&&Pp(e);break;case 21:break;default:kr(t,e),Ir(e)}}function Ir(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wm(n)){var r=n;break e}n=n.return}throw Error(ye(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_s(o,""),r.flags&=-33);var i=_p(e);Qu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=_p(e);qu(e,a,s);break;default:throw Error(ye(161))}}catch(c){fn(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i5(e,t,n){Oe=e,Sm(e)}function Sm(e,t,n){for(var r=(e.mode&1)!==0;Oe!==null;){var o=Oe,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Ll;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||On;a=Ll;var u=On;if(Ll=s,(On=c)&&!u)for(Oe=o;Oe!==null;)s=Oe,c=s.child,s.tag===22&&s.memoizedState!==null?Op(o):c!==null?(c.return=s,Oe=c):Op(o);for(;i!==null;)Oe=i,Sm(i),i=i.sibling;Oe=o,Ll=a,On=u}Ip(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Oe=i):Ip(e)}}function Ip(e){for(;Oe!==null;){var t=Oe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:On||Ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!On)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Sr(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Os(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}On||t.flags&512&&Ku(t)}catch(f){fn(t,t.return,f)}}if(t===e){Oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,Oe=n;break}Oe=t.return}}function zp(e){for(;Oe!==null;){var t=Oe;if(t===e){Oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Oe=n;break}Oe=t.return}}function Op(e){for(;Oe!==null;){var t=Oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ja(4,t)}catch(c){fn(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){fn(t,o,c)}}var i=t.return;try{Ku(t)}catch(c){fn(t,i,c)}break;case 5:var s=t.return;try{Ku(t)}catch(c){fn(t,s,c)}}}catch(c){fn(t,t.return,c)}if(t===e){Oe=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Oe=a;break}Oe=t.return}}var s5=Math.ceil,Ra=oo.ReactCurrentDispatcher,ef=oo.ReactCurrentOwner,xr=oo.ReactCurrentBatchConfig,Mt=0,Nn=null,kn=null,$n=0,or=0,Ri=To(0),jn=0,Gs=null,ni=0,ec=0,tf=0,Ns=null,Qn=null,nf=0,Bi=1/0,Zr=null,La=!1,Ju=null,ko=null,El=!1,ho=null,Ea=0,Ms=0,ed=null,Jl=-1,ea=0;function Wn(){return Mt&6?vn():Jl!==-1?Jl:Jl=vn()}function So(e){return e.mode&1?Mt&2&&$n!==0?$n&-$n:Hx.transition!==null?(ea===0&&(ea=ag()),ea):(e=Ft,e!==0||(e=window.event,e=e===void 0?16:gg(e.type)),e):1}function Tr(e,t,n,r){if(50<Ms)throw Ms=0,ed=null,Error(ye(185));tl(e,n,r),(!(Mt&2)||e!==Nn)&&(e===Nn&&(!(Mt&2)&&(ec|=n),jn===4&&fo(e,$n)),nr(e,r),n===1&&Mt===0&&!(t.mode&1)&&(Bi=vn()+500,Ka&&Ao()))}function nr(e,t){var n=e.callbackNode;Hv(e,t);var r=da(e,e===Nn?$n:0);if(r===0)n!==null&&Xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xf(n),t===1)e.tag===0?Vx(Dp.bind(null,e)):_g(Dp.bind(null,e)),Ox(function(){!(Mt&6)&&Ao()}),n=null;else{switch(cg(r)){case 1:n=Ed;break;case 4:n=sg;break;case 16:n=ua;break;case 536870912:n=lg;break;default:n=ua}n=Am(n,jm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jm(e,t){if(Jl=-1,ea=0,Mt&6)throw Error(ye(327));var n=e.callbackNode;if(_i()&&e.callbackNode!==n)return null;var r=da(e,e===Nn?$n:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Na(e,r);else{t=r;var o=Mt;Mt|=2;var i=Lm();(Nn!==e||$n!==t)&&(Zr=null,Bi=vn()+500,Yo(e,t));do try{c5();break}catch(a){Rm(e,a)}while(!0);Bd(),Ra.current=i,Mt=o,kn!==null?t=0:(Nn=null,$n=0,t=jn)}if(t!==0){if(t===2&&(o=Lu(e),o!==0&&(r=o,t=td(e,o))),t===1)throw n=Gs,Yo(e,0),fo(e,r),nr(e,vn()),n;if(t===6)fo(e,r);else{if(o=e.current.alternate,!(r&30)&&!l5(o)&&(t=Na(e,r),t===2&&(i=Lu(e),i!==0&&(r=i,t=td(e,i))),t===1))throw n=Gs,Yo(e,0),fo(e,r),nr(e,vn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(ye(345));case 2:Fo(e,Qn,Zr);break;case 3:if(fo(e,r),(r&130023424)===r&&(t=nf+500-vn(),10<t)){if(da(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Wn(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pu(Fo.bind(null,e,Qn,Zr),t);break}Fo(e,Qn,Zr);break;case 4:if(fo(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Mr(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=vn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s5(r/1960))-r,10<r){e.timeoutHandle=Pu(Fo.bind(null,e,Qn,Zr),r);break}Fo(e,Qn,Zr);break;case 5:Fo(e,Qn,Zr);break;default:throw Error(ye(329))}}}return nr(e,vn()),e.callbackNode===n?jm.bind(null,e):null}function td(e,t){var n=Ns;return e.current.memoizedState.isDehydrated&&(Yo(e,t).flags|=256),e=Na(e,t),e!==2&&(t=Qn,Qn=n,t!==null&&nd(t)),e}function nd(e){Qn===null?Qn=e:Qn.push.apply(Qn,e)}function l5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ar(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fo(e,t){for(t&=~tf,t&=~ec,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mr(t),r=1<<n;e[n]=-1,t&=~r}}function Dp(e){if(Mt&6)throw Error(ye(327));_i();var t=da(e,0);if(!(t&1))return nr(e,vn()),null;var n=Na(e,t);if(e.tag!==0&&n===2){var r=Lu(e);r!==0&&(t=r,n=td(e,r))}if(n===1)throw n=Gs,Yo(e,0),fo(e,t),nr(e,vn()),n;if(n===6)throw Error(ye(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fo(e,Qn,Zr),nr(e,vn()),null}function rf(e,t){var n=Mt;Mt|=1;try{return e(t)}finally{Mt=n,Mt===0&&(Bi=vn()+500,Ka&&Ao())}}function ri(e){ho!==null&&ho.tag===0&&!(Mt&6)&&_i();var t=Mt;Mt|=1;var n=xr.transition,r=Ft;try{if(xr.transition=null,Ft=1,e)return e()}finally{Ft=r,xr.transition=n,Mt=t,!(Mt&6)&&Ao()}}function of(){or=Ri.current,en(Ri)}function Yo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zx(n)),kn!==null)for(n=kn.return;n!==null;){var r=n;switch(Od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:Di(),en(er),en(Dn),Xd();break;case 5:Zd(r);break;case 4:Di();break;case 13:en(an);break;case 19:en(an);break;case 10:Vd(r.type._context);break;case 22:case 23:of()}n=n.return}if(Nn=e,kn=e=jo(e.current,null),$n=or=t,jn=0,Gs=null,tf=ec=ni=0,Qn=Ns=null,Uo!==null){for(t=0;t<Uo.length;t++)if(n=Uo[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Uo=null}return e}function Rm(e,t){do{var n=kn;try{if(Bd(),Kl.current=ja,Sa){for(var r=cn.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Sa=!1}if(ti=0,En=Sn=cn=null,Ls=!1,Zs=0,ef.current=null,n===null||n.return===null){jn=1,Gs=t,kn=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=$n,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Rp(s);if(v!==null){v.flags&=-257,Lp(v,s,a,i,t),v.mode&1&&jp(i,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var m=new Set;m.add(c),t.updateQueue=m}else x.add(c);break e}else{if(!(t&1)){jp(i,u,t),sf();break e}c=Error(ye(426))}}else if(on&&a.mode&1){var R=Rp(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Lp(R,s,a,i,t),Dd(Fi(c,a));break e}}i=c=Fi(c,a),jn!==4&&(jn=2),Ns===null?Ns=[i]:Ns.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=cm(i,c,t);yp(i,y);break e;case 1:a=c;var g=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ko===null||!ko.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=um(i,a,t);yp(i,S);break e}}i=i.return}while(i!==null)}Nm(n)}catch(E){t=E,kn===n&&n!==null&&(kn=n=n.return);continue}break}while(!0)}function Lm(){var e=Ra.current;return Ra.current=ja,e===null?ja:e}function sf(){(jn===0||jn===3||jn===2)&&(jn=4),Nn===null||!(ni&268435455)&&!(ec&268435455)||fo(Nn,$n)}function Na(e,t){var n=Mt;Mt|=2;var r=Lm();(Nn!==e||$n!==t)&&(Zr=null,Yo(e,t));do try{a5();break}catch(o){Rm(e,o)}while(!0);if(Bd(),Mt=n,Ra.current=r,kn!==null)throw Error(ye(261));return Nn=null,$n=0,jn}function a5(){for(;kn!==null;)Em(kn)}function c5(){for(;kn!==null&&!_v();)Em(kn)}function Em(e){var t=Tm(e.alternate,e,or);e.memoizedProps=e.pendingProps,t===null?Nm(e):kn=t,ef.current=null}function Nm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=n5(n,t),n!==null){n.flags&=32767,kn=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{jn=6,kn=null;return}}else if(n=t5(n,t,or),n!==null){kn=n;return}if(t=t.sibling,t!==null){kn=t;return}kn=t=e}while(t!==null);jn===0&&(jn=5)}function Fo(e,t,n){var r=Ft,o=xr.transition;try{xr.transition=null,Ft=1,u5(e,t,n,r)}finally{xr.transition=o,Ft=r}return null}function u5(e,t,n,r){do _i();while(ho!==null);if(Mt&6)throw Error(ye(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ye(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wv(e,i),e===Nn&&(kn=Nn=null,$n=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Am(ua,function(){return _i(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xr.transition,xr.transition=null;var s=Ft;Ft=1;var a=Mt;Mt|=4,ef.current=null,o5(e,n),km(n,e),Mx($u),fa=!!Au,$u=Au=null,e.current=n,i5(n),Pv(),Mt=a,Ft=s,xr.transition=i}else e.current=n;if(El&&(El=!1,ho=e,Ea=o),i=e.pendingLanes,i===0&&(ko=null),Ov(n.stateNode),nr(e,vn()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(La)throw La=!1,e=Ju,Ju=null,e;return Ea&1&&e.tag!==0&&_i(),i=e.pendingLanes,i&1?e===ed?Ms++:(Ms=0,ed=e):Ms=0,Ao(),null}function _i(){if(ho!==null){var e=cg(Ea),t=xr.transition,n=Ft;try{if(xr.transition=null,Ft=16>e?16:e,ho===null)var r=!1;else{if(e=ho,ho=null,Ea=0,Mt&6)throw Error(ye(331));var o=Mt;for(Mt|=4,Oe=e.current;Oe!==null;){var i=Oe,s=i.child;if(Oe.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Oe=u;Oe!==null;){var p=Oe;switch(p.tag){case 0:case 11:case 15:Es(8,p,i)}var d=p.child;if(d!==null)d.return=p,Oe=d;else for(;Oe!==null;){p=Oe;var f=p.sibling,v=p.return;if(bm(p),p===u){Oe=null;break}if(f!==null){f.return=v,Oe=f;break}Oe=v}}}var x=i.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var R=m.sibling;m.sibling=null,m=R}while(m!==null)}}Oe=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Oe=s;else e:for(;Oe!==null;){if(i=Oe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Es(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,Oe=y;break e}Oe=i.return}}var g=e.current;for(Oe=g;Oe!==null;){s=Oe;var C=s.child;if(s.subtreeFlags&2064&&C!==null)C.return=s,Oe=C;else e:for(s=g;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ja(9,a)}}catch(E){fn(a,a.return,E)}if(a===s){Oe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Oe=S;break e}Oe=a.return}}if(Mt=o,Ao(),Fr&&typeof Fr.onPostCommitFiberRoot=="function")try{Fr.onPostCommitFiberRoot(Ua,e)}catch{}r=!0}return r}finally{Ft=n,xr.transition=t}}return!1}function Fp(e,t,n){t=Fi(n,t),t=cm(e,t,1),e=Co(e,t,1),t=Wn(),e!==null&&(tl(e,1,t),nr(e,t))}function fn(e,t,n){if(e.tag===3)Fp(e,e,n);else for(;t!==null;){if(t.tag===3){Fp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ko===null||!ko.has(r))){e=Fi(n,e),e=um(t,e,1),t=Co(t,e,1),e=Wn(),t!==null&&(tl(t,1,e),nr(t,e));break}}t=t.return}}function d5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Wn(),e.pingedLanes|=e.suspendedLanes&n,Nn===e&&($n&n)===n&&(jn===4||jn===3&&($n&130023424)===$n&&500>vn()-nf?Yo(e,0):tf|=n),nr(e,t)}function Mm(e,t){t===0&&(e.mode&1?(t=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):t=1);var n=Wn();e=eo(e,t),e!==null&&(tl(e,t,n),nr(e,n))}function f5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mm(e,n)}function p5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ye(314))}r!==null&&r.delete(t),Mm(e,n)}var Tm;Tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||er.current)Jn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Jn=!1,e5(e,t,n);Jn=!!(e.flags&131072)}else Jn=!1,on&&t.flags&1048576&&Pg(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ql(e,t),e=t.pendingProps;var o=Ii(t,Dn.current);$i(t,n),o=Gd(null,t,r,e,o,n);var i=Kd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tr(r)?(i=!0,va(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wd(t),o.updater=Qa,t.stateNode=o,o._reactInternals=t,Vu(t,r,e,n),t=Uu(null,t,r,!0,i,n)):(t.tag=0,on&&i&&zd(t),Hn(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ql(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=g5(r),e=Sr(r,e),o){case 0:t=Wu(null,t,r,e,n);break e;case 1:t=Mp(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Np(null,t,r,Sr(r.type,e),n);break e}throw Error(ye(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sr(r,o),Wu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sr(r,o),Mp(e,t,r,o,n);case 3:e:{if(hm(t),e===null)throw Error(ye(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Bg(e,t),Ca(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fi(Error(ye(423)),t),t=Tp(e,t,r,n,o);break e}else if(r!==o){o=Fi(Error(ye(424)),t),t=Tp(e,t,r,n,o);break e}else for(sr=wo(t.stateNode.containerInfo.firstChild),lr=t,on=!0,Er=null,n=Dg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===o){t=to(e,t,n);break e}Hn(e,t,r,n)}t=t.child}return t;case 5:return Vg(t),e===null&&Du(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,_u(r,o)?s=null:i!==null&&_u(r,i)&&(t.flags|=32),pm(e,t),Hn(e,t,s,n),t.child;case 6:return e===null&&Du(t),null;case 13:return gm(e,t,n);case 4:return Ud(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):Hn(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sr(r,o),Ep(e,t,r,o,n);case 7:return Hn(e,t,t.pendingProps,n),t.child;case 8:return Hn(e,t,t.pendingProps.children,n),t.child;case 12:return Hn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Zt(ba,r._currentValue),r._currentValue=s,i!==null)if(Ar(i.value,s)){if(i.children===o.children&&!er.current){t=to(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=qr(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Fu(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(ye(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Fu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Hn(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$i(t,n),o=br(o),r=r(o),t.flags|=1,Hn(e,t,r,n),t.child;case 14:return r=t.type,o=Sr(r,t.pendingProps),o=Sr(r.type,o),Np(e,t,r,o,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sr(r,o),Ql(e,t),t.tag=1,tr(r)?(e=!0,va(t)):e=!1,$i(t,n),am(t,r,o),Vu(t,r,o,n),Uu(null,t,r,!0,e,n);case 19:return mm(e,t,n);case 22:return fm(e,t,n)}throw Error(ye(156,t.tag))};function Am(e,t){return ig(e,t)}function h5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(e,t,n,r){return new h5(e,t,n,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g5(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jd)return 11;if(e===Rd)return 14}return 2}function jo(e,t){var n=e.alternate;return n===null?(n=vr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ta(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")lf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mi:return Go(n.children,o,i,t);case Sd:s=8,o|=8;break;case fu:return e=vr(12,n,t,o|2),e.elementType=fu,e.lanes=i,e;case pu:return e=vr(13,n,t,o),e.elementType=pu,e.lanes=i,e;case hu:return e=vr(19,n,t,o),e.elementType=hu,e.lanes=i,e;case V1:return tc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F1:s=10;break e;case B1:s=9;break e;case jd:s=11;break e;case Rd:s=14;break e;case ao:s=16,r=null;break e}throw Error(ye(130,e==null?e:typeof e,""))}return t=vr(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Go(e,t,n,r){return e=vr(7,e,r,t),e.lanes=n,e}function tc(e,t,n,r){return e=vr(22,e,r,t),e.elementType=V1,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return e=vr(6,e,null,t),e.lanes=n,e}function Hc(e,t,n){return t=vr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m5(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function af(e,t,n,r,o,i,s,a,c){return e=new m5(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=vr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(i),e}function v5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $m(e){if(!e)return Eo;e=e._reactInternals;e:{if(li(e)!==e||e.tag!==1)throw Error(ye(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ye(171))}if(e.tag===1){var n=e.type;if(tr(n))return $g(e,n,t)}return t}function _m(e,t,n,r,o,i,s,a,c){return e=af(n,r,!0,e,o,i,s,a,c),e.context=$m(null),n=e.current,r=Wn(),o=So(n),i=qr(r,o),i.callback=t??null,Co(n,i,o),e.current.lanes=o,tl(e,o,r),nr(e,r),e}function nc(e,t,n,r){var o=t.current,i=Wn(),s=So(o);return n=$m(n),t.context===null?t.context=n:t.pendingContext=n,t=qr(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Co(o,t,s),e!==null&&(Tr(e,o,s,i),Gl(e,o,s)),s}function Ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cf(e,t){Bp(e,t),(e=e.alternate)&&Bp(e,t)}function x5(){return null}var Pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function uf(e){this._internalRoot=e}rc.prototype.render=uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ye(409));nc(e,t,null,null)};rc.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ri(function(){nc(null,e,null,null)}),t[Jr]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=fg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<uo.length&&t!==0&&t<uo[n].priority;n++);uo.splice(n,0,e),n===0&&hg(e)}};function df(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function y5(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ma(s);i.call(u)}}var s=_m(t,r,e,0,null,!1,!1,"",Vp);return e._reactRootContainer=s,e[Jr]=s.current,Bs(e.nodeType===8?e.parentNode:e),ri(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ma(c);a.call(u)}}var c=af(e,0,!1,null,null,!1,!1,"",Vp);return e._reactRootContainer=c,e[Jr]=c.current,Bs(e.nodeType===8?e.parentNode:e),ri(function(){nc(t,c,n,r)}),c}function ic(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Ma(s);a.call(c)}}nc(t,s,e,o)}else s=y5(n,t,e,o,r);return Ma(s)}ug=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hs(t.pendingLanes);n!==0&&(Nd(t,n|1),nr(t,vn()),!(Mt&6)&&(Bi=vn()+500,Ao()))}break;case 13:ri(function(){var r=eo(e,1);if(r!==null){var o=Wn();Tr(r,e,1,o)}}),cf(e,1)}};Md=function(e){if(e.tag===13){var t=eo(e,134217728);if(t!==null){var n=Wn();Tr(t,e,134217728,n)}cf(e,134217728)}};dg=function(e){if(e.tag===13){var t=So(e),n=eo(e,t);if(n!==null){var r=Wn();Tr(n,e,t,r)}cf(e,t)}};fg=function(){return Ft};pg=function(e,t){var n=Ft;try{return Ft=e,t()}finally{Ft=n}};Su=function(e,t,n){switch(t){case"input":if(vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ga(r);if(!o)throw Error(ye(90));W1(r),vu(r,o)}}}break;case"textarea":Z1(e,n);break;case"select":t=n.value,t!=null&&Ni(e,!!n.multiple,t,!1)}};J1=rf;eg=ri;var b5={usingClientEntryPoint:!1,Events:[rl,bi,Ga,q1,Q1,rf]},ls={findFiberByHostInstance:Wo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w5={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oo.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rg(e),e===null?null:e.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||x5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Ua=Nl.inject(w5),Fr=Nl}catch{}}cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b5;cr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(t))throw Error(ye(200));return v5(e,t,null,n)};cr.createRoot=function(e,t){if(!df(e))throw Error(ye(299));var n=!1,r="",o=Pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=af(e,1,!1,null,null,n,!1,r,o),e[Jr]=t.current,Bs(e.nodeType===8?e.parentNode:e),new uf(t)};cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ye(188)):(e=Object.keys(e).join(","),Error(ye(268,e)));return e=rg(t),e=e===null?null:e.stateNode,e};cr.flushSync=function(e){return ri(e)};cr.hydrate=function(e,t,n){if(!oc(t))throw Error(ye(200));return ic(null,e,t,!0,n)};cr.hydrateRoot=function(e,t,n){if(!df(e))throw Error(ye(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Pm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_m(t,null,e,1,n??null,o,!1,i,s),e[Jr]=t.current,Bs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rc(t)};cr.render=function(e,t,n){if(!oc(t))throw Error(ye(200));return ic(null,e,t,!1,n)};cr.unmountComponentAtNode=function(e){if(!oc(e))throw Error(ye(40));return e._reactRootContainer?(ri(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Jr]=null})}),!0):!1};cr.unstable_batchedUpdates=rf;cr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oc(n))throw Error(ye(200));if(e==null||e._reactInternals===void 0)throw Error(ye(38));return ic(e,t,n,!1,r)};cr.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),I1.exports=cr;var no=I1.exports;const C5=S1(no),k5=k1({__proto__:null,default:C5},[no]);var zm,Hp=no;zm=Hp.createRoot,Hp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rn(){return rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rn.apply(this,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const Wp="popstate";function S5(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Ks("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:il(o)}return R5(t,n,null,e)}function Nt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j5(){return Math.random().toString(36).substr(2,8)}function Up(e,t){return{usr:e.state,key:e.key,idx:t}}function Ks(e,t,n,r){return n===void 0&&(n=null),rn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$o(t):t,{state:n,key:t&&t.key||r||j5()})}function il(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $o(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function R5(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Cn.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(rn({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function d(){a=Cn.Pop;let R=p(),y=R==null?null:R-u;u=R,c&&c({action:a,location:m.location,delta:y})}function f(R,y){a=Cn.Push;let g=Ks(m.location,R,y);u=p()+1;let C=Up(g,u),S=m.createHref(g);try{s.pushState(C,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(S)}i&&c&&c({action:a,location:m.location,delta:1})}function v(R,y){a=Cn.Replace;let g=Ks(m.location,R,y);u=p();let C=Up(g,u),S=m.createHref(g);s.replaceState(C,"",S),i&&c&&c({action:a,location:m.location,delta:0})}function x(R){let y=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof R=="string"?R:il(R);return g=g.replace(/ $/,"%20"),Nt(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let m={get action(){return a},get location(){return e(o,s)},listen(R){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Wp,d),c=R,()=>{o.removeEventListener(Wp,d),c=null}},createHref(R){return t(o,R)},createURL:x,encodeLocation(R){let y=x(R);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:v,go(R){return s.go(R)}};return m}var Ot;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ot||(Ot={}));const L5=new Set(["lazy","caseSensitive","path","id","index","children"]);function E5(e){return e.index===!0}function Ta(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let s=[...n,String(i)],a=typeof o.id=="string"?o.id:s.join("-");if(Nt(o.index!==!0||!o.children,"Cannot specify children on an index route"),Nt(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),E5(o)){let c=rn({},o,t(o),{id:a});return r[a]=c,c}else{let c=rn({},o,t(o),{id:a,children:void 0});return r[a]=c,o.children&&(c.children=Ta(o.children,t,s,r)),c}})}function Vo(e,t,n){return n===void 0&&(n="/"),na(e,t,n,!1)}function na(e,t,n,r){let o=typeof t=="string"?$o(t):t,i=sl(o.pathname||"/",n);if(i==null)return null;let s=Om(e);M5(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=B5(i);a=D5(s[c],u,r)}return a}function N5(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(Nt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ko([r,c.relativePath]),p=n.concat(c);i.children&&i.children.length>0&&(Nt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Om(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:z5(u,i.index),routesMeta:p})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Dm(i.path))o(i,s,c)}),t}function Dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Dm(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function M5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:O5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T5=/^:[\w-]+$/,A5=3,$5=2,_5=1,P5=10,I5=-2,Zp=e=>e==="*";function z5(e,t){let n=e.split("/"),r=n.length;return n.some(Zp)&&(r+=I5),t&&(r+=$5),n.filter(o=>!Zp(o)).reduce((o,i)=>o+(T5.test(i)?A5:i===""?_5:P5),r)}function O5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function D5(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",d=Xp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),f=c.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Xp({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:Ko([i,d.pathname]),pathnameBase:X5(Ko([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Ko([i,d.pathnameBase]))}return s}function Xp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F5(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:f,isOptional:v}=p;if(f==="*"){let m=a[d]||"";s=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const x=a[d];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function F5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function B5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return oi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const V5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H5=e=>V5.test(e);function W5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$o(e):e,i;if(n)if(H5(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),oi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Yp(n.substring(1),"/"):i=Yp(n,t)}else i=t;return{pathname:i,search:Y5(r),hash:G5(o)}}function Yp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function U5(e,t){let n=Fm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z5(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$o(e):(o=rn({},e),Nt(!o.pathname||!o.pathname.includes("?"),Wc("?","pathname","search",o)),Nt(!o.pathname||!o.pathname.includes("#"),Wc("#","pathname","hash",o)),Nt(!o.search||!o.search.includes("#"),Wc("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}a=d>=0?t[d]:"/"}let c=W5(o,a),u=s&&s!=="/"&&s.endsWith("/"),p=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const Ko=e=>e.join("/").replace(/\/\/+/g,"/"),X5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Aa{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function qs(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bm=["post","put","patch","delete"],K5=new Set(Bm),q5=["get",...Bm],Q5=new Set(q5),J5=new Set([301,302,303,307,308]),ey=new Set([307,308]),Uc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ty={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},as={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ff=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ny=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Vm="remix-router-transitions";function ry(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Nt(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let O=e.detectErrorBoundary;o=V=>({hasErrorBoundary:O(V)})}else o=ny;let i={},s=Ta(e.routes,o,void 0,i),a,c=e.basename||"/",u=e.dataStrategy||ly,p=e.patchRoutesOnNavigation,d=rn({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,v=new Set,x=null,m=null,R=null,y=e.hydrationData!=null,g=Vo(s,e.history.location,c),C=!1,S=null;if(g==null&&!p){let O=qn(404,{pathname:e.history.location.pathname}),{matches:V,route:Q}=ih(s);g=V,S={[Q.id]:O}}g&&!e.hydrationData&&Rt(g,s,e.history.location.pathname).active&&(g=null);let E;if(g)if(g.some(O=>O.route.lazy))E=!1;else if(!g.some(O=>O.route.loader))E=!0;else if(d.v7_partialHydration){let O=e.hydrationData?e.hydrationData.loaderData:null,V=e.hydrationData?e.hydrationData.errors:null;if(V){let Q=g.findIndex(pe=>V[pe.route.id]!==void 0);E=g.slice(0,Q+1).every(pe=>!od(pe.route,O,V))}else E=g.every(Q=>!od(Q.route,O,V))}else E=e.hydrationData!=null;else if(E=!1,g=[],d.v7_partialHydration){let O=Rt(null,s,e.history.location.pathname);O.active&&O.matches&&(C=!0,g=O.matches)}let P,b={historyAction:e.history.action,location:e.history.location,matches:g,initialized:E,navigation:Uc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},T=Cn.Pop,W=!1,N,re=!1,D=new Map,k=null,M=!1,z=!1,B=[],ee=new Set,H=new Map,se=0,J=-1,ie=new Map,de=new Set,Re=new Map,He=new Map,Ke=new Set,ve=new Map,te=new Map,Ie;function dt(){if(f=e.history.listen(O=>{let{action:V,location:Q,delta:pe}=O;if(Ie){Ie(),Ie=void 0;return}oi(te.size===0||pe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ke=yn({currentLocation:b.location,nextLocation:Q,historyAction:V});if(ke&&pe!=null){let Ne=new Promise(Ye=>{Ie=Ye});e.history.go(pe*-1),sn(ke,{state:"blocked",location:Q,proceed(){sn(ke,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),Ne.then(()=>e.history.go(pe))},reset(){let Ye=new Map(b.blockers);Ye.set(ke,as),ft({blockers:Ye})}});return}return Xt(V,Q)}),n){wy(t,D);let O=()=>Cy(t,D);t.addEventListener("pagehide",O),k=()=>t.removeEventListener("pagehide",O)}return b.initialized||Xt(Cn.Pop,b.location,{initialHydration:!0}),P}function Je(){f&&f(),k&&k(),v.clear(),N&&N.abort(),b.fetchers.forEach((O,V)=>gt(V)),b.blockers.forEach((O,V)=>fr(V))}function St(O){return v.add(O),()=>v.delete(O)}function ft(O,V){V===void 0&&(V={}),b=rn({},b,O);let Q=[],pe=[];d.v7_fetcherPersist&&b.fetchers.forEach((ke,Ne)=>{ke.state==="idle"&&(Ke.has(Ne)?pe.push(Ne):Q.push(Ne))}),Ke.forEach(ke=>{!b.fetchers.has(ke)&&!H.has(ke)&&pe.push(ke)}),[...v].forEach(ke=>ke(b,{deletedFetchers:pe,viewTransitionOpts:V.viewTransitionOpts,flushSync:V.flushSync===!0})),d.v7_fetcherPersist?(Q.forEach(ke=>b.fetchers.delete(ke)),pe.forEach(ke=>gt(ke))):pe.forEach(ke=>Ke.delete(ke))}function st(O,V,Q){var pe,ke;let{flushSync:Ne}=Q===void 0?{}:Q,Ye=b.actionData!=null&&b.navigation.formMethod!=null&&Rr(b.navigation.formMethod)&&b.navigation.state==="loading"&&((pe=O.state)==null?void 0:pe._isRedirect)!==!0,Le;V.actionData?Object.keys(V.actionData).length>0?Le=V.actionData:Le=null:Ye?Le=b.actionData:Le=null;let Me=V.loaderData?rh(b.loaderData,V.loaderData,V.matches||[],V.errors):b.loaderData,Pe=b.blockers;Pe.size>0&&(Pe=new Map(Pe),Pe.forEach((at,Lt)=>Pe.set(Lt,as)));let Ve=W===!0||b.navigation.formMethod!=null&&Rr(b.navigation.formMethod)&&((ke=O.state)==null?void 0:ke._isRedirect)!==!0;a&&(s=a,a=void 0),M||T===Cn.Pop||(T===Cn.Push?e.history.push(O,O.state):T===Cn.Replace&&e.history.replace(O,O.state));let De;if(T===Cn.Pop){let at=D.get(b.location.pathname);at&&at.has(O.pathname)?De={currentLocation:b.location,nextLocation:O}:D.has(O.pathname)&&(De={currentLocation:O,nextLocation:b.location})}else if(re){let at=D.get(b.location.pathname);at?at.add(O.pathname):(at=new Set([O.pathname]),D.set(b.location.pathname,at)),De={currentLocation:b.location,nextLocation:O}}ft(rn({},V,{actionData:Le,loaderData:Me,historyAction:T,location:O,initialized:!0,navigation:Uc,revalidation:"idle",restoreScrollPosition:It(O,V.matches||b.matches),preventScrollReset:Ve,blockers:Pe}),{viewTransitionOpts:De,flushSync:Ne===!0}),T=Cn.Pop,W=!1,re=!1,M=!1,z=!1,B=[]}async function mt(O,V){if(typeof O=="number"){e.history.go(O);return}let Q=rd(b.location,b.matches,c,d.v7_prependBasename,O,d.v7_relativeSplatPath,V==null?void 0:V.fromRouteId,V==null?void 0:V.relative),{path:pe,submission:ke,error:Ne}=Gp(d.v7_normalizeFormMethod,!1,Q,V),Ye=b.location,Le=Ks(b.location,pe,V&&V.state);Le=rn({},Le,e.history.encodeLocation(Le));let Me=V&&V.replace!=null?V.replace:void 0,Pe=Cn.Push;Me===!0?Pe=Cn.Replace:Me===!1||ke!=null&&Rr(ke.formMethod)&&ke.formAction===b.location.pathname+b.location.search&&(Pe=Cn.Replace);let Ve=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,De=(V&&V.flushSync)===!0,at=yn({currentLocation:Ye,nextLocation:Le,historyAction:Pe});if(at){sn(at,{state:"blocked",location:Le,proceed(){sn(at,{state:"proceeding",proceed:void 0,reset:void 0,location:Le}),mt(O,V)},reset(){let Lt=new Map(b.blockers);Lt.set(at,as),ft({blockers:Lt})}});return}return await Xt(Pe,Le,{submission:ke,pendingError:Ne,preventScrollReset:Ve,replace:V&&V.replace,enableViewTransition:V&&V.viewTransition,flushSync:De})}function Fn(){if(vt(),ft({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){Xt(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}Xt(T||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:re===!0})}}async function Xt(O,V,Q){N&&N.abort(),N=null,T=O,M=(Q&&Q.startUninterruptedRevalidation)===!0,yt(b.location,b.matches),W=(Q&&Q.preventScrollReset)===!0,re=(Q&&Q.enableViewTransition)===!0;let pe=a||s,ke=Q&&Q.overrideNavigation,Ne=Q!=null&&Q.initialHydration&&b.matches&&b.matches.length>0&&!C?b.matches:Vo(pe,V,c),Ye=(Q&&Q.flushSync)===!0;if(Ne&&b.initialized&&!z&&py(b.location,V)&&!(Q&&Q.submission&&Rr(Q.submission.formMethod))){st(V,{matches:Ne},{flushSync:Ye});return}let Le=Rt(Ne,pe,V.pathname);if(Le.active&&Le.matches&&(Ne=Le.matches),!Ne){let{error:$t,notFoundMatches:Te,route:We}=Se(V.pathname);st(V,{matches:Te,loaderData:{},errors:{[We.id]:$t}},{flushSync:Ye});return}N=new AbortController;let Me=di(e.history,V,N.signal,Q&&Q.submission),Pe;if(Q&&Q.pendingError)Pe=[Ho(Ne).route.id,{type:Ot.error,error:Q.pendingError}];else if(Q&&Q.submission&&Rr(Q.submission.formMethod)){let $t=await pn(Me,V,Q.submission,Ne,Le.active,{replace:Q.replace,flushSync:Ye});if($t.shortCircuited)return;if($t.pendingActionResult){let[Te,We]=$t.pendingActionResult;if(ir(We)&&qs(We.error)&&We.error.status===404){N=null,st(V,{matches:$t.matches,loaderData:{},errors:{[Te]:We.error}});return}}Ne=$t.matches||Ne,Pe=$t.pendingActionResult,ke=Zc(V,Q.submission),Ye=!1,Le.active=!1,Me=di(e.history,Me.url,Me.signal)}let{shortCircuited:Ve,matches:De,loaderData:at,errors:Lt}=await Wt(Me,V,Ne,Le.active,ke,Q&&Q.submission,Q&&Q.fetcherSubmission,Q&&Q.replace,Q&&Q.initialHydration===!0,Ye,Pe);Ve||(N=null,st(V,rn({matches:De||Ne},oh(Pe),{loaderData:at,errors:Lt})))}async function pn(O,V,Q,pe,ke,Ne){Ne===void 0&&(Ne={}),vt();let Ye=yy(V,Q);if(ft({navigation:Ye},{flushSync:Ne.flushSync===!0}),ke){let Pe=await pt(pe,V.pathname,O.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){let Ve=Ho(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,pendingActionResult:[Ve,{type:Ot.error,error:Pe.error}]}}else if(Pe.matches)pe=Pe.matches;else{let{notFoundMatches:Ve,error:De,route:at}=Se(V.pathname);return{matches:Ve,pendingActionResult:[at.id,{type:Ot.error,error:De}]}}}let Le,Me=ms(pe,V);if(!Me.route.action&&!Me.route.lazy)Le={type:Ot.error,error:qn(405,{method:O.method,pathname:V.pathname,routeId:Me.route.id})};else if(Le=(await Fe("action",b,O,[Me],pe,null))[Me.route.id],O.signal.aborted)return{shortCircuited:!0};if(Xo(Le)){let Pe;return Ne&&Ne.replace!=null?Pe=Ne.replace:Pe=eh(Le.response.headers.get("Location"),new URL(O.url),c,e.history)===b.location.pathname+b.location.search,await be(O,Le,!0,{submission:Q,replace:Pe}),{shortCircuited:!0}}if(go(Le))throw qn(400,{type:"defer-action"});if(ir(Le)){let Pe=Ho(pe,Me.route.id);return(Ne&&Ne.replace)!==!0&&(T=Cn.Push),{matches:pe,pendingActionResult:[Pe.route.id,Le]}}return{matches:pe,pendingActionResult:[Me.route.id,Le]}}async function Wt(O,V,Q,pe,ke,Ne,Ye,Le,Me,Pe,Ve){let De=ke||Zc(V,Ne),at=Ne||Ye||lh(De),Lt=!M&&(!d.v7_partialHydration||!Me);if(pe){if(Lt){let Bt=Tt(Ve);ft(rn({navigation:De},Bt!==void 0?{actionData:Bt}:{}),{flushSync:Pe})}let xt=await pt(Q,V.pathname,O.signal);if(xt.type==="aborted")return{shortCircuited:!0};if(xt.type==="error"){let Bt=Ho(xt.partialMatches).route.id;return{matches:xt.partialMatches,loaderData:{},errors:{[Bt]:xt.error}}}else if(xt.matches)Q=xt.matches;else{let{error:Bt,notFoundMatches:pr,route:rr}=Se(V.pathname);return{matches:pr,loaderData:{},errors:{[rr.id]:Bt}}}}let $t=a||s,[Te,We]=qp(e.history,b,Q,at,V,d.v7_partialHydration&&Me===!0,d.v7_skipActionErrorRevalidation,z,B,ee,Ke,Re,de,$t,c,Ve);if(fe(xt=>!(Q&&Q.some(Bt=>Bt.route.id===xt))||Te&&Te.some(Bt=>Bt.route.id===xt)),J=++se,Te.length===0&&We.length===0){let xt=$r();return st(V,rn({matches:Q,loaderData:{},errors:Ve&&ir(Ve[1])?{[Ve[0]]:Ve[1].error}:null},oh(Ve),xt?{fetchers:new Map(b.fetchers)}:{}),{flushSync:Pe}),{shortCircuited:!0}}if(Lt){let xt={};if(!pe){xt.navigation=De;let Bt=Tt(Ve);Bt!==void 0&&(xt.actionData=Bt)}We.length>0&&(xt.fetchers=Bn(We)),ft(xt,{flushSync:Pe})}We.forEach(xt=>{Mn(xt.key),xt.controller&&H.set(xt.key,xt.controller)});let Vt=()=>We.forEach(xt=>Mn(xt.key));N&&N.signal.addEventListener("abort",Vt);let{loaderResults:nn,fetcherResults:gn}=await $e(b,Q,Te,We,O);if(O.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Vt),We.forEach(xt=>H.delete(xt.key));let Xn=Ml(nn);if(Xn)return await be(O,Xn.result,!0,{replace:Le}),{shortCircuited:!0};if(Xn=Ml(gn),Xn)return de.add(Xn.key),await be(O,Xn.result,!0,{replace:Le}),{shortCircuited:!0};let{loaderData:_r,errors:Yn}=nh(b,Q,nn,Ve,We,gn,ve);ve.forEach((xt,Bt)=>{xt.subscribe(pr=>{(pr||xt.done)&&ve.delete(Bt)})}),d.v7_partialHydration&&Me&&b.errors&&(Yn=rn({},b.errors,Yn));let Rn=$r(),Gn=dr(J),Vn=Rn||Gn||We.length>0;return rn({matches:Q,loaderData:_r,errors:Yn},Vn?{fetchers:new Map(b.fetchers)}:{})}function Tt(O){if(O&&!ir(O[1]))return{[O[0]]:O[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Bn(O){return O.forEach(V=>{let Q=b.fetchers.get(V.key),pe=cs(void 0,Q?Q.data:void 0);b.fetchers.set(V.key,pe)}),new Map(b.fetchers)}function rt(O,V,Q,pe){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Mn(O);let ke=(pe&&pe.flushSync)===!0,Ne=a||s,Ye=rd(b.location,b.matches,c,d.v7_prependBasename,Q,d.v7_relativeSplatPath,V,pe==null?void 0:pe.relative),Le=Vo(Ne,Ye,c),Me=Rt(Le,Ne,Ye);if(Me.active&&Me.matches&&(Le=Me.matches),!Le){_t(O,V,qn(404,{pathname:Ye}),{flushSync:ke});return}let{path:Pe,submission:Ve,error:De}=Gp(d.v7_normalizeFormMethod,!0,Ye,pe);if(De){_t(O,V,De,{flushSync:ke});return}let at=ms(Le,Pe),Lt=(pe&&pe.preventScrollReset)===!0;if(Ve&&Rr(Ve.formMethod)){lt(O,V,Pe,at,Le,Me.active,ke,Lt,Ve);return}Re.set(O,{routeId:V,path:Pe}),tn(O,V,Pe,at,Le,Me.active,ke,Lt,Ve)}async function lt(O,V,Q,pe,ke,Ne,Ye,Le,Me){vt(),Re.delete(O);function Pe(zt){if(!zt.route.action&&!zt.route.lazy){let Gt=qn(405,{method:Me.formMethod,pathname:Q,routeId:V});return _t(O,V,Gt,{flushSync:Ye}),!0}return!1}if(!Ne&&Pe(pe))return;let Ve=b.fetchers.get(O);At(O,by(Me,Ve),{flushSync:Ye});let De=new AbortController,at=di(e.history,Q,De.signal,Me);if(Ne){let zt=await pt(ke,new URL(at.url).pathname,at.signal,O);if(zt.type==="aborted")return;if(zt.type==="error"){_t(O,V,zt.error,{flushSync:Ye});return}else if(zt.matches){if(ke=zt.matches,pe=ms(ke,Q),Pe(pe))return}else{_t(O,V,qn(404,{pathname:Q}),{flushSync:Ye});return}}H.set(O,De);let Lt=se,Te=(await Fe("action",b,at,[pe],ke,O))[pe.route.id];if(at.signal.aborted){H.get(O)===De&&H.delete(O);return}if(d.v7_fetcherPersist&&Ke.has(O)){if(Xo(Te)||ir(Te)){At(O,lo(void 0));return}}else{if(Xo(Te))if(H.delete(O),J>Lt){At(O,lo(void 0));return}else return de.add(O),At(O,cs(Me)),be(at,Te,!1,{fetcherSubmission:Me,preventScrollReset:Le});if(ir(Te)){_t(O,V,Te.error);return}}if(go(Te))throw qn(400,{type:"defer-action"});let We=b.navigation.location||b.location,Vt=di(e.history,We,De.signal),nn=a||s,gn=b.navigation.state!=="idle"?Vo(nn,b.navigation.location,c):b.matches;Nt(gn,"Didn't find any matches after fetcher action");let Xn=++se;ie.set(O,Xn);let _r=cs(Me,Te.data);b.fetchers.set(O,_r);let[Yn,Rn]=qp(e.history,b,gn,Me,We,!1,d.v7_skipActionErrorRevalidation,z,B,ee,Ke,Re,de,nn,c,[pe.route.id,Te]);Rn.filter(zt=>zt.key!==O).forEach(zt=>{let Gt=zt.key,mn=b.fetchers.get(Gt),Pr=cs(void 0,mn?mn.data:void 0);b.fetchers.set(Gt,Pr),Mn(Gt),zt.controller&&H.set(Gt,zt.controller)}),ft({fetchers:new Map(b.fetchers)});let Gn=()=>Rn.forEach(zt=>Mn(zt.key));De.signal.addEventListener("abort",Gn);let{loaderResults:Vn,fetcherResults:xt}=await $e(b,gn,Yn,Rn,Vt);if(De.signal.aborted)return;De.signal.removeEventListener("abort",Gn),ie.delete(O),H.delete(O),Rn.forEach(zt=>H.delete(zt.key));let Bt=Ml(Vn);if(Bt)return be(Vt,Bt.result,!1,{preventScrollReset:Le});if(Bt=Ml(xt),Bt)return de.add(Bt.key),be(Vt,Bt.result,!1,{preventScrollReset:Le});let{loaderData:pr,errors:rr}=nh(b,gn,Vn,void 0,Rn,xt,ve);if(b.fetchers.has(O)){let zt=lo(Te.data);b.fetchers.set(O,zt)}dr(Xn),b.navigation.state==="loading"&&Xn>J?(Nt(T,"Expected pending action"),N&&N.abort(),st(b.navigation.location,{matches:gn,loaderData:pr,errors:rr,fetchers:new Map(b.fetchers)})):(ft({errors:rr,loaderData:rh(b.loaderData,pr,gn,rr),fetchers:new Map(b.fetchers)}),z=!1)}async function tn(O,V,Q,pe,ke,Ne,Ye,Le,Me){let Pe=b.fetchers.get(O);At(O,cs(Me,Pe?Pe.data:void 0),{flushSync:Ye});let Ve=new AbortController,De=di(e.history,Q,Ve.signal);if(Ne){let Te=await pt(ke,new URL(De.url).pathname,De.signal,O);if(Te.type==="aborted")return;if(Te.type==="error"){_t(O,V,Te.error,{flushSync:Ye});return}else if(Te.matches)ke=Te.matches,pe=ms(ke,Q);else{_t(O,V,qn(404,{pathname:Q}),{flushSync:Ye});return}}H.set(O,Ve);let at=se,$t=(await Fe("loader",b,De,[pe],ke,O))[pe.route.id];if(go($t)&&($t=await pf($t,De.signal,!0)||$t),H.get(O)===Ve&&H.delete(O),!De.signal.aborted){if(Ke.has(O)){At(O,lo(void 0));return}if(Xo($t))if(J>at){At(O,lo(void 0));return}else{de.add(O),await be(De,$t,!1,{preventScrollReset:Le});return}if(ir($t)){_t(O,V,$t.error);return}Nt(!go($t),"Unhandled fetcher deferred data"),At(O,lo($t.data))}}async function be(O,V,Q,pe){let{submission:ke,fetcherSubmission:Ne,preventScrollReset:Ye,replace:Le}=pe===void 0?{}:pe;V.response.headers.has("X-Remix-Revalidate")&&(z=!0);let Me=V.response.headers.get("Location");Nt(Me,"Expected a Location header on the redirect Response"),Me=eh(Me,new URL(O.url),c,e.history);let Pe=Ks(b.location,Me,{_isRedirect:!0});if(n){let Te=!1;if(V.response.headers.has("X-Remix-Reload-Document"))Te=!0;else if(ff.test(Me)){const We=e.history.createURL(Me);Te=We.origin!==t.location.origin||sl(We.pathname,c)==null}if(Te){Le?t.location.replace(Me):t.location.assign(Me);return}}N=null;let Ve=Le===!0||V.response.headers.has("X-Remix-Replace")?Cn.Replace:Cn.Push,{formMethod:De,formAction:at,formEncType:Lt}=b.navigation;!ke&&!Ne&&De&&at&&Lt&&(ke=lh(b.navigation));let $t=ke||Ne;if(ey.has(V.response.status)&&$t&&Rr($t.formMethod))await Xt(Ve,Pe,{submission:rn({},$t,{formAction:Me}),preventScrollReset:Ye||W,enableViewTransition:Q?re:void 0});else{let Te=Zc(Pe,ke);await Xt(Ve,Pe,{overrideNavigation:Te,fetcherSubmission:Ne,preventScrollReset:Ye||W,enableViewTransition:Q?re:void 0})}}async function Fe(O,V,Q,pe,ke,Ne){let Ye,Le={};try{Ye=await ay(u,O,V,Q,pe,ke,Ne,i,o)}catch(Me){return pe.forEach(Pe=>{Le[Pe.route.id]={type:Ot.error,error:Me}}),Le}for(let[Me,Pe]of Object.entries(Ye))if(hy(Pe)){let Ve=Pe.result;Le[Me]={type:Ot.redirect,response:dy(Ve,Q,Me,ke,c,d.v7_relativeSplatPath)}}else Le[Me]=await uy(Pe);return Le}async function $e(O,V,Q,pe,ke){let Ne=O.matches,Ye=Fe("loader",O,ke,Q,V,null),Le=Promise.all(pe.map(async Ve=>{if(Ve.matches&&Ve.match&&Ve.controller){let at=(await Fe("loader",O,di(e.history,Ve.path,Ve.controller.signal),[Ve.match],Ve.matches,Ve.key))[Ve.match.route.id];return{[Ve.key]:at}}else return Promise.resolve({[Ve.key]:{type:Ot.error,error:qn(404,{pathname:Ve.path})}})})),Me=await Ye,Pe=(await Le).reduce((Ve,De)=>Object.assign(Ve,De),{});return await Promise.all([vy(V,Me,ke.signal,Ne,O.loaderData),xy(V,Pe,pe)]),{loaderResults:Me,fetcherResults:Pe}}function vt(){z=!0,B.push(...fe()),Re.forEach((O,V)=>{H.has(V)&&ee.add(V),Mn(V)})}function At(O,V,Q){Q===void 0&&(Q={}),b.fetchers.set(O,V),ft({fetchers:new Map(b.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function _t(O,V,Q,pe){pe===void 0&&(pe={});let ke=Ho(b.matches,V);gt(O),ft({errors:{[ke.route.id]:Q},fetchers:new Map(b.fetchers)},{flushSync:(pe&&pe.flushSync)===!0})}function Yt(O){return He.set(O,(He.get(O)||0)+1),Ke.has(O)&&Ke.delete(O),b.fetchers.get(O)||ty}function gt(O){let V=b.fetchers.get(O);H.has(O)&&!(V&&V.state==="loading"&&ie.has(O))&&Mn(O),Re.delete(O),ie.delete(O),de.delete(O),d.v7_fetcherPersist&&Ke.delete(O),ee.delete(O),b.fetchers.delete(O)}function Pt(O){let V=(He.get(O)||0)-1;V<=0?(He.delete(O),Ke.add(O),d.v7_fetcherPersist||gt(O)):He.set(O,V),ft({fetchers:new Map(b.fetchers)})}function Mn(O){let V=H.get(O);V&&(V.abort(),H.delete(O))}function Ur(O){for(let V of O){let Q=Yt(V),pe=lo(Q.data);b.fetchers.set(V,pe)}}function $r(){let O=[],V=!1;for(let Q of de){let pe=b.fetchers.get(Q);Nt(pe,"Expected fetcher: "+Q),pe.state==="loading"&&(de.delete(Q),O.push(Q),V=!0)}return Ur(O),V}function dr(O){let V=[];for(let[Q,pe]of ie)if(pe<O){let ke=b.fetchers.get(Q);Nt(ke,"Expected fetcher: "+Q),ke.state==="loading"&&(Mn(Q),ie.delete(Q),V.push(Q))}return Ur(V),V.length>0}function Cr(O,V){let Q=b.blockers.get(O)||as;return te.get(O)!==V&&te.set(O,V),Q}function fr(O){b.blockers.delete(O),te.delete(O)}function sn(O,V){let Q=b.blockers.get(O)||as;Nt(Q.state==="unblocked"&&V.state==="blocked"||Q.state==="blocked"&&V.state==="blocked"||Q.state==="blocked"&&V.state==="proceeding"||Q.state==="blocked"&&V.state==="unblocked"||Q.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+Q.state+" -> "+V.state);let pe=new Map(b.blockers);pe.set(O,V),ft({blockers:pe})}function yn(O){let{currentLocation:V,nextLocation:Q,historyAction:pe}=O;if(te.size===0)return;te.size>1&&oi(!1,"A router only supports one blocker at a time");let ke=Array.from(te.entries()),[Ne,Ye]=ke[ke.length-1],Le=b.blockers.get(Ne);if(!(Le&&Le.state==="proceeding")&&Ye({currentLocation:V,nextLocation:Q,historyAction:pe}))return Ne}function Se(O){let V=qn(404,{pathname:O}),Q=a||s,{matches:pe,route:ke}=ih(Q);return fe(),{notFoundMatches:pe,route:ke,error:V}}function fe(O){let V=[];return ve.forEach((Q,pe)=>{(!O||O(pe))&&(Q.cancel(),V.push(pe),ve.delete(pe))}),V}function we(O,V,Q){if(x=O,R=V,m=Q||null,!y&&b.navigation===Uc){y=!0;let pe=It(b.location,b.matches);pe!=null&&ft({restoreScrollPosition:pe})}return()=>{x=null,R=null,m=null}}function Be(O,V){return m&&m(O,V.map(pe=>N5(pe,b.loaderData)))||O.key}function yt(O,V){if(x&&R){let Q=Be(O,V);x[Q]=R()}}function It(O,V){if(x){let Q=Be(O,V),pe=x[Q];if(typeof pe=="number")return pe}return null}function Rt(O,V,Q){if(p)if(O){if(Object.keys(O[0].params).length>0)return{active:!0,matches:na(V,Q,c,!0)}}else return{active:!0,matches:na(V,Q,c,!0)||[]};return{active:!1,matches:null}}async function pt(O,V,Q,pe){if(!p)return{type:"success",matches:O};let ke=O;for(;;){let Ne=a==null,Ye=a||s,Le=i;try{await p({signal:Q,path:V,matches:ke,fetcherKey:pe,patch:(Ve,De)=>{Q.aborted||Jp(Ve,De,Ye,Le,o)}})}catch(Ve){return{type:"error",error:Ve,partialMatches:ke}}finally{Ne&&!Q.aborted&&(s=[...s])}if(Q.aborted)return{type:"aborted"};let Me=Vo(Ye,V,c);if(Me)return{type:"success",matches:Me};let Pe=na(Ye,V,c,!0);if(!Pe||ke.length===Pe.length&&ke.every((Ve,De)=>Ve.route.id===Pe[De].route.id))return{type:"success",matches:null};ke=Pe}}function hn(O){i={},a=Ta(O,o,void 0,i)}function qe(O,V){let Q=a==null;Jp(O,V,a||s,i,o),Q&&(s=[...s],ft({}))}return P={get basename(){return c},get future(){return d},get state(){return b},get routes(){return s},get window(){return t},initialize:dt,subscribe:St,enableScrollRestoration:we,navigate:mt,fetch:rt,revalidate:Fn,createHref:O=>e.history.createHref(O),encodeLocation:O=>e.history.encodeLocation(O),getFetcher:Yt,deleteFetcher:Pt,dispose:Je,getBlocker:Cr,deleteBlocker:fr,patchRoutes:qe,_internalFetchControllers:H,_internalActiveDeferreds:ve,_internalSetRoutes:hn},P}function oy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function rd(e,t,n,r,o,i,s,a){let c,u;if(s){c=[];for(let d of t)if(c.push(d),d.route.id===s){u=d;break}}else c=t,u=t[t.length-1];let p=Z5(o||".",U5(c,i),sl(e.pathname,n)||e.pathname,a==="path");if(o==null&&(p.search=e.search,p.hash=e.hash),(o==null||o===""||o===".")&&u){let d=hf(p.search);if(u.route.index&&!d)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let f=new URLSearchParams(p.search),v=f.getAll("index");f.delete("index"),v.filter(m=>m).forEach(m=>f.append("index",m));let x=f.toString();p.search=x?"?"+x:""}}return r&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Ko([n,p.pathname])),il(p)}function Gp(e,t,n,r){if(!r||!oy(r))return{path:n};if(r.formMethod&&!my(r.formMethod))return{path:n,error:qn(405,{method:r.formMethod})};let o=()=>({path:n,error:qn(400,{type:"invalid-body"})}),i=r.formMethod||"get",s=e?i.toUpperCase():i.toLowerCase(),a=Um(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Rr(s))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,x)=>{let[m,R]=x;return""+v+m+"="+R+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Rr(s))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}Nt(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=id(r.formData),u=r.formData;else if(r.body instanceof FormData)c=id(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=th(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=th(c)}catch{return o()}let p={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Rr(p.formMethod))return{path:n,submission:p};let d=$o(n);return t&&d.search&&hf(d.search)&&c.append("index",""),d.search="?"+c,{path:il(d),submission:p}}function Kp(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(o=>o.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function qp(e,t,n,r,o,i,s,a,c,u,p,d,f,v,x,m){let R=m?ir(m[1])?m[1].error:m[1].data:void 0,y=e.createURL(t.location),g=e.createURL(o),C=n;i&&t.errors?C=Kp(n,Object.keys(t.errors)[0],!0):m&&ir(m[1])&&(C=Kp(n,m[0]));let S=m?m[1].statusCode:void 0,E=s&&S&&S>=400,P=C.filter((T,W)=>{let{route:N}=T;if(N.lazy)return!0;if(N.loader==null)return!1;if(i)return od(N,t.loaderData,t.errors);if(iy(t.loaderData,t.matches[W],T)||c.some(k=>k===T.route.id))return!0;let re=t.matches[W],D=T;return Qp(T,rn({currentUrl:y,currentParams:re.params,nextUrl:g,nextParams:D.params},r,{actionResult:R,actionStatus:S,defaultShouldRevalidate:E?!1:a||y.pathname+y.search===g.pathname+g.search||y.search!==g.search||Hm(re,D)}))}),b=[];return d.forEach((T,W)=>{if(i||!n.some(M=>M.route.id===T.routeId)||p.has(W))return;let N=Vo(v,T.path,x);if(!N){b.push({key:W,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let re=t.fetchers.get(W),D=ms(N,T.path),k=!1;f.has(W)?k=!1:u.has(W)?(u.delete(W),k=!0):re&&re.state!=="idle"&&re.data===void 0?k=a:k=Qp(D,rn({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:R,actionStatus:S,defaultShouldRevalidate:E?!1:a})),k&&b.push({key:W,routeId:T.routeId,path:T.path,matches:N,match:D,controller:new AbortController})}),[P,b]}function od(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,o=n!=null&&n[e.id]!==void 0;return!r&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!o}function iy(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Hm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Qp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function Jp(e,t,n,r,o){var i;let s;if(e){let u=r[e];Nt(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),s=u.children}else s=n;let a=t.filter(u=>!s.some(p=>Wm(u,p))),c=Ta(a,o,[e||"_","patch",String(((i=s)==null?void 0:i.length)||"0")],r);s.push(...c)}function Wm(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var o;return(o=t.children)==null?void 0:o.some(i=>Wm(n,i))}):!1}async function sy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Nt(o,"No route found in manifest");let i={};for(let s in r){let c=o[s]!==void 0&&s!=="hasErrorBoundary";oi(!c,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!L5.has(s)&&(i[s]=r[s])}Object.assign(o,i),Object.assign(o,rn({},t(o),{lazy:void 0}))}async function ly(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,s)=>Object.assign(o,{[n[s].route.id]:i}),{})}async function ay(e,t,n,r,o,i,s,a,c,u){let p=i.map(v=>v.route.lazy?sy(v.route,c,a):void 0),d=i.map((v,x)=>{let m=p[x],R=o.some(g=>g.route.id===v.route.id);return rn({},v,{shouldLoad:R,resolve:async g=>(g&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(R=!0),R?cy(t,r,v,m,g,u):Promise.resolve({type:Ot.data,result:void 0}))})}),f=await e({matches:d,request:r,params:i[0].params,fetcherKey:s,context:u});try{await Promise.all(p)}catch{}return f}async function cy(e,t,n,r,o,i){let s,a,c=u=>{let p,d=new Promise((x,m)=>p=m);a=()=>p(),t.signal.addEventListener("abort",a);let f=x=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...x!==void 0?[x]:[]),v=(async()=>{try{return{type:"data",result:await(o?o(m=>f(m)):f())}}catch(x){return{type:"error",result:x}}})();return Promise.race([v,d])};try{let u=n.route[e];if(r)if(u){let p,[d]=await Promise.all([c(u).catch(f=>{p=f}),r]);if(p!==void 0)throw p;s=d}else if(await r,u=n.route[e],u)s=await c(u);else if(e==="action"){let p=new URL(t.url),d=p.pathname+p.search;throw qn(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:Ot.data,result:void 0};else if(u)s=await c(u);else{let p=new URL(t.url),d=p.pathname+p.search;throw qn(404,{pathname:d})}Nt(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:Ot.error,result:u}}finally{a&&t.signal.removeEventListener("abort",a)}return s}async function uy(e){let{result:t,type:n}=e;if(Zm(t)){let d;try{let f=t.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(f){return{type:Ot.error,error:f}}return n===Ot.error?{type:Ot.error,error:new Aa(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:Ot.data,data:d,statusCode:t.status,headers:t.headers}}if(n===Ot.error){if(sh(t)){var r,o;if(t.data instanceof Error){var i,s;return{type:Ot.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:Ot.error,error:new Aa(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:qs(t)?t.status:void 0,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:Ot.error,error:t,statusCode:qs(t)?t.status:void 0}}if(gy(t)){var a,c;return{type:Ot.deferred,deferredData:t,statusCode:(a=t.init)==null?void 0:a.status,headers:((c=t.init)==null?void 0:c.headers)&&new Headers(t.init.headers)}}if(sh(t)){var u,p;return{type:Ot.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(p=t.init)!=null&&p.headers?new Headers(t.init.headers):void 0}}return{type:Ot.data,data:t}}function dy(e,t,n,r,o,i){let s=e.headers.get("Location");if(Nt(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!ff.test(s)){let a=r.slice(0,r.findIndex(c=>c.route.id===n)+1);s=rd(new URL(t.url),a,o,!0,s,i),e.headers.set("Location",s)}return e}function eh(e,t,n,r){let o=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ff.test(e)){let i=e,s=i.startsWith("//")?new URL(t.protocol+i):new URL(i);if(o.includes(s.protocol))throw new Error("Invalid redirect location");let a=sl(s.pathname,n)!=null;if(s.origin===t.origin&&a)return s.pathname+s.search+s.hash}try{let i=r.createURL(e);if(o.includes(i.protocol))throw new Error("Invalid redirect location")}catch{}return e}function di(e,t,n,r){let o=e.createURL(Um(t)).toString(),i={signal:n};if(r&&Rr(r.formMethod)){let{formMethod:s,formEncType:a}=r;i.method=s.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=id(r.formData):i.body=r.formData}return new Request(o,i)}function id(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function th(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function fy(e,t,n,r,o){let i={},s=null,a,c=!1,u={},p=n&&ir(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,v=t[f];if(Nt(!Xo(v),"Cannot handle redirect results in processLoaderData"),ir(v)){let x=v.error;p!==void 0&&(x=p,p=void 0),s=s||{};{let m=Ho(e,f);s[m.route.id]==null&&(s[m.route.id]=x)}i[f]=void 0,c||(c=!0,a=qs(v.error)?v.error.status:500),v.headers&&(u[f]=v.headers)}else go(v)?(r.set(f,v.deferredData),i[f]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!c&&(a=v.statusCode),v.headers&&(u[f]=v.headers)):(i[f]=v.data,v.statusCode&&v.statusCode!==200&&!c&&(a=v.statusCode),v.headers&&(u[f]=v.headers))}),p!==void 0&&n&&(s={[n[0]]:p},i[n[0]]=void 0),{loaderData:i,errors:s,statusCode:a||200,loaderHeaders:u}}function nh(e,t,n,r,o,i,s){let{loaderData:a,errors:c}=fy(t,n,r,s);return o.forEach(u=>{let{key:p,match:d,controller:f}=u,v=i[p];if(Nt(v,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(ir(v)){let x=Ho(e.matches,d==null?void 0:d.route.id);c&&c[x.route.id]||(c=rn({},c,{[x.route.id]:v.error})),e.fetchers.delete(p)}else if(Xo(v))Nt(!1,"Unhandled fetcher revalidation redirect");else if(go(v))Nt(!1,"Unhandled fetcher deferred data");else{let x=lo(v.data);e.fetchers.set(p,x)}}),{loaderData:a,errors:c}}function rh(e,t,n,r){let o=rn({},t);for(let i of n){let s=i.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&i.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function oh(e){return e?ir(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ho(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ih(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qn(e,t){let{pathname:n,routeId:r,method:o,type:i,message:s}=t===void 0?{}:t,a="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?c="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?c="defer() is not supported in actions":i==="invalid-body"&&(c="Unable to encode submission body")):e===403?(a="Forbidden",c='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",c='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?c="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(c='Invalid request method "'+o.toUpperCase()+'"')),new Aa(e||500,a,new Error(c),!0)}function Ml(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(Xo(o))return{key:r,result:o}}}function Um(e){let t=typeof e=="string"?$o(e):e;return il(rn({},t,{hash:""}))}function py(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function hy(e){return Zm(e.result)&&J5.has(e.result.status)}function go(e){return e.type===Ot.deferred}function ir(e){return e.type===Ot.error}function Xo(e){return(e&&e.type)===Ot.redirect}function sh(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function gy(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Zm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function my(e){return Q5.has(e.toLowerCase())}function Rr(e){return K5.has(e.toLowerCase())}async function vy(e,t,n,r,o){let i=Object.entries(t);for(let s=0;s<i.length;s++){let[a,c]=i[s],u=e.find(f=>(f==null?void 0:f.route.id)===a);if(!u)continue;let p=r.find(f=>f.route.id===u.route.id),d=p!=null&&!Hm(p,u)&&(o&&o[u.route.id])!==void 0;go(c)&&d&&await pf(c,n,!1).then(f=>{f&&(t[a]=f)})}}async function xy(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:s}=n[r],a=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&go(a)&&(Nt(s,"Expected an AbortController for revalidating fetcher deferred result"),await pf(a,s.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function pf(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ot.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ot.error,error:o}}return{type:Ot.data,data:e.deferredData.data}}}function hf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ms(e,t){let n=typeof t=="string"?$o(t).search:t.search;if(e[e.length-1].route.index&&hf(n||""))return e[e.length-1];let r=Fm(e);return r[r.length-1]}function lh(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:s}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function Zc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function yy(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function cs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function by(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function lo(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function wy(e,t){try{let n=e.sessionStorage.getItem(Vm);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function Cy(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Vm,JSON.stringify(n))}catch(r){oi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sd(){return sd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sd.apply(this,arguments)}const Xm=h.createContext(null),Ym=h.createContext(null),Gm=h.createContext(null),gf=h.createContext(null),sc=h.createContext({outlet:null,matches:[],isDataRoute:!1}),Km=h.createContext(null);function mf(){return h.useContext(gf)!=null}function ky(){return mf()||Nt(!1),h.useContext(gf).location}function Sy(e,t,n,r){mf()||Nt(!1);let{navigator:o}=h.useContext(Gm),{matches:i}=h.useContext(sc),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=ky(),p;p=u;let d=p.pathname||"/",f=d;if(c!=="/"){let m=c.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=Vo(e,{pathname:f});return Ny(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Ko([c,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Ko([c,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r)}function jy(){let e=$y(),t=qs(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:o},n):null,null)}const Ry=h.createElement(jy,null);class Ly extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?h.createElement(sc.Provider,{value:this.props.routeContext},h.createElement(Km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ey(e){let{routeContext:t,match:n,children:r}=e,o=h.useContext(Xm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),h.createElement(sc.Provider,{value:t},r)}function Ny(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||Nt(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let d=s[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:f,errors:v}=n,x=d.route.loader&&f[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||x){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,d,f)=>{let v,x=!1,m=null,R=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,m=d.route.errorElement||Ry,c&&(u<0&&f===0?(_y("route-fallback"),x=!0,R=null):u===f&&(x=!0,R=d.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,f+1)),g=()=>{let C;return v?C=m:x?C=R:d.route.Component?C=h.createElement(d.route.Component,null):d.route.element?C=d.route.element:C=p,h.createElement(Ey,{match:d,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:C})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?h.createElement(Ly,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var qm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qm||{});function My(e){let t=h.useContext(Ym);return t||Nt(!1),t}function Ty(e){let t=h.useContext(sc);return t||Nt(!1),t}function Ay(e){let t=Ty(),n=t.matches[t.matches.length-1];return n.route.id||Nt(!1),n.route.id}function $y(){var e;let t=h.useContext(Km),n=My(qm.UseRouteError),r=Ay();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const ah={};function _y(e,t,n){ah[e]||(ah[e]=!0)}function Py(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Iy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Cn.Pop,navigator:i,static:s=!1,future:a}=e;mf()&&Nt(!1);let c=t.replace(/^\/*/,"/"),u=h.useMemo(()=>({basename:c,navigator:i,static:s,future:sd({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=$o(r));let{pathname:p="/",search:d="",hash:f="",state:v=null,key:x="default"}=r,m=h.useMemo(()=>{let R=sl(p,c);return R==null?null:{location:{pathname:R,search:d,hash:f,state:v,key:x},navigationType:o}},[c,p,d,f,v,x,o]);return m==null?null:h.createElement(Gm.Provider,{value:u},h.createElement(gf.Provider,{children:n,value:m}))}new Promise(()=>{});function zy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:h.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:h.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:h.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$a.apply(this,arguments)}const Oy="6";try{window.__reactRouterVersion=Oy}catch{}function Dy(e,t){return ry({basename:void 0,future:$a({},void 0,{v7_prependBasename:!0}),history:S5({window:void 0}),hydrationData:Fy(),routes:e,mapRouteProperties:zy,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function Fy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=$a({},t,{errors:By(t.errors)})),t}function By(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Aa(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let s=new i(o.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const Vy=h.createContext({isTransitioning:!1}),Hy=h.createContext(new Map),Wy="startTransition",ch=dv[Wy],Uy="flushSync",uh=k5[Uy];function Zy(e){ch?ch(e):e()}function us(e){uh?uh(e):e()}class Xy{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Yy(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=h.useState(n.state),[s,a]=h.useState(),[c,u]=h.useState({isTransitioning:!1}),[p,d]=h.useState(),[f,v]=h.useState(),[x,m]=h.useState(),R=h.useRef(new Map),{v7_startTransition:y}=r||{},g=h.useCallback(T=>{y?Zy(T):T()},[y]),C=h.useCallback((T,W)=>{let{deletedFetchers:N,flushSync:re,viewTransitionOpts:D}=W;T.fetchers.forEach((M,z)=>{M.data!==void 0&&R.current.set(z,M.data)}),N.forEach(M=>R.current.delete(M));let k=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!D||k){re?us(()=>i(T)):g(()=>i(T));return}if(re){us(()=>{f&&(p&&p.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let M=n.window.document.startViewTransition(()=>{us(()=>i(T))});M.finished.finally(()=>{us(()=>{d(void 0),v(void 0),a(void 0),u({isTransitioning:!1})})}),us(()=>v(M));return}f?(p&&p.resolve(),f.skipTransition(),m({state:T,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(a(T),u({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[n.window,f,p,R,g]);h.useLayoutEffect(()=>n.subscribe(C),[n,C]),h.useEffect(()=>{c.isTransitioning&&!c.flushSync&&d(new Xy)},[c]),h.useEffect(()=>{if(p&&s&&n.window){let T=s,W=p.promise,N=n.window.document.startViewTransition(async()=>{g(()=>i(T)),await W});N.finished.finally(()=>{d(void 0),v(void 0),a(void 0),u({isTransitioning:!1})}),v(N)}},[g,s,p,n.window]),h.useEffect(()=>{p&&s&&o.location.key===s.location.key&&p.resolve()},[p,f,o.location,s]),h.useEffect(()=>{!c.isTransitioning&&x&&(a(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),m(void 0))},[c.isTransitioning,x]),h.useEffect(()=>{},[]);let S=h.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,W,N)=>n.navigate(T,{state:W,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(T,W,N)=>n.navigate(T,{replace:!0,state:W,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),E=n.basename||"/",P=h.useMemo(()=>({router:n,navigator:S,static:!1,basename:E}),[n,S,E]),b=h.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return h.useEffect(()=>Py(r,n.future),[r,n.future]),h.createElement(h.Fragment,null,h.createElement(Xm.Provider,{value:P},h.createElement(Ym.Provider,{value:o},h.createElement(Hy.Provider,{value:R.current},h.createElement(Vy.Provider,{value:c},h.createElement(Iy,{basename:E,location:o.location,navigationType:o.historyAction,navigator:S,future:b},o.initialized||n.future.v7_partialHydration?h.createElement(Gy,{routes:n.routes,future:n.future,state:o}):t))))),null)}const Gy=h.memo(Ky);function Ky(e){let{routes:t,future:n,state:r}=e;return Sy(t,void 0,r,n)}var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var fh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fh||(fh={}));const qy="modulepreload",Qy=function(e){return"/share-address/"+e},ph={},hh=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Qy(c),c in ph)return;ph[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":qy,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,v)=>{d.addEventListener("load",f),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function vf(){const e=[],t=new Map;try{for(const n of document.styleSheets)try{for(const r of n.cssRules)if(r instanceof CSSStyleRule)gh(r,e);else if(r instanceof CSSMediaRule)for(const o of r.cssRules)o instanceof CSSStyleRule&&gh(o,e)}catch{}}catch{}for(const n of[document.documentElement,document.body]){const r=getComputedStyle(n);for(const o of e){const i=r.getPropertyValue(o.name).trim();i&&i!==o.value&&(o.value=i)}}for(const n of e){const r=Qm(n.value);t.has(r)||t.set(r,[]),t.get(r).push(n.name)}return{tokens:e,valueToTokens:t}}function gh(e,t){const n=e.style;for(let r=0;r<n.length;r++){const o=n.item(r);if(o.startsWith("--")){const i=n.getPropertyValue(o).trim();i&&t.push({name:o,value:i,source:e.selectorText})}}}function Qm(e){let t=e.trim().toLowerCase();return t=t.replace(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+\s*)?\)/g,(n,r,o,i)=>`rgb(${r}, ${o}, ${i})`),t}function Jm(e,t){const n=Qm(e);return t.valueToTokens.get(n)||[]}function e0(e){const t=e.className&&typeof e.className=="string"?e.className.trim().split(/\s+/):[],n=/^-?(?:m|p|w|h|text|bg|border|flex|grid|gap|space|rounded|shadow|opacity|font|leading|tracking|z|inset|top|right|bottom|left|min|max|overflow|cursor|transition|duration|ease|delay|animate|scale|rotate|translate|skew|origin|ring|outline|placeholder|divide|sr|not-sr|container|prose|aspect|columns|break|decoration|underline|overline|line-through|no-underline|antialiased|subpixel|italic|not-italic|normal-case|uppercase|lowercase|capitalize|truncate|indent|align|whitespace|hyphens|content|list|object|overflow|scroll|snap|touch|select|resize|appearance|accent|caret|will-change|fill|stroke)\b/,r=t.filter(o=>n.test(o)||/^(sm|md|lg|xl|2xl|dark|hover|focus|active|group|peer):/.test(o)).length;return r>=3||t.length>0&&r/t.length>.5?"tailwind":t.some(o=>/^[a-zA-Z]+_[a-zA-Z]+__[a-zA-Z0-9]+$/.test(o)||/^_[a-zA-Z]+_[a-zA-Z0-9]+$/.test(o))?"css-modules":t.some(o=>/^sc-[a-zA-Z0-9]+$/.test(o)||/^css-[a-zA-Z0-9]+$/.test(o))?"css-in-js":e.hasAttribute("data-styled")||e.closest("[data-styled]")?"styled-components":t.length>0?"plain-css":"unknown"}function t0(e){if(e.tokens.length===0)return null;const t={};for(const i of e.tokens){const s=i.name.replace(/^--/,"").split("-").slice(0,2).join("-");t[s]=(t[s]||0)+1}const n=Object.entries(t).sort((i,s)=>s[1]-i[1]).slice(0,10),r=e.tokens.length,o=n.map(([i,s])=>`${i} (${s})`).join(", ");return`${r} CSS custom properties found. Top prefixes: ${o}`}let yr,xf,n0;function Jy(e,t){if(n0=new Date,e.nodeType!==Node.ELEMENT_NODE)throw new Error("Can't generate CSS selector for non-element node type.");if(e.tagName.toLowerCase()==="html")return"html";const n={root:document.body,idName:o=>!0,className:o=>!0,tagName:o=>!0,attr:(o,i)=>!1,seedMinLength:1,optimizedMinLength:2,threshold:1e3,maxNumberOfTries:1e4,timeoutMs:void 0};yr={...n,...t},xf=e2(yr.root,n);let r=Tl(e,"all",()=>Tl(e,"two",()=>Tl(e,"one",()=>Tl(e,"none"))));if(r){const o=i0(s0(r,e));return o.length>0&&(r=o[0]),lc(r)}else throw new Error("Selector was not found.")}function e2(e,t){return e.nodeType===Node.DOCUMENT_NODE?e:e===t.root?e.ownerDocument:e}function Tl(e,t,n){let r=null,o=[],i=e,s=0;for(;i;){const a=new Date().getTime()-n0.getTime();if(yr.timeoutMs!==void 0&&a>yr.timeoutMs)throw new Error(`Timeout: Can't find a unique selector after ${a}ms`);let c=$l(t2(i))||$l(...n2(i))||$l(...r2(i))||$l(o2(i))||[xh()];const u=i2(i);if(t=="all")u&&(c=c.concat(c.filter(Xc).map(p=>Al(p,u))));else if(t=="two")c=c.slice(0,1),u&&(c=c.concat(c.filter(Xc).map(p=>Al(p,u))));else if(t=="one"){const[p]=c=c.slice(0,1);u&&Xc(p)&&(c=[Al(p,u)])}else t=="none"&&(c=[xh()],u&&(c=[Al(c[0],u)]));for(let p of c)p.level=s;if(o.push(c),o.length>=yr.seedMinLength&&(r=mh(o,n),r))break;i=i.parentElement,s++}return r||(r=mh(o,n)),!r&&n?n():r}function mh(e,t){const n=i0(o0(e));if(n.length>yr.threshold)return t?t():null;for(let r of n)if(r0(r))return r;return null}function lc(e){let t=e[0],n=t.name;for(let r=1;r<e.length;r++){const o=e[r].level||0;t.level===o-1?n=`${e[r].name} > ${n}`:n=`${e[r].name} ${n}`,t=e[r]}return n}function vh(e){return e.map(t=>t.penalty).reduce((t,n)=>t+n,0)}function r0(e){const t=lc(e);switch(xf.querySelectorAll(t).length){case 0:throw new Error(`Can't select any node with this selector: ${t}`);case 1:return!0;default:return!1}}function t2(e){const t=e.getAttribute("id");return t&&yr.idName(t)?{name:"#"+CSS.escape(t),penalty:0}:null}function n2(e){return Array.from(e.attributes).filter(n=>yr.attr(n.name,n.value)).map(n=>({name:`[${CSS.escape(n.name)}="${CSS.escape(n.value)}"]`,penalty:.5}))}function r2(e){return Array.from(e.classList).filter(yr.className).map(n=>({name:"."+CSS.escape(n),penalty:1}))}function o2(e){const t=e.tagName.toLowerCase();return yr.tagName(t)?{name:t,penalty:2}:null}function xh(){return{name:"*",penalty:3}}function i2(e){const t=e.parentNode;if(!t)return null;let n=t.firstChild;if(!n)return null;let r=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&r++,n!==e);)n=n.nextSibling;return r}function Al(e,t){return{name:e.name+`:nth-child(${t})`,penalty:e.penalty+1}}function Xc(e){return e.name!=="html"&&!e.name.startsWith("#")}function $l(...e){const t=e.filter(s2);return t.length>0?t:null}function s2(e){return e!=null}function*o0(e,t=[]){if(e.length>0)for(let n of e[0])yield*o0(e.slice(1,e.length),t.concat(n));else yield t}function i0(e){return[...e].sort((t,n)=>vh(t)-vh(n))}function*s0(e,t,n={counter:0,visited:new Map}){if(e.length>2&&e.length>yr.optimizedMinLength)for(let r=1;r<e.length-1;r++){if(n.counter>yr.maxNumberOfTries)return;n.counter+=1;const o=[...e];o.splice(r,1);const i=lc(o);if(n.visited.has(i))return;r0(o)&&l2(o,t)&&(yield o,n.visited.set(i,!0),yield*s0(o,t,n))}}function l2(e,t){return xf.querySelector(lc(e))===t}const _a={attribute:/\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,id:/#(?<name>[-\w\P{ASCII}]+)/gu,class:/\.(?<name>[-\w\P{ASCII}]+)/gu,comma:/\s*,\s*/g,combinator:/\s*[\s>+~]\s*/g,"pseudo-element":/::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,"pseudo-class":/:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,universal:/(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,type:/(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu},a2=new Set(["combinator","comma"]),c2=new Set(["not","is","where","has","matches","-moz-any","-webkit-any","nth-child","nth-last-child"]),yh=/(?<index>[\dn+-]+)\s+of\s+(?<subtree>.+)/,u2={"nth-child":yh,"nth-last-child":yh},d2=e=>{switch(e){case"pseudo-element":case"pseudo-class":return new RegExp(_a[e].source.replace("(?<argument>¶*)","(?<argument>.*)"),"gu");default:return _a[e]}};function f2(e,t){let n=0,r="";for(;t<e.length;t++){const o=e[t];switch(o){case"(":++n;break;case")":--n;break}if(r+=o,n===0)return r}return r}function p2(e,t=_a){if(!e)return[];const n=[e];for(const[o,i]of Object.entries(t))for(let s=0;s<n.length;s++){const a=n[s];if(typeof a!="string")continue;i.lastIndex=0;const c=i.exec(a);if(!c)continue;const u=c.index-1,p=[],d=c[0],f=a.slice(0,u+1);f&&p.push(f),p.push({...c.groups,type:o,content:d});const v=a.slice(u+d.length+1);v&&p.push(v),n.splice(s,1,...p)}let r=0;for(const o of n)switch(typeof o){case"string":throw new Error(`Unexpected sequence ${o} found at index ${r}`);case"object":r+=o.content.length,o.pos=[r-o.content.length,r],a2.has(o.type)&&(o.content=o.content.trim()||" ");break}return n}const h2=/(['"])([^\\\n]*?)\1/g,g2=/\\./g;function m2(e,t=_a){if(e=e.trim(),e==="")return[];const n=[];e=e.replace(g2,(i,s)=>(n.push({value:i,offset:s}),"".repeat(i.length))),e=e.replace(h2,(i,s,a,c)=>(n.push({value:i,offset:c}),`${s}${"".repeat(a.length)}${s}`));{let i=0,s;for(;(s=e.indexOf("(",i))>-1;){const a=f2(e,s);n.push({value:a,offset:s}),e=`${e.substring(0,s)}(${"¶".repeat(a.length-2)})${e.substring(s+a.length)}`,i=s+a.length}}const r=p2(e,t),o=new Set;for(const i of n.reverse())for(const s of r){const{offset:a,value:c}=i;if(!(s.pos[0]<=a&&a+c.length<=s.pos[1]))continue;const{content:u}=s,p=a-s.pos[0];s.content=u.slice(0,p)+c+u.slice(p+c.length),s.content!==u&&o.add(s)}for(const i of o){const s=d2(i.type);if(!s)throw new Error(`Unknown token type: ${i.type}`);s.lastIndex=0;const a=s.exec(i.content);if(!a)throw new Error(`Unable to parse content for ${i.type}: ${i.content}`);Object.assign(i,a.groups)}return r}function fi(e,{list:t=!0}={}){if(t&&e.find(n=>n.type==="comma")){const n=[],r=[];for(let o=0;o<e.length;o++)if(e[o].type==="comma"){if(r.length===0)throw new Error("Incorrect comma at "+o);n.push(fi(r,{list:!1})),r.length=0}else r.push(e[o]);if(r.length===0)throw new Error("Trailing comma");return n.push(fi(r,{list:!1})),{type:"list",list:n}}for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.type==="combinator"){let o=e.slice(0,n),i=e.slice(n+1);return o.length===0?{type:"relative",combinator:r.content,right:fi(i)}:{type:"complex",combinator:r.content,left:fi(o),right:fi(i)}}}switch(e.length){case 0:throw new Error("Could not build AST.");case 1:return e[0];default:return{type:"compound",list:[...e]}}}function*vs(e,t){switch(e.type){case"list":for(let n of e.list)yield*vs(n,e);break;case"complex":yield*vs(e.left,e),yield*vs(e.right,e);break;case"relative":yield*vs(e.right,e);break;case"compound":yield*e.list.map(n=>[n,e]);break;default:yield[e,t]}}function l0(e,{recursive:t=!0,list:n=!0}={}){const r=m2(e);if(!r)return;const o=fi(r,{list:n});if(!t)return o;for(const[i]of vs(o)){if(i.type!=="pseudo-class"||!i.argument||!c2.has(i.name))continue;let s=i.argument;const a=u2[i.name];if(a){const c=a.exec(s);if(!c)continue;Object.assign(i,c.groups),s=c.groups.subtree}s&&Object.assign(i,{subtree:l0(s,{recursive:!0,list:!0})})}return o}var v2={padding:"spacing","padding-top":"spacing","padding-right":"spacing","padding-bottom":"spacing","padding-left":"spacing","padding-inline":"spacing","padding-inline-start":"spacing","padding-inline-end":"spacing","padding-block":"spacing","padding-block-start":"spacing","padding-block-end":"spacing",margin:"spacing","margin-top":"spacing","margin-right":"spacing","margin-bottom":"spacing","margin-left":"spacing","margin-inline":"spacing","margin-inline-start":"spacing","margin-inline-end":"spacing","margin-block":"spacing","margin-block-start":"spacing","margin-block-end":"spacing",gap:"spacing","row-gap":"spacing","column-gap":"spacing",width:"sizing",height:"sizing","min-width":"sizing","max-width":"sizing","min-height":"sizing","max-height":"sizing","inline-size":"sizing","block-size":"sizing","min-inline-size":"sizing","max-inline-size":"sizing","min-block-size":"sizing","max-block-size":"sizing",color:"colors","background-color":"colors","border-color":"colors","border-top-color":"colors","border-right-color":"colors","border-bottom-color":"colors","border-left-color":"colors","border-inline-start-color":"colors","border-inline-end-color":"colors","border-block-start-color":"colors","border-block-end-color":"colors","outline-color":"colors","text-decoration-color":"colors","accent-color":"colors","caret-color":"colors",fill:"colors",stroke:"colors","font-size":"font-size","font-weight":"font-weight","line-height":"line-height","letter-spacing":"letter-spacing","font-family":"font-family","border-radius":"border-radius","border-top-left-radius":"border-radius","border-top-right-radius":"border-radius","border-bottom-left-radius":"border-radius","border-bottom-right-radius":"border-radius","border-start-start-radius":"border-radius","border-start-end-radius":"border-radius","border-end-start-radius":"border-radius","border-end-end-radius":"border-radius","border-width":"border-width","border-top-width":"border-width","border-right-width":"border-width","border-bottom-width":"border-width","border-left-width":"border-width","border-inline-start-width":"border-width","border-inline-end-width":"border-width","border-block-start-width":"border-width","border-block-end-width":"border-width","box-shadow":"box-shadow",opacity:"opacity",display:"layout","flex-direction":"layout","align-items":"layout","justify-content":"layout","flex-wrap":"layout",position:"layout"};function _o(e){return v2[e]??null}function zn(e){try{return Jy(e,{root:document.body,className:t=>!(t.startsWith("_")||t.startsWith("css-")||/^[a-z]{1,3}[A-Za-z0-9_]{8,}$/.test(t)),seedMinLength:1,optimizedMinLength:2,threshold:1e3})}catch{return x2(e)}}function x2(e){const t=[];let n=e;for(;n&&n!==document.body;){let r=n.tagName.toLowerCase();if(n.id){t.unshift(`#${n.id}`);break}const o=n.parentElement;if(o){const i=Array.from(o.children).filter(s=>s.tagName===n.tagName);if(i.length>1){const s=i.indexOf(n)+1;r+=`:nth-of-type(${s})`}}t.unshift(r),n=o}return t.join(" > ")}function Yc(e){const t=ra(e);for(const n of t)if(n.count>1)return n;return t.length>0?t[0]:null}function Lr(e){return e.includes("__")||e.includes("--")?!1:!!(e.startsWith("_")||e.startsWith("css-")||/^[a-z]{1,3}[A-Za-z0-9_]{8,}$/.test(e))}var ld=new Set(["m","mx","my","mt","mr","mb","ml","ms","me","p","px","py","pt","pr","pb","pl","ps","pe","space","gap","w","h","min-w","max-w","min-h","max-h","size","text","font","leading","tracking","indent","bg","from","via","to","border","rounded","ring","outline","divide","flex","grid","col","row","place","items","justify","self","order","float","clear","basis","grow","shrink","wrap","inset","top","right","bottom","left","z","shadow","opacity","blur","brightness","contrast","saturate","backdrop","mix-blend","overflow","overscroll","scroll","snap","touch","select","cursor","pointer-events","resize","appearance","transition","duration","ease","delay","animate","scale","rotate","translate","skew","origin","aspect","columns","break","object","decoration","underline","overline","line-through","no-underline","uppercase","lowercase","capitalize","normal-case","truncate","antialiased","subpixel-antialiased","whitespace","hyphens","content","list","sr","not-sr","will-change","fill","stroke","caret","accent","container","prose","block","inline","inline-block","inline-flex","inline-grid","hidden","visible","invisible","collapse","static","relative","absolute","fixed","sticky","isolate","isolation","table","table-caption","table-cell","table-column","table-row","table-footer-group","table-header-group","table-row-group","table-column-group","contents","flow-root","line-clamp","italic","not-italic","inset-ring","inset-shadow","field-sizing","text-wrap","text-nowrap","text-balance","text-pretty"]),y2=new Set(["btn","button","card","modal","nav","header","footer","sidebar","hero","section","container-fluid","wrapper","layout","page","view","panel","dialog","menu","toolbar","badge","chip","avatar","icon","logo","form","input","item","link","tab","accordion","carousel","dropdown","tooltip","popover","alert","toast","banner","widget"]),b2=new Set(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black","none","tight","snug","relaxed","loose","tighter","wide","wider","widest","hidden","visible","scroll","auto","clip","inner","outer","inset","left","center","right","justify","start","end","row","col","wrap","nowrap","reverse","cover","contain","fill","baseline","stretch","between","around","evenly","pointer","default","move","grab","grabbing","not-allowed","wait","crosshair","ellipsis","truncate","clamp"]),w2=/^(?:sm|md|lg|xl|2xl|3xl|4xl|5xl|min-sm|min-md|min-lg|min-xl|min-2xl|max-sm|max-md|max-lg|max-xl|max-2xl|dark|light|hover|focus|focus-within|focus-visible|active|visited|target|first|last|only|odd|even|first-of-type|last-of-type|only-of-type|empty|disabled|enabled|checked|indeterminate|default|required|valid|invalid|in-range|out-of-range|placeholder-shown|autofill|read-only|open|closed|before|after|first-letter|first-line|marker|selection|file|backdrop|placeholder|group-hover|group-focus|group-active|group-first|group-last|peer-hover|peer-focus|peer-checked|peer-disabled|has|not|is|where|supports|aria|data|rtl|ltr|print|portrait|landscape|motion-safe|motion-reduce|contrast-more|contrast-less|forced-colors):/;function C2(e){const n=e.replace(/^.*?:/,"").replace(/^[-!]/,""),r=n.match(/^([a-z]+-[a-z]+)(?=-|$)/);return r&&ld.has(r[1])?r[1]:n.split("-")[0]}function yf(e){if(!e||!e.trim())return{score:0,confidence:1};if(w2.test(e))return{score:1,confidence:.95};if(/\[.+\]/.test(e))return{score:1,confidence:.95};if(/^[a-z][\w-]*\/\d+$/.test(e))return{score:1,confidence:.95};if(/!$/.test(e))return{score:.95,confidence:.9};const t=C2(e);if(e.includes("__")||/--[a-z]/.test(e))return{score:.05,confidence:.8};if(ld.has(e))return{score:.8,confidence:.75};if(y2.has(t))return{score:.15,confidence:.7};if(/^(is-|has-|not-|no-|active|disabled|selected|open|closed|collapsed|expanded|loading|error|success|warning|checked|focused|pressed|dragging)$/.test(e))return{score:.25,confidence:.5};const n=ld.has(t),r=/-(\d+\.?\d*|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|auto|full|screen|fit|min|max|none|px|0\.5|1\.5|2\.5|3\.5|\d+\/\d+)$/.test(e),o=/-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|black|white|transparent|current|inherit)-?\d*$/.test(e),i=e.length>t.length?e.slice(t.length+1):"",s=i!==""&&b2.has(i);return n&&(r||o||s)?{score:.85,confidence:.8}:n?{score:.5,confidence:.4}:r&&!n?{score:.55,confidence:.35}:e.length<=6&&/^[a-z]+-\d/.test(e)?{score:.7,confidence:.5}:{score:.35,confidence:.2}}function k2(e){return e.startsWith("padding-")?"padding":e.startsWith("margin-")?"margin":e.endsWith("-radius")&&e.startsWith("border-")?"border-radius":/^border-(top|right|bottom|left)-(width|style|color)$/.test(e)||e.startsWith("border-")&&(e.startsWith("border-block")||e.startsWith("border-inline"))?"border":e.startsWith("background-")?"background":e.startsWith("overflow-")?"overflow":e==="column-gap"||e==="row-gap"?"gap":e.startsWith("outline-")&&e!=="outline-offset"?"outline":e.startsWith("text-decoration-")?"text-decoration":e.startsWith("transition-")?"transition":e.startsWith("animation-")&&!e.startsWith("animation-range")?"animation":e.startsWith("scroll-margin-")?"scroll-margin":e.startsWith("scroll-padding-")?"scroll-padding":e.startsWith("list-style-")?"list-style":e.startsWith("grid-template-")?"grid-template":e.startsWith("grid-auto-")?"grid-auto":e==="flex-grow"||e==="flex-shrink"||e==="flex-basis"?"flex":e==="column-count"||e==="column-width"?"columns":(e.startsWith("place-"),e)}function a0(e){const t=new Set;for(let n=0;n<e.length;n++){const r=e[n];r.startsWith("--")||t.add(k2(r))}return t.size}function c0(e){return e.split(",").every(t=>{const o=t.trim().replace(/::?[\w-]+(?:\(.*?\))?/g,"").replace(/\[.*?\]/g,"").trim();if(/[\s>+~]/.test(o))return!1;const i=o.match(/\./g);return i!==null&&i.length===1})}function S2(e){const t=e.classList?Array.from(e.classList):[],n={compoundClasses:new Set,utilityClasses:new Set,classesFoundInRules:new Set,scores:new Map};if(t.length===0)return n;const r=new Map,o=new Set;for(const s of document.styleSheets){let a;try{a=s.cssRules}catch{continue}ad(a,t,e,n,r,o,null)}const i=t.filter(s=>!Lr(s));for(const s of i){if(n.utilityClasses.has(s)){n.scores.set(s,{score:1,confidence:.98,verdict:"utility"});continue}const a=yf(s),c=n.classesFoundInRules.has(s);let u=null;if(c){const v=r.get(s)??0,x=o.has(s);v<=1&&!x?u={score:.9,confidence:.85}:v<=2&&!x?u={score:.75,confidence:.8}:v<=3&&!x?u={score:.5,confidence:.65}:v>=5?u={score:.1,confidence:.85}:x?u={score:Math.max(0,.3-v*.05),confidence:.75}:u={score:.4,confidence:.6}}let p,d;u?a.score<=.25&&u.score>=.65?(p=a.score,d=a.confidence):(p=u.score*.65+a.score*.35,d=Math.max(u.confidence,a.confidence),Math.abs(u.score-a.score)<.2&&(d=Math.min(d+.1,1))):(p=a.score,d=a.confidence*.9),i.length>=10&&p>=.35&&p<=.65?p=Math.min(p+.1,1):i.length<=2&&p>=.35&&p<=.65&&(p=Math.max(p-.1,0));let f;p>=.65?(f="utility",n.utilityClasses.add(s)):p<=.35?f="semantic":d>=.7?(f=p>=.5?"utility":"semantic",f==="utility"&&n.utilityClasses.add(s)):f="ambiguous",n.scores.set(s,{score:p,confidence:d,verdict:f})}return n}function ad(e,t,n,r,o,i,s){var a;for(let c=0;c<e.length;c++){const u=e[c];if(typeof CSSLayerBlockRule<"u"&&u instanceof CSSLayerBlockRule){ad(u.cssRules,t,n,r,o,i,u.name);continue}if(u instanceof CSSGroupingRule){ad(u.cssRules,t,n,r,o,i,s);continue}if(!(u instanceof CSSStyleRule))continue;const p=u.selectorText,f=(((a=p.match(/\.([a-zA-Z0-9_-]+)/g))==null?void 0:a.map(m=>m.slice(1)))||[]).filter(m=>t.includes(m));if(f.length===0)continue;try{if(!n.matches(p))continue}catch{continue}for(const m of f)r.classesFoundInRules.add(m);if(f.length>=2)for(const m of f)r.compoundClasses.add(m);if(s==="utilities"){for(const m of f)r.utilityClasses.add(m);continue}const v=a0(u.style),x=c0(p);for(const m of f){const R=o.get(m)??0;o.set(m,Math.max(R,v)),x||i.add(m)}}}function ra(e){const t=e;if(!t.classList||t.classList.length===0)return[];const n=S2(e),r=Array.from(t.classList).filter(u=>!Lr(u));if(r.length===0)return[];const o=[],i=[],s=[],a=[];for(const u of r){const p=n.scores.get(u);if(!p){s.push(u);continue}if(n.compoundClasses.has(u)&&p.verdict==="utility"){i.push(u);continue}switch(p.verdict){case"semantic":i.push(u);break;case"ambiguous":s.push(u);break;case"utility":a.push(u);break}}for(const u of i){const p=`.${CSS.escape(u)}`;try{o.push({selector:p,count:document.querySelectorAll(p).length,verdict:"semantic"})}catch{}}for(const u of s){const p=`.${CSS.escape(u)}`;try{o.push({selector:p,count:document.querySelectorAll(p).length,verdict:"ambiguous"})}catch{}}for(const u of a){const p=`.${CSS.escape(u)}`;try{o.push({selector:p,count:document.querySelectorAll(p).length,verdict:"utility"})}catch{}}const c={semantic:0,ambiguous:1,utility:2};return o.sort((u,p)=>{const d=c[u.verdict]-c[p.verdict];return d!==0?d:p.count-u.count}),o}function ll(e){const t=Object.keys(e).find(n=>n.startsWith("__reactFiber$"));return t?e[t]:null}function j2(e){var o,i,s,a;const t=ll(e);if(!t)return[];const n=[];let r=t;for(;r;){if(typeof r.type=="function"||typeof r.type=="object"){const c=((o=r.type)==null?void 0:o.displayName)||((i=r.type)==null?void 0:i.name)||((s=r.elementType)==null?void 0:s.displayName)||((a=r.elementType)==null?void 0:a.name);c&&!ac(c)&&n.push(c)}r=r.return}return n}function R2(e){var r,o,i,s;const t=ll(e);if(!t)return null;let n=t.return;for(;n;){if(typeof n.type=="function"||typeof n.type=="object"){const a=((r=n.type)==null?void 0:r.displayName)||((o=n.type)==null?void 0:o.name)||((i=n.elementType)==null?void 0:i.displayName)||((s=n.elementType)==null?void 0:s.name);if(a&&!ac(a))return bf(n)===e?a:null}n=n.return}return null}function u0(e){var r,o,i,s;const t=ll(e);if(!t)return null;let n=t.return;for(;n;){if(typeof n.type=="function"||typeof n.type=="object"){const a=((r=n.type)==null?void 0:r.displayName)||((o=n.type)==null?void 0:o.name)||((i=n.elementType)==null?void 0:i.displayName)||((s=n.elementType)==null?void 0:s.name);if(a&&!ac(a))return bf(n)===e?n:null}n=n.return}return null}function L2(e){const t=u0(e);if(!(t!=null&&t.memoizedProps))return null;const n=t.memoizedProps,r={};for(const o of Object.keys(n))if(!(o==="children"||o==="ref"||o==="key"||o==="params"||o==="searchParams"))try{r[o]=n[o]}catch{}return Object.keys(r).length>0?r:null}function E2(e){var i;const t=u0(e);if(!t)return null;const n=[];let r=t.memoizedState,o=0;for(;r;){const s=M2(r),a=!!(r.queue&&typeof r.queue.dispatch=="function");(s==="state"||s==="reducer"||s==="ref")&&n.push({index:o,type:s,value:s==="ref"?(i=r.memoizedState)==null?void 0:i.current:r.memoizedState,hasDispatch:a}),r=r.next,o++}return n.length>0?n:null}function bf(e){if(e.stateNode instanceof Element)return e.stateNode;let t=e.child;for(;t;){const n=bf(t);if(n)return n;t=t.sibling}return null}function ac(e){return!!(e.startsWith("_")||/^(Fragment|Suspense|StrictMode|Profiler|Lazy|Memo|Forward)/.test(e)||/(?:Provider|Consumer|Context|Boundary|Handler|Root|Wrapper)$/.test(e)||/(?:Router|Layout|Template|Loading|Segment|Fallback|Reload|Manager|Metadata|Viewport|Head|Script|Link)/.test(e)||/^(Home|App|Page|Main|Index|Default|View|Screen|Dashboard|Root)$/.test(e)||e.length<=2)}function N2(e){var r;const t=ll(e);if(!t)return null;let n=t;for(;n;){if(n._debugSource)return{fileName:n._debugSource.fileName,lineNumber:n._debugSource.lineNumber,columnNumber:n._debugSource.columnNumber};if((r=n._debugOwner)!=null&&r._debugSource)return{fileName:n._debugOwner._debugSource.fileName,lineNumber:n._debugOwner._debugSource.lineNumber,columnNumber:n._debugOwner._debugSource.columnNumber};n=n.return}return null}function M2(e){var r;const t=e.memoizedState,n=e.queue;return n&&typeof n.dispatch=="function"?((r=n.lastRenderedReducer)==null?void 0:r.name)==="basicStateReducer"?"state":"reducer":t!==null&&typeof t=="object"&&"current"in t&&Object.keys(t).length===1?"ref":t!==null&&typeof t=="object"&&"tag"in t&&"create"in t&&"deps"in t?"effect":Array.isArray(t)&&t.length===2&&Array.isArray(t[1])?"memo":"unknown"}function T2(e,t,n){var s,a,c;const r=ll(e);if(!r)return!1;let o=r;for(;o&&!((typeof o.type=="function"||typeof o.type=="object")&&!ac(((s=o.type)==null?void 0:s.displayName)||((a=o.type)==null?void 0:a.name)||""));)o=o.return;if(!o)return!1;let i=o.memoizedState;for(let u=0;u<t&&i;u++)i=i.next;return(c=i==null?void 0:i.queue)!=null&&c.dispatch?(i.queue.dispatch(n),!0):!1}var bh={"aria-expanded":{true:"Expanded",false:"Collapsed"},"aria-selected":{true:"Selected",false:"Deselected"},"aria-disabled":{true:"Disabled"},"aria-checked":{true:"Checked",mixed:"Partially Checked"},"aria-pressed":{true:"Pressed",mixed:"Partially Pressed"},"aria-current":{page:"Current Page",step:"Current Step",true:"Current"},"aria-hidden":{true:"Hidden"},"aria-busy":{true:"Loading"},"aria-invalid":{true:"Invalid",grammar:"Grammar Error",spelling:"Spelling Error"},"aria-required":{true:"Required"},"aria-modal":{true:"Modal"}};function A2(e){const t=e.match(/\[aria-([\w-]+)(?:="([^"]*)")?\]/);if(t){const[,a,c]=t,u=`aria-${a}`;return bh[u]&&bh[u][c||"true"]||zo(c||a)}const n=e.match(/\[data-[\w-]+=["']?([^"'\]]+)["']?\]/);if(n)return zo(n[1]);const r=e.match(/\[data-([\w-]+)\]/);if(r)return zo(r[1]);const o=e.match(/\.([\w-]+)--([\w-]+)/);if(o)return zo(o[2]);const i=e.match(/\.(is|has)-([\w-]+)/);if(i)return zo(i[2]);const s=e.match(/\.([\w-]+)/);return s?zo(s[1]):e.replace(/[.\[\]="']/g," ").trim()}function zo(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function $2(e){return!!(/\[data-v-[a-f0-9]+\]/.test(e)||/\[_ng(host|content)-[\w-]+\]/.test(e)||/\.(css|sc|emotion)-[a-zA-Z0-9]{4,}/.test(e)&&!/[A-Z]/.test(e))}function _2(e){var a;let t;try{t=l0(e,{recursive:!0})}catch{return null}if(!t||t.type!=="complex")return null;const n=(a=t.right)==null?void 0:a.content;if(!n)return null;const r=e.trim(),o=r.lastIndexOf(n);if(o<=0)return null;const s=r.slice(0,o).trim().replace(/[>+~\s]+$/,"").trim();return s?{ancestorPart:s,elementPart:n}:null}function P2(e,t){var r;const n=((r=e.match(/\.([a-zA-Z0-9_-]+)/g))==null?void 0:r.map(o=>o.slice(1)))||[];return n.length===0?e.replace(/[:\[].*/g,"").trim().toLowerCase()===t.tagName.toLowerCase():n.some(o=>t.classList.contains(o))}function Gc(e){const t=new Map;for(const r of document.styleSheets){let o;try{o=r.cssRules}catch{continue}d0(o,e,t)}const n=Array.from(t.values());return n.sort((r,o)=>o.count-r.count),n}function d0(e,t,n){for(let r=0;r<e.length;r++){const o=e[r];if(o instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&o instanceof CSSLayerBlockRule){d0(o.cssRules,t,n);continue}if(!(o instanceof CSSStyleRule))continue;const i=o.selectorText;if(!(i.includes(":hover")||i.includes(":focus")||i.includes(":active"))){try{if(!t.matches(i))continue}catch{continue}for(const s of i.split(",")){const a=s.trim(),c=a.replace(/\([^)]*\)/g,"");if(!/[\s>]/.test(c))continue;const u=_2(a);if(!u||!P2(u.elementPart,t)||$2(u.ancestorPart))continue;const p=a;if(n.has(p))continue;let d;try{d=document.querySelectorAll(p).length}catch{continue}d<=0||n.set(p,{fullSelector:p,ancestorPart:u.ancestorPart,label:A2(u.ancestorPart),count:d})}}}}var I2=1,_l=null,wh=-1;function ai(){const e=document.styleSheets.length;return _l&&wh===e||(_l=z2(),wh=e),_l}function z2(){const e=new Map,t=new Map,n=new Map,r=document.createElement("div");r.style.cssText="position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;",document.body.appendChild(r);let o=!1;try{for(const s of document.styleSheets){let a;try{a=s.cssRules}catch{continue}o||(o=f0(a)),p0(a,r,e,t,n,void 0)}}finally{r.remove()}for(const[s,a]of e)e.set(s,D2(a,s));const i=O2(o,n);return{groups:e,valueLookup:t,classLookup:n,framework:i}}function f0(e){for(let t=0;t<e.length;t++){const n=e[t];if(n instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&n instanceof CSSLayerBlockRule){if(f0(n.cssRules))return!0;continue}if(n instanceof CSSStyleRule){for(let r=0;r<n.style.length;r++)if(n.style[r].startsWith("--tw-"))return!0}}return!1}function O2(e,t){if(e)return"tailwind";const n=/^(p|m|w|h|gap|text|bg|border|rounded|shadow|opacity|font|leading|tracking|flex|grid|z|inset|top|right|bottom|left)([xytrbl])?-/;let r=0;for(const o of t.keys())n.test(o)&&r++;return r>10?"tailwind":t.size>0?"custom":"unknown"}function p0(e,t,n,r,o,i){for(let s=0;s<e.length;s++){const a=e[s];if(a instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&a instanceof CSSLayerBlockRule){const R=typeof CSSLayerBlockRule<"u"&&a instanceof CSSLayerBlockRule&&a.name||i;p0(a.cssRules,t,n,r,o,R);continue}if(!(a instanceof CSSStyleRule)||!c0(a.selectorText))continue;const c=a0(a.style);if(c===0||c>I2)continue;const u=a.selectorText.match(/\.([a-zA-Z0-9_-]+)/);if(!u)continue;const p=u[1],{score:d}=yf(p);if(d<.2||o.has(p))continue;const f={};for(let R=0;R<a.style.length;R++){const y=a.style[R];if(y.startsWith("--"))continue;let g=a.style.getPropertyValue(y).trim();g.includes("var(")&&(t.style.cssText="position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;",t.style.setProperty(y,g),g=getComputedStyle(t).getPropertyValue(y).trim(),t.style.removeProperty(y)),g&&(f[y]=g)}if(Object.keys(f).length===0)continue;let v=null,x=!1;for(const R of Object.keys(f)){const y=_o(R);if(y){if(!v)v=y;else if(y!==v){x=!0;break}}}if(!v||x)continue;const m={className:p,values:f,layerName:i};o.set(p,m),n.has(v)||n.set(v,[]),n.get(v).push(m);for(const[R,y]of Object.entries(f)){const g=`${R}:${y}`;r.has(g)||r.set(g,[]),r.get(g).push(m)}}}function D2(e,t){return t==="colors"?e.sort((n,r)=>{const o=Ch(Object.values(n.values)[0]),i=Ch(Object.values(r.values)[0]);return o-i}):e.sort((n,r)=>{const o=parseFloat(Object.values(n.values)[0]),i=parseFloat(Object.values(r.values)[0]);return isNaN(o)&&isNaN(i)?n.className.localeCompare(r.className):isNaN(o)?1:isNaN(i)?-1:o-i})}function Ch(e){if(!e)return 0;const t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!t)return 0;const n=parseInt(t[1])/255,r=parseInt(t[2])/255,o=parseInt(t[3])/255,i=Math.max(n,r,o),s=Math.min(n,r,o);if(i===s)return 0;const a=i-s;let c=0;return i===n?c=((r-o)/a+(r<o?6:0))/6:i===r?c=((o-n)/a+2)/6:c=((n-r)/a+4)/6,c*360}var F2=/^\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*$/;function h0(e){const t=F2.exec(e.trim());return t?[t[1],t[2],t[3]].every(n=>{const r=parseInt(n,10);return r>=0&&r<=255}):!1}function cd(e){return h0(e)?`rgb(${e.trim().replace(/\s+/g,", ")})`:e}var g0=["--tw-","--chakra-","--mantine-","--radix-","--nextui-"];function B2(e,t,n){const r=ai(),o=new Map,i=e.classList?Array.from(e.classList):[];if(i.length>0){const s=[];for(const a of i){const c=r.classLookup.get(a);c&&s.push(c)}for(const a of s)for(const[c,u]of Object.entries(a.values)){const p=U2(c),d=t[p]||t[c];if(!d)continue;const f=xs(u),v=xs(d);f===v&&o.set(c,{variable:a,property:c})}}if(i.length>0){const{manifestClassLookup:s}=cc();for(const a of i){const c=s.get(a);if(!c)continue;const u=xs(Object.values(c.values)[0]||"");for(const[p,d]of Object.entries(t)){const f=al(p);o.has(f)||xs(d)===u&&o.set(f,{variable:c,property:f})}}}return V2(e,o,n),o}var Pa=/var\((--[a-zA-Z0-9_-]+)/g,Ts={padding:["padding-top","padding-right","padding-bottom","padding-left"],margin:["margin-top","margin-right","margin-bottom","margin-left"],"border-radius":["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],gap:["row-gap","column-gap"],"border-width":["border-top-width","border-right-width","border-bottom-width","border-left-width"],"border-color":["border-top-color","border-right-color","border-bottom-color","border-left-color"],"border-style":["border-top-style","border-right-style","border-bottom-style","border-left-style"],inset:["top","right","bottom","left"]};function V2(e,t,n){const r=e,{tokens:o}=cc();if(o.length===0)return;const i=new Map;for(const p of o){const d=p.className.slice(4,-1);i.set(d,p)}const s=new Map,a=(p,d,f=0)=>{if(!d.includes("var("))return;const v=t.get(p),x=s.get(p)??-1;if(v&&!Vi(v.variable)&&f<x)return;Pa.lastIndex=0;let m,R;for(;(m=Pa.exec(d))!==null&&(R=i.get(m[1]),!R););if(!R)return;const y=Ts[p];if(y)for(const g of y){const C=t.get(g),S=s.get(g)??-1;(!C||Vi(C.variable)||f>=S)&&(t.set(g,{variable:R,property:g}),s.set(g,f))}else t.set(p,{variable:R,property:p}),s.set(p,f)},c=(p,d)=>{!d||d===""||d.includes("var(")||t.delete(p)};if(r.style&&r.style.length>0){for(let p=0;p<r.style.length;p++){const d=r.style.item(p),f=r.style.getPropertyValue(d);a(d,f),c(d,f)}for(const p of Object.keys(Ts)){const d=r.style.getPropertyValue(p);d&&a(p,d)}}const u=(n==null?void 0:n.match(/\.[a-zA-Z0-9_-]+/g))||null;try{for(const p of document.styleSheets)try{for(const d of p.cssRules){if(!(d instanceof CSSStyleRule)||!e.matches(d.selectorText))continue;const f=d.selectorText.match(/\.[a-zA-Z0-9_-]+/g)||[];if(u&&(f.length===0||!f.every(x=>u.includes(x))))continue;const v=f.length;for(let x=0;x<d.style.length;x++){const m=d.style.item(x),R=d.style.getPropertyValue(m);a(m,R,v),c(m,R)}for(const x of Object.keys(Ts)){const m=d.style.getPropertyValue(x);m&&a(x,m,v)}}}catch{}}catch{}}function H2(e,t){const n=ai(),r=al(e),o=_o(r);if(!o)return[];const i=n.groups.get(o);return i?i.filter(s=>!(!Object.keys(s.values).includes(r)||t&&s.className===t.className||Vi(s))):[]}function W2(e,t){const n=ai(),r=al(e),o=`${r}:${xs(t)}`,i=n.valueLookup.get(o);if(i&&i.length>0)return i[0];const s=_o(r);if(!s)return null;const a=n.groups.get(s);if(!a)return null;const c=parseFloat(t);if(isNaN(c))return null;let u=null,p=1/0;for(const d of a){const f=d.values[r];if(!f)continue;const v=parseFloat(f);if(isNaN(v))continue;const x=Math.abs(v-c);x<p&&(p=x,u=d)}return u&&p<=Math.max(2,c*.1)?u:null}function xs(e){return e.trim().toLowerCase().replace(/\s+/g," ")}function al(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function U2(e){return e.replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Vi(e){return e.layerName==="utilities"?!0:e.layerName?!1:Z2.test(e.className)}var Z2=/^-?(?:p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|w|h|min-w|max-w|min-h|max-h|gap|space-[xy]|text|bg|border|rounded|shadow|opacity|font|leading|tracking|z|inset|top|right|bottom|left|flex|grid|grid-cols|col-span|row-span|items|justify|self|place|order|overflow|ring|outline|divide|sr|not-sr|container|aspect|columns|break|decoration|underline|overline|no-underline|cursor|transition|duration|ease|delay|animate|scale|rotate|translate|skew|origin|fill|stroke|will-change|hidden|block|inline|inline-flex|inline-block|table|absolute|relative|fixed|sticky|float|clear|isolate|object|whitespace|align|indent|truncate|uppercase|lowercase|capitalize|normal-case|italic|not-italic|antialiased|subpixel|select|resize|appearance|accent|caret|snap|touch|scroll|hyphens|content|list)($|-)/,ys=null,ud=-1,Kr=null;function X2(e){Kr=e,ys=null,ud=-1}var m0={spacing:"spacing",sizes:"sizing",colors:"colors",radii:"border-radius",borderWidths:"border-width",shadows:"box-shadow"};function Y2(e,t){return/font-weight|font_weight|font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/.test(e)?"font-weight":/leading|line-height|line_height/.test(e)?"line-height":/tracking|letter-spacing|letter_spacing/.test(e)?"letter-spacing":/font-family|font_family|font-heading|font-body|font-mono|font-(sans|serif|mono|centra|gelica|guardian|yahoosans)/.test(e)?"font-family":(/font|text|size/.test(e),"font-size")}function wf(){const e=new Set;if(!(Kr!=null&&Kr.tokens))return e;for(const t of Object.keys(Kr.tokens)){const n=m0[t];n?e.add(n):t==="typography"&&(e.add("font-size"),e.add("font-weight"),e.add("line-height"),e.add("letter-spacing"),e.add("font-family"))}return e}function kh(e,t,n,r,o,i,s){if(!e||typeof e!="object"||!e.value&&!e.variable&&!e.class)return;const a=e.variable;if(!a)return;const c=a;if(s.has(c)||(s.add(c),g0.some(f=>a.startsWith(f))))return;let u=m0[t]??null;if(t==="typography"){const f=a||e.class||"";u=Y2(f)}if(!u)return;const d={className:a?`var(${a})`:e.class||"",values:a?{[a]:cd(String(e.value))}:{_value:cd(String(e.value))},manifestGroup:n,manifestClass:e.class||void 0};r.push(d),o.has(u)||o.set(u,[]),o.get(u).push(d),e.class&&i.set(e.class,d)}function G2(e,t,n){if(!(Kr!=null&&Kr.tokens))return;const r=new Set;for(const[o,i]of Object.entries(Kr.tokens))if(!(!i||typeof i!="object")){for(const[s,a]of Object.entries(i))if(a&&typeof a=="object"&&(a.value!==void 0||a.variable||a.class))kh(a,o,void 0,e,t,n,r);else if(a&&typeof a=="object"){const c=s;for(const[,u]of Object.entries(a))kh(u,o,c,e,t,n,r)}}}var K2=[{pattern:/^--(spacing|space|gap|pad|margin)/i,category:"spacing"},{pattern:/^--(size|width|height)/i,category:"sizing"},{pattern:/^--(color|bg|text-color|border-color|foreground|background|accent|muted|destructive|primary|secondary)/i,category:"colors"},{pattern:/^--(font-size|text-(?:xs|sm|base|lg|xl|\d))/i,category:"font-size"},{pattern:/^--(font-weight|font-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black))/i,category:"font-weight"},{pattern:/^--(leading|line-height)/i,category:"line-height"},{pattern:/^--(tracking|letter-spacing|letter)/i,category:"letter-spacing"},{pattern:/^--(font-family|font-(?:sans|serif|mono|display|body|heading))/i,category:"font-family"},{pattern:/^--(font|text)/i,category:"font-size"},{pattern:/^--(radius|border-radius|rounded)/i,category:"border-radius"},{pattern:/^--(border-width|border-w|stroke-width)/i,category:"border-width"},{pattern:/^--(shadow)/i,category:"box-shadow"},{pattern:/^--(opacity|alpha)/i,category:"opacity"}];function q2(e){const t=e.trim().toLowerCase();if(t.startsWith("#")||t.startsWith("rgb")||t.startsWith("hsl")||t.startsWith("oklch")||t.startsWith("oklab"))return"colors";const n=parseFloat(t);return!isNaN(n)&&/^\d{3}$/.test(t)?"font-weight":t.includes(",")||/^(sans-serif|serif|monospace|system-ui|ui-sans-serif|ui-serif|ui-monospace)/.test(t)?"font-family":!isNaN(n)&&(t.endsWith("px")||t.endsWith("rem")||t.endsWith("em"))?"spacing":h0(t)?"colors":null}function Q2(e){for(const{pattern:t,category:n}of K2)if(t.test(e.name))return n;return q2(e.value)}function J2(){const e=new Map;function t(n){for(let r=0;r<n.length;r++){const o=n[r];if(o instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&o instanceof CSSLayerBlockRule){t(o.cssRules);continue}if(o instanceof CSSStyleRule&&o.cssText.includes("var(")){for(let i=0;i<o.style.length;i++){const s=o.style.item(i);if(s.startsWith("--"))continue;const a=o.style.getPropertyValue(s);Sh(s,a,e)}for(const i of Object.keys(Ts)){const s=o.style.getPropertyValue(i);if(s&&s.includes("var("))for(const a of Ts[i])Sh(a,s,e)}}}}try{for(const n of document.styleSheets)try{t(n.cssRules)}catch{}}catch{}return e}function Sh(e,t,n){if(!t.includes("var("))return;Pa.lastIndex=0;let r;for(;(r=Pa.exec(t))!==null;){const o=r[1];n.has(o)||n.set(o,new Set),n.get(o).add(e)}}function eb(e,t){const n=t.get(e);if(!n||n.size===0)return null;const r=new Map;for(const s of n){const a=_o(s);a&&r.set(a,(r.get(a)??0)+1)}if(r.size===0)return null;let o=null,i=0;for(const[s,a]of r)a>i&&(o=s,i=a);return o}function cc(){const e=typeof document<"u"?document.styleSheets.length:0;if(ys&&ud===e)return ys;const t=[],n=new Map,r=new Map,o=wf(),i=vf(),s=J2(),a=new Set;for(const c of i.tokens){if(a.has(c.name)||(a.add(c.name),g0.some(d=>c.name.startsWith(d))))continue;const u=eb(c.name,s)??Q2(c);if(!u||o.has(u))continue;const p={className:`var(${c.name})`,values:{[c.name]:cd(c.value)}};t.push(p),n.has(u)||n.set(u,[]),n.get(u).push(p)}return G2(t,n,r),ys={tokens:t,byCategory:n,manifestClassLookup:r},ud=e,ys}function v0(e){const t=al(e),n=_o(t);if(!n)return[];const r=cc().byCategory.get(n)||[];return wf().has(n)?r:[...(ai().groups.get(n)||[]).filter(a=>Object.keys(a.values).includes(t)),...r]}function x0(e){var i;const t=al(e),n=_o(t);if(!n)return!1;const{byCategory:r}=cc();return(((i=r.get(n))==null?void 0:i.length)??0)>0?!0:wf().has(n)?!1:(ai().groups.get(n)||[]).some(s=>Object.keys(s.values).includes(t))}function ro(e){return e.startsWith("webkit")||e.startsWith("moz")||e.startsWith("ms")?"-"+e.replace(/([A-Z])/g,"-$1").toLowerCase():e.replace(/([A-Z])/g,"-$1").toLowerCase()}function dd(e,t){const n=e.replace(/\s+/g," ").trim();return n.length>t?n.slice(0,t)+"…":n}var y0={"padding-top":"padding","padding-right":"padding","padding-bottom":"padding","padding-left":"padding","margin-top":"margin","margin-right":"margin","margin-bottom":"margin","margin-left":"margin","border-top-width":"border-width","border-right-width":"border-width","border-bottom-width":"border-width","border-left-width":"border-width","border-top-color":"border-color","border-right-color":"border-color","border-bottom-color":"border-color","border-left-color":"border-color","border-top-style":"border-style","border-right-style":"border-style","border-bottom-style":"border-style","border-left-style":"border-style","border-top-left-radius":"border-radius","border-top-right-radius":"border-radius","border-bottom-left-radius":"border-radius","border-bottom-right-radius":"border-radius",gap:"gap","row-gap":"gap","column-gap":"gap"};function tb(e,t){var o,i;const n=new Map;for(const s of t)n.set(s,[]);const r=e.style;if(r)for(const s of t){const a=ro(s);let c=r.getPropertyValue(a),u=a;if(!c){const p=y0[a];p&&(c=r.getPropertyValue(p),u=p)}c&&n.get(s).push({property:u,value:c.trim(),selector:"[inline]",origin:"inline",important:r.getPropertyPriority(u)==="important"})}for(const s of document.styleSheets)try{const a=s.href||((i=(o=s.ownerNode)==null?void 0:o.textContent)==null?void 0:i.slice(0,50))||"embedded";b0(s.cssRules,e,t,n,nb(a))}catch{}for(const[,s]of n)s.sort((a,c)=>a.origin==="inline"&&c.origin!=="inline"?-1:c.origin==="inline"&&a.origin!=="inline"?1:a.important&&!c.important?-1:c.important&&!a.important?1:0);return n}function b0(e,t,n,r,o,i){for(const s of e)if(s instanceof CSSMediaRule)b0(s.cssRules,t,n,r,o,s.conditionText);else if(s instanceof CSSStyleRule){try{if(!t.matches(s.selectorText))continue}catch{continue}const a=s.style;for(const c of n){const u=ro(c);let p=a.getPropertyValue(u),d=u;if(!p){const f=y0[u];f&&(p=a.getPropertyValue(f),d=f)}if(p){const f={property:d,value:p.trim(),selector:s.selectorText,origin:"stylesheet",stylesheet:o,important:a.getPropertyPriority(d)==="important"};i&&(f.mediaQuery=i),r.get(c).push(f)}}}}function nb(e){if(e==="embedded")return"embedded <style>";try{return new URL(e).pathname.replace(/^\/_next\/static\/css\//,"").replace(/^\//,"")}catch{return e.slice(0,80)}}var rb=3,ob=2,ib=[":hover",":focus",":active",":focus-visible",":focus-within"];function w0(e){for(const t of ib)if(e.endsWith(t))return e.slice(0,-t.length);return e}function sb(e,t,n){const r=ro(e.property);ai();let o;const i=W2(r,e.to);if(i){const v=i.values[r]||"",x=v.trim().toLowerCase(),m=e.to.trim().toLowerCase(),R=x===m;o={type:Vi(i)?"utility-class":"semantic-token",name:i.className,value:v,exact:R,distance:R?void 0:`nearest: ${v} vs ${e.to}`}}const c=(new Set(["top","right","bottom","left","transform"]).has(r)?[]:Jm(e.to,t)).slice(0,ob);!o&&c.length>0&&(o={type:"css-variable",name:`var(${c[0]})`,value:e.to,exact:!0});const u=[],p=H2(r,i||void 0);for(const v of p){if(u.length>=rb)break;const x=v.values[r];x&&(o&&v.className===o.name||u.push({type:Vi(v)?"utility-class":"semantic-token",name:v.className,value:x,exact:x.trim().toLowerCase()===e.to.trim().toLowerCase()}))}let d,f;if(n)try{const x=tb(n,[e.property]).get(e.property)||[];if(x.length>0){const m=x[0];d={selector:m.selector,origin:m.origin,stylesheet:m.stylesheet,important:m.important,mediaQuery:m.mediaQuery},x.length>1&&(f=x.slice(1,4).map(R=>({selector:R.selector,value:R.value,important:R.important})))}}catch{}return{...e,recommended:o,alternatives:u,cssVariables:c,source:d,conflicts:f}}function C0(e,t,n){let r=null;try{const o=w0(n);r=document.querySelector(o)}catch{}return e.filter(o=>!o.property.startsWith("__")).map(o=>sb(o,t,r))}var lb=`:host {
  all: initial;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1, 'zero' 0, 'tnum' 0;
  font-size: 13px;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  line-height: 1.4;
  interpolate-size: allow-keywords;
  user-select: none;
  -webkit-user-select: none;

  /* ══════════════════════════════════════
     PRIMITIVES — raw palette, never change
     ══════════════════════════════════════ */

  /* ── Black (#1c1917) opacity ramp ── */
  --retune-black: #1c1917;
  --retune-black-5:  color-mix(in srgb, var(--retune-black) 5%, transparent);
  --retune-black-10: color-mix(in srgb, var(--retune-black) 10%, transparent);
  --retune-black-15: color-mix(in srgb, var(--retune-black) 15%, transparent);
  --retune-black-20: color-mix(in srgb, var(--retune-black) 20%, transparent);
  --retune-black-25: color-mix(in srgb, var(--retune-black) 25%, transparent);
  --retune-black-30: color-mix(in srgb, var(--retune-black) 30%, transparent);
  --retune-black-35: color-mix(in srgb, var(--retune-black) 35%, transparent);
  --retune-black-40: color-mix(in srgb, var(--retune-black) 40%, transparent);
  --retune-black-45: color-mix(in srgb, var(--retune-black) 45%, transparent);
  --retune-black-50: color-mix(in srgb, var(--retune-black) 50%, transparent);
  --retune-black-55: color-mix(in srgb, var(--retune-black) 55%, transparent);
  --retune-black-60: color-mix(in srgb, var(--retune-black) 60%, transparent);
  --retune-black-65: color-mix(in srgb, var(--retune-black) 65%, transparent);
  --retune-black-70: color-mix(in srgb, var(--retune-black) 70%, transparent);
  --retune-black-75: color-mix(in srgb, var(--retune-black) 75%, transparent);
  --retune-black-80: color-mix(in srgb, var(--retune-black) 80%, transparent);
  --retune-black-85: color-mix(in srgb, var(--retune-black) 85%, transparent);
  --retune-black-90: color-mix(in srgb, var(--retune-black) 90%, transparent);
  --retune-black-95: color-mix(in srgb, var(--retune-black) 95%, transparent);

  /* ── White (#ffffff) opacity ramp ── */
  --retune-white: #ffffff;
  --retune-white-5:  color-mix(in srgb, var(--retune-white) 5%, transparent);
  --retune-white-10: color-mix(in srgb, var(--retune-white) 10%, transparent);
  --retune-white-15: color-mix(in srgb, var(--retune-white) 15%, transparent);
  --retune-white-20: color-mix(in srgb, var(--retune-white) 20%, transparent);
  --retune-white-25: color-mix(in srgb, var(--retune-white) 25%, transparent);
  --retune-white-30: color-mix(in srgb, var(--retune-white) 30%, transparent);
  --retune-white-35: color-mix(in srgb, var(--retune-white) 35%, transparent);
  --retune-white-40: color-mix(in srgb, var(--retune-white) 40%, transparent);
  --retune-white-45: color-mix(in srgb, var(--retune-white) 45%, transparent);
  --retune-white-50: color-mix(in srgb, var(--retune-white) 50%, transparent);
  --retune-white-55: color-mix(in srgb, var(--retune-white) 55%, transparent);
  --retune-white-60: color-mix(in srgb, var(--retune-white) 60%, transparent);
  --retune-white-65: color-mix(in srgb, var(--retune-white) 65%, transparent);
  --retune-white-70: color-mix(in srgb, var(--retune-white) 70%, transparent);
  --retune-white-75: color-mix(in srgb, var(--retune-white) 75%, transparent);
  --retune-white-80: color-mix(in srgb, var(--retune-white) 80%, transparent);
  --retune-white-85: color-mix(in srgb, var(--retune-white) 85%, transparent);
  --retune-white-90: color-mix(in srgb, var(--retune-white) 90%, transparent);
  --retune-white-95: color-mix(in srgb, var(--retune-white) 95%, transparent);

  /* ── Blue (Figma blue ramp) ── */
  --retune-blue-100: #F2F9FF;
  --retune-blue-200: #E5F4FF;
  --retune-blue-300: #BDE3FF;
  --retune-blue-400: #80CAFF;
  --retune-blue-500: #0D99FF;
  --retune-blue-600: #007BE5;
  --retune-blue-700: #0768CF;
  --retune-blue-800: #034AC1;
  --retune-blue-900: #093077;
  --retune-blue-1000: #0D193F;

  /* ── Red (Tailwind red ramp) ── */
  --retune-red-100: #FFF5F5;
  --retune-red-200: #FFE2E0;
  --retune-red-300: #FFC7C2;
  --retune-red-400: #FFAFA3;
  --retune-red-500: #F24822;
  --retune-red-600: #DC3412;
  --retune-red-700: #BD2915;
  --retune-red-800: #9F1F18;
  --retune-red-900: #771208;
  --retune-red-1000: #660E0B;

  /* ══════════════════════════════════════
     SEMANTIC — swap these for dark mode
     ══════════════════════════════════════ */

  /* ── Always (mode-independent) ── */
  --retune-always-white: #ffffff;
  --retune-always-black: #1c1917;

  /* ── Text ── */
  --retune-text: var(--retune-black-90);
  --retune-text-secondary: var(--retune-black-70);
  --retune-text-tertiary: var(--retune-black-50);
  --retune-text-disabled: var(--retune-black-25);

  /* ── Surfaces ── */
  --retune-surface: var(--retune-white);
  --retune-surface-hover: var(--retune-black-5);
  --retune-surface-active: var(--retune-black-5);
  --retune-input-bg: var(--retune-black-5);
  --retune-input-bg-hover: var(--retune-black-10);

  /* ── Borders & shadows ── */
  --retune-border: var(--retune-black-10);
  --retune-border-hover: var(--retune-black-15);
  --retune-border-subtle: var(--retune-black-5);
  --retune-shadow: var(--retune-black-10);

  /* ── Blue ── */
  --retune-blue: var(--retune-blue-500);
  --retune-blue-text: var(--retune-blue-700);
  --retune-blue-bg: var(--retune-blue-200);
  --retune-blue-bg-hover: var(--retune-blue-100);

  /* ── Red ── */
  --retune-red: var(--retune-red-500);
}

/* ══════════════════════════════════════
   DARK MODE — swap semantic tokens only
   ══════════════════════════════════════ */
:host(.dark) {
  /* ── Text ── */
  --retune-text: var(--retune-white-90);
  --retune-text-secondary: var(--retune-white-70);
  --retune-text-tertiary: var(--retune-white-50);
  --retune-text-disabled: var(--retune-white-25);

  /* ── Surfaces ── */
  --retune-surface: color-mix(in srgb, var(--retune-black) 95%, var(--retune-white));
  --retune-surface-hover: var(--retune-white-5);
  --retune-surface-active: var(--retune-white-5);
  --retune-input-bg: var(--retune-white-5);
  --retune-input-bg-hover: var(--retune-white-10);

  /* ── Borders & shadows ── */
  --retune-border: var(--retune-white-10);
  --retune-border-hover: var(--retune-white-15);
  --retune-border-subtle: var(--retune-white-5);
  --retune-shadow: var(--retune-white-5);

  /* ── Blue ── */
  --retune-blue-text: var(--retune-blue-500);
  --retune-blue-bg: color-mix(in srgb, var(--retune-blue-700) 50%, transparent);
  --retune-blue-bg-hover: color-mix(in srgb, var(--retune-blue-700) 75%, transparent);

  /* ── Red ── */
}

* { box-sizing: border-box; margin: 0; padding: 0; }
input, textarea, [contenteditable] {
  user-select: text;
  -webkit-user-select: text;
}

/* ── Toolbar ── */
@keyframes retune-icon-in {
  from { filter: blur(2px); transform: scale(0.9); }
  to   { filter: blur(0);   transform: scale(1); }
}

.retune-toolbar {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  height: 44px;
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;
  overflow: hidden;
  cursor: default;
  transition: padding 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              gap 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              background 0.15s ease;
}

.retune-toolbar.collapsed {
  padding: 0;
  gap: 0;
  width: 44px;
  cursor: pointer;
  overflow: visible;
  transition: transform 100ms ease, background 0.15s ease;
}
.retune-toolbar.collapsed:active {
  transform: scale(0.97);
}

.retune-toolbar.collapsed:hover {
  background: var(--retune-surface);
}

.retune-toolbar.top.right { top: 16px; right: 16px; }
.retune-toolbar.top.left { top: 16px; left: 16px; }
.retune-toolbar.bottom.right { bottom: 16px; right: 16px; }
.retune-toolbar.bottom.left { bottom: 16px; left: 16px; }

/* Collapse button (cursor-click) */
.retune-toolbar-collapse-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--retune-text);
  padding: 12px;
  width: 44px;
  height: 44px;
  background: transparent;
  flex-shrink: 0;
  transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              height 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              padding 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              filter 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.retune-changes-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #fff 1px, #0D99FF 1px);
  pointer-events: none;
}

/* When expanded: collapse button shrinks away */
.retune-toolbar.expanded .retune-toolbar-collapse-btn {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  filter: blur(8px);
  transform: scale(0.8);
  overflow: hidden;
  pointer-events: none;
}

/* Expanded inner container */
.retune-toolbar-expanded {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 300px;
  transition: max-width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.15s cubic-bezier(0.23, 1, 0.32, 1),
              gap 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

/* When collapsed: expanded items hidden */
.retune-toolbar.collapsed .retune-toolbar-expanded {
  max-width: 0;
  opacity: 0;
  pointer-events: none;
  gap: 0;
}

/* Expanded action buttons */
.retune-toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  color: var(--retune-text);
  padding: 6px;
  flex-shrink: 0;
  position: relative;
  transition: background 0.12s ease;
}

.retune-toolbar-btn:hover { background: var(--retune-surface-hover); }

.retune-toolbar-btn.disabled,
.retune-toolbar-btn:disabled {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}

/* Animate expanded items in */
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(1) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(2) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 20ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(3) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 40ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(4) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 60ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(5) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 80ms backwards;
}

/* Animate collapse button in */
.retune-toolbar.collapsed .retune-toolbar-collapse-btn {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) backwards;
}

.retune-icon-flip {
  display: flex;
  transform: scaleX(-1);
}

.retune-icon-swap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.retune-icon-swap-icon {
  position: absolute;
  display: flex;
  transition: opacity 150ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 150ms cubic-bezier(0.23, 1, 0.32, 1),
              filter 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

.retune-icon-swap-icon.in {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  transition-delay: 75ms;
}

.retune-icon-swap-icon.out {
  opacity: 0;
  transform: scale(0.5);
  filter: blur(2px);
  pointer-events: none;
  transition-delay: 0ms;
}

.retune-edit-count {
  font-size: 13px;
  font-weight: 500;
  background: var(--retune-blue);
  color: var(--retune-always-white);
  min-width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  flex-shrink: 0;
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) backwards;
}

/* ── Panel ── */
.retune-panel {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border: none;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  width: 280px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overscroll-behavior: none;
}

.retune-panel-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: clip;
  scrollbar-width: none;
}

.retune-panel-body::-webkit-scrollbar { display: none; }

.retune-panel-anim {
  display: contents;
}

.retune-panel-anim.entering .retune-panel {
  animation: retune-panel-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.retune-panel-anim.exiting .retune-panel {
  animation: retune-panel-out 0.15s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@keyframes retune-panel-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes retune-panel-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(12px);
  }
}

.retune-panel.right { right: 16px; bottom: 68px; }
.retune-panel.left { left: 16px; bottom: 68px; }
.retune-panel { height: calc(100vh - 84px); }

/* Hide scrollbar (now on .retune-panel-body) */

.retune-el-tag {
  font-size: 11px;
  line-height: 16px;
  font-weight: 550;
  color: var(--retune-text);
}

.retune-el-component {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: #3b82f6;
  margin-top: 1px;
}

.retune-el-text {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  margin-top: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Selector field (Webflow-style class tags) ── */
.retune-row-group:has(.retune-selector-field) {
  padding-left: 0;
  padding-right: 0;
}
.retune-row-group:has(.retune-selector-field) > .retune-group-label-inline {
  padding-left: 16px;
}

.retune-selector-field {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  padding: 0 16px;
  isolation: isolate; /* stacking context so bridge z-index:-1 stays within */
}
/* Remove gap around bridge connectors — the bridge IS the connection */
/* Bridge connector between active/included pills */
.retune-selector-bridge {
  width: 8px;
  height: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: -1;
  margin: 0 -8px;
}
.retune-selector-bridge.filled {
  background: var(--retune-blue-bg);
}
.retune-selector-bridge::before,
.retune-selector-bridge::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--retune-surface);
}
.retune-selector-bridge::before {
  top: 0;
  border-radius: 0 0 4px 4px;
}
.retune-selector-bridge::after {
  bottom: 0;
  border-radius: 4px 4px 0 0;
}

.retune-selector-field::-webkit-scrollbar { display: none; }

.retune-selector-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: var(--retune-surface-hover);
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  line-height: 16px;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.retune-selector-tag:hover {
  background: var(--retune-border);
}

.retune-selector-tag.included,
.retune-selector-tag.active {
  background: var(--retune-blue-bg);
  color: var(--retune-blue-text);
}
.retune-selector-tag.included:hover,
.retune-selector-tag.active:hover {
  background: var(--retune-blue-bg-hover);
}

.retune-selector-tag-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 16px;
  background: var(--retune-surface);
  color: var(--retune-text);
  padding: 0 6px;
  border-radius: 4px;
}

.retune-selector-tag.included .retune-selector-tag-count,
.retune-selector-tag.active .retune-selector-tag-count {
  color: var(--retune-blue-text);
}

:host(.dark) .retune-panel,
:host(.dark) .retune-settings-panel,
:host(.dark) .retune-toolbar,
:host(.dark) .retune-floating-dialog,
:host(.dark) .retune-comment-popover {
  border: 1px solid var(--retune-black);
  box-shadow:
    inset 0 0 0 1px rgb(255 255 255 / 10%),
    0 2px 12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
}

:host(.dark) .retune-floating-dialog {
  box-shadow:
    inset 0 0 0 1px rgb(255 255 255 / 10%),
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08);
}

:host(.dark) .retune-selector-tag.included,
:host(.dark) .retune-selector-tag.active {
  color: var(--retune-white);
}

:host(.dark) .retune-selector-tag.included .retune-selector-tag-count,
:host(.dark) .retune-selector-tag.active .retune-selector-tag-count {
  background: var(--retune-white);
  color: var(--retune-blue-700);
}

.retune-selector-tag-name {
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}


.retune-selector-divider {
  width: 1px;
  height: 20px;
  background: var(--retune-border);
  flex-shrink: 0;
  align-self: center;
}

/* ── Tab bar ── */

.retune-tab-bar {
  display: flex;
  position: relative;
  padding: 8px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--retune-border);
}

.retune-tab-pill {
  position: absolute;
  top: 8px;
  left: 0;
  height: calc(100% - 16px);
  border-radius: 8px;
  background: var(--retune-input-bg);
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), width 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
}

.retune-tab {
  width: auto;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.15s;
  text-align: center;
}

.retune-tab:hover {
  color: var(--retune-text-secondary);
}

.retune-tab.active {
  color: var(--retune-text);
}

/* ── Element tree ── */

.retune-tree {
  padding: 4px 0;
  overflow-x: auto;
}

.retune-tree-inner {
  min-width: 100%;
  width: fit-content;
  position: relative;
}

.retune-tree-node {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding-right: 12px;
  cursor: pointer;
  transition: background 0.1s;
  user-select: none;
  white-space: nowrap;
}

.retune-tree-node:hover {
  background: var(--retune-surface-hover);
}

.retune-tree-node.selected {
  background: var(--retune-blue-bg);
}
.retune-tree-node.descendant-selected {
  background: color-mix(in srgb, var(--retune-blue-500) 6%, transparent);
}

.retune-tree-arrow {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--retune-text-tertiary);
  transform: rotate(-90deg);
  transition: transform 0.12s ease;
}

.retune-tree-arrow.expanded {
  transform: rotate(0deg);
}

.retune-tree-arrow.empty {
  visibility: hidden;
}

.retune-tree-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--retune-text-tertiary);
  opacity: 0.5;
}
.retune-tree-node.selected .retune-tree-icon,
.retune-tree-node.descendant-selected .retune-tree-icon,
.retune-tree-node:hover .retune-tree-icon {
  opacity: 1;
}
.retune-tree-icon--component {
  color: var(--retune-blue-text);
}
:host(.dark) .retune-tree-node.selected .retune-tree-icon--component {
  color: var(--retune-text);
}

.retune-tree-name {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.005em;
  color: var(--retune-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}
.retune-tree-name--component {
  color: var(--retune-blue-text);
  font-weight: 500;
}
:host(.dark) .retune-tree-node.selected .retune-tree-name--component {
  color: var(--retune-text);
}

.retune-tree-moved {
  font-size: 9px;
  font-weight: 500;
  color: var(--retune-blue-500);
  background: var(--retune-blue-bg);
  padding: 1px 4px;
  border-radius: 3px;
  flex-shrink: 0;
}

/* ── Tree drag states ── */

.retune-tree-node.dragging {
  opacity: 0.3;
}

.retune-tree-node.reparent-target {
  background: color-mix(in srgb, var(--retune-blue-500) 15%, transparent);
  outline: 1.5px dashed var(--retune-blue-500);
  outline-offset: -1.5px;
  border-radius: 4px;
}

.retune-tree-drop-indicator {
  position: absolute;
  right: 0;
  height: 2px;
  background: var(--retune-blue-500);
  pointer-events: none;
  z-index: 10;
  display: none;
}

.retune-tree-drop-indicator::before {
  content: "";
  position: absolute;
  left: -3px;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--retune-blue-500);
}

.retune-tree-ghost {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  opacity: 0.85;
  background: var(--retune-surface);
  border: 1.5px solid var(--retune-blue-500);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--retune-text);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* ── Section structure (matches portfolio editor) ── */
.retune-section {
  border-bottom: 1px solid var(--retune-border);
  user-select: none;
}

.retune-section:last-child { border-bottom: none; }
/* Remove border from last section when followed by non-section elements (e.g., scroll anchor) */
.retune-section:has(+ :not(.retune-section)) { border-bottom: none; }

.retune-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 16px;
  height: 44px;
}

.retune-section-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--retune-text);
}

.retune-section-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
}
.retune-section-action:hover {
  background: var(--retune-surface-hover);
  color: var(--retune-text);
}

/* Variable action in section header: styled like section-action buttons, visible on section hover */
.retune-section-header .retune-variable-action {
  position: static;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: transparent;
  color: transparent;
  transition: color 0.15s ease;
}
.retune-section:hover .retune-section-header .retune-variable-action {
  color: var(--retune-text-secondary);
}
.retune-section-header .retune-variable-action:hover {
  color: var(--retune-text) !important;
  background: var(--retune-surface-hover);
}

.retune-section-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
}

.retune-section-row {
  padding: 0 48px 0 16px;
}
.retune-section-row:has(.retune-split-btn),
.retune-section-row:has(.retune-row-action) {
  padding-right: 8px;
}

/* Row group: wraps multiple rows with equal vertical + horizontal gaps */
.retune-row-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 48px 0 16px;
}
.retune-row-group:has(.retune-split-btn),
.retune-row-group:has(.retune-row-action) {
  padding-right: 8px;
}

.retune-row-group > .retune-row + .retune-row { margin-top: 4px; }

/* ── Alignment buttons (position section) ── */
.retune-align-row {
  display: flex;
  gap: 8px;
}

.retune-btn-group {
  display: flex;
  flex: 1;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  overflow: hidden;
}

.retune-btn-group > :not(:first-child) > .retune-align-btn {
  box-shadow: inset 1px 0 0 var(--retune-surface);
}

.retune-align-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease;
}

.retune-align-btn:hover {
  background: var(--retune-border);
  color: var(--retune-text);
}

.retune-align-btn:active {
  color: var(--retune-text);
}

.retune-align-btn.active {
  background: var(--retune-border);
}

/* ── Alignment grid (layout section) ── */
.retune-alignment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: var(--retune-surface-hover);
  border-radius: 8px;
  width: 100%;
  height: 72px;
  outline: none;
}

.retune-alignment-grid:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-alignment-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
}

.retune-alignment-cell:hover {
  color: var(--retune-text);
}

/* ── Grid picker ── */
.retune-grid-picker-wrap {
  position: relative;
}

.retune-grid-picker-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 72px;
  padding: 4px;
  background: var(--retune-surface-hover);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
}

.retune-grid-picker-preview:hover {
  background: #eeeceb;
}

.retune-grid-picker-mini {
  display: grid;
  gap: 2px;
  flex: 1;
  height: 100%;
  position: relative;
}

.retune-grid-picker-mini-cell {
  background: var(--retune-surface);
  border-radius: 2px;
  min-width: 0;
  min-height: 0;
}

.retune-grid-picker-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: var(--retune-text-secondary);
  white-space: nowrap;
  pointer-events: none;
}

.retune-grid-picker-dialog {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 8px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.retune-grid-picker-dialog-header {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: var(--retune-text-secondary);
  text-align: center;
}

.retune-grid-picker-grid {
  display: grid;
  grid-template-columns: repeat(10, 18px);
  grid-template-rows: repeat(10, 18px);
  gap: 2px;
  cursor: pointer;
}

.retune-grid-picker-cell {
  border-radius: 2px;
  background: var(--retune-border);
}

.retune-grid-picker-cell.selected {
  background: #3b82f6;
}

.retune-grid-picker-cell.preview {
  background: #93c5fd;
}

/* ── Constraints visual (position section) ── */
.retune-constraints {
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
}

.retune-constraints-side {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}

.retune-constraints-center {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: stretch;
}

.retune-pin-box {
  position: relative;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  width: 100%;
  height: 64px;
}

.retune-pin-line {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.retune-pin-line.top {
  left: 50%;
  transform: translateX(-50%);
  top: 2px;
}

.retune-pin-line.right {
  left: calc(75% - 2px);
  top: 24px;
}

.retune-pin-line.bottom {
  left: 50%;
  transform: translateX(-50%);
  bottom: 2px;
}

.retune-pin-line.left {
  left: calc(25% - 14px);
  top: 24px;
}

.retune-pin-center-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.retune-pin-center-btn:hover {
  border-color: var(--retune-border-hover);
}

.retune-pin-center-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #3b82f6;
}

/* Row layout: flex with gap for side-by-side fields */
.retune-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

/* Direct children in a row get flex: 1 */
.retune-row > .retune-prop,
.retune-row > .retune-combo,
.retune-row > .retune-select,
.retune-row > .retune-text-input,
.retune-row > .retune-font-input,
.retune-row > .retune-slider { flex: 1; min-width: 0; }

/* Field: flex-1 column with label above input */
.retune-field {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.retune-field-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  line-height: 16px;
}

/* Group label: single label above a set of related inputs */
.retune-group-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  line-height: 16px;
  padding: 0 16px;
}

/* Group label inside a RowGroup (no extra horizontal padding) */
.retune-group-label-inline {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Row action button (expand/collapse, dialog trigger, toggle) */
.retune-row-action,
.retune-split-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-row-action:hover,
.retune-split-btn:hover {
  background: var(--retune-surface-active);
  color: var(--retune-text);
}
.retune-row-action.active,
.retune-split-btn.active {
  color: var(--retune-text);
  background: var(--retune-input-bg-hover);
}

/* Dropdown menu (size + button) */
.retune-dropdown-anchor {
  position: relative;
}
.retune-dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  min-width: 140px;
  background: var(--retune-surface);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
  padding: 4px;
  z-index: 100;
  animation: retune-dropdown-in 0.15s cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes retune-dropdown-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.retune-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--retune-text);
  font-size: 13px;
  cursor: pointer;
  padding: 0 10px;
  transition: background 0.1s ease;
}
.retune-dropdown-item:hover {
  background: var(--retune-input-bg);
}
.retune-dropdown-item .retune-dropdown-check {
  margin-left: auto;
  color: var(--retune-text-tertiary);
}
.retune-dropdown-heading {
  padding: 6px 10px 2px;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  letter-spacing: -0.005em;
}

/* Property cell — matches portfolio NumberInput */
.retune-prop {
  display: flex;
  align-items: center;
  gap: 0;
  height: 32px;
  padding: 0;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  min-width: 0;
  overflow: visible;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-prop:hover:not(.retune-prop-variable-applied) { background: var(--retune-border); }
.retune-prop:focus-within:not(.retune-prop-variable-applied) {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-prop:focus-within:not(.retune-prop-variable-applied) {
  background: var(--retune-surface-hover);
}

.retune-prop-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  flex-shrink: 0;
  user-select: none;
  cursor: ew-resize;
  z-index: 1;
}

.retune-prop-input {
  flex: 1;
  min-width: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 0 0 32px;
}

.retune-prop-input:first-child { padding-left: 12px; }
.retune-prop-input::selection { background: var(--retune-blue-bg); color: var(--retune-text); }
.retune-prop-input:focus { outline: none; }

/* ── Color Input (split: [swatch|hex] [opacity%]) ── */
.retune-color-row {
  display: flex;
  gap: 1px;
  flex: 1;
  min-width: 0;
  position: relative;
}

.retune-color-hex-section {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 32px;
  position: relative;
  background: var(--retune-surface-hover);
  border-radius: 8px 0 0 8px;
}

.retune-color-swatch {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
}

.retune-color-swatch-inner {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.retune-color-hex-input {
  flex: 1;
  min-width: 0;
  height: 32px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  outline: none;
  padding: 0;
}

.retune-color-hex-input:focus { outline: none; }
.retune-color-hex-section:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-color-hex-input::selection { background: var(--retune-blue-bg); color: var(--retune-text); }

.retune-color-opacity-section {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 8px 0 4px;
  height: 32px;
  background: var(--retune-surface-hover);
  border-radius: 0 8px 8px 0;
  flex-shrink: 0;
}

.retune-color-opacity-input {
  width: 28px;
  height: 32px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  text-align: center;
  outline: none;
  padding: 0;
  -moz-appearance: textfield;
}

.retune-color-opacity-input:focus { outline: none; }
.retune-color-opacity-section:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-color-opacity-input::-webkit-outer-spin-button,
.retune-color-opacity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.retune-color-opacity-unit {
  font-size: 10px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
}

/* ── Floating Dialog (shared shell for color picker, token dialog, etc.) ── */
.retune-floating-dialog {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--retune-surface);
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2147483647;
  pointer-events: auto;
  animation: retune-dialog-enter 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes retune-dialog-enter {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

.retune-floating-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0 12px;
}

.retune-floating-dialog-title-area {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.retune-floating-dialog-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text);
}

/* Tab styles — single tab has no selected style */
.retune-floating-dialog-tab {
  height: 24px;
  padding: 0 8px;
  border-radius: 5px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.055px;
  white-space: nowrap;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
  font-weight: 450;
  color: var(--retune-text-secondary);
  font-family: inherit;
}
.retune-floating-dialog-tab:hover {
  background: var(--retune-input-bg);
}
.retune-floating-dialog-tab-active {
  background: var(--retune-surface-hover);
  font-weight: 550;
  color: var(--retune-text);
}
.retune-floating-dialog-tab-active:hover {
  background: var(--retune-surface-hover);
}
.retune-floating-dialog-tab-single {
  font-weight: 550;
  color: var(--retune-text);
  cursor: inherit;
}
.retune-floating-dialog-tab-single:hover {
  background: none;
}

.retune-floating-dialog-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  border-radius: 8px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-floating-dialog-close:hover {
  color: var(--retune-text);
  background: var(--retune-surface-active);
}

.retune-floating-dialog-search {
  padding: 8px;
}
.retune-floating-dialog-search-input {
  width: 100%;
  height: 32px;
  background: var(--retune-surface-hover);
  border: none;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 12px;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  box-sizing: border-box;
}
.retune-floating-dialog-search-input::placeholder {
  color: var(--retune-text-tertiary);
}
.retune-floating-dialog-search-input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}

.retune-floating-dialog-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

/* ── Color Picker Content ── */

.retune-cp-sv-wrap {
  padding: 12px 12px 0 12px;
}

.retune-cp-sv {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  cursor: crosshair;
  touch-action: none;
  border-radius: 8px;
}

.retune-cp-sv-white,
.retune-cp-sv-black {
  border-radius: inherit;
}

.retune-cp-sv-white {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.retune-cp-sv-black {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, #000);
}

.retune-cp-handle {
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.retune-cp-handle-inner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow:
    0 0 0.5px rgba(0, 0, 0, 0.2),
    0 2px 6px rgba(0, 0, 0, 0.12);
}

.retune-cp-sliders {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
}

.retune-cp-eyedropper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-cp-eyedropper:hover {
  color: var(--retune-text);
  background: var(--retune-surface-active);
}

.retune-cp-preview-checker {
  position: absolute;
  inset: 0;
  background-image: repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%);
  background-size: 8px 8px;
}

.retune-cp-preview {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}

.retune-cp-slider-tracks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.retune-cp-hue {
  position: relative;
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
  cursor: pointer;
  touch-action: none;
  overflow: visible;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.retune-cp-alpha {
  position: relative;
  height: 14px;
  border-radius: 7px;
  cursor: pointer;
  touch-action: none;
  overflow: visible;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.retune-cp-alpha-checker {
  position: absolute;
  inset: 0;
  background-image: repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%);
  background-size: 8px 8px;
  border-radius: 7px;
}

.retune-cp-alpha-gradient {
  position: absolute;
  inset: 0;
  border-radius: 7px;
}

.retune-cp-inputs {
  display: flex;
  gap: 4px;
  padding: 0 12px 10px;
}

.retune-cp-input-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.retune-cp-input-group:first-child {
  flex: 1.8;
}

.retune-cp-label {
  font-size: 9px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  text-transform: uppercase;
  letter-spacing: -0.005em;
  padding-left: 2px;
}

.retune-cp-input {
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  padding: 0 6px;
  outline: none;
  width: 100%;
  min-width: 0;
}

.retune-cp-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-cp-input::selection { background: var(--retune-blue-bg); color: var(--retune-text); }

/* ── Gradient Editor ── */
.retune-gradient-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.retune-gradient-editor > * {
  padding: 0px 8px 0px 16px;
}

.retune-gradient-bar-wrap {
  position: relative;
  height: 32px;
  cursor: crosshair;
  margin: 0px 48px 0px 16px;
  padding: 0 !important;
}

.retune-gradient-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--retune-border);
}

.retune-gradient-bar-checker {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%);
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
}

.retune-gradient-bar-fill {
  position: absolute;
  inset: 0;
}

.retune-gradient-stop-handle {
  position: absolute;
  top: 0px;
  transform: translateX(-50%);
  cursor: grab;
  touch-action: none;
}

.retune-gradient-stop-handle:active { cursor: grabbing; }

.retune-gradient-stop-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 0 0.5px rgba(0,0,0,0.18)) drop-shadow(0 2px 6px rgba(0,0,0,0.12));
}

.retune-gradient-stop-chit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 32px;
  border-radius: 5px;
}

.retune-gradient-stop-chit-color {
  width: 12px;
  height: 24px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
}

.retune-gradient-stop-caret {
  display: none;
}

.retune-gradient-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.retune-gradient-angle-input {
  width: 64px;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  padding: 0 8px;
  text-align: left;
}

.retune-gradient-angle-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-gradient-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.retune-gradient-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 8px;
  color: var(--retune-text-secondary);
  cursor: pointer;
  transition: background-color 0.08s ease, color 0.08s ease;
}

.retune-gradient-action-btn:hover { background: var(--retune-surface-hover); color: var(--retune-text); }
.retune-gradient-action-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.retune-gradient-action-btn:disabled:hover { background: transparent; color: var(--retune-text-secondary); }

.retune-gradient-stops-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.retune-gradient-stops-label {
  font-size: 11px;
  font-weight: 550;
  letter-spacing: -0.005em;
  color: var(--retune-text);
}

.retune-gradient-stops-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.retune-gradient-stop-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
}

.retune-gradient-stop-pos {
  position: relative;
  display: flex;
  align-items: center;
  width: 48px;
  flex-shrink: 0;
}

.retune-gradient-stop-pos-input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  padding: 0 18px 0 6px;
  text-align: left;
}

.retune-gradient-stop-pos-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-gradient-stop-pos-unit {
  position: absolute;
  right: 6px;
  font-size: 11px;
  color: var(--retune-text-tertiary);
  pointer-events: none;
}

.retune-gradient-stop-color {
  flex: 1;
  min-width: 0;
}

/* ── SelectInput ── */
.retune-select {
  position: relative;
  min-width: 0;
  overflow: visible;
}

.retune-select-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  transition: background-color 0.15s ease;
  position: relative;
}

.retune-select-button:hover { background: var(--retune-border); }
.retune-select-button:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-select-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
}

.retune-select-value {
  flex: 1;
  min-width: 0;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  text-align: left;
  padding-left: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-select-chevron {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--retune-text-secondary);
  flex-shrink: 0;
}

.retune-select-dropdown-anchor {
  position: fixed;
  z-index: 2147483647;
  width: max-content;
}

/* ── Slider ── */
.retune-slider {
  position: relative;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  cursor: ew-resize;
  user-select: none;
  overflow: hidden;
  transition: background-color 0.15s ease;
}

.retune-slider:hover { }
.retune-slider:focus-visible { outline: 1px solid var(--retune-text); outline-offset: -1px; }

.retune-slider-fill {
  position: absolute;
  inset: 0;
  right: auto;
  background: var(--retune-surface-active);
  pointer-events: none;
}

.retune-slider-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 4px;
  border-radius: 1px;
  background: var(--retune-border);
  pointer-events: none;
}

.retune-slider-handle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 16px;
  border-radius: 1px;
  background: var(--retune-text);
  pointer-events: none;
  margin-left: -1px;
}

.retune-slider-labels {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
}

.retune-slider-label {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
}

.retune-slider-value {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
}

/* ── SegmentedControl ── */
.retune-segmented {
  display: flex;
  position: relative;
  height: 32px;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
}

.retune-segmented-pill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 8px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  box-sizing: border-box;
  transition: transform 200ms cubic-bezier(0.77, 0, 0.175, 1);
  will-change: transform;
  pointer-events: none;
  z-index: 0;
}


.retune-segmented-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: var(--retune-text);
  transition: color 150ms ease;
  position: relative;
  z-index: 1;
}

.retune-segmented-item:hover:not(.disabled) { color: var(--retune-text-secondary); }

.retune-segmented-item.selected {
  color: var(--retune-text);
}

.retune-segmented-item.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.retune-segmented-item svg {
  width: 24px;
  height: 24px;
  display: block;
}

.retune-segmented-text {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
}

/* ── FontInput ── */
.retune-font-input {
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  min-width: 0;
  overflow: visible;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-font-input:hover { background: var(--retune-border); }
.retune-font-input:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  background: var(--retune-surface-hover);
}

.retune-font-input-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0 4px 0 8px;
  gap: 4px;
}
.retune-font-input-value {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.retune-font-input-trigger svg {
  flex-shrink: 0;
  color: var(--retune-text-secondary);
}

/* ── Font Picker (FloatingDialog) ── */
.retune-font-filter {
  padding: 8px;
  border-top: 1px solid var(--retune-border);
}

.retune-font-list {
  overflow-y: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
}
.retune-font-list::-webkit-scrollbar { display: none; }

.retune-font-section-title {
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  padding: 8px 16px 8px;
}

.retune-font-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 450;
  color: var(--retune-text);
  transition: background-color 0.08s ease;
  min-height: 32px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.retune-font-item:hover { background: var(--retune-surface-hover); }
.retune-font-item-active { background: var(--retune-surface-hover); }
.retune-font-item-active:hover { background: var(--retune-surface-hover); }
.retune-font-item-highlighted { background: var(--retune-input-bg); }
.retune-font-item-active.retune-font-item-highlighted { background: var(--retune-surface-hover); }

.retune-font-system-prompt {
  padding: 8px 16px 12px;
}
.retune-font-system-btn {
  width: 100%;
  padding: 8px;
  border: 1px dashed var(--retune-border-hover);
  border-radius: 8px;
  background: transparent;
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text-secondary);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.retune-font-system-btn:hover { background: var(--retune-surface-hover); color: var(--retune-text); }

.retune-font-denied {
  font-size: 11px;
  line-height: 16px;
  color: var(--retune-text-tertiary);
  margin: 0;
}

.retune-font-empty {
  padding: 16px 12px;
  font-size: 12px;
  color: var(--retune-text-tertiary);
  text-align: center;
}

/* ── TextInput ── */
.retune-text-input {
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  min-width: 0;
  overflow: hidden;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-text-input:hover { background: var(--retune-border); }
.retune-text-input:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  background: var(--retune-surface-hover);
}

.retune-text-input-field {
  flex: 1;
  min-width: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 8px;
}

.retune-text-input-field::selection { background: var(--retune-blue-bg); color: var(--retune-text); }
.retune-text-input-field:focus { outline: none; }

/* ── ComboInput ── */
.retune-combo {
  display: flex;
  align-items: center;
  height: 32px;
  min-width: 0;
  overflow: visible;
  position: relative;
  gap: 1px;
}

.retune-combo-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
  user-select: none;
  cursor: ew-resize;
  z-index: 1;
}

.retune-combo-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  background: var(--retune-surface-hover);
  border-radius: 8px 0 0 8px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 0 0 32px;
  transition: background-color 0.15s ease;
}

.retune-combo-input:hover:not(.retune-combo-variable-applied) { background: var(--retune-border); }
.retune-combo-input:focus {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-combo-variable-applied:focus {
  outline: 1px solid var(--retune-border-hover);
  outline-offset: -1px;
}
.retune-combo-input::selection { background: var(--retune-blue-bg); color: var(--retune-text); }

.retune-combo-trigger {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--retune-surface-hover);
  border-radius: 0 8px 8px 0;
  border: none;
  cursor: pointer;
  color: var(--retune-text-secondary);
  flex-shrink: 0;
  padding: 0;
  transition: background-color 0.15s ease, color 0.12s ease;
}

.retune-combo-trigger:hover { background: var(--retune-border); color: var(--retune-text); }
.retune-combo-trigger:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-combo-dropdown-anchor {
  position: fixed;
  z-index: 2147483647;
}

/* ── Dropdown Menu ── */
.retune-menu-wrapper {
  position: relative;
  width: fit-content;
  min-width: max(120px, 100%);
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 0 0.5px rgba(0,0,0,0.12), 0 10px 16px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.15);
}

.retune-menu-scroll {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 0;
  background: #1c1917;
  scrollbar-width: none;
  overscroll-behavior: none;
}

.retune-menu-scroll::-webkit-scrollbar { display: none; }

.retune-menu-separator {
  height: 16px;
  display: flex;
  align-items: center;
}

.retune-menu-separator-line {
  width: 100%;
  height: 1px;
  background: #292524;
}

.retune-menu-heading {
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  line-height: 16px;
  color: rgba(255,255,255,0.4);
}

.retune-menu-item-wrap {
  padding: 0 6px;
}

.retune-menu-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 24px 4px 8px;
  border: none;
  background: transparent;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.08s ease;
}

.retune-menu-item.has-check { padding-left: 28px; }

.retune-menu-item.highlighted { background: rgba(255,255,255,0.1); }
.retune-menu-item.selected { color: #fff; }
.retune-menu-item.disabled { opacity: 0.5; cursor: not-allowed; }

.retune-menu-check {
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.retune-menu-item-label {
  line-height: 16px;
  white-space: nowrap;
}

.retune-menu-item-shortcut {
  margin-left: auto;
  padding-left: 16px;
  color: rgba(255,255,255,0.7);
  white-space: nowrap;
}

.retune-menu-empty {
  padding: 4px 16px;
  font-size: 11px;
  color: rgba(255,255,255,0.4);
}

.retune-menu-scroll-indicator {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  background: #1c1917;
  cursor: default;
  color: #fff;
}

.retune-menu-scroll-indicator.top {
  top: 0;
  border-radius: 12px 12px 0 0;
}

.retune-menu-scroll-indicator.bottom {
  bottom: 0;
  border-radius: 0 0 12px 12px;
}

/* ── Tooltip ── */
.retune-tooltip-trigger {
  display: contents;
}

.retune-tooltip {
  position: fixed;
  z-index: 2147483647;
  pointer-events: none;
  max-width: 200px;
  border-radius: 5px;
  background: #1e1e1e;
  box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.13), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.005em;
  white-space: nowrap;
  animation: retune-tooltip-in 150ms cubic-bezier(0.23, 1, 0.32, 1) both;
}

.retune-tooltip::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 6px;
  background: #1e1e1e;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.retune-tooltip-bottom::before {
  top: -6px;
  left: var(--caret-x, 50%);
  transform: translateX(-50%);
}

.retune-tooltip-top::before {
  bottom: -6px;
  left: var(--caret-x, 50%);
  transform: translateX(-50%) rotate(180deg);
}

.retune-tooltip-left::before {
  right: -9px;
  top: var(--caret-y, 50%);
  transform: translateY(-50%) rotate(90deg);
}

.retune-tooltip-right::before {
  left: -9px;
  top: var(--caret-y, 50%);
  transform: translateY(-50%) rotate(-90deg);
}

.retune-tooltip-text {
  color: #fff;
  min-width: 0;
  flex: 1;
}

.retune-tooltip-shortcut {
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

@keyframes retune-tooltip-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ── Reduced Motion ── */
/* ── Change Indicator (blue dot at top-left corner of changed inputs) ── */
.retune-change-dot {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  z-index: 3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.retune-change-dot-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--retune-blue);
  box-shadow: 0 0 0 3px var(--retune-surface);
  pointer-events: none;
}

/* ── Variable Action (hexagon/unlink icons on right side of inputs) ── */
.retune-variable-action {
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  transition: color 0.15s ease;
  cursor: pointer;
  z-index: 2;
}
/* Show on parent hover */
.retune-prop:hover .retune-variable-action:not(.retune-variable-unlink),
.retune-color-hex-section:hover .retune-variable-action:not(.retune-variable-unlink) {
  color: var(--retune-text-secondary);
}
.retune-variable-action:hover:not(.retune-variable-unlink) {
  color: var(--retune-text) !important;
}
/* Unlink icon: purple color, 80% opacity at rest, full on hover */
.retune-variable-unlink {
  color: var(--retune-text);
}
.retune-prop-variable-applied .retune-variable-unlink,
.retune-combo:has(.retune-combo-variable-applied) .retune-variable-unlink,
.retune-color-variable-applied .retune-variable-unlink {
  color: transparent;
}
.retune-prop-variable-applied:hover .retune-variable-unlink,
.retune-combo:has(.retune-combo-variable-applied):hover .retune-variable-unlink,
.retune-color-variable-applied:hover .retune-variable-unlink {
  color: var(--retune-text-secondary);
}
.retune-variable-unlink:hover {
  color: var(--retune-text) !important;
}

/* ── Variable Applied State (white bg, bordered) ── */
.retune-prop-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-prop-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-prop-variable-applied .retune-prop-input,
.retune-prop-variable-applied .retune-prop-label {
  cursor: pointer;
}
.retune-combo-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  cursor: pointer;
  border-radius: 8px;
}
.retune-combo-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-combo:has(.retune-combo-variable-applied) .retune-combo-label {
  cursor: pointer;
}
.retune-combo:has(.retune-combo-variable-applied) .retune-combo-trigger {
  display: none;
}
.retune-color-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  /* When variable applied, opacity section is hidden — hex section takes full width with full rounding */
  border-radius: 8px;
}
.retune-color-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-color-variable-applied .retune-color-hex-input {
  cursor: pointer;
}

/* ── Token Picker (floating panel for swapping tokens) ── */
.retune-variable-picker {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #1c1917;
  border-radius: 10px;
  box-shadow: 0 0 0.5px rgba(0,0,0,0.12), 0 10px 16px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 2147483647;
  pointer-events: auto;
  animation: retune-variable-picker-enter 150ms ease-out;
}

@keyframes retune-variable-picker-enter {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.retune-variable-picker-header {
  padding: 8px 10px 4px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.retune-variable-picker-title {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.retune-variable-picker-list {
  max-height: 240px;
  overflow-y: auto;
  padding: 4px 0;
  scrollbar-width: none;
}
.retune-variable-picker-list::-webkit-scrollbar { display: none; }

.retune-variable-picker-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  min-height: 30px;
  box-sizing: border-box;
}

.retune-variable-picker-item:hover {
  background: rgba(255,255,255,0.08);
}

.retune-variable-picker-item-active {
  background: rgba(59,130,246,0.15);
  cursor: default;
}
.retune-variable-picker-item-active:hover {
  background: rgba(59,130,246,0.15);
}

.retune-variable-picker-swatch {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
}

.retune-variable-picker-name {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-variable-picker-value {
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  flex-shrink: 0;
}

/* ── Token Dialog List (content inside FloatingDialog) ── */
.retune-variable-dialog-list {
  flex: 1 1 0;
  overflow-y: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
  border-top: 1px solid var(--retune-border);
}
.retune-variable-dialog-list::-webkit-scrollbar { display: none; }

.retune-variable-dialog-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  min-height: 32px;
  box-sizing: border-box;
}
.retune-variable-dialog-item:hover {
  background: var(--retune-surface-hover);
}

.retune-variable-dialog-item-active {
  background: var(--retune-surface-hover);
}
.retune-variable-dialog-item-active:hover {
  background: var(--retune-surface-hover);
}
.retune-variable-dialog-item-highlighted {
  background: var(--retune-input-bg);
}
.retune-variable-dialog-item-active.retune-variable-dialog-item-highlighted {
  background: var(--retune-surface-hover);
}

.retune-variable-dialog-active-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3b82f6;
  flex-shrink: 0;
}

.retune-variable-dialog-swatch {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
}

.retune-variable-dialog-name {
  font-size: 11px;
  font-weight: 450;
  color: var(--retune-text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-variable-dialog-value {
  font-size: 11px;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
}

.retune-variable-dialog-empty {
  padding: 16px 12px;
  font-size: 12px;
  color: var(--retune-text-tertiary);
  text-align: center;
}

/* ── Snap Guide Lines ── */

.retune-snap-guide {
  position: fixed;
  pointer-events: none;
  z-index: 2147483645;
  background: var(--retune-red);
  display: none;
}

.retune-snap-guide.visible {
  display: block;
}

.retune-snap-label {
  position: fixed;
  pointer-events: none;
  z-index: 2147483646;
  font-size: 10px;
  font-weight: 500;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  color: #fff;
  white-space: nowrap;
  background: var(--retune-red);
  padding: 1px 4px;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 100ms ease;
}

.retune-snap-label.visible {
  opacity: 1;
  transition: none;
}

/* ── Settings Panel ── */

.retune-settings-clip {
  border-radius: inherit;
}

/* ── Settings Panel ── */

@keyframes retune-settings-in {
  from { opacity: 0; transform: translateY(8px); filter: blur(4px); }
  to { opacity: 1; transform: none; filter: none; }
}

@keyframes retune-settings-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(8px); filter: blur(4px); }
}

.retune-settings-panel {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border: none;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  width: 280px;
  height: auto;
  max-height: calc(100vh - 84px);
  overflow: visible;
  bottom: 68px;
  animation: retune-settings-in 250ms cubic-bezier(0.5, 0, 0, 1);
}

.retune-settings-panel.exiting {
  animation: retune-settings-out 250ms cubic-bezier(0.5, 0, 0, 1) forwards;
}

.retune-settings-panel.right { right: 16px; }
.retune-settings-panel.left { left: 16px; }

.retune-settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
}

.retune-settings-label {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.06px;
  color: var(--retune-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Switch */
.retune-switch-wrap {
  padding: 6px 0;
  flex-shrink: 0;
}

.retune-switch {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 13px;
  background: var(--retune-input-bg);
  cursor: pointer;
  border: none;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, border-radius 0.15s ease;
}

.retune-switch.on {
  background: var(--retune-blue);
  border-radius: 9999px;
}

.retune-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--retune-white);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  transition: left 0.15s ease, box-shadow 0.15s ease;
}

.retune-switch.on .retune-switch-knob {
  left: 18px;
  box-shadow: none;
}

/* Keyboard shortcuts link row */
.retune-settings-row.clickable {
  cursor: pointer;
  height: 48px;
  color: var(--retune-text-secondary);
}

.retune-settings-row.clickable:hover {
  color: var(--retune-text);
}

.retune-settings-row.clickable:hover .retune-settings-label {
  color: var(--retune-text);
}

/* Keyboard shortcut key badge */
.retune-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  padding: 4px;
  border-radius: 4px;
  background: var(--retune-input-bg);
  border: none;
  box-shadow: 0 0 0 0.5px var(--retune-shadow) inset, 0 2px 0 0 var(--retune-border);
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: 0.055px;
  color: var(--retune-text);
}

.retune-key.wide {
  padding: 4px 8px;
  min-width: auto;
}

.retune-key-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Settings header with back button */
.retune-settings-header {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--retune-border);
  flex-shrink: 0;
}

.retune-settings-back {
  cursor: pointer;
  color: var(--retune-text-secondary);
}

.retune-settings-back:hover {
  color: var(--retune-text);
}

.retune-settings-title {
  font-size: 12px;
  font-weight: 550;
  line-height: 16px;
  letter-spacing: 0.06px;
  color: var(--retune-text);
  padding: 8px;
}

/* Settings body (scrollable for keyboard view) */
.retune-settings-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: clip;
  scrollbar-width: none;
  padding: 8px 0;
}

.retune-settings-body::-webkit-scrollbar { display: none; }


.retune-variable-dialog-group-title {
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  padding: 8px 16px 8px;
  text-transform: capitalize;
}

/* ── Component Section ── */
.retune-component-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
  width: 100%;
}
.retune-component-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--retune-text);
}
.retune-component-source {
  font-size: 10px;
  color: var(--retune-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Component props/state grid ── */
.retune-component-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 8px;
  padding: 0 48px 4px 16px;
}
.retune-component-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.retune-component-field-label {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
}
.retune-component-field--toggle {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.retune-component-field--toggle .retune-component-field-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.retune-component-toggle-row {
  display: flex;
  align-items: center;
  gap: 4px;
}
.retune-component-field > .retune-prop {
  width: 100%;
}
.retune-component-field > .retune-select {
  width: 100%;
}

.retune-component-field .retune-prop-input::-webkit-inner-spin-button,
.retune-component-field .retune-prop-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.retune-component-field .retune-prop-input[type="number"] {
  -moz-appearance: textfield;
}

.retune-component-toggle {
  position: relative;
  width: 28px;
  height: 16px;
  border-radius: 8px;
  border: none;
  background: var(--retune-border);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 150ms ease;
}
.retune-component-toggle.on {
  background: var(--retune-blue);
}
.retune-component-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--retune-always-white);
  transition: transform 150ms ease;
  box-shadow: 0 1px 2px var(--retune-black-25);
}
.retune-component-toggle.on .retune-component-toggle-thumb {
  transform: translateX(12px);
}

/* ── Comment system ── */
.retune-comment-marker {
  position: fixed;
  min-height: 24px;
  border-radius: 12px 12px 12px 0;
  background: var(--retune-surface);
  color: var(--retune-text);
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  z-index: 2147483646;
  pointer-events: none;
  transform: translate(-4px, -24px);
  transform-origin: bottom left;
  user-select: none;
  animation: retune-marker-in 150ms cubic-bezier(0.23, 1, 0.32, 1) backwards;
  transition: width 150ms ease, height 150ms ease, border-radius 150ms ease, transform 150ms ease;
  overflow: hidden;
  width: 24px;
  height: 24px;
  will-change: width, height;
}
.retune-comment-marker-num {
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 1;
  transition: opacity 150ms ease;
}
.retune-comment-marker-preview {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--retune-text-secondary);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 10px 12px 0;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 150ms ease;
  pointer-events: none;
  will-change: opacity;
}
.retune-comment-marker.interactive {
  pointer-events: auto;
  cursor: pointer;
}
.retune-comment-marker.expanded .retune-comment-marker-num {
  opacity: 0;
}
.retune-comment-marker.expanded .retune-comment-marker-preview {
  opacity: 1;
}
.retune-comment-popover.shaking {
  animation: retune-shake 300ms ease-out !important;
}
@keyframes retune-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
}

@keyframes retune-marker-in {
  from {
    opacity: 0;
    transform: translate(-4px, -24px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-4px, -24px) scale(1);
  }
}
.retune-comment-area-outline {
  position: fixed;
  border: 1px dashed var(--retune-blue);
  pointer-events: none;
  z-index: 2147483639;
}
.retune-area-handle {
  position: fixed;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--retune-blue);
  border: 2px solid var(--retune-always-white);
  box-shadow: 0 1px 3px var(--retune-black-25);
  z-index: 2147483640;
  cursor: nwse-resize;
  pointer-events: auto;
}
.retune-comment-popover {
  background: var(--retune-surface);
  border-radius: 16px;
  padding: 12px;
  width: 280px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  z-index: 2147483647;
  pointer-events: auto;
  transform-origin: top left;
  animation: retune-popover-in 150ms cubic-bezier(0.23, 1, 0.32, 1) 30ms backwards;
}
@keyframes retune-popover-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.retune-comment-textarea {
  width: 100%;
  min-height: 48px;
  background: var(--retune-surface-hover);
  border: none;
  border-radius: 8px;
  color: var(--retune-text);
  font-size: 13px;
  font-family: inherit;
  line-height: 1.5;
  resize: none;
  outline: none;
  padding: 8px 12px;
  box-sizing: border-box;
  overflow: hidden;
}
.retune-comment-textarea::placeholder {
  color: var(--retune-text-tertiary);
}
.retune-comment-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}
.retune-comment-submit-btn {
  background: var(--retune-blue);
  color: var(--retune-always-white);
  border: none;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  font-family: inherit;
}
.retune-comment-submit-btn:hover { opacity: 0.9; }
.retune-comment-submit-btn:disabled { opacity: 0.4; cursor: default; }
.retune-comment-cancel-btn {
  background: transparent;
  color: var(--retune-text-muted);
  border: none;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  font-family: inherit;
}
.retune-comment-cancel-btn:hover { background: var(--retune-surface-hover); color: var(--retune-text); }
.retune-comment-delete-btn {
  background: transparent;
  color: var(--retune-red);
  border: none;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  font-family: inherit;
}
.retune-comment-delete-btn:hover { background: color-mix(in srgb, var(--retune-red) 10%, transparent); }
.retune-comment-count {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 14px;
  height: 14px;
  background: var(--retune-blue-10);
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 1;
}
.retune-toolbar-btn.active {
  background: var(--retune-surface-hover);
}
.retune-toolbar-btn.active:hover {
  background: var(--retune-surface-hover);
}
.retune-toolbar-divider {
  width: 1px;
  height: 20px;
  background: var(--retune-border);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .retune-toolbar,
  .retune-toolbar-collapse-btn,
  .retune-toolbar-expanded,
  .retune-toolbar-btn,
  .retune-icon-swap-icon,
  .retune-segmented-pill,
  .retune-segmented-item,
  .retune-align-btn,
  .retune-split-btn,
  .retune-section-header-btn,
  .retune-color-hex-input,
  .retune-color-opacity-input,
  .retune-number-input,
  .retune-font-input,
  .retune-select-button,
  .retune-combo-input,
  .retune-combo-trigger,
  .retune-gradient-action-btn,
  .retune-dropdown-trigger,
  .retune-dropdown-item,
  .retune-menu-item {
    transition: none;
  }

  .retune-panel-anim.entering .retune-panel,
  .retune-panel-anim.exiting .retune-panel,
  .retune-floating-dialog,
  .retune-dropdown-menu,
  .retune-tooltip,
  .retune-edit-count,
  .retune-toolbar.expanded .retune-toolbar-expanded > *,
  .retune-toolbar.collapsed .retune-toolbar-collapse-btn,
  .retune-grid-picker-dialog,
  .retune-combo-dropdown-anchor,
  .retune-comment-marker,
  .retune-comment-popover,
  .retune-comment-popover.shaking {
    animation: none;
  }

  .retune-comment-marker {
    transition: none;
  }

  .retune-variable-action,
  .retune-change-dot,
  .retune-variable-picker {
    transition: none;
    animation: none;
  }

  .retune-settings-view-container,
  .retune-settings-panel {
    transition: none;
    animation: none;
  }
}
`;function ab(){if(!document.querySelector("link[data-retune-font]")){const o=document.createElement("link");o.rel="preconnect",o.href="https://rsms.me/",document.head.appendChild(o);const i=document.createElement("link");i.rel="stylesheet",i.href="https://rsms.me/inter/inter.css",i.setAttribute("data-retune-font",""),document.head.appendChild(i)}const e=document.createElement("div");e.setAttribute("data-retune-host",""),e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 2147483647;
    pointer-events: none;
  `;const t=e.attachShadow({mode:"open"}),n=new CSSStyleSheet;n.replaceSync(lb),t.adoptedStyleSheets=[n];const r=document.createElement("div");r.setAttribute("data-retune-container",""),t.appendChild(r);for(const o of["click","pointerdown","mousedown","focusin","focusout"])e.addEventListener(o,i=>{i.composedPath()[0]!==e&&i.stopPropagation()});return document.documentElement.appendChild(e),{host:e,root:t,container:r,sheet:n}}function cb(e){e.remove()}function ub(e,t,n){const{isFlexChild:r,isGridChild:o,parentFlexDir:i,currentStyles:s,elementRect:a}=n,c=()=>`${a?Math.round(e==="width"?a.width:a.height):200}px`;return r?e==="width"&&!i.startsWith("column")||e==="height"&&i.startsWith("column")?pb(e,t,s,c):hb(e,t,s,c):o?fb(e,t,s,c):db(e,t,c)}function db(e,t,n){switch(t){case"fill":return{[e]:"100%"};case"hug":return{[e]:"fit-content"};case"fixed":return{[e]:n()}}}function fb(e,t,n,r){const o=e==="width"?"justifySelf":"alignSelf";switch(t){case"fill":return{[e]:"auto",[o]:"stretch"};case"hug":{const i={[e]:"fit-content"},s=n[o];return(!s||s==="stretch"||s==="auto"||s==="normal")&&(i[o]="start"),i}case"fixed":return{[e]:r()}}}function pb(e,t,n,r){switch(t){case"fill":return{flexGrow:"1",flexShrink:"1",flexBasis:"0px",[e]:"auto"};case"hug":return{flexGrow:"0",flexShrink:"0",flexBasis:"auto",[e]:"auto"};case"fixed":{const o={flexGrow:"0",flexShrink:"0"};return(!n[e]||n[e]==="auto")&&(o[e]=r()),o}}}function hb(e,t,n,r){switch(t){case"fill":{const o={[e]:"100%"};return n[e]!=="100%"&&(o.alignSelf="stretch"),o}case"hug":{const o={[e]:"auto"},i=n.alignSelf;return(!i||i==="auto"||i==="stretch")&&(o.alignSelf="flex-start"),o}case"fixed":{const o={};return(!n[e]||n[e]==="auto"||n[e]==="100%")&&(o[e]=r()),o}}}function fd(e,t){if(e==="width")return!0;const{isFlexChild:n,isGridChild:r,parentFlexDir:o,currentStyles:i}=t;return!!(n&&o.startsWith("column")||n&&!o.startsWith("column")||r)}function jh(e,t){const{isFlexChild:n,isGridChild:r,parentFlexDir:o,currentStyles:i}=t,s=i[e];if(!n&&!r)return s==="100%"?"fill":s==="fit-content"?"hug":null;if(r){const p=i[e==="width"?"justifySelf":"alignSelf"];return(s==="auto"||!s)&&(p==="stretch"||p==="auto"||p==="normal"||!p)?"fill":s==="fit-content"?"hug":null}if(e==="width"&&!o.startsWith("column")||e==="height"&&o.startsWith("column")){const u=i.flexGrow,p=i.flexBasis;return u&&parseFloat(u)>0&&(p==="0px"||p==="0"||p==="0%")?"fill":u==="0"&&(p==="auto"||!p)&&(s==="auto"||!s)?"hug":null}if(s==="100%")return"fill";const c=i.alignSelf;return(s==="auto"||!s)&&(c==="stretch"||c==="auto"||c==="normal"||!c)?"fill":s==="auto"&&(c==="flex-start"||c==="start"||c==="center"||c==="flex-end"||c==="end")?"hug":null}function gb(e,t,n,r,o,i){const s=o?e:t;let a=n.length;for(let c=0;c<n.length;c++){const u=o?n[c].left+n[c].width/2:n[c].top+n[c].height/2;if(s<u){a=c;break}}return a>=r.length?r.length>0?r[r.length-1]+1:i:r[a]}function mb(e,t){return e===t}function vb(e,t){return`${Math.round(e)} × ${Math.round(t)}`}function xb(e,t){const n=document.createElement("div");n.setAttribute("data-retune-highlight",""),e.appendChild(n);const r=document.createElement("div");r.setAttribute("data-retune-label",""),e.appendChild(r);const o=document.createElement("div");o.setAttribute("data-retune-selection",""),e.appendChild(o);const i=document.createElement("div");i.setAttribute("data-retune-selection-label",""),e.appendChild(i);const s=document.createElement("div");s.style.cssText=`
    position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:none;overflow:hidden;
  `,s.innerHTML='<svg width="100%" height="100%" style="position:absolute;top:0;left:0"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#0D99FF" stroke-width="1" stroke-dasharray="1 3" stroke-linecap="round" opacity="0.6"/></svg>',o.appendChild(s);const a=document.createElement("div");a.setAttribute("data-retune-parent-indicator",""),a.style.cssText=`
    position:fixed;display:none;pointer-events:none;z-index:2147483644;
    border:1px dotted #0D99FF;background:none;border-radius:0;
  `,e.appendChild(a);const c=[];for(let w=0;w<20;w++){const A=document.createElement("div");A.style.cssText=`
      position:fixed;display:none;pointer-events:none;z-index:2147483644;
      border:1px dotted #0D99FF;background:none;
    `,e.appendChild(A),c.push(A)}function u(w,A){const G=Array.from(w.children).filter(U=>{if(U===A||U.hasAttribute("data-retune-host"))return!1;const oe=getComputedStyle(U);return!(oe.display==="none"||oe.visibility==="hidden")});let Y=0;for(const U of G){if(Y>=c.length)break;const oe=U.getBoundingClientRect();if(oe.width===0||oe.height===0)continue;const X=c[Y++];X.style.top=`${oe.top}px`,X.style.left=`${oe.left}px`,X.style.width=`${oe.width}px`,X.style.height=`${oe.height}px`,X.style.display="block"}for(let U=Y;U<c.length;U++)c[U].style.display="none"}function p(w){const A=Array.from(w.children).filter(Y=>{if(Y.hasAttribute("data-retune-host"))return!1;const U=getComputedStyle(Y);return!(U.display==="none"||U.visibility==="hidden")});let G=0;for(const Y of A){if(G>=c.length)break;const U=Y.getBoundingClientRect();if(U.width===0||U.height===0)continue;const oe=c[G++];oe.style.top=`${U.top}px`,oe.style.left=`${U.left}px`,oe.style.width=`${U.width}px`,oe.style.height=`${U.height}px`,oe.style.display="block"}for(let Y=G;Y<c.length;Y++)c[Y].style.display="none"}function d(){for(const w of c)w.style.display="none"}const f=[];for(let w=0;w<50;w++){const A=document.createElement("div");A.style.cssText=`
      position:fixed;display:none;pointer-events:none;z-index:2147483643;
      border:1px solid #0D99FF;background:none;
    `,e.appendChild(A),f.push(A)}let v=[];function x(w,A){let G;try{G=Array.from(document.querySelectorAll(w))}catch{R();return}v=G.filter(Y=>{if(Y===A||Y.closest("[data-retune-host]"))return!1;const U=getComputedStyle(Y);return!(U.display==="none"||U.visibility==="hidden")}),m()}function m(){let w=0;for(const A of v){if(w>=f.length)break;const G=A.getBoundingClientRect();if(G.width===0||G.height===0)continue;const Y=f[w++];Y.style.top=`${G.top}px`,Y.style.left=`${G.left}px`,Y.style.width=`${G.width}px`,Y.style.height=`${G.height}px`,Y.style.display="block"}for(let A=w;A<f.length;A++)f[A].style.display="none"}function R(){v=[];for(const w of f)w.style.display="none"}const y={};for(const w of["top","right","bottom","left"]){const A=document.createElement("div");A.style.cssText="position:fixed;display:none;pointer-events:none;z-index:2147483644;",e.appendChild(A),y[w]=A}function g(w){const A=w,G={top:!1,right:!1,bottom:!1,left:!1},Y=getComputedStyle(w).position;if(Y!=="absolute"&&Y!=="fixed")return G;for(const U of["top","right","bottom","left"]){if(A.style[U]!==""){G[U]=!0;continue}try{for(const oe of document.styleSheets){try{for(const X of oe.cssRules)if(X instanceof CSSStyleRule&&w.matches(X.selectorText)){const ae=X.style.getPropertyValue(U);if(ae&&ae!=="auto"){G[U]=!0;break}}}catch{}if(G[U])break}}catch{}}return G}function C(w,A,G){const Y=w.left+w.width/2,U=w.top+w.height/2;G.top&&w.top>A.top?y.top.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${A.top}px;left:${Y}px;
        width:0;height:${w.top-A.top}px;
        border-left:1px dashed #0D99FF;
      `:y.top.style.display="none",G.bottom&&A.bottom>w.bottom?y.bottom.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${w.bottom}px;left:${Y}px;
        width:0;height:${A.bottom-w.bottom}px;
        border-left:1px dashed #0D99FF;
      `:y.bottom.style.display="none",G.left&&w.left>A.left?y.left.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${U}px;left:${A.left}px;
        width:${w.left-A.left}px;height:0;
        border-top:1px dashed #0D99FF;
      `:y.left.style.display="none",G.right&&A.right>w.right?y.right.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${U}px;left:${w.right}px;
        width:${A.right-w.right}px;height:0;
        border-top:1px dashed #0D99FF;
      `:y.right.style.display="none"}function S(){for(const w of Object.values(y))w.style.display="none"}let E=null;function P(){if(!N)return;const w=N.parentElement;if(!w||w===document.body||w===document.documentElement)return;const A=N.getBoundingClientRect(),G=w.getBoundingClientRect(),Y=E||g(N);Y.top||Y.right||Y.bottom||Y.left?C(A,G,Y):S()}let b=!1,T=!1,W=null,N=null,re=!1,D=null,k=null,M=null,z={top:0,left:0,width:0,height:0},B={x:0,y:0},ee=[],H=-1;const se=5;function J(w,A){w.style.cssText=`
      position: fixed;
      pointer-events: none;
      z-index: 2147483644;
      box-sizing: border-box;
      display: none;
      outline: none;
    `,A.style.cssText=`
      position: fixed;
      color: white;
      font-size: 11px;
      font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      font-feature-settings: 'liga' 1, 'calt' 1, 'zero' 0, 'tnum' 0;
      padding: 2px 6px;
      border-radius: 3px;
      pointer-events: none;
      z-index: 2147483646;
      white-space: nowrap;
      display: none;
    `}J(n,r),J(o,i);const ie=8,de=ie/2,Re=6,He=["nw","ne","se","sw"],Ke=["n","e","s","w"],ve=[...He,...Ke],te={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"},Ie={nw:{dx:-1,dy:-1},n:{dx:0,dy:-1},ne:{dx:1,dy:-1},e:{dx:1,dy:0},se:{dx:1,dy:1},s:{dx:0,dy:1},sw:{dx:-1,dy:1},w:{dx:-1,dy:0}},dt={};for(const w of He){const A=document.createElement("div");A.style.cssText=`
      position:fixed;pointer-events:auto;display:none;box-sizing:border-box;
      width:${ie}px;height:${ie}px;
      background:#fff;border:1px solid #0D99FF;border-radius:1px;
      z-index:2147483645;cursor:${te[w]};
    `,e.appendChild(A),dt[w]=A}for(const w of Ke){const A=document.createElement("div");A.style.cssText=`
      position:fixed;pointer-events:auto;display:none;
      z-index:2147483645;cursor:${te[w]};
    `,e.appendChild(A),dt[w]=A}function Je(w){const A={nw:{x:w.left,y:w.top},ne:{x:w.right,y:w.top},se:{x:w.right,y:w.bottom},sw:{x:w.left,y:w.bottom}};for(const Y of He){const U=dt[Y],oe=A[Y];U.style.left=`${oe.x-de}px`,U.style.top=`${oe.y-de}px`,U.style.display="block"}const G=de;dt.n.style.cssText+=`display:block;left:${w.left+G}px;top:${w.top-Re/2}px;width:${w.width-G*2}px;height:${Re}px;cursor:${te.n};`,dt.s.style.cssText+=`display:block;left:${w.left+G}px;top:${w.bottom-Re/2}px;width:${w.width-G*2}px;height:${Re}px;cursor:${te.s};`,dt.e.style.cssText+=`display:block;left:${w.right-Re/2}px;top:${w.top+G}px;width:${Re}px;height:${w.height-G*2}px;cursor:${te.e};`,dt.w.style.cssText+=`display:block;left:${w.left-Re/2}px;top:${w.top+G}px;width:${Re}px;height:${w.height-G*2}px;cursor:${te.w};`}function St(){for(const w of ve)dt[w].style.display="none"}const ft=5,st=[];for(let w=0;w<16;w++){const A=document.createElement("div");A.className="retune-snap-guide",e.appendChild(A);const G=document.createElement("div");G.className="retune-snap-label",e.appendChild(G),st.push({line:A,label:G})}let mt=null;function Fn(w){const A=w.parentElement,Y=(A?Array.from(A.children).filter(Et=>Et!==w&&Et.tagName!=="SCRIPT"&&Et.tagName!=="STYLE"):[]).map(Et=>Et.getBoundingClientRect()),U=[...new Set(Y.map(Et=>Math.round(Et.width)))].sort((Et,Ht)=>Et-Ht),oe=[...new Set(Y.map(Et=>Math.round(Et.height)))].sort((Et,Ht)=>Et-Ht),X=A?A.getBoundingClientRect():null,ae=A?getComputedStyle(A):null,ce=X&&ae?X.width-parseFloat(ae.paddingLeft)-parseFloat(ae.paddingRight)-parseFloat(ae.borderLeftWidth)-parseFloat(ae.borderRightWidth):0,he=X&&ae?X.height-parseFloat(ae.paddingTop)-parseFloat(ae.paddingBottom)-parseFloat(ae.borderTopWidth)-parseFloat(ae.borderBottomWidth):0,Ce=ae?{top:parseFloat(ae.paddingTop)||0,right:parseFloat(ae.paddingRight)||0,bottom:parseFloat(ae.paddingBottom)||0,left:parseFloat(ae.paddingLeft)||0}:{top:0,right:0,bottom:0,left:0},Ee=(ae==null?void 0:ae.display)||"",xe=Ee.includes("flex"),Qe=Ee.includes("grid"),Ue=(ae==null?void 0:ae.flexDirection)||"row",bt={isFlexChild:xe,isGridChild:Qe,parentFlexDir:Ue,currentStyles:{}},Ut=fd("width",bt),dn=fd("height",bt);mt={siblingWidths:U,siblingHeights:oe,siblingRects:Y,parentRect:X,parentWidth:Math.round(ce),parentHeight:Math.round(he),parentPadding:Ce,canFillWidth:Ut,canFillHeight:dn}}function Xt(w,A){let G=0,Y=A.length-1,U=null,oe=ft+1;for(;G<=Y;){const X=G+Y>>1,ae=Math.abs(A[X]-w);ae<oe&&(oe=ae,U=A[X]),A[X]<w?G=X+1:Y=X-1}return oe<=ft?U:null}function pn(w,A,G){if(!mt)return{width:w,height:A,guides:[],fillWidth:!1,fillHeight:!1};const Y=[];let U=!1,oe=!1;if(G.dx!==0){const X=mt.canFillWidth&&Math.abs(w-mt.parentWidth)<=ft?mt.parentWidth:null;if(X!==null)w=X,U=!0,Y.push({axis:"x",value:X,ref:X,fill:!0});else{const ae=Xt(w,mt.siblingWidths);if(ae!==null){w=ae;const ce=mt.siblingRects.find(he=>Math.round(he.width)===ae);Y.push({axis:"x",value:ae,ref:ae,refRect:ce})}}}if(G.dy!==0){const X=mt.canFillHeight&&Math.abs(A-mt.parentHeight)<=ft?mt.parentHeight:null;if(X!==null)A=X,oe=!0,Y.push({axis:"y",value:X,ref:X,fill:!0});else{const ae=Xt(A,mt.siblingHeights);if(ae!==null){A=ae;const ce=mt.siblingRects.find(he=>Math.round(he.height)===ae);Y.push({axis:"y",value:ae,ref:ae,refRect:ce})}}}return{width:w,height:A,guides:Y,fillWidth:U,fillHeight:oe}}const Wt=4;function Tt(w,A,G){w.style.cssText=`
      position:fixed;pointer-events:none;z-index:2147483645;
      top:${G-Wt}px;left:${A-Wt}px;
      width:${Wt*2}px;height:${Wt*2}px;
      background:none;
    `,w.style.backgroundImage=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${Wt*2}' height='${Wt*2}'%3E%3Cline x1='2' y1='2' x2='${Wt*2-2}' y2='${Wt*2-2}' stroke='%23F24822' stroke-width='1'/%3E%3Cline x1='${Wt*2-2}' y1='2' x2='2' y2='${Wt*2-2}' stroke='%23F24822' stroke-width='1'/%3E%3C/svg%3E")`,w.style.backgroundSize="contain"}function Bn(w,A,G){for(const oe of st)oe.line.classList.remove("visible"),oe.label.classList.remove("visible"),oe.label.style.display="";const Y=Ie[G];let U=0;for(const oe of w)if(oe.fill&&(mt!=null&&mt.parentRect)){const X=mt.parentRect,ae=mt.parentPadding,ce=oe.axis==="x"?ae.left>0||ae.right>0:ae.top>0||ae.bottom>0;if(a.style.cssText=`
          position:fixed;display:block;pointer-events:none;z-index:2147483644;
          border:1px dotted #0D99FF;background:none;
          top:${X.top}px;left:${X.left}px;width:${X.width}px;height:${X.height}px;
        `,ce){const he="repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(13, 153, 255, 0.5) 3px, rgba(13, 153, 255, 0.5) 4px)";if(oe.axis==="x"){if(ae.left>0&&U<st.length){const Ce=st[U++];Ce.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${X.top}px;left:${X.left}px;width:${ae.left}px;height:${X.height}px;background:${he};`,Ce.line.classList.add("visible")}if(ae.right>0&&U<st.length){const Ce=st[U++];Ce.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${X.top}px;left:${X.right-ae.right}px;width:${ae.right}px;height:${X.height}px;background:${he};`,Ce.line.classList.add("visible")}}else{if(ae.top>0&&U<st.length){const Ce=st[U++];Ce.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${X.top}px;left:${X.left}px;width:${X.width}px;height:${ae.top}px;background:${he};`,Ce.line.classList.add("visible")}if(ae.bottom>0&&U<st.length){const Ce=st[U++];Ce.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${X.bottom-ae.bottom}px;left:${X.left}px;width:${X.width}px;height:${ae.bottom}px;background:${he};`,Ce.line.classList.add("visible")}}}else if(oe.axis==="x"){const Ce=(Y.dx>0?"right":"left")==="right"?X.right:X.left;if(U<st.length){const Ee=st[U++];Tt(Ee.line,Ce,X.top),Ee.line.classList.add("visible")}if(U<st.length){const Ee=st[U++];Tt(Ee.line,Ce,X.bottom),Ee.line.classList.add("visible")}}else{const Ce=(Y.dy>0?"bottom":"top")==="bottom"?X.bottom:X.top;if(U<st.length){const Ee=st[U++];Tt(Ee.line,X.left,Ce),Ee.line.classList.add("visible")}if(U<st.length){const Ee=st[U++];Tt(Ee.line,X.right,Ce),Ee.line.classList.add("visible")}}}else{const X=oe.refRect;if(!X||U+1>=st.length)continue;if(oe.axis==="x"){const ce=(Y.dx>0?"right":"left")==="right"?X.right:X.left,he=st[U++];Tt(he.line,ce,X.top),he.line.classList.add("visible");const Ce=st[U++];Tt(Ce.line,ce,X.bottom),Ce.line.classList.add("visible")}else{const ce=(Y.dy>0?"bottom":"top")==="bottom"?X.bottom:X.top,he=st[U++];Tt(he.line,X.left,ce),he.line.classList.add("visible");const Ce=st[U++];Tt(Ce.line,X.right,ce),Ce.line.classList.add("visible")}}}function rt(){for(const w of st)w.line.classList.remove("visible"),w.label.classList.remove("visible")}let lt=null;function tn(w){const A=w.parentElement;if(!A){lt=null;return}const G=A.getBoundingClientRect(),Y=getComputedStyle(A),U=parseFloat(Y.borderTopWidth)||0,oe=parseFloat(Y.borderRightWidth)||0,X=parseFloat(Y.borderBottomWidth)||0,ae=parseFloat(Y.borderLeftWidth)||0,ce=parseFloat(Y.paddingTop)||0,he=parseFloat(Y.paddingRight)||0,Ce=parseFloat(Y.paddingBottom)||0,Ee=parseFloat(Y.paddingLeft)||0,xe=G.top+U+ce,Qe=G.right-oe-he,Ue=G.bottom-X-Ce,bt=G.left+ae+Ee,Ut={top:xe,right:Qe,bottom:Ue,left:bt,centerX:(bt+Qe)/2,centerY:(xe+Ue)/2},Et=Array.from(A.children).filter(Ht=>Ht!==w&&Ht.tagName!=="SCRIPT"&&Ht.tagName!=="STYLE").map(Ht=>{const ln=Ht.getBoundingClientRect();return{top:ln.top,right:ln.right,bottom:ln.bottom,left:ln.left,centerX:ln.left+ln.width/2,centerY:ln.top+ln.height/2}});lt={parentEdges:Ut,siblingEdges:Et}}function be(w){if(!lt)return{dx:0,dy:0,guides:[]};const A={top:w.top,right:w.right,bottom:w.bottom,left:w.left,centerX:w.left+w.width/2,centerY:w.top+w.height/2},G=[],Y=[],U=lt.parentEdges,oe={top:U.top,right:U.right,bottom:U.bottom,left:U.left};G.push({val:U.left,isCenter:!1,...oe},{val:U.right,isCenter:!1,...oe},{val:U.centerX,isCenter:!0,...oe}),Y.push({val:U.top,isCenter:!1,...oe},{val:U.bottom,isCenter:!1,...oe},{val:U.centerY,isCenter:!0,...oe});for(const jt of lt.siblingEdges){const Kt={top:jt.top,right:jt.right,bottom:jt.bottom,left:jt.left};G.push({val:jt.left,isCenter:!1,...Kt},{val:jt.right,isCenter:!1,...Kt},{val:jt.centerX,isCenter:!0,...Kt}),Y.push({val:jt.top,isCenter:!1,...Kt},{val:jt.bottom,isCenter:!1,...Kt},{val:jt.centerY,isCenter:!0,...Kt})}const X=[{val:A.left,isCenter:!1},{val:A.right,isCenter:!1},{val:A.centerX,isCenter:!0}];let ae=0,ce=ft+1,he=0,Ce=null,Ee=!1;for(const jt of G)for(const Kt of X){const Ln=Math.abs(Kt.val-jt.val);Ln<ce&&(ce=Ln,ae=jt.val-Kt.val,he=jt.val,Ce=jt,Ee=Kt.isCenter)}const xe=[{val:A.top,isCenter:!1},{val:A.bottom,isCenter:!1},{val:A.centerY,isCenter:!0}];let Qe=0,Ue=ft+1,bt=0,Ut=null,dn=!1;for(const jt of Y)for(const Kt of xe){const Ln=Math.abs(Kt.val-jt.val);Ln<Ue&&(Ue=Ln,Qe=jt.val-Kt.val,bt=jt.val,Ut=jt,dn=Kt.isCenter)}const Et=[],Ht=ce<=ft?ae:0,ln=Ue<=ft?Qe:0;return(Ht!==0||ce<=ft)&&Ce&&Et.push({axis:"x",pos:he,elIsCenter:Ee,refIsCenter:Ce.isCenter,refTop:Ce.top,refRight:Ce.right,refBottom:Ce.bottom,refLeft:Ce.left}),(ln!==0||Ue<=ft)&&Ut&&Et.push({axis:"y",pos:bt,elIsCenter:dn,refIsCenter:Ut.isCenter,refTop:Ut.top,refRight:Ut.right,refBottom:Ut.bottom,refLeft:Ut.left}),{dx:Ht,dy:ln,guides:Et}}function Fe(w,A){rt();let G=0;function Y(U,oe){if(G>=st.length)return;const X=st[G++];Tt(X.line,U,oe),X.line.classList.add("visible")}for(const U of w){if(G>=st.length)break;const{line:oe}=st[G++];if(U.axis==="x"){oe.style.cssText=`
          position:fixed;pointer-events:none;z-index:2147483645;background:none;
          top:0;left:${U.pos}px;width:0;height:100vh;
          border-left:1px solid var(--retune-red);
        `,oe.classList.add("visible");const X=U.pos+.5;U.refIsCenter?Y(X,(U.refTop+U.refBottom)/2):(Y(X,U.refTop),Y(X,U.refBottom)),U.elIsCenter?Y(X,A.top+A.height/2):(Y(X,A.top),Y(X,A.bottom))}else{oe.style.cssText=`
          position:fixed;pointer-events:none;z-index:2147483645;background:none;
          top:${U.pos}px;left:0;width:100vw;height:0;
          border-top:1px solid var(--retune-red);
        `,oe.classList.add("visible");const X=U.pos+.5;U.refIsCenter?Y((U.refLeft+U.refRight)/2,X):(Y(U.refLeft,X),Y(U.refRight,X)),U.elIsCenter?Y(A.left+A.width/2,X):(Y(A.left,X),Y(A.right,X))}}}let $e=null;function vt(w,A){if(!N)return;w.stopPropagation(),w.preventDefault(),w.target.setPointerCapture(w.pointerId),We();const G=N.getBoundingClientRect();$e={handle:A,startX:w.clientX,startY:w.clientY,startWidth:G.width,startHeight:G.height},Fn(N),document.addEventListener("pointermove",_t,!0),document.addEventListener("pointerup",Yt,!0)}function At(w){if(!$e)return{width:0,height:0};const A=Ie[$e.handle],G=w.clientX-$e.startX,Y=w.clientY-$e.startY,U=10;let oe=A.dx!==0?Math.max(U,$e.startWidth+G*A.dx):$e.startWidth,X=A.dy!==0?Math.max(U,$e.startHeight+Y*A.dy):$e.startHeight;const ae=A.dx!==0&&A.dy!==0,ce=N&&/^(IMG|VIDEO|PICTURE|CANVAS)$/i.test(N.tagName),he=N==null?void 0:N.hasAttribute("data-retune-aspect-locked"),Ce=ce||he,Ee=$e.startWidth>0&&$e.startHeight>0&&(Ce?!w.shiftKey:ae&&w.shiftKey);if(Ee){const xe=$e.startWidth/$e.startHeight;A.dx!==0&&A.dy!==0?oe/xe<X?X=oe/xe:oe=X*xe:A.dx!==0?X=oe/xe:oe=X*xe}return{width:Math.round(oe),height:Math.round(X),locked:Ee}}function _t(w){var xe,Qe;if(!$e||!N)return;w.preventDefault();const A=At(w),G=Ie[$e.handle];s.style.display=A.locked?"block":"none";const{width:Y,height:U,guides:oe,fillWidth:X,fillHeight:ae}=pn(A.width,A.height,G),ce=N,he=G.dx!==0||A.locked,Ce=G.dy!==0||A.locked;he&&((xe=t.onResizePreview)==null||xe.call(t,N,"width",X?"100%":`${Y}px`)),Ce&&((Qe=t.onResizePreview)==null||Qe.call(t,N,"height",ae?"100%":`${U}px`)),he&&ce.style.setProperty("width",X?"100%":`${Y}px`,"important"),Ce&&ce.style.setProperty("height",ae?"100%":`${U}px`,"important");const Ee=N.getBoundingClientRect();De(o,i,Ee,"solid","0"),Je(Ee),i.textContent=Te(N),oe.length>0?Bn(oe,Ee,$e.handle):rt(),P(),m()}function Yt(w){var Ee,xe;if(!$e||!N){$e=null;return}const A=At(w),G=Ie[$e.handle],{width:Y,height:U,fillWidth:oe,fillHeight:X}=pn(A.width,A.height,G),ae=N;rt(),mt=null,s.style.display="none";const ce=(G.dx!==0||A.locked)&&(oe||Math.abs(Y-$e.startWidth)>.5),he=(G.dy!==0||A.locked)&&(X||Math.abs(U-$e.startHeight)>.5);ce&&(ae.style.removeProperty("width"),(Ee=t.onResize)==null||Ee.call(t,N,"width",oe?"100%":`${Y}px`)),he&&(ae.style.removeProperty("height"),(xe=t.onResize)==null||xe.call(t,N,"height",X?"100%":`${U}px`)),$e=null,document.removeEventListener("pointermove",_t,!0),document.removeEventListener("pointerup",Yt,!0);const Ce=N.getBoundingClientRect();De(o,i,Ce,"solid","0"),Je(Ce),i.textContent=Te(N),P()}for(const w of ve)dt[w].addEventListener("pointerdown",A=>vt(A,w));let gt=null,Pt=null;function Mn(w){const A=getComputedStyle(w).position;return A==="absolute"||A==="fixed"}function Ur(){N&&Mn(N)?(o.style.pointerEvents="auto",o.style.cursor="move"):N&&fe(N)?(o.style.pointerEvents="auto",o.style.cursor="grab"):(o.style.pointerEvents="none",o.style.cursor="")}function $r(w){if(!N||!Mn(N))return;w.stopPropagation(),w.preventDefault(),o.setPointerCapture(w.pointerId),We(),o.style.display="none",i.style.display="none",St();const A=N,G=getComputedStyle(A);if(!gt){const Y=A.style.top,U=A.style.bottom,oe=A.style.left,X=A.style.right;let ae=!1,ce=!1;if(U!==""||Y!=="")ae=U!==""&&Y==="";else try{const he=[...document.styleSheets].flatMap(xe=>{try{return[...xe.cssRules]}catch{return[]}}).filter(xe=>xe instanceof CSSStyleRule),Ce=he.some(xe=>A.matches(xe.selectorText)&&xe.style.bottom&&xe.style.bottom!=="auto"),Ee=he.some(xe=>A.matches(xe.selectorText)&&xe.style.top&&xe.style.top!=="auto");Ce&&!Ee?ae=!0:!Ce&&Ee?ae=!1:ae=parseFloat(G.bottom)<parseFloat(G.top)}catch{ae=parseFloat(G.bottom)<parseFloat(G.top)}if(X!==""||oe!=="")ce=X!==""&&oe==="";else try{const he=[...document.styleSheets].flatMap(xe=>{try{return[...xe.cssRules]}catch{return[]}}).filter(xe=>xe instanceof CSSStyleRule),Ce=he.some(xe=>A.matches(xe.selectorText)&&xe.style.right&&xe.style.right!=="auto"),Ee=he.some(xe=>A.matches(xe.selectorText)&&xe.style.left&&xe.style.left!=="auto");Ce&&!Ee?ce=!0:!Ce&&Ee?ce=!1:ce=parseFloat(G.right)<parseFloat(G.left)}catch{ce=parseFloat(G.right)<parseFloat(G.left)}gt={useBottom:ae,useRight:ce}}Pt={startX:w.clientX,startY:w.clientY,startTop:parseFloat(G.top)||0,startLeft:parseFloat(G.left)||0,startRight:parseFloat(G.right)||0,startBottom:parseFloat(G.bottom)||0,startRect:N.getBoundingClientRect()},tn(N),document.addEventListener("pointermove",dr,!0),document.addEventListener("pointerup",Cr,!0)}function dr(w){var Ce,Ee,xe,Qe;if(!Pt||!N)return;w.preventDefault();const A=w.clientX-Pt.startX,G=w.clientY-Pt.startY,Y=N,U=Pt.startRect,oe=new DOMRect(U.left+A,U.top+G,U.width,U.height),X=be(oe),ae=X.dx,ce=X.dy;if(X.guides.length>0){const Ue=new DOMRect(oe.left+X.dx,oe.top+X.dy,oe.width,oe.height);Fe(X.guides,Ue)}else rt();if(gt!=null&&gt.useBottom){const Ue=Math.round(Pt.startBottom-G-ce);Y.style.setProperty("bottom",`${Ue}px`,"important"),(Ce=t.onRepositionPreview)==null||Ce.call(t,N,"bottom",`${Ue}px`)}else{const Ue=Math.round(Pt.startTop+G+ce);Y.style.setProperty("top",`${Ue}px`,"important"),(Ee=t.onRepositionPreview)==null||Ee.call(t,N,"top",`${Ue}px`)}if(gt!=null&&gt.useRight){const Ue=Math.round(Pt.startRight-A-ae);Y.style.setProperty("right",`${Ue}px`,"important"),(xe=t.onRepositionPreview)==null||xe.call(t,N,"right",`${Ue}px`)}else{const Ue=Math.round(Pt.startLeft+A+ae);Y.style.setProperty("left",`${Ue}px`,"important"),(Qe=t.onRepositionPreview)==null||Qe.call(t,N,"left",`${Ue}px`)}const he=N.parentElement;if(he&&he!==document.body&&he!==document.documentElement){const Ue=he.getBoundingClientRect();a.style.top=`${Ue.top}px`,a.style.left=`${Ue.left}px`,a.style.width=`${Ue.width}px`,a.style.height=`${Ue.height}px`}P()}function Cr(w){var Ce,Ee,xe,Qe;if(!Pt||!N){Pt=null;return}const A=w.clientX-Pt.startX,G=w.clientY-Pt.startY,Y=N,U=Pt.startRect,oe=new DOMRect(U.left+A,U.top+G,U.width,U.height),X=be(oe);gt!=null&&gt.useBottom?Y.style.removeProperty("bottom"):Y.style.removeProperty("top"),gt!=null&&gt.useRight?Y.style.removeProperty("right"):Y.style.removeProperty("left");const ae=G+X.dy,ce=A+X.dx;Math.abs(ae)>.5&&(gt!=null&&gt.useBottom?(Ce=t.onReposition)==null||Ce.call(t,N,"bottom",`${Math.round(Pt.startBottom-ae)}px`):(Ee=t.onReposition)==null||Ee.call(t,N,"top",`${Math.round(Pt.startTop+ae)}px`)),Math.abs(ce)>.5&&(gt!=null&&gt.useRight?(xe=t.onReposition)==null||xe.call(t,N,"right",`${Math.round(Pt.startRight-ce)}px`):(Qe=t.onReposition)==null||Qe.call(t,N,"left",`${Math.round(Pt.startLeft+ce)}px`)),Pt=null,lt=null,rt(),document.removeEventListener("pointermove",dr,!0),document.removeEventListener("pointerup",Cr,!0);const he=N.getBoundingClientRect();De(o,i,he,"solid","0"),Je(he),i.textContent=Te(N),P()}const fr=5;let sn=null,yn=!1,Se=null;function fe(w){const A=w.parentElement;if(!A)return null;const G=getComputedStyle(w).position;if(G==="absolute"||G==="fixed")return null;const Y=getComputedStyle(A).display,U=Y==="flex"||Y==="inline-flex",oe=Y==="grid"||Y==="inline-grid";if(!U&&!oe&&!(Y==="block"||Y==="inline-block"||Y==="flow-root"))return null;const ae=Array.from(A.children).filter(Ee=>{const xe=getComputedStyle(Ee);return!(xe.display==="none"||xe.visibility==="hidden"||xe.position==="absolute"||xe.position==="fixed")});if(ae.length<2||!ae.includes(w))return null;let ce;if(U){const Ee=getComputedStyle(A).flexDirection;ce=Ee==="row"||Ee==="row-reverse"}else if(oe)if(getComputedStyle(A).gridAutoFlow.startsWith("column"))ce=!1;else if(ae.length>=2){const xe=ae[0].getBoundingClientRect(),Qe=ae[1].getBoundingClientRect();ce=Math.abs(Qe.left-xe.left)>Math.abs(Qe.top-xe.top)}else ce=!0;else ce=!1;const he=[...ae].sort((Ee,xe)=>{const Qe=Ee.getBoundingClientRect(),Ue=xe.getBoundingClientRect();return ce?Qe.left-Ue.left:Qe.top-Ue.top}),Ce=he.indexOf(w);return Ce===-1?null:{parent:A,siblings:he,horizontal:ce,index:Ce}}function we(w,A,G,Y){var ae;const U=Se==null?void 0:Se.ghost;U&&(U.style.display="none"),G.style.visibility="";const oe=document.elementFromPoint(w,A);if(G.style.visibility="hidden",U&&(U.style.display=""),!oe||Yn(oe))return null;let X=oe;for(;X;){if(X===G){X=X.parentElement;continue}if(X===Y)return null;if(X===document.body||X===document.documentElement)break;const ce=getComputedStyle(X).display,he=ce==="flex"||ce==="inline-flex"||ce==="grid"||ce==="inline-grid"||ce==="block"||ce==="inline-block"||ce==="flow-root",Ce=X.tagName;if(new Set(["INPUT","IMG","BR","HR","AREA","BASE","COL","EMBED","LINK","META","PARAM","SOURCE","TRACK","WBR","TEXTAREA","SELECT"]).has(Ce)){X=X.parentElement;continue}const xe=ce==="flex"||ce==="inline-flex"||ce==="grid"||ce==="inline-grid";if(X.childElementCount===0&&(((ae=X.textContent)==null?void 0:ae.trim().length)??0)>0&&!xe){X=X.parentElement;continue}if(he&&!Be(G,X)){const Ue=Array.from(X.children).filter(Et=>{const Ht=getComputedStyle(Et);return Ht.display!=="none"&&Ht.visibility!=="hidden"}),bt=getComputedStyle(X).flexDirection,Ut=ce==="flex"||ce==="inline-flex"?bt==="row"||bt==="row-reverse":!1;let dn=Ue.length;for(let Et=0;Et<Ue.length;Et++){const Ht=Ue[Et].getBoundingClientRect(),ln=Ut?Ht.left+Ht.width/2:Ht.top+Ht.height/2;if((Ut?w:A)<ln){dn=Et;break}}return{target:X,insertIndex:dn,horizontal:Ut}}X=X.parentElement}return null}function Be(w,A){let G=A.parentElement;for(;G;){if(G===w)return!0;G=G.parentElement}return!1}function yt(w,A,G,Y){let U=Y.reparentHighlight;U||(U=document.createElement("div"),U.setAttribute("data-retune-drag-ghost",""),U.style.cssText=`
        position:fixed;pointer-events:none;z-index:2147483646;
        border:1px solid #0D99FF;
        background:rgba(13,153,255,0.04);
      `,document.body.appendChild(U),Y.reparentHighlight=U);const oe=w.getBoundingClientRect();U.style.left=`${oe.left}px`,U.style.top=`${oe.top}px`,U.style.width=`${oe.width}px`,U.style.height=`${oe.height}px`,U.style.display="block";let X=U.querySelector("[data-retune-reparent-line]");X||(X=document.createElement("div"),X.setAttribute("data-retune-reparent-line",""),X.style.cssText="position:absolute;background:#0D99FF;pointer-events:none;border-radius:1px;",U.appendChild(X));const ae=Math.max(3,Math.min(12,Math.round((G?oe.height:oe.width)*.03))),ce=Array.from(w.children).filter(he=>{const Ce=getComputedStyle(he);return Ce.display!=="none"&&Ce.visibility!=="hidden"});if(G){let he;if(ce.length===0)he=oe.left+4;else if(A<=0)he=ce[0].getBoundingClientRect().left;else if(A>=ce.length)he=ce[ce.length-1].getBoundingClientRect().right;else{const Ce=ce[A-1].getBoundingClientRect(),Ee=ce[A].getBoundingClientRect();he=(Ce.right+Ee.left)/2}X.style.left=`${he-oe.left-1}px`,X.style.top=`${ae}px`,X.style.width="2px",X.style.height=`${oe.height-ae*2}px`}else{let he;if(ce.length===0)he=oe.top+4;else if(A<=0)he=ce[0].getBoundingClientRect().top;else if(A>=ce.length)he=ce[ce.length-1].getBoundingClientRect().bottom;else{const Ce=ce[A-1].getBoundingClientRect(),Ee=ce[A].getBoundingClientRect();he=(Ce.bottom+Ee.top)/2}X.style.left=`${ae}px`,X.style.top=`${he-oe.top-1}px`,X.style.width=`${oe.width-ae*2}px`,X.style.height="2px"}}function It(w){w.reparentHighlight&&(w.reparentHighlight.style.display="none")}function Rt(w){if(!Se||!N)return;w.preventDefault();const A=w.clientX-Se.startX,G=w.clientY-Se.startY;if(!Se.active){if(Math.abs(A)+Math.abs(G)<fr)return;Se.active=!0,yn=!0,N!==Se.element&&(N=Se.element,t.onSelect(Se.element)),o.style.display="none",i.style.display="none",St();const X=Se.element,ae=Se.startRect;X.style.visibility="hidden",document.body.style.userSelect="none",document.body.style.webkitUserSelect="none";const ce=document.createElement("div");ce.setAttribute("data-retune-drag-ghost",""),ce.style.cssText=`
        position:fixed;pointer-events:none;z-index:2147483647;
        width:${ae.width}px;height:${ae.height}px;
        left:${ae.left}px;top:${ae.top}px;
        transition:none;overflow:hidden;opacity:0.85;
      `;const he=X.cloneNode(!0),Ce=getComputedStyle(X),Ee=["font-family","font-size","font-weight","font-style","line-height","letter-spacing","color","background-color","background-image","background","padding","border","border-radius","text-align","text-decoration","text-transform","white-space","word-break","overflow-wrap","display","flex-direction","align-items","justify-content","gap","box-shadow","opacity"];for(const bt of Ee)he.style.setProperty(bt,Ce.getPropertyValue(bt));he.style.visibility="visible",he.style.position="static",he.style.translate="none",he.style.transform="none",he.style.margin="0",he.style.width="100%",he.style.height="100%",he.style.boxSizing="border-box",ce.appendChild(he),document.body.appendChild(ce),Se.ghost=ce;const xe=Se.siblings.map(bt=>bt.getBoundingClientRect());Se.allRects=xe;const Qe=[],Ue=[];for(let bt=0;bt<xe.length;bt++)bt!==Se.dragIndex&&(Qe.push(xe[bt]),Ue.push(bt));Se.otherRects=Qe,Se.otherIndices=Ue;for(const bt of Ue)Se.siblings[bt].style.transition="transform 150ms ease-out";return}if(!Se.element.isConnected){hn();return}Se.ghost&&(Se.ghost.style.left=`${Se.startRect.left+A}px`,Se.ghost.style.top=`${Se.startRect.top+G}px`);const Y=Se.parent.getBoundingClientRect(),U=10;if(Se.mode==="reparent"?w.clientX>=Y.left&&w.clientX<=Y.right&&w.clientY>=Y.top&&w.clientY<=Y.bottom:w.clientX>=Y.left-U&&w.clientX<=Y.right+U&&w.clientY>=Y.top-U&&w.clientY<=Y.bottom+U){Se.mode==="reparent"&&(Se.mode="reorder",Se.reparentTarget=null,It(Se));const X=gb(w.clientX,w.clientY,Se.otherRects,Se.otherIndices,Se.horizontal,Se.dragIndex);if(X!==Se.dropIndex){Se.dropIndex=X;const{siblings:ae,dragIndex:ce,allRects:he,horizontal:Ce}=Se;let Ee;if(Ce)if(ce<he.length-1)Ee=he[ce+1].left-he[ce].left;else{const xe=ce>0?he[ce].left-he[ce-1].right:0;Ee=he[ce].width+xe}else if(ce<he.length-1)Ee=he[ce+1].top-he[ce].top;else{const xe=ce>0?he[ce].top-he[ce-1].bottom:0;Ee=he[ce].height+xe}for(let xe=0;xe<ae.length;xe++){if(xe===ce)continue;const Qe=ae[xe];let Ue=0;ce<X?xe>ce&&xe<X&&(Ue=-Ee):ce>X&&xe>=X&&xe<ce&&(Ue=Ee),Qe.style.transform=Ue!==0?Ce?`translateX(${Ue}px)`:`translateY(${Ue}px)`:""}}}else{Se.mode="reparent";for(let ae=0;ae<Se.siblings.length;ae++)ae!==Se.dragIndex&&(Se.siblings[ae].style.transform="");const X=we(w.clientX,w.clientY,Se.element,Se.parent);X?(Se.reparentTarget=X.target,Se.reparentIndex=X.insertIndex,yt(X.target,X.insertIndex,X.horizontal,Se)):(Se.reparentTarget=null,It(Se))}}function pt(w){var ce,he;if(document.removeEventListener("pointermove",Rt,!0),document.removeEventListener("pointerup",pt,!0),!Se)return;const{element:A,dragIndex:G,dropIndex:Y,active:U,mode:oe,reparentTarget:X,reparentIndex:ae}=Se;if(U&&oe==="reparent"&&X)hn(),(ce=t.onCanvasReparent)==null||ce.call(t,A,X,ae),yn=!1,N&&Lt();else if(U&&oe==="reorder"&&!mb(G,Y))hn(),(he=t.onCanvasReorder)==null||he.call(t,A,G,Y),yn=!1,N&&Lt();else if(U)hn(),yn=!1,N&&Lt();else{hn(),yn=!1;const Ce=w.clientX,Ee=w.clientY,xe=A;sn&&clearTimeout(sn),sn=setTimeout(()=>{sn=null,o.style.display="none",i.style.display="none",St();const Qe=document.elementFromPoint(Ce,Ee);Qe&&Qe!==xe&&!Qe.hasAttribute("data-retune-host")?(N=Qe,re=!1,k&&(k.disconnect(),k.observe(Qe)),Lt(),We(),W=null,t.onSelect(Qe)):(o.style.display="",i.style.display="",Lt())},200)}}function hn(){var A,G;if(!Se)return;Se.ghost&&Se.ghost.remove(),Se.reparentHighlight&&Se.reparentHighlight.remove(),document.body.style.removeProperty("user-select"),document.body.style.removeProperty("-webkit-user-select");const w=Se.element;w.style.removeProperty("visibility"),((A=w.getAttribute("style"))==null?void 0:A.trim())===""&&w.removeAttribute("style");for(let Y=0;Y<Se.siblings.length;Y++){if(Y===Se.dragIndex)continue;const U=Se.siblings[Y];U.style.transition="none",U.style.removeProperty("transform"),U.style.removeProperty("transition"),((G=U.getAttribute("style"))==null?void 0:G.trim())===""&&U.removeAttribute("style")}Se=null}o.addEventListener("pointerdown",w=>{if(!N)return;if(Mn(N)){$r(w);return}const A=fe(N);if(!A)return;w.preventDefault();const G=N.getBoundingClientRect();Se={element:N,parent:A.parent,siblings:A.siblings,otherRects:[],otherIndices:[],dragIndex:A.index,dropIndex:A.index,horizontal:A.horizontal,startX:w.clientX,startY:w.clientY,startRect:G,active:!1,ghost:null,mode:"reorder",reparentTarget:null,reparentIndex:0,reparentHighlight:null},document.addEventListener("pointermove",Rt,!0),document.addEventListener("pointerup",pt,!0)}),o.addEventListener("dblclick",w=>{var G;if(!N)return;w.preventDefault(),w.stopPropagation(),sn&&(clearTimeout(sn),sn=null),o.style.display="none",i.style.display="none",St();const A=document.elementFromPoint(w.clientX,w.clientY);o.style.display="",i.style.display="",Lt(),(G=t.onDoubleClick)==null||G.call(t,A||N)});const qe=document.createElement("div");qe.style.cssText="position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:2147483646;",e.appendChild(qe);const O="position:fixed;pointer-events:none;display:none;",V=`
    position:fixed;pointer-events:none;display:none;
    font-size:10px;font-weight:500;
    font-family:InterVariable,Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;
    color:#fff;white-space:nowrap;
    background:var(--retune-red);padding:1px 4px;border-radius:2px;
  `;function Q(){const w=document.createElement("div");w.style.cssText=O;const A=document.createElement("div");A.style.cssText=O;const G=document.createElement("div");return G.style.cssText=V,qe.appendChild(w),qe.appendChild(A),qe.appendChild(G),{line:w,connector:A,label:G}}const pe=Q(),ke=Q(),Ne={top:Q(),right:Q(),bottom:Q(),left:Q()};function Ye(){for(const w of[pe,ke])w.line.style.display="none",w.connector.style.display="none",w.label.style.display="none";for(const w of Object.values(Ne))w.line.style.display="none",w.connector.style.display="none",w.label.style.display="none"}function Le(w,A,G,Y,U,oe=!0){w.style.cssText=`
      position:fixed;pointer-events:none;display:block;
      top:${G}px;left:${A}px;
      width:${U?Y:0}px;height:${U?0:Y}px;
      border-${U?"top":"left"}:1px ${oe?"dashed":"solid"} var(--retune-red);
    `}function Me(w,A,G,Y,U,oe){w.style.cssText=V,w.style.display="block",w.textContent=`${A}`,oe?(w.style.top=`${Y-4}px`,w.style.left=`${G+U/2}px`,w.style.transform="translate(-50%, -100%)"):(w.style.top=`${Y+U/2}px`,w.style.left=`${G+4}px`,w.style.transform="translateY(-50%)")}function Pe(w,A){Ye();const G=A.left+A.width/2>w.left+w.width/2,Y=A.top+A.height/2>w.top+w.height/2,U=G?w.right:w.left,oe=Y?w.bottom:w.top,X=G?A.left:A.right,ae=Y?A.top:A.bottom,ce=G?A.left-w.right:w.left-A.right,he=Y?A.top-w.bottom:w.top-A.bottom,Ce=ce>0?Math.round(ce):0,Ee=he>0?Math.round(he):0;if(!(Ce<=0&&Ee<=0)){if(Ce>0){const xe=U,Qe=w.top+w.height/2,Ue=Math.min(xe,X);if(Le(pe.line,Ue,Qe,Ce,!0,!1),Me(pe.label,Ce,Ue,Qe,Ce,!0),Qe>=A.top&&Qe<=A.bottom)pe.connector.style.display="none";else{const bt=Y?A.top:A.bottom,Ut=Math.min(Qe,bt);Le(pe.connector,X,Ut,Math.abs(bt-Qe),!1)}}if(Ee>0){const xe=w.left+w.width/2,Ue=Math.min(oe,ae);if(Le(ke.line,xe,Ue,Ee,!1,!1),Me(ke.label,Ee,xe,Ue,Ee,!1),xe>=A.left&&xe<=A.right)ke.connector.style.display="none";else{const bt=G?A.left:A.right,Ut=Math.min(xe,bt);Le(ke.connector,Ut,ae,Math.abs(bt-xe),!0)}}}}function Ve(w,A){Ye();const G=getComputedStyle(A),Y=A.getBoundingClientRect(),U=parseFloat(G.borderTopWidth)||0,oe=parseFloat(G.borderRightWidth)||0,X=parseFloat(G.borderBottomWidth)||0,ae=parseFloat(G.borderLeftWidth)||0,ce=Y.top+U,he=Y.right-oe,Ce=Y.bottom-X,Ee=Y.left+ae,xe=Math.round(w.top-ce),Qe=Math.round(he-w.right),Ue=Math.round(Ce-w.bottom),bt=Math.round(w.left-Ee),Ut=w.left+w.width/2,dn=w.top+w.height/2;xe>0&&(Le(Ne.top.line,Ut,ce,xe,!1,!1),Me(Ne.top.label,xe,Ut,ce,xe,!1),Ne.top.connector.style.display="none"),Ue>0&&(Le(Ne.bottom.line,Ut,w.bottom,Ue,!1,!1),Me(Ne.bottom.label,Ue,Ut,w.bottom,Ue,!1),Ne.bottom.connector.style.display="none"),bt>0&&(Le(Ne.left.line,Ee,dn,bt,!0,!1),Me(Ne.left.label,bt,Ee,dn,bt,!0),Ne.left.connector.style.display="none"),Qe>0&&(Le(Ne.right.line,w.right,dn,Qe,!0,!1),Me(Ne.right.label,Qe,w.right,dn,Qe,!0),Ne.right.connector.style.display="none")}function De(w,A,G,Y,U){w.style.top=`${G.top}px`,w.style.left=`${G.left}px`,w.style.width=`${G.width}px`,w.style.height=`${G.height}px`,w.style.border=`1px ${Y} #0D99FF`,w.style.background=`rgba(13, 153, 255, ${U})`,w.style.display="";const oe=window.innerHeight,X=G.bottom+4+20<oe?G.bottom+4:G.top-24;A.style.top=`${X}px`,A.style.left=`${G.left+G.width/2}px`,A.style.transform="translateX(-50%)",A.style.background="#0D99FF"}function at(w){const A=w.getBoundingClientRect();De(n,r,A,"solid","0"),r.style.display="none"}function Lt(){if(!N||yn)return;const w=N.getBoundingClientRect();if(De(o,i,w,"solid","0"),z={top:w.top,left:w.left,width:w.width,height:w.height},T){i.style.display="none",o.style.pointerEvents="none";return}re||(i.style.display=""),i.textContent=Te(N),Je(w),Ur();const A=N.parentElement;if(A&&A!==document.body&&A!==document.documentElement){const G=A.getBoundingClientRect();a.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        border:1px dotted #0D99FF;background:none;
        top:${G.top}px;left:${G.left}px;width:${G.width}px;height:${G.height}px;
      `;const Y=g(N);E=Y,Y.top||Y.right||Y.bottom||Y.left?C(w,G,Y):S()}else a.style.display="none",E=null,S();m()}function $t(){if(!N||Se!=null&&Se.active)return;const w=N.getBoundingClientRect();if(w.top===z.top&&w.left===z.left&&w.width===z.width&&w.height===z.height||(o.style.top=`${w.top}px`,o.style.left=`${w.left}px`,o.style.width=`${w.width}px`,o.style.height=`${w.height}px`,z={top:w.top,left:w.left,width:w.width,height:w.height},T))return;const A=window.innerHeight,G=w.bottom+4+20<A?w.bottom+4:w.top-24;i.style.top=`${G}px`,i.style.left=`${w.left+w.width/2}px`,i.style.transform="translateX(-50%)",i.textContent=Te(N),Je(w);const Y=N.parentElement;if(Y&&Y!==document.body&&Y!==document.documentElement&&a.style.display!=="none"){const U=Y.getBoundingClientRect();a.style.top=`${U.top}px`,a.style.left=`${U.left}px`,a.style.width=`${U.width}px`,a.style.height=`${U.height}px`;const oe=g(N);(oe.top||oe.right||oe.bottom||oe.left)&&C(w,U,oe)}}function Te(w){const A=w.getBoundingClientRect();return vb(A.width,A.height)}function We(){n.style.display="none",r.style.display="none",Ye(),d()}function Vt(){o.style.display="none",i.style.display="none",o.style.pointerEvents="none",o.style.cursor="",a.style.display="none",S(),E=null,gt=null,St()}function nn(){D===null&&(D=requestAnimationFrame(()=>{D=null,$t()}))}function gn(){nn(),m(),W&&(W=null,We())}function Xn(){window.addEventListener("scroll",gn,{capture:!0,passive:!0}),window.addEventListener("resize",nn,{passive:!0}),k=new ResizeObserver(nn),N&&k.observe(N),$t()}function _r(){D!==null&&(cancelAnimationFrame(D),D=null),window.removeEventListener("scroll",gn,!0),window.removeEventListener("resize",nn),k==null||k.disconnect(),k=null}function Yn(w){return!!w.closest("[data-retune-host]")||!!w.closest("[data-retune-drag-ghost]")}const Rn=new Set(["BR","WBR","COL","COLGROUP","SOURCE","TRACK","AREA","PARAM"]);function Gn(w){let A=w;for(;A&&Rn.has(A.tagName);)A=A.parentElement;return A}function Vn(w,A=!1){W=w,w===N?(We(),Ye(),d(),re=!1,i.style.display=""):(at(w),N?w.contains(N)?(A?Ve(N.getBoundingClientRect(),w):Ye(),u(w,N)):(A?Pe(N.getBoundingClientRect(),w.getBoundingClientRect()):Ye(),p(w)):p(w)),t.onHover(w,w.getBoundingClientRect())}function xt(w){if(!b||T||Pt||$e||Se)return;const A=e.elementFromPoint(w.clientX,w.clientY);if(A&&A.getRootNode()===e&&!(A===o||A===i||A===n||A===r||A===a)){W&&(W=null,We());return}const G=o.style.pointerEvents;o.style.pointerEvents="none";const Y=document.elementFromPoint(w.clientX,w.clientY);if(o.style.pointerEvents=G,!Y||Yn(Y))return;const U=Gn(Y);!U||Yn(U)||U!==W&&(M&&(clearTimeout(M),M=null),W&&U.contains(W)?M=setTimeout(()=>{M=null,document.elementFromPoint(w.clientX,w.clientY)===U&&Vn(U,w.altKey)},50):Vn(U,w.altKey))}function Bt(w,A){const G=document.elementsFromPoint(w,A),Y=[];for(const U of G){if(Yn(U))continue;const oe=Gn(U);if(!(!oe||Yn(oe))&&!(Y.length>0&&Y[Y.length-1]===oe)){if(oe===document.documentElement)break;Y.push(oe)}}return Y}function pr(w){var ce;if(!b)return;const A=w.composedPath(),G=e.host;if(A.includes(G))return;const Y=e.elementFromPoint(w.clientX,w.clientY);if(Y&&Y.getRootNode()===e&&getComputedStyle(Y).pointerEvents!=="none")return;if((ce=t.shouldBlockClick)!=null&&ce.call(t)){w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation();return}w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation();const{clientX:U,clientY:oe}=w;if(Math.abs(U-B.x)<=se&&Math.abs(oe-B.y)<=se&&ee.length>1?(ee=Bt(U,oe),ee.length<=1?H=0:H=(H+1)%ee.length):(ee=Bt(U,oe),H=0,B={x:U,y:oe}),ee.length===0)return;const ae=ee[H];if(Qi){We(),W=null,t.onSelect(ae);return}N=ae,re=!1,k&&(k.disconnect(),k.observe(ae)),Lt(),We(),W=null,t.onSelect(ae)}function rr(w){var oe;if(!b||!N)return;const A=w.composedPath(),G=e.host;if(A.includes(G))return;w.preventDefault(),w.stopPropagation(),sn&&(clearTimeout(sn),sn=null);const Y=o.style.display;o.style.display="none",i.style.display="none",St();const U=document.elementFromPoint(w.clientX,w.clientY);o.style.display=Y,i.style.display="",N&&Lt(),(oe=t.onDoubleClick)==null||oe.call(t,U||N)}function zt(w){if(b){if(w.key==="Escape"){if(e.querySelector(".retune-floating-dialog")||e.querySelector(".retune-comment-popover")||Qi)return;w.preventDefault(),w.stopPropagation(),t.onCancel()}w.key==="Alt"&&W&&N&&Vn(W,!0)}}function Gt(w){b&&w.key==="Alt"&&W&&N&&Vn(W,!1)}const mn=document.createElement("style");mn.setAttribute("data-retune-cursor","");function Pr(){b=!0,mn.textContent="* { cursor: default !important; }",document.head.appendChild(mn),document.addEventListener("mousemove",xt,!0),document.addEventListener("click",pr,!0),document.addEventListener("dblclick",rr,!0),document.addEventListener("keydown",zt,!0),document.addEventListener("keyup",Gt,!0),Xn()}function Gi(){b=!1,mn.textContent="",mn.remove(),W=null,N=null,re=!1,ee=[],H=-1,M&&(clearTimeout(M),M=null),We(),Vt(),R(),_r(),document.removeEventListener("mousemove",xt,!0),document.removeEventListener("click",pr,!0),document.removeEventListener("dblclick",rr,!0),document.removeEventListener("keydown",zt,!0),document.removeEventListener("keyup",Gt,!0)}function Ki(){N=null,re=!1,ee=[],H=-1,Vt(),R()}function Po(){Gi(),n.remove(),r.remove(),o.remove(),i.remove(),qe.remove(),a.remove();for(const w of Object.values(y))w.remove();for(const w of st)w.line.remove(),w.label.remove();for(const w of ve)dt[w].remove()}function qi(w){N=w,re=!1,k&&(k.disconnect(),k.observe(w)),Lt(),We(),W=null,t.onSelect(w)}function Io(w){w?at(w):We()}function fc(){T=!0,We(),i.style.display="none",o.style.pointerEvents="none",o.style.cursor="",a.style.display="none",S(),St(),mn.textContent=""}function pc(){T=!1,mn.textContent="* { cursor: default !important; }",N&&Lt()}function hc(w){if(E=w,!N)return;const A=N.getBoundingClientRect(),G=N.parentElement;if(!G||G===document.body||G===document.documentElement)return;const Y=G.getBoundingClientRect();w.top||w.right||w.bottom||w.left?C(A,Y,w):S()}const gc=`url("data:image/svg+xml;base64,${typeof btoa=="function"?btoa('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><defs><filter id="s" x="2" y="8" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="a"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="b"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/><feBlend in2="a" result="c"/><feBlend in="SourceGraphic" in2="c" result="d"/></filter></defs><g filter="url(#s)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18.5C5 13.8056 8.80558 10 13.5 10C18.1944 10 22 13.8056 22 18.5C22 23.1944 18.1944 27 13.5 27H7.5C6.11929 27 5 25.8807 5 24.5V18.5Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M6 18.5C6 14.3579 9.35786 11 13.5 11C17.6421 11 21 14.3579 21 18.5C21 22.6421 17.6421 26 13.5 26H7.5C6.67157 26 6 25.3284 6 24.5V18.5ZM13.5 25H7.5C7.22386 25 7 24.7761 7 24.5V18.5C7 14.9101 9.91015 12 13.5 12C17.0899 12 20 14.9101 20 18.5C20 22.0899 17.0899 25 13.5 25Z" fill="black"/></svg>'):""}") 5 27, pointer`;let Qi=!1;function mc(w){Qi=w,w?(Ki(),mn.textContent=`* { cursor: ${gc} !important; }`):b&&(mn.textContent="* { cursor: default !important; }")}return{activate:Pr,deactivate:Gi,destroy:Po,hideHighlight:We,clearSelection:Ki,selectElement:qi,highlightElement:Io,refreshSelection:Lt,updatePinLines:hc,suspend:fc,resume:pc,showScopeHighlights:x,hideScopeHighlights:R,setCommentMode:mc}}var yb=class{constructor(){Qt(this,"listeners",new Map);Qt(this,"_active",!1)}get active(){return this._active}start(){this._active=!0}end(){this._active=!1,this.listeners.forEach((e,t)=>this.notify(t,""))}set(e,t){this.notify(e,t)}subscribe(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{const n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}}notify(e,t){const n=this.listeners.get(e);if(n)for(const r of n)r(t)}},k0=h.createContext(null);function bb(){return h.useContext(k0)}var wb=class{constructor(){Qt(this,"sheet");Qt(this,"rules",[]);Qt(this,"attached",!1);this.sheet=new CSSStyleSheet}attach(){this.attached||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,this.sheet],this.attached=!0)}detach(){this.attached&&(document.adoptedStyleSheets=document.adoptedStyleSheets.filter(e=>e!==this.sheet),this.attached=!1)}applyChange(e,t,n,r){this.removeChange(e,t,r);const o=ro(t),i=`${e} { ${o}: ${n} !important; }`,s=r?`@media (max-width: ${r}) { ${i} }`:i;try{const a=this.sheet.insertRule(s,this.sheet.cssRules.length);this.rules.push({selector:e,property:t,value:n,index:a,breakpoint:r||null})}catch{}}removeChange(e,t,n){const r=n||null,o=this.rules.findIndex(i=>i.selector===e&&i.property===t&&(i.breakpoint||null)===r);o!==-1&&this.rebuildSheet(this.rules.filter((i,s)=>s!==o))}removeAllChanges(e){this.rebuildSheet(this.rules.filter(t=>t.selector!==e))}clearAll(){this.sheet.replaceSync(""),this.rules=[]}getChanges(){return this.rules}migrateChanges(e,t){const n=this.rules.filter(r=>r.selector===e);if(n.length!==0){for(const r of n)this.applyChange(t,r.property,r.value,r.breakpoint);for(const r of n)this.removeChange(e,r.property,r.breakpoint)}}rebuildSheet(e){this.sheet.replaceSync(""),this.rules=[];for(const t of e)this.applyChange(t.selector,t.property,t.value,t.breakpoint)}destroy(){this.detach(),this.clearAll()}},Cb=300,vo,kb=(vo=class{constructor(){Qt(this,"tracked",new Map);Qt(this,"undoStack",[]);Qt(this,"redoStack",[]);Qt(this,"lastChange",null);Qt(this,"groupCounter",0)}track(t,n,r,o,i,s,a,c,u,p,d,f,v,x,m,R,y){if(!this.tracked.has(t))this.tracked.set(t,{selector:t,tagName:n,textContent:r,classes:o,reactComponents:i,originalStyles:{...s},currentStyles:{...s},originalProps:y?{...y}:void 0,currentProps:y?{...y}:void 0,sourceFile:a,stylingApproach:c,inlineStyles:u,elementId:p,accessibleName:d,parentContext:f,childSummary:v,domPath:x,nearbySiblings:m,position:R});else if(y){const g=this.tracked.get(t);g.originalProps||(g.originalProps={...y},g.currentProps={...y})}}recordPropChange(t,n,r){const o=this.tracked.get(t);!o||!o.currentProps||(o.currentProps[n]=r,this.persist())}isPropChanged(t,n){const r=this.tracked.get(t);return!(r!=null&&r.originalProps)||!(r!=null&&r.currentProps)?!1:r.originalProps[n]!==r.currentProps[n]}resetProp(t,n){const r=this.tracked.get(t);if(!(r!=null&&r.originalProps)||!(r!=null&&r.currentProps))return;const o=r.originalProps[n];return r.currentProps[n]=o,this.persist(),o}recordAttributeChange(t,n,r,o){const i=this.tracked.get(t);i&&(i.originalAttrs||(i.originalAttrs={}),i.currentAttrs||(i.currentAttrs={}),n in i.originalAttrs||(i.originalAttrs[n]=r),i.currentAttrs[n]=o,this.persist())}ensureOriginalValue(t,n,r){const o=this.tracked.get(t);o&&!(n in o.originalStyles)&&(o.originalStyles[n]=r,o.currentStyles[n]=r)}recordChange(t,n,r,o){var v,x;const i=this.tracked.get(t);if(!i)return null;const s=o||null;let a;if(s){i.breakpointStyles||(i.breakpointStyles=new Map);let m=i.breakpointStyles.get(s);if(m||(m={original:{...i.currentStyles},current:{...i.currentStyles}},i.breakpointStyles.set(s,m)),a=m.current[n]||"",a===r)return null;m.current[n]=r}else{if(a=i.currentStyles[n]||"",a===r)return null;i.currentStyles[n]=r}const c=n.replace(/-([a-z])/g,(m,R)=>R.toUpperCase()),u=((v=i.variableAssociations)==null?void 0:v[c])??null,p=((x=i.unlinkedVariables)==null?void 0:x.has(c))??!1,d=Date.now(),f=this.lastChange;return f&&f.selector===t&&d-f.time<Cb?(this.findInGroup(f.group,n)!==-1||this.undoStack.push({selector:t,property:n,value:a,group:f.group,breakpoint:s,prevVariableAssoc:u,prevUnlinked:p}),f.time=d):(this.groupCounter++,this.undoStack.push({selector:t,property:n,value:a,group:this.groupCounter,breakpoint:s,prevVariableAssoc:u,prevUnlinked:p}),this.lastChange={selector:t,time:d,group:this.groupCounter}),this.redoStack=[],{from:a,to:r}}recordChangeSilent(t,n,r){const o=this.tracked.get(t);o&&(o.currentStyles[n]=r)}trackBreakpoint(t,n,r){const o=this.tracked.get(t);o&&(o.breakpointStyles||(o.breakpointStyles=new Map),!o.breakpointStyles.has(n)&&o.breakpointStyles.set(n,{original:{...r},current:{...r}}))}findInGroup(t,n){for(let r=this.undoStack.length-1;r>=0&&this.undoStack[r].group===t;r--)if(this.undoStack[r].property===n)return r;return-1}popUndo(){var i,s,a,c,u,p;if(this.undoStack.length===0)return null;const n=this.undoStack[this.undoStack.length-1].group,r=[];for(;this.undoStack.length>0&&this.undoStack[this.undoStack.length-1].group===n;)r.push(this.undoStack.pop());const o=++this.groupCounter;for(const d of r){const f=this.tracked.get(d.selector);if(f)if(d.action==="unlink")(i=f.unlinkedVariables)==null||i.delete(d.property),d.variableRef&&(f.variableAssociations||(f.variableAssociations={}),f.variableAssociations[d.property]=d.variableRef),this.redoStack.push({selector:d.selector,property:d.property,value:"",group:o,breakpoint:d.breakpoint,action:"unlink",variableRef:d.variableRef});else{const v=d.breakpoint?(a=(s=f.breakpointStyles)==null?void 0:s.get(d.breakpoint))==null?void 0:a.current:f.currentStyles;if(!v)continue;const x=v[d.property]||"",m=d.property.replace(/-([a-z])/g,(g,C)=>C.toUpperCase()),R=((c=f.variableAssociations)==null?void 0:c[m])??null,y=((u=f.unlinkedVariables)==null?void 0:u.has(m))??!1;this.redoStack.push({selector:d.selector,property:d.property,value:x,group:o,breakpoint:d.breakpoint,prevVariableAssoc:R,prevUnlinked:y}),v[d.property]=d.value,d.prevVariableAssoc!==void 0&&(d.prevVariableAssoc?(f.variableAssociations||(f.variableAssociations={}),f.variableAssociations[m]=d.prevVariableAssoc):f.variableAssociations&&delete f.variableAssociations[m]),d.prevUnlinked!==void 0&&(d.prevUnlinked?(f.unlinkedVariables||(f.unlinkedVariables=new Set),f.unlinkedVariables.add(m)):(p=f.unlinkedVariables)==null||p.delete(m))}}return this.persist(),r}popRedo(){var i,s,a,c,u;if(this.redoStack.length===0)return null;const n=this.redoStack[this.redoStack.length-1].group,r=[];for(;this.redoStack.length>0&&this.redoStack[this.redoStack.length-1].group===n;)r.push(this.redoStack.pop());const o=++this.groupCounter;for(const p of r){const d=this.tracked.get(p.selector);if(d)if(p.action==="unlink")d.unlinkedVariables||(d.unlinkedVariables=new Set),d.unlinkedVariables.add(p.property),d.variableAssociations&&delete d.variableAssociations[p.property],this.undoStack.push({selector:p.selector,property:p.property,value:"",group:o,breakpoint:p.breakpoint,action:"unlink",variableRef:p.variableRef});else{const f=p.breakpoint?(s=(i=d.breakpointStyles)==null?void 0:i.get(p.breakpoint))==null?void 0:s.current:d.currentStyles;if(!f)continue;const v=f[p.property]||"",x=p.property.replace(/-([a-z])/g,(y,g)=>g.toUpperCase()),m=((a=d.variableAssociations)==null?void 0:a[x])??null,R=((c=d.unlinkedVariables)==null?void 0:c.has(x))??!1;this.undoStack.push({selector:p.selector,property:p.property,value:v,group:o,breakpoint:p.breakpoint,prevVariableAssoc:m,prevUnlinked:R}),f[p.property]=p.value,p.prevVariableAssoc!==void 0&&(p.prevVariableAssoc?(d.variableAssociations||(d.variableAssociations={}),d.variableAssociations[x]=p.prevVariableAssoc):d.variableAssociations&&delete d.variableAssociations[x]),p.prevUnlinked!==void 0&&(p.prevUnlinked?(d.unlinkedVariables||(d.unlinkedVariables=new Set),d.unlinkedVariables.add(x)):(u=d.unlinkedVariables)==null||u.delete(x))}}return this.persist(),r}getPendingChanges(){const t=[];for(const n of this.tracked.values()){const r=[];for(const[c,u]of Object.entries(n.currentStyles)){const p=n.originalStyles[c]||"";u!==p&&r.push({property:c,from:p,to:u})}if(n.breakpointStyles)for(const[c,u]of n.breakpointStyles)for(const[p,d]of Object.entries(u.current)){const f=u.original[p]||"";d!==f&&r.push({property:p,from:f,to:d,breakpoint:c})}const o=[];if(n.originalProps&&n.currentProps)for(const[c,u]of Object.entries(n.currentProps)){const p=n.originalProps[c];u!==p&&o.push({prop:c,from:p,to:u})}const i=[];if(n.originalAttrs&&n.currentAttrs)for(const[c,u]of Object.entries(n.currentAttrs)){const p=n.originalAttrs[c]||"";u!==p&&i.push({attr:c,from:p,to:u})}const s=n.unlinkedVariables?Array.from(n.unlinkedVariables).map(c=>({property:c,value:n.currentStyles[c]||""})):[];if(r.length>0||s.length>0||o.length>0||i.length>0){const c={selector:n.selector,tagName:n.tagName,textContent:n.textContent,classes:n.classes,reactComponents:n.reactComponents,changes:r,timestamp:Date.now(),sourceFile:n.sourceFile,stylingApproach:n.stylingApproach,inlineStyles:n.inlineStyles,elementId:n.elementId,accessibleName:n.accessibleName,parentContext:n.parentContext,childSummary:n.childSummary,domPath:n.domPath,nearbySiblings:n.nearbySiblings,position:n.position};n.variableAssociations&&Object.keys(n.variableAssociations).length>0&&(c.variableAssociations=n.variableAssociations),s.length>0&&(c.unlinkedProperties=s),o.length>0&&(c.propChanges=o),i.length>0&&(c.attributeChanges=i),t.push(c)}}return t}hasPendingChanges(){return this.getPendingChanges().length>0}migrateChanges(t,n){const r=this.tracked.get(t),o=this.tracked.get(n);if(!r||!o)return[];const i=[];for(const[s,a]of Object.entries(r.currentStyles)){const c=r.originalStyles[s]||"";a!==c&&(i.push({property:s,value:a}),o.currentStyles[s]=a,r.currentStyles[s]=c)}if(r.variableAssociations){o.variableAssociations||(o.variableAssociations={});for(const{property:s}of i){const a=s.replace(/-([a-z])/g,(c,u)=>u.toUpperCase());r.variableAssociations[a]&&(o.variableAssociations[a]=r.variableAssociations[a],delete r.variableAssociations[a]),r.variableAssociations[s]&&(o.variableAssociations[s]=r.variableAssociations[s],delete r.variableAssociations[s])}}return this.undoStack=[],this.redoStack=[],i}setVariableAssociation(t,n,r){const o=this.tracked.get(t);if(o){o.variableAssociations||(o.variableAssociations={});for(const i of n)o.variableAssociations[i]=r}}clearVariableAssociation(t,n){const r=this.tracked.get(t);if(r!=null&&r.variableAssociations)for(const o of n)delete r.variableAssociations[o]}unlinkVariable(t,n){const r=this.tracked.get(t);if(r){if(r.variableAssociations)for(const o of n)delete r.variableAssociations[o];r.unlinkedVariables||(r.unlinkedVariables=new Set);for(const o of n)r.unlinkedVariables.add(o)}}recordUnlink(t,n){var i;const r=this.tracked.get(t);if(!r)return;const o={};for(const s of n)o[s]=(i=r.variableAssociations)==null?void 0:i[s];this.unlinkVariable(t,n),this.groupCounter++;for(const s of n)this.undoStack.push({selector:t,property:s,value:"",group:this.groupCounter,action:"unlink",variableRef:o[s]});this.lastChange=null,this.redoStack=[]}isVariableUnlinked(t,n){var r,o;return((o=(r=this.tracked.get(t))==null?void 0:r.unlinkedVariables)==null?void 0:o.has(n))??!1}getUnlinkedVariables(t){var n;return((n=this.tracked.get(t))==null?void 0:n.unlinkedVariables)??new Set}relinkVariable(t,n){const r=this.tracked.get(t);if(r!=null&&r.unlinkedVariables)for(const o of n)r.unlinkedVariables.delete(o)}getVariableAssociation(t,n){var r,o;return(o=(r=this.tracked.get(t))==null?void 0:r.variableAssociations)==null?void 0:o[n]}getVariableAssociations(t){var n;return(n=this.tracked.get(t))==null?void 0:n.variableAssociations}isPropertyChanged(t,n){var s;const r=this.tracked.get(t);if(!r)return!1;if((s=r.unlinkedVariables)!=null&&s.has(n))return!0;const o=r.originalStyles[n]||"",i=r.currentStyles[n]||"";return o!==i}getChangedProperties(t){const n=new Set,r=this.tracked.get(t);if(!r)return n;for(const[o,i]of Object.entries(r.currentStyles)){const s=r.originalStyles[o]||"";i!==s&&n.add(o)}if(r.unlinkedVariables)for(const o of r.unlinkedVariables)n.add(o);return n}silentRevert(t,n){const r=this.tracked.get(t);if(!r)return;const o=r.originalStyles[n]||"";r.currentStyles[n]=o}removeProperty(t,n){const r=this.tracked.get(t);r&&(delete r.originalStyles[n],delete r.currentStyles[n])}resetProperty(t,n){var p,d,f,v,x;const r=this.tracked.get(t);if(!r)return null;const o=r.currentStyles[n]||"",i=r.originalStyles[n]||"",s=((p=r.unlinkedVariables)==null?void 0:p.has(n))??!1;if(o===i&&!s)return null;r.currentStyles[n]=i;const a=n.replace(/-([a-z])/g,(m,R)=>R.toUpperCase()),c=((d=r.variableAssociations)==null?void 0:d[a])??((f=r.variableAssociations)==null?void 0:f[n])??null,u=((v=r.unlinkedVariables)==null?void 0:v.has(a))||((x=r.unlinkedVariables)==null?void 0:x.has(n))||!1;return this.groupCounter++,this.undoStack.push({selector:t,property:n,value:o,group:this.groupCounter,prevVariableAssoc:c,prevUnlinked:u}),this.lastChange=null,this.redoStack=[],r.variableAssociations&&(delete r.variableAssociations[a],delete r.variableAssociations[n]),r.unlinkedVariables&&(r.unlinkedVariables.delete(n),r.unlinkedVariables.delete(a)),this.persist(),{from:o,to:i}}breakCoalescing(){this.lastChange=null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}clear(){this.tracked.clear(),this.undoStack=[],this.redoStack=[],this.persist()}persist(){try{const n={tracked:Array.from(this.tracked.entries()).map(([r,o])=>[r,{...o,unlinkedVariables:o.unlinkedVariables?Array.from(o.unlinkedVariables):void 0,breakpointStyles:o.breakpointStyles?Array.from(o.breakpointStyles.entries()):void 0}]),undoStack:this.undoStack,redoStack:this.redoStack};localStorage.setItem(vo.STORAGE_KEY,JSON.stringify(n))}catch{}}restore(){try{const t=localStorage.getItem(vo.STORAGE_KEY);if(!t)return!1;const n=JSON.parse(t);this.tracked=new Map(n.tracked);for(const r of this.tracked.values())r.unlinkedVariables&&Array.isArray(r.unlinkedVariables)&&(r.unlinkedVariables=new Set(r.unlinkedVariables)),r.breakpointStyles&&Array.isArray(r.breakpointStyles)&&(r.breakpointStyles=new Map(r.breakpointStyles));this.undoStack=n.undoStack||[],this.redoStack=n.redoStack||[];for(const r of this.undoStack)r.group>this.groupCounter&&(this.groupCounter=r.group);for(const r of this.redoStack)r.group>this.groupCounter&&(this.groupCounter=r.group);return this.hasPendingChanges()}catch{return!1}}},Qt(vo,"STORAGE_KEY","retune-pending-changes"),vo),Rh="retune-comments",Sb=class{constructor(){Qt(this,"comments",new Map);Qt(this,"nextId",1)}add(e,t,n,r){const o={id:this.nextId++,text:e,position:t,type:n,selector:r==null?void 0:r.selector,anchorOffset:r==null?void 0:r.anchorOffset,area:r==null?void 0:r.area,areaScroll:r==null?void 0:r.areaScroll,elementInfo:r==null?void 0:r.elementInfo,timestamp:Date.now()};return this.comments.set(o.id,o),this.persist(),o}update(e,t){const n=this.comments.get(e);return n?(n.text=t,n.timestamp=Date.now(),this.persist(),!0):!1}delete(e){const t=this.comments.delete(e);return t&&this.persist(),t}get(e){return this.comments.get(e)}getAll(){return Array.from(this.comments.values()).sort((e,t)=>e.id-t.id)}getBySelector(e){return this.getAll().filter(t=>t.type==="element"&&t.selector===e)}get count(){return this.comments.size}clear(){this.comments.clear(),this.nextId=1,this.persist()}persist(){try{const e={comments:this.getAll(),nextId:this.nextId};localStorage.setItem(Rh,JSON.stringify(e))}catch{}}restore(){try{const e=localStorage.getItem(Rh);if(!e)return!1;const t=JSON.parse(e);if(!t.comments||!Array.isArray(t.comments))return!1;this.comments.clear();for(const n of t.comments)this.comments.set(n.id,n);return this.nextId=t.nextId||this.comments.size+1,!0}catch{return!1}}},jb=[":hover",":focus",":active",":focus-visible",":focus-within"];function S0(e){for(const t of jb)if(e.endsWith(t))return{base:e.slice(0,-t.length),pseudoState:t.slice(1)};return{base:e,pseudoState:null}}function Rb(e){const{base:t}=S0(e),n=t.replace(/\([^)]*\)/g,""),r=/[.\])\w]\s+[.\[:]/.test(n),o=/[.\])\w]\s*>\s*[.\[:]/.test(n);if(t.startsWith(".")||t.startsWith(":")||t.startsWith("[")){try{const i=document.querySelectorAll(t).length,s=i>0?`, ${i} element${i>1?"s":""}`:"";if(r||o)return`ancestor-scoped${s}`;if(i>0)return`class-scoped${s}`}catch{}return r||o?"ancestor-scoped":"class-scoped"}return t.startsWith("#")?"id-scoped, unique":t.includes(">")?"element-specific":null}var Kc=null;function Lb(){return Kc||(Kc=vf()),Kc}function qc(e,t,n,r){if(e.length===0&&(!n||n.length===0))return"No changes recorded.";const o=e.filter(d=>d.changes.some(f=>f.property==="__bulkOf")).length;e=e.filter(d=>!d.changes.some(f=>f.property==="__bulkOf"));const s=Lb(),a=[],c=e.length>0,u=n&&n.length>0;if(c&&u?a.push(`Apply these Retune visual changes and address the user's comments in the source code:
`):u?a.push(`The user has left comments on their running app using Retune. Address each comment by making the described changes to the source code:
`):a.push(`Apply these Retune visual changes to the source code:
`),a.push("**Environment:**"),a.push(`- URL: ${window.location.href}`),a.push(`- Viewport: ${window.innerWidth}×${window.innerHeight}`),a.push(`- Timestamp: ${new Date().toISOString()}`),a.push(""),t!=="minimal"){const d=t0(s);d&&(a.push(`> **Design tokens detected:** ${d}`),a.push(""))}if(ai().framework==="tailwind"&&(a.push("> **Framework:** Tailwind CSS detected. Apply all changes using Tailwind utility classes — do NOT use inline styles or raw CSS values. When a class swap is suggested, replace the old class with the new one in the JSX/HTML."),a.push("")),r!=null&&r.responsive&&t!=="minimal"){const d=r.responsive;if(a.push(`> **Responsive:** ${d.strategy||"media-queries"}, ${d.direction||"desktop-first"}`),d.breakpoints){const f=Object.entries(d.breakpoints).map(([v,x])=>`${v}=${x}`).join(", ");a.push(`> **Breakpoints:** ${f}`)}a.push("> Changes marked with `@media` should be applied inside the corresponding breakpoint using the project's responsive strategy."),a.push("")}if(r!=null&&r.components&&t!=="minimal"){const d=Object.keys(r.components);d.length>0&&(a.push(`> **Manifest:** ${d.length} components defined (${d.join(", ")}). Prop types, enum values, and class mappings are available in \`retune.manifest.json\`.`),a.push(""))}if(e.length>0){a.push(`# Visual Changes (${e.length} element${e.length!==1?"s":""})`),a.push("");const d=e.map(f=>Eb(f,t,s,o,r));a.push(d.join(`
---

`))}return n&&n.length>0&&(e.length>0&&(a.push(""),a.push("---"),a.push("")),a.push(`# Comments (${n.length})`),a.push(""),n.forEach((d,f)=>{var v;if(d.type==="element"&&d.elementInfo){const x=d.elementInfo,m=x.textContent?` "${dd(x.textContent,60)}"`:"";a.push(`## Comment #${f+1} on \`<${x.tagName}>\`${m}`),a.push(""),x.componentName&&a.push(`**Component:** ${x.componentName}`),d.selector&&a.push(`**Selector:** \`${d.selector}\``),x.classes.length>0&&a.push(`**Classes:** \`${x.classes.join(" ")}\``),a.push(`**Marker position:** (${Math.round(d.position.x)}, ${Math.round(d.position.y)}) on viewport`)}else if(d.type==="area"&&d.area){const x=d.area;a.push(`## Comment #${f+1} on area`),a.push(""),a.push(`**Region:** (${Math.round(x.x)}, ${Math.round(x.y)}) ${Math.round(x.width)}×${Math.round(x.height)}px`);const m=(v=d.elementInfo)==null?void 0:v.containedElements;if(m&&m.length>0){const R=m.slice(0,8).map(y=>{const g=y.textContent?` "${dd(y.textContent,30)}"`:"",C=y.componentName?` (${y.componentName})`:"";return`\`<${y.tagName}>\` ${y.selector}${g}${C}`});a.push(`**Contains:** ${R.join(", ")}`)}}else a.push(`## Comment #${f+1}`);a.push(""),a.push(`> ${d.text.split(`
`).join(`
> `)}`),a.push("")})),a.join(`
`)}function Eb(e,t,n,r=0,o){var C;const i=[];if(i.push(`## \`<${e.tagName.toLowerCase()}>\`${e.textContent?` "${dd(e.textContent,60)}"`:""}`),i.push(""),e.sourceFile){const S=e.sourceFile.columnNumber?`:${e.sourceFile.columnNumber}`:"";i.push(`**Source:** \`${e.sourceFile.fileName}:${e.sourceFile.lineNumber}${S}\``)}if(e.reactComponents.length>0&&(i.push(`**Component:** ${e.reactComponents.join(" → ")}`),o!=null&&o.components&&t!=="minimal")){const S=e.reactComponents[0],E=o.components[S];if(E!=null&&E.props){const P=[];for(const[b,T]of Object.entries(E.props)){if(T.type==="function")continue;let W=`${b}: ${T.type}`;if(T.type==="enum"&&T.values&&(W+=`(${T.values.join(", ")})`),T.default!==void 0&&(W+=` = ${JSON.stringify(T.default)}`),T.class_map){const N=Object.entries(T.class_map).map(([re,D])=>`${re}→${D}`).join(", ");W+=` [${N}]`}P.push(W)}if(P.length>0)if(t==="full")i.push(`**Component props:** ${P.join("; ")}`);else{const b=P.filter(T=>T.includes("enum")||T.includes("→"));b.length>0&&i.push(`**Variants:** ${b.join("; ")}`)}}}e.stylingApproach&&e.stylingApproach!=="unknown"&&i.push(`**Styling:** ${Nb(e.stylingApproach)}`),t!=="minimal"&&e.domPath&&i.push(`**DOM Path:** \`${e.domPath}\``);const{base:s,pseudoState:a}=S0(e.selector),c=[];a&&c.push(`${a} state`);const u=Rb(e.selector);u&&c.push(u);const p=c.length>0?` (${c.join(", ")})`:"";i.push(`**Selector:** \`${s}\`${p}`);const d=s.replace(/\([^)]*\)/g,"");if(/\.[a-zA-Z][\w-]*\s+\.[a-zA-Z]/.test(d)||/\.[a-zA-Z][\w-]*\s*>\s*\.[a-zA-Z]/.test(d)){const S=s.split(/\s+(?=[.#\[:])/).filter(Boolean);if(S.length>=2){const E=S.slice(0,-1).join(" "),P=S[S.length-1];i.push(`**Ancestor context:** \`${E}\` — change only applies inside this ancestor`),i.push(`**Target element:** \`${P}\` — the element being styled`)}}else{const S=s.match(/\.[a-zA-Z0-9_-]+/g);if(S&&S.length>1){const E=S.map(P=>{const b=P.slice(1);try{const T=document.querySelectorAll(P).length;return`\`.${b}\` (${T})`}catch{return`\`.${b}\``}});i.push(`**Target classes:** ${E.join(" → ")} — apply changes where all these classes are present`)}}if(t==="full"&&e.elementId&&i.push(`**ID:** \`${e.elementId}\``),t==="full"&&e.accessibleName&&i.push(`**Accessible name:** "${e.accessibleName}"`),e.classes.length>0&&i.push(`**Classes:** \`${e.classes.join(" ")}\``),t==="full"&&e.position&&i.push(`**Position:** x:${e.position.x}, y:${e.position.y} (${e.position.width}×${e.position.height}px)`),t==="full"&&e.nearbySiblings&&i.push(`**Nearby elements:** ${e.nearbySiblings}`),t==="full"&&e.parentContext&&i.push(`**Parent:** \`${e.parentContext}\``),t==="full"&&e.childSummary&&i.push(`**Children:** ${e.childSummary}`),t==="full"&&e.inlineStyles&&i.push(`**Inline styles:** \`${e.inlineStyles}\``),e.changes.some(S=>S.property==="__delete"))return i.push(""),i.push("### Action: Delete Element"),i.push(""),i.push("Remove this element from the source code entirely."),e.classes.length>0&&i.push(`**Classes:** \`${e.classes.join(" ")}\``),i.push(""),i.join(`
`);const x=e.changes.find(S=>S.property==="__reparent");if(x){const S=x.from.lastIndexOf("@"),E=S!==-1?x.from.slice(0,S):x.from,P=x.to.lastIndexOf("@"),b=P!==-1?x.to.slice(0,P):x.to,T=P!==-1?x.to.slice(P+1):"0";return i.push(""),i.push("### Action: Reparent Element"),i.push(""),r>0?i.push(`Move this element from its current parent to a new parent container. **This is a component-level change affecting ${r+1} instances** — apply the change to the component JSX template, not individual instances.`):i.push("Move this element from its current parent to a new parent container."),i.push(`**From:** \`${E}\``),i.push(`**To:** \`${b}\` (as child at position ${T})`),i.push(""),i.join(`
`)}const m=e.changes.find(S=>S.property==="__reorder");m&&(i.push(""),i.push("### Action: Reorder Element"),i.push(""),r>0?i.push(`Moved from position ${m.from} to position ${m.to} within its parent container. **This is a component-level change affecting ${r+1} instances** — reorder the children in the component JSX template, not individual instances.`):i.push(`Moved from position ${m.from} to position ${m.to} within its parent container.`),i.push(""));const R=e.changes.find(S=>S.property==="__text");R&&(i.push(""),i.push("### Action: Edit Text Content"),i.push(""),i.push("**Before:**"),i.push("```"),i.push(R.from),i.push("```"),i.push("**After:**"),i.push("```"),i.push(R.to),i.push("```"),i.push(""));const y=pd(e.changes),g=C0(y,n,e.selector);if(e.variableAssociations)for(const S of g){const E=S.property.replace(/-([a-z])/g,(b,T)=>T.toUpperCase()),P=e.variableAssociations[E];if(P){const b=P.className.startsWith("var(");S.recommended={type:b?"css-variable":"semantic-token",name:P.className,value:Object.values(P.values)[0]||S.to,exact:!0}}}if(g.length>0){const S=g.filter(T=>!T.breakpoint),E=new Map;for(const T of g)if(T.breakpoint){const W=E.get(T.breakpoint)||[];W.push(T),E.set(T.breakpoint,W)}const P=T=>{i.push("| Property | Before | After | Token |"),i.push("|----------|--------|-------|-------|");for(const W of T){const N=W.property.startsWith("class:")?W.property:ro(W.property),re=Mb(W);i.push(`| \`${N}\` | \`${W.from}\` | \`${W.to}\` | ${re} |`)}};S.length>0&&(i.push(""),i.push(E.size>0?"### Changes (base)":"### Changes"),i.push(""),P(S));const b=[...E.entries()].sort((T,W)=>parseInt(W[0])-parseInt(T[0]));for(const[T,W]of b){let N=T;if((C=o==null?void 0:o.responsive)!=null&&C.breakpoints){for(const[re,D]of Object.entries(o.responsive.breakpoints))if(D===T){N=`${T} — ${re}`;break}}i.push(""),i.push(`### Override @media (max-width: ${N})`),i.push(""),P(W)}}if(e.unlinkedProperties&&e.unlinkedProperties.length>0){i.push(""),i.push("### Detached Variables"),i.push(""),i.push("The following properties had their design token/variable binding removed. Hardcode the current values — do not use the token class or CSS variable:"),i.push(""),i.push("| Property | Current Value |"),i.push("|----------|---------------|");for(const{property:S,value:E}of e.unlinkedProperties){const P=ro(S);i.push(`| \`${P}\` | \`${E}\` |`)}}if(e.attributeChanges&&e.attributeChanges.length>0){const S=["SVG","PATH","CIRCLE","ELLIPSE","RECT","LINE","POLYGON","POLYLINE","G","TEXT","USE","DEFS"].includes(e.tagName.toUpperCase());i.push(""),i.push(S?"### SVG Attribute Changes":"### Attribute Changes"),i.push(""),i.push(S?"Apply these changes to the SVG element's attributes:":"Apply these changes to the HTML element's attributes:"),i.push(""),i.push("| Attribute | From | To |"),i.push("|-----------|------|----|");for(const{attr:E,from:P,to:b}of e.attributeChanges)i.push(`| \`${E}\` | \`${P||"—"}\` | \`${b}\` |`)}if(e.propChanges&&e.propChanges.length>0){i.push(""),i.push("### Prop Changes"),i.push(""),i.push("Apply these changes to the JSX where this component is rendered:"),i.push(""),i.push("| Prop | From | To |"),i.push("|------|------|----|");for(const{prop:S,from:E,to:P}of e.propChanges){const b=E===void 0?"—":JSON.stringify(E),T=P===void 0?"—":JSON.stringify(P);i.push(`| \`${S}\` | \`${b}\` | \`${T}\` |`)}}if(t!=="minimal"){const S=Tb(g);S&&(i.push(""),i.push(S))}return i.push(""),i.join(`
`)}function Nb(e){switch(e){case"tailwind":return"Tailwind CSS (modify utility classes)";case"css-modules":return"CSS Modules (modify `.module.css` file)";case"css-in-js":return"CSS-in-JS / Emotion (modify style object)";case"styled-components":return"styled-components (modify template literal)";case"plain-css":return"Plain CSS (modify stylesheet)";default:return e}}function Mb(e){if(!e.recommended)return"—";const t=e.recommended,n=t.type==="css-variable"?`\`${t.name}\``:`\`.${t.name}\``;return!t.exact&&t.distance?`${n} (${t.distance})`:n}function Tb(e){const t=[];for(const n of e){const r=n.alternatives.length>0,o=n.cssVariables.length>0,i=n.conflicts&&n.conflicts.length>0;if(!r&&!o&&!i)continue;const s=ro(n.property),a=[];if(a.push(`**\`${s}\`** \`${n.from}\` → \`${n.to}\``),n.recommended){const c=n.recommended,u=c.exact?"exact":c.distance||"fuzzy",p=c.type==="css-variable"?`\`${c.name}\``:`\`.${c.name}\``;a.push(`- Recommended: ${p} (${u}, \`${c.value}\`)`)}if(r){const c=n.alternatives.map(u=>`\`.${u.name}\` (\`${u.value}\`)`).join(", ");a.push(`- Alternatives: ${c}`)}if(o){const c=n.cssVariables.map(u=>`\`var(${u})\``).join(", ");a.push(`- CSS vars: ${c}`)}if(i)for(const c of n.conflicts){const u=c.important?", !important":"";a.push(`- Competing rule: \`${c.selector}\` (\`${c.value}\`${u})`)}t.push(a.join(`
`))}return t.length===0?null:`<details>
<summary>Resolution context</summary>

${t.join(`

`)}

</details>`}var Ab=[{shorthand:"borderRadius",longhands:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},{shorthand:"padding",longhands:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},{shorthand:"margin",longhands:["marginTop","marginRight","marginBottom","marginLeft"]},{shorthand:"borderWidth",longhands:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"]},{shorthand:"borderColor",longhands:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]},{shorthand:"borderStyle",longhands:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"]}];function pd(e){const t=[...e];for(const n of Ab){const r=n.longhands.map(o=>t.find(i=>i.property===o));if(r.every(o=>o!=null)){const o=new Set(r.map(s=>s.to)).size===1,i=new Set(r.map(s=>s.from)).size===1;if(o&&i){for(const s of n.longhands){const a=t.findIndex(c=>c.property===s);a!==-1&&t.splice(a,1)}t.push({property:n.shorthand,from:r[0].from,to:r[0].to})}}}return t}var $b=class{constructor(e=9223){Qt(this,"ws",null);Qt(this,"port");Qt(this,"handlers",null);Qt(this,"reconnectTimer",null);Qt(this,"pendingRequests",new Map);Qt(this,"requestId",0);Qt(this,"_connected",!1);Qt(this,"reconnectDelay",3e3);Qt(this,"maxReconnectDelay",6e4);Qt(this,"updateAvailable",null);Qt(this,"onUpdateCallback",null);this.port=e}get connected(){return this._connected}onRequest(e){this.handlers=e}onUpdate(e){this.onUpdateCallback=e,this.updateAvailable&&e(this.updateAvailable)}connect(){if(!this.ws)try{this.ws=new WebSocket(`ws://localhost:${this.port}/ws`),this.ws.onopen=()=>{var n;this.reconnectDelay=3e3;const e=String(++this.requestId),t=setTimeout(()=>{this.pendingRequests.delete(e),this._connected||(this._connected=!0,console.log("[Retune] Connected to MCP server (handshake not acknowledged, assuming compatible)"))},3e3);this.pendingRequests.set(e,{resolve:r=>{var o;if(this._connected=!0,console.log("[Retune] Connected to MCP server (verified)"),r!=null&&r.latestVersion){const i="0.7.6";r.latestVersion!==i&&this.isNewer(r.latestVersion,i)&&(this.updateAvailable={current:i,latest:r.latestVersion},(o=this.onUpdateCallback)==null||o.call(this,this.updateAvailable))}},reject:()=>{this._connected=!0,console.warn("[Retune] Handshake rejected, connected in fallback mode")},timer:t}),(n=this.ws)==null||n.send(JSON.stringify({id:e,method:"handshake",params:{client:"retune-overlay"}}))},this.ws.onmessage=async e=>{var n,r;let t;try{t=JSON.parse(e.data)}catch(o){console.error("[Retune] Failed to parse message:",o);return}if(t.id&&this.pendingRequests.has(t.id)){const o=this.pendingRequests.get(t.id);clearTimeout(o.timer),this.pendingRequests.delete(t.id),t.error?o.reject(new Error(t.error)):o.resolve(t.result);return}if(t.method&&this.handlers)try{const o=await this.handlers(t.method,t.params),i=JSON.stringify({id:t.id,result:o},(s,a)=>{if(!(a instanceof Element||a instanceof Node)&&typeof a!="function")return a});(n=this.ws)==null||n.send(i)}catch(o){(r=this.ws)==null||r.send(JSON.stringify({id:t.id,error:o.message}))}},this.ws.onclose=()=>{this._connected=!1,this.ws=null,this.reconnectTimer=setTimeout(()=>this.connect(),this.reconnectDelay),this.reconnectDelay=Math.min(this.reconnectDelay*2,this.maxReconnectDelay)},this.ws.onerror=()=>{}}catch{}}async sendChanges(e){await this.request("pushChanges",{changes:e})}request(e,t){return new Promise((n,r)=>{if(!this.ws||this.ws.readyState!==WebSocket.OPEN){r(new Error("Not connected to MCP server"));return}const o=String(++this.requestId),i=setTimeout(()=>{this.pendingRequests.has(o)&&(this.pendingRequests.delete(o),r(new Error("Request timed out")))},1e4);this.pendingRequests.set(o,{resolve:n,reject:r,timer:i}),this.ws.send(JSON.stringify({id:o,method:e,params:t}))})}isNewer(e,t){const n=e.split(".").map(Number),r=t.split(".").map(Number);for(let o=0;o<3;o++){if((n[o]||0)>(r[o]||0))return!0;if((n[o]||0)<(r[o]||0))return!1}return!1}disconnect(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.onclose=null,this.ws.close(),this.ws=null),this._connected=!1;for(const[,e]of this.pendingRequests)clearTimeout(e.timer),e.reject(new Error("Disconnected"));this.pendingRequests.clear()}},_b=["paddingTop","paddingRight","paddingBottom","paddingLeft","marginTop","marginRight","marginBottom","marginLeft"],Pb=["width","height","minWidth","maxWidth","minHeight","maxHeight"],Ib=["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],zb=["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","letterSpacing","textAlign","verticalAlign","textDecoration","textTransform","whiteSpace","wordSpacing","textIndent","color"],Ob=["backgroundColor","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat"],Db=["objectFit","objectPosition","aspectRatio"],Fb=["fill","stroke","strokeWidth"],Bb=["display","position","flexDirection","flexWrap","alignItems","justifyContent","gap","rowGap","columnGap","gridTemplateColumns","gridTemplateRows","top","right","bottom","left","zIndex","flexGrow","flexShrink","flexBasis","alignSelf","order","gridColumn","gridRow","justifySelf"],Vb=["opacity","overflow","boxShadow","textShadow","transform","filter","backdropFilter"],Hb=["textOverflow","overflowWrap","wordBreak","webkitLineClamp","webkitBoxOrient"],j0=[..._b,...Pb,...Ib,...zb,...Ob,...Db,...Fb,...Bb,...Vb,...Hb];function Qc(e,t){const n={},r=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");function o(i){for(let s=0;s<i.length;s++){const a=i[s];if(a instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&a instanceof CSSLayerBlockRule){if(a instanceof CSSMediaRule&&!window.matchMedia(a.conditionText).matches)continue;o(a.cssRules);continue}if(!(a instanceof CSSStyleRule))continue;const c=a.selectorText;if(!c.includes(t))continue;const u=c.replace(r,"").replace(/\s+/g," ").trim();if(u){try{if(!e.matches(u))continue}catch{continue}for(let p=0;p<a.style.length;p++){const d=a.style[p];n[d]=a.style.getPropertyValue(d)}}}}for(const i of document.styleSheets){let s;try{s=i.cssRules}catch{continue}o(s)}return Wb(n)}function Wb(e){const t={...e};function n(i,s){if(!(i in t))return;const c=t[i].trim().split(/\s+/);let u,p,d,f;switch(c.length){case 1:u=p=d=f=c[0];break;case 2:u=d=c[0],p=f=c[1];break;case 3:u=c[0],p=f=c[1],d=c[2];break;default:u=c[0],p=c[1],d=c[2],f=c[3];break}s[0]in t||(t[s[0]]=u),s[1]in t||(t[s[1]]=p),s[2]in t||(t[s[2]]=d),s[3]in t||(t[s[3]]=f),delete t[i]}function r(){if(!("border-radius"in t))return;const a=t["border-radius"].trim().split("/")[0].trim().split(/\s+/),c=["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"];let u,p,d,f;switch(a.length){case 1:u=p=d=f=a[0];break;case 2:u=d=a[0],p=f=a[1];break;case 3:u=a[0],p=f=a[1],d=a[2];break;default:u=a[0],p=a[1],d=a[2],f=a[3];break}c[0]in t||(t[c[0]]=u),c[1]in t||(t[c[1]]=p),c[2]in t||(t[c[2]]=d),c[3]in t||(t[c[3]]=f),delete t["border-radius"]}function o(){if(!("gap"in t))return;const s=t.gap.trim().split(/\s+/),a=s[0],c=s.length>1?s[1]:s[0];"row-gap"in t||(t["row-gap"]=a),"column-gap"in t||(t["column-gap"]=c),delete t.gap}return n("padding",["padding-top","padding-right","padding-bottom","padding-left"]),n("margin",["margin-top","margin-right","margin-bottom","margin-left"]),n("border-width",["border-top-width","border-right-width","border-bottom-width","border-left-width"]),n("border-color",["border-top-color","border-right-color","border-bottom-color","border-left-color"]),n("border-style",["border-top-style","border-right-style","border-bottom-style","border-left-style"]),r(),o(),t}function Ub(e){const t={};function n(r){for(let o=0;o<r.length;o++){const i=r[o];if(i instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&i instanceof CSSLayerBlockRule){if(i instanceof CSSMediaRule&&!window.matchMedia(i.conditionText).matches)continue;n(i.cssRules);continue}if(!(i instanceof CSSStyleRule))continue;const s=i.selectorText;if(!(s.includes(":hover")||s.includes(":focus")||s.includes(":active"))){try{if(!e.matches(s))continue}catch{continue}for(let a=0;a<i.style.length;a++){const c=i.style[a],u=c.replace(/-([a-z])/g,(p,d)=>d.toUpperCase());t[u]={selector:s,value:i.style.getPropertyValue(c)}}}}}for(const r of document.styleSheets){let o;try{o=r.cssRules}catch{continue}n(o)}return t}function Jc(e,t){const n=new Set,r={},o={},i=t.match(/\.[a-zA-Z0-9_-]+/g)||[],s=document.createElement("div");s.style.cssText="position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;",document.body.appendChild(s);function a(d,f){let v=d.style.getPropertyValue(f).trim();if(v)v.includes("var(")&&(s.style.setProperty(f,v),v=getComputedStyle(s).getPropertyValue(f).trim(),s.style.removeProperty(f));else for(const x of["padding","margin","border-radius","gap","border-width","border-color","border-style"]){const m=d.style.getPropertyValue(x).trim();if(m&&f.startsWith(x.split("-")[0])){s.style.setProperty(x,m),v=getComputedStyle(s).getPropertyValue(f).trim(),s.style.removeProperty(x);break}}return v}function c(d){for(let f=0;f<d.length;f++){const v=d[f];if(v instanceof CSSGroupingRule||typeof CSSLayerBlockRule<"u"&&v instanceof CSSLayerBlockRule){if(v instanceof CSSMediaRule&&!window.matchMedia(v.conditionText).matches)continue;c(v.cssRules);continue}if(!(v instanceof CSSStyleRule))continue;const x=v.selectorText;if(x.includes(":hover")||x.includes(":focus")||x.includes(":active"))continue;try{if(!e.matches(x))continue}catch{continue}const m=x.match(/\.[a-zA-Z0-9_-]+/g)||[];if(m.length===0)continue;const R=m.every(C=>i.includes(C)),y=!R&&i.every(C=>m.includes(C));if(!R&&!y)continue;const g=m.length;for(let C=0;C<v.style.length;C++){const S=v.style[C],E=S.replace(/-([a-z])/g,(T,W)=>W.toUpperCase());R&&n.add(E);const P=a(v,S);if(!P)continue;const b=o[E]??-1;g>=b&&(r[E]=P,o[E]=g)}}}for(const d of document.styleSheets){let f;try{f=d.cssRules}catch{continue}c(f)}s.remove();const u=window.getComputedStyle(e),p={};for(const d of j0){if(r[d]){p[d]=r[d];continue}let f=u.getPropertyValue(ro(d));f&&(f==="normal"&&R0.has(d)&&(f="0px"),p[d]=f)}return{styles:p,ownedProperties:n}}var R0=new Set(["gap","rowGap","columnGap"]);function Zb(e){const t=window.getComputedStyle(e),n={};for(const r of j0){let o=t.getPropertyValue(ro(r));o&&(o==="normal"&&R0.has(r)&&(o="0px"),n[r]=o)}return n}function Xb(e){const t=window.getComputedStyle(e),n=t.display,r=t.position;return r==="fixed"?"fixed":r==="absolute"?"absolute":r==="sticky"?"sticky":r==="relative"?"relative":n.includes("flex")?"flex":n.includes("grid")?"grid":n.includes("inline")?"inline":"block"}function Lh(e){var n;const t=e.getBoundingClientRect();return{element:e,selector:zn(e),tagName:e.tagName,textContent:Yb(e),classes:e.className&&typeof e.className=="string"?e.className.trim().split(/\s+/):[],rect:t,computedStyles:Zb(e),layoutMode:Xb(e),reactComponents:j2(e),reactProps:L2(e),reactState:E2(e),sourceFile:N2(e),stylingApproach:e0(e),inlineStyles:((n=e.style)==null?void 0:n.cssText)||null,elementId:e.id||null,accessibleName:Gb(e),parentContext:Kb(e),childSummary:qb(e),domPath:Qb(e),nearbySiblings:Jb(e),position:{x:Math.round(t.left),y:Math.round(t.top),width:Math.round(t.width),height:Math.round(t.height)}}}function Eh(e,t){var d;const n=t.toLowerCase().split("+"),r=n.pop(),o=n.includes("alt"),i=n.includes("ctrl"),s=n.includes("meta")||n.includes("cmd"),a=n.includes("shift"),c=e.key.toLowerCase(),u=((d=e.code)==null?void 0:d.replace(/^(Key|Digit)/i,"").toLowerCase())||"";return(c===r||o&&u===r)&&e.altKey===o&&e.ctrlKey===i&&e.metaKey===s&&e.shiftKey===a}function Yb(e){var r;const t=[];for(const o of e.childNodes)if(o.nodeType===Node.TEXT_NODE){const i=(r=o.textContent)==null?void 0:r.trim();i&&t.push(i)}const n=t.join(" ").trim();return n?n.slice(0,100):null}function Gb(e){return e.getAttribute("aria-label")||e.getAttribute("alt")||e.getAttribute("title")||e.getAttribute("placeholder")||e.getAttribute("name")||null}function Kb(e){const t=e.parentElement;if(!t||t===document.body)return null;const n=t.tagName.toLowerCase(),r=t.id?`#${t.id}`:"",o=t.className&&typeof t.className=="string"?t.className.trim().split(/\s+/).slice(0,3).join("."):"",i=o?`.${o}`:"";return`${n}${r}${i}`}function qb(e){const t=e.children;if(t.length===0)return null;const n=Array.from(t).slice(0,6).map(o=>o.tagName.toLowerCase()),r=t.length>6?`, +${t.length-6} more`:"";return`${t.length} children: ${n.join(", ")}${r}`}function Qb(e){const t=[];let n=e;for(;n&&n!==document.documentElement;){let r=n.tagName.toLowerCase();if(n.id)r+=`#${n.id}`;else if(n.className&&typeof n.className=="string"){const o=n.className.trim().split(/\s+/).slice(0,2).join(".");o&&(r+=`.${o}`)}t.unshift(r),n=n.parentElement}return t.join(" > ")}function Jb(e){const t=e.parentElement;if(!t)return null;const n=Array.from(t.children),r=n.indexOf(e),o=[];for(let i=Math.max(0,r-2);i<Math.min(n.length,r+3);i++){const a=n[i].tagName.toLowerCase(),c=i===r?`**${a}**`:a;o.push(c)}return o.join(", ")}function e7(e){const t=Object.keys(e).find(n=>n.startsWith("__reactFiber$"));return t?e[t]:null}function Nh(e){const t=Array.from(e.children);if(t.length<2)return"static";const n=t.map(e7).filter(Boolean);if(n.length===0)return"static";const r=new Map;let o=0;for(const s of n){const a=s._debugSource;if(a){const c=`${a.fileName}:${a.lineNumber}`;r.set(c,(r.get(c)||0)+1)}s.key!==null&&o++}return Math.max(...r.values(),0)>=n.length*.7||o>=n.length*.7&&r.size<=2?"array":"static"}function An({label:e,gap:t,action:n,children:r}){return l.jsxs("div",{className:"retune-section",children:[l.jsxs("div",{className:"retune-section-header",children:[l.jsx("span",{className:"retune-section-title",children:e}),n]}),r&&l.jsx("div",{className:"retune-section-body",style:t!=null?{gap:t}:void 0,children:r})]})}function nt({label:e,children:t}){return e?l.jsxs("div",{className:"retune-row-group",children:[l.jsx("div",{className:"retune-group-label-inline",children:e}),t]}):l.jsx("div",{className:"retune-section-row",children:l.jsx("div",{className:"retune-row",children:t})})}function Ge({label:e,children:t}){return l.jsxs("div",{className:"retune-field",children:[l.jsx("span",{className:"retune-field-label",children:e}),t]})}function wt({size:e=24,children:t}){return l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t})}function Mh({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4781 8L12.5 8H15.5C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9H12.5C11.7917 9 11.2905 9.00039 10.8987 9.0324C10.5128 9.06393 10.2772 9.12365 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9.12365 10.2772 9.06393 10.5128 9.0324 10.8987C9.00039 11.2905 9 11.7917 9 12.5V15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5V12.5L8 12.4781C8 11.7966 7.99999 11.2546 8.03572 10.8173C8.07231 10.3695 8.14884 9.98765 8.32698 9.63803C8.6146 9.07354 9.07354 8.6146 9.63803 8.32698C9.98765 8.14884 10.3695 8.07231 10.8173 8.03572C11.2546 7.99999 11.7966 8 12.4781 8Z",fill:"currentColor",fillOpacity:.9})})}function t7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5219 8L11.5 8H8.5C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9H11.5C12.2083 9 12.7095 9.00039 13.1013 9.0324C13.4872 9.06393 13.7228 9.12365 13.908 9.21799C14.2843 9.40973 14.5903 9.71569 14.782 10.092C14.8764 10.2772 14.9361 10.5128 14.9676 10.8987C14.9996 11.2905 15 11.7917 15 12.5V15.5C15 15.7761 15.2239 16 15.5 16C15.7761 16 16 15.7761 16 15.5V12.5V12.4781C16 11.7966 16 11.2546 15.9643 10.8173C15.9277 10.3695 15.8512 9.98765 15.673 9.63803C15.3854 9.07354 14.9265 8.6146 14.362 8.32698C14.0123 8.14884 13.6305 8.07231 13.1827 8.03572C12.7454 7.99999 12.2034 8 11.5219 8Z",fill:"currentColor",fillOpacity:.9})})}function n7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4781 16H12.5H15.5C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15H12.5C11.7917 15 11.2905 14.9996 10.8987 14.9676C10.5128 14.9361 10.2772 14.8764 10.092 14.782C9.71569 14.5903 9.40973 14.2843 9.21799 13.908C9.12365 13.7228 9.06393 13.4872 9.0324 13.1013C9.00039 12.7095 9 12.2083 9 11.5V8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5V11.5L8 11.5219C8 12.2034 7.99999 12.7454 8.03572 13.1827C8.07231 13.6305 8.14884 14.0123 8.32698 14.362C8.6146 14.9265 9.07354 15.3854 9.63803 15.673C9.98765 15.8512 10.3695 15.9277 10.8173 15.9643C11.2546 16 11.7966 16 12.4781 16Z",fill:"currentColor",fillOpacity:.9})})}function r7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5219 16H11.5H8.5C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15H11.5C12.2083 15 12.7095 14.9996 13.1013 14.9676C13.4872 14.9361 13.7228 14.8764 13.908 14.782C14.2843 14.5903 14.5903 14.2843 14.782 13.908C14.8764 13.7228 14.9361 13.4872 14.9676 13.1013C14.9996 12.7095 15 12.2083 15 11.5V8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5V11.5V11.5219C16 12.2034 16 12.7454 15.9643 13.1827C15.9277 13.6305 15.8512 14.0123 15.673 14.362C15.3854 14.9265 14.9265 15.3854 14.362 15.673C14.0123 15.8512 13.6305 15.9277 13.1827 15.9643C12.7454 16 12.2034 16 11.5219 16Z",fill:"currentColor",fillOpacity:.9})})}function Th({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM16.5 7C16.7761 7 17 7.22386 17 7.5V16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5V7.5C16 7.22386 16.2239 7 16.5 7ZM13 13V11H11V13H13ZM14 11C14 10.4477 13.5523 10 13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11Z",fill:"currentColor",fillOpacity:.9})})}function Ah({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5ZM7 7.5C7 7.22385 7.22386 7 7.5 7H16.5C16.7761 7 17 7.22385 17 7.5C17 7.77615 16.7761 8 16.5 8H7.5C7.22386 8 7 7.77615 7 7.5ZM13 11H11V13H13V11ZM11 10C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11Z",fill:"currentColor",fillOpacity:.9})})}function $h({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 7C7.22386 7 7 7.22385 7 7.5C7 7.77615 7.22386 8 7.5 8H16.5C16.7761 8 17 7.77615 17 7.5C17 7.22385 16.7761 7 16.5 7L7.5 7ZM11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z",fill:"currentColor",fillOpacity:.9})})}function _h({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5Z",fill:"currentColor",fillOpacity:.9})})}function Ph({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",fill:"currentColor",fillOpacity:.9})})}function Ih({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7.5C17 7.22386 16.7761 7 16.5 7C16.2239 7 16 7.22386 16 7.5V16.5C16 16.7761 16.2239 17 16.5 17C16.7761 17 17 16.7761 17 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",fill:"currentColor",fillOpacity:.9})})}function mo({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 9.5C8 9.22385 7.77614 9 7.5 9C7.22386 9 7 9.22385 7 9.5L7 14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V9.5ZM17 9.5C17 9.22385 16.7761 9 16.5 9C16.2239 9 16 9.22385 16 9.5V14.5C16 14.7761 16.2239 15 16.5 15C16.7761 15 17 14.7761 17 14.5V9.5ZM9 7.5C9 7.22385 9.22386 7 9.5 7H14.5C14.7761 7 15 7.22385 15 7.5C15 7.77615 14.7761 8 14.5 8H9.5C9.22386 8 9 7.77615 9 7.5ZM9.5 16C9.22386 16 9 16.2239 9 16.5C9 16.7761 9.22386 17 9.5 17H14.5C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16H9.5Z",fill:"currentColor",fillOpacity:.9})})}function zh({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 15.5C7 15.2239 7.22386 15 7.5 15H7.75C7.88807 15 8 14.8881 8 14.75V8.25C8 8.11193 7.88807 8 7.75 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H7.75C8.44036 7 9 7.55964 9 8.25V14.75C9 15.4404 8.44036 16 7.75 16H7.5C7.22386 16 7 15.7761 7 15.5ZM15 14.7502C15 14.8883 15.1119 15.0002 15.25 15.0002H15.5C15.7761 15.0002 16 15.2241 16 15.5002C16 15.7764 15.7761 16.0002 15.5 16.0002H15.25C14.5596 16.0002 14 15.4406 14 14.7502V8.25012C14 7.55977 14.5596 7.00012 15.25 7.00012H15.5C15.7761 7.00012 16 7.22398 16 7.50012C16 7.77626 15.7761 8.00012 15.5 8.00012H15.25C15.1119 8.00012 15 8.11205 15 8.25012V14.7502ZM11 13.5C11 13.7761 11.2239 14 11.5 14C11.7761 14 12 13.7761 12 13.5V9.5C12 9.22386 11.7761 9 11.5 9C11.2239 9 11 9.22386 11 9.5V13.5Z",fill:"currentColor",fillOpacity:.9})})}function Oh({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 7C7.77614 7 8 7.22386 8 7.5V7.75C8 7.88807 8.11193 8 8.25 8H14.75C14.8881 8 15 7.88807 15 7.75V7.5C15 7.22386 15.2239 7 15.5 7C15.7761 7 16 7.22386 16 7.5V7.75C16 8.44036 15.4404 9 14.75 9H8.25C7.55964 9 7 8.44036 7 7.75V7.5C7 7.22386 7.22386 7 7.5 7ZM8.25 15C8.11193 15 8 15.1119 8 15.25V15.5C8 15.7761 7.77614 16 7.5 16C7.22386 16 7 15.7761 7 15.5V15.25C7 14.5596 7.55964 14 8.25 14H14.7501C15.4405 14 16.0001 14.5596 16.0001 15.25V15.5C16.0001 15.7761 15.7763 16 15.5001 16C15.224 16 15.0001 15.7761 15.0001 15.5V15.25C15.0001 15.1119 14.8882 15 14.7501 15H8.25ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11H9.5Z",fill:"currentColor",fillOpacity:.9})})}function o7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H8.75C8.33579 8 8 8.33579 8 8.75V9.25C8 9.66421 8.33579 10 8.75 10H17.25ZM13.25 15C13.6642 15 14 14.6642 14 14.25V13.75C14 13.3358 13.6642 13 13.25 13H8.75C8.33579 13 8 13.3358 8 13.75V14.25C8 14.6642 8.33579 15 8.75 15H13.25Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{d:"M6 17.5C6 17.7761 5.77614 18 5.5 18C5.22386 18 5 17.7761 5 17.5V5.5C5 5.22386 5.22386 5 5.5 5C5.77614 5 6 5.22386 6 5.5V17.5Z",fill:"currentColor",fillOpacity:.3})]})}function i7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.75 10C6.33579 10 6 9.66421 6 9.25V8.75C6 8.33579 6.33579 8 6.75 8H15.25C15.6642 8 16 8.33579 16 8.75V9.25C16 9.66421 15.6642 10 15.25 10H6.75ZM10.75 15C10.3358 15 10 14.6642 10 14.25V13.75C10 13.3358 10.3358 13 10.75 13H15.25C15.6642 13 16 13.3358 16 13.75V14.25C16 14.6642 15.6642 15 15.25 15H10.75Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{d:"M18 17.5C18 17.7761 18.2239 18 18.5 18C18.7761 18 19 17.7761 19 17.5V5.5C19 5.22386 18.7761 5 18.5 5C18.2239 5 18 5.22386 18 5.5V17.5Z",fill:"currentColor",fillOpacity:.3})]})}function s7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H7.75C7.33579 8 7 8.33579 7 8.75V9.25C7 9.66421 7.33579 10 7.75 10H17.25ZM15.25 15C15.6642 15 16 14.6642 16 14.25V13.75C16 13.3358 15.6642 13 15.25 13H9.75C9.33579 13 9 13.3358 9 13.75V14.25C9 14.6642 9.33579 15 9.75 15H15.25Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V15H13V17.5ZM13 13V10H12V13H13ZM13 5.5V8H12V5.5C12 5.22386 12.2239 5 12.5 5C12.7761 5 13 5.22386 13 5.5Z",fill:"currentColor",fillOpacity:.3})]})}function l7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 17.25C10 17.6642 9.66421 18 9.25 18H8.75C8.33579 18 8 17.6642 8 17.25L8 8.75C8 8.33579 8.33579 8 8.75 8H9.25C9.66421 8 10 8.33579 10 8.75V17.25ZM15 13.25C15 13.6642 14.6642 14 14.25 14H13.75C13.3358 14 13 13.6642 13 13.25V8.75C13 8.33579 13.3358 8 13.75 8H14.25C14.6642 8 15 8.33579 15 8.75V13.25Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{d:"M17.5 6C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5L5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6L17.5 6Z",fill:"currentColor",fillOpacity:.3})]})}function a7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75L8 15.25C8 15.6642 8.33579 16 8.75 16H9.25C9.66421 16 10 15.6642 10 15.25V6.75ZM15 10.75C15 10.3358 14.6642 10 14.25 10H13.75C13.3358 10 13 10.3358 13 10.75V15.25C13 15.6642 13.3358 16 13.75 16H14.25C14.6642 16 15 15.6642 15 15.25V10.75Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{d:"M17.5 18C17.7761 18 18 18.2239 18 18.5C18 18.7761 17.7761 19 17.5 19H5.5C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H17.5Z",fill:"currentColor",fillOpacity:.3})]})}function c7({size:e}){return l.jsxs(wt,{size:e,children:[l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75V16.25C8 16.6642 8.33579 17 8.75 17H9.25C9.66421 17 10 16.6642 10 16.25V6.75ZM15 8.75C15 8.33579 14.6642 8 14.25 8H13.75C13.3358 8 13 8.33579 13 8.75V14.25C13 14.6642 13.3358 15 13.75 15H14.25C14.6642 15 15 14.6642 15 14.25V8.75Z",fill:"currentColor",fillOpacity:.9}),l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H15V11H17.5ZM13 11H10V12H13V11ZM5.5 11H8V12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11Z",fill:"currentColor",fillOpacity:.3})]})}function u7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H5.5C5.22386 8 5 7.77614 5 7.5ZM5 11.5C5 11.2239 5.22386 11 5.5 11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H5.5C5.22386 12 5 11.7761 5 11.5ZM5.5 15C5.22386 15 5 15.2239 5 15.5C5 15.7761 5.22386 16 5.5 16H14.5C14.7761 16 15 15.7761 15 15.5C15 15.2239 14.7761 15 14.5 15H5.5Z",fill:"currentColor",fillOpacity:.9})})}function d7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H5.5C5.22386 8 5 7.77614 5 7.5ZM8 11.5C8 11.2239 8.22386 11 8.5 11H15.5C15.7761 11 16 11.2239 16 11.5C16 11.7761 15.7761 12 15.5 12H8.5C8.22386 12 8 11.7761 8 11.5ZM7.5 15C7.22386 15 7 15.2239 7 15.5C7 15.7761 7.22386 16 7.5 16H16.5C16.7761 16 17 15.7761 17 15.5C17 15.2239 16.7761 15 16.5 15H7.5Z",fill:"currentColor",fillOpacity:.9})})}function f7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 7.5C19 7.22386 18.7761 7 18.5 7H5.5C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H18.5C18.7761 8 19 7.77614 19 7.5ZM19 11.5C19 11.2239 18.7761 11 18.5 11H11.5C11.2239 11 11 11.2239 11 11.5C11 11.7761 11.2239 12 11.5 12H18.5C18.7761 12 19 11.7761 19 11.5ZM18.5 15C18.7761 15 19 15.2239 19 15.5C19 15.7761 18.7761 16 18.5 16H9.5C9.22386 16 9 15.7761 9 15.5C9 15.2239 9.22386 15 9.5 15H18.5Z",fill:"currentColor",fillOpacity:.9})})}function p7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H5.5ZM11.8536 7.14645C11.6583 6.95118 11.3417 6.95118 11.1464 7.14645L8.14645 10.1464C7.95118 10.3417 7.95118 10.6583 8.14645 10.8536C8.34171 11.0488 8.65829 11.0488 8.85355 10.8536L11 8.70711V16.5C11 16.7761 11.2239 17 11.5 17C11.7761 17 12 16.7761 12 16.5V8.70711L14.1464 10.8536C14.3417 11.0488 14.6583 11.0488 14.8536 10.8536C15.0488 10.6583 15.0488 10.3417 14.8536 10.1464L11.8536 7.14645Z",fill:"currentColor",fillOpacity:.9})})}function h7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8536 9.85355L13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L12 8.29289V4.5C12 4.22386 11.7761 4 11.5 4C11.2239 4 11 4.22386 11 4.5V8.29289L9.85355 7.14645C9.65829 6.95118 9.34171 6.95118 9.14645 7.14645C8.95118 7.34171 8.95118 7.65829 9.14645 7.85355L11.1464 9.85355C11.3417 10.0488 11.6583 10.0488 11.8536 9.85355ZM11.8536 13.1464L13.8536 15.1464C14.0488 15.3417 14.0488 15.6583 13.8536 15.8536C13.6583 16.0488 13.3417 16.0488 13.1464 15.8536L12 14.7071V18.5C12 18.7761 11.7761 19 11.5 19C11.2239 19 11 18.7761 11 18.5V14.7071L9.85355 15.8536C9.65829 16.0488 9.34171 16.0488 9.14645 15.8536C8.95118 15.6583 8.95118 15.3417 9.14645 15.1464L11.1464 13.1464C11.3417 12.9512 11.6583 12.9512 11.8536 13.1464ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12H17.5C17.7761 12 18 11.7761 18 11.5C18 11.2239 17.7761 11 17.5 11H5.5Z",fill:"currentColor",fillOpacity:.9})})}function g7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8536 13.8536L11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464C8.34171 12.9512 8.65829 12.9512 8.85355 13.1464L11 15.2929V7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5V15.2929L14.1464 13.1464C14.3417 12.9512 14.6583 12.9512 14.8536 13.1464C15.0488 13.3417 15.0488 13.6583 14.8536 13.8536ZM5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H17.5C17.7761 18 18 18.2239 18 18.5C18 18.7761 17.7761 19 17.5 19H5.5Z",fill:"currentColor",fillOpacity:.9})})}function m7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 7H7.5C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V7.5C17 7.22386 16.7761 7 16.5 7ZM7.5 6C6.67157 6 6 6.67157 6 7.5V16.5C6 17.3284 6.67157 18 7.5 18H16.5C17.3284 18 18 17.3284 18 16.5V7.5C18 6.67157 17.3284 6 16.5 6H7.5Z",fill:"currentColor",fillOpacity:.9})})}function v7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{d:"M9.2998 18C10.1282 18 10.7998 17.3284 10.7998 16.5L10.7998 7.5C10.7998 6.67157 10.1282 6 9.2998 6H7.5L7.34668 6.00781C6.59028 6.08461 6 6.72334 6 7.5L6 16.5C6 17.3284 6.67157 18 7.5 18H9.2998ZM16.5 18C17.3283 17.9998 18 17.3283 18 16.5V7.5C18 6.67167 17.3283 6.00015 16.5 6H14.7002L14.5469 6.00781C13.7905 6.08461 13.2002 6.72334 13.2002 7.5L13.2002 16.5C13.2002 17.3284 13.8718 18 14.7002 18H16.5ZM7.5 17C7.22386 17 7 16.7761 7 16.5L7 7.5C7 7.22386 7.22386 7 7.5 7H9.2998C9.57595 7 9.7998 7.22386 9.7998 7.5L9.7998 16.5C9.7998 16.7761 9.57595 17 9.2998 17H7.5ZM14.7002 17C14.4241 17 14.2002 16.7761 14.2002 16.5L14.2002 7.5C14.2002 7.22386 14.4241 7 14.7002 7H16.5C16.776 7.00015 17 7.22395 17 7.5V16.5C17 16.7761 16.776 16.9998 16.5 17H14.7002Z",fill:"currentColor",fillOpacity:.9})})}function x7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{d:"M6 9.2998C6 10.1282 6.67157 10.7998 7.5 10.7998L16.5 10.7998C17.3284 10.7998 18 10.1282 18 9.29981L18 7.5L17.9922 7.34668C17.9154 6.59028 17.2767 6 16.5 6L7.5 6C6.67157 6 6 6.67157 6 7.5L6 9.2998ZM6 16.5C6.00015 17.3283 6.67167 18 7.5 18L16.5 18C17.3283 18 17.9998 17.3283 18 16.5L18 14.7002L17.9922 14.5469C17.9154 13.7905 17.2767 13.2002 16.5 13.2002L7.5 13.2002C6.67157 13.2002 6 13.8718 6 14.7002L6 16.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7L16.5 7C16.7761 7 17 7.22386 17 7.5L17 9.29981C17 9.57595 16.7761 9.79981 16.5 9.79981L7.5 9.7998C7.22386 9.7998 7 9.57595 7 9.2998L7 7.5ZM7 14.7002C7 14.4241 7.22386 14.2002 7.5 14.2002L16.5 14.2002C16.7761 14.2002 17 14.4241 17 14.7002L17 16.5C16.9998 16.776 16.776 17 16.5 17L7.5 17C7.22395 17 7.00015 16.776 7 16.5L7 14.7002Z",fill:"currentColor",fillOpacity:.9})})}function y7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 7H10V10H7V7ZM6 7C6 6.44771 6.44771 6 7 6H10C10.5523 6 11 6.44771 11 7V10C11 10.5523 10.5523 11 10 11H7C6.44771 11 6 10.5523 6 10V7ZM7 14H10V17H7V14ZM6 14C6 13.4477 6.44771 13 7 13H10C10.5523 13 11 13.4477 11 14V17C11 17.5523 10.5523 18 10 18H7C6.44771 18 6 17.5523 6 17V14ZM17 7H14V10H17V7ZM14 6C13.4477 6 13 6.44771 13 7V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 10.5523 18 10V7C18 6.44771 17.5523 6 17 6H14ZM14 14H17V17H14V14ZM13 14C13 13.4477 13.4477 13 14 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V14Z",fill:"currentColor"})})}function b7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 5.5C8 5.22386 8.22386 5 8.5 5C8.77614 5 9 5.22386 9 5.5V12.05C10.1411 12.2816 11 13.2905 11 14.5C11 15.7095 10.1411 16.7184 9 16.95V18.5C9 18.7761 8.77614 19 8.5 19C8.22386 19 8 18.7761 8 18.5V16.95C6.85888 16.7184 6 15.7095 6 14.5C6 13.2905 6.85888 12.2816 8 12.05V5.5ZM7 14.5C7 13.6716 7.67157 13 8.5 13C9.32843 13 10 13.6716 10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5ZM15 18.5C15 18.7761 15.2239 19 15.5 19C15.7761 19 16 18.7761 16 18.5V11.95C17.1411 11.7184 18 10.7095 18 9.5C18 8.29052 17.1411 7.28164 16 7.05001V5.5C16 5.22386 15.7761 5 15.5 5C15.2239 5 15 5.22386 15 5.5V7.05001C13.8589 7.28164 13 8.29052 13 9.5C13 10.7095 13.8589 11.7184 15 11.95V18.5ZM14 9.5C14 10.3284 14.6716 11 15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5Z",fill:"currentColor",fillOpacity:.9})})}function w7({size:e=16}){return l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.0839 4.22268C11.2371 3.99294 11.5475 3.93087 11.7773 4.08401C12.007 4.23718 12.0691 4.5476 11.916 4.77737L7.91596 10.7774C7.83287 10.902 7.69784 10.9833 7.54877 10.9981C7.39988 11.0127 7.25223 10.9593 7.14643 10.8535L4.14643 7.85354C3.9512 7.65827 3.95118 7.34176 4.14643 7.14651C4.34168 6.95126 4.6582 6.95128 4.85346 7.14651L7.42182 9.71487L11.0839 4.22268Z",fill:"currentColor",fillOpacity:.9})})}function uc({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.64645 11.1464C9.84171 10.9512 10.1583 10.9512 10.3536 11.1464L12 12.7929L13.6464 11.1464C13.8417 10.9512 14.1583 10.9512 14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536L9.64645 11.8536C9.45118 11.6583 9.45118 11.3417 9.64645 11.1464Z",fill:"currentColor",fillOpacity:.9})})}function C7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.6464 10.1464C11.8417 9.95118 12.1583 9.95118 12.3536 10.1464L14.3536 12.1464C14.5488 12.3417 14.5488 12.6583 14.3536 12.8536C14.1583 13.0488 13.8417 13.0488 13.6464 12.8536L12 11.2071L10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8535C9.45118 12.6583 9.45118 12.3417 9.64645 12.1464L11.6464 10.1464Z",fill:"currentColor",fillOpacity:.9})})}function ii({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z",fill:"currentColor",fillOpacity:.9})})}function Vr({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C6 11.7239 6.22386 11.5 6.5 11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H6.5C6.22386 12.5 6 12.2761 6 12Z",fill:"currentColor",fillOpacity:.9})})}function k7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 6.5C12.5 6.22386 12.2761 6 12 6C11.7239 6 11.5 6.22386 11.5 6.5V17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5V6.5ZM6 9.10355C6 8.43538 6.80786 8.10075 7.28033 8.57323L10 11.2929C10.3905 11.6834 10.3905 12.3166 10 12.7071L7.28033 15.4268C6.80785 15.8993 6 15.5646 6 14.8965V9.10355ZM7 14.2929L9.29289 12L7 9.70711V14.2929ZM18 9.10355C18 8.43538 17.1921 8.10075 16.7197 8.57323L14 11.2929C13.6095 11.6834 13.6095 12.3166 14 12.7071L16.7197 15.4268C17.1922 15.8993 18 15.5646 18 14.8965V9.10355ZM17 14.2929L14.7071 12L17 9.70711V14.2929Z",fill:"currentColor",fillOpacity:.9})})}function S7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7ZM10.5 6.5C10.2239 6.5 10 6.72386 10 7C10 7.27614 10.2239 7.5 10.5 7.5H17.5C17.7761 7.5 18 7.27614 18 7C18 6.72386 17.7761 6.5 17.5 6.5H10.5ZM10.5 16.5C10.2239 16.5 10 16.7239 10 17C10 17.2761 10.2239 17.5 10.5 17.5H17.5C17.7761 17.5 18 17.2761 18 17C18 16.7239 17.7761 16.5 17.5 16.5H10.5ZM10.5 11.5C10.2239 11.5 10 11.7239 10 12C10 12.2761 10.2239 12.5 10.5 12.5H17.5C17.7761 12.5 18 12.2761 18 12C18 11.7239 17.7761 11.5 17.5 11.5H10.5ZM6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16Z",fill:"currentColor",fillOpacity:.9})})}function j7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 7C11 6.72386 11.2238 6.5 11.5 6.5H17.5C17.7761 6.5 18 6.72386 18 7C18 7.27614 17.7761 7.5 17.5 7.5H11.5C11.2238 7.5 11 7.27614 11 7ZM6 7.00001C6 6.72387 6.22386 6.50001 6.5 6.50001H7.5C7.77614 6.50001 8 6.72387 8 7.00001V10.5C8 10.7762 7.77614 11 7.5 11C7.22386 11 7 10.7762 7 10.5V7.50001H6.5C6.22386 7.50001 6 7.27616 6 7.00001ZM6 13.5C6 13.2239 6.22386 13 6.5 13H8.5C8.77614 13 9 13.2239 9 13.5V15C9 15.1894 8.893 15.3625 8.72361 15.4472L7 16.309V16.5H8.5C8.77614 16.5 9 16.7239 9 17C9 17.2762 8.77614 17.5 8.5 17.5H6.5C6.22386 17.5 6 17.2762 6 17V16C6 15.8106 6.107 15.6375 6.27639 15.5528L8 14.691V14H6.5C6.22386 14 6 13.7762 6 13.5ZM11.5 16.5C11.2238 16.5 11 16.7239 11 17C11 17.2761 11.2238 17.5 11.5 17.5H17.5C17.7761 17.5 18 17.2761 18 17C18 16.7239 17.7761 16.5 17.5 16.5H11.5ZM11.5 11.5C11.2238 11.5 11 11.7239 11 12C11 12.2761 11.2238 12.5 11.5 12.5H17.5C17.7761 12.5 18 12.2761 18 12C18 11.7239 17.7761 11.5 17.5 11.5H11.5Z",fill:"currentColor",fillOpacity:.9})})}function R7({size:e}){return l.jsx(wt,{size:e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2322 6.47491C11.2085 5.4986 12.7915 5.4986 13.7678 6.47491L15.2929 8.00003H14C13.7239 8.00003 13.5 8.22389 13.5 8.50003C13.5 8.77618 13.7239 9.00003 14 9.00003H16.5C16.7761 9.00003 17 8.77618 17 8.50003V6.00003C17 5.72389 16.7761 5.50003 16.5 5.50003C16.2239 5.50003 16 5.72389 16 6.00003V7.29293L14.4749 5.7678C13.108 4.40097 10.892 4.40097 9.52513 5.7678L7.14645 8.14648C6.95118 8.34174 6.95118 8.65833 7.14645 8.85359C7.34171 9.04885 7.65829 9.04885 7.85355 8.85359L10.2322 6.47491ZM13.0607 9.64648C12.4749 9.0607 11.5251 9.06069 10.9393 9.64648L7.64645 12.9394C7.06066 13.5252 7.06066 14.4749 7.64645 15.0607L10.9393 18.3536C11.5251 18.9394 12.4749 18.9394 13.0607 18.3536L16.3536 15.0607C16.9393 14.4749 16.9393 13.5252 16.3536 12.9394L13.0607 9.64648ZM11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L15.6464 13.6465C15.8417 13.8417 15.8417 14.1583 15.6464 14.3536L12.3536 17.6465C12.1583 17.8417 11.8417 17.8417 11.6464 17.6465L8.35355 14.3536C8.15829 14.1583 8.15829 13.8417 8.35355 13.6465L11.6464 10.3536Z",fill:"currentColor",fillOpacity:.9})})}var L7=150,E7=()=>l.jsx(w7,{size:16}),N7=()=>l.jsx(C7,{size:20}),M7=()=>l.jsx(uc,{size:20}),cl=h.forwardRef(({options:e,value:t,highlightedIndex:n=-1,onSelect:r,onHighlight:o,onItemHover:i,showCheckmark:s=!0,style:a,minWidth:c,initialScrollTop:u,renderLabel:p},d)=>{const f=h.useRef(null),v=h.useRef(0),x=h.useRef(null),[m,R]=h.useState(!1),[y,g]=h.useState(!1),[C,S]=h.useState(-1),E=o?n:C,P=o??S,b=h.useCallback(re=>{f.current=re,typeof d=="function"?d(re):d&&(d.current=re)},[d]),T=h.useCallback(()=>{x.current=null,cancelAnimationFrame(v.current)},[]),W=h.useCallback(()=>{const re=f.current;if(!re)return;const D=re.scrollTop>1,k=re.scrollTop+re.clientHeight<re.scrollHeight-1;!D&&x.current==="up"&&T(),!k&&x.current==="down"&&T(),R(D),g(k)},[T]),N=h.useCallback(re=>{x.current=re;let D=performance.now();const k=M=>{const z=Math.min((M-D)/1e3,.05);D=M;const B=f.current;!B||!x.current||(B.scrollTop+=(x.current==="down"?1:-1)*L7*z,v.current=requestAnimationFrame(k))};v.current=requestAnimationFrame(k)},[]);return h.useLayoutEffect(()=>{u!=null&&u>0&&f.current&&(f.current.scrollTop=u),W()},[e.length,W,u]),h.useEffect(()=>()=>cancelAnimationFrame(v.current),[]),l.jsxs("div",{className:"retune-menu-wrapper",style:{minWidth:c,...a},children:[l.jsxs("div",{ref:b,className:"retune-menu-scroll",role:"listbox","aria-label":"Options",onScroll:W,children:[e.map((re,D)=>{const k=t===re.value,M=E===D;return l.jsxs(h.Fragment,{children:[re.separatorBefore&&l.jsx("div",{className:"retune-menu-separator",children:l.jsx("div",{className:"retune-menu-separator-line"})}),re.headingBefore&&l.jsx("div",{className:"retune-menu-heading",children:re.headingBefore}),l.jsx("div",{className:"retune-menu-item-wrap",children:l.jsxs("button",{type:"button",onClick:()=>r(re),onMouseEnter:()=>{P(D),i==null||i(re)},onMouseLeave:()=>{P(-1),i==null||i(null)},disabled:re.disabled,className:"retune-menu-item"+(M?" highlighted":"")+(k?" selected":"")+(re.disabled?" disabled":"")+(s?" has-check":""),role:"option","aria-selected":k,children:[s&&k&&l.jsx("span",{className:"retune-menu-check",children:l.jsx(E7,{})}),l.jsx("span",{className:"retune-menu-item-label",children:p?p(re):re.label}),re.shortcut&&l.jsx("span",{className:"retune-menu-item-shortcut",children:re.shortcut})]})})]},`${D}-${re.value}`)}),e.length===0&&l.jsx("div",{className:"retune-menu-empty",children:"No options available"})]}),m&&l.jsx("div",{className:"retune-menu-scroll-indicator top",onMouseEnter:()=>N("up"),onMouseLeave:T,"aria-hidden":"true",tabIndex:-1,children:l.jsx(N7,{})}),y&&l.jsx("div",{className:"retune-menu-scroll-indicator bottom",onMouseEnter:()=>N("down"),onMouseLeave:T,"aria-hidden":"true",tabIndex:-1,children:l.jsx(M7,{})})]})});cl.displayName="DropdownMenu";var Pl=28,Dh=6,Fh=8,T7=400;function L0(e,t,n){const r=Dh+t*Pl,o=Dh*2+n*Pl,i=Math.min(o,T7),s=window.innerHeight,a=e.top+e.height/2,c=a-r-Pl/2,u=Math.max(Fh,Math.min(c,s-Fh-i)),p=a-u-Pl/2,d=Math.max(0,o-i),f=Math.max(0,Math.min(r-p,d));return{top:u,left:e.left,width:e.width,scrollTop:f}}var E0=h.createContext(null);function A7(){return h.useContext(E0)}function _e({content:e,shortcut:t,side:n="bottom",sideOffset:r=6,delay:o=400,children:i}){const[s,a]=h.useState(!1),[c,u]=h.useState(null),p=h.useRef(null),d=h.useRef(null),f=h.useRef(null),v=A7(),x=h.useCallback(()=>{f.current=setTimeout(()=>{a(!0)},o)},[o]),m=h.useCallback(()=>{f.current&&(clearTimeout(f.current),f.current=null),a(!1)},[]);h.useLayoutEffect(()=>{if(!s){u(null);return}const y=p.current,g=d.current;if(!y||!g)return;const C=y.children[0];if(!C)return;const S=C.getBoundingClientRect(),E=g.getBoundingClientRect();let P=0,b=0;n==="bottom"?(P=S.bottom+r,b=S.left+(S.width-E.width)/2):n==="top"?(P=S.top-E.height-r,b=S.left+(S.width-E.width)/2):n==="right"?(P=S.top+(S.height-E.height)/2,b=S.right+r):(P=S.top+(S.height-E.height)/2,b=S.left-E.width-r);const T=Math.max(8,Math.min(b,window.innerWidth-E.width-8)),W=Math.max(8,Math.min(P,window.innerHeight-E.height-8)),N=S.left+S.width/2,re=S.top+S.height/2,D=N-T,k=re-W;g.style.setProperty("--caret-x",`${D}px`),g.style.setProperty("--caret-y",`${k}px`),u({top:W,left:T})},[s,n,r]);const R=s?l.jsxs("div",{ref:d,className:`retune-tooltip retune-tooltip-${n}`,style:c?{top:c.top,left:c.left,opacity:1}:{opacity:0},children:[l.jsx("span",{className:"retune-tooltip-text",children:e}),t&&l.jsx("span",{className:"retune-tooltip-shortcut",children:t})]}):null;return l.jsxs("div",{ref:p,className:"retune-tooltip-trigger",onPointerEnter:x,onPointerLeave:m,onPointerDown:m,children:[i,v?R&&no.createPortal(R,v):R]})}function Wr({isChanged:e,onReset:t}){const n=h.useRef(t);n.current=t;const r=h.useCallback(o=>{if(!o)return;const i=s=>{s.stopPropagation(),s.preventDefault(),n.current()};return o.addEventListener("pointerdown",i),()=>o.removeEventListener("pointerdown",i)},[]);return e?l.jsx(_e,{content:"Reset property",side:"top",delay:200,children:l.jsx("span",{ref:r,className:"retune-change-dot",children:l.jsx("span",{className:"retune-change-dot-inner"})})}):null}var Il=0,Bh="",Vh="";function dc(e){h.useEffect(()=>{if(e){if(Il===0){const t=document.documentElement,n=window.innerWidth-t.clientWidth;Bh=t.style.overflow,Vh=t.style.paddingRight,t.style.overflow="hidden",n>0&&(t.style.paddingRight=`${n}px`)}return Il++,()=>{if(Il--,Il===0){const t=document.documentElement;t.style.overflow=Bh,t.style.paddingRight=Vh}}}},[e])}function Hh(e){return e.charAt(0).toUpperCase()+e.slice(1).replace(/-/g," ")}function xn({label:e,prop:t,value:n,options:r,onChange:o,isChanged:i,onReset:s}){const[a,c]=h.useState(n||""),[u,p]=h.useState(!1),[d,f]=h.useState(-1),[v,x]=h.useState(null),m=h.useRef(null);dc(u);const[R,y]=h.useState(n);n!==R&&(y(n),c(n||""));const g=h.useCallback(()=>{const b=m.current;if(!b)return;const T=b.getBoundingClientRect(),W=Math.max(0,r.indexOf(a)),N=L0(T,W,r.length);x(N),p(!0),f(W)},[r,a]),C=h.useCallback(()=>{p(!1),f(-1),x(null)},[]);h.useEffect(()=>{var W;if(!u)return;const b=N=>{const re=m.current;if(!re)return;N.composedPath().includes(re)||C()},T=(W=m.current)==null?void 0:W.getRootNode();return T.addEventListener("pointerdown",b),()=>T.removeEventListener("pointerdown",b)},[u,C]);const S=r.map(b=>({value:b,label:Hh(b)})),E=b=>{c(b.value),o(t,b.value),C()},P=b=>{b.key==="Enter"||b.key===" "?(b.preventDefault(),u&&d>=0?E(S[d]):u?C():g()):b.key==="Escape"?C():b.key==="ArrowDown"?(b.preventDefault(),u?f(T=>T<r.length-1?T+1:T):g()):b.key==="ArrowUp"&&(b.preventDefault(),u&&f(T=>T>0?T-1:T))};return l.jsxs("div",{className:"retune-select",ref:m,children:[l.jsx(Wr,{isChanged:i??!1,onReset:s??(()=>{})}),l.jsxs("button",{type:"button",className:"retune-select-button",onClick:()=>{u?C():g()},onKeyDown:P,children:[e&&l.jsx("span",{className:"retune-select-label",children:e}),l.jsx("span",{className:"retune-select-value",style:e?void 0:{paddingLeft:8},children:Hh(a)}),l.jsx("span",{className:"retune-select-chevron",children:l.jsx(uc,{})})]}),u&&v&&l.jsx("div",{className:"retune-select-dropdown-anchor",style:{top:v.top,right:window.innerWidth-v.left-v.width,minWidth:v.width},children:l.jsx(cl,{options:S,value:a,highlightedIndex:d,onSelect:E,onHighlight:f,initialScrollTop:v.scrollTop,showCheckmark:!0})})]})}function $7(e,t){if(e.length<=t)return e;const n=t-1,r=Math.ceil(n*.4),o=Math.floor(n*.6);return e.slice(0,r)+"…"+e.slice(-o)}function _7({element:e,scopeLevels:t,activeLevelIndex:n,onScopeLevelChange:r,onScopeLevelHover:o,forcedState:i,onForcedStateChange:s}){var a;return l.jsxs(An,{label:(a=e.reactComponents)!=null&&a[0]?"Scope":e.tagName.toLowerCase(),children:[t.length>1&&r&&(()=>{const c=h.useRef(n),u=h.useRef(null),p=x=>{var R;if(((R=t[x])==null?void 0:R.selector)===null)return new Set;const m=new Set;for(let y=0;y<t.length-1;y++){const g=t[y],C=t[y+1];g.selector!==null&&C&&C.selector!==null&&y<x&&y+1<=x&&m.add(y)}return m},[d,f]=h.useState(()=>p(n)),v=h.useRef(new Map);return h.useEffect(()=>{const x=u.current;if(!x)return;const m=new Map;x.querySelectorAll("[data-level-index]").forEach(R=>{const y=parseInt(R.dataset.levelIndex||"0",10),g=getComputedStyle(R);m.set(y,{bg:g.backgroundColor,color:g.color})}),v.current=m}),h.useEffect(()=>{var k;const x=c.current;if(c.current=n,x===n)return;const m=p(x),R=p(n),y=[],g=[];if(R.forEach(M=>{m.has(M)||y.push(M)}),m.forEach(M=>{R.has(M)||g.push(M)}),y.length===0&&g.length===0){f(R);return}const C=u.current;if(!C){f(R);return}const S=320,E="cubic-bezier(0.77, 0, 0.175, 1)",P=6,b=M=>C.querySelector(`[data-level-index="${M}"]`),T=[...y,...g],W=new Map;for(const M of T)W.has(M)||W.set(M,new Set),W.get(M).add("right"),W.has(M+1)||W.set(M+1,new Set),W.get(M+1).add("left");const N=v.current,re=[];for(const[M]of W){const z=b(M);if(!z)continue;const B=N.get(M);B&&(z.style.backgroundColor=B.bg,z.style.color=B.color,re.push(z))}for(const[M,z]of W){const B=b(M);if(!B)continue;const ee=((k=N.get(M))==null?void 0:k.bg)||"#f5f5f4",H=[];z.has("right")&&H.push(`${P}px 0 0 0 ${ee}`),z.has("left")&&H.push(`-${P}px 0 0 0 ${ee}`);const se=H.join(", "),J=H.map(()=>`0px 0 0 0 ${ee}`).join(", "),ie="8px",de="0px",Re=`${z.has("left")?de:ie} ${z.has("right")?de:ie} ${z.has("right")?de:ie} ${z.has("left")?de:ie}`;B.animate([{boxShadow:J,borderRadius:`${ie} ${ie} ${ie} ${ie}`},{boxShadow:se,borderRadius:Re},{boxShadow:J,borderRadius:`${ie} ${ie} ${ie} ${ie}`}],{duration:S,easing:E})}const D=setTimeout(()=>{for(const M of re)M.style.removeProperty("background-color"),M.style.removeProperty("color");f(R)},S/2);return()=>clearTimeout(D)},[n,t]),l.jsx(nt,{label:"Target",children:l.jsx("div",{className:"retune-selector-field",ref:u,children:t.map((x,m)=>{var E;const R=m===n,y=x.selector===null,g=((E=t[n])==null?void 0:E.selector)===null,C=m<n&&!g,S=d.has(m);return l.jsxs(h.Fragment,{children:[y&&t.length>1&&l.jsx("span",{className:"retune-selector-divider"}),l.jsxs("button",{className:`retune-selector-tag${R?" active":""}${C?" included":""}`,"data-level-index":m,onClick:()=>r(m),onPointerEnter:()=>o==null?void 0:o(m),onPointerLeave:()=>o==null?void 0:o(null),children:[x.label.length>24?l.jsx(_e,{content:x.label,side:"bottom",delay:300,children:l.jsx("span",{className:"retune-selector-tag-name",children:$7(x.label,24)})}):l.jsx("span",{className:"retune-selector-tag-name",children:x.label}),x.count>1&&l.jsx(_e,{content:`${x.count} elements match this selector`,side:"bottom",delay:300,children:l.jsx("span",{className:"retune-selector-tag-count",children:x.count})})]}),S&&l.jsx("span",{className:"retune-selector-bridge filled"})]},x.selector??"__element")})})})})(),s&&l.jsx(nt,{label:"Trigger",children:l.jsx("div",{className:"retune-row",children:l.jsx(xn,{prop:"__state",value:i?{":hover":"Hover",":focus":"Focus",":active":"Active"}[i]??"None":"None",options:["None","Hover","Focus","Active"],onChange:(c,u)=>{s({None:null,Hover:":hover",Focus:":focus",Active:":active"}[u])}})})})]})}function Hi(e){if(/^-?\d+\.\d+$/.test(e.trim())){const t=parseFloat(parseFloat(e).toFixed(2));return String(t)}return e.replace(/-?\d+\.\d+/g,t=>{const n=parseFloat(parseFloat(t).toFixed(2));return String(n)})}var P7=new Set(["opacity","z-index","zIndex","font-weight","fontWeight","flex-grow","flexGrow","flex-shrink","flexShrink","order","orphans","widows","columns","column-count","columnCount","tab-size","tabSize"]),I7=/[a-z%]+$/i,z7=/^-?\d+(\.\d+)?$/,O7=new Set(["px","em","rem","%","vh","vw","vmin","vmax","ch","ex","cap","ic","lh","rlh","svh","svw","lvh","lvw","dvh","dvw","cm","mm","in","pt","pc","q","deg","rad","grad","turn","s","ms","fr"]);function Wi(e,t,n){const r=e.trim();if(!z7.test(r)||P7.has(n))return r;const o=t.match(I7);return o&&O7.has(o[0].toLowerCase())?r+o[0]:r+"px"}function Ia({title:e,tabs:t,activeTab:n,onTabChange:r,onClose:o,anchorRect:i,search:s,children:a,headerActions:c,onHeaderAction:u,maxHeight:p=400,minHeight:d=400,className:f}){var z;const v=h.useRef(null),x=h.useRef(null);dc(!0);const m=h.useRef(o);m.current=o;const R=h.useRef(u);R.current=u,h.useEffect(()=>{if(!s)return;const B=setTimeout(()=>{var ee;return(ee=x.current)==null?void 0:ee.focus()},0);return()=>clearTimeout(B)},[!!s]),h.useEffect(()=>{var J;const B=ie=>{const de=v.current;de&&(ie.composedPath().includes(de)||m.current())},ee=ie=>{ie.key==="Escape"&&(ie.preventDefault(),ie.stopPropagation(),m.current())},H=(J=v.current)==null?void 0:J.getRootNode(),se=setTimeout(()=>{H.addEventListener("pointerdown",B)},0);return H.addEventListener("keydown",ee,!0),document.addEventListener("keydown",ee,!0),()=>{clearTimeout(se),H.removeEventListener("pointerdown",B),H.removeEventListener("keydown",ee,!0),document.removeEventListener("keydown",ee,!0)}},[]),h.useEffect(()=>{const B=v.current;if(!B)return;const ee=H=>{var ie;const se=H.target;if(se.closest("[data-dialog-close]")){H.preventDefault(),H.stopPropagation(),m.current();return}const J=se.closest("[data-dialog-action]");if(J){H.preventDefault(),H.stopPropagation();const de=J.dataset.dialogAction;de&&((ie=R.current)==null||ie.call(R,de))}};return B.addEventListener("pointerdown",ee),()=>B.removeEventListener("pointerdown",ee)},[]);const y=document.querySelector("[data-retune-host]"),g=(z=y==null?void 0:y.shadowRoot)==null?void 0:z.querySelector(".retune-panel"),C=g==null?void 0:g.getBoundingClientRect(),S=C?C.width-24:240,E=C?C.left+(C.width-S)/2:Math.max(4,Math.min(i.left+i.width-S,window.innerWidth-S-4)),P=4,b=window.innerHeight-i.top-i.height-P,T=i.top-P,W=b<p&&T>b,N=Math.min(p,W?T:b),re=Math.min(d,N),D=W?{position:"fixed",bottom:window.innerHeight-i.top+P,left:E,width:S,maxHeight:N,minHeight:re}:{position:"fixed",top:i.top+i.height+P,left:E,width:S,maxHeight:N,minHeight:re},k=!!t,M=k&&t.length===1;return l.jsxs("div",{ref:v,className:`retune-floating-dialog${f?` ${f}`:""}`,style:D,children:[l.jsxs("div",{className:"retune-floating-dialog-header",children:[l.jsx("div",{className:"retune-floating-dialog-title-area",children:k?t.map(B=>{const ee=B.value===n;return l.jsx("button",{type:"button",className:M?"retune-floating-dialog-tab retune-floating-dialog-tab-single":`retune-floating-dialog-tab${ee?" retune-floating-dialog-tab-active":""}`,onClick:r?()=>r(B.value):void 0,children:B.label},B.value)}):l.jsx("span",{className:"retune-floating-dialog-title",children:e})}),c,l.jsx("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-close":!0,children:l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.6464 6.64645C16.8417 6.45118 17.1582 6.45118 17.3535 6.64645C17.5487 6.84171 17.5487 7.15822 17.3535 7.35348L12.707 12L17.3535 16.6464C17.5487 16.8417 17.5487 17.1582 17.3535 17.3535C17.1582 17.5487 16.8417 17.5487 16.6464 17.3535L12 12.707L7.35348 17.3535C7.15822 17.5487 6.84171 17.5487 6.64645 17.3535C6.45118 17.1582 6.45118 16.8417 6.64645 16.6464L11.2929 12L6.64645 7.35348C6.45123 7.15821 6.4512 6.84169 6.64645 6.64645C6.8417 6.45125 7.15823 6.45125 7.35348 6.64645L12 11.2929L16.6464 6.64645Z",fill:"currentColor"})})})]}),s&&l.jsx("div",{className:"retune-floating-dialog-search",children:l.jsx("input",{ref:x,className:"retune-floating-dialog-search-input",placeholder:s.placeholder||"Search",value:s.value,onChange:B=>s.onChange(B.target.value),onKeyDown:s.onKeyDown,spellCheck:!1})}),l.jsx("div",{className:"retune-floating-dialog-body",children:a})]})}function D7(e){return e.startsWith("var(--")&&e.endsWith(")")?e.slice(6,-1):e}function F7(e){const t=Object.values(e.values);if(t.length===0)return"";const n=t[0];return n.length>20?n.slice(0,20)+"…":n}function B7(e){for(const[t,n]of Object.entries(e.values)){if(t.includes("color")||t==="background-color"||t==="fill"||t==="stroke")return n;const r=n.trim().toLowerCase();if(r.startsWith("#")||r.startsWith("rgb")||r.startsWith("hsl")||r.startsWith("oklch")||r.startsWith("oklab"))return n}return null}function hd({property:e,currentVariable:t,onSelect:n,onUnlink:r,onClose:o,anchorRect:i}){const s=h.useRef(null),[a,c]=h.useState(""),[u,p]=h.useState(-1),d=h.useMemo(()=>v0(e),[e]),v=_o(e.replace(/[A-Z]/g,P=>`-${P.toLowerCase()}`))==="colors",x=h.useMemo(()=>{if(!a)return d;const P=a.toLowerCase();return d.filter(b=>b.className.toLowerCase().includes(P)||Object.values(b.values).some(T=>T.toLowerCase().includes(P)))},[d,a]);h.useEffect(()=>{p(-1)},[x]),h.useEffect(()=>{if(u<0)return;const P=s.current;if(!P)return;const b=P.querySelector(`[data-token-index="${u}"]`);b&&b.scrollIntoView({block:"nearest"})},[u]);const m=h.useRef(n);m.current=n;const R=h.useRef(o);R.current=o;const y=h.useRef(x);y.current=x;const g=h.useCallback(P=>{const b=y.current.length;b!==0&&(P.key==="ArrowDown"?(P.preventDefault(),p(T=>(T+1)%b)):P.key==="ArrowUp"?(P.preventDefault(),p(T=>T<=0?b-1:T-1)):P.key==="Enter"&&(P.preventDefault(),p(T=>{if(T>=0&&T<b){const W=y.current[T];W&&(m.current(W),R.current())}return T})))},[]);h.useEffect(()=>{const P=s.current;if(!P)return;const b=T=>{const N=T.target.closest("[data-token-index]");if(!N)return;T.preventDefault(),T.stopPropagation();const re=parseInt(N.dataset.tokenIndex,10),D=y.current[re];D&&(m.current(D),R.current())};return P.addEventListener("pointerdown",b),()=>P.removeEventListener("pointerdown",b)},[]);const C=h.useCallback(P=>{P==="unlink"&&(r==null||r())},[r]),S=!t,E=l.jsx(_e,{content:t?"Unlink variable":"No variable linked",side:"bottom",delay:300,children:l.jsx("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-action":S?void 0:"unlink",style:S?{opacity:.3,cursor:"default"}:void 0,children:l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.14694 12.1475C8.3422 11.9522 8.65871 11.9522 8.85397 12.1475C9.04903 12.3427 9.04916 12.6593 8.85397 12.8545L7.35397 14.3545C6.72133 14.9876 6.72123 16.0134 7.35397 16.6465C7.98708 17.2796 9.01376 17.2795 9.64694 16.6465L11.1469 15.1465C11.3421 14.9517 11.6588 14.9517 11.854 15.1465C12.0491 15.3416 12.0488 15.6582 11.854 15.8535L10.354 17.3535C9.33027 18.377 7.67057 18.3771 6.64694 17.3535C5.62359 16.3299 5.6235 14.6701 6.64694 13.6465L8.14694 12.1475ZM14.5005 15.5C14.7764 15.5001 15.0004 15.724 15.0005 16V17.5C15.0005 17.7761 14.7765 17.9999 14.5005 18C14.2243 18 14.0005 17.7761 14.0005 17.5V16C14.0005 15.7239 14.2244 15.5 14.5005 15.5ZM17.5005 14C17.7764 14.0001 18.0004 14.224 18.0005 14.5C18.0005 14.7761 17.7765 14.9999 17.5005 15H16.0005C15.7243 15 15.5005 14.7761 15.5005 14.5C15.5005 14.2239 15.7244 14 16.0005 14H17.5005ZM13.6469 6.64648C14.6706 5.62308 16.3303 5.62301 17.354 6.64648C18.3774 7.6701 18.3774 9.32986 17.354 10.3535L15.854 11.8535C15.6587 12.0487 15.3422 12.0487 15.1469 11.8535C14.9517 11.6583 14.9518 11.3417 15.1469 11.1465L16.6469 9.64648C17.2798 9.01335 17.2799 7.98661 16.6469 7.35351C16.0138 6.72057 14.9871 6.72064 14.354 7.35351L12.854 8.85351C12.6588 9.04859 12.3422 9.04843 12.1469 8.85351C11.952 8.65825 11.9519 8.34165 12.1469 8.14648L13.6469 6.64648ZM8.00045 9C8.27642 9.00014 8.50036 9.22402 8.50045 9.5C8.50045 9.77605 8.27647 9.99985 8.00045 10H6.50045C6.22431 10 6.00045 9.77614 6.00045 9.5C6.00054 9.22393 6.22437 9 6.50045 9H8.00045ZM9.50045 6C9.77642 6.00014 10.0004 6.22402 10.0005 6.5V8C10.0005 8.27605 9.77647 8.49985 9.50045 8.5C9.22431 8.5 9.00045 8.27614 9.00045 8V6.5C9.00054 6.22393 9.22437 6 9.50045 6Z",fill:"currentColor"})})})});return l.jsx(Ia,{title:"Variables",onClose:o,anchorRect:i,search:{value:a,onChange:c,placeholder:"Search",onKeyDown:g},headerActions:E,onHeaderAction:C,minHeight:400,children:l.jsxs("div",{ref:s,className:"retune-variable-dialog-list",children:[x.length===0&&l.jsx("div",{className:"retune-variable-dialog-empty",children:"No variables found"}),x.map((P,b)=>{const T=(t==null?void 0:t.className)===P.className,W=b===u;return l.jsxs("div",{className:`retune-variable-dialog-item${T?" retune-variable-dialog-item-active":""}${W?" retune-variable-dialog-item-highlighted":""}`,"data-token-index":b,children:[v&&l.jsx("span",{className:"retune-variable-dialog-swatch",style:{backgroundColor:B7(P)||"transparent"}}),l.jsx("span",{className:"retune-variable-dialog-name",children:D7(P.className)}),l.jsx("span",{className:"retune-variable-dialog-value",children:F7(P)})]},P.className)})]})})}var Li=null;function Qs(e){Li&&Li!==e&&Li(),Li=e}function Nr(e){Li===e&&(Li=null)}function V7(){return l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12.5 11.0346C13.0522 11.0346 13.4999 11.4824 13.5 12.0346C13.5 12.5868 13.0523 13.0346 12.5 13.0346C11.9477 13.0346 11.5 12.5868 11.5 12.0346C11.5001 11.4824 11.9478 11.0346 12.5 11.0346Z",fill:"currentColor"}),l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 6.26795C12.1188 5.91068 12.8812 5.91068 13.5 6.26795L17 8.28846C17.6187 8.64574 18 9.30641 18 10.0209V14.0619C17.9999 14.7763 17.6187 15.4371 17 15.7943L13.5 17.8148C12.8813 18.1719 12.1187 18.1719 11.5 17.8148L8 15.7943C7.3813 15.4371 7.00013 14.7763 7 14.0619V10.0209C7 9.30641 7.38129 8.64574 8 8.28846L11.5 6.26795ZM13 7.13416C12.6906 6.95553 12.3094 6.95553 12 7.13416L8.5 9.15467L8.38965 9.22791C8.14588 9.41565 8 9.70826 8 10.0209V14.0619C8.00013 14.419 8.1907 14.7495 8.5 14.9281L12 16.9486C12.2707 17.1048 12.5965 17.1244 12.8809 17.0072L13 16.9486L16.5 14.9281C16.8093 14.7495 16.9999 14.419 17 14.0619V10.0209C17 9.70826 16.8541 9.41565 16.6104 9.22791L16.5 9.15467L13 7.13416Z",fill:"currentColor"})]})}function H7(){return l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M12.3533 14.646C12.5485 14.8412 12.5484 15.1578 12.3533 15.3531L11.3534 16.353C10.3297 17.3765 8.67028 17.3766 7.64665 16.353C6.62317 15.3294 6.62317 13.6699 7.64665 12.6462L8.64654 11.6463C8.84181 11.4512 9.15844 11.4511 9.35364 11.6463C9.54883 11.8415 9.54874 12.1582 9.35364 12.3534L8.35375 13.3533C7.7208 13.9865 7.7208 15.0128 8.35375 15.6459C8.98687 16.279 10.0132 16.2789 10.6463 15.6459L11.6462 14.646C11.8414 14.451 12.1581 14.4511 12.3533 14.646ZM8.0002 9.00021C8.27634 9.00021 8.50015 9.22401 8.50015 9.50015C8.49994 9.77612 8.27622 10.0001 8.0002 10.0001H6.50036C6.22434 10.0001 6.00061 9.77612 6.00041 9.50015C6.00041 9.22401 6.22422 9.00021 6.50036 9.00021H8.0002ZM14.5002 15.5002C14.7763 15.5002 15.0001 15.724 15.0001 16.0001V17.5C15 17.776 14.7763 17.9999 14.5002 17.9999C14.2241 17.9999 14.0004 17.776 14.0002 17.5V16.0001C14.0002 15.724 14.2241 15.5002 14.5002 15.5002ZM9.50073 5.99984C9.77664 6.00011 10.0007 6.22381 10.0007 6.49978V7.99962C10.0007 8.2756 9.77664 8.4993 9.50073 8.49957C9.22459 8.49957 9.00078 8.27576 9.00078 7.99962V6.49978C9.00078 6.22364 9.22459 5.99984 9.50073 5.99984ZM17.5006 13.9997C17.7765 13.9998 18.0004 14.2237 18.0005 14.4996C18.0005 14.7757 17.7766 14.9994 17.5006 14.9996H16.0007C15.7246 14.9996 15.5008 14.7758 15.5008 14.4996C15.5009 14.2235 15.7246 13.9997 16.0007 13.9997H17.5006ZM16.3543 7.64676C17.3774 8.67043 17.3776 10.33 16.3543 11.3535L15.3544 12.3534C15.1592 12.5486 14.8426 12.5484 14.6473 12.3534C14.452 12.1582 14.452 11.8416 14.6473 11.6463L15.6472 10.6464C16.28 10.0134 16.2798 8.98702 15.6472 8.35387C15.0141 7.72075 13.9871 7.72018 13.3539 8.35317L12.354 9.35307C12.1588 9.54825 11.8422 9.54808 11.6469 9.35307C11.4519 9.15779 11.4517 8.84114 11.6469 8.64596L12.6468 7.64607C13.6705 6.62254 15.3306 6.62312 16.3543 7.64676Z",fill:"currentColor",fillOpacity:.9})})}function Ui({match:e,property:t,relatedProperties:n,onVariableSelect:r,onVariableApply:o,onVariableUnlink:i,onRequestOpen:s,openPickerRef:a}){var W;const[c,u]=h.useState(!1),[p,d]=h.useState(null),f=h.useRef(!1);f.current=c;const v=h.useRef(null),x=h.useRef(()=>u(!1)),m=h.useMemo(()=>x0(t),[t]),R=!!e,y=h.useRef(s);y.current=s;const g=h.useRef(i);g.current=i;const C=h.useCallback(()=>{const N=v.current;if(!N)return;if(f.current){Nr(x.current),u(!1);return}const re=N.closest(".retune-prop, .retune-color-row, .retune-row, .retune-combo"),D=re?re.getBoundingClientRect():N.getBoundingClientRect();d({top:D.top,left:D.left,width:D.width,height:D.height}),u(!0),Qs(x.current)},[]),S=h.useCallback(N=>{v.current&&v.current!==N&&v.current.removeEventListener("pointerdown",E),v.current=N,N&&N.addEventListener("pointerdown",E)},[]);function E(N){var z;if(N.stopPropagation(),N.preventDefault(),N.target.closest(".retune-variable-unlink")){(z=g.current)==null||z.call(g);return}if(y.current){y.current();return}const D=v.current;if(!D)return;if(f.current){Nr(x.current),u(!1);return}const k=D.closest(".retune-prop, .retune-color-row, .retune-row, .retune-combo"),M=k?k.getBoundingClientRect():D.getBoundingClientRect();d({top:M.top,left:M.left,width:M.width,height:M.height}),u(!0),Qs(x.current)}const P=h.useCallback(N=>{const re=n||[t];e?r==null||r(e.variable,N,re):o==null||o(N,re)},[e,t,n,r,o]),b=h.useCallback(()=>{Nr(x.current),u(!1)},[]);if(!R&&!m)return null;const T=((W=v.current)==null?void 0:W.getRootNode())instanceof ShadowRoot?v.current.getRootNode().querySelector("[data-retune-container]"):null;return a&&(a.current=C),l.jsxs(l.Fragment,{children:[R?l.jsx(_e,{content:"Unlink variable",side:"top",delay:300,children:l.jsx("span",{ref:S,className:"retune-variable-action retune-variable-unlink",children:l.jsx(H7,{})})}):l.jsx(_e,{content:"Add variable",side:"top",delay:300,children:l.jsx("span",{ref:S,className:"retune-variable-action retune-variable-add",children:l.jsx(V7,{})})}),c&&p&&T&&no.createPortal(l.jsx(hd,{property:t,currentVariable:e==null?void 0:e.variable,onSelect:P,onUnlink:i?()=>{i(),b()}:void 0,onClose:b,anchorRect:p}),T)]})}function N0(e,t){const n=bb(),r=h.useRef(!1);return h.useEffect(()=>n?n.subscribe(e,i=>{const s=t.current;s&&(i&&n.active?(s.value=i,r.current=!0):r.current=!1)}):void 0,[n,e,t]),r}function oa(e,t,n){return t!==void 0&&e<t?t:n!==void 0&&e>n?n:e}function Wh(e,t,n){var s;if(t===void 0&&n===void 0)return e;const r=parseFloat(e);if(isNaN(r))return e;const o=oa(r,t,n);if(o===r)return e;const i=((s=e.match(/[a-z%]+$/i))==null?void 0:s[0])||"";return`${o}${i}`}function ht({label:e,prop:t,value:n,placeholder:r,onChange:o,min:i,max:s,step:a,variableMatch:c,property:u,onVariableSelect:p,onVariableApply:d,onVariableUnlink:f,isChanged:v,onReset:x}){const[m,R]=h.useState(Hi(n||"")),y=h.useRef(null),g=h.useRef(null),C=h.useRef(null),S=N0(t,C),E=h.useCallback(()=>{var ie;c&&((ie=g.current)==null||ie.call(g))},[c]),[P,b]=h.useState(n);n!==P&&(b(n),S.current||R(Hi(n||"")));const T=h.useRef({startX:0,startVal:0,active:!1}),W=ie=>{const de=parseFloat(m);isNaN(de)||(T.current={startX:ie.clientX,startVal:de,active:!0},ie.target.setPointerCapture(ie.pointerId))},N=ie=>{var Je;if(!T.current.active)return;const de=ie.clientX-T.current.startX,Re=a??1,He=T.current.startVal+Math.round(de)*Re,Ke=Re<1?Math.ceil(-Math.log10(Re)):0,ve=Ke>0?parseFloat(He.toFixed(Ke)):He,te=oa(ve,i,s),Ie=((Je=m.match(/[a-z%]+$/i))==null?void 0:Je[0])||"",dt=`${te}${Ie}`;R(dt),o(t,dt)},re=()=>{T.current.active=!1},D=16,k=ie=>{if(e)return;const de=ie.currentTarget.getBoundingClientRect();if(ie.clientX-de.left>D)return;const Re=parseFloat(m);isNaN(Re)||(ie.preventDefault(),T.current={startX:ie.clientX,startVal:Re,active:!0},ie.currentTarget.setPointerCapture(ie.pointerId))},M=ie=>{var He;if(T.current.active){const Ke=ie.clientX-T.current.startX,ve=a??1,te=T.current.startVal+Math.round(Ke)*ve,Ie=ve<1?Math.ceil(-Math.log10(ve)):0,dt=Ie>0?parseFloat(te.toFixed(Ie)):te,Je=oa(dt,i,s),St=((He=m.match(/[a-z%]+$/i))==null?void 0:He[0])||"",ft=`${Je}${St}`;R(ft),o(t,ft);return}const de=ie.currentTarget.getBoundingClientRect(),Re=ie.clientX-de.left<=D;ie.currentTarget.style.cursor=Re?"ew-resize":""},z=()=>{T.current.active=!1},B=ie=>{ie.target.select()},ee=ie=>{R(ie.target.value)},H=ie=>{const de=Wh(Wi(ie,n||"",t),i,s);R(de),o(t,de)},se=()=>{Wh(Wi(m,n||"",t),i,s)!==n&&H(m)},J=ie=>{var de;if(ie.key==="Enter"&&(H(m),ie.target.blur()),ie.key==="ArrowUp"||ie.key==="ArrowDown"){ie.preventDefault();const Re=parseFloat(m);if(isNaN(Re))return;const He=a??1,Ke=ie.shiftKey?He*10:He,ve=ie.key==="ArrowUp"?Ke:-Ke,te=Re+ve,Ie=He<1?Math.ceil(-Math.log10(He)):0,dt=Ie>0?parseFloat(te.toFixed(Ie)):te,Je=oa(dt,i,s),St=((de=m.match(/[a-z%]+$/i))==null?void 0:de[0])||"",ft=`${Je}${St}`;R(ft),o(t,ft)}};return l.jsxs("div",{className:`retune-prop${c?" retune-prop-variable-applied":""}`,children:[l.jsx(Wr,{isChanged:v??!1,onReset:x??(()=>{})}),e&&l.jsx("span",{ref:y,className:"retune-prop-label",onClick:E,onPointerDown:c?void 0:W,onPointerMove:c?void 0:N,onPointerUp:c?void 0:re,children:e}),l.jsx("input",{ref:C,className:"retune-prop-input",style:e?void 0:{paddingLeft:8},value:m,placeholder:r||"–",readOnly:!!c,onClick:E,onPointerDown:!e&&!c?k:void 0,onPointerMove:!e&&!c?M:void 0,onPointerUp:!e&&!c?z:void 0,onFocus:c?void 0:B,onChange:c?void 0:ee,onBlur:c?void 0:se,onKeyDown:c?void 0:J,spellCheck:!1}),l.jsx(Ui,{match:c,property:u||t,onVariableSelect:p,onVariableApply:d,onVariableUnlink:f,openPickerRef:g})]})}function zl({side:e,pinned:t,onClick:n}){const r=e==="top"||e==="bottom";return l.jsx("button",{type:"button",onClick:n,className:`retune-pin-line ${e}`,"aria-label":`${t?"Unpin":"Pin"} ${e}`,children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r?l.jsx("line",{x1:"8",y1:"3",x2:"8",y2:"13",stroke:t?"#3b82f6":"#d6d3d1",strokeWidth:"2",strokeLinecap:"round"}):l.jsx("line",{x1:"3",y1:"8",x2:"13",y2:"8",stroke:t?"#3b82f6":"#d6d3d1",strokeWidth:"2",strokeLinecap:"round"})})})}function W7({top:e,right:t,bottom:n,left:r,pins:o,centered:i,onChange:s,onPinChange:a,onCenterChange:c}){const u=o.top&&o.right&&o.bottom&&o.left,p=f=>{const v=o[f];if(a(f,!v),i&&(c(!1),s("transform","none")),v)s(f,"auto");else{const m={top:e,right:t,bottom:n,left:r}[f];(!m||m==="auto")&&s(f,"0px")}},d=()=>{i?(c(!1),a("top",!1),a("right",!1),a("bottom",!1),a("left",!1),s("top","auto"),s("right","auto"),s("bottom","auto"),s("left","auto"),s("transform","none")):u?(c(!0),s("top","50%"),s("right","auto"),s("bottom","auto"),s("left","50%"),s("transform","translate(-50%, -50%)")):["top","right","bottom","left"].forEach(f=>{if(!o[f]){a(f,!0);const v={top:e,right:t,bottom:n,left:r};(!v[f]||v[f]==="auto")&&s(f,"0px")}})};return l.jsxs("div",{className:"retune-constraints",children:[l.jsx("div",{className:"retune-constraints-side",children:l.jsx(ht,{label:"L",prop:"left",value:r,onChange:s})}),l.jsxs("div",{className:"retune-constraints-center",children:[l.jsx(ht,{label:"T",prop:"top",value:e,onChange:s}),l.jsxs("div",{className:"retune-pin-box",children:[l.jsx(zl,{side:"top",pinned:!i&&o.top,onClick:()=>p("top")}),l.jsx(zl,{side:"right",pinned:!i&&o.right,onClick:()=>p("right")}),l.jsx(zl,{side:"bottom",pinned:!i&&o.bottom,onClick:()=>p("bottom")}),l.jsx(zl,{side:"left",pinned:!i&&o.left,onClick:()=>p("left")}),l.jsx("button",{type:"button",onClick:d,className:"retune-pin-center-btn","aria-label":i?"Clear center alignment":u?"Align to center":"Pin all sides",children:i&&l.jsx("span",{className:"retune-pin-center-dot"})})]}),l.jsx(ht,{label:"B",prop:"bottom",value:n,onChange:s})]}),l.jsx("div",{className:"retune-constraints-side",children:l.jsx(ht,{label:"R",prop:"right",value:t,onChange:s})})]})}function U7({element:e,s:t,onPropertyChange:n,changeProps:r,isFlexChild:o,isGridChild:i,parentFlexDir:s,onPinLinesChange:a}){const c=t.position||"static",u=c==="sticky",[p,d]=h.useState(()=>{const J=e.element,de=e.computedStyles.position;if(de!=="absolute"&&de!=="fixed")return{top:!0,right:!1,bottom:!1,left:!0};function Re(Ie){if(J.style[Ie]!=="")return!0;try{for(const dt of document.styleSheets)try{for(const Je of dt.cssRules)if(Je instanceof CSSStyleRule&&J.matches(Je.selectorText)){const St=Je.style.getPropertyValue(Ie);if(St&&St!=="auto")return!0}}catch{}}catch{}return!1}const He=Re("top"),Ke=Re("bottom"),ve=Re("left"),te=Re("right");return{top:He||!He&&!Ke,right:te&&!ve,bottom:Ke&&!He,left:ve||!ve&&!te}}),[f,v]=h.useState(!1),x=h.useRef({h:!1,v:!1}),m=h.useCallback(()=>{const{h:J,v:ie}=x.current;J&&ie?(v(!0),n("transform","translate(-50%, -50%)")):(v(!1),J?n("transform","translateX(-50%)"):ie?n("transform","translateY(-50%)"):n("transform","none"))},[n]),R=h.useCallback((J,ie)=>{d(de=>{const Re={...de,[J]:ie};return a==null||a(Re),Re})},[a]),y=h.useCallback(()=>{d(J=>({...J,left:!0,right:!1})),x.current.h=!1,n("left","0px"),n("right","auto"),m()},[n,m]),g=h.useCallback(()=>{d(J=>({...J,left:!0,right:!1})),x.current.h=!0,n("left","50%"),n("right","auto"),m()},[n,m]),C=h.useCallback(()=>{d(J=>({...J,right:!0,left:!1})),x.current.h=!1,n("right","0px"),n("left","auto"),m()},[n,m]),S=h.useCallback(()=>{d(J=>({...J,top:!0,bottom:!1})),x.current.v=!1,n("top","0px"),n("bottom","auto"),m()},[n,m]),E=h.useCallback(()=>{d(J=>({...J,top:!0,bottom:!1})),x.current.v=!0,n("top","50%"),n("bottom","auto"),m()},[n,m]),P=h.useCallback(()=>{d(J=>({...J,bottom:!0,top:!1})),x.current.v=!1,n("bottom","0px"),n("top","auto"),m()},[n,m]),b=c==="absolute"||c==="fixed",T=o&&s.startsWith("column"),W=o&&!s.startsWith("column"),N=b||i||T,re=b||i||W,D=t.alignSelf||"auto",k=t.justifySelf||"auto",M=()=>{if(T){if(D==="flex-start"||D==="start")return"start";if(D==="center")return"center";if(D==="flex-end"||D==="end")return"end"}else if(i){if(k==="start")return"start";if(k==="center")return"center";if(k==="end")return"end"}return null},z=()=>{if(W){if(D==="flex-start"||D==="start")return"start";if(D==="center")return"center";if(D==="flex-end"||D==="end")return"end"}else if(i){if(D==="start")return"start";if(D==="center")return"center";if(D==="end")return"end"}return null},B=M(),ee=z(),H=J=>{b?J==="start"?y():J==="center"?g():C():i?n("justifySelf",B===J?"auto":J):T&&n("alignSelf",B===J?"auto":J==="start"?"flex-start":J==="end"?"flex-end":"center")},se=J=>{b?J==="start"?S():J==="center"?E():P():i?n("alignSelf",ee===J?"auto":J):W&&n("alignSelf",ee===J?"auto":J==="start"?"flex-start":J==="end"?"flex-end":"center")};return l.jsxs(An,{label:"Position",children:[l.jsx(nt,{children:l.jsxs("div",{className:"retune-field",children:[l.jsx("span",{className:"retune-field-label",children:"Alignment"}),l.jsxs("div",{className:"retune-align-row",children:[l.jsxs("div",{className:"retune-btn-group",style:N?void 0:{opacity:.3,pointerEvents:"none"},children:[l.jsx(_e,{content:"Align left",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${B==="start"?" active":""}`,onClick:()=>H("start"),children:l.jsx(o7,{})})}),l.jsx(_e,{content:"Align center horizontally",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${B==="center"?" active":""}`,onClick:()=>H("center"),children:l.jsx(s7,{})})}),l.jsx(_e,{content:"Align right",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${B==="end"?" active":""}`,onClick:()=>H("end"),children:l.jsx(i7,{})})})]}),l.jsxs("div",{className:"retune-btn-group",style:re?void 0:{opacity:.3,pointerEvents:"none"},children:[l.jsx(_e,{content:"Align top",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${ee==="start"?" active":""}`,onClick:()=>se("start"),children:l.jsx(l7,{})})}),l.jsx(_e,{content:"Align center vertically",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${ee==="center"?" active":""}`,onClick:()=>se("center"),children:l.jsx(c7,{})})}),l.jsx(_e,{content:"Align bottom",side:"top",children:l.jsx("button",{type:"button",className:`retune-align-btn${ee==="end"?" active":""}`,onClick:()=>se("end"),children:l.jsx(a7,{})})})]})]})]})}),l.jsx(nt,{children:l.jsx(Ge,{label:"Type",children:l.jsx(xn,{prop:"position",value:c,options:["static","relative","absolute","fixed","sticky"],onChange:n})})}),(c==="absolute"||c==="fixed")&&l.jsx(nt,{children:l.jsx(W7,{top:t.top,right:t.right,bottom:t.bottom,left:t.left,pins:p,centered:f,onChange:n,onPinChange:R,onCenterChange:v})}),c==="relative"&&l.jsxs(nt,{label:"Offsets",children:[l.jsxs("div",{className:"retune-row",children:[l.jsx(ht,{label:"T",prop:"top",value:t.top,onChange:n,...r("top")}),l.jsx(ht,{label:"R",prop:"right",value:t.right,onChange:n,...r("right")})]}),l.jsxs("div",{className:"retune-row",children:[l.jsx(ht,{label:"B",prop:"bottom",value:t.bottom,onChange:n,...r("bottom")}),l.jsx(ht,{label:"L",prop:"left",value:t.left,onChange:n,...r("left")})]})]}),u&&l.jsx(nt,{label:"Sticky offset",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(ht,{label:"T",prop:"top",value:t.top,onChange:n,...r("top")}),l.jsx(ht,{label:"B",prop:"bottom",value:t.bottom,onChange:n,...r("bottom")})]})})]})}function Dr({options:e,value:t,onChange:n,disabled:r=!1}){const[o,i]=h.useState(t),[s,a]=h.useState(t),c=h.useRef(null),u=h.useRef(null),p=h.useRef(!0);t!==s&&(a(t),i(t));const d=h.useCallback(()=>{const v=c.current,x=u.current;if(!v||!x)return;const m=e.findIndex(E=>E.value===o);if(m<0){x.style.opacity="0";return}const y=v.querySelectorAll(".retune-segmented-item")[m];if(!y)return;const g=v.getBoundingClientRect(),C=y.getBoundingClientRect(),S=C.left-g.left;x.style.opacity="1",x.style.width=`${C.width}px`,p.current?(x.style.transition="none",x.style.transform=`translateX(${S}px)`,x.offsetHeight,x.style.transition="",p.current=!1):x.style.transform=`translateX(${S}px)`},[e,o]);h.useLayoutEffect(()=>{d()},[d]);const f=v=>{i(v),n(v)};return l.jsxs("div",{ref:c,className:"retune-segmented",style:r?{opacity:.4,pointerEvents:"none"}:void 0,children:[l.jsx("div",{ref:u,className:"retune-segmented-pill"}),e.map(v=>{const x=o===v.value,m=l.jsx("button",{type:"button",className:`retune-segmented-item${x?" selected":""}${v.disabled?" disabled":""}`,onClick:()=>f(v.value),disabled:v.disabled||r,"aria-label":v.label,"aria-pressed":x,children:v.icon||l.jsx("span",{className:"retune-segmented-text",children:v.label})},v.value);return v.icon&&v.label?l.jsx(_e,{content:v.label,children:m},v.value):m})]})}var za=[["top-left","top-center","top-right"],["center-left","center-center","center-right"],["bottom-left","bottom-center","bottom-right"]],M0={"top-left":{row:0,col:0},"top-center":{row:0,col:1},"top-right":{row:0,col:2},"center-left":{row:1,col:0},"center-center":{row:1,col:1},"center-right":{row:1,col:2},"bottom-left":{row:2,col:0},"bottom-center":{row:2,col:1},"bottom-right":{row:2,col:2}},Z7=["center-left","center-center","center-right"],X7=["top-center","center-center","bottom-center"],Uh=["flex-start","center","flex-end"],Oa=["flex-start","center","flex-end"];function Y7(e){return e==="center"?1:e==="flex-end"||e==="end"?2:0}function gd(e){return e==="center"?1:e==="flex-end"||e==="end"?2:0}function G7(e,t,n){const r=Y7(e),o=gd(t);return n==="vertical"?za[r][o]:za[o][r]}function Ol(e,t,n){return n==="vertical"?{justifyContent:Uh[e],alignItems:Oa[t]}:{justifyContent:Uh[t],alignItems:Oa[e]}}function K7(e){return e.startsWith("column")?"vertical":"horizontal"}function T0({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7Z",fill:e,fillOpacity:.3})})}function q7({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5L9 5C9.55228 5 10 4.55229 10 4C10 3.44772 9.55228 3 9 3L4 3ZM4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L4 7ZM3 12C3 11.4477 3.44771 11 4 11L7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13L4 13C3.44771 13 3 12.5523 3 12Z",fill:e})})}function Q7({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 3C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5L6 5C5.44772 5 5 4.55228 5 4C5 3.44772 5.44772 3 6 3H10ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9L4 9C3.44772 9 3 8.55228 3 8C3 7.44771 3.44772 7 4 7L12 7ZM10 12C10 11.4477 9.55228 11 9 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H9C9.55228 13 10 12.5523 10 12Z",fill:e})})}function J7({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L4 7ZM7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5L12 5C12.5523 5 13 4.55229 13 4C13 3.44772 12.5523 3 12 3L7 3ZM8 12C8 11.4477 8.44771 11 9 11L12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13L9 13C8.44771 13 8 12.5523 8 12Z",fill:e})})}function e4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4V9C5 9.55228 4.55228 10 4 10C3.44772 10 3 9.55228 3 9V4ZM7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM12 3C11.4477 3 11 3.44772 11 4V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V4C13 3.44772 12.5523 3 12 3Z",fill:e})})}function t4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6V10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10V6ZM12 6C11.4477 6 11 6.44772 11 7V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V7C13 6.44772 12.5523 6 12 6Z",fill:e})})}function n4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V7ZM12 8C11.4477 8 11 8.44772 11 9V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V9C13 8.44772 12.5523 8 12 8Z",fill:e})})}function r4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M12 7C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9L4 9C3.44772 9 3 8.55228 3 8C3 7.44772 3.44771 7 4 7L12 7Z",fill:e})})}function o4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L8 9C8.55228 9 9 8.55229 9 8C9 7.44772 8.55228 7 8 7L4 7Z",fill:e})})}function i4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9L10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7L6 7Z",fill:e})})}function s4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L8 7Z",fill:e})})}function l4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4Z",fill:e})})}function a4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z",fill:e})})}function c4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 5C7.44772 5 7 5.44772 7 6V10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10V6C9 5.44772 8.55228 5 8 5Z",fill:e})})}function u4({color:e}){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7C7.44772 7 7 7.44772 7 8V12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12V8C9 7.44772 8.55228 7 8 7Z",fill:e})})}var A0="#0D99FF",Da="#a8a29e",d4={"0-0":"Align top left","0-1":"Align top center","0-2":"Align top right","1-0":"Align center left","1-1":"Align center","1-2":"Align center right","2-0":"Align bottom left","2-1":"Align bottom center","2-2":"Align bottom right"};function Zh(e,t){const{row:n,col:r}=M0[e];return t==="vertical"?r===0?q7:r===1?Q7:J7:n===0?e4:n===1?t4:n4}function Xh(e,t,n,r){return r==="vertical"?t!==n?null:e===0||e===2?r4:n===0?o4:n===1?i4:s4:e!==n?null:t===0||t===2?l4:n===0?a4:n===1?c4:u4}function f4({justifyContent:e,alignItems:t,flexDirection:n,onChange:r}){const o=K7(n),i=e==="space-between",s=i?o==="vertical"?Z7[gd(t)]:X7[gd(t)]:G7(e,t,o),a=M0[s],c=i?o==="vertical"?a.col:a.row:-1,[u,p]=h.useState(null),[d,f]=h.useState(null),v=h.useCallback((g,C)=>{if(i)r("alignItems",Oa[o==="vertical"?C:g]);else{const S=Ol(g,C,o);r("justifyContent",S.justifyContent),r("alignItems",S.alignItems)}},[o,i,r]),x=h.useCallback(g=>{var S,E;const C=(E=(S=g.target).closest)==null?void 0:E.call(S,".retune-alignment-cell");if(i){if(C){const b=C.closest(".retune-alignment-grid"),W=Array.from((b==null?void 0:b.querySelectorAll(".retune-alignment-cell"))||[]).indexOf(C);if(W>=0){const N=Math.floor(W/3),re=W%3,D=Ol(N,re,o);r("justifyContent",D.justifyContent),r("alignItems",D.alignItems);return}}const P=Ol(a.row,a.col,o);r("justifyContent",P.justifyContent)}else r("justifyContent","space-between")},[i,a,o,r]),m=h.useCallback(g=>{const{row:C,col:S}=a;let E=C,P=S;if(i)if(o==="vertical")if(g.key==="ArrowLeft")P=Math.max(0,S-1),g.preventDefault();else if(g.key==="ArrowRight")P=Math.min(2,S+1),g.preventDefault();else return;else if(g.key==="ArrowUp")E=Math.max(0,C-1),g.preventDefault();else if(g.key==="ArrowDown")E=Math.min(2,C+1),g.preventDefault();else return;else switch(g.key){case"ArrowUp":E=Math.max(0,C-1),g.preventDefault();break;case"ArrowDown":E=Math.min(2,C+1),g.preventDefault();break;case"ArrowLeft":P=Math.max(0,S-1),g.preventDefault();break;case"ArrowRight":P=Math.min(2,S+1),g.preventDefault();break;default:return}if(E!==C||P!==S)if(i)r("alignItems",Oa[o==="vertical"?P:E]);else{const b=Ol(E,P,o);r("justifyContent",b.justifyContent),r("alignItems",b.alignItems)}},[a,i,o,r]),R=h.useCallback((g,C)=>{i?p(o==="vertical"?C:g):f(za[g][C])},[i,o]),y=h.useCallback(()=>{p(null),f(null)},[]);return l.jsx("div",{className:"retune-alignment-grid",tabIndex:0,role:"grid","aria-label":"Alignment grid",onKeyDown:m,onDoubleClick:x,children:[0,1,2].map(g=>[0,1,2].map(C=>{const S=za[g][C];return l.jsx(_e,{content:d4[`${g}-${C}`],side:"bottom",delay:600,children:l.jsx("button",{type:"button",className:"retune-alignment-cell",onClick:()=>v(g,C),onMouseEnter:()=>R(g,C),onMouseLeave:y,tabIndex:-1,"aria-label":S.replace("-"," "),children:i?h4(g,C,c,u,o):p4(g,C,a,d,S,o)})},`${g}-${C}`)}))})}function p4(e,t,n,r,o,i){if(e===n.row&&t===n.col){const a=Zh(o,i);return l.jsx(a,{color:A0})}if(r===o){const a=Zh(o,i);return l.jsx(a,{color:Da})}return l.jsx(T0,{color:Da})}function h4(e,t,n,r,o){const i=o==="vertical"?t:e,s=i===n,a=r!==null&&i===r&&!s;if(s){const c=Xh(e,t,n,o);if(c)return l.jsx(c,{color:A0})}if(a){const c=Xh(e,t,i,o);if(c)return l.jsx(c,{color:Da})}return l.jsx(T0,{color:Da})}var g4=10,m4=10;function Yh(e){if(!e||e==="none")return 0;const t=e.match(/repeat\((\d+)/);return t?parseInt(t[1],10):e.trim().split(/\s+/).filter(r=>r&&r!=="none").length}function v4({columns:e,rows:t,onChange:n}){const[r,o]=h.useState(!1),[i,s]=h.useState(0),[a,c]=h.useState(0),[u,p]=h.useState(!1),d=h.useRef(null);dc(r);const f=Math.max(1,e||1),v=Math.max(1,t||1);h.useEffect(()=>{var C;if(!r)return;const y=S=>{const E=d.current;E&&(S.composedPath().includes(E)||o(!1))},g=(C=d.current)==null?void 0:C.getRootNode();return g.addEventListener("pointerdown",y),()=>g.removeEventListener("pointerdown",y)},[r]);const x=h.useCallback(()=>{i>0&&a>0&&(n("gridTemplateColumns",`repeat(${i}, 1fr)`),n("gridTemplateRows",`repeat(${a}, 1fr)`),o(!1))},[i,a,n]),m=u?i:e,R=u?a:t;return l.jsxs("div",{className:"retune-grid-picker-wrap",ref:d,children:[l.jsx("button",{type:"button",className:"retune-grid-picker-preview",onClick:()=>o(!r),"aria-label":`Grid: ${f} × ${v}`,children:l.jsxs("div",{className:"retune-grid-picker-mini",style:{gridTemplateColumns:`repeat(${f}, 1fr)`,gridTemplateRows:`repeat(${v}, 1fr)`},children:[Array.from({length:f*v},(y,g)=>l.jsx("div",{className:"retune-grid-picker-mini-cell"},g)),l.jsxs("span",{className:"retune-grid-picker-label",children:[f," × ",v]})]})}),r&&l.jsxs("div",{className:"retune-grid-picker-dialog",children:[l.jsx("div",{className:"retune-grid-picker-dialog-header",children:m>0&&R>0?`${m} × ${R}`:"Select grid size"}),l.jsx("div",{className:"retune-grid-picker-grid",onMouseLeave:()=>p(!1),onClick:x,children:Array.from({length:m4},(y,g)=>Array.from({length:g4},(C,S)=>{const E=S+1,P=g+1,b=!u&&E<=e&&P<=t,T=u&&E<=i&&P<=a;return l.jsx("div",{className:`retune-grid-picker-cell${b?" selected":""}${T?" preview":""}`,onMouseEnter:()=>{p(!0),s(E),c(P)}},`${g}-${S}`)}))})]})]})}var x4=[{value:"block",icon:l.jsx(m7,{}),label:"Block"},{value:"flex-row",icon:l.jsx(v7,{}),label:"Flex →"},{value:"flex-column",icon:l.jsx(x7,{}),label:"Flex ↓"},{value:"grid",icon:l.jsx(y7,{}),label:"Grid"}];function y4({s:e,onPropertyChange:t,onPropertyHover:n,variableProps:r,changeProps:o}){const i=e.display||"block",s=i.includes("flex"),a=i.includes("grid");return l.jsxs(An,{label:"Layout",children:[l.jsx(nt,{children:l.jsx(Ge,{label:"Display",children:l.jsx(Dr,{options:x4,value:i.includes("flex")?(e.flexDirection||"row").startsWith("column")?"flex-column":"flex-row":i.includes("grid")?"grid":"block",onChange:c=>{c==="flex-row"?(t("display","flex"),t("flexDirection","row")):c==="flex-column"?(t("display","flex"),t("flexDirection","column")):t("display",c)}})})}),s&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-section-row",children:l.jsxs("div",{className:"retune-row",style:{alignItems:"flex-start"},children:[l.jsx("div",{style:{flex:1},children:l.jsx(Ge,{label:"Alignment",children:l.jsx(f4,{justifyContent:e.justifyContent||"flex-start",alignItems:e.alignItems||"stretch",flexDirection:e.flexDirection||"row",onChange:t})})}),l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("gap"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ge,{label:"Gap",children:l.jsx(ht,{label:l.jsx(_e,{content:(e.flexDirection||"row").startsWith("column")?"Vertical gap between items":"Horizontal gap between items",side:"top",sideOffset:14,children:(e.flexDirection||"row").startsWith("column")?l.jsx(Oh,{}):l.jsx(zh,{})}),prop:"gap",value:e.gap,onChange:t,min:0,...o("gap")})})})]})}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Reverse",children:l.jsx(xn,{prop:"flexDirection",value:(e.flexDirection||"row").includes("reverse")?"yes":"no",options:["no","yes"],onChange:(c,u)=>{const p=(e.flexDirection||"row").startsWith("column")?"column":"row";t("flexDirection",u==="yes"?`${p}-reverse`:p)}})}),l.jsx(Ge,{label:"Wrap",children:l.jsx(xn,{prop:"flexWrap",value:e.flexWrap,options:["nowrap","wrap","wrap-reverse"],onChange:t})})]})]}),a&&l.jsxs(nt,{children:[l.jsx("div",{style:{flex:1},children:l.jsx(Ge,{label:"Grid",children:l.jsx(v4,{columns:Yh(e.gridTemplateColumns),rows:Yh(e.gridTemplateRows),onChange:t})})}),l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("gap"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ge,{label:"Gap",children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ht,{label:l.jsx(_e,{content:"Horizontal gap between columns",side:"top",sideOffset:14,children:l.jsx(zh,{})}),prop:"columnGap",value:e.columnGap,onChange:t,min:0,...r("columnGap"),...o("columnGap")}),l.jsx(ht,{label:l.jsx(_e,{content:"Vertical gap between rows",side:"top",sideOffset:14,children:l.jsx(Oh,{})}),prop:"rowGap",value:e.rowGap,onChange:t,min:0,...r("rowGap"),...o("rowGap")})]})})})]})]})}function ia(e,t,n){return t!==void 0&&e<t?t:n!==void 0&&e>n?n:e}function Gh(e,t,n){var s;if(t===void 0&&n===void 0)return e;const r=parseFloat(e);if(isNaN(r))return e;const o=ia(r,t,n);if(o===r)return e;const i=((s=e.match(/[a-z%]+$/i))==null?void 0:s[0])||"";return`${o}${i}`}function so(e){const t=e.map(n=>Hi(n||""));return t.every(n=>n===t[0])?t[0]:t.join(", ")}function Ei({label:e,props:t,values:n,onChange:r,placeholder:o,min:i,max:s,variableMatch:a,property:c,onVariableSelect:u,onVariableApply:p,onVariableUnlink:d,isChanged:f,onReset:v}){const[x,m]=h.useState(()=>so(n)),[R,y]=h.useState(n),g=h.useRef(null),C=h.useCallback(()=>{var z;a&&((z=g.current)==null||z.call(g))},[a]);n.join("\0")!==R.join("\0")&&(y(n),m(so(n)));const S=h.useRef({startX:0,startVals:[],active:!1}),E=z=>{const B=n.map(ee=>parseFloat(ee));B.some(isNaN)||(S.current={startX:z.clientX,startVals:B,active:!0},z.target.setPointerCapture(z.pointerId))},P=z=>{var se,J;if(!S.current.active)return;const B=Math.round(z.clientX-S.current.startX),ee=((J=(se=n[0])==null?void 0:se.match(/[a-z%]+$/i))==null?void 0:J[0])||"px",H=S.current.startVals.map(ie=>`${ia(ie+B,i,s)}${ee}`);m(so(H)),t.forEach((ie,de)=>r(ie,H[de]))},b=()=>{S.current.active=!1},T=16,W=z=>{if(e)return;const B=z.currentTarget.getBoundingClientRect();if(z.clientX-B.left>T)return;const ee=n.map(H=>parseFloat(H));ee.some(isNaN)||(z.preventDefault(),S.current={startX:z.clientX,startVals:ee,active:!0},z.currentTarget.setPointerCapture(z.pointerId))},N=z=>{var H,se;if(S.current.active){const J=Math.round(z.clientX-S.current.startX),ie=((se=(H=n[0])==null?void 0:H.match(/[a-z%]+$/i))==null?void 0:se[0])||"px",de=S.current.startVals.map(Re=>`${ia(Re+J,i,s)}${ie}`);m(so(de)),t.forEach((Re,He)=>r(Re,de[He]));return}const B=z.currentTarget.getBoundingClientRect(),ee=z.clientX-B.left<=T;z.currentTarget.style.cursor=ee?"ew-resize":""},re=()=>{S.current.active=!1},D=z=>{const B=z.trim();if(!B){m(so(n));return}const ee=B.includes(",")?B.split(",").map(H=>H.trim()).filter(Boolean):B.split(/\s+/);if(ee.length===1){const H=Gh(Wi(ee[0],n[0]||"",t[0]),i,s);t.forEach(se=>r(se,H)),m(Hi(H))}else{const H=t.map((se,J)=>Gh(Wi(ee[J%ee.length],n[J]||"",se),i,s));t.forEach((se,J)=>r(se,H[J])),m(so(H))}},k=z=>{if(z.key==="Enter"&&(D(x),z.target.blur()),z.key==="ArrowUp"||z.key==="ArrowDown"){z.preventDefault();const B=z.shiftKey?10:1,ee=z.key==="ArrowUp"?B:-B,H=x.includes(",")?x.split(",").map(J=>J.trim()):t.map(()=>x.trim()),se=t.map((J,ie)=>{var Ke;const de=H[ie]||H[0],Re=parseFloat(de);if(isNaN(Re))return de;const He=((Ke=de.match(/[a-z%]+$/i))==null?void 0:Ke[0])||"px";return`${ia(Re+ee,i,s)}${He}`});m(so(se)),t.forEach((J,ie)=>r(J,se[ie]))}},M=h.useRef(null);return l.jsxs("div",{ref:M,className:`retune-prop${a?" retune-prop-variable-applied":""}`,children:[l.jsx(Wr,{isChanged:f??!1,onReset:v??(()=>{})}),e&&l.jsx("span",{className:"retune-prop-label",onClick:C,onPointerDown:a?void 0:E,onPointerMove:a?void 0:P,onPointerUp:a?void 0:b,children:e}),l.jsx("input",{className:"retune-prop-input",value:x,placeholder:o||"–",readOnly:!!a,onClick:C,onPointerDown:!e&&!a?W:void 0,onPointerMove:!e&&!a?N:void 0,onPointerUp:!e&&!a?re:void 0,onFocus:a?void 0:z=>z.target.select(),onChange:a?void 0:z=>m(z.target.value),onBlur:a?void 0:()=>{x!==so(n)&&D(x)},onKeyDown:a?void 0:k,spellCheck:!1}),l.jsx(Ui,{match:a,property:c||t[0],relatedProperties:t,onVariableSelect:u,onVariableApply:p,onVariableUnlink:d,openPickerRef:g})]})}function b4({s:e,onPropertyChange:t,onPropertyHover:n,variableProps:r,shorthandVariableProps:o,changeProps:i,shorthandChangeProps:s}){const[a,c]=h.useState(!1),[u,p]=h.useState(!1);return l.jsxs(An,{label:"Spacing",children:[l.jsx(nt,{label:"Padding",children:a?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("paddingLeft"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Padding left",side:"top",sideOffset:14,children:l.jsx(Ph,{})}),prop:"paddingLeft",value:e.paddingLeft,onChange:t,min:0,...r("paddingLeft"),...i("paddingLeft")})}),l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("paddingTop"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Padding top",side:"top",sideOffset:14,children:l.jsx($h,{})}),prop:"paddingTop",value:e.paddingTop,onChange:t,min:0,...r("paddingTop"),...i("paddingTop")})}),l.jsx(_e,{content:"Collapse to axes",side:"top",children:l.jsx("button",{className:"retune-split-btn active",onClick:()=>c(!1),children:l.jsx(mo,{})})})]}),l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("paddingRight"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Padding right",side:"top",sideOffset:14,children:l.jsx(Ih,{})}),prop:"paddingRight",value:e.paddingRight,onChange:t,min:0,...r("paddingRight"),...i("paddingRight")})}),l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("paddingBottom"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Padding bottom",side:"top",sideOffset:14,children:l.jsx(_h,{})}),prop:"paddingBottom",value:e.paddingBottom,onChange:t,min:0,...r("paddingBottom"),...i("paddingBottom")})}),l.jsx("div",{style:{width:32}})]})]}):l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("paddingInline"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ei,{label:l.jsx(_e,{content:"Horizontal padding (left, right)",side:"top",sideOffset:14,children:l.jsx(Th,{})}),props:["paddingLeft","paddingRight"],values:[e.paddingLeft,e.paddingRight],onChange:t,min:0,...o(["paddingLeft","paddingRight"]),...s(["paddingLeft","paddingRight"])})}),l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("paddingBlock"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ei,{label:l.jsx(_e,{content:"Vertical padding (top, bottom)",side:"top",sideOffset:14,children:l.jsx(Ah,{})}),props:["paddingTop","paddingBottom"],values:[e.paddingTop,e.paddingBottom],onChange:t,min:0,...o(["paddingTop","paddingBottom"]),...s(["paddingTop","paddingBottom"])})}),l.jsx(_e,{content:"Edit individual sides",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>c(!0),children:l.jsx(mo,{})})})]})}),l.jsx(nt,{label:"Margin",children:u?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("marginLeft"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Margin left",side:"top",sideOffset:14,children:l.jsx(Ph,{})}),prop:"marginLeft",value:e.marginLeft,onChange:t,...r("marginLeft"),...i("marginLeft")})}),l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("marginTop"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Margin top",side:"top",sideOffset:14,children:l.jsx($h,{})}),prop:"marginTop",value:e.marginTop,onChange:t,...r("marginTop"),...i("marginTop")})}),l.jsx(_e,{content:"Collapse to axes",side:"top",children:l.jsx("button",{className:"retune-split-btn active",onClick:()=>p(!1),children:l.jsx(mo,{})})})]}),l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("marginRight"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Margin right",side:"top",sideOffset:14,children:l.jsx(Ih,{})}),prop:"marginRight",value:e.marginRight,onChange:t,...r("marginRight"),...i("marginRight")})}),l.jsx("div",{onPointerEnter:()=>n==null?void 0:n("marginBottom"),onPointerLeave:()=>n==null?void 0:n(null),style:{flex:1},children:l.jsx(ht,{label:l.jsx(_e,{content:"Margin bottom",side:"top",sideOffset:14,children:l.jsx(_h,{})}),prop:"marginBottom",value:e.marginBottom,onChange:t,...r("marginBottom"),...i("marginBottom")})}),l.jsx("div",{style:{width:32}})]})]}):l.jsxs("div",{className:"retune-row",children:[l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("marginInline"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ei,{label:l.jsx(_e,{content:"Horizontal margin (left, right)",side:"top",sideOffset:14,children:l.jsx(Th,{})}),props:["marginLeft","marginRight"],values:[e.marginLeft,e.marginRight],onChange:t,...o(["marginLeft","marginRight"]),...s(["marginLeft","marginRight"])})}),l.jsx("div",{style:{flex:1},onPointerEnter:()=>n==null?void 0:n("marginBlock"),onPointerLeave:()=>n==null?void 0:n(null),children:l.jsx(Ei,{label:l.jsx(_e,{content:"Vertical margin (top, bottom)",side:"top",sideOffset:14,children:l.jsx(Ah,{})}),props:["marginTop","marginBottom"],values:[e.marginTop,e.marginBottom],onChange:t,...o(["marginTop","marginBottom"]),...s(["marginTop","marginBottom"])})}),l.jsx(_e,{content:"Edit individual sides",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>p(!0),children:l.jsx(mo,{})})})]})})]})}function qo({label:e,prop:t,value:n,options:r,onChange:o,variableMatch:i,property:s,onVariableSelect:a,onVariableApply:c,onVariableUnlink:u,isChanged:p,onReset:d}){var tn;const[f,v]=h.useState(Hi(n||"")),[x,m]=h.useState(!1),[R,y]=h.useState(-1),[g,C]=h.useState(null),S=h.useRef(null),E=h.useRef(null),P=h.useRef(null),b=h.useRef(!1),T=N0(t,P);dc(x);const[W,N]=h.useState(!1),[re,D]=h.useState(null),k=h.useRef(()=>N(!1)),M=h.useMemo(()=>x0(s||t),[s,t]),z="__add_variable__",B=h.useMemo(()=>!M||i?r:[...r,{value:z,label:"Add variable",separatorBefore:!0}],[r,M,i]),[ee,H]=h.useState(n);n!==ee&&(H(n),!b.current&&!T.current&&v(Hi(n||"")));const se=h.useCallback(()=>{const be=S.current;if(!be)return;const Fe=be.getBoundingClientRect(),$e=Math.max(0,B.findIndex(At=>At.value===f)),vt=L0(Fe,$e,B.length);C(vt),m(!0),y($e)},[B,f]),J=h.useCallback(()=>{m(!1),y(-1),C(null)},[]);h.useEffect(()=>{var $e;if(!x)return;const be=vt=>{const At=S.current;if(!At)return;vt.composedPath().includes(At)||J()},Fe=($e=S.current)==null?void 0:$e.getRootNode();return Fe.addEventListener("pointerdown",be),()=>Fe.removeEventListener("pointerdown",be)},[x,J]);const ie=(()=>{const be=r.find(Fe=>Fe.value===f);return be?be.label:f})(),de=h.useRef({startX:0,startVal:0,active:!1}),Re=be=>{const Fe=parseFloat(f);isNaN(Fe)||(de.current={startX:be.clientX,startVal:Fe,active:!0},be.target.setPointerCapture(be.pointerId))},He=be=>{var Yt;if(!de.current.active)return;const Fe=Math.round(be.clientX-de.current.startX),$e=((Yt=f.match(/[a-z%]+$/i))==null?void 0:Yt[0])||"",vt=de.current.startVal+Fe,_t=`${vt<0&&!t.includes("margin")&&!t.includes("top")&&!t.includes("right")&&!t.includes("bottom")&&!t.includes("left")&&!t.includes("indent")?0:vt}${$e}`;v(_t),o(t,_t)},Ke=()=>{de.current.active=!1},ve=16,te=be=>{if(e)return;const Fe=be.currentTarget.getBoundingClientRect();if(be.clientX-Fe.left>ve)return;const $e=parseFloat(f);isNaN($e)||(be.preventDefault(),de.current={startX:be.clientX,startVal:$e,active:!0},be.currentTarget.setPointerCapture(be.pointerId))},Ie=be=>{var vt;if(de.current.active){const At=Math.round(be.clientX-de.current.startX),_t=((vt=f.match(/[a-z%]+$/i))==null?void 0:vt[0])||"",Yt=de.current.startVal+At,Pt=`${Yt<0&&!t.includes("margin")&&!t.includes("top")&&!t.includes("right")&&!t.includes("bottom")&&!t.includes("left")&&!t.includes("indent")?0:Yt}${_t}`;v(Pt),o(t,Pt);return}const Fe=be.currentTarget.getBoundingClientRect(),$e=be.clientX-Fe.left<=ve;be.currentTarget.style.cursor=$e?"ew-resize":""},dt=()=>{de.current.active=!1},Je=be=>{b.current=!0,be.target.select()},St=be=>{const Fe=be.target.value;v(Fe);const $e=r.find(vt=>vt.label.toLowerCase()===Fe.toLowerCase()||vt.value.toLowerCase()===Fe.toLowerCase());$e&&o(t,$e.value)},ft=()=>{b.current=!1;const be=Wi(f,n||"",t);v(be),be!==n&&o(t,be)},st=be=>{var Fe;if(be.key==="Enter"){if(be.preventDefault(),x&&R>=0){const $e=B[R];$e.value===z?(J(),mt()):(v($e.value),o(t,$e.value),J())}else{const $e=Wi(f,n||"",t);v($e),o(t,$e),be.target.blur()}return}if(be.key==="Escape"){J();return}if(be.key==="ArrowDown"||be.key==="ArrowUp")if(be.preventDefault(),x)be.key==="ArrowDown"?y($e=>$e<B.length-1?$e+1:$e):y($e=>$e>0?$e-1:$e);else{const $e=parseFloat(f);if(isNaN($e))return;const vt=be.shiftKey?10:1,At=be.key==="ArrowUp"?vt:-vt,_t=((Fe=f.match(/[a-z%]+$/i))==null?void 0:Fe[0])||"",Yt=`${$e+At}${_t}`;v(Yt),o(t,Yt)}},mt=h.useCallback(()=>{const be=S.current;if(!be)return;const Fe=be.getBoundingClientRect();D({top:Fe.top,left:Fe.left,width:Fe.width,height:Fe.height}),N(!0),Qs(k.current)},[]),Fn=h.useCallback(()=>{Nr(k.current),N(!1)},[]),Xt=h.useCallback(be=>{const Fe=[s||t];i?a==null||a(i.variable,be,Fe):c==null||c(be,Fe)},[i,s,t,a,c]),pn=be=>{if(be.value===z){J(),mt();return}v(be.value),o(t,be.value),J()},Wt=h.useRef(u);Wt.current=u;const Tt=h.useRef(null),Bn=h.useRef(null),rt=h.useCallback(be=>{if(Tt.current&&Bn.current&&Tt.current.removeEventListener("pointerdown",Bn.current),Tt.current=be,be){const Fe=$e=>{var vt;$e.stopPropagation(),$e.preventDefault(),(vt=Wt.current)==null||vt.call(Wt)};Bn.current=Fe,be.addEventListener("pointerdown",Fe)}},[]),lt=((tn=S.current)==null?void 0:tn.getRootNode())instanceof ShadowRoot?S.current.getRootNode().querySelector("[data-retune-container]"):null;return i?l.jsxs("div",{className:"retune-combo",ref:S,children:[l.jsx(Wr,{isChanged:p??!1,onReset:d??(()=>{})}),e&&l.jsx("span",{ref:E,className:"retune-combo-label",children:e}),l.jsx("input",{className:"retune-combo-input retune-combo-variable-applied",style:e?void 0:{paddingLeft:8},value:ie,readOnly:!0,onClick:mt,spellCheck:!1}),l.jsx(_e,{content:"Unlink variable",side:"top",delay:300,children:l.jsx("span",{ref:rt,className:"retune-variable-action retune-variable-unlink",children:l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M12.3533 14.646C12.5485 14.8412 12.5484 15.1578 12.3533 15.3531L11.3534 16.353C10.3297 17.3765 8.67028 17.3766 7.64665 16.353C6.62317 15.3294 6.62317 13.6699 7.64665 12.6462L8.64654 11.6463C8.84181 11.4512 9.15844 11.4511 9.35364 11.6463C9.54883 11.8415 9.54874 12.1582 9.35364 12.3534L8.35375 13.3533C7.7208 13.9865 7.7208 15.0128 8.35375 15.6459C8.98687 16.279 10.0132 16.2789 10.6463 15.6459L11.6462 14.646C11.8414 14.451 12.1581 14.4511 12.3533 14.646ZM8.0002 9.00021C8.27634 9.00021 8.50015 9.22401 8.50015 9.50015C8.49994 9.77612 8.27622 10.0001 8.0002 10.0001H6.50036C6.22434 10.0001 6.00061 9.77612 6.00041 9.50015C6.00041 9.22401 6.22422 9.00021 6.50036 9.00021H8.0002ZM14.5002 15.5002C14.7763 15.5002 15.0001 15.724 15.0001 16.0001V17.5C15 17.776 14.7763 17.9999 14.5002 17.9999C14.2241 17.9999 14.0004 17.776 14.0002 17.5V16.0001C14.0002 15.724 14.2241 15.5002 14.5002 15.5002ZM9.50073 5.99984C9.77664 6.00011 10.0007 6.22381 10.0007 6.49978V7.99962C10.0007 8.2756 9.77664 8.4993 9.50073 8.49957C9.22459 8.49957 9.00078 8.27576 9.00078 7.99962V6.49978C9.00078 6.22364 9.22459 5.99984 9.50073 5.99984ZM17.5006 13.9997C17.7765 13.9998 18.0004 14.2237 18.0005 14.4996C18.0005 14.7757 17.7766 14.9994 17.5006 14.9996H16.0007C15.7246 14.9996 15.5008 14.7758 15.5008 14.4996C15.5009 14.2235 15.7246 13.9997 16.0007 13.9997H17.5006ZM16.3543 7.64676C17.3774 8.67043 17.3776 10.33 16.3543 11.3535L15.3544 12.3534C15.1592 12.5486 14.8426 12.5484 14.6473 12.3534C14.452 12.1582 14.452 11.8416 14.6473 11.6463L15.6472 10.6464C16.28 10.0134 16.2798 8.98702 15.6472 8.35387C15.0141 7.72075 13.9871 7.72018 13.3539 8.35317L12.354 9.35307C12.1588 9.54825 11.8422 9.54808 11.6469 9.35307C11.4519 9.15779 11.4517 8.84114 11.6469 8.64596L12.6468 7.64607C13.6705 6.62254 15.3306 6.62312 16.3543 7.64676Z",fill:"currentColor",fillOpacity:.9})})})}),W&&re&&lt&&no.createPortal(l.jsx(hd,{property:s||t,currentVariable:i.variable,onSelect:Xt,onUnlink:u?()=>{u(),Fn()}:void 0,onClose:Fn,anchorRect:re}),lt)]}):l.jsxs("div",{className:"retune-combo",ref:S,children:[l.jsx(Wr,{isChanged:p??!1,onReset:d??(()=>{})}),e&&l.jsx("span",{ref:E,className:"retune-combo-label",onPointerDown:Re,onPointerMove:He,onPointerUp:Ke,children:e}),l.jsx("input",{ref:P,className:"retune-combo-input",style:e?void 0:{paddingLeft:8},value:ie,placeholder:"–",onPointerDown:e?void 0:te,onPointerMove:e?void 0:Ie,onPointerUp:e?void 0:dt,onFocus:Je,onChange:St,onBlur:ft,onKeyDown:st,spellCheck:!1}),l.jsx("button",{type:"button",className:"retune-combo-trigger",onClick:()=>{x?J():se()},"aria-label":"Toggle options",children:l.jsx(uc,{})}),x&&g&&l.jsx("div",{className:"retune-combo-dropdown-anchor",style:{top:g.top,left:g.left,width:g.width},children:l.jsx(cl,{options:B,value:f,highlightedIndex:R,onSelect:pn,onHighlight:y,initialScrollTop:g.scrollTop,showCheckmark:!0})}),W&&re&&lt&&no.createPortal(l.jsx(hd,{property:s||t,currentVariable:i==null?void 0:i.variable,onSelect:Xt,onClose:Fn,anchorRect:re}),lt)]})}var eu=[{value:"__fill",label:"Fill"},{value:"__hug",label:"Hug"},{value:"auto",label:"Auto"}];function w4({element:e,s:t,onPropertyChange:n,changeProps:r,isFlexChild:o,isGridChild:i,parentFlexDir:s,frameDimensions:a}){const[c,u]=h.useState(new Set),[p,d]=h.useState(!1),f=h.useRef(1),[v,x]=h.useState(!1),[m,R]=h.useState(null),y=h.useRef(null),g=h.useRef(null);h.useEffect(()=>{var M;if(!v)return;const D=z=>{const B=g.current,ee=y.current;B&&B.contains(z.target)||ee&&ee.contains(z.target)||x(!1)},k=(M=g.current)==null?void 0:M.getRootNode();return k.addEventListener("pointerdown",D),()=>k.removeEventListener("pointerdown",D)},[v]);const C={isFlexChild:o,isGridChild:i,parentFlexDir:s,currentStyles:t},S=jh("width",C),E=jh("height",C),b=fd("height",C)?eu:eu.filter(D=>D.value!=="__fill"),T=S==="fill"?"__fill":S==="hug"?"__hug":t.width,W=E==="fill"?"__fill":E==="hug"?"__hug":t.height,N=new Set(c);(t.minWidth&&t.minWidth!=="0px"&&t.minWidth!=="auto"||t.minHeight&&t.minHeight!=="0px"&&t.minHeight!=="auto")&&N.add("min"),(t.maxWidth&&t.maxWidth!=="none"||t.maxHeight&&t.maxHeight!=="none")&&N.add("max");const re=h.useCallback((D,k)=>{var B;const M=(B=e.element)==null?void 0:B.getBoundingClientRect(),z=ub(D,k,{isFlexChild:o,isGridChild:i,parentFlexDir:s,currentStyles:t,elementRect:M?{width:M.width,height:M.height}:void 0});for(const[ee,H]of Object.entries(z))n(ee,H)},[o,i,s,t,e.element,n]);return a?l.jsx(An,{label:"Size",children:l.jsxs(nt,{children:[l.jsx(Ge,{label:"Width",children:l.jsx(ht,{prop:"width",value:`${a.width}px`,onChange:(D,k)=>{const M=parseInt(k);!isNaN(M)&&M>0&&a.onResize(M,a.height)},min:200})}),l.jsx(Ge,{label:"Height",children:l.jsx(ht,{prop:"height",value:`${a.height}px`,onChange:(D,k)=>{const M=parseInt(k);!isNaN(M)&&M>0&&a.onResize(a.width,M)},min:200})})]})}):l.jsxs(An,{label:"Size",action:l.jsxs(l.Fragment,{children:[l.jsx(_e,{content:"Add constraint",side:"top",children:l.jsx("button",{ref:g,className:"retune-section-action",onClick:()=>{if(v){x(!1);return}const D=g.current;if(!D)return;const k=D.getBoundingClientRect();R({top:k.bottom+4,left:k.right}),x(!0)},children:l.jsx(ii,{})})}),v&&m&&l.jsx("div",{ref:y,style:{position:"fixed",top:m.top,left:m.left,transform:"translateX(-100%)",zIndex:2147483647},children:l.jsx(cl,{options:[{value:"min",label:N.has("min")?"Remove min size":"Add min size"},{value:"max",label:N.has("max")?"Remove max size":"Add max size"}],value:void 0,showCheckmark:!1,onSelect:D=>{const k=D.value;N.has(k)?(k==="min"?(n("minWidth","0px"),n("minHeight","0px")):(n("maxWidth","none"),n("maxHeight","none")),u(M=>{const z=new Set(M);return z.delete(k),z})):u(M=>{const z=new Set(M);return z.add(k),z}),x(!1)}})})]}),children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Width",children:l.jsx(qo,{prop:"width",value:T,options:eu,onChange:(D,k)=>{if(k==="__fill")re("width","fill");else if(k==="__hug")re("width","hug");else if(o&&re("width","fixed"),n(D,k),p){const M=parseFloat(k);if(!isNaN(M)&&f.current>0){const z=Math.round(M/f.current);requestAnimationFrame(()=>n("height",`${z}px`))}}},...r("width")})}),l.jsx(Ge,{label:"Height",children:l.jsx(qo,{prop:"height",value:W,options:b,onChange:(D,k)=>{if(k==="__fill")re("height","fill");else if(k==="__hug")re("height","hug");else if(o&&re("height","fixed"),n(D,k),p){const M=parseFloat(k);if(!isNaN(M)&&f.current>0){const z=Math.round(M*f.current);requestAnimationFrame(()=>n("width",`${z}px`))}}},...r("height")})}),l.jsx(_e,{content:p?"Unlock aspect ratio":"Lock aspect ratio",side:"top",children:l.jsx("button",{className:`retune-split-btn${p?" active":""}`,onClick:()=>{if(!p&&e.element){const D=e.element.getBoundingClientRect();D.height>0&&(f.current=D.width/D.height),e.element.setAttribute("data-retune-aspect-locked","true")}else e.element&&e.element.removeAttribute("data-retune-aspect-locked");d(D=>!D)},children:p?l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M12 4C14.2091 4 16 5.79086 16 8V10H16.125C17.1605 10 18 10.8395 18 11.875V17.125C18 18.1605 17.1605 19 16.125 19H7.875C6.83947 19 6 18.1605 6 17.125V11.875C6 10.8395 6.83947 10 7.875 10H8V8C8 5.79086 9.79086 4 12 4ZM7.875 11C7.39175 11 7 11.3918 7 11.875V17.125C7 17.6082 7.39175 18 7.875 18H16.125C16.6082 18 17 17.6082 17 17.125V11.875C17 11.3918 16.6082 11 16.125 11H7.875ZM15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V10H15V8Z",fill:"currentColor",fillOpacity:"0.9"})}):l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.125 10C17.1605 10 18 10.8395 18 11.875V17.125C18 18.1605 17.1605 19 16.125 19H7.875C6.83947 19 6 18.1605 6 17.125V11.875C6 10.8395 6.83947 10 7.875 10H8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V7.5C16 7.77614 15.7761 8 15.5 8C15.2239 8 15 7.77614 15 7.5V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V10H16.125ZM7.875 11C7.39175 11 7 11.3918 7 11.875V17.125C7 17.6082 7.39175 18 7.875 18H16.125C16.6082 18 17 17.6082 17 17.125V11.875C17 11.3918 16.6082 11 16.125 11H7.875Z",fill:"currentColor",fillOpacity:"0.9"})})})})]}),N.has("min")&&l.jsx("div",{className:"retune-section-row",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(Ge,{label:"Min W",children:l.jsx(ht,{prop:"minWidth",value:t.minWidth==="0px"||t.minWidth==="auto"?"":t.minWidth,placeholder:"–",onChange:(D,k)=>{k?n(D,k):n(D,"0px")},...r("minWidth")})}),l.jsx(Ge,{label:"Min H",children:l.jsx(ht,{prop:"minHeight",value:t.minHeight==="0px"||t.minHeight==="auto"?"":t.minHeight,placeholder:"–",onChange:(D,k)=>{k?n(D,k):n(D,"0px")},...r("minHeight")})}),l.jsx(_e,{content:"Remove min size",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>{n("minWidth","0px"),n("minHeight","0px"),u(D=>{const k=new Set(D);return k.delete("min"),k})},children:l.jsx(Vr,{})})})]})}),N.has("max")&&l.jsx("div",{className:"retune-section-row",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(Ge,{label:"Max W",children:l.jsx(ht,{prop:"maxWidth",value:t.maxWidth==="none"?"":t.maxWidth,placeholder:"–",onChange:(D,k)=>{k?n(D,k):n(D,"none")},...r("maxWidth")})}),l.jsx(Ge,{label:"Max H",children:l.jsx(ht,{prop:"maxHeight",value:t.maxHeight==="none"?"":t.maxHeight,placeholder:"–",onChange:(D,k)=>{k?n(D,k):n(D,"none")},...r("maxHeight")})}),l.jsx(_e,{content:"Remove max size",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>{n("maxWidth","none"),n("maxHeight","none"),u(D=>{const k=new Set(D);return k.delete("max"),k})},children:l.jsx(Vr,{})})})]})})]})}function Fa(e){const t=e.replace("#",""),n=t.length===3?t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t,r=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:0,g:0,b:0}}function Ba(e,t,n){const r=o=>{const i=Math.max(0,Math.min(255,Math.round(o))).toString(16);return i.length===1?"0"+i:i};return`#${r(e)}${r(t)}${r(n)}`}function $0(e,t,n){e/=255,t/=255,n/=255;const r=Math.max(e,t,n),o=Math.min(e,t,n),i=r-o;let s=0;const a=r===0?0:i/r,c=r;if(i!==0)switch(r){case e:s=((t-n)/i+(t<n?6:0))/6;break;case t:s=((n-e)/i+2)/6;break;case n:s=((e-t)/i+4)/6;break}return{h:s*360,s:a*100,v:c*100}}function pi(e,t,n){if(t/=100,n/=100,t===0){const d=Math.round(n*255);return{r:d,g:d,b:d}}e=e>=360?0:e,e/=60;const r=Math.floor(e),o=e-r,i=n*(1-t),s=n*(1-t*o),a=n*(1-t*(1-o));let c,u,p;switch(r){case 0:c=n,u=a,p=i;break;case 1:c=s,u=n,p=i;break;case 2:c=i,u=n,p=a;break;case 3:c=i,u=s,p=n;break;case 4:c=a,u=i,p=n;break;default:c=n,u=i,p=s;break}return{r:Math.round(c*255),g:Math.round(u*255),b:Math.round(p*255)}}function bs(e,t,n){const{r,g:o,b:i}=pi(e,t,n);return Ba(r,o,i)}function C4(e){const{r:t,g:n,b:r}=Fa(e);return $0(t,n,r)}function Dl(e,t=100){const{h:n,s:r,v:o}=C4(e);return{h:n,s:r,v:o,a:t}}function tu(e){return bs(e.h,e.s,e.v)}function Va(e){if(!e)return{hex:"#000000",opacity:100};if(e.startsWith("#")){const r=e.replace("#","");return{hex:r.length===3?`#${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:`#${r}`,opacity:100}}const t=e.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);if(t){const r=Ba(parseInt(t[1]),parseInt(t[2]),parseInt(t[3])),o=parseFloat(t[4]);return{hex:r,opacity:Math.round(o*100)}}const n=e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);return n?{hex:Ba(parseInt(n[1]),parseInt(n[2]),parseInt(n[3])),opacity:100}:e==="transparent"?{hex:"#000000",opacity:0}:{hex:"#000000",opacity:100}}function Js(e,t){const{r:n,g:r,b:o}=Fa(e);return t>=100?e:`rgba(${n}, ${r}, ${o}, ${(t/100).toFixed(2)})`}var k4=["bg-","text-","border-","fill-","stroke-","outline-","ring-"];function S4(e){for(const t of k4)if(e.startsWith(t))return e.slice(t.length);return e}function hi(e){return e.startsWith("var(--")&&e.endsWith(")")?e.slice(6,-1):S4(e)}function md(e){const t=e.match(/^(.+)-(\d+)$/);return t?{group:t[1],shade:t[2]}:{group:e,shade:""}}function j4(e){const t=new Map;for(const n of e){const r=n.manifestGroup||md(hi(n.className)).group;t.has(r)||t.set(r,[]),t.get(r).push(n)}return t}function Oo(e,t,n){return Math.min(n,Math.max(t,e))}function R4(e){for(const[t,n]of Object.entries(e.values)){if(t.includes("color")||t==="background-color"||t==="fill"||t==="stroke")return n;const r=n.trim().toLowerCase();if(r.startsWith("#")||r.startsWith("rgb")||r.startsWith("hsl")||r.startsWith("oklch")||r.startsWith("oklab"))return n}return null}function L4({value:e,alpha:t=100,onChange:n,onAlphaChange:r,onClose:o,anchorRect:i,property:s,currentVariable:a,onVariableSelect:c,onVariableApply:u,onVariableUnlink:p,initialTab:d}){const[f,v]=h.useState(()=>Dl(e||"#000000")),x=h.useRef(""),m=h.useRef(null),R=h.useMemo(()=>s?v0(s):[],[s]);s&&_o(s.replace(/[A-Z]/g,fe=>`-${fe.toLowerCase()}`));const y=R.length>0,[g,C]=h.useState(d||"custom"),[S,E]=h.useState(""),[P,b]=h.useState(-1),T=h.useRef(null),W=h.useRef(d);d!==W.current&&(W.current=d,d&&C(d));const N=h.useMemo(()=>{if(!S)return R;const fe=S.toLowerCase();return R.filter(we=>we.className.toLowerCase().includes(fe)||Object.values(we.values).some(Be=>Be.toLowerCase().includes(fe)))},[R,S]);h.useEffect(()=>{b(-1)},[N]),h.useEffect(()=>{if(P<0)return;const fe=T.current;if(!fe)return;const we=fe.querySelector(`[data-token-index="${P}"]`);we&&we.scrollIntoView({block:"nearest"})},[P]),h.useEffect(()=>{if(g!=="tokens")return;const fe=T.current;fe&&requestAnimationFrame(()=>{const we=fe.querySelector(".retune-variable-dialog-item-active");we&&we.scrollIntoView({block:"center"})})},[g]);const re=h.useRef(o);re.current=o;const D=h.useRef(c);D.current=c;const k=h.useRef(u);k.current=u;const M=h.useRef(a);M.current=a;const z=h.useRef(N);z.current=N;const B=h.useRef(s);B.current=s;const ee=h.useCallback(fe=>{const we=z.current.length;we!==0&&(fe.key==="ArrowDown"?(fe.preventDefault(),b(Be=>(Be+1)%we)):fe.key==="ArrowUp"?(fe.preventDefault(),b(Be=>Be<=0?we-1:Be-1)):fe.key==="Enter"&&(fe.preventDefault(),b(Be=>{var yt,It;if(Be>=0&&Be<we){const Rt=z.current[Be];if(Rt){const pt=B.current?[B.current]:[];M.current?(yt=D.current)==null||yt.call(D,M.current,Rt,pt):(It=k.current)==null||It.call(k,Rt,pt),re.current()}}return Be})))},[]);h.useEffect(()=>{const fe=T.current;if(!fe)return;const we=Be=>{var hn,qe;const It=Be.target.closest("[data-token-index]");if(!It)return;Be.preventDefault(),Be.stopPropagation();const Rt=parseInt(It.dataset.tokenIndex,10),pt=z.current[Rt];if(pt){const O=B.current?[B.current]:[];M.current?(hn=D.current)==null||hn.call(D,M.current,pt,O):(qe=k.current)==null||qe.call(k,pt,O),re.current()}};return fe.addEventListener("pointerdown",we),()=>fe.removeEventListener("pointerdown",we)},[g]),h.useEffect(()=>()=>{var fe;(fe=m.current)==null||fe.call(m)},[]);const[H,se]=h.useState(e);e!==H&&(se(e),e!==x.current&&v(Dl(e||"#000000")));const[J,ie]=h.useState(()=>bs(f.h,f.s,f.v).replace("#","").toUpperCase()),[de,Re]=h.useState(()=>{const{r:fe,g:we,b:Be}=pi(f.h,f.s,f.v);return{r:String(fe),g:String(we),b:String(Be)}}),He=h.useRef(null),[Ke,ve]=h.useState(f);if(f!==Ke&&(ve(f),!He.current)){ie(bs(f.h,f.s,f.v).replace("#","").toUpperCase());const{r:fe,g:we,b:Be}=pi(f.h,f.s,f.v);Re({r:String(fe),g:String(we),b:String(Be)})}const te=h.useCallback(fe=>{v(fe);const we=tu(fe);x.current=we,n(we),a&&(p==null||p())},[n,a,p]),Ie=h.useRef(null),dt=h.useCallback((fe,we)=>{if(!Ie.current)return null;const Be=Ie.current.getBoundingClientRect(),yt=Oo((fe-Be.left)/Be.width*100,0,100),It=Oo((1-(we-Be.top)/Be.height)*100,0,100);return{s:yt,v:It}},[]),Je=h.useRef(f);Je.current=f;const St=h.useRef(n);St.current=n;const ft=h.useCallback(fe=>{fe.preventDefault();const we=dt(fe.clientX,fe.clientY);we&&te({...Je.current,s:we.s,v:we.v});const Be=It=>{const Rt=dt(It.clientX,It.clientY);if(Rt){const pt={...Je.current,s:Rt.s,v:Rt.v},hn=tu(pt);x.current=hn,v(pt),St.current(hn)}},yt=()=>{document.removeEventListener("pointermove",Be),document.removeEventListener("pointerup",yt),m.current=null};document.addEventListener("pointermove",Be),document.addEventListener("pointerup",yt),m.current=()=>{document.removeEventListener("pointermove",Be),document.removeEventListener("pointerup",yt)}},[dt,te]),st=h.useRef(null),mt=h.useCallback(fe=>{if(!st.current)return 0;const we=st.current.getBoundingClientRect();return Oo((fe-we.left)/we.width*360,0,360)},[]),Fn=h.useCallback(fe=>{fe.preventDefault(),te({...Je.current,h:mt(fe.clientX)});const we=yt=>{const It=mt(yt.clientX),Rt={...Je.current,h:It},pt=tu(Rt);x.current=pt,v(Rt),St.current(pt)},Be=()=>{document.removeEventListener("pointermove",we),document.removeEventListener("pointerup",Be),m.current=null};document.addEventListener("pointermove",we),document.addEventListener("pointerup",Be),m.current=()=>{document.removeEventListener("pointermove",we),document.removeEventListener("pointerup",Be)}},[mt,te]),Xt=h.useRef(null),[pn,Wt]=h.useState(t),Tt=h.useRef(r);Tt.current=r;const[Bn,rt]=h.useState(t);t!==Bn&&(rt(t),Wt(t));const lt=h.useCallback(fe=>{if(!Xt.current)return 100;const we=Xt.current.getBoundingClientRect();return Oo(Math.round((fe-we.left)/we.width*100),0,100)},[]),tn=h.useCallback(fe=>{var It;fe.preventDefault();const we=lt(fe.clientX);Wt(we),(It=Tt.current)==null||It.call(Tt,we);const Be=Rt=>{var hn;const pt=lt(Rt.clientX);Wt(pt),(hn=Tt.current)==null||hn.call(Tt,pt)},yt=()=>{document.removeEventListener("pointermove",Be),document.removeEventListener("pointerup",yt),m.current=null};document.addEventListener("pointermove",Be),document.addEventListener("pointerup",yt),m.current=()=>{document.removeEventListener("pointermove",Be),document.removeEventListener("pointerup",yt)}},[lt]),be=h.useCallback(()=>{He.current=null;let fe=J.replace(/^#/,"").trim();if(fe.length===3&&(fe=fe[0]+fe[0]+fe[1]+fe[1]+fe[2]+fe[2]),/^[a-fA-F0-9]{6}$/.test(fe)){const we=Dl(`#${fe}`,f.a);te(we),ie(fe.toUpperCase())}else ie(bs(f.h,f.s,f.v).replace("#","").toUpperCase())},[J,f,te]),Fe=h.useCallback(()=>{He.current=null;const fe=Oo(Math.round(Number(de.r)||0),0,255),we=Oo(Math.round(Number(de.g)||0),0,255),Be=Oo(Math.round(Number(de.b)||0),0,255),{h:yt,s:It,v:Rt}=$0(fe,we,Be);te({h:yt,s:It,v:Rt,a:f.a}),Re({r:String(fe),g:String(we),b:String(Be)})},[de,f.a,te]),$e=h.useCallback(fe=>we=>{we.key==="Enter"&&(we.currentTarget.blur(),fe())},[]),vt=bs(f.h,f.s,f.v),At=f.s,_t=100-f.v,Yt="Variables",gt=typeof window<"u"&&"EyeDropper"in window,Pt=h.useCallback(async()=>{if(gt)try{const we=await new window.EyeDropper().open();if(we!=null&&we.sRGBHex){const Be=we.sRGBHex;n(Be),v(Dl(Be)),a&&(p==null||p())}}catch{}},[gt,n]),Mn=h.useCallback(fe=>{fe==="unlink"&&(p==null||p(),o())},[p,o]),Ur=!a,$r=l.jsx(_e,{content:a?"Unlink variable":"No variable linked",side:"bottom",delay:300,children:l.jsx("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-action":Ur?void 0:"unlink",style:Ur?{opacity:.3,cursor:"default"}:void 0,children:l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.14694 12.1475C8.3422 11.9522 8.65871 11.9522 8.85397 12.1475C9.04903 12.3427 9.04916 12.6593 8.85397 12.8545L7.35397 14.3545C6.72133 14.9876 6.72123 16.0134 7.35397 16.6465C7.98708 17.2796 9.01376 17.2795 9.64694 16.6465L11.1469 15.1465C11.3421 14.9517 11.6588 14.9517 11.854 15.1465C12.0491 15.3416 12.0488 15.6582 11.854 15.8535L10.354 17.3535C9.33027 18.377 7.67057 18.3771 6.64694 17.3535C5.62359 16.3299 5.6235 14.6701 6.64694 13.6465L8.14694 12.1475ZM14.5005 15.5C14.7764 15.5001 15.0004 15.724 15.0005 16V17.5C15.0005 17.7761 14.7765 17.9999 14.5005 18C14.2243 18 14.0005 17.7761 14.0005 17.5V16C14.0005 15.7239 14.2244 15.5 14.5005 15.5ZM17.5005 14C17.7764 14.0001 18.0004 14.224 18.0005 14.5C18.0005 14.7761 17.7765 14.9999 17.5005 15H16.0005C15.7243 15 15.5005 14.7761 15.5005 14.5C15.5005 14.2239 15.7244 14 16.0005 14H17.5005ZM13.6469 6.64648C14.6706 5.62308 16.3303 5.62301 17.354 6.64648C18.3774 7.6701 18.3774 9.32986 17.354 10.3535L15.854 11.8535C15.6587 12.0487 15.3422 12.0487 15.1469 11.8535C14.9517 11.6583 14.9518 11.3417 15.1469 11.1465L16.6469 9.64648C17.2798 9.01335 17.2799 7.98661 16.6469 7.35351C16.0138 6.72057 14.9871 6.72064 14.354 7.35351L12.854 8.85351C12.6588 9.04859 12.3422 9.04843 12.1469 8.85351C11.952 8.65825 11.9519 8.34165 12.1469 8.14648L13.6469 6.64648ZM8.00045 9C8.27642 9.00014 8.50036 9.22402 8.50045 9.5C8.50045 9.77605 8.27647 9.99985 8.00045 10H6.50045C6.22431 10 6.00045 9.77614 6.00045 9.5C6.00054 9.22393 6.22437 9 6.50045 9H8.00045ZM9.50045 6C9.77642 6.00014 10.0004 6.22402 10.0005 6.5V8C10.0005 8.27605 9.77647 8.49985 9.50045 8.5C9.22431 8.5 9.00045 8.27614 9.00045 8V6.5C9.00054 6.22393 9.22437 6 9.50045 6Z",fill:"currentColor"})})})}),dr=l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-cp-sv-wrap",children:l.jsxs("div",{ref:Ie,className:"retune-cp-sv",style:{backgroundColor:`hsl(${f.h}, 100%, 50%)`},onPointerDown:ft,children:[l.jsx("div",{className:"retune-cp-sv-white"}),l.jsx("div",{className:"retune-cp-sv-black"}),l.jsx("div",{className:"retune-cp-handle",style:{left:`${At}%`,top:`${_t}%`},children:l.jsx("div",{className:"retune-cp-handle-inner",style:{backgroundColor:vt}})})]})}),l.jsxs("div",{className:"retune-cp-sliders",children:[gt&&l.jsx(_e,{content:"Pick color from screen",side:"bottom",delay:300,children:l.jsx("button",{type:"button",className:"retune-cp-eyedropper",onClick:Pt,children:l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M14.5156 5.76709C15.5386 4.73901 17.203 4.7367 18.2285 5.76221C19.25 6.78399 19.2513 8.43996 18.2324 9.46436L16.6602 11.0435C17.0848 11.771 16.9869 12.7196 16.3633 13.3433L16.3438 13.3638C15.6018 14.1055 14.3982 14.1054 13.6562 13.3638L13.5 13.2075L8.43945 18.2642C7.97069 18.7324 7.33447 18.9956 6.67188 18.9956L5.50391 18.9946C5.22841 18.9944 5.00451 18.7712 5.00391 18.4956L5.00195 17.3315C5.00057 16.6668 5.26346 16.0282 5.7334 15.5581L10.792 10.4995L10.6367 10.3433C9.89467 9.60127 9.8947 8.39778 10.6367 7.65576L10.6562 7.63623C11.2789 7.01362 12.2251 6.91514 12.9521 7.3374L14.5156 5.76709ZM6.44043 16.2661C6.15876 16.5481 6.00112 16.931 6.00195 17.3296L6.00391 17.9937L6.67188 17.9956C7.06948 17.9956 7.45115 17.8372 7.73242 17.5562L12.793 12.5005L11.499 11.2065L6.44043 16.2661ZM17.5205 6.46924C16.8863 5.8355 15.8572 5.83673 15.2246 6.47217L13.3545 8.35205L13.001 8.70752L12.6367 8.34326C12.2852 7.99183 11.7147 7.99181 11.3633 8.34326L11.3438 8.36279C10.9923 8.71427 10.9923 9.28476 11.3438 9.63623L14.3633 12.6558C14.7147 13.0073 15.2852 13.0072 15.6367 12.6558L15.6562 12.6362C16.0077 12.2848 16.0077 11.7143 15.6562 11.3628L15.2939 11.0005L15.6455 10.647L17.5234 8.75928C18.1538 8.12571 18.1523 7.10128 17.5205 6.46924Z",fill:"currentColor"})})})}),l.jsxs("div",{className:"retune-cp-slider-tracks",children:[l.jsx("div",{ref:st,className:"retune-cp-hue",onPointerDown:Fn,children:l.jsx("div",{className:"retune-cp-handle",style:{left:`${f.h/360*100}%`,top:"50%"},children:l.jsx("div",{className:"retune-cp-handle-inner",style:{backgroundColor:`hsl(${f.h}, 100%, 50%)`}})})}),l.jsxs("div",{ref:Xt,className:"retune-cp-alpha",onPointerDown:tn,children:[l.jsx("div",{className:"retune-cp-alpha-checker"}),l.jsx("div",{className:"retune-cp-alpha-gradient",style:{background:`linear-gradient(to right, transparent, ${vt})`}}),l.jsx("div",{className:"retune-cp-handle",style:{left:`${pn}%`,top:"50%"},children:l.jsx("div",{className:"retune-cp-handle-inner",style:{backgroundColor:pn<100?`rgba(${pi(f.h,f.s,f.v).r}, ${pi(f.h,f.s,f.v).g}, ${pi(f.h,f.s,f.v).b}, ${pn/100})`:vt}})})]})]})]}),l.jsxs("div",{className:"retune-cp-inputs",children:[l.jsxs("div",{className:"retune-cp-input-group",children:[l.jsx("label",{className:"retune-cp-label",children:"Hex"}),l.jsx("input",{className:"retune-cp-input",value:J,onChange:fe=>ie(fe.target.value),onFocus:fe=>{He.current="hex",fe.target.select()},onBlur:be,onKeyDown:$e(be),spellCheck:!1})]}),l.jsxs("div",{className:"retune-cp-input-group",children:[l.jsx("label",{className:"retune-cp-label",children:"R"}),l.jsx("input",{className:"retune-cp-input",inputMode:"numeric",value:de.r,onChange:fe=>Re(we=>({...we,r:fe.target.value})),onFocus:fe=>{He.current="r",fe.target.select()},onBlur:Fe,onKeyDown:$e(Fe)})]}),l.jsxs("div",{className:"retune-cp-input-group",children:[l.jsx("label",{className:"retune-cp-label",children:"G"}),l.jsx("input",{className:"retune-cp-input",inputMode:"numeric",value:de.g,onChange:fe=>Re(we=>({...we,g:fe.target.value})),onFocus:fe=>{He.current="g",fe.target.select()},onBlur:Fe,onKeyDown:$e(Fe)})]}),l.jsxs("div",{className:"retune-cp-input-group",children:[l.jsx("label",{className:"retune-cp-label",children:"B"}),l.jsx("input",{className:"retune-cp-input",inputMode:"numeric",value:de.b,onChange:fe=>Re(we=>({...we,b:fe.target.value})),onFocus:fe=>{He.current="b",fe.target.select()},onBlur:Fe,onKeyDown:$e(Fe)})]})]})]}),Cr=h.useMemo(()=>j4(N),[N]),{ramps:fr,standalone:sn}=h.useMemo(()=>{const fe=[],we=[];for(const[Be,yt]of Cr){const It=yt.some(Rt=>Rt.manifestGroup);yt.length>1||It?(yt.sort((Rt,pt)=>{const hn=parseInt(md(hi(Rt.className)).shade)||0,qe=parseInt(md(hi(pt.className)).shade)||0;return hn-qe}),fe.push([Be,yt])):we.push(...yt)}return we.sort((Be,yt)=>hi(Be.className).localeCompare(hi(yt.className))),fe.sort((Be,yt)=>Be[0].localeCompare(yt[0])),{ramps:fe,standalone:we}},[Cr]),yn=h.useMemo(()=>{const fe=[...sn];for(const[,we]of fr)fe.push(...we);return fe},[sn,fr]);z.current=yn;const Se=(()=>{let fe=0;const we=Be=>{const yt=fe++,It=(a==null?void 0:a.className)===Be.className,Rt=yt===P;return l.jsxs("div",{className:`retune-variable-dialog-item${It?" retune-variable-dialog-item-active":""}${Rt?" retune-variable-dialog-item-highlighted":""}`,"data-token-index":yt,children:[l.jsx("span",{className:"retune-variable-dialog-swatch",style:{backgroundColor:R4(Be)||"transparent"}}),l.jsx("span",{className:"retune-variable-dialog-name",children:hi(Be.className)})]},Be.className)};return l.jsxs("div",{ref:T,className:"retune-variable-dialog-list",children:[N.length===0&&l.jsx("div",{className:"retune-variable-dialog-empty",children:"No variables found"}),sn.map(we),fr.map(([Be,yt])=>l.jsxs("div",{children:[l.jsx("div",{className:"retune-variable-dialog-group-title",children:Be.replace(/-/g," ")}),yt.map(we)]},Be))]})})();return y?l.jsx(Ia,{tabs:[{value:"custom",label:"Custom"},{value:"tokens",label:Yt}],activeTab:g,onTabChange:C,onClose:o,anchorRect:i,search:g==="tokens"?{value:S,onChange:E,placeholder:"Search",onKeyDown:ee}:void 0,headerActions:$r,onHeaderAction:Mn,minHeight:g==="custom"?void 0:400,children:g==="tokens"?Se:dr}):l.jsx(Ia,{title:"Color",onClose:o,anchorRect:i,children:dr})}function E4(e){return e.startsWith("var(--")&&e.endsWith(")")?e.slice(6,-1):e}function Qo({prop:e,value:t,onChange:n,variableMatch:r,property:o,onVariableSelect:i,onVariableApply:s,onVariableUnlink:a,isChanged:c,onReset:u}){const p=Va(t||""),[d,f]=h.useState(p.hex.replace("#","").toUpperCase()),[v,x]=h.useState(String(p.opacity)),[m,R]=h.useState(!1),[y,g]=h.useState("custom"),[C,S]=h.useState(null),E=h.useRef(null),P=h.useRef(!1),b=h.useRef(!1),T=h.useRef(()=>R(!1)),W=h.useRef(p.hex),N=h.useRef(p.opacity),[re,D]=h.useState(t);if(t!==re){D(t);const te=Va(t||"");W.current=te.hex,N.current=te.opacity,P.current||f(te.hex.replace("#","").toUpperCase()),b.current||x(String(te.opacity))}const k=h.useCallback((te,Ie)=>{W.current=te,N.current=Ie,n(e,Js(te,Ie))},[e,n]),M=h.useCallback(()=>{if(m){Nr(T.current),R(!1);return}z("custom")},[m]),z=h.useCallback(te=>{const Ie=E.current;if(!Ie)return;const dt=Ie.getBoundingClientRect(),Je=Ie.closest(".retune-row");if(Je){const St=Je.getBoundingClientRect();S({top:dt.top,left:St.left,width:St.width,height:dt.height})}else S({top:dt.top,left:dt.left,width:dt.width,height:dt.height});g(te),R(!0),Qs(T.current)},[]),B=h.useCallback(()=>{if(m){Nr(T.current),R(!1);return}z("tokens")},[m,z]),ee=h.useCallback(te=>{f(te.replace("#","").toUpperCase()),k(te,N.current)},[k]),H=h.useCallback(te=>{x(String(te)),k(W.current,te)},[k]),se=h.useCallback(()=>{Nr(T.current),R(!1)},[]),J=h.useCallback((te,Ie)=>{s==null||s(te,Ie),Nr(T.current),R(!1)},[s]),ie=h.useCallback((te,Ie,dt)=>{i==null||i(te,Ie,dt),Nr(T.current),R(!1)},[i]),de=h.useCallback(()=>{P.current=!1;let te=d.replace(/^#/,"").trim();te.length===3&&(te=te[0]+te[0]+te[1]+te[1]+te[2]+te[2]),/^[a-fA-F0-9]{6}$/.test(te)?(f(te.toUpperCase()),k(`#${te}`,N.current)):f(W.current.replace("#","").toUpperCase())},[d,k]),Re=h.useCallback(()=>{b.current=!1;const te=Math.max(0,Math.min(100,Math.round(Number(v)||0)));x(String(te)),k(W.current,te)},[v,k]),He=h.useCallback(te=>{if(te.key==="Enter")te.currentTarget.blur();else if(te.key==="ArrowUp"||te.key==="ArrowDown"){te.preventDefault();const Ie=Math.round(Number(te.currentTarget.value)||0),dt=te.shiftKey?10:1,Je=te.key==="ArrowUp"?dt:-dt,St=Math.max(0,Math.min(100,Ie+Je));x(String(St)),k(W.current,St)}},[k]),Ke=!t||t==="none"||t==="transparent"||W.current==="#000000"&&N.current===0,ve=(()=>{if(Ke)return{backgroundColor:"#fff",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"};const te=W.current,Ie=N.current;if(Ie>=100)return{backgroundColor:te,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"};const dt="linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)",Je=Js(te,Ie);return{backgroundImage:`linear-gradient(to right, ${te} 50%, ${Je} 50%), ${dt}`,backgroundSize:"100% 100%, 4px 4px, 4px 4px",backgroundPosition:"0 0, 0 0, 2px 2px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"}})();return l.jsxs("div",{className:"retune-color-row",children:[l.jsx(Wr,{isChanged:c??!1,onReset:u??(()=>{})}),l.jsxs("div",{className:`retune-color-hex-section${r?" retune-color-variable-applied":""}`,children:[l.jsx("div",{ref:E,className:"retune-color-swatch",onClick:r?B:M,children:l.jsx("div",{className:"retune-color-swatch-inner",style:ve,children:Ke&&l.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",style:{position:"absolute",top:0,left:0},children:l.jsx("line",{x1:"3",y1:"13",x2:"13",y2:"3",stroke:"var(--retune-red-500)",strokeWidth:"1",strokeLinecap:"round"})})})}),l.jsx("input",{className:"retune-color-hex-input",value:Ke?"None":r?E4(r.variable.className):d,readOnly:!!r,onClick:r?B:void 0,onChange:r?void 0:te=>f(te.target.value.replace(/[^a-fA-F0-9]/g,"").slice(0,6)),onFocus:r?void 0:te=>{P.current=!0,te.target.select()},onBlur:r?void 0:de,onKeyDown:r?void 0:te=>{te.key==="Enter"&&te.currentTarget.blur()},spellCheck:!1}),l.jsx(Ui,{match:r,property:o||e,onVariableSelect:i,onVariableApply:s,onVariableUnlink:a,onRequestOpen:B})]}),!r&&l.jsxs("div",{className:"retune-color-opacity-section",children:[l.jsx("input",{className:"retune-color-opacity-input",inputMode:"numeric",value:v,onChange:te=>x(te.target.value),onFocus:te=>{b.current=!0,te.target.select()},onBlur:Re,onKeyDown:He}),l.jsx("span",{className:"retune-color-opacity-unit",children:"%"})]}),m&&C&&l.jsx(L4,{value:W.current,alpha:N.current,onChange:ee,onAlphaChange:H,onClose:se,anchorRect:C,property:o||e,currentVariable:r==null?void 0:r.variable,onVariableSelect:ie,onVariableApply:J,onVariableUnlink:a,initialTab:y})]})}var _0=["system-ui","sans-serif","serif","monospace"];function N4(){const e=new Set;try{for(const t of document.styleSheets)try{for(const n of t.cssRules){if(!(n instanceof CSSStyleRule))continue;const r=n.style.getPropertyValue("font-family");if(!(!r||r.trim().startsWith("var(")))for(const o of r.split(",")){const i=o.trim().replace(/^["']|["']$/g,"");i.startsWith("var(")||i&&!_0.includes(i)&&e.add(i)}}}catch{}}catch{}return Array.from(e).sort()}var Fl=null;function M4(){return Fl||(Fl=N4(),setTimeout(()=>{Fl=null},1e4)),Fl}async function Kh(){try{if(!("queryLocalFonts"in window))return[];const e=await window.queryLocalFonts(),t=new Set;for(const n of e)t.add(n.family);return Array.from(t).sort()}catch{return[]}}function qh(e){return e?e.split(",")[0].trim().replace(/^["']|["']$/g,""):""}function T4({prop:e,value:t,onChange:n,isChanged:r,onReset:o}){var Ke;const i=qh(t||""),[s,a]=h.useState(i),[c,u]=h.useState(!1),[p,d]=h.useState(null),[f,v]=h.useState(""),[x,m]=h.useState(null),[R,y]=h.useState(-1),[g,C]=h.useState("all"),S=h.useRef(null),E=h.useRef(null),P=h.useRef(()=>u(!1)),[b,T]=h.useState(!1);h.useEffect(()=>{if(x===null&&"queryLocalFonts"in window)try{navigator.permissions.query({name:"local-fonts"}).then(ve=>{ve.state==="granted"?Kh().then(te=>m(te)):ve.state==="denied"&&(m([]),T(!0))}).catch(()=>{})}catch{}},[x]);const[W,N]=h.useState(t);t!==W&&(N(t),a(qh(t||"")));const re=h.useMemo(()=>M4(),[]),D=h.useMemo(()=>(x||[]).filter(ve=>!re.some(te=>te.toLowerCase()===ve.toLowerCase())),[x,re]),k=ve=>!f||ve.toLowerCase().includes(f.toLowerCase()),M=g==="all"||g==="project"?re.filter(k):[],z=g==="all"||g==="system"?D.filter(k):[],B=g==="all"||g==="generic"?_0.filter(k):[],ee=[...M,...z,...B],H=h.useCallback(()=>{const ve=S.current;if(!ve)return;if(c){Nr(P.current),u(!1);return}const te=ve.closest(".retune-row"),Ie=te?te.getBoundingClientRect():ve.getBoundingClientRect();d({top:Ie.top,left:Ie.left,width:Ie.width,height:Ie.height}),u(!0),v(""),y(-1),Qs(P.current)},[c]),se=h.useCallback(()=>{Nr(P.current),u(!1),v("")},[]),J=h.useCallback(ve=>{a(ve),n(e,ve),se()},[e,n,se]),ie=h.useCallback(async()=>{if(x===null)try{const ve=await Kh();m(ve)}catch{m([]),T(!0)}},[x]);h.useEffect(()=>{const ve=E.current;if(!ve)return;const te=Ie=>{const Je=Ie.target.closest("[data-font-name]");if(!Je)return;Ie.preventDefault(),Ie.stopPropagation();const St=Je.dataset.fontName;if(St==="__load_system"){ie();return}St&&J(St)};return ve.addEventListener("pointerdown",te),()=>ve.removeEventListener("pointerdown",te)},[c,J,ie]);const de=h.useCallback(ve=>{const te=ee.length;te!==0&&(ve.key==="ArrowDown"?(ve.preventDefault(),y(Ie=>(Ie+1)%te)):ve.key==="ArrowUp"?(ve.preventDefault(),y(Ie=>Ie<=0?te-1:Ie-1)):ve.key==="Enter"&&(ve.preventDefault(),R>=0&&R<te&&J(ee[R])))},[ee,R,J]);h.useEffect(()=>{if(R<0)return;const ve=E.current;if(!ve)return;const te=ve.querySelector(`[data-font-index="${R}"]`);te&&te.scrollIntoView({block:"nearest"})},[R]);const Re=((Ke=S.current)==null?void 0:Ke.getRootNode())instanceof ShadowRoot?S.current.getRootNode().querySelector("[data-retune-container]"):null;let He=0;return l.jsxs("div",{className:"retune-font-input",ref:S,children:[l.jsx(Wr,{isChanged:r??!1,onReset:o??(()=>{})}),l.jsxs("button",{type:"button",className:"retune-font-input-trigger",onClick:H,children:[l.jsx("span",{className:"retune-font-input-value",style:{fontFamily:i||void 0},children:i||"–"}),l.jsx(uc,{})]}),c&&p&&Re&&no.createPortal(l.jsxs(Ia,{title:"Fonts",onClose:se,anchorRect:p,search:{value:f,onChange:v,placeholder:"Search fonts...",onKeyDown:de},maxHeight:400,minHeight:400,children:[l.jsx("div",{className:"retune-font-filter",children:l.jsx(xn,{prop:"__fontCategory",value:g,options:["all","project","system","generic"],onChange:(ve,te)=>C(te)})}),l.jsxs("div",{ref:E,className:"retune-font-list",children:[M.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-font-section-title",children:"Project fonts"}),M.map(ve=>{const te=He++;return l.jsx("div",{className:`retune-font-item${ve===i?" retune-font-item-active":""}${te===R?" retune-font-item-highlighted":""}`,"data-font-name":ve,"data-font-index":te,style:{fontFamily:ve},children:ve},ve)})]}),z.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-font-section-title",children:"System fonts"}),z.map(ve=>{const te=He++;return l.jsx("div",{className:`retune-font-item${ve===i?" retune-font-item-active":""}${te===R?" retune-font-item-highlighted":""}`,"data-font-name":ve,"data-font-index":te,style:{fontFamily:ve},children:ve},ve)})]}),B.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-font-section-title",children:"Generic"}),B.map(ve=>{const te=He++;return l.jsx("div",{className:`retune-font-item${ve===i?" retune-font-item-active":""}${te===R?" retune-font-item-highlighted":""}`,"data-font-name":ve,"data-font-index":te,style:{fontFamily:ve},children:ve},ve)})]}),ee.length===0&&l.jsx("div",{className:"retune-font-empty",children:"No fonts found"}),(g==="all"||g==="system")&&(x===null?l.jsx("div",{className:"retune-font-system-prompt",children:l.jsx("button",{className:"retune-font-system-btn","data-font-name":"__load_system",children:"Load system fonts"})}):b?l.jsx("div",{className:"retune-font-system-prompt",children:l.jsx("p",{className:"retune-font-denied",children:"Font access denied. Allow in site settings to try again."})}):null)]})]}),Re)]})}function A4(e){const t=e.webkitLineClamp;return!!t&&t!=="none"&&t!=="unset"?{enabled:!0,lines:parseInt(t,10)||2}:e.textOverflow==="ellipsis"&&e.whiteSpace==="nowrap"?{enabled:!0,lines:1}:{enabled:!1,lines:1}}function Qh(e,t){const n={};return e.enabled?(n.display="-webkit-box",n.webkitBoxOrient="vertical",n.webkitLineClamp=String(e.lines),n.overflow="hidden",n.textOverflow="ellipsis",n.whiteSpace="normal",n.minWidth="0px",n):(n.textOverflow="clip",n.overflow="visible",n.whiteSpace="normal",n.webkitLineClamp="unset",n.webkitBoxOrient="unset",n.minWidth="0px",t.currentDisplay==="-webkit-box"&&(n.display="block"),n)}var $4=[{value:"left",icon:l.jsx(u7,{}),label:"Left"},{value:"center",icon:l.jsx(d7,{}),label:"Center"},{value:"right",icon:l.jsx(f7,{}),label:"Right"}],_4=[{value:"top",icon:l.jsx(p7,{}),label:"Top"},{value:"middle",icon:l.jsx(h7,{}),label:"Middle"},{value:"bottom",icon:l.jsx(g7,{}),label:"Bottom"}],P4=[{value:"100",label:"Thin"},{value:"200",label:"Extra Light"},{value:"300",label:"Light"},{value:"400",label:"Regular"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"},{value:"800",label:"Extra Bold"},{value:"900",label:"Black"}],I4=[{value:"normal",label:"Normal"},{value:"1",label:"1"},{value:"1.25",label:"1.25"},{value:"1.5",label:"1.5"},{value:"1.75",label:"1.75"},{value:"2",label:"2"}],z4=[{value:"normal",label:"Normal"},{value:"-0.05em",label:"Tight"},{value:"0.05em",label:"Wide"},{value:"0.1em",label:"Wider"}],O4=[{value:"none",icon:l.jsx(Vr,{}),label:"None"},{value:"disc",icon:l.jsx(S7,{}),label:"Bullet"},{value:"decimal",icon:l.jsx(j7,{}),label:"Numbered"}];function D4(e){return!e||e==="start"?"left":e==="end"?"right":e}function F4(e){return e?e==="middle"||e==="center"?"middle":e==="bottom"?"bottom":e==="top"||e==="baseline"||e==="text-top"?"top":e==="text-bottom"||e==="sub"?"bottom":"top":"top"}function B4({element:e,s:t,onPropertyChange:n,onApplyToElement:r,variableProps:o,changeProps:i,isText:s,hasVerticalAlign:a}){const[c,u]=h.useState(!1);return s?l.jsxs(An,{label:"Typography",children:[l.jsx(nt,{children:l.jsx(Ge,{label:"Font",children:l.jsx(T4,{prop:"fontFamily",value:t.fontFamily,onChange:n,...i("fontFamily")})})}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Size",children:l.jsx(ht,{prop:"fontSize",value:t.fontSize,onChange:n,min:1,...o("fontSize"),...i("fontSize")})}),l.jsx(Ge,{label:"Weight",children:l.jsx(qo,{prop:"fontWeight",value:t.fontWeight,options:P4,onChange:n,...o("fontWeight"),...i("fontWeight")})})]}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Line height",children:l.jsx(qo,{prop:"lineHeight",value:t.lineHeight,options:I4,onChange:n,...o("lineHeight"),...i("lineHeight")})}),l.jsx(Ge,{label:"Letter spacing",children:l.jsx(qo,{prop:"letterSpacing",value:t.letterSpacing,options:z4,onChange:n,...o("letterSpacing"),...i("letterSpacing")})})]}),l.jsx(nt,{children:l.jsx(Ge,{label:"Color",children:l.jsx(Qo,{prop:"color",value:t.color,onChange:n,...o("color"),...i("color")})})}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Align",children:l.jsx(Dr,{options:$4,value:D4(t.textAlign),onChange:p=>n("textAlign",p)})}),l.jsx(Ge,{label:"Vertical",children:l.jsx(Dr,{options:_4,value:F4(t.verticalAlign),onChange:p=>n("verticalAlign",p),disabled:!a})}),l.jsx("div",{style:{alignSelf:"flex-end"},children:l.jsx(_e,{content:c?"Show less":"More options",side:"top",children:l.jsx("button",{className:`retune-split-btn${c?" active":""}`,onClick:()=>u(p=>!p),children:l.jsx(b7,{})})})})]}),c&&l.jsxs(l.Fragment,{children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Style",children:l.jsx(xn,{prop:"fontStyle",value:t.fontStyle,options:["normal","italic","oblique"],onChange:n})}),l.jsx(Ge,{label:"Decoration",children:l.jsx(xn,{prop:"textDecoration",value:t.textDecoration,options:["none","underline","line-through","overline"],onChange:n})})]}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Transform",children:l.jsx(xn,{prop:"textTransform",value:t.textTransform,options:["none","uppercase","lowercase","capitalize"],onChange:n})}),l.jsx(Ge,{label:"White space",children:l.jsx(xn,{prop:"whiteSpace",value:t.whiteSpace,options:["normal","nowrap","pre","pre-wrap","pre-line","break-spaces"],onChange:n})})]}),(()=>{const p=A4(t),d={currentDisplay:t.display},f=x=>{for(const[m,R]of Object.entries(x))n(m,R)},v=x=>{var R;if(!r)return;let m=(R=e.element)==null?void 0:R.parentElement;for(;m&&m!==document.body;){const y=getComputedStyle(m.parentElement||m).display;(y.includes("grid")||y.includes("flex"))&&r(m,"minWidth",x?"0px":""),m=m.parentElement}};return l.jsxs(l.Fragment,{children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Truncate",children:l.jsx(xn,{prop:"truncate",value:p.enabled?"ellipsis":"none",options:["none","ellipsis"],onChange:(x,m)=>{const R=m==="ellipsis",y=Qh({enabled:R,lines:1},d);f(y),v(R)}})}),p.enabled&&l.jsx(Ge,{label:"Max lines",children:l.jsx(ht,{prop:"lineClamp",value:String(p.lines),onChange:(x,m)=>{const R=parseInt(m)||1,y=Qh({enabled:!0,lines:R},d);f(y)},...i("lineClamp")})})]}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Word break",children:l.jsx(xn,{prop:"overflowWrap",value:t.overflowWrap,options:["normal","break-word","anywhere"],onChange:n})}),["UL","OL","LI"].includes(e.tagName)&&l.jsx(Ge,{label:"List style",children:l.jsx(Dr,{options:O4,value:t.listStyleType||"none",onChange:x=>n("listStyleType",x)})})]})]})})()]})]}):null}function V4(){return{type:"linear",angle:180,stops:[{color:"#ffffff",position:0,opacity:100},{color:"#000000",position:1,opacity:100}]}}function Jh(e){if(e.stops.length<2)return"none";const n=[...e.stops].sort((r,o)=>r.position-o.position).map(r=>{const o=(r.opacity??100)/100;return`${o<1?Js(r.color,Math.round(o*100)):r.color} ${Math.round(r.position*100)}%`}).join(", ");switch(e.type){case"linear":return`linear-gradient(${e.angle}deg, ${n})`;case"radial":return`radial-gradient(circle, ${n})`;case"conic":return`conic-gradient(from ${e.angle}deg, ${n})`}}function H4(e){return`linear-gradient(to right, ${[...e].sort((r,o)=>r.position-o.position).map(r=>{const o=(r.opacity??100)/100;return`${o<1?Js(r.color,Math.round(o*100)):r.color} ${Math.round(r.position*100)}%`}).join(", ")})`}function sa(e){if(!e||e==="none")return null;const t=e.match(/^linear-gradient\((.+)\)$/),n=e.match(/^radial-gradient\((.+)\)$/),r=e.match(/^conic-gradient\((.+)\)$/);let o="linear",i=180,s="";if(t){o="linear";const c=t[1],u=c.match(/^(\d+(?:\.\d+)?)deg\s*,\s*(.+)$/);if(u)i=parseFloat(u[1]),s=u[2];else{const p=c.match(/^to\s+([\w\s]+)\s*,\s*(.+)$/);p?(i=Z4(p[1].trim()),s=p[2]):s=c}}else if(n){o="radial";const c=n[1],u=c.match(/^(?:circle|ellipse)(?:\s+[^,]*)?\s*,\s*(.+)$/);s=u?u[1]:c}else if(r){o="conic";const c=r[1],u=c.match(/^from\s+(\d+(?:\.\d+)?)deg\s*,\s*(.+)$/);u?(i=parseFloat(u[1]),s=u[2]):s=c}else return null;const a=W4(s);return a.length<2?null:{type:o,angle:i,stops:a}}function W4(e){const t=[],n=U4(e);for(let r=0;r<n.length;r++){const o=n[r].trim();if(!o)continue;const i=o.match(/^(.+?)\s+(\d+(?:\.\d+)?)%$/);let s,a;i?(s=i[1].trim(),a=parseFloat(i[2])/100):(s=o,a=n.length>1?r/(n.length-1):0);const{hex:c,opacity:u}=Va(s);t.push({color:c,position:a,opacity:u})}return t}function U4(e){const t=[];let n=0,r="";for(const o of e)o==="("?n++:o===")"&&n--,o===","&&n===0?(t.push(r),r=""):r+=o;return r.trim()&&t.push(r),t}function Z4(e){return{top:0,"top right":45,right:90,"bottom right":135,bottom:180,"bottom left":225,left:270,"top left":315}[e]??180}function P0(e,t){const n=[...e].sort((u,p)=>u.position-p.position);let r=n[0],o=n[n.length-1];for(let u=0;u<n.length-1;u++)if(n[u].position<=t&&n[u+1].position>=t){r=n[u],o=n[u+1];break}const i=o.position-r.position,s=i===0?0:(t-r.position)/i,a=Fa(r.color),c=Fa(o.color);return Ba(Math.round(a.r+(c.r-a.r)*s),Math.round(a.g+(c.g-a.g)*s),Math.round(a.b+(c.b-a.b)*s))}function e1(e,t){if(t&&t!=="none"){const n=sa(t);if(n)return n.type}return"solid"}function X4({stops:e,selectedIndex:t,onSelectStop:n,onStopPositionChange:r,onAddStop:o,gradientCss:i}){const s=h.useRef(null),a=h.useRef(!1),c=h.useRef(null),u=h.useRef(e);u.current=e;const p=h.useRef(r);p.current=r;const d=h.useRef(n);d.current=n;const f=h.useCallback(R=>{const y=s.current.getBoundingClientRect();return Math.max(0,Math.min(1,(R-y.left)/y.width))},[]),v=h.useCallback(R=>{const y=f(R);let g=0,C=1/0;for(let P=0;P<u.current.length;P++){const b=Math.abs(u.current[P].position-y);b<C&&(C=b,g=P)}const S=s.current.getBoundingClientRect();return C*S.width<20?g:null},[f]),x=h.useCallback(R=>{const y=v(R.clientX);if(y===null)return;R.stopPropagation(),R.preventDefault(),a.current=!0,c.current=y,d.current(y);const g=S=>{c.current!==null&&p.current(c.current,f(S.clientX))},C=()=>{a.current=!1,c.current=null,document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",C)};document.addEventListener("pointermove",g),document.addEventListener("pointerup",C)},[v,f]),m=h.useCallback(R=>{if(a.current||v(R.clientX)!==null)return;const g=f(R.clientX),C=P0(e,g);o(g,C)},[e,o,f,v]);return l.jsxs("div",{className:"retune-gradient-bar-wrap",onClick:m,onPointerDown:x,children:[l.jsxs("div",{ref:s,className:"retune-gradient-bar",children:[l.jsx("div",{className:"retune-gradient-bar-checker"}),l.jsx("div",{className:"retune-gradient-bar-fill",style:{backgroundImage:i}})]}),e.map((R,y)=>l.jsx("div",{className:"retune-gradient-stop-handle",style:{left:`${R.position*100}%`,pointerEvents:"none"},children:l.jsxs("div",{className:"retune-gradient-stop-indicator",children:[l.jsx("div",{className:"retune-gradient-stop-chit",style:{backgroundColor:t===y?"#0d99ff":"white"},children:l.jsx("div",{className:"retune-gradient-stop-chit-color",style:{backgroundColor:R.color}})}),l.jsx("div",{className:"retune-gradient-stop-caret",style:{backgroundColor:t===y?"#0d99ff":"white"}})]})},y))]})}function Y4({gradient:e,onChange:t,originalGradient:n,isNewGradient:r}){const[o,i]=h.useState(0),[s,a]=h.useState(`${e.angle}°`),[c,u]=h.useState(!1),[p,d]=h.useState(new Map),f=h.useCallback(M=>{if(r||!n)return!1;const z=n.stops[M];if(!z)return!0;const B=e.stops[M];return B?B.color!==z.color||(B.opacity??100)!==(z.opacity??100):!1},[e.stops,n,r]),v=h.useCallback(M=>{if(r||!n)return!1;const z=n.stops[M];if(!z)return!0;const B=e.stops[M];return B?B.position!==z.position:!1},[e.stops,n,r]),x=h.useCallback(M=>{if(!n)return;const z=n.stops[M];if(z){const B=[...e.stops];B[M]={...B[M],color:z.color,opacity:z.opacity},t({...e,stops:B})}else{const B=e.stops.filter((ee,H)=>H!==M);t({...e,stops:B})}},[e,n,t]),m=h.useCallback(M=>{if(!n)return;const z=n.stops[M];if(!z)return;const B=[...e.stops];B[M]={...B[M],position:z.position},t({...e,stops:B})},[e,n,t]),[R,y]=h.useState(e.angle);e.angle!==R&&(y(e.angle),c||a(`${e.angle}°`));const g=h.useCallback((M,z)=>{const B=e.stops.map((ee,H)=>H===M?{...ee,position:z}:ee);t({...e,stops:B})},[e,t]),C=h.useCallback((M,z)=>{const B=[...e.stops,{color:z,position:M,opacity:100}];t({...e,stops:B}),i(B.length-1)},[e,t]),S=h.useCallback(M=>{u(!0);const z=M.target.value;a(z);const B=z.replace(/°/g,"").trim(),ee=parseInt(B,10);isNaN(ee)||t({...e,angle:(ee%360+360)%360})},[e,t]),E=h.useCallback(()=>{u(!1);const M=s.replace(/°/g,"").trim(),z=parseInt(M,10),B=isNaN(z)?e.angle:(z%360+360)%360;t({...e,angle:B}),a(`${B}°`)},[s,e,t]),P=h.useCallback(()=>{const M=e.stops.map(z=>({...z,position:1-z.position}));M.reverse(),t({...e,stops:M})},[e,t]),b=h.useCallback(()=>{t({...e,angle:(e.angle+45)%360})},[e,t]),T=h.useCallback(()=>{const M=P0(e.stops,.5),z=[...e.stops,{color:M,position:.5,opacity:100}];t({...e,stops:z}),i(z.length-1)},[e,t]),W=h.useCallback(M=>{if(e.stops.length<=2)return;const z=e.stops.filter((B,ee)=>ee!==M);t({...e,stops:z}),o>=z.length?i(z.length-1):o===M&&o>0&&i(o-1)},[e,t,o]),N=h.useCallback((M,z)=>{const B=parseInt(z,10);if(isNaN(B))return;const ee=Math.max(0,Math.min(100,B)),H=e.stops.map((se,J)=>J===M?{...se,position:ee/100}:se);t({...e,stops:H})},[e,t]),re=h.useCallback((M,z,B)=>{const{hex:ee,opacity:H}=Va(B),se=e.stops.map((J,ie)=>ie===M?{...J,color:ee,opacity:H}:J);t({...e,stops:se})},[e,t]),D=e.type!=="radial",k=e.stops.map((M,z)=>({stop:M,index:z})).sort((M,z)=>M.stop.position-z.stop.position);return l.jsxs("div",{className:"retune-gradient-editor",children:[l.jsx(X4,{stops:e.stops,selectedIndex:o,onSelectStop:i,onStopPositionChange:g,onAddStop:C,gradientCss:H4(e.stops)}),l.jsxs("div",{className:"retune-gradient-controls",children:[l.jsx("input",{className:"retune-gradient-angle-input",type:"text",value:D?c?s:`${e.angle}°`:"–",readOnly:!D,disabled:!D,onFocus:D?M=>{u(!0),a(String(e.angle)),requestAnimationFrame(()=>M.target.select())}:void 0,onBlur:D?E:void 0,onKeyDown:D?M=>{if(M.key==="Enter"&&M.currentTarget.blur(),M.key==="ArrowUp"||M.key==="ArrowDown"){M.preventDefault();const z=M.shiftKey?15:1,B=M.key==="ArrowUp"?z:-z,ee=((e.angle+B)%360+360)%360;t({...e,angle:ee})}}:void 0,onChange:D?S:void 0}),l.jsxs("div",{className:"retune-gradient-actions",children:[l.jsx(_e,{content:"Reverse gradient direction",children:l.jsx("button",{type:"button",className:"retune-gradient-action-btn",onClick:P,children:l.jsx(k7,{})})}),l.jsx(_e,{content:"Rotate gradient 45°",children:l.jsx("button",{type:"button",className:"retune-gradient-action-btn",disabled:!D,onClick:b,children:l.jsx(R7,{})})})]})]}),l.jsxs("div",{className:"retune-gradient-stops-header",children:[l.jsx("span",{className:"retune-gradient-stops-label",children:"Stops"}),l.jsx(_e,{content:"Add color stop",children:l.jsx("button",{type:"button",className:"retune-gradient-action-btn",onClick:T,children:l.jsx(ii,{})})})]}),l.jsx("div",{className:"retune-gradient-stops-list",children:k.map(({stop:M,index:z})=>l.jsxs("div",{className:"retune-gradient-stop-row",children:[l.jsxs("div",{className:"retune-gradient-stop-pos",children:[l.jsx(Wr,{isChanged:v(z),onReset:()=>m(z)}),l.jsx("input",{className:"retune-gradient-stop-pos-input",type:"text",inputMode:"numeric",defaultValue:Math.round(M.position*100),onBlur:B=>N(z,B.target.value),onKeyDown:B=>{B.key==="Enter"&&B.currentTarget.blur()}},`${z}-${Math.round(M.position*100)}`),l.jsx("span",{className:"retune-gradient-stop-pos-unit",children:"%"})]}),l.jsx("div",{className:"retune-gradient-stop-color",children:l.jsx(Qo,{prop:`stop-${z}`,value:Js(M.color,M.opacity??100),onChange:(B,ee)=>{re(z,B,ee),p.has(z)&&d(H=>{const se=new Map(H);return se.delete(z),se})},property:"backgroundColor",variableMatch:p.get(z),onVariableApply:B=>{const ee=Object.values(B.values)[0];ee&&re(z,`stop-${z}`,ee),d(H=>new Map(H).set(z,{variable:B,property:"background-color"}))},onVariableSelect:(B,ee)=>{const H=Object.values(ee.values)[0];H&&re(z,`stop-${z}`,H),d(se=>new Map(se).set(z,{variable:ee,property:"background-color"}))},onVariableUnlink:()=>{d(B=>{const ee=new Map(B);return ee.delete(z),ee})},isChanged:f(z),onReset:()=>x(z)})}),l.jsx(_e,{content:"Remove color stop",children:l.jsx("button",{type:"button",className:"retune-gradient-action-btn remove",disabled:e.stops.length<=2,onClick:()=>W(z),children:l.jsx(Vr,{})})})]},z))})]})}function G4({element:e,s:t,onPropertyChange:n,variableProps:r,shorthandVariableProps:o,changeProps:i,shorthandChangeProps:s,handleVariableSelect:a,handleVariableApply:c,isSvgChild:u,isMedia:p,getVariableMatch:d,onVariableAssociate:f,onPropertyReset:v}){const[x,m]=h.useState(!1),R=e1(t.backgroundColor,t.backgroundImage),[y,g]=h.useState(R),[C]=h.useState(R),[S]=h.useState(()=>t.backgroundImage&&t.backgroundImage!=="none"?sa(t.backgroundImage)??null:null),[E,P]=h.useState(()=>{if(t.backgroundImage&&t.backgroundImage!=="none"){const z=sa(t.backgroundImage);if(z)return z}return V4()}),b=h.useRef(!1),[T,W]=h.useState(t.backgroundImage);if(t.backgroundImage!==T){if(W(t.backgroundImage),!b.current){const z=e1(t.backgroundColor,t.backgroundImage);if(g(z),z!=="solid"){const B=sa(t.backgroundImage||"");B&&P(B)}}b.current=!1}const N=(()=>{const z=t.backgroundColor,B=t.backgroundImage;return B&&B!=="none"?!0:!(!z||z==="transparent"||z==="rgba(0, 0, 0, 0)")})(),re=h.useCallback(()=>{n("backgroundColor","#ffffff")},[n]),D=h.useCallback(()=>{n("backgroundColor","transparent"),n("backgroundImage","none"),g("solid")},[n]),k=h.useCallback((z,B)=>{const ee=B;if(g(ee),ee==="solid")n("backgroundImage","none"),n("backgroundColor","#ffffff");else{const H={...E,type:ee};P(H),n("backgroundImage",Jh(H)),n("backgroundColor","transparent")}},[E,n]),M=h.useCallback(z=>{b.current=!0,P(z),n("backgroundImage",Jh(z))},[n]);return l.jsxs(l.Fragment,{children:[!u&&l.jsxs(An,{label:"Appearance",children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Opacity",children:l.jsx(ht,{prop:"opacity",value:t.opacity,onChange:n,min:0,max:1,step:.01,...r("opacity"),...i("opacity")})}),l.jsx(Ge,{label:"Z index",children:l.jsx(ht,{prop:"zIndex",value:t.zIndex,onChange:n,...i("zIndex")})})]}),l.jsx(nt,{label:"Corner radius",children:x?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"retune-row",children:[l.jsx(ht,{label:l.jsx(_e,{content:"Top left corner radius",side:"top",sideOffset:14,children:l.jsx(Mh,{})}),prop:"borderTopLeftRadius",value:t.borderTopLeftRadius,onChange:n,min:0,...r("borderTopLeftRadius"),...i("borderTopLeftRadius")}),l.jsx(ht,{label:l.jsx(_e,{content:"Top right corner radius",side:"top",sideOffset:14,children:l.jsx(t7,{})}),prop:"borderTopRightRadius",value:t.borderTopRightRadius,onChange:n,min:0,...r("borderTopRightRadius"),...i("borderTopRightRadius")}),l.jsx(_e,{content:"Collapse to single",side:"top",children:l.jsx("button",{className:"retune-split-btn active",onClick:()=>m(!1),children:l.jsx(mo,{})})})]}),l.jsxs("div",{className:"retune-row",children:[l.jsx(ht,{label:l.jsx(_e,{content:"Bottom left corner radius",side:"top",sideOffset:14,children:l.jsx(n7,{})}),prop:"borderBottomLeftRadius",value:t.borderBottomLeftRadius,onChange:n,min:0,...r("borderBottomLeftRadius"),...i("borderBottomLeftRadius")}),l.jsx(ht,{label:l.jsx(_e,{content:"Bottom right corner radius",side:"top",sideOffset:14,children:l.jsx(r7,{})}),prop:"borderBottomRightRadius",value:t.borderBottomRightRadius,onChange:n,min:0,...r("borderBottomRightRadius"),...i("borderBottomRightRadius")}),l.jsx("div",{style:{width:32}})]})]}):l.jsxs("div",{className:"retune-row",children:[l.jsx(Ei,{label:l.jsx(_e,{content:"Corner radius (TL, TR, BR, BL)",side:"top",sideOffset:14,children:l.jsx(Mh,{})}),props:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],values:[t.borderTopLeftRadius,t.borderTopRightRadius,t.borderBottomRightRadius,t.borderBottomLeftRadius],onChange:n,min:0,...o(["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"]),...s(["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"])}),l.jsx(_e,{content:"Edit individual corners",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>m(!0),children:l.jsx(mo,{})})})]})}),l.jsx(nt,{children:l.jsx(Ge,{label:"Overflow",children:l.jsx(xn,{prop:"overflow",value:t.overflow,options:["visible","hidden","auto","scroll"],onChange:n})})})]}),u&&(()=>{const z=t.fill&&t.fill!=="none"&&t.fill!=="transparent";return l.jsx(An,{label:"Fill",action:z?l.jsx(_e,{content:"Remove fill",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:()=>n("fill","none"),children:l.jsx(Vr,{})})}):l.jsx(_e,{content:"Add fill",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:()=>n("fill","#000000"),children:l.jsx(ii,{})})}),children:z&&l.jsx(nt,{label:"Color",children:l.jsx("div",{className:"retune-row",children:l.jsx(Qo,{prop:"fill",value:t.fill,onChange:n,...r("fill"),...i("fill")})})})})})(),u&&(()=>{const z=t.stroke&&t.stroke!=="none"&&t.stroke!=="transparent";return l.jsxs(An,{label:"Stroke",action:z?l.jsx(_e,{content:"Remove stroke",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:()=>{n("stroke","none")},children:l.jsx(Vr,{})})}):null,children:[l.jsx(nt,{label:"Color",children:l.jsx("div",{className:"retune-row",children:l.jsx(Qo,{prop:"stroke",value:z?t.stroke:"transparent",onChange:(B,ee)=>{n(B,ee),(!t.strokeWidth||t.strokeWidth==="0")&&n("strokeWidth","1")},...r("stroke"),...i("stroke")})})}),l.jsx(nt,{label:"Width",children:l.jsx("div",{className:"retune-row",children:l.jsx(ht,{label:"",prop:"strokeWidth",value:t.strokeWidth||"0",onChange:n,min:0,step:.5,...r("strokeWidth"),...i("strokeWidth")})})})]})})(),!p&&!u&&(()=>{const B=!!d("backgroundColor");return l.jsx(An,{label:"Fill",gap:8,action:l.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[!B&&l.jsx(Ui,{property:"backgroundColor",onVariableSelect:a,onVariableApply:(ee,H)=>{const se=Object.values(ee.values)[0];se&&n("backgroundColor",se),f==null||f(H,{className:ee.className,values:ee.values})}}),N||B?l.jsx(_e,{content:"Remove fill",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:D,children:l.jsx(Vr,{})})}):l.jsx(_e,{content:"Add fill",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:re,children:l.jsx(ii,{})})})]}),children:N||B?l.jsxs(l.Fragment,{children:[l.jsx(nt,{children:l.jsx(xn,{prop:"fillMode",value:y==="solid"?"solid":E.type,options:["solid","linear","radial","conic"],onChange:k,isChanged:i("backgroundImage").isChanged,onReset:()=>{v==null||v("backgroundImage"),v==null||v("backgroundColor")}})}),y==="solid"?l.jsx(nt,{children:l.jsx(Qo,{prop:"backgroundColor",value:t.backgroundColor,onChange:n,...r("backgroundColor"),...i("backgroundColor")})}):l.jsx(Y4,{gradient:E,onChange:M,originalGradient:S??void 0,isNewGradient:C==="solid"})]}):null})})()]})}function K4({s:e,onPropertyChange:t,variableProps:n,shorthandVariableProps:r,changeProps:o,shorthandChangeProps:i}){const s=[{width:e.borderTopWidth,style:e.borderTopStyle},{width:e.borderRightWidth,style:e.borderRightStyle},{width:e.borderBottomWidth,style:e.borderBottomStyle},{width:e.borderLeftWidth,style:e.borderLeftStyle}],a=s.some(x=>x.style!=="none"&&parseFloat(x.width)>0),c=[e.borderTopColor,e.borderRightColor,e.borderBottomColor,e.borderLeftColor],u=s.reduce((x,m,R)=>x||(m.style!=="none"&&parseFloat(m.width)>0?c[R]:null),null)||e.borderTopColor,[p,d]=h.useState(!1),f=h.useCallback(()=>{t("borderWidth","1px"),t("borderStyle","solid"),t("borderColor","#000000")},[t]),v=h.useCallback(()=>{t("borderTopWidth","0px"),t("borderRightWidth","0px"),t("borderBottomWidth","0px"),t("borderLeftWidth","0px"),t("borderTopStyle","none"),t("borderRightStyle","none"),t("borderBottomStyle","none"),t("borderLeftStyle","none")},[t]);return l.jsx(An,{label:"Border",action:a?l.jsx(_e,{content:"Remove border",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:v,children:l.jsx(Vr,{})})}):l.jsx(_e,{content:"Add border",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:f,children:l.jsx(ii,{})})}),children:a&&l.jsxs(l.Fragment,{children:[l.jsx(nt,{children:l.jsx(Ge,{label:"Color",children:l.jsx(Qo,{prop:"borderColor",value:u,onChange:t,...n("borderColor"),...o("borderColor")})})}),p?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-section-row",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(Ge,{label:"Top",children:l.jsx(ht,{prop:"borderTopWidth",value:e.borderTopWidth,onChange:(x,m)=>{t(x,m),parseFloat(m)>0&&e.borderTopStyle==="none"&&t("borderTopStyle","solid")},min:0,...o("borderTopWidth")})}),l.jsx(Ge,{label:"Right",children:l.jsx(ht,{prop:"borderRightWidth",value:e.borderRightWidth,onChange:(x,m)=>{t(x,m),parseFloat(m)>0&&e.borderRightStyle==="none"&&t("borderRightStyle","solid")},min:0,...o("borderRightWidth")})}),l.jsx(_e,{content:"Collapse to shorthand",side:"top",children:l.jsx("button",{className:"retune-split-btn active",onClick:()=>d(!1),children:l.jsx(mo,{})})})]})}),l.jsx("div",{className:"retune-section-row",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(Ge,{label:"Bottom",children:l.jsx(ht,{prop:"borderBottomWidth",value:e.borderBottomWidth,onChange:(x,m)=>{t(x,m),parseFloat(m)>0&&e.borderBottomStyle==="none"&&t("borderBottomStyle","solid")},min:0,...o("borderBottomWidth")})}),l.jsx(Ge,{label:"Left",children:l.jsx(ht,{prop:"borderLeftWidth",value:e.borderLeftWidth,onChange:(x,m)=>{t(x,m),parseFloat(m)>0&&e.borderLeftStyle==="none"&&t("borderLeftStyle","solid")},min:0,...o("borderLeftWidth")})})]})})]}):l.jsx(nt,{label:"Width",children:l.jsxs("div",{className:"retune-row",children:[l.jsx(Ei,{props:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],values:[e.borderTopWidth,e.borderRightWidth,e.borderBottomWidth,e.borderLeftWidth],onChange:t,min:0,...r(["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"]),...i(["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"])}),l.jsx(_e,{content:"Edit individual sides",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>d(!0),children:l.jsx(mo,{})})})]})}),l.jsx(nt,{children:l.jsx(Ge,{label:"Style",children:l.jsx(xn,{prop:"borderStyle",value:e.borderTopStyle!=="none"?e.borderTopStyle:e.borderRightStyle!=="none"?e.borderRightStyle:e.borderBottomStyle!=="none"?e.borderBottomStyle:e.borderLeftStyle,options:["solid","dashed","dotted","double","groove","ridge"],onChange:t})})})]})})}function t1(e){if(!e||e==="none")return null;const t=e.trim(),n=t.startsWith("inset");let r=n?t.slice(5).trim():t,o="rgba(0, 0, 0, 1)";const i=r.match(/(?:rgba?|hsla?)\([^)]+\)/);if(i)o=i[0],r=r.replace(o,"").trim();else{const a=r.match(/^(#[0-9a-fA-F]{3,8})\s/);if(a)o=a[1],r=r.slice(a[0].length).trim();else{const c=r.match(/\s+(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)$/);c&&(o=c[1],r=r.slice(0,-c[0].length).trim())}}const s=r.match(/-?[\d.]+/g);return!s||s.length<2?null:{inset:n,offsetX:parseFloat(s[0])||0,offsetY:parseFloat(s[1])||0,blur:parseFloat(s[2])||0,spread:parseFloat(s[3])||0,color:o}}function n1(e){if(!e||e==="none")return null;let t=0,n=0;for(let r=0;r<e.length;r++)if(e[r]==="(")t++;else if(e[r]===")")t--;else if(e[r]===","&&t===0)return t1(e.slice(n,r));return t1(e.slice(n))}function r1(e){const t=[];return e.inset&&t.push("inset"),t.push(`${e.offsetX}px`),t.push(`${e.offsetY}px`),t.push(`${e.blur}px`),t.push(`${e.spread}px`),t.push(e.color),t.join(" ")}function o1(){return{inset:!1,offsetX:0,offsetY:4,blur:8,spread:0,color:"rgba(0, 0, 0, 0.15)"}}function q4({s:e,onPropertyChange:t,variableProps:n,changeProps:r,handleVariableSelect:o,handleVariableApply:i}){const s=e.boxShadow&&e.boxShadow!=="none",a=n("boxShadow"),c=a.variableMatch,u=!!c,p=h.useCallback(()=>{t("boxShadow",r1(o1()))},[t]),d=h.useCallback(()=>{t("boxShadow","none")},[t]),f=h.useCallback((v,x)=>{const R={...n1(e.boxShadow)||o1(),[v]:x};t("boxShadow",r1(R))},[e.boxShadow,t]);return l.jsx(An,{label:"Shadow",action:l.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[!u&&l.jsx(Ui,{property:"boxShadow",onVariableSelect:o,onVariableApply:(v,x)=>i(v,x)}),s||u?l.jsx(_e,{content:"Remove shadow",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:d,children:l.jsx(Vr,{})})}):l.jsx(_e,{content:"Add shadow",side:"top",children:l.jsx("button",{className:"retune-section-action",onClick:p,children:l.jsx(ii,{})})})]}),children:u?(()=>{const v={current:null};return l.jsx(nt,{children:l.jsxs("div",{className:"retune-prop retune-prop-variable-applied",style:{flex:1,cursor:"pointer"},onClick:()=>{var x;return(x=v.current)==null?void 0:x.call(v)},children:[l.jsx(Wr,{isChanged:r("boxShadow").isChanged,onReset:r("boxShadow").onReset}),l.jsx("span",{className:"retune-prop-input",style:{display:"flex",alignItems:"center",paddingLeft:12,color:"var(--retune-text)"},children:c.variable.className.startsWith("var(--")?c.variable.className.slice(6,-1):c.variable.className}),l.jsx(Ui,{match:c,property:"boxShadow",onVariableSelect:o,onVariableApply:i,onVariableUnlink:a.onVariableUnlink,openPickerRef:v})]})})})():s?(()=>{const v=n1(e.boxShadow);return v?l.jsxs(l.Fragment,{children:[l.jsx(nt,{children:l.jsx(Ge,{label:"Color",children:l.jsx(Qo,{prop:"shadowColor",value:v.color,onChange:(x,m)=>f("color",m),...r("shadowColor")})})}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"X offset",children:l.jsx(ht,{prop:"shadowOffsetX",value:`${v.offsetX}px`,onChange:(x,m)=>f("offsetX",parseFloat(m)||0),...r("shadowOffsetX")})}),l.jsx(Ge,{label:"Y offset",children:l.jsx(ht,{prop:"shadowOffsetY",value:`${v.offsetY}px`,onChange:(x,m)=>f("offsetY",parseFloat(m)||0),...r("shadowOffsetY")})})]}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Blur",children:l.jsx(ht,{prop:"shadowBlur",value:`${v.blur}px`,onChange:(x,m)=>f("blur",Math.max(0,parseFloat(m)||0)),min:0,...r("shadowBlur")})}),l.jsx(Ge,{label:"Spread",children:l.jsx(ht,{prop:"shadowSpread",value:`${v.spread}px`,onChange:(x,m)=>f("spread",parseFloat(m)||0),...r("shadowSpread")})})]}),l.jsx(nt,{children:l.jsx(Ge,{label:"Type",children:l.jsx(xn,{prop:"shadowInset",value:v.inset?"inside":"outside",options:["outside","inside"],onChange:(x,m)=>f("inset",m==="inside")})})})]}):null})():null})}var i1=["blur","brightness","contrast","hue-rotate","invert","saturate","sepia"],As={blur:{label:"Blur",unit:"px",defaultValue:4,min:0,max:50,step:1},brightness:{label:"Brightness",unit:"%",defaultValue:100,min:0,max:300,step:1},contrast:{label:"Contrast",unit:"%",defaultValue:100,min:0,max:200,step:1},"hue-rotate":{label:"Hue rotate",unit:"deg",defaultValue:0,min:0,max:360,step:1},invert:{label:"Invert",unit:"%",defaultValue:0,min:0,max:100,step:1},saturate:{label:"Saturate",unit:"%",defaultValue:100,min:0,max:300,step:1},sepia:{label:"Sepia",unit:"%",defaultValue:0,min:0,max:100,step:1}},Q4=1;function I0(){return`f${Q4++}`}function s1(e,t){if(!e||e==="none")return[];const n=[],r=/(blur|brightness|contrast|hue-rotate|invert|saturate|sepia)\(([^)]+)\)/g;let o;for(;(o=r.exec(e))!==null;){const i=o[1],s=parseFloat(o[2])||0;n.push({id:I0(),type:i,value:s,target:t})}return n}function l1(e,t){return[...s1(e,"layer"),...s1(t,"backdrop")]}function a1(e){const t=As[e.type];return`${e.type}(${e.value}${t.unit})`}function J4(e){const t=e.filter(r=>r.target==="layer").map(a1),n=e.filter(r=>r.target==="backdrop").map(a1);return{filter:t.length?t.join(" "):"none",backdropFilter:n.length?n.join(" "):"none"}}function ew(e,t){return{id:I0(),type:e,value:As[e].defaultValue,target:t}}function tw({label:e,prop:t,value:n,min:r,max:o,step:i=.01,onChange:s}){const[a,c]=h.useState(n||"0"),[u,p]=h.useState(n);n!==u&&(p(n),c(n||"0"));const d=parseFloat(a)||0,f=o-r,v=f>0?Math.max(0,Math.min(1,(d-r)/f))*100:0,x=i<1?Math.max(0,-Math.floor(Math.log10(i))):0,m=h.useRef(null),[R,y]=h.useState(!1),[g,C]=h.useState(!1),S=h.useCallback(k=>{const M=m.current;if(!M)return d;const z=M.getBoundingClientRect(),B=Math.max(0,Math.min(1,(k-z.left)/z.width));let ee=r+B*f;return ee=Math.round(ee/i)*i,ee=Math.max(r,Math.min(o,ee)),Number(ee.toFixed(x))},[r,o,f,i,x,d]),E=h.useCallback(k=>{const M=String(k);c(M),s(t,M)},[t,s]),P=k=>{k.preventDefault(),y(!0),k.target.setPointerCapture(k.pointerId),E(S(k.clientX))},b=k=>{R&&E(S(k.clientX))},T=()=>y(!1),W=k=>{k.key==="ArrowLeft"||k.key==="ArrowDown"?(k.preventDefault(),E(Number(Math.max(r,d-i).toFixed(x)))):(k.key==="ArrowRight"||k.key==="ArrowUp")&&(k.preventDefault(),E(Number(Math.min(o,d+i).toFixed(x))))},N=g||R,re=i>=1?String(Math.round(d)):d.toFixed(x),D=h.useMemo(()=>{if(f<=0)return[];const k=f/8,M=Math.pow(10,Math.floor(Math.log10(k))),z=k/M,ee=(z<1.5?1:z<3.5?2:z<7.5?5:10)*M,H=[];let se=Math.ceil(r/ee)*ee;for(;se<=o+ee*.001;){const J=(se-r)/f;J>.03&&J<.97&&H.push(J),se=+(se+ee).toFixed(10)}return H},[r,o,f]);return l.jsxs("div",{ref:m,className:"retune-slider",tabIndex:0,role:"slider","aria-valuemin":r,"aria-valuemax":o,"aria-valuenow":d,"aria-label":e,onPointerEnter:()=>C(!0),onPointerLeave:()=>{R||C(!1)},onPointerDown:P,onPointerMove:b,onPointerUp:T,onKeyDown:W,children:[l.jsx("div",{className:"retune-slider-fill",style:{width:`${v}%`}}),N&&D.map((k,M)=>l.jsx("div",{className:"retune-slider-indicator",style:{left:`${k*100}%`}},M)),N&&l.jsx("div",{className:"retune-slider-handle",style:{left:`max(4px, calc(${v}% - 4px))`}}),l.jsxs("div",{className:"retune-slider-labels",children:[l.jsx("span",{className:"retune-slider-label",children:e}),l.jsx("span",{className:"retune-slider-value",children:re})]})]})}function nw({s:e,onPropertyChange:t}){const n=h.useRef(!1),[r,o]=h.useState(()=>l1(e.filter,e.backdropFilter)),[i,s]=h.useState(e.filter),[a,c]=h.useState(e.backdropFilter);(e.filter!==i||e.backdropFilter!==a)&&(s(e.filter),c(e.backdropFilter),n.current?n.current=!1:o(l1(e.filter,e.backdropFilter)));const[u,p]=h.useState(!1),[d,f]=h.useState(null),v=h.useRef(null),x=h.useRef(null),m=h.useRef(null);h.useEffect(()=>{var P;if(!u)return;const S=b=>{const T=v.current,W=x.current;T&&T.contains(b.target)||W&&W.contains(b.target)||p(!1)},E=(P=v.current)==null?void 0:P.getRootNode();return E.addEventListener("pointerdown",S),()=>E.removeEventListener("pointerdown",S)},[u]);const R=h.useCallback(S=>{n.current=!0,o(S);const E=J4(S);t("filter",E.filter),t("backdropFilter",E.backdropFilter)},[t]),y=h.useCallback((S,E)=>{R([...r,ew(S,E)]),p(!1),requestAnimationFrame(()=>{var P;(P=m.current)==null||P.scrollIntoView({block:"end",behavior:"smooth"})})},[r,R]),g=h.useCallback(S=>{R(r.filter(E=>E.id!==S))},[r,R]),C=h.useCallback((S,E)=>{R(r.map(P=>P.id===S?{...P,value:E}:P))},[r,R]);return l.jsxs(l.Fragment,{children:[l.jsx(An,{label:"Filters",action:l.jsxs("div",{style:{position:"relative"},children:[l.jsx(_e,{content:"Add filter",side:"top",children:l.jsx("button",{ref:v,className:"retune-section-action",onClick:()=>{if(u){p(!1);return}const S=v.current;if(!S)return;const E=S.getBoundingClientRect(),P=window.innerHeight-E.bottom-8,b=E.top-8;P>=b?f({top:E.bottom+4,left:E.right}):f({bottom:window.innerHeight-E.top+4,left:E.right}),p(!0)},children:l.jsx(ii,{})})}),u&&d&&l.jsx("div",{ref:x,style:{position:"fixed",...d.top!=null?{top:d.top}:{bottom:d.bottom},left:d.left,transform:"translateX(-100%)",zIndex:2147483647},children:l.jsx(cl,{options:(()=>{const S=new Set(r.filter(W=>W.target==="layer").map(W=>W.type)),E=new Set(r.filter(W=>W.target==="backdrop").map(W=>W.type)),P=i1.filter(W=>!S.has(W)),b=i1.filter(W=>!E.has(W)),T=[];return P.forEach((W,N)=>{T.push({value:`layer:${W}`,label:As[W].label,...N===0?{headingBefore:"Layer"}:{}})}),b.forEach((W,N)=>{T.push({value:`backdrop:${W}`,label:As[W].label,...N===0?{headingBefore:"Backdrop",...P.length>0?{separatorBefore:!0}:{}}:{}})}),T})(),showCheckmark:!1,onSelect:S=>{const[E,P]=S.value.split(":");y(P,E)}})})]}),children:r.length>0&&(()=>{const S=r.filter(b=>b.target==="layer"),E=r.filter(b=>b.target==="backdrop"),P=b=>{const T=As[b.type];return l.jsxs("div",{className:"retune-row",children:[l.jsx(tw,{label:T.label,prop:b.id,value:String(b.value),min:T.min,max:T.max,step:T.step,onChange:(W,N)=>C(b.id,parseFloat(N)||0)}),l.jsx("div",{style:{alignSelf:"center"},children:l.jsx(_e,{content:"Remove",side:"top",children:l.jsx("button",{className:"retune-split-btn",onClick:()=>g(b.id),children:l.jsx(Vr,{})})})})]},b.id)};return l.jsxs(l.Fragment,{children:[S.length>0&&l.jsx(nt,{label:"Layer",children:S.map(P)}),E.length>0&&l.jsx(nt,{label:"Backdrop",children:E.map(P)})]})})()}),l.jsx("div",{ref:m})]})}function rw({prop:e,value:t,onChange:n}){const[r,o]=h.useState(t||""),[i,s]=h.useState(t);return t!==i&&(s(t),o(t||"")),l.jsx("div",{className:"retune-text-input",children:l.jsx("input",{className:"retune-text-input-field",value:r,onChange:a=>o(a.target.value),onBlur:()=>n(e,r.trim()),onKeyDown:a=>{a.key==="Enter"&&(n(e,r.trim()),a.target.blur())},spellCheck:!1})})}function ow({element:e,s:t,onPropertyChange:n,onAttributeChange:r,variableProps:o,changeProps:i,isImage:s,isVideo:a,hasBackgroundImage:c}){const u=s||a;return l.jsxs(l.Fragment,{children:[u&&l.jsxs(An,{label:a?"Video":"Image",children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Fit",children:l.jsx(xn,{prop:"objectFit",value:t.objectFit||"fill",options:["fill","contain","cover","none","scale-down"],onChange:n,...o("objectFit"),...i("objectFit")})}),l.jsx(Ge,{label:"Position",children:l.jsx(qo,{prop:"objectPosition",value:t.objectPosition||"50% 50%",options:[{value:"center",label:"Center"},{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"left",label:"Left"},{value:"right",label:"Right"},{value:"top left",label:"Top Left"},{value:"top right",label:"Top Right"},{value:"bottom left",label:"Bottom Left"},{value:"bottom right",label:"Bottom Right"}],onChange:n,...o("objectPosition"),...i("objectPosition")})})]}),s&&e.element&&l.jsx(nt,{children:l.jsx(Ge,{label:"Loading",children:l.jsx(Dr,{options:[{value:"lazy",label:"Lazy"},{value:"eager",label:"Eager"}],value:e.element.loading==="lazy"?"lazy":"eager",onChange:p=>{const d=e.element.loading||"eager";e.element.loading=p,r==null||r("loading",d,p)}})})}),s&&e.element&&l.jsx(nt,{label:"Alt",children:l.jsx("div",{className:"retune-row",children:l.jsx(rw,{prop:"alt",value:e.element.alt||"",onChange:(p,d)=>{if(e.element){const f=e.element.alt||"";e.element.alt=d,r==null||r(p,f,d)}}})})}),a&&e.element&&l.jsxs(l.Fragment,{children:[l.jsxs(nt,{children:[l.jsx(Ge,{label:"Autoplay",children:l.jsx(Dr,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],value:e.element.autoplay?"true":"false",onChange:p=>{const d=e.element.autoplay?"true":"false";e.element.autoplay=p==="true",r==null||r("autoplay",d,p==="true"?"true":"false")}})}),l.jsx(Ge,{label:"Loop",children:l.jsx(Dr,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],value:e.element.loop?"true":"false",onChange:p=>{const d=e.element.loop?"true":"false";e.element.loop=p==="true",r==null||r("loop",d,p==="true"?"true":"false")}})})]}),l.jsxs(nt,{children:[l.jsx(Ge,{label:"Muted",children:l.jsx(Dr,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],value:e.element.muted?"true":"false",onChange:p=>{const d=e.element.muted?"true":"false";e.element.muted=p==="true",r==null||r("muted",d,p==="true"?"true":"false")}})}),l.jsx(Ge,{label:"Controls",children:l.jsx(Dr,{options:[{value:"true",label:"Show"},{value:"false",label:"Hide"}],value:e.element.controls?"true":"false",onChange:p=>{const d=e.element.controls?"true":"false";e.element.controls=p==="true",r==null||r("controls",d,p==="true"?"true":"false")}})})]})]})]}),c&&l.jsxs(An,{label:"Background Image",children:[l.jsx(nt,{label:"Size",children:l.jsx("div",{className:"retune-row",children:l.jsx(qo,{label:"",prop:"backgroundSize",value:t.backgroundSize||"auto",options:[{value:"cover",label:"Cover"},{value:"contain",label:"Contain"},{value:"auto",label:"Auto"},{value:"100% 100%",label:"Stretch"}],onChange:n,...o("backgroundSize"),...i("backgroundSize")})})}),l.jsx(nt,{label:"Position",children:l.jsx("div",{className:"retune-row",children:l.jsx(xn,{prop:"backgroundPosition",value:t.backgroundPosition||"center center",options:["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],onChange:n,...o("backgroundPosition"),...i("backgroundPosition")})})}),l.jsx(nt,{label:"Repeat",children:l.jsx("div",{className:"retune-row",children:l.jsx(xn,{prop:"backgroundRepeat",value:t.backgroundRepeat||"repeat",options:["no-repeat","repeat","repeat-x","repeat-y","space","round"],onChange:n,...o("backgroundRepeat"),...i("backgroundRepeat")})})})]})]})}function iw({element:e,position:t,onPropertyChange:n,onAttributeChange:r,onPropertyHover:o,onApplyToElement:i,onVariableSwap:s,onVariableAssociate:a,onVariableUnlink:c,variableAssociations:u={},unlinkedVariables:p,changedProperties:d,onPropertyReset:f,selectorCandidates:v=[],activeSelector:x=null,scopeLevels:m=[],activeLevelIndex:R=0,onScopeLevelChange:y,onScopeLevelHover:g,ownedProperties:C,styleSources:S={},forcedState:E=null,onForcedStateChange:P,onPinLinesChange:b,frameDimensions:T}){var Wt,Tt,Bn;const N=e.computedStyles,re=h.useMemo(()=>e.element?B2(e.element,N,x??void 0):new Map,[e.element,N,x]),D=h.useCallback(rt=>{if(p!=null&&p.has(rt))return;const lt=rt.replace(/[A-Z]/g,Fe=>`-${Fe.toLowerCase()}`),tn=u[rt];if(tn)return{variable:tn,property:lt};const be=re.get(lt);if(be&&!Vi(be.variable))return be},[re,u,p]),k=h.useCallback((rt,lt,tn)=>{const be=e.element;if(!be)return;const Fe=be.classList.contains(rt.className),$e=lt.className.startsWith("var(");if(Fe&&!$e){be.classList.remove(rt.className),be.classList.add(lt.className),s==null||s(rt.className,lt.className);for(const[vt,At]of Object.entries(lt.values)){const _t=vt.replace(/-([a-z])/g,(Yt,gt)=>gt.toUpperCase());n(_t,At)}}else{const vt=[];for(const[_t,Yt]of Object.entries(u))Yt.className===rt.className&&vt.push(_t);vt.length===0&&tn&&vt.push(...tn);const At=Object.values(lt.values)[0];if(!At)return;for(const _t of vt)n(_t,At);a==null||a(vt,{className:lt.className,values:lt.values})}},[e.element,s,n,u,a]),M=h.useCallback((rt,lt)=>{if(!e.element)return;const be=Object.values(rt.values)[0];if(be){for(const Fe of lt)n(Fe,be);a==null||a(lt,{className:rt.className,values:rt.values})}},[e.element,n,a]),z=h.useCallback(rt=>{c==null||c([rt])},[c]),B=h.useCallback(rt=>{const lt=D(rt);return{...lt?{variableMatch:lt,onVariableSelect:k,onVariableUnlink:()=>z(rt)}:{},property:rt,onVariableApply:M}},[D,k,M,z]),ee=h.useCallback(rt=>{const lt=rt.map(Fe=>D(Fe)),tn=lt.find(Fe=>Fe!==void 0);return tn?lt.every(Fe=>Fe!==void 0&&Fe.variable.className===tn.variable.className)?{variableMatch:tn,property:rt[0],onVariableSelect:k,onVariableApply:M,onVariableUnlink:()=>c==null?void 0:c(rt)}:{property:rt[0],onVariableApply:M}:{property:rt[0],onVariableApply:M}},[D,k,M,c]),H=h.useCallback(rt=>({isChanged:(d==null?void 0:d.has(rt))??!1,onReset:()=>f==null?void 0:f(rt)}),[d,f]),se=h.useCallback(rt=>({isChanged:rt.some(lt=>d==null?void 0:d.has(lt))??!1,onReset:()=>{for(const lt of rt)f==null||f(lt)}}),[d,f]),J=["P","H1","H2","H3","H4","H5","H6","SPAN","A","BUTTON","LABEL","LI","TD","TH","FIGCAPTION","BLOCKQUOTE","CITE","EM","STRONG","SMALL"],ie=e.element?Array.from(e.element.childNodes).some(rt=>{var lt;return rt.nodeType===Node.TEXT_NODE&&((lt=rt.textContent)==null?void 0:lt.trim())}):!1,de=J.includes(e.tagName)||ie,Re=N.display||"block",He=Re.includes("flex"),Ke=Re.includes("grid");N.position;const ve=de||["IMG","INPUT","SELECT","TEXTAREA"].includes(e.tagName)||He||Ke,te=e.tagName==="IMG"||e.tagName==="PICTURE"||e.tagName==="CANVAS",Ie=e.tagName==="VIDEO",Je=!(e.tagName==="SVG"||e.tagName==="svg")&&!!((Wt=e.element)!=null&&Wt.closest("svg")),St=te||Ie,ft=N.backgroundImage&&N.backgroundImage!=="none"&&!N.backgroundImage.startsWith("linear-gradient")&&!N.backgroundImage.startsWith("radial-gradient"),st=(Tt=e.element)!=null&&Tt.parentElement?getComputedStyle(e.element.parentElement).display:"",mt=st.includes("flex"),Fn=st.includes("grid"),Xt=mt&&((Bn=e.element)!=null&&Bn.parentElement)&&getComputedStyle(e.element.parentElement).flexDirection||"row",pn={element:e,s:N,onPropertyChange:n,onAttributeChange:r,onPropertyHover:o,onApplyToElement:i,variableProps:B,shorthandVariableProps:ee,changeProps:H,shorthandChangeProps:se,handleVariableSelect:k,handleVariableApply:M,isFlexChild:mt,isGridChild:Fn,parentFlexDir:Xt};return l.jsxs(l.Fragment,{children:[!T&&l.jsx(_7,{element:e,scopeLevels:m,activeLevelIndex:R,onScopeLevelChange:y,onScopeLevelHover:g,forcedState:E,onForcedStateChange:P}),!Je&&l.jsx(U7,{...pn,onPinLinesChange:b}),!Je&&l.jsx(y4,{...pn}),l.jsx(b4,{s:N,onPropertyChange:n,onPropertyHover:o,variableProps:B,shorthandVariableProps:ee,changeProps:H,shorthandChangeProps:se}),l.jsx(w4,{...pn,frameDimensions:T}),!Je&&l.jsx(B4,{...pn,isText:de,hasVerticalAlign:ve}),l.jsx(G4,{...pn,isSvgChild:Je,isMedia:St,getVariableMatch:D,onVariableAssociate:a,onPropertyReset:f}),(te||Ie||ft)&&l.jsx(ow,{...pn,isImage:te,isVideo:Ie,hasBackgroundImage:!!ft}),!Je&&l.jsx(K4,{s:N,onPropertyChange:n,variableProps:B,shorthandVariableProps:ee,changeProps:H,shorthandChangeProps:se}),l.jsx(q4,{...pn}),!Je&&l.jsx(nw,{...pn})]})}var sw=`Generate a retune.manifest.json file in the project's public directory (so it's served at /retune.manifest.json). This manifest describes the project's React components and design tokens so that Retune's visual editor can show accurate controls.

Place the file where your framework serves static assets:
- Next.js: public/retune.manifest.json
- Vite/CRA: public/retune.manifest.json
- Remix: public/retune.manifest.json

## Manifest Version

Always include "version": 2 at the top level.

## Components

Think like a designer using Figma. Only document components that a designer would want to adjust visually. For each component, only include props that produce a VISIBLE change when modified.

**Include:** Components that render visible UI — buttons, cards, modals, dropdowns, navigation, tables, form inputs, layout containers with visual variants.

**Skip entirely:**
- Context providers and wrappers (ThemeProvider, MotionConfig, AuthProvider)
- Analytics/tracking components (I13nAnchor, BeaconComponent)
- Page-level shells that pass config downward (AppShell, PageWrapper)
- HOCs and utility wrappers (withTheme, withRouter, ErrorBoundary, Suspense)
- Components where ALL props are objects, functions, or internal config

**Props — only include props that produce visible changes:**
- Variant choices: "type": "enum", "values": ["primary", "secondary", "ghost"]
- Size options: "type": "enum", "values": ["sm", "md", "lg"]
- Content text: "type": "string" (labels, titles, placeholders)
- Visibility toggles: "type": "boolean" (isOpen, expanded, shown)
- State toggles: "type": "boolean" (disabled, loading, active)
- Default values where defined

**Skip these prop types:**
- Event handlers (onClick, onChange, onSubmit)
- Refs and DOM references
- Complex data objects and arrays
- Analytics/tracking props
- Internal IDs, className, style, children
- Config objects passed from providers

**class_map:** For props that determine which CSS class is applied, include a "class_map" object mapping each prop value to its CSS class name.

**hidden_unless (conditional visibility):** For props that are only relevant when another prop has a certain value, add "hidden_unless": { "otherProp": "requiredValue" }. Example: borderColor is only relevant when variant is "outline":
  "borderColor": { "type": "color", "hidden_unless": { "variant": "outline" } }

State (for components with useState hooks):
- Only include state that produces visible changes (open/closed, active tab, selected item)
- Skip internal state (previous values, RAF IDs, observer refs, debounce timers)
- Use the variable name as the key (e.g., "isOpen", "activeTab")
- Include type, default value, and description
- Use "enum" type with "values" when state has a finite set of possible values

## Design Tokens

Include a "tokens" object with these EXACT category keys. Only use these categories:

- "colors" -- color values (hex, rgb, hsl, oklch). MUST be organized into sub-groups (see below).
- "spacing" -- padding, margin, gap scales
- "sizing" -- width, height, min/max sizes
- "radii" -- border-radius values
- "borderWidths" -- border-width values
- "shadows" -- box-shadow values
- "typography" -- font-size, font-weight, line-height, letter-spacing, font-family values

Each token entry has:
- "value" -- the token's value exactly as defined. Use the actual value from the source (CSS variable, Tailwind config, SCSS variable). All color formats are valid: hex (#2563eb), rgb (rgb(59, 130, 246)), space-separated RGB (59 130 246), rgba, hsl, hsla, oklch, named colors (currentColor, transparent). All unit formats are valid: px, rem, em, %, unitless numbers. Do NOT skip tokens because of their value format. Do NOT transform values -- use them as-is.
- "variable" -- CSS custom property name starting with -- (if the project uses CSS custom properties for this token)
- "class" -- utility class name that applies this token (if the project uses utility classes like Tailwind)

Include "variable" when the token is a CSS custom property. Include "class" when the token is applied via a utility class. Include both when applicable.

Rules:
- Omit framework internals (--tw-ring-*, --tw-shadow*, --tw-translate-*, --tw-border-spacing-*, --tw-gradient-*, --tw-backdrop-*, --tw-blur*, --tw-brightness*, --tw-contrast*, --tw-grayscale*, --tw-hue-rotate*, --tw-invert*, --tw-saturate*, --tw-sepia*, --tw-pan-*, --tw-pinch-*, --tw-scroll-*, --tw-numeric-*, --tw-ordinal*, --tw-slashed-*, --tw-contain-*, --chakra-*, --mantine-*, --radix-*)
- Include tokens from design system packages (node_modules) if they define token scales
- Include the FULL spacing scale (every step, not just a few)
- Include the FULL color palette (every shade in every ramp)
- For Tailwind projects: extract tokens from tailwind.config.js theme values. The "class" field should be the base utility (e.g., "bg-blue-500" for colors used as backgrounds, "p-4" for spacing used as padding). For color tokens that can be used for multiple properties (text, bg, border), use the most common class prefix.
- For projects with CSS custom properties: use the actual variable names from the stylesheets
- For projects with SCSS/Less variables: convert to -- format for "variable" field
- Do NOT deduplicate tokens that resolve to the same value. Different variables may serve different purposes, belong to different teams, or have different overrides in other contexts (e.g., dark mode). Include ALL defined tokens.

Color sub-groups:
The "colors" category MUST use nested groups. Group colors by their design system organization:
- By hue ramp for primitive palettes (e.g., "blue", "red", "gray")
- By semantic role for semantic tokens (e.g., "brand", "status", "ui")
- By component/feature for scoped tokens (e.g., "pagination", "article-ui")
Each group is an object containing its token entries. Read the project's Tailwind config, design system docs, or CSS variable naming to determine the natural groupings. Group by purpose, NOT by value format -- tokens with hex values and space-separated RGB values belong in the same group if they serve the same role (e.g., all background colors together regardless of format).

## Responsive

Include a "responsive" object describing how the project handles responsive breakpoints:

- "strategy": How breakpoints are expressed in code
  - "tailwind" — Tailwind responsive prefixes (sm:, md:, lg:)
  - "media-queries" — Plain CSS @media queries
  - "css-in-js" — Theme breakpoints in styled-components/emotion
  - "scss-mixins" — SCSS/Sass mixin-based breakpoints
- "direction": "mobile-first" or "desktop-first" (Tailwind is mobile-first by default)
- "breakpoints": Map of token name → width value (e.g. "sm": "640px")

Detect from: tailwind.config.js/ts theme.screens, existing @media queries in CSS files, theme breakpoint objects in CSS-in-JS, SCSS breakpoint mixins/variables. If no breakpoints are defined, omit the "responsive" field entirely.

## Example

{
  "version": 2,
  "responsive": {
    "strategy": "tailwind",
    "direction": "mobile-first",
    "breakpoints": { "sm": "640px", "md": "768px", "lg": "1024px", "xl": "1280px" }
  },
  "components": {
    "Avatar": {
      "props": {
        "size": {
          "type": "enum",
          "values": ["sm", "md", "lg"],
          "default": "md",
          "class_map": { "sm": "avatar--sm", "md": "avatar--md", "lg": "avatar--lg" }
        },
        "initials": { "type": "string" }
      }
    },
    "Button": {
      "props": {
        "variant": { "type": "enum", "values": ["solid", "outline", "ghost"], "default": "solid" },
        "size": { "type": "enum", "values": ["sm", "md", "lg"], "default": "md" },
        "disabled": { "type": "boolean", "default": false },
        "borderColor": { "type": "string", "hidden_unless": { "variant": "outline" } }
      }
    }
  },
  "tokens": {
    "colors": {
      "brand": {
        "brand": { "value": "#2563eb", "variable": "--color-brand" },
        "brand-light": { "value": "#60a5fa", "variable": "--color-brand-light" }
      },
      "blue": {
        "blue-500": { "value": "#3b82f6", "class": "bg-blue-500" },
        "blue-600": { "value": "#2563eb", "class": "bg-blue-600" },
        "blue-700": { "value": "#1d4ed8", "class": "bg-blue-700" }
      },
      "text": {
        "text-primary": { "value": "#1c1917", "variable": "--color-text", "class": "text-stone-900" },
        "text-muted": { "value": "#78716c", "variable": "--color-text-muted" }
      }
    },
    "spacing": {
      "1": { "value": "0.25rem", "class": "p-1" },
      "2": { "value": "0.5rem", "class": "p-2" },
      "4": { "value": "1rem", "variable": "--spacing-4", "class": "p-4" }
    },
    "radii": {
      "md": { "value": "0.375rem", "class": "rounded-md" },
      "lg": { "value": "0.5rem", "variable": "--radius-lg", "class": "rounded-lg" }
    },
    "typography": {
      "sm": { "value": "0.875rem", "class": "text-sm" },
      "font-bold": { "value": "700", "class": "font-bold" },
      "leading-normal": { "value": "1.5", "variable": "--leading-normal", "class": "leading-normal" }
    }
  }
}`,lw=`Update the existing retune.manifest.json to add or update the "components" section. Do NOT modify the existing "tokens" section. Set "version": 2.

Think like a designer using Figma. Only document components that render visible UI and have props that produce visible changes when modified.

**Include:** Buttons, cards, modals, dropdowns, navigation, tables, form inputs, layout containers with visual variants.

**Skip:** Context providers, analytics wrappers, HOCs, page shells, error boundaries, animation config wrappers, and any component where all props are objects/functions/internal config.

For each component, include:
- "props" — only visually meaningful props (variant, size, label, disabled, isOpen). Skip event handlers, refs, data objects, tracking props.
- "state" — only visible state (isOpen, activeTab). Skip internal state.
- "hidden_unless" — for props only relevant when another prop has a certain value: "borderColor": { "type": "string", "hidden_unless": { "variant": "outline" } }
- "class_map" — for props that map to CSS classes

Prop types: "string", "number", "boolean", "enum". For enum props, list values in a "values" array. Include defaults.

If no meaningful visual components are found, add "components": {} to indicate the analysis was completed.`;function Cf(e){return e==null?"null":typeof e=="boolean"?"boolean":typeof e=="number"?"number":typeof e=="string"?"string":typeof e=="function"?"function":"object"}var aw=new Set(["children","ref","key","className","style","params","searchParams","dangerouslySetInnerHTML"]),cw=[/^on[A-Z]/,/^__/,/^\$/,/^_/,/^data-/,/^aria-/,/^(?:i13n|ylk|track|beacon)/i],uw=[/Provider$/i,/Context$/i,/Config$/i,/Wrapper$/i,/^HOC/i,/^with[A-Z]/,/^I13n/i,/^Motion/i,/^Suspense$/,/^ErrorBoundary$/i];function dw(e,t){if(aw.has(e))return!1;for(const n of cw)if(n.test(e))return!1;return!(typeof t=="function"||t==null||typeof t=="object"||typeof t=="string"&&t.length>80)}function fw(e){return e?uw.some(t=>t.test(e)):!1}function pw(e,t){if(!e||!t)return!1;for(const[n,r]of Object.entries(e))if(t[n]!==r)return!0;return!1}function hw(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="function")return"fn()";if(typeof e=="object")try{const t=JSON.stringify(e);return t.length>40?t.slice(0,37)+"...":t}catch{return"{...}"}return String(e)}function gw(e,t){const n=Cf(e);if(n==="boolean")return`toggle ${t+1}`;if(n==="number")return`count ${t+1}`;if(n==="string"){const r=e;return r.length>0&&r.length<=12?r:`text ${t+1}`}return n==="object"?Array.isArray(e)?`list (${e.length})`:"object":`state ${t+1}`}function mw(e,t,n){if(!(e!=null&&e.components)||!t)return null;const r=e.components[t];if(!(r!=null&&r.props))return null;const o=r.props[n];return(o==null?void 0:o.type)==="enum"&&Array.isArray(o.values)&&o.values.length>0?o.values:null}function nu(e,t,n){var i;if(!(e!=null&&e.components)||!t)return null;const r=e.components[t],o=(i=r==null?void 0:r.props)==null?void 0:i[n];return o!=null&&o.class_map&&typeof o.class_map=="object"?o.class_map:null}function ru(e,t,n,r){var o,i;if(e&&r in e)return e[r];if(t!=null&&t.components&&n){const s=(i=(o=t.components[n])==null?void 0:o.props)==null?void 0:i[r];if((s==null?void 0:s.default)!==void 0)return s.default}}function ou(e,t,n,r,o){if(o){const i=o[String(n)],s=o[String(r)];i&&e.classList.remove(i),s&&e.classList.add(s);return}typeof r=="string"&&e.children.length===0&&(e.textContent=r)}function vw({selectedElement:e,onRefresh:t,onPropChange:n,changedProps:r,onPropReset:o,manifest:i,resetRevision:s}){var D;const{reactComponents:a,reactProps:c,reactState:u,sourceFile:p}=e,d=a[0]||null;if(fw(d))return null;const f=!!(i!=null&&i.components&&d&&i.components[d]),v=f?i.components[d]:null;if(i!=null&&i.components&&!f)return null;const x=[],m=new Set;if(f&&(v!=null&&v.props))for(const[k,M]of Object.entries(v.props)){const z=(c==null?void 0:c[k])??M.default;M.hidden_unless&&pw(M.hidden_unless,c)||(x.push([k,z]),m.add(k))}else if(c)for(const k of Object.keys(c)){const M=c[k];if(dw(k,M))try{x.push([k,M]),m.add(k)}catch{}}const y=((u==null?void 0:u.filter(k=>k.hasDispatch))||[]).filter(k=>{const M=k.value;return typeof M=="boolean"||typeof M=="number"||typeof M=="string"&&M.length<80});if(x.length===0&&y.length===0)return null;const g=h.useRef({}),C=h.useRef(s??0);if(s!==void 0&&s!==C.current){C.current=s;for(const[k,M]of Object.entries(g.current)){const z=ru(c,i,d,k);if(z!==void 0){const B=nu(i,d,k);ou(e.element,k,M,z,B)}}g.current={}}const S=h.useCallback((k,M)=>{const z=g.current[k]??ru(c,i,d,k),B=nu(i,d,k);ou(e.element,k,z,M,B),g.current[k]=M,n==null||n(k,M)},[e.element,c,i,d,n]),E=h.useCallback(k=>{const M=g.current[k],z=ru(c,i,d,k);if(M!==void 0&&z!==void 0){const B=nu(i,d,k);ou(e.element,k,M,z,B)}delete g.current[k],o==null||o(k)},[e.element,c,i,d,o]),P=h.useCallback((k,M)=>{T2(e.element,k,M)&&setTimeout(()=>t==null?void 0:t(),50)},[e.element,t]),b=[];if(i!=null&&i.components&&d){const k=(D=i.components[d])==null?void 0:D.state;if(k)for(const[M,z]of Object.entries(k))b.push({name:M,def:z})}const T=h.useRef(new Map);for(const k of y)T.current.has(k.index)||T.current.set(k.index,gw(k.value,k.index));function W(k,M){const z=b[M];return z?z.name.charAt(0).toUpperCase()+z.name.slice(1).replace(/([A-Z])/g," $1").trim():T.current.get(k.index)||`state ${k.index+1}`}function N(k){var z;const M=b[k];return((z=M==null?void 0:M.def)==null?void 0:z.type)==="enum"&&Array.isArray(M.def.values)&&M.def.values.length>0?M.def.values:null}const re=[];for(const[k,M]of x)re.push({key:k,label:k.charAt(0).toUpperCase()+k.slice(1),value:M,type:"prop",enumValues:mw(i,d,k)});for(let k=0;k<y.length;k++){const M=y[k];re.push({key:`s-${M.index}`,label:W(M,k),value:M.value,type:"state",enumValues:N(k),hookIndex:M.index})}return l.jsx(An,{label:d||"Component",action:p?l.jsxs("span",{className:"retune-component-source",children:[p.fileName.split("/").pop(),":",p.lineNumber]}):void 0,children:l.jsx("div",{className:"retune-component-grid",children:re.map(k=>{const z=Cf(k.value)==="boolean",B=k.type==="prop"?r==null?void 0:r.has(k.key):!1;return l.jsxs("div",{className:"retune-component-field",children:[l.jsx("span",{className:"retune-component-field-label",children:k.label}),k.enumValues?l.jsx(xn,{prop:k.key,value:String(g.current[k.key]??k.value??""),options:k.enumValues,onChange:(ee,H)=>k.type==="prop"?S(k.key,H):P(k.hookIndex,H),isChanged:B,onReset:()=>E(k.key)}):z?l.jsx(Dr,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],value:k.value?"true":"false",onChange:ee=>{const H=ee==="true";k.type==="prop"?S(k.key,H):P(k.hookIndex,H)}}):l.jsx(xw,{value:k.value,onChange:ee=>k.type==="prop"?S(k.key,ee):P(k.hookIndex,ee),isChanged:B,onReset:k.type==="prop"?()=>E(k.key):void 0})]},k.key)})})})}function xw({value:e,onChange:t,isChanged:n,onReset:r}){const o=Cf(e),[i,s]=h.useState(String(e??"")),a=h.useRef(!1),c=String(e??"");return c!==i&&!a.current&&s(c),o==="function"?l.jsx("div",{className:"retune-prop",children:l.jsx("input",{className:"retune-prop-input",style:{paddingLeft:12},value:"fn()",readOnly:!0})}):o==="object"||o==="null"?l.jsx("div",{className:"retune-prop",children:l.jsx("input",{className:"retune-prop-input",style:{paddingLeft:12},value:hw(e),readOnly:!0})}):l.jsxs("div",{className:"retune-prop",children:[l.jsx(Wr,{isChanged:n??!1,onReset:r??(()=>{})}),l.jsx("input",{className:"retune-prop-input",style:{paddingLeft:12},type:o==="number"?"number":"text",value:i,onFocus:()=>{a.current=!0},onBlur:()=>{if(a.current=!1,o==="number"){const u=parseFloat(i);isNaN(u)||t(u)}},onChange:u=>{if(s(u.target.value),o==="number"){const p=parseFloat(u.target.value);isNaN(p)||t(p)}else t(u.target.value)},onKeyDown:u=>{u.key==="Enter"&&u.target.blur(),u.stopPropagation()}})]})}function iu({title:e,body:t,copyLabel:n,copiedLabel:r,copyText:o,revertAfter:i=0,onDismiss:s,onCopy:a,visible:c}){const[u,p]=h.useState(!1),[d,f]=h.useState(!1),[v,x]=h.useState(!1),m=h.useRef(null),R=h.useCallback(()=>{if(u)return;const C=m.current;if(!C)return;const S=C.getBoundingClientRect().width;navigator.clipboard.writeText(o),p(!0),a==null||a(),requestAnimationFrame(()=>{const E=C.getBoundingClientRect().width;Math.abs(E-S)>1&&C.animate([{width:`${S}px`},{width:`${E}px`}],{duration:200,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"})}),i>0&&setTimeout(()=>{const E=m.current;if(!E)return;const P=E.getBoundingClientRect().width;p(!1),requestAnimationFrame(()=>{const b=E.getBoundingClientRect().width;Math.abs(b-P)>1&&E.animate([{width:`${P}px`},{width:`${b}px`}],{duration:200,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"})})},i)},[u,o,i]);if(!c||v)return null;const y="cubic-bezier(0.25, 0.46, 0.45, 0.94)",g="cubic-bezier(0.215, 0.61, 0.355, 1)";return l.jsx("div",{style:{display:"grid",gridTemplateRows:d?"0fr":"1fr",opacity:d?0:1,transition:`grid-template-rows 150ms ${y}, opacity 150ms ${y}`},onTransitionEnd:C=>{C.propertyName==="opacity"&&d&&(x(!0),f(!1),s==null||s())},children:l.jsx("div",{style:{overflow:"hidden",minHeight:0},children:l.jsxs("div",{style:{padding:"12px 16px",background:"var(--retune-blue)",display:"flex",flexDirection:"column",gap:"8px",transform:d?"translateY(-4px)":"translateY(0)",transition:`transform 150ms ${y}`},children:[l.jsx("div",{style:{fontFamily:"inherit",fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.06px",color:"var(--retune-white)"},children:e}),t&&l.jsx("div",{style:{fontFamily:"inherit",fontSize:"11px",lineHeight:"16px",color:"var(--retune-white)",opacity:.85},children:t}),l.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[l.jsxs("button",{ref:m,onClick:R,style:{background:"var(--retune-white)",border:"none",borderRadius:"6px",padding:0,cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:500,lineHeight:"16px",letterSpacing:"-0.055px",color:"var(--retune-always-black)",whiteSpace:"nowrap",position:"relative",overflow:"hidden",flexShrink:0,transition:"transform 100ms ease"},onPointerDown:C=>{C.currentTarget.style.transform="scale(0.97)"},onPointerUp:C=>{C.currentTarget.style.transform=""},onPointerLeave:C=>{C.currentTarget.style.transform=""},children:[l.jsxs("span",{style:{display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",visibility:"hidden"},children:[l.jsx("span",{style:{width:16,height:16,flexShrink:0}}),u?r:n]}),l.jsxs("span",{style:{position:"absolute",inset:0,display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",opacity:u?0:1,filter:u?"blur(2px)":"blur(0)",transition:`opacity 200ms ${g}, filter 200ms ${g}`},children:[l.jsx("span",{style:{width:16,height:16,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transform:u?"scale(0.95)":"scale(1)",transition:`transform 200ms ${g}`},children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8.5 3.5C9.32843 3.5 10 4.17157 10 5V6H11C11.8284 6 12.5 6.67157 12.5 7.5V11C12.5 11.8284 11.8284 12.5 11 12.5H7.5C6.67157 12.5 6 11.8284 6 11V10H5C4.17157 10 3.5 9.32843 3.5 8.5V5C3.5 4.17157 4.17157 3.5 5 3.5H8.5ZM10 8.5C10 9.32843 9.32843 10 8.5 10H7V11C7 11.2761 7.22386 11.5 7.5 11.5H11C11.2761 11.5 11.5 11.2761 11.5 11V7.5C11.5 7.22386 11.2761 7 11 7H10V8.5ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V8.5C4.5 8.77614 4.72386 9 5 9H8.5C8.77614 9 9 8.77614 9 8.5V5C9 4.72386 8.77614 4.5 8.5 4.5H5Z",fill:"currentColor",fillOpacity:"0.9"})})}),n]}),l.jsxs("span",{style:{position:"absolute",inset:0,display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",opacity:u?1:0,filter:u?"blur(0)":"blur(2px)",transition:`opacity 200ms ${g}, filter 200ms ${g}`},children:[l.jsx("span",{style:{width:16,height:16,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transform:u?"scale(1)":"scale(0.95)",transition:`transform 200ms ${g}`},children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M11.0839 4.22268C11.2371 3.99294 11.5475 3.93087 11.7773 4.08401C12.007 4.23718 12.0691 4.5476 11.916 4.77737L7.91596 10.7774C7.83287 10.902 7.69784 10.9833 7.54877 10.9981C7.39988 11.0127 7.25223 10.9593 7.14643 10.8535L4.14643 7.85354C3.9512 7.65827 3.95118 7.34176 4.14643 7.14651C4.34168 6.95126 4.6582 6.95128 4.85346 7.14651L7.42182 9.71487L11.0839 4.22268Z",fill:"currentColor",fillOpacity:"0.9"})})}),r]})]}),l.jsx("button",{onClick:()=>f(!0),style:{background:"none",border:"none",borderRadius:"6px",padding:"6px 8px",cursor:u?"default":"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:500,lineHeight:"16px",letterSpacing:"-0.055px",color:"var(--retune-white)",whiteSpace:"nowrap",opacity:u?0:.9,filter:u?"blur(2px)":"blur(0)",pointerEvents:u?"none":"auto",transition:`opacity 200ms ${g}, filter 200ms ${g}`},onMouseEnter:C=>{u||(C.currentTarget.style.opacity="1")},onMouseLeave:C=>{u||(C.currentTarget.style.opacity="0.9")},children:"Maybe later"})]})]})})})}var yw=0,c1=new WeakMap,z0=new Map;function Ha(e){let t=c1.get(e);return t===void 0&&(t=yw++,c1.set(e,t),z0.set(t,e)),t}var bw=new Set(["SCRIPT","STYLE","LINK","META","TITLE","HEAD","NOSCRIPT","BR","WBR","COL"]);function ww(e){return!!(e.hasAttribute("data-retune-host")||e.hasAttribute("data-retune-highlight")||e.hasAttribute("data-retune-selection")||e.hasAttribute("data-retune-label")||e.hasAttribute("data-retune-selection-label"))}function Bo(e,t,n){const r=(t==null?void 0:t.get(e))??Array.from(e.children),o=[],i=n?new Set(n.filter(s=>s.element.parentElement===e&&s.newParent!==e).map(s=>s.element)):null;for(const s of r)bw.has(s.tagName)||ww(s)||i!=null&&i.has(s)||o.push(s);if(n){for(const s of n)if(s.newParent===e&&s.element.parentElement!==e){const a=Math.min(s.insertIndex,o.length);o.splice(a,0,s.element)}}return o}var Cw=new Set(["P","H1","H2","H3","H4","H5","H6","SPAN","LABEL","A","LI","TD","TH","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","EM","STRONG","B","I","SMALL","MARK","DEL","INS","SUB","SUP","ABBR","CITE","CODE","PRE","TIME"]),kw=new Set(["IMG","PICTURE","VIDEO","CANVAS"]),Sw=new Set(["path","circle","ellipse","rect","line","polyline","polygon"]);function jw(e,t){if(t)return"component";if(Cw.has(e.tagName))return"text";if(kw.has(e.tagName))return"image";if(e.tagName==="SVG"||e.tagName==="svg"||Sw.has(e.tagName.toLowerCase()))return"svg-shape";if(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"||e.tagName==="BUTTON")return"input";try{const n=getComputedStyle(e),r=n.display;if(r==="grid"||r==="inline-grid")return"grid";if(r==="flex"||r==="inline-flex"){const o=n.flexDirection;return o==="row"||o==="row-reverse"?"frame-h":"frame-v"}}catch{}return"block"}function Rw(e){let t="";for(const n of e.childNodes)n.nodeType===Node.TEXT_NODE&&(t+=n.textContent||"");return t=t.trim(),t.length>0?t:null}function O0(e){var o;const t=R2(e),n=jw(e,t),r=e.tagName.toLowerCase();if(t)return{iconType:n,name:t,component:t};if(n==="text"){const i=Rw(e)||((o=e.textContent)==null?void 0:o.trim())||"";if(i.length>0){const s=i.length>24?i.slice(0,22)+"...":i;return{iconType:n,name:s,component:null}}}if(e.className&&typeof e.className=="string"){const i=e.className.trim().split(/\s+/)[0];if(i)return{iconType:n,name:i,component:null}}return e.id?{iconType:n,name:`#${e.id}`,component:null}:{iconType:n,name:r,component:null}}function Lw({element:e}){var n,r,o;const t=e.tagName.toLowerCase();try{if(t==="svg"){const i=e.getAttribute("viewBox"),s=e.getAttribute("width")||"16",a=e.getAttribute("height")||"16",c=i||`0 0 ${s} ${a}`,u=c.split(/\s+/).map(Number),d=Math.max(u[2]||16,u[3]||16)/14,f=e.innerHTML.replace(/fill="[^"]*"/g,'fill="none"').replace(/stroke="[^"]*"/g,'stroke="currentColor"').replace(/stroke-width="[^"]*"/g,`stroke-width="${d}"`).replace(/style="[^"]*"/g,"").replace(/<(path|circle|ellipse|rect|polygon|polyline|line)(?![^>]*stroke)/g,`<$1 stroke="currentColor" stroke-width="${d}"`);return l.jsx("svg",{width:"16",height:"16",viewBox:c,preserveAspectRatio:"xMidYMid meet",fill:"none",dangerouslySetInnerHTML:{__html:f}})}if(t==="path"){const i=e.getAttribute("d");if(!i)return l.jsx(su,{});const s=(n=e.getBBox)==null?void 0:n.call(e),a=s?Math.max(s.width,s.height)*.23:2,c=s?`${s.x-a} ${s.y-a} ${s.width+a*2} ${s.height+a*2}`:"0 0 24 24";return l.jsx("svg",{width:"16",height:"16",viewBox:c,preserveAspectRatio:"xMidYMid meet",fill:"none",children:l.jsx("path",{d:i,fill:"none",stroke:"currentColor",strokeWidth:s?Math.max(s.width,s.height)/10:2,strokeLinecap:"round",strokeLinejoin:"round"})})}if(t==="circle"||t==="ellipse"||t==="rect"||t==="line"){const i=(r=e.getBBox)==null?void 0:r.call(e);if(i){const s=Math.max(i.width,i.height)*.23,a=`${i.x-s} ${i.y-s} ${i.width+s*2} ${i.height+s*2}`,c=Math.max(i.width,i.height)/10,u=e.cloneNode(!1);return u.setAttribute("fill","none"),u.setAttribute("stroke","currentColor"),u.setAttribute("stroke-width",String(c)),l.jsx("svg",{width:"16",height:"16",viewBox:a,preserveAspectRatio:"xMidYMid meet",fill:"none",dangerouslySetInnerHTML:{__html:u.outerHTML}})}}if(t==="polygon"||t==="polyline"){const i=e.getAttribute("points");if(!i)return l.jsx(su,{});const s=(o=e.getBBox)==null?void 0:o.call(e),a=s?Math.max(s.width,s.height)*.23:2,c=s?`${s.x-a} ${s.y-a} ${s.width+a*2} ${s.height+a*2}`:"0 0 24 24",u=t;return l.jsx("svg",{width:"16",height:"16",viewBox:c,preserveAspectRatio:"xMidYMid meet",fill:"none",children:l.jsx(u,{points:i,fill:"none",stroke:"currentColor",strokeWidth:s?Math.max(s.width,s.height)/10:2,strokeLinecap:"round",strokeLinejoin:"round"})})}}catch{}return l.jsx(su,{})}function su(){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z",fill:"currentColor",fillOpacity:1})})}function Ew({type:e}){switch(e){case"frame-v":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.00488 6.10254C3.05621 6.60667 3.48232 7 4 7L12 7L12.1025 6.99512C12.6067 6.94379 13 6.51768 13 6L13 4C13 3.48232 12.6067 3.05621 12.1025 3.00488L12 3L4 3C3.44772 3 3 3.44772 3 4L3 6L3.00488 6.10254ZM3.00488 12.1025C3.05621 12.6067 3.48232 13 4 13L12 13L12.1025 12.9951C12.573 12.9472 12.9472 12.573 12.9951 12.1025L13 12L13 10L12.9951 9.89746C12.9472 9.42703 12.573 9.05278 12.1025 9.00488L12 9L4 9C3.48232 9 3.05621 9.39333 3.00488 9.89746L3 10L3 12L3.00488 12.1025ZM12 4L12 6L4 6L4 4L12 4ZM12 10L12 12L4 12L4 10L12 10Z",fill:"currentColor",fillOpacity:1})});case"frame-h":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.10254 12.9951C6.60667 12.9438 7 12.5177 7 12L7 4L6.99512 3.89746C6.94379 3.39333 6.51768 3 6 3L4 3C3.48232 3 3.05621 3.39333 3.00488 3.89746L3 4L3 12C3 12.5523 3.44772 13 4 13L6 13L6.10254 12.9951ZM12.1025 12.9951C12.6067 12.9438 13 12.5177 13 12L13 4L12.9951 3.89746C12.9472 3.42703 12.573 3.05278 12.1025 3.00488L12 3L10 3L9.89746 3.00488C9.42703 3.05278 9.05278 3.42703 9.00488 3.89746L9 4L9 12C9 12.5177 9.39333 12.9438 9.89746 12.9951L10 13L12 13L12.1025 12.9951ZM4 4L6 4L6 12L4 12L4 4ZM10 4L12 4L12 12L10 12L10 4Z",fill:"currentColor",fillOpacity:1})});case"grid":return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"3.5",y:"3.5",width:"3.5",height:"3.5",rx:"0.75",stroke:"currentColor"}),l.jsx("rect",{x:"9",y:"3.5",width:"3.5",height:"3.5",rx:"0.75",stroke:"currentColor"}),l.jsx("rect",{x:"3.5",y:"9",width:"3.5",height:"3.5",rx:"0.75",stroke:"currentColor"}),l.jsx("rect",{x:"9",y:"9",width:"3.5",height:"3.5",rx:"0.75",stroke:"currentColor"})]});case"block":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z",fill:"currentColor",fillOpacity:1})});case"text":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3.5C3 3.22386 3.22386 3 3.5 3H8H12.5C12.7761 3 13 3.22386 13 3.5V5C13 5.27614 12.7761 5.5 12.5 5.5C12.2239 5.5 12 5.27614 12 5V4H8.5V12H9.5C9.77614 12 10 12.2239 10 12.5C10 12.7761 9.77614 13 9.5 13H8H6.5C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12H7.5V4H4V5C4 5.27614 3.77614 5.5 3.5 5.5C3.22386 5.5 3 5.27614 3 5V3.5Z",fill:"currentColor",fillOpacity:1})});case"image":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V9.79289L6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L11.2071 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4ZM3 10.9999V11.0001V11.5C3 12.3284 3.67157 13 4.5 13H10.9995H11.0005H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5C3.67157 3 3 3.67157 3 4.5V10.9999ZM4.5 12H9.79289L6.5 8.70711L4 11.2071V11.5C4 11.7761 4.22386 12 4.5 12ZM9.5 7.5C10.0523 7.5 10.5 7.05228 10.5 6.5C10.5 5.94772 10.0523 5.5 9.5 5.5C8.94772 5.5 8.5 5.94772 8.5 6.5C8.5 7.05228 8.94772 7.5 9.5 7.5Z",fill:"currentColor",fillOpacity:1})});case"component":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 5.83824L6.66041 4.5L8 3.16176L9.33959 4.5L8 5.83824ZM7.56946 2.17837L5.6796 4.06632C5.44013 4.30554 5.44013 4.69446 5.6796 4.93368L7.56946 6.82163C7.80753 7.05946 8.19247 7.05946 8.43054 6.82163L10.3204 4.93368C10.5599 4.69446 10.5599 4.30554 10.3204 4.06632L8.43054 2.17837C8.19247 1.94054 7.80753 1.94054 7.56946 2.17837ZM10.1618 8L11.5 6.66041L12.8382 8L11.5 9.33959L10.1618 8ZM9.17837 8.43054L11.0663 10.3204C11.3055 10.5599 11.6945 10.5599 11.9337 10.3204L13.8216 8.43054C14.0595 8.19247 14.0595 7.80753 13.8216 7.56946L11.9337 5.6796C11.6945 5.44013 11.3055 5.44013 11.0663 5.6796L9.17837 7.56946C8.94054 7.80753 8.94054 8.19247 9.17837 8.43054ZM6.66041 11.5L8 12.8382L9.33959 11.5L8 10.1618L6.66041 11.5ZM5.6796 11.0663L7.56946 9.17837C7.80753 8.94054 8.19247 8.94054 8.43054 9.17837L10.3204 11.0663C10.5599 11.3055 10.5599 11.6945 10.3204 11.9337L8.43054 13.8216C8.19247 14.0595 7.80753 14.0595 7.56946 13.8216L5.6796 11.9337C5.44013 11.6945 5.44013 11.3055 5.6796 11.0663ZM3.16176 8L4.5 6.66041L5.83824 8L4.5 9.33959L3.16176 8ZM2.17837 8.43054L4.06632 10.3204C4.30554 10.5599 4.69446 10.5599 4.93368 10.3204L6.82163 8.43054C7.05946 8.19247 7.05946 7.80753 6.82163 7.56946L4.93368 5.6796C4.69446 5.44013 4.30554 5.44013 4.06632 5.6796L2.17837 7.56946C1.94054 7.80753 1.94054 8.19247 2.17837 8.43054Z",fill:"currentColor",fillOpacity:1})});case"svg":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z",fill:"currentColor",fillOpacity:1})});case"input":return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z",fill:"currentColor",fillOpacity:1})})}}function Nw(e,t){let n=t.parentElement;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}function Mw(e){const t=new Set;let n=e.parentElement;for(;n;)t.add(n),n=n.parentElement;return t}function Tw(e,t){for(let n=0;n<t.length;n++){const r=t[n].top+t[n].height/2;if(e<r)return n}return t.length}var Aw=5,Bl=30,u1=8,$w=h.memo(function e({element:t,depth:n,selectedElement:r,expandedSet:o,visualOrderMap:i,reparentEntries:s,onToggle:a,onSelect:c,onHover:u,onDragStart:p,isDragging:d,treeNodeRefs:f}){const v=Bo(t,i,s),x=s==null?void 0:s.some(b=>b.element===t&&b.newParent!==t.parentElement),m=v.length>0,R=o.has(t),y=t===r,g=!y&&r?r.contains(t):!1,{iconType:C,name:S,component:E}=O0(t),P=C==="component";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{ref:b=>{b&&f.set(t,b)},"data-retune-tree-key":Ha(t),className:`retune-tree-node${y?" selected":""}${g?" descendant-selected":""}`,style:{paddingLeft:12+n*20},onPointerDown:b=>{b.target.closest(".retune-tree-arrow")||p(b.nativeEvent,t)},onPointerEnter:()=>{d||u(t)},onPointerLeave:()=>{d||u(null)},children:[l.jsx("span",{className:`retune-tree-arrow${m?"":" empty"}${R?" expanded":""}`,onClick:b=>{b.stopPropagation(),m&&a(t)},children:m&&l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.76754 6.76778C9.9628 6.57252 10.2803 6.57252 10.4755 6.76778C10.6705 6.96298 10.6705 7.27962 10.4755 7.47482L7.99996 9.94942L5.52535 7.47482C5.33009 7.27955 5.33009 6.96305 5.52535 6.76778C5.72061 6.57252 6.03712 6.57252 6.23238 6.76778L7.99996 8.53536L9.76754 6.76778Z",fill:"currentColor",fillOpacity:"1"})})}),l.jsx("span",{className:`retune-tree-icon${P?" retune-tree-icon--component":""}`,children:C==="svg-shape"?l.jsx(Lw,{element:t}):l.jsx(Ew,{type:C})}),l.jsx("span",{className:`retune-tree-name${P?" retune-tree-name--component":""}`,children:S}),x&&l.jsx("span",{className:"retune-tree-moved",children:"moved"})]}),R&&v.map(b=>l.jsx(e,{element:b,depth:n+1,selectedElement:r,expandedSet:o,visualOrderMap:i,reparentEntries:s,onToggle:a,onSelect:c,onHover:u,onDragStart:p,isDragging:d,treeNodeRefs:f},Ha(b)))]})});function _w({selectedElement:e,onSelect:t,onHover:n,visualOrderMap:r,reparentEntries:o,onTreeReorder:i,onTreeReparent:s}){const[a,c]=h.useState(()=>new Set),[u,p]=h.useState(!1),d=h.useRef(null),f=h.useRef(null),v=h.useRef(null),x=h.useRef(new WeakMap).current,m=h.useRef(null);h.useEffect(()=>{if(!e||e===v.current)return;v.current=e;const D=Mw(e);c(k=>{const M=new Set(k);let z=!1;for(const B of D)M.has(B)||(M.add(B),z=!0);return z?M:k}),requestAnimationFrame(()=>{var M;const k=(M=d.current)==null?void 0:M.querySelector(".retune-tree-node.selected");k==null||k.scrollIntoView({block:"nearest",behavior:"smooth"})})},[e]);const R=h.useCallback(D=>{c(k=>{const M=new Set(k);return M.has(D)?M.delete(D):M.add(D),M})},[]),y=h.useCallback(()=>{const D=m.current;D&&(D.siblingRects=D.siblings.map(k=>{const M=x.get(k);return M?M.getBoundingClientRect():new DOMRect}))},[x]),g=h.useCallback((D,k,M)=>{var H,se;const{name:z}=O0(D),B=document.createElement("div");B.className="retune-tree-ghost",B.textContent=z,B.style.left=`${k+12}px`,B.style.top=`${M-12}px`;const ee=(H=d.current)==null?void 0:H.getRootNode();return ee instanceof ShadowRoot?ee.appendChild(B):(se=d.current)==null||se.appendChild(B),B},[]),C=h.useCallback(()=>{var k;const D=document.createElement("div");return D.className="retune-tree-drop-indicator",(k=f.current)==null||k.appendChild(D),D},[]),S=h.useCallback((D,k,M)=>{const z=m.current;if(!z||!f.current)return;const B=f.current.getBoundingClientRect();let ee;if(z.siblingRects.length===0)return;if(k<=0)ee=z.siblingRects[0].top-B.top-1;else if(k>=z.siblings.length)ee=z.siblingRects[z.siblingRects.length-1].bottom-B.top-1;else{const se=z.siblingRects[k-1],J=z.siblingRects[k];ee=(se.bottom+J.top)/2-B.top-1}const H=12+M*20;D.style.display="block",D.style.top=`${ee}px`,D.style.left=`${H}px`},[]),E=h.useCallback(()=>{const D=m.current;if(!D)return;D.ghost&&D.ghost.remove(),D.indicator&&(D.indicator.style.display="none",D.indicator.remove()),D.highlightedNode&&D.highlightedNode.classList.remove("reparent-target"),D.expandTimer&&clearTimeout(D.expandTimer);const k=x.get(D.element);k&&k.classList.remove("dragging"),D.scrollRaf&&cancelAnimationFrame(D.scrollRaf),m.current=null,p(!1)},[x]),P=h.useCallback(D=>{var H,se;const k=(H=d.current)==null?void 0:H.getRootNode();if(!(k instanceof ShadowRoot))return null;const M=k.elementFromPoint(D.clientX,D.clientY),z=(se=M==null?void 0:M.closest)==null?void 0:se.call(M,"[data-retune-tree-key]");if(!z)return null;const B=parseInt(z.getAttribute("data-retune-tree-key")||"",10);if(isNaN(B))return null;const ee=z0.get(B);return ee?{element:ee,treeNode:z}:null},[]),b=h.useCallback(D=>{let k=0,M=D.parentElement;for(;M&&M!==document.body;)k++,M=M.parentElement;return k},[]),T=h.useCallback(D=>{var H,se;const k=m.current;if(!k)return;const M=D.clientX-k.startX,z=D.clientY-k.startY;if(!k.active){if(Math.abs(M)+Math.abs(z)<Aw)return;k.active=!0,p(!0),t(k.element);const J=a.has(k.element);k.wasExpanded=J,J?(c(de=>{const Re=new Set(de);return Re.delete(k.element),Re}),requestAnimationFrame(()=>{y()})):y();const ie=x.get(k.element);ie&&ie.classList.add("dragging"),k.ghost=g(k.element,D.clientX,D.clientY),k.indicator=C();return}if(!k.element.isConnected){E(),document.removeEventListener("pointermove",T,!0),document.removeEventListener("pointerup",W,!0);return}k.ghost&&(k.ghost.style.left=`${D.clientX+12}px`,k.ghost.style.top=`${D.clientY-12}px`),k.highlightedNode&&(k.highlightedNode.classList.remove("reparent-target"),k.highlightedNode=null);const B=P(D);if(!B||B.element===k.element||Nw(k.element,B.element))k.indicator&&(k.indicator.style.display="none"),k.mode=null,k.reparentTarget=null,k.expandTimer&&(clearTimeout(k.expandTimer),k.expandTimer=null),k.lastHoverKey=null;else{const J=B.element.parentElement;if(J===k.parentElement){k.mode="reorder",k.reparentTarget=null,k.expandTimer&&(clearTimeout(k.expandTimer),k.expandTimer=null),k.lastHoverKey=null;const de=Tw(D.clientY,k.siblingRects);if(k.dropIndex=de,k.indicator){const Re=de>k.dragIndex?de+1:de;S(k.indicator,Re,k.siblingDepth)}}else{const de=B.treeNode.getBoundingClientRect(),Re=(D.clientY-de.top)/de.height,He=b(B.element);if(Re<.25&&J){k.mode="reparent",k.reparentTarget=J;const ve=Bo(J,r);if(k.reparentIndex=ve.indexOf(B.element),k.reparentIndex===-1&&(k.reparentIndex=0),k.indicator){const te=(H=f.current)==null?void 0:H.getBoundingClientRect();if(te){const Ie=12+He*16;k.indicator.style.display="block",k.indicator.style.top=`${de.top-te.top-1}px`,k.indicator.style.left=`${Ie}px`}}}else if(Re>.75&&J){k.mode="reparent",k.reparentTarget=J;const ve=Bo(J,r);if(k.reparentIndex=ve.indexOf(B.element)+1,k.indicator){const te=(se=f.current)==null?void 0:se.getBoundingClientRect();if(te){const Ie=12+He*16;k.indicator.style.display="block",k.indicator.style.top=`${de.bottom-te.top-1}px`,k.indicator.style.left=`${Ie}px`}}}else k.mode="reparent",k.reparentTarget=B.element,k.reparentIndex=Bo(B.element,r).length,k.indicator&&(k.indicator.style.display="none"),B.treeNode.classList.add("reparent-target"),k.highlightedNode=B.treeNode;const Ke=Ha(B.element);Ke!==k.lastHoverKey&&(k.expandTimer&&clearTimeout(k.expandTimer),k.lastHoverKey=Ke,Bo(B.element,r).length>0&&!a.has(B.element)&&(k.expandTimer=setTimeout(()=>{c(te=>{const Ie=new Set(te);return Ie.add(B.element),Ie})},500)))}}const ee=d.current;if(ee){const J=ee.getBoundingClientRect(),ie=D.clientY-J.top,de=J.bottom-D.clientY;ie<Bl&&ee.scrollTop>0?(ee.scrollTop-=u1*(1-ie/Bl),y()):de<Bl&&(ee.scrollTop+=u1*(1-de/Bl),y())}},[a,x,y,g,C,S,E,P,b,r]),W=h.useCallback(D=>{document.removeEventListener("pointermove",T,!0),document.removeEventListener("pointerup",W,!0);const k=m.current;if(!k)return;if(!k.active){t(k.element),m.current=null;return}const{element:M,dragIndex:z,dropIndex:B,mode:ee,reparentTarget:H,reparentIndex:se,wasExpanded:J}=k;E(),ee==="reparent"&&H&&s?s(M,H,se):ee==="reorder"&&B!==z&&i?i(M,z,B):J&&c(ie=>{const de=new Set(ie);return de.add(M),de})},[t,i,s,E,T]),N=h.useCallback((D,k)=>{if(!i&&!s)return;const M=k.parentElement;if(!M)return;const z=Bo(M,r),B=z.indexOf(k);if(B===-1)return;D.preventDefault(),D.stopPropagation();let ee=0,H=M;for(;H&&H!==document.body;)ee++,H=H.parentElement;m.current={element:k,parentElement:M,siblings:z,siblingRects:[],siblingDepth:ee,dragIndex:B,dropIndex:B,startX:D.clientX,startY:D.clientY,active:!1,wasExpanded:!1,ghost:null,indicator:null,scrollRaf:null,mode:null,reparentTarget:null,reparentIndex:0,expandTimer:null,lastHoverKey:null,highlightedNode:null},document.addEventListener("pointermove",T,!0),document.addEventListener("pointerup",W,!0)},[i,s,r,T,W]),re=typeof document<"u"?Bo(document.body,void 0,o):[];return l.jsx("div",{className:"retune-tree",ref:d,children:l.jsx("div",{className:"retune-tree-inner",ref:f,children:re.map(D=>l.jsx($w,{element:D,depth:0,selectedElement:e,expandedSet:a,visualOrderMap:r,reparentEntries:o,onToggle:R,onSelect:t,onHover:n,onDragStart:N,isDragging:u,treeNodeRefs:x},Ha(D)))})})}var kf=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.userAgent),d1=kf?"⌘":"Ctrl",Pw=kf?"⌥":"Alt",Iw=kf?"⌫":"Del",zw=[{label:"Undo",keys:[d1,"Z"]},{label:"Redo",keys:[d1,"⇧","Z"]},{label:"Select Child",keys:["Enter"]},{label:"Select Parent",keys:["⇧","Enter"]},{label:"Select Next Sibling",keys:["Tab"]},{label:"Select Previous Sibling",keys:["⇧","Tab"]},{label:"Reorder",keys:["↑","↓","←","→"]},{label:"Delete Element",keys:[Iw]},{label:"Measure Spacing",keys:[Pw,"Hover"]}];function Ow({children:e}){const t=e.length>1;return l.jsx("span",{className:`retune-key${t?" wide":""}`,children:e})}var Dw=()=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M10 8L14 12L10 16",stroke:"currentColor",strokeOpacity:"0.35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Fw=()=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M14 8L10 12L14 16",stroke:"currentColor",strokeOpacity:"0.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),lu="130ms cubic-bezier(0.645, 0.045, 0.355, 1)",f1="130ms cubic-bezier(0.215, 0.61, 0.355, 1)";function Bw({side:e,theme:t,onThemeChange:n,fidelity:r,onFidelityChange:o,onHide:i,exiting:s}){const[a,c]=h.useState("main"),u=h.useRef(null),p=h.useCallback(x=>{const m=u.current;if(!m){c(x);return}const R=m.offsetHeight;m.style.height=`${R}px`,m.style.transition="none",c(x),requestAnimationFrame(()=>{m.style.height="auto";const y=m.offsetHeight;m.style.height=`${R}px`,requestAnimationFrame(()=>{m.style.transition=`height ${lu}`,m.style.height=`${y}px`;const g=()=>{m.removeEventListener("transitionend",g),m.style.transition="",m.style.height=""};m.addEventListener("transitionend",g,{once:!0})})})},[]),d=h.useCallback((x,m)=>{n(m)},[n]),f=h.useCallback((x,m)=>{o(m)},[o]),v=a==="main";return l.jsx("div",{ref:u,className:`retune-settings-panel ${e}${s?" exiting":""}`,children:l.jsxs("div",{className:"retune-settings-clip",children:[l.jsxs("div",{className:"retune-settings-view-container",style:{opacity:v?1:0,transition:`opacity ${v?f1:lu}${v?" 30ms":""}`,pointerEvents:v?"auto":"none",position:v?"relative":"absolute",top:0,left:0,right:0},children:[l.jsx("div",{className:"retune-settings-header",children:l.jsx("span",{className:"retune-settings-title",children:"Settings"})}),l.jsxs("div",{className:"retune-settings-body",children:[l.jsxs("div",{className:"retune-settings-row",children:[l.jsx("span",{className:"retune-settings-label",children:"Theme"}),l.jsx("div",{style:{width:96},children:l.jsx(xn,{prop:"theme",value:t,options:["system","light","dark"],onChange:d})})]}),l.jsxs("div",{className:"retune-settings-row",children:[l.jsx("span",{className:"retune-settings-label",children:"Output Detail"}),l.jsx("div",{style:{width:96},children:l.jsx(xn,{prop:"fidelity",value:r,options:["minimal","standard","full"],onChange:f})})]}),l.jsxs("div",{className:"retune-settings-row",children:[l.jsx("span",{className:"retune-settings-label",children:"Hide Retune for this session"}),l.jsx("div",{className:"retune-switch-wrap",children:l.jsx("button",{className:"retune-switch",onClick:i,children:l.jsx("span",{className:"retune-switch-knob"})})})]}),l.jsxs("div",{className:"retune-settings-row clickable",onClick:()=>p("shortcuts"),children:[l.jsx("span",{className:"retune-settings-label",children:"Keyboard shortcuts"}),l.jsx(Dw,{})]})]})]}),l.jsxs("div",{className:"retune-settings-view-container",style:{opacity:v?0:1,transition:`opacity ${v?lu:f1}${v?"":" 30ms"}`,pointerEvents:v?"none":"auto",position:v?"absolute":"relative",top:0,left:0,right:0},children:[l.jsxs("div",{className:"retune-settings-header retune-settings-back",onClick:()=>p("main"),children:[l.jsx(Fw,{}),l.jsx("span",{className:"retune-settings-title",style:{padding:"8px 0"},children:"Keyboard shortcuts"})]}),l.jsx("div",{className:"retune-settings-body",children:zw.map(x=>l.jsxs("div",{className:"retune-settings-row",children:[l.jsx("span",{className:"retune-settings-label",children:x.label}),l.jsx("div",{className:"retune-key-group",children:x.keys.map((m,R)=>l.jsx(Ow,{children:m},R))})]},x.label))})]})]})})}var Vw=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),Hw=e=>Dt.createElement(Vw,{...e,ariaLabel:"square-behind-square-6, layers, copy 6, pages"},Dt.createElement("path",{d:"M7.75 7.75V5.75C7.75 4.64543 8.64543 3.75 9.75 3.75H18.25C19.3546 3.75 20.25 4.64543 20.25 5.75V14.26C20.25 15.3646 19.3546 16.26 18.25 16.26H16.25M3.75 9.75V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25H14.25C15.3546 20.25 16.25 19.3546 16.25 18.25V9.75C16.25 8.64543 15.3546 7.75 14.25 7.75H5.75C4.64543 7.75 3.75 8.64543 3.75 9.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Ww=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),Uw=e=>Dt.createElement(Ww,{...e,ariaLabel:"cross-medium, crossed medium, close"},Dt.createElement("path",{d:"M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),Zw=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),Xw=e=>Dt.createElement(Zw,{...e,ariaLabel:"broom, brush, clear, clean"},Dt.createElement("path",{d:"M11.3819 8.76362C10.4178 8.23201 9.20537 8.57956 8.66923 9.54116C8.4097 10.0066 8.15016 10.4721 7.89062 10.9376L18.1482 16.5903C18.405 16.1299 18.6618 15.6695 18.9184 15.2091C19.4571 14.2425 19.1063 13.0228 18.1372 12.4885L11.3819 8.76362Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"}),Dt.createElement("path",{d:"M12.9883 9.00512L15.8934 3.92207C16.5242 2.81843 17.9311 2.42534 19.0478 3.04074C20.1729 3.66076 20.5795 5.07016 19.9558 6.18872L17.0911 11.3267",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"}),Dt.createElement("path",{d:"M8.92867 11.8184C7.2347 13.8083 5.31367 14.409 2.75 13.8659C3.77941 20.6894 15.6222 25.1274 16.652 16.4253",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"})),Yw=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),Gw=e=>Dt.createElement(Yw,{...e,ariaLabel:"check-circle-2, done, confirm, save, success"},Dt.createElement("circle",{cx:"12",cy:"12",r:"9.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),Dt.createElement("path",{d:"M7.75 12.9231L10.5625 15.75L15.25 8.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),Kw=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),qw=e=>Dt.createElement(Kw,{...e,ariaLabel:"settings-gear-2, preferences"},Dt.createElement("path",{d:"M7.878 5.21415L7.17474 5.05186C6.58003 4.91462 5.95657 5.09343 5.525 5.525C5.09343 5.95657 4.91462 6.58003 5.05186 7.17474L5.21415 7.878C5.40122 8.6886 5.06696 9.53036 4.37477 9.99182L3.51965 10.5619C3.03881 10.8825 2.75 11.4221 2.75 12C2.75 12.5779 3.03881 13.1175 3.51965 13.4381L4.37477 14.0082C5.06696 14.4696 5.40122 15.3114 5.21415 16.122L5.05186 16.8253C4.91462 17.42 5.09343 18.0434 5.525 18.475C5.95657 18.9066 6.58003 19.0854 7.17474 18.9481L7.878 18.7858C8.6886 18.5988 9.53036 18.933 9.99182 19.6252L10.5619 20.4804C10.8825 20.9612 11.4221 21.25 12 21.25C12.5779 21.25 13.1175 20.9612 13.4381 20.4804L14.0082 19.6252C14.4696 18.933 15.3114 18.5988 16.122 18.7858L16.8253 18.9481C17.42 19.0854 18.0434 18.9066 18.475 18.475C18.9066 18.0434 19.0854 17.42 18.9481 16.8253L18.7858 16.122C18.5988 15.3114 18.933 14.4696 19.6252 14.0082L20.4804 13.4381C20.9612 13.1175 21.25 12.5779 21.25 12C21.25 11.4221 20.9612 10.8825 20.4804 10.5619L19.6252 9.99182C18.933 9.53036 18.5988 8.6886 18.7858 7.878L18.9481 7.17473C19.0854 6.58003 18.9066 5.95657 18.475 5.525C18.0434 5.09343 17.42 4.91462 16.8253 5.05186L16.122 5.21415C15.3114 5.40122 14.4696 5.06696 14.0082 4.37477L13.4381 3.51965C13.1175 3.03881 12.5779 2.75 12 2.75C11.4221 2.75 10.8825 3.03881 10.5619 3.51965L9.99182 4.37477C9.53036 5.06696 8.6886 5.40122 7.878 5.21415Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),Dt.createElement("path",{d:"M14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})),Qw=({children:e,size:t=24,ariaLabel:n,color:r,ariaHidden:o=!0,style:i,...s})=>Dt.createElement("svg",{...s,"aria-hidden":o,role:o?void 0:"img",width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:r,...i}},n&&!o&&Dt.createElement("title",null,n),e),Jw=e=>Dt.createElement(Qw,{...e,ariaLabel:"cursor-1, arrow"},Dt.createElement("path",{d:"M3.45158 4.72779L9.06387 20.5551C9.36964 21.4174 10.577 21.4503 10.9293 20.6059L13.6196 14.157C13.721 13.9138 13.9143 13.7205 14.1575 13.6191L20.6064 10.9288C21.4508 10.5765 21.4179 9.36915 20.5556 9.06338L4.72828 3.45109C3.93501 3.1698 3.17029 3.93452 3.45158 4.72779Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}));function Sf(e,t,n){const r=`rgba(${e}, ${t}, ${n}, 0.5)`;return`repeating-linear-gradient(-45deg, transparent, transparent 3px, ${r} 3px, ${r} 4px)`}var au=Sf(13,153,255),p1=Sf(255,168,36),e3=Sf(255,77,157);function h1(e,t,n){const r=parseFloat(t.paddingTop)||0,o=parseFloat(t.paddingRight)||0,i=parseFloat(t.paddingBottom)||0,s=parseFloat(t.paddingLeft)||0;switch(e){case"Top":return r>0?{top:n.top,left:n.left,width:n.width,height:r}:null;case"Bottom":return i>0?{top:n.bottom-i,left:n.left,width:n.width,height:i}:null;case"Left":return s>0?{top:n.top,left:n.left,width:s,height:n.height}:null;case"Right":return o>0?{top:n.top,left:n.right-o,width:o,height:n.height}:null}}function g1(e,t,n){const r=parseFloat(t.marginTop)||0,o=parseFloat(t.marginRight)||0,i=parseFloat(t.marginBottom)||0,s=parseFloat(t.marginLeft)||0;switch(e){case"Top":return r>0?{top:n.top-r,left:n.left-s,width:n.width+s+o,height:r}:null;case"Bottom":return i>0?{top:n.bottom,left:n.left-s,width:n.width+s+o,height:i}:null;case"Left":return s>0?{top:n.top,left:n.left-s,width:s,height:n.height}:null;case"Right":return o>0?{top:n.top,left:n.right,width:o,height:n.height}:null}}function t3(e,t){const n=[],r=t.display,o=r.includes("flex"),i=r.includes("grid");if(!o&&!i)return n;const s=Array.from(e.children).filter(f=>{const v=getComputedStyle(f);return v.position==="static"||v.position==="relative"});if(s.length<=1)return n;const a=e.getBoundingClientRect();if(o){const f=(t.flexDirection||"row").startsWith("column");for(let v=0;v<s.length-1;v++){const x=s[v].getBoundingClientRect(),m=s[v+1].getBoundingClientRect(),R=getComputedStyle(s[v]),y=getComputedStyle(s[v+1]);if(f){const g=parseFloat(R.marginBottom)||0,C=parseFloat(y.marginTop)||0,S=x.bottom+g,E=m.top-C;E>S+.5&&n.push({top:S,left:a.left,width:a.width,height:E-S})}else{const g=parseFloat(R.marginRight)||0,C=parseFloat(y.marginLeft)||0,S=x.right+g,E=m.left-C;E>S+.5&&n.push({top:a.top,left:S,width:E-S,height:a.height})}}return n}const c=[...s].sort((f,v)=>{const x=f.getBoundingClientRect(),m=v.getBoundingClientRect();return x.top-m.top||x.left-m.left}),u=[];let p=[],d=-1/0;for(const f of c){const v=f.getBoundingClientRect();v.top>d+5?(p.length>0&&u.push(p),p=[f],d=v.top):p.push(f)}p.length>0&&u.push(p);for(const f of u)for(let v=0;v<f.length-1;v++){const x=f[v].getBoundingClientRect(),m=f[v+1].getBoundingClientRect(),R=parseFloat(getComputedStyle(f[v]).marginRight)||0,y=parseFloat(getComputedStyle(f[v+1]).marginLeft)||0,g=x.right+R,C=m.left-y;C>g+.5&&n.push({top:a.top,left:g,width:C-g,height:a.height})}for(let f=0;f<u.length-1;f++){const v=u[f],x=u[f+1],m=Math.max(...v.map(y=>y.getBoundingClientRect().bottom+(parseFloat(getComputedStyle(y).marginBottom)||0))),R=Math.min(...x.map(y=>y.getBoundingClientRect().top-(parseFloat(getComputedStyle(y).marginTop)||0)));R>m+.5&&n.push({top:m,left:a.left,width:a.width,height:R-m})}return n.filter((f,v)=>{for(let x=0;x<v;x++){const m=n[x];if(Math.abs(f.top-m.top)<1&&Math.abs(f.left-m.left)<1&&Math.abs(f.width-m.width)<1&&Math.abs(f.height-m.height)<1)return!1}return!0})}function n3({element:e,hoveredProperty:t,revision:n}){const{rects:r,color:o}=h.useMemo(()=>{if(!t||!e)return{rects:[],color:au};const i=getComputedStyle(e),s=e.getBoundingClientRect();if(t==="paddingBlock"||t==="paddingInline")return{rects:(t==="paddingBlock"?["Top","Bottom"]:["Left","Right"]).map(u=>h1(u,i,s)).filter(Boolean),color:au};if(t==="marginBlock"||t==="marginInline")return{rects:(t==="marginBlock"?["Top","Bottom"]:["Left","Right"]).map(u=>g1(u,i,s)).filter(Boolean),color:p1};if(t.startsWith("padding")){const a=t.replace("padding",""),c=h1(a,i,s);return{rects:c?[c]:[],color:au}}else if(t.startsWith("margin")){const a=t.replace("margin",""),c=g1(a,i,s);return{rects:c?[c]:[],color:p1}}else{const a=t3(e,i);let c;return t==="gap"?c=a:t==="columnGap"?c=(i.flexDirection||"row").startsWith("column")?a.filter(p=>p.width>=p.height):a.filter(p=>p.height>=p.width):c=(i.flexDirection||"row").startsWith("column")?a.filter(p=>p.height>=p.width):a.filter(p=>p.width>=p.height),{rects:c,color:e3}}},[e,t,n]);return r.length===0?null:l.jsx(l.Fragment,{children:r.map((i,s)=>l.jsx("div",{className:"retune-box-model-rect",style:{position:"fixed",top:i.top,left:i.left,width:i.width,height:i.height,background:o,pointerEvents:"none",zIndex:2147483645}},s))})}var r3={port:9223,hotkey:"alt+d",fidelity:"standard",position:"bottom-right",force:!1},m1="__retune_bridge";function o3(e){const t=window[m1];if(t)return t;const n=new $b(e);return window[m1]=n,n}var v1=150;function i3({visible:e,children:t}){const[n,r]=h.useState("hidden"),o=h.useRef(!1),i=h.useRef(t);if(e&&(i.current=t),e&&!o.current?(o.current=!0,r("entering")):!e&&o.current&&(o.current=!1,r("exiting")),h.useEffect(()=>{if(n==="entering"){const a=setTimeout(()=>r("visible"),v1);return()=>clearTimeout(a)}if(n==="exiting"){const a=setTimeout(()=>r("hidden"),v1);return()=>clearTimeout(a)}},[n]),n==="hidden")return null;const s=n==="entering"?"entering":n==="exiting"?"exiting":"";return l.jsx("div",{className:`retune-panel-anim ${s}`,children:i.current})}var x1=768,s3={btn:"Button",nav:"Navigation",col:"Column",img:"Image",sm:"Small",md:"Medium",lg:"Large",xs:"Extra Small",xl:"Extra Large",hdr:"Header",ftr:"Footer",cta:"Call to Action",desc:"Description",msg:"Message",info:"Information",bg:"Background",txt:"Text",pg:"Page",sec:"Section",el:"Element",opt:"Option",val:"Value",err:"Error",warn:"Warning",num:"Number",prev:"Previous",curr:"Current",temp:"Temporary"};function ws(e){return e.split("-").map(t=>s3[t]||t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function l3(e,t){if(e.includes("--")){const n=e.split("--").pop();return ws(n)}if(e.includes("__")){const n=e.split("__").pop();return ws(n)}if(t&&e.startsWith(t+"-")){const n=e.slice(t.length+1);return ws(n)}return ws(e)}function a3(e){const t=e;if(!t.classList||t.classList.length===0)return null;const n=[];for(const i of t.classList)Lr(i)||n.push(i);if(n.length===0)return null;const r=n.sort().map(i=>`.${CSS.escape(i)}`).join("");let o;try{o=document.querySelectorAll(r).length}catch{o=0}return o<=1?null:{label:"All instances",selector:r,count:o}}function c3(e){const t=e.tagName.toLowerCase();let n=e.parentElement;for(;n&&n!==document.body;){for(const r of n.classList){if(Lr(r))continue;const{score:o}=yf(r);if(o>=.65)continue;const i=`.${CSS.escape(r)} ${t}`;let s;try{s=document.querySelectorAll(i).length}catch{s=0}if(s>1&&s<=20)return{label:"All instances",selector:i,count:s}}n=n.parentElement}return null}function u3(e){const t=new Map;if(!(e!=null&&e.components))return t;for(const[n,r]of Object.entries(e.components))if(r!=null&&r.props){for(const[o,i]of Object.entries(r.props))if(i!=null&&i.class_map)for(const[s,a]of Object.entries(i.class_map))t.set(a,{propName:o,value:s,componentName:n})}return t}function cu(e,t,n=[],r){const o=u3(r??null),i=e.filter(c=>c.verdict==="semantic"||o.has(c.selector.replace(/^\./,"")));if(i.length===0){const c=a3(t);if(c){const p=[c];return Vl(p,n),p.push({label:"This instance",selector:null,count:1,kind:"element"}),p}const u=c3(t);if(u){const p=[u];return Vl(p,n),p.push({label:"This instance",selector:null,count:1,kind:"element"}),p}if(n.length>0){const p=[];return Vl(p,n),p.push({label:"This instance",selector:null,count:1,kind:"element"}),p}return[{label:"This instance",selector:null,count:1,kind:"element"}]}const s=[],a=[];for(const c of i){const u=c.selector.replace(/^\./,""),p=a.length>0?a[a.length-1]:void 0;a.push(u);const d=a.slice().sort().map(m=>`.${CSS.escape(m)}`).join("");let f;try{f=document.querySelectorAll(d).length}catch{f=0}const v=o.get(u),x=v?ws(v.value):l3(u,p);s.push({label:x,selector:d,count:f,kind:"class"})}return Vl(s,n),s.push({label:"This instance",selector:null,count:1,kind:"element"}),s}function Vl(e,t){const n=e.length>0?e[e.length-1].count:1/0;for(const r of t)r.count>=n||r.count<=1||e.some(o=>o.count===r.count&&o.selector===r.fullSelector)||e.push({label:r.label,selector:r.fullSelector,count:r.count,kind:"ancestor"})}function d3(e={}){if(!e.force)return null;const[t,n]=h.useState(()=>typeof window<"u"?window.innerWidth>=x1:!0);return h.useEffect(()=>{const r=window.matchMedia(`(min-width: ${x1}px)`),o=i=>n(i.matches);return n(r.matches),r.addEventListener("change",o),()=>r.removeEventListener("change",o)},[]),t?l.jsx(v3,{...e}):null}function f3({size:e=20}){return l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z",stroke:"currentColor",strokeWidth:"1.25"})})}function p3(e){const[t,n]=h.useState(e.position);return h.useEffect(()=>{function r(){if(e.type==="element"&&e.selector&&e.anchorOffset)try{const o=document.querySelector(e.selector);if(o){const i=o.getBoundingClientRect();n({x:i.left+e.anchorOffset.x,y:i.top+e.anchorOffset.y});return}}catch{}}return document.addEventListener("scroll",r,!0),window.addEventListener("resize",r),()=>{document.removeEventListener("scroll",r,!0),window.removeEventListener("resize",r)}},[e.selector,e.anchorOffset,e.type]),t}function h3({comment:e,index:t,isPopoverOpen:n,isAreaResize:r,onAreaResize:o,onAreaResizeLive:i,onOpen:s}){const a=h.useRef(null),c=h.useRef(null),u=h.useRef(n);u.current=n;const p=p3(e);h.useEffect(()=>{const f=a.current;if(!f)return;const v=()=>{if(u.current)return;const m=c.current;if(!m)return;const R=document.createElement("span");R.style.cssText="position:absolute;visibility:hidden;font-size:12px;line-height:1.4;font-family:inherit;white-space:nowrap;",R.textContent=e.text,f.appendChild(R);const y=R.offsetWidth;R.remove();const g=Math.min(y+24,200),C=m.offsetHeight+10,S=parseFloat(f.style.left)||0,E=window.innerWidth-g-12,P=Math.min(S,E),b=S-P+4;f.style.width=g+"px",f.style.height=C+"px",f.style.transform=`translate(-${b}px, -${C}px)`,f.classList.add("expanded")},x=()=>{f.style.width="",f.style.height="",f.style.transform="",f.classList.remove("expanded")};return f.addEventListener("mouseenter",v),f.addEventListener("mouseleave",x),()=>{f.removeEventListener("mouseenter",v),f.removeEventListener("mouseleave",x)}},[e.text]),h.useEffect(()=>{const f=a.current;f&&n&&(f.style.width="",f.style.height="",f.style.transform="",f.classList.remove("expanded"))},[n]);const d=h.useRef(null);return h.useEffect(()=>{if(!r||!o)return;const f=a.current;if(!f)return;const v=R=>{R.preventDefault(),R.stopPropagation(),d.current={startX:R.clientX,startY:R.clientY,dragging:!1}},x=R=>{if(!d.current)return;const y=Math.abs(R.clientX-d.current.startX),g=Math.abs(R.clientY-d.current.startY);(y>3||g>3)&&(d.current.dragging=!0),d.current.dragging&&(f.style.left=R.clientX+"px",f.style.top=R.clientY+"px",i==null||i({x:R.clientX,y:R.clientY}))},m=R=>{if(!d.current)return;const y=d.current.dragging;d.current=null,y?o({x:R.clientX,y:R.clientY}):s()};return f.addEventListener("pointerdown",v),document.addEventListener("pointermove",x,!0),document.addEventListener("pointerup",m,!0),()=>{f.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",x,!0),document.removeEventListener("pointerup",m,!0)}},[r,o,s]),l.jsxs("div",{ref:a,className:`retune-comment-marker interactive${n?" popover-open":""}${r?" area-resize":""}`,style:{left:p.x,top:p.y,cursor:r?"nwse-resize":void 0},onPointerUp:r?void 0:f=>{f.stopPropagation(),s()},children:[l.jsx("span",{className:"retune-comment-marker-num",children:t+1}),l.jsx("span",{ref:c,className:"retune-comment-marker-preview",children:e.text})]})}function g3({comment:e,interactive:t,liveBR:n,onResize:r}){const o=e.area,[i,s]=h.useState(null),[a,c]=h.useState(o);h.useEffect(()=>{c(o)},[o.x,o.y,o.width,o.height]),h.useEffect(()=>{if(!i)return;const d=v=>{const x=v.clientX-i.startX,m=v.clientY-i.startY,R=i.origArea;if(i.handle==="tl"){const y=R.x+x,g=R.y+m;c({x:y,y:g,width:Math.max(20,R.width-x),height:Math.max(20,R.height-m)})}else c({x:R.x,y:R.y,width:Math.max(20,R.width+x),height:Math.max(20,R.height+m)})},f=()=>{s(null),r(a)};return document.addEventListener("pointermove",d,!0),document.addEventListener("pointerup",f,!0),()=>{document.removeEventListener("pointermove",d,!0),document.removeEventListener("pointerup",f,!0)}},[i,a,r]);const p=12/2;return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"retune-comment-area-outline",style:n?{left:a.x,top:a.y,width:Math.max(20,n.x-a.x),height:Math.max(20,n.y-a.y)}:{left:a.x,top:a.y,width:a.width,height:a.height}}),t&&l.jsx(l.Fragment,{children:l.jsx("div",{className:"retune-area-handle",style:{left:a.x-p,top:a.y-p},onPointerDown:d=>{d.preventDefault(),d.stopPropagation(),s({handle:"tl",startX:d.clientX,startY:d.clientY,origArea:{...a}})}})})]})}function m3({size:e=20}){const t=h.useRef(null);return h.useEffect(()=>{const n=t.current,r=n==null?void 0:n.closest(".retune-toolbar-collapse-btn");if(!n||!r)return;const o=[["sq1"],["sq2"],["sq3"],["sq4"],["sq5"],["sq6"],["sq7"],["sq8"],["sq9"],["sq10"],["sq11"],["sq12"],["sq13L","sq13R"],["sq14L","sq14R"]],i=45,s=300,c=o.length*i+s+200;let u=!1,p=[];const d=window.matchMedia("(color-gamut: p3)").matches;function f(){const g=Math.random()*360,C=window.matchMedia("(prefers-color-scheme: dark)").matches,S=C?.7+Math.random()*.15:.6+Math.random()*.1,E=d?.3+Math.random()*.1:.2+Math.random()*.08;return d?`oklch(${S} ${E} ${g})`:`hsl(${g}, 100%, ${C?50+Math.random()*25:50+Math.random()*15}%)`}function v(){p.forEach(clearTimeout),p=[]}function x(){n.querySelectorAll("rect").forEach(g=>{g.style.transition="none",g.style.fill="",g.removeAttribute("filter")})}function m(){if(!u)return;const g=f();o.forEach((C,S)=>{p.push(setTimeout(()=>{u&&C.forEach(E=>{const P=n.querySelector(`#${E}`);P&&(P.style.transition="none",P.style.fill=g,P.setAttribute("filter","url(#retune-bloom)"),P.getBoundingClientRect(),P.style.transition=`fill ${s}ms ease-out`,P.style.fill="",p.push(setTimeout(()=>P.removeAttribute("filter"),80)))})},S*i))}),p.push(setTimeout(m,c))}function R(){u=!0,m()}function y(){u=!1,v(),x()}return r.addEventListener("mouseenter",R),r.addEventListener("mouseleave",y),()=>{r.removeEventListener("mouseenter",R),r.removeEventListener("mouseleave",y),v()}},[]),l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("defs",{children:l.jsxs("filter",{id:"retune-bloom",x:"-100%",y:"-100%",width:"300%",height:"300%",colorInterpolationFilters:"sRGB",children:[l.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"wideBlur"}),l.jsx("feColorMatrix",{in:"wideBlur",type:"matrix",result:"wideGlow",values:"1.8 0 0 0 0  0 1.8 0 0 0  0 0 1.8 0 0  0 0 0 0.6 0"}),l.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.8",result:"tightBlur"}),l.jsx("feColorMatrix",{in:"tightBlur",type:"matrix",result:"tightGlow",values:"2 0 0 0 0.1  0 2 0 0 0.1  0 0 2 0 0.1  0 0 0 0.9 0"}),l.jsx("feColorMatrix",{in:"SourceGraphic",type:"matrix",result:"hotCore",values:"1 0 0 0 0.4  0 1 0 0 0.4  0 0 1 0 0.4  0 0 0 1 0"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"wideGlow"}),l.jsx("feMergeNode",{in:"tightGlow"}),l.jsx("feMergeNode",{in:"hotCore"})]})]})}),l.jsxs("g",{ref:t,children:[l.jsx("rect",{id:"sq1",x:"3",y:"15",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq2",x:"3",y:"13",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq3",x:"3",y:"11",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq4",x:"3",y:"9",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq5",x:"3",y:"7",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq6",x:"3",y:"5",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq7",x:"5",y:"3",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq8",x:"7",y:"3",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq9",x:"9",y:"3",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq10",x:"11",y:"5",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq11",x:"11",y:"7",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq12",x:"11",y:"15",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq13L",x:"9",y:"13",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq13R",x:"13",y:"13",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq14L",x:"7",y:"11",width:"2",height:"2",fill:"currentColor"}),l.jsx("rect",{id:"sq14R",x:"15",y:"11",width:"2",height:"2",fill:"currentColor"})]})]})}function y1({position:e,initialText:t,onSubmit:n,onCancel:r,onDelete:o,onTextChange:i}){const[s,a]=h.useState(t),c=h.useRef(null),u=!!o,p=h.useCallback(()=>{const E=c.current;E&&(E.style.height="auto",E.style.height=E.scrollHeight+"px")},[]),d=h.useRef(null);h.useEffect(()=>{setTimeout(()=>{var E;(E=c.current)==null||E.focus(),p(),d.current&&(d.current.style.animation="none")},200)},[p]);const f=()=>{const E=s.trim();E&&n(E)},v=E=>{E.stopPropagation(),E.nativeEvent.stopImmediatePropagation(),E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),f()),E.key==="Escape"&&(E.preventDefault(),r())},x=280,m=140,R=window.innerWidth,y=window.innerHeight;let g=e.x+16,C=e.y-8;g+x>R-12&&(g=e.x-x-16),g<12&&(g=12),C+m>y-12&&(C=e.y-m-8),C<12&&(C=12);const S={position:"fixed",left:g,top:C,zIndex:2147483647};return l.jsxs("div",{ref:d,className:"retune-comment-popover",style:S,onPointerDownCapture:E=>E.stopPropagation(),onClickCapture:E=>E.stopPropagation(),onPointerDown:E=>E.stopPropagation(),onClick:E=>E.stopPropagation(),children:[l.jsx("textarea",{ref:c,className:"retune-comment-textarea",value:s,onChange:E=>{a(E.target.value),i==null||i(E.target.value),p()},onKeyDown:v,placeholder:"Add a comment...",rows:3}),l.jsxs("div",{className:"retune-comment-actions",children:[u&&l.jsx("button",{className:"retune-comment-delete-btn",onPointerUp:o,children:"Delete"}),l.jsx("div",{style:{flex:1}}),l.jsx("button",{className:"retune-comment-cancel-btn",onPointerUp:r,children:"Cancel"}),l.jsx("button",{className:"retune-comment-submit-btn",onPointerUp:f,disabled:!s.trim(),children:u?"Save":"Comment"})]})]})}function v3(e){var $f;const t={...r3,...e},[n,r]=h.useState(!1),[o,i]=h.useState("edit"),[s,a]=h.useState(null),[c,u]=h.useState(0),[p,d]=h.useState(!1),[f,v]=h.useState(!1),[x,m]=h.useState(()=>{try{const j=localStorage.getItem("retune-fidelity");if(j==="minimal"||j==="standard"||j==="full")return j}catch{}return t.fidelity}),R=h.useCallback(j=>{m(j);try{localStorage.setItem("retune-fidelity",j)}catch{}},[]),y=h.useRef(x);y.current=x;const[g,C]=h.useState(!1),[S,E]=h.useState(null),[P,b]=h.useState(0),[T,W]=h.useState(0),[N,re]=h.useState(void 0),[D,k]=h.useState(null),[M,z]=h.useState(null),B=h.useRef(!1),ee=h.useRef(!1),H=h.useRef(null),[se,J]=h.useState(null),[ie,de]=h.useState(!1);H.current&&!se&&J(H.current);const Re=h.useCallback(async()=>{if(!B.current){B.current=!0;try{const j=await fetch("/retune.manifest.json",{cache:"no-store"});if(j.ok){const L=await j.json();L&&(L.components||L.tokens)?(H.current=L,J(L),L.tokens&&X2(L)):B.current=!1}else B.current=!1}catch{B.current=!1}ee.current=!0}},[]),[He,Ke]=h.useState(!1),ve=h.useRef(null),[te,Ie]=h.useState("design"),[dt,Je]=h.useState(!1),[St,ft]=h.useState(!1),[st,mt]=h.useState(!1),Fn=h.useRef(null),[Xt,pn]=h.useState(()=>{try{const j=localStorage.getItem("retune-theme");if(j==="system"||j==="light"||j==="dark")return j}catch{}return"system"}),Wt=h.useCallback(j=>{pn(j);try{localStorage.setItem("retune-theme",j)}catch{}},[]);h.useEffect(()=>{if(!D)return;const j=D.getRootNode(),L=j instanceof ShadowRoot?j.host:null;if(!L)return;const $=Xt==="dark"||Xt==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(L.classList.toggle("dark",$),Xt==="system"){const _=window.matchMedia("(prefers-color-scheme: dark)"),F=q=>L.classList.toggle("dark",q.matches);return _.addEventListener("change",F),()=>_.removeEventListener("change",F)}},[Xt,D]);const[Tt,Bn]=h.useState(()=>{try{const j=localStorage.getItem("retune-panel-side");if(j==="left"||j==="right")return j}catch{}return t.position.includes("right")?"right":"left"}),rt=h.useRef(null),lt=h.useRef(null),tn=h.useRef(null),be=h.useRef(null),[Fe,$e]=h.useState(!1),[vt,At]=h.useState(!1),[_t,Yt]=h.useState([]),gt=h.useRef([]),Pt=h.useRef([]),Mn=h.useRef(!0),[Ur,$r]=h.useState([]),[dr,Cr]=h.useState([]),[fr,sn]=h.useState(0),yn=h.useRef(0);yn.current=fr;const Se=h.useRef([]);Se.current=dr;const fe=(($f=dr[fr])==null?void 0:$f.selector)??null,we=h.useRef(null);we.current=fe;const[Be,yt]=h.useState({}),[It,Rt]=h.useState(null),pt=h.useRef(null);pt.current=It;const hn=h.useRef(null),qe=h.useRef(null),O=h.useRef(null),V=h.useRef(null),Q=h.useRef(new Sb),[pe,ke]=h.useState([]),[Ne,Ye]=h.useState(0),[Le,Me]=h.useState(null),[Pe,Ve]=h.useState(null),[De,at]=h.useState(null),Lt=h.useRef(new yb),$t=h.useRef(null),Te=h.useRef(null);Te.current=s;const We=h.useRef(()=>{}),Vt=h.useRef(()=>{});h.useEffect(()=>{const j=ab();hn.current=j,k(j.container);const L=new wb;O.current=L;const $=new kb;V.current=$;const _=o3(t.port);if($t.current=_,_.onRequest(async(Z,I)=>{var K,ue,me,je;const ne=V.current,le=O.current;switch(Z){case"getSelection":{const Ze=Te.current;if(!Ze)return null;const{element:Ae,rect:ct,reactProps:ge,...et}=Ze;return{...et,rect:{top:ct.top,left:ct.left,width:ct.width,height:ct.height}}}case"getPendingChanges":return ne.getPendingChanges();case"getCollapsedChanges":return ne.getPendingChanges().map(Ze=>({...Ze,changes:pd(Ze.changes)}));case"getEnrichedChanges":{const{scanDesignTokens:Ze}=await hh(async()=>{const{scanDesignTokens:ge}=await Promise.resolve().then(()=>_3);return{scanDesignTokens:ge}},void 0),{enrichPropertyChanges:Ae}=await hh(async()=>{const{enrichPropertyChanges:ge}=await Promise.resolve().then(()=>P3);return{enrichPropertyChanges:ge}},void 0),ct=Ze();return ne.getPendingChanges().map(ge=>({...ge,changes:Ae(pd(ge.changes),ct,ge.selector)}))}case"getFormattedChanges":return qc(ne.getPendingChanges(),(I==null?void 0:I.fidelity)||y.current,Q.current.getAll(),H.current);case"getComments":return Q.current.getAll();case"clearComments":Q.current.clear(),ke([]),Ye(0);return;case"reloadManifest":return B.current=!1,await Re(),{loaded:!!H.current};case"clearChanges":{ae.current=[],ce.current=[],he.current=[],Ce.current=[],dn.current=[],Et.current=[],Ht.current=new WeakMap;for(const[,Ze]of ln.current)for(const[Ae,ct]of Ze){const ge=Ae;ct?ge.style.order=ct:ge.style.removeProperty("order")}ln.current.clear();for(const[,Ze]of Kt.current)for(const[Ae]of Ze){const ct=Ae;ct.style.removeProperty("translate"),ct.style.removeProperty("transition"),((K=ct.getAttribute("style"))==null?void 0:K.trim())===""&&ct.removeAttribute("style")}if(Kt.current.clear(),jt.current=new WeakMap,pt.current){const Ze=nn.current,Ae=(ue=Te.current)==null?void 0:ue.element;if(Ae!=null&&Ae.style&&Ze.props.length>0){for(const ct of Ze.props){const ge=ct.replace(/[A-Z]/g,et=>`-${et.toLowerCase()}`);Ae.style.removeProperty(ge)}((me=Ae.getAttribute("style"))==null?void 0:me.trim())===""&&Ae.removeAttribute("style")}nn.current={selector:"",props:[]},Rt(null),pt.current=null}return le.clearAll(),ne.clear(),Q.current.clear(),ke([]),Ye(0),a(null),Te.current=null,(je=qe.current)==null||je.clearSelection(),We.current(),b(Ze=>Ze+1),{ok:!0}}default:throw new Error(`Unknown method: ${Z}`)}}),_.onUpdate(Z=>z(Z)),_.connect(),$.restore()){L.attach();const Z=[];for(const ne of $.getPendingChanges())for(const le of ne.changes)if(le.property==="__delete")try{const K=document.querySelector(ne.selector);if(K){const ue=K.parentNode;ue&&(ae.current.push({element:K,parent:ue,nextSibling:K.nextSibling}),K.remove())}}catch{}else if(le.property==="__reorder")try{const K=document.querySelector(ne.selector);if(K!=null&&K.parentElement){const ue=K.parentElement,me=Array.from(ue.children),je=me.indexOf(K),Ze=parseInt(le.to);if(!isNaN(Ze)&&je!==Ze){const Ae=getComputedStyle(ue).display,et=Ae==="flex"||Ae==="inline-flex"||(Ae==="grid"||Ae==="inline-grid")?"order":"translate";if(jt.current.has(ue)||jt.current.set(ue,et),et==="order"){vc(ue);const Xe=ci(ue),tt=Xe.indexOf(K);if(tt!==-1){const[Ct]=Xe.splice(tt,1);Xe.splice(Math.min(Ze,Xe.length),0,Ct);const ot=me.map(ze=>({element:ze,prevOrder:ze.style.order,prevTranslate:""}));for(let ze=0;ze<Xe.length;ze++)Xe[ze].style.order=String(ze);dn.current.push(ot)}}else{dl(ue),Ln.current.has(ue)||Ln.current.set(ue,[...me]);const Xe=Ln.current.get(ue),tt=Xe.indexOf(K);if(tt!==-1){const Ct=me.map(ze=>({element:ze,prevOrder:"",prevTranslate:ze.style.translate||""})),[ot]=Xe.splice(tt,1);Xe.splice(Math.min(Ze,Xe.length),0,ot),fl(ue),dn.current.push(Ct)}}}}}catch{}else if(le.property==="__text")try{const K=document.querySelector(ne.selector);if(K){const ue=K.innerHTML;K.querySelector("*")!==null||(K.innerHTML=le.to.replace(/\n/g,"<br>"),he.current.push({element:K,originalHTML:ue,newHTML:K.innerHTML}))}}catch{}else if(le.property==="__reparent")try{const K=document.querySelector(ne.selector);if(!K)continue;const ue=le.to.lastIndexOf("@");if(ue===-1)continue;const me=le.to.slice(0,ue),je=parseInt(le.to.slice(ue+1),10),Ze=document.querySelector(me);if(!Ze||K.parentElement===Ze)continue;const Ae=K.parentElement;if(!Ae)continue;const ct=K.nextElementSibling,ge=Array.from(Ze.children),et=je<ge.length?ge[je]:null;et?Ze.insertBefore(K,et):Ze.appendChild(K);const Xe=K,tt=new MutationObserver(Ct=>{for(const ot of Ct)if(ot.type==="childList"){if(ot.target===Ae){for(const ze of ot.addedNodes)if(ze instanceof Element&&ze!==Xe&&ze.tagName===Xe.tagName&&ze.className===Xe.className&&ze.textContent===Xe.textContent)try{Ae.removeChild(ze)}catch{}}if(ot.target===Ze){for(const ze of ot.removedNodes)if(ze===Xe&&!Xe.parentElement)try{const ut=Array.from(Ze.children),it=je<ut.length?ut[je]:null;it?Ze.insertBefore(Xe,it):Ze.appendChild(Xe)}catch{}}}});tt.observe(Ae,{childList:!0}),tt.observe(Ze,{childList:!0}),gt.current.push({element:K,oldParent:Ae,oldNextSibling:ct,newParent:Ze,observer:tt}),Z.push({element:K,newParent:Ze,insertIndex:je})}catch{}else L.applyChange(ne.selector,le.property,le.to);Z.length>0&&Yt(Z);const I=$.getPendingChanges();u(I.filter(ne=>!ne.changes.some(le=>le.property==="__bulkOf")).length),d($.canUndo),v($.canRedo)}const F=Q.current;F.restore()&&(ke(F.getAll()),Ye(F.count));const q=xb(j.root,{onHover:()=>{},shouldBlockClick:()=>Po.current(),onSelect:Z=>{var Ae,ct;if(Bt.current==="comment"){if(rr.current||Gt.current)return;const ge=pr.current,et=Vn(Z),Xe=xt(Z),tt=[et];let Ct=Z.parentElement;for(let it=0;it<3&&Ct&&Ct!==document.body;it++)tt.unshift(Vn(Ct)),Ct=Ct.parentElement;const ot=tt.join(" > "),ze=Z.getBoundingClientRect(),ut={position:{x:ge.x,y:ge.y},type:"element",selector:ot,anchorOffset:{x:ge.x-ze.left,y:ge.y-ze.top},elementInfo:{tagName:Z.tagName.toLowerCase(),componentName:Xe,componentPath:[],classes:Array.from(Z.classList),textContent:(Z.textContent||"").slice(0,80).trim()||null}};Gt.current=!0,mn.current="",Pr.current="",at(ut),(Ae=qe.current)==null||Ae.clearSelection();return}const I=Lh(Z);pt.current&&gn(),yt(Ub(Z));const ne=ra(Z);$r(ne);const le=Gc(Z),K=cu(ne,Z,le,H.current);Cr(K),Se.current=K;const ue=K.length>=2?K.length-2:0;sn(ue),yn.current=ue;const me=((ct=K[ue])==null?void 0:ct.selector)??null;we.current=me;const je=K[ue];je!=null&&je.selector&&qe.current&&qe.current.showScopeHighlights(je.selector,Z);const Ze=me&&me.includes(" ");if(me&&!Ze){const ge=Jc(Z,me);I.computedStyles=ge.styles,re(ge.ownedProperties)}else re(void 0);if(L)for(const ge of L.getChanges()){if(/:(hover|focus|active)$/.test(ge.selector))continue;const et=ge.selector;try{Z.matches(et)&&(I.computedStyles[ge.property]=ge.value)}catch{}}a(I),!B.current&&I.reactProps&&Re(),Je(!1),ft(!1),mt(!1),Te.current=I,$.track(I.selector,I.tagName,I.textContent,I.classes,I.reactComponents,I.computedStyles,I.sourceFile,I.stylingApproach,I.inlineStyles,I.elementId,I.accessibleName,I.parentContext,I.childSummary,I.domPath,I.nearbySiblings,I.position,I.reactProps);for(const ge of K)ge.selector&&$.track(ge.selector,I.tagName,I.textContent,I.classes,I.reactComponents,I.computedStyles,I.sourceFile,I.stylingApproach,I.inlineStyles,I.elementId,I.accessibleName,I.parentContext,I.childSummary,I.domPath,I.nearbySiblings,I.position)},onDoubleClick:Z=>{var Ae,ct;const I=Z;if(!((Ae=I.textContent)!=null&&Ae.trim())||I.closest("[data-retune-host]")||I.hasAttribute("data-retune-host"))return;(ct=qe.current)==null||ct.suspend();const ne=I.textContent,le=I.innerHTML;I.contentEditable="true",I.style.outline="none",I.style.cursor="text",I.focus();const K=()=>{var ge,et;I.contentEditable="false",I.style.removeProperty("outline"),I.style.removeProperty("cursor"),I.removeEventListener("keydown",je),I.removeEventListener("blur",Ze),(ge=qe.current)==null||ge.resume(),(et=qe.current)==null||et.refreshSelection()},ue=()=>{var et;I.style.removeProperty("outline"),I.style.removeProperty("cursor"),((et=I.getAttribute("style"))==null?void 0:et.trim())===""&&I.removeAttribute("style");const ge=I.innerHTML.replace(/<br\s*\/?>/gi,`
`).replace(/<\/div><div>/gi,`
`).replace(/<\/p><p>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim();if(ge!==ne){const Xe=zn(I),tt=V.current;if(tt){const Ct=Te.current;tt.track(Xe,I.tagName.toLowerCase(),ne,Array.from(I.classList),(Ct==null?void 0:Ct.reactComponents)??[],{__text:ne||""},(Ct==null?void 0:Ct.sourceFile)??null,(Ct==null?void 0:Ct.stylingApproach)??void 0,null,I.id||null,null,null,null,(Ct==null?void 0:Ct.domPath)??"",null,{x:0,y:0,width:0,height:0}),tt.ensureOriginalValue(Xe,"__text",ne||""),tt.breakCoalescing(),tt.recordChange(Xe,"__text",ge),tt.persist()}he.current.push({element:I,originalHTML:le,newHTML:I.innerHTML}),Ce.current=[],We.current(),b(Ct=>Ct+1)}K()},me=()=>{I.innerHTML=le,K()},je=ge=>{if(ge.stopPropagation(),ge.key==="Escape")ge.preventDefault(),me();else if(ge.key==="Enter"){ge.preventDefault();const et=window.getSelection();if(et&&et.rangeCount>0){const Xe=et.getRangeAt(0);Xe.deleteContents();const tt=document.createElement("br");Xe.insertNode(tt),Xe.setStartAfter(tt),Xe.setEndAfter(tt),et.removeAllRanges(),et.addRange(Xe)}}},Ze=()=>{setTimeout(ue,100)};I.addEventListener("keydown",je),I.addEventListener("blur",Ze)},onResizePreview:(Z,I,ne)=>{const le=O.current;if(!le)return;const K=we.current??zn(Z);le.applyChange(K,I,ne);const ue=Lt.current;ue.active||ue.start(),ue.set(I,ne)},onResize:(Z,I,ne)=>{const le=V.current,K=O.current;if(!le||!K)return;const ue=we.current??zn(Z),me=Te.current;me&&le.track(ue,me.tagName,me.textContent,me.classes,me.reactComponents,me.computedStyles,me.sourceFile,me.stylingApproach,me.inlineStyles,me.elementId,me.accessibleName,me.parentContext,me.childSummary,me.domPath,me.nearbySiblings,me.position,me.reactProps),le.recordChange(ue,I,ne),K.applyChange(ue,I,ne),Lt.current.end(),We.current(),Vt.current(),b(je=>je+1)},onRepositionPreview:(Z,I,ne)=>{const le=O.current;if(!le)return;const K=we.current??zn(Z);le.applyChange(K,I,ne);const ue=Lt.current;ue.active||ue.start(),ue.set(I,ne)},onReposition:(Z,I,ne)=>{const le=V.current,K=O.current;if(!le||!K)return;const ue=we.current??zn(Z),me=Te.current;me&&le.track(ue,me.tagName,me.textContent,me.classes,me.reactComponents,me.computedStyles,me.sourceFile,me.stylingApproach,me.inlineStyles,me.elementId,me.accessibleName,me.parentContext,me.childSummary,me.domPath,me.nearbySiblings,me.position,me.reactProps),le.recordChange(ue,I,ne),K.applyChange(ue,I,ne),Lt.current.end(),We.current(),Vt.current(),b(je=>je+1)},onCanvasReorder:(Z,I,ne)=>{Mf(Z,I,ne)},onCanvasReparent:(Z,I,ne)=>{Tf(Z,I,ne)},onCancel:()=>{_r()}});return qe.current=q,()=>{q.destroy(),L.destroy(),cb(j.host)}},[]);const nn=h.useRef({selector:"",props:[]}),gn=h.useCallback(()=>{var $,_;const j=($=Te.current)==null?void 0:$.element,L=nn.current;if(j!=null&&j.style&&L.props.length>0){for(const F of L.props){const q=F.replace(/[A-Z]/g,Z=>`-${Z.toLowerCase()}`);j.style.removeProperty(q)}((_=j.getAttribute("style"))==null?void 0:_.trim())===""&&j.removeAttribute("style")}nn.current={selector:"",props:[]},Rt(null),pt.current=null},[]);h.useEffect(()=>{Re()},[Re]);const Xn=h.useCallback(()=>{var j,L;r(!0),(j=qe.current)==null||j.activate(),(L=O.current)==null||L.attach()},[]),_r=h.useCallback(()=>{var j;pt.current&&gn(),r(!1),a(null),Te.current=null,Je(!1),ft(!1),mt(!1),(j=qe.current)==null||j.deactivate()},[gn]),Yn=h.useCallback(()=>{r(j=>{var L,$,_;return j?(pt.current&&gn(),a(null),Te.current=null,Je(!1),ft(!1),mt(!1),(L=qe.current)==null||L.deactivate()):(($=qe.current)==null||$.activate(),(_=O.current)==null||_.attach()),!j})},[gn]),Rn=h.useCallback(()=>{const j=V.current;if(!j)return;const $=j.getPendingChanges().filter(_=>!_.changes.some(F=>F.property==="__bulkOf")).length;u($),d(j.canUndo),v(j.canRedo),j.persist()},[]);We.current=Rn;const Gn=h.useCallback(()=>{const j=Q.current;ke(j.getAll()),Ye(j.count)},[]),Vn=h.useCallback(j=>{if(j.id)return"#"+CSS.escape(j.id);let L;const $=Array.from(j.classList).filter(F=>!F.startsWith("_")&&!/^[a-z]{1,3}[A-Za-z0-9_]{8,}$/.test(F));$.length>0?L="."+$.map(F=>CSS.escape(F)).join("."):L=j.tagName.toLowerCase();const _=j.parentElement;if(_&&Array.from(_.children).filter(q=>q===j?!0:q.id||j.id?!1:$.length>0?$.every(Z=>q.classList.contains(Z)):q.tagName===j.tagName).length>1){const q=Array.from(_.children).indexOf(j)+1;L+=`:nth-child(${q})`}return L},[]),xt=h.useCallback(j=>{var _,F,q;const L=Object.keys(j).find(Z=>Z.startsWith("__reactFiber$"));if(!L)return null;let $=(_=j[L])==null?void 0:_.return;for(;$;){if(typeof $.type=="function"||typeof $.type=="object"){const Z=((F=$.type)==null?void 0:F.displayName)||((q=$.type)==null?void 0:q.name);if(Z&&Z.length>2&&!Z.startsWith("_")&&!/^(Fragment|Suspense|StrictMode|Provider|Consumer|Context)/.test(Z))return Z}$=$.return}return null},[]),Bt=h.useRef(o);Bt.current=o,h.useEffect(()=>{var j;n&&((j=qe.current)==null||j.setCommentMode(o==="comment"))},[o,n]);const pr=h.useRef({x:0,y:0}),rr=h.useRef(!1);h.useEffect(()=>{const j=L=>{pr.current={x:L.clientX,y:L.clientY}};return document.addEventListener("click",j,!0),()=>document.removeEventListener("click",j,!0)},[]);const zt=h.useRef(null),Gt=h.useRef(!1),mn=h.useRef(""),Pr=h.useRef(""),Gi=h.useCallback(()=>{var $;const j=($=hn.current)==null?void 0:$.root.querySelector(".retune-comment-popover");if(!j||j.classList.contains("shaking"))return;j.classList.add("shaking");const L=()=>{j.classList.remove("shaking"),j.removeEventListener("animationend",L)};j.addEventListener("animationend",L)},[]),Ki=h.useCallback(()=>Gt.current?rr.current?!0:mn.current!==Pr.current?(Gi(),!0):(Gt.current=!1,mn.current="",Pr.current="",at(null),Me(null),!1):!1,[Gi]),Po=h.useRef(Ki);Po.current=Ki,h.useEffect(()=>{if(!n)return;const j=L=>{var F,q;const $=L.composedPath()[0],_=$==null?void 0:$.tagName;_==="INPUT"||_==="TEXTAREA"||$!=null&&$.isContentEditable||L.metaKey||L.ctrlKey||L.altKey||Po.current()||(L.key==="v"||L.key==="V"?(L.preventDefault(),i("edit"),at(null),Me(null),Gt.current=!1,(F=qe.current)==null||F.setCommentMode(!1)):(L.key==="c"||L.key==="C")&&(L.preventDefault(),i("comment"),a(null),(q=qe.current)==null||q.setCommentMode(!0)))};return document.addEventListener("keydown",j,!0),()=>document.removeEventListener("keydown",j,!0)},[n]),h.useEffect(()=>{if(!n||o!=="comment")return;const j=F=>{const q=F.composedPath();for(let I=0;I<q.length;I++)if(q[I]instanceof HTMLElement&&q[I].hasAttribute("data-retune-host"))return;if(Po.current())return;F.preventDefault();const Z=document.createElement("div");Z.style.cssText="position:fixed;border:1px dashed #0D99FF;pointer-events:none;z-index:2147483640;display:none;",document.body.appendChild(Z),zt.current={startX:F.clientX,startY:F.clientY,dragging:!1,areaEl:Z}},L=F=>{const q=zt.current;if(!q)return;const Z=Math.abs(F.clientX-q.startX),I=Math.abs(F.clientY-q.startY);(Z>5||I>5)&&(q.dragging=!0,q.areaEl&&(q.areaEl.style.display="block",q.areaEl.style.left=Math.min(F.clientX,q.startX)+"px",q.areaEl.style.top=Math.min(F.clientY,q.startY)+"px",q.areaEl.style.width=Z+"px",q.areaEl.style.height=I+"px"))},$=F=>{var Z;const q=zt.current;if(q)if(zt.current=null,q.dragging&&q.areaEl){const I={x:Math.min(F.clientX,q.startX),y:Math.min(F.clientY,q.startY),width:Math.abs(F.clientX-q.startX),height:Math.abs(F.clientY-q.startY)};if(q.areaEl.remove(),I.width>10&&I.height>10){const ne=[],K=new Set;for(let ue=I.x+20/2;ue<I.x+I.width;ue+=20)for(let me=I.y+20/2;me<I.y+I.height;me+=20){const je=document.elementFromPoint(ue,me);je&&!K.has(je)&&!((Z=je.closest)!=null&&Z.call(je,"[data-retune-host]"))&&(K.add(je),ne.push({tagName:je.tagName.toLowerCase(),selector:Vn(je),componentName:xt(je),textContent:(je.textContent||"").slice(0,40).trim()||null}))}Gt.current=!0,mn.current="",Pr.current="",rr.current=!0,setTimeout(()=>{rr.current=!1},50),at({position:{x:F.clientX,y:F.clientY},type:"area",area:I,areaScroll:{x:window.scrollX,y:window.scrollY},elementInfo:ne.length>0?{tagName:"area",componentName:ne[0].componentName,componentPath:[],classes:[],textContent:null,containedElements:ne}:void 0})}}else q.areaEl&&q.areaEl.remove()},_=F=>{F.key==="Escape"&&(F.preventDefault(),F.stopPropagation(),F.stopImmediatePropagation(),!Po.current()&&(Gt.current?(Gt.current=!1,mn.current="",Pr.current="",at(null),Me(null)):i("edit")))};return document.addEventListener("keydown",_,!0),document.addEventListener("pointerdown",j,!0),document.addEventListener("pointermove",L,!0),document.addEventListener("pointerup",$,!0),()=>{var F;document.removeEventListener("keydown",_,!0),document.removeEventListener("pointerdown",j,!0),document.removeEventListener("pointermove",L,!0),document.removeEventListener("pointerup",$,!0),(F=zt.current)!=null&&F.areaEl&&zt.current.areaEl.remove()}},[n,o]);const qi=h.useRef(!1),Io=h.useCallback(()=>{var _;const j=(_=Te.current)==null?void 0:_.element,L=we.current,$=j&&L?Jc(j,L):null;qi.current||re($==null?void 0:$.ownedProperties),qi.current=!1,a(F=>{if(!(F!=null&&F.element))return F;const q=Lh(F.element);$&&(q.computedStyles=$.styles);const Z=O.current;if(Z){const I=pt.current;if(nn.current,I&&F.element){const ne=Qc(F.element,I);for(const[le,K]of Object.entries(ne)){const ue=le.replace(/-([a-z])/g,(me,je)=>je.toUpperCase());q.computedStyles[ue]=K}}for(const ne of Z.getChanges()){const le=ne.selector.match(/:(hover|focus|active)$/),K=le?le[0]:null,ue=ne.selector.replace(/:(hover|focus|active)$/g,"");if(!(!I&&K)&&!(I&&K&&K!==I))try{F.element.matches(ue)&&(q.computedStyles[ne.property]=ne.value)}catch{}}}return Te.current=q,q})},[]);Vt.current=Io;const fc=h.useCallback((j,L)=>{var I;const $=Te.current,_=O.current,F=V.current;if(!$||!_||!F)return;const q=we.current??$.selector,Z=pt.current?q+pt.current:q;if(_.applyChange(Z,j,L),pt.current){const ne=$.element;if(ne!=null&&ne.style){const K=j.replace(/[A-Z]/g,ue=>`-${ue.toLowerCase()}`);ne.style.setProperty(K,L,"important")}const le=nn.current;le.selector===q&&!le.props.includes(j)&&le.props.push(j)}F.track(Z,$.tagName,$.textContent,$.classes,$.reactComponents,$.computedStyles,$.sourceFile,$.stylingApproach,$.inlineStyles,$.elementId,$.accessibleName,$.parentContext,$.childSummary,$.domPath,$.nearbySiblings,$.position),F.recordChange(Z,j,L),We.current(),Vt.current(),(I=qe.current)==null||I.refreshSelection(),b(ne=>ne+1)},[]),pc=h.useCallback(j=>{const L=O.current,$=Te.current;if(!L||!($!=null&&$.element))return;const _=we.current??$.selector,F=$.element;if(gn(),Rt(j),pt.current=j,j){const q=Qc($.element,j),Z=[],I=_+j,ne=new Map;for(const K of L.getChanges())K.selector===I&&ne.set(K.property,K.value);const le=new Set;for(const[K,ue]of Object.entries(q)){const me=K.replace(/-([a-z])/g,(Ze,Ae)=>Ae.toUpperCase()),je=ne.get(me)??ue;F.style&&F.style.setProperty(K,je,"important"),Z.push(me),le.add(me)}for(const[K,ue]of ne){if(le.has(K))continue;const me=K.replace(/[A-Z]/g,je=>`-${je.toLowerCase()}`);F.style&&F.style.setProperty(me,ue,"important"),Z.push(K)}nn.current={selector:_,props:Z}}Vt.current()},[]),hc=h.useCallback((j,L,$)=>{const _=O.current;if(!_)return;const F=zn(j);$?_.applyChange(F,L,$):_.removeChange(F,L)},[]),jf=h.useCallback((j,L)=>{var q;const $=Te.current,_=V.current;if(!$||!_)return;const F=we.current??$.selector;_.track(F,$.tagName,$.textContent,$.classes,$.reactComponents,$.computedStyles,$.sourceFile,$.stylingApproach,$.inlineStyles,$.elementId,$.accessibleName,$.parentContext,$.childSummary,$.domPath,$.nearbySiblings,$.position),_.recordChange(F,`class:${j}`,L),We.current(),Vt.current(),(q=qe.current)==null||q.refreshSelection(),b(Z=>Z+1)},[]),Rf=h.useCallback((j,L)=>{const $=V.current,_=Te.current;if(!$||!_)return;const F=we.current??_.selector;$.setVariableAssociation(F,j,L),$.relinkVariable(F,j),$.persist(),b(q=>q+1)},[]),gc=h.useCallback(j=>{const L=V.current,$=Te.current;if(!L||!$)return;const _=we.current??$.selector;L.recordUnlink(_,j),We.current(),b(F=>F+1)},[]),Qi=h.useMemo(()=>{const j=V.current;if(!j||!s)return{};const L=fe??s.selector;return{...j.getVariableAssociations(L)??{}}},[s,fe,P]),mc=h.useMemo(()=>{const j=V.current;if(!j||!s)return new Set;const L=fe??s.selector;return new Set(j.getUnlinkedVariables(L))},[s,fe,P]),w=h.useMemo(()=>{const j=V.current;if(!j||!s)return new Set;const L=fe??s.selector,$=j.getChangedProperties(L),_=pt.current;if(_){const F=j.getChangedProperties(`${L}${_}`);for(const q of F)$.add(q)}return $},[s,fe,P]),A=h.useCallback(j=>{const L=qe.current;L&&L.selectElement(j)},[]),G=h.useCallback(j=>{const L=qe.current;L&&L.highlightElement(j)},[]);h.useEffect(()=>{const j=rt.current,L=lt.current;if(!j||!L)return;const F=j.querySelectorAll(".retune-tab")[te==="elements"?0:1];if(!F)return;const q=j.getBoundingClientRect(),Z=F.getBoundingClientRect(),I=Z.left-q.left;L.style.width=`${Z.width}px`,Mn.current?(L.style.transition="none",L.style.transform=`translateX(${I}px)`,L.offsetHeight,L.style.transition="",Mn.current=!1):L.style.transform=`translateX(${I}px)`},[te,s]),h.useCallback(()=>{Bn(j=>{const L=j==="right"?"left":"right";try{localStorage.setItem("retune-panel-side",L)}catch{}return L})},[]);const Y=h.useCallback(j=>{tn.current&&(be.current={startX:j.clientX,startY:j.clientY,originX:0,dragging:!1,lastX:j.clientX,lastT:j.timeStamp,velocity:0})},[]),U=h.useCallback(j=>{const L=be.current,$=tn.current;if(!L||!$)return;const _=j.clientX-L.startX,F=j.clientY-L.startY;if(!L.dragging&&Math.abs(_)<5&&Math.abs(F)<5)return;if(!L.dragging){const I=$.getBoundingClientRect();L.originX=I.left+I.width/2,L.dragging=!0,$.setPointerCapture(j.pointerId),$e(!0)}const q=j.timeStamp-L.lastT;q>0&&(L.velocity=(j.clientX-L.lastX)/q),L.lastX=j.clientX,L.lastT=j.timeStamp;const Z=j.clientX-L.startX;$.style.transition="none",$.style.transform=`translateX(${Z}px)`},[]),oe=h.useCallback(j=>{const L=be.current,$=tn.current;if(!L||!$||(be.current=null,!L.dragging))return;const _=$.getBoundingClientRect(),q=Math.abs(L.velocity)>.4?L.velocity<0?"left":"right":j.clientX<window.innerWidth/2?"left":"right";Bn(q);try{localStorage.setItem("retune-panel-side",q)}catch{}requestAnimationFrame(()=>{$.style.transition="none",$.style.transform="";const Z=$.getBoundingClientRect(),I=_.left-Z.left;$.style.transform=`translateX(${I}px)`,requestAnimationFrame(()=>{$.style.transition="transform 200ms cubic-bezier(0.77, 0, 0.175, 1)",$.style.transform="";const ne=()=>{$.removeEventListener("transitionend",ne),$.style.transition="",$e(!1)};$.addEventListener("transitionend",ne,{once:!0})})})},[]),X=h.useCallback(()=>{const j=pt.current;if(!j)return;const L=Te.current,$=O.current;if(!(L!=null&&L.element)||!$)return;const _=L.element;if(!_.style)return;const F=we.current??L.selector,q=F+j,Z=Qc(L.element,j),I=new Map;for(const ue of $.getChanges())ue.selector===q&&I.set(ue.property,ue.value);const ne=nn.current;for(const ue of ne.props){const me=ue.replace(/[A-Z]/g,je=>`-${je.toLowerCase()}`);_.style.removeProperty(me)}const le=[],K=new Set;for(const[ue,me]of Object.entries(Z)){const je=ue.replace(/-([a-z])/g,(Ae,ct)=>ct.toUpperCase()),Ze=I.get(je)??me;_.style.setProperty(ue,Ze,"important"),le.push(je),K.add(je)}for(const[ue,me]of I){if(K.has(ue))continue;const je=ue.replace(/[A-Z]/g,Ze=>`-${Ze.toLowerCase()}`);_.style.setProperty(je,me,"important"),le.push(ue)}nn.current={selector:F,props:le}},[]),ae=h.useRef([]),ce=h.useRef([]),he=h.useRef([]),Ce=h.useRef([]),Ee=h.useCallback(()=>{var F;const j=Te.current;if(!(j!=null&&j.element))return;const L=j.element.tagName.toLowerCase();if(L==="body"||L==="html"||L==="head"||j.element.hasAttribute("data-retune-host"))return;const $=j.element.parentNode;if(!$)return;const _=V.current;if(_){const q=we.current??j.selector;_.track(q,j.tagName,j.textContent,j.classes,j.reactComponents,j.computedStyles,j.sourceFile,j.stylingApproach,j.inlineStyles,j.elementId,j.accessibleName,j.parentContext,j.childSummary,j.domPath,j.nearbySiblings,j.position),_.recordChange(q,"__delete","true"),_.persist()}ae.current.push({element:j.element,parent:$,nextSibling:j.element.nextSibling}),ce.current=[],j.element.remove(),a(null),Te.current=null,(F=qe.current)==null||F.refreshSelection(),We.current(),b(q=>q+1)},[]),xe=h.useCallback(()=>{const j=ae.current.pop();j&&(j.nextSibling?j.parent.insertBefore(j.element,j.nextSibling):j.parent.appendChild(j.element),ce.current.push(j),We.current(),b(L=>L+1))},[]);function Qe(j,L){const $=j.getPendingChanges();for(const _ of $)_.changes.some(F=>F.property==="__bulkOf")&&(j.removeProperty(_.selector,L),j.removeProperty(_.selector,"__bulkOf"));j.persist()}const Ue=h.useCallback(()=>{var _,F,q,Z;const j=V.current,L=O.current;if(!j||!L)return;const $=j.popUndo();if($){if($.some(I=>I.property==="__delete")){xe();return}if($.some(I=>I.property==="__reorder")){const I=dn.current.pop();if(I){const ne=I.map(le=>({element:le.element,prevOrder:le.element.style.order,prevTranslate:le.element.style.translate}));for(const le of I)le.prevOrder?le.element.style.order=le.prevOrder:le.element.style.removeProperty("order"),le.element.style.removeProperty("transition"),le.prevTranslate?le.element.style.translate=le.prevTranslate:le.element.style.removeProperty("translate"),((_=le.element.getAttribute("style"))==null?void 0:_.trim())===""&&le.element.removeAttribute("style");Et.current.push(ne)}Qe(j,"__reorder"),We.current(),Vt.current(),(F=qe.current)==null||F.refreshSelection(),b(ne=>ne+1);return}if($.some(I=>I.property==="__reparent")){const I=Pt.current.pop()||1,ne=[];for(let le=0;le<I;le++){const K=gt.current.pop();if(!K)break;K.observer.disconnect();try{K.oldNextSibling&&K.oldNextSibling.parentElement===K.oldParent?K.oldParent.insertBefore(K.element,K.oldNextSibling):K.oldParent.appendChild(K.element)}catch{}ne.push(K.element)}Qe(j,"__reparent"),Yt(le=>le.filter(K=>!ne.includes(K.element))),We.current(),Vt.current(),(q=qe.current)==null||q.refreshSelection(),b(le=>le+1);return}if($.some(I=>I.property==="__text")){const I=he.current.pop();I&&(I.element.innerHTML=I.originalHTML,Ce.current.push(I)),We.current(),b(ne=>ne+1);return}{const I=$.filter(K=>!K.action);for(const K of I)K.value?L.applyChange(K.selector,K.property,K.value):L.removeChange(K.selector,K.property);const ne=j.getPendingChanges(),le=new Set;for(const K of ne)for(const ue of K.changes)le.add(`${K.selector}::${ue.property}`);for(const K of I){const ue=`${K.selector}::${K.property}`;le.has(ue)||L.removeChange(K.selector,K.property)}X(),We.current(),Vt.current(),(Z=qe.current)==null||Z.refreshSelection(),b(K=>K+1)}}},[X,xe]),bt=h.useCallback(()=>{var _,F,q;const j=V.current,L=O.current;if(!j||!L)return;const $=j.popRedo();if($){if($.some(Z=>Z.property==="__reorder")){const Z=Et.current.pop();if(Z){const I=Z.map(ne=>({element:ne.element,prevOrder:ne.element.style.order,prevTranslate:ne.element.style.translate}));for(const ne of Z)ne.element.style.order=ne.prevOrder,ne.element.style.transition="",ne.element.style.translate=ne.prevTranslate;dn.current.push(I)}We.current(),Vt.current(),(_=qe.current)==null||_.refreshSelection(),b(I=>I+1);return}if($.some(Z=>Z.property==="__text")){const Z=Ce.current.pop();Z&&(Z.element.innerHTML=Z.newHTML,he.current.push(Z)),We.current(),b(I=>I+1);return}if($.some(Z=>Z.property==="__delete")){const Z=ce.current.pop();Z&&(ae.current.push({element:Z.element,parent:Z.element.parentNode,nextSibling:Z.element.nextSibling}),Z.element.remove(),a(null),Te.current=null,(F=qe.current)==null||F.refreshSelection()),We.current(),b(I=>I+1);return}for(const Z of $)Z.action||L.applyChange(Z.selector,Z.property,Z.value);X(),We.current(),Vt.current(),(q=qe.current)==null||q.refreshSelection(),b(Z=>Z+1)}},[X]),Ut=h.useCallback(j=>{var ne;const L=V.current,$=O.current,_=Te.current;if(!L||!$||!_)return;const F=we.current??_.selector,q=L.resetProperty(F,j);if(!q)return;q.to?$.applyChange(F,j,q.to):$.removeChange(F,j);const Z=L.getPendingChanges(),I=new Set;for(const le of Z)for(const K of le.changes)I.add(`${le.selector}::${K.property}`);I.has(`${F}::${j}`)||$.removeChange(F,j),X(),We.current(),Vt.current(),(ne=qe.current)==null||ne.refreshSelection(),b(le=>le+1)},[X]),dn=h.useRef([]),Et=h.useRef([]),Ht=h.useRef(new WeakMap),ln=h.useRef(new Map),jt=h.useRef(new WeakMap),Kt=h.useRef(new Map),Ln=h.useRef(new Map),ul=h.useRef(null);function ci(j){const L=Array.from(j.children);if(jt.current.get(j)==="translate"){const _=Ln.current.get(j);if(_)return[..._]}return[...L].sort((_,F)=>{const q=parseInt(_.style.order)||0,Z=parseInt(F.style.order)||0;return q!==Z?q-Z:L.indexOf(_)-L.indexOf(F)})}const B0=h.useMemo(()=>{const j=new Map;for(const L of ln.current.keys())L.isConnected&&j.set(L,ci(L));for(const L of Ln.current.keys())L.isConnected&&!j.has(L)&&j.set(L,ci(L));return j},[P]);function vc(j){if(ln.current.has(j))return;const L=Array.from(j.children),$=new Map;for(const _ of L)$.set(_,_.style.order||"");ln.current.set(j,$),L.forEach((_,F)=>{_.style.order=String(F)})}function dl(j){if(Kt.current.has(j))return;const L=Array.from(j.children),$=new Map;for(const _ of L)$.set(_,_.getBoundingClientRect());Kt.current.set(j,$),Ln.current.set(j,[...L]),ul.current||(ul.current=new MutationObserver(_=>{var F;for(const q of _){const Z=q.target;if(q.type==="childList"&&Kt.current.has(Z)){const I=Kt.current.get(Z);if(I)for(const[ne]of I){const le=ne;le.style.removeProperty("translate"),((F=le.getAttribute("style"))==null?void 0:F.trim())===""&&le.removeAttribute("style")}Kt.current.delete(Z),Ln.current.delete(Z),jt.current.delete(Z)}}})),ul.current.observe(j,{childList:!0})}function fl(j){const L=Kt.current.get(j),$=Ln.current.get(j);if(!L||!$)return;const _=Array.from(j.children);let F=0,q=0;for(let ne=0;ne<_.length-1;ne++){const le=L.get(_[ne]),K=L.get(_[ne+1]);F+=K.top-le.bottom,q++}const Z=q>0?F/q:0;let I=L.get(_[0]).top;for(let ne=0;ne<$.length;ne++){const le=$[ne],K=L.get(le).top,ue=I-K;Math.abs(ue)<.5?le.style.removeProperty("translate"):le.style.translate=`0 ${ue}px`,I+=L.get(le).height+Z}}function Lf(j,L){var ne,le;const $=Se.current[yn.current];if(!($!=null&&$.selector)||$.count<=1)return[];const _=Yc(j);if(!_||_.count<=1)return[];let F;try{F=Array.from(document.querySelectorAll(_.selector)).filter(K=>K!==j&&K.isConnected)}catch{return[]}if(F.length===0)return[];if(Nh(j)==="array")return[];const q=L.map(K=>{const ue=Array.from(K.classList).filter(me=>!Lr(me));return ue.length>0?`.${ue[0]}`:K.tagName.toLowerCase()});if(new Set(q).size<q.length*.5)return[];const I=[];for(const K of F){const ue=Array.from(K.children);if(ue.length<2)continue;const me=ue.map(ze=>{const ut=Array.from(ze.classList).filter(it=>!Lr(it));return ut.length>0?`.${ut[0]}`:ze.tagName.toLowerCase()}),je=new Set(q),Ze=new Set(me),Ae=me.filter(ze=>je.has(ze)).length,ct=q.filter(ze=>Ze.has(ze)).length;if(Ae<me.length*.7||ct<q.length*.7)continue;const ge=getComputedStyle(K).display,tt=ge==="flex"||ge==="inline-flex"||(ge==="grid"||ge==="inline-grid")?"order":"translate",Ct=ue.map(ze=>({element:ze,prevOrder:ze.style.order,prevTranslate:ze.style.translate||""}));I.push(Ct);const ot=V.current;if(ot){for(let ze=0;ze<ue.length;ze++){const ut=ue[ze],it=Array.from(ut.classList).filter(qt=>!Lr(qt)),bn=it.length>0?`.${it[0]}`:ut.tagName.toLowerCase(),wn=q.indexOf(bn);if(wn!==-1&&wn!==ze){const qt=zn(ut);ot.track(qt,ut.tagName.toLowerCase(),((ne=ut.textContent)==null?void 0:ne.slice(0,40))||null,Array.from(ut.classList),[],{__reorder:String(ze)},null,void 0,null,ut.id||null,null,null,null,"",null,{x:0,y:0,width:0,height:0}),ot.ensureOriginalValue(qt,"__reorder",String(ze)),ot.recordChangeSilent(qt,"__reorder",String(wn)),ot.ensureOriginalValue(qt,"__bulkOf",""),ot.recordChangeSilent(qt,"__bulkOf","reorder");break}}ot.persist()}if(tt==="order"){let ze=0;const ut=new Set;for(const it of q){const bn=ue.find(wn=>{if(ut.has(wn))return!1;const qt=Array.from(wn.classList).filter(Kn=>!Lr(Kn));return(qt.length>0?`.${qt[0]}`:wn.tagName.toLowerCase())===it});bn&&(bn.style.order=String(ze),ut.add(bn)),ze++}for(const it of ue)ut.has(it)||(it.style.order=String(ze++));if(jt.current.has(K)||jt.current.set(K,"order"),!ln.current.has(K)){const it=new Map;for(const bn of ue)it.set(bn,((le=Ct.find(wn=>wn.element===bn))==null?void 0:le.prevOrder)||"");ln.current.set(K,it)}}else{dl(K);const ze=[],ut=new Set;for(const it of q){const bn=ue.find(wn=>{if(ut.has(wn))return!1;const qt=Array.from(wn.classList).filter(Kn=>!Lr(Kn));return(qt.length>0?`.${qt[0]}`:wn.tagName.toLowerCase())===it});bn&&(ze.push(bn),ut.add(bn))}for(const it of ue)ut.has(it)||ze.push(it);Ln.current.set(K,ze),jt.current.has(K)||jt.current.set(K,"translate"),fl(K)}}return I}function V0(j,L,$,_){var Ze;const F=Se.current[yn.current];if(!(F!=null&&F.selector)||F.count<=1)return;const q=Array.from(j.classList).filter(Ae=>!Lr(Ae));if(q.length===0)return;const Z=q[0],I=Yc(L);if(!I||I.count<=1||Nh(L)==="array")return;const ne=Array.from($.classList).filter(Ae=>!Lr(Ae));if(ne.length===0)return;const le=ne[0],K=L.parentElement;if(!K)return;const ue=Yc(K),me=ue==null?void 0:ue.selector;let je;if(me&&ue.count>1)try{je=Array.from(document.querySelectorAll(me)).filter(Ae=>Ae!==K&&Ae.isConnected)}catch{return}else try{je=Array.from(document.querySelectorAll(I.selector)).filter(Ae=>Ae!==L&&Ae.isConnected).map(Ae=>Ae.parentElement).filter(Boolean)}catch{return}for(const Ae of je){const ct=Ae.querySelector(I.selector);if(!ct)continue;const ge=Array.from(ct.children).find(qt=>qt.classList.contains(Z));if(!ge)continue;const et=`.${CSS.escape(le)}`,Xe=Ae.matches(et)?Ae:Ae.querySelector(et);if(!Xe||Xe===ct)continue;const tt=V.current;if(tt){const qt=zn(ge),hr=zn(ct),Kn=zn(Xe),Ji=Array.from(ct.children).indexOf(ge);tt.track(qt,ge.tagName.toLowerCase(),((Ze=ge.textContent)==null?void 0:Ze.slice(0,40))||null,Array.from(ge.classList),[],{__reparent:`${hr}@${Ji}`},null,void 0,null,ge.id||null,null,null,null,"",null,{x:0,y:0,width:0,height:0}),tt.ensureOriginalValue(qt,"__reparent",`${hr}@${Ji}`),tt.recordChangeSilent(qt,"__reparent",`${Kn}@${_}`),tt.ensureOriginalValue(qt,"__bulkOf",""),tt.recordChangeSilent(qt,"__bulkOf","reparent")}const Ct=ge.nextElementSibling,ot=Array.from(Xe.children),ze=_<ot.length?ot[_]:null;ze?Xe.insertBefore(ge,ze):Xe.appendChild(ge);const ut=ge,it=ct,bn=Xe,wn=new MutationObserver(qt=>{for(const hr of qt)if(hr.type==="childList"){if(hr.target===it){for(const Kn of hr.addedNodes)if(Kn instanceof Element&&Kn!==ut&&Kn.tagName===ut.tagName&&Kn.className===ut.className&&Kn.textContent===ut.textContent)try{it.removeChild(Kn)}catch{}}if(hr.target===bn){for(const Kn of hr.removedNodes)if(Kn===ut&&!ut.parentElement)try{const Ji=Array.from(bn.children),_f=_<Ji.length?Ji[_]:null;_f?bn.insertBefore(ut,_f):bn.appendChild(ut)}catch{}}}});wn.observe(ct,{childList:!0}),wn.observe(Xe,{childList:!0}),gt.current.push({element:ge,oldParent:ct,oldNextSibling:Ct,newParent:Xe,observer:wn}),Yt(qt=>[...qt.filter(hr=>hr.element!==ge),{element:ge,newParent:Xe,insertIndex:_}])}}function Ef(j){let L=j;for(;L;){const $=L.parentElement;if(!$)return null;if(Array.from($.children).length>=2)return{proxy:L,parent:$};L=$}return null}const Nf=h.useCallback(j=>{var Xe,tt,Ct;const L=(Xe=Te.current)==null?void 0:Xe.element;if(!(L!=null&&L.parentElement))return;const $=Ef(L);if(!$)return;const{proxy:_,parent:F}=$,q=Array.from(F.children),Z=getComputedStyle(F).display,le=Z==="flex"||Z==="inline-flex"||(Z==="grid"||Z==="inline-grid")?"order":"translate";jt.current.has(F)||jt.current.set(F,le),le==="order"?vc(F):dl(F);const K=ci(F),ue=K.indexOf(_);if(ue===-1)return;const me=j==="up"?ue-1:ue+1;if(me<0||me>=K.length)return;const je=K[me],Ze=q.indexOf(_),Ae=V.current;if(Ae){const ot=Ht.current.get(_),ze=(ot==null?void 0:ot.selector)??zn(_),ut=(ot==null?void 0:ot.originalIndex)??Ze;ot||Ht.current.set(_,{selector:ze,originalIndex:Ze});const it=Te.current;Ae.track(ze,_.tagName.toLowerCase(),((tt=_.textContent)==null?void 0:tt.slice(0,40))||null,Array.from(_.classList),(it==null?void 0:it.reactComponents)??[],{__reorder:String(ut)},(it==null?void 0:it.sourceFile)??null,(it==null?void 0:it.stylingApproach)??void 0,null,_.id||null,null,null,null,(it==null?void 0:it.domPath)??"",null,{x:0,y:0,width:0,height:0}),Ae.ensureOriginalValue(ze,"__reorder",String(ut)),Ae.breakCoalescing(),Ae.recordChange(ze,"__reorder",String(me)),Ae.persist()}const ct=[{element:_,prevOrder:_.style.order,prevTranslate:_.style.translate},{element:je,prevOrder:je.style.order,prevTranslate:je.style.translate}];dn.current.push(ct),Et.current=[];let ge;if(le==="order"){const ot=_.style.order;_.style.order=je.style.order,je.style.order=ot,ge=ci(F)}else{const ot=Ln.current.get(F);if(ot){const ze=ot.indexOf(_),ut=ot.indexOf(je);ze!==-1&&ut!==-1&&([ot[ze],ot[ut]]=[ot[ut],ot[ze]],fl(F)),ge=[...ot]}else ge=q}const et=Lf(F,ge);if(et.length>0)for(const ot of et)ct.push(...ot);_ instanceof HTMLElement&&_.blur(),We.current(),Vt.current(),(Ct=qe.current)==null||Ct.refreshSelection(),b(ot=>ot+1)},[]),Mf=h.useCallback((j,L,$)=>{var Ae,ct;const _=j.parentElement;if(!_)return;const F=Array.from(_.children),q=j,Z=getComputedStyle(_).display,le=Z==="flex"||Z==="inline-flex"||(Z==="grid"||Z==="inline-grid")?"order":"translate";jt.current.has(_)||jt.current.set(_,le),le==="order"?vc(_):dl(_);const K=F.indexOf(q),ue=V.current;if(ue){const ge=Ht.current.get(q),et=(ge==null?void 0:ge.selector)??zn(q),Xe=(ge==null?void 0:ge.originalIndex)??K;ge||Ht.current.set(q,{selector:et,originalIndex:K});const tt=Te.current;ue.track(et,q.tagName.toLowerCase(),((Ae=q.textContent)==null?void 0:Ae.slice(0,40))||null,Array.from(q.classList),(tt==null?void 0:tt.reactComponents)??[],{__reorder:String(Xe)},(tt==null?void 0:tt.sourceFile)??null,(tt==null?void 0:tt.stylingApproach)??void 0,null,q.id||null,null,null,null,(tt==null?void 0:tt.domPath)??"",null,{x:0,y:0,width:0,height:0}),ue.ensureOriginalValue(et,"__reorder",String(Xe)),ue.breakCoalescing(),ue.recordChange(et,"__reorder",String($)),ue.persist()}const me=F.map(ge=>({element:ge,prevOrder:ge.style.order,prevTranslate:ge.style.translate}));dn.current.push(me),Et.current=[];let je;if(le==="order"){const ge=ci(_),[et]=ge.splice(L,1);ge.splice($>L?$-1:$,0,et);for(let Xe=0;Xe<ge.length;Xe++)ge[Xe].style.order=String(Xe);je=ge}else{const ge=Ln.current.get(_);if(ge){const[et]=ge.splice(L,1);ge.splice($>L?$-1:$,0,et),fl(_),je=[...ge]}else je=F}const Ze=Lf(_,je);if(Ze.length>0)for(const ge of Ze)me.push(...ge);q instanceof HTMLElement&&q.blur(),We.current(),Vt.current(),(ct=qe.current)==null||ct.refreshSelection(),b(ge=>ge+1)},[]),Tf=h.useCallback((j,L,$)=>{var Ct,ot;const _=V.current;if(!_)return;const F=j,q=F.parentElement;if(!q||q===L)return;const Z=gt.current.length,I=zn(F),ne=zn(q),le=zn(L),K=F.nextElementSibling,me=Array.from(q.children).indexOf(F),je=`${ne}@${me}`,Ze=`${le}@${$}`,Ae=Te.current;_.track(I,F.tagName.toLowerCase(),((Ct=F.textContent)==null?void 0:Ct.slice(0,40))||null,Array.from(F.classList),(Ae==null?void 0:Ae.reactComponents)??[],{__reparent:je},(Ae==null?void 0:Ae.sourceFile)??null,(Ae==null?void 0:Ae.stylingApproach)??void 0,null,F.id||null,null,null,null,(Ae==null?void 0:Ae.domPath)??"",null,{x:0,y:0,width:0,height:0}),_.ensureOriginalValue(I,"__reparent",je),_.breakCoalescing(),_.recordChange(I,"__reparent",Ze),_.persist();const ct=Array.from(L.children),ge=$<ct.length?ct[$]:null;ge?L.insertBefore(F,ge):L.appendChild(F);const et=F,Xe=new MutationObserver(ze=>{for(const ut of ze)if(ut.type==="childList"){if(ut.target===q){for(const it of ut.addedNodes)if(it instanceof Element&&it!==et&&it.tagName===et.tagName&&it.className===et.className&&it.textContent===et.textContent)try{q.removeChild(it)}catch{}}if(ut.target===L){for(const it of ut.removedNodes)if(it===et&&!et.parentElement)try{const bn=Array.from(L.children),wn=$<bn.length?bn[$]:null;wn?L.insertBefore(et,wn):L.appendChild(et)}catch{}}}});Xe.observe(q,{childList:!0}),Xe.observe(L,{childList:!0}),gt.current.push({element:F,oldParent:q,oldNextSibling:K,newParent:L,observer:Xe}),Yt(ze=>[...ze.filter(ut=>ut.element!==j),{element:j,newParent:L,insertIndex:$}]),V0(F,q,L,$);const tt=gt.current.length;Pt.current.push(tt-Z),We.current(),Vt.current(),(ot=qe.current)==null||ot.refreshSelection(),b(ze=>ze+1)},[]);h.useEffect(()=>{function j(L){if(Eh(L,t.hotkey)&&(L.preventDefault(),Yn()),n&&(L.metaKey||L.ctrlKey)&&L.key==="z"&&!L.shiftKey&&(L.preventDefault(),Ue()),n&&(L.metaKey||L.ctrlKey)&&L.key==="z"&&L.shiftKey&&(L.preventDefault(),bt()),n&&Te.current&&(L.key==="ArrowUp"||L.key==="ArrowDown"||L.key==="ArrowLeft"||L.key==="ArrowRight")){const _=L.composedPath()[0];if((_==null?void 0:_.tagName)==="INPUT"||(_==null?void 0:_.tagName)==="TEXTAREA"||_!=null&&_.isContentEditable)return;const F=Te.current.element,q=Ef(F);if(!q)return;const{parent:Z}=q,I=getComputedStyle(Z).display,ne=I==="flex"||I==="inline-flex",le=I==="grid"||I==="inline-grid",K=L.key==="ArrowLeft"||L.key==="ArrowRight",ue=L.key==="ArrowUp"||L.key==="ArrowDown",me=getComputedStyle(Z).flexDirection,je=ne&&(me==="row"||me==="row-reverse");if(!ne&&!le&&K||K&&!je||ue&&je)return;L.preventDefault(),L.stopPropagation();const Ze=L.key==="ArrowUp"||L.key==="ArrowLeft";Nf(Ze?"up":"down")}if(n&&Te.current&&(L.key==="Enter"||L.key==="Tab")){const _=L.composedPath()[0];if((_==null?void 0:_.tagName)==="INPUT"||(_==null?void 0:_.tagName)==="TEXTAREA"||_!=null&&_.isContentEditable)return;const F=Te.current.element,q=qe.current;if(!q)return;if(L.key==="Enter"&&L.shiftKey){const Z=F.parentElement;Z&&Z!==document.body&&(L.preventDefault(),L.stopPropagation(),q.selectElement(Z))}else if(L.key==="Enter"&&!L.shiftKey){const Z=Array.from(F.children).filter(I=>!I.hasAttribute("data-retune-host")&&I.tagName!=="SCRIPT"&&I.tagName!=="STYLE"&&I.tagName!=="LINK");Z.length>0&&(L.preventDefault(),L.stopPropagation(),q.selectElement(Z[0]))}else if(L.key==="Tab"){const Z=F.parentElement;if(!Z)return;const I=Array.from(Z.children).filter(K=>!K.hasAttribute("data-retune-host")&&K.tagName!=="SCRIPT"&&K.tagName!=="STYLE"&&K.tagName!=="LINK");if(I.length<2)return;const ne=I.indexOf(F);if(ne===-1)return;const le=L.shiftKey?I[(ne-1+I.length)%I.length]:I[(ne+1)%I.length];L.preventDefault(),L.stopPropagation(),q.selectElement(le)}return}if(n&&Te.current&&(L.key==="Delete"||L.key==="Backspace")){const _=L.composedPath()[0];if((_==null?void 0:_.tagName)==="INPUT"||(_==null?void 0:_.tagName)==="TEXTAREA"||_!=null&&_.isContentEditable)return;L.preventDefault(),L.stopPropagation(),Ee()}}return document.addEventListener("keydown",j,!0),()=>document.removeEventListener("keydown",j,!0)},[n,t.hotkey,Yn,Ue,bt,Ee,Nf]);const H0=h.useCallback(()=>{var q,Z;const j=V.current,L=O.current;if(!j||!L)return;for(;ae.current.length>0;){const I=ae.current.pop();try{I.nextSibling?I.parent.insertBefore(I.element,I.nextSibling):I.parent.appendChild(I.element)}catch{}}for(ce.current=[];he.current.length>0;){const I=he.current.pop();try{I.element.innerHTML=I.originalHTML}catch{}}Ce.current=[],dn.current=[],Et.current=[];for(const[,I]of ln.current)for(const[ne,le]of I){const K=ne;le?K.style.order=le:K.style.removeProperty("order")}ln.current.clear();for(const[,I]of Kt.current)for(const[ne]of I){const le=ne;le.style.removeProperty("translate"),le.style.removeProperty("transition"),((q=le.getAttribute("style"))==null?void 0:q.trim())===""&&le.removeAttribute("style")}Kt.current.clear(),Ln.current.clear(),jt.current=new WeakMap,(Z=ul.current)==null||Z.disconnect(),Ht.current=new WeakMap;for(const I of gt.current){I.observer.disconnect();try{I.oldNextSibling&&I.oldNextSibling.parentElement===I.oldParent?I.oldParent.insertBefore(I.element,I.oldNextSibling):I.oldParent.appendChild(I.element)}catch{}}gt.current=[],Yt([]),pt.current&&gn(),L.clearAll(),j.clear(),Q.current.clear(),Gn();const $=Se.current,_=$.length>=2?$.length-2:0;sn(_),yn.current=_,Rn(),b(I=>I+1),W(I=>I+1);const F=Te.current;F&&j.track(F.selector,F.tagName,F.textContent,F.classes,F.reactComponents,F.computedStyles,F.sourceFile,F.stylingApproach,F.inlineStyles,F.elementId,F.accessibleName,F.parentContext,F.childSummary,F.domPath,F.nearbySiblings,F.position),requestAnimationFrame(()=>{var I;Io(),(I=qe.current)==null||I.refreshSelection()})},[Rn,Io,gn]),Af=h.useCallback((j,L)=>{const $=O.current,_=V.current;if(!$||!_||j===L)return;$.migrateChanges(j,L),_.migrateChanges(j,L);const F=[":hover",":focus",":active"];for(const q of F)$.migrateChanges(j+q,L+q),_.migrateChanges(j+q,L+q);nn.current.selector===j&&(nn.current.selector=L),Rn(),b(q=>q+1)},[Rn]),W0=h.useCallback(j=>{var le,K,ue;const L=V.current,$=Te.current,_=Se.current;if(!L||!$||j<0||j>=_.length)return;const F=yn.current;if(j===F&&j>0)j=j-1;else if(j===F)return;const q=((le=_[F])==null?void 0:le.selector)??$.selector,Z=((K=_[j])==null?void 0:K.selector)??$.selector;L.track(Z,$.tagName,$.textContent,$.classes,$.reactComponents,$.computedStyles,$.sourceFile,$.stylingApproach,$.inlineStyles,$.elementId,$.accessibleName,$.parentContext,$.childSummary,$.domPath,$.nearbySiblings,$.position),Af(q,Z),yn.current=j,sn(j),we.current=Z;const I=Z&&Z.includes(" ");if(Z&&$.element&&!I){const me=Jc($.element,Z);re(me.ownedProperties)}else re(void 0);qi.current=!0,pt.current&&X(),Io();const ne=_[j];ne!=null&&ne.selector&&qe.current?qe.current.showScopeHighlights(ne.selector,$.element??null):(ue=qe.current)==null||ue.hideScopeHighlights()},[Af,X,Io]),U0=h.useCallback(j=>{var F,q;const L=qe.current;if(!L)return;if(j===null){const I=Se.current[yn.current];I!=null&&I.selector?L.showScopeHighlights(I.selector,((F=Te.current)==null?void 0:F.element)??null):L.hideScopeHighlights();return}const _=Se.current[j];if(!_||_.selector===null){L.hideScopeHighlights();return}L.showScopeHighlights(_.selector,((q=Te.current)==null?void 0:q.element)??null)},[]),Z0=h.useCallback(()=>{const j=V.current;j&&(navigator.clipboard.writeText(qc(j.getPendingChanges(),x,Q.current.getAll(),H.current)),C(!0),ve.current&&clearTimeout(ve.current),ve.current=setTimeout(()=>C(!1),3e3))},[x]),X0=h.useCallback(()=>{_r()},[_r]);return h.useEffect(()=>{const j={getChanges:()=>{var L;return((L=V.current)==null?void 0:L.getPendingChanges())??[]},getFormattedChanges:L=>{var $;return qc((($=V.current)==null?void 0:$.getPendingChanges())??[],L??y.current,Q.current.getAll(),H.current)},clearChanges:()=>{var F,q;const L=V.current,$=O.current;if(!L||!$)return;if(pt.current){const Z=nn.current,I=(F=Te.current)==null?void 0:F.element;if(I!=null&&I.style&&Z.props.length>0){for(const ne of Z.props){const le=ne.replace(/[A-Z]/g,K=>`-${K.toLowerCase()}`);I.style.removeProperty(le)}((q=I.getAttribute("style"))==null?void 0:q.trim())===""&&I.removeAttribute("style")}nn.current={selector:"",props:[]},Rt(null),pt.current=null}$.clearAll(),L.clear(),We.current(),b(Z=>Z+1);const _=Te.current;_&&L.track(_.selector,_.tagName,_.textContent,_.classes,_.reactComponents,_.computedStyles,_.sourceFile,_.stylingApproach,_.inlineStyles,_.elementId,_.accessibleName,_.parentContext,_.childSummary,_.domPath,_.nearbySiblings,_.position),Vt.current()}};return window.__retune=j,()=>{delete window.__retune}},[]),h.useEffect(()=>{if(!vt)return;function j(L){Eh(L,t.hotkey)&&(L.preventDefault(),At(!1))}return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[vt,t.hotkey]),!D||vt?null:no.createPortal(l.jsx(k0.Provider,{value:Lt.current,children:l.jsxs(E0.Provider,{value:D,children:[l.jsxs("div",{ref:tn,className:`retune-toolbar bottom ${Tt} ${n?"expanded":"collapsed"}`,onPointerDown:Y,onPointerMove:U,onPointerUp:oe,children:[l.jsx(_e,{content:"Toggle edit mode",shortcut:t.hotkey,side:"top",children:l.jsxs("button",{className:"retune-toolbar-collapse-btn",onClick:Xn,children:[l.jsx(m3,{size:20}),!n&&c>0&&l.jsx("span",{className:"retune-changes-dot"})]})}),l.jsxs("div",{className:"retune-toolbar-expanded",children:[(c>0||Ne>0)&&l.jsx("div",{className:"retune-edit-count",children:c+Ne}),(c>0||Ne>0)&&l.jsx("div",{className:"retune-toolbar-divider"}),l.jsx(_e,{content:"Edit mode",shortcut:"V",side:"top",children:l.jsx("button",{className:`retune-toolbar-btn${o==="edit"?" active":""}`,onClick:()=>{i("edit"),at(null),Me(null),Gt.current=!1},children:l.jsx(Jw,{size:20})})}),l.jsx(_e,{content:"Comment mode",shortcut:"C",side:"top",children:l.jsx("button",{className:`retune-toolbar-btn${o==="comment"?" active":""}`,onClick:()=>{i("comment"),a(null)},children:l.jsx(f3,{size:20})})}),l.jsx(_e,{content:"Copy changes",shortcut:"⌘C",side:"top",children:l.jsx("button",{className:`retune-toolbar-btn${c===0&&Ne===0?" disabled":""}`,onClick:Z0,disabled:c===0&&Ne===0,children:l.jsxs("span",{className:"retune-icon-swap",children:[l.jsx("span",{className:`retune-icon-swap-icon ${g?"out":"in"}`,children:l.jsx(Hw,{size:20})}),l.jsx("span",{className:`retune-icon-swap-icon ${g?"in":"out"}`,children:l.jsx(Gw,{size:20})})]})})}),l.jsx(_e,{content:"Reset all",side:"top",children:l.jsx("button",{className:`retune-toolbar-btn${c===0&&Ne===0?" disabled":""}`,onClick:H0,disabled:c===0&&Ne===0,children:l.jsx(Xw,{size:20})})}),l.jsx(_e,{content:"Settings",side:"top",children:l.jsx("button",{className:"retune-toolbar-btn",onClick:()=>{Fn.current&&clearTimeout(Fn.current),dt?(Je(!1),mt(!0),Fn.current=setTimeout(()=>{ft(!1),mt(!1)},250)):(Je(!0),ft(!0),mt(!1))},children:l.jsx(qw,{size:20})})}),l.jsx(_e,{content:"Close",shortcut:"Esc",side:"top",children:l.jsx("button",{className:"retune-toolbar-btn",onClick:X0,children:l.jsx(Uw,{size:20})})})]})]}),l.jsx(i3,{visible:!!(n&&s&&!dt&&!Fe&&o==="edit"),children:l.jsxs("div",{className:`retune-panel ${Tt}`,children:[l.jsxs("div",{className:"retune-tab-bar",ref:rt,children:[l.jsx("div",{className:"retune-tab-pill",ref:lt}),l.jsx("button",{className:`retune-tab${te==="elements"?" active":""}`,onClick:()=>Ie("elements"),children:"Elements"}),l.jsx("button",{className:`retune-tab${te==="design"?" active":""}`,onClick:()=>Ie("design"),children:"Design"}),l.jsxs("span",{onClick:()=>{M&&He&&Ke(!1)},style:{marginLeft:"auto",fontSize:"11px",lineHeight:"16px",color:"var(--retune-text-tertiary)",letterSpacing:"-0.005em",paddingRight:"8px",display:"flex",alignItems:"center",gap:"4px",cursor:M?"pointer":"default"},children:[M&&l.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"var(--retune-blue)",flexShrink:0}}),"v",(M==null?void 0:M.current)||"0.7.6"]})]}),l.jsxs("div",{className:"retune-panel-body",children:[l.jsx(iu,{visible:!!M&&!He,title:`Retune v${(M==null?void 0:M.latest)||""} is available`,body:"",copyLabel:"Copy update instructions",copiedLabel:"Paste in your AI agent to update",copyText:"Update Retune to the latest version by running `npm install retune@latest` and `npx retune setup`. After updating, I'll need to restart Claude Code so the new MCP server and skill take effect.",revertAfter:3e3,onDismiss:()=>Ke(!0)}),te==="elements"&&l.jsx(_w,{selectedElement:(s==null?void 0:s.element)??null,onSelect:A,onHover:G,visualOrderMap:B0,reparentEntries:_t,onTreeReorder:Mf,onTreeReparent:Tf}),te==="design"&&s&&l.jsxs(l.Fragment,{children:[l.jsx(iu,{visible:ee.current&&!B.current&&!ie,title:"Unlock your design system",body:"Apply your project's actual tokens, color palettes, and component variants directly.",copyLabel:"Copy instructions",copiedLabel:"Paste in your AI agent",copyText:sw,onDismiss:()=>de(!0),onCopy:()=>{const j=[1e4,3e4,6e4,12e4,18e4,3e5];for(const L of j)setTimeout(()=>{B.current||Re()},L)}}),l.jsx(iu,{visible:!!s.reactProps&&!!se&&!("components"in se)&&!ie,title:"Know your components",body:"See every variant, size, and state your components support and switch between them.",copyLabel:"Copy instructions",copiedLabel:"Paste in your AI agent",copyText:lw,onDismiss:()=>de(!0),onCopy:()=>{const j=[1e4,3e4,6e4,12e4,18e4,3e5];for(const L of j)setTimeout(()=>{B.current||Re()},L)}}),l.jsx(vw,{selectedElement:s,manifest:se,resetRevision:T,onRefresh:()=>Vt.current(),onPropChange:(j,L)=>{var q,Z,I;const $=V.current;if(!$)return;const _=s;$.track(_.selector,_.tagName,_.textContent,_.classes,_.reactComponents,_.computedStyles,_.sourceFile,_.stylingApproach,_.inlineStyles,_.elementId,_.accessibleName,_.parentContext,_.childSummary,_.domPath,_.nearbySiblings,_.position,_.reactProps),$.recordPropChange(_.selector,j,L),Rn(),b(ne=>ne+1);const F=(q=se==null?void 0:se.components)==null?void 0:q[_.reactComponents[0]];if((I=(Z=F==null?void 0:F.props)==null?void 0:Z[j])!=null&&I.class_map){const ne=ra(_.element);$r(ne);const le=Gc(_.element),K=cu(ne,_.element,le,H.current);Cr(K),Se.current=K}},changedProps:(()=>{const j=V.current;if(!j||!s)return;const L=new Set,$=j.getPendingChanges().find(_=>_.selector===s.selector);if($!=null&&$.propChanges)for(const _ of $.propChanges)L.add(_.prop);return L.size>0?L:void 0})(),onPropReset:j=>{var _,F,q;const L=V.current;if(!L)return;L.resetProp(s.selector,j),Rn(),b(Z=>Z+1);const $=(_=se==null?void 0:se.components)==null?void 0:_[s.reactComponents[0]];if((q=(F=$==null?void 0:$.props)==null?void 0:F[j])!=null&&q.class_map){const Z=ra(s.element);$r(Z);const I=Gc(s.element),ne=cu(Z,s.element,I,H.current);Cr(ne),Se.current=ne}}}),l.jsx(iw,{element:s,position:Tt,onPropertyChange:fc,onAttributeChange:(j,L,$)=>{const _=V.current;if(!_||!s)return;const F=s;_.track(F.selector,F.tagName,F.textContent,F.classes,F.reactComponents,F.computedStyles,F.sourceFile,F.stylingApproach,F.inlineStyles,F.elementId,F.accessibleName,F.parentContext,F.childSummary,F.domPath,F.nearbySiblings,F.position),_.recordAttributeChange(F.selector,j,L,$),Rn(),b(q=>q+1)},onPropertyHover:E,onApplyToElement:hc,onVariableSwap:jf,onVariableAssociate:Rf,onVariableUnlink:gc,variableAssociations:Qi,unlinkedVariables:mc,changedProperties:w,onPropertyReset:Ut,selectorCandidates:Ur,activeSelector:fe,scopeLevels:dr,activeLevelIndex:fr,onScopeLevelChange:W0,onScopeLevelHover:U0,ownedProperties:N,styleSources:Be,forcedState:It,onForcedStateChange:pc,onPinLinesChange:j=>{var L;return(L=qe.current)==null?void 0:L.updatePinLines(j)}},s.selector)]})]})]})}),n&&St&&!Fe&&l.jsx(Bw,{side:Tt,theme:Xt,onThemeChange:Wt,fidelity:x,onFidelityChange:R,onHide:()=>{Je(!1),ft(!1),mt(!1),_r(),At(!0)},exiting:st}),n&&s&&S&&l.jsx(n3,{element:s.element,hoveredProperty:S,revision:P}),n&&pe.map((j,L)=>l.jsx(h3,{comment:j,index:L,isPopoverOpen:Le===j.id,isAreaResize:j.type==="area"&&!!j.area,onAreaResizeLive:j.type==="area"&&j.area?$=>{Ve({id:j.id,br:$})}:void 0,onAreaResize:j.type==="area"&&j.area?$=>{var K;Ve(null);const _=Q.current,F=_.get(j.id);if(!F||!F.area)return;const q=F.area;F.area={x:q.x,y:q.y,width:Math.max(20,$.x-q.x),height:Math.max(20,$.y-q.y)},F.position=$;const Z=F.area,I=[],ne=20,le=new Set;for(let ue=Z.x+ne/2;ue<Z.x+Z.width;ue+=ne)for(let me=Z.y+ne/2;me<Z.y+Z.height;me+=ne){const je=document.elementFromPoint(ue,me);je&&!le.has(je)&&!((K=je.closest)!=null&&K.call(je,"[data-retune-host]"))&&(le.add(je),I.push({tagName:je.tagName.toLowerCase(),selector:Vn(je),componentName:xt(je),textContent:(je.textContent||"").slice(0,40).trim()||null}))}F.elementInfo&&(F.elementInfo.containedElements=I),_.persist(),Gn()}:void 0,onOpen:()=>{Gt.current=!0,mn.current=j.text,Pr.current=j.text,Me(j.id),at(null)}},j.id)),n&&pe.filter(j=>j.type==="area"&&j.area).map(j=>l.jsx(g3,{comment:j,interactive:!0,liveBR:(Pe==null?void 0:Pe.id)===j.id?Pe.br:void 0,onResize:L=>{var I;const $=Q.current,_=$.get(j.id);if(!_)return;_.area=L;const F=[],q=20,Z=new Set;for(let ne=L.x+q/2;ne<L.x+L.width;ne+=q)for(let le=L.y+q/2;le<L.y+L.height;le+=q){const K=document.elementFromPoint(ne,le);K&&!Z.has(K)&&!((I=K.closest)!=null&&I.call(K,"[data-retune-host]"))&&(Z.add(K),F.push({tagName:K.tagName.toLowerCase(),selector:Vn(K),componentName:xt(K),textContent:(K.textContent||"").slice(0,40).trim()||null}))}_.elementInfo&&(_.elementInfo.containedElements=F),$.persist(),Gn()}},`area-${j.id}`)),n&&(De==null?void 0:De.type)==="area"&&De.area&&l.jsx("div",{className:"retune-comment-area-outline",style:{left:De.area.x,top:De.area.y,width:De.area.width,height:De.area.height}}),n&&o==="comment"&&De&&!Le&&l.jsx(y1,{position:De.position,initialText:"",onTextChange:j=>{mn.current=j},onSubmit:j=>{Q.current.add(j,De.position,De.type,{selector:De.selector,anchorOffset:De.anchorOffset,area:De.area,areaScroll:De.areaScroll,elementInfo:De.elementInfo}),Gn(),Gt.current=!1,at(null)},onCancel:()=>{Gt.current=!1,at(null)}}),n&&Le&&(()=>{const j=Q.current.get(Le);return j?l.jsx(y1,{position:j.position,initialText:j.text,onTextChange:L=>{mn.current=L},onSubmit:L=>{Q.current.update(Le,L),Gn(),Gt.current=!1,Me(null)},onCancel:()=>{Gt.current=!1,Me(null)},onDelete:()=>{Q.current.delete(Le),Gn(),Gt.current=!1,Me(null)}}):null})()]})}),D)}function D0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=D0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function x3(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=D0(e))&&(r&&(r+=" "),r+=t);return r}function Hr(...e){return x3(e)}function y3({topLeftCornerRadius:e,topRightCornerRadius:t,bottomRightCornerRadius:n,bottomLeftCornerRadius:r,width:o,height:i}){const s={topLeft:-1,topRight:-1,bottomLeft:-1,bottomRight:-1},a={topLeft:e,topRight:t,bottomLeft:r,bottomRight:n};return Object.entries(a).sort(([,c],[,u])=>u-c).forEach(([c,u])=>{const p=c,d=b3[p],f=Math.min(...d.map(v=>{const x=a[v.corner];if(u===0&&x===0)return 0;const m=s[v.corner],R=v.side==="top"||v.side==="bottom"?o:i;return m>=0?R-s[v.corner]:u/(u+x)*R}));s[p]=f,a[p]=Math.min(u,f)}),{topLeft:{radius:a.topLeft,roundingAndSmoothingBudget:s.topLeft},topRight:{radius:a.topRight,roundingAndSmoothingBudget:s.topRight},bottomLeft:{radius:a.bottomLeft,roundingAndSmoothingBudget:s.bottomLeft},bottomRight:{radius:a.bottomRight,roundingAndSmoothingBudget:s.bottomRight}}}var b3={topLeft:[{corner:"topRight",side:"top"},{corner:"bottomLeft",side:"left"}],topRight:[{corner:"topLeft",side:"top"},{corner:"bottomRight",side:"right"}],bottomLeft:[{corner:"bottomRight",side:"bottom"},{corner:"topLeft",side:"left"}],bottomRight:[{corner:"bottomLeft",side:"bottom"},{corner:"topRight",side:"right"}]};function ds({cornerRadius:e,cornerSmoothing:t,preserveSmoothing:n,roundingAndSmoothingBudget:r}){let o=(1+t)*e;if(!n){const x=r/e-1;t=Math.min(t,x),o=Math.min(o,r)}const i=90*(1-t),s=Math.sin(Hl(i/2))*e*Math.sqrt(2),a=(90-i)/2,c=e*Math.tan(Hl(a/2)),u=45*t,p=c*Math.cos(Hl(u)),d=p*Math.tan(Hl(u));let f=(o-s-p-d)/3,v=2*f;if(n&&o>r){const x=r-d-s-p,m=x/6,R=x-m;f=Math.min(f,R),v=x-f,o=Math.min(o,r)}return{a:v,b:f,c:p,d,p:o,arcSectionLength:s,cornerRadius:e}}function b1({width:e,height:t,topLeftPathParams:n,topRightPathParams:r,bottomLeftPathParams:o,bottomRightPathParams:i}){return`
    M ${e-r.p} 0
    ${w3(r)}
    L ${e} ${t-i.p}
    ${C3(i)}
    L ${o.p} ${t}
    ${k3(o)}
    L 0 ${n.p}
    ${S3(n)}
    Z
  `.replace(/[\t\s\n]+/g," ").trim()}function w3({cornerRadius:e,a:t,b:n,c:r,d:o,p:i,arcSectionLength:s}){return e?No`
    c ${t} 0 ${t+n} 0 ${t+n+r} ${o}
    a ${e} ${e} 0 0 1 ${s} ${s}
    c ${o} ${r}
        ${o} ${n+r}
        ${o} ${t+n+r}`:No`l ${i} 0`}function C3({cornerRadius:e,a:t,b:n,c:r,d:o,p:i,arcSectionLength:s}){return e?No`
    c 0 ${t}
      0 ${t+n}
      ${-o} ${t+n+r}
    a ${e} ${e} 0 0 1 -${s} ${s}
    c ${-r} ${o}
      ${-(n+r)} ${o}
      ${-(t+n+r)} ${o}`:No`l 0 ${i}`}function k3({cornerRadius:e,a:t,b:n,c:r,d:o,p:i,arcSectionLength:s}){return e?No`
    c ${-t} 0
      ${-(t+n)} 0
      ${-(t+n+r)} ${-o}
    a ${e} ${e} 0 0 1 -${s} -${s}
    c ${-o} ${-r}
      ${-o} ${-(n+r)}
      ${-o} ${-(t+n+r)}`:No`l ${-i} 0`}function S3({cornerRadius:e,a:t,b:n,c:r,d:o,p:i,arcSectionLength:s}){return e?No`
    c 0 ${-t}
      0 ${-(t+n)}
      ${o} ${-(t+n+r)}
    a ${e} ${e} 0 0 1 ${s} -${s}
    c ${r} ${-o}
      ${n+r} ${-o}
      ${t+n+r} ${-o}`:No`l 0 ${-i}`}function Hl(e){return e*Math.PI/180}function No(e,...t){return e.reduce((n,r,o)=>{const i=t[o];return typeof i=="number"?n+r+i.toFixed(4):n+r+(i??"")},"")}function j3({cornerRadius:e=0,topLeftCornerRadius:t,topRightCornerRadius:n,bottomRightCornerRadius:r,bottomLeftCornerRadius:o,cornerSmoothing:i,width:s,height:a,preserveSmoothing:c=!1}){if(t=t??e,n=n??e,o=o??e,r=r??e,t===n&&n===r&&r===o&&o===t){const v=Math.min(s,a)/2,x=Math.min(t,v),m=ds({cornerRadius:x,cornerSmoothing:i,preserveSmoothing:c,roundingAndSmoothingBudget:v});return b1({width:s,height:a,topLeftPathParams:m,topRightPathParams:m,bottomLeftPathParams:m,bottomRightPathParams:m})}const{topLeft:u,topRight:p,bottomLeft:d,bottomRight:f}=y3({topLeftCornerRadius:t,topRightCornerRadius:n,bottomRightCornerRadius:r,bottomLeftCornerRadius:o,width:s,height:a});return b1({width:s,height:a,topLeftPathParams:ds({cornerSmoothing:i,preserveSmoothing:c,cornerRadius:u.radius,roundingAndSmoothingBudget:u.roundingAndSmoothingBudget}),topRightPathParams:ds({cornerSmoothing:i,preserveSmoothing:c,cornerRadius:p.radius,roundingAndSmoothingBudget:p.roundingAndSmoothingBudget}),bottomRightPathParams:ds({cornerSmoothing:i,preserveSmoothing:c,cornerRadius:f.radius,roundingAndSmoothingBudget:f.roundingAndSmoothingBudget}),bottomLeftPathParams:ds({cornerSmoothing:i,preserveSmoothing:c,cornerRadius:d.radius,roundingAndSmoothingBudget:d.roundingAndSmoothingBudget})})}const Ro=h.forwardRef(function({cornerRadius:t=16,cornerSmoothing:n=.6,borderColor:r,borderWidth:o=1,className:i,style:s,children:a,onClick:c},u){const p=h.useRef(null),[d,f]=h.useState(null);h.useEffect(()=>{const m=p.current;if(!m)return;const R=new ResizeObserver(([y])=>{const{width:g,height:C}=y.contentRect;g===0||C===0||f({width:g,height:C})});return R.observe(m),()=>R.disconnect()},[]);const v=d?j3({cornerRadius:t,cornerSmoothing:n,width:d.width,height:d.height}):null,x=m=>{p.current=m,typeof u=="function"?u(m):u&&(u.current=m)};return l.jsxs("div",{ref:x,onClick:c,className:i,style:{...s,position:"relative",clipPath:v?`path('${v}')`:void 0},children:[a,v&&r?l.jsx("svg",{width:d.width,height:d.height,style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"visible"},children:l.jsx("path",{d:v,fill:"none",stroke:r,strokeWidth:o})}):null]})}),R3=[{id:"work",title:"Work",selected:!0,distance:"24 m",address:"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai",contactName:"Ahmed Ali,",contactPhone:"+971-50 789 3456",verified:!0},{id:"ayush-home",title:"Ayush’s Home",distance:"24 km",address:"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai",contactName:"Ahmed Ali,",contactPhone:"+971-50 789 3456",verified:!0},{id:"ayush-home-2",title:"Ayush’s Home 02",distance:"24 m",address:"Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai",contactName:"Ahmed Ali,",contactPhone:"+971-50 789 3456",verified:!0}],uu="cubic-bezier(0.22, 1.22, 0.42, 1)",L3="cubic-bezier(0.32, 0.72, 0, 1)";function E3({open:e,onClose:t}){const[n,r]=h.useState("address"),[o,i]=h.useState(""),[s,a]=h.useState("work"),[c,u]=h.useState(null),[p,d]=h.useState(!1),[f,v]=h.useState(R3),[x,m]=h.useState(null),R=c!==null?f.find(S=>S.id===c.addressId)??null:null,y=()=>{if(!c)return;const S=c.addressId;u(null),m(S),window.setTimeout(()=>{v(E=>E.filter(P=>P.id!==S)),m(null)},420)},g=S=>{if(S===n){d(!0),window.setTimeout(()=>d(!1),160);return}r(S)},C=e;return l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:t,className:Hr("absolute inset-0 z-40 bg-black/70 transition-opacity duration-[420ms]",e?"opacity-100":"pointer-events-none opacity-0")}),l.jsx("div",{"aria-hidden":"true",className:Hr("pointer-events-none absolute inset-x-0 bottom-0 z-[80] flex h-[34px] items-end justify-center pb-2 transition-opacity duration-[420ms]",C?"opacity-100":"opacity-0"),children:l.jsx("span",{className:"block h-[5px] w-[134px] rounded-full bg-neutral-white"})}),l.jsxs(F0,{open:e,onDragClose:t,children:[l.jsxs("div",{className:"flex flex-col gap-3 p-3",children:[l.jsxs("div",{role:"tablist",className:"relative flex h-[42px] w-full items-center rounded-[999px] bg-blue-gray-200 p-1",style:{boxShadow:"inset 0 0 4px 0 rgba(14,14,14,0.06)"},children:[l.jsx("span",{"aria-hidden":"true",className:"absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] transition-transform duration-[280ms]",style:{transform:n==="address"?"translateX(0%)":"translateX(100%)",transitionTimingFunction:"cubic-bezier(0.32, 0.72, 0, 1)"},children:l.jsx("span",{className:"block h-full w-full rounded-[32px] border-[0.5px] border-blue-gray-100 bg-neutral-white shadow-[0_1px_3px_rgba(34,34,34,0.06)] transition-transform duration-[160ms] ease-out",style:{transform:p?"scaleX(0.94)":"scaleX(1)"}})}),l.jsx(w1,{label:"Address",selected:n==="address",onClick:()=>g("address")}),l.jsx(w1,{label:"Locker/ Pickup",selected:n==="locker",onClick:()=>g("locker")})]}),l.jsx(Ro,{cornerRadius:16,cornerSmoothing:.6,borderColor:"#F2F3F7",className:"bg-neutral-white",children:l.jsxs("div",{className:"flex h-12 items-center gap-3 px-3",children:[l.jsx("img",{src:"/icons/search.svg",alt:"",className:"h-4 w-4"}),l.jsx("input",{value:o,onChange:S=>i(S.target.value),placeholder:"Search for your building, area...",className:"flex-1 bg-transparent text-[13px] font-medium tracking-[-0.26px] text-blue-gray-1000 placeholder:font-medium placeholder:text-blue-gray-600 focus:outline-none"})]})}),l.jsx(Ro,{cornerRadius:16,cornerSmoothing:.6,borderColor:"#F2F3F7",className:"bg-neutral-white",onClick:()=>{},children:l.jsxs("div",{className:"flex w-full items-center gap-3 px-3.5 py-3.5",children:[l.jsx("span",{className:"flex size-5 items-center justify-center",children:l.jsx("img",{src:"/icons/plus.svg",alt:"",className:"h-3 w-3",style:{filter:"brightness(0) saturate(100%) invert(28%) sepia(98%) saturate(2300%) hue-rotate(202deg)"}})}),l.jsx("span",{className:"flex-1 text-left text-[14px] font-semibold tracking-[-0.14px] text-neutral-black",children:"Add new Address"}),l.jsx("span",{className:"flex size-5 items-center justify-center",children:l.jsx("img",{src:"/icons/chevron-left.svg",alt:"",className:"h-[10px] w-[6px] rotate-180",style:{filter:"brightness(0) saturate(100%) invert(28%) sepia(98%) saturate(2300%) hue-rotate(202deg)"}})})]})}),l.jsx("div",{className:"flex flex-col gap-3",children:f.map(S=>l.jsx(N3,{item:S,isSelected:s===S.id,isDeleting:x===S.id,onSelect:()=>a(S.id),onMore:()=>u({view:"menu",addressId:S.id})},S.id))})]}),l.jsx(M3,{view:(c==null?void 0:c.view)??null,target:R,onClose:()=>u(null),onShowDeleteConfirm:()=>u(S=>S?{...S,view:"confirm-delete"}:null),onConfirmDelete:y})]})]})}function F0({open:e,children:t,zClass:n="z-50",bgClass:r="bg-blue-gray-100",borderColor:o,showNotch:i=!0,insetClass:s="left-3 right-3",bottomSpacerClass:a="h-[34px]",bottomOffsetClass:c="bottom-0",onDragClose:u,enterMode:p="slide"}){const d=h.useRef(null),f=h.useRef(!1),[v,x]=h.useState(0),[m,R]=h.useState(0),[,y]=h.useState(0),g=W=>{u&&(W.currentTarget.setPointerCapture(W.pointerId),d.current=W.clientY,f.current=!0,y(N=>N+1))},C=W=>{if(d.current===null)return;const N=W.clientY-d.current;N<0?(R(Math.min(60,-N*.3)),x(0)):(x(N),R(0))},S=()=>{if(d.current===null)return;const W=v;d.current=null,f.current=!1,W>80&&u&&u(),x(0),R(0)},E=e?`translateY(${v}px)`:"translateY(110%)",b=p==="scale"?e?"scale(1)":"scale(0)":E,T=p==="scale"?e?1:0:1;return l.jsxs("div",{className:Hr("absolute",c,s,n),style:{transform:b,opacity:T,transformOrigin:"center bottom",transition:f.current?"none":p==="scale"?`transform 540ms ${uu}, opacity 320ms ease-out`:`transform 520ms ${e?uu:L3}`},children:[i?l.jsx("div",{className:"flex touch-none justify-center py-2",onPointerDown:g,onPointerMove:C,onPointerUp:S,onPointerCancel:S,children:l.jsx("span",{className:"block h-[5px] w-10 rounded-full bg-neutral-white/90"})}):null,l.jsxs("div",{className:Hr("relative overflow-hidden rounded-[24px]",r),style:o?{boxShadow:`0 0 0 1px ${o}`}:void 0,children:[t,l.jsx("div",{style:{height:m,transition:f.current?"none":`height 420ms ${uu}`}})]}),l.jsx("div",{className:Hr("w-full",a)})]})}function w1({label:e,selected:t,onClick:n}){return l.jsx("button",{type:"button",role:"tab","aria-selected":t,onClick:n,className:"relative z-10 flex h-[34px] flex-1 items-center justify-center px-3 outline-none",style:{transform:"translateZ(0)"},children:l.jsx("span",{className:Hr("whitespace-nowrap text-[14px] tracking-[-0.26px]",t?"font-semibold text-ink":"font-medium text-ink-secondary"),children:e})})}function N3({item:e,isSelected:t,isDeleting:n=!1,onSelect:r,onMore:o}){return l.jsx("div",{className:"overflow-hidden",style:{},children:l.jsx("div",{style:{transform:n?"scale(0.92)":"scale(1)",opacity:n?0:1,transition:"transform 420ms cubic-bezier(0.32, 0.72, 0, 1), opacity 380ms ease-out"},children:l.jsxs(Ro,{cornerRadius:16,cornerSmoothing:.6,borderColor:t?"#D0E3FF":"#EAECF0",className:"bg-neutral-white",children:[l.jsxs("div",{role:"button",tabIndex:0,onClick:r,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),r())},className:Hr("flex w-full cursor-pointer items-center gap-2 py-2 pl-2 pr-1 outline-none",t?"bg-[#EFF7FF]":"bg-blue-gray-100"),children:[l.jsx(Ro,{cornerRadius:8,cornerSmoothing:.6,borderColor:t?"#D0E3FF":"#EAECF0",className:"size-7 bg-neutral-white",children:l.jsx("div",{className:"flex h-full w-full items-center justify-center",children:l.jsx("img",{src:t?"/icons/briefcase-blue.svg":"/icons/briefcase-gray.svg",alt:"",className:"h-4 w-4"})})}),l.jsx("span",{className:Hr("font-primary text-[14px] tracking-[-0.14px] text-neutral-black",t?"font-semibold":"font-medium"),children:e.title}),l.jsx(Ro,{cornerRadius:6,cornerSmoothing:.6,className:"bg-neutral-white",children:l.jsx("div",{className:Hr("flex min-w-[37px] items-center justify-center whitespace-nowrap pb-[4px] pl-[7px] pr-[6px] pt-[3px] font-primary text-[10px] font-bold leading-[12px]",t?"text-[#0076FF]":"text-blue-gray-700"),children:e.distance})}),l.jsxs("div",{className:"ml-auto flex items-center gap-2 text-blue-gray-700",children:[l.jsx("button",{type:"button",onClick:i=>i.stopPropagation(),className:"flex size-6 items-center justify-center","aria-label":"Share",children:l.jsx("img",{src:"/icons/upload.svg",alt:"",className:"h-4 w-4"})}),l.jsx("button",{type:"button",onClick:i=>{i.stopPropagation(),o()},className:"flex size-6 items-center justify-center","aria-label":"More",children:l.jsx("img",{src:"/icons/more-vertical.svg",alt:"",className:"h-4 w-[3px]"})})]})]}),l.jsx("div",{className:"px-3 pt-2 pb-2",children:l.jsx("p",{className:"text-[13px] font-medium leading-[18px] tracking-[-0.26px] text-blue-gray-700",children:e.address})}),l.jsx("div",{className:"mx-3 border-t border-dashed border-blue-gray-300"}),l.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2.5",children:[l.jsx("span",{className:"text-[13px] font-medium tracking-[-0.26px] text-blue-gray-700",children:e.contactName}),l.jsx("span",{className:"text-[13px] font-medium tracking-[-0.26px] text-blue-gray-700",children:e.contactPhone}),l.jsx("img",{src:e.verified?"/icons/verified.svg":"/icons/unverified.svg",alt:"",className:"h-3.5 w-3.5"})]})]})})})}const C1=[{id:"edit",icon:"/icons/action-edit-pen.svg",label:"Edit"},{id:"share",icon:"/icons/action-share.svg",label:"Share"},{id:"verify",icon:"/icons/action-verify.svg",label:"Verify"},{id:"delete",icon:"/icons/action-delete.svg",label:"Delete"}];function M3({view:e,target:t,onClose:n,onShowDeleteConfirm:r,onConfirmDelete:o}){const i=e!==null,s=e??"menu",a=h.useRef(null),c=h.useRef(null),[u,p]=h.useState(null);return h.useLayoutEffect(()=>{const d=s==="confirm-delete"?c.current:a.current;if(!d)return;const f=()=>p(d.offsetHeight);f();const v=new ResizeObserver(f);return v.observe(d),()=>v.disconnect()},[s,t]),l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:n,className:Hr("absolute inset-0 z-[60] bg-black/35 transition-opacity duration-[420ms]",i?"opacity-100":"pointer-events-none opacity-0")}),l.jsx(F0,{open:i,zClass:"z-[70]",bgClass:"bg-neutral-white",borderColor:"#F2F3F7",showNotch:!1,insetClass:"left-[9px] right-[9px]",bottomSpacerClass:"h-0",bottomOffsetClass:"bottom-2",children:l.jsxs("div",{className:"relative overflow-hidden",style:{height:u??void 0,transition:"height 620ms cubic-bezier(0.32, 0.72, 0, 1)"},children:[l.jsx("div",{ref:a,className:"absolute inset-x-0 top-0 origin-center",style:{opacity:s==="menu"?1:0,transform:s==="menu"?"scale(1) translateY(0)":"scale(0.7) translateY(-12px)",pointerEvents:s==="menu"?"auto":"none",transition:"opacity 360ms ease-out, transform 520ms cubic-bezier(0.32, 0.72, 0, 1)"},children:l.jsx("div",{className:"flex flex-col p-4",children:C1.map((d,f)=>l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsxs("button",{type:"button",onClick:()=>{d.id==="delete"?r():n()},className:"flex w-[82px] items-center gap-4 py-2 outline-none",children:[l.jsx("span",{className:"flex size-5 items-center justify-center",children:l.jsx("img",{src:d.icon,alt:"",className:"h-3.5 w-3.5"})}),l.jsx("span",{className:"font-primary text-[12px] font-semibold tracking-[-0.12px] text-[#262A33]",children:d.label})]}),f<C1.length-1?l.jsx("div",{className:"my-1 w-full border-t border-dashed border-blue-gray-200"}):null]},d.id))})}),l.jsx("div",{ref:c,className:"absolute inset-x-0 top-0",style:{opacity:s==="confirm-delete"?1:0,pointerEvents:s==="confirm-delete"?"auto":"none",transition:"opacity 320ms ease-out 80ms"},children:l.jsxs("div",{className:"flex flex-col gap-4 p-3",children:[l.jsxs("div",{className:"flex flex-col gap-2 px-0.5",style:{transform:s==="confirm-delete"?"translateY(0)":"translateY(-32px)",transition:"transform 560ms cubic-bezier(0.32, 0.72, 0, 1) 120ms"},children:[l.jsx("p",{className:"font-primary text-[17px] font-bold leading-6 tracking-[-0.16px] text-blue-gray-900",children:"Delete this address?"}),l.jsx(Ro,{cornerRadius:12,cornerSmoothing:.6,borderColor:"#F2F3F7",className:"bg-[#FCFCFD]",children:l.jsxs("div",{className:"flex flex-col gap-1.5 p-3",children:[l.jsx("p",{className:"font-primary text-[14px] font-semibold leading-[18px] tracking-[-0.14px] text-blue-gray-900",children:(t==null?void 0:t.title)??"Address"}),l.jsx("p",{className:"font-primary text-[12px] leading-[14px] tracking-[-0.12px] text-blue-gray-700",children:(t==null?void 0:t.address)??""})]})})]}),l.jsxs("div",{className:"flex items-stretch gap-3",style:{transform:s==="confirm-delete"?"translateY(0)":"translateY(32px)",transition:"transform 560ms cubic-bezier(0.32, 0.72, 0, 1) 120ms"},children:[l.jsx(Ro,{cornerRadius:12,cornerSmoothing:.6,borderColor:"#EAECF0",className:"flex-1 bg-blue-gray-100",onClick:n,children:l.jsx("div",{className:"flex h-11 items-center justify-center px-6 text-[15px] font-semibold tracking-[-0.26px] text-ink",children:"Cancel"})}),l.jsx(Ro,{cornerRadius:12,cornerSmoothing:.6,className:"flex-1 bg-red-700",onClick:o,children:l.jsx("div",{className:"flex h-11 items-center justify-center px-6 text-[15px] font-semibold tracking-[-0.26px] text-neutral-white",children:"Yes"})})]})]})})]})})]})}function T3(){const[e,t]=h.useState(!1);return l.jsxs("div",{className:"relative h-full w-full overflow-hidden",children:[l.jsx("img",{src:e?"/images/entry-screen-no-bar.png":"/images/entry-screen.png",alt:"Home",className:"absolute inset-0 h-full w-full select-none object-cover",draggable:!1}),l.jsx("button",{type:"button",onClick:()=>t(!0),"aria-label":"Open address selector",className:"absolute left-3 right-3 z-10 rounded-12 outline-none focus-visible:ring-2 focus-visible:ring-blue-700/60",style:{top:116,height:56}}),l.jsx(E3,{open:e,onClose:()=>t(!1)})]})}function A3({children:e}){return l.jsx("div",{className:"flex min-h-full items-center justify-center bg-blue-gray-200 p-6",children:l.jsx("div",{className:"relative overflow-hidden rounded-[40px] bg-neutral-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]",style:{width:375,height:812},children:e})})}const $3=Dy([{path:"/",element:l.jsx(A3,{children:l.jsx(T3,{})})}]);zm(document.getElementById("root")).render(l.jsxs(h.StrictMode,{children:[l.jsx(Yy,{router:$3}),l.jsx(d3,{force:!0,position:"top-right",hotkey:"alt+e"})]}));const _3=Object.freeze(Object.defineProperty({__proto__:null,detectStylingApproach:e0,findTokensForValue:Jm,scanDesignTokens:vf,summarizeTokenSystem:t0},Symbol.toStringTag,{value:"Module"})),P3=Object.freeze(Object.defineProperty({__proto__:null,enrichPropertyChanges:C0,stripPseudoState:w0},Symbol.toStringTag,{value:"Module"}));
