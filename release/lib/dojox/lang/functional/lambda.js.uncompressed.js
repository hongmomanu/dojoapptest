//>>built
define("dojox/lang/functional/lambda",["../..","dojo/_base/lang","dojo/_base/array"],function(h,g,k){var d=g.getObject("lang.functional",!0,h),e={},l=1<"ab".split(/a*/).length?String.prototype.split:function(a){var b=this.split.call(this,a);(a=a.exec(this))&&0==a.index&&b.unshift("");return b},f=function(a){var b=[],c=l.call(a,/\s*->\s*/m);if(1<c.length)for(;c.length;)a=c.pop(),b=c.pop().split(/\s*,\s*|\s+/m),c.length&&c.push("(function("+b.join(", ")+"){ return ("+a+"); })");else if(a.match(/\b_\b/))b=
["_"];else{var c=a.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),d=a.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);if(c||d)c&&(b.push("$1"),a="$1"+a),d&&(b.push("$2"),a+="$2");else{var c=a.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,
"").match(/([a-z_$][a-z_$\d]*)/gi)||[],e={};k.forEach(c,function(a){e.hasOwnProperty(a)||(b.push(a),e[a]=1)})}}return{args:b,body:a}},m=function(a){return a.length?function(){var b=a.length-1,c=d.lambda(a[b]).apply(this,arguments);for(--b;0<=b;--b)c=d.lambda(a[b]).call(this,c);return c}:function(a){return a}};g.mixin(d,{rawLambda:function(a){return f(a)},buildLambda:function(a){a=f(a);return"function("+a.args.join(",")+"){return ("+a.body+");}"},lambda:function(a){if("function"==typeof a)return a;
if(a instanceof Array)return m(a);if(e.hasOwnProperty(a))return e[a];var b=f(a);return e[a]=new Function(b.args,"return ("+b.body+");")},clearLambdaCache:function(){e={}}});return d});
//# sourceMappingURL=lambda.js.uncompressed.js.map