//>>built
define("dojox/date/relative",["..","dojo/_base/lang","dojo/date/locale","dojo/i18n"],function(b,l,h,m){function k(a){a=new Date(a);a.setHours(0,0,0,0);return a}b=l.getObject("date.relative",!0,b);var d=dojo.delegate,n=h._getGregorianBundle,e=h.format;b.format=function(a,c){c=c||{};var b=k(c.relativeDate||new Date),g=b.getTime()-k(a).getTime(),f={locale:c.locale};return 0===g?e(a,d(f,{selector:"time"})):5184E5>=g&&0<g&&!1!==c.weekCheck?e(a,d(f,{selector:"date",datePattern:"EEE"}))+" "+e(a,d(f,{selector:"time",
formatLength:"short"})):a.getFullYear()==b.getFullYear()?(b=n(m.normalizeLocale(c.locale)),e(a,d(f,{selector:"date",datePattern:b["dateFormatItem-MMMd"]}))):e(a,d(f,{selector:"date",formatLength:"medium",locale:c.locale}))};return b});
//# sourceMappingURL=relative.js.uncompressed.js.map