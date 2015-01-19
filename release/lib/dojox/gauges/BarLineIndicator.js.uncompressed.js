//>>built
define("dojox/gauges/BarLineIndicator","dojo/_base/declare dojo/_base/fx dojo/_base/connect dojo/_base/lang dojox/gfx ./_Indicator".split(" "),function(f,g,h,k,d,l){return f("dojox.gauges.BarLineIndicator",[l],{width:1,_getShapes:function(c){if(!this._gauge)return null;var b=this.value;b<this._gauge.min&&(b=this._gauge.min);b>this._gauge.max&&(b=this._gauge.max);var b=this._gauge._getPosition(b),a=[];1<this.width?(a[0]=c.createRect({x:0,y:this._gauge.dataY+this.offset,width:this.width,height:this.length}),
a[0].setStroke({color:this.color}),a[0].setFill(this.color)):(a[0]=c.createLine({x1:0,y1:this._gauge.dataY+this.offset,x2:0,y2:this._gauge.dataY+this.offset+this.length}),a[0].setStroke({color:this.color}));a[0].setTransform(d.matrix.translate(b,0));return a},draw:function(c,b){if(this.shape)this._move(b);else{this.shape&&(this.shape.parent.remove(this.shape),this.shape=null);this.text&&(this.text.parent.remove(this.text),this.text=null);this.color=this.color||"#000000";this.length=this.length||this._gauge.dataHeight;
this.width=this.width||3;this.offset=this.offset||0;this.highlight=this.highlight||"#4D4D4D";this.highlight2=this.highlight2||"#A3A3A3";var a=this._getShapes(c,this._gauge,this);if(1<a.length){this.shape=c.createGroup();for(var e=0;e<a.length;e++)this.shape.add(a[e])}else this.shape=a[0];this.label&&(a=this.value,a<this._gauge.min&&(a=this._gauge.min),a>this._gauge.max&&(a=this._gauge.max),a=this._gauge._getPosition(a),"inside"==this.direction?(e=d.normalizedLength((this.font?this.font:d.defaultFont).size),
this.text=this._gauge.drawText(c,""+this.label,a,this._gauge.dataY+this.offset+this.length+5+e,"middle",this.color,this.font)):this.text=this._gauge.drawText(c,""+this.label,a,this._gauge.dataY+this.offset-5,"middle",this.color,this.font));this.shape.connect("onmouseover",this,this.handleMouseOver);this.shape.connect("onmouseout",this,this.handleMouseOut);this.shape.connect("onmousedown",this,this.handleMouseDown);this.shape.connect("touchstart",this,this.handleTouchStart);this.currentValue=this.value}},
_move:function(c){var b=this.value;b<this._gauge.min&&(b=this._gauge.min);b>this._gauge.max&&(b=this._gauge.max);var a=this._gauge._getPosition(this.currentValue);this.currentValue=b;b=this._gauge._getPosition(b);c||a==b?this.shape.setTransform(d.matrix.translate(b,0)):(c=new g.Animation({curve:[a,b],duration:this.duration,easing:this.easing}),h.connect(c,"onAnimate",k.hitch(this,function(a){this.shape&&this.shape.setTransform(d.matrix.translate(a,0))})),c.play())}})});
//# sourceMappingURL=BarLineIndicator.js.uncompressed.js.map