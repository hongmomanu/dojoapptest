//>>built
define("dojox/lang/oo/rearrange",["dijit","dojo","dojox"],function(p,h,n){h.provide("dojox.lang.oo.rearrange");(function(){var k=h._extraNames,l=k.length,m=Object.prototype.toString,e={};n.lang.oo.rearrange=function(c,g){var a,b,d,f;for(a in g)if(b=g[a],!b||"[object String]"==m.call(b))if(d=c[a],!(a in e)||e[a]!==d)delete c[a]||(c[a]=void 0),b&&(c[b]=d);if(l)for(f=0;f<l;++f)if(a=k[f],b=g[a],!b||"[object String]"==m.call(b))if(d=c[a],!(a in e)||e[a]!==d)delete c[a]||(c[a]=void 0),b&&(c[b]=d);return c}})()});
//# sourceMappingURL=rearrange.js.uncompressed.js.map