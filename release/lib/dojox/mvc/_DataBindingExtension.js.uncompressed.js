//>>built
define("dojox/mvc/_DataBindingExtension",["dojo/_base/array","dojo/aspect","dojo/_base/lang","dijit/_WidgetBase","./_DataBindingMixin"],function(b,c,d,a,e){d.extend(a,new e);c.before(a.prototype,"startup",function(){this._dbstartup()});c.before(a.prototype,"destroy",function(){this._modelWatchHandles&&b.forEach(this._modelWatchHandles,function(a){a.unwatch()});this._viewWatchHandles&&b.forEach(this._viewWatchHandles,function(a){a.unwatch()})})});
//# sourceMappingURL=_DataBindingExtension.js.uncompressed.js.map