//>>built
define("dojox/rpc/Client",["dojo","dojox"],function(a,b){a.getObject("rpc.Client",!0,b);a._defaultXhr=a.xhr;a.xhr=function(e,c){var d=c.headers=c.headers||{};d["Client-Id"]=b.rpc.Client.clientId;d["Seq-Id"]=b._reqSeqId=(b._reqSeqId||0)+1;return a._defaultXhr.apply(a,arguments)};b.rpc.Client.clientId=(Math.random()+"").substring(2,14)+((new Date).getTime()+"").substring(8,13);return b.rpc.Client});
//# sourceMappingURL=Client.js.uncompressed.js.map