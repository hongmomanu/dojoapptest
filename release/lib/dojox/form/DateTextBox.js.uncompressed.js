//>>built
define("dojox/form/DateTextBox",["dojo/_base/kernel","dojo/dom-style","dojox/widget/Calendar","dijit/form/_DateTimeTextBox","dojo/_base/declare"],function(a,b,c,d,e){a.experimental("dojox/form/DateTextBox");return e("dojox.form.DateTextBox",d,{baseClass:"dijitTextBox dijitComboBox dojoxDateTextBox",popupClass:c,_selector:"date",openDropDown:function(){this.inherited(arguments);b.set(this.dropDown.domNode.parentNode,"position","absolute")}})});
//# sourceMappingURL=DateTextBox.js.uncompressed.js.map