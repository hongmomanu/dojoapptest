//>>built
define("dojox/drawing/plugins/drawing/GreekPalette","dojo dijit/popup ../../library/greek dijit/focus dijit/_Widget dijit/_TemplatedMixin dijit/_PaletteMixin dojo/i18n!dojox/editor/plugins/nls/latinEntities".split(" "),function(b,e,h,m,n,p,q,r){var s=b.declare(null,{constructor:function(a){this._alias=a},getValue:function(){return this._alias},fillCell:function(a){a.innerHTML="\x26"+this._alias+";"}});return b.declare("dojox.drawing.plugins.drawing.GreekPalette",[n,p,q],{postMixInProperties:function(){var a=
0,b;for(b in h)a++;var a=Math.floor(Math.sqrt(a)),g=0,k=[],c=[];for(b in h)g++,c.push(b),0===g%a&&(k.push(c),c=[]);0<c.length&&k.push(c);this._palette=k},show:function(a){b.mixin(a,{popup:this});e.open(a)},onChange:function(a){var b=this._textBlock;e.hide(this);b.insertText(this._pushChangeTo,a);b._dropMode=!1},onCancel:function(a){e.hide(this);this._textBlock._dropMode=!1},templateString:'\x3cdiv class\x3d"dojoxEntityPalette"\x3e\n\t\x3ctable\x3e\n\t\t\x3ctbody\x3e\n\t\t\t\x3ctr\x3e\n\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\x3ctable class\x3d"dijitPaletteTable"\x3e\n\t\t\t\t\t\t\x3ctbody dojoAttachPoint\x3d"gridNode"\x3e\x3c/tbody\x3e\n\t\t\t\t   \x3c/table\x3e\n\t\t\t\t\x3c/td\x3e\n\t\t\t\x3c/tr\x3e\n\t\t\t\x3ctr\x3e\n\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\x3ctable dojoAttachPoint\x3d"previewPane" class\x3d"dojoxEntityPalettePreviewTable"\x3e\n\t\t\t\t\t\t\x3ctbody\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxEntityPalettePreviewDetailEntity"\x3eType: \x3cspan class\x3d"dojoxEntityPalettePreviewDetail" dojoAttachPoint\x3d"previewNode"\x3e\x3c/span\x3e\x3c/td\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\x3c/tbody\x3e\n\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\x3c/td\x3e\n\t\t\t\x3c/tr\x3e\n\t\t\x3c/tbody\x3e\n\t\x3c/table\x3e\n\x3c/div\x3e',
baseClass:"dojoxEntityPalette",showPreview:!0,dyeClass:s,paletteClass:"editorLatinEntityPalette",cellClass:"dojoxEntityPaletteCell",buildRendering:function(){this.inherited(arguments);this._preparePalette(this._palette,r);var a=b.query(".dojoxEntityPaletteCell",this.gridNode);b.forEach(a,function(a){this.connect(a,"onmouseenter","_onCellMouseEnter")},this)},_onCellMouseEnter:function(a){this.showPreview&&this._displayDetails(a.target)},_onCellClick:function(a){var f="click"==a.type?a.currentTarget:
this._currentFocus,g=this._getDye(f).getValue();this._setCurrent(f);setTimeout(b.hitch(this,function(){m(f);this._setValueAttr(g,!0)}));b.removeClass(f,"dijitPaletteCellHover");b.stopEvent(a)},postCreate:function(){this.inherited(arguments);this.showPreview||b.style(this.previewNode,"display","none");e.moveOffScreen(this)},_setCurrent:function(a){"_currentFocus"in this&&(b.attr(this._currentFocus,"tabIndex","-1"),b.removeClass(this._currentFocus,"dojoxEntityPaletteCellHover"));if(this._currentFocus=
a)b.attr(a,"tabIndex",this.tabIndex),b.addClass(this._currentFocus,"dojoxEntityPaletteCellHover");this.showPreview&&this._displayDetails(a)},_displayDetails:function(a){(a=this._getDye(a))?(a=a.getValue(),this.previewNode.innerHTML=a):(this.previewNode.innerHTML="",this.descNode.innerHTML="")},_preparePalette:function(a,f){this._cells=[];for(var g=this._blankGif,k="string"===typeof this.dyeClass?b.getObject(this.dyeClass):this.dyeClass,c=0;c<a.length;c++)for(var e=b.create("tr",{tabIndex:"-1"},this.gridNode),
l=0;l<a[c].length;l++){var d=a[c][l];if(d){var h=new k(d),d=b.create("td",{"class":this.cellClass,tabIndex:"-1",title:f[d]});h.fillCell(d,g);this.connect(d,"ondijitclick","_onCellClick");this._trackMouseState(d,this.cellClass);b.place(d,e);d.idx=this._cells.length;this._cells.push({node:d,dye:h})}}this._xDim=a[0].length;this._yDim=a.length},_navigateByArrow:function(a){a={38:-this._xDim,40:this._xDim,39:this.isLeftToRight()?1:-1,37:this.isLeftToRight()?-1:1}[a.keyCode];a=this._currentFocus.idx+a;
a<this._cells.length&&-1<a&&this._setCurrent(this._cells[a].node)}})});
//# sourceMappingURL=GreekPalette.js.uncompressed.js.map