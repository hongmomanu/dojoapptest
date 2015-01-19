//>>built
define("dojox/grid/enhanced/plugins/AutoScroll","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/_base/window ../_Plugin ../../_RowSelector ../../EnhancedGrid".split(" "),function(m,n,p,l,q,r,s,t){m=m("dojox.grid.enhanced.plugins.AutoScroll",r,{name:"autoScroll",autoScrollInterval:1E3,autoScrollMargin:30,constructor:function(b,a){this.grid=b;this._scrolling=this.readyForAutoScroll=!1;a=p.isObject(a)?a:{};"interval"in a&&(this.autoScrollInterval=a.interval);"margin"in a&&(this.autoScrollMargin=
a.margin);this._initEvents();this._mixinGrid()},_initEvents:function(){var b=this.grid;this.connect(b,"onCellMouseDown",function(){this.readyForAutoScroll=!0});this.connect(b,"onHeaderCellMouseDown",function(){this.readyForAutoScroll=!0});this.connect(b,"onRowSelectorMouseDown",function(){this.readyForAutoScroll=!0});this.connect(q.doc,"onmouseup",function(a){this._manageAutoScroll(!0);this.readyForAutoScroll=!1});this.connect(q.doc,"onmousemove",function(a){if(this.readyForAutoScroll){this._event=
a;var c=l.position(b.domNode),e=b._getHeaderHeight(),d=this.autoScrollMargin,f=a.clientY,k=a.clientX;a=c.y;var g=c.x,h=c.h,c=c.w;if(k>=g&&k<=g+c){if(f>=a+e&&f<a+e+d){this._manageAutoScroll(!1,!0,!1);return}if(f>a+h-d&&f<=a+h){this._manageAutoScroll(!1,!0,!0);return}if(f>=a&&f<=a+h&&n.some(b.views.views,function(a,c){if(a instanceof s)return!1;var b=l.position(a.domNode);return k<b.x+d&&k>=b.x?(this._manageAutoScroll(!1,!1,!1,a),!0):k>b.x+b.w-d&&k<b.x+b.w?(this._manageAutoScroll(!1,!1,!0,a),!0):!1},
this))return}this._manageAutoScroll(!0)}})},_mixinGrid:function(){var b=this.grid;b.onStartAutoScroll=function(){};b.onEndAutoScroll=function(){}},_fireEvent:function(b,a){var c=this.grid;switch(b){case "start":c.onStartAutoScroll.apply(c,a);break;case "end":c.onEndAutoScroll.apply(c,a)}},_manageAutoScroll:function(b,a,c,e){b?(this._scrolling=!1,clearInterval(this._handler)):this._scrolling||(this._scrolling=!0,this._fireEvent("start",[a,c,e]),this._autoScroll(a,c,e),this._handler=setInterval(p.hitch(this,
"_autoScroll",a,c,e),this.autoScrollInterval))},_autoScroll:function(b,a,c){var e=this.grid,d=null;if(b){var f=e.scroller.firstVisibleRow+(a?1:-1);0<=f&&f<e.rowCount&&(e.scrollToRow(f),d=f)}else d=this._scrollColumn(a,c);null!==d&&this._fireEvent("end",[b,a,c,d,this._event])},_scrollColumn:function(b,a){var c=a.scrollboxNode,e=null;if(c.clientWidth<c.scrollWidth){var d=n.filter(this.grid.layout.cells,function(a){return!a.hidden}),f=l.position(a.domNode),k,g,h;if(b){k=c.clientWidth;for(h=0;h<d.length;++h)if(g=
l.position(d[h].getHeaderNode()),g=g.x-f.x+g.w,g>k){e=d[h].index;c.scrollLeft+=g-k+10;break}}else{k=0;for(h=d.length-1;0<=h;--h)if(g=l.position(d[h].getHeaderNode()),g=g.x-f.x,g<k){e=d[h].index;c.scrollLeft+=g-k-10;break}}}return e}});t.registerPlugin(m);return m});
//# sourceMappingURL=AutoScroll.js.uncompressed.js.map