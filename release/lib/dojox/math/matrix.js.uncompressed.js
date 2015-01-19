//>>built
define("dojox/math/matrix",["dojo","dojox"],function(n,m){n.getObject("math.matrix",!0,m);n.mixin(m.math.matrix,{iDF:0,ALMOST_ZERO:1E-10,multiply:function(a,c){var f=a.length,d=a[0].length,b=c[0].length;if(d!=c.length)return[[0]];for(var e=[],g=0;g<f;g++){e[g]=[];for(var h=0;h<b;h++)for(var k=e[g][h]=0;k<d;k++)e[g][h]+=a[g][k]*c[k][h]}return e},product:function(){if(0==arguments.length)return 1;for(var a=arguments[0],c=1;c<arguments.length;c++)a=this.multiply(a,arguments[c]);return a},sum:function(){if(0==
arguments.length)return 0;var a=this.copy(arguments[0]),c=a.length;if(0==c)return 0;var f=a[0].length;if(0==f)return 0;for(var d=1;d<arguments.length;++d){var b=arguments[d];if(b.length!=c||b[0].length!=f)return 0;for(var e=0;e<c;e++)for(var g=0;g<f;g++)a[e][g]+=b[e][g]}return a},inverse:function(a){if(1==a.length&&1==a[0].length)return[[1/a[0][0]]];var c=a.length,f=this.create(c,c),d=this.adjoint(a),b=this.determinant(a);a=0;if(0==b)return[[0]];a=1/b;for(b=0;b<c;b++)for(var e=0;e<c;e++)f[b][e]=a*
d[b][e];return f},determinant:function(a){if(a.length!=a[0].length)return 0;var c=a.length,f=1;a=this.upperTriangle(a);for(var d=0;d<c;d++){var b=a[d][d];if(Math.abs(b)<this.ALMOST_ZERO)return 0;f*=b}return f*=this.iDF},upperTriangle:function(a){a=this.copy(a);var c=0,c=0,f=a.length,d=1;this.iDF=1;for(var b=0;b<f-1;b++){for(var d=1,e=0;0==a[b][b]&&!e;)if(b+d>=f)this.iDF=0,e=1;else{for(var g=0;g<f;g++)c=a[b][g],a[b][g]=a[b+d][g],a[b+d][g]=c;d++;this.iDF*=-1}for(d=b+1;d<f;d++)if(0!=a[b][b]){c=-1*a[d][b]/
a[b][b];for(e=b;e<f;e++)a[d][e]=c*a[b][e]+a[d][e]}}return a},create:function(a,c,f){f=f||0;for(var d=[],b=0;b<c;b++){d[b]=[];for(var e=0;e<a;e++)d[b][e]=f}return d},ones:function(a,c){return this.create(a,c,1)},zeros:function(a,c){return this.create(a,c)},identity:function(a,c){c=c||1;for(var f=[],d=0;d<a;d++){f[d]=[];for(var b=0;b<a;b++)f[d][b]=d==b?c:0}return f},adjoint:function(a){var c=a.length;if(1>=c||a.length!=a[0].length)return[[0]];for(var f=this.create(c,c),d=this.create(c-1,c-1),b=0,e=
0,g=0,h=0,k=b=0;k<c;k++)for(var l=0;l<c;l++){for(b=g=0;b<c;b++)if(b!=k){for(e=h=0;e<c;e++)e!=l&&(d[g][h]=a[b][e],h++);g++}b=this.determinant(d);f[k][l]=Math.pow(-1,k+l)*b}return this.transpose(f)},transpose:function(a){for(var c=this.create(a.length,a[0].length),f=0;f<a.length;f++)for(var d=0;d<a[f].length;d++)c[d][f]=a[f][d];return c},format:function(a,c){c=c||5;for(var f=a.length,d=0<f?a[0].length:0,b="",e=0;e<f;e++){for(var b=b+"| ",g=0;g<d;g++){var h=a[e][g],k=c,l=Math.pow(10,k),h=(Math.round(h*
l)/l).toString();"-"!=h.charAt(0)&&(h=" "+h);for(-1<h.indexOf(".")&&(h+=".");h.length<k+3;)h+="0";b+=h+" "}b+="|\n"}return b},copy:function(a){for(var c=a.length,f=a[0].length,d=this.create(f,c),b=0;b<c;b++)for(var e=0;e<f;e++)d[b][e]=a[b][e];return d},scale:function(a,c){a=this.copy(a);for(var f=a.length,d=a[0].length,b=0;b<f;b++)for(var e=0;e<d;e++)a[b][e]*=c;return a}});return m.math.matrix});
//# sourceMappingURL=matrix.js.uncompressed.js.map