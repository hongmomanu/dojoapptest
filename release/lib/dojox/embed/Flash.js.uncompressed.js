//>>built
define("dojox/embed/Flash","dojo/_base/lang dojo/_base/unload dojo/_base/array dojo/query dojo/has dojo/dom dojo/on dojo/window".split(" "),function(d,n,k,p,q,h,r,l){function m(a){a=d.delegate(s,a);if(!("path"in a))return console.error("dojox.embed.Flash(ctor):: no path reference to a Flash movie was provided."),null;"id"in a||(a.id=t+u++);return a}var g,f,t="dojox-embed-flash-",u=0,s={expressInstall:!1,width:320,height:240,swLiveConnect:"true",allowScriptAccess:"sameDomain",allowNetworking:"all",
style:null,redirect:null};q("ie")?(g=function(a){a=m(a);if(!a)return null;var b,c=a.path;if(a.vars){var d=[];for(b in a.vars)d.push(b+"\x3d"+a.vars[b]);a.params.FlashVars=d.join("\x26");delete a.vars}c='\x3cobject id\x3d"'+a.id+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width\x3d"'+a.width+'" height\x3d"'+a.height+'"'+(a.style?' style\x3d"'+a.style+'"':"")+'\x3e\x3cparam name\x3d"movie" value\x3d"'+c+'" /\x3e';if(a.params)for(b in a.params)c+='\x3cparam name\x3d"'+b+'" value\x3d"'+
a.params[b]+'" /\x3e';return{id:a.id,markup:c+"\x3c/object\x3e"}},f=function(){for(var a=10,b=null;!b&&7<a;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a--)}catch(c){}return b?(a=b.GetVariable("$version").split(" ")[1].split(","),{major:null!=a[0]?parseInt(a[0]):0,minor:null!=a[1]?parseInt(a[1]):0,rev:null!=a[2]?parseInt(a[2]):0}):{major:0,minor:0,rev:0}}(),n.addOnWindowUnload(function(){var a=function(){};p("object").reverse().style("display","none").forEach(function(b){for(var c in b)if("FlashVars"!=
c&&"function"==typeof b[c])try{b[c]=a}catch(d){}})})):(g=function(a){a=m(a);if(!a)return null;var b,c=a.path;if(a.vars){var d=[];for(b in a.vars)d.push(b+"\x3d"+a.vars[b]);a.params.flashVars=d.join("\x26");delete a.vars}c='\x3cembed type\x3d"application/x-shockwave-flash" src\x3d"'+c+'" id\x3d"'+a.id+'" width\x3d"'+a.width+'" height\x3d"'+a.height+'"'+(a.style?' style\x3d"'+a.style+'" ':"")+'pluginspage\x3d"'+window.location.protocol+'//www.adobe.com/go/getflashplayer" ';if(a.params)for(b in a.params)c+=
" "+b+'\x3d"'+a.params[b]+'"';return{id:a.id,markup:c+" /\x3e"}},f=function(){var a=navigator.plugins["Shockwave Flash"];return a&&a.description?(a=a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."),{major:null!=a[0]?parseInt(a[0]):0,minor:null!=a[1]?parseInt(a[1]):0,rev:null!=a[2]?parseInt(a[2]):0}):{major:0,minor:0,rev:0}}());var e=function(a,b){if(-1<location.href.toLowerCase().indexOf("file://"))throw Error("dojox.embed.Flash can't be run directly from a file. To instatiate the required SWF correctly it must be run from a server, like localHost.");
this.available=f.major;this.minimumVersion=a.minimumVersion||9;this.domNode=this.movie=this.id=null;b&&(b=h.byId(b));setTimeout(d.hitch(this,function(){if(a.expressInstall||this.available&&this.available>=this.minimumVersion)if(a&&b)this.init(a,b);else this.onError("embed.Flash was not provided with the proper arguments.");else if(this.available)this.onError("Flash version detected: "+this.available+" is out of date. Minimum required: "+this.minimumVersion);else this.onError("Flash is not installed.")}),
100)};d.extend(e,{onReady:function(a){},onLoad:function(a){},onError:function(a){},_onload:function(){clearInterval(this._poller);delete this._poller;delete this._pollCount;delete this._pollMax;this.onLoad(this.movie)},init:function(a,b){this.destroy();b=h.byId(b||this.domNode);if(!b)throw Error("dojox.embed.Flash: no domNode reference has been passed.");var c=0;this._poller=null;this._pollCount=0;this._pollMax=15;this.pollTime=100;e.initialized&&(this.id=e.place(a,b),this.domNode=b,setTimeout(d.hitch(this,
function(){this.movie=this.byId(this.id,a.doc);this.onReady(this.movie);this._poller=setInterval(d.hitch(this,function(){try{c=this.movie.PercentLoaded()}catch(a){}if(100==c)this._onload();else if(0==c&&this._pollCount++>this._pollMax)throw clearInterval(this._poller),Error("Building SWF failed.");}),this.pollTime)}),1))},_destroy:function(){try{this.domNode.removeChild(this.movie)}catch(a){}this.id=this.movie=this.domNode=null},destroy:function(){if(this.movie){var a=d.delegate({id:!0,movie:!0,domNode:!0,
onReady:!0,onLoad:!0}),b;for(b in this)a[b]||delete this[b];this._poller?r(this,"Load",this,"_destroy"):this._destroy()}},byId:function(a,b){b=b||document;return b.embeds[a]?b.embeds[a]:b[a]?b[a]:window[a]?window[a]:document[a]?document[a]:null}});d.mixin(e,{minSupported:8,available:f.major,supported:f.major>=f.required,minimumRequired:f.required,version:f,initialized:!1,onInitialize:function(){e.initialized=!0},__ie_markup__:function(a){return g(a)},proxy:function(a,b){k.forEach(b instanceof Array?
b:[b],function(a){this[a]=d.hitch(this,function(){return function(){return eval(this.movie.CallFunction('\x3cinvoke name\x3d"'+a+'" returntype\x3d"javascript"\x3e\x3carguments\x3e'+k.map(arguments,function(a){return __flash__toXML(a)}).join("")+"\x3c/arguments\x3e\x3c/invoke\x3e"))}.apply(this,arguments||[])})},a)}});e.place=function(a,b){var c=g(a);b=h.byId(b);b||(b=l.doc.createElement("div"),b.id=c.id+"-container",l.body().appendChild(b));return c?(b.innerHTML=c.markup,c.id):null};e.onInitialize();
d.setObject("dojox.embed.Flash",e);return e});
//# sourceMappingURL=Flash.js.uncompressed.js.map