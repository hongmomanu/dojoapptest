//>>built
define("dojox/string/Builder",["dojo/_base/lang"],function(e){return e.getObject("string",!0,dojox).Builder=function(d){var b="";this.length=0;this.append=function(c){if(1<arguments.length){var a="";switch(arguments.length){case 9:a=""+arguments[8]+a;case 8:a=""+arguments[7]+a;case 7:a=""+arguments[6]+a;case 6:a=""+arguments[5]+a;case 5:a=""+arguments[4]+a;case 4:a=""+arguments[3]+a;case 3:a=""+arguments[2]+a;case 2:b+=""+arguments[0]+arguments[1]+a;break;default:for(var d=0;d<arguments.length;)a+=
arguments[d++];b+=a}}else b+=c;this.length=b.length;return this};this.concat=function(b){return this.append.apply(this,arguments)};this.appendArray=function(b){return this.append.apply(this,b)};this.clear=function(){b="";this.length=0;return this};this.replace=function(c,a){b=b.replace(c,a);this.length=b.length;return this};this.remove=function(c,a){void 0===a&&(a=b.length);if(0==a)return this;b=b.substr(0,c)+b.substr(c+a);this.length=b.length;return this};this.insert=function(c,a){b=0==c?a+b:b.slice(0,
c)+a+b.slice(c);this.length=b.length;return this};this.toString=function(){return b};d&&this.append(d)}});
//# sourceMappingURL=Builder.js.uncompressed.js.map