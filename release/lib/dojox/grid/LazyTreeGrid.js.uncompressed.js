//>>built
require({cache:{"url:dojox/grid/resources/Expando.html":'\x3cdiv class\x3d"dojoxGridExpando"\n\t\x3e\x3cdiv class\x3d"dojoxGridExpandoNode" dojoAttachEvent\x3d"onclick:onToggle"\n\t\t\x3e\x3cdiv class\x3d"dojoxGridExpandoNodeInner" dojoAttachPoint\x3d"expandoInner"\x3e\x3c/div\n\t\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});require({cache:{"url:dojox/grid/resources/Expando.html":'\x3cdiv class\x3d"dojoxGridExpando"\n\t\x3e\x3cdiv class\x3d"dojoxGridExpandoNode" dojoAttachEvent\x3d"onclick:onToggle"\n\t\t\x3e\x3cdiv class\x3d"dojoxGridExpandoNodeInner" dojoAttachPoint\x3d"expandoInner"\x3e\x3c/div\n\t\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dojox/grid/LazyTreeGrid","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/event dojo/_base/array dojo/query dojo/parser dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom dojo/keys dojo/text!./resources/Expando.html dijit/_Widget dijit/_TemplatedMixin ./TreeGrid ./_Builder ./_View ./_Layout ./cells/tree ./_RowManager ./_FocusManager ./_EditManager ./DataSelection ./util".split(" "),function(C,k,h,D,u,y,E,z,p,F,s,G,H,t,I,J,A,K,x,L,M,N,O,P,Q,R){var S=
k("dojox.grid._LazyExpando",[I,J],{grid:null,view:null,rowIdx:-1,cellIdx:-1,level:0,itemId:"",templateString:t,onToggle:function(a){if(this.grid._treeCache.items[this.rowIdx]){this.grid.focus.setFocusIndex(this.rowIdx,this.cellIdx);this.setOpen(!this.grid._treeCache.items[this.rowIdx].opened);try{D.stop(a)}catch(b){}}},setOpen:function(a){var b=this.grid,c=b._by_idx[this.rowIdx].item;c&&(b.treeModel.mayHaveChildren(c)&&!b._loading&&b._treeCache.items[this.rowIdx].opened!==a)&&(b._treeCache.items[this.rowIdx].opened=
a,b.expandoFetch(this.rowIdx,a),this._updateOpenState(c))},_updateOpenState:function(a){var b=this.grid;a&&b.treeModel.mayHaveChildren(a)?(a=b._treeCache.items[this.rowIdx].opened,this.expandoInner.innerHTML=a?"-":"+",p.toggle(this.domNode,"dojoxGridExpandoOpened",a),this.domNode.parentNode.setAttribute("aria-expanded",a)):p.remove(this.domNode,"dojoxGridExpandoOpened")},setRowNode:function(a,b,c){if(0>this.cellIdx||!this.itemId)return!1;this.view=c;this.grid=c.grid;this.rowIdx=a;a=this.grid.isLeftToRight()?
"marginLeft":"marginRight";F.set(this.domNode.parentNode,a,1.125*this.level+"em");this._updateOpenState(this.grid._by_idx[this.rowIdx].item);return!0}});t=k("dojox.grid._TreeGridContentBuilder",K._ContentBuilder,{generateHtml:function(a,b){var c=this.getTableArray(),d=this.grid,g=this.view.structure.cells,e=d.getItem(b),f=0,B="",m=d._treeCache.items[b]?d._treeCache.items[b].treePath:null;R.fire(this.view,"onBeforeRow",[b,g]);e&&h.isArray(m)&&(f=m.length,B=d.treeModel.mayHaveChildren(e)?"":"dojoxGridNoChildren");
for(var l=0,d=0,k,n,p=0,t=[];k=g[d];d++)if(!k.hidden&&!k.header){c.push('\x3ctr class\x3d"'+B+'"\x3e');(m=this._getColSpans(f))&&u.forEach(m,function(a){for(l=0;n=k[l];l++)l>=a.start&&l<=a.end&&(p+=this._getCellWidth(k,l));t.push(p);p=0},this);for(var q,v,w,r=0,l=0;n=k[l];l++)q=n.markup,v=n.customClasses=[],w=n.customStyles=[],m&&m[r]&&l>=m[r].start&&l<=m[r].end?l==(m[r].primary||m[r].start)?(q[5]=n.formatAtLevel(e,f,b),q[1]=v.join(" "),v=s.getMarginBox(n.getHeaderNode()).w-s.getContentBox(n.getHeaderNode()).w,
w=n.customStyles=["width:"+(t[r]-v)+"px"],q[3]=w.join(";"),c.push.apply(c,q)):l==m[r].end&&r++:(q[5]=n.formatAtLevel(e,f,b),q[1]=v.join(" "),q[3]=w.join(";"),c.push.apply(c,q));c.push("\x3c/tr\x3e")}c.push("\x3c/table\x3e");return c.join("")},_getColSpans:function(a){var b=this.grid.colSpans;return b&&b[a]?b[a]:null},_getCellWidth:function(a,b){var c=a[b],d=c.getHeaderNode();if(c.hidden)return 0;if(b==a.length-1||u.every(a.slice(b+1),function(a){return a.hidden}))return c=s.position(a[b].view.headerContentNode.firstChild),
c.x+c.w-s.position(d).x;do c=a[++b];while(c.hidden);return s.position(c.getHeaderNode()).x-s.position(d).x}});k("dojox.grid._TreeGridView",x,{_contentBuilderClass:t,postCreate:function(){this.inherited(arguments);this._expandos={};this.connect(this.grid,"_onCleanupExpandoCache","_cleanupExpandoCache")},destroy:function(){this._cleanupExpandoCache();this.inherited(arguments)},_cleanupExpandoCache:function(a){if(a&&this._expandos[a])this._expandos[a].destroy(),delete this._expandos[a];else{for(var b in this._expandos)this._expandos[b].destroy();
this._expandos={}}},onAfterRow:function(a,b,c){y("span.dojoxGridExpando",c).forEach(function(b){if(b&&b.parentNode){var g,e,f=this.grid._by_idx;f&&(f[a]&&f[a].idty)&&(g=f[a].idty,e=this._expandos[g]);e?(z.place(e.domNode,b,"replace"),e.itemId=b.getAttribute("itemId"),e.cellIdx=parseInt(b.getAttribute("cellIdx"),10),isNaN(e.cellIdx)&&(e.cellIdx=-1)):(e=E.parse(b.parentNode)[0],g&&(this._expandos[g]=e));e.setRowNode(a,c,this)||e.domNode.parentNode.removeChild(e.domNode);z.destroy(b)}},this);this.inherited(arguments)},
updateRow:function(a){var b=this.grid,c;b.keepSelection&&(c=b.getItem(a))&&b.selection.preserver._reSelectById(c,a);this.inherited(arguments)}});var T=h.mixin(h.clone(M),{formatAtLevel:function(a,b,c){if(!a)return this.formatIndexes(c,a,b);var d="";this.isCollapsable&&this.grid.store.isItem(a)&&(d="\x3cspan "+C._scopeName+'Type\x3d"dojox.grid._LazyExpando" level\x3d"'+b+'" class\x3d"dojoxGridExpando" itemId\x3d"'+this.grid.store.getIdentity(a)+'" cellIdx\x3d"'+this.index+'"\x3e\x3c/span\x3e');a=this.formatIndexes(c,
a,b);return""!==d?"\x3cdiv\x3e"+d+a+"\x3c/div\x3e":a},formatIndexes:function(a,b,c){var d=this.grid.edit.info;b=this.get?this.get(a,b):this.value||this.defaultValue;if(this.editable&&(this.alwaysEditing||d.rowIndex===a&&d.cell===this))return this.formatEditing(b,a);d=this.textDir||this.grid.textDir;a=this._defaultFormat(b,[b,a,c,this]);d&&this._enforceTextDirWithUcc&&(a=this._enforceTextDirWithUcc(d,a));return a}});x=k("dojox.grid._LazyTreeLayout",L,{setStructure:function(a){var b=a;this.grid&&!u.every(b,
function(a){return!!a.cells})&&(b=arguments[0]=[{cells:[b]}]);1===b.length&&1===b[0].cells.length&&(b[0].type="dojox.grid._TreeGridView",this._isCollapsable=!0,b[0].cells[0][this.grid.expandoCell].isCollapsable=!0);this.inherited(arguments)},addCellDef:function(a,b,c){var d=this.inherited(arguments);return h.mixin(d,T)}});var U=k("dojox.grid._LazyTreeGridCache",null,{constructor:function(){this.items=[]},getSiblingIndex:function(a,b){for(var c=a-1,d=0,g;0<=c;c--)if(g=this.items[c]?this.items[c].treePath:
[],g.join("/")===b.join("/"))d++;else if(g.length<b.length)break;return d},removeChildren:function(a){for(var b=a+1,c,d=this.items[a]?this.items[a].treePath:[];b<this.items.length&&!(c=this.items[b]?this.items[b].treePath:[],c.join("/")===d.join("/")||c.length<=d.length);b++);b-=a+1;this.items.splice(a+1,b);return b}});k=k("dojox.grid.LazyTreeGrid",A,{_layoutClass:x,_size:0,treeModel:null,defaultState:null,colSpans:null,postCreate:function(){this._setState();this.inherited(arguments);this._treeCache||
(this._treeCache=new U);if(!this.treeModel||!(this.treeModel instanceof dijit.tree.ForestStoreModel))throw Error("dojox.grid.LazyTreeGrid: must be used with a treeModel which is an instance of dijit.tree.ForestStoreModel");p.add(this.domNode,"dojoxGridTreeModel");G.setSelectable(this.domNode,this.selectable)},createManagers:function(){this.rows=new N(this);this.focus=new O(this);this.edit=new P(this)},createSelection:function(){this.selection=new Q(this)},setModel:function(a){a&&(this._setModel(a),
this._cleanup(),this._refresh(!0))},setStore:function(a,b,c){a&&(this._setQuery(b,c),this.treeModel.query=b,this.treeModel.store=a,this.treeModel.root.children=[],this.setModel(this.treeModel))},onSetState:function(){},_setState:function(){this.defaultState&&(this._treeCache=this.defaultState.cache,this.sortInfo=this.defaultState.sortInfo||0,this.query=this.defaultState.query||this.query,this._lastScrollTop=this.defaultState.scrollTop,this.keepSelection?this.selection.preserver._selectedById=this.defaultState.selection:
this.selection.selected=this.defaultState.selection||[],this.onSetState())},getState:function(){var a=this.keepSelection?this.selection.preserver._selectedById:this.selection.selected;return{cache:h.clone(this._treeCache),query:h.clone(this.query),sortInfo:h.clone(this.sortInfo),scrollTop:h.clone(this.scrollTop),selection:h.clone(a)}},_setQuery:function(a,b){this.inherited(arguments);this.treeModel.query=a},filter:function(a,b){this._cleanup();this.inherited(arguments)},destroy:function(){this._cleanup();
this.inherited(arguments)},expand:function(a){this._fold(a,!0)},collapse:function(a){this._fold(a,!1)},refresh:function(a){a||this._cleanup();this._refresh(!0)},_cleanup:function(){this._treeCache.items=[];this._onCleanupExpandoCache()},setSortIndex:function(a,b){this.canSort(a+1)&&this._cleanup();this.inherited(arguments)},_refresh:function(a){this._clearData();this.updateRowCount(this._size);this._fetch(0,!0)},render:function(){this.inherited(arguments);this.setScrollTop(this.scrollTop)},_onNew:function(a,
b){var c=b&&this.store.isItem(b.item)&&u.some(this.treeModel.childrenAttrs,function(a){return a===b.attribute}),d=this._treeCache.items,g=this._by_idx;if(c){for(var c=this.store.getIdentity(b.item),e=-1,f=0;f<g.length;f++)if(c===g[f].idty){e=f;break}if(0<=e)if(d[e]&&d[e].opened){f=d[e].treePath;for(e+=1;e<d.length&&!(d[e].treePath.length<=f.length);e++);d=f.slice();d.push(c);this._treeCache.items.splice(e,0,{opened:!1,treePath:d});d=this.store.getIdentity(a);this._by_idty[d]={idty:d,item:a};g.splice(e,
0,this._by_idty[d]);this._size+=1;this.updateRowCount(this._size);this._updateRenderedRows(e)}else this.updateRow(e)}else d.push({opened:!1,treePath:[]}),this._size+=1,this.inherited(arguments)},_onDelete:function(a){var b=0,c=-1;for(a=this.store.getIdentity(a);b<this._by_idx.length;b++)if(a===this._by_idx[b].idty){c=b;break}if(0<=c){for(var d=this._treeCache.items,g=d[c]?d[c].treePath:[],e=1,b=c+1;b<this._size&&!(d[b].treePath.length<=g.length);b++,e++);d.splice(c,e);this._onCleanupExpandoCache(a);
this._by_idx.splice(c,e);this._size-=e;this.updateRowCount(this._size);this._updateRenderedRows(c)}},_onCleanupExpandoCache:function(a){},_fetch:function(a,b){this._loading||(this._loading=!0);a=a||0;var c=0<this._size-a?Math.min(this.rowsPerPage,this._size-a):this.rowsPerPage,d=0,g=[];for(this._reqQueueLen=0;d<c;d++)if(this._by_idx[a+d])g.push(this._by_idx[a+d].item);else break;if(g.length===c)this._reqQueueLen=1,this._onFetchBegin(this._size,{startRowIdx:a,count:c}),this._onFetchComplete(g,{startRowIdx:a,
count:c});else{for(var e,f=1,h=this._treeCache.items,k=h[a]?h[a].treePath:[],d=1;d<c;d++)g=h[a+f-1]?h[a+f-1].treePath.length:0,e=h[a+f]?h[a+f].treePath.length:0,g!==e?(this._reqQueueLen++,this._fetchItems({startRowIdx:a,count:f,treePath:k}),a+=f,f=1,k=h[a]?h[a].treePath:0):f++;this._reqQueueLen++;this._fetchItems({startRowIdx:a,count:f,treePath:k})}},_fetchItems:function(a){if(!this._pending_requests[a.startRowIdx]){this.showMessage(this.loadingMessage);this._pending_requests[a.startRowIdx]=!0;var b=
h.hitch(this,"_onFetchError"),c=this._treeCache.getSiblingIndex(a.startRowIdx,a.treePath);if(0===a.treePath.length)this.store.fetch({start:c,startRowIdx:a.startRowIdx,treePath:a.treePath,count:a.count,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,onBegin:h.hitch(this,"_onFetchBegin"),onComplete:h.hitch(this,"_onFetchComplete"),onError:h.hitch(this,"_onFetchError")});else{var d=a.treePath[a.treePath.length-1],g={start:c,startRowIdx:a.startRowIdx,treePath:a.treePath,count:a.count,
parentId:d,sort:this.getSortProps()},e=this,f=function(){var a=h.hitch(e,"_onFetchComplete");1==arguments.length?a.apply(e,[arguments[0],g]):a.apply(e,arguments)};this._by_idty[d]?(a=this._by_idty[d].item,this.treeModel.getChildren(a,f,b,g)):this.store.fetchItemByIdentity({identity:d,onItem:function(a){e.treeModel.getChildren(a,f,b,g)},onError:b})}}},_onFetchBegin:function(a,b){0===this._treeCache.items.length&&(this._size=parseInt(a,10));a=this._size;this.inherited(arguments)},_onFetchComplete:function(a,
b){var c=b.startRowIdx,d=b.count,g=a.length<=d?0:b.start,e=b.treePath||[];if(h.isArray(a)&&0<a.length){for(var f=0,d=Math.min(d,a.length);f<d;f++)this._treeCache.items[c+f]||(this._treeCache.items[c+f]={opened:!1,treePath:e}),this._by_idx[c+f]||this._addItem(a[g+f],c+f,!0);this.updateRows(c,d)}0==this._size?this.showMessage(this.noDataMessage):this.showMessage();this._pending_requests[c]=!1;this._reqQueueLen--;this._loading&&0===this._reqQueueLen&&(this._loading=!1,this._lastScrollTop&&this.setScrollTop(this._lastScrollTop))},
expandoFetch:function(a,b){if(!this._loading&&this._by_idx[a]){this._loading=!0;this._toggleLoadingClass(a,!0);this.expandoRowIndex=a;var c=this._by_idx[a].item;if(b){var d={start:0,count:this.rowsPerPage,parentId:this.store.getIdentity(this._by_idx[a].item),sort:this.getSortProps()};this.treeModel.getChildren(c,h.hitch(this,"_onExpandoComplete"),h.hitch(this,"_onFetchError"),d)}else c=this._treeCache.removeChildren(a),this._by_idx.splice(a+1,c),this._bop=this._eop=-1,this._size-=c,this.updateRowCount(this._size),
this._updateRenderedRows(a+1),this._toggleLoadingClass(a,!1),this._loading&&(this._loading=!1),this.focus._delayedCellFocus()}},_onExpandoComplete:function(a,b,c){c=isNaN(c)?a.length:parseInt(c,10);var d=this._treeCache.items[this.expandoRowIndex].treePath.slice(0);d.push(this.store.getIdentity(this._by_idx[this.expandoRowIndex].item));for(b=1;b<=c;b++)this._treeCache.items.splice(this.expandoRowIndex+b,0,{treePath:d,opened:!1});this._size+=c;this.updateRowCount(this._size);for(b=0;b<c;b++)a[b]?(d=
this.store.getIdentity(a[b]),this._by_idty[d]={idty:d,item:a[b]},this._by_idx.splice(this.expandoRowIndex+1+b,0,this._by_idty[d])):this._by_idx.splice(this.expandoRowIndex+1+b,0,null);this._updateRenderedRows(this.expandoRowIndex+1);this._toggleLoadingClass(this.expandoRowIndex,!1);this.stateChangeNode=null;this._loading&&(this._loading=!1);!0===this.autoHeight&&this._resize();this.focus._delayedCellFocus()},styleRowNode:function(a,b){b&&this.rows.styleRowNode(a,b)},onStyleRow:function(a){this.layout._isCollapsable?
(a.customClasses+=(a.odd?" dojoxGridRowOdd":"")+(a.selected?" dojoxGridRowSelected":"")+(a.over?" dojoxGridRowOver":""),this.focus.styleRow(a),this.edit.styleRow(a)):this.inherited(arguments)},onKeyDown:function(a){if(!a.altKey&&!a.metaKey){var b=dijit.findWidgets(a.target)[0];if(a.keyCode===H.ENTER&&b instanceof S)b.onToggle();this.inherited(arguments)}},_toggleLoadingClass:function(a,b){var c=this.views.views;if(c=c[c.length-1].getRowNode(a))(c=y(".dojoxGridExpando",c)[0])&&p.toggle(c,"dojoxGridExpandoLoading",
b)},_updateRenderedRows:function(a){u.forEach(this.scroller.stack,function(b){b*this.rowsPerPage>=a?this.updateRows(b*this.rowsPerPage,this.rowsPerPage):(b+1)*this.rowsPerPage>=a&&this.updateRows(a,(b+1)*this.rowsPerPage-a+1)},this)},_fold:function(a,b){var c=-1,d=0,g=this._by_idx,e=this._by_idty[a];if(e&&e.item&&this.treeModel.mayHaveChildren(e.item)){for(;d<g.length;d++)if(g[d]&&g[d].idty===a){c=d;break}if(0<=c&&(c=this.views.views[this.views.views.length-1].getRowNode(c)))(c=dijit.findWidgets(c)[0])&&
c.setOpen(b)}}});k.markupFactory=function(a,b,c,d){return A.markupFactory(a,b,c,d)};return k});
//# sourceMappingURL=LazyTreeGrid.js.uncompressed.js.map