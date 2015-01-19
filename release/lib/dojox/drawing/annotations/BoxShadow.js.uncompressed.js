//>>built
define("dojox/drawing/annotations/BoxShadow",["dojo","dojo/_base/Color","../util/oo"],function(n,p,q){return q.declare(function(a){this.stencil=a.stencil;this.util=a.stencil.util;this.mouse=a.stencil.mouse;this.style=a.stencil.style;delete a.stencil;this.options=n.mixin({size:6,mult:4,alpha:0.05,place:"BR",color:"#646464"},a);this.options.color=new p(this.options.color);this.options.color.a=this.options.alpha;switch(this.stencil.shortType){case "image":case "rect":this.method="createForRect";break;
case "ellipse":this.method="createForEllipse";break;case "line":this.method="createForLine";break;case "path":this.method="createForPath";break;case "vector":this.method="createForZArrow"}this.method&&(this.render(),this.stencil.connectMult([[this.stencil,"onTransform",this,"onTransform"],"createForZArrow"==this.method?[this.stencil,"render",this,"render"]:[this.stencil,"render",this,"onRender"],[this.stencil,"onDelete",this,"destroy"]]))},{showing:!0,render:function(){this.container&&this.container.removeShape();
this.container=this.stencil.container.createGroup();this.container.moveToBack();var a=this.options,d="createForPath"==this.method?this.stencil.points:this.stencil.data;this[this.method](a,a.size,a.mult,d,d.r||1,a.place,a.color)},hide:function(){this.showing&&(this.showing=!1,this.container.removeShape())},show:function(){this.showing||(this.showing=!0,this.stencil.container.add(this.container))},createForPath:function(a,d,e,c,f,b,k){a=d*e/4;var h=/B/.test(b)?a:/T/.test(b)?-1*a:0,g=/R/.test(b)?a:/L/.test(b)?
-1*a:0;for(b=1;b<=d;b++)if(a=b*e,"svg"==dojox.gfx.renderer){var l=[];n.forEach(c,function(a,b){0==b?l.push("M "+(a.x+g)+" "+(a.y+h)):l.push((a.t||"L ")+(a.x+g)+" "+(a.y+h))},this);l.push("Z");this.container.createPath(l.join(", ")).setStroke({width:a,color:k,cap:"round"})}else{var m=this.container.createPath({}).setStroke({width:a,color:k,cap:"round"});n.forEach(this.points,function(a,b){0==b||"M"==a.t?m.moveTo(a.x+g,a.y+h):"Z"==a.t?m.closePath():m.lineTo(a.x+g,a.y+h)},this);m.closePath()}},createForLine:function(a,
d,e,c,f,b,k){f=d*e/4;a=/B/.test(b)?f:/T/.test(b)?-1*f:0;b=/R/.test(b)?f:/L/.test(b)?-1*f:0;for(f=1;f<=d;f++){var h=f*e;this.container.createLine({x1:c.x1+b,y1:c.y1+a,x2:c.x2+b,y2:c.y2+a}).setStroke({width:h,color:k,cap:"round"})}},createForEllipse:function(a,d,e,c,f,b,k){a=d*e/8;var h=/B/.test(b)?a:/T/.test(b)?-1*a:0;b=/R/.test(b)?0.8*a:/L/.test(b)?-0.8*a:0;for(var g=1;g<=d;g++){var l=g*e;this.container.createEllipse({cx:c.cx+b,cy:c.cy+h,rx:c.rx-a,ry:c.ry-a,r:f}).setStroke({width:l,color:k})}},createForRect:function(a,
d,e,c,f,b,k){a=d*e/2;var h=/B/.test(b)?a:/T/.test(b)?0:a/2;b=/R/.test(b)?a:/L/.test(b)?0:a/2;for(var g=1;g<=d;g++){var l=g*e;this.container.createRect({x:c.x+b,y:c.y+h,width:c.width-a,height:c.height-a,r:f}).setStroke({width:l,color:k})}},arrowPoints:function(){var a=this.stencil.data,d=this.stencil.getRadius(),e=this.style.zAngle+30,e=this.util.pointOnCircle(a.x1,a.y1,0.75*d,e),a={start:{x:a.x1,y:a.y1},x:e.x,y:e.y},e=this.util.angle(a),c=this.util.length(a),d=this.style.arrows.length,f=this.style.arrows.width/
3;c<d&&(d=c/2);c=this.util.pointOnCircle(a.x,a.y,-d,e-f);e=this.util.pointOnCircle(a.x,a.y,-d,e+f);return[{x:a.x,y:a.y},c,e]},createForZArrow:function(a,d,e,c,f,b,k){if(!(1>this.stencil.data.cosphi)&&this.stencil.points[0]){c=d*e/4;var h=/B/.test(b)?c:/T/.test(b)?-1*c:0,g=/R/.test(b)?c:/L/.test(b)?-1*c:0;for(b=1;b<=d;b++){a=b*e;c=this.arrowPoints();if(!c)break;if("svg"==dojox.gfx.renderer){var l=[];n.forEach(c,function(a,b){0==b?l.push("M "+(a.x+g)+" "+(a.y+h)):l.push((a.t||"L ")+(a.x+g)+" "+(a.y+
h))},this);l.push("Z");this.container.createPath(l.join(", ")).setStroke({width:a,color:k,cap:"round"}).setFill(k)}else{var m=this.container.createPath({}).setStroke({width:a,color:k,cap:"round"});n.forEach(c,function(a,b){0==b||"M"==a.t?m.moveTo(a.x+g,a.y+h):"Z"==a.t?m.closePath():m.lineTo(a.x+g,a.y+h)},this);m.closePath()}f=this.stencil.points;this.container.createLine({x1:f[0].x,y1:f[0].y,x2:c[0].x,y2:c[0].y}).setStroke({width:a,color:k,cap:"round"})}}},onTransform:function(){this.render()},onRender:function(){this.container.moveToBack()},
destroy:function(){this.container&&this.container.removeShape()}})});
//# sourceMappingURL=BoxShadow.js.uncompressed.js.map