//>>built
define("dojox/grid/enhanced/plugins/filter/_FilterExpr",["dojo/_base/declare","dojo/_base/lang","dojo/date","./_DataExprs"],function(f,k,h,e){function g(a,b,c,d){a=a.applyRow(c,d);b=b.applyRow(c,d);c=a.getValue();b=b.getValue();if(a instanceof e.TimeExpr)return h.compare(c,b,"time");if(a instanceof e.DateExpr)return h.compare(c,b,"date");a instanceof e.StringExpr&&(c=c.toLowerCase(),b=String(b).toLowerCase());return c==b?0:c<b?-1:1}var l=f("dojox.grid.enhanced.plugins.filter.LogicAND",e._BiOpExpr,
{_name:"and",_calculate:function(a,b,c,d){a=a.applyRow(c,d).getValue()&&b.applyRow(c,d).getValue();return new e.BooleanExpr(a)}}),m=f("dojox.grid.enhanced.plugins.filter.LogicOR",e._BiOpExpr,{_name:"or",_calculate:function(a,b,c,d){a=a.applyRow(c,d).getValue()||b.applyRow(c,d).getValue();return new e.BooleanExpr(a)}}),n=f("dojox.grid.enhanced.plugins.filter.LogicXOR",e._BiOpExpr,{_name:"xor",_calculate:function(a,b,c,d){a=a.applyRow(c,d).getValue();b=b.applyRow(c,d).getValue();return new e.BooleanExpr(!!a!=
!!b)}}),p=f("dojox.grid.enhanced.plugins.filter.LogicNOT",e._UniOpExpr,{_name:"not",_calculate:function(a,b,c){return new e.BooleanExpr(!a.applyRow(b,c).getValue())}}),q=f("dojox.grid.enhanced.plugins.filter.LogicALL",e._OperatorExpr,{_name:"all",applyRow:function(a,b){for(var c=0,d=!0;d&&this._operands[c]instanceof e._ConditionExpr;++c)d=this._operands[c].applyRow(a,b).getValue();return new e.BooleanExpr(d)}}),r=f("dojox.grid.enhanced.plugins.filter.LogicANY",e._OperatorExpr,{_name:"any",applyRow:function(a,
b){for(var c=0,d=!1;!d&&this._operands[c]instanceof e._ConditionExpr;++c)d=this._operands[c].applyRow(a,b).getValue();return new e.BooleanExpr(d)}}),s=f("dojox.grid.enhanced.plugins.filter.EqualTo",e._BiOpExpr,{_name:"equal",_calculate:function(a,b,c,d){a=g(a,b,c,d);return new e.BooleanExpr(0===a)}}),t=f("dojox.grid.enhanced.plugins.filter.LessThan",e._BiOpExpr,{_name:"less",_calculate:function(a,b,c,d){a=g(a,b,c,d);return new e.BooleanExpr(0>a)}}),u=f("dojox.grid.enhanced.plugins.filter.LessThanOrEqualTo",
e._BiOpExpr,{_name:"lessEqual",_calculate:function(a,b,c,d){a=g(a,b,c,d);return new e.BooleanExpr(0>=a)}}),v=f("dojox.grid.enhanced.plugins.filter.LargerThan",e._BiOpExpr,{_name:"larger",_calculate:function(a,b,c,d){a=g(a,b,c,d);return new e.BooleanExpr(0<a)}}),w=f("dojox.grid.enhanced.plugins.filter.LargerThanOrEqualTo",e._BiOpExpr,{_name:"largerEqual",_calculate:function(a,b,c,d){a=g(a,b,c,d);return new e.BooleanExpr(0<=a)}}),x=f("dojox.grid.enhanced.plugins.filter.Contains",e._BiOpExpr,{_name:"contains",
_calculate:function(a,b,c,d){a=String(a.applyRow(c,d).getValue()).toLowerCase();b=String(b.applyRow(c,d).getValue()).toLowerCase();return new e.BooleanExpr(0<=a.indexOf(b))}}),y=f("dojox.grid.enhanced.plugins.filter.StartsWith",e._BiOpExpr,{_name:"startsWith",_calculate:function(a,b,c,d){a=String(a.applyRow(c,d).getValue()).toLowerCase();b=String(b.applyRow(c,d).getValue()).toLowerCase();return new e.BooleanExpr(a.substring(0,b.length)==b)}}),z=f("dojox.grid.enhanced.plugins.filter.EndsWith",e._BiOpExpr,
{_name:"endsWith",_calculate:function(a,b,c,d){a=String(a.applyRow(c,d).getValue()).toLowerCase();b=String(b.applyRow(c,d).getValue()).toLowerCase();return new e.BooleanExpr(a.substring(a.length-b.length)==b)}}),A=f("dojox.grid.enhanced.plugins.filter.Matches",e._BiOpExpr,{_name:"matches",_calculate:function(a,b,c,d){a=String(a.applyRow(c,d).getValue());b=RegExp(b.applyRow(c,d).getValue());return new e.BooleanExpr(0<=a.search(b))}});f=f("dojox.grid.enhanced.plugins.filter.IsEmpty",e._UniOpExpr,{_name:"isEmpty",
_calculate:function(a,b,c){a=a.applyRow(b,c).getValue();return new e.BooleanExpr(""===a||null==a)}});return k.mixin({LogicAND:l,LogicOR:m,LogicXOR:n,LogicNOT:p,LogicALL:q,LogicANY:r,EqualTo:s,LessThan:t,LessThanOrEqualTo:u,LargerThan:v,LargerThanOrEqualTo:w,Contains:x,StartsWith:y,EndsWith:z,Matches:A,IsEmpty:f},e)});
//# sourceMappingURL=_FilterExpr.js.uncompressed.js.map