/*! For license information please see 0ce74438.c1b5f0ca.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[365],{7910:(t,r,e)=>{e.r(r),e.d(r,{default:()=>v});var n=e(2155),o=e(2037),i=e(2754),a="><//> Calculate 5!\n\n><number>    \u2248 ><{({\xb0> ~  ><//> b101 = 5\n><factorial> \u2248 ><(({\xb0> ~  ><//> b001 = 1\n\n><//> while number > 1\n><(((@> [><number> o~ ><(({\xb0>]\n><>\n  ><//> factorial = factorial * number\n  ><factorial> \u2248 ><factorial> \u2661 ><number> ~\n\n  ><//> number -= 1\n  <number><< ~\n<><\n(+o ><factorial> ~ ><//> Should be 120",c=e(6305);function u(){u=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",h=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof w?r:w,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:P(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var j={};l(j,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==e&&n.call(L,a)&&(j=L);var O=x.prototype=w.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,u){var s=p(t[o],t,i);if("throw"!==s.type){var h=s.arg,l=h.value;return l&&"object"==(0,c.A)(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return e("throw",t,a,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function P(r,e,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function S(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,S(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function C(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError((0,c.A)(r)+" is not iterable")}return b.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,h,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),l(O,h,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:A(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function s(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}var h=function(){function t(t,r){this.onPrintOut=t,this.onPrintError=r}var r=t.prototype;return r.initialize=function(){var t,r=(t=u().mark((function t(){var r,e,n=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.go=new Go,this.go.importObject["main.go.printError"]=function(t,r){n.onPrintOut(n.logText(t,r))},this.go.importObject["main.go.printOut"]=function(t,r){n.onPrintError(n.logText(t,r))},this.go.importObject.env={printError:this.go.importObject["main.go.printError"],printOut:this.go.importObject["main.go.printOut"]},r="web-interpreter-opt.wasm",!("instantiateStreaming"in WebAssembly)){t.next=11;break}return t.next=8,WebAssembly.instantiateStreaming(fetch(r),this.go.importObject);case 8:t.t0=t.sent,t.next=14;break;case 11:return t.next=13,fetch(r).then((function(t){return t.arrayBuffer()})).then((function(t){return WebAssembly.instantiate(t,n.go.importObject)}));case 13:t.t0=t.sent;case 14:e=t.t0,this.wasm=e.instance,this.go.run(this.wasm);case 17:case"end":return t.stop()}}),t,this)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}(),r.runFysh=function(t){var r=this.insertText(t),e=r[0],n=r[1];this.wasm.exports.goFysh(e,n)},r.insertText=function(t){for(var r=(new TextEncoder).encode(t),e=this.wasm.exports.getBuffer(),n=this.wasm.exports.memory.buffer,o=new Int8Array(n).subarray(e,e+r.length),i=0;i<r.length;i++)o[i]=r[i];return[e,r.length]},r.logText=function(t,r){var e=this.wasm.exports.memory.buffer.slice(t,t+r);return new TextDecoder("UTF-8").decode(new Int8Array(e))},t}();const l={interpreter:"interpreter_ORS5",btnContainer:"btnContainer_xU4k",boxContainer:"boxContainer_drVT",inputBox:"inputBox_CkmP",outputBox:"outputBox_tkLW"};var f=e(5723);function p(){var t,r,e,o,c=(0,n.useState)(a),u=c[0],s=c[1],p=(0,n.useState)(""),v=p[0],d=p[1],y=(0,i.A)(),m=(t="/js/wasm_exec.js",r=(0,n.useState)(!1),e=r[0],o=r[1],(0,n.useEffect)((function(){var r=document.createElement("script");r.src=t,r.addEventListener("load",(function(){o(!0),document.head.removeChild(r)})),document.head.appendChild(r)}),[o]),e),g=(0,n.useCallback)((function(t){d((function(r){return r.concat(t+"\n")}))}),[d]),w=(0,n.useState)((function(){return null})),b=w[0],x=w[1];return(0,n.useEffect)((function(){var t=!0;if(y&&m){var r=new h(g,g);r.initialize().then((function(){t&&x(r)}))}return function(){t=!1}}),[y,m]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:l.interpreter,children:[(0,f.jsx)("div",{className:l.btnContainer,children:(0,f.jsx)("button",{className:l.swimButton,disabled:null===b,onClick:function(){d(""),b.runFysh(u)},children:"Swim"})}),(0,f.jsxs)("div",{className:l.boxContainer,children:[(0,f.jsx)("div",{children:(0,f.jsx)("textarea",{className:l.inputBox,value:u,onChange:function(t){return s(t.target.value)}})}),(0,f.jsx)("div",{children:(0,f.jsx)("textarea",{className:l.outputBox,value:v,readOnly:!0,"aria-readonly":!0})})]})]})})}function v(){return(0,f.jsx)(o.A,{title:"Fysh Playground",description:"Play around with the Fysh programming language using the online WASM interpreter",children:(0,f.jsx)(p,{})})}}}]);