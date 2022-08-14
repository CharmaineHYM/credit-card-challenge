(function(){"use strict";var e={5207:function(e,t,a){var r=a(9242),n=a(3396);function l(e,t,a,r,l,c){const s=(0,n.up)("Register");return(0,n.wg)(),(0,n.j4)(s)}var c=a(4870),s=a(7139);const o=(0,c.iH)({cardName:"",cardNb:"",expMonth:"",expYear:"",cvc:"",cardNameErr:"",cardNbErr:"",expDateErr:"",cvcErr:"",isValid:!1});function u(e){if(e.attributes.pattern){const t=new RegExp(e.attributes.pattern.value);return e.value=e.value.replace(t,""),e.value}}const d=["placeholder","type","value"];var i={__name:"Input",props:{placeholder:String,type:String,modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,r=(0,n.l1)();return(l,s)=>((0,n.wg)(),(0,n.iD)("input",(0,n.dG)({class:"default__input",placeholder:e.placeholder,type:a.type,value:a.modelValue,onInput:s[0]||(s[0]=e=>t("update:modelValue",(0,c.SU)(u)(e.target)))},(0,c.SU)(r)),null,16,d))}};const p=i;var m=p,v={__name:"Label",props:{pattern:String},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.iD)("label",{class:(0,s.C_)([t.pattern,"default__label"])},[(0,n.WI)(e.$slots,"default")],2))}};const _=v;var f=_;const g={class:"default__submit"};function h(e,t){return(0,n.wg)(),(0,n.iD)("button",g,[(0,n.WI)(e.$slots,"default")])}var w=a(89);const b={},U=(0,w.Z)(b,[["render",h]]);var S=U;const x={class:"error__message"};function y(e,t){return(0,n.wg)(),(0,n.iD)("p",x,[(0,n.WI)(e.$slots,"default")])}const k={},N=(0,w.Z)(k,[["render",y]]);var E=N;let V={typeOne:"Wong format, please check again",typeTwo:"Can't be blank",typeThree:"Only accept Visa, Master or AE"};function W(e){e=e?e.toString():"";let t="",a=e.length;a||(t=V.typeTwo),o.value.cardNameErr=t;let r=a;return r}function D(e){e=e?e.toString():"";let t="",a=e.length,r=16===e.length,n=["1","4","5"].includes(e[0]);a?r?n||(t=V.typeThree):t=V.typeOne:t=V.typeTwo,o.value.cardNbErr=t;let l=a&&r&&n;return l}function O(e,t){e=e?e.toString():"",t=t?t.toString():"";let a="",r=new Date,n=r.getFullYear().toString().slice(2),l=r.getMonth()+1,c=e.length&&t.length,s=parseInt(e)<12||parseInt(t)>parseInt(n)||parseInt(t)==parseInt(n)&&parseInt(e)>l;s||(a=V.typeOne),c||(a=V.typeTwo),o.value.expDateErr=a;let u=c&&s;return u}function M(e){e=e?e.toString():"";let t="",a=e.length,r=e.length>=3;a?r||(t=V.typeOne):t=V.typeTwo,o.value.cvcErr=t;let n=a&&r;return n}function F(){let{cardName:e,cardNb:t,expMonth:a,expYear:r,cvc:n}=o.value,l=W(e),c=D(t),s=O(a,r),u=M(n);o.value.isValid=l&&c&&s&&u}const C={class:"success"},Y=(0,n.uE)('<svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"></circle><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"></path><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"></stop><stop offset="1" stop-color="#610595"></stop></linearGradient></defs></svg><div class="text"><h1 class="success__title">Thank You!</h1><p class="success__help__msg">We&#39;ve added your card details</p></div>',2),I=(0,n.Uk)("Continue");var z={__name:"Success",setup(e){const t=()=>{o.value.isValid="",o.value.cardName="",o.value.cardNb="",o.value.expMonth="",o.value.expYear="",o.value.cvc=""};return(e,a)=>((0,n.wg)(),(0,n.iD)("div",C,[Y,(0,n.Wm)(S,{class:"success__button",onClick:t},{default:(0,n.w5)((()=>[I])),_:1})]))}};const T=z;var j=T,Z=a(9583);const A={class:"form"},R={key:1,class:"personalDetail"},G={class:"cardName"},P=(0,n.Uk)("Cardholder Name"),$={class:"cardNb"},J=(0,n.Uk)("Card Number"),q={class:"expDate"},H=(0,n.Uk)("Exp. Date (MM/YY)"),L={class:"expDate__options"},B={class:"cvc"},K=(0,n.Uk)("cvc"),Q=(0,n.Uk)("Confirm");var X={__name:"Form",setup(e){const t=(0,c.Fl)({get(){return(0,Z.sS)(o.value.cardNb,"#### #### #### ####")},set(e){o.value.cardNb=e.replace(/\s+/g,""),console.log(o.value.cardNb)}});return(e,a)=>((0,n.wg)(),(0,n.iD)("section",A,[(0,c.SU)(o).isValid?((0,n.wg)(),(0,n.j4)(j,{key:0})):((0,n.wg)(),(0,n.iD)("form",R,[(0,n._)("div",G,[(0,n.Wm)(f,{class:"label"},{default:(0,n.w5)((()=>[P])),_:1}),(0,n.Wm)(m,{placeholder:"e.g. Jane Appleseed",type:"text",modelValue:(0,c.SU)(o).cardName,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,c.SU)(o).cardName=e),pattern:"[^a-z A-Z]+",inputmode:"text"},null,8,["modelValue"]),(0,n.wy)((0,n.Wm)(E,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)((0,c.SU)(o).cardNameErr),1)])),_:1},512),[[r.F8,(0,c.SU)(o).cardNameErr]])]),(0,n._)("div",$,[(0,n.Wm)(f,{class:"label"},{default:(0,n.w5)((()=>[J])),_:1}),(0,n.Wm)(m,{placeholder:"e.g. 1234 5678 9123 0000",modelValue:(0,c.SU)(t),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,c.dq)(t)?t.value=e:null),maxlength:"19",pattern:"[^0-9]+",inputmode:"number"},null,8,["modelValue"]),(0,n.wy)((0,n.Wm)(E,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)((0,c.SU)(o).cardNbErr),1)])),_:1},512),[[r.F8,(0,c.SU)(o).cardNbErr]])]),(0,n._)("div",q,[(0,n.Wm)(f,{class:"label"},{default:(0,n.w5)((()=>[H])),_:1}),(0,n._)("div",L,[(0,n.Wm)(m,{placeholder:"MM",class:"month",modelValue:(0,c.SU)(o).expMonth,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,c.SU)(o).expMonth=e),maxlength:"2",pattern:"[^0-9]+",inputmode:"number"},null,8,["modelValue"]),(0,n.Wm)(m,{placeholder:"YY",class:"year",modelValue:(0,c.SU)(o).expYear,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,c.SU)(o).expYear=e),maxlength:"2",pattern:"[^0-9]+",inputmode:"number"},null,8,["modelValue"])]),(0,n.wy)((0,n.Wm)(E,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)((0,c.SU)(o).expDateErr),1)])),_:1},512),[[r.F8,(0,c.SU)(o).expDateErr]])]),(0,n._)("div",B,[(0,n.Wm)(f,{class:"label"},{default:(0,n.w5)((()=>[K])),_:1}),(0,n.Wm)(m,{placeholder:"e.g. 123",modelValue:(0,c.SU)(o).cvc,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,c.SU)(o).cvc=e),maxlength:"3",pattern:"[^0-9]+",inputmode:"number"},null,8,["modelValue"]),(0,n.wy)((0,n.Wm)(E,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)((0,c.SU)(o).cvcErr),1)])),_:1},512),[[r.F8,(0,c.SU)(o).cvcErr]])]),(0,n.Wm)(S,{class:"submit",onClick:(0,r.iM)((0,c.SU)(F),["prevent"])},{default:(0,n.w5)((()=>[Q])),_:1},8,["onClick"])]))]))}};const ee=X;var te=ee,ae=a.p+"img/bg-card-front.209d5f43.png",re=a.p+"img/bg-card-back.50bec165.png";const ne={class:"card__container"},le={class:"card__wrapper"},ce={class:"card"},se={class:"front__card"},oe=(0,n._)("img",{src:ae,alt:"card-front",class:"front__card__img card__img"},null,-1),ue={class:"card__content"},de=(0,n._)("div",{class:"card__logo"},[(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"84",height:"47",fill:"none"},[(0,n._)("ellipse",{cx:"23.478",cy:"23.5",rx:"23.478",ry:"23.5",fill:"#fff"}),(0,n._)("path",{d:"M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z",stroke:"#fff"})])],-1),ie={class:"card__number"},pe={class:"card__name"},me={class:"card__date"},ve={class:"back__card"},_e=(0,n._)("img",{src:re,alt:"card-back",class:"back__card__img card__img"},null,-1),fe={class:"card__csv"};var ge={__name:"Card",setup(e){const t=(0,c.Fl)((()=>{let e=o.value.cardNb||"0000000000000000";return e=e.padEnd(16,"0"),e.substring(0,4)+" "+e.substring(4,8)+" "+e.substring(8,12)+" "+e.substring(12,16)})),a=(0,c.Fl)((()=>{let e=o.value.cardName||"Jane Appleseed";return e})),r=(0,c.Fl)((()=>{let e=o.value.expMonth||"00";return e=e.padStart(2,"0"),e})),l=(0,c.Fl)((()=>{let e=o.value.expYear||"00";return e=e.padStart(2,"0"),e})),u=(0,c.Fl)((()=>{let e=o.value.cvc||"00";return e=e.padEnd(3,"0"),e}));return(e,o)=>((0,n.wg)(),(0,n.iD)("div",ne,[(0,n._)("div",le,[(0,n._)("div",ce,[(0,n._)("div",se,[oe,(0,n._)("div",ue,[de,(0,n._)("h1",ie,(0,s.zw)((0,c.SU)(t)),1),(0,n._)("p",pe,(0,s.zw)((0,c.SU)(a)),1),(0,n._)("p",me,(0,s.zw)((0,c.SU)(r))+"/"+(0,s.zw)((0,c.SU)(l)),1)])]),(0,n._)("div",ve,[_e,(0,n._)("p",fe,(0,s.zw)((0,c.SU)(u)),1)])])])]))}};const he=ge;var we=he;const be={class:"register"};var Ue={__name:"Register",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",be,[(0,n.Wm)(te),(0,n.Wm)(we)]))}};const Se=Ue;var xe=Se,ye={name:"App",components:{Register:xe}};const ke=(0,w.Z)(ye,[["render",l]]);var Ne=ke;const Ee=(0,r.ri)(Ne);Ee.use(Z.ZP),Ee.mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,l){if(!r){var c=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],l=e[d][2];for(var s=!0,o=0;o<r.length;o++)(!1&l||c>=l)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(s=!1,l<c&&(c=l));if(s){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,c=r[0],s=r[1],o=r[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(o)var d=o(a)}for(t&&t(r);u<c.length;u++)l=c[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},r=self["webpackChunkcredit_card_challenge"]=self["webpackChunkcredit_card_challenge"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5207)}));r=a.O(r)})();
//# sourceMappingURL=app.5372b40f.js.map