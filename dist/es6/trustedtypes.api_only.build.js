(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';const e="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function F(){if("undefined"!==typeof window){const l=[];for(const r in HTMLElement.prototype)"on"===r.slice(0,2)&&l.push(r);return l}return e};const K="undefined"!==typeof window,L=()=>{throw new TypeError("undefined conversion");},T=()=>null,{toLowerCase:U,toUpperCase:V}=String.prototype;function W(){throw new TypeError("Illegal constructor");}function X(){throw new TypeError("Illegal constructor");}
const {l:Y}=function(){function l(a){let b=G.get(a);void 0===b&&(b=q(null),G.set(a,b));return b}function r(a){const b=M(a);if(null==b||M(b)!==N)throw Error();for(const d of H(b))u(a,d,{value:a[d]});return a}function y(a,b){g(a.prototype);delete a.name;u(a,"name",{value:b})}function I(a){return b=>b instanceof a&&G.has(b)}function aa(a,b){function d(m,J){const ba=b[J]||("default"==a?T:L),ca=g(new m(z,a));return g({[J](h,...A){h=ba(""+h,...A);if(void 0===h||null===h){if("default"==a)return h;h=""}h=
""+h;A=g(q(ca));l(A).v=h;return A}}[J])}const c=q(W.prototype);for(const m of H(B))c[m]=d(B[m],m);u(c,"name",{value:a,writable:!1,configurable:!1,enumerable:!0});return g(c)}function O(a,b,d,c="",m=""){a=V.apply(String(a));(c=m?m:c)||(c="http://www.w3.org/1999/xhtml");if(c=v.apply(f,[c])?f[c]:null){if(v.apply(c,[a])&&c[a]&&v.apply(c[a][b],[d])&&c[a][b][d])return c[a][b][d];if(v.apply(c,["*"])&&v.apply(c["*"][b],[d])&&c["*"][b][d])return c["*"][b][d]}}function P(){return w}const {assign:da,create:q,
defineProperty:u,freeze:g,getOwnPropertyNames:H,getPrototypeOf:M,prototype:N}=Object,{hasOwnProperty:v}=N,{forEach:ea,push:fa}=Array.prototype,z=Symbol(),G=r(new WeakMap),x=r([]),C=r([]);let Q=!0,w=null,D=!1;class E{constructor(a,b){if(a!==z)throw Error("cannot call the constructor");u(this,"policyName",{value:b,enumerable:!0})}toString(){return l(this).v}valueOf(){return l(this).v}}class n extends E{}y(n,"TrustedScriptURL");class p extends E{}y(p,"TrustedHTML");class k extends E{}y(k,"TrustedScript");
y(E,"TrustedType");const R=g(q(new p(z,"")));l(R).v="";const S=g(q(new k(z,"")));l(S).v="";const f={["http://www.w3.org/1999/xhtml"]:{EMBED:{attributes:{src:n.name}},IFRAME:{attributes:{srcdoc:p.name}},OBJECT:{attributes:{data:n.name,codebase:n.name}},SCRIPT:{attributes:{src:n.name,text:k.name},properties:{innerText:k.name,textContent:k.name,text:k.name}},"*":{attributes:{},properties:{innerHTML:p.name,outerHTML:p.name}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{},properties:{}}}};var t={codebase:"codeBase",
formaction:"formAction"};!K||"srcdoc"in HTMLIFrameElement.prototype||delete f["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const a of Object.keys(f["http://www.w3.org/1999/xhtml"])){f["http://www.w3.org/1999/xhtml"][a].properties||(f["http://www.w3.org/1999/xhtml"][a].properties={});for(const b of Object.keys(f["http://www.w3.org/1999/xhtml"][a].attributes))f["http://www.w3.org/1999/xhtml"][a].properties[t[b]?t[b]:b]=f["http://www.w3.org/1999/xhtml"][a].attributes[b]}for(const a of F())f["http://www.w3.org/1999/xhtml"]["*"].attributes[a]=
"TrustedScript",f["http://www.w3.org/2000/svg"]["*"].attributes[a]="TrustedScript";const B={createHTML:p,createScriptURL:n,createScript:k},ha=B.hasOwnProperty;t=q(X.prototype);da(t,{createPolicy:function(a,b){if(!a.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+a+" contains invalid characters.");if(D&&-1===C.indexOf(a)&&-1===C.indexOf("*"))throw new TypeError("Policy "+a+" disallowed.");if("default"===a&&w)throw new TypeError("Policy "+a+" already exists.");if(D&&!Q&&-1!==x.indexOf(a))throw new TypeError("Policy "+
a+" exists.");x.push(a);const d=q(null);if(b&&"object"===typeof b)for(const c of H(b))ha.call(B,c)&&(d[c]=b[c]);else console.warn("trustedTypes.createPolicy "+a+" was given an empty policy");g(d);b=aa(a,d);"default"===a&&(w=b);return b},h:I(p),j:I(n),i:I(k),c:function(a,b,d="",c=""){b=U.apply(String(b));return O(a,"attributes",b,d,c)||null},f:function(a,b,d=""){return O(a,"properties",String(b),d)||null},g:function(a=""){if(!a)try{a=document.documentElement.namespaceURI}catch(b){a="http://www.w3.org/1999/xhtml"}return(a=
f[a])?JSON.parse(JSON.stringify(a)):{}},a:R,b:S,s:w,TrustedHTML:p,TrustedScriptURL:n,TrustedScript:k});u(t,"defaultPolicy",{get:P,set:()=>{}});return{l:g(t),A:function(a,b){D=!0;C.length=0;ea.call(a,d=>{fa.call(C,""+d)});Q=b;x.length=0},o:function(){D=!1},u:P,w:function(){w=null;x.splice(x.indexOf("default"),1)}}}();if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Z=Object.create(X.prototype);Object.assign(Z,{h:Y.h,j:Y.j,i:Y.i,createPolicy:Y.createPolicy,c:Y.c,f:Y.f,g:Y.g,a:Y.a,b:Y.b,m:!0});Object.defineProperty(Z,"defaultPolicy",Object.getOwnPropertyDescriptor(Y,"defaultPolicy")||{});window.trustedTypes=Object.freeze(Z);window.TrustedHTML=Y.TrustedHTML;window.TrustedScriptURL=
Y.TrustedScriptURL;window.TrustedScript=Y.TrustedScript;window.TrustedTypePolicy=W;window.TrustedTypePolicyFactory=X};}).call(this);

//# sourceMappingURL=trustedtypes.api_only.build.js.map
