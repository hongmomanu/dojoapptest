//>>built
require({cache:{"url:dojox/calc/templates/FuncGen.html":'\x3cdiv style\x3d"border:1px solid black;"\x3e\n\t\x3cselect data-dojo-type\x3d"dijit.form.ComboBox" placeholder\x3d"functionName" data-dojo-attach-point\x3d\'combo\' style\x3d"width:45%;" class\x3d"dojoxCalcFuncGenNameBox" data-dojo-attach-event\x3d\'onChange:onSelect\'\x3e\x3c/select\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"arguments" class\x3d"dojoxCalcFuncGenTextBox" style\x3d"width:50%;" data-dojo-attach-point\x3d\'args\' /\x3e\n\t\x3cBR\x3e\n\t\x3cTEXTAREA data-dojo-type\x3d"dijit.form.SimpleTextarea" placeholder\x3d"function body" class\x3d"dojoxCalcFuncGenTextArea" style\x3d"text-align:left;width:95%;" rows\x3d10 data-dojo-attach-point\x3d\'textarea\' value\x3d"" data-dojo-attach-event\x3d\'onClick:readyStatus\'\x3e\x3c/TEXTAREA\x3e\n\t\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenSave" data-dojo-attach-point\x3d\'saveButton\' label\x3d"Save" data-dojo-attach-event\x3d\'onClick:onSaved\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenReset" data-dojo-attach-point\x3d\'resetButton\' label\x3d"Reset" data-dojo-attach-event\x3d\'onClick:onReset\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenClear" data-dojo-attach-point\x3d\'clearButton\' label\x3d"Clear" data-dojo-attach-event\x3d\'onClick:onClear\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenClose" data-dojo-attach-point\x3d\'closeButton\' label\x3d"Close" /\x3e\n\t\x3cBR\x3e\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenDelete" data-dojo-attach-point\x3d\'deleteButton\' label\x3d"Delete" data-dojo-attach-event\x3d\'onClick:onDelete\' /\x3e\n\t\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.TextBox" style\x3d"width:45%;" data-dojo-attach-point\x3d\'status\' class\x3d"dojoxCalcFuncGenStatusTextBox" readonly value\x3d"Ready" /\x3e\n\x3c/div\x3e\n'}});
require({cache:{"url:dojox/calc/templates/FuncGen.html":'\x3cdiv style\x3d"border:1px solid black;"\x3e\n\t\x3cselect data-dojo-type\x3d"dijit.form.ComboBox" placeholder\x3d"functionName" data-dojo-attach-point\x3d\'combo\' style\x3d"width:45%;" class\x3d"dojoxCalcFuncGenNameBox" data-dojo-attach-event\x3d\'onChange:onSelect\'\x3e\x3c/select\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"arguments" class\x3d"dojoxCalcFuncGenTextBox" style\x3d"width:50%;" data-dojo-attach-point\x3d\'args\' /\x3e\n\t\x3cBR\x3e\n\t\x3cTEXTAREA data-dojo-type\x3d"dijit.form.SimpleTextarea" placeholder\x3d"function body" class\x3d"dojoxCalcFuncGenTextArea" style\x3d"text-align:left;width:95%;" rows\x3d10 data-dojo-attach-point\x3d\'textarea\' value\x3d"" data-dojo-attach-event\x3d\'onClick:readyStatus\'\x3e\x3c/TEXTAREA\x3e\n\t\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenSave" data-dojo-attach-point\x3d\'saveButton\' label\x3d"Save" data-dojo-attach-event\x3d\'onClick:onSaved\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenReset" data-dojo-attach-point\x3d\'resetButton\' label\x3d"Reset" data-dojo-attach-event\x3d\'onClick:onReset\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenClear" data-dojo-attach-point\x3d\'clearButton\' label\x3d"Clear" data-dojo-attach-event\x3d\'onClick:onClear\' /\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenClose" data-dojo-attach-point\x3d\'closeButton\' label\x3d"Close" /\x3e\n\t\x3cBR\x3e\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.Button" class\x3d"dojoxCalcFuncGenDelete" data-dojo-attach-point\x3d\'deleteButton\' label\x3d"Delete" data-dojo-attach-event\x3d\'onClick:onDelete\' /\x3e\n\t\x3cBR\x3e\n\t\x3cinput data-dojo-type\x3d"dijit.form.TextBox" style\x3d"width:45%;" data-dojo-attach-point\x3d\'status\' class\x3d"dojoxCalcFuncGenStatusTextBox" readonly value\x3d"Ready" /\x3e\n\x3c/div\x3e\n'}});
define("dojox/calc/FuncGen","dojo/_base/declare dojo/_base/lang dojo/dom-style dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/_TemplatedMixin dojox/math/_base dijit/registry dojo/text!./templates/FuncGen.html dojox/calc/_Executor dijit/form/ComboBox dijit/form/SimpleTextarea dijit/form/Button dijit/form/TextBox".split(" "),function(b,c,d,e,f,g,m,h,k,l){b=b("dojox.calc.FuncGen",[e,g,f],{templateString:k,onSelect:function(){this.reset()},onClear:function(){confirm("Do you want to clear the name, argument, and body text?")&&
this.clear()},saveFunction:function(a,b,c){},onSaved:function(){},clear:function(){this.textarea.set("value","");this.args.set("value","");this.combo.set("value","")},reset:function(){this.combo.get("value")in this.functions&&(this.textarea.set("value",this.functions[this.combo.get("value")].body),this.args.set("value",this.functions[this.combo.get("value")].args))},onReset:function(){this.combo.get("value")in this.functions&&confirm("Do you want to reset this function?")&&(this.reset(),this.status.set("value",
"The function has been reset to its last save point."))},deleteThing:function(a){this.writeStore.isItem(a)&&(this.writeStore.deleteItem(a),this.writeStore.save())},deleteFunction:function(a){},onDelete:function(){var a;(a=this.combo.get("value"))in this.functions?confirm("Do you want to delete this function?")&&(this.writeStore.deleteItem(this.combo.item),this.writeStore.save(),this.deleteFunction(a),delete this.functions[a],this.clear()):this.status.set("value","Function cannot be deleted, it isn't saved.")},
readyStatus:function(){this.status.set("value","Ready")},writeStore:null,readStore:null,functions:null,startup:function(){this.combo.set("store",this.writeStore);this.inherited(arguments);var a=h.getEnclosingWidget(this.domNode.parentNode);a&&"function"==typeof a.close?this.closeButton.set("onClick",c.hitch(a,"close")):d.set(this.closeButton.domNode,{display:"none"})}});return c.mixin(l,{FuncGen:b})});
//# sourceMappingURL=FuncGen.js.uncompressed.js.map