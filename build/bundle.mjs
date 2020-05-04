function e(){}function t(e){return e()}function s(){return Object.create(null)}function l(e){e.forEach(t)}function n(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t}function r(e,t){e.appendChild(t)}function c(e,t,s){e.insertBefore(t,s||null)}function a(e){e.parentNode.removeChild(e)}function i(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function m(){return d(" ")}function h(e,t,s,l){return e.addEventListener(t,s,l),()=>e.removeEventListener(t,s,l)}function f(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function p(e){return Array.from(e.childNodes)}function g(e,t,s,l){for(let l=0;l<e.length;l+=1){const n=e[l];if(n.nodeName===t){let t=0;for(;t<n.attributes.length;){const e=n.attributes[t];s[e.name]?t++:n.removeAttribute(e.name)}return e.splice(l,1)[0]}}return l?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):u(t)}function v(e,t){for(let s=0;s<e.length;s+=1){const l=e[s];if(3===l.nodeType)return l.data=""+t,e.splice(s,1)[0]}return d(t)}function b(e){return v(e," ")}function x(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t){(null!=t||e.value)&&(e.value=t)}function $(e,t,s,l){e.style.setProperty(t,s,l?"important":"")}function y(e,t){for(let s=0;s<e.options.length;s+=1){const l=e.options[s];if(l.__value===t)return void(l.selected=!0)}}let k;function E(e){k=e}function z(){const e=function(){if(!k)throw new Error("Function called outside component initialization");return k}();return(t,s)=>{const l=e.$$.callbacks[t];if(l){const n=function(e,t){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,!1,!1,t),s}(t,s);l.slice().forEach(t=>{t.call(e,n)})}}}const I=[],_=[],N=[],A=[],S=Promise.resolve();let D=!1;function V(e){N.push(e)}let C=!1;const T=new Set;function B(){if(!C){C=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];E(t),P(t.$$)}for(I.length=0;_.length;)_.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];T.has(t)||(T.add(t),t())}N.length=0}while(I.length);for(;A.length;)A.pop()();D=!1,C=!1,T.clear()}}function P(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const U=new Set;let j;function M(){j={r:0,c:[],p:j}}function O(){j.r||l(j.c),j=j.p}function L(e,t){e&&e.i&&(U.delete(e),e.i(t))}function q(e,t,s,l){if(e&&e.o){if(U.has(e))return;U.add(e),j.c.push(()=>{U.delete(e),l&&(s&&e.d(1),l())}),e.o(t)}}function F(e){e&&e.c()}function R(e,t){e&&e.l(t)}function Z(e,s,o){const{fragment:r,on_mount:c,on_destroy:a,after_update:i}=e.$$;r&&r.m(s,o),V(()=>{const s=c.map(t).filter(n);a?a.push(...s):l(s),e.$$.on_mount=[]}),i.forEach(V)}function H(e,t){const s=e.$$;null!==s.fragment&&(l(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function X(e,t){-1===e.$$.dirty[0]&&(I.push(e),D||(D=!0,S.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(t,n,o,r,c,i,u=[-1]){const d=k;E(t);const m=n.props||{},h=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:s(),dirty:u};let f=!1;if(h.ctx=o?o(t,m,(e,s,...l)=>{const n=l.length?l[0]:s;return h.ctx&&c(h.ctx[e],h.ctx[e]=n)&&(h.bound[e]&&h.bound[e](n),f&&X(t,e)),s}):[],h.update(),f=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),n.target){if(n.hydrate){const e=p(n.target);h.fragment&&h.fragment.l(e),e.forEach(a)}else h.fragment&&h.fragment.c();n.intro&&L(t.$$.fragment),Z(t,n.target,n.anchor),B()}E(d)}class J{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(){}}const K=(e,t)=>Math.round(e*Math.pow(10,t))/Math.pow(10,t),Q=([e,t])=>{const s=([e,t,s])=>e+t/60+s/3600;return[s(e),s(t)]},W=([e,t],s=3)=>{const l=e=>{const t=Math.floor(e),l=Math.floor(60*(e-t));return[t,l,K(3600*(e-t-l/60),s)]};return[l(e),l(t)]},Y=/(\d{1,3})°(?:\s)?(\d{1,3})'(?:\s)?(\d{1,3})(?:\.(\d{1,10}))?"(?:\s)?[a-zA-Z]{0,1}(?:\s)?(\d{1,3})°(?:\s)?(\d{1,3})'(?:\s)?(\d{1,3})(?:\.(\d{1,10}))?"(?:\s)?[a-zA-Z]{0,1}/,ee=/(\d+)(?:.|,)(\d+)(?:\s)?,?(?:\s)?(\d+)(?:.|,)(\d+)/,te=e=>Array.isArray(e[0])&&Array.isArray(e[1])?"dms":"dd",se=(e,t)=>{const s=parseInt,l=e=>s(e)/10**e.length;if(Y.test(e)){const[n,o,r,c,a,i,u,d,m]=e.match(Y),h=[[s(o),s(r),s(c)+(a?l(a):0)],[s(i),s(u),s(d)+(m?l(m):0)]];return"dd"===t?Q(h):h}if(ee.test(e)){const[n,o,r,c,a]=e.match(ee),i=[s(o)+l(r),s(c)+l(a)];return"dms"===t?W(i):i}},le=(e,t)=>"dms"===te(e)?(([[e,t,s],[l,n,o]],r=2)=>`${e}°${t}'${K(s,r)}", ${l}°${n}'${K(o,r)}"`)(e,t):(([e,t],s=6)=>`${K(e,s)}, ${K(t,s)}`)(e,t),ne=(e,t,s)=>te(e)==t?le(e,s):le("dms"==t?W(e,s):Q(e),s);class oe extends J{constructor(e){var t;super(),document.getElementById("svelte-1b58qks-style")||((t=u("style")).id="svelte-1b58qks-style",t.textContent='html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}button,input,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring{outline:1px dotted ButtonText}textarea{overflow:auto}[type="checkbox"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden]{display:none}dd{margin:0}button{background-color:transparent;background-image:none;padding:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}html{font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height:1.5}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0}textarea{resize:vertical}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#a0aec0}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}button{cursor:pointer}button,input,select,textarea{padding:0;line-height:inherit;color:inherit}.bg-white{background-color:#fff}.bg-gray-400{background-color:#cbd5e0}.border-black{border-color:#000}.border-gray-500{border-color:#a0aec0}.rounded-md{border-radius:0.375rem}.rounded-lg{border-radius:0.5rem}.rounded-full{border-radius:9999px}.border-solid{border-style:solid}.border{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.flex{display:flex}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.flex-auto{flex:1 1 auto}.h-4{height:1rem}.h-6{height:1.5rem}.mx-2{margin-left:0.5rem;margin-right:0.5rem}.mr-0{margin-right:0}.mb-0{margin-bottom:0}.mr-1{margin-right:0.25rem}.mb-1{margin-bottom:0.25rem}.mr-4{margin-right:1rem}.mb-4{margin-bottom:1rem}.p-4{padding:1rem}.px-1{padding-left:0.25rem;padding-right:0.25rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.absolute{position:absolute}.relative{position:relative}.inset-y-0{top:0;bottom:0}.left-0{left:0}.shadow{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.shadow-inner{box-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.w-0{width:0}.w-6{width:1.5rem}.w-10{width:2.5rem}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}input,button,select,textarea{border-width:1px;border-style:solid;border-color:#a0aec0;border-radius:0.375rem}@media(min-width: 640px){.sm\\:select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sm\\:select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.sm\\:select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.sm\\:select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}}@media(min-width: 768px){.md\\:select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md\\:select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.md\\:select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.md\\:select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}}@media(min-width: 1024px){.lg\\:select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lg\\:select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.lg\\:select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.lg\\:select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}}@media(min-width: 1280px){.xl\\:select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl\\:select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.xl\\:select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.xl\\:select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}}',r(document.head,t)),G(this,e,null,null,o,{})}}function re(t){let s,n,o,i,w,$,y,k,E,z,I,_,N,A,S,D=t[1].text+"",V=t[2].text+"";return{c(){s=u("label"),n=u("span"),o=d(D),i=m(),w=u("div"),$=u("input"),y=m(),k=u("span"),E=m(),z=u("span"),_=m(),N=u("span"),A=d(V),this.h()},l(e){s=g(e,"LABEL",{class:!0});var t=p(s);n=g(t,"SPAN",{class:!0});var l=p(n);o=v(l,D),l.forEach(a),i=b(t),w=g(t,"DIV",{class:!0});var r=p(w);$=g(r,"INPUT",{class:!0,type:!0}),y=b(r),k=g(r,"SPAN",{class:!0}),p(k).forEach(a),E=b(r),z=g(r,"SPAN",{class:!0}),p(z).forEach(a),r.forEach(a),_=b(t),N=g(t,"SPAN",{class:!0});var c=p(N);A=v(c,V),c.forEach(a),t.forEach(a),this.h()},h(){f(n,"class","text"),f($,"class","checkbox svelte-a4bke9"),f($,"type","checkbox"),f(k,"class","line svelte-a4bke9"),f(z,"class","dot svelte-a4bke9"),f(w,"class",I="toggle "+(t[0]?"active":"")+" svelte-a4bke9"),f(N,"class","text"),f(s,"class","toggle-container svelte-a4bke9")},m(e,a,u){c(e,s,a),r(s,n),r(n,o),r(s,i),r(s,w),r(w,$),$.checked=t[0],r(w,y),r(w,k),r(w,E),r(w,z),r(s,_),r(s,N),r(N,A),u&&l(S),S=[h($,"change",t[5]),h($,"change",t[3])]},p(e,[t]){2&t&&D!==(D=e[1].text+"")&&x(o,D),1&t&&($.checked=e[0]),1&t&&I!==(I="toggle "+(e[0]?"active":"")+" svelte-a4bke9")&&f(w,"class",I),4&t&&V!==(V=e[2].text+"")&&x(A,V)},i:e,o:e,d(e){e&&a(s),l(S)}}}function ce(e,t,s){const l=z();let{left:n}=t,{right:o}=t,{value:r=!1}=t;return e.$set=e=>{"left"in e&&s(1,n=e.left),"right"in e&&s(2,o=e.right),"value"in e&&s(0,r=e.value)},[r,n,o,()=>l("change",r?o.value:n.value),l,function(){r=this.checked,s(0,r)}]}class ae extends J{constructor(e){var t;super(),document.getElementById("svelte-a4bke9-style")||((t=u("style")).id="svelte-a4bke9-style",t.textContent=".toggle-container.svelte-a4bke9.svelte-a4bke9{display:flex;align-items:center;cursor:pointer}.toggle.svelte-a4bke9.svelte-a4bke9{position:relative;margin-left:0.5rem;margin-right:0.5rem}.toggle.active.svelte-a4bke9 .dot.svelte-a4bke9{transform:translateX(100%)}.checkbox.svelte-a4bke9.svelte-a4bke9{display:none}.line.svelte-a4bke9.svelte-a4bke9{display:block;width:2.5rem;height:1rem;background-color:#cbd5e0;border-radius:9999px;box-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)}.dot.svelte-a4bke9.svelte-a4bke9{position:absolute;width:1.5rem;height:1.5rem;background-color:#fff;border-radius:9999px;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);top:0;bottom:0;left:0;top:-0.25rem;left:-0.25rem;transition:all 0.3s ease-in-out}",r(document.head,t)),G(this,e,ce,re,o,{left:1,right:2,value:0})}get left(){return this.$$.ctx[1]}set left(e){this.$set({left:e}),B()}get right(){return this.$$.ctx[2]}set right(e){this.$set({right:e}),B()}get value(){return this.$$.ctx[0]}set value(e){this.$set({value:e}),B()}}function ie(t){let s,l,n;return{c(){s=u("button"),l=d("🗑"),this.h()},l(e){s=g(e,"BUTTON",{class:!0});var t=p(s);l=v(t,"🗑"),t.forEach(a),this.h()},h(){f(s,"class","svelte-idmvc9")},m(e,o,a){c(e,s,o),r(s,l),a&&n(),n=h(s,"click",t[3])},p:e,d(e){e&&a(s),n()}}}function ue(t){let s,l,n;return{c(){s=u("button"),l=d("➕"),this.h()},l(e){s=g(e,"BUTTON",{class:!0});var t=p(s);l=v(t,"➕"),t.forEach(a),this.h()},h(){f(s,"class","svelte-idmvc9")},m(e,o,a){c(e,s,o),r(s,l),a&&n(),n=h(s,"click",t[2])},p:e,d(e){e&&a(s),n()}}}function de(t){let s,l,n,o,i,d=t[0]&&ie(t),v=!t[1]&&ue(t);return{c(){s=u("div"),l=u("input"),n=m(),d&&d.c(),o=m(),v&&v.c(),this.h()},l(e){s=g(e,"DIV",{class:!0});var t=p(s);l=g(t,"INPUT",{type:!0,class:!0,disabled:!0}),n=b(t),d&&d.l(t),o=b(t),v&&v.l(t),t.forEach(a),this.h()},h(){f(l,"type","text"),f(l,"class","input svelte-idmvc9"),l.disabled=t[1],f(s,"class","component svelte-idmvc9")},m(e,a,u){c(e,s,a),r(s,l),w(l,t[0]),r(s,n),d&&d.m(s,null),r(s,o),v&&v.m(s,null),u&&i(),i=h(l,"input",t[5])},p(e,[t]){2&t&&(l.disabled=e[1]),1&t&&l.value!==e[0]&&w(l,e[0]),e[0]?d?d.p(e,t):(d=ie(e),d.c(),d.m(s,o)):d&&(d.d(1),d=null),e[1]?v&&(v.d(1),v=null):v?v.p(e,t):(v=ue(e),v.c(),v.m(s,null))},i:e,o:e,d(e){e&&a(s),d&&d.d(),v&&v.d(),i()}}}function me(e,t,s){let{value:l=""}=t,{disabled:n=!1}=t;const o=z();return e.$set=e=>{"value"in e&&s(0,l=e.value),"disabled"in e&&s(1,n=e.disabled)},[l,n,()=>o("add"),()=>o("del"),o,function(){l=this.value,s(0,l)}]}class he extends J{constructor(e){var t;super(),document.getElementById("svelte-idmvc9-style")||((t=u("style")).id="svelte-idmvc9-style",t.textContent=".component.svelte-idmvc9.svelte-idmvc9{display:flex;flex-direction:row\n}.component.svelte-idmvc9>.svelte-idmvc9{margin-right:0.25rem\n  }.component.svelte-idmvc9>.svelte-idmvc9:last-child{margin-right:0}.input.svelte-idmvc9.svelte-idmvc9{border-radius:9999px;padding-left:0.5rem;padding-right:0.5rem;flex:1 1 auto;width:0}button.svelte-idmvc9.svelte-idmvc9{padding-left:0.25rem;padding-right:0.25rem}",r(document.head,t)),G(this,e,me,de,o,{value:0,disabled:1})}get value(){return this.$$.ctx[0]}set value(e){this.$set({value:e}),B()}get disabled(){return this.$$.ctx[1]}set disabled(e){this.$set({disabled:e}),B()}}function fe(e,t,s){const l=e.slice();return l[20]=t[s],l}function pe(e,t,s){const l=e.slice();return l[3]=t[s],l[24]=s,l}function ge(e){let t,s,l;const n=new he({props:{value:ne(e[3],e[0]),disabled:!0}});return n.$on("del",e[13](e[24])),{c(){t=u("div"),F(n.$$.fragment),s=m(),this.h()},l(e){t=g(e,"DIV",{class:!0});var l=p(t);R(n.$$.fragment,l),s=b(l),l.forEach(a),this.h()},h(){f(t,"class","svelte-wsycsu")},m(e,o){c(e,t,o),Z(n,t,null),r(t,s),l=!0},p(e,t){const s={};3&t&&(s.value=ne(e[3],e[0])),n.$set(s)},i(e){l||(L(n.$$.fragment,e),l=!0)},o(e){q(n.$$.fragment,e),l=!1},d(e){e&&a(t),H(n)}}}function ve(e){let t,s,l,n=ne(e[3],e[0])+"";return{c(){t=u("div"),s=u("div"),l=d(n),this.h()},l(e){t=g(e,"DIV",{class:!0});var o=p(t);s=g(o,"DIV",{class:!0});var r=p(s);l=v(r,n),r.forEach(a),o.forEach(a),this.h()},h(){f(s,"class","svelte-wsycsu"),f(t,"class","row svelte-wsycsu")},m(e,n){c(e,t,n),r(t,s),r(s,l)},p(e,t){9&t&&n!==(n=ne(e[3],e[0])+"")&&x(l,n)},d(e){e&&a(t)}}}function be(t){let s,l,n,o=t[20].text+"";return{c(){s=u("option"),l=d(o),this.h()},l(e){s=g(e,"OPTION",{value:!0});var t=p(s);l=v(t,o),t.forEach(a),this.h()},h(){s.__value=n=t[20].value,s.value=s.__value},m(e,t){c(e,s,t),r(s,l)},p:e,d(e){e&&a(s)}}}function xe(e){let t,s;const l=new ae({props:{left:{text:"Линия",value:"line"},right:{text:"Полигон",value:"polygon"},value:"polygon"==e[7]}});return l.$on("change",e[14]),{c(){t=u("div"),F(l.$$.fragment),this.h()},l(e){t=g(e,"DIV",{class:!0});var s=p(t);R(l.$$.fragment,s),s.forEach(a),this.h()},h(){f(t,"class","row svelte-wsycsu")},m(e,n){c(e,t,n),Z(l,t,null),s=!0},p(e,t){const s={};128&t&&(s.value="polygon"==e[7]),l.$set(s)},i(e){s||(L(l.$$.fragment,e),s=!0)},o(e){q(l.$$.fragment,e),s=!1},d(e){e&&a(t),H(l)}}}function we(e){let t,s,n,o,x,k,E,z,I,N,S,D,C,T,B,P,U,j,X,G,J,K,Q,W=!1;const Y=new oe({}),ee=new ae({props:{left:{text:"DMS",value:"dms"},right:{text:"DD",value:"dd"}}});function te(t){e[17].call(null,t)}ee.$on("change",e[10]);let se={};void 0!==e[5]&&(se.value=e[5]);const le=new he({props:se});_.push(()=>function(e,t,s){const l=e.$$.props[t];void 0!==l&&(e.$$.bound[l]=s,s(e.$$.ctx[l]))}(le,"value",te)),le.$on("add",e[11]),le.$on("del",e[12]);let ne=e[1],re=[];for(let t=0;t<ne.length;t+=1)re[t]=ge(pe(e,ne,t));const ce=e=>q(re[e],1,1,()=>{re[e]=null});let ie=e[3]&&ve(e);function ue(){W=!0,e[18].call(j)}let de=e[8],me=[];for(let t=0;t<de.length;t+=1)me[t]=be(fe(e,de,t));let we=e[1].length>1&&e[2]&&xe(e);return{c(){F(Y.$$.fragment),t=m(),s=u("div"),n=u("div"),o=u("div"),x=d("Координаты"),k=m(),F(ee.$$.fragment),E=m(),z=u("div"),I=u("div"),F(le.$$.fragment),S=m();for(let e=0;e<re.length;e+=1)re[e].c();D=m(),ie&&ie.c(),C=m(),T=u("div"),B=u("div"),P=d("Буферизация"),U=m(),j=u("input"),X=m(),G=u("select");for(let e=0;e<me.length;e+=1)me[e].c();J=m(),we&&we.c(),this.h()},l(e){R(Y.$$.fragment,e),t=b(e),s=g(e,"DIV",{class:!0});var l=p(s);n=g(l,"DIV",{class:!0});var r=p(n);o=g(r,"DIV",{class:!0});var c=p(o);x=v(c,"Координаты"),c.forEach(a),k=b(r),R(ee.$$.fragment,r),r.forEach(a),E=b(l),z=g(l,"DIV",{class:!0});var i=p(z);I=g(i,"DIV",{class:!0});var u=p(I);R(le.$$.fragment,u),u.forEach(a),S=b(i);for(let e=0;e<re.length;e+=1)re[e].l(i);i.forEach(a),D=b(l),ie&&ie.l(l),C=b(l),T=g(l,"DIV",{class:!0});var d=p(T);B=g(d,"DIV",{class:!0});var m=p(B);P=v(m,"Буферизация"),m.forEach(a),U=b(d),j=g(d,"INPUT",{type:!0,min:!0,step:!0,style:!0,class:!0}),X=b(d),G=g(d,"SELECT",{class:!0});var h=p(G);for(let e=0;e<me.length;e+=1)me[e].l(h);h.forEach(a),d.forEach(a),J=b(l),we&&we.l(l),l.forEach(a),this.h()},h(){f(o,"class","svelte-wsycsu"),f(n,"class","row svelte-wsycsu"),f(I,"class","svelte-wsycsu"),f(z,"class","multiplerows svelte-wsycsu"),f(B,"class","svelte-wsycsu"),f(j,"type","number"),f(j,"min","0"),f(j,"step","any"),$(j,"flex","1 1 auto"),$(j,"width","0"),f(j,"class","svelte-wsycsu"),f(G,"class","svelte-wsycsu"),void 0===e[4]&&V(()=>e[19].call(G)),f(T,"class","row svelte-wsycsu"),f(s,"class","component svelte-wsycsu")},m(a,i,u){Z(Y,a,i),c(a,t,i),c(a,s,i),r(s,n),r(n,o),r(o,x),r(n,k),Z(ee,n,null),r(s,E),r(s,z),r(z,I),Z(le,I,null),r(z,S);for(let e=0;e<re.length;e+=1)re[e].m(z,null);r(s,D),ie&&ie.m(s,null),r(s,C),r(s,T),r(T,B),r(B,P),r(T,U),r(T,j),w(j,e[6]),r(T,X),r(T,G);for(let e=0;e<me.length;e+=1)me[e].m(G,null);y(G,e[4]),r(s,J),we&&we.m(s,null),K=!0,u&&l(Q),Q=[h(j,"input",ue),h(j,"change",e[9]),h(G,"change",e[19]),h(G,"change",e[9])]},p(e,[t]){const l={};var n;if(!N&&32&t&&(N=!0,l.value=e[5],n=()=>N=!1,A.push(n)),le.$set(l),8195&t){let s;for(ne=e[1],s=0;s<ne.length;s+=1){const l=pe(e,ne,s);re[s]?(re[s].p(l,t),L(re[s],1)):(re[s]=ge(l),re[s].c(),L(re[s],1),re[s].m(z,null))}for(M(),s=ne.length;s<re.length;s+=1)ce(s);O()}if(e[3]?ie?ie.p(e,t):(ie=ve(e),ie.c(),ie.m(s,C)):ie&&(ie.d(1),ie=null),!W&&64&t&&w(j,e[6]),W=!1,256&t){let s;for(de=e[8],s=0;s<de.length;s+=1){const l=fe(e,de,s);me[s]?me[s].p(l,t):(me[s]=be(l),me[s].c(),me[s].m(G,null))}for(;s<me.length;s+=1)me[s].d(1);me.length=de.length}16&t&&y(G,e[4]),e[1].length>1&&e[2]?we?(we.p(e,t),L(we,1)):(we=xe(e),we.c(),L(we,1),we.m(s,null)):we&&(M(),q(we,1,1,()=>{we=null}),O())},i(e){if(!K){L(Y.$$.fragment,e),L(ee.$$.fragment,e),L(le.$$.fragment,e);for(let e=0;e<ne.length;e+=1)L(re[e]);L(we),K=!0}},o(e){q(Y.$$.fragment,e),q(ee.$$.fragment,e),q(le.$$.fragment,e),re=re.filter(Boolean);for(let e=0;e<re.length;e+=1)q(re[e]);q(we),K=!1},d(e){H(Y,e),e&&a(t),e&&a(s),H(ee),H(le),i(re,e),ie&&ie.d(),i(me,e),we&&we.d(),l(Q)}}}function $e(e,t,s){let{format:l="dms"}=t,{multiple:n=!1}=t,{coordinate:o=!1}=t,{coordinates:r=[]}=t,{multitool:c=!1}=t;const a=z(),i=[{text:"м",value:1},{text:"км",value:1e3}];let u=1,d="",m=0,h="polygon";const f=()=>{r.length>0&&a("change",{buffer:m,coordinates:r,...c&&r.length>1?{shape:h}:{}})};return e.$set=e=>{"format"in e&&s(0,l=e.format),"multiple"in e&&s(15,n=e.multiple),"coordinate"in e&&s(3,o=e.coordinate),"coordinates"in e&&s(1,r=e.coordinates),"multitool"in e&&s(2,c=e.multitool)},[l,r,c,o,u,d,m,h,i,f,({detail:e})=>{s(0,l=e)},()=>{var e;e=d,(Y.test(e)||ee.test(e))&&(s(1,r=n?[se(d,"dms"),...r]:[se(d,"dms")]),s(5,d=""),f())},()=>{s(5,d="")},e=>()=>{s(1,r=r.filter((t,s)=>s!==e)),f()},({detail:e})=>{s(7,h=e),f()},n,a,function(e){d=e,s(5,d)},function(){var e;e=this.value,m=""===e?void 0:+e,s(6,m)},function(){u=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),s(4,u),s(8,i)}]}export default class extends J{constructor(e){var t;super(),document.getElementById("svelte-wsycsu-style")||((t=u("style")).id="svelte-wsycsu-style",t.textContent=".component.svelte-wsycsu.svelte-wsycsu{padding:1rem;border-width:1px;border-color:#000;border-radius:0.5rem;width:300px\n}.component.svelte-wsycsu>.svelte-wsycsu{margin-bottom:1rem\n  }.component.svelte-wsycsu>.svelte-wsycsu:last-child{margin-bottom:0}.row.svelte-wsycsu.svelte-wsycsu{display:flex;flex-direction:row;justify-content:space-between\n}.row.svelte-wsycsu>.svelte-wsycsu{margin-right:1rem\n  }.row.svelte-wsycsu>.svelte-wsycsu:last-child{margin-right:0}.multiplerows.svelte-wsycsu.svelte-wsycsu{display:flex;flex-direction:column\n}.multiplerows.svelte-wsycsu>.svelte-wsycsu{margin-bottom:0.25rem\n  }.multiplerows.svelte-wsycsu>.svelte-wsycsu:last-child{margin-bottom:0}",r(document.head,t)),G(this,e,$e,we,o,{format:0,multiple:15,coordinate:3,coordinates:1,multitool:2})}get format(){return this.$$.ctx[0]}set format(e){this.$set({format:e}),B()}get multiple(){return this.$$.ctx[15]}set multiple(e){this.$set({multiple:e}),B()}get coordinate(){return this.$$.ctx[3]}set coordinate(e){this.$set({coordinate:e}),B()}get coordinates(){return this.$$.ctx[1]}set coordinates(e){this.$set({coordinates:e}),B()}get multitool(){return this.$$.ctx[2]}set multitool(e){this.$set({multitool:e}),B()}}
//# sourceMappingURL=bundle.mjs.map
