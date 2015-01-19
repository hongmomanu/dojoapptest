//>>built
require({cache:{"url:dojox/calendar/templates/HorizontalRenderer.html":'\x3cdiv class\x3d"dojoxCalendarEvent dojoxCalendarHorizontal" onselectstart\x3d"return false;"\x3e\n\t\x3cdiv class\x3d"bg" \x3e\x3c/div\x3e\n\t\x3cdiv style\x3d"position:absolute;left:2px;bottom:2px" data-dojo-attach-point\x3d"beforeIcon" class\x3d"beforeIcon"\x3e\x26#x25C0;\x3c/div\x3e\t\n\t\x3cdiv data-dojo-attach-point\x3d"labelContainer" class\x3d"labels"\x3e\t\t\n\t\t\x3cspan data-dojo-attach-point\x3d"startTimeLabel" class\x3d"startTime"\x3e\x3c/span\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"summaryLabel" class\x3d"summary"\x3e\x3c/span\x3e\n\t\t\x3cspan  data-dojo-attach-point\x3d"endTimeLabel" class\x3d"endTime"\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv style\x3d"position:absolute;right:2px;bottom:2px" data-dojo-attach-point\x3d"afterIcon" class\x3d"afterIcon"\x3e\x26#x25B6;\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"moveHandle" class\x3d"handle moveHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeStartHandle" class\x3d"handle resizeStartHandle"\x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeEndHandle" class\x3d"handle resizeEndHandle" \x3e\x3c/div\x3e\t\n\x3c/div\x3e\n'}});
require({cache:{"url:dojox/calendar/templates/HorizontalRenderer.html":'\x3cdiv class\x3d"dojoxCalendarEvent dojoxCalendarHorizontal" onselectstart\x3d"return false;"\x3e\n\t\x3cdiv class\x3d"bg" \x3e\x3c/div\x3e\n\t\x3cdiv style\x3d"position:absolute;left:2px;bottom:2px" data-dojo-attach-point\x3d"beforeIcon" class\x3d"beforeIcon"\x3e\x26#x25C0;\x3c/div\x3e\t\n\t\x3cdiv data-dojo-attach-point\x3d"labelContainer" class\x3d"labels"\x3e\t\t\n\t\t\x3cspan data-dojo-attach-point\x3d"startTimeLabel" class\x3d"startTime"\x3e\x3c/span\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"summaryLabel" class\x3d"summary"\x3e\x3c/span\x3e\n\t\t\x3cspan  data-dojo-attach-point\x3d"endTimeLabel" class\x3d"endTime"\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv style\x3d"position:absolute;right:2px;bottom:2px" data-dojo-attach-point\x3d"afterIcon" class\x3d"afterIcon"\x3e\x26#x25B6;\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"moveHandle" class\x3d"handle moveHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeStartHandle" class\x3d"handle resizeStartHandle"\x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeEndHandle" class\x3d"handle resizeEndHandle" \x3e\x3c/div\x3e\t\n\x3c/div\x3e\n'}});
define("dojox/calendar/HorizontalRenderer","dojo/_base/declare dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojox/calendar/_RendererMixin dojo/text!./templates/HorizontalRenderer.html".split(" "),function(d,c,g,h,k,l){return d("dojox.calendar.HorizontalRenderer",[g,h,k],{templateString:l,_orientation:"horizontal",visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:32,endTimeLabel:30},_displayValueMap:{beforeIcon:"inline",afterIcon:"inline"},_displayValue:"inline",
arrowPadding:12,_isElementVisible:function(b,e,f,d){var a;a=this.isLeftToRight();"startTimeLabel"==b&&(this.labelContainer&&(a&&f||!a&&e)?c.set(this.labelContainer,"marginRight",this.arrowPadding+"px"):c.set(this.labelContainer,"marginRight",0),this.labelContainer&&(!a&&f||a&&e)?c.set(this.labelContainer,"marginLeft",this.arrowPadding+"px"):c.set(this.labelContainer,"marginLeft",0));switch(b){case "startTimeLabel":a=this.item.startTime;if(this.item.allDay||this.owner.isStartOfDay(a))return!1;break;
case "endTimeLabel":if(a=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(a))return!1}return this.inherited(arguments)},getDisplayValue:function(b){return(b=this._displayValueMap[b])?b:this._displayValue},postCreate:function(){this.inherited(arguments);this._applyAttributes()}})});
//# sourceMappingURL=HorizontalRenderer.js.uncompressed.js.map