//>>built
define("dojox/treemap/GroupLabel",["dojo/_base/declare","dojo/dom-construct","dojo/dom-style"],function(h,f,d){return h("dojox.treemap.GroupLabel",null,{createRenderer:function(a,e,b){var c=this.inherited(arguments);if("content"==b||"leaf"==b){var g=f.create("div");d.set(g,{zIndex:30,position:"relative",height:"100%",textAlign:"center",top:"50%",marginTop:"-.5em"});f.place(g,c)}return c},styleRenderer:function(a,e,b,c){switch(c){case "leaf":d.set(a,"background",this.getColorForItem(e).toHex());case "content":a.firstChild.innerHTML=
0==b?this.getLabelForItem(e):null;break;case "header":d.set(a,"display","none")}}})});
//# sourceMappingURL=GroupLabel.js.uncompressed.js.map