//>>built
define("dojox/charting/action2d/TouchIndicator","dojo/_base/lang dojo/_base/declare dojo/_base/event dojo/has dojo/touch dojo/_base/connect ./ChartAction ./_IndicatorElement dojox/lang/utils".split(" "),function(k,l,g,e,c,f,m,n,h){return l("dojox.charting.action2d.TouchIndicator",m,{defaultParams:{series:"",dualIndicator:!1,vertical:!0,autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},
fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1},constructor:function(a,b,d){e("touch-events")?this._listeners=[{eventName:"touchstart",methodName:"onTouchStart"},{eventName:"touchmove",methodName:"onTouchMove"},{eventName:"touchend",methodName:"onTouchEnd"},{eventName:"touchcancel",methodName:"onTouchEnd"}]:this._listeners=[{eventName:c.press,methodName:"onTouchStart"},{eventName:c.move,methodName:"onTouchMove"},
{eventName:c.cancel,methodName:"onTouchEnd"}];this.opt=k.clone(this.defaultParams);h.updateWithObject(this.opt,d);h.updateWithPattern(this.opt,d,this.optionalParams);this._uName="touchIndicator"+this.opt.series;this.connect()},connect:function(){this.inherited(arguments);this.chart.addPlot(this._uName,{type:n,inter:this})},disconnect:function(){if(this.chart.getPlot(this._uName).pageCoord)this.onTouchEnd();this.chart.removePlot(this._uName);this.inherited(arguments)},onChange:function(a){},onTouchStart:function(a){!a.touches||
1==a.touches.length?this._onTouchSingle(a,!0):this.opt.dualIndicator&&2==a.touches.length&&this._onTouchDual(a)},onTouchMove:function(a){!a.touches||1==a.touches.length?this._onTouchSingle(a):this.opt.dualIndicator&&2==a.touches.length&&this._onTouchDual(a)},_onTouchSingle:function(a,b){!e("touch-events")&&!this._onTouchEndHandler&&(this._onTouchEndHandler=f.connect(this.chart.node.ownerDocument,c.release,this,"onTouchEnd"));this.chart._delayedRenderHandle&&!b&&this.chart.render();var d=this.chart.getPlot(this._uName);
d.pageCoord={x:a.touches?a.touches[0].pageX:a.pageX,y:a.touches?a.touches[0].pageY:a.pageY};d.dirty=!0;b?this.chart.delayedRender():this.chart.render();g.stop(a)},_onTouchDual:function(a){!e("touch-events")&&!this._onTouchEndHandler&&(this._onTouchEndHandler=f.connect(this.chart.node.ownerDocument,c.release,this,"onTouchEnd"));this.chart._delayedRenderHandle&&this.chart.render();var b=this.chart.getPlot(this._uName);b.pageCoord={x:a.touches[0].pageX,y:a.touches[0].pageY};b.secondCoord={x:a.touches[1].pageX,
y:a.touches[1].pageY};b.dirty=!0;this.chart.render();g.stop(a)},onTouchEnd:function(a){!e("touch-events")&&this._onTouchEndHandler&&(f.disconnect(this._onTouchEndHandler),this._onTouchEndHandler=null);a=this.chart.getPlot(this._uName);a.stopTrack();a.pageCoord=null;a.secondCoord=null;a.dirty=!0;this.chart.delayedRender()}})});
//# sourceMappingURL=TouchIndicator.js.uncompressed.js.map