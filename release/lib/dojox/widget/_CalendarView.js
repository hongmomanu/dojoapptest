//>>built
define("dojox/widget/_CalendarView","dojo/_base/declare dijit/_WidgetBase dojo/dom-construct dojo/query dojo/date dojo/_base/window".split(" "),function(g,h,e,f,k,l){return g("dojox.widget._CalendarView",h,{headerClass:"",useHeader:!0,cloneClass:function(a,b,d){var c=f(a,this.domNode)[0];if(d){d=f(a,this.domNode)[0];for(a=0;a<b;a++)c.parentNode.insertBefore(c.cloneNode(!0),d)}else for(a=0;a<b;a++)c.parentNode.appendChild(c.cloneNode(!0))},_setText:function(a,b){a.innerHTML!=b&&(e.empty(a),a.appendChild(l.doc.createTextNode(b)))},
getHeader:function(){return this.header||(this.header=e.create("span",{"class":this.headerClass}))},onValueSelected:function(a){},adjustDate:function(a,b){return k.add(a,this.datePart,b)},onDisplay:function(){},onBeforeDisplay:function(){},onBeforeUnDisplay:function(){}})});
//# sourceMappingURL=_CalendarView.js.map