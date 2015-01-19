//>>built
define("dojox/charting/plot2d/Default","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx".split(" "),function(q,C,m,J,K,L,v,M,N,w,O){var P=N.lambda("item.purgeGroup()");return C("dojox.charting.plot2d.Default",[K,L],{defaultParams:{lines:!0,areas:!1,markers:!1,tension:"",animate:!1,enableCache:!1,interpolate:!1},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},
filter:{},styleFunc:null,font:"",fontColor:"",marker:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",markerFontColor:""},constructor:function(d,c){this.opt=q.clone(q.mixin(this.opt,this.defaultParams));w.updateWithObject(this.opt,c);w.updateWithPattern(this.opt,c,this.optionalParams);this.animate=this.opt.animate},createPath:function(d,c,b){var f;this.opt.enableCache&&0<d._pathFreePool.length?(f=d._pathFreePool.pop(),f.setShape(b),c.add(f)):f=c.createPath(b);this.opt.enableCache&&
d._pathUsePool.push(f);return f},buildSegments:function(d,c){for(var b=this.series[d],f=c?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,m=c?Math.min(b.data.length,Math.ceil(this._hScaler.bounds.to)):b.data.length,h=null,q=[];f<m;f++)if(null!=b.data[f]&&(c||null!=b.data[f].y))h||(h=[],q.push({index:f,rseg:h})),h.push(c&&b.data[f].hasOwnProperty("y")?b.data[f].y:b.data[f]);else if(!this.opt.interpolate||c)h=null;return q},render:function(d,c){if(this.zoom&&!this.isDataDirty())return this.performZoom(d,
c);this.resetEvents();this.dirty=this.isDirty();var b;this.dirty&&(m.forEach(this.series,P),this._eventSeries={},this.cleanGroup(),this.getGroup().setTransform(null),b=this.getGroup(),M.forEachRev(this.series,function(a){a.cleanGroup(b)}));for(var f=this.chart.theme,r,h,w=this.events(),x=this.series.length-1;0<=x;--x){var a=this.series[x];if(!this.dirty&&!a.dirty)f.skip(),this._reconnectEvents(a.name);else if(a.cleanGroup(),this.opt.enableCache&&(a._pathFreePool=(a._pathFreePool?a._pathFreePool:[]).concat(a._pathUsePool?
a._pathUsePool:[]),a._pathUsePool=[]),a.data.length){var g=f.next(this.opt.areas?"area":"line",[this.opt,a],!0),e,D=this._hScaler.scaler.getTransformerFromModel(this._hScaler),E=this._vScaler.scaler.getTransformerFromModel(this._vScaler),C=this._eventSeries[a.name]=Array(a.data.length);b=a.group;if(a.hidden)this.opt.lines&&(a.dyn.stroke=g.series.stroke),this.opt.markers&&(a.dyn.markerFill=g.marker.fill,a.dyn.markerStroke=g.marker.stroke,a.dyn.marker=g.symbol),this.opt.areas&&(a.dyn.fill=g.series.fill);
else{for(var y=m.some(a.data,function(a){return"number"==typeof a||a&&!a.hasOwnProperty("x")}),z=this.buildSegments(x,y),t=0;t<z.length;t++){var l=z[t];e=y?m.map(l.rseg,function(a,b){return{x:D(b+l.index+1)+c.l,y:d.height-c.b-E(a),data:a}},this):m.map(l.rseg,function(a){return{x:D(a.x)+c.l,y:d.height-c.b-E(a.y),data:a}},this);if(y&&this.opt.interpolate)for(;t<z.length;)t++,(l=z[t])&&(e=e.concat(m.map(l.rseg,function(a,b){return{x:D(b+l.index+1)+c.l,y:d.height-c.b-E(a),data:a}},this)));var n=this.opt.tension?
v.curve(e,this.opt.tension):"";if(this.opt.areas&&1<e.length){var u=this._plotFill(g.series.fill,d,c),p=q.clone(e);this.opt.tension?a.dyn.fill=b.createPath(n+" "+("L"+p[p.length-1].x+","+(d.height-c.b)+" L"+p[0].x+","+(d.height-c.b)+" L"+p[0].x+","+p[0].y)).setFill(u).getFill():(p.push({x:e[e.length-1].x,y:d.height-c.b}),p.push({x:e[0].x,y:d.height-c.b}),p.push(e[0]),a.dyn.fill=b.createPolyline(p).setFill(u).getFill())}if(this.opt.lines||this.opt.markers)r=g.series.stroke,g.series.outline&&(h=a.dyn.outline=
v.makeStroke(g.series.outline),h.width=2*h.width+r.width);this.opt.markers&&(a.dyn.marker=g.symbol);var A=null,F=null,G=null;if(r&&g.series.shadow&&1<e.length){var s=g.series.shadow,u=m.map(e,function(a){return{x:a.x+s.dx,y:a.y+s.dy}});this.opt.lines&&(a.dyn.shadow=this.opt.tension?b.createPath(v.curve(u,this.opt.tension)).setStroke(s).getStroke():b.createPolyline(u).setStroke(s).getStroke());this.opt.markers&&g.marker.shadow&&(s=g.marker.shadow,G=m.map(u,function(c){return this.createPath(a,b,"M"+
c.x+" "+c.y+" "+g.symbol).setStroke(s).setFill(s.color)},this))}if(this.opt.lines&&1<e.length){var B;h&&(a.dyn.outline=this.opt.tension?b.createPath(n).setStroke(h).getStroke():b.createPolyline(e).setStroke(h).getStroke());a.dyn.stroke=this.opt.tension?(B=b.createPath(n)).setStroke(r).getStroke():(B=b.createPolyline(e)).setStroke(r).getStroke();B.setFilter&&g.series.filter&&B.setFilter(g.series.filter)}n=null;if(this.opt.markers){var k=g,A=Array(e.length),F=Array(e.length);h=null;k.marker.outline&&
(h=v.makeStroke(k.marker.outline),h.width=2*h.width+(k.marker.stroke?k.marker.stroke.width:0));m.forEach(e,function(c,e){if(this.opt.styleFunc||"number"!=typeof c.data){var d="number"!=typeof c.data?[c.data]:[];this.opt.styleFunc&&d.push(this.opt.styleFunc(c.data));k=f.addMixin(g,"marker",d,!0)}else k=f.post(g,"marker");d="M"+c.x+" "+c.y+" "+k.symbol;h&&(F[e]=this.createPath(a,b,d).setStroke(h));A[e]=this.createPath(a,b,d).setStroke(k.marker.stroke).setFill(k.marker.fill)},this);a.dyn.markerFill=
k.marker.fill;a.dyn.markerStroke=k.marker.stroke;!n&&this.opt.labels&&(n=A[0].getBoundingBox());w?m.forEach(A,function(c,b){var d={element:"marker",index:b+l.index,run:a,shape:c,outline:F[b]||null,shadow:G&&G[b]||null,cx:e[b].x,cy:e[b].y};y?(d.x=b+l.index+1,d.y=a.data[b+l.index]):(d.x=l.rseg[b].x,d.y=a.data[b+l.index].y);this._connectEvents(d);C[b+l.index]=d},this):delete this._eventSeries[a.name]}if(this.opt.labels){var H=n?n.width:2,I=n?n.height:2;m.forEach(e,function(a,c){if(this.opt.styleFunc||
"number"!=typeof a.data){var d="number"!=typeof a.data?[a.data]:[];this.opt.styleFunc&&d.push(this.opt.styleFunc(a.data));k=f.addMixin(g,"marker",d,!0)}else k=f.post(g,"marker");this.createLabel(b,l.rseg[c],{x:a.x-H/2,y:a.y-I/2,width:H,height:I},k)},this)}}a.dirty=!1}}else a.dirty=!1,f.skip()}J("dojo-bidi")&&this._checkOrientation(this.group,d,c);this.animate&&(r=this.getGroup(),O.animateTransform(q.delegate({shape:r,duration:1200,transform:[{name:"translate",start:[0,d.height-c.b],end:[0,0]},{name:"scale",
start:[1,0],end:[1,1]},{name:"original"}]},this.animate)).play());this.dirty=!1;return this}})});
//# sourceMappingURL=Default.js.uncompressed.js.map