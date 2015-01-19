//>>built
define("dojox/dgauges/MultiLinearScaler",["dojo/_base/declare","dojo/Stateful"],function(k,l){return k("dojox.dgauges.MultiLinearScaler",l,{majorTickValues:null,minorTickCount:4,majorTicks:null,minorTicks:null,_snapIntervalPrecision:null,_snapCount:4,_snapIntervalPrecision:6,constructor:function(){this.watchedProperties=["majorTickValues","snapCount","minorTickCount"]},computeTicks:function(){this.majorTicks=[];this.minorTicks=[];for(var b,a=1/(this.majorTickValues.length-1),e=a/(this.minorTickCount+
1),f=0,d,c,g=0;g<this.majorTickValues.length;g++){d=this.majorTickValues[g];b={scaler:this};b.position=f*a;b.value=d;b.isMinor=!1;this.majorTicks.push(b);if(f<this.majorTickValues.length-1){c=Number(d);d=(Number(this.majorTickValues[g+1])-c)/(this.minorTickCount+1);for(var h=1;h<=this.minorTickCount;h++)b={scaler:this,isMinor:!0},b.position=f*a+h*e,b.value=c+d*h,this.minorTicks.push(b)}f++}return this.majorTicks.concat(this.minorTicks)},positionForValue:function(b){if(!this.majorTickValues)return 0;
this.majorTicks||this.computeTicks();var a=this._getMinMax(b);return a[0].position+(b-a[0].value)/(a[1].value-a[0].value)*(a[1].position-a[0].position)},valueForPosition:function(b){if(null==this.majorTicks)return 0;var a=this._getMinMax(b,"position");return a[0].value+(b-a[0].position)/(a[1].position-a[0].position)*(a[1].value-a[0].value)},_getMinMax:function(b,a){a||(a="value");var e=[],f=0,d=this.majorTicks.length-1,c;if(b<=this.majorTicks[0][a]||b>=this.majorTicks[d][a])return e[0]=this.majorTicks[0],
e[1]=this.majorTicks[d],e;for(;;)if(c=Math.floor((f+d)/2),this.majorTicks[c][a]<=b){if(this.majorTicks[c+1][a]>=b)return e[0]=this.majorTicks[c],e[1]=this.majorTicks[c+1],e;f=c+1}else d=c}})});
//# sourceMappingURL=MultiLinearScaler.js.uncompressed.js.map