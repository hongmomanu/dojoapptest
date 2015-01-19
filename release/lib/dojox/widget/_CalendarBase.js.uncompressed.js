//>>built
require({cache:{"url:dojox/widget/Calendar/Calendar.html":'\x3cdiv class\x3d"dojoxCalendar"\x3e\n    \x3cdiv tabindex\x3d"0" class\x3d"dojoxCalendarContainer" style\x3d"visibility: visible;" dojoAttachPoint\x3d"container"\x3e\n\t\t\x3cdiv style\x3d"display:none"\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"previousYearLabelNode"\x3e\x3c/div\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"nextYearLabelNode"\x3e\x3c/div\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"monthLabelSpacer"\x3e\x3c/div\x3e\n\t\t\x3c/div\x3e\n        \x3cdiv class\x3d"dojoxCalendarHeader"\x3e\n            \x3cdiv\x3e\n                \x3cdiv class\x3d"dojoxCalendarDecrease" dojoAttachPoint\x3d"decrementMonth"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d""\x3e\n                \x3cdiv class\x3d"dojoxCalendarIncrease" dojoAttachPoint\x3d"incrementMonth"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d"dojoxCalendarTitle" dojoAttachPoint\x3d"header" dojoAttachEvent\x3d"onclick: onHeaderClick"\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"dojoxCalendarBody" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n        \x3cdiv class\x3d""\x3e\n            \x3cdiv class\x3d"dojoxCalendarFooter" dojoAttachPoint\x3d"footer"\x3e                        \n            \x3c/div\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
require({cache:{"url:dojox/widget/Calendar/Calendar.html":'\x3cdiv class\x3d"dojoxCalendar"\x3e\n    \x3cdiv tabindex\x3d"0" class\x3d"dojoxCalendarContainer" style\x3d"visibility: visible;" dojoAttachPoint\x3d"container"\x3e\n\t\t\x3cdiv style\x3d"display:none"\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"previousYearLabelNode"\x3e\x3c/div\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"nextYearLabelNode"\x3e\x3c/div\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"monthLabelSpacer"\x3e\x3c/div\x3e\n\t\t\x3c/div\x3e\n        \x3cdiv class\x3d"dojoxCalendarHeader"\x3e\n            \x3cdiv\x3e\n                \x3cdiv class\x3d"dojoxCalendarDecrease" dojoAttachPoint\x3d"decrementMonth"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d""\x3e\n                \x3cdiv class\x3d"dojoxCalendarIncrease" dojoAttachPoint\x3d"incrementMonth"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d"dojoxCalendarTitle" dojoAttachPoint\x3d"header" dojoAttachEvent\x3d"onclick: onHeaderClick"\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"dojoxCalendarBody" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n        \x3cdiv class\x3d""\x3e\n            \x3cdiv class\x3d"dojoxCalendarFooter" dojoAttachPoint\x3d"footer"\x3e                        \n            \x3c/div\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/widget/_CalendarBase","dijit/_WidgetBase dijit/_TemplatedMixin dijit/_Container dijit/_WidgetsInTemplateMixin dijit/typematic dojo/_base/declare dojo/date dojo/date/stamp dojo/date/locale dojo/dom-style dojo/dom-class dojo/_base/fx dojo/on dojo/_base/array dojo/_base/lang dojo/text!./Calendar/Calendar.html".split(" "),function(m,n,p,q,r,s,l,h,t,d,k,g,u,v,e,w){return s("dojox.widget._CalendarBase",[m,n,p,q],{templateString:w,_views:null,useFx:!0,value:new Date,constraints:null,footerFormat:"medium",
constructor:function(){this._views=[];this.value=new Date},_setConstraintsAttr:function(a){if(a=this.constraints=a)"string"==typeof a.min&&(a.min=h.fromISOString(a.min)),"string"==typeof a.max&&(a.max=h.fromISOString(a.max))},postMixInProperties:function(){this.inherited(arguments);this.value=this.parseInitialValue(this.value)},parseInitialValue:function(a){if(!a||-1===a)return new Date;!a.getFullYear&&!isNaN(a)&&("string"==typeof this.value&&(a=parseInt(a)),a=this._makeDate(a));return a},_makeDate:function(a){return a},
postCreate:function(){this.displayMonth=new Date(this.get("value"));this._isInvalidDate(this.displayMonth)&&(this.displayMonth=new Date);var a={parent:this,_getValueAttr:e.hitch(this,function(){return new Date(this._internalValue||this.value)}),_getDisplayMonthAttr:e.hitch(this,function(){return new Date(this.displayMonth)}),_getConstraintsAttr:e.hitch(this,function(){return this.constraints}),getLang:e.hitch(this,function(){return this.lang}),isDisabledDate:e.hitch(this,this.isDisabledDate),getClassForDate:e.hitch(this,
this.getClassForDate),addFx:this.useFx?e.hitch(this,this.addFx):function(){}};v.forEach(this._views,function(b){b=(new b(a)).placeAt(this);var c=b.getHeader();c&&(this.header.appendChild(c),d.set(c,"display","none"));d.set(b.domNode,"visibility","hidden");b.on("valueSelected",e.hitch(this,"_onDateSelected"));b.set("value",this.get("value"))},this);2>this._views.length&&d.set(this.header,"cursor","auto");this.inherited(arguments);this._children=this.getChildren();this._currentChild=0;this.footer.innerHTML=
"Today: "+t.format(new Date,{formatLength:this.footerFormat,selector:"date",locale:this.lang});u(this.footer,"click",e.hitch(this,"goToToday"));var b=this._children[0];d.set(b.domNode,"top","0px");d.set(b.domNode,"visibility","visible");b.getHeader()&&d.set(b.getHeader(),"display","");k.toggle(this.container,"no-header",!b.useHeader);b.onDisplay();var c=this,b=function(a,b,d){r.addMouseListener(c[a],c,function(a){0<=a&&c._adjustDisplay(b,d)},0.8,500)};b("incrementMonth","month",1);b("decrementMonth",
"month",-1);this._updateTitleStyle()},addFx:function(a,b){},_isInvalidDate:function(a){return!a||isNaN(a)||"object"!=typeof a||a.toString()==this._invalidDate},_setValueAttr:function(a){a||(a=new Date);a.getFullYear||(a=h.fromISOString(a+""));return this._isInvalidDate(a)?!1:!this.value||l.compare(a,this.value)?(a=new Date(a),this.displayMonth=new Date(a),this._internalValue=a,!this.isDisabledDate(a,this.lang)&&0==this._currentChild&&(this.value=a,this.onChange(a)),this._children&&0<this._children.length&&
this._children[this._currentChild].set("value",this.value),!0):!1},isDisabledDate:function(a,b){var c=this.constraints,d=l.compare;return c&&(c.min&&0<d(c.min,a,"date")||c.max&&0>d(c.max,a,"date"))},onValueSelected:function(a){},_onDateSelected:function(a,b,c){this.displayMonth=a;this.set("value",a);this._transitionVert(-1)||(!b&&0!==b&&(b=this.get("value")),this.onValueSelected(b))},onChange:function(a){},onHeaderClick:function(a){this._transitionVert(1)},goToToday:function(){this.set("value",new Date);
this.onValueSelected(this.get("value"))},_transitionVert:function(a){var b=this._children[this._currentChild],c=this._children[this._currentChild+a];if(!c)return!1;d.set(c.domNode,"visibility","visible");var f=d.get(this.containerNode,"height");c.set("value",this.displayMonth);b.header&&d.set(b.header,"display","none");c.header&&d.set(c.header,"display","");d.set(c.domNode,"top",-1*f+"px");d.set(c.domNode,"visibility","visible");this._currentChild+=a;a*=f;d.set(c.domNode,"top",-1*a+"px");a=g.animateProperty({node:b.domNode,
properties:{top:a},onEnd:function(){d.set(b.domNode,"visibility","hidden")}});f=g.animateProperty({node:c.domNode,properties:{top:0},onEnd:function(){c.onDisplay()}});k.toggle(this.container,"no-header",!c.useHeader);a.play();f.play();b.onBeforeUnDisplay();c.onBeforeDisplay();this._updateTitleStyle();return!0},_updateTitleStyle:function(){k.toggle(this.header,"navToPanel",this._currentChild<this._children.length-1)},_slideTable:function(a,b,c){a=a.domNode;var f=a.cloneNode(!0),e=d.get(a,"width");
a.parentNode.appendChild(f);d.set(a,"left",e*b+"px");c();b=g.animateProperty({node:f,properties:{left:-1*e*b},duration:500,onEnd:function(){f.parentNode.removeChild(f)}});c=g.animateProperty({node:a,properties:{left:0},duration:500});b.play();c.play()},_addView:function(a){this._views.push(a)},getClassForDate:function(a,b){},_adjustDisplay:function(a,b,c){var d=this._children[this._currentChild],e=this.displayMonth=d.adjustDate(this.displayMonth,b);this._slideTable(d,b,function(){d.set("value",e)})}})});
//# sourceMappingURL=_CalendarBase.js.uncompressed.js.map