//>>built
require({cache:{"url:dojox/form/resources/PasswordValidator.html":'\x3cdiv dojoAttachPoint\x3d"containerNode"\x3e\n\t\x3cinput type\x3d"hidden" name\x3d"${name}" value\x3d"" dojoAttachPoint\x3d"focusNode" /\x3e\n\x3c/div\x3e'}});require({cache:{"url:dojox/form/resources/PasswordValidator.html":'\x3cdiv dojoAttachPoint\x3d"containerNode"\x3e\n\t\x3cinput type\x3d"hidden" name\x3d"${name}" value\x3d"" dojoAttachPoint\x3d"focusNode" /\x3e\n\x3c/div\x3e'}});
define("dojox/form/PasswordValidator","dojo/_base/array dojo/_base/lang dojo/dom-attr dojo/i18n dojo/query dojo/keys dijit/form/_FormValueWidget dijit/form/ValidationTextBox dojo/text!./resources/PasswordValidator.html dojo/i18n!./nls/PasswordValidator dojo/_base/declare".split(" "),function(c,e,g,l,m,n,p,h,q,t,d){e=d("dojox.form._ChildTextBox",h,{containerWidget:null,type:"password",reset:function(){h.prototype._setValueAttr.call(this,"",!0);this._hasBeenBlurred=!1},postCreate:function(){this.inherited(arguments);
this.name||g.remove(this.focusNode,"name");this.connect(this.focusNode,"onkeypress","_onChildKeyPress")},_onChildKeyPress:function(a){a&&a.keyCode==n.ENTER&&this._setBlurValue()}});var k=d("dojox.form._OldPWBox",e,{_isPWValid:!1,_setValueAttr:function(a,b){""===a&&(a=k.superclass.attr.call(this,"value"));null!==b&&(this._isPWValid=this.containerWidget.pwCheck(a));this.inherited(arguments);this.containerWidget._childValueAttr(this.containerWidget._inputWidgets[1].get("value"))},isValid:function(a){return this.inherited("isValid",
arguments)&&this._isPWValid},_update:function(a){this._hasBeenBlurred&&this.validate(!0);this._onMouse(a)},_getValueAttr:function(){return this.containerWidget._started&&this.containerWidget.isValid()?this.inherited(arguments):""},_setBlurValue:function(){var a=h.prototype._getValueAttr.call(this);this._setValueAttr(a,this.isValid?this.isValid():!0)}}),r=d("dojox.form._NewPWBox",e,{required:!0,onChange:function(){this.containerWidget._inputWidgets[2].validate(!1);this.inherited(arguments)}}),s=d("dojox.form._VerifyPWBox",
e,{isValid:function(a){return this.inherited("isValid",arguments)&&this.get("value")==this.containerWidget._inputWidgets[1].get("value")}});return d("dojox.form.PasswordValidator",p,{required:!0,_inputWidgets:null,oldName:"",templateString:q,_hasBeenBlurred:!1,isValid:function(a){return c.every(this._inputWidgets,function(a){a&&a._setStateClass&&a._setStateClass();return!a||a.isValid()})},validate:function(a){return c.every(c.map(this._inputWidgets,function(a){return a&&a.validate?(a._hasBeenBlurred=
a._hasBeenBlurred||this._hasBeenBlurred,a.validate()):!0},this),function(a){return a})},reset:function(){this._hasBeenBlurred=!1;c.forEach(this._inputWidgets,function(a){a&&a.reset&&a.reset()},this)},_createSubWidgets:function(){var a=this._inputWidgets,b=l.getLocalization("dojox.form","PasswordValidator",this.lang);c.forEach(a,function(c,d){if(c){var f={containerWidget:this},e;0===d?(f.name=this.oldName,f.invalidMessage=b.badPasswordMessage,e=k):1===d?(f.required=this.required,e=r):2===d&&(f.invalidMessage=
b.nomatchMessage,e=s);a[d]=new e(f,c)}},this)},pwCheck:function(a){return!1},postCreate:function(){this.inherited(arguments);var a=this._inputWidgets=[];c.forEach(["old","new","verify"],function(b){a.push(m("input[pwType\x3d"+b+"]",this.containerNode)[0])},this);if(!a[1]||!a[2])throw Error('Need at least pwType\x3d"new" and pwType\x3d"verify"');if(this.oldName&&!a[0])throw Error('Need to specify pwType\x3d"old" if using oldName');this.containerNode=this.domNode;this._createSubWidgets();this.connect(this._inputWidgets[1],
"_setValueAttr","_childValueAttr");this.connect(this._inputWidgets[2],"_setValueAttr","_childValueAttr")},_childValueAttr:function(a){this.set("value",this.isValid()?a:"")},_setDisabledAttr:function(a){this.inherited(arguments);c.forEach(this._inputWidgets,function(b){b&&b.set&&b.set("disabled",a)})},_setRequiredAttribute:function(a){this.required=a;g.set(this.focusNode,"required",a);this.focusNode.setAttribute("aria-required",a);this._refreshState();c.forEach(this._inputWidgets,function(b){b&&b.set&&
b.set("required",a)})},_setValueAttr:function(a){this.inherited(arguments);g.set(this.focusNode,"value",a)},_getValueAttr:function(){return this.value||""},focus:function(){var a=!1;c.forEach(this._inputWidgets,function(b){b&&(!b.isValid()&&!a)&&(b.focus(),a=!0)});a||this._inputWidgets[1].focus()}})});
//# sourceMappingURL=PasswordValidator.js.uncompressed.js.map