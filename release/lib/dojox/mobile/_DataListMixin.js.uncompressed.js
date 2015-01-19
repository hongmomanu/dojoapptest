//>>built
define("dojox/mobile/_DataListMixin","dojo/_base/array dojo/_base/declare dijit/registry ./_DataMixin ./ListItem dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin".split(" "),function(e,g,h,d,k,f,l){d=g(f("dojo-bidi")?"dojox.mobile._NonBidiDataListMixin":"dojox.mobile._DataListMixin",d,{append:!1,itemMap:null,itemRenderer:k,buildRendering:function(){this.inherited(arguments);if(this.store){var a=this.store;this.store=null;this.setStore(a,this.query,this.queryOptions)}},createListItem:function(a){var b=
{},c=this.store.getLabelAttributes(a),d=c?c[0]:null;e.forEach(this.store.getAttributes(a),function(c){c===d?b.label=this.store.getLabel(a):b[this.itemMap&&this.itemMap[c]||c]=this.store.getValue(a,c)},this);f("dojo-bidi")&&"undefined"==typeof b.dir&&(b.dir=this.isLeftToRight()?"ltr":"rtl");c=new this.itemRenderer(b);a._widgetId=c.id;return c},generateList:function(a,b){this.append||e.forEach(this.getChildren(),function(a){a.destroyRecursive()});e.forEach(a,function(a,b){this.addChild(this.createListItem(a))},
this)},onComplete:function(a,b){this.generateList(a,b)},onError:function(a,b){},onSet:function(a,b,c,d){},onNew:function(a,b){this.addChild(this.createListItem(a))},onDelete:function(a){h.byId(a._widgetId).destroyRecursive()},onStoreClose:function(a){this.store.clearOnClose&&this.refresh()}});return f("dojo-bidi")?g("dojox.mobile._DataListMixin",[d,l]):d});
//# sourceMappingURL=_DataListMixin.js.uncompressed.js.map