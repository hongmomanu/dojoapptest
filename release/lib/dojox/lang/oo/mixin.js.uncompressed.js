//>>built
define("dojox/lang/oo/mixin",["dijit","dojo","dojox","dojo/require!dojox/lang/oo/Filter,dojox/lang/oo/Decorator"],function(x,e,s){e.provide("dojox.lang.oo.mixin");e.experimental("dojox.lang.oo.mixin");e.require("dojox.lang.oo.Filter");e.require("dojox.lang.oo.Decorator");(function(){var l=s.lang.oo,t=l.Filter,p=l.Decorator,k={},u=function(b){return b},v=function(b,a,c){return a},w=function(b,a,c,h){b[a]=c},q=e._extraNames,r=q.length,n=l.applyDecorator=function(b,a,c,h){if(c instanceof p){var k=c.decorator;
c=n(b,a,c.value,h);return k(a,c,h)}return b(a,c,h)};l.__mixin=function(b,a,c,h,l){var g,f,d,m,e;for(g in a)if(d=a[g],!(g in k)||k[g]!==d)if((f=h(g,b,a,d))&&(!(f in b)||!(f in k)||k[f]!==d))m=b[f],d=n(c,f,d,m),m!==d&&l(b,f,d,m);if(r)for(e=0;e<r;++e)if(g=q[e],d=a[g],!(g in k)||k[g]!==d)if((f=h(g,b,a,d))&&(!(f in b)||!(f in k)||k[f]!==d))m=b[f],d=n(c,f,d,m),m!==d&&l(b,f,d,m);return b};l.mixin=function(b,a){for(var c,h,e=1,g=arguments.length;e<g;++e)a=arguments[e],a instanceof t?(h=a.filter,a=a.bag):
h=u,a instanceof p?(c=a.decorator,a=a.value):c=v,l.__mixin(b,a,c,h,w);return b}})()});
//# sourceMappingURL=mixin.js.uncompressed.js.map