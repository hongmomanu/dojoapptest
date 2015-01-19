//>>built
define("dojox/gfx/canvasWithEvents","dojo/_base/lang dojo/_base/declare dojo/has dojo/on dojo/aspect dojo/touch dojo/_base/Color dojo/dom dojo/dom-geometry dojo/_base/window ./_base ./canvas ./shape ./matrix".split(" "),function(n,g,l,p,v,x,w,s,t,y,q,k,z,r){function u(a){var b={},c;for(c in a)b[c]="function"===typeof a[c]?n.hitch(a,c):a[c];return b}l.add("dom-mutableEvents",function(){var a=document.createEvent("UIEvents");try{return Object.defineProperty?Object.defineProperty(a,"type",{value:"foo"}):
a.type="foo","foo"===a.type}catch(b){return!1}});var d=q.canvasWithEvents={};d.Shape=g("dojox.gfx.canvasWithEvents.Shape",k.Shape,{_testInputs:function(a,b){if(this.clip||!this.canvasFill&&this.strokeStyle)this._hitTestPixel(a,b);else{this._renderShape(a);for(var c=b.length,h=this.getTransform(),e=0;e<c;++e){var f=b[e];if(!f.target){var d=f.x,g=f.y,d=h?r.multiplyPoint(r.invert(h),d,g):{x:d,y:g};f.target=this._hitTestGeometry(a,d.x,d.y)}}}},_hitTestPixel:function(a,b){for(var c=0;c<b.length;++c){var h=
b[c];if(!h.target){var e=h.x,f=h.y;a.clearRect(0,0,1,1);a.save();a.translate(-e,-f);this._render(a,!0);h.target=a.getImageData(0,0,1,1).data[0]?this:null;a.restore()}}},_hitTestGeometry:function(a,b,c){return a.isPointInPath(b,c)?this:null},_renderFill:function(a,b){a.pickingMode?"canvasFill"in this&&b&&a.fill():this.inherited(arguments)},_renderStroke:function(a){if(this.strokeStyle&&a.pickingMode){var b=this.strokeStyle.color;try{this.strokeStyle.color=new w(a.strokeStyle),this.inherited(arguments)}finally{this.strokeStyle.color=
b}}else this.inherited(arguments)},getEventSource:function(){return this.surface.rawNode},on:function(a,b){var c=this.rawNode;return p(this.getEventSource(),a,function(a){s.isDescendant(a.target,c)&&b.apply(c,arguments)})},connect:function(a,b,c){"on"==a.substring(0,2)&&(a=a.substring(2));return this.on(a,c?n.hitch(b,c):n.hitch(null,b))},disconnect:function(a){a.remove()}});d.Group=g("dojox.gfx.canvasWithEvents.Group",[d.Shape,k.Group],{_testInputs:function(a,b){var c=this.children,h=this.getTransform(),
e,f;if(0!==c.length){var d=[];for(e=0;e<b.length;++e)if(f=b[e],d[e]={x:f.x,y:f.y},!f.target){var g=f.x,k=f.y,g=h?r.multiplyPoint(r.invert(h),g,k):{x:g,y:k};f.x=g.x;f.y=g.y}for(e=c.length-1;0<=e;--e){c[e]._testInputs(a,b);f=!0;for(h=0;h<b.length;++h)if(null==b[h].target){f=!1;break}if(f)break}if(this.clip)for(e=0;e<b.length;++e)f=b[e],f.x=d[e].x,f.y=d[e].y,f.target&&(a.clearRect(0,0,1,1),a.save(),a.translate(-f.x,-f.y),this._render(a,!0),a.getImageData(0,0,1,1).data[0]||(f.target=null),a.restore());
else for(e=0;e<b.length;++e)b[e].x=d[e].x,b[e].y=d[e].y}}});d.Image=g("dojox.gfx.canvasWithEvents.Image",[d.Shape,k.Image],{_renderShape:function(a){var b=this.shape;a.pickingMode?a.fillRect(b.x,b.y,b.width,b.height):this.inherited(arguments)},_hitTestGeometry:function(a,b,c){a=this.shape;return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height?this:null}});d.Text=g("dojox.gfx.canvasWithEvents.Text",[d.Shape,k.Text],{_testInputs:function(a,b){return this._hitTestPixel(a,b)}});d.Rect=g("dojox.gfx.canvasWithEvents.Rect",
[d.Shape,k.Rect],{});d.Circle=g("dojox.gfx.canvasWithEvents.Circle",[d.Shape,k.Circle],{});d.Ellipse=g("dojox.gfx.canvasWithEvents.Ellipse",[d.Shape,k.Ellipse],{});d.Line=g("dojox.gfx.canvasWithEvents.Line",[d.Shape,k.Line],{});d.Polyline=g("dojox.gfx.canvasWithEvents.Polyline",[d.Shape,k.Polyline],{});d.Path=g("dojox.gfx.canvasWithEvents.Path",[d.Shape,k.Path],{});d.TextPath=g("dojox.gfx.canvasWithEvents.TextPath",[d.Shape,k.TextPath],{});var m=null;d.Surface=g("dojox.gfx.canvasWithEvents.Surface",
k.Surface,{constructor:function(){this._elementUnderPointer=null},fixTarget:function(a){var b=this;return function(c){var d;if(m)if(l("dom-mutableEvents"))Object.defineProperties(c,m);else for(d in c=u(c),m)c[d]=m[d].value;else{var e=b.getEventSource()._dojoElementFromPoint((c.changedTouches?c.changedTouches[0]:c).pageX,(c.changedTouches?c.changedTouches[0]:c).pageY);l("dom-mutableEvents")?Object.defineProperties(c,{target:{value:e,configurable:!0,enumerable:!0},gfxTarget:{value:e.shape,configurable:!0,
enumerable:!0}}):(c=u(c),c.target=e,c.gfxTarget=e.shape)}if(l("touch")){if(c.changedTouches&&c.changedTouches[0])for(d in e=c.changedTouches[0],e)c[d]||(l("dom-mutableEvents")?Object.defineProperty(c,d,{value:e[d],configurable:!0,enumerable:!0}):c[d]=e[d]);c.corrected=c}return a.call(this,c)}},_checkPointer:function(a){function b(b,c,e){for(var d=a.bubbles,f=0,h;h=b[f];++f)m={target:{value:c,configurable:!0,enumerable:!0},gfxTarget:{value:c.shape,configurable:!0,enumerable:!0},relatedTarget:{value:e,
configurable:!0,enumerable:!0}},Object.defineProperty(a,"bubbles",{value:h.bubbles,configurable:!0,enumerable:!0}),p.emit(g,h.type,a),m=null;Object.defineProperty(a,"bubbles",{value:d,configurable:!0,enumerable:!0})}var c=[{type:"mouseout",bubbles:!0},{type:"MSPointerOut",bubbles:!0},{type:"pointerout",bubbles:!0},{type:"mouseleave",bubbles:!1},{type:"dojotouchout",bubbles:!0}],d=[{type:"mouseover",bubbles:!0},{type:"MSPointerOver",bubbles:!0},{type:"pointerover",bubbles:!0},{type:"mouseenter",bubbles:!1},
{type:"dojotouchover",bubbles:!0}],e=a.target,f=this._elementUnderPointer,g=this.getEventSource();f!==e&&(f&&f!==g&&b(c,f,e),(this._elementUnderPointer=e)&&e!==g&&b(d,e,f))},getEventSource:function(){return this.rawNode},on:function(a,b){return p(this.getEventSource(),a,b)},connect:function(a,b,c){"on"==a.substring(0,2)&&(a=a.substring(2));return this.on(a,c?n.hitch(b,c):b)},disconnect:function(a){a.remove()},_initMirrorCanvas:function(){this._initMirrorCanvas=function(){};var a=this.getEventSource(),
b=this.mirrorCanvas=a.ownerDocument.createElement("canvas");b.width=1;b.height=1;b.style.position="absolute";b.style.left=b.style.top="-99999px";a.parentNode.appendChild(b);b="mousemove";l("pointer-events")?b="pointermove":l("MSPointer")?b="MSPointerMove":l("touch-events")&&(b="touchmove");p(a,b,n.hitch(this,"_checkPointer"))},destroy:function(){this.mirrorCanvas&&(this.mirrorCanvas.parentNode.removeChild(this.mirrorCanvas),this.mirrorCanvas=null);this.inherited(arguments)}});d.createSurface=function(a,
b,c){if(!b&&!c){var h=t.position(a);b=b||h.w;c=c||h.h}"number"===typeof b&&(b+="px");"number"===typeof c&&(c+="px");var e=new d.Surface,h=s.byId(a);a=h.ownerDocument.createElement("canvas");a.width=q.normalizedLength(b);a.height=q.normalizedLength(c);h.appendChild(a);e.rawNode=a;e._parent=h;e.surface=e;q._base._fixMsTouchAction(e);var f=a.addEventListener,g=a.removeEventListener,k=[];b=function(a,b,c){e._initMirrorCanvas();var d=e.fixTarget(b);k.push({original:b,actual:d});f.call(this,a,d,c)};c=function(a,
b,c){for(var e=0,d;d=k[e];++e)if(d.original===b){g.call(this,a,d.actual,c);k.splice(e,1);break}};try{Object.defineProperties(a,{addEventListener:{value:b,enumerable:!0,configurable:!0},removeEventListener:{value:c}})}catch(l){a.addEventListener=b,a.removeEventListener=c}a._dojoElementFromPoint=function(a,b){if(!e.mirrorCanvas)return this;var c=t.position(this,!0);a-=c.x;b-=c.y;var d=e.mirrorCanvas,c=d.getContext("2d"),f=e.children;c.clearRect(0,0,d.width,d.height);c.save();c.strokeStyle="rgba(127,127,127,1.0)";
c.fillStyle="rgba(127,127,127,1.0)";c.pickingMode=!0;for(var d=[{x:a,y:b}],h=f.length-1;0<=h&&!(f[h]._testInputs(c,d),d[0].target);h--);c.restore();return d[0]&&d[0].target?d[0].target.rawNode:this};return e};g={createObject:function(){var a=this.inherited(arguments),b={};a.rawNode={shape:a,ownerDocument:a.surface.rawNode.ownerDocument,parentNode:a.parent?a.parent.rawNode:null,addEventListener:function(c,d){for(var e=b[c]=b[c]||[],f=0,g;g=e[f];++f)if(g.listener===d)return;e.push({listener:d,handle:v.after(this,
"on"+c,a.surface.fixTarget(d),!0)})},removeEventListener:function(a,d){var e=b[a];if(e)for(var f=0,g;g=e[f];++f)if(g.listener===d){g.handle.remove();e.splice(f,1);break}}};return a}};d.Group.extend(g);d.Surface.extend(g);return d});
//# sourceMappingURL=canvasWithEvents.js.uncompressed.js.map