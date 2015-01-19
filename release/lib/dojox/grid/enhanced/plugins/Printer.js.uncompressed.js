//>>built
define("dojox/grid/enhanced/plugins/Printer","dojo/_base/declare dojo/_base/html dojo/_base/Deferred dojo/_base/lang dojo/_base/sniff dojo/_base/xhr dojo/_base/array dojo/query dojo/DeferredList ../_Plugin ../../EnhancedGrid ./exporter/TableWriter".split(" "),function(k,g,p,e,l,q,m,n,r,s,t,u){k=k("dojox.grid.enhanced.plugins.Printer",s,{name:"printer",constructor:function(a){this.grid=a;this._mixinGrid(a);a.setExportFormatter(function(a,d,h,c){return d.format(h,c)})},_mixinGrid:function(){var a=this.grid;
a.printGrid=e.hitch(this,this.printGrid);a.printSelected=e.hitch(this,this.printSelected);a.exportToHTML=e.hitch(this,this.exportToHTML);a.exportSelectedToHTML=e.hitch(this,this.exportSelectedToHTML);a.normalizePrintedGrid=e.hitch(this,this.normalizeRowHeight)},printGrid:function(a){this.exportToHTML(a,e.hitch(this,this._print))},printSelected:function(a){this.exportSelectedToHTML(a,e.hitch(this,this._print))},exportToHTML:function(a,b){a=this._formalizeArgs(a);var d=this;this.grid.exportGrid("table",
a,function(h){d._wrapHTML(a.title,a.cssFiles,a.titleInBody+h).then(b)})},exportSelectedToHTML:function(a,b){a=this._formalizeArgs(a);var d=this;this.grid.exportSelected("table",a.writerArgs,function(h){d._wrapHTML(a.title,a.cssFiles,a.titleInBody+h).then(b)})},_loadCSSFiles:function(a){a=m.map(a,function(a){a=e.trim(a);if(".css"===a.substring(a.length-4).toLowerCase())return q.get({url:a});var d=new p;d.callback(a);return d});return r.prototype.gatherResults(a)},_print:function(a){var b,d=this,h=
function(b){b=b.document;b.open();b.write(a);b.close();d.normalizeRowHeight(b)};if(window.print)if(l("chrome")||l("opera"))b=window.open("javascript: ''","","status\x3d0,menubar\x3d0,location\x3d0,toolbar\x3d0,width\x3d1,height\x3d1,resizable\x3d0,scrollbars\x3d0"),h(b),b.print(),b.close();else{b=this._printFrame;var c=this.grid.domNode;if(!b){var f=c.id+"_print_frame";if(!(b=g.byId(f)))b=g.create("iframe"),b.id=f,b.frameBorder=0,g.style(b,{width:"1px",height:"1px",position:"absolute",right:0,bottom:0,
border:"none",overflow:"hidden"}),l("ie")||g.style(b,"visibility","hidden"),c.appendChild(b);this._printFrame=b}b=b.contentWindow;h(b);b.focus();b.print()}},_wrapHTML:function(a,b,d){return this._loadCSSFiles(b).then(function(b){var c,f=['\x3c!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"\x3e',"\x3chtml ",g._isBodyLtr()?"":'dir\x3d"rtl"',"\x3e\x3chead\x3e\x3ctitle\x3e",a,'\x3c/title\x3e\x3cmeta http-equiv\x3d"Content-Type" content\x3d"text/html; charset\x3dutf-8"\x3e\x3c/meta\x3e'];
for(c=0;c<b.length;++c)f.push('\x3cstyle type\x3d"text/css"\x3e',b[c],"\x3c/style\x3e");f.push("\x3c/head\x3e");0>d.search(/^\s*<body/i)&&(d="\x3cbody\x3e"+d+"\x3c/body\x3e");f.push(d,"\x3c/html\x3e");return f.join("")})},normalizeRowHeight:function(a){a=n(".grid_view",a.body);var b=m.map(a,function(a){return n(".grid_header",a)[0]}),d=m.map(a,function(a){return n(".grid_row",a)}),h=d[0].length,c,f,e=0;for(c=a.length-1;0<=c;--c)f=g.contentBox(b[c]).h,f>e&&(e=f);for(c=a.length-1;0<=c;--c)g.style(b[c],
"height",e+"px");for(b=0;b<h;++b){e=0;for(c=a.length-1;0<=c;--c)f=g.contentBox(d[c][b]).h,f>e&&(e=f);for(c=a.length-1;0<=c;--c)g.style(d[c][b],"height",e+"px")}d=0;h=g._isBodyLtr();for(c=0;c<a.length;++c)g.style(a[c],h?"left":"right",d+"px"),d+=g.marginBox(a[c]).w},_formalizeArgs:function(a){a=a&&e.isObject(a)?a:{};a.title=String(a.title)||"";e.isArray(a.cssFiles)||(a.cssFiles=[a.cssFiles]);a.titleInBody=a.title?["\x3ch1\x3e",a.title,"\x3c/h1\x3e"].join(""):"";return a}});t.registerPlugin(k,{dependency:["exporter"]});
return k});
//# sourceMappingURL=Printer.js.uncompressed.js.map