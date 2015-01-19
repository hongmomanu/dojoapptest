//>>built
define("dojox/store/transaction",["dojo/store/Memory","dojo/store/Cache","dojo/when","dojo/aspect","dojo/_base/lang"],function(s,t,l,u,v){var q,r={},w=1;return function(a){function m(b){return function x(e,g){var d=this;if(k){var f=c[b](e,g);l(f,null,function(b){d.errorHandler(b)&&(k=!1,g.error=b,x.call(d,e,g),k=!0)});return f}var a="remove"===b?e:d.getIdentity(e);void 0!==a&&(f=h.get(a));return l(f,function(d){return l(n.add({objectId:a,method:b,target:e,previous:d,options:g,storeId:p}),function(){return e})})}}
a=a||{};var c=a.masterStore,h=a.cachingStore,p=c.id||c.storeName||c.name||(c.id=w++);p&&(r[p]=c);var n=a.transactionLogStore||q||(q=new s),k=!0;u.before(c,"notify",function(b,a){b?h.put(b):h.remove(a)});return new t(v.delegate(c,{put:m("put"),add:m("add"),remove:m("remove"),errorHandler:function(b){console.error(b);return!0},commit:function(){k=!0;var b=this;return n.query({}).map(function(a){var c=a.method,e=r[a.storeId],g=a.target,d;try{d=e[c](g,a.options)}catch(f){d=b.errorHandler(f);if(!0===d)return f;
!1===d&&("add"===c?h.remove(a.objectId):h.put(g),e.notify&&e.notify("add"===c?null:a.previous,"remove"===c?void 0:a.objectId));d=f}n.remove(a.id);return d})},transaction:function(){k=!1;var a=this;return{commit:function(){return a.commit()}}}}),h,a)}});
//# sourceMappingURL=transaction.js.uncompressed.js.map