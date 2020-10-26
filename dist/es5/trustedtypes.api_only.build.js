(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var w="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},A="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};A.Symbol||(A.Symbol=ca)}function da(a,b){this.a=a;w(this,"description",{configurable:!0,writable:!0,value:b})}
da.prototype.toString=function(){return this.a};var ca=function(){function a(e){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new da("jscomp_symbol_"+(e||"")+"_"+b++,e)}var b=0;return a}();function Q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ea(a){for(var b,e=[];!(b=a.next()).done;)e.push(b.value);return e}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},R;if("function"==typeof Object.setPrototypeOf)R=Object.setPrototypeOf;else{var S;a:{var ha={b:!0},na={};try{na.__proto__=ha;S=na.b;break a}catch(a){}S=!1}R=S?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=R;
function T(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var e in b)if("prototype"!=e)if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(b,e);k&&Object.defineProperty(a,e,k)}else a[e]=b[e];a.C=b.prototype}function U(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
function V(a,b){if(b){var e=A;a=a.split(".");for(var k=0;k<a.length-1;k++){var q=a[k];q in e||(e[q]={});e=e[q]}a=a[a.length-1];k=e[a];b=b(k);b!=k&&null!=b&&w(e,a,{configurable:!0,writable:!0,value:b})}}
V("WeakMap",function(a){function b(f){this.a=(F+=Math.random()+1).toString();if(f){f=Q(f);for(var l;!(l=f.next()).done;)l=l.value,this.set(l[0],l[1])}}function e(){}function k(f){if(!U(f,n)){var l=new e;w(f,n,{value:l})}}function q(f){var l=Object[f];l&&(Object[f]=function(p){if(p instanceof e)return p;k(p);return l(p)})}if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),l=Object.seal({}),p=new a([[f,2],[l,3]]);if(2!=p.get(f)||3!=p.get(l))return!1;p.delete(f);p.set(l,4);return!p.has(f)&&
4==p.get(l)}catch(X){return!1}}())return a;var n="$jscomp_hidden_"+Math.random();q("freeze");q("preventExtensions");q("seal");var F=0;b.prototype.set=function(f,l){k(f);if(!U(f,n))throw Error("WeakMap key fail: "+f);f[n][this.a]=l;return this};b.prototype.get=function(f){return U(f,n)?f[n][this.a]:void 0};b.prototype.has=function(f){return U(f,n)&&U(f[n],this.a)};b.prototype.delete=function(f){return U(f,n)&&U(f[n],this.a)?delete f[n][this.a]:!1};return b});
V("Object.is",function(a){return a?a:function(b,e){return b===e?0!==b||1/b===1/e:b!==b&&e!==e}});V("Object.entries",function(a){return a?a:function(b){var e=[],k;for(k in b)U(b,k)&&e.push([k,b[k]]);return e}});var pa="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function qa(){if("undefined"!==typeof window){var a=[],b;for(b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return pa};var ra="undefined"!==typeof window;function sa(){throw new TypeError("undefined conversion");}function ta(){return null}var ua=String.prototype,va=ua.toLowerCase,wa=ua.toUpperCase;function xa(){throw new TypeError("Illegal constructor");}function ya(){throw new TypeError("Illegal constructor");}
var W=function(){function a(c){return k.apply(this,arguments)||this}function b(c){return k.apply(this,arguments)||this}function e(c){return k.apply(this,arguments)||this}function k(c,d){if(c!==L)throw Error("cannot call the constructor");G(this,"policyName",{value:d,enumerable:!0})}function q(c){var d=Y.get(c);void 0===d&&(d=C(null),Y.set(c,d));return d}function n(c){var d=ia(c);if(null==d||ia(d)!==ja)throw Error();d=Q(Z(d));for(var h=d.next();!h.done;h=d.next())h=h.value,G(c,h,{value:c[h]});return c}
function F(c,d){x(c.prototype);delete c.name;G(c,"name",{value:d})}function f(c){return function(d){return d instanceof c&&Y.has(d)}}function l(c,d){function h(M,H){var Ga=d[H]||("default"==c?ta:sa),Ha=x(new M(L,c));M={};H=(M[H]=function(Ia,Ra){for(var u=[],D=1;D<arguments.length;++D)u[D-1]=arguments[D];u=Ga.apply(null,[""+Ia].concat(u instanceof Array?u:ea(Q(u))));if(void 0===u||null===u){if("default"==c)return u;u=""}u=""+u;D=x(C(Ha));q(D).v=u;return D},M)[H];return x(H)}for(var g=C(xa.prototype),
m=Q(Z(N)),E=m.next();!E.done;E=m.next())E=E.value,g[E]=h(N[E],E);G(g,"name",{value:c,writable:!1,configurable:!1,enumerable:!0});return x(g)}function p(c,d,h,g,m){g=void 0===g?"":g;m=void 0===m?"":m;c=wa.apply(String(c));(g=m?m:g)||(g="http://www.w3.org/1999/xhtml");if(g=I.apply(v,[g])?v[g]:null){if(I.apply(g,[c])&&g[c]&&I.apply(g[c][d],[h])&&g[c][d][h])return g[c][d][h];if(I.apply(g,["*"])&&I.apply(g["*"][d],[h])&&g["*"][d][h])return g["*"][d][h]}}function X(){return J}var r=Object,Ja=r.assign,C=
r.create,G=r.defineProperty,x=r.freeze,Z=r.getOwnPropertyNames,ia=r.getPrototypeOf,ja=r.prototype,I=ja.hasOwnProperty;r=Array.prototype;var Ka=r.forEach,La=r.push;ba();var L=Symbol(),Y=n(new WeakMap),K=n([]),O=n([]),ka=!0,J=null,P=!1;k.prototype.toString=function(){return q(this).v};k.prototype.valueOf=function(){return q(this).v};T(e,k);F(e,"TrustedScriptURL");T(b,k);F(b,"TrustedHTML");T(a,k);F(a,"TrustedScript");F(k,"TrustedType");r=x(C(new b(L,"")));q(r).v="";var la=x(C(new a(L,"")));q(la).v="";
var t={},v=(t["http://www.w3.org/1999/xhtml"]={EMBED:{attributes:{src:e.name}},IFRAME:{attributes:{srcdoc:b.name}},OBJECT:{attributes:{data:e.name,codebase:e.name}},SCRIPT:{attributes:{src:e.name,text:a.name},properties:{innerText:a.name,textContent:a.name,text:a.name}},"*":{attributes:{},properties:{innerHTML:b.name,outerHTML:b.name}}},t["http://www.w3.org/2000/svg"]={"*":{attributes:{},properties:{}}},t);t={codebase:"codeBase",formaction:"formAction"};!ra||"srcdoc"in HTMLIFrameElement.prototype||
delete v["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(var y=Q(Object.keys(v["http://www.w3.org/1999/xhtml"])),z=y.next();!z.done;z=y.next()){z=z.value;v["http://www.w3.org/1999/xhtml"][z].properties||(v["http://www.w3.org/1999/xhtml"][z].properties={});for(var ma=Q(Object.keys(v["http://www.w3.org/1999/xhtml"][z].attributes)),B=ma.next();!B.done;B=ma.next())B=B.value,v["http://www.w3.org/1999/xhtml"][z].properties[t[B]?t[B]:B]=v["http://www.w3.org/1999/xhtml"][z].attributes[B]}t=Q(qa());
for(y=t.next();!y.done;y=t.next())y=y.value,v["http://www.w3.org/1999/xhtml"]["*"].attributes[y]="TrustedScript",v["http://www.w3.org/2000/svg"]["*"].attributes[y]="TrustedScript";var N={createHTML:b,createScriptURL:e,createScript:a},Ma=N.hasOwnProperty;t=C(ya.prototype);Ja(t,{createPolicy:function(c,d){if(!c.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+c+" contains invalid characters.");if(P&&-1===O.indexOf(c)&&-1===O.indexOf("*"))throw new TypeError("Policy "+c+" disallowed.");
if("default"===c&&J)throw new TypeError("Policy "+c+" already exists.");if(P&&!ka&&-1!==K.indexOf(c))throw new TypeError("Policy "+c+" exists.");K.push(c);var h=C(null);if(d&&"object"===typeof d)for(var g=Q(Z(d)),m=g.next();!m.done;m=g.next())m=m.value,Ma.call(N,m)&&(h[m]=d[m]);else console.warn("trustedTypes.createPolicy "+c+" was given an empty policy");x(h);d=l(c,h);"default"===c&&(J=d);return d},s:f(b),w:f(e),u:f(a),l:function(c,d,h,g){h=void 0===h?"":h;g=void 0===g?"":g;d=va.apply(String(d));
return p(c,"attributes",d,h,g)||null},o:function(c,d,h){return p(c,"properties",String(d),void 0===h?"":h)||null},c:function(c){c=void 0===c?"":c;if(!c)try{c=document.documentElement.namespaceURI}catch(d){c="http://www.w3.org/1999/xhtml"}return(c=v[c])?JSON.parse(JSON.stringify(c)):{}},i:r,j:la,h:J,TrustedHTML:b,TrustedScriptURL:e,TrustedScript:a});G(t,"defaultPolicy",{get:X,set:function(){}});return{f:x(t),B:function(c,d){P=!0;O.length=0;Ka.call(c,function(h){La.call(O,""+h)});ka=d;K.length=0},g:function(){P=
!1},m:X,A:function(){J=null;K.splice(K.indexOf("default"),1)}}}().f;var za=Reflect.apply;za(Object.prototype.hasOwnProperty,Element.prototype,["insertAdjacentHTML"]);for(var Aa=W.c("http://www.w3.org/1999/xhtml"),Ba={TrustedHTML:W.TrustedHTML,TrustedScript:W.TrustedScript,TrustedScriptURL:W.TrustedScriptURL},Ca=Q(Object.keys(Aa)),Da=Ca.next();!Da.done;Da=Ca.next())for(var Ea=Aa[Da.value].properties,Fa=Q(Object.entries(Ea)),Na=Fa.next();!Na.done;Na=Fa.next()){var Oa=Q(Na.value),Pa=Oa.next().value,Qa=Oa.next().value;Ea[Pa]=Ba[Qa]};}).call(this);

//# sourceMappingURL=trustedtypes.api_only.build.js.map
