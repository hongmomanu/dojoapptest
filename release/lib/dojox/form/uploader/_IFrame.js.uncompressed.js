//>>built
define("dojox/form/uploader/_IFrame","dojo/query dojo/dom-construct dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-form dojo/request/iframe".split(" "),function(l,d,e,m,h,n,k){return e("dojox.form.uploader._IFrame",[],{postMixInProperties:function(){this.inherited(arguments);"iframe"===this.uploadType&&(this.uploadType="iframe",this.upload=this.uploadIFrame)},uploadIFrame:function(b){var g={},c;this.getForm();var e=this.getUrl(),f=this;b=b||{};b.uploadType=this.uploadType;c=d.place('\x3cform enctype\x3d"multipart/form-data" method\x3d"post"\x3e\x3c/form\x3e',
this.domNode);h.forEach(this._inputs,function(a,b){""!==a.value&&(c.appendChild(a),g[a.name]=a.value)},this);if(b)for(nm in b)void 0===g[nm]&&d.create("input",{name:nm,value:b[nm],type:"hidden"},c);k.post(e,{form:c,handleAs:"json",content:b}).then(function(a){d.destroy(c);if(a.ERROR||a.error)f.onError(a);else f.onComplete(a)},function(a){console.error("error parsing server result",a);d.destroy(c);f.onError(a)})}})});
//# sourceMappingURL=_IFrame.js.uncompressed.js.map