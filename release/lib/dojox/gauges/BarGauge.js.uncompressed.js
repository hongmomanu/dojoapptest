//>>built
define("dojox/gauges/BarGauge","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/event dojox/gfx ./_Gauge ./BarLineIndicator dojo/dom-geometry".split(" "),function(h,f,k,q,l,m,n,p,e){return h("dojox.gauges.BarGauge",n,{dataX:5,dataY:5,dataWidth:0,dataHeight:0,_defaultIndicator:p,startup:function(){this.getChildren&&k.forEach(this.getChildren(),function(b){b.startup()});this.dataWidth||(this.dataWidth=this.gaugeWidth-10);this.dataHeight||(this.dataHeight=this.gaugeHeight-
10);this.inherited(arguments)},_getPosition:function(b){return this.dataX+Math.floor((b-this.min)/(this.max-this.min)*this.dataWidth)},_getValueForPosition:function(b){return(b-this.dataX)*(this.max-this.min)/this.dataWidth+this.min},drawRange:function(b,a){a.shape&&(a.shape.parent.remove(a.shape),a.shape=null);var c=this._getPosition(a.low),e=this._getPosition(a.high),d=b.createRect({x:c,y:this.dataY,width:e-c,height:this.dataHeight});if(f.isArray(a.color)||f.isString(a.color))d.setStroke({color:a.color}),
d.setFill(a.color);else if(a.color.type){var g=this.dataY+this.dataHeight/2;a.color.x1=c;a.color.x2=e;a.color.y1=g;a.color.y2=g;d.setFill(a.color);d.setStroke({color:a.color.colors[0].color})}else m.svg&&(d.setStroke({color:"green"}),d.setFill("green"),d.getEventSource().setAttribute("class",a.color.style));d.connect("onmouseover",f.hitch(this,this._handleMouseOverRange,a));d.connect("onmouseout",f.hitch(this,this._handleMouseOutRange,a));a.shape=d},getRangeUnderMouse:function(b){var a=null,c=e.getContentBox(this.gaugeContent);
b=this._getValueForPosition(b.clientX-c.x);if(this._rangeData)for(c=0;c<this._rangeData.length&&!a;c++)Number(this._rangeData[c].low)<=b&&Number(this._rangeData[c].high)>=b&&(a=this._rangeData[c]);return a},_dragIndicator:function(b,a){this._dragIndicatorAt(b,a.pageX,a.pageY);l.stop(a)},_dragIndicatorAt:function(b,a,c){c=e.position(b.gaugeContent,!0);a=b._getValueForPosition(a-c.x);a<b.min&&(a=b.min);a>b.max&&(a=b.max);b._drag.value=a;b._drag.onDragMove(b._drag);b._drag.draw(this._indicatorsGroup,
!0);b._drag.valueChanged()}})});
//# sourceMappingURL=BarGauge.js.uncompressed.js.map