"use strict";if("undefined"==typeof WebInterpreter){const e="web-interpreter-opt.wasm";class t extends HTMLElement{#e;#t(e){const t=(new TextEncoder).encode(e),n=this.#e.exports.getBuffer(),r=this.#e.exports.memory.buffer,a=new Int8Array(r).subarray(n,n+t.length);for(let i=0;i<t.length;i++)a[i]=t[i];return[n,t.length]}#n(e,t){const n=this.#e.exports.memory.buffer.slice(e,e+t);return new TextDecoder("UTF-8").decode(new Int8Array(n))}#r(){const e=new Go,t=this.querySelector('textarea[data-id="output"]');return e.importObject["main.go.printError"]=(e,n)=>{t.value=(t.value??"")+this.#n(e,n)+"\n"},e.importObject["main.go.printOut"]=(e,n)=>{t.value=(t.value??"")+this.#n(e,n)+"\n"},e.importObject.env={printError:e.importObject["main.go.printError"],printOut:e.importObject["main.go.printOut"]},e}connectedCallback(){this.querySelector('textarea[data-id="input"]').value="><//> Calculate 5!\n\n><number>    \u2248 ><{({\xb0> ~  ><//> b101 = 5\n><factorial> \u2248 ><(({\xb0> ~  ><//> b001 = 1\n\n><//> while number > 1\n><(((@> [><number> o~ ><(({\xb0>]\n><>\n  ><//> factorial = factorial * number\n  ><factorial> \u2248 ><factorial> \u2661 ><number> ~\n\n  ><//> number -= 1\n  <number><< ~\n<><\n(+o ><factorial> ~ ><//> Should be 120";const t=this.#r();"instantiateStreaming"in WebAssembly?WebAssembly.instantiateStreaming(fetch(e),t.importObject).then((e=>{this.#e=e.instance,t.run(this.#e)})):fetch(e).then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,t.importObject).then((e=>{this.#e=e.instance,t.run(this.#e)})))),this.querySelector('button[data-id="play"]')?.addEventListener("click",(()=>{if(!this.#e)return;this.querySelector('textarea[data-id="output"]').value="";const e=this.querySelector('textarea[data-id="input"]').value,[t,n]=this.#t(e);this.#e.exports.goFysh(t,n)}))}}customElements.get("web-interpreter")||customElements.define("web-interpreter",t)}