//>>built
define("dojox/mobile/TextBox","dojo/_base/declare dojo/dom-construct dijit/_WidgetBase dijit/form/_FormValueMixin dijit/form/_TextBoxMixin dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/TextBox".split(" "),function(c,e,b,f,g,d,h){b=c(d("dojo-bidi")?"dojox.mobile.NonBidiTextBox":"dojox.mobile.TextBox",[b,f,g],{baseClass:"mblTextBox",_setTypeAttr:null,_setPlaceHolderAttr:function(a){a=this._cv?this._cv(a):a;this._set("placeHolder",a);this.textbox.setAttribute("placeholder",a)},buildRendering:function(){this.srcNodeRef||
(this.srcNodeRef=e.create("input",{type:this.type}));this.inherited(arguments);this.textbox=this.focusNode=this.domNode},postCreate:function(){this.inherited(arguments);this.connect(this.textbox,"onmouseup",function(){this._mouseIsDown=!1});this.connect(this.textbox,"onmousedown",function(){this._mouseIsDown=!0});this.connect(this.textbox,"onfocus",function(a){this._onFocus(this._mouseIsDown?"mouse":a);this._mouseIsDown=!1});this.connect(this.textbox,"onblur","_onBlur")}});return d("dojo-bidi")?c("dojox.mobile.TextBox",
[b,h]):b});
//# sourceMappingURL=TextBox.js.uncompressed.js.map