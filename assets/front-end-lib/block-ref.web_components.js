var app=function(t){"use strict";function e(){}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function u(t){const e={};for(const n of t)e[n.name]=n.value;return e}let f;function d(t){f=t}const h=[],p=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}let _=!1;const k=new Set;function x(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];d(e),v(e.$$)}for(d(null),h.length=0;p.length;)p.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];k.has(e)||(k.add(e),e())}$.length=0}while(h.length);for(;m.length;)m.pop()();b=!1,_=!1,k.clear()}}function v(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;function C(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function w(t,s,i,a,u,h,p=[-1]){const $=f;d(t);const m=t.$$={fragment:null,ctx:null,props:h,update:e,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:s.context||[]),callbacks:o(),dirty:p,skip_bound:!1};let g=!1;if(m.ctx=i?i(t,s.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&u(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),g&&C(t,e)),n})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!a&&a(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();s.intro&&((b=t.$$.fragment)&&b.i&&(E.delete(b),b.i(_))),function(t,e,o,s){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),s||y((()=>{const e=l.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(y)}(t,s.target,s.anchor,s.customElement),x()}var b,_;d($)}let T;"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(c);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const A={gotoClick(t){console.log("gotoClick")},fragment:document};function L(t){let n,o,r,c;return{c(){var r,c;r="a",n=document.createElement(r),c=t[1],o=document.createTextNode(c),this.c=e,a(n,"class","c-block-ref"),a(n,"data-type","NodeBlockRef"),a(n,"href",t[0])},m(t,e){var s,l,a,u;i(t,n,e),function(t,e){t.appendChild(e)}(n,o),r||(l="click",a=M,(s=n).addEventListener(l,a,u),c=()=>s.removeEventListener(l,a,u),r=!0)},p(t,[e]){2&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[1]),1&e&&a(n,"href",t[0])},i:e,o:e,d(t){t&&l(n),r=!1,c()}}}globalThis.md2website=A;const M=(...t)=>A.gotoClick(...t);function N(t,e,n){let{src:o}=e,{title:r}=e;return t.$$set=t=>{"src"in t&&n(0,o=t.src),"title"in t&&n(1,r=t.title)},[o,r]}class j extends T{constructor(t){super(),this.shadowRoot.innerHTML='<style>[data-type="NodeBlockRef"]{color:var(--b3-protyle-inline-blockref-color)}</style>',w(this,{target:this.shadowRoot,props:u(this.attributes),customElement:!0},N,L,s,{src:0,title:1}),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),x()))}static get observedAttributes(){return["src","title"]}get src(){return this.$$.ctx[0]}set src(t){this.$set({src:t}),x()}get title(){return this.$$.ctx[1]}set title(t){this.$set({title:t}),x()}}return customElements.define("oceanpress-block-ref",j),t.default=j,t.gotoClick=M,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=block-ref.web_components.js.map
