//>>built
define("dojox/mobile/bidi/RoundRectCategory",["dojo/_base/declare","./common"],function(c,b){return c(null,{_setLabelAttr:function(a){this.textDir&&(a=b.enforceTextDirWithUcc(a,this.textDir));this.inherited(arguments)},_setTextDirAttr:function(a){a&&this.textDir!==a&&(this.textDir=a,this.label=b.removeUCCFromText(this.label),this.set("label",this.label))}})});
//# sourceMappingURL=RoundRectCategory.js.uncompressed.js.map