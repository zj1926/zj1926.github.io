!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build",t(t.s=12)}([function(e,t,n){"use strict";n(1),n(2),n(3),n(4);var r=[["#7bd0ff","#F38181"],["#e8ec8b","#57cc9d"],["#EAFFD0","#88A6E5"],["#ffb077","#b0cadb"]],s=function(){for(var e=document.getElementsByClassName("type")[0],t=document.getElementById("sbttl2"),n=r.length,s=document.getElementsByTagName("select"),i=0;i<s.length;i++)s[i].onchange=function(e){var t=e.target.value;window.location.href=t};window.Typed.new(".type",{stringsElement:document.getElementById("typed-strings"),typeSpeed:70,loop:!0,preStringTyped:function(s){document.getElementsByClassName("typed-cursor")[0].style.color=r[s%n][0],e.style.color=r[s%n][0],t.style.color=r[s%n][1]}})};document.addEventListener("DOMContentLoaded",function(){s()})},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){var s=function(e,t){var r=this;this.el=e,this.options={},Object.keys(i).forEach(function(e){r.options[e]=i[e]}),Object.keys(t).forEach(function(e){r.options[e]=t[e]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,n&&this.options.stringsElement instanceof n?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var e=this;e.timeout=setTimeout(function(){for(var t=0;t<e.strings.length;++t)e.sequence[t]=t;e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},e.startDelay)},build:function(){var e=this;if(!0===this.showCursor&&(this.cursor=t.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(t){e.strings.push(t.innerHTML)})}this.init()},typewrite:function(e,t){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var n=Math.round(70*Math.random())+this.typeSpeed,r=this;r.timeout=setTimeout(function(){var n=0,s=e.substr(t);if("^"===s.charAt(0)){var i=1;/^\^\d+/.test(s)&&(s=/\d+/.exec(s)[0],i+=s.length,n=parseInt(s)),e=e.substring(0,t)+e.substring(t+i)}if("html"===r.contentType){var a=e.substr(t).charAt(0);if("<"===a||"&"===a){var o="",l="";for(l="<"===a?">":";";e.substr(t+1).charAt(0)!==l&&(o+=e.substr(t).charAt(0),!(++t+1>e.length)););t++,o+=l}}r.timeout=setTimeout(function(){if(t===e.length){if(r.options.onStringTyped(r.arrayPos),r.arrayPos===r.strings.length-1&&(r.options.callback(),r.curLoop++,!1===r.loop||r.curLoop===r.loopCount))return;r.timeout=setTimeout(function(){r.backspace(e,t)},r.backDelay)}else{0===t&&r.options.preStringTyped(r.arrayPos);var n=e.substr(0,t+1);r.attr?r.el.setAttribute(r.attr,n):r.isInput?r.el.value=n:"html"===r.contentType?r.el.innerHTML=n:r.el.textContent=n,t++,r.typewrite(e,t)}},n)},n)}},backspace:function(e,t){var n=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var r=Math.round(70*Math.random())+this.backSpeed;n.timeout=setTimeout(function(){if("html"===n.contentType&&">"===e.substr(t).charAt(0)){for(var r="";"<"!==e.substr(t-1).charAt(0)&&(r-=e.substr(t).charAt(0),!(--t<0)););t--,r+="<"}var s=e.substr(0,t);n.replaceText(s),t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.shuffle&&(n.sequence=n.shuffleArray(n.sequence)),n.init()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},r)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},shuffleArray:function(e){var t,n,r=e.length;if(r)for(;--r;)n=Math.floor(Math.random()*(r+1)),t=e[n],e[n]=e[r],e[r]=t;return e},reset:function(){var e=this;clearInterval(e.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},s.new=function(e,n){Array.prototype.slice.apply(t.querySelectorAll(e)).forEach(function(e){var t=e._typed,i="object"==(void 0===n?"undefined":r(n))&&n;t&&t.reset(),e._typed=t=new s(e,i),"string"==typeof n&&t[n]()})},n&&(n.fn.typed=function(e){return this.each(function(){var t=n(this),i=t.data("typed"),a="object"==(void 0===e?"undefined":r(e))&&e;i&&i.reset(),t.data("typed",i=new s(this,a)),"string"==typeof e&&i[e]()})}),e.Typed=s;var i={strings:[""],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery)},function(e,t){},,,,,,,function(e,t,n){"use strict";n(0),n(13),n(5);var r=n(14),s=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(15);s.default.registerLanguage("javascript",i),document.addEventListener("DOMContentLoaded",function(){s.default.initHighlightingOnLoad()})},function(e,t){},function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function s(e){return C.test(e)}function i(e){var t,n,r,i,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",n=R.exec(a))return _(n[1])?n[1]:"no-highlight";for(a=a.split(/\s+/),t=0,r=a.length;t<r;t++)if(i=a[t],s(i)||_(i))return i}function a(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function o(e){var t=[];return function e(r,s){for(var i=r.firstChild;i;i=i.nextSibling)3===i.nodeType?s+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:s,node:i}),s=e(i,s),n(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:s,node:i}));return s}(e,0),t}function l(e,r,s){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}u+="<"+n(e)+N.map.call(e.attributes,r).join("")+">"}function o(e){u+="</"+n(e)+">"}function l(e){("start"===e.event?a:o)(e.node)}for(var c=0,u="",f=[];e.length||r.length;){var d=i();if(u+=t(s.substring(c,d[0].offset)),c=d[0].offset,d===e){f.reverse().forEach(o);do{l(d.splice(0,1)[0]),d=i()}while(d===e&&d.length&&d[0].offset===c);f.reverse().forEach(a)}else"start"===d[0].event?f.push(d[0].node):f.pop(),l(d.splice(0,1)[0])}return u+t(s.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[a(e)]||[e]}function u(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(s,i){if(!s.compiled){if(s.compiled=!0,s.keywords=s.keywords||s.beginKeywords,s.keywords){var a={},o=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof s.keywords?o("keyword",s.keywords):w(s.keywords).forEach(function(e){o(e,s.keywords[e])}),s.keywords=a}s.lexemesRe=n(s.lexemes||/\w+/,!0),i&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")\\b"),s.begin||(s.begin=/\B|\b/),s.beginRe=n(s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(s.endRe=n(s.end)),s.terminator_end=t(s.end)||"",s.endsWithParent&&i.terminator_end&&(s.terminator_end+=(s.end?"|":"")+i.terminator_end)),s.illegal&&(s.illegalRe=n(s.illegal)),null==s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=Array.prototype.concat.apply([],s.contains.map(function(e){return c("self"===e?s:e)})),s.contains.forEach(function(e){r(e,s)}),s.starts&&r(s.starts,i);var l=s.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([s.terminator_end,s.illegal]).map(t).filter(Boolean);s.terminators=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,n,s,i){function a(e,t){var n,s;for(n=0,s=t.contains.length;n<s;n++)if(r(t.contains[n].beginRe,e))return t.contains[n]}function o(e,t){if(r(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,t)}function l(e,t){return!s&&r(t.illegalRe,e)}function c(e,t){var n=y.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function h(e,t,n,r){var s=r?"":A.classPrefix,i='<span class="'+s,a=n?"":S;return(i+=e+'">')+t+a}function g(){var e,n,r,s;if(!N.keywords)return t(C);for(s="",n=0,N.lexemesRe.lastIndex=0,r=N.lexemesRe.exec(C);r;)s+=t(C.substring(n,r.index)),e=c(N,r),e?(R+=e[1],s+=h(e[0],t(r[0]))):s+=t(r[0]),n=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(C);return s+t(C.substr(n))}function p(){var e="string"==typeof N.subLanguage;if(e&&!O[N.subLanguage])return t(C);var n=e?f(N.subLanguage,C,!0,w[N.subLanguage]):d(C,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(R+=n.relevance),e&&(w[N.subLanguage]=n.top),h(n.language,n.value,!1,!0)}function m(){M+=null!=N.subLanguage?p():g(),C=""}function E(e){M+=e.className?h(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function b(e,t){if(C+=e,null==t)return m(),0;var n=a(t,N);if(n)return n.skip?C+=t:(n.excludeBegin&&(C+=t),m(),n.returnBegin||n.excludeBegin||(C=t)),E(n,t),n.returnBegin?0:t.length;var r=o(N,t);if(r){var s=N;s.skip?C+=t:(s.returnEnd||s.excludeEnd||(C+=t),m(),s.excludeEnd&&(C=t));do{N.className&&(M+=S),N.skip||(R+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&E(r.starts,""),s.returnEnd?0:t.length}if(l(t,N))throw new Error('Illegal lexeme "'+t+'" for mode "'+(N.className||"<unnamed>")+'"');return C+=t,t.length||1}var y=_(e);if(!y)throw new Error('Unknown language: "'+e+'"');u(y);var v,N=i||y,w={},M="";for(v=N;v!==y;v=v.parent)v.className&&(M=h(v.className,"",!0)+M);var C="",R=0;try{for(var T,x,D=0;;){if(N.terminators.lastIndex=D,!(T=N.terminators.exec(n)))break;x=b(n.substring(D,T.index),T[0]),D=T.index+x}for(b(n.substr(D)),v=N;v.parent;v=v.parent)v.className&&(M+=S);return{relevance:R,value:M,language:e,top:N}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(n)};throw e}}function d(e,n){n=n||A.languages||w(O);var r={relevance:0,value:t(e)},s=r;return n.filter(_).forEach(function(t){var n=f(t,e,!1);n.language=t,n.relevance>s.relevance&&(s=n),n.relevance>r.relevance&&(s=r,r=n)}),s.language&&(r.second_best=s),r}function h(e){return A.tabReplace||A.useBR?e.replace(T,function(e,t){return A.useBR&&"\n"===e?"<br>":A.tabReplace?t.replace(/\t/g,A.tabReplace):""}):e}function g(e,t,n){var r=t?M[t]:n,s=[e.trim()];return e.match(/\bhljs\b/)||s.push("hljs"),-1===e.indexOf(r)&&s.push(r),s.join(" ").trim()}function p(e){var t,n,r,a,c,u=i(e);s(u)||(A.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,c=t.textContent,r=u?f(u,c,!0):d(c),n=o(t),n.length&&(a=document.createElementNS("http://www.w3.org/1999/xhtml","div"),a.innerHTML=r.value,r.value=l(n,o(a),c)),r.value=h(r.value),e.innerHTML=r.value,e.className=g(e.className,u,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function m(e){A=a(A,e)}function E(){if(!E.called){E.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,p)}}function b(){addEventListener("DOMContentLoaded",E,!1),addEventListener("load",E,!1)}function y(t,n){var r=O[t]=n(e);r.aliases&&r.aliases.forEach(function(e){M[e]=t})}function v(){return w(O)}function _(e){return e=(e||"").toLowerCase(),O[e]||O[M[e]]}var N=[],w=Object.keys,O={},M={},C=/^(no-?highlight|plain|text)$/i,R=/\blang(?:uage)?-([\w-]+)\b/i,T=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,S="</span>",A={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=d,e.fixMarkup=h,e.highlightBlock=p,e.configure=m,e.initHighlighting=E,e.initHighlightingOnLoad=b,e.registerLanguage=y,e.listLanguages=v,e.getLanguage=_,e.inherit=a,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var s=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return s.contains.push(e.PHRASAL_WORDS_MODE),s.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),s},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,s]};s.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var a=s.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:a}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:a}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}}]);