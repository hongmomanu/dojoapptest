//>>built
define("dojox/data/ClientFilter",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/data/util/filter"],function(p,h,m,q,n){var l=function(a,c,b){return function(d){a._updates.push({create:c&&d,remove:b&&d});k.onUpdate()}},k=p("dojox.data.ClientFilter",null,{cacheByDefault:!1,constructor:function(){this.onSet=l(this,!0,!0);this.onNew=l(this,!0,!1);this.onDelete=l(this,!1,!0);this._updates=[];this._fetchCache=[]},clearCache:function(){this._fetchCache=[]},updateResultSet:function(a,
c){if(this.isUpdateable(c)){for(var b=c._version||0;b<this._updates.length;b++){var d=this._updates[b].create,f=this._updates[b].remove;if(f)for(var e=0;e<a.length;e++)if(this.getIdentity(a[e])==this.getIdentity(f)){a.splice(e--,1);var g=!0}d&&(this.matchesQuery(d,c)&&-1==m.indexOf(a,d))&&(a.push(d),g=!0)}c.sort&&g&&a.sort(this.makeComparator(c.sort.concat()));a._fullLength=a.length;c.count&&(g&&Infinity!==c.count)&&a.splice(c.count,a.length);c._version=this._updates.length;return g?2:1}return 0},
querySuperSet:function(a,c){if(a.query==c.query)return{};if(!(c.query instanceof Object&&(!a.query||"object"==typeof a.query)))return!1;var b=h.mixin({},c.query),d;for(d in a.query)if(b[d]==a.query[d])delete b[d];else if(!("string"==typeof a.query[d]&&n.patternToRegExp(a.query[d]).test(b[d])))return!1;return b},serverVersion:0,cachingFetch:function(a){for(var c=this,b=0;b<this._fetchCache.length;b++){var d=this._fetchCache[b],f=this.querySuperSet(d,a);if(!1!==f){var e=d._loading;e||(e=new q,e.callback(d.cacheResults));
e.addCallback(function(b){b=c.clientSideFetch(h.mixin(h.mixin({},a),{query:f}),b);e.fullLength=b._fullLength;return b});a._version=d._version;break}}if(!e){var b=h.mixin({},a),d=(a.queryOptions||0).cache,g=this._fetchCache;if(void 0===d?this.cacheByDefault:d){if(a.start||a.count)delete b.start,delete b.count,a.clientQuery=h.mixin(a.clientQuery||{},{start:a.start,count:a.count});a=b;g.push(a)}e=a._loading=this._doQuery(a);e.addErrback(function(){g.splice(m.indexOf(g,a),1)})}var r=this.serverVersion;
e.addCallback(function(b){delete a._loading;if(b&&(a._version="number"==typeof a._version?a._version:r,c.updateResultSet(b,a),a.cacheResults=b,!a.count||b.length<a.count))e.fullLength=(a.start?a.start:0)+b.length;return b});return e},isUpdateable:function(a){return!a.query||"object"==typeof a.query},clientSideFetch:function(a,c){a.queryOptions&&a.queryOptions.results&&(c=a.queryOptions.results);if(a.query)for(var b=[],d=0;d<c.length;d++){var f=c[d];f&&this.matchesQuery(f,a)&&b.push(c[d])}else b=a.sort?
c.concat():c;a.sort&&b.sort(this.makeComparator(a.sort.concat()));return this.clientSidePaging(a,b)},clientSidePaging:function(a,c){var b=a.start||0,b=b||a.count?c.slice(b,b+(a.count||c.length)):c;b._fullLength=c.length;return b},matchesQuery:function(a,c){var b=c.query,d=c.queryOptions&&c.queryOptions.ignoreCase,f;for(f in b){var e=b[f],g=this.getValue(a,f);if("string"==typeof e&&(e.match(/[\*\.]/)||d)?!n.patternToRegExp(e,d).test(g):g!=e)return!1}return!0},makeComparator:function(a){var c=a.shift();
if(!c)return function(){return 0};var b=c.attribute,d=!!c.descending,f=this.makeComparator(a),e=this;return function(a,c){var h=e.getValue(a,b),k=e.getValue(c,b);return h!=k?h<k==d?1:-1:f(a,c)}}});k.onUpdate=function(){};return k});
//# sourceMappingURL=ClientFilter.js.uncompressed.js.map