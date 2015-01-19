//>>built
define("dojox/analytics/plugins/touchMove","dojo/_base/lang ../_base dojo/_base/config dojo/_base/window dojo/on dojo/touch".split(" "),function(g,h,e,k,l,m){return h.plugins.touchMove=new function(){this.watchTouch=void 0!==e.watchTouch&&!e.watchTouch?!1:!0;this.showTouchesDetails=void 0!==e.showTouchesDetails&&!e.showTouchesDetails?!1:!0;this.touchSampleDelay=e.touchSampleDelay||1E3;this.targetProps=e.targetProps||"id className localName href spellcheck lang textContent value".split(" ");this.textContentMaxChars=
e.textContentMaxChars||50;this.addData=g.hitch(h,"addData","touch.move");this.sampleTouchMove=function(b){this._rateLimited||(this.addData("sample",this.trimTouchEvent(b)),this._rateLimited=!0,setTimeout(g.hitch(this,function(){this._rateLimited&&(this.trimTouchEvent(this._lastTouchEvent),delete this._lastTouchEvent,delete this._rateLimited)}),this.touchSampleDelay));return this._lastTouchEvent=b};l(k.doc,m.move,g.hitch(this,"sampleTouchMove"));this.handleTarget=function(b,d,f){var a=this.targetProps;
b[f]={};for(var c=0;c<a.length;c++)if(("object"==typeof d||"function"==typeof d)&&a[c]in d)"text"==a[c]||"textContent"==a[c]?d.localName&&("HTML"!=d.localName&&"BODY"!=d.localName)&&(b[f][a[c]]=d[a[c]].substr(0,this.textContentMaxChars)):b[f][a[c]]=d[a[c]]};this.trimTouchEvent=function(b){var d={},f,a;for(a in b)switch(a){case "target":this.handleTarget(d,b[a],a);break;case "touches":0!==b[a].length&&(d["touches.length"]=b[a].length);if(this.showTouchesDetails)for(var c=0;c<b[a].length;c++)for(var e in b[a][c])switch(e){case "target":this.handleTarget(d,
b[a][c].target,"touches["+c+"][target]");break;case "clientX":case "clientY":case "screenX":case "screenY":b[a][c]&&(f=b[a][c][e],d["touches["+c+"]["+e+"]"]=f+"")}break;case "clientX":case "clientY":case "screenX":case "screenY":b[a]&&(f=b[a],d[a]=f+"")}return d}}});
//# sourceMappingURL=touchMove.js.uncompressed.js.map