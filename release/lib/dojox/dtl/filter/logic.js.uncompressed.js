//>>built
define("dojox/dtl/filter/logic",["dojo/_base/lang","../_base"],function(d,f){var e=d.getObject("filter.logic",!0,f);d.mixin(e,{default_:function(a,b){return a||b||""},default_if_none:function(a,b){return null===a?b||"":a||""},divisibleby:function(a,b){return 0===parseInt(a,10)%parseInt(b,10)},_yesno:/\s*,\s*/g,yesno:function(a,b){b||(b="yes,no,maybe");var c=b.split(dojox.dtl.filter.logic._yesno);return 2>c.length?a:a?c[0]:!a&&null!==a||3>c.length?c[1]:c[2]}});return e});
//# sourceMappingURL=logic.js.uncompressed.js.map