//>>built
define("dojox/gesture/swipe",["dojo/_base/kernel","dojo/_base/declare","./Base","../main"],function(c,g,h,f){c.experimental("dojox.gesture.swipe");c=g(h,{defaultEvent:"swipe",subEvents:["end"],press:function(a,b){b.touches&&2<=b.touches.length?delete a.context:(a.context||(a.context={x:0,y:0,t:0}),a.context.x=b.screenX,a.context.y=b.screenY,a.context.t=(new Date).getTime(),this.lock(b.currentTarget))},move:function(a,b){this._recognize(a,b,"swipe")},release:function(a,b){this._recognize(a,b,"swipe.end");
delete a.context;this.unLock()},cancel:function(a,b){delete a.context;this.unLock()},_recognize:function(a,b,e){if(a.context&&(a=this._getSwipeInfo(a,b)))a.type=e,this.fire(b.target,a)},_getSwipeInfo:function(a,b){var e,d,c={};d=a.context;c.time=(new Date).getTime()-d.t;e=b.screenX-d.x;d=b.screenY-d.y;if(0===e&&0===d)return null;c.dx=e;c.dy=d;return c}});f.gesture.swipe=new c;f.gesture.swipe.Swipe=c;return f.gesture.swipe});
//# sourceMappingURL=swipe.js.uncompressed.js.map