//>>built
define("dijit/tree/dndSource","dojo/_base/array dojo/_base/declare dojo/dnd/common dojo/dom-class dojo/dom-geometry dojo/_base/lang dojo/on dojo/touch dojo/topic dojo/dnd/Manager ./_dndSelector".split(" "),function(p,u,v,t,w,m,y,z,n,k,x){return u("dijit.tree.dndSource",x,{isSource:!0,accept:["text","treeNode"],copyOnly:!1,dragThreshold:5,betweenThreshold:0,generateText:!0,constructor:function(a,h){h||(h={});m.mixin(this,h);var c=h.accept instanceof Array?h.accept:["text","treeNode"];this.accept=null;
if(c.length){this.accept={};for(var d=0;d<c.length;++d)this.accept[c[d]]=1}this.mouseDown=this.isDragging=!1;this.targetBox=this.targetAnchor=null;this.dropPosition="";this._lastY=this._lastX=0;this.sourceState="";this.isSource&&t.add(this.node,"dojoDndSource");this.targetState="";this.accept&&t.add(this.node,"dojoDndTarget");this.topics=[n.subscribe("/dnd/source/over",m.hitch(this,"onDndSourceOver")),n.subscribe("/dnd/start",m.hitch(this,"onDndStart")),n.subscribe("/dnd/drop",m.hitch(this,"onDndDrop")),
n.subscribe("/dnd/cancel",m.hitch(this,"onDndCancel"))]},checkAcceptance:function(){return!0},copyState:function(a){return this.copyOnly||a},destroy:function(){this.inherited(arguments);for(var a;a=this.topics.pop();)a.remove();this.targetAnchor=null},_onDragMouse:function(a,h){var c=k.manager(),d=this.targetAnchor,b=this.current,e=this.dropPosition,f="Over";if(b&&0<this.betweenThreshold){if(!this.targetBox||d!=b)this.targetBox=w.position(b.rowNode,!0);a.pageY-this.targetBox.y<=this.betweenThreshold?
f="Before":a.pageY-this.targetBox.y>=this.targetBox.h-this.betweenThreshold&&(f="After")}if(h||b!=d||f!=e){d&&this._removeItemClass(d.rowNode,e);b&&this._addItemClass(b.rowNode,f);if(b)if(b==this.tree.rootNode&&"Over"!=f)c.canDrop(!1);else{e=d=!1;if(c.source==this){var e="Over"===f,g;for(g in this.selection){var l=this.selection[g];if(l.item===b.item){d=!0;break}l.getParent().id!==b.id&&(e=!1)}}c.canDrop(!d&&!e&&!this._isParentChildDrop(c.source,b.rowNode)&&this.checkItemAcceptance(b.rowNode,c.source,
f.toLowerCase()))}else c.canDrop(!1);this.targetAnchor=b;this.dropPosition=f}},onMouseMove:function(a){if(!(this.isDragging&&"Disabled"==this.targetState)){this.inherited(arguments);var h=k.manager();if(this.isDragging)this._onDragMouse(a);else if(this.mouseDown&&this.isSource&&(Math.abs(a.pageX-this._lastX)>=this.dragThreshold||Math.abs(a.pageY-this._lastY)>=this.dragThreshold)){var c=this.getSelectedTreeNodes();if(c.length){if(1<c.length){var d=this.selection,b=0,e=[],f,g;a:for(;f=c[b++];){for(g=
f.getParent();g&&g!==this.tree;g=g.getParent())if(d[g.id])continue a;e.push(f)}c=e}c=p.map(c,function(a){return a.domNode});h.startDrag(this,c,this.copyState(v.getCopyKeyState(a)));this._onDragMouse(a,!0)}}}},onMouseDown:function(a){this.mouseDown=!0;this.mouseButton=a.button;this._lastX=a.pageX;this._lastY=a.pageY;this.inherited(arguments)},onMouseUp:function(a){this.mouseDown&&(this.mouseDown=!1,this.inherited(arguments))},onMouseOut:function(){this.inherited(arguments);this._unmarkTargetAnchor()},
checkItemAcceptance:function(){return!0},onDndSourceOver:function(a){this!=a?(this.mouseDown=!1,this._unmarkTargetAnchor()):this.isDragging&&k.manager().canDrop(!1)},onDndStart:function(a,h,c){this.isSource&&this._changeState("Source",this==a?c?"Copied":"Moved":"");h=this.checkAcceptance(a,h);this._changeState("Target",h?"":"Disabled");this==a&&k.manager().overSource(this);this.isDragging=!0},itemCreator:function(a){return p.map(a,function(a){return{id:a.id,name:a.textContent||a.innerText||""}})},
onDndDrop:function(a,h,c){if("Over"==this.containerState){var d=this.tree,b=d.model,e=this.targetAnchor;this.isDragging=!1;var f,g,l;f=e&&e.item||d.item;"Before"==this.dropPosition||"After"==this.dropPosition?(f=e.getParent()&&e.getParent().item||d.item,g=e.getIndexInParent(),"After"==this.dropPosition?(g=e.getIndexInParent()+1,l=e.getNextSibling()&&e.getNextSibling().item):l=e.item):f=e&&e.item||d.item;var k;p.forEach(h,function(d,m){var n=a.getItem(d.id);if(-1!=p.indexOf(n.type,"treeNode"))var q=
n.data,r=q.item,s=q.getParent().item;a==this?("number"==typeof g&&f==s&&q.getIndexInParent()<g&&(g-=1),b.pasteItem(r,s,f,c,g,l)):b.isItem(r)?b.pasteItem(r,s,f,c,g,l):(k||(k=this.itemCreator(h,e.rowNode,a)),b.newItem(k[m],f,g,l))},this);this.tree._expandNode(e)}this.onDndCancel()},onDndCancel:function(){this._unmarkTargetAnchor();this.mouseDown=this.isDragging=!1;delete this.mouseButton;this._changeState("Source","");this._changeState("Target","")},onOverEvent:function(){this.inherited(arguments);
k.manager().overSource(this)},onOutEvent:function(){this._unmarkTargetAnchor();var a=k.manager();this.isDragging&&a.canDrop(!1);a.outSource(this);this.inherited(arguments)},_isParentChildDrop:function(a,h){if(!a.tree||a.tree!=this.tree)return!1;for(var c=a.tree.domNode,d=a.selection,b=h.parentNode;b!=c&&!d[b.id];)b=b.parentNode;return b.id&&d[b.id]},_unmarkTargetAnchor:function(){this.targetAnchor&&(this._removeItemClass(this.targetAnchor.rowNode,this.dropPosition),this.dropPosition=this.targetBox=
this.targetAnchor=null)},_markDndStatus:function(a){this._changeState("Source",a?"Copied":"Moved")}})});
//# sourceMappingURL=dndSource.js.uncompressed.js.map