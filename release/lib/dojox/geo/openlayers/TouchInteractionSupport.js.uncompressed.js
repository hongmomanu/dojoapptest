//>>built
define("dojox/geo/openlayers/TouchInteractionSupport","dojo/_base/declare dojo/_base/connect dojo/_base/html dojo/_base/lang dojo/_base/event dojo/_base/window".split(" "),function(h,c,f,k,e,g){return h("dojox.geo.openlayers.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,_touchMoveListener:null,_touchEndListener:null,_initialFingerSpacing:null,_initialScale:null,_tapCount:null,_tapThreshold:null,_lastTap:null,constructor:function(a){this._map=a;this._centerTouchLocation=new OpenLayers.LonLat(0,
0);a=this._map.div;c.connect(a,"touchstart",this,this._touchStartHandler);c.connect(a,"touchmove",this,this._touchMoveHandler);c.connect(a,"touchend",this,this._touchEndHandler);this._tapCount=0;this._lastTap={x:0,y:0};this._tapThreshold=100},_getTouchBarycenter:function(a){var b=a.touches;a=b[0];var d=null,d=1<b.length?b[1]:b[0],b=f.marginBox(this._map.div);return{x:(a.pageX+d.pageX)/2-b.l,y:(a.pageY+d.pageY)/2-b.t}},_getFingerSpacing:function(a){a=a.touches;var b=-1;2<=a.length&&(b=a[1].pageX-a[0].pageX,
a=a[1].pageY-a[0].pageY,b=Math.sqrt(b*b+a*a));return b},_isDoubleTap:function(a){var b=!1;a=a.touches;if(0<this._tapCount&&1==a.length){var d=a[0].pageX-this._lastTap.x,c=a[0].pageY-this._lastTap.y;d*d+c*c<this._tapThreshold?b=!0:this._tapCount=0}this._tapCount++;this._lastTap.x=a[0].pageX;this._lastTap.y=a[0].pageY;setTimeout(k.hitch(this,function(){this._tapCount=0}),300);return b},_doubleTapHandler:function(a){a=a.touches;var b=f.marginBox(this._map.div);a=this._map.getLonLatFromPixel(new OpenLayers.Pixel(a[0].pageX-
b.l,a[0].pageY-b.t));this._map.setCenter(new OpenLayers.LonLat(a.lon,a.lat),this._map.getZoom()+1)},_touchStartHandler:function(a){e.stop(a);if(this._isDoubleTap(a))this._doubleTapHandler(a);else{var b=this._getTouchBarycenter(a);this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(b.x,b.y));this._initialFingerSpacing=this._getFingerSpacing(a);this._initialScale=this._map.getScale();this._touchMoveListener||(this._touchMoveListener=c.connect(g.global,"touchmove",this,this._touchMoveHandler));
this._touchEndListener||(this._touchEndListener=c.connect(g.global,"touchend",this,this._touchEndHandler))}},_touchEndHandler:function(a){e.stop(a);0==a.touches.length?(this._touchMoveListener&&(c.disconnect(this._touchMoveListener),this._touchMoveListener=null),this._touchEndListener&&(c.disconnect(this._touchEndListener),this._touchEndListener=null)):(a=this._getTouchBarycenter(a),this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(a.x,a.y)))},_touchMoveHandler:function(a){e.stop(a);
var b=this._getTouchBarycenter(a),d=this._map.getLonLatFromPixel(new OpenLayers.Pixel(b.x,b.y)),b=d.lon-this._centerTouchLocation.lon,d=d.lat-this._centerTouchLocation.lat,c=1;2<=a.touches.length&&(c=this._getFingerSpacing(a)/this._initialFingerSpacing,this._map.zoomToScale(this._initialScale/c));a=this._map.getCenter();this._map.setCenter(new OpenLayers.LonLat(a.lon-b,a.lat-d))}})});
//# sourceMappingURL=TouchInteractionSupport.js.uncompressed.js.map