//>>built
define("dojox/mobile/bidi/ToolBarButton",["dojo/_base/declare","dojo/_base/lang","dojo/dom-class"],function(a,e,b){return a(null,{buildRendering:function(){this.inherited(arguments);if(!this.isLeftToRight()&&this.arrow){var c="left"===this.arrow?"mblToolBarButtonHasLeftArrow":"mblToolBarButtonHasRightArrow",a="left"===this.arrow?"mblToolBarButtonRightArrow":"mblToolBarButtonLeftArrow",d="left"===this.arrow?"mblToolBarButtonHasRightArrow":"mblToolBarButtonHasLeftArrow";b.remove(this.arrowNode,"left"===
this.arrow?"mblToolBarButtonLeftArrow":"mblToolBarButtonRightArrow");b.add(this.arrowNode,a);b.remove(this.domNode,c);b.add(this.domNode,d)}},_setLabelAttr:function(a){this.inherited(arguments);this.isLeftToRight()||b.toggle(this.tableNode,"mblToolBarButtonTextRtl",a||this.arrow)}})});
//# sourceMappingURL=ToolBarButton.js.uncompressed.js.map