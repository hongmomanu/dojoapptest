//>>built
define("dojox/mdnd/dropMode/VerticalDropMode",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojox/mdnd/AreaManager"],function(l,m,n,h){l=m("dojox.mdnd.dropMode.VerticalDropMode",null,{_oldXPoint:null,_oldYPoint:null,_oldBehaviour:"up",addArea:function(a,e){var b=a.length,d=h.position(e.node,!0);e.coords={x:d.x,y:d.y};if(0==b)a.push(e);else{for(var c=e.coords.x,d=0;d<b;d++)if(c<a[d].coords.x){for(c=b-1;c>=d;c--)a[c+1]=a[c];a[d]=e;break}d==b&&a.push(e)}return a},
updateAreas:function(a){var e=a.length;if(1<e)for(var b,d,c=0;c<e;c++){var f=a[c];f.coords.x1=-1;f.coords.x2=-1;0==c?(d=a[c+1],this._updateArea(f),this._updateArea(d),b=f.coords.x+f.node.offsetWidth,d=d.coords.x,f.coords.x2=b+(d-b)/2):c==e-1?f.coords.x1=a[c-1].coords.x2:(d=a[c+1],this._updateArea(d),b=f.coords.x+f.node.offsetWidth,d=d.coords.x,f.coords.x1=a[c-1].coords.x2,f.coords.x2=b+(d-b)/2)}},_updateArea:function(a){var e=h.position(a.node,!0);a.coords.x=e.x;a.coords.y=e.y},initItems:function(a){n.forEach(a.items,
function(a){var b=h.position(a.item.node,!0);a.y=b.y+b.h/2});a.initItems=!0},refreshItems:function(a,e,b,d){if(-1!=e&&a&&b&&b.h){b=b.h;a.margin&&(b+=a.margin.t);for(var c=a.items.length;e<c;e++){var f=a.items[e];f.y=d?f.y+b:f.y-b}}},getDragPoint:function(a,e,b){b=a.y;this._oldYPoint&&(b>this._oldYPoint?(this._oldBehaviour="down",b+=e.h):b<=this._oldYPoint&&(this._oldBehaviour="up"));this._oldYPoint=b;return{x:a.x+e.w/2,y:b}},getTargetArea:function(a,e,b){var d=0,c=e.x,f=a.length;if(1<f){var g=0,h=
"right",k=!1;-1==b||3>arguments.length?k=!0:this._checkInterval(a,b,c)?d=b:(this._oldXPoint<c?g=b+1:(g=b-1,f=0,h="left"),k=!0);if(k)if("right"===h)for(;g<f;g++){if(this._checkInterval(a,g,c)){d=g;break}}else for(;g>=f;g--)if(this._checkInterval(a,g,c)){d=g;break}}this._oldXPoint=c;return d},_checkInterval:function(a,e,b){a=a[e].coords;if(-1==a.x1){if(b<=a.x2)return!0}else if(-1==a.x2){if(b>a.x1)return!0}else if(a.x1<b&&b<=a.x2)return!0;return!1},getDropIndex:function(a,e){var b=a.items.length,d=e.y;
if(0<b)for(var c=0;c<b;c++){if(d<a.items[c].y)return c;if(c==b-1)break}return-1},destroy:function(){}});dojox.mdnd.areaManager()._dropMode=new dojox.mdnd.dropMode.VerticalDropMode;return l});
//# sourceMappingURL=VerticalDropMode.js.uncompressed.js.map