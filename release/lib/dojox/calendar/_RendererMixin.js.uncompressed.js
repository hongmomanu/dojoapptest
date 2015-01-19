//>>built
define("dojox/calendar/_RendererMixin",["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-class","dojo/Stateful"],function(l,m,h,k,n){return l("dojox.calendar._RendererMixin",n,{item:null,owner:null,edited:!1,focused:!1,hovered:!1,selected:!1,storeState:!1,moveEnabled:!0,resizeEnabled:!0,_orientation:"vertical",_displayValue:"block",_displayValueMap:{},visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:45,endTimeLabel:50},_setSelectedAttr:function(a){this._setState("selected",
a,"Selected")},_setFocusedAttr:function(a){this._setState("focused",a,"Focused")},_setEditedAttr:function(a){this._setState("edited",a,"Edited")},_setHoveredAttr:function(a){this._setState("hovered",a,"Hovered")},_setStoreStateAttr:function(a){var c=null;switch(a){case "storing":c="Storing";break;case "unstored":c="Unstored";break;default:c=null}var d=this.stateNode||this.domNode;k.remove(d,"Storing");k.remove(d,"Unstored");this._set("storeState",a);null!=c&&k.add(d,c)},_setState:function(a,c,d){this[a]!=
c&&(k[c?"add":"remove"](this.stateNode||this.domNode,d),this._set(a,c))},_setItemAttr:function(a){null==a?(this.item&&this.item.cssClass&&k.remove(this.domNode,this.item.cssClass),this.item=null):(null!=this.item?(this.item.cssClass!=a.cssClass&&this.item.cssClass&&k.remove(this.domNode,this.item.cssClass),this.item=m.mixin(this.item,a)):this.item=a,a.cssClass&&k.add(this.domNode,a.cssClass))},_setText:function(a,c,d){this.owner&&this.owner._setText(a,c,d)},_isElementVisible:function(a,c,d,g){var f,
b=this.visibilityLimits[a];switch(a){case "moveHandle":f=this.moveEnabled;break;case "resizeStartHandle":f=this.mobile?this.resizeEnabled&&!c&&this.edited&&(-1==b||g>b):this.resizeEnabled&&!c&&(-1==b||g>b);break;case "resizeEndHandle":f=this.mobile?this.resizeEnabled&&!d&&this.edited&&(-1==b||g>b):this.resizeEnabled&&!d&&(-1==b||g>b);break;case "startTimeLabel":f=this.mobile?!c&&(!this.edited||this.edited&&(-1==b||g>b)):!c&&(-1==b||g>b);break;case "endTimeLabel":f=this.edited&&!d&&(-1==b||g>b);break;
case "summaryLabel":f=this.mobile?!this.edited||this.edited&&(-1==b||g>b):-1==b||g>b}return f},_formatTime:function(a,c){if(this.owner){var d=this.owner.get("formatItemTimeFunc");if(null!=d&&"function"===typeof d)return d(c,a,this.owner,this.item)}return a.dateLocaleModule.format(c,{selector:"time"})},getDisplayValue:function(a){return this._displayValue},updateRendering:function(a,c){c=c||this.item.h;a=a||this.item.w;if(c||a){this.item.h=c;this.item.w=a;var d="vertical"==this._orientation?c:a,g=
this.owner.renderData,f=0!=g.dateModule.compare(this.item.range[0],this.item.startTime),b=0!=g.dateModule.compare(this.item.range[1],this.item.endTime),e;null!=this.beforeIcon&&(e="horizontal"!=this._orientation||this.isLeftToRight()?f:b,h.set(this.beforeIcon,"display",e?this.getDisplayValue("beforeIcon"):"none"));null!=this.afterIcon&&(e="horizontal"!=this._orientation||this.isLeftToRight()?b:f,h.set(this.afterIcon,"display",e?this.getDisplayValue("afterIcon"):"none"));this.moveHandle&&(e=this._isElementVisible("moveHandle",
f,b,d),h.set(this.moveHandle,"display",e?this.getDisplayValue("moveHandle"):"none"));this.resizeStartHandle&&(e=this._isElementVisible("resizeStartHandle",f,b,d),h.set(this.resizeStartHandle,"display",e?this.getDisplayValue("resizeStartHandle"):"none"));this.resizeEndHandle&&(e=this._isElementVisible("resizeEndHandle",f,b,d),h.set(this.resizeEndHandle,"display",e?this.getDisplayValue("resizeEndHandle"):"none"));this.startTimeLabel&&(e=this._isElementVisible("startTimeLabel",f,b,d),h.set(this.startTimeLabel,
"display",e?this.getDisplayValue("startTimeLabel"):"none"),e&&this._setText(this.startTimeLabel,this._formatTime(g,this.item.startTime)));this.endTimeLabel&&(e=this._isElementVisible("endTimeLabel",f,b,d),h.set(this.endTimeLabel,"display",e?this.getDisplayValue("endTimeLabel"):"none"),e&&this._setText(this.endTimeLabel,this._formatTime(g,this.item.endTime)));this.summaryLabel&&(e=this._isElementVisible("summaryLabel",f,b,d),h.set(this.summaryLabel,"display",e?this.getDisplayValue("summaryLabel"):
"none"),e&&this._setText(this.summaryLabel,this.item.summary,!0))}}})});
//# sourceMappingURL=_RendererMixin.js.uncompressed.js.map