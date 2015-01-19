//>>built
define("dojo/_base/lang",["./kernel","../has","../sniff"],function(f,g){g.add("bug-for-in-skips-shadowed",function(){for(var a in{toString:1})return 0;return 1});var h=g("bug-for-in-skips-shadowed")?"hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" "):[],n=h.length,l=function(a,d,c){c||(c=a[0]&&f.scopeMap[a[0]]?f.scopeMap[a.shift()][1]:f.global);try{for(var e=0;e<a.length;e++){var b=a[e];if(!(b in c))if(d)c[b]={};else return;c=c[b]}return c}catch(r){}},
p=Object.prototype.toString,m=function(a,d,c){return(c||[]).concat(Array.prototype.slice.call(a,d||0))},q=/\{([^\}]+)\}/g,b={_extraNames:h,_mixin:function(a,d,c){var e,b,f,k={};for(e in d)if(b=d[e],!(e in a)||a[e]!==b&&(!(e in k)||k[e]!==b))a[e]=c?c(b):b;if(g("bug-for-in-skips-shadowed")&&d)for(f=0;f<n;++f)if(e=h[f],b=d[e],!(e in a)||a[e]!==b&&(!(e in k)||k[e]!==b))a[e]=c?c(b):b;return a},mixin:function(a,d){a||(a={});for(var c=1,e=arguments.length;c<e;c++)b._mixin(a,arguments[c]);return a},setObject:function(a,
d,c){var b=a.split(".");a=b.pop();return(c=l(b,!0,c))&&a?c[a]=d:void 0},getObject:function(a,b,c){return l(a?a.split("."):[],b,c)},exists:function(a,d){return void 0!==b.getObject(a,!1,d)},isString:function(a){return"string"==typeof a||a instanceof String},isArray:function(a){return a&&(a instanceof Array||"array"==typeof a)},isFunction:function(a){return"[object Function]"===p.call(a)},isObject:function(a){return void 0!==a&&(null===a||"object"==typeof a||b.isArray(a)||b.isFunction(a))},isArrayLike:function(a){return a&&
void 0!==a&&!b.isString(a)&&!b.isFunction(a)&&!(a.tagName&&"form"==a.tagName.toLowerCase())&&(b.isArray(a)||isFinite(a.length))},isAlien:function(a){return a&&!b.isFunction(a)&&/\{\s*\[native code\]\s*\}/.test(String(a))},extend:function(a,d){for(var c=1,e=arguments.length;c<e;c++)b._mixin(a.prototype,arguments[c]);return a},_hitchArgs:function(a,d){var c=b._toArray(arguments,2),e=b.isString(d);return function(){var g=b._toArray(arguments),h=e?(a||f.global)[d]:d;return h&&h.apply(a||this,c.concat(g))}},
hitch:function(a,d){if(2<arguments.length)return b._hitchArgs.apply(f,arguments);d||(d=a,a=null);if(b.isString(d)){a=a||f.global;if(!a[d])throw['lang.hitch: scope["',d,'"] is null (scope\x3d"',a,'")'].join("");return function(){return a[d].apply(a,arguments||[])}}return!a?d:function(){return d.apply(a,arguments||[])}},delegate:function(){function a(){}return function(d,c){a.prototype=d;var e=new a;a.prototype=null;c&&b._mixin(e,c);return e}}(),_toArray:g("ie")?function(){function a(a,b,e){e=e||[];
for(b=b||0;b<a.length;b++)e.push(a[b]);return e}return function(b){return(b.item?a:m).apply(this,arguments)}}():m,partial:function(a){return b.hitch.apply(f,[null].concat(b._toArray(arguments)))},clone:function(a){if(!a||"object"!=typeof a||b.isFunction(a))return a;if(a.nodeType&&"cloneNode"in a)return a.cloneNode(!0);if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return RegExp(a);var d,c,e;if(b.isArray(a)){d=[];c=0;for(e=a.length;c<e;++c)c in a&&d.push(b.clone(a[c]))}else d=
a.constructor?new a.constructor:{};return b._mixin(d,a,b.clone)},trim:String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(a,d,c){return a.replace(c||q,b.isFunction(d)?d:function(a,c){return b.getObject(c,!1,d)})}};b.mixin(f,b);return b});
//# sourceMappingURL=lang.js.uncompressed.js.map