/*!
  Highlight.js v11.7.0 (git: 82688fad18)
  (c) 2006-2022 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function n(e){return e instanceof Map?e.clear=e.delete=e.set=()=>{throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{throw Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((t=>{var s=e[t];"object"!=typeof s||Object.isFrozen(s)||n(s)})),e}e.exports=n,e.exports.default=n;class t{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const i=e=>!!e.scope||e.sublanguage&&e.language;class r{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!i(e))return;let n="";n=e.sublanguage?"language-"+e.language:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(e.scope,{prefix:this.classPrefix}),this.span(n)}closeNode(e){i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const o=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class c{constructor(){this.rootNode=o(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=o({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.sublanguage=!0,t.language=n,this.add(t)}toHTML(){return new r(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function g(e){return p("(?=",e,")")}function u(e){return p("(?:",e,")*")}function h(e){return p("(?:",e,")?")}function p(...e){return e.map((e=>d(e))).join("")}function b(...e){const n=(e=>{const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}})(e);return"("+(n.capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function f(e){return RegExp(e.toString()+"|").exec("").length-1}const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let s=d(e),a="";for(;s.length>0;){const e=m.exec(s);if(!e){a+=s;break}a+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+(Number(e[1])+n):(a+=e[0],"("===e[0]&&t++)}return a})).map((e=>`(${e})`)).join(n)}const y="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",_="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",N="\\b(0b[01]+)",A={begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[A]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[A]},S=(e,n,t={})=>{const s=a({scope:"comment",begin:e,end:n,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:p(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},O=S("//","$"),M=S("/\\*","\\*/"),R=S("#","$");var I=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:y,UNDERSCORE_IDENT_RE:w,NUMBER_RE:_,C_NUMBER_RE:x,BINARY_NUMBER_RE:N,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=p(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:A,APOS_STRING_MODE:v,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:S,C_LINE_COMMENT_MODE:O,C_BLOCK_COMMENT_MODE:M,HASH_COMMENT_MODE:R,NUMBER_MODE:{scope:"number",begin:_,relevance:0},C_NUMBER_MODE:{scope:"number",begin:x,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:N,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[A,{begin:/\[/,end:/\]/,relevance:0,contains:[A]}]}]},TITLE_MODE:{scope:"title",begin:y,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})});function T(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function j(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function B(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function L(e,n){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function C(e,n){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function D(e,n){void 0===e.relevance&&(e.relevance=1)}const z=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=p(t.beforeMatch,g(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},$=["of","and","for","in","not","or","if","then","parent","list","value"];function P(e,n,t="keyword"){const s=Object.create(null);return"string"==typeof e?a(t,e.split(" ")):Array.isArray(e)?a(t,e):Object.keys(e).forEach((t=>{Object.assign(s,P(e[t],n,t))})),s;function a(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|");s[t[0]]=[e,H(t[0],t[1])]}))}}function H(e,n){return n?Number(n):(e=>$.includes(e.toLowerCase()))(e)?0:1}const U={},Z=e=>{console.error(e)},G=(e,...n)=>{console.log("WARN: "+e,...n)},K=(e,n)=>{U[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),U[`${e}/${n}`]=!0)},F=Error();function W(e,n,{key:t}){let s=0;const a=e[t],i={},r={};for(let e=1;e<=n.length;e++)r[e+s]=a[e],i[e+s]=!0,s+=f(n[e-1]);e[t]=r,e[t]._emit=i,e[t]._multi=!0}function X(e){(e=>{e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),(e=>{if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),F;if("object"!=typeof e.beginScope||null===e.beginScope)throw Z("beginScope must be object"),F;W(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),F;if("object"!=typeof e.endScope||null===e.endScope)throw Z("endScope must be object"),F;W(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function q(e){function n(n,t){return RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(E(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),s=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,s)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(i,r){const o=i;if(i.isCompiled)return o;[j,C,X,z].forEach((e=>e(i,r))),e.compilerExtensions.forEach((e=>e(i,r))),i.__beforeBegin=null,[B,L,D].forEach((e=>e(i,r))),i.isCompiled=!0;let c=null;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=P(i.keywords,e.case_insensitive)),o.keywordPatternRe=n(c,!0),r&&(i.begin||(i.begin=/\B|\b/),o.beginRe=n(o.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(o.endRe=n(o.end)),o.terminatorEnd=d(o.end)||"",i.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(o.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>a(e,{variants:null},n)))),e.cachedVariants?e.cachedVariants:J(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{t(e,o)})),i.starts&&t(i.starts,r),o.matcher=(e=>{const n=new s;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function J(e){return!!e&&(e.endsWithParent||J(e.starts))}class V extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const Q=s,Y=a,ee=Symbol("nomatch");var ne=(n=>{const s=Object.create(null),a=Object.create(null),i=[];let r=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function f(e){return d.noHighlightRe.test(e)}function m(e,n,t){let s="",a="";"object"==typeof n?(s=e,t=n.ignoreIllegals,a=n.language):(K("10.7.0","highlight(lang, code, ...args) has been deprecated."),K("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,s=n),void 0===t&&(t=!0);const i={code:s,language:a};k("before:highlight",i);const r=i.result?i.result:E(i.language,i.code,t);return r.code=i.code,k("after:highlight",r),r}function E(e,n,a,i){const c=Object.create(null);function l(){if(!A.keywords)return void k.addText(S);let e=0;A.keywordPatternRe.lastIndex=0;let n=A.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const a=w.case_insensitive?n[0].toLowerCase():n[0],i=(s=a,A.keywords[s]);if(i){const[e,s]=i;if(k.addText(t),t="",c[a]=(c[a]||0)+1,c[a]<=7&&(O+=s),e.startsWith("_"))t+=n[0];else{const t=w.classNameAliases[e]||e;k.addKeyword(n[0],t)}}else t+=n[0];e=A.keywordPatternRe.lastIndex,n=A.keywordPatternRe.exec(S)}var s;t+=S.substring(e),k.addText(t)}function g(){null!=A.subLanguage?(()=>{if(""===S)return;let e=null;if("string"==typeof A.subLanguage){if(!s[A.subLanguage])return void k.addText(S);e=E(A.subLanguage,S,!0,v[A.subLanguage]),v[A.subLanguage]=e._top}else e=y(S,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(O+=e.relevance),k.addSublanguage(e._emitter,e.language)})():l(),S=""}function u(e,n){let t=1;const s=n.length-1;for(;t<=s;){if(!e._emit[t]){t++;continue}const s=w.classNameAliases[e[t]]||e[t],a=n[t];s?k.addKeyword(a,s):(S=a,l(),S=""),t++}}function h(e,n){return e.scope&&"string"==typeof e.scope&&k.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(k.addKeyword(S,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),S=""):e.beginScope._multi&&(u(e.beginScope,n),S="")),A=Object.create(e,{parent:{value:A}}),A}function p(e,n,s){let a=((e,n)=>{const t=e&&e.exec(n);return t&&0===t.index})(e.endRe,s);if(a){if(e["on:end"]){const s=new t(e);e["on:end"](n,s),s.isMatchIgnored&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,n,s)}function b(e){return 0===A.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}let f={};function m(s,i){const o=i&&i[0];if(S+=s,null==o)return g(),0;if("begin"===f.type&&"end"===i.type&&f.index===i.index&&""===o){if(S+=n.slice(i.index,i.index+1),!r){const n=Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=f.rule,n}return 1}if(f=i,"begin"===i.type)return(e=>{const n=e[0],s=e.rule,a=new t(s),i=[s.__beforeBegin,s["on:begin"]];for(const t of i)if(t&&(t(e,a),a.isMatchIgnored))return b(n);return s.skip?S+=n:(s.excludeBegin&&(S+=n),g(),s.returnBegin||s.excludeBegin||(S=n)),h(s,e),s.returnBegin?0:n.length})(i);if("illegal"===i.type&&!a){const e=Error('Illegal lexeme "'+o+'" for mode "'+(A.scope||"<unnamed>")+'"');throw e.mode=A,e}if("end"===i.type){const e=function(e){const t=e[0],s=n.substring(e.index),a=p(A,e,s);if(!a)return ee;const i=A;A.endScope&&A.endScope._wrap?(g(),k.addKeyword(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(g(),u(A.endScope,e)):i.skip?S+=t:(i.returnEnd||i.excludeEnd||(S+=t),g(),i.excludeEnd&&(S=t));do{A.scope&&k.closeNode(),A.skip||A.subLanguage||(O+=A.relevance),A=A.parent}while(A!==a.parent);return a.starts&&h(a.starts,e),i.returnEnd?0:t.length}(i);if(e!==ee)return e}if("illegal"===i.type&&""===o)return 1;if(R>1e5&&R>3*i.index)throw Error("potential infinite loop, way more iterations than matches");return S+=o,o.length}const w=N(e);if(!w)throw Z(o.replace("{}",e)),Error('Unknown language: "'+e+'"');const _=q(w);let x="",A=i||_;const v={},k=new d.__emitter(d);(()=>{const e=[];for(let n=A;n!==w;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>k.openNode(e)))})();let S="",O=0,M=0,R=0,I=!1;try{for(A.matcher.considerAll();;){R++,I?I=!1:A.matcher.considerAll(),A.matcher.lastIndex=M;const e=A.matcher.exec(n);if(!e)break;const t=m(n.substring(M,e.index),e);M=e.index+t}return m(n.substring(M)),k.closeAllNodes(),k.finalize(),x=k.toHTML(),{language:e,value:x,relevance:O,illegal:!1,_emitter:k,_top:A}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:Q(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:M,context:n.slice(M-100,M+100),mode:t.mode,resultSoFar:x},_emitter:k};if(r)return{language:e,value:Q(n),illegal:!1,relevance:0,errorRaised:t,_emitter:k,_top:A};throw t}}function y(e,n){n=n||d.languages||Object.keys(s);const t=(e=>{const n={value:Q(e),illegal:!1,relevance:0,_top:c,_emitter:new d.__emitter(d)};return n._emitter.addText(e),n})(e),a=n.filter(N).filter(v).map((n=>E(n,e,!1)));a.unshift(t);const i=a.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(N(e.language).supersetOf===n.language)return 1;if(N(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=i,l=r;return l.secondBest=o,l}function w(e){let n=null;const t=(e=>{let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){const n=N(t[1]);return n||(G(o.replace("{}",t[1])),G("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>f(e)||N(e)))})(e);if(f(t))return;if(k("before:highlightElement",{el:e,language:t}),e.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),d.throwUnescapedHTML))throw new V("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const s=n.textContent,i=t?m(s,{language:t,ignoreIllegals:!0}):y(s);e.innerHTML=i.value,((e,n,t)=>{const s=n&&a[n]||t;e.classList.add("hljs"),e.classList.add("language-"+s)})(e,t,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),k("after:highlightElement",{el:e,result:i,text:s})}let _=!1;function x(){"loading"!==document.readyState?document.querySelectorAll(d.cssSelector).forEach(w):_=!0}function N(e){return e=(e||"").toLowerCase(),s[e]||s[a[e]]}function A(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{a[e.toLowerCase()]=n}))}function v(e){const n=N(e);return n&&!n.disableAutodetect}function k(e,n){const t=e;i.forEach((e=>{e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{_&&x()}),!1),Object.assign(n,{highlight:m,highlightAuto:y,highlightAll:x,highlightElement:w,highlightBlock:e=>(K("10.7.0","highlightBlock will be removed entirely in v12.0"),K("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{d=Y(d,e)},initHighlighting:()=>{x(),K("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:()=>{x(),K("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:(e,t)=>{let a=null;try{a=t(n)}catch(n){if(Z("Language definition for '{}' could not be registered.".replace("{}",e)),!r)throw n;Z(n),a=c}a.name||(a.name=e),s[e]=a,a.rawDefinition=t.bind(null,n),a.aliases&&A(a.aliases,{languageName:e})},unregisterLanguage:e=>{delete s[e];for(const n of Object.keys(a))a[n]===e&&delete a[n]},listLanguages:()=>Object.keys(s),getLanguage:N,registerAliases:A,autoDetection:v,inherit:Y,addPlugin:e=>{(e=>{e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),i.push(e)}}),n.debugMode=()=>{r=!1},n.safeMode=()=>{r=!0},n.versionString="11.7.0",n.regex={concat:p,lookahead:g,either:b,optional:h,anyNumberOfTimes:u};for(const n in I)"object"==typeof I[n]&&e.exports(I[n]);return Object.assign(n,I),n})({});return ne}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs),/*! `bash` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t={},s={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},s]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(r);const o={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},c=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[c,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},r,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}}})();hljs.registerLanguage("bash",e)})(),/*! `javascript` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],s=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],a=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],i=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],r=["arguments","this","super","console","window","document","localStorage","module","global"],o=[].concat(i,s,a);return c=>{const l=c.regex,d=e,g={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,s=e.input[t];if("<"===s||","===s)return void n.ignoreMatch();let a;">"===s&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch());const i=e.input.substring(t);((a=i.match(/^\s*=/))||(a=i.match(/^\s+extends\s+/))&&0===a.index)&&n.ignoreMatch()}},u={$pattern:e,keyword:n,literal:t,built_in:o,"variable.language":r},h="\\.([0-9](_?[0-9])*)",p="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",b={className:"number",variants:[{begin:`(\\b(${p})((${h})|\\.)?|(${h}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${p})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:u,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},E={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,f],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,f]},w={className:"comment",variants:[c.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]},_=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,m,E,y,{match:/\$\d+/},b];f.contains=_.concat({begin:/\{/,end:/\}/,keywords:u,contains:["self"].concat(_)});const x=[].concat(w,f.contains),N=x.concat([{begin:/\(/,end:/\)/,keywords:u,contains:["self"].concat(x)}]),A={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:N},v={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,l.concat(d,"(",l.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...s,...a]}},S={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[A],illegal:/%/},O={match:l.concat(/\b/,(M=[...i,"super","import"],l.concat("(?!",M.join("|"),")")),d,l.lookahead(/\(/)),className:"title.function",relevance:0};var M;const R={begin:l.concat(/\./,l.lookahead(l.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},I={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},A]},T="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",j={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(T)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[A]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:u,exports:{PARAMS_CONTAINS:N,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,m,E,y,w,{match:/\$\d+/},b,k,{className:"attr",begin:d+l.lookahead(":"),relevance:0},j,{begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,c.REGEXP_MODE,{className:"function",begin:T,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:c.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:N}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:g.begin,"on:begin":g.isTrulyOpeningTag,end:g.end}],subLanguage:"xml",contains:[{begin:g.begin,end:g.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[A,c.inherit(c.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},R,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[A]},O,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},v,I,{match:/\$[(.]/}]}}})();hljs.registerLanguage("javascript",e)})();
//# sourceMappingURL=introduction.11ee8dc3.js.map
