//>>built
define("dojox/form/DayTextBox","dojo/_base/kernel dojo/_base/lang dojox/widget/DailyCalendar dijit/form/TextBox ./DateTextBox dojo/_base/declare".split(" "),function(f,d,g,e,h,k){f.experimental("dojox/form/DayTextBox");return k("dojox.form.DayTextBox",h,{popupClass:g,parse:function(a){return a},format:function(a){return a.getDate?a.getDate():a},validator:function(a){var b=Number(a),c=/(^-?\d\d*$)/.test(String(a));return""==a||null==a||c&&1<=b&&31>=b},_setValueAttr:function(a,b,c){a&&a.getDate&&(a=
a.getDate());e.prototype._setValueAttr.call(this,a,b,c)},openDropDown:function(){this.inherited(arguments);this.dropDown.onValueSelected=d.hitch(this,function(a){this.focus();setTimeout(d.hitch(this,"closeDropDown"),1);e.prototype._setValueAttr.call(this,String(a.getDate()),!0,String(a.getDate()))})}})});
//# sourceMappingURL=DayTextBox.js.uncompressed.js.map