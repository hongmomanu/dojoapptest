//>>built
define("dojox/charting/plot2d/_PlotEvents",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect"],function(e,d,f,g){return f("dojox.charting.plot2d._PlotEvents",null,{constructor:function(){this._shapeEvents=[];this._eventSeries={}},destroy:function(){this.resetEvents();this.inherited(arguments)},plotEvent:function(a){},raiseEvent:function(a){this.plotEvent(a);var b=e.delegate(a);b.originalEvent=a.type;b.originalPlot=a.plot;b.type="onindirect";d.forEach(this.chart.stack,
function(a){a!==this&&a.plotEvent&&(b.plot=a,a.plotEvent(b))},this)},connect:function(a,b){this.dirty=!0;return g.connect(this,"plotEvent",a,b)},events:function(){return!!this.plotEvent.after},resetEvents:function(){this._shapeEvents.length&&(d.forEach(this._shapeEvents,function(a){a.shape.disconnect(a.handle)}),this._shapeEvents=[]);this.raiseEvent({type:"onplotreset",plot:this})},_connectSingleEvent:function(a,b){this._shapeEvents.push({shape:a.eventMask,handle:a.eventMask.connect(b,this,function(c){a.type=
b;a.event=c;this.raiseEvent(a);a.event=null})})},_connectEvents:function(a){a&&(a.chart=this.chart,a.plot=this,a.hAxis=this.hAxis||null,a.vAxis=this.vAxis||null,a.eventMask=a.eventMask||a.shape,this._connectSingleEvent(a,"onmouseover"),this._connectSingleEvent(a,"onmouseout"),this._connectSingleEvent(a,"onclick"))},_reconnectEvents:function(a){(a=this._eventSeries[a])&&d.forEach(a,this._connectEvents,this)},fireEvent:function(a,b,c,d){if((a=this._eventSeries[a])&&a.length&&c<a.length)c=a[c],c.type=
b,c.event=d||null,this.raiseEvent(c),c.event=null}})});
//# sourceMappingURL=_PlotEvents.js.uncompressed.js.map