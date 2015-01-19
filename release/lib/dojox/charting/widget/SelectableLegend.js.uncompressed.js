//>>built
define("dojox/charting/widget/SelectableLegend","dojo/_base/array dojo/_base/declare dojo/query dojo/_base/connect dojo/_base/Color ./Legend dijit/form/CheckBox ../action2d/Highlight dojox/lang/functional dojox/gfx/fx dojo/keys dojo/dom-construct dojo/dom-prop dijit/registry".split(" "),function(e,n,f,m,x,p,q,r,y,z,g,s,t,u){var v=n(null,{constructor:function(a){this.legend=a;this.index=0;this.horizontalLength=this._getHrizontalLength();e.forEach(a.legends,function(a,c){0<c&&f("input",a).attr("tabindex",
-1)});this.firstLabel=f("input",a.legends[0])[0];m.connect(this.firstLabel,"focus",this,function(){this.legend.active=!0});m.connect(this.legend.domNode,"keydown",this,"_onKeyEvent")},_getHrizontalLength:function(){var a=this.legend.horizontal;return"number"==typeof a?Math.min(a,this.legend.legends.length):a?this.legend.legends.length:1},_onKeyEvent:function(a){if(this.legend.active)if(a.keyCode==g.TAB)this.legend.active=!1;else{var b=this.legend.legends.length;switch(a.keyCode){case g.LEFT_ARROW:this.index--;
0>this.index&&(this.index+=b);break;case g.RIGHT_ARROW:this.index++;this.index>=b&&(this.index-=b);break;case g.UP_ARROW:0<=this.index-this.horizontalLength&&(this.index-=this.horizontalLength);break;case g.DOWN_ARROW:this.index+this.horizontalLength<b&&(this.index+=this.horizontalLength);break;default:return}this._moveToFocus();Event.stop(a)}},_moveToFocus:function(){f("input",this.legend.legends[this.index])[0].focus()}}),w=n(r,{connect:function(){}});return n("dojox.charting.widget.SelectableLegend",
p,{outline:!1,transitionFill:null,transitionStroke:null,autoScale:!1,postCreate:function(){this.legends=[];this.legendAnim={};this._cbs=[];this.inherited(arguments)},refresh:function(){this.legends=[];this._clearLabels();this.inherited(arguments);this._applyEvents();new v(this)},_clearLabels:function(){for(var a=this._cbs;a.length;)a.pop().destroyRecursive()},_addLabel:function(a,b){this.inherited(arguments);var c=f("td",this.legendBody),d=c[c.length-1];this.legends.push(d);c=new q({checked:!0});
this._cbs.push(c);s.place(c.domNode,d,"first");d=f("label",d)[0];t.set(d,"for",c.id)},_applyEvents:function(){this.chart.dirty||e.forEach(this.legends,function(a,b){var c,d,k;this._isPie()?(c=this.chart.stack[0],d=c.name,k=this.chart.series[0].name):(c=this.chart.series[b],d=c.plot,k=c.name);var h=u.byNode(f(".dijitCheckBox",a)[0]);h.set("checked",!this._isHidden(d,b));m.connect(h,"onClick",this,function(a){this.toogle(d,b,!h.get("checked"));a.stopPropagation()});var l=f(".dojoxLegendIcon",a)[0],
g=this._getFilledShape(this._surfaces[b].children);e.forEach(["onmouseenter","onmouseleave"],function(a){m.connect(l,a,this,function(a){this._highlight(a,g,b,!h.get("checked"),k,d)})},this)},this)},_isHidden:function(a,b){return this._isPie()?-1!=e.indexOf(this.chart.getPlot(a).runFilter,b):this.chart.series[b].hidden},toogle:function(a,b,c){a=this.chart.getPlot(a);this._isPie()?-1!=e.indexOf(a.runFilter,b)?c||(a.runFilter=e.filter(a.runFilter,function(a){return a!=b})):c&&a.runFilter.push(b):this.chart.series[b].hidden=
c;this.autoScale?this.chart.dirty=!0:a.dirty=!0;this.chart.render()},_highlight:function(a,b,c,d,k,h){if(!d){var l=this._getAnim(h),f=this._isPie(),g="mouseenter"==a.type?"onmouseover":"mouseleave"==a.type?"onmouseout":"on"+a.type;l.process({shape:b,index:f?"legend"+c:"legend",run:{name:k},type:g});e.forEach(this._getShapes(c,h),function(a,b){var d={shape:a,index:f?c:b,run:{name:k},type:g};l.duration=100;l.process(d)})}},_getShapes:function(a,b){var c=[];if(this._isPie()){var d=0;e.forEach(this.chart.getPlot(b).runFilter,
function(b){a>b&&d++});c.push(this.chart.stack[0].group.children[a-d])}else this._isCandleStick(b)?e.forEach(this.chart.series[a].group.children,function(a){e.forEach(a.children,function(a){e.forEach(a.children,function(a){"line"!=a.shape.type&&c.push(a)})})}):c=this.chart.series[a].group.children;return c},_getAnim:function(a){this.legendAnim[a]||(this.legendAnim[a]=new w(this.chart,a));return this.legendAnim[a]},_getTransitionFill:function(a){return-1!=this.chart.stack[this.chart.plots[a]].declaredClass.indexOf("dojox.charting.plot2d.Stacked")?
this.chart.theme.plotarea.fill:null},_getFilledShape:function(a){for(var b=0;a[b];){if(a[b].getFill())return a[b];b++}return null},_isPie:function(){return"dojox.charting.plot2d.Pie"==this.chart.stack[0].declaredClass},_isCandleStick:function(a){return"dojox.charting.plot2d.Candlesticks"==this.chart.stack[this.chart.plots[a]].declaredClass},destroy:function(){this._clearLabels();this.inherited(arguments)}})});
//# sourceMappingURL=SelectableLegend.js.uncompressed.js.map