//>>built
define("dojox/image/Magnifier","dojo/_base/declare dojo/dom-construct dojo/_base/window dojox/gfx dojox/gfx/canvas ./MagnifierLite".split(" "),function(c,a,d,f,g,h){return c("dojox.image.Magnifier",h,{_createGlass:function(){this.glassNode=a.create("div",{style:{height:this.glassSize+"px",width:this.glassSize+"px"},className:"glassNode"},d.body());this.surfaceNode=a.create("div",null,this.glassNode);f.switchTo("canvas");this.surface=g.createSurface(this.surfaceNode,this.glassSize,this.glassSize);
this.img=this.surface.createImage({src:this.domNode.src,width:this._zoomSize.w,height:this._zoomSize.h})},_placeGlass:function(b){var e=b.pageX-2,a=b.pageY-2,c=this.offset.x+this.offset.w+2,d=this.offset.y+this.offset.h+2;e<this.offset.x||a<this.offset.y||e>c||a>d?this._hideGlass():this.inherited(arguments)},_setImage:function(b){var a=(b.pageX-this.offset.x)/this.offset.w;b=(b.pageY-this.offset.y)/this.offset.h;this.img.setShape({x:-1*this._zoomSize.w*a+this.glassSize*a,y:-1*this._zoomSize.h*b+this.glassSize*
b})}})});
//# sourceMappingURL=Magnifier.js.uncompressed.js.map