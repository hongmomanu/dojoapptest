//>>built
define("dojox/grid/EnhancedGrid","dojo/_base/kernel ../main dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/sniff dojo/dom dojo/dom-geometry ./DataGrid ./DataSelection ./enhanced/_PluginManager ./enhanced/plugins/_SelectionPreserver dojo/i18n!./enhanced/nls/EnhancedGrid".split(" "),function(f,h,k,d,n,p,q,r,l,s,m,t,u){f.experimental("dojox.grid.EnhancedGrid");f=k("dojox.grid.EnhancedGrid",l,{plugins:null,pluginMgr:null,_pluginMgrClass:m,postMixInProperties:function(){this._nls=u;this.inherited(arguments)},
postCreate:function(){this.pluginMgr=new this._pluginMgrClass(this);this.pluginMgr.preInit();this.inherited(arguments);this.pluginMgr.postInit()},plugin:function(a){return this.pluginMgr.getPlugin(a)},startup:function(){this.inherited(arguments);this.pluginMgr.startup()},createSelection:function(){this.selection=new h.grid.enhanced.DataSelection(this)},canSort:function(a,b){return!0},doKeyEvent:function(a){try{var b=this.focus.focusView;b.content.decorateEvent(a);a.cell||b.header.decorateEvent(a)}catch(e){}this.inherited(arguments)},
doApplyCellEdit:function(a,b,e){e?this.inherited(arguments):this.invalidated[b]=!0},mixin:function(a,b){var e={},c;for(c in b)"_inherited"==c||("declaredClass"==c||"constructor"==c||b.privates&&b.privates[c])||(e[c]=b[c]);d.mixin(a,e)},_copyAttr:function(a,b){if(b)return this.inherited(arguments)},_getHeaderHeight:function(){this.inherited(arguments);return r.getMarginBox(this.viewsHeaderNode).h},_fetch:function(a,b){if(this.items)return this.inherited(arguments);a=a||0;if(this.store&&!this._pending_requests[a]){!this._isLoaded&&
!this._isLoading&&(this._isLoading=!0,this.showMessage(this.loadingMessage));this._pending_requests[a]=!0;try{var e={start:a,count:this.rowsPerPage,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,isRender:b,onBegin:d.hitch(this,"_onFetchBegin"),onComplete:d.hitch(this,"_onFetchComplete"),onError:d.hitch(this,"_onFetchError")};this._storeLayerFetch(e)}catch(c){this._onFetchError(c,{start:a,count:this.rowsPerPage})}}return 0},_storeLayerFetch:function(a){this.store.fetch(a)},
getCellByField:function(a){return n.filter(this.layout.cells,function(b){return b.field==a})[0]},onMouseUp:function(a){},createView:function(){var a=this.inherited(arguments);if(p("mozilla")){var b=function(a){var b=a.toUpperCase();return function(a){return a.tagName!=b}},e=a.header.getCellX;a.header.getCellX=function(c){var f=e.call(a.header,c),g;g=b("th");for(var d=c.target;d&&g(d);d=d.parentNode);(g=d)&&(g!==c.target&&q.isDescendant(c.target,g))&&(f+=g.firstChild.offsetLeft);return f}}return a},
destroy:function(){delete this._nls;this.pluginMgr.destroy();this.inherited(arguments)}});k("dojox.grid.enhanced.DataSelection",s,{constructor:function(a){a.keepSelection&&(this.preserver&&this.preserver.destroy(),this.preserver=new t(this))},_range:function(a,b){this.grid._selectingRange=!0;this.inherited(arguments);this.grid._selectingRange=!1;this.onChanged()},deselectAll:function(a){this.grid._selectingRange=!0;this.inherited(arguments);this.grid._selectingRange=!1;this.onChanged()}});f.markupFactory=
function(a,b,e,c){return h.grid._Grid.markupFactory(a,b,e,d.partial(l.cell_markupFactory,c))};f.registerPlugin=function(a,b){m.registerPlugin(a,b)};return f});
//# sourceMappingURL=EnhancedGrid.js.uncompressed.js.map