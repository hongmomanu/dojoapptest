//>>built
define("dojox/drawing/tools/Rect",["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Rect"],function(g,f,h,k){f=f.declare(k,function(){},{draws:!0,onDrag:function(a){var b=a.start,c=b.x<a.x?b.x:a.x,d=b.y<a.y?b.y:a.y,e=b.x<a.x?a.x-b.x:b.x-a.x;a=b.y<a.y?a.y-b.y:b.y-a.y;this.keys.shift&&(e=a=Math.max(e,a));this.keys.alt&&(c-=e,d-=a,e*=2,a*=2,c=Math.max(c,0),d=Math.max(d,0));this.setPoints([{x:c,y:d},{x:c+e,y:d},{x:c+e,y:d+a},{x:c,y:d+a}]);this.render()},onUp:function(a){if(!this.created&&
this._downOnCanvas){this._downOnCanvas=!1;if(this.shape){if(a=this.data,a.width<this.minimumSize&&a.height<this.minimumSize){this.remove(this.shape,this.hit);return}}else{a=a.start;var b=4*this.minimumSize;this.setPoints([{x:a.x,y:a.y},{x:a.x+b,y:a.y},{x:a.x+b,y:a.y+b},{x:a.x,y:a.y+b}]);this.render()}this.onRender(this)}}});g.setObject("dojox.drawing.tools.Rect",f);f.setup={name:"dojox.drawing.tools.Rect",tooltip:'\x3cspan class\x3d"drawingTipTitle"\x3eRectangle Tool\x3c/span\x3e\x3cbr/\x3e\x3cspan class\x3d"drawingTipDesc"\x3eSHIFT - constrain to square\x3c/span\x3e',
iconClass:"iconRect"};h.register(f.setup,"tool");return f});
//# sourceMappingURL=Rect.js.uncompressed.js.map