//>>built
require({cache:{"url:dojox/widget/MultiSelectCalendar/MultiSelectCalendar.html":'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"dijitCalendarContainer" role\x3d"grid" dojoAttachEvent\x3d"onkeydown: _onKeyDown" aria-labelledby\x3d"${id}_year"\x3e\n\t\x3cthead\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarMonthContainer" valign\x3d"top"\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' dojoAttachPoint\x3d"decrementMonth"\x3e\n\t\t\t\t\x3cimg src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitCalendarIncrementControl dijitCalendarDecrease" role\x3d"presentation"/\x3e\n\t\t\t\t\x3cspan dojoAttachPoint\x3d"decreaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e-\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset\' colspan\x3d"5"\x3e\n\t\t\t\t\x3cdiv dojoType\x3d"dijit.form.DropDownButton" dojoAttachPoint\x3d"monthDropDownButton"\n\t\t\t\t\tid\x3d"${id}_mddb" tabIndex\x3d"-1"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' dojoAttachPoint\x3d"incrementMonth"\x3e\n\t\t\t\t\x3cimg src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitCalendarIncrementControl dijitCalendarIncrease" role\x3d"presentation"/\x3e\n\t\t\t\t\x3cspan dojoAttachPoint\x3d"increaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e+\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e\x3c/span\x3e\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/thead\x3e\n\t\x3ctbody dojoAttachEvent\x3d"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp" class\x3d"dijitReset dijitCalendarBodyContainer"\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e\n\t\t\t\x3ctd class\x3d"dijitReset dijitCalendarDateTemplate" role\x3d"gridcell"\x3e\x3cspan class\x3d"dijitCalendarDateLabel"\x3e\x3c/span\x3e\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tbody\x3e\n\t\x3ctfoot class\x3d"dijitReset dijitCalendarYearContainer"\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd class\x3d\'dijitReset\' valign\x3d"top" colspan\x3d"7"\x3e\n\t\t\t\t\x3ch3 class\x3d"dijitCalendarYearLabel"\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"previousYearLabelNode" class\x3d"dijitInline dijitCalendarPreviousYear"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"currentYearLabelNode" class\x3d"dijitInline dijitCalendarSelectedYear" id\x3d"${id}_year"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"nextYearLabelNode" class\x3d"dijitInline dijitCalendarNextYear"\x3e\x3c/span\x3e\n\t\t\t\t\x3c/h3\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tfoot\x3e\n\x3c/table\x3e'}});
require({cache:{"url:dojox/widget/MultiSelectCalendar/MultiSelectCalendar.html":'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"dijitCalendarContainer" role\x3d"grid" dojoAttachEvent\x3d"onkeydown: _onKeyDown" aria-labelledby\x3d"${id}_year"\x3e\n\t\x3cthead\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarMonthContainer" valign\x3d"top"\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' dojoAttachPoint\x3d"decrementMonth"\x3e\n\t\t\t\t\x3cimg src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitCalendarIncrementControl dijitCalendarDecrease" role\x3d"presentation"/\x3e\n\t\t\t\t\x3cspan dojoAttachPoint\x3d"decreaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e-\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset\' colspan\x3d"5"\x3e\n\t\t\t\t\x3cdiv dojoType\x3d"dijit.form.DropDownButton" dojoAttachPoint\x3d"monthDropDownButton"\n\t\t\t\t\tid\x3d"${id}_mddb" tabIndex\x3d"-1"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' dojoAttachPoint\x3d"incrementMonth"\x3e\n\t\t\t\t\x3cimg src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitCalendarIncrementControl dijitCalendarIncrease" role\x3d"presentation"/\x3e\n\t\t\t\t\x3cspan dojoAttachPoint\x3d"increaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e+\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e\x3c/span\x3e\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/thead\x3e\n\t\x3ctbody dojoAttachEvent\x3d"onclick: _onDayClick, onmouseover: _onDayMouseOver, onmouseout: _onDayMouseOut, onmousedown: _onDayMouseDown, onmouseup: _onDayMouseUp" class\x3d"dijitReset dijitCalendarBodyContainer"\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e\n\t\t\t\x3ctd class\x3d"dijitReset dijitCalendarDateTemplate" role\x3d"gridcell"\x3e\x3cspan class\x3d"dijitCalendarDateLabel"\x3e\x3c/span\x3e\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tbody\x3e\n\t\x3ctfoot class\x3d"dijitReset dijitCalendarYearContainer"\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd class\x3d\'dijitReset\' valign\x3d"top" colspan\x3d"7"\x3e\n\t\t\t\t\x3ch3 class\x3d"dijitCalendarYearLabel"\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"previousYearLabelNode" class\x3d"dijitInline dijitCalendarPreviousYear"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"currentYearLabelNode" class\x3d"dijitInline dijitCalendarSelectedYear" id\x3d"${id}_year"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan dojoAttachPoint\x3d"nextYearLabelNode" class\x3d"dijitInline dijitCalendarNextYear"\x3e\x3c/span\x3e\n\t\t\t\t\x3c/h3\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tfoot\x3e\n\x3c/table\x3e'}});
define("dojox/widget/MultiSelectCalendar","dojo/main dijit dojo/text!./MultiSelectCalendar/MultiSelectCalendar.html dojo/cldr/supplemental dojo/date dojo/date/locale dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_CssStateMixin dijit/form/DropDownButton dijit/typematic".split(" "),function(c,t,k,w,x,y,q,r,s,u,z,A){c.experimental("dojox.widget.MultiSelectCalendar");k=c.declare("dojox.widget.MultiSelectCalendar",[q,r,s,u],{templateString:k,widgetsInTemplate:!0,value:{},datePackage:"dojo.date",
dayWidth:"narrow",tabIndex:"0",returnIsoRanges:!1,currentFocus:new Date,baseClass:"dijitCalendar",cssStateNodes:{decrementMonth:"dijitCalendarArrow",incrementMonth:"dijitCalendarArrow",previousYearLabelNode:"dijitCalendarPreviousYear",nextYearLabelNode:"dijitCalendarNextYear"},_areValidDates:function(a){for(var b in this.value)if(valid=b&&!isNaN(b)&&"object"==typeof a&&b.toString()!=this.constructor.prototype.value.toString(),!valid)return!1;return!0},_getValueAttr:function(){return this.returnIsoRanges?
datesWithRanges=this._returnDatesWithIsoRanges(this._sort()):this._sort()},_setValueAttr:function(a,b){this.value={};if(c.isArray(a))c.forEach(a,function(a,b){if(-1==a.indexOf("/"))this.value[a]=1;else{var f=c.date.stamp.fromISOString(a.substr(0,10)),g=c.date.stamp.fromISOString(a.substr(11,10));this.toggleDate(f,[],[]);0<f-g?this._addToRangeRTL(f,g,[],[]):this._addToRangeLTR(f,g,[],[])}},this),0<a.length&&this.focusOnLastDate(a[a.length-1]);else if(a&&(a=new this.dateClassObj(a)),this._isValidDate(a)&&
(a.setHours(1,0,0,0),!this.isDisabledDate(a,this.lang)&&(dateIndex=c.date.stamp.toISOString(a).substring(0,10),this.value[dateIndex]=1,this.set("currentFocus",a),b||"undefined"==typeof b)))this.onChange(this.get("value")),this.onValueSelected(this.get("value"));this._populateGrid()},focusOnLastDate:function(a){var b;-1==a.indexOf("/")?lastDate=a:(b=new c.date.stamp.fromISOString(a.substr(0,10)),a=new c.date.stamp.fromISOString(a.substr(11,10)),lastDate=0<b-a?b:a);this.set("currentFocus",lastDate)},
_isValidDate:function(a){return a&&!isNaN(a)&&"object"==typeof a&&a.toString()!=this.constructor.prototype.value.toString()},_setText:function(a,b){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(c.doc.createTextNode(b))},_populateGrid:function(){var a=new this.dateClassObj(this.currentFocus);a.setDate(1);var b=a.getDay(),e=this.dateFuncObj.getDaysInMonth(a),d=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(a,"month",-1)),f=new this.dateClassObj,g=c.cldr.supplemental.getFirstDayOfWeek(this.lang);
g>b&&(g-=7);this.listOfNodes=c.query(".dijitCalendarDateTemplate",this.domNode);this.listOfNodes.forEach(function(n,k){k+=g;var l=new this.dateClassObj(a),m,h="dijitCalendar",p=0;k<b?(m=d-b+k+1,p=-1,h+="Previous"):k>=b+e?(m=k-b-e+1,p=1,h+="Next"):(m=k-b+1,h+="Current");p&&(l=this.dateFuncObj.add(l,"month",p));l.setDate(m);this.dateFuncObj.compare(l,f,"date")||(h="dijitCalendarCurrentDate "+h);dateIndex=c.date.stamp.toISOString(l).substring(0,10);this.isDisabledDate(l,this.lang)||this._isSelectedDate(l,
this.lang)&&(h=this.value[dateIndex]?"dijitCalendarSelectedDate "+h:h.replace("dijitCalendarSelectedDate ",""));this._isSelectedDate(l,this.lang)&&(h="dijitCalendarBrowsingDate "+h);this.isDisabledDate(l,this.lang)&&(h="dijitCalendarDisabledDate "+h);(m=this.getClassForDate(l,this.lang))&&(h=m+" "+h);n.className=h+"Month dijitCalendarDateTemplate";n.dijitDateValue=l.valueOf();c.attr(n,"dijitDateValue",l.valueOf());h=c.query(".dijitCalendarDateLabel",n)[0];l=l.getDateLocalized?l.getDateLocalized(this.lang):
l.getDate();this._setText(h,l)},this);var n=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,a);this.monthDropDownButton.dropDown.set("months",n);this.monthDropDownButton.containerNode.innerHTML=(6==c.isIE?"":"\x3cdiv class\x3d'dijitSpacer'\x3e"+this.monthDropDownButton.dropDown.domNode.innerHTML+"\x3c/div\x3e")+"\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e"+n[a.getMonth()]+"\x3c/div\x3e";var m=a.getFullYear()-1,k=new this.dateClassObj;c.forEach(["previous",
"current","next"],function(a){k.setFullYear(m++);this._setText(this[a+"YearLabelNode"],this.dateLocaleModule.format(k,{selector:"year",locale:this.lang}))},this)},goToToday:function(){this.set("currentFocus",new this.dateClassObj,!1)},constructor:function(a){this.dateClassObj=c.getObject(a.datePackage&&"dojo.date"!=a.datePackage?a.datePackage+".Date":"Date",!1);this.datePackage=a.datePackage||this.datePackage;this.dateFuncObj=c.getObject(this.datePackage,!1);this.dateLocaleModule=c.getObject(this.datePackage+
".locale",!1)},buildRendering:function(){this.inherited(arguments);c.setSelectable(this.domNode,!1);var a=c.hitch(this,function(a,b){for(var e=c.query(a,this.domNode)[0],d=0;d<b;d++)e.parentNode.appendChild(e.cloneNode(!0))});a(".dijitCalendarDayLabelTemplate",6);a(".dijitCalendarDateTemplate",6);a(".dijitCalendarWeekTemplate",5);var b=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang),e=c.cldr.supplemental.getFirstDayOfWeek(this.lang);c.query(".dijitCalendarDayLabel",this.domNode).forEach(function(a,
c){this._setText(a,b[(c+e)%7])},this);a=new this.dateClassObj(this.currentFocus);this.monthDropDownButton.dropDown=new v({id:this.id+"_mdd",onChange:c.hitch(this,"_onMonthSelect")});this.set("currentFocus",a,!1);var d=this,a=function(a,b,c){d._connects.push(t.typematic.addMouseListener(d[a],d,function(a){0<=a&&d._adjustDisplay(b,c)},0.8,500))};a("incrementMonth","month",1);a("decrementMonth","month",-1);a("nextYearLabelNode","year",1);a("previousYearLabelNode","year",-1)},_adjustDisplay:function(a,
b){this._setCurrentFocusAttr(this.dateFuncObj.add(this.currentFocus,a,b))},_setCurrentFocusAttr:function(a,b){var e=this.currentFocus,e=e?c.query("[dijitDateValue\x3d"+e.valueOf()+"]",this.domNode)[0]:null;a=new this.dateClassObj(a);a.setHours(1,0,0,0);this._set("currentFocus",a);var d=c.date.stamp.toISOString(a).substring(0,7);d!=this.previousMonth&&(this._populateGrid(),this.previousMonth=d);d=c.query("[dijitDateValue\x3d'"+a.valueOf()+"']",this.domNode)[0];d.setAttribute("tabIndex",this.tabIndex);
(this._focused||b)&&d.focus();e&&e!=d&&(c.isWebKit?e.setAttribute("tabIndex","-1"):e.removeAttribute("tabIndex"))},focus:function(){this._setCurrentFocusAttr(this.currentFocus,!0)},_onMonthSelect:function(a){this.currentFocus=this.dateFuncObj.add(this.currentFocus,"month",a-this.currentFocus.getMonth());this._populateGrid()},toggleDate:function(a,b,e){var d=c.date.stamp.toISOString(a).substring(0,10);this.value[d]?this.unselectDate(a,e):this.selectDate(a,b)},selectDate:function(a,b){var e=this._getNodeByDate(a),
d=e.className,f=c.date.stamp.toISOString(a).substring(0,10);this.value[f]=1;b.push(f);e.className="dijitCalendarSelectedDate "+d},unselectDate:function(a,b){var e=this._getNodeByDate(a),d=e.className,f=c.date.stamp.toISOString(a).substring(0,10);delete this.value[f];b.push(f);d=d.replace("dijitCalendarSelectedDate ","");e.className=d},_getNodeByDate:function(a){var b=new this.dateClassObj(this.listOfNodes[0].dijitDateValue);a=Math.abs(c.date.difference(b,a,"day"));return this.listOfNodes[a]},_onDayClick:function(a){c.stopEvent(a);
for(a=a.target;a&&!a.dijitDateValue;a=a.parentNode);a&&!c.hasClass(a,"dijitCalendarDisabledDate")&&(value=new this.dateClassObj(a.dijitDateValue),this.rangeJustSelected?(this.rangeJustSelected=!1,this.set("currentFocus",value)):(this.toggleDate(value,[],[]),this.previouslySelectedDay=value,this.set("currentFocus",value),this.onValueSelected([c.date.stamp.toISOString(value).substring(0,10)])))},_onDayMouseOver:function(a){if((a=c.hasClass(a.target,"dijitCalendarDateLabel")?a.target.parentNode:a.target)&&
(a.dijitDateValue||a==this.previousYearLabelNode||a==this.nextYearLabelNode))c.addClass(a,"dijitCalendarHoveredDate"),this._currentNode=a},_setEndRangeAttr:function(a){a=new this.dateClassObj(a);a.setHours(1);this.endRange=a},_getEndRangeAttr:function(){var a=new this.dateClassObj(this.endRange);a.setHours(0,0,0,0);a.getDate()<this.endRange.getDate()&&(a=this.dateFuncObj.add(a,"hour",1));return a},_onDayMouseOut:function(a){this._currentNode&&!(a.relatedTarget&&a.relatedTarget.parentNode==this._currentNode)&&
(a="dijitCalendarHoveredDate",c.hasClass(this._currentNode,"dijitCalendarActiveDate")&&(a+=" dijitCalendarActiveDate"),c.removeClass(this._currentNode,a),this._currentNode=null)},_onDayMouseDown:function(a){var b=a.target.parentNode;b&&b.dijitDateValue&&(c.addClass(b,"dijitCalendarActiveDate"),this._currentNode=b);a.shiftKey&&this.previouslySelectedDay?(this.selectingRange=!0,this.set("endRange",b.dijitDateValue),this._selectRange()):(this.selectingRange=!1,this.previousRangeEnd=this.previousRangeStart=
null)},_onDayMouseUp:function(a){(a=a.target.parentNode)&&a.dijitDateValue&&c.removeClass(a,"dijitCalendarActiveDate")},handleKey:function(a){var b=c.keys,e=-1,d,f=this.currentFocus;switch(a.keyCode){case b.RIGHT_ARROW:e=1;case b.LEFT_ARROW:d="day";this.isLeftToRight()||(e*=-1);break;case b.DOWN_ARROW:e=1;case b.UP_ARROW:d="week";break;case b.PAGE_DOWN:e=1;case b.PAGE_UP:d=a.ctrlKey||a.altKey?"year":"month";break;case b.END:f=this.dateFuncObj.add(f,"month",1),d="day";case b.HOME:f=new this.dateClassObj(f);
f.setDate(1);break;case b.ENTER:case b.SPACE:a.shiftKey&&this.previouslySelectedDay?(this.selectingRange=!0,this.set("endRange",f),this._selectRange()):(this.selectingRange=!1,this.toggleDate(f,[],[]),this.previouslySelectedDay=f,this.previousRangeEnd=this.previousRangeStart=null,this.onValueSelected([c.date.stamp.toISOString(f).substring(0,10)]));break;default:return!0}d&&(f=this.dateFuncObj.add(f,d,e));this.set("currentFocus",f);return!1},_onKeyDown:function(a){this.handleKey(a)||c.stopEvent(a)},
_removeFromRangeLTR:function(a,b,e,d){difference=Math.abs(c.date.difference(a,b,"day"));for(var f=0;f<=difference;f++){var g=c.date.add(a,"day",f);this.toggleDate(g,e,d)}null==this.previousRangeEnd?this.previousRangeEnd=b:0<c.date.compare(b,this.previousRangeEnd,"date")&&(this.previousRangeEnd=b);null==this.previousRangeStart?this.previousRangeStart=b:0<c.date.compare(b,this.previousRangeStart,"date")&&(this.previousRangeStart=b);this.previouslySelectedDay=c.date.add(g,"day",1)},_removeFromRangeRTL:function(a,
b,e,d){difference=Math.abs(c.date.difference(a,b,"day"));for(var f=0;f<=difference;f++){var g=c.date.add(a,"day",-f);this.toggleDate(g,e,d)}null==this.previousRangeEnd?this.previousRangeEnd=b:0>c.date.compare(b,this.previousRangeEnd,"date")&&(this.previousRangeEnd=b);null==this.previousRangeStart?this.previousRangeStart=b:0>c.date.compare(b,this.previousRangeStart,"date")&&(this.previousRangeStart=b);this.previouslySelectedDay=c.date.add(g,"day",-1)},_addToRangeRTL:function(a,b,e,d){difference=Math.abs(c.date.difference(a,
b,"day"));for(var f=1;f<=difference;f++){var g=c.date.add(a,"day",-f);this.toggleDate(g,e,d)}null==this.previousRangeStart?this.previousRangeStart=b:0>c.date.compare(b,this.previousRangeStart,"date")&&(this.previousRangeStart=b);null==this.previousRangeEnd?this.previousRangeEnd=a:0<c.date.compare(a,this.previousRangeEnd,"date")&&(this.previousRangeEnd=a);this.previouslySelectedDay=g},_addToRangeLTR:function(a,b,e,d){difference=Math.abs(c.date.difference(a,b,"day"));for(var f=1;f<=difference;f++){var g=
c.date.add(a,"day",f);this.toggleDate(g,e,d)}null==this.previousRangeStart?this.previousRangeStart=a:0>c.date.compare(a,this.previousRangeStart,"date")&&(this.previousRangeStart=a);null==this.previousRangeEnd?this.previousRangeEnd=b:0<c.date.compare(b,this.previousRangeEnd,"date")&&(this.previousRangeEnd=b);this.previouslySelectedDay=g},_selectRange:function(){var a=[],b=[],e=this.previouslySelectedDay,d=this.get("endRange");removingFromRange=!this.previousRangeStart&&!this.previousRangeEnd?!1:0>
c.date.compare(d,this.previousRangeStart,"date")||0<c.date.compare(d,this.previousRangeEnd,"date")?!1:!0;!0==removingFromRange?0>c.date.compare(d,e,"date")?this._removeFromRangeRTL(e,d,a,b):this._removeFromRangeLTR(e,d,a,b):0>c.date.compare(d,e,"date")?this._addToRangeRTL(e,d,a,b):this._addToRangeLTR(e,d,a,b);if(0<a.length)this.onValueSelected(a);if(0<b.length)this.onValueUnselected(b);this.rangeJustSelected=!0},onValueSelected:function(a){},onValueUnselected:function(a){},onChange:function(a){},
_isSelectedDate:function(a,b){dateIndex=c.date.stamp.toISOString(a).substring(0,10);return this.value[dateIndex]},isDisabledDate:function(a,b){},getClassForDate:function(a,b){},_sort:function(){if(this.value=={})return[];var a=[],b;for(b in this.value)a.push(b);a.sort(function(a,b){return new Date(a)-new Date(b)});return a},_returnDatesWithIsoRanges:function(a){var b=[];if(1<a.length){for(var e=!1,d=null,f=null,g=c.date.stamp.fromISOString(a[0]),k=1;k<a.length+1;k++)currentDate=c.date.stamp.fromISOString(a[k]),
e?(difference=Math.abs(c.date.difference(g,currentDate,"day")),1==difference?f=currentDate:(range=c.date.stamp.toISOString(d).substring(0,10)+"/"+c.date.stamp.toISOString(f).substring(0,10),b.push(range),e=!1)):(difference=Math.abs(c.date.difference(g,currentDate,"day")),1==difference?(e=!0,d=g,f=currentDate):b.push(c.date.stamp.toISOString(g).substring(0,10))),g=currentDate;return b}return a}});var v=k._MonthDropDown=c.declare("dojox.widget._MonthDropDown",[q,r,s],{months:[],templateString:"\x3cdiv class\x3d'dijitCalendarMonthMenu dijitMenu' dojoAttachEvent\x3d'onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'\x3e\x3c/div\x3e",
_setMonthsAttr:function(a){this.domNode.innerHTML=c.map(a,function(a,c){return a?"\x3cdiv class\x3d'dijitCalendarMonthLabel' month\x3d'"+c+"'\x3e"+a+"\x3c/div\x3e":""}).join("")},_onClick:function(a){this.onChange(c.attr(a.target,"month"))},onChange:function(a){},_onMenuHover:function(a){c.toggleClass(a.target,"dijitCalendarMonthLabelHover","mouseover"==a.type)}});return k});
//# sourceMappingURL=MultiSelectCalendar.js.uncompressed.js.map