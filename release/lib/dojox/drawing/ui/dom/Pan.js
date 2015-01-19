//>>built
define("dojox/drawing/ui/dom/Pan",["dojo","../../util/oo","../../plugins/_Plugin","../../manager/_registry"],function(a,d,u,v){a.deprecated("dojox.drawing.ui.dom.Pan","It may not even make it to the 1.4 release.",1.4);d=d.declare(u,function(b){this.domNode=b.node;var n;a.connect(this.domNode,"click",this,"onSetPan");a.connect(this.keys,"onKeyUp",this,"onKeyUp");a.connect(this.keys,"onKeyDown",this,"onKeyDown");a.connect(this.anchors,"onAnchorUp",this,"checkBounds");a.connect(this.stencils,"register",
this,"checkBounds");a.connect(this.canvas,"resize",this,"checkBounds");a.connect(this.canvas,"setZoom",this,"checkBounds");a.connect(this.canvas,"onScroll",this,function(){this._blockScroll?this._blockScroll=!1:(n&&clearTimeout(n),n=setTimeout(a.hitch(this,"checkBounds"),200))});this._mouseHandle=this.mouse.register(this)},{selected:!1,type:"dojox.drawing.ui.dom.Pan",onKeyUp:function(b){if(32==b.keyCode)this.onSetPan(!1)},onKeyDown:function(b){if(32==b.keyCode)this.onSetPan(!0)},onSetPan:function(b){if(!0===
b||!1===b)this.selected=!b;this.selected?(this.selected=!1,a.removeClass(this.domNode,"selected")):(this.selected=!0,a.addClass(this.domNode,"selected"));this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(b){this.canvas.domNode.parentNode.scrollTop-=b.move.y;this.canvas.domNode.parentNode.scrollLeft-=b.move.x;this.canvas.onScroll()},onStencilUp:function(b){this.checkBounds()},onStencilDrag:function(b){},checkBounds:function(){var b=Infinity,a=-Infinity,e=-Infinity,d=Infinity,p=0,
q=0,k=this.stencils.group?this.stencils.group.getTransform():{dx:0,dy:0},f=this.mouse.scrollOffset(),g=this.canvas.height,h=this.canvas.width,t=this.canvas.zoom,l=this.canvas.parentHeight,m=this.canvas.parentWidth;this.stencils.withSelected(function(c){c=c.getBounds();b=Math.min(c.y1+k.dy,b);a=Math.max(c.x2+k.dx,a);e=Math.max(c.y2+k.dy,e);d=Math.min(c.x1+k.dx,d)});this.stencils.withUnselected(function(c){c=c.getBounds();b=Math.min(c.y1,b);a=Math.max(c.x2,a);e=Math.max(c.y2,e);d=Math.min(c.x1,d)});
var e=e*t,r=0,s=0;e>l||f.top?(g=Math.max(e,l+f.top),q=f.top,r+=this.canvas.getScrollWidth()):!q&&g>l&&(g=l);a*=t;a>m||f.left?(h=Math.max(a,m+f.left),p=f.left,s+=this.canvas.getScrollWidth()):!p&&h>m&&(h=m);h+=2*r;g+=2*s;this._blockScroll=!0;this.stencils.group&&this.stencils.group.applyTransform({dx:0,dy:0});this.stencils.withUnselected(function(a){a.transformPoints({dx:0,dy:0})});this.canvas.setDimensions(h,g,p,q)}});a.setObject("dojox.drawing.ui.dom.Pan",d);d.setup={name:"dojox.drawing.ui.dom.Pan",
tooltip:"Pan Tool",iconClass:"iconPan"};v.register(d.setup,"plugin");return d});
//# sourceMappingURL=Pan.js.map