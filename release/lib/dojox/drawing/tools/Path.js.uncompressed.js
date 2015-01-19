//>>built
define("dojox/drawing/tools/Path",["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Path"],function(d,b,e,f){b=b.declare(f,function(){this.currentPathMode=this.pathMode="";this._started=!1;this.oddEvenClicks=0},{draws:!0,onDown:function(a){if(!this._started)this.onStartPath(a)},makeSubPath:function(a){a&&("Q"==this.currentPathMode&&this.points.push({x:this.points[0].x,y:this.points[0].y}),this.points.push({t:"Z"}),this.render());this.currentPathMode="";this.pathMode="M"},onStartPath:function(a){this._started=
!0;this.revertRenderHit=this.renderHit;this.closePath=this.renderHit=!1;this.mouse.setEventMode("PathEdit");this.closePoint={x:a.x,y:a.y};this._kc1=this.connect(this.keys,"onEsc",this,function(){this.onCompletePath(!1)});this._kc2=this.connect(this.keys,"onKeyUp",this,function(a){switch(a.letter){case "c":this.onCompletePath(!0);break;case "l":this.pathMode="L";break;case "m":this.makeSubPath(!1);break;case "q":this.pathMode="Q";break;case "s":this.pathMode="S";break;case "z":this.makeSubPath(!0)}})},
onCompletePath:function(a){this.remove(this.closeGuide,this.guide);var c=this.getBounds();c.w<this.minimumSize&&c.h<this.minimumSize?(this.remove(this.hit,this.shape,this.closeGuide),this._started=!1,this.mouse.setEventMode(""),this.setPoints([])):(a&&("Q"==this.currentPathMode&&this.points.push({x:this.points[0].x,y:this.points[0].y}),this.closePath=!0),this.renderHit=this.revertRenderHit,this.renderedOnce=!0,this.onRender(this),this.disconnect([this._kc1,this._kc2]),this.mouse.setEventMode(""),
this.render())},onUp:function(a){if(this._started&&a.withinCanvas)if(2<this.points.length&&this.closeRadius>this.util.distance(a.x,a.y,this.closePoint.x,this.closePoint.y))this.onCompletePath(!0);else{var c={x:a.x,y:a.y};this.oddEvenClicks++;this.currentPathMode!=this.pathMode&&("Q"==this.pathMode?(c.t="Q",this.oddEvenClicks=0):"L"==this.pathMode?c.t="L":"M"==this.pathMode&&(c.t="M",this.closePoint={x:a.x,y:a.y}),this.currentPathMode=this.pathMode);this.points.push(c);1<this.points.length&&(this.remove(this.guide),
this.render())}},createGuide:function(a){if(this.points.length){var c=[].concat(this.points),b={x:a.x,y:a.y};"Q"==this.currentPathMode&&this.oddEvenClicks%2&&(b.t="L");this.points.push(b);this.render();this.points=c;a=this.util.distance(a.x,a.y,this.closePoint.x,this.closePoint.y);1<this.points.length&&(a<this.closeRadius&&!this.closeGuide?this.closeGuide=this.container.createEllipse({cx:this.closePoint.x,cy:this.closePoint.y,rx:this.closeRadius,ry:this.closeRadius}).setFill(this.closeColor):a>this.closeRadius&&
this.closeGuide&&(this.remove(this.closeGuide),this.closeGuide=null))}},onMove:function(a){this._started&&this.createGuide(a)},onDrag:function(a){this._started&&this.createGuide(a)}});d.setObject("dojox.drawing.tools.Path",b);b.setup={name:"dojox.drawing.tools.Path",tooltip:"Path Tool",iconClass:"iconLine"};e.register(b.setup,"tool");return b});
//# sourceMappingURL=Path.js.uncompressed.js.map