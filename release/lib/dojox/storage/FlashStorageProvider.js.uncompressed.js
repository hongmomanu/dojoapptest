//>>built
define("dojox/storage/FlashStorageProvider",["dijit","dojo","dojox","dojo/require!dojox/flash,dojox/storage/manager,dojox/storage/Provider"],function(h,e,c){e.provide("dojox.storage.FlashStorageProvider");e.require("dojox.flash");e.require("dojox.storage.manager");e.require("dojox.storage.Provider");e.declare("dojox.storage.FlashStorageProvider",c.storage.Provider,{initialized:!1,_available:null,_statusHandler:null,_flashReady:!1,_pageReady:!1,initialize:function(){if(!0!=e.config.disableFlashStorage){c.flash.addLoadedListener(e.hitch(this,
function(){(this._flashReady=!0)&&this._pageReady&&this._loaded()}));var a=e.moduleUrl("dojox","storage/Storage.swf").toString();c.flash.setSwf(a,!1);e.connect(e,"loaded",this,function(){this._pageReady=!0;this._flashReady&&this._pageReady&&this._loaded()})}},setFlushDelay:function(a){if(null===a||"undefined"===typeof a||isNaN(a))throw Error("Invalid argunment: "+a);c.flash.comm.setFlushDelay(String(a))},getFlushDelay:function(){return Number(c.flash.comm.getFlushDelay())},flush:function(a){if(null==
a||"undefined"==typeof a)a=c.storage.DEFAULT_NAMESPACE;c.flash.comm.flush(a)},isAvailable:function(){return this._available=!e.config.disableFlashStorage},put:function(a,b,d,f){if(!this.isValidKey(a))throw Error("Invalid key given: "+a);f||(f=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(f))throw Error("Invalid namespace given: "+f);this._statusHandler=d;b=e.isString(b)?"string:"+b:e.toJson(b);c.flash.comm.put(a,b,f)},putMultiple:function(a,b,d,f){if(!this.isValidKeyArray(a)||!b instanceof Array||
a.length!=b.length)throw Error("Invalid arguments: keys \x3d ["+a+"], values \x3d ["+b+"]");f||(f=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(f))throw Error("Invalid namespace given: "+f);this._statusHandler=d;a=a.join(",");d=[];for(var g=0;g<b.length;g++)e.isString(b[g])?b[g]="string:"+b[g]:b[g]=e.toJson(b[g]),d[g]=b[g].length;b=b.join("");d=d.join(",");c.flash.comm.putMultiple(a,b,d,f)},get:function(a,b){if(!this.isValidKey(a))throw Error("Invalid key given: "+a);b||(b=c.storage.DEFAULT_NAMESPACE);
if(!this.isValidKey(b))throw Error("Invalid namespace given: "+b);var d=c.flash.comm.get(a,b);return""==d?null:this._destringify(d)},getMultiple:function(a,b){if(!this.isValidKeyArray(a))throw new ("Invalid key array given: "+a);b||(b=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(b))throw Error("Invalid namespace given: "+b);for(var d=a.join(","),d=c.flash.comm.getMultiple(d,b),d=eval("("+d+")"),f=0;f<d.length;f++)d[f]=""==d[f]?null:this._destringify(d[f]);return d},_destringify:function(a){return a=
e.isString(a)&&/^string:/.test(a)?a.substring(7):e.fromJson(a)},getKeys:function(a){a||(a=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(a))throw Error("Invalid namespace given: "+a);a=c.flash.comm.getKeys(a);if(null==a||"null"==a)a="";a=a.split(",");a.sort();return a},getNamespaces:function(){var a=c.flash.comm.getNamespaces();if(null==a||"null"==a)a=c.storage.DEFAULT_NAMESPACE;a=a.split(",");a.sort();return a},clear:function(a){a||(a=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(a))throw Error("Invalid namespace given: "+
a);c.flash.comm.clear(a)},remove:function(a,b){b||(b=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(b))throw Error("Invalid namespace given: "+b);c.flash.comm.remove(a,b)},removeMultiple:function(a,b){this.isValidKeyArray(a)||e.raise("Invalid key array given: "+a);b||(b=c.storage.DEFAULT_NAMESPACE);if(!this.isValidKey(b))throw Error("Invalid namespace given: "+b);var d=a.join(",");c.flash.comm.removeMultiple(d,b)},isPermanent:function(){return!0},getMaximumSize:function(){return c.storage.SIZE_NO_LIMIT},
hasSettingsUI:function(){return!0},showSettingsUI:function(){c.flash.comm.showSettings();c.flash.obj.setVisible(!0);c.flash.obj.center()},hideSettingsUI:function(){c.flash.obj.setVisible(!1);e.isFunction(c.storage.onHideSettingsUI)&&c.storage.onHideSettingsUI.call(null)},getResourceList:function(){return[]},_loaded:function(){this._allNamespaces=this.getNamespaces();this.initialized=!0;c.storage.manager.loaded()},_onStatus:function(a,b,d){var f=c.storage,e=c.flash.obj;a==f.PENDING?(e.center(),e.setVisible(!0)):
e.setVisible(!1);f._statusHandler&&f._statusHandler.call(null,a,b,null,d)}});c.storage.manager.register("dojox.storage.FlashStorageProvider",new c.storage.FlashStorageProvider)});
//# sourceMappingURL=FlashStorageProvider.js.uncompressed.js.map