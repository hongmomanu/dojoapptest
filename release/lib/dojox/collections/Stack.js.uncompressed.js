//>>built
define("dojox/collections/Stack",["dojo/_base/kernel","dojo/_base/array","./_base"],function(f,g,d){d.Stack=function(e){var a=[];e&&(a=a.concat(e));this.count=a.length;this.clear=function(){a=[];this.count=a.length};this.clone=function(){return new d.Stack(a)};this.contains=function(b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};this.copyTo=function(b,c){b.splice(c,0,a)};this.forEach=function(b,c){f.forEach(a,b,c)};this.getIterator=function(){return new d.Iterator(a)};this.peek=function(){return a[a.length-
1]};this.pop=function(){var b=a.pop();this.count=a.length;return b};this.push=function(b){this.count=a.push(b)};this.toArray=function(){return[].concat(a)}};return d.Stack});
//# sourceMappingURL=Stack.js.uncompressed.js.map