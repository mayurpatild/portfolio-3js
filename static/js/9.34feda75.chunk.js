(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[9],{121:function(e,t,a){"use strict";a.r(t);a(96);var n=a(4),c=a.n(n),s=a(22),i=a(71),r=a(78),o=a(58),l=a(14),d=a(0),u=a(56),b=a(57),j=(a(97),a(1));var h=({className:e,resize:t="none",value:a,onChange:n,minRows:s=1,maxRows:i,...r})=>{const[o,l]=Object(d.useState)(s),[u,b]=Object(d.useState)(),h=Object(d.useRef)();Object(d.useEffect)((()=>{const e=getComputedStyle(h.current),t=parseInt(e.lineHeight,10),a=parseInt(e.paddingTop,10)+parseInt(e.paddingBottom,10);b({lineHeight:t,paddingHeight:a})}),[]);return Object(j.jsx)("textarea",{className:c()("textarea",e),ref:h,onChange:e=>{n(e);const{lineHeight:t,paddingHeight:a}=u,c=e.target.rows;e.target.rows=s;const r=~~((e.target.scrollHeight-a)/t);r===c&&(e.target.rows=r),i&&r>=i&&(e.target.rows=i,e.target.scrollTop=e.target.scrollHeight),l(i&&r>i?i:r)},style:{"--resize":t},rows:o,value:a,...r})},m=a(9),p=a(21),O=a(10),_=a(2);a(98);var g=({id:e,label:t,hasValue:a,value:n,multiline:s,className:i,style:r,error:o,onBlur:g,...x})=>{const[f,v]=Object(d.useState)(!1),y=Object(m.c)(),N=Object(d.useRef)(),w=e||`input-${y}`,$=`${w}-label`,S=`${w}-error`,M=s?h:"input";return Object(j.jsxs)("div",{className:c()("input",i,{"input--error":!!o}),style:r,children:[Object(j.jsxs)("div",{className:"input__content",children:[Object(j.jsx)("label",{className:c()("input__label",{"input__label--focused":f,"input__label--has-value":!!n}),id:$,htmlFor:w,children:t}),Object(j.jsx)(M,{className:"input__element",id:w,"aria-labelledby":$,"aria-describedby":o?S:void 0,onFocus:()=>v(!0),onBlur:e=>{v(!1),g&&g(e)},value:n,...x}),Object(j.jsx)("div",{className:c()("input__underline",{"input__underline--focused":f})})]}),Object(j.jsx)(u.a,{component:null,children:!!o&&Object(j.jsx)(b.a,{timeout:Object(_.b)(O.b.base.durationM),children:e=>{var t;return Object(j.jsx)("div",{className:c()("input__error",`input__error--${e}`),id:S,role:"alert",style:{"--height":Object(p.a)(e)?Object(_.d)(null===(t=N.current)||void 0===t?void 0:t.getBoundingClientRect().height):"0px"},children:Object(j.jsxs)("div",{className:"input__error-message",ref:N,children:[Object(j.jsx)(l.a,{icon:"error"}),o]})})}})})]})},x=a(62),f=a(59),v=a(20),y=a(27);const N=O.b.base.durationS;function w(e,t=Object(_.c)(0),a=1){const n=Object(_.b)(e)*a;return{"--delay":Object(_.c)((Object(_.b)(t)+n).toFixed(0))}}t.default=()=>{const{status:e}=Object(m.j)(),t=Object(d.useRef)(),a=Object(m.b)(""),n=Object(m.b)(""),[h,$]=Object(d.useState)(!1),[S,M]=Object(d.useState)(!1),[H,R]=Object(d.useState)("");Object(m.k)();const k=Object(d.useCallback)((async e=>{if(e.preventDefault(),R(""),!h)try{$(!0);const e=await fetch("https://api.mayurpatild.github.io/parallax/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value,message:n.value})}),t=await e.json(),c=function({status:e,errorMessage:t,fallback:a="There was a problem with your request"}){return 200!==e&&(t||{500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||a)}({status:null===e||void 0===e?void 0:e.status,errorMessage:null===t||void 0===t?void 0:t.error,fallback:"There was a problem sending your message"});if(c)throw new Error(c);M(!0),$(!1)}catch(t){$(!1),R(t.message)}}),[a.value,n.value,h]);return Object(j.jsxs)(x.a,{className:c()("contact",`contact--${e}`),children:[Object(j.jsxs)(v.a,{children:[Object(j.jsx)("title",{children:"Contact | Mayur Patil"}),Object(j.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(j.jsxs)(u.a,{component:null,children:[!S&&Object(j.jsx)(b.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:p.b,children:e=>Object(j.jsxs)("form",{className:"contact__form",method:"post",onSubmit:k,children:[Object(j.jsx)(o.a,{className:c()("contact__title",`contact__title--${e}`,{"contact__title--hidden":y.a}),level:3,as:"h1",style:w(O.b.base.durationXS,N,.3),children:Object(j.jsx)(i.a,{text:"Say hello",start:"exited"!==e&&!y.a,delay:300})}),Object(j.jsx)(r.a,{className:c()("contact__divider",`contact__divider--${e}`,{"contact__divider--hidden":y.a}),style:w(O.b.base.durationXS,N,.4)}),Object(j.jsx)(g,{required:!0,className:c()("contact__input",`contact__input--${e}`,{"contact__input--hidden":y.a}),style:w(O.b.base.durationXS,N),autoComplete:"email",label:"Your Email",type:"email",maxLength:512,...a}),Object(j.jsx)(g,{required:!0,multiline:!0,className:c()("contact__input",`contact__input--${e}`,{"contact__input--hidden":y.a}),style:w(O.b.base.durationS,N),autoComplete:"off",label:"Message",maxLength:4096,...n}),Object(j.jsx)(u.a,{component:null,children:!!H&&Object(j.jsx)(b.a,{timeout:Object(_.b)(O.b.base.durationM),children:e=>{var a;return Object(j.jsx)("div",{className:c()("contact__form-error",`contact__form-error--${e}`),style:{"--height":Object(p.a)(e)?Object(_.d)(null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height):"0px"},children:Object(j.jsx)("div",{className:"contact__form-error-content",ref:t,children:Object(j.jsxs)("div",{className:"contact__form-error-message",children:[Object(j.jsx)(l.a,{className:"contact__form-error-icon",icon:"error"}),H]})})})}})}),Object(j.jsx)(s.a,{className:c()("contact__button",`contact__button--${e}`,{"contact__button--hidden":y.a,"contact__button--sending":h}),style:w(O.b.base.durationM,N),disabled:h,loading:h,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}),S&&Object(j.jsx)(b.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:p.b,timeout:0,children:e=>Object(j.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(j.jsx)(o.a,{level:3,as:"h3",className:c()("contact__complete-title",`contact__complete-title--${e}`),children:"Message Sent"}),Object(j.jsx)(f.a,{size:"l",className:c()("contact__complete-text",`contact__complete-text--${e}`),style:w(O.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(j.jsx)(s.a,{secondary:!0,iconHoverShift:!0,className:c()("contact__complete-button",`contact__complete-button--${e}`),style:w(O.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})})]})]})}},58:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=a(20),r=a.p+"static/media/gotham-bold.73ce573b.woff2",o=(a(61),a(1));t.a=({children:e,level:t=1,as:a,align:c="auto",weight:l="medium",className:d,...u})=>{const b=Math.min(Math.max(t,0),4),j=a||`h${Math.max(b,1)}`;return Object(o.jsxs)(n.Fragment,{children:["bold"===l&&Object(o.jsxs)(i.a,{children:[Object(o.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(o.jsx)(j,{className:s()(d,"heading",`heading--align-${c}`,`heading--level-${b}`,`heading--weight-${l}`),...u,children:e})]})}},59:function(e,t,a){"use strict";var n=a(4),c=a.n(n),s=(a(63),a(1));t.a=({children:e,size:t="m",as:a="p",align:n="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(s.jsx)(a,{className:c()(o,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})},61:function(e,t,a){},62:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=(a(65),a(1));const r=Object(n.forwardRef)((({as:e="div",children:t,className:a,...n},c)=>Object(i.jsx)(e,{className:s()("section",a),ref:c,...n,children:t})));t.a=r},63:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=a(9),r=a(70),o=a(23),l=a(27),d=(a(73),a(1));const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",j="value";const h=({text:e,start:t=!0,delay:a=0,className:c,...h})=>{const m=Object(n.useRef)([{type:b,value:""}]),p=Object(n.useRef)(),O=Object(i.h)();return Object(n.useEffect)((()=>{const n=p.current,c=e.split("");let s;const i=()=>{const e=m.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},o=Object(r.g)(0,(e=>{m.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:j,value:e};if(a%1<.5){const e=Math.floor(Math.random()*u.length);return{type:b,value:u[e]}}return{type:b,value:t[n].value}}))}(c,m.current,e),i()}));return!t||s||O||l.a||(s=Object(r.a)(Object(r.b)(a),Object(r.e)({from:0,to:c.length,stiffness:8,damping:5})).start(o)),O&&(m.current=c.map(((e,t)=>({type:j,value:c[t]}))),i()),()=>{s&&s.stop()}}),[O,t,a,e]),Object(d.jsxs)("span",{className:s()("decoder-text",c),...h,children:[Object(d.jsx)(o.a,{className:"decoder-text__label",children:e}),Object(d.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:p})]})};t.a=Object(n.memo)(h)},73:function(e,t,a){},78:function(e,t,a){"use strict";var n=a(4),c=a.n(n),s=a(2),i=(a(79),a(1));const r=({lineWidth:e,lineHeight:t,notchWidth:a,notchHeight:n,collapseDelay:r,collapsed:o,className:l,style:d})=>Object(i.jsxs)("div",{className:c()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":a,"--notchHeight":n,"--collapseDelay":Object(s.c)(r),...d},children:[Object(i.jsx)("div",{className:c()("divider__line",{"divider__line--collapsed":o})}),Object(i.jsx)("div",{className:c()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(s.c)(r+160)}})]});r.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=r},79:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}}]);
//# sourceMappingURL=9.34feda75.chunk.js.map