//>>built
define("dojox/form/manager/_DisplayMixin",["dojo/_base/kernel","dojo/dom-style","dojo/_base/declare"],function(f,d,c){return c("dojox.form.manager._DisplayMixin",null,{gatherDisplayState:function(a){return this.inspectAttachedPoints(function(a,e){return"none"!=d.get(e,"display")},a)},show:function(a,b){2>arguments.length&&(b=!0);this.inspectAttachedPoints(function(a,b,c){d.set(b,"display",c?"":"none")},a,b);return this},hide:function(a){return this.show(a,!1)}})});
//# sourceMappingURL=_DisplayMixin.js.uncompressed.js.map