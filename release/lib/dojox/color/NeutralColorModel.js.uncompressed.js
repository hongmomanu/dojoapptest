//>>built
define("dojox/color/NeutralColorModel",["dojo/_base/array","dojo/_base/declare","./SimpleColorModel"],function(k,l,m){return l("dojox.color.NeutralColorModel",m,{_min:0,_max:0,_e:0,constructor:function(a,g){},initialize:function(a,g){var d=[],e=0,c=1E8,f=-c;k.forEach(a,function(b){b=g(b);c=Math.min(c,b);f=Math.max(f,b);e+=b;d.push(b)});d.sort(function(b,a){return b-a});var h=this.computeNeutral(c,f,e,d);this._min=c;this._max=f;this._e=this._min==this._max||h==this._min?-1:Math.log(0.5)/Math.log((h-
this._min)/(this._max-this._min))},computeNeutral:function(a,g,d,e){},getNormalizedValue:function(a){if(0>this._e)return 0;a=(a-this._min)/(this._max-this._min);return Math.pow(a,this._e)}})});
//# sourceMappingURL=NeutralColorModel.js.uncompressed.js.map