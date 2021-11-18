/*! 
        * name: @webszy/ui
        * version:0.0.1
        * time:2021-11-18T03:11:42.419Z
         */
(function(s,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l():typeof define=="function"&&define.amd?define(l):(s=typeof globalThis!="undefined"?globalThis:s||self,s.wbLoading=l())})(this,function(){"use strict";const s={small:"16px",medium:"32px",large:"64px"};var l=[{name:"round-rotate",id:"r1",divCount:1},{name:"Colorful-Heart",id:"heart",divCount:1},{name:"google",id:"heart",divCount:1}],m=`:host{\r
    --wb-loading-size:32px;\r
    --wb-loading-color:#fff;\r
    --wb-loading-text-color:#fff;\r
    --wb-loading-border-width:2px;\r
    --wb-full-screen-bg: rgba(0, 0, 0, .6);\r
    --wb-layer-bg: rgba(0, 0, 0, .8);\r
    --wb-full-screen-width:100vw;\r
    --wb-full-screen-height:100vh;\r
    width:100vw;\r
    height:100vh;\r
    position:absolute;\r
    left:0;\r
    top:0;\r
    z-index:99999;\r
    justify-content:center;\r
    align-items:center;\r
}\r
:host .full-screen {\r
    width: var(--wb-full-screen-width);\r
    height: var(--wb-full-screen-height);\r
    background: var(--wb-full-screen-bg);\r
    position: absolute;\r
    left:0;\r
    top:0;\r
    z-index:99998;\r
}\r
:host .wb-layer {\r
    padding: calc(20px - var(--wb-loading-border-width) - 2px);\r
    border-radius: 8px;\r
    background-color: var(--wb-layer-bg);\r
    transition: all .3s;\r
    z-index:100000;\r
}\r
:host p{\r
    color:var(--wb-loading-text-color);\r
    font-size: 14px;\r
    width:100%;\r
    text-align: center;\r
    margin: 0;\r
    margin-top: 8px;\r
}\r
\r
:host .wb-loading {\r
    width: 100%;\r
    height: 100%;\r
    display: block;\r
    font-size: 0;\r
    color: var(--wb-loading-color);\r
    position: relative;\r
    box-sizing: border-box\r
}\r
\r
:host .wb-loading > div {\r
    display: inline-block;\r
    float: none;\r
    background-color: var(--wb-loading-color);\r
    border: 0 solid var(--wb-loading-color);\r
}\r
\r
:host .la-ball-clip-rotate {\r
    width: var(--wb-loading-size);\r
    height: var(--wb-loading-size);\r
}\r
\r
:host .wb-loading > div {\r
    width: var(--wb-loading-size);\r
    height: var(--wb-loading-size);\r
    background: 0 0;\r
    border-width: var(--wb-loading-border-width);\r
    border-bottom-color: transparent;\r
    border-radius: 100%;\r
    animation: ball-clip-rotate .75s linear infinite\r
}\r
\r
@keyframes ball-clip-rotate {\r
    0% {\r
        -webkit-transform: rotate(0deg);\r
        -moz-transform: rotate(0deg);\r
        -o-transform: rotate(0deg);\r
        transform: rotate(0deg)\r
    }\r
\r
    50% {\r
        -webkit-transform: rotate(180deg);\r
        -moz-transform: rotate(180deg);\r
        -o-transform: rotate(180deg);\r
        transform: rotate(180deg)\r
    }\r
\r
    100% {\r
        -webkit-transform: rotate(360deg);\r
        -moz-transform: rotate(360deg);\r
        -o-transform: rotate(360deg);\r
        transform: rotate(360deg)\r
    }\r
}\r
`;const y=e=>e.startsWith("#")||e.startsWith("rgb")||e.startsWith("hsl"),d=e=>{switch(typeof e){case"string":return e===""||e==="true"||y(e)?!0:isNaN(Number(e))?!1:Number(e)>0;case"number":return e>0;case"object":return!!e;case"function":return!0;case"undefined":return!1;default:return!1}},g=e=>{const t=document.createElement("div");return e&&(t.className=e),t};class u extends HTMLElement{constructor(){super();const t=this.getAttribute("name"),n=this.getAttribute("size")||"medium",r=d(this.getAttribute("fullScreen")),i=d(this.getAttribute("show")),a=d(this.getAttribute("loadingBg")),x=d(this.getAttribute("loadingColor"));console.log({name:t,size:n,fullScreen:r,show:i,loadingBg:a});const z=this.attachShadow({mode:"closed"});let c=document.createDocumentFragment();const w=document.createElement("style");w.innerHTML=m.replace(/(\r\n)|(\n)/g,""),c.appendChild(w);const{divCount:A}=this.getConfig(t),k=g("full-screen"),b=g("wb-layer"),p=g("wb-loading");for(let o=0;o<A;o++)p.appendChild(g());b.appendChild(p);const h=this.getAttribute("text");if(h&&h!==""){const o=document.createElement("p");o.innerHTML=h,b.appendChild(o)}c.appendChild(k),c.appendChild(b),z.appendChild(c),this.style.display=i?"flex":"none";const P=s[n];if(n!=="medium"&&this.style.setProperty("--wb-loading-size",P),!r)this.style.setProperty("--wb-full-screen-width","0"),this.style.setProperty("--wb-full-screen-height","0");else{const o=this.getAttribute("fullScreenBg");o&&o!==""&&this.style.setProperty("--wb-full-screen-bg",o)}a&&this.getAttribute("loadingBg")!==""&&this.style.setProperty("--wb-layer-bg",this.getAttribute("loadingBg")),x&&this.getAttribute("loadingColor")!==""&&this.style.setProperty("--wb-loading-color",this.getAttribute("loadingColor"))}connectedCallback(){const t=this.getAttribute("global");!t||t===""||window.hasOwnProperty("globalName")?window.wbLoadingInstance=this:window[t]=this}disconnectedCallback(){}attributeChangedCallback(t,n,r){console.log("attributeChangedCallback",t,n,r);const i=d(r);if(t==="show"&&(this.style.display=i?"flex":"none"),t==="size"&&this.style.setProperty("--wb-loading-size",s[r]),t==="fullScreen")if(!i)this.style.setProperty("--wb-full-screen-width","0"),this.style.setProperty("--wb-full-screen-height","0");else{this.style.setProperty("--wb-full-screen-width","100vw"),this.style.setProperty("--wb-full-screen-height","100vh");const a=this.getAttribute("fullScreenBg");a&&a!==""&&this.style.setProperty("--wb-full-screen-bg",a)}t==="loadingBg"&&i&&this.getAttribute("loadingBg")!==""&&this.style.setProperty("--wb-layer-bg",this.getAttribute("loadingBg")),t==="loadingColor"&&i&&this.getAttribute("loadingColor")!==""&&this.style.setProperty("--wb-layer-bg",this.getAttribute("loadingColor"))}static get observedAttributes(){return["show","size","fullScreen","loadingColor"]}get show(){return this.getAttribute("show")==="true"}set show(t){t||t==="true"?this.style.display="block":this.style.display="none",this.setAttribute("show",t)}adoptedCallback(){}getConfig(t){return l.find(r=>r.name===t)||l[0]}}var v={name:"wb-loading",component:u,_load(){customElements.get("wb-loading")?console.warn("web-ui has loaded wb-loading"):customElements.define("wb-loading",u)}},f=[v];class C{constructor(t){this._init(t||"")}_init(t){if(t==="")f.forEach(n=>{this._loadOneComponent(n)});else{const n=f.find(r=>r.name===t);n?this._loadOneComponent(n):console.warn("web-ui does have this component,please tell us!")}}_loadOneComponent(t){customElements.get(t.name)?console.warn(`web-ui has loaded ${t.name}`):customElements.define(t.name,t.component)}}return C});
