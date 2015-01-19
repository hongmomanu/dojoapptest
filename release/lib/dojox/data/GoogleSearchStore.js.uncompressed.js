//>>built
define("dojox/data/GoogleSearchStore","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/query dojo/dom-construct dojo/io/script".split(" "),function(n,p,d,y,z,A){n.experimental("dojox.data.GoogleSearchStore");var c=d("dojox.data.GoogleSearchStore",null,{constructor:function(a){a&&(a.label&&(this.label=a.label),a.key&&(this._key=a.key),a.lang&&(this._lang=a.lang),"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1));this._id=dojox.data.GoogleSearchStore.prototype._id++},
_id:0,_requestCount:0,_googleUrl:"http://ajax.googleapis.com/ajax/services/search/",_storeRef:"_S",_attributes:"unescapedUrl url visibleUrl cacheUrl title titleNoFormatting content estimatedResultCount".split(" "),_aggregatedAttributes:{estimatedResultCount:"cursor.estimatedResultCount"},label:"titleNoFormatting",_type:"web",urlPreventCache:!0,_queryAttrs:{text:"q"},_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojox.data.GoogleSearchStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(a){if("string"!==typeof a)throw Error("dojox.data.GoogleSearchStore: a function was passed an attribute argument that was not an attribute name string");},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(a,b,e){return(a=this.getValues(a,b))&&0<a.length?a[0]:e},getAttributes:function(a){return this._attributes},hasAttribute:function(a,b){return this.getValue(a,b)?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getLabel:function(a){return this.getValue(a,
this.label)},getLabelAttributes:function(a){return[this.label]},containsValue:function(a,b,e){a=this.getValues(a,b);for(b=0;b<a.length;b++)if(a[b]===e)return!0;return!1},getValues:function(a,b){this._assertIsItem(a);this._assertIsAttribute(b);var e=a[b];return p.isArray(e)?e:void 0!==e?[e]:[]},isItem:function(a){return a&&a[this._storeRef]===this?!0:!1},close:function(a){},_format:function(a,b){return a},fetch:function(a){function b(b){w++;s.content.context=s.content.start=b.start;b=A.get(s);t.push(b.ioArgs.id);
b.addErrback(function(b){a.onError&&a.onError.call(e,b,a)})}a=a||{};var e=a.scope||n.global;if(!a.query&&a.onError)a.onError.call(e,Error(this.declaredClass+": A query must be specified."));else{var d={},c;for(c in this._queryAttrs)d[c]=a.query[c];a={query:d,onComplete:a.onComplete,onError:a.onError,onItem:a.onItem,onBegin:a.onBegin,start:a.start,count:a.count};var r="GoogleSearchStoreCallback_"+this._id+"_"+ ++this._requestCount,d=this._createContent(d,r,a);if("undefined"===typeof a.start||null===
a.start)a.start=0;a.count||(a.count=8);c={start:a.start-a.start%8};var u=this,s={url:this._googleUrl+this._type,preventCache:this.urlPreventCache,content:d},l=[],v=0,p=!1,q=a.start-1,w=0,t=[],x=function(d,c){0<t.length&&y("#"+t.splice(0,1)).forEach(z.destroy);if(!p){var h=u._getItems(c),g=c?c.cursor:null;if(h){for(var f=0;f<h.length&&f+d<a.count+a.start;f++)u._processItem(h[f],c),l[f+d]=h[f];v++;if(1==v){var k=(f=g?g.pages:null)?Number(f[f.length-1].start):0;a.onBegin&&(h=(g=g?g.estimatedResultCount:
h.length)?Math.min(g,k+h.length):k+h.length,a.onBegin.call(e,h,a));h=a.start-a.start%8+8;for(g=1;f&&f[g]&&!(Number(f[g].start)>=a.start+a.count);)Number(f[g].start)>=h&&b({start:f[g].start}),g++}if(a.onItem&&l[q+1]){do q++,a.onItem.call(e,l[q],a);while(l[q+1]&&q<a.start+a.count)}v==w&&(p=!0,n.global[r]=null,a.onItem?a.onComplete.call(e,null,a):(l=l.slice(a.start,a.start+a.count),a.onComplete.call(e,l,a)))}}},k=[],m=c.start-1;n.global[r]=function(b,c,d,g){try{if(200!=d)a.onError&&a.onError.call(e,
Error("Response from Google was: "+d),a),n.global[r]=function(){};else if(b==m+1){if(x(Number(b),c),m+=8,0<k.length)for(k.sort(u._getSort());0<k.length&&k[0].start==m+1;)x(Number(k[0].start),k[0].data),k.splice(0,1),m+=8}else k.push({start:b,data:c})}catch(f){a.onError.call(e,f,a)}};b(c)}},_getSort:function(){return function(a,b){return a.start<b.start?-1:b.start<a.start?1:0}},_processItem:function(a,b){a[this._storeRef]=this;for(var c in this._aggregatedAttributes)a[c]=p.getObject(this._aggregatedAttributes[c],
!1,b)},_getItems:function(a){return a.results||a},_createContent:function(a,b,c){b={v:"1.0",rsz:"large",callback:b,key:this._key,hl:this._lang};for(var d in this._queryAttrs)b[this._queryAttrs[d]]=a[d];return b}}),B=d("dojox.data.GoogleWebSearchStore",c,{}),C=d("dojox.data.GoogleBlogSearchStore",c,{_type:"blogs",_attributes:"blogUrl postUrl title titleNoFormatting content author publishedDate".split(" "),_aggregatedAttributes:{}}),D=d("dojox.data.GoogleLocalSearchStore",c,{_type:"local",_attributes:"title titleNoFormatting url lat lng streetAddress city region country phoneNumbers ddUrl ddUrlToHere ddUrlFromHere staticMapUrl viewport".split(" "),
_aggregatedAttributes:{viewport:"viewport"},_queryAttrs:{text:"q",centerLatLong:"sll",searchSpan:"sspn"}}),E=d("dojox.data.GoogleVideoSearchStore",c,{_type:"video",_attributes:"title titleNoFormatting content url published publisher duration tbWidth tbHeight tbUrl playUrl".split(" "),_aggregatedAttributes:{}}),F=d("dojox.data.GoogleNewsSearchStore",c,{_type:"news",_attributes:"title titleNoFormatting content url unescapedUrl publisher clusterUrl location publishedDate relatedStories".split(" "),_aggregatedAttributes:{}}),
G=d("dojox.data.GoogleBookSearchStore",c,{_type:"books",_attributes:"title titleNoFormatting authors url unescapedUrl bookId pageCount publishedYear".split(" "),_aggregatedAttributes:{}});d=d("dojox.data.GoogleImageSearchStore",c,{_type:"images",_attributes:"title titleNoFormatting visibleUrl url unescapedUrl originalContextUrl width height tbWidth tbHeight tbUrl content contentNoFormatting".split(" "),_aggregatedAttributes:{}});return{Search:c,ImageSearch:d,BookSearch:G,NewsSearch:F,VideoSearch:E,
LocalSearch:D,BlogSearch:C,WebSearch:B}});
//# sourceMappingURL=GoogleSearchStore.js.uncompressed.js.map