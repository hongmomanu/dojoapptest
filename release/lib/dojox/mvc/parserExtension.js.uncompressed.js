//>>built
define("dojox/mvc/parserExtension","require dojo/_base/kernel dojo/_base/lang dojo/has!dojo-parser?:dojo/_base/window dojo/has dojo/has!dojo-mobile-parser?:dojo/parser dojo/has!dojo-parser?:dojox/mobile/parser dojox/mvc/_atBindingMixin dojox/mvc/Element".split(" "),function(p,f,q,r,c,a,n,g){c.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{c.add("dojo-parser",!!p("dojo/parser"))}catch(v){}try{c.add("dojo-mobile-parser",!!p("dojox/mobile/parser"))}catch(w){}if(c("dojo-parser")){var t=
a.scan;a.scan=function(s,d){return t.apply(this,q._toArray(arguments)).then(function(h){for(var k=(d.scope||f._scopeName)+"Type",e="data-"+(d.scope||f._scopeName)+"-type",l=c("dom-qsa")?s.querySelectorAll("["+g.prototype.dataBindAttr+"]"):s.getElementsByTagName("*"),b=0,a=l.length;b<a;b++){var m=l[b];!m.getAttribute(e)&&(!m.getAttribute(k)&&m.getAttribute(g.prototype.dataBindAttr))&&h.push({types:["dojox/mvc/Element"],node:m})}return h})}}if(c("dojo-mobile-parser")){var u=n.parse;n.parse=function(a,
d){var h=((d||{}).scope||f._scopeName)+"Type",k="data-"+((d||{}).scope||f._scopeName)+"-type";nodes=c("dom-qsa")?(a||r.body()).querySelectorAll("["+g.prototype.dataBindAttr+"]"):(a||r.body()).getElementsByTagName("*");for(var e=0,l=nodes.length;e<l;e++){var b=nodes[e];!b.getAttribute(k)&&(!b.getAttribute(h)&&b.getAttribute(g.prototype.dataBindAttr))&&b.setAttribute(k,"dojox/mvc/Element")}return u.apply(this,q._toArray(arguments))}}return a||n});
//# sourceMappingURL=parserExtension.js.uncompressed.js.map