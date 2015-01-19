//>>built
define("dojox/gauges/GlossyHorizontalGauge","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/Color dojox/gfx ./BarGauge ./BarCircleIndicator ./GlossyHorizontalGaugeMarker".split(" "),function(n,p,k,l,c,q,r,s){return n("dojox.gauges.GlossyHorizontalGauge",[q],{_defaultIndicator:r,color:"black",markerColor:"black",majorTicksInterval:10,_majorTicksLength:10,majorTicksColor:"#c4c4c4",minorTicksInterval:5,_minorTicksLength:6,minorTicksColor:"#c4c4c4",value:0,noChange:!1,title:"",font:"normal normal normal 10pt serif",
scalePrecision:0,_font:null,_margin:2,_minBorderWidth:2,_maxBorderWidth:6,_tickLabelOffset:5,_designHeight:100,constructor:function(){this.min=0;this.max=100},startup:function(){this.inherited(arguments);if(!this._gaugeStarted){this._gaugeStarted=!0;var a=this.height/this._designHeight;this._minorTicksLength*=a;this._majorTicksLength*=a;a=this._font;this._computeDataRectangle();var b=c.normalizedLength(a.size)+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),b=Math.max(0,
(this.height-b)/2);this.addRange({low:this.min?this.min:0,high:this.max?this.max:100,color:[0,0,0,0]});this.setMajorTicks({fixedPrecision:!0,precision:this.scalePrecision,font:a,labelPlacement:"inside",offset:b-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength,color:this.majorTicksColor});this.setMinorTicks({labelPlacement:"inside",offset:b-this._minorTicksLength/2,interval:this.minorTicksInterval,length:this._minorTicksLength,color:this.minorTicksColor});this._needle=
new s({hideValue:!0,title:this.title,noChange:this.noChange,offset:b,color:this.markerColor,value:this.value});this.addIndicator(this._needle);p.connect(this._needle,"valueChanged",k.hitch(this,function(){this.value=this._needle.value;this.onValueChanged()}))}},_layoutGauge:function(){if(this._gaugeStarted){var a=this._font;this._computeDataRectangle();var b=c.normalizedLength(a.size)+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),b=Math.max(0,(this.height-b)/2);this._setMajorTicksProperty({fixedPrecision:!0,
precision:this.scalePrecision,font:a,offset:b-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength});this._setMinorTicksProperty({offset:b-this._minorTicksLength/2,interval:this.minorTicksInterval,length:this._minorTicksLength});this.removeIndicator(this._needle);this._needle.offset=b;this.addIndicator(this._needle)}},_formatNumber:function(a){var b=this._getNumberModule();return b?b.format(a,{places:this.scalePrecision}):a.toFixed(this.scalePrecision)},_computeDataRectangle:function(){if(this._gaugeStarted){var a=
this._font,b=this._getTextWidth(this._formatNumber(this.min),a)/2,a=this._getTextWidth(this._formatNumber(this.max),a)/2,b=Math.max(b,a),b=this._getBorderWidth()+Math.max(this._majorTicksLength,this._majorTicksLength)/2+b;this.dataHeight=this.height;this.dataY=0;this.dataX=b+this._margin;this.dataWidth=Math.max(0,this.width-2*this.dataX)}},_getTextWidth:function(a,b){return c._base._getTextBox(a,{font:c.makeFontString(c.makeParameters(c.defaultFont,b))}).w||0},_getBorderWidth:function(){return Math.max(this._minBorderWidth,
Math.min(this._maxBorderWidth,this._maxBorderWidth*this.height/this._designHeight))},drawBackground:function(a){if(!this._gaugeBackground){var b=l.blendColors(new l(this.color),new l("white"),0.4);this._gaugeBackground=a.createGroup();var f=this._getBorderWidth(),g=this._margin,c=this.width;a=this.height;var d=Math.min(a/4,23);this._gaugeBackground.createRect({x:g,y:g,width:Math.max(0,c-2*g),height:Math.max(0,a-2*g),r:d}).setFill(this.color);var h=g+f,m=c-f-g,e=g+f,c=c-2*f-2*g,k=a-2*f-2*g;0>=c||0>=
k||(d=Math.min(d,c/2),d=Math.min(d,k/2),this._gaugeBackground.createRect({x:h,y:e,width:c,height:k,r:d}).setFill({type:"linear",x1:h,y1:0,x2:h,y2:a-f-g,colors:[{offset:0,color:b},{offset:0.2,color:this.color},{offset:0.8,color:this.color},{offset:1,color:b}]}),f=4*(Math.sqrt(2)-1)/3*d,this._gaugeBackground.createPath({path:"M"+h+" "+(e+d)+"C"+h+" "+(e+d-f)+" "+(h+d-f)+" "+e+" "+(h+d)+" "+e+"L"+(m-d)+" "+e+"C"+(m-d+f)+" "+e+" "+m+" "+(e+d-f)+" "+m+" "+(e+d)+"L"+m+" "+(e+a/2)+"L"+h+" "+(e+a/3)+"Z"}).setFill({type:"linear",
x1:h,y1:e,x2:h,y2:e+this.height/2,colors:[{offset:0,color:b},{offset:1,color:l.blendColors(new l(this.color),new l("white"),0.2)}]}))}},onValueChanged:function(){},_setColorAttr:function(a){this.color=a?a:"black";this._gaugeBackground&&this._gaugeBackground.parent&&this._gaugeBackground.parent.remove(this._gaugeBackground);this._gaugeBackground=null;this.draw()},_setMarkerColorAttr:function(a){this.markerColor=a;this._needle&&(this.removeIndicator(this._needle),this._needle.color=a,this._needle.shape=
null,this.addIndicator(this._needle))},_setMajorTicksIntervalAttr:function(a){this.majorTicksInterval=a;this._setMajorTicksProperty({interval:this.majorTicksInterval})},setMajorTicksLength:function(a){this._majorTicksLength=a;this._layoutGauge();return this},getMajorTicksLength:function(){return this._majorTicksLength},_setMajorTicksColorAttr:function(a){this.majorTicksColor=a;this._setMajorTicksProperty({color:this.majorTicksColor})},_setMajorTicksProperty:function(a){null!=this.majorTicks&&(k.mixin(this.majorTicks,
a),this.setMajorTicks(this.majorTicks))},_setMinorTicksIntervalAttr:function(a){this.minorTicksInterval=a;this._setMinorTicksProperty({interval:this.minorTicksInterval})},setMinorTicksLength:function(a){this._minorTicksLength=a;this._layoutGauge();return this},getMinorTicksLength:function(){return this._minorTicksLength},_setMinorTicksColorAttr:function(a){this.minorTicksColor=a;this._setMinorTicksProperty({color:this.minorTicksColor})},_setMinorTicksProperty:function(a){null!=this.minorTicks&&(k.mixin(this.minorTicks,
a),this.setMinorTicks(this.minorTicks))},_setMinAttr:function(a){this.min=a;this._computeDataRectangle();null!=this.majorTicks&&this.setMajorTicks(this.majorTicks);null!=this.minorTicks&&this.setMinorTicks(this.minorTicks);this.draw()},_setMaxAttr:function(a){this.max=a;this._computeDataRectangle();null!=this.majorTicks&&this.setMajorTicks(this.majorTicks);null!=this.minorTicks&&this.setMinorTicks(this.minorTicks);this.draw()},_setValueAttr:function(a){a=Math.min(this.max,a);this.value=a=Math.max(this.min,
a);if(this._needle){var b=this._needle.noChange;this._needle.noChange=!1;this._needle.update(a);this._needle.noChange=b}},_setScalePrecisionAttr:function(a){this.scalePrecision=a;this._layoutGauge()},_setNoChangeAttr:function(a){this.noChange=a;this._needle&&(this._needle.noChange=this.noChange)},_setTitleAttr:function(a){this.title=a;this._needle&&(this._needle.title=this.title)},_setFontAttr:function(a){this.font=a;this._font=c.splitFontString(a);this._layoutGauge()}})});
//# sourceMappingURL=GlossyHorizontalGauge.js.uncompressed.js.map