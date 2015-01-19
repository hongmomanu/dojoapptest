//>>built
define("dojox/sketch/Anchor",["dojo/_base/kernel","dojo/_base/lang","../gfx"],function(e){e.getObject("sketch",!0,dojox);dojox.sketch.Anchor=function(a,b,g){var e=this,f=null;this.type=function(){return"Anchor"};this.annotation=a;this.id=b;this._key="anchor-"+dojox.sketch.Anchor.count++;this.shape=null;this.isControl=null!=g?g:!0;this.beginEdit=function(){this.annotation.beginEdit(dojox.sketch.CommandTypes.Modify)};this.endEdit=function(){this.annotation.endEdit()};this.zoom=function(c){if(this.shape){var d=
Math.floor(4/c);c="vml"==dojox.gfx.renderer?1:1/c;this.shape.setShape({x:a[b].x-d,y:a[b].y-d,width:2*d,height:2*d}).setStroke({color:"black",width:c})}};this.setBinding=function(c){a[b]={x:a[b].x+c.dx,y:a[b].y+c.dy};a.draw();a.drawBBox()};this.setUndo=function(){a.setUndo()};this.enable=function(){a.shape&&(a.figure._add(this),f={x:a[b].x-4,y:a[b].y-4,width:8,height:8},this.shape=a.shape.createRect(f).setFill([255,255,255,0.35]),this.shape.getEventSource().setAttribute("id",e._key),this.shape.getEventSource().setAttribute("shape-rendering",
"crispEdges"),this.zoom(a.figure.zoomFactor))};this.disable=function(){a.figure._remove(this);a.shape&&a.shape.remove(this.shape);f=this.shape=null}};dojox.sketch.Anchor.count=0;return dojox.sketch.Anchor});
//# sourceMappingURL=Anchor.js.uncompressed.js.map