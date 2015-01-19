//>>built
define("dojox/form/MultiComboBox",["dojo/_base/kernel","dijit/form/ValidationTextBox","dijit/form/ComboBoxMixin","dojo/_base/declare"],function(c,d,e,f){c.experimental("dojox.form.MultiComboBox");return f("dojox.form.MultiComboBox",[d,e],{delimiter:",",_previousMatches:!1,_setValueAttr:function(a){this.delimiter&&0!=a.length&&(a=a+this.delimiter+" ",arguments[0]=this._addPreviousMatches(a));this.inherited(arguments)},_addPreviousMatches:function(a){this._previousMatches&&(a.match(RegExp("^"+this._previousMatches))||
(a=this._previousMatches+a),a=this._cleanupDelimiters(a));return a},_cleanupDelimiters:function(a){this.delimiter&&(a=a.replace(/  +/," "),a=a.replace(RegExp("^ *"+this.delimiter+"* *"),""),a=a.replace(RegExp(this.delimiter+" *"+this.delimiter),this.delimiter));return a},_autoCompleteText:function(a){arguments[0]=this._addPreviousMatches(a);this.inherited(arguments)},_startSearch:function(a){a=this._cleanupDelimiters(a);var b=RegExp("^.*"+this.delimiter+" *");if(this._previousMatches=a.match(b))arguments[0]=
a.replace(b,"");this.inherited(arguments)}})});
//# sourceMappingURL=MultiComboBox.js.uncompressed.js.map