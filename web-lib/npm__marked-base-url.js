/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/marked-base-url@1.1.7/lib/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).markedBaseUrl={})}(this,(function(e){"use strict";e.baseUrl=function(e){e=e.trim().replace(/\/+$/,"/");const t=/^[\w+]+:\/\//,r=t.test(e),f="http://__dummy__",n=new URL(e,f),s=16+(e.startsWith("/")?0:1);return{walkTokens(f){if(["link","image"].includes(f.type)&&!t.test(f.href)&&!f.href.startsWith("#"))if(r)try{f.href=new URL(f.href,e).href}catch{}else{if(f.href.startsWith("/"))return;try{const e=new URL(f.href,n).href;f.href=e.slice(s)}catch{}}}}}}));
//# sourceMappingURL=/sm/68157da167dbbbf75f60b426e696fecc04c4aabdd723efe71618fb195c1d522b.map