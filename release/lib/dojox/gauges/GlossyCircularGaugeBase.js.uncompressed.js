//>>built
define("dojox/gauges/GlossyCircularGaugeBase","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojox/gfx ./AnalogGauge ./AnalogCircleIndicator ./TextIndicator ./GlossyCircularGaugeNeedle".split(" "),function(d,b,e,c,f,g,h,k){return d("dojox.gauges.GlossyCircularGaugeBase",[f],{_defaultIndicator:g,_needle:null,_textIndicator:null,_textIndicatorAdded:!1,_range:null,value:0,color:"black",needleColor:"#c4c4c4",textIndicatorFont:"normal normal normal 20pt serif",textIndicatorVisible:!0,textIndicatorColor:"#c4c4c4",
_majorTicksOffset:130,majorTicksInterval:10,_majorTicksLength:5,majorTicksColor:"#c4c4c4",majorTicksLabelPlacement:"inside",_minorTicksOffset:130,minorTicksInterval:5,_minorTicksLength:3,minorTicksColor:"#c4c4c4",noChange:!1,title:"",font:"normal normal normal 10pt serif",scalePrecision:0,textIndicatorPrecision:0,_font:null,constructor:function(){this.startAngle=-135;this.endAngle=135;this.min=0;this.max=100},startup:function(){this.inherited(arguments);if(!this._needle){var a=Math.min(this.width/
this._designWidth,this.height/this._designHeight);this.cx=a*this._designCx+(this.width-a*this._designWidth)/2;this.cy=a*this._designCy+(this.height-a*this._designHeight)/2;this._range={low:this.min?this.min:0,high:this.max?this.max:100,color:[255,255,255,0]};this.addRange(this._range);this._majorTicksOffset=this._minorTicksOffset=a*this._majorTicksOffset;this._majorTicksLength*=a;this._minorTicksLength*=a;this.setMajorTicks({fixedPrecision:!0,precision:this.scalePrecision,font:this._font,offset:this._majorTicksOffset,
interval:this.majorTicksInterval,length:this._majorTicksLength,color:this.majorTicksColor,labelPlacement:this.majorTicksLabelPlacement});this.setMinorTicks({offset:this._minorTicksOffset,interval:this.minorTicksInterval,length:this._minorTicksLength,color:this.minorTicksColor});this._needle=new k({hideValue:!0,title:this.title,noChange:this.noChange,color:this.needleColor,value:this.value});this.addIndicator(this._needle);this._textIndicator=new h({x:a*this._designTextIndicatorX+(this.width-a*this._designWidth)/
2,y:a*this._designTextIndicatorY+(this.height-a*this._designHeight)/2,fixedPrecision:!0,precision:this.textIndicatorPrecision,color:this.textIndicatorColor,value:this.value?this.value:this.min,align:"middle",font:this._textIndicatorFont});this.textIndicatorVisible&&(this.addIndicator(this._textIndicator),this._textIndicatorAdded=!0);e.connect(this._needle,"valueChanged",b.hitch(this,function(){this.value=this._needle.value;this._textIndicator.update(this._needle.value);this.onValueChanged()}))}},
onValueChanged:function(){},_setColorAttr:function(a){this.color=a?a:"black";this._gaugeBackground&&this._gaugeBackground.parent&&this._gaugeBackground.parent.remove(this._gaugeBackground);this._foreground&&this._foreground.parent&&this._foreground.parent.remove(this._foreground);this._foreground=this._gaugeBackground=null;this.draw()},_setNeedleColorAttr:function(a){this.needleColor=a;this._needle&&(this.removeIndicator(this._needle),this._needle.color=this.needleColor,this._needle.shape=null,this.addIndicator(this._needle))},
_setTextIndicatorColorAttr:function(a){this.textIndicatorColor=a;this._textIndicator&&(this._textIndicator.color=this.textIndicatorColor,this.draw())},_setTextIndicatorFontAttr:function(a){this.textIndicatorFont=a;this._textIndicatorFont=c.splitFontString(a);this._textIndicator&&(this._textIndicator.font=this._textIndicatorFont,this.draw())},setMajorTicksOffset:function(a){this._majorTicksOffset=a;this._setMajorTicksProperty({offset:this._majorTicksOffset});return this},getMajorTicksOffset:function(){return this._majorTicksOffset},
_setMajorTicksIntervalAttr:function(a){this.majorTicksInterval=a;this._setMajorTicksProperty({interval:this.majorTicksInterval})},setMajorTicksLength:function(a){this._majorTicksLength=a;this._setMajorTicksProperty({length:this._majorTicksLength});return this},getMajorTicksLength:function(){return this._majorTicksLength},_setMajorTicksColorAttr:function(a){this.majorTicksColor=a;this._setMajorTicksProperty({color:this.majorTicksColor})},_setMajorTicksLabelPlacementAttr:function(a){this.majorTicksLabelPlacement=
a;this._setMajorTicksProperty({labelPlacement:this.majorTicksLabelPlacement})},_setMajorTicksProperty:function(a){this.majorTicks&&(b.mixin(this.majorTicks,a),this.setMajorTicks(this.majorTicks))},setMinorTicksOffset:function(a){this._minorTicksOffset=a;this._setMinorTicksProperty({offset:this._minorTicksOffset});return this},getMinorTicksOffset:function(){return this._minorTicksOffset},_setMinorTicksIntervalAttr:function(a){this.minorTicksInterval=a;this._setMinorTicksProperty({interval:this.minorTicksInterval})},
setMinorTicksLength:function(a){this._minorTicksLength=a;this._setMinorTicksProperty({length:this._minorTicksLength});return this},getMinorTicksLength:function(){return this._minorTicksLength},_setMinorTicksColorAttr:function(a){this.minorTicksColor=a;this._setMinorTicksProperty({color:this.minorTicksColor})},_setMinorTicksProperty:function(a){this.minorTicks&&(b.mixin(this.minorTicks,a),this.setMinorTicks(this.minorTicks))},_setMinAttr:function(a){this.min=a;null!=this.majorTicks&&this.setMajorTicks(this.majorTicks);
null!=this.minorTicks&&this.setMinorTicks(this.minorTicks);this.draw();this._updateNeedle()},_setMaxAttr:function(a){this.max=a;null!=this.majorTicks&&this.setMajorTicks(this.majorTicks);null!=this.minorTicks&&this.setMinorTicks(this.minorTicks);this.draw();this._updateNeedle()},_setScalePrecisionAttr:function(a){this.scalePrecision=a;this._setMajorTicksProperty({precision:a})},_setTextIndicatorPrecisionAttr:function(a){this.textIndicatorPrecision=a;this._setMajorTicksProperty({precision:a})},_setValueAttr:function(a){a=
Math.min(this.max,a);this.value=a=Math.max(this.min,a);if(this._needle){var b=this._needle.noChange;this._needle.noChange=!1;this._needle.update(a);this._needle.noChange=b}},_setNoChangeAttr:function(a){this.noChange=a;this._needle&&(this._needle.noChange=this.noChange)},_setTextIndicatorVisibleAttr:function(a){this.textIndicatorVisible=a;this._textIndicator&&this._needle&&(this.textIndicatorVisible&&!this._textIndicatorAdded?(this.addIndicator(this._textIndicator),this._textIndicatorAdded=!0,this.moveIndicatorToFront(this._needle)):
!this.textIndicatorVisible&&this._textIndicatorAdded&&(this.removeIndicator(this._textIndicator),this._textIndicatorAdded=!1))},_setTitleAttr:function(a){this.title=a;this._needle&&(this._needle.title=this.title)},_setOrientationAttr:function(a){this.orientation=a;null!=this.majorTicks&&this.setMajorTicks(this.majorTicks);null!=this.minorTicks&&this.setMinorTicks(this.minorTicks);this.draw();this._updateNeedle()},_updateNeedle:function(){this.value=Math.max(this.min,this.value);this.value=Math.min(this.max,
this.value);if(this._needle){var a=this._needle.noChange;this._needle.noChange=!1;this._needle.update(this.value,!1);this._needle.noChange=a}},_setFontAttr:function(a){this.font=a;this._font=c.splitFontString(a);this._setMajorTicksProperty({font:this._font})}})});
//# sourceMappingURL=GlossyCircularGaugeBase.js.uncompressed.js.map