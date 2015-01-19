//>>built
define("dojox/calc/_Executor","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/number dijit/_base/manager dijit/_WidgetBase dijit/_TemplatedMixin dojox/math/_base".split(" "),function(g,h,c,k,l,m,n,e){g.experimental("dojox.calc");var b,d;return d={pow:function(a,b){if(0<=a||Math.floor(b)==b)return Math.pow(a,b);var c=1/b;return Math.floor(c)==c&&c&1?-Math.pow(-a,b):NaN},approx:function(a){return"number"==typeof a?Math.round(1073741789*a)/1073741789:a},_Executor:h("dojox.calc._Executor",
[m,n],{templateString:'\x3ciframe src\x3d"'+require.toUrl("dojox/calc/_ExecutorIframe.html")+'" style\x3d"display:none;" onload\x3d"if(arguments[0] \x26\x26 arguments[0].Function)'+l._scopeName+'.byNode(this)._onLoad(arguments[0])"\x3e\x3c/iframe\x3e',_onLoad:function(a){b=a;a.outerPrompt=window.prompt;a.dojox={math:{}};for(var f in e)a.dojox.math[f]=c.hitch(e,f);"toFrac"in d&&(a.toFracCall=c.hitch(d,"toFrac"),this.Function("toFrac","x","return toFracCall(x)"));a.isJavaScriptLanguage="1.5"==k.format(1.5,
{pattern:"#.#"});a.Ans=0;a.pi=Math.PI;a.eps=Math.E;a.powCall=c.hitch(d,"pow");this.normalizedFunction("sqrt","x","return Math.sqrt(x)");this.normalizedFunction("sin","x","return Math.sin(x)");this.normalizedFunction("cos","x","return Math.cos(x)");this.normalizedFunction("tan","x","return Math.tan(x)");this.normalizedFunction("asin","x","return Math.asin(x)");this.normalizedFunction("acos","x","return Math.acos(x)");this.normalizedFunction("atan","x","return Math.atan(x)");this.normalizedFunction("atan2",
"y, x","return Math.atan2(y, x)");this.normalizedFunction("Round","x","return Math.round(x)");this.normalizedFunction("Int","x","return Math.floor(x)");this.normalizedFunction("Ceil","x","return Math.ceil(x)");this.normalizedFunction("ln","x","return Math.log(x)");this.normalizedFunction("log","x","return Math.log(x)/Math.log(10)");this.normalizedFunction("pow","x, y","return powCall(x,y)");this.normalizedFunction("permutations","n, r","return dojox.math.permutations(n, r);");this.normalizedFunction("P",
"n, r","return dojox.math.permutations(n, r);");this.normalizedFunction("combinations","n, r","return dojox.math.combinations(n, r);");this.normalizedFunction("C","n, r","return dojox.math.combinations(n, r)");this.normalizedFunction("toRadix","number, baseOut","if(!baseOut){ baseOut \x3d 10; } if(typeof number \x3d\x3d 'string'){ number \x3d parseFloat(number); }return number.toString(baseOut);");this.normalizedFunction("toBin","number","return toRadix(number, 2)");this.normalizedFunction("toOct",
"number","return toRadix(number, 8)");this.normalizedFunction("toHex","number","return toRadix(number, 16)");this.onLoad()},onLoad:function(){},Function:function(a,d,e){return c.hitch(b,b.Function.apply(b,arguments))},normalizedFunction:function(a,d,e){return c.hitch(b,b.normalizedFunction.apply(b,arguments))},deleteFunction:function(a){b[a]=void 0;delete b[a]},eval:function(a){return b.eval.apply(b,arguments)},destroy:function(){this.inherited(arguments);b=null}})}});
//# sourceMappingURL=_Executor.js.uncompressed.js.map