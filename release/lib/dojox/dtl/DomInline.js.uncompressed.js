//>>built
define("dojox/dtl/DomInline",["dojo/_base/lang","./dom","./_base","dijit/_WidgetBase"],function(c,f,d,e){return d.DomInline=c.extend(function(a,b){this.create(a,b)},e.prototype,{context:null,render:function(a){this.context=a||this.context;this.postMixInProperties();a=this.template.render(this.context).getRootNode();a!=this.containerNode&&(this.containerNode.parentNode.replaceChild(a,this.containerNode),this.containerNode=a)},declaredClass:"dojox.dtl.Inline",buildRendering:function(){var a=this.domNode=
document.createElement("div");this.containerNode=a.appendChild(document.createElement("div"));var b=this.srcNodeRef;b.parentNode&&b.parentNode.replaceChild(a,b);this.template=new dojox.dtl.DomTemplate(c.trim(b.text),!0);this.render()},postMixInProperties:function(){this.context=this.context.get===dojox.dtl._Context.prototype.get?this.context:new dojox.dtl.Context(this.context)}})});
//# sourceMappingURL=DomInline.js.uncompressed.js.map