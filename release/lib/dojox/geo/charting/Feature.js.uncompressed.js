//>>built
define("dojox/geo/charting/Feature","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/html dojo/dom dojo/_base/event dojox/gfx/fx dojox/color".split(" "),function(d,k,g,e,h,l,m,f){return k("dojox.geo.charting.Feature",null,{_isZoomIn:!1,isSelected:!1,markerText:null,constructor:function(a,c,b){this.id=c;this.shape=a.mapObj.createGroup();this.parent=a;this.mapObj=a.mapObj;this._bbox=b.bbox;this._center=b.center;this._defaultFill=a.defaultColor;this._highlightFill=a.highlightColor;this._defaultStroke=
{width:this._normalizeStrokeWeight(0.5),color:"white"};a=d.isArray(b.shape[0])?b.shape:[b.shape];g.forEach(a,function(a){this.shape.createPolyline(a).setStroke(this._defaultStroke)},this);this.unsetValue()},unsetValue:function(){this.value=null;this.unsetColor()},unsetColor:function(){this._defaultFill=this.parent.defaultColor;var a=(new f.Color(this.parent.defaultColor)).toHsl();a.l*=1.2;this._highlightFill=f.fromHsl(a);this._setFillWith(this._defaultFill)},setValue:function(a){this.value=a;if(null==
a)this.unsetValue();else if(0!=this.parent.series.length){for(var c=0;c<this.parent.series.length;c++){var b=this.parent.series[c];if(a>=b.min&&a<b.max){this._setFillWith(b.color);this._defaultFill=b.color;a=(new f.Color(b.color)).toHsv();a.v+=20;this._highlightFill=f.fromHsv(a);return}}this.unsetColor()}},_setFillWith:function(a){var c=d.isArray(this.shape.children)?this.shape.children:[this.shape.children];g.forEach(c,d.hitch(this,function(b){0<this.parent.colorAnimationDuration?m.animateFill({shape:b,
color:{start:b.getFill(),end:a},duration:this.parent.colorAnimationDuration}).play():b.setFill(a)}))},_setStrokeWith:function(a){var c=d.isArray(this.shape.children)?this.shape.children:[this.shape.children];g.forEach(c,function(b){b.setStroke({color:a.color,width:a.width,join:"round"})})},_normalizeStrokeWeight:function(a){this.shape._getRealMatrix();return"vml"!=dojox.gfx.renderer?a/(this.shape._getRealMatrix()||{xx:1}).xx:a},_onmouseoverHandler:function(a){this.parent.onFeatureOver(this);this._setFillWith(this._highlightFill);
this.mapObj.marker.show(this.id,a)},_onmouseoutHandler:function(){this._setFillWith(this._defaultFill);this.mapObj.marker.hide();e.style("mapZoomCursor","display","none")},_onmousemoveHandler:function(a){this.mapObj.marker._needTooltipRefresh&&this.mapObj.marker.show(this.id,a);this.isSelected&&a&&(this.parent.enableFeatureZoom?(a=l.fix(a||window.event),e.style("mapZoomCursor","left",a.pageX+12+"px"),e.style("mapZoomCursor","top",a.pageY+"px"),e.byId("mapZoomCursor").className=this._isZoomIn?"mapZoomOut":
"mapZoomIn",e.style("mapZoomCursor","display","block")):e.style("mapZoomCursor","display","none"))},_onclickHandler:function(a){this.parent.onFeatureClick(this);this.isSelected?this.parent.enableFeatureZoom&&(this._isZoomIn?this._zoomOut():this._zoomIn()):(this.parent.deselectAll(),this.select(!0),this._onmousemoveHandler(a))},select:function(a){a?(this.shape.moveToFront(),this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)}),this._setFillWith(this._highlightFill),this.isSelected=
!0,this.parent.selectedFeature=this):(this._setStrokeWith(this._defaultStroke),this._setFillWith(this._defaultFill),this._isZoomIn=this.isSelected=!1)},_zoomIn:function(){var a=this.mapObj.marker;a.hide();this.parent.fitToMapArea(this._bbox,15,!0,d.hitch(this,function(){this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)});a._needTooltipRefresh=!0;this.parent.onZoomEnd(this)}));this._isZoomIn=!0;h.byId("mapZoomCursor").className=""},_zoomOut:function(){var a=this.mapObj.marker;
a.hide();this.parent.fitToMapContents(3,!0,d.hitch(this,function(){this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)});a._needTooltipRefresh=!0;this.parent.onZoomEnd(this)}));this._isZoomIn=!1;h.byId("mapZoomCursor").className=""},init:function(){this.shape.id=this.id;this.tooltip=null}})});
//# sourceMappingURL=Feature.js.uncompressed.js.map