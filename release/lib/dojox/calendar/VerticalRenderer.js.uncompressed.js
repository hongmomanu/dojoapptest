//>>built
require({cache:{"url:dojox/calendar/templates/VerticalRenderer.html":'\x3cdiv class\x3d"dojoxCalendarEvent dojoxCalendarVertical" onselectstart\x3d"return false;"\x3e\n\t\x3cdiv class\x3d"bg"\x3e\x3c/div\x3e\n\t\x3cdl style\x3d"width:100%;"\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"beforeIcon" class\x3d"beforeIcon"\x3e\x26#x25B2;\x3c/dd\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"startTimeLabel" class\x3d"startTime"\x3e\x3c/dd\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"summaryLabel" class\x3d"summary"\x3e\x3c/dd\x3e\n\t\x3c/dl\x3e\t\n\t\x3cspan data-dojo-attach-point\x3d"afterIcon" class\x3d"afterIcon"\x3e\x26#x25BC;\x3c/span\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"moveHandle" class\x3d"handle moveHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeStartHandle" class\x3d"handle resizeStartHandle"\x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeEndHandle" class\x3d"handle resizeEndHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"endTimeLabel" class\x3d"endTime"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
require({cache:{"url:dojox/calendar/templates/VerticalRenderer.html":'\x3cdiv class\x3d"dojoxCalendarEvent dojoxCalendarVertical" onselectstart\x3d"return false;"\x3e\n\t\x3cdiv class\x3d"bg"\x3e\x3c/div\x3e\n\t\x3cdl style\x3d"width:100%;"\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"beforeIcon" class\x3d"beforeIcon"\x3e\x26#x25B2;\x3c/dd\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"startTimeLabel" class\x3d"startTime"\x3e\x3c/dd\x3e\n\t\t\x3cdd data-dojo-attach-point\x3d"summaryLabel" class\x3d"summary"\x3e\x3c/dd\x3e\n\t\x3c/dl\x3e\t\n\t\x3cspan data-dojo-attach-point\x3d"afterIcon" class\x3d"afterIcon"\x3e\x26#x25BC;\x3c/span\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"moveHandle" class\x3d"handle moveHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeStartHandle" class\x3d"handle resizeStartHandle"\x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"resizeEndHandle" class\x3d"handle resizeEndHandle" \x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"endTimeLabel" class\x3d"endTime"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/calendar/VerticalRenderer",["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/VerticalRenderer.html"],function(b,c,d,e,f){return b("dojox.calendar.VerticalRenderer",[c,d,e],{templateString:f,postCreate:function(){this.inherited(arguments);this._applyAttributes()},_isElementVisible:function(b,c,d,e){var a;switch(b){case "startTimeLabel":a=this.item.startTime;if(this.item.allDay||this.owner.isStartOfDay(a))return!1;
break;case "endTimeLabel":if(a=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(a))return!1}return this.inherited(arguments)}})});
//# sourceMappingURL=VerticalRenderer.js.uncompressed.js.map