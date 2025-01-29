(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var $c={exports:{}},Jo={},Zc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function d0(){if(gm)return dt;gm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}var L=D.prototype=new x;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ne,Ne){var Q,de={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)V.call(ne,Q)&&!U.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)de.children=Ne;else if(1<Te){for(var De=Array(Te),Ze=0;Ze<Te;Ze++)De[Ze]=arguments[Ze+2];de.children=De}if(N&&N.defaultProps)for(Q in Te=N.defaultProps,Te)de[Q]===void 0&&(de[Q]=Te[Q]);return{$$typeof:o,type:N,key:Se,ref:ve,props:de,_owner:O.current}}function b(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return ne[Ne]})}var oe=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function ce(N,ne,Ne,Q,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,de=de(ve),N=Q===""?"."+te(ve,0):Q,C(de)?(Ne="",N!=null&&(Ne=N.replace(oe,"$&/")+"/"),ce(de,ne,Ne,"",function(Ze){return Ze})):de!=null&&(R(de)&&(de=b(de,Ne+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+N)),ne.push(de)),1;if(ve=0,Q=Q===""?".":Q+":",C(N))for(var Te=0;Te<N.length;Te++){Se=N[Te];var De=Q+te(Se,Te);ve+=ce(Se,ne,Ne,De,de)}else if(De=_(N),typeof De=="function")for(N=De.call(N),Te=0;!(Se=N.next()).done;)Se=Se.value,De=Q+te(Se,Te++),ve+=ce(Se,ne,Ne,De,de);else if(Se==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,Ne){if(N==null)return N;var Q=[],de=0;return ce(N,Q,"","",function(Se){return ne.call(Ne,Se,de++)}),Q}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(N,ne,Ne){he(N,function(){ne.apply(this,arguments)},Ne)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},dt.Component=S,dt.Fragment=t,dt.Profiler=s,dt.PureComponent=D,dt.StrictMode=i,dt.Suspense=d,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(N,ne,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),de=N.key,Se=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=O.current),ne.key!==void 0&&(de=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(De in ne)V.call(ne,De)&&!U.hasOwnProperty(De)&&(Q[De]=ne[De]===void 0&&Te!==void 0?Te[De]:ne[De])}var De=arguments.length-2;if(De===1)Q.children=Ne;else if(1<De){Te=Array(De);for(var Ze=0;Ze<De;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:o,type:N.type,key:de,ref:Se,props:Q,_owner:ve}},dt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},dt.createElement=X,dt.createFactory=function(N){var ne=X.bind(null,N);return ne.type=N,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:f,render:N}},dt.isValidElement=R,dt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},dt.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},dt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},dt.unstable_act=re,dt.useCallback=function(N,ne){return le.current.useCallback(N,ne)},dt.useContext=function(N){return le.current.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},dt.useEffect=function(N,ne){return le.current.useEffect(N,ne)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(N,ne,Ne){return le.current.useImperativeHandle(N,ne,Ne)},dt.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},dt.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},dt.useMemo=function(N,ne){return le.current.useMemo(N,ne)},dt.useReducer=function(N,ne,Ne){return le.current.useReducer(N,ne,Ne)},dt.useRef=function(N){return le.current.useRef(N)},dt.useState=function(N){return le.current.useState(N)},dt.useSyncExternalStore=function(N,ne,Ne){return le.current.useSyncExternalStore(N,ne,Ne)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var _m;function bd(){return _m||(_m=1,Zc.exports=d0()),Zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function h0(){if(vm)return Jo;vm=1;var o=bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)i.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:y,props:g,_owner:s.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var xm;function p0(){return xm||(xm=1,$c.exports=h0()),$c.exports}var Js=p0(),kf=bd(),Cl={},Qc={exports:{}},kn={},Jc={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function m0(){return ym||(ym=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<s(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Ne=ne>>>1;N<Ne;){var Q=2*(N+1)-1,de=B[Q],Se=Q+1,ve=B[Se];if(0>s(de,re))Se<ne&&0>s(ve,de)?(B[N]=ve,B[Se]=re,N=Se):(B[N]=de,B[Q]=re,N=Q);else if(Se<ne&&0>s(ve,re))B[N]=ve,B[Se]=re,N=Se;else break e}}return ae}function s(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,_=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=t(h);ae!==null;){if(ae.callback===null)i(h);else if(ae.startTime<=B)i(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function C(B){if(T=!1,L(B),!M)if(t(d)!==null)M=!0,se(V);else{var ae=t(h);ae!==null&&le(C,ae.startTime-B)}}function V(B,ae){M=!1,T&&(T=!1,x(X),X=-1),y=!0;var re=_;try{for(L(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||B&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),L(ae)}else i(d);g=t(d)}if(g!==null)var Ne=!0;else{var Q=t(h);Q!==null&&le(C,Q.startTime-ae),Ne=!1}return Ne}finally{g=null,_=re,y=!1}}var O=!1,U=null,X=-1,b=5,R=-1;function z(){return!(o.unstable_now()-R<b)}function oe(){if(U!==null){var B=o.unstable_now();R=B;var ae=!0;try{ae=U(!0,B)}finally{ae?te():(O=!1,U=null)}}else O=!1}var te;if(typeof D=="function")te=function(){D(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){S(oe,0)};function se(B){U=B,O||(O=!0,te())}function le(B,ae){X=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(B,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(h,B),t(d)===null&&B===t(h)&&(T?(x(X),X=-1):T=!0,le(C,re-N))):(B.sortIndex=ne,e(d,B),M||y||(M=!0,se(V))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}}(ef)),ef}var Sm;function g0(){return Sm||(Sm=1,Jc.exports=m0()),Jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function _0(){if(Mm)return kn;Mm=1;var o=bd(),e=g0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,c){if(r===null||typeof r>"u"||y(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,a,c,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,a,c){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,p,c)&&(a=null),c||p===null?_(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Ne=!1;function Q(n,r){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var c=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){c=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),v=c.stack.split(`
`),E=p.length-1,I=v.length-1;1<=E&&0<=I&&p[E]!==v[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==v[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==v[I]){var F=`
`+p[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function de(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){c=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Lt(n){n._valueTracker||(n._valueTracker=Ze(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=De(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Sn(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Te(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function ct(n,r){ht(n,r);var a=Te(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ct(n,r.type,a):r.hasOwnProperty("defaultValue")&&Ct(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ct(n,r,a){(r!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function P(n,r,a,c){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Te(a)}}function pe(n,r){var a=Te(r.value),c=Te(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function qe(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=qe(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function nt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ie=null,fe=null;function Pe(n){if(n=ko(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ga(r),we(n.stateNode,n.type,r))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function it(){if(ie){var n=ie,r=fe;if(fe=ie=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Ft(n,r){return n(r)}function $t(){}var Mt=!1;function In(n,r,a){if(Mt)return n(r,a);Mt=!0;try{return Ft(n,r,a)}finally{Mt=!1,(ie!==null||fe!==null)&&($t(),it())}}function Mn(n,r){var a=n.stateNode;if(a===null)return null;var c=Ga(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var hs=!1;if(f)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{hs=!1}function Pi(n,r,a,c,p,v,E,I,F){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(a,ee)}catch(_e){this.onError(_e)}}var Li=!1,kr=null,Br=!1,ir=null,Sa={onError:function(n){Li=!0,kr=n}};function ps(n,r,a,c,p,v,E,I,F){Li=!1,kr=null,Pi.apply(Sa,arguments)}function Ma(n,r,a,c,p,v,E,I,F){if(ps.apply(this,arguments),Li){if(Li){var ee=kr;Li=!1,kr=null}else throw Error(t(198));Br||(Br=!0,ir=ee)}}function gi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ea(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ta(n){if(gi(n)!==n)throw Error(t(188))}function xu(n){var r=n.alternate;if(!r){if(r=gi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Ta(p),n;if(v===c)return Ta(p),r;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=v;else{for(var E=!1,I=p.child;I;){if(I===a){E=!0,a=p,c=v;break}if(I===c){E=!0,c=p,a=v;break}I=I.sibling}if(!E){for(I=v.child;I;){if(I===a){E=!0,a=v,c=p;break}if(I===c){E=!0,c=v,a=p;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Aa(n){return n=xu(n),n!==null?wa(n):null}function wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=wa(n);if(r!==null)return r;n=n.sibling}return null}var Ra=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,J=e.unstable_requestPaint,K=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function vt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,Wt=Math.log,Bt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Wt(n)/Bt|0)|0}var Ye=64,Xt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hn(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,v=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~p;I!==0?c=_t(I):(v&=E,v!==0&&(c=_t(v)))}else E=a&~p,E!==0?c=_t(E):v!==0&&(c=_t(v));if(c===0)return 0;if(r!==0&&r!==c&&!(r&p)&&(p=c&-c,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-st(r),p=1<<a,c|=n[a],r&=~p;return c}function rr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-st(v),I=1<<E,F=p[E];F===-1?(!(I&a)||I&c)&&(p[E]=rr(I,r)):F<=r&&(n.expiredLanes|=I),v&=~I}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function pn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function tn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-st(r),n[r]=a}function un(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-st(a),v=1<<p;r[p]=0,c[p]=-1,n[p]=-1,a&=~v}}function nn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-st(a),p=1<<c;p&r|n[c]&r&&(n[c]|=r),a&=~p}}var Et=0;function _i(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Kd,yu,$d,Zd,Qd,Su=!1,Ca=[],sr=null,or=null,ar=null,Mo=new Map,Eo=new Map,lr=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(n,r){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Mo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(r.pointerId)}}function To(n,r,a,c,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[p]},r!==null&&(r=ko(r),r!==null&&yu(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function F_(n,r,a,c,p){switch(r){case"focusin":return sr=To(sr,n,r,a,c,p),!0;case"dragenter":return or=To(or,n,r,a,c,p),!0;case"mouseover":return ar=To(ar,n,r,a,c,p),!0;case"pointerover":var v=p.pointerId;return Mo.set(v,To(Mo.get(v)||null,n,r,a,c,p)),!0;case"gotpointercapture":return v=p.pointerId,Eo.set(v,To(Eo.get(v)||null,n,r,a,c,p)),!0}return!1}function eh(n){var r=zr(n.target);if(r!==null){var a=gi(r);if(a!==null){if(r=a.tag,r===13){if(r=Ea(a),r!==null){n.blockedOn=r,Qd(n.priority,function(){$d(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ba(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Eu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Rt=c,a.target.dispatchEvent(c),Rt=null}else return r=ko(a),r!==null&&yu(r),n.blockedOn=a,!1;r.shift()}return!0}function th(n,r,a){ba(n)&&a.delete(r)}function O_(){Su=!1,sr!==null&&ba(sr)&&(sr=null),or!==null&&ba(or)&&(or=null),ar!==null&&ba(ar)&&(ar=null),Mo.forEach(th),Eo.forEach(th)}function Ao(n,r){n.blockedOn===r&&(n.blockedOn=null,Su||(Su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O_)))}function wo(n){function r(p){return Ao(p,n)}if(0<Ca.length){Ao(Ca[0],n);for(var a=1;a<Ca.length;a++){var c=Ca[a];c.blockedOn===n&&(c.blockedOn=null)}}for(sr!==null&&Ao(sr,n),or!==null&&Ao(or,n),ar!==null&&Ao(ar,n),Mo.forEach(r),Eo.forEach(r),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)eh(a),a.blockedOn===null&&lr.shift()}var ms=C.ReactCurrentBatchConfig,Pa=!0;function k_(n,r,a,c){var p=Et,v=ms.transition;ms.transition=null;try{Et=1,Mu(n,r,a,c)}finally{Et=p,ms.transition=v}}function B_(n,r,a,c){var p=Et,v=ms.transition;ms.transition=null;try{Et=4,Mu(n,r,a,c)}finally{Et=p,ms.transition=v}}function Mu(n,r,a,c){if(Pa){var p=Eu(n,r,a,c);if(p===null)zu(n,r,c,La,a),Jd(n,c);else if(F_(p,n,r,a,c))c.stopPropagation();else if(Jd(n,c),r&4&&-1<U_.indexOf(n)){for(;p!==null;){var v=ko(p);if(v!==null&&Kd(v),v=Eu(n,r,a,c),v===null&&zu(n,r,c,La,a),v===p)break;p=v}p!==null&&c.stopPropagation()}else zu(n,r,c,null,a)}}var La=null;function Eu(n,r,a,c){if(La=null,n=G(c),n=zr(n),n!==null)if(r=gi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ea(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return La=n,null}function nh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ye:return 1;case Re:return 4;case Le:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var ur=null,Tu=null,Ia=null;function ih(){if(Ia)return Ia;var n,r=Tu,a=r.length,c,p="value"in ur?ur.value:ur.textContent,v=p.length;for(n=0;n<a&&r[n]===p[n];n++);var E=a-n;for(c=1;c<=E&&r[a-c]===p[v-c];c++);return Ia=p.slice(n,1<c?1-c:void 0)}function Da(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Na(){return!0}function rh(){return!1}function zn(n){function r(a,c,p,v,E){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Na:rh,this.isPropagationStopped=rh,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),r}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=zn(gs),Ro=re({},gs,{view:0,detail:0}),z_=zn(Ro),wu,Ru,Co,Ua=re({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Co&&(Co&&n.type==="mousemove"?(wu=n.screenX-Co.screenX,Ru=n.screenY-Co.screenY):Ru=wu=0,Co=n),wu)},movementY:function(n){return"movementY"in n?n.movementY:Ru}}),sh=zn(Ua),H_=re({},Ua,{dataTransfer:0}),V_=zn(H_),G_=re({},Ro,{relatedTarget:0}),Cu=zn(G_),W_=re({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=zn(W_),j_=re({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Y_=zn(j_),q_=re({},gs,{data:0}),oh=zn(q_),K_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Z_[n])?!!r[n]:!1}function bu(){return Q_}var J_=re({},Ro,{key:function(n){if(n.key){var r=K_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(n){return n.type==="keypress"?Da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ev=zn(J_),tv=re({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=zn(tv),nv=re({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),iv=zn(nv),rv=re({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=zn(rv),ov=re({},Ua,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=zn(ov),lv=[9,13,27,32],Pu=f&&"CompositionEvent"in window,bo=null;f&&"documentMode"in document&&(bo=document.documentMode);var uv=f&&"TextEvent"in window&&!bo,lh=f&&(!Pu||bo&&8<bo&&11>=bo),uh=" ",ch=!1;function fh(n,r){switch(n){case"keyup":return lv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function cv(n,r){switch(n){case"compositionend":return dh(r);case"keypress":return r.which!==32?null:(ch=!0,uh);case"textInput":return n=r.data,n===uh&&ch?null:n;default:return null}}function fv(n,r){if(_s)return n==="compositionend"||!Pu&&fh(n,r)?(n=ih(),Ia=Tu=ur=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return lh&&r.locale!=="ko"?null:r.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!dv[n.type]:r==="textarea"}function ph(n,r,a,c){be(c),r=za(r,"onChange"),0<r.length&&(a=new Au("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Po=null,Lo=null;function hv(n){Ih(n,0)}function Fa(n){var r=Ms(n);if(gt(r))return n}function pv(n,r){if(n==="change")return r}var mh=!1;if(f){var Lu;if(f){var Iu="oninput"in document;if(!Iu){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Iu=typeof gh.oninput=="function"}Lu=Iu}else Lu=!1;mh=Lu&&(!document.documentMode||9<document.documentMode)}function _h(){Po&&(Po.detachEvent("onpropertychange",vh),Lo=Po=null)}function vh(n){if(n.propertyName==="value"&&Fa(Lo)){var r=[];ph(r,Lo,n,G(n)),In(hv,r)}}function mv(n,r,a){n==="focusin"?(_h(),Po=r,Lo=a,Po.attachEvent("onpropertychange",vh)):n==="focusout"&&_h()}function gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fa(Lo)}function _v(n,r){if(n==="click")return Fa(r)}function vv(n,r){if(n==="input"||n==="change")return Fa(r)}function xv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ii=typeof Object.is=="function"?Object.is:xv;function Io(n,r){if(ii(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(r,p)||!ii(n[p],r[p]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,r){var a=xh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xh(a)}}function Sh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Sh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Mh(){for(var n=window,r=Nt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nt(n.document)}return r}function Du(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function yv(n){var r=Mh(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Du(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(c.start,p);c=c.end===void 0?v:Math.min(c.end,p),!n.extend&&v>c&&(p=c,c=v,v=p),p=yh(a,v);var E=yh(a,c);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>c?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sv=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Nu=null,Do=null,Uu=!1;function Eh(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||vs==null||vs!==Nt(c)||(c=vs,"selectionStart"in c&&Du(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Do&&Io(Do,c)||(Do=c,c=za(Nu,"onSelect"),0<c.length&&(r=new Au("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=vs)))}function Oa(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Fu={},Th={};f&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function ka(n){if(Fu[n])return Fu[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Th)return Fu[n]=r[a];return n}var Ah=ka("animationend"),wh=ka("animationiteration"),Rh=ka("animationstart"),Ch=ka("transitionend"),bh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,r){bh.set(n,r),l(r,[n])}for(var Ou=0;Ou<Ph.length;Ou++){var ku=Ph[Ou],Mv=ku.toLowerCase(),Ev=ku[0].toUpperCase()+ku.slice(1);cr(Mv,"on"+Ev)}cr(Ah,"onAnimationEnd"),cr(wh,"onAnimationIteration"),cr(Rh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Lh(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ma(c,r,void 0,n),n.currentTarget=null}function Ih(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var v=void 0;if(r)for(var E=c.length-1;0<=E;E--){var I=c[E],F=I.instance,ee=I.currentTarget;if(I=I.listener,F!==v&&p.isPropagationStopped())break e;Lh(p,I,ee),v=F}else for(E=0;E<c.length;E++){if(I=c[E],F=I.instance,ee=I.currentTarget,I=I.listener,F!==v&&p.isPropagationStopped())break e;Lh(p,I,ee),v=F}}}if(Br)throw n=ir,Br=!1,ir=null,n}function Ot(n,r){var a=r[ju];a===void 0&&(a=r[ju]=new Set);var c=n+"__bubble";a.has(c)||(Dh(r,n,2,!1),a.add(c))}function Bu(n,r,a){var c=0;r&&(c|=4),Dh(a,n,c,r)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[Ba]){n[Ba]=!0,i.forEach(function(a){a!=="selectionchange"&&(Tv.has(a)||Bu(a,!1,n),Bu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ba]||(r[Ba]=!0,Bu("selectionchange",!1,r))}}function Dh(n,r,a,c){switch(nh(r)){case 1:var p=k_;break;case 4:p=B_;break;default:p=Mu}a=p.bind(null,r,a,n),p=void 0,!hs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function zu(n,r,a,c,p){var v=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=c.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;E=E.return}for(;I!==null;){if(E=zr(I),E===null)return;if(F=E.tag,F===5||F===6){c=v=E;continue e}I=I.parentNode}}c=c.return}In(function(){var ee=v,_e=G(a),xe=[];e:{var me=bh.get(n);if(me!==void 0){var Ie=Au,ze=n;switch(n){case"keypress":if(Da(a)===0)break e;case"keydown":case"keyup":Ie=ev;break;case"focusin":ze="focus",Ie=Cu;break;case"focusout":ze="blur",Ie=Cu;break;case"beforeblur":case"afterblur":Ie=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=V_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=iv;break;case Ah:case wh:case Rh:Ie=X_;break;case Ch:Ie=sv;break;case"scroll":Ie=z_;break;case"wheel":Ie=av;break;case"copy":case"cut":case"paste":Ie=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ah}var Ve=(r&4)!==0,Yt=!Ve&&n==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=Mn(H,q),Ee!=null&&Ve.push(Fo(H,Ee,$)))),Yt)break;H=H.return}0<Ve.length&&(me=new Ie(me,ze,null,a,_e),xe.push({event:me,listeners:Ve}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==Rt&&(ze=a.relatedTarget||a.fromElement)&&(zr(ze)||ze[Di]))break e;if((Ie||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=ee,ze=ze?zr(ze):null,ze!==null&&(Yt=gi(ze),ze!==Yt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(Ve=sh,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=ah,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),Yt=Ie==null?me:Ms(Ie),$=ze==null?me:Ms(ze),me=new Ve(Ee,H+"leave",Ie,a,_e),me.target=Yt,me.relatedTarget=$,Ee=null,zr(_e)===ee&&(Ve=new Ve(q,H+"enter",ze,a,_e),Ve.target=$,Ve.relatedTarget=Yt,Ee=Ve),Yt=Ee,Ie&&ze)t:{for(Ve=Ie,q=ze,H=0,$=Ve;$;$=ys($))H++;for($=0,Ee=q;Ee;Ee=ys(Ee))$++;for(;0<H-$;)Ve=ys(Ve),H--;for(;0<$-H;)q=ys(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ys(Ve),q=ys(q)}Ve=null}else Ve=null;Ie!==null&&Nh(xe,me,Ie,Ve,!1),ze!==null&&Yt!==null&&Nh(xe,Yt,ze,Ve,!0)}}e:{if(me=ee?Ms(ee):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Xe=pv;else if(hh(me))if(mh)Xe=vv;else{Xe=gv;var Ke=mv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=_v);if(Xe&&(Xe=Xe(n,ee))){ph(xe,Xe,a,_e);break e}Ke&&Ke(n,me,ee),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch(Ke=ee?Ms(ee):window,n){case"focusin":(hh(Ke)||Ke.contentEditable==="true")&&(vs=Ke,Nu=ee,Do=null);break;case"focusout":Do=Nu=vs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Eh(xe,a,_e);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Eh(xe,a,_e)}var $e;if(Pu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else _s?fh(n,a)&&(tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(lh&&a.locale!=="ko"&&(_s||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&_s&&($e=ih()):(ur=_e,Tu="value"in ur?ur.value:ur.textContent,_s=!0)),Ke=za(ee,tt),0<Ke.length&&(tt=new oh(tt,n,null,a,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=dh(a),$e!==null&&(tt.data=$e)))),($e=uv?cv(n,a):fv(n,a))&&(ee=za(ee,"onBeforeInput"),0<ee.length&&(_e=new oh("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ee}),_e.data=$e))}Ih(xe,r)})}function Fo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function za(n,r){for(var a=r+"Capture",c=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Mn(n,a),v!=null&&c.unshift(Fo(n,v,p)),v=Mn(n,r),v!=null&&c.push(Fo(n,v,p))),n=n.return}return c}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,r,a,c,p){for(var v=r._reactName,E=[];a!==null&&a!==c;){var I=a,F=I.alternate,ee=I.stateNode;if(F!==null&&F===c)break;I.tag===5&&ee!==null&&(I=ee,p?(F=Mn(a,v),F!=null&&E.unshift(Fo(a,F,I))):p||(F=Mn(a,v),F!=null&&E.push(Fo(a,F,I)))),a=a.return}E.length!==0&&n.push({event:r,listeners:E})}var Av=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(Av,`
`).replace(wv,"")}function Ha(n,r,a){if(r=Uh(r),Uh(n)!==r&&a)throw Error(t(425))}function Va(){}var Hu=null,Vu=null;function Gu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(n){return Fh.resolve(null).then(n).catch(bv)}:Wu;function bv(n){setTimeout(function(){throw n})}function Xu(n,r){var a=r,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),wo(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);wo(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),vi="__reactFiber$"+Ss,Oo="__reactProps$"+Ss,Di="__reactContainer$"+Ss,ju="__reactEvents$"+Ss,Pv="__reactListeners$"+Ss,Lv="__reactHandles$"+Ss;function zr(n){var r=n[vi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Di]||a[vi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[vi])return a;n=Oh(n)}return r}n=a,a=n.parentNode}return null}function ko(n){return n=n[vi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ga(n){return n[Oo]||null}var Yu=[],Es=-1;function dr(n){return{current:n}}function kt(n){0>Es||(n.current=Yu[Es],Yu[Es]=null,Es--)}function Ut(n,r){Es++,Yu[Es]=n.current,n.current=r}var hr={},mn=dr(hr),Dn=dr(!1),Hr=hr;function Ts(n,r){var a=n.type.contextTypes;if(!a)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=r[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(n){return n=n.childContextTypes,n!=null}function Wa(){kt(Dn),kt(mn)}function kh(n,r,a){if(mn.current!==hr)throw Error(t(168));Ut(mn,r),Ut(Dn,a)}function Bh(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},a,c)}function Xa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Hr=mn.current,Ut(mn,n),Ut(Dn,Dn.current),!0}function zh(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,r,Hr),c.__reactInternalMemoizedMergedChildContext=n,kt(Dn),kt(mn),Ut(mn,n)):kt(Dn),Ut(Dn,a)}var Ni=null,ja=!1,qu=!1;function Hh(n){Ni===null?Ni=[n]:Ni.push(n)}function Iv(n){ja=!0,Hh(n)}function pr(){if(!qu&&Ni!==null){qu=!0;var n=0,r=Et;try{var a=Ni;for(Et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,ja=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(n+1)),Ra(ye,pr),p}finally{Et=r,qu=!1}}return null}var As=[],ws=0,Ya=null,qa=0,qn=[],Kn=0,Vr=null,Ui=1,Fi="";function Gr(n,r){As[ws++]=qa,As[ws++]=Ya,Ya=n,qa=r}function Vh(n,r,a){qn[Kn++]=Ui,qn[Kn++]=Fi,qn[Kn++]=Vr,Vr=n;var c=Ui;n=Fi;var p=32-st(c)-1;c&=~(1<<p),a+=1;var v=32-st(r)+p;if(30<v){var E=p-p%5;v=(c&(1<<E)-1).toString(32),c>>=E,p-=E,Ui=1<<32-st(r)+p|a<<p|c,Fi=v+n}else Ui=1<<v|a<<p|c,Fi=n}function Ku(n){n.return!==null&&(Gr(n,1),Vh(n,1,0))}function $u(n){for(;n===Ya;)Ya=As[--ws],As[ws]=null,qa=As[--ws],As[ws]=null;for(;n===Vr;)Vr=qn[--Kn],qn[Kn]=null,Fi=qn[--Kn],qn[Kn]=null,Ui=qn[--Kn],qn[Kn]=null}var Hn=null,Vn=null,zt=!1,ri=null;function Gh(n,r){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Wh(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Vr!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Zu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qu(n){if(zt){var r=Vn;if(r){var a=r;if(!Wh(n,r)){if(Zu(n))throw Error(t(418));r=fr(a.nextSibling);var c=Hn;r&&Wh(n,r)?Gh(c,a):(n.flags=n.flags&-4097|2,zt=!1,Hn=n)}}else{if(Zu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Hn=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ka(n){if(n!==Hn)return!1;if(!zt)return Xh(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Gu(n.type,n.memoizedProps)),r&&(r=Vn)){if(Zu(n))throw jh(),Error(t(418));for(;r;)Gh(n,r),r=fr(r.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Vn=fr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Vn=null}}else Vn=Hn?fr(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=Vn;n;)n=fr(n.nextSibling)}function Rs(){Vn=Hn=null,zt=!1}function Ju(n){ri===null?ri=[n]:ri.push(n)}var Dv=C.ReactCurrentBatchConfig;function Bo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var I=p.refs;E===null?delete I[v]:I[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $a(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Yh(n){var r=n._init;return r(n._payload)}function qh(n){function r(q,H){if(n){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function a(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function c(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=Mr(q,H),q.index=0,q.sibling=null,q}function v(q,H,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,H,$,Ee){return H===null||H.tag!==6?(H=Wc($,q.mode,Ee),H.return=q,H):(H=p(H,$),H.return=q,H)}function F(q,H,$,Ee){var Xe=$.type;return Xe===U?_e(q,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Yh(Xe)===H.type)?(Ee=p(H,$.props),Ee.ref=Bo(q,H,$),Ee.return=q,Ee):(Ee=yl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=Bo(q,H,$),Ee.return=q,Ee)}function ee(q,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=Xc($,q.mode,Ee),H.return=q,H):(H=p(H,$.children||[]),H.return=q,H)}function _e(q,H,$,Ee,Xe){return H===null||H.tag!==7?(H=Zr($,q.mode,Ee,Xe),H.return=q,H):(H=p(H,$),H.return=q,H)}function xe(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Wc(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return $=yl(H.type,H.key,H.props,null,q.mode,$),$.ref=Bo(q,null,H),$.return=q,$;case O:return H=Xc(H,q.mode,$),H.return=q,H;case se:var Ee=H._init;return xe(q,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=Zr(H,q.mode,$,null),H.return=q,H;$a(q,H)}return null}function me(q,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:I(q,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return $.key===Xe?F(q,H,$,Ee):null;case O:return $.key===Xe?ee(q,H,$,Ee):null;case se:return Xe=$._init,me(q,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,H,$,Ee,null);$a(q,$)}return null}function Ie(q,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,I(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return q=q.get(Ee.key===null?$:Ee.key)||null,F(H,q,Ee,Xe);case O:return q=q.get(Ee.key===null?$:Ee.key)||null,ee(H,q,Ee,Xe);case se:var Ke=Ee._init;return Ie(q,H,$,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(H,q,Ee,Xe,null);$a(H,Ee)}return null}function ze(q,H,$,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,on=null;$e!==null&&tt<$.length;tt++){$e.index>tt?(on=$e,$e=null):on=$e.sibling;var At=me(q,$e,$[tt],Ee);if(At===null){$e===null&&($e=on);break}n&&$e&&At.alternate===null&&r(q,$e),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At,$e=on}if(tt===$.length)return a(q,$e),zt&&Gr(q,tt),Xe;if($e===null){for(;tt<$.length;tt++)$e=xe(q,$[tt],Ee),$e!==null&&(H=v($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return zt&&Gr(q,tt),Xe}for($e=c(q,$e);tt<$.length;tt++)on=Ie($e,q,tt,$[tt],Ee),on!==null&&(n&&on.alternate!==null&&$e.delete(on.key===null?tt:on.key),H=v(on,H,tt),Ke===null?Xe=on:Ke.sibling=on,Ke=on);return n&&$e.forEach(function(Er){return r(q,Er)}),zt&&Gr(q,tt),Xe}function Ve(q,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ke=Xe=null,$e=H,tt=H=0,on=null,At=$.next();$e!==null&&!At.done;tt++,At=$.next()){$e.index>tt?(on=$e,$e=null):on=$e.sibling;var Er=me(q,$e,At.value,Ee);if(Er===null){$e===null&&($e=on);break}n&&$e&&Er.alternate===null&&r(q,$e),H=v(Er,H,tt),Ke===null?Xe=Er:Ke.sibling=Er,Ke=Er,$e=on}if(At.done)return a(q,$e),zt&&Gr(q,tt),Xe;if($e===null){for(;!At.done;tt++,At=$.next())At=xe(q,At.value,Ee),At!==null&&(H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return zt&&Gr(q,tt),Xe}for($e=c(q,$e);!At.done;tt++,At=$.next())At=Ie($e,q,tt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&$e.delete(At.key===null?tt:At.key),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return n&&$e.forEach(function(f0){return r(q,f0)}),zt&&Gr(q,tt),Xe}function Yt(q,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case V:e:{for(var Xe=$.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=$.type,Xe===U){if(Ke.tag===7){a(q,Ke.sibling),H=p(Ke,$.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Yh(Xe)===Ke.type){a(q,Ke.sibling),H=p(Ke,$.props),H.ref=Bo(q,Ke,$),H.return=q,q=H;break e}a(q,Ke);break}else r(q,Ke);Ke=Ke.sibling}$.type===U?(H=Zr($.props.children,q.mode,Ee,$.key),H.return=q,q=H):(Ee=yl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=Bo(q,H,$),Ee.return=q,q=Ee)}return E(q);case O:e:{for(Ke=$.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){a(q,H.sibling),H=p(H,$.children||[]),H.return=q,q=H;break e}else{a(q,H);break}else r(q,H);H=H.sibling}H=Xc($,q.mode,Ee),H.return=q,q=H}return E(q);case se:return Ke=$._init,Yt(q,H,Ke($._payload),Ee)}if(Ge($))return ze(q,H,$,Ee);if(ae($))return Ve(q,H,$,Ee);$a(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(a(q,H.sibling),H=p(H,$),H.return=q,q=H):(a(q,H),H=Wc($,q.mode,Ee),H.return=q,q=H),E(q)):a(q,H)}return Yt}var Cs=qh(!0),Kh=qh(!1),Za=dr(null),Qa=null,bs=null,ec=null;function tc(){ec=bs=Qa=null}function nc(n){var r=Za.current;kt(Za),n._currentValue=r}function ic(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ps(n,r){Qa=n,ec=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Un=!0),n.firstContext=null)}function $n(n){var r=n._currentValue;if(ec!==n)if(n={context:n,memoizedValue:r,next:null},bs===null){if(Qa===null)throw Error(t(308));bs=n,Qa.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return r}var Wr=null;function rc(n){Wr===null?Wr=[n]:Wr.push(n)}function $h(n,r,a,c){var p=r.interleaved;return p===null?(a.next=a,rc(r)):(a.next=p.next,p.next=a),r.interleaved=a,Oi(n,c)}function Oi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var mr=!1;function sc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function gr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Tt&2){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,Oi(n,a)}return p=c.interleaved,p===null?(r.next=r,rc(c)):(r.next=p.next,p.next=r),c.interleaved=r,Oi(n,a)}function Ja(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,nn(n,a)}}function Qh(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=E:v=v.next=E,a=a.next}while(a!==null);v===null?p=v=r:v=v.next=r}else p=v=r;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function el(n,r,a,c){var p=n.updateQueue;mr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var F=I,ee=F.next;F.next=null,E===null?v=ee:E.next=ee,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=F))}if(v!==null){var xe=p.baseState;E=0,_e=ee=F=null,I=v;do{var me=I.lane,Ie=I.eventTime;if((c&me)===me){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(me=r,Ie=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Ie,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ie,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:mr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Ie,F=xe):_e=_e.next=Ie,E|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(F=xe),p.baseState=F,p.firstBaseUpdate=ee,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);Yr|=E,n.lanes=E,n.memoizedState=xe}}function Jh(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var zo={},xi=dr(zo),Ho=dr(zo),Vo=dr(zo);function Xr(n){if(n===zo)throw Error(t(174));return n}function oc(n,r){switch(Ut(Vo,r),Ut(Ho,n),Ut(xi,zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=We(r,n)}kt(xi),Ut(xi,r)}function Ls(){kt(xi),kt(Ho),kt(Vo)}function ep(n){Xr(Vo.current);var r=Xr(xi.current),a=We(r,n.type);r!==a&&(Ut(Ho,n),Ut(xi,a))}function ac(n){Ho.current===n&&(kt(xi),kt(Ho))}var Ht=dr(0);function tl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var lc=[];function uc(){for(var n=0;n<lc.length;n++)lc[n]._workInProgressVersionPrimary=null;lc.length=0}var nl=C.ReactCurrentDispatcher,cc=C.ReactCurrentBatchConfig,jr=0,Vt=null,Zt=null,rn=null,il=!1,Go=!1,Wo=0,Nv=0;function gn(){throw Error(t(321))}function fc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!ii(n[a],r[a]))return!1;return!0}function dc(n,r,a,c,p,v){if(jr=v,Vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,nl.current=n===null||n.memoizedState===null?kv:Bv,n=a(c,p),Go){v=0;do{if(Go=!1,Wo=0,25<=v)throw Error(t(301));v+=1,rn=Zt=null,r.updateQueue=null,nl.current=zv,n=a(c,p)}while(Go)}if(nl.current=ol,r=Zt!==null&&Zt.next!==null,jr=0,rn=Zt=Vt=null,il=!1,r)throw Error(t(300));return n}function hc(){var n=Wo!==0;return Wo=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=n:rn=rn.next=n,rn}function Zn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var r=rn===null?Vt.memoizedState:rn.next;if(r!==null)rn=r,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Vt.memoizedState=rn=n:rn=rn.next=n}return rn}function Xo(n,r){return typeof r=="function"?r(n):r}function pc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Zt,p=c.baseQueue,v=a.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}c.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,c=c.baseState;var I=E=null,F=null,ee=v;do{var _e=ee.lane;if((jr&_e)===_e)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(I=F=xe,E=c):F=F.next=xe,Vt.lanes|=_e,Yr|=_e}ee=ee.next}while(ee!==null&&ee!==v);F===null?E=c:F.next=I,ii(c,r.memoizedState)||(Un=!0),r.memoizedState=c,r.baseState=E,r.baseQueue=F,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do v=p.lane,Vt.lanes|=v,Yr|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function mc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,v=r.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);ii(v,r.memoizedState)||(Un=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,c]}function tp(){}function np(n,r){var a=Vt,c=Zn(),p=r(),v=!ii(c.memoizedState,p);if(v&&(c.memoizedState=p,Un=!0),c=c.queue,gc(sp.bind(null,a,c,n),[n]),c.getSnapshot!==r||v||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,jo(9,rp.bind(null,a,c,p,r),void 0,null),sn===null)throw Error(t(349));jr&30||ip(a,r,p)}return p}function ip(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function rp(n,r,a,c){r.value=a,r.getSnapshot=c,op(r)&&ap(n)}function sp(n,r,a){return a(function(){op(r)&&ap(n)})}function op(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!ii(n,a)}catch{return!0}}function ap(n){var r=Oi(n,1);r!==null&&li(r,n,1,-1)}function lp(n){var r=yi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:n},r.queue=n,n=n.dispatch=Ov.bind(null,Vt,n),[r.memoizedState,n]}function jo(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function up(){return Zn().memoizedState}function rl(n,r,a,c){var p=yi();Vt.flags|=n,p.memoizedState=jo(1|r,a,void 0,c===void 0?null:c)}function sl(n,r,a,c){var p=Zn();c=c===void 0?null:c;var v=void 0;if(Zt!==null){var E=Zt.memoizedState;if(v=E.destroy,c!==null&&fc(c,E.deps)){p.memoizedState=jo(r,a,v,c);return}}Vt.flags|=n,p.memoizedState=jo(1|r,a,v,c)}function cp(n,r){return rl(8390656,8,n,r)}function gc(n,r){return sl(2048,8,n,r)}function fp(n,r){return sl(4,2,n,r)}function dp(n,r){return sl(4,4,n,r)}function hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function pp(n,r,a){return a=a!=null?a.concat([n]):null,sl(4,4,hp.bind(null,r,n),a)}function _c(){}function mp(n,r){var a=Zn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&fc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function gp(n,r){var a=Zn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&fc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function _p(n,r,a){return jr&21?(ii(a,r)||(a=Dt(),Vt.lanes|=a,Yr|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a)}function Uv(n,r){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var c=cc.transition;cc.transition={};try{n(!1),r()}finally{Et=a,cc.transition=c}}function vp(){return Zn().memoizedState}function Fv(n,r,a){var c=yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))yp(r,a);else if(a=$h(n,r,a,c),a!==null){var p=An();li(a,n,c,p),Sp(a,r,c)}}function Ov(n,r,a){var c=yr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))yp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,I=v(E,a);if(p.hasEagerState=!0,p.eagerState=I,ii(I,E)){var F=r.interleaved;F===null?(p.next=p,rc(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}a=$h(n,r,p,c),a!==null&&(p=An(),li(a,n,c,p),Sp(a,r,c))}}function xp(n){var r=n.alternate;return n===Vt||r!==null&&r===Vt}function yp(n,r){Go=il=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Sp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,nn(n,a)}}var ol={readContext:$n,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},kv={readContext:$n,useCallback:function(n,r){return yi().memoizedState=[n,r===void 0?null:r],n},useContext:$n,useEffect:cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,hp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return rl(4194308,4,n,r)},useInsertionEffect:function(n,r){return rl(4,2,n,r)},useMemo:function(n,r){var a=yi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=yi();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Fv.bind(null,Vt,n),[c.memoizedState,n]},useRef:function(n){var r=yi();return n={current:n},r.memoizedState=n},useState:lp,useDebugValue:_c,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=lp(!1),r=n[0];return n=Uv.bind(null,n[1]),yi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Vt,p=yi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),sn===null)throw Error(t(349));jr&30||ip(c,r,a)}p.memoizedState=a;var v={value:a,getSnapshot:r};return p.queue=v,cp(sp.bind(null,c,v,n),[n]),c.flags|=2048,jo(9,rp.bind(null,c,v,a,r),void 0,null),a},useId:function(){var n=yi(),r=sn.identifierPrefix;if(zt){var a=Fi,c=Ui;a=(c&~(1<<32-st(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Wo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Nv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Bv={readContext:$n,useCallback:mp,useContext:$n,useEffect:gc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:pc,useRef:up,useState:function(){return pc(Xo)},useDebugValue:_c,useDeferredValue:function(n){var r=Zn();return _p(r,Zt.memoizedState,n)},useTransition:function(){var n=pc(Xo)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},zv={readContext:$n,useCallback:mp,useContext:$n,useEffect:gc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:mc,useRef:up,useState:function(){return mc(Xo)},useDebugValue:_c,useDeferredValue:function(n){var r=Zn();return Zt===null?r.memoizedState=n:_p(r,Zt.memoizedState,n)},useTransition:function(){var n=mc(Xo)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function si(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function vc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=An(),p=yr(n),v=ki(c,p);v.payload=r,a!=null&&(v.callback=a),r=gr(n,v,p),r!==null&&(li(r,n,p,c),Ja(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=An(),p=yr(n),v=ki(c,p);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=gr(n,v,p),r!==null&&(li(r,n,p,c),Ja(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=An(),c=yr(n),p=ki(a,c);p.tag=2,r!=null&&(p.callback=r),r=gr(n,p,c),r!==null&&(li(r,n,c,a),Ja(r,n,c))}};function Mp(n,r,a,c,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,E):r.prototype&&r.prototype.isPureReactComponent?!Io(a,c)||!Io(p,v):!0}function Ep(n,r,a){var c=!1,p=hr,v=r.contextType;return typeof v=="object"&&v!==null?v=$n(v):(p=Nn(r)?Hr:mn.current,c=r.contextTypes,v=(c=c!=null)?Ts(n,p):hr),r=new r(a,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=al,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Tp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&al.enqueueReplaceState(r,r.state,null)}function xc(n,r,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},sc(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=$n(v):(v=Nn(r)?Hr:mn.current,p.context=Ts(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(vc(n,r,v,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&al.enqueueReplaceState(p,p.state,null),el(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,r){try{var a="",c=r;do a+=de(c),c=c.return;while(c);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function yc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Sc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Hv=typeof WeakMap=="function"?WeakMap:Map;function Ap(n,r,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){pl||(pl=!0,Fc=c),Sc(n,r)},a}function wp(n,r,a){a=ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=r.value;a.payload=function(){return c(p)},a.callback=function(){Sc(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Sc(n,r),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),a}function Rp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Hv;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(a)||(p.add(a),n=t0.bind(null,n,r,a),r.then(n,n))}function Cp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function bp(n,r,a,c,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ki(-1,1),r.tag=2,gr(a,r,1))),a.lanes|=1),n)}var Vv=C.ReactCurrentOwner,Un=!1;function Tn(n,r,a,c){r.child=n===null?Kh(r,null,a,c):Cs(r,n.child,a,c)}function Pp(n,r,a,c,p){a=a.render;var v=r.ref;return Ps(r,p),c=dc(n,r,a,c,v,p),a=hc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(zt&&a&&Ku(r),r.flags|=1,Tn(n,r,c,p),r.child)}function Lp(n,r,a,c,p){if(n===null){var v=a.type;return typeof v=="function"&&!Gc(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Ip(n,r,v,c,p)):(n=yl(a.type,null,c,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var E=v.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(E,c)&&n.ref===r.ref)return Bi(n,r,p)}return r.flags|=1,n=Mr(v,c),n.ref=r.ref,n.return=r,r.child=n}function Ip(n,r,a,c,p){if(n!==null){var v=n.memoizedProps;if(Io(v,c)&&n.ref===r.ref)if(Un=!1,r.pendingProps=c=v,(n.lanes&p)!==0)n.flags&131072&&(Un=!0);else return r.lanes=n.lanes,Bi(n,r,p)}return Mc(n,r,a,c,p)}function Dp(n,r,a){var c=r.pendingProps,p=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ns,Gn),Gn|=a;else{if(!(a&1073741824))return n=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ut(Ns,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Ut(Ns,Gn),Gn|=c}else v!==null?(c=v.baseLanes|a,r.memoizedState=null):c=a,Ut(Ns,Gn),Gn|=c;return Tn(n,r,p,a),r.child}function Np(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Mc(n,r,a,c,p){var v=Nn(a)?Hr:mn.current;return v=Ts(r,v),Ps(r,p),a=dc(n,r,a,c,v,p),c=hc(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Bi(n,r,p)):(zt&&c&&Ku(r),r.flags|=1,Tn(n,r,a,p),r.child)}function Up(n,r,a,c,p){if(Nn(a)){var v=!0;Xa(r)}else v=!1;if(Ps(r,p),r.stateNode===null)ul(n,r),Ep(r,a,c),xc(r,a,c,p),c=!0;else if(n===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var F=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=$n(ee):(ee=Nn(a)?Hr:mn.current,ee=Ts(r,ee));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||F!==ee)&&Tp(r,E,c,ee),mr=!1;var me=r.memoizedState;E.state=me,el(r,c,E,p),F=r.memoizedState,I!==c||me!==F||Dn.current||mr?(typeof _e=="function"&&(vc(r,a,_e,c),F=r.memoizedState),(I=mr||Mp(r,a,I,c,me,F,ee))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),E.props=c,E.state=F,E.context=ee,c=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{E=r.stateNode,Zh(n,r),I=r.memoizedProps,ee=r.type===r.elementType?I:si(r.type,I),E.props=ee,xe=r.pendingProps,me=E.context,F=a.contextType,typeof F=="object"&&F!==null?F=$n(F):(F=Nn(a)?Hr:mn.current,F=Ts(r,F));var Ie=a.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||me!==F)&&Tp(r,E,c,F),mr=!1,me=r.memoizedState,E.state=me,el(r,c,E,p);var ze=r.memoizedState;I!==xe||me!==ze||Dn.current||mr?(typeof Ie=="function"&&(vc(r,a,Ie,c),ze=r.memoizedState),(ee=mr||Mp(r,a,ee,c,me,ze,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,F)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ze),E.props=c,E.state=ze,E.context=F,c=ee):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),c=!1)}return Ec(n,r,a,c,v,p)}function Ec(n,r,a,c,p,v){Np(n,r);var E=(r.flags&128)!==0;if(!c&&!E)return p&&zh(r,a,!1),Bi(n,r,v);c=r.stateNode,Vv.current=r;var I=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&E?(r.child=Cs(r,n.child,null,v),r.child=Cs(r,null,I,v)):Tn(n,r,I,v),r.memoizedState=c.state,p&&zh(r,a,!0),r.child}function Fp(n){var r=n.stateNode;r.pendingContext?kh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&kh(n,r.context,!1),oc(n,r.containerInfo)}function Op(n,r,a,c,p){return Rs(),Ju(p),r.flags|=256,Tn(n,r,a,c),r.child}var Tc={dehydrated:null,treeContext:null,retryLane:0};function Ac(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,r,a){var c=r.pendingProps,p=Ht.current,v=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ut(Ht,p&1),n===null)return Qu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(E=c.children,n=c.fallback,v?(c=r.mode,v=r.child,E={mode:"hidden",children:E},!(c&1)&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Sl(E,c,0,null),n=Zr(n,c,a,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Ac(a),r.memoizedState=Tc,n):wc(r,E));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return Gv(n,r,E,c,I,p,a);if(v){v=c.fallback,E=r.mode,p=n.child,I=p.sibling;var F={mode:"hidden",children:c.children};return!(E&1)&&r.child!==p?(c=r.child,c.childLanes=0,c.pendingProps=F,r.deletions=null):(c=Mr(p,F),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Mr(I,v):(v=Zr(v,E,a,null),v.flags|=2),v.return=r,c.return=r,c.sibling=v,r.child=c,c=v,v=r.child,E=n.child.memoizedState,E=E===null?Ac(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~a,r.memoizedState=Tc,c}return v=n.child,n=v.sibling,c=Mr(v,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function wc(n,r){return r=Sl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ll(n,r,a,c){return c!==null&&Ju(c),Cs(r,n.child,null,a),n=wc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Gv(n,r,a,c,p,v,E){if(a)return r.flags&256?(r.flags&=-257,c=yc(Error(t(422))),ll(n,r,E,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=c.fallback,p=r.mode,c=Sl({mode:"visible",children:c.children},p,0,null),v=Zr(v,p,E,null),v.flags|=2,c.return=r,v.return=r,c.sibling=v,r.child=c,r.mode&1&&Cs(r,n.child,null,E),r.child.memoizedState=Ac(E),r.memoizedState=Tc,v);if(!(r.mode&1))return ll(n,r,E,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,v=Error(t(419)),c=yc(v,c,void 0),ll(n,r,E,c)}if(I=(E&n.childLanes)!==0,Un||I){if(c=sn,c!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(c.suspendedLanes|E)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Oi(n,p),li(c,n,p,-1))}return Vc(),c=yc(Error(t(421))),ll(n,r,E,c)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=n0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Vn=fr(p.nextSibling),Hn=r,zt=!0,ri=null,n!==null&&(qn[Kn++]=Ui,qn[Kn++]=Fi,qn[Kn++]=Vr,Ui=n.id,Fi=n.overflow,Vr=r),r=wc(r,c.children),r.flags|=4096,r)}function Bp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),ic(n.return,r,a)}function Rc(n,r,a,c,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=p)}function zp(n,r,a){var c=r.pendingProps,p=c.revealOrder,v=c.tail;if(Tn(n,r,c.children,a),c=Ht.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,r);else if(n.tag===19)Bp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Ht,c),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),Rc(r,!1,p,a,v);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&tl(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Rc(r,!0,a,null,v);break;case"together":Rc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ul(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Bi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yr|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Mr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Wv(n,r,a){switch(r.tag){case 3:Fp(r),Rs();break;case 5:ep(r);break;case 1:Nn(r.type)&&Xa(r);break;case 4:oc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,p=r.memoizedProps.value;Ut(Za,c._currentValue),c._currentValue=p;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Ht,Ht.current&1),r.flags|=128,null):a&r.child.childLanes?kp(n,r,a):(Ut(Ht,Ht.current&1),n=Bi(n,r,a),n!==null?n.sibling:null);Ut(Ht,Ht.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return zp(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Ht,Ht.current),c)break;return null;case 22:case 23:return r.lanes=0,Dp(n,r,a)}return Bi(n,r,a)}var Hp,Cc,Vp,Gp;Hp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cc=function(){},Vp=function(n,r,a,c){var p=n.memoizedProps;if(p!==c){n=r.stateNode,Xr(xi.current);var v=null;switch(a){case"input":p=k(n,p),c=k(n,c),v=[];break;case"select":p=re({},p,{value:void 0}),c=re({},c,{value:void 0}),v=[];break;case"textarea":p=A(n,p),c=A(n,c),v=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Va)}ft(a,c);var E;a=null;for(ee in p)if(!c.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var I=p[ee];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(s.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in c){var F=c[ee];if(I=p!=null?p[ee]:void 0,c.hasOwnProperty(ee)&&F!==I&&(F!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in F)F.hasOwnProperty(E)&&I[E]!==F[E]&&(a||(a={}),a[E]=F[E])}else a||(v||(v=[]),v.push(ee,a)),a=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,I=I?I.__html:void 0,F!=null&&I!==F&&(v=v||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(s.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&Ot("scroll",n),v||I===F||(v=[])):(v=v||[]).push(ee,F))}a&&(v=v||[]).push("style",a);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},Gp=function(n,r,a,c){a!==c&&(r.flags|=4)};function Yo(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Xv(n,r,a){var c=r.pendingProps;switch($u(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Nn(r.type)&&Wa(),_n(r),null;case 3:return c=r.stateNode,Ls(),kt(Dn),kt(mn),uc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ka(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ri!==null&&(Bc(ri),ri=null))),Cc(n,r),_n(r),null;case 5:ac(r);var p=Xr(Vo.current);if(a=r.type,n!==null&&r.stateNode!=null)Vp(n,r,a,c,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=Xr(xi.current),Ka(r)){c=r.stateNode,a=r.type;var v=r.memoizedProps;switch(c[vi]=r,c[Oo]=v,n=(r.mode&1)!==0,a){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(p=0;p<No.length;p++)Ot(No[p],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":Sn(c,v),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Ot("invalid",c);break;case"textarea":Z(c,v),Ot("invalid",c)}ft(a,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var I=v[E];E==="children"?typeof I=="string"?c.textContent!==I&&(v.suppressHydrationWarning!==!0&&Ha(c.textContent,I,n),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&Ha(c.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ot("scroll",c)}switch(a){case"input":Lt(c),je(c,v,!0);break;case"textarea":Lt(c),ge(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Va)}c=p,r.updateQueue=c,c!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[vi]=r,n[Oo]=c,Hp(n,r,!1,!1),r.stateNode=n;e:{switch(E=nt(a,c),a){case"dialog":Ot("cancel",n),Ot("close",n),p=c;break;case"iframe":case"object":case"embed":Ot("load",n),p=c;break;case"video":case"audio":for(p=0;p<No.length;p++)Ot(No[p],n);p=c;break;case"source":Ot("error",n),p=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),p=c;break;case"details":Ot("toggle",n),p=c;break;case"input":Sn(n,c),p=k(n,c),Ot("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=re({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":Z(n,c),p=A(n,c),Ot("invalid",n);break;default:p=c}ft(a,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var F=I[v];v==="style"?Je(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(n,F)):v==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&Ot("scroll",n):F!=null&&L(n,v,F,E))}switch(a){case"input":Lt(n),je(n,c,!1);break;case"textarea":Lt(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?P(n,!!c.multiple,v,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Va)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)Gp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Xr(Vo.current),Xr(xi.current),Ka(r)){if(c=r.stateNode,a=r.memoizedProps,c[vi]=r,(v=c.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Ha(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ha(c.nodeValue,a,(n.mode&1)!==0)}v&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[vi]=r,r.stateNode=c}return _n(r),null;case 13:if(kt(Ht),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Vn!==null&&r.mode&1&&!(r.flags&128))jh(),Rs(),r.flags|=98560,v=!1;else if(v=Ka(r),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[vi]=r}else Rs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_n(r),v=!1}else ri!==null&&(Bc(ri),ri=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ht.current&1?Qt===0&&(Qt=3):Vc())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return Ls(),Cc(n,r),n===null&&Uo(r.stateNode.containerInfo),_n(r),null;case 10:return nc(r.type._context),_n(r),null;case 17:return Nn(r.type)&&Wa(),_n(r),null;case 19:if(kt(Ht),v=r.memoizedState,v===null)return _n(r),null;if(c=(r.flags&128)!==0,E=v.rendering,E===null)if(c)Yo(v,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(E=tl(n),E!==null){for(r.flags|=128,Yo(v,!1),c=E.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)v=a,n=c,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ut(Ht,Ht.current&1|2),r.child}n=n.sibling}v.tail!==null&&K()>Us&&(r.flags|=128,c=!0,Yo(v,!1),r.lanes=4194304)}else{if(!c)if(n=tl(E),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Yo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!zt)return _n(r),null}else 2*K()-v.renderingStartTime>Us&&a!==1073741824&&(r.flags|=128,c=!0,Yo(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(a=v.last,a!==null?a.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=K(),r.sibling=null,a=Ht.current,Ut(Ht,c?a&1|2:a&1),r):(_n(r),null);case 22:case 23:return Hc(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Gn&1073741824&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function jv(n,r){switch($u(r),r.tag){case 1:return Nn(r.type)&&Wa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ls(),kt(Dn),kt(mn),uc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return ac(r),null;case 13:if(kt(Ht),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Rs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Ht),null;case 4:return Ls(),null;case 10:return nc(r.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var cl=!1,vn=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ds(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,r,c)}else a.current=null}function bc(n,r,a){try{a()}catch(c){jt(n,r,c)}}var Wp=!1;function qv(n,r){if(Hu=Pa,n=Mh(),Du(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var E=0,I=-1,F=-1,ee=0,_e=0,xe=n,me=null;t:for(;;){for(var Ie;xe!==a||p!==0&&xe.nodeType!==3||(I=E+p),xe!==v||c!==0&&xe.nodeType!==3||(F=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===n)break t;if(me===a&&++ee===p&&(I=E),me===v&&++_e===c&&(F=E),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}a=I===-1||F===-1?null:{start:I,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vu={focusedElem:n,selectionRange:a},Pa=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Yt=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:si(r.type,Ve),Yt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){jt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=Wp,Wp=!1,ze}function qo(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&bc(r,a,v)}p=p.next}while(p!==c)}}function fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Pc(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Xp(n){var r=n.alternate;r!==null&&(n.alternate=null,Xp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[vi],delete r[Oo],delete r[ju],delete r[Pv],delete r[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lc(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Va));else if(c!==4&&(n=n.child,n!==null))for(Lc(n,r,a),n=n.sibling;n!==null;)Lc(n,r,a),n=n.sibling}function Ic(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ic(n,r,a),n=n.sibling;n!==null;)Ic(n,r,a),n=n.sibling}var cn=null,oi=!1;function _r(n,r,a){for(a=a.child;a!==null;)qp(n,r,a),a=a.sibling}function qp(n,r,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:vn||Ds(a,r);case 6:var c=cn,p=oi;cn=null,_r(n,r,a),cn=c,oi=p,cn!==null&&(oi?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(oi?(n=cn,a=a.stateNode,n.nodeType===8?Xu(n.parentNode,a):n.nodeType===1&&Xu(n,a),wo(n)):Xu(cn,a.stateNode));break;case 4:c=cn,p=oi,cn=a.stateNode.containerInfo,oi=!0,_r(n,r,a),cn=c,oi=p;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&(v&2||v&4)&&bc(a,r,E),p=p.next}while(p!==c)}_r(n,r,a);break;case 1:if(!vn&&(Ds(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,r,I)}_r(n,r,a);break;case 21:_r(n,r,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,_r(n,r,a),vn=c):_r(n,r,a);break;default:_r(n,r,a)}}function Kp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Yv),r.forEach(function(c){var p=i0.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function ai(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var v=n,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,oi=!1;break e;case 3:cn=I.stateNode.containerInfo,oi=!0;break e;case 4:cn=I.stateNode.containerInfo,oi=!0;break e}I=I.return}if(cn===null)throw Error(t(160));qp(v,E,p),cn=null,oi=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(ee){jt(p,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)$p(r,n),r=r.sibling}function $p(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(r,n),Si(n),c&4){try{qo(3,n,n.return),fl(3,n)}catch(Ve){jt(n,n.return,Ve)}try{qo(5,n,n.return)}catch(Ve){jt(n,n.return,Ve)}}break;case 1:ai(r,n),Si(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(ai(r,n),Si(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(Ve){jt(n,n.return,Ve)}}if(c&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=a!==null?a.memoizedProps:v,I=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&ht(p,v),nt(I,E);var ee=nt(I,v);for(E=0;E<F.length;E+=2){var _e=F[E],xe=F[E+1];_e==="style"?Je(p,xe):_e==="dangerouslySetInnerHTML"?Ue(p,xe):_e==="children"?ut(p,xe):L(p,_e,xe,ee)}switch(I){case"input":ct(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?P(p,!!v.multiple,Ie,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Oo]=v}catch(Ve){jt(n,n.return,Ve)}}break;case 6:if(ai(r,n),Si(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ve){jt(n,n.return,Ve)}}break;case 3:if(ai(r,n),Si(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(r.containerInfo)}catch(Ve){jt(n,n.return,Ve)}break;case 4:ai(r,n),Si(n);break;case 13:ai(r,n),Si(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Uc=K())),c&4&&Kp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ee=vn)||_e,ai(r,n),vn=ee):ai(r,n),Si(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&n.mode&1)for(Fe=n,_e=n.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:qo(4,me,me.return);break;case 1:Ds(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){c=me,a=me.return;try{r=c,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){jt(c,a,Ve)}}break;case 5:Ds(me,me.return);break;case 22:if(me.memoizedState!==null){Jp(xe);continue}}Ie!==null?(Ie.return=me,Fe=Ie):Jp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,ee?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=xe.stateNode,F=xe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,I.style.display=qe("display",E))}catch(Ve){jt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){jt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ai(r,n),Si(n),c&4&&Kp(n);break;case 21:break;default:ai(r,n),Si(n)}}function Si(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(jp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ut(p,""),c.flags&=-33);var v=Yp(n);Ic(n,v,p);break;case 3:case 4:var E=c.stateNode.containerInfo,I=Yp(n);Lc(n,I,E);break;default:throw Error(t(161))}}catch(F){jt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Kv(n,r,a){Fe=n,Zp(n)}function Zp(n,r,a){for(var c=(n.mode&1)!==0;Fe!==null;){var p=Fe,v=p.child;if(p.tag===22&&c){var E=p.memoizedState!==null||cl;if(!E){var I=p.alternate,F=I!==null&&I.memoizedState!==null||vn;I=cl;var ee=vn;if(cl=E,(vn=F)&&!ee)for(Fe=p;Fe!==null;)E=Fe,F=E.child,E.tag===22&&E.memoizedState!==null?em(p):F!==null?(F.return=E,Fe=F):em(p);for(;v!==null;)Fe=v,Zp(v),v=v.sibling;Fe=p,cl=I,vn=ee}Qp(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Fe=v):Qp(n)}}function Qp(n){for(;Fe!==null;){var r=Fe;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:vn||fl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!vn)if(a===null)c.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:si(r.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Jh(r,v,c);break;case 3:var E=r.updateQueue;if(E!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Jh(r,E,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&wo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Pc(r)}catch(me){jt(r,r.return,me)}}if(r===n){Fe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function Jp(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Fe=a;break}Fe=r.return}}function em(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{fl(4,r)}catch(F){jt(r,a,F)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var p=r.return;try{c.componentDidMount()}catch(F){jt(r,p,F)}}var v=r.return;try{Pc(r)}catch(F){jt(r,v,F)}break;case 5:var E=r.return;try{Pc(r)}catch(F){jt(r,E,F)}}}catch(F){jt(r,r.return,F)}if(r===n){Fe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Fe=I;break}Fe=r.return}}var $v=Math.ceil,dl=C.ReactCurrentDispatcher,Dc=C.ReactCurrentOwner,Qn=C.ReactCurrentBatchConfig,Tt=0,sn=null,qt=null,fn=0,Gn=0,Ns=dr(0),Qt=0,Ko=null,Yr=0,hl=0,Nc=0,$o=null,Fn=null,Uc=0,Us=1/0,zi=null,pl=!1,Fc=null,vr=null,ml=!1,xr=null,gl=0,Zo=0,Oc=null,_l=-1,vl=0;function An(){return Tt&6?K():_l!==-1?_l:_l=K()}function yr(n){return n.mode&1?Tt&2&&fn!==0?fn&-fn:Dv.transition!==null?(vl===0&&(vl=Dt()),vl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:nh(n.type)),n):1}function li(n,r,a,c){if(50<Zo)throw Zo=0,Oc=null,Error(t(185));tn(n,a,c),(!(Tt&2)||n!==sn)&&(n===sn&&(!(Tt&2)&&(hl|=a),Qt===4&&Sr(n,fn)),On(n,c),a===1&&Tt===0&&!(r.mode&1)&&(Us=K()+500,ja&&pr()))}function On(n,r){var a=n.callbackNode;En(n,r);var c=hn(n,n===sn?fn:0);if(c===0)a!==null&&w(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&w(a),r===1)n.tag===0?Iv(nm.bind(null,n)):Hh(nm.bind(null,n)),Cv(function(){!(Tt&6)&&pr()}),a=null;else{switch(_i(c)){case 1:a=ye;break;case 4:a=Re;break;case 16:a=Le;break;case 536870912:a=et;break;default:a=Le}a=cm(a,tm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function tm(n,r){if(_l=-1,vl=0,Tt&6)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=hn(n,n===sn?fn:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=xl(n,c);else{r=c;var p=Tt;Tt|=2;var v=rm();(sn!==n||fn!==r)&&(zi=null,Us=K()+500,Kr(n,r));do try{Jv();break}catch(I){im(n,I)}while(!0);tc(),dl.current=v,Tt=p,qt!==null?r=0:(sn=null,fn=0,r=Qt)}if(r!==0){if(r===2&&(p=Ii(n),p!==0&&(c=p,r=kc(n,p))),r===1)throw a=Ko,Kr(n,0),Sr(n,c),On(n,K()),a;if(r===6)Sr(n,c);else{if(p=n.current.alternate,!(c&30)&&!Zv(p)&&(r=xl(n,c),r===2&&(v=Ii(n),v!==0&&(c=v,r=kc(n,v))),r===1))throw a=Ko,Kr(n,0),Sr(n,c),On(n,K()),a;switch(n.finishedWork=p,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:$r(n,Fn,zi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(r=Uc+500-K(),10<r)){if(hn(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Wu($r.bind(null,n,Fn,zi),r);break}$r(n,Fn,zi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,p=-1;0<c;){var E=31-st(c);v=1<<E,E=r[E],E>p&&(p=E),c&=~v}if(c=p,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$v(c/1960))-c,10<c){n.timeoutHandle=Wu($r.bind(null,n,Fn,zi),c);break}$r(n,Fn,zi);break;case 5:$r(n,Fn,zi);break;default:throw Error(t(329))}}}return On(n,K()),n.callbackNode===a?tm.bind(null,n):null}function kc(n,r){var a=$o;return n.current.memoizedState.isDehydrated&&(Kr(n,r).flags|=256),n=xl(n,r),n!==2&&(r=Fn,Fn=a,r!==null&&Bc(r)),n}function Bc(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function Zv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],v=p.getSnapshot;p=p.value;try{if(!ii(v(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Sr(n,r){for(r&=~Nc,r&=~hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-st(r),c=1<<a;n[a]=-1,r&=~c}}function nm(n){if(Tt&6)throw Error(t(327));Fs();var r=hn(n,0);if(!(r&1))return On(n,K()),null;var a=xl(n,r);if(n.tag!==0&&a===2){var c=Ii(n);c!==0&&(r=c,a=kc(n,c))}if(a===1)throw a=Ko,Kr(n,0),Sr(n,r),On(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,$r(n,Fn,zi),On(n,K()),null}function zc(n,r){var a=Tt;Tt|=1;try{return n(r)}finally{Tt=a,Tt===0&&(Us=K()+500,ja&&pr())}}function qr(n){xr!==null&&xr.tag===0&&!(Tt&6)&&Fs();var r=Tt;Tt|=1;var a=Qn.transition,c=Et;try{if(Qn.transition=null,Et=1,n)return n()}finally{Et=c,Qn.transition=a,Tt=r,!(Tt&6)&&pr()}}function Hc(){Gn=Ns.current,kt(Ns)}function Kr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Rv(a)),qt!==null)for(a=qt.return;a!==null;){var c=a;switch($u(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wa();break;case 3:Ls(),kt(Dn),kt(mn),uc();break;case 5:ac(c);break;case 4:Ls();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:nc(c.type._context);break;case 22:case 23:Hc()}a=a.return}if(sn=n,qt=n=Mr(n.current,null),fn=Gn=r,Qt=0,Ko=null,Nc=hl=Yr=0,Fn=$o=null,Wr!==null){for(r=0;r<Wr.length;r++)if(a=Wr[r],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,v=a.pending;if(v!==null){var E=v.next;v.next=p,c.next=E}a.pending=c}Wr=null}return n}function im(n,r){do{var a=qt;try{if(tc(),nl.current=ol,il){for(var c=Vt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}il=!1}if(jr=0,rn=Zt=Vt=null,Go=!1,Wo=0,Dc.current=null,a===null||a.return===null){Qt=1,Ko=r,qt=null;break}e:{var v=n,E=a.return,I=a,F=r;if(r=fn,I.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,_e=I,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Cp(E);if(Ie!==null){Ie.flags&=-257,bp(Ie,E,I,v,r),Ie.mode&1&&Rp(v,ee,r),r=Ie,F=ee;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),r.updateQueue=Ve}else ze.add(F);break e}else{if(!(r&1)){Rp(v,ee,r),Vc();break e}F=Error(t(426))}}else if(zt&&I.mode&1){var Yt=Cp(E);if(Yt!==null){!(Yt.flags&65536)&&(Yt.flags|=256),bp(Yt,E,I,v,r),Ju(Is(F,I));break e}}v=F=Is(F,I),Qt!==4&&(Qt=2),$o===null?$o=[v]:$o.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Ap(v,F,r);Qh(v,q);break e;case 1:I=F;var H=v.type,$=v.stateNode;if(!(v.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(vr===null||!vr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=wp(v,I,r);Qh(v,Ee);break e}}v=v.return}while(v!==null)}om(a)}catch(Xe){r=Xe,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function rm(){var n=dl.current;return dl.current=ol,n===null?ol:n}function Vc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||!(Yr&268435455)&&!(hl&268435455)||Sr(sn,fn)}function xl(n,r){var a=Tt;Tt|=2;var c=rm();(sn!==n||fn!==r)&&(zi=null,Kr(n,r));do try{Qv();break}catch(p){im(n,p)}while(!0);if(tc(),Tt=a,dl.current=c,qt!==null)throw Error(t(261));return sn=null,fn=0,Qt}function Qv(){for(;qt!==null;)sm(qt)}function Jv(){for(;qt!==null&&!W();)sm(qt)}function sm(n){var r=um(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?om(n):qt=r,Dc.current=null}function om(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=jv(a,r),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,qt=null;return}}else if(a=Xv(a,r,Gn),a!==null){qt=a;return}if(r=r.sibling,r!==null){qt=r;return}qt=r=n}while(r!==null);Qt===0&&(Qt=5)}function $r(n,r,a){var c=Et,p=Qn.transition;try{Qn.transition=null,Et=1,e0(n,r,a,c)}finally{Qn.transition=p,Et=c}return null}function e0(n,r,a,c){do Fs();while(xr!==null);if(Tt&6)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(un(n,v),n===sn&&(qt=sn=null,fn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ml||(ml=!0,cm(Le,function(){return Fs(),null})),v=(a.flags&15990)!==0,a.subtreeFlags&15990||v){v=Qn.transition,Qn.transition=null;var E=Et;Et=1;var I=Tt;Tt|=4,Dc.current=null,qv(n,a),$p(a,n),yv(Vu),Pa=!!Hu,Vu=Hu=null,n.current=a,Kv(a),J(),Tt=I,Et=E,Qn.transition=v}else n.current=a;if(ml&&(ml=!1,xr=n,gl=p),v=n.pendingLanes,v===0&&(vr=null),vt(a.stateNode),On(n,K()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(pl)throw pl=!1,n=Fc,Fc=null,n;return gl&1&&n.tag!==0&&Fs(),v=n.pendingLanes,v&1?n===Oc?Zo++:(Zo=0,Oc=n):Zo=0,pr(),null}function Fs(){if(xr!==null){var n=_i(gl),r=Qn.transition,a=Et;try{if(Qn.transition=null,Et=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,gl=0,Tt&6)throw Error(t(331));var p=Tt;for(Tt|=4,Fe=n.current;Fe!==null;){var v=Fe,E=v.child;if(Fe.flags&16){var I=v.deletions;if(I!==null){for(var F=0;F<I.length;F++){var ee=I[F];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:qo(8,_e,v)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Ie=_e.return;if(Xp(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Ie,Fe=me;break}Fe=Ie}}}var ze=v.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Yt=Ve.sibling;Ve.sibling=null,Ve=Yt}while(Ve!==null)}}Fe=v}}if(v.subtreeFlags&2064&&E!==null)E.return=v,Fe=E;else e:for(;Fe!==null;){if(v=Fe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:qo(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Fe=q;break e}Fe=v.return}}var H=n.current;for(Fe=H;Fe!==null;){E=Fe;var $=E.child;if(E.subtreeFlags&2064&&$!==null)$.return=E,Fe=$;else e:for(E=H;Fe!==null;){if(I=Fe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:fl(9,I)}}catch(Xe){jt(I,I.return,Xe)}if(I===E){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(Tt=p,pr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}c=!0}return c}finally{Et=a,Qn.transition=r}}return!1}function am(n,r,a){r=Is(a,r),r=Ap(n,r,1),n=gr(n,r,1),r=An(),n!==null&&(tn(n,1,r),On(n,r))}function jt(n,r,a){if(n.tag===3)am(n,n,a);else for(;r!==null;){if(r.tag===3){am(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){n=Is(a,n),n=wp(r,n,1),r=gr(r,n,1),n=An(),r!==null&&(tn(r,1,n),On(r,n));break}}r=r.return}}function t0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=An(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(fn&a)===a&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>K()-Uc?Kr(n,0):Nc|=a),On(n,r)}function lm(n,r){r===0&&(n.mode&1?(r=Xt,Xt<<=1,!(Xt&130023424)&&(Xt=4194304)):r=1);var a=An();n=Oi(n,r),n!==null&&(tn(n,r,a),On(n,a))}function n0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),lm(n,a)}function i0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),lm(n,a)}var um;um=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Dn.current)Un=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Un=!1,Wv(n,r,a);Un=!!(n.flags&131072)}else Un=!1,zt&&r.flags&1048576&&Vh(r,qa,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;ul(n,r),n=r.pendingProps;var p=Ts(r,mn.current);Ps(r,a),p=dc(null,r,c,n,p,a);var v=hc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Nn(c)?(v=!0,Xa(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,sc(r),p.updater=al,r.stateNode=p,p._reactInternals=r,xc(r,c,n,a),r=Ec(null,r,c,!0,v,a)):(r.tag=0,zt&&v&&Ku(r),Tn(null,r,p,a),r=r.child),r;case 16:c=r.elementType;e:{switch(ul(n,r),n=r.pendingProps,p=c._init,c=p(c._payload),r.type=c,p=r.tag=s0(c),n=si(c,n),p){case 0:r=Mc(null,r,c,n,a);break e;case 1:r=Up(null,r,c,n,a);break e;case 11:r=Pp(null,r,c,n,a);break e;case 14:r=Lp(null,r,c,si(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:si(c,p),Mc(n,r,c,p,a);case 1:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:si(c,p),Up(n,r,c,p,a);case 3:e:{if(Fp(r),n===null)throw Error(t(387));c=r.pendingProps,v=r.memoizedState,p=v.element,Zh(n,r),el(r,c,null,a);var E=r.memoizedState;if(c=E.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Is(Error(t(423)),r),r=Op(n,r,c,a,p);break e}else if(c!==p){p=Is(Error(t(424)),r),r=Op(n,r,c,a,p);break e}else for(Vn=fr(r.stateNode.containerInfo.firstChild),Hn=r,zt=!0,ri=null,a=Kh(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===p){r=Bi(n,r,a);break e}Tn(n,r,c,a)}r=r.child}return r;case 5:return ep(r),n===null&&Qu(r),c=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,Gu(c,p)?E=null:v!==null&&Gu(c,v)&&(r.flags|=32),Np(n,r),Tn(n,r,E,a),r.child;case 6:return n===null&&Qu(r),null;case 13:return kp(n,r,a);case 4:return oc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Cs(r,null,c,a):Tn(n,r,c,a),r.child;case 11:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:si(c,p),Pp(n,r,c,p,a);case 7:return Tn(n,r,r.pendingProps,a),r.child;case 8:return Tn(n,r,r.pendingProps.children,a),r.child;case 12:return Tn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ut(Za,c._currentValue),c._currentValue=E,v!==null)if(ii(v.value,E)){if(v.children===p.children&&!Dn.current){r=Bi(n,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){E=v.child;for(var F=I.firstContext;F!==null;){if(F.context===c){if(v.tag===1){F=ki(-1,a&-a),F.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),ee.pending=F}}v.lanes|=a,F=v.alternate,F!==null&&(F.lanes|=a),ic(v.return,a,r),I.lanes|=a;break}F=F.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),ic(E,a,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Tn(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,c=r.pendingProps.children,Ps(r,a),p=$n(p),c=c(p),r.flags|=1,Tn(n,r,c,a),r.child;case 14:return c=r.type,p=si(c,r.pendingProps),p=si(c.type,p),Lp(n,r,c,p,a);case 15:return Ip(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:si(c,p),ul(n,r),r.tag=1,Nn(c)?(n=!0,Xa(r)):n=!1,Ps(r,a),Ep(r,c,p),xc(r,c,p,a),Ec(null,r,c,!0,n,a);case 19:return zp(n,r,a);case 22:return Dp(n,r,a)}throw Error(t(156,r.tag))};function cm(n,r){return Ra(n,r)}function r0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,r,a,c){return new r0(n,r,a,c)}function Gc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s0(n){if(typeof n=="function")return Gc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===he)return 14}return 2}function Mr(n,r){var a=n.alternate;return a===null?(a=Jn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,r,a,c,p,v){var E=2;if(c=n,typeof n=="function")Gc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return Zr(a.children,p,v,r);case X:E=8,p|=8;break;case b:return n=Jn(12,a,r,p|2),n.elementType=b,n.lanes=v,n;case te:return n=Jn(13,a,r,p),n.elementType=te,n.lanes=v,n;case ce:return n=Jn(19,a,r,p),n.elementType=ce,n.lanes=v,n;case le:return Sl(a,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case he:E=14;break e;case se:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Jn(E,a,r,p),r.elementType=n,r.type=c,r.lanes=v,r}function Zr(n,r,a,c){return n=Jn(7,n,c,r),n.lanes=a,n}function Sl(n,r,a,c){return n=Jn(22,n,c,r),n.elementType=le,n.lanes=a,n.stateNode={isHidden:!1},n}function Wc(n,r,a){return n=Jn(6,n,null,r),n.lanes=a,n}function Xc(n,r,a){return r=Jn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function o0(n,r,a,c,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function jc(n,r,a,c,p,v,E,I,F){return n=new o0(n,r,a,I,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Jn(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},sc(v),n}function a0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function fm(n){if(!n)return hr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Nn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return Bh(n,a,r)}return r}function dm(n,r,a,c,p,v,E,I,F){return n=jc(a,c,!0,n,p,v,E,I,F),n.context=fm(null),a=n.current,c=An(),p=yr(a),v=ki(c,p),v.callback=r??null,gr(a,v,p),n.current.lanes=p,tn(n,p,c),On(n,c),n}function Ml(n,r,a,c){var p=r.current,v=An(),E=yr(p);return a=fm(a),r.context===null?r.context=a:r.pendingContext=a,r=ki(v,E),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=gr(p,r,E),n!==null&&(li(n,p,E,v),Ja(n,p,E)),E}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Yc(n,r){hm(n,r),(n=n.alternate)&&hm(n,r)}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qc(n){this._internalRoot=n}Tl.prototype.render=qc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ml(n,r,null,null)},Tl.prototype.unmount=qc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qr(function(){Ml(null,n,null,null)}),r[Di]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Zd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<lr.length&&r!==0&&r<lr[a].priority;a++);lr.splice(a,0,n),a===0&&eh(n)}};function Kc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function l0(n,r,a,c,p){if(p){if(typeof c=="function"){var v=c;c=function(){var ee=El(E);v.call(ee)}}var E=dm(r,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=E,n[Di]=E.current,Uo(n.nodeType===8?n.parentNode:n),qr(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var ee=El(F);I.call(ee)}}var F=jc(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=F,n[Di]=F.current,Uo(n.nodeType===8?n.parentNode:n),qr(function(){Ml(r,F,a,c)}),F}function wl(n,r,a,c,p){var v=a._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var I=p;p=function(){var F=El(E);I.call(F)}}Ml(r,E,n,p)}else E=l0(a,r,n,p,c);return El(E)}Kd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=_t(r.pendingLanes);a!==0&&(nn(r,a|1),On(r,K()),!(Tt&6)&&(Us=K()+500,pr()))}break;case 13:qr(function(){var c=Oi(n,1);if(c!==null){var p=An();li(c,n,1,p)}}),Yc(n,1)}},yu=function(n){if(n.tag===13){var r=Oi(n,134217728);if(r!==null){var a=An();li(r,n,134217728,a)}Yc(n,134217728)}},$d=function(n){if(n.tag===13){var r=yr(n),a=Oi(n,r);if(a!==null){var c=An();li(a,n,r,c)}Yc(n,r)}},Zd=function(){return Et},Qd=function(n,r){var a=Et;try{return Et=n,r()}finally{Et=a}},we=function(n,r,a){switch(r){case"input":if(ct(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var p=Ga(c);if(!p)throw Error(t(90));gt(c),ct(c,p)}}}break;case"textarea":pe(n,a);break;case"select":r=a.value,r!=null&&P(n,!!a.multiple,r,!1)}},Ft=zc,$t=qr;var u0={usingClientEntryPoint:!1,Events:[ko,Ms,Ga,be,it,zc]},Qo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c0={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Qe=Rl.inject(c0),He=Rl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0,kn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(r))throw Error(t(200));return a0(n,r,null,a)},kn.createRoot=function(n,r){if(!Kc(n))throw Error(t(299));var a=!1,c="",p=pm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=jc(n,1,!1,null,null,a,!1,c,p),n[Di]=r.current,Uo(n.nodeType===8?n.parentNode:n),new qc(r)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Aa(r),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return qr(n)},kn.hydrate=function(n,r,a){if(!Al(r))throw Error(t(200));return wl(null,n,r,!0,a)},kn.hydrateRoot=function(n,r,a){if(!Kc(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,v="",E=pm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),r=dm(r,null,n,1,a??null,p,!1,v,E),n[Di]=r.current,Uo(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new Tl(r)},kn.render=function(n,r,a){if(!Al(r))throw Error(t(200));return wl(null,n,r,!1,a)},kn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},kn.unstable_batchedUpdates=zc,kn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,r,a,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Em;function v0(){if(Em)return Qc.exports;Em=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qc.exports=_0(),Qc.exports}var Tm;function x0(){if(Tm)return Cl;Tm=1;var o=v0();return Cl.createRoot=o.createRoot,Cl.hydrateRoot=o.hydrateRoot,Cl}var y0=x0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="172",S0=0,Am=1,M0=2,Yg=1,E0=2,Yi=3,Ji=0,Bn=1,Ei=2,Nr=0,to=1,wm=2,Rm=3,Cm=4,T0=5,as=100,A0=101,w0=102,R0=103,C0=104,b0=200,P0=201,L0=202,I0=203,Bf=204,zf=205,D0=206,N0=207,U0=208,F0=209,O0=210,k0=211,B0=212,z0=213,H0=214,Hf=0,Vf=1,Gf=2,so=3,Wf=4,Xf=5,jf=6,Yf=7,qg=0,V0=1,G0=2,Ur=0,W0=1,X0=2,j0=3,Y0=4,q0=5,K0=6,$0=7,bm="attached",Z0="detached",Kg=300,oo=301,ao=302,qf=303,Kf=304,pu=306,lo=1e3,Ir=1001,uu=1002,bn=1003,$g=1004,ua=1005,jn=1006,nu=1007,Ki=1008,er=1009,Zg=1010,Qg=1011,pa=1012,Ld=1013,fs=1014,pi=1015,va=1016,Id=1017,Dd=1018,uo=1020,Jg=35902,e_=1021,t_=1022,ni=1023,n_=1024,i_=1025,no=1026,co=1027,Nd=1028,Ud=1029,r_=1030,Fd=1031,Od=1033,iu=33776,ru=33777,su=33778,ou=33779,$f=35840,Zf=35841,Qf=35842,Jf=35843,ed=36196,td=37492,nd=37496,id=37808,rd=37809,sd=37810,od=37811,ad=37812,ld=37813,ud=37814,cd=37815,fd=37816,dd=37817,hd=37818,pd=37819,md=37820,gd=37821,au=36492,_d=36494,vd=36495,s_=36283,xd=36284,yd=36285,Sd=36286,ma=2300,ga=2301,tf=2302,Pm=2400,Lm=2401,Im=2402,Q0=2500,J0=0,o_=1,Md=2,ex=3200,tx=3201,a_=0,nx=1,Lr="",dn="srgb",Ln="srgb-linear",cu="linear",It="srgb",Os=7680,Dm=519,ix=512,rx=513,sx=514,l_=515,ox=516,ax=517,lx=518,ux=519,Ed=35044,Nm="300 es",$i=2e3,fu=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Um=1234567;const fa=Math.PI/180,fo=180/Math.PI;function mi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function pt(o,e,t){return Math.max(e,Math.min(t,o))}function kd(o,e){return(o%e+e)%e}function cx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function fx(o,e,t){return o!==e?(t-o)/(e-o):0}function da(o,e,t){return(1-t)*o+t*e}function dx(o,e,t,i){return da(o,e,1-Math.exp(-t*i))}function hx(o,e=1){return e-Math.abs(kd(o,e*2)-e)}function px(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function mx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function gx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function _x(o,e){return o+Math.random()*(e-o)}function vx(o){return o*(.5-Math.random())}function xx(o){o!==void 0&&(Um=o);let e=Um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yx(o){return o*fa}function Sx(o){return o*fo}function Mx(o){return(o&o-1)===0&&o!==0}function Ex(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Tx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ax(o,e,t,i,s){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),h=l((e+i)/2),m=u((e+i)/2),g=l((e-i)/2),_=u((e-i)/2),y=l((i-e)/2),M=u((i-e)/2);switch(s){case"XYX":o.set(f*m,d*g,d*_,f*h);break;case"YZY":o.set(d*_,f*m,d*g,f*h);break;case"ZXZ":o.set(d*g,d*_,f*m,f*h);break;case"XZX":o.set(f*m,d*M,d*y,f*h);break;case"YXY":o.set(d*y,f*m,d*M,f*h);break;case"ZYZ":o.set(d*M,d*y,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const wx={DEG2RAD:fa,RAD2DEG:fo,generateUUID:mi,clamp:pt,euclideanModulo:kd,mapLinear:cx,inverseLerp:fx,lerp:da,damp:dx,pingpong:hx,smoothstep:px,smootherstep:mx,randInt:gx,randFloat:_x,randFloatSpread:vx,seededRandom:xx,degToRad:yx,radToDeg:Sx,isPowerOfTwo:Mx,ceilPowerOfTwo:Ex,floorPowerOfTwo:Tx,setQuaternionFromProperEuler:Ax,normalize:bt,denormalize:di};class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*s+e.x,this.y=l*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,l,u,f,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,u,f,d,h)}set(e,t,i,s,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],T=s[0],S=s[3],x=s[6],D=s[1],L=s[4],C=s[7],V=s[2],O=s[5],U=s[8];return l[0]=u*T+f*D+d*V,l[3]=u*S+f*L+d*O,l[6]=u*x+f*C+d*U,l[1]=h*T+m*D+g*V,l[4]=h*S+m*L+g*O,l[7]=h*x+m*C+g*U,l[2]=_*T+y*D+M*V,l[5]=_*S+y*L+M*O,l[8]=_*x+y*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-i*l*m+i*f*d+s*l*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,_=f*d-m*l,y=h*l-u*d,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(s*h-m*i)*T,e[2]=(f*i-s*u)*T,e[3]=_*T,e[4]=(m*t-s*d)*T,e[5]=(s*l-f*t)*T,e[6]=y*T,e[7]=(i*d-h*t)*T,e[8]=(u*t-i*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-s*h,s*d,-s*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new ot;function u_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _a(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Rx(){const o=_a("canvas");return o.style.display="block",o}const Fm={};function Qs(o){o in Fm||(Fm[o]=!0,console.warn(o))}function Cx(o,e,t){return new Promise(function(i,s){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}function bx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Px(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Om=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lx(){const o={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},fromWorkingColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},toWorkingColorSpace:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Lr?cu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Ln]:{primaries:e,whitePoint:i,transfer:cu,toXYZ:Om,fromXYZ:km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Om,fromXYZ:km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),o}const yt=Lx();function Zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ks;class Ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=_a("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Zi(l[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class c_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(rf(s[u].image)):l.push(rf(s[u]))}else l=rf(s);i.url=l}return t||(e.images[this.uuid]=i),i}}function rf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ix.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nx=0;class ln extends _o{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Ir,s=Ir,l=jn,u=Ki,f=ni,d=er,h=ln.DEFAULT_ANISOTROPY,m=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=mi(),this.name="",this.source=new c_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Kg;ln.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,l;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],y=d[5],M=d[9],T=d[2],S=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,C=(y+1)/2,V=(x+1)/2,O=(m+_)/4,U=(g+T)/4,X=(M+S)/4;return L>C&&L>V?L<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(L),s=O/i,l=U/i):C>V?C<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),i=O/s,l=X/s):V<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(V),i=U/l,s=X/l),this.set(i,s,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(_-m)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends _o{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new c_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends Ux{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class f_ extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fx extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,l,u,f){let d=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=l[u+0],y=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==_||h!==y||m!==M){let S=1-f;const x=d*_+h*y+m*M+g*T,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const V=Math.sqrt(L),O=Math.atan2(V,x*D);S=Math.sin(S*O)/V,f=Math.sin(f*O)/V}const C=f*D;if(d=d*S+_*C,h=h*S+y*C,m=m*S+M*C,g=g*S+T*C,S===1-f){const V=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=V,h*=V,m*=V,g*=V}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,l,u){const f=i[s],d=i[s+1],h=i[s+2],m=i[s+3],g=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+m*g+d*y-h*_,e[t+1]=d*M+m*_+h*g-f*y,e[t+2]=h*M+m*y+f*_-d*g,e[t+3]=m*M-f*g-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(s/2),g=f(l/2),_=d(i/2),y=d(s/2),M=d(l/2);switch(u){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=i+f+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(u-s)*y}else if(i>f&&i>g){const y=2*Math.sqrt(1+i-f-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(l+h)/y}else if(f>g){const y=2*Math.sqrt(1+f-i-g);this._w=(l-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-i-f);this._w=(u-s)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+u*f+s*h-l*d,this._y=s*m+u*d+l*f-i*h,this._z=l*m+u*h+i*d-s*f,this._w=u*m-i*f-s*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,u=this._w;let f=u*e._w+i*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=i,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*s,this.y=l[1]*t+l[4]*i+l[7]*s,this.z=l[2]*t+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*i+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*i+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*s-f*i),m=2*(f*t-l*s),g=2*(l*i-u*t);return this.x=t+d*h+u*g-f*m,this.y=i+d*m+f*h-l*g,this.z=s+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s,this.y=l[1]*t+l[5]*i+l[9]*s,this.z=l[2]*t+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=s*d-l*f,this.y=l*u-i*d,this.z=i*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new Y,Bm=new Or;class tr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(l,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Pl.subVectors(this.max,ea),Bs.subVectors(e.a,ea),zs.subVectors(e.b,ea),Hs.subVectors(e.c,ea),Tr.subVectors(zs,Bs),Ar.subVectors(Hs,zs),Qr.subVectors(Bs,Hs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!of(t,Bs,zs,Hs,Pl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,Bs,zs,Hs,Pl))?!1:(Ll.crossVectors(Tr,Ar),t=[Ll.x,Ll.y,Ll.z],of(t,Bs,zs,Hs,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ui=new Y,bl=new tr,Bs=new Y,zs=new Y,Hs=new Y,Tr=new Y,Ar=new Y,Qr=new Y,ea=new Y,Pl=new Y,Ll=new Y,Jr=new Y;function of(o,e,t,i,s){for(let l=0,u=o.length-3;l<=u;l+=3){Jr.fromArray(o,l);const f=s.x*Math.abs(Jr.x)+s.y*Math.abs(Jr.y)+s.z*Math.abs(Jr.z),d=e.dot(Jr),h=t.dot(Jr),m=i.dot(Jr);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const Ox=new tr,ta=new Y,af=new Y;class wi{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ox.setFromPoints(e).getCenter(i);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ta,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(af)),this.expandByPoint(ta.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new Y,lf=new Y,Il=new Y,wr=new Y,uf=new Y,Dl=new Y,cf=new Y;class mu{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(lf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Il),f=wr.dot(this.direction),d=-wr.dot(Il),h=wr.lengthSq(),m=Math.abs(1-u*u);let g,_,y,M;if(m>0)if(g=u*d-f,_=u*f-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const T=1/m;g*=T,_*=T,y=g*(g+u*_+2*f)+_*(u*g+_+2*d)+h}else _=l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*d)+h;else _=-l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-u*l+f)),_=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),y=_*(_+2*d)+h):(g=Math.max(0,-(u*l+f)),_=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+_*(_+2*d)+h);else _=u>0?-l:l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(lf).addScaledVector(Il,_),y}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),i>u||l>s||((l>i||isNaN(i))&&(i=l),(u<s||isNaN(s))&&(s=u),g>=0?(f=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,l){uf.subVectors(t,e),Dl.subVectors(i,e),cf.crossVectors(uf,Dl);let u=this.direction.dot(cf),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;wr.subVectors(this.origin,e);const d=f*this.direction.dot(Dl.crossVectors(wr,Dl));if(d<0)return null;const h=f*this.direction.dot(uf.cross(wr));if(h<0||d+h>u)return null;const m=-f*wr.dot(cf);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,l,u,f,d,h,m,g,_,y,M,T,S){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,u,f,d,h,m,g,_,y,M,T,S)}set(e,t,i,s,l,u,f,d,h,m,g,_,y,M,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,l=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=u*m,y=u*g,M=f*m,T=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=_-T*h,t[9]=-f*d,t[2]=T-_*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*m,y=d*g,M=h*m,T=h*g;t[0]=_+T*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-f,t[2]=y*f-M,t[6]=T+_*f,t[10]=u*d}else if(e.order==="ZXY"){const _=d*m,y=d*g,M=h*m,T=h*g;t[0]=_-T*f,t[4]=-u*g,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*m,t[9]=T-_*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const _=u*m,y=u*g,M=f*m,T=f*g;t[0]=d*m,t[4]=M*h-y,t[8]=_*h+T,t[1]=d*g,t[5]=T*h+_,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,y=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=T-_*g,t[8]=M*g+y,t[1]=g,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-T*g}else if(e.order==="XZY"){const _=u*d,y=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+T,t[5]=u*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=f*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,Bx)}lookAt(e,t,i){const s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Rr.crossVectors(i,Wn),Rr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Rr.crossVectors(i,Wn)),Rr.normalize(),Nl.crossVectors(Wn,Rr),s[0]=Rr.x,s[4]=Nl.x,s[8]=Wn.x,s[1]=Rr.y,s[5]=Nl.y,s[9]=Wn.y,s[2]=Rr.z,s[6]=Nl.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],T=i[6],S=i[10],x=i[14],D=i[3],L=i[7],C=i[11],V=i[15],O=s[0],U=s[4],X=s[8],b=s[12],R=s[1],z=s[5],oe=s[9],te=s[13],ce=s[2],he=s[6],se=s[10],le=s[14],B=s[3],ae=s[7],re=s[11],N=s[15];return l[0]=u*O+f*R+d*ce+h*B,l[4]=u*U+f*z+d*he+h*ae,l[8]=u*X+f*oe+d*se+h*re,l[12]=u*b+f*te+d*le+h*N,l[1]=m*O+g*R+_*ce+y*B,l[5]=m*U+g*z+_*he+y*ae,l[9]=m*X+g*oe+_*se+y*re,l[13]=m*b+g*te+_*le+y*N,l[2]=M*O+T*R+S*ce+x*B,l[6]=M*U+T*z+S*he+x*ae,l[10]=M*X+T*oe+S*se+x*re,l[14]=M*b+T*te+S*le+x*N,l[3]=D*O+L*R+C*ce+V*B,l[7]=D*U+L*z+C*he+V*ae,l[11]=D*X+L*oe+C*se+V*re,l[15]=D*b+L*te+C*le+V*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],T=e[7],S=e[11],x=e[15];return M*(+l*d*g-s*h*g-l*f*_+i*h*_+s*f*y-i*d*y)+T*(+t*d*y-t*h*_+l*u*_-s*u*y+s*h*m-l*d*m)+S*(+t*h*g-t*f*y-l*u*g+i*u*y+l*f*m-i*h*m)+x*(-s*f*m-t*d*g+t*f*_+s*u*g-i*u*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],T=e[13],S=e[14],x=e[15],D=g*S*h-T*_*h+T*d*y-f*S*y-g*d*x+f*_*x,L=M*_*h-m*S*h-M*d*y+u*S*y+m*d*x-u*_*x,C=m*T*h-M*g*h+M*f*y-u*T*y-m*f*x+u*g*x,V=M*g*d-m*T*d-M*f*_+u*T*_+m*f*S-u*g*S,O=t*D+i*L+s*C+l*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=D*U,e[1]=(T*_*l-g*S*l-T*s*y+i*S*y+g*s*x-i*_*x)*U,e[2]=(f*S*l-T*d*l+T*s*h-i*S*h-f*s*x+i*d*x)*U,e[3]=(g*d*l-f*_*l-g*s*h+i*_*h+f*s*y-i*d*y)*U,e[4]=L*U,e[5]=(m*S*l-M*_*l+M*s*y-t*S*y-m*s*x+t*_*x)*U,e[6]=(M*d*l-u*S*l-M*s*h+t*S*h+u*s*x-t*d*x)*U,e[7]=(u*_*l-m*d*l+m*s*h-t*_*h-u*s*y+t*d*y)*U,e[8]=C*U,e[9]=(M*g*l-m*T*l-M*i*y+t*T*y+m*i*x-t*g*x)*U,e[10]=(u*T*l-M*f*l+M*i*h-t*T*h-u*i*x+t*f*x)*U,e[11]=(m*f*l-u*g*l-m*i*h+t*g*h+u*i*y-t*f*y)*U,e[12]=V*U,e[13]=(m*T*s-M*g*s+M*i*_-t*T*_-m*i*S+t*g*S)*U,e[14]=(M*f*s-u*T*s-M*i*d+t*T*d+u*i*S-t*f*S)*U,e[15]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*_+t*f*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,l=e.z;return t[0]*=i,t[4]*=s,t[8]*=l,t[1]*=i,t[5]*=s,t[9]*=l,t[2]*=i,t[6]*=s,t[10]*=l,t[3]*=i,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),l=1-i,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+i,m*d-s*u,0,h*d-s*f,m*d+s*u,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,l,u){return this.set(1,i,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,g=f+f,_=l*h,y=l*m,M=l*g,T=u*m,S=u*g,x=f*g,D=d*h,L=d*m,C=d*g,V=i.x,O=i.y,U=i.z;return s[0]=(1-(T+x))*V,s[1]=(y+C)*V,s[2]=(M-L)*V,s[3]=0,s[4]=(y-C)*O,s[5]=(1-(_+x))*O,s[6]=(S+D)*O,s[7]=0,s[8]=(M+L)*U,s[9]=(S-D)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let l=Vs.set(s[0],s[1],s[2]).length();const u=Vs.set(s[4],s[5],s[6]).length(),f=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],ci.copy(this);const h=1/l,m=1/u,g=1/f;return ci.elements[0]*=h,ci.elements[1]*=h,ci.elements[2]*=h,ci.elements[4]*=m,ci.elements[5]*=m,ci.elements[6]*=m,ci.elements[8]*=g,ci.elements[9]*=g,ci.elements[10]*=g,t.setFromRotationMatrix(ci),i.x=l,i.y=u,i.z=f,this}makePerspective(e,t,i,s,l,u,f=$i){const d=this.elements,h=2*l/(t-e),m=2*l/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(f===$i)y=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===fu)y=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,l,u,f=$i){const d=this.elements,h=1/(t-e),m=1/(i-s),g=1/(u-l),_=(t+e)*h,y=(i+s)*m;let M,T;if(f===$i)M=(u+l)*g,T=-2*g;else if(f===fu)M=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vs=new Y,ci=new at,kx=new Y(0,0,0),Bx=new Y(1,1,1),Rr=new Y,Nl=new Y,Wn=new Y,zm=new at,Hm=new Or;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],d=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class d_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const Vm=new Y,Gs=new Or,Gi=new at,Ul=new Y,na=new Y,Hx=new Y,Vx=new Or,Gm=new Y(1,0,0),Wm=new Y(0,1,0),Xm=new Y(0,0,1),jm={type:"added"},Gx={type:"removed"},Ws={type:"childadded",child:null},ff={type:"childremoved",child:null};class Gt extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Y,t=new Ai,i=new Or,s=new Y(1,1,1);function l(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ul.copy(e):Ul.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(na,Ul,this.up):Gi.lookAt(Ul,na,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new Y(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new Y,Wi=new Y,df=new Y,Xi=new Y,Xs=new Y,js=new Y,Ym=new Y,hf=new Y,pf=new Y,mf=new Y,gf=new wt,_f=new wt,vf=new wt;class hi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,i,s,l){fi.subVectors(s,t),Wi.subVectors(i,t),df.subVectors(e,t);const u=fi.dot(fi),f=fi.dot(Wi),d=fi.dot(df),h=Wi.dot(Wi),m=Wi.dot(df),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const _=1/g,y=(h*d-f*m)*_,M=(u*m-f*d)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,l,u,f,d){return this.getBarycoord(e,t,i,s,Xi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Xi.x),d.addScaledVector(u,Xi.y),d.addScaledVector(f,Xi.z),d)}static getInterpolatedAttribute(e,t,i,s,l,u){return gf.setScalar(0),_f.setScalar(0),vf.setScalar(0),gf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,i),vf.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(gf,l.x),u.addScaledVector(_f,l.y),u.addScaledVector(vf,l.z),u}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),Wi.subVectors(e,t),fi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,l=this.c;let u,f;Xs.subVectors(s,i),js.subVectors(l,i),hf.subVectors(e,i);const d=Xs.dot(hf),h=js.dot(hf);if(d<=0&&h<=0)return t.copy(i);pf.subVectors(e,s);const m=Xs.dot(pf),g=js.dot(pf);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(i).addScaledVector(Xs,u);mf.subVectors(e,l);const y=Xs.dot(mf),M=js.dot(mf);if(M>=0&&y<=M)return t.copy(l);const T=y*h-d*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(js,f);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return Ym.subVectors(l,s),f=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(Ym,f);const x=1/(S+T+_);return u=T*x,f=_*x,t.copy(i).addScaledVector(Xs,u).addScaledVector(js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function xf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=kd(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,u=2*i-l;this.r=xf(u,l,e+1/3),this.g=xf(u,l,e),this.b=xf(u,l,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=dn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=h_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return yt.fromWorkingColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(yn.copy(this),t);const i=yn.r,s=yn.g,l=yn.b,u=Math.max(i,s,l),f=Math.min(i,s,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case i:d=(s-l)/g+(s<l?6:0);break;case s:d=(l-i)/g+2;break;case l:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=dn){yt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,s=yn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Fl);const i=da(Cr.h,Fl.h,t),s=da(Cr.s,Fl.s,t),l=da(Cr.l,Fl.l,t);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*s,this.g=l[1]*t+l[4]*i+l[7]*s,this.b=l[2]*t+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new rt;rt.NAMES=h_;let Wx=0;class Ti extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=to,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=zf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class us extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Y,Ol=new St;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ed,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),l=bt(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ed&&(e.usage=this.usage),e}}class p_ extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class m_ extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qi extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xx=0;const ei=new at,yf=new Gt,Ys=new Y,Xn=new tr,ia=new tr,an=new Y;class Ri extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?m_:p_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ot().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const l=t[i];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ia.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Xn.min,ia.min),Xn.expandByPoint(an),an.addVectors(Xn.max,ia.max),Xn.expandByPoint(an)):(Xn.expandByPoint(ia.min),Xn.expandByPoint(ia.max))}Xn.getCenter(i);let s=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)an.fromBufferAttribute(f,h),d&&(Ys.fromBufferAttribute(e,h),an.add(Ys)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<i.count;X++)f[X]=new Y,d[X]=new Y;const h=new Y,m=new Y,g=new Y,_=new St,y=new St,M=new St,T=new Y,S=new Y;function x(X,b,R){h.fromBufferAttribute(i,X),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(l,X),y.fromBufferAttribute(l,b),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),f[X].add(T),f[b].add(T),f[R].add(T),d[X].add(S),d[b].add(S),d[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,b=D.length;X<b;++X){const R=D[X],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new Y,C=new Y,V=new Y,O=new Y;function U(X){V.fromBufferAttribute(s,X),O.copy(V);const b=f[X];L.copy(b),L.sub(V.multiplyScalar(V.dot(b))).normalize(),C.crossVectors(O,b);const z=C.dot(d[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,z)}for(let X=0,b=D.length;X<b;++X){const R=D[X],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new Y,l=new Y,u=new Y,f=new Y,d=new Y,h=new Y,m=new Y,g=new Y;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(s,l),m.cross(g),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),f.add(m),d.add(m),h.add(m),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),g.subVectors(s,l),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,_=new h.constructor(d.length*m);let y=0,M=0;for(let T=0,S=d.length;T<S;T++){f.isInterleavedBufferAttribute?y=d[T]*f.data.stride+f.offset:y=d[T]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new Pn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qm=new at,es=new mu,kl=new wi,Km=new Y,Bl=new Y,zl=new Y,Hl=new Y,Sf=new Y,Vl=new Y,$m=new Y,Gl=new Y;class Yn extends Gt{constructor(e=new Ri,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Vl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Sf.fromBufferAttribute(g,e),u?Vl.addScaledVector(Sf,m):Vl.addScaledVector(Sf.sub(t),m))}t.add(Vl)}return t}raycast(e,t){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(kl.containsPoint(es.origin)===!1&&(es.intersectSphere(kl,Km)===null||es.origin.distanceToSquared(Km)>(e.far-e.near)**2))&&(qm.copy(l).invert(),es.copy(e.ray).applyMatrix4(qm),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,V=L;C<V;C+=3){const O=f.getX(C),U=f.getX(C+1),X=f.getX(C+2);s=Wl(this,x,e,i,h,m,g,O,U,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=f.getX(S),L=f.getX(S+1),C=f.getX(S+2);s=Wl(this,u,e,i,h,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,V=L;C<V;C+=3){const O=C,U=C+1,X=C+2;s=Wl(this,x,e,i,h,m,g,O,U,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=S,L=S+1,C=S+2;s=Wl(this,u,e,i,h,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function jx(o,e,t,i,s,l,u,f){let d;if(e.side===Bn?d=i.intersectTriangle(u,l,s,!0,f):d=i.intersectTriangle(s,l,u,e.side===Ji,f),d===null)return null;Gl.copy(f),Gl.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:o}}function Wl(o,e,t,i,s,l,u,f,d,h){o.getVertexPosition(f,Bl),o.getVertexPosition(d,zl),o.getVertexPosition(h,Hl);const m=jx(o,e,t,i,Bl,zl,Hl,$m);if(m){const g=new Y;hi.getBarycoord($m,Bl,zl,Hl,g),s&&(m.uv=hi.getInterpolatedAttribute(s,f,d,h,g,new St)),l&&(m.uv1=hi.getInterpolatedAttribute(l,f,d,h,g,new St)),u&&(m.normal=hi.getInterpolatedAttribute(u,f,d,h,g,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new Y,materialIndex:0};hi.getNormal(Bl,zl,Hl,_.normal),m.face=_,m.barycoord=g}return m}class xa extends Ri{constructor(e=1,t=1,i=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,u,l,0),M("z","y","x",1,-1,i,t,-e,u,l,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,l,4),M("x","y","z",-1,-1,e,t,-i,s,l,5),this.setIndex(d),this.setAttribute("position",new Qi(h,3)),this.setAttribute("normal",new Qi(m,3)),this.setAttribute("uv",new Qi(g,2));function M(T,S,x,D,L,C,V,O,U,X,b){const R=C/U,z=V/X,oe=C/2,te=V/2,ce=O/2,he=U+1,se=X+1;let le=0,B=0;const ae=new Y;for(let re=0;re<se;re++){const N=re*z-te;for(let ne=0;ne<he;ne++){const Ne=ne*R-oe;ae[T]=Ne*D,ae[S]=N*L,ae[x]=ce,h.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[x]=O>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/X),le+=1}}for(let re=0;re<X;re++)for(let N=0;N<U;N++){const ne=_+N+he*re,Ne=_+N+he*(re+1),Q=_+(N+1)+he*(re+1),de=_+(N+1)+he*re;d.push(ne,Ne,de),d.push(Ne,Q,de),B+=6}f.addGroup(y,B,b),y+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Rn(o){const e={};for(let t=0;t<o.length;t++){const i=ho(o[t]);for(const s in i)e[s]=i[s]}return e}function Yx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function g_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const qx={clone:ho,merge:Rn};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class __ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new Y,Zm=new St,Qm=new St;class Cn extends __{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Qm),t.subVectors(Qm,Zm)}setViewOffset(e,t,i,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ks=1;class Zx extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(qs,Ks,e,t);s.layers=this.layers,this.add(s);const l=new Cn(qs,Ks,e,t);l.layers=this.layers,this.add(l);const u=new Cn(qs,Ks,e,t);u.layers=this.layers,this.add(u);const f=new Cn(qs,Ks,e,t);f.layers=this.layers,this.add(f);const d=new Cn(qs,Ks,e,t);d.layers=this.layers,this.add(d);const h=new Cn(qs,Ks,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,l),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,f),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class v_ extends ln{constructor(e,t,i,s,l,u,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:oo,super(e,t,i,s,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new v_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xa(5,5,5),l=new Fr({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Nr});l.uniforms.tEquirect.value=t;const u=new Yn(s,l),f=t.minFilter;return t.minFilter===Ki&&(t.minFilter=jn),new Zx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(l)}}class Jx extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ey{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ed,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new Y;class Bd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),l=bt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jm=new Y,eg=new wt,tg=new wt,ty=new Y,ng=new at,Xl=new Y,Mf=new wi,ig=new at,Ef=new mu;class ny extends Yn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bm,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xl),this.boundingBox.expandByPoint(Xl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xl),this.boundingSphere.expandByPoint(Xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mf.copy(this.boundingSphere),Mf.applyMatrix4(s),e.ray.intersectsSphere(Mf)!==!1&&(ig.copy(s).invert(),Ef.copy(e.ray).applyMatrix4(ig),!(this.boundingBox!==null&&Ef.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ef)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Z0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;eg.fromBufferAttribute(s.attributes.skinIndex,e),tg.fromBufferAttribute(s.attributes.skinWeight,e),Jm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=tg.getComponent(l);if(u!==0){const f=eg.getComponent(l);ng.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(ty.copy(Jm).applyMatrix4(ng),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class x_ extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class y_ extends ln{constructor(e=null,t=1,i=1,s,l,u,f,d,h=bn,m=bn,g,_){super(null,u,f,d,h,m,s,l,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rg=new at,iy=new at;class zd{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:iy;rg.multiplyMatrices(f,t[l]),rg.toArray(i,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new zd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new y_(t,e,e,ni,pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const l=e.bones[i];let u=t[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new x_),this.bones.push(u),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=i[s];e.boneInverses.push(f.toArray())}return e}}class Td extends Pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new at,sg=new at,jl=[],og=new tr,ry=new at,ra=new Yn,sa=new wi;class sy extends Yn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Td(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ry)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),og.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(og)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),sa.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=i.length+1,u=e*l+1;for(let f=0;f<i.length;f++)i[f]=s[u+f]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,$s),sg.multiplyMatrices(i,$s),ra.matrixWorld=sg,ra.raycast(e,jl);for(let u=0,f=jl.length;u<f;u++){const d=jl[u];d.instanceId=l,d.object=this,t.push(d)}jl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Td(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new y_(new Float32Array(s*this.count),s,this.count,Nd,pi));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=s*e;l[d]=f,l.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Tf=new Y,oy=new Y,ay=new ot;class ss{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Tf.subVectors(i,t).cross(oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Tf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ay.getNormalMatrix(e),s=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new wi,Yl=new Y;class Hd{constructor(e=new ss,t=new ss,i=new ss,s=new ss,l=new ss,u=new ss){this.planes=[e,t,i,s,l,u]}set(e,t,i,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i){const i=this.planes,s=e.elements,l=s[0],u=s[1],f=s[2],d=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],T=s[10],S=s[11],x=s[12],D=s[13],L=s[14],C=s[15];if(i[0].setComponents(d-l,_-h,S-y,C-x).normalize(),i[1].setComponents(d+l,_+h,S+y,C+x).normalize(),i[2].setComponents(d+u,_+m,S+M,C+D).normalize(),i[3].setComponents(d-u,_-m,S-M,C-D).normalize(),i[4].setComponents(d-f,_-g,S-T,C-L).normalize(),t===$i)i[5].setComponents(d+f,_+g,S+T,C+L).normalize();else if(t===fu)i[5].setComponents(f,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S_ extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new Y,hu=new Y,ag=new at,oa=new mu,ql=new wi,Af=new Y,lg=new Y;class Vd extends Gt{constructor(e=new Ri,t=new S_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,l=t.count;s<l;s++)du.fromBufferAttribute(t,s-1),hu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Qi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ql.radius+=l,e.ray.intersectsSphere(ql)===!1)return;ag.copy(s).invert(),oa.copy(e.ray).applyMatrix4(ag);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=h){const x=m.getX(T),D=m.getX(T+1),L=Kl(this,e,oa,d,x,D);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(y),x=Kl(this,e,oa,d,T,S);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=h){const x=Kl(this,e,oa,d,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=Kl(this,e,oa,d,M-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Kl(o,e,t,i,s,l){const u=o.geometry.attributes.position;if(du.fromBufferAttribute(u,s),hu.fromBufferAttribute(u,l),t.distanceSqToSegment(du,hu,Af,lg)>i)return;Af.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Af);if(!(d<e.near||d>e.far))return{distance:d,point:lg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const ug=new Y,cg=new Y;class ly extends Vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,l=t.count;s<l;s+=2)ug.fromBufferAttribute(t,s),cg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ug.distanceTo(cg);e.setAttribute("lineDistance",new Qi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uy extends Vd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class M_ extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fg=new at,Ad=new mu,$l=new wi,Zl=new Y;class cy extends Gt{constructor(e=new Ri,t=new M_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;fg.copy(s).invert(),Ad.copy(e.ray).applyMatrix4(fg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=_,T=y;M<T;M++){const S=h.getX(M);Zl.fromBufferAttribute(g,S),dg(Zl,S,d,s,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=_,T=y;M<T;M++)Zl.fromBufferAttribute(g,M),dg(Zl,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function dg(o,e,t,i,s,l,u){const f=Ad.distanceSqToPoint(o);if(f<t){const d=new Y;Ad.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class cs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class E_ extends ln{constructor(e,t,i,s,l,u,f,d,h,m=no){if(m!==no&&m!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===no&&(i=fs),i===void 0&&m===co&&(i=uo),super(null,s,l,u,f,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:bn,this.minFilter=d!==void 0?d:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gu extends Ri{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(i),d=Math.floor(s),h=f+1,m=d+1,g=e/f,_=t/d,y=[],M=[],T=[],S=[];for(let x=0;x<m;x++){const D=x*_-u;for(let L=0;L<h;L++){const C=L*g-l;M.push(C,-D,0),T.push(0,0,1),S.push(L/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<f;D++){const L=D+h*x,C=D+h*(x+1),V=D+1+h*(x+1),O=D+1+h*x;y.push(L,C,O),y.push(C,V,O)}this.setIndex(y),this.setAttribute("position",new Qi(M,3)),this.setAttribute("normal",new Qi(T,3)),this.setAttribute("uv",new Qi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gd extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a_,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends Gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fy extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dy extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ql(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function hy(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function py(o){function e(s,l){return o[s]-o[l]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function hg(o,e,t){const i=o.length,s=new o.constructor(i);for(let l=0,u=0;u!==i;++l){const f=t[l]*e;for(let d=0;d!==e;++d)s[u++]=o[f+d]}return s}function T_(o,e,t,i){let s=1,l=o[0];for(;l!==void 0&&l[i]===void 0;)l=o[s++];if(l===void 0)return;let u=l[i];if(u!==void 0)if(Array.isArray(u))do u=l[i],u!==void 0&&(e.push(l.time),t.push.apply(t,u)),l=o[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[i],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[s++];while(l!==void 0);else do u=l[i],u!==void 0&&(e.push(l.time),t.push(u)),l=o[s++];while(l!==void 0)}class ya{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],l=t[i-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=i+2;;){if(s===void 0){if(e<l)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(l=s,s=t[++i],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(i=2,l=f);for(let d=i-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=l,l=t[--i-1],e>=l)break t}u=i,i=0;break n}break e}for(;i<u;){const f=i+u>>>1;e<t[f]?u=f:i=f+1}if(s=t[i],l=t[i-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,l,s)}return this.interpolate_(i,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=i[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class my extends ya{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pm,endingEnd:Pm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],d=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case Lm:l=e,f=2*t-i;break;case Im:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Lm:u=e,d=2*i-t;break;case Im:u=1,d=i+s[1]-s[0];break;default:u=e-1,d=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=l*m,this._offsetNext=u*m}interpolate_(e,t,i,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,x=-_*S+2*_*T-_*M,D=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,L=(-1-y)*S+(1.5+y)*T+.5*M,C=y*S-y*T;for(let V=0;V!==f;++V)l[V]=x*u[m+V]+D*u[h+V]+L*u[d+V]+C*u[g+V];return l}}class gy extends ya{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==f;++_)l[_]=u[h+_]*g+u[d+_]*m;return l}}class _y extends ya{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new my(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case tf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return tf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let l=0,u=s-1;for(;l!==s&&i[l]<e;)++l;for(;u!==-1&&i[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=i.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,l=i.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(s!==void 0&&hy(s))for(let f=0,d=s.length;f!==d;++f){const h=s[f];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tf,l=e.length-1;let u=1;for(let f=1;f<l;++f){let d=!1;const h=e[f],m=e[f+1];if(h!==m&&(f!==1||h!==e[0]))if(s)d=!0;else{const g=f*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const T=t[g+M];if(T!==t[_+M]||T!==t[y+M]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const g=f*i,_=u*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++u}}if(l>0){e[u]=e[l];for(let f=l*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=ga;class vo extends bi{constructor(e,t,i){super(e,t,i)}}vo.prototype.ValueTypeName="bool";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=ma;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class A_ extends bi{}A_.prototype.ValueTypeName="color";class po extends bi{}po.prototype.ValueTypeName="number";class vy extends ya{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(i-t)/(s-t);let h=e*f;for(let m=h+f;h!==m;h+=4)Or.slerpFlat(l,0,u,h-f,u,h,d);return l}}class mo extends bi{InterpolantFactoryMethodLinear(e){return new vy(this.times,this.values,this.getValueSize(),e)}}mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends bi{constructor(e,t,i){super(e,t,i)}}xo.prototype.ValueTypeName="string";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=ma;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends bi{}go.prototype.ValueTypeName="vector";class xy{constructor(e="",t=-1,i=[],s=Q0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let u=0,f=i.length;u!==f;++u)t.push(Sy(i[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,u=i.length;l!==u;++l)t.push(bi.toJSON(i[l]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const l=t.length,u=[];for(let f=0;f<l;f++){let d=[],h=[];d.push((f+l-1)%l,f,(f+1)%l),h.push(0,1,0);const m=py(d);d=hg(d,1,m),h=hg(h,1,m),!s&&d[0]===0&&(d.push(l),h.push(h[0])),u.push(new po(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],m=h.name.match(l);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,T){if(y.length!==0){const S=[],x=[];T_(y,S,x,M),S.length!==0&&T.push(new g(_,S,x))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)y[_[M].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let D=0;D!==_[M].morphTargets.length;++D){const L=_[M];S.push(L.time),x.push(L.morphTarget===T?1:0)}s.push(new po(".morphTargetInfluence["+T+"]",S,x))}d=y.length*u}else{const y=".bones["+t[g].name+"]";i(go,y+".position",_,"pos",s),i(mo,y+".quaternion",_,"rot",s),i(go,y+".scale",_,"scl",s)}}return s.length===0?null:new this(l,d,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const l=this.tracks[i];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yy(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return go;case"color":return A_;case"quaternion":return mo;case"bool":case"boolean":return vo;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Sy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yy(o.type);if(o.times===void 0){const t=[],i=[];T_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Dr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class My{constructor(e,t,i){const s=this;let l=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const Ey=new My;class yo{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,l){i.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class Ty extends Error{constructor(e,t){super(e),this.response=t}}class w_ extends yo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Dr.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:i,onError:s});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=ji[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let T=0;const S=new ReadableStream({start(x){D();function D(){g.read().then(({done:L,value:C})=>{if(L)x.close();else{T+=C.byteLength;const V=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:y});for(let O=0,U=m.length;O<U;O++){const X=m[O];X.onProgress&&X.onProgress(V)}x.enqueue(C),D()}},L=>{x.error(L)})}}});return new Response(S)}else throw new Ty(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Dr.add(e,h);const m=ji[e];delete ji[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=ji[e];if(m===void 0)throw this.manager.itemError(e),h;delete ji[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ay extends yo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Dr.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const f=_a("img");function d(){m(),Dr.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),s&&s(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class wy extends yo{constructor(e){super(e)}load(e,t,i,s){const l=new ln,u=new Ay(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},i,s),l}}class _u extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wf=new at,pg=new Y,mg=new Y;class Wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mg),t.updateMatrixWorld(),wf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends Wd{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(i!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=i,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cy extends _u{constructor(e,t,i=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gg=new at,aa=new Y,Rf=new Y;class by extends Wd{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(aa),Rf.copy(i.position),Rf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rf),i.updateMatrixWorld(),s.makeTranslation(-aa.x,-aa.y,-aa.z),gg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gg)}}class Py extends _u{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new by}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xd extends __{constructor(e=-1,t=1,i=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,u=i+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ly extends Wd{constructor(){super(new Xd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R_ extends _u{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Ly}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Iy extends _u{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ha{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dy extends yo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Dr.get(e);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(h=>{t&&t(h),l.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){return Dr.add(e,h),t&&t(h),l.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Dr.remove(e),l.manager.itemError(e),l.manager.itemEnd(e)});Dr.add(e,d),l.manager.itemStart(e)}}class Ny extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const jd="\\[\\]\\.:\\/",Uy=new RegExp("["+jd+"]","g"),Yd="[^"+jd+"]",Fy="[^"+jd.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",Yd),ky=/(WCOD+)?/.source.replace("WCOD",Fy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yd),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yd),Hy=new RegExp("^"+Oy+ky+By+zy+"$"),Vy=["material","materials","bones","map"];class Gy{constructor(e,t,i){const s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=i.length;s!==l;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Pt{constructor(e,t,i){this.path=t,this.parsedPath=i||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,i):new Pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){const t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=i.nodeName.substring(s+1);Vy.indexOf(l)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=l)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,l=i.length;s!==l;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,l=i.length;s!==l;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,l=i.length;s!==l;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,l=i.length;s!==l;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[s];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=Gy;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function _g(o,e,t,i){const s=Wy(i);switch(t){case e_:return o*e;case n_:return o*e;case i_:return o*e*2;case Nd:return o*e/s.components*s.byteLength;case Ud:return o*e/s.components*s.byteLength;case r_:return o*e*2/s.components*s.byteLength;case Fd:return o*e*2/s.components*s.byteLength;case t_:return o*e*3/s.components*s.byteLength;case ni:return o*e*4/s.components*s.byteLength;case Od:return o*e*4/s.components*s.byteLength;case iu:case ru:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case su:case ou:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Jf:return Math.max(o,16)*Math.max(e,8)/4;case $f:case Qf:return Math.max(o,8)*Math.max(e,8)/2;case ed:case td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case sd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case au:case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case s_:case xd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(o){switch(o){case er:case Zg:return{byteLength:1,components:1};case pa:case Qg:case va:return{byteLength:2,components:1};case Id:case Dd:return{byteLength:2,components:4};case fs:case Ld:case pi:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let o=null,e=!1,t=null,i=null;function s(l,u){t(l,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function Xy(o){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,h){const m=d.array,g=d.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],T=g[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const T=g[y];o.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:u}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_S=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ES=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,US=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:jy,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:Ky,alphatest_fragment:$y,alphatest_pars_fragment:Zy,aomap_fragment:Qy,aomap_pars_fragment:Jy,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:cS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:hS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:yS,emissivemap_pars_fragment:SS,colorspace_fragment:MS,colorspace_pars_fragment:ES,envmap_fragment:TS,envmap_common_pars_fragment:AS,envmap_pars_fragment:wS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:kS,envmap_vertex:CS,fog_vertex:bS,fog_pars_vertex:PS,fog_fragment:LS,fog_pars_fragment:IS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:NS,lights_lambert_fragment:US,lights_lambert_pars_fragment:FS,lights_pars_begin:OS,lights_toon_fragment:BS,lights_toon_pars_fragment:zS,lights_phong_fragment:HS,lights_phong_pars_fragment:VS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:XS,lights_fragment_maps:jS,lights_fragment_end:YS,logdepthbuf_fragment:qS,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:ZS,map_fragment:QS,map_pars_fragment:JS,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:rM,morphcolor_vertex:sM,morphnormal_vertex:oM,morphtarget_pars_vertex:aM,morphtarget_vertex:lM,normal_fragment_begin:uM,normal_fragment_maps:cM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:hM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:_M,iridescence_pars_fragment:vM,opaque_fragment:xM,packing:yM,premultiplied_alpha_fragment:SM,project_vertex:MM,dithering_fragment:EM,dithering_pars_fragment:TM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:bM,shadowmask_pars_fragment:PM,skinbase_vertex:LM,skinning_pars_vertex:IM,skinning_vertex:DM,skinnormal_vertex:NM,specularmap_fragment:UM,specularmap_pars_fragment:FM,tonemapping_fragment:OM,tonemapping_pars_fragment:kM,transmission_fragment:BM,transmission_pars_fragment:zM,uv_pars_fragment:HM,uv_pars_vertex:VM,uv_vertex:GM,worldpos_vertex:WM,background_vert:XM,background_frag:jM,backgroundCube_vert:YM,backgroundCube_frag:qM,cube_vert:KM,cube_frag:$M,depth_vert:ZM,depth_frag:QM,distanceRGBA_vert:JM,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:oE,meshlambert_vert:aE,meshlambert_frag:lE,meshmatcap_vert:uE,meshmatcap_frag:cE,meshnormal_vert:fE,meshnormal_frag:dE,meshphong_vert:hE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:_E,meshtoon_frag:vE,points_vert:xE,points_frag:yE,shadow_vert:SE,shadow_frag:ME,sprite_vert:EE,sprite_frag:TE},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Mi={basic:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Rn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Rn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Rn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Rn([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Mi.physical={uniforms:Rn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Jl={r:0,b:0,g:0},ns=new Ai,AE=new at;function wE(o,e,t,i,s,l,u){const f=new rt(0);let d=l===!0?0:1,h,m,g=null,_=0,y=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const V=M(L);V===null?x(f,d):V&&V.isColor&&(x(V,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const V=M(C);V&&(V.isCubeTexture||V.mapping===pu)?(m===void 0&&(m=new Yn(new xa(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:ho(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ns.copy(C.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(ns)),m.material.toneMapped=yt.getTransfer(V.colorSpace)!==It,(g!==V||_!==V.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new Yn(new gu(2,2),new Fr({name:"BackgroundMaterial",uniforms:ho(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=yt.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,C){L.getRGB(Jl,g_(o)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,C,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,C=1){f.set(L),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(f,d)},render:T,addToRenderList:S,dispose:D}}function RE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let l=s,u=!1;function f(R,z,oe,te,ce){let he=!1;const se=g(te,oe,z);l!==se&&(l=se,h(l.object)),he=y(R,te,oe,ce),he&&M(R,te,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(R,z,oe,te),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return o.createVertexArray()}function h(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,oe){const te=oe.wireframe===!0;let ce=i[R.id];ce===void 0&&(ce={},i[R.id]=ce);let he=ce[z.id];he===void 0&&(he={},ce[z.id]=he);let se=he[te];return se===void 0&&(se=_(d()),he[te]=se),se}function _(R){const z=[],oe=[],te=[];for(let ce=0;ce<t;ce++)z[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function y(R,z,oe,te){const ce=l.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return l.attributesNum!==se||l.index!==te}function M(R,z,oe,te){const ce={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ce[B]=N,se++}l.attributes=ce,l.attributesNum=se,l.index=te}function T(){const R=l.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const oe=l.newAttributes,te=l.enabledAttributes,ce=l.attributeDivisors;oe[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ce[R]!==z&&(o.vertexAttribDivisor(R,z),ce[R]=z)}function D(){const R=l.newAttributes,z=l.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(R,z,oe,te,ce,he,se){se===!0?o.vertexAttribIPointer(R,z,oe,ce,he):o.vertexAttribPointer(R,z,oe,te,ce,he)}function C(R,z,oe,te){T();const ce=te.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===Ld;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,De=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)x(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,N/B.locationSize,Q,re,Te*de,(De+N/B.locationSize*Ze)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)x(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,N/B.locationSize,Q,re,N*de,N/B.locationSize*ve*de,Se)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}D()}function V(){X();for(const R in i){const z=i[R];for(const oe in z){const te=z[oe];for(const ce in te)m(te[ce].object),delete te[ce];delete z[oe]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const oe in z){const te=z[oe];for(const ce in te)m(te[ce].object),delete te[ce];delete z[oe]}delete i[R.id]}function U(R){for(const z in i){const oe=i[z];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ce in te)m(te[ce].object),delete te[ce];delete oe[R.id]}}function X(){b(),u=!0,l!==s&&(l=s,h(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function CE(o,e,t){let i;function s(h){i=h}function l(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function u(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function d(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function bE(o,e,t,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(U){return!(U!==ni&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const X=U===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==er&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==pi&&!X)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:O}}function PE(o){const e=this;let t=null,i=0,s=!1,l=!1;const u=new ss,f=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||l&&!S)l?m(null):h();else{const D=l?0:i,L=D*4;let C=x.clippingState||null;d.value=C,C=m(M,_,L,y);for(let V=0;V!==L;++V)C[V]=t[V];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const x=y+T*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,C=y;L!==T;++L,C+=4)u.copy(g[L]).applyMatrix4(D,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function LE(o){let e=new WeakMap;function t(u,f){return f===qf?u.mapping=oo:f===Kf&&(u.mapping=ao),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===qf||f===Kf)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new Qx(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const eo=4,vg=[.125,.215,.35,.446,.526,.582],ls=20,Cf=new Xd,xg=new rt;let bf=null,Pf=0,Lf=0,If=!1;const os=(1+Math.sqrt(5))/2,Zs=1/os,yg=[new Y(-os,Zs,0),new Y(os,Zs,0),new Y(-Zs,0,os),new Y(Zs,0,os),new Y(0,os,-Zs),new Y(0,os,Zs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){bf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Pf,Lf),this._renderer.xr.enabled=If,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:va,format:ni,colorSpace:Ln,depthBuffer:!1},s=Mg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IE(l)),this._blurMaterial=DE(l,e,t)}return s}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Cf)}_sceneToCubeUV(e,t,i,s){const f=new Cn(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(xg),m.toneMapping=Ur,m.autoClear=!1;const y=new us({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new Yn(new xa,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(xg),T=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(f.up.set(0,d[x],0),f.lookAt(h[x],0,0)):D===1?(f.up.set(0,0,d[x]),f.lookAt(0,h[x],0)):(f.up.set(0,d[x],0),f.lookAt(0,0,h[x]));const L=this._cubeSize;eu(s,D*L,x>2?L:0,L,L),m.setRenderTarget(s),T&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===oo||e.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const l=s?this._cubemapMaterial:this._equirectMaterial,u=new Yn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;eu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Cf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=yg[(s-l-1)%yg.length];this._blur(e,l-1,l,u,f)}t.autoClear=i}_blur(e,t,i,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",l),this._halfBlur(u,e,i,i,s,"longitudinal",l)}_halfBlur(e,t,i,s,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Yn(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ls-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):ls;S>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ls}`);const x=[];let D=0;for(let U=0;U<ls;++U){const X=U/T,b=Math.exp(-X*X/2);x.push(b),U===0?D+=b:U<S&&(D+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-i;const C=this._sizeLods[s],V=3*C*(s>L-eo?s-L+eo:0),O=4*(this._cubeSize-C);eu(t,V,O,3*C,2*C),d.setRenderTarget(t),d.render(g,Cf)}}function IE(o){const e=[],t=[],i=[];let s=o;const l=o-eo+1+vg.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let d=1/f;u>o-eo?d=vg[u-o+eo-1]:u===0&&(d=0),i.push(d);const h=1/(f-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,T=3,S=2,x=1,D=new Float32Array(T*M*y),L=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,X=O>2?0:-1,b=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];D.set(b,T*M*O),L.set(_,S*M*O);const R=[O,O,O,O,O,O];C.set(R,x*M*O)}const V=new Ri;V.setAttribute("position",new Pn(D,T)),V.setAttribute("uv",new Pn(L,S)),V.setAttribute("faceIndex",new Pn(C,x)),e.push(V),s>eo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mg(o,e,t){const i=new ds(o,e,t);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function DE(o,e,t){const i=new Float32Array(ls),s=new Y(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Eg(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Tg(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NE(o){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const d=f.mapping,h=d===qf||d===Kf,m=d===oo||d===ao;if(h||m){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Sg(o)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Sg(o)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function UE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FE(o,e,t,i){const s={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,C=D.length;L<C;L+=3){const V=D[L+0],O=D[L+1],U=D[L+2];_.push(V,O,O,U,U,V)}}else if(M!==void 0){const D=M.array;T=M.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const V=L+0,O=L+1,U=L+2;_.push(V,O,O,U,U,V)}}else return;const S=new(u_(_)?m_:p_)(_,1);S.version=T;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function m(g){const _=l.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function OE(o,e,t){let i;function s(_){i=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,y){o.drawElements(i,y,l,_*u),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,l,_*u,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,l,_,0,T,0,M);let x=0;for(let D=0;D<M;D++)x+=y[D]*T[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function kE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=f*(l/3);break;case o.LINES:t.lines+=f*(l/2);break;case o.LINE_STRIP:t.lines+=f*(l-1);break;case o.LINE_LOOP:t.lines+=f*l;break;case o.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function BE(o,e,t){const i=new WeakMap,s=new wt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(f);if(_===void 0||_.count!==g){let R=function(){X.dispose(),i.delete(f),f.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let V=f.attributes.position.count*C,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*O*4*g),X=new f_(U,V,O,g);X.type=pi,X.needsUpdate=!0;const b=C*4;for(let z=0;z<g;z++){const oe=x[z],te=D[z],ce=L[z],he=V*O*4*z;for(let se=0;se<oe.count;se++){const le=se*b;M===!0&&(s.fromBufferAttribute(oe,se),U[he+le+0]=s.x,U[he+le+1]=s.y,U[he+le+2]=s.z,U[he+le+3]=0),T===!0&&(s.fromBufferAttribute(te,se),U[he+le+4]=s.x,U[he+le+5]=s.y,U[he+le+6]=s.z,U[he+le+7]=0),S===!0&&(s.fromBufferAttribute(ce,se),U[he+le+8]=s.x,U[he+le+9]=s.y,U[he+le+10]=s.z,U[he+le+11]=ce.itemSize===4?s.w:1)}}_={count:g,texture:X,size:new St(V,O)},i.set(f,_),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",T),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function zE(o,e,t,i){let s=new WeakMap;function l(d){const h=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function u(){s=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const b_=new ln,Ag=new E_(1,1),P_=new f_,L_=new Fx,I_=new v_,wg=[],Rg=[],Cg=new Float32Array(16),bg=new Float32Array(9),Pg=new Float32Array(4);function So(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let l=wg[s];if(l===void 0&&(l=new Float32Array(s),wg[s]=l),e!==0){i.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,o[u].toArray(l,f)}return l}function Jt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function en(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function vu(o,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function HE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function VE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;o.uniform2fv(this.addr,e),en(t,e)}}function GE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;o.uniform3fv(this.addr,e),en(t,e)}}function WE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;o.uniform4fv(this.addr,e),en(t,e)}}function XE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;Pg.set(i),o.uniformMatrix2fv(this.addr,!1,Pg),en(t,i)}}function jE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;bg.set(i),o.uniformMatrix3fv(this.addr,!1,bg),en(t,i)}}function YE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;Cg.set(i),o.uniformMatrix4fv(this.addr,!1,Cg),en(t,i)}}function qE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function KE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;o.uniform2iv(this.addr,e),en(t,e)}}function $E(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;o.uniform3iv(this.addr,e),en(t,e)}}function ZE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;o.uniform4iv(this.addr,e),en(t,e)}}function QE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function JE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;o.uniform2uiv(this.addr,e),en(t,e)}}function eT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;o.uniform3uiv(this.addr,e),en(t,e)}}function tT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;o.uniform4uiv(this.addr,e),en(t,e)}}function nT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Ag.compareFunction=l_,l=Ag):l=b_,t.setTexture2D(e||l,s)}function iT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||L_,s)}function rT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||I_,s)}function sT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||P_,s)}function oT(o){switch(o){case 5126:return HE;case 35664:return VE;case 35665:return GE;case 35666:return WE;case 35674:return XE;case 35675:return jE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return KE;case 35668:case 35672:return $E;case 35669:case 35673:return ZE;case 5125:return QE;case 36294:return JE;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(o,e){o.uniform1fv(this.addr,e)}function lT(o,e){const t=So(e,this.size,2);o.uniform2fv(this.addr,t)}function uT(o,e){const t=So(e,this.size,3);o.uniform3fv(this.addr,t)}function cT(o,e){const t=So(e,this.size,4);o.uniform4fv(this.addr,t)}function fT(o,e){const t=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function dT(o,e){const t=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hT(o,e){const t=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function pT(o,e){o.uniform1iv(this.addr,e)}function mT(o,e){o.uniform2iv(this.addr,e)}function gT(o,e){o.uniform3iv(this.addr,e)}function _T(o,e){o.uniform4iv(this.addr,e)}function vT(o,e){o.uniform1uiv(this.addr,e)}function xT(o,e){o.uniform2uiv(this.addr,e)}function yT(o,e){o.uniform3uiv(this.addr,e)}function ST(o,e){o.uniform4uiv(this.addr,e)}function MT(o,e,t){const i=this.cache,s=e.length,l=vu(t,s);Jt(i,l)||(o.uniform1iv(this.addr,l),en(i,l));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||b_,l[u])}function ET(o,e,t){const i=this.cache,s=e.length,l=vu(t,s);Jt(i,l)||(o.uniform1iv(this.addr,l),en(i,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||L_,l[u])}function TT(o,e,t){const i=this.cache,s=e.length,l=vu(t,s);Jt(i,l)||(o.uniform1iv(this.addr,l),en(i,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||I_,l[u])}function AT(o,e,t){const i=this.cache,s=e.length,l=vu(t,s);Jt(i,l)||(o.uniform1iv(this.addr,l),en(i,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||P_,l[u])}function wT(o){switch(o){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}class RT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oT(t.type)}}class CT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wT(t.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],i)}}}const Df=/(\w+)(\])?(\[|\.)?/g;function Lg(o,e){o.seq.push(e),o.map[e.id]=e}function PT(o,e,t){const i=o.name,s=i.length;for(Df.lastIndex=0;;){const l=Df.exec(i),u=Df.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===s){Lg(t,h===void 0?new RT(f,o,e):new CT(f,o,e));break}else{let g=t.map[f];g===void 0&&(g=new bT(f),Lg(t,g)),t=g}}}class lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),u=e.getUniformLocation(t,l.name);PT(l,u,this)}}setValue(e,t,i,s){const l=this.map[t];l!==void 0&&l.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function Ig(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const LT=37297;let IT=0;function DT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const Dg=new ot;function NT(o){yt._getMatrix(Dg,yt.workingColorSpace,o);const e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(o)){case cu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ng(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+DT(o.getShaderSource(e),u)}else return s}function UT(o,e){const t=NT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FT(o,e){let t;switch(e){case W0:t="Linear";break;case X0:t="Reinhard";break;case j0:t="Cineon";break;case Y0:t="ACESFilmic";break;case K0:t="AgX";break;case $0:t="Neutral";break;case q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tu=new Y;function OT(){yt.getLuminanceCoefficients(tu);const o=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function BT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=o.getActiveAttrib(e,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return t}function ca(o){return o!==""}function Ug(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(o){return o.replace(HT,GT)}const VT=new Map;function GT(o,e){let t=lt[e];if(t===void 0){const i=VT.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(o){return o.replace(WT,XT)}function XT(o,e,t,i){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function kg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function KT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qg:e="ENVMAP_BLENDING_MULTIPLY";break;case V0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function $T(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ZT(o,e,t,i){const s=o.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=jT(t),h=YT(t),m=qT(t),g=KT(t),_=$T(t),y=kT(t),M=BT(l),T=s.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ca).join(`
`),x.length>0&&(x+=`
`)):(S=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),x=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ur?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,UT("linearToOutputTexel",t.outputColorSpace),OT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),u=wd(u),u=Ug(u,t),u=Fg(u,t),f=wd(f),f=Ug(f,t),f=Fg(f,t),u=Og(u),f=Og(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+S+u,C=D+x+f,V=Ig(s,s.VERTEX_SHADER,L),O=Ig(s,s.FRAGMENT_SHADER,C);s.attachShader(T,V),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(T).trim(),te=s.getShaderInfoLog(V).trim(),ce=s.getShaderInfoLog(O).trim();let he=!0,se=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,V,O);else{const le=Ng(s,V,"vertex"),B=Ng(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:S},fragmentShader:{log:ce,prefix:x}})}s.deleteShader(V),s.deleteShader(O),X=new lu(s,T),b=zT(s,T)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,LT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=O,this}let QT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eA(e),t.set(e,i)),i}}class eA{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function tA(o,e,t,i,s,l,u){const f=new d_,d=new JT,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,R,z,oe,te){const ce=oe.fog,he=te.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),B=le&&le.mapping===pu?le.image.height:null,ae=M[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ne,Q,de,Se;if(ae){const Mt=Mi[ae];Ne=Mt.vertexShader,Q=Mt.fragmentShader}else Ne=b.vertexShader,Q=b.fragmentShader,d.update(b),de=d.getVertexShaderID(b),Se=d.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,Lt=!!b.map,gt=!!b.matcap,Nt=!!le,k=!!b.aoMap,Sn=!!b.lightMap,ht=!!b.bumpMap,ct=!!b.normalMap,je=!!b.displacementMap,Ct=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,Z=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ue=b.sheen>0,We=b.transmission>0,Ae=A&&!!b.anisotropyMap,Ue=Z&&!!b.clearcoatMap,ut=Z&&!!b.clearcoatNormalMap,Me=Z&&!!b.clearcoatRoughnessMap,Oe=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Je=ue&&!!b.sheenColorMap,ke=ue&&!!b.sheenRoughnessMap,ft=!!b.specularMap,nt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,G=We&&!!b.transmissionMap,we=We&&!!b.thicknessMap,ie=!!b.gradientMap,fe=!!b.alphaMap,Pe=b.alphaTest>0,be=!!b.alphaHash,it=!!b.extensions;let Ft=Ur;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ft=o.toneMapping);const $t={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ln,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:gt,envMap:Nt,envMapMode:Nt&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:Sn,bumpMap:ht,normalMap:ct,displacementMap:_&&je,emissiveMap:Ct,normalMapObjectSpace:ct&&b.normalMapType===nx,normalMapTangentSpace:ct&&b.normalMapType===a_,metalnessMap:Ge,roughnessMap:P,anisotropy:A,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ft,specularColorMap:nt,specularIntensityMap:Rt,transmission:We,transmissionMap:G,thicknessMap:we,gradientMap:ie,opaque:b.transparent===!1&&b.blending===to&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Pe,alphaHash:be,combine:b.combine,mapUv:Lt&&T(b.map.channel),aoMapUv:k&&T(b.aoMap.channel),lightMapUv:Sn&&T(b.lightMap.channel),bumpMapUv:ht&&T(b.bumpMap.channel),normalMapUv:ct&&T(b.normalMap.channel),displacementMapUv:je&&T(b.displacementMap.channel),emissiveMapUv:Ct&&T(b.emissiveMap.channel),metalnessMapUv:Ge&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Ue&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:nt&&T(b.specularColorMap.channel),specularIntensityMapUv:Rt&&T(b.specularIntensityMap.channel),transmissionMapUv:G&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:fe&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ct||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Lt||fe),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:Ct&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=h.has(1),$t.vertexUv2s=h.has(2),$t.vertexUv3s=h.has(3),h.clear(),$t}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(D(R,b),L(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=M[b.type];let z;if(R){const oe=Mi[R];z=qx.clone(oe.uniforms)}else z=b.uniforms;return z}function V(b,R){let z;for(let oe=0,te=m.length;oe<te;oe++){const ce=m[oe];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new ZT(o,R,b,l),m.push(z)),z}function O(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){d.remove(b)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:V,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:X}}function nA(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function s(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:l}}function iA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function zg(){const o=[];let e=0;const t=[],i=[],s=[];function l(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,y,M,T,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function f(g,_,y,M,T,S){const x=u(g,_,y,M,T,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(g,_,y,M,T,S){const x=u(g,_,y,M,T,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||iA),i.length>1&&i.sort(_||Bg),s.length>1&&s.sort(_||Bg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:l,push:f,unshift:d,finish:m,sort:h}}function rA(){let o=new WeakMap;function e(i,s){const l=o.get(i);let u;return l===void 0?(u=new zg,o.set(i,[u])):s>=l.length?(u=new zg,l.push(u)):u=l[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function sA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new rt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=t,t}}}function oA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let aA=0;function lA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function uA(o){const e=new sA,t=oA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,l=new at,u=new at;function f(h){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let y=0,M=0,T=0,S=0,x=0,D=0,L=0,C=0,V=0,O=0,U=0;h.sort(lA);for(let b=0,R=h.length;b<R;b++){const z=h[b],oe=z.color,te=z.intensity,ce=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=oe.r*te,g+=oe.g*te,_+=oe.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],te);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.directionalShadow[y]=B,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=z.shadow.matrix,D++}i.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[T]=se;const le=z.shadow;if(z.map&&(i.spotLightMap[V]=z.map,V++,le.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[T]=le.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=he,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=z.shadow.matrix,L++}i.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),i.hemi[x]=se,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const X=i.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==T||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==V||X.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+V-O,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,X.directionalLength=y,X.pointLength=M,X.spotLength=T,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=V,X.numLightProbes=U,i.version=aA++)}function d(h,m){let g=0,_=0,y=0,M=0,T=0;const S=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const L=h[x];if(L.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(L.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const C=i.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:f,setupView:d,state:i}}function Hg(o){const e=new uA(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function u(m){i.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function cA(o){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new Hg(o),e.set(s,[f])):l>=u.length?(f=new Hg(o),u.push(f)):f=u[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hA(o,e,t){let i=new Hd;const s=new St,l=new St,u=new wt,f=new fy({depthPacking:tx}),d=new dy,h={},m=t.maxTextureSize,g={[Ji]:Bn,[Bn]:Ji,[Ei]:Ei},_=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:fA,fragmentShader:dA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ri;M.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Yn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let x=this.type;this.render=function(O,U,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Nr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=x!==Yi&&this.type===Yi,ce=x===Yi&&this.type!==Yi;for(let he=0,se=O.length;he<se;he++){const le=O[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),l.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/ae.x),s.x=l.x*ae.x,B.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/ae.y),s.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||te===!0||ce===!0){const N=this.type!==Yi?{minFilter:bn,magFilter:bn}:{};B.map!==null&&B.map.dispose(),B.map=new ds(s.x,s.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),oe.viewport(u),B.updateMatrices(le,N),i=B.getFrustum(),C(U,X,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Yi&&D(B,X),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,z)};function D(O,U){const X=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ds(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,X,_,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,X,y,T,null)}function L(O,U,X,b){let R=null;const z=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?d:f,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,te=U.uuid;let ce=h[oe];ce===void 0&&(ce={},h[oe]=ce);let he=ce[te];he===void 0&&(he=R.clone(),ce[te]=he,U.addEventListener("dispose",V)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,b===Yi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=X}return R}function C(O,U,X,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Yi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ce=O.material;if(Array.isArray(ce)){const he=te.groups;for(let se=0,le=he.length;se<le;se++){const B=he[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=L(O,ae,b,R);O.onBeforeShadow(o,O,U,X,te,re,B),o.renderBufferDirect(X,null,te,re,O,B),O.onAfterShadow(o,O,U,X,te,re,B)}}}else if(ce.visible){const he=L(O,ce,b,R);O.onBeforeShadow(o,O,U,X,te,he,null),o.renderBufferDirect(X,null,te,he,O,null),O.onAfterShadow(o,O,U,X,te,he,null)}}const oe=O.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],U,X,b,R)}function V(O){O.target.removeEventListener("dispose",V);for(const X in h){const b=h[X],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const pA={[Hf]:Vf,[Gf]:jf,[Wf]:Yf,[so]:Xf,[Vf]:Hf,[jf]:Gf,[Yf]:Wf,[Xf]:so};function mA(o,e){function t(){let G=!1;const we=new wt;let ie=null;const fe=new wt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!G&&(o.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,be,it,Ft,$t){$t===!0&&(Pe*=Ft,be*=Ft,it*=Ft),we.set(Pe,be,it,Ft),fe.equals(we)===!1&&(o.clearColor(Pe,be,it,Ft),fe.copy(we))},reset:function(){G=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,ie=null,fe=null,Pe=null;return{setReversed:function(be){if(we!==be){const it=e.get("EXT_clip_control");we?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Pe;Pe=null,this.setClear(Ft)}we=be},getReversed:function(){return we},setTest:function(be){be?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){ie!==be&&!G&&(o.depthMask(be),ie=be)},setFunc:function(be){if(we&&(be=pA[be]),fe!==be){switch(be){case Hf:o.depthFunc(o.NEVER);break;case Vf:o.depthFunc(o.ALWAYS);break;case Gf:o.depthFunc(o.LESS);break;case so:o.depthFunc(o.LEQUAL);break;case Wf:o.depthFunc(o.EQUAL);break;case Xf:o.depthFunc(o.GEQUAL);break;case jf:o.depthFunc(o.GREATER);break;case Yf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=be}},setLocked:function(be){G=be},setClear:function(be){Pe!==be&&(we&&(be=1-be),o.clearDepth(be),Pe=be)},reset:function(){G=!1,ie=null,fe=null,Pe=null,we=!1}}}function s(){let G=!1,we=null,ie=null,fe=null,Pe=null,be=null,it=null,Ft=null,$t=null;return{setTest:function(Mt){G||(Mt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!G&&(o.stencilMask(Mt),we=Mt)},setFunc:function(Mt,In,Mn){(ie!==Mt||fe!==In||Pe!==Mn)&&(o.stencilFunc(Mt,In,Mn),ie=Mt,fe=In,Pe=Mn)},setOp:function(Mt,In,Mn){(be!==Mt||it!==In||Ft!==Mn)&&(o.stencilOp(Mt,In,Mn),be=Mt,it=In,Ft=Mn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){$t!==Mt&&(o.clearStencil(Mt),$t=Mt)},reset:function(){G=!1,we=null,ie=null,fe=null,Pe=null,be=null,it=null,Ft=null,$t=null}}}const l=new t,u=new i,f=new s,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,L=null,C=null,V=null,O=null,U=new rt(0,0,0),X=0,b=!1,R=null,z=null,oe=null,te=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ne=new wt().fromArray(N),Q=new wt().fromArray(ne);function de(G,we,ie,fe){const Pe=new Uint8Array(4),be=o.createTexture();o.bindTexture(G,be),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(we+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return be}const Se={};Se[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(o.DEPTH_TEST),u.setFunc(so),ht(!1),ct(Am),ve(o.CULL_FACE),k(Nr);function ve(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Te(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function De(G,we){return g[G]!==we?(o.bindFramebuffer(G,we),g[G]=we,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Ze(G,we){let ie=y,fe=!1;if(G){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Pe=G.textures;if(ie.length!==Pe.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let be=0,it=Pe.length;be<it;be++)ie[be]=o.COLOR_ATTACHMENT0+be;ie.length=Pe.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Lt(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const gt={[as]:o.FUNC_ADD,[A0]:o.FUNC_SUBTRACT,[w0]:o.FUNC_REVERSE_SUBTRACT};gt[R0]=o.MIN,gt[C0]=o.MAX;const Nt={[b0]:o.ZERO,[P0]:o.ONE,[L0]:o.SRC_COLOR,[Bf]:o.SRC_ALPHA,[O0]:o.SRC_ALPHA_SATURATE,[U0]:o.DST_COLOR,[D0]:o.DST_ALPHA,[I0]:o.ONE_MINUS_SRC_COLOR,[zf]:o.ONE_MINUS_SRC_ALPHA,[F0]:o.ONE_MINUS_DST_COLOR,[N0]:o.ONE_MINUS_DST_ALPHA,[k0]:o.CONSTANT_COLOR,[B0]:o.ONE_MINUS_CONSTANT_COLOR,[z0]:o.CONSTANT_ALPHA,[H0]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,we,ie,fe,Pe,be,it,Ft,$t,Mt){if(G===Nr){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),G!==T0){if(G!==S||Mt!==b){if((x!==as||C!==as)&&(o.blendEquation(o.FUNC_ADD),x=as,C=as),Mt)switch(G){case to:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wm:o.blendFunc(o.ONE,o.ONE);break;case Rm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case to:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Rm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,V=null,O=null,U.set(0,0,0),X=0,S=G,b=Mt}return}Pe=Pe||we,be=be||ie,it=it||fe,(we!==x||Pe!==C)&&(o.blendEquationSeparate(gt[we],gt[Pe]),x=we,C=Pe),(ie!==D||fe!==L||be!==V||it!==O)&&(o.blendFuncSeparate(Nt[ie],Nt[fe],Nt[be],Nt[it]),D=ie,L=fe,V=be,O=it),(Ft.equals(U)===!1||$t!==X)&&(o.blendColor(Ft.r,Ft.g,Ft.b,$t),U.copy(Ft),X=$t),S=G,b=!1}function Sn(G,we){G.side===Ei?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=G.side===Bn;we&&(ie=!ie),ht(ie),G.blending===to&&G.transparent===!1?k(Nr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const fe=G.stencilWrite;f.setTest(fe),fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ct(G){G!==S0?(ve(o.CULL_FACE),G!==z&&(G===Am?o.cullFace(o.BACK):G===M0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=G}function je(G){G!==oe&&(se&&o.lineWidth(G),oe=G)}function Ct(G,we,ie){G?(ve(o.POLYGON_OFFSET_FILL),(te!==we||ce!==ie)&&(o.polygonOffset(we,ie),te=we,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(G){G?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(G){G===void 0&&(G=o.TEXTURE0+he-1),ae!==G&&(o.activeTexture(G),ae=G)}function A(G,we,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==G||fe.texture!==we)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(G,we||Se[G]),fe.type=G,fe.texture=we)}function Z(){const G=re[ae];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ne.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ke(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function ft(G,we){let ie=h.get(we);ie===void 0&&(ie=new WeakMap,h.set(we,ie));let fe=ie.get(G);fe===void 0&&(fe=o.getUniformBlockIndex(we,G.name),ie.set(G,fe))}function nt(G,we){const fe=h.get(we).get(G);d.get(we)!==fe&&(o.uniformBlockBinding(we,fe,G.__bindingPointIndex),d.set(we,fe))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,L=null,C=null,V=null,O=null,U=new rt(0,0,0),X=0,b=!1,R=null,z=null,oe=null,te=null,ce=null,Ne.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Te,bindFramebuffer:De,drawBuffers:Ze,useProgram:Lt,setBlending:k,setMaterial:Sn,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:Ct,setScissorTest:Ge,activeTexture:P,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Rt}}function gA(o,e,t,i,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return y?new OffscreenCanvas(P,A):_a("canvas")}function T(P,A,Z){let pe=1;const ge=Ge(P);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);g===void 0&&(g=M(ue,We));const Ae=A?M(ue,We):g;return Ae.width=ue,Ae.height=We,Ae.getContext("2d").drawImage(P,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,A,Z,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===o.RED&&(Z===o.FLOAT&&(ue=o.R32F),Z===o.HALF_FLOAT&&(ue=o.R16F),Z===o.UNSIGNED_BYTE&&(ue=o.R8)),A===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.R8UI),Z===o.UNSIGNED_SHORT&&(ue=o.R16UI),Z===o.UNSIGNED_INT&&(ue=o.R32UI),Z===o.BYTE&&(ue=o.R8I),Z===o.SHORT&&(ue=o.R16I),Z===o.INT&&(ue=o.R32I)),A===o.RG&&(Z===o.FLOAT&&(ue=o.RG32F),Z===o.HALF_FLOAT&&(ue=o.RG16F),Z===o.UNSIGNED_BYTE&&(ue=o.RG8)),A===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RG16UI),Z===o.UNSIGNED_INT&&(ue=o.RG32UI),Z===o.BYTE&&(ue=o.RG8I),Z===o.SHORT&&(ue=o.RG16I),Z===o.INT&&(ue=o.RG32I)),A===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),Z===o.UNSIGNED_INT&&(ue=o.RGB32UI),Z===o.BYTE&&(ue=o.RGB8I),Z===o.SHORT&&(ue=o.RGB16I),Z===o.INT&&(ue=o.RGB32I)),A===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ue=o.RGBA32UI),Z===o.BYTE&&(ue=o.RGBA8I),Z===o.SHORT&&(ue=o.RGBA16I),Z===o.INT&&(ue=o.RGBA32I)),A===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),A===o.RGBA){const We=ge?cu:yt.getTransfer(pe);Z===o.FLOAT&&(ue=o.RGBA32F),Z===o.HALF_FLOAT&&(ue=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ue=We===It?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(P,A){let Z;return P?A===null||A===fs||A===uo?Z=o.DEPTH24_STENCIL8:A===pi?Z=o.DEPTH32F_STENCIL8:A===pa&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fs||A===uo?Z=o.DEPTH_COMPONENT24:A===pi?Z=o.DEPTH_COMPONENT32F:A===pa&&(Z=o.DEPTH_COMPONENT16),Z}function V(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==jn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){const A=P.target;A.removeEventListener("dispose",O),X(A),A.isVideoTexture&&m.delete(A)}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A)}function X(P){const A=i.get(P);if(A.__webglInit===void 0)return;const Z=P.source,pe=_.get(Z);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&_.delete(Z)}i.remove(P)}function b(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const Z=P.source,pe=_.get(Z);delete pe[A.__cacheKey],u.memory.textures--}function R(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[pe]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=P.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ue=i.get(Z[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),i.remove(Z[pe])}i.remove(P)}let z=0;function oe(){z=0}function te(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function ce(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function he(P,A){const Z=i.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,A);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+A)}function se(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+A)}function le(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+A)}function B(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){de(Z,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+A)}const ae={[lo]:o.REPEAT,[Ir]:o.CLAMP_TO_EDGE,[uu]:o.MIRRORED_REPEAT},re={[bn]:o.NEAREST,[$g]:o.NEAREST_MIPMAP_NEAREST,[ua]:o.NEAREST_MIPMAP_LINEAR,[jn]:o.LINEAR,[nu]:o.LINEAR_MIPMAP_NEAREST,[Ki]:o.LINEAR_MIPMAP_LINEAR},N={[ix]:o.NEVER,[ux]:o.ALWAYS,[rx]:o.LESS,[l_]:o.LEQUAL,[sx]:o.EQUAL,[lx]:o.GEQUAL,[ox]:o.GREATER,[ax]:o.NOTEQUAL};function ne(P,A){if(A.type===pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===jn||A.magFilter===nu||A.magFilter===ua||A.magFilter===Ki||A.minFilter===jn||A.minFilter===nu||A.minFilter===ua||A.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bn||A.minFilter!==ua&&A.minFilter!==Ki||A.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(P,A){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const pe=A.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ue=ce(A);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ge[ue].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(A)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return Z}function Q(P,A,Z){let pe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ne(P,A),ue=A.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+Z);const We=i.get(ue);if(ue.version!==We.__version||ge===!0){t.activeTexture(o.TEXTURE0+Z);const Ae=yt.getPrimaries(yt.workingColorSpace),Ue=A.colorSpace===Lr?null:yt.getPrimaries(A.colorSpace),ut=A.colorSpace===Lr||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(A.image,!1,s.maxTextureSize);Me=Ct(A,Me);const Oe=l.convert(A.format,A.colorSpace),qe=l.convert(A.type);let Je=L(A.internalFormat,Oe,qe,A.colorSpace,A.isVideoTexture);ne(pe,A);let ke;const ft=A.mipmaps,nt=A.isVideoTexture!==!0,Rt=We.__version===void 0||ge===!0,G=ue.dataReady,we=V(A,Me);if(A.isDepthTexture)Je=C(A.format===co,A.type),Rt&&(nt?t.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(A.isDataTexture)if(ft.length>0){nt&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data);A.generateMipmaps=!1}else nt?(Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,ft[0].width,ft[0].height,Me.depth);for(let ie=0,fe=ft.length;ie<fe;ie++)if(ke=ft[ie],A.format!==ni)if(Oe!==null)if(nt){if(G)if(A.layerUpdates.size>0){const Pe=_g(ke.width,ke.height,A.format,A.type);for(const be of A.layerUpdates){const it=ke.data.subarray(be*Pe/ke.data.BYTES_PER_ELEMENT,(be+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,be,ke.width,ke.height,1,Oe,it)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{nt&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],A.format!==ni?Oe!==null?nt?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(A.isDataArrayTexture)if(nt){if(Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),G)if(A.layerUpdates.size>0){const ie=_g(Me.width,Me.height,A.format,A.type);for(const fe of A.layerUpdates){const Pe=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,qe,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isData3DTexture)nt?(Rt&&t.texStorage3D(o.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isFramebufferTexture){if(Rt)if(nt)t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Je,ie,fe,0,Oe,qe,null),ie>>=1,fe>>=1}}else if(ft.length>0){if(nt&&Rt){const ie=Ge(ft[0]);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,qe,ke):t.texImage2D(o.TEXTURE_2D,ie,Je,Oe,qe,ke);A.generateMipmaps=!1}else if(nt){if(Rt){const ie=Ge(Me);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else t.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);S(A)&&x(pe),We.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function de(P,A,Z){if(A.image.length!==6)return;const pe=Ne(P,A),ge=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Z);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const We=yt.getPrimaries(yt.workingColorSpace),Ae=A.colorSpace===Lr?null:yt.getPrimaries(A.colorSpace),Ue=A.colorSpace===Lr||We===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!ut&&!Me?Oe[fe]=T(A.image[fe],!0,s.maxCubemapSize):Oe[fe]=Me?A.image[fe].image:A.image[fe],Oe[fe]=Ct(A,Oe[fe]);const qe=Oe[0],Je=l.convert(A.format,A.colorSpace),ke=l.convert(A.type),ft=L(A.internalFormat,Je,ke,A.colorSpace),nt=A.isVideoTexture!==!0,Rt=ue.__version===void 0||pe===!0,G=ge.dataReady;let we=V(A,qe);ne(o.TEXTURE_CUBE_MAP,A);let ie;if(ut){nt&&Rt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];A.format!==ni?Je!==null?nt?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Je,be.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Je,ke,be.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,ft,be.width,be.height,0,Je,ke,be.data)}}}else{if(ie=A.mipmaps,nt&&Rt){ie.length>0&&we++;const fe=Ge(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,ke,Oe[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Oe[fe].width,Oe[fe].height,0,Je,ke,Oe[fe].data);for(let Pe=0;Pe<ie.length;Pe++){const it=ie[Pe].image[fe].image;nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,it.width,it.height,Je,ke,it.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,ft,it.width,it.height,0,Je,ke,it.data)}}else{nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ke,Oe[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Je,ke,Oe[fe]);for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,Je,ke,be.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,ft,Je,ke,be.image[fe])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,Z,pe,ge,ue){const We=l.convert(Z.format,Z.colorSpace),Ae=l.convert(Z.type),Ue=L(Z.internalFormat,We,Ae,Z.colorSpace),ut=i.get(A),Me=i.get(Z);if(Me.__renderTarget=A,!ut.__hasExternalTextures){const Oe=Math.max(1,A.width>>ue),qe=Math.max(1,A.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ue,Oe,qe,A.depth,0,We,Ae,null):t.texImage2D(ge,ue,Ue,Oe,qe,0,We,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ht(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,A,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(A.stencilBuffer,ge),We=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ht(A);ct(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ue,A.width,A.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,P)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Ue=L(ue.internalFormat,We,Ae,ue.colorSpace),ut=ht(A);Z&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ue,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const ge=pe.__webglTexture,ue=ht(A);if(A.depthTexture.format===no)ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(A.depthTexture.format===co)ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function De(P){const A=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,P)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ve(A.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,A,Z){const pe=i.get(P);A!==void 0&&Se(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&De(P)}function Lt(P){const A=P.texture,Z=i.get(P),pe=i.get(A);P.addEventListener("dispose",U);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=A.version,u.memory.textures++),ue){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)Z.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=i.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&ct(P)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=l.convert(Ue.format,Ue.colorSpace),Me=l.convert(Ue.type),Oe=L(Ue.internalFormat,ut,Me,Ue.colorSpace,P.isXRRenderTarget===!0),qe=ht(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ae][Ue],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Se(Z.__webglFramebuffer[Ae],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(A)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=ge[Ae],Me=i.get(ut);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,ut),Se(Z.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ut)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ue],P,A,o.COLOR_ATTACHMENT0,Ae,Ue);else Se(Z.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ae,0);S(A)&&x(Ae),t.unbindTexture()}P.depthBuffer&&De(P)}function gt(P){const A=P.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const ge=A[Z];if(S(ge)){const ue=D(P),We=i.get(ge).__webglTexture;t.bindTexture(ue,We),x(ue),t.unbindTexture()}}}const Nt=[],k=[];function Sn(P){if(P.samples>0){if(ct(P)===!1){const A=P.textures,Z=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=i.get(P),Ae=A.length>1;if(Ae)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),d===!0&&(Nt.length=0,k.length=0,Nt.push(o.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Nt.push(ue),k.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ht(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=u.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function Ct(P,A){const Z=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Ln&&Z!==Lr&&(yt.getTransfer(Z)===It?(pe!==ni||ge!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function _A(o,e){function t(i,s=Lr){let l;const u=yt.getTransfer(s);if(i===er)return o.UNSIGNED_BYTE;if(i===Id)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Jg)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return o.BYTE;if(i===Qg)return o.SHORT;if(i===pa)return o.UNSIGNED_SHORT;if(i===Ld)return o.INT;if(i===fs)return o.UNSIGNED_INT;if(i===pi)return o.FLOAT;if(i===va)return o.HALF_FLOAT;if(i===e_)return o.ALPHA;if(i===t_)return o.RGB;if(i===ni)return o.RGBA;if(i===n_)return o.LUMINANCE;if(i===i_)return o.LUMINANCE_ALPHA;if(i===no)return o.DEPTH_COMPONENT;if(i===co)return o.DEPTH_STENCIL;if(i===Nd)return o.RED;if(i===Ud)return o.RED_INTEGER;if(i===r_)return o.RG;if(i===Fd)return o.RG_INTEGER;if(i===Od)return o.RGBA_INTEGER;if(i===iu||i===ru||i===su||i===ou)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===iu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===iu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ru)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ou)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$f||i===Zf||i===Qf||i===Jf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===$f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ed||i===td||i===nd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===ed||i===td)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===nd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===ud||i===cd||i===fd||i===dd||i===hd||i===pd||i===md||i===gd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===id)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ad)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ld)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===md)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===au||i===_d||i===vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===au)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s_||i===xd||i===yd||i===Sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===au)return l.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const vA={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ln,l=e.properties.get(s);l.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fr({vertexShader:xA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new gu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends _o{constructor(e,t){super();const i=this;let s=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,_=null,y=null,M=null;const T=new SA,S=t.getContextAttributes();let x=null,D=null;const L=[],C=[],V=new St;let O=null;const U=new Cn;U.viewport=new wt;const X=new Cn;X.viewport=new wt;const b=[U,X],R=new Ny;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=L[Q];return de===void 0&&(de=new Nf,L[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=L[Q];return de===void 0&&(de=new Nf,L[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=L[Q];return de===void 0&&(de=new Nf,L[Q]=de),de.getHandSpace()};function te(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,h||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",he);for(let Q=0;Q<L.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,L[Q].disconnect(de))}z=null,oe=null,T.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,D=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?co:no,ve=S.stencil?uo:fs);const De={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(De),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ds(_.textureWidth,_.textureHeight,{format:ni,type:er,depthTexture:new E_(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ds(y.framebufferWidth,y.framebufferHeight,{format:ni,type:er,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(f),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,L[ve].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let De=0;De<L.length;De++)if(De>=C.length){C.push(Se),ve=De;break}else if(C[De]===null){C[De]=Se,ve=De;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Se)}}const se=new Y,le=new Y;function B(Q,de,Se){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,De=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Lt=Te[14]/(Te[10]+1),gt=(Te[9]+1)/Te[5],Nt=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],Sn=(De[8]+1)/De[0],ht=Ze*k,ct=Ze*Sn,je=ve/(-k+Sn),Ct=je*-k;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ct),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+je,P=Lt+je,A=ht-Ct,Z=ct+(ve-Ct),pe=gt*Lt/P*Ge,ge=Nt*Lt/P*Ge;Q.projectionMatrix.makePerspective(A,Z,pe,ge,Ge,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let de=Q.near,Se=Q.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),R.near=X.near=U.near=de,R.far=X.far=U.far=Se,(z!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,R.layers.mask=U.layers.mask|X.layers.mask;const ve=Q.parent,Te=R.cameras;ae(R,ve);for(let De=0;De<Te.length;De++)ae(Te[De],ve);Te.length===2?B(R,U,X):R.projectionMatrix.copy(U.projectionMatrix),re(Q,R,ve)};function re(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function ne(Q,de){if(m=de.getViewerPose(h||u),M=de,m!==null){const Se=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let De=0;De<Se.length;De++){const Ze=Se[De];let Lt=null;if(y!==null)Lt=y.getViewport(Ze);else{const Nt=g.getViewSubImage(_,Ze);Lt=Nt.viewport,De===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,_.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let gt=b[De];gt===void 0&&(gt=new Cn,gt.layers.enable(De),gt.viewport=new wt,b[De]=gt),gt.matrix.fromArray(Ze.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ze.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),De===0&&(R.matrix.copy(gt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(gt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const De=g.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&T.init(e,De,s.renderState)}}for(let Se=0;Se<L.length;Se++){const ve=C[Se],Te=L[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,h||u)}N&&N(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ne=new C_;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const is=new Ai,EA=new at;function TA(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,g_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,D,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),T(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,D,L):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Bn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Bn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,C=D.envMapRotation;L&&(S.envMap.value=L,is.copy(C),is.x*=-1,is.y*=-1,is.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),S.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(is)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=L*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function AA(o,e,t,i){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const C=L.program;i.uniformBlockBinding(D,C)}function h(D,L){let C=s[D.id];C===void 0&&(M(D),C=m(D),s[D.id]=C,D.addEventListener("dispose",S));const V=L.program;i.updateUBOMapping(D,V);const O=e.render.frame;l[D.id]!==O&&(_(D),l[D.id]=O)}function m(D){const L=g();D.__bindingPointIndex=L;const C=o.createBuffer(),V=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=s[D.id],C=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const X=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=X.length;b<R;b++){const z=X[b];if(y(z,O,b,V)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let he=0;he<te.length;he++){const se=te[he],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,L,C,V){const O=D.value,U=L+"_"+C;if(V[U]===void 0)return typeof O=="number"||typeof O=="boolean"?V[U]=O:V[U]=O.clone(),!0;{const X=V[U];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return V[U]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function M(D){const L=D.uniforms;let C=0;const V=16;for(let U=0,X=L.length;U<X;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,z=b.length;R<z;R++){const oe=b[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=te.length;ce<he;ce++){const se=te[ce],le=T(se),B=C%V,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&V-re<le.storage&&(C+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%V;return O>0&&(C+=V-O),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function x(){for(const D in s)o.deleteBuffer(s[D]);u=[],s={},l={}}return{bind:d,update:h,dispose:x}}class wA{constructor(e={}){const{canvas:t=Rx(),context:i=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Ur,this.toneMappingExposure=1;const C=this;let V=!1,O=0,U=0,X=null,b=-1,R=null;const z=new wt,oe=new wt;let te=null;const ce=new rt(0);let he=0,se=t.width,le=t.height,B=1,ae=null,re=null;const N=new wt(0,0,se,le),ne=new wt(0,0,se,le);let Ne=!1;const Q=new Hd;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new at,Te=new at,De=new Y,Ze=new wt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Nt(){return X===null?B:1}let k=i;function Sn(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),k===null){const W="webgl2";if(k=Sn(W,w),k===null)throw Sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,ct,je,Ct,Ge,P,A,Z,pe,ge,ue,We,Ae,Ue,ut,Me,Oe,qe,Je,ke,ft,nt,Rt,G;function we(){ht=new UE(k),ht.init(),nt=new _A(k,ht),ct=new bE(k,ht,e,nt),je=new mA(k,ht),ct.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),Ct=new kE(k),Ge=new nA,P=new gA(k,ht,je,Ge,ct,nt,Ct),A=new LE(C),Z=new NE(C),pe=new Xy(k),Rt=new RE(k,pe),ge=new FE(k,pe,Ct,Rt),ue=new zE(k,ge,pe,Ct),Je=new BE(k,ct,P),Me=new PE(Ge),We=new tA(C,A,Z,ht,ct,Rt,Me),Ae=new TA(C,Ge),Ue=new rA,ut=new cA(ht),qe=new wE(C,A,Z,je,ue,y,d),Oe=new hA(C,ue,ct),G=new AA(k,Ct,ct,je),ke=new CE(k,ht,Ct),ft=new OE(k,ht,Ct),Ct.programs=We.programs,C.capabilities=ct,C.extensions=ht,C.properties=Ge,C.renderLists=Ue,C.shadowMap=Oe,C.state=je,C.info=Ct}we();const ie=new MA(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,W,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=W,t.width=Math.floor(w*B),t.height=Math.floor(W*B),J===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,W,J){se=w,le=W,B=J,t.width=Math.floor(w*J),t.height=Math.floor(W*J),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,W,J,K){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,W,J,K),je.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,W,J,K){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,W,J,K),je.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){je.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,W=!0,J=!0){let K=0;if(w){let j=!1;if(X!==null){const ye=X.texture.format;j=ye===Od||ye===Fd||ye===Ud}if(j){const ye=X.texture.type,Re=ye===er||ye===fs||ye===pa||ye===uo||ye===Id||ye===Dd,Le=qe.getClearColor(),Be=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(M[0]=et,M[1]=Qe,M[2]=He,M[3]=Be,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=et,T[1]=Qe,T[2]=He,T[3]=Be,k.clearBufferiv(k.COLOR,0,T))}else K|=k.COLOR_BUFFER_BIT}W&&(K|=k.DEPTH_BUFFER_BIT),J&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Ue.dispose(),ut.dispose(),Ge.dispose(),A.dispose(),Z.dispose(),ue.dispose(),Rt.dispose(),G.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",hs),ie.removeEventListener("sessionend",nr),Pi.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=Ct.autoReset,W=Oe.enabled,J=Oe.autoUpdate,K=Oe.needsUpdate,j=Oe.type;we(),Ct.autoReset=w,Oe.enabled=W,Oe.autoUpdate=J,Oe.needsUpdate=K,Oe.type=j}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const W=w.target;W.removeEventListener("dispose",it),Ft(W)}function Ft(w){$t(w),Ge.remove(w)}function $t(w){const W=Ge.get(w).programs;W!==void 0&&(W.forEach(function(J){We.releaseProgram(J)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,J,K,j,ye){W===null&&(W=Lt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=Ea(w,W,J,K,j);je.setMaterial(K,Re);let Be=J.index,et=1;if(K.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let vt=Qe.start*et,st=(Qe.start+Qe.count)*et;ye!==null&&(vt=Math.max(vt,ye.start*et),st=Math.min(st,(ye.start+ye.count)*et)),Be!==null?(vt=Math.max(vt,0),st=Math.min(st,Be.count)):He!=null&&(vt=Math.max(vt,0),st=Math.min(st,He.count));const Wt=st-vt;if(Wt<0||Wt===1/0)return;Rt.setup(j,K,Le,J,Be);let Bt,xt=ke;if(Be!==null&&(Bt=pe.get(Be),xt=ft,xt.setIndex(Bt)),j.isMesh)K.wireframe===!0?(je.setLineWidth(K.wireframeLinewidth*Nt()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(j.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Nt()),j.isLineSegments?xt.setMode(k.LINES):j.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else j.isPoints?xt.setMode(k.POINTS):j.isSprite&&xt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Xt=j._multiDrawCounts,_t=j._multiDrawCount,hn=Be?pe.get(Be).bytesPerElement:1,rr=Ge.get(K).currentProgram.getUniforms();for(let En=0;En<_t;En++)rr.setValue(k,"_gl_DrawID",En),xt.render(Ye[En]/hn,Xt[En])}else if(j.isInstancedMesh)xt.renderInstances(vt,Wt,j.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Ye);xt.renderInstances(vt,Wt,Xt)}else xt.render(vt,Wt)};function Mt(w,W,J){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,ps(w,W,J),w.side=Ji,w.needsUpdate=!0,ps(w,W,J),w.side=Ei):ps(w,W,J)}this.compile=function(w,W,J=null){J===null&&(J=w),x=ut.get(J),x.init(W),L.push(x),J.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),w!==J&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const K=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];Mt(Le,J,j),K.add(Le)}else Mt(ye,J,j),K.add(ye)}),L.pop(),x=null,K},this.compileAsync=function(w,W,J=null){const K=this.compile(w,W,J);return new Promise(j=>{function ye(){if(K.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){j(w);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let In=null;function Mn(w){In&&In(w)}function hs(){Pi.stop()}function nr(){Pi.start()}const Pi=new C_;Pi.setAnimationLoop(Mn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){In=w,ie.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},ie.addEventListener("sessionstart",hs),ie.addEventListener("sessionend",nr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,W,X),x=ut.get(w,L.length),x.init(W),L.push(x),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),S=Ue.get(w,D.length),S.init(),D.push(S),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Li(ye,W,-1/0,C.sortObjects)}Li(w,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),gt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gt&&qe.addToRenderList(S,w),this.info.render.frame++,de===!0&&Me.beginShadows();const J=x.state.shadowsArray;Oe.render(J,w,W),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,j=S.transmissive;if(x.setupLights(),W.isArrayCamera){const ye=W.cameras;if(j.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const Be=ye[Re];Br(K,j,w,Be)}gt&&qe.render(w);for(let Re=0,Le=ye.length;Re<Le;Re++){const Be=ye[Re];kr(S,w,Be,Be.viewport)}}else j.length>0&&Br(K,j,w,W),gt&&qe.render(w),kr(S,w,W);X!==null&&U===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(C,w,W),Rt.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Li(w,W,J,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){K&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),Le=w.material;Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Re=ue.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Be=Re.groups;for(let et=0,Qe=Be.length;et<Qe;et++){const He=Be[et],vt=Le[He.materialIndex];vt&&vt.visible&&S.push(w,Re,vt,J,Ze.z,He)}}else Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}const ye=w.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Li(ye[Re],W,J,K)}function kr(w,W,J,K){const j=w.opaque,ye=w.transmissive,Re=w.transparent;x.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),K&&je.viewport(z.copy(K)),j.length>0&&ir(j,W,J),ye.length>0&&ir(ye,W,J),Re.length>0&&ir(Re,W,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Br(w,W,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new ds(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?va:er,minFilter:Ki,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const ye=x.state.transmissionRenderTarget[K.id],Re=K.viewport||z;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),gt&&qe.render(J);const Be=C.toneMapping;C.toneMapping=Ur;const et=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),de===!0&&Me.setGlobalState(C.clippingPlanes,K),ir(w,J,K),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,vt=W.length;He<vt;He++){const st=W[He],Wt=st.object,Bt=st.geometry,xt=st.material,Ye=st.group;if(xt.side===Ei&&Wt.layers.test(K.layers)){const Xt=xt.side;xt.side=Bn,xt.needsUpdate=!0,Sa(Wt,J,K,Bt,xt,Ye),xt.side=Xt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}C.setRenderTarget(Le),C.setClearColor(ce,he),et!==void 0&&(K.viewport=et),C.toneMapping=Be}function ir(w,W,J){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ye=w.length;j<ye;j++){const Re=w[j],Le=Re.object,Be=Re.geometry,et=K===null?Re.material:K,Qe=Re.group;Le.layers.test(J.layers)&&Sa(Le,W,J,Be,et,Qe)}}function Sa(w,W,J,K,j,ye){w.onBeforeRender(C,W,J,K,j,ye),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(C,W,J,K,w,ye),j.transparent===!0&&j.side===Ei&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,C.renderBufferDirect(J,W,K,j,w,ye),j.side=Ji,j.needsUpdate=!0,C.renderBufferDirect(J,W,K,j,w,ye),j.side=Ei):C.renderBufferDirect(J,W,K,j,w,ye),w.onAfterRender(C,W,J,K,j,ye)}function ps(w,W,J){W.isScene!==!0&&(W=Lt);const K=Ge.get(w),j=x.state.lights,ye=x.state.shadowsArray,Re=j.state.version,Le=We.getParameters(w,j.state,ye,W,J),Be=We.getProgramCacheKey(Le);let et=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?Z:A).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",it),et=new Map,K.programs=et);let Qe=et.get(Be);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Re)return gi(w,Le),Qe}else Le.uniforms=We.getUniforms(w),w.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,Be),et.set(Be,Qe),K.uniforms=Le.uniforms;const He=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Me.uniform),gi(w,Le),K.needsLights=xu(w),K.lightsStateVersion=Re,K.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function Ma(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=lu.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function gi(w,W){const J=Ge.get(w);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Ea(w,W,J,K,j){W.isScene!==!0&&(W=Lt),P.resetTextureUnits();const ye=W.fog,Re=K.isMeshStandardMaterial?W.environment:null,Le=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ln,Be=(K.isMeshStandardMaterial?Z:A).get(K.envMap||Re),et=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!J.morphAttributes.position,vt=!!J.morphAttributes.normal,st=!!J.morphAttributes.color;let Wt=Ur;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const Bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,Ye=Ge.get(K),Xt=x.state.lights;if(de===!0&&(Se===!0||w!==R)){const un=w===R&&K.id===b;Me.setState(K,w,un)}let _t=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Xt.state.version||Ye.outputColorSpace!==Le||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==Be||K.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==vt||Ye.morphColors!==st||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ye.__version=K.version);let hn=Ye.currentProgram;_t===!0&&(hn=ps(K,W,j));let rr=!1,En=!1,Ii=!1;const Dt=hn.getUniforms(),pn=Ye.uniforms;if(je.useProgram(hn.program)&&(rr=!0,En=!0,Ii=!0),K.id!==b&&(b=K.id,En=!0),rr||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),bx(ve),Px(ve),Dt.setValue(k,"projectionMatrix",ve)):Dt.setValue(k,"projectionMatrix",w.projectionMatrix),Dt.setValue(k,"viewMatrix",w.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(k,De.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,En=!0,Ii=!0)}if(j.isSkinnedMesh){Dt.setOptional(k,j,"bindMatrix"),Dt.setOptional(k,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(k,"boneTexture",un.boneTexture,P))}j.isBatchedMesh&&(Dt.setOptional(k,j,"batchingTexture"),Dt.setValue(k,"batchingTexture",j._matricesTexture,P),Dt.setOptional(k,j,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",j._indirectTexture,P),Dt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",j._colorsTexture,P));const tn=J.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Je.update(j,J,hn),(En||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Dt.setValue(k,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(pn.envMap.value=Be,pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),En&&(Dt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Ta(pn,Ii),ye&&K.fog===!0&&Ae.refreshFogUniforms(pn,ye),Ae.refreshMaterialUniforms(pn,K,B,le,x.state.transmissionRenderTarget[w.id]),lu.upload(k,Ma(Ye),pn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(lu.upload(k,Ma(Ye),pn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(k,"center",j.center),Dt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(k,"normalMatrix",j.normalMatrix),Dt.setValue(k,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let nn=0,Et=un.length;nn<Et;nn++){const _i=un[nn];G.update(_i,hn),G.bind(_i,hn)}}return hn}function Ta(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,W,J){Ge.get(w.texture).__webglTexture=W,Ge.get(w.depthTexture).__webglTexture=J;const K=Ge.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const J=Ge.get(w);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const Aa=k.createFramebuffer();this.setRenderTarget=function(w,W=0,J=0){X=w,O=W,U=J;let K=!0,j=null,ye=!1,Re=!1;if(w){const Be=Ge.get(w);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Be.__hasExternalTextures)P.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?j=Qe[W][J]:j=Qe[W],ye=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?j=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[J]:j=Qe,z.copy(w.viewport),oe.copy(w.scissor),te=w.scissorTest}else z.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ne;if(J!==0&&(j=Aa),je.bindFramebuffer(k.FRAMEBUFFER,j)&&K&&je.drawBuffers(w,j),je.viewport(z),je.scissor(oe),je.setScissorTest(te),ye){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,J)}else if(Re){const Be=Ge.get(w.texture),et=W;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,J,et)}else if(w!==null&&J!==0){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(w,W,J,K,j,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Be=w.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&J>=0&&J<=w.height-j&&k.readPixels(W,J,K,j,nt.convert(et),nt.convert(Qe),ye)}finally{const Be=X!==null?Ge.get(X).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,W,J,K,j,ye,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Be=w.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-K&&J>=0&&J<=w.height-j){je.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(W,J,K,j,nt.convert(et),nt.convert(Qe),0);const vt=X!==null?Ge.get(X).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,vt);const st=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Cx(k,st,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(He),k.deleteSync(st),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,J=0){w.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-J),j=Math.floor(w.image.width*K),ye=Math.floor(w.image.height*K),Re=W!==null?W.x:0,Le=W!==null?W.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,Le,j,ye),je.unbindTexture()};const wa=k.createFramebuffer(),Ra=k.createFramebuffer();this.copyTextureToTexture=function(w,W,J=null,K=null,j=0,ye=null){w.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],W=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(j!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Re,Le,Be,et,Qe,He,vt,st,Wt;const Bt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const tn=Math.pow(2,-j);Re=Math.floor(Bt.width*tn),Le=Math.floor(Bt.height*tn),w.isDataArrayTexture?Be=Bt.depth:w.isData3DTexture?Be=Math.floor(Bt.depth*tn):Be=1,et=0,Qe=0,He=0}K!==null?(vt=K.x,st=K.y,Wt=K.z):(vt=0,st=0,Wt=0);const xt=nt.convert(W.format),Ye=nt.convert(W.type);let Xt;W.isData3DTexture?(P.setTexture3D(W,0),Xt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Xt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Xt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),hn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),rr=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Ii=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const Dt=w.isDataArrayTexture||w.isData3DTexture,pn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const tn=Ge.get(w),un=Ge.get(W),nn=Ge.get(tn.__renderTarget),Et=Ge.get(un.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,nn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _i=0;_i<Be;_i++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,j,He+_i),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,ye,Wt+_i)),k.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Ge.has(w)){const tn=Ge.get(w),un=Ge.get(W);je.bindFramebuffer(k.READ_FRAMEBUFFER,wa),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ra);for(let nn=0;nn<Be;nn++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,j,He+nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,j),pn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ye,Wt+nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ye),j!==0?k.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,k.COLOR_BUFFER_BIT,k.NEAREST):pn?k.copyTexSubImage3D(Xt,ye,vt,st,Wt+nn,et,Qe,Re,Le):k.copyTexSubImage2D(Xt,ye,vt,st,et,Qe,Re,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Xt,ye,vt,st,Wt,Re,Le,Be,xt,Ye,Bt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Xt,ye,vt,st,Wt,Re,Le,Be,xt,Bt.data):k.texSubImage3D(Xt,ye,vt,st,Wt,Re,Le,Be,xt,Ye,Bt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,vt,st,Re,Le,xt,Ye,Bt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,vt,st,Bt.width,Bt.height,xt,Bt.data):k.texSubImage2D(k.TEXTURE_2D,ye,vt,st,Re,Le,xt,Ye,Bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,hn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rr),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ii),ye===0&&W.generateMipmaps&&k.generateMipmap(Xt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,W,J=null,K=null,j=0){return w.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,w=arguments[2],W=arguments[3],j=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,J,K,j)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){O=0,U=0,X=null,je.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function Vg(o,e){if(e===J0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Md||e===o_){let t=o.getIndex();if(t===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)u.push(d);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Md)for(let u=1;u<=i;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class RA extends yo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new jA(t)})}load(e,t,i,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=ha.extractUrlBase(e);u=ha.resolveURL(h,this.path)}else u=ha.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){s?s(h):console.error(h),l.manager.itemError(e),l.manager.itemEnd(e)},d=new w_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{l.parse(h,u,function(m){t(m),l.manager.itemEnd(e)},f)}catch(m){f(m)}},i,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let l;const u={},f={},d=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===D_){try{u[mt.KHR_BINARY_GLTF]=new YA(e)}catch(g){s&&s(g);return}l=JSON.parse(u[mt.KHR_BINARY_GLTF].content)}else l=JSON.parse(d.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new ow(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[g.name]=g,u[g.name]=!0}if(l.extensionsUsed)for(let m=0;m<l.extensionsUsed.length;++m){const g=l.extensionsUsed[m],_=l.extensionsRequired||[];switch(g){case mt.KHR_MATERIALS_UNLIT:u[g]=new PA;break;case mt.KHR_DRACO_MESH_COMPRESSION:u[g]=new qA(l,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:u[g]=new KA;break;case mt.KHR_MESH_QUANTIZATION:u[g]=new $A;break;default:_.indexOf(g)>=0&&f[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(u),h.setPlugins(f),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,l){i.parse(e,t,s,l)})}}function CA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bA{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const l=t[i];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const l=t.json,d=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let h;const m=new rt(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Ln);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new R_(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Py(m),h.distance=g;break;case"spot":h=new Cy(m),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,qi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,l=i.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return i._getNodeRef(t.cache,f,d)})}}class PA{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return us}extendParams(e,t,i){const s=[];e.color=new rt(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Ln),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",l.baseColorTexture,dn))}return Promise.all(s)}}class LA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class IA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new St(f,f)}return Promise.all(l)}}class DA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class NA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class UA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],Ln)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,dn)),u.sheenRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class FA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class OA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(f[0],f[1],f[2],Ln),Promise.all(l)}}class kA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class BA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(f[0],f[1],f[2],Ln),u.specularColorTexture!==void 0&&l.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,dn)),Promise.all(l)}}class zA{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class HA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class VA{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class GA{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WA{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XA{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(f,d,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(m*g);return u.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class jA{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ti.TRIANGLES&&h.mode!==ti.TRIANGLE_STRIP&&h.mode!==ti.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=i.extensions[this.name].attributes,f=[],d={};for(const h in u)f.push(this.parser.getDependency("accessor",u[h]).then(m=>(d[h]=m,d[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const T=new at,S=new Y,x=new Or,D=new Y(1,1,1),L=new sy(M.geometry,M.material,_);for(let C=0;C<_;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,C),d.SCALE&&D.fromBufferAttribute(d.SCALE,C),L.setMatrixAt(C,T.compose(S,x,D));for(const C in d)if(C==="_COLOR_0"){const V=d[C];L.instanceColor=new Td(V.array,V.itemSize,V.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,d[C]);Gt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),y.push(L)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const D_="glTF",la=12,Gg={JSON:1313821514,BIN:5130562};class YA{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,la),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==D_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-la,l=new DataView(e,la);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const d=l.getUint32(u,!0);if(u+=4,d===Gg.JSON){const h=new Uint8Array(e,la+u,f);this.content=i.decode(h)}else if(d===Gg.BIN){const h=la+u;this.body=e.slice(h,h+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},d={},h={};for(const m in u){const g=Rd[m]||m.toLowerCase();f[g]=u[m]}for(const m in e.attributes){const g=Rd[m]||m.toLowerCase();if(u[m]!==void 0){const _=i.accessors[e.attributes[m]],y=ro[_.componentType];h[g]=y.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",l).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const T=y.attributes[M],S=d[M];S!==void 0&&(T.normalized=S)}g(y)},f,h,Ln,_)})})}}class KA{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $A{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class N_ extends ya{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=i[l+u];return t}interpolate_(e,t,i,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=f*2,h=f*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,T=M-h,S=-2*y+3*_,x=y-_,D=1-S,L=x-_+g;for(let C=0;C!==f;C++){const V=u[T+C+f],O=u[T+C+d]*m,U=u[M+C+f],X=u[M+C]*m;l[C]=D*V+L*O+S*U+x*X}return l}}const ZA=new Or;class QA extends N_{interpolate_(e,t,i,s){const l=super.interpolate_(e,t,i,s);return ZA.fromArray(l).normalize().toArray(l),l}}const ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wg={9728:bn,9729:jn,9984:$g,9985:nu,9986:ua,9987:Ki},Xg={33071:Ir,33648:uu,10497:lo},Uf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JA={CUBICSPLINE:void 0,LINEAR:ga,STEP:ma},Ff={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ew(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Gd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),o.DefaultMaterial}function rs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tw(o,e,t){let i=!1,s=!1,l=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(l=!0),i&&s&&l)break}if(!i&&!s&&!l)return Promise.resolve(o);const u=[],f=[],d=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;u.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;f.push(_)}if(l){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),l&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function nw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iw(o){let e;const t=o.extensions&&o.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Of(t.attributes):e=o.indices+":"+Of(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Of(o.targets[i]);return e}function Of(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Cd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sw=new at;class ow{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||l&&u<98?this.textureLoader=new wy(this.options.manager):this.textureLoader=new Dy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new w_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:i,userData:{}};return rs(l,f,s),qi(f,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,d=u.length;f<d;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),l=(u,f)=>{const d=this.associations.get(u);d!=null&&this.associations.set(f,d);for(const[h,m]of u.children.entries())l(m,f.children[h])};return l(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&i.push(l)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){i.load(ha.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,l=t.byteOffset||0;return i.slice(l,l+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=Uf[s.type],f=ro[s.componentType],d=s.normalized===!0,h=new f(s.count*u);return Promise.resolve(new Pn(h,u,d))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],d=Uf[s.type],h=ro[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(y&&y!==g){const x=Math.floor(_/y),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let L=t.cache.get(D);L||(T=new h(f,x*y,s.count*y/m),L=new ey(T,y/m),t.cache.add(D,L)),S=new Bd(L,d,_%y/m,M)}else f===null?T=new h(s.count*d):T=new h(f,_,s.count*d),S=new Pn(T,d,M);if(s.sparse!==void 0){const x=Uf.SCALAR,D=ro[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,V=new D(u[1],L,s.sparse.count*x),O=new h(u[2],C,s.sparse.count*d);f!==null&&(S=new Pn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,X=V.length;U<X;U++){const b=V[U];if(S.setX(b,O[U*d]),d>=2&&S.setY(b,O[U*d+1]),d>=3&&S.setZ(b,O[U*d+2]),d>=4&&S.setW(b,O[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const d=i.manager.getHandler(u.uri);d!==null&&(f=d)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,i){const s=this,l=this.json,u=l.textures[e],f=l.images[t],d=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=u.name||f.name||"",m.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(m.name=f.uri);const _=(l.samplers||{})[u.sampler]||{};return m.magFilter=Wg[_.magFilter]||jn,m.minFilter=Wg[_.minFilter]||Ki,m.wrapS=Xg[_.wrapS]||lo,m.wrapT=Xg[_.wrapT]||lo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==bn&&m.minFilter!==jn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=s.images[e],f=self.URL||self.webkitURL;let d=u.uri||"",h=!1;if(u.bufferView!==void 0)d=i.getDependency("bufferView",u.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:u.mimeType});return d=f.createObjectURL(_),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new ln(T);S.needsUpdate=!0,_(S)}),t.load(ha.resolveURL(g,l.path),M,void 0,y)})}).then(function(g){return h===!0&&f.revokeObjectURL(d),qi(g,u),g.userData.mimeType=u.mimeType||rw(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const l=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),l.extensions[mt.KHR_TEXTURE_TRANSFORM]){const f=i.extensions!==void 0?i.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=l.associations.get(u);u=l.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,d)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new M_,Ti.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(f,d)),i=d}else if(e.isLine){const f="LineBasicMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new S_,Ti.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(f,d)),i=d}if(s||l||u){let f="ClonedMaterial:"+i.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=i.clone(),l&&(d.vertexColors=!0),u&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Gd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,l=i.materials[e];let u;const f={},d=l.extensions||{},h=[];if(d[mt.KHR_MATERIALS_UNLIT]){const g=s[mt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),h.push(g.extendParams(f,l,t))}else{const g=l.pbrMetallicRoughness||{};if(f.color=new rt(1,1,1),f.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;f.color.setRGB(_[0],_[1],_[2],Ln),f.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",g.baseColorTexture,dn)),f.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,f.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=Ei);const m=l.alphaMode||Ff.OPAQUE;if(m===Ff.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,m===Ff.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==us&&(h.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new St(1,1),l.normalTexture.scale!==void 0)){const g=l.normalTexture.scale;f.normalScale.set(g,g)}if(l.occlusionTexture!==void 0&&u!==us&&(h.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==us){const g=l.emissiveFactor;f.emissive=new rt().setRGB(g[0],g[1],g[2],Ln)}return l.emissiveTexture!==void 0&&u!==us&&h.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,dn)),Promise.all(h).then(function(){const g=new u(f);return l.name&&(g.name=l.name),qi(g,l),t.associations.set(g,{materials:e}),l.extensions&&rs(s,g,l),g})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function l(f){return i[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(d){return jg(d,f,t)})}const u=[];for(let f=0,d=e.length;f<d;f++){const h=e[f],m=iw(h),g=s[m];if(g)u.push(g.promise);else{let _;h.extensions&&h.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?_=l(h):_=jg(new Ri,h,t),s[m]={primitive:h,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,s=this.extensions,l=i.meshes[e],u=l.primitives,f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d].material===void 0?ew(this.cache):this.getDependency("material",u[d].material);f.push(m)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const T=m[y],S=u[y];let x;const D=h[y];if(S.mode===ti.TRIANGLES||S.mode===ti.TRIANGLE_STRIP||S.mode===ti.TRIANGLE_FAN||S.mode===void 0)x=l.isSkinnedMesh===!0?new ny(T,D):new Yn(T,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===ti.TRIANGLE_STRIP?x.geometry=Vg(x.geometry,o_):S.mode===ti.TRIANGLE_FAN&&(x.geometry=Vg(x.geometry,Md));else if(S.mode===ti.LINES)x=new ly(T,D);else if(S.mode===ti.LINE_STRIP)x=new Vd(T,D);else if(S.mode===ti.LINE_LOOP)x=new uy(T,D);else if(S.mode===ti.POINTS)x=new cy(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&nw(x,l),x.name=t.createUniqueName(l.name||"mesh_"+e),qi(x,l),S.extensions&&rs(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return l.extensions&&rs(s,g[0],l),g[0];const _=new cs;l.extensions&&rs(s,_,l),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Cn(wx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Xd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,l=t.joints.length;s<l;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const l=s.pop(),u=s,f=[],d=[];for(let h=0,m=u.length;h<m;h++){const g=u[h];if(g){f.push(g);const _=new at;l!==null&&_.fromArray(l.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new zd(f,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],d=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],T=y.target,S=T.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",D)),h.push(M),m.push(T))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],T=g[3],S=g[4],x=[];for(let D=0,L=_.length;D<L;D++){const C=_[D],V=y[D],O=M[D],U=T[D],X=S[D];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=i._createAnimationTracks(C,V,O,U,X);if(b)for(let R=0;R<b.length;R++)x.push(b[R])}return new xy(l,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(l){const u=i._getNodeRef(i.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let d=0,h=s.weights.length;d<h;d++)f.morphTargetInfluences[d]=s.weights[d]}),u})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],l=i._loadNodeShallow(e),u=[],f=s.children||[];for(let h=0,m=f.length;h<m;h++)u.push(i.getDependency("node",f[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),d]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,sw)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&f.push(d),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(h){return s._getNodeRef(s.cameraCache,l.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let m;if(l.isBone===!0?m=new x_:h.length>1?m=new cs:h.length===1?m=h[0]:m=new Gt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(l.name&&(m.userData.name=l.name,m.name=u),qi(m,l),l.extensions&&rs(i,m,l),l.matrix!==void 0){const g=new at;g.fromArray(l.matrix),m.applyMatrix4(g)}else l.translation!==void 0&&m.position.fromArray(l.translation),l.rotation!==void 0&&m.quaternion.fromArray(l.rotation),l.scale!==void 0&&m.scale.fromArray(l.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,l=new cs;i.name&&(l.name=s.createUniqueName(i.name)),qi(l,i),i.extensions&&rs(t,l,i);const u=i.nodes||[],f=[];for(let d=0,h=u.length;d<h;d++)f.push(s.getDependency("node",u[d]));return Promise.all(f).then(function(d){for(let m=0,g=d.length;m<g;m++)l.add(d[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof Ti||_ instanceof ln)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(l),l})}_createAnimationTracks(e,t,i,s,l){const u=[],f=e.name?e.name:e.uuid,d=[];Pr[l.path]===Pr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(f);let h;switch(Pr[l.path]){case Pr.weights:h=po;break;case Pr.rotation:h=mo;break;case Pr.position:case Pr.scale:h=go;break;default:switch(i.itemSize){case 1:h=po;break;case 2:case 3:default:h=go;break}break}const m=s.interpolation!==void 0?JA[s.interpolation]:ga,g=this._getArrayFromAccessor(i);for(let _=0,y=d.length;_<y;_++){const M=new h(d[_]+"."+Pr[l.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cd(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof mo?QA:N_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aw(o,e,t){const i=e.attributes,s=new tr;if(i.POSITION!==void 0){const f=t.json.accessors[i.POSITION],d=f.min,h=f.max;if(d!==void 0&&h!==void 0){if(s.set(new Y(d[0],d[1],d[2]),new Y(h[0],h[1],h[2])),f.normalized){const m=Cd(ro[f.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new Y,d=new Y;for(let h=0,m=l.length;h<m;h++){const g=l[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const T=Cd(ro[_.componentType]);d.multiplyScalar(T)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const u=new wi;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function jg(o,e,t){const i=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(d){o.setAttribute(f,d)})}for(const u in i){const f=Rd[u]||u.toLowerCase();f in o.attributes||s.push(l(i[u],f))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(u)}return yt.workingColorSpace!==Ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),qi(o,e),aw(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tw(o,e.targets,t):o})}function lw(){const o=kf.useRef(null);return kf.useEffect(()=>{if(!o.current)return;o.current.innerHTML="";const e=new Jx,t=new Cn(40,window.innerWidth/window.innerHeight,1,500);t.position.set(0,0,10),t.lookAt(0,0,0);const i=new wA({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(i.domElement);const s=new Iy(4210752,1);e.add(s);const l=new R_(16777215,1);l.position.set(5,5,5),e.add(l),new RA().load("skull/scene.gltf",h=>{const m=h.scene;e.add(m);const g=_=>{if(!m)return;const y=_.clientX/window.innerWidth*2-1,M=_.clientY/window.innerHeight*2-1;m.rotation.y=y*Math.PI*.5,m.rotation.x=M*Math.PI*.5};window.addEventListener("mousemove",g)},void 0,h=>console.error("Error loading model:",h));const f=()=>{requestAnimationFrame(f),i.render(e,t)};f();const d=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",d),()=>{var h;window.removeEventListener("resize",d),(h=o.current)==null||h.removeChild(i.domElement),i.dispose()}},[]),Js.jsxs(Js.Fragment,{children:[Js.jsx("p",{className:"title",children:"GOLOVA"}),Js.jsx("div",{ref:o,className:"three-container"})]})}y0.createRoot(document.getElementById("root")).render(Js.jsx(kf.StrictMode,{children:Js.jsx(lw,{})}));
