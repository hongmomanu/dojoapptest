//>>built
define("dojox/grid/enhanced/plugins/exporter/CSVWriter",["dojo/_base/declare","dojo/_base/array","./_ExportWriter","../Exporter"],function(c,d,f,g){g.registerWriter("csv","dojox.grid.enhanced.plugins.exporter.CSVWriter");return c("dojox.grid.enhanced.plugins.exporter.CSVWriter",f,{_separator:",",_newline:"\r\n",constructor:function(a){a&&(this._separator=a.separator?a.separator:this._separator,this._newline=a.newline?a.newline:this._newline);this._headers=[];this._dataRows=[]},_formatCSVCell:function(a){if(null===
a||void 0===a)return"";a=String(a).replace(/"/g,'""');if(0<=a.indexOf(this._separator)||0<=a.search(/[" \t\r\n]/))a='"'+a+'"';return a},beforeContentRow:function(a){var b=[],c=this._formatCSVCell;d.forEach(a.grid.layout.cells,function(e){!e.hidden&&0>d.indexOf(a.spCols,e.index)&&b.push(c(this._getExportDataForCell(a.rowIndex,a.row,e,a.grid)))},this);this._dataRows.push(b);return!1},handleCell:function(a){var b=a.cell;a.isHeader&&(!b.hidden&&0>d.indexOf(a.spCols,b.index))&&this._headers.push(b.name||
b.field)},toString:function(){for(var a=this._headers.join(this._separator),b=this._dataRows.length-1;0<=b;--b)this._dataRows[b]=this._dataRows[b].join(this._separator);return a+this._newline+this._dataRows.join(this._newline)}})});
//# sourceMappingURL=CSVWriter.js.uncompressed.js.map