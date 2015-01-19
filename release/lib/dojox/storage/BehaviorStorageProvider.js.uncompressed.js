//>>built
define("dojox/storage/BehaviorStorageProvider",["dijit","dojo","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(h,c,g){c.provide("dojox.storage.BehaviorStorageProvider");c.require("dojox.storage.Provider");c.require("dojox.storage.manager");c.declare("dojox.storage.BehaviorStorageProvider",[g.storage.Provider],{store:null,storeName:"__dojox_BehaviorStorage",keys:[],initialize:function(){try{this.store=this._createStore(),this.store.load(this.storeName)}catch(a){throw Error("Store is not available: "+
a);}this.keys=this.get("keys","dojoxSystemNS")||[];this.initialized=!0;g.storage.manager.loaded()},isAvailable:function(){return c.isIE&&5<=c.isIE},_createStore:function(){var a=c.create("link",{id:this.storeName+"Node",style:{display:"none"}},c.query("head")[0]);a.addBehavior("#default#userdata");return a},put:function(a,b,f,d){this._assertIsValidKey(a);d=d||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(d);var e=this.getFullKey(a,d);b=c.toJson(b);this.store.setAttribute(e,b);this.store.save(this.storeName);
if(b=this.store.getAttribute(e)===b)this._addKey(e),this.store.setAttribute("__dojoxSystemNS_keys",c.toJson(this.keys)),this.store.save(this.storeName);f&&f(b?this.SUCCESS:this.FAILED,a,null,d)},get:function(a,b){this._assertIsValidKey(a);b=b||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(b);a=this.getFullKey(a,b);return c.fromJson(this.store.getAttribute(a))},getKeys:function(a){a=a||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(a);a="__"+a+"_";for(var b=[],c=0;c<this.keys.length;c++){var d=
this.keys[c];this._beginsWith(d,a)&&(d=d.substring(a.length),b.push(d))}return b},clear:function(a){a=a||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(a);a="__"+a+"_";for(var b=[],f=0;f<this.keys.length;f++){var d=this.keys[f];this._beginsWith(d,a)&&b.push(d)}c.forEach(b,function(a){this.store.removeAttribute(a);this._removeKey(a)},this);this.put("keys",this.keys,null,"dojoxSystemNS");this.store.save(this.storeName)},remove:function(a,b){this._assertIsValidKey(a);b=b||this.DEFAULT_NAMESPACE;
this._assertIsValidNamespace(b);a=this.getFullKey(a,b);this.store.removeAttribute(a);this._removeKey(a);this.put("keys",this.keys,null,"dojoxSystemNS");this.store.save(this.storeName)},getNamespaces:function(){var a=[this.DEFAULT_NAMESPACE],b={};b[this.DEFAULT_NAMESPACE]=!0;for(var c=/^__([^_]*)_/,d=0;d<this.keys.length;d++){var e=this.keys[d];!0==c.test(e)&&(e=e.match(c)[1],"undefined"==typeof b[e]&&(b[e]=!0,a.push(e)))}return a},isPermanent:function(){return!0},getMaximumSize:function(){return 64},
hasSettingsUI:function(){return!1},isValidKey:function(a){return null===a||void 0===a?!1:/^[0-9A-Za-z_-]*$/.test(a)},isValidNamespace:function(a){return null===a||void 0===a?!1:/^[0-9A-Za-z-]*$/.test(a)},getFullKey:function(a,b){return"__"+b+"_"+a},_beginsWith:function(a,b){return b.length>a.length?!1:a.substring(0,b.length)===b},_assertIsValidNamespace:function(a){if(!1===this.isValidNamespace(a))throw Error("Invalid namespace given: "+a);},_assertIsValidKey:function(a){if(!1===this.isValidKey(a))throw Error("Invalid key given: "+
a);},_addKey:function(a){this._removeKey(a);this.keys.push(a)},_removeKey:function(a){this.keys=c.filter(this.keys,function(b){return b!==a},this)}});g.storage.manager.register("dojox.storage.BehaviorStorageProvider",new g.storage.BehaviorStorageProvider)});
//# sourceMappingURL=BehaviorStorageProvider.js.uncompressed.js.map