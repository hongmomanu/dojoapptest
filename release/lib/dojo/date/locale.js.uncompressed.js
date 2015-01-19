//>>built
define("dojo/date/locale","../_base/lang ../_base/array ../date ../cldr/supplemental ../i18n ../regexp ../string ../i18n!../cldr/nls/gregorian module".split(" "),function(l,m,r,u,s,x,t,A,v){function y(a,f,e,c){return c.replace(/([a-z])\1*/ig,function(k){var b,h,d=k.charAt(0);k=k.length;var n=["abbr","wide","narrow"];switch(d){case "G":b=f[4>k?"eraAbbr":"eraNames"][0>a.getFullYear()?0:1];break;case "y":b=a.getFullYear();switch(k){case 1:break;case 2:if(!e.fullYear){b=String(b);b=b.substr(b.length-
2);break}default:h=!0}break;case "Q":case "q":b=Math.ceil((a.getMonth()+1)/3);h=!0;break;case "M":case "L":b=a.getMonth();3>k?(b+=1,h=!0):(d=["months","L"==d?"standAlone":"format",n[k-3]].join("-"),b=f[d][b]);break;case "w":b=g._getWeekOfYear(a,0);h=!0;break;case "d":b=a.getDate();h=!0;break;case "D":b=g._getDayOfYear(a);h=!0;break;case "e":case "c":if(b=a.getDay(),2>k){b=(b-u.getFirstDayOfWeek(e.locale)+8)%7;break}case "E":b=a.getDay();3>k?(b+=1,h=!0):(d=["days","c"==d?"standAlone":"format",n[k-
3]].join("-"),b=f[d][b]);break;case "a":d=12>a.getHours()?"am":"pm";b=e[d]||f["dayPeriods-format-wide-"+d];break;case "h":case "H":case "K":case "k":h=a.getHours();switch(d){case "h":b=h%12||12;break;case "H":b=h;break;case "K":b=h%12;break;case "k":b=h||24}h=!0;break;case "m":b=a.getMinutes();h=!0;break;case "s":b=a.getSeconds();h=!0;break;case "S":b=Math.round(a.getMilliseconds()*Math.pow(10,k-3));h=!0;break;case "v":case "z":if(b=g._getZone(a,!0,e))break;k=4;case "Z":d=g._getZone(a,!1,e);d=[0>=
d?"+":"-",t.pad(Math.floor(Math.abs(d)/60),2),t.pad(Math.abs(d)%60,2)];4==k&&(d.splice(0,0,"GMT"),d.splice(3,0,":"));b=d.join("");break;default:throw Error("dojo.date.locale.format: invalid pattern char: "+c);}h&&(b=t.pad(b,k));return b})}function q(a,f,e,c){var k=function(b){return b};f=f||k;e=e||k;c=c||k;var b=a.match(/(''|[^'])+/g),h="'"==a.charAt(0);m.forEach(b,function(d,a){d?(b[a]=(h?e:f)(d.replace(/''/g,"'")),h=!h):b[a]=""});return c(b.join(""))}function z(a,f,e,c){c=x.escapeString(c);e.strict||
(c=c.replace(" a"," ?a"));return c.replace(/([a-z])\1*/ig,function(c){var b;b=c.charAt(0);var h=c.length,d="",g="";e.strict?(1<h&&(d="0{"+(h-1)+"}"),2<h&&(g="0{"+(h-2)+"}")):(d="0?",g="0{0,2}");switch(b){case "y":b="\\d{2,4}";break;case "M":case "L":b=2<h?"\\S+?":"1[0-2]|"+d+"[1-9]";break;case "D":b="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+d+"[1-9][0-9]|"+g+"[1-9]";break;case "d":b="3[01]|[12]\\d|"+d+"[1-9]";break;case "w":b="[1-4][0-9]|5[0-3]|"+d+"[1-9]";break;case "E":case "e":case "c":b=".+?";break;
case "h":b="1[0-2]|"+d+"[1-9]";break;case "k":b="1[01]|"+d+"\\d";break;case "H":b="1\\d|2[0-3]|"+d+"\\d";break;case "K":b="1\\d|2[0-4]|"+d+"[1-9]";break;case "m":case "s":b="[0-5]\\d";break;case "S":b="\\d{"+h+"}";break;case "a":h=e.am||f["dayPeriods-format-wide-am"];d=e.pm||f["dayPeriods-format-wide-pm"];b=h+"|"+d;e.strict||(h!=h.toLowerCase()&&(b+="|"+h.toLowerCase()),d!=d.toLowerCase()&&(b+="|"+d.toLowerCase()),-1!=b.indexOf(".")&&(b+="|"+b.replace(/\./g,"")));b=b.replace(/\./g,"\\.");break;default:b=
".*"}a&&a.push(c);return"("+b+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var g={};l.setObject(v.id.replace(/\//g,"."),g);g._getZone=function(a,f,e){return f?r.getTimezoneName(a):a.getTimezoneOffset()};g.format=function(a,f){f=f||{};var e=s.normalizeLocale(f.locale),c=f.formatLength||"short",e=g._getGregorianBundle(e),k=[],b=l.hitch(this,y,a,e,f);if("year"==f.selector)return q(e["dateFormatItem-yyyy"]||"yyyy",b);var h;"date"!=f.selector&&(h=f.timePattern||e["timeFormat-"+c])&&k.push(q(h,b));"time"!=f.selector&&
(h=f.datePattern||e["dateFormat-"+c])&&k.push(q(h,b));return 1==k.length?k[0]:e["dateTimeFormat-"+c].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(b,a){return k[a]})};g.regexp=function(a){return g._parseInfo(a).regexp};g._parseInfo=function(a){a=a||{};var f=s.normalizeLocale(a.locale),f=g._getGregorianBundle(f),e=a.formatLength||"short",c=a.datePattern||f["dateFormat-"+e],k=a.timePattern||f["timeFormat-"+e],e="date"==a.selector?c:"time"==a.selector?k:f["dateTimeFormat-"+e].replace(/\{(\d+)\}/g,
function(b,a){return[k,c][a]}),b=[];return{regexp:q(e,l.hitch(this,z,b,f,a)),tokens:b,bundle:f}};g.parse=function(a,f){var e=/[\u200E\u200F\u202A\u202E]/g,c=g._parseInfo(f),k=c.tokens,b=c.bundle,e=RegExp("^"+c.regexp.replace(e,"")+"$",c.strict?"":"i").exec(a&&a.replace(e,""));if(!e)return null;var h=["abbr","wide","narrow"],d=[1970,0,1,0,0,0,0],n="",e=m.every(e,function(a,e){if(!e)return!0;var c=k[e-1],g=c.length,c=c.charAt(0);switch(c){case "y":if(2!=g&&f.strict)d[0]=a;else if(100>a)a=Number(a),
c=""+(new Date).getFullYear(),g=100*c.substring(0,2),c=Math.min(Number(c.substring(2,4))+20,99),d[0]=a<c?g+a:g-100+a;else{if(f.strict)return!1;d[0]=a}break;case "M":case "L":if(2<g){if(g=b["months-"+("L"==c?"standAlone":"format")+"-"+h[g-3]].concat(),f.strict||(a=a.replace(".","").toLowerCase(),g=m.map(g,function(a){return a.replace(".","").toLowerCase()})),a=m.indexOf(g,a),-1==a)return!1}else a--;d[1]=a;break;case "E":case "e":case "c":g=b["days-"+("c"==c?"standAlone":"format")+"-"+h[g-3]].concat();
f.strict||(a=a.toLowerCase(),g=m.map(g,function(a){return a.toLowerCase()}));a=m.indexOf(g,a);if(-1==a)return!1;break;case "D":d[1]=0;case "d":d[2]=a;break;case "a":g=f.am||b["dayPeriods-format-wide-am"];c=f.pm||b["dayPeriods-format-wide-pm"];if(!f.strict){var l=/\./g;a=a.replace(l,"").toLowerCase();g=g.replace(l,"").toLowerCase();c=c.replace(l,"").toLowerCase()}if(f.strict&&a!=g&&a!=c)return!1;n=a==c?"p":a==g?"a":"";break;case "K":24==a&&(a=0);case "h":case "H":case "k":if(23<a)return!1;d[3]=a;break;
case "m":d[4]=a;break;case "s":d[5]=a;break;case "S":d[6]=a}return!0}),c=+d[3];"p"===n&&12>c?d[3]=c+12:"a"===n&&12==c&&(d[3]=0);c=new Date(d[0],d[1],d[2],d[3],d[4],d[5],d[6]);f.strict&&c.setFullYear(d[0]);var p=k.join(""),l=-1!=p.indexOf("d"),p=-1!=p.indexOf("M");if(!e||p&&c.getMonth()>d[1]||l&&c.getDate()>d[2])return null;if(p&&c.getMonth()<d[1]||l&&c.getDate()<d[2])c=r.add(c,"hour",1);return c};var w=[];g.addCustomFormats=function(a,f){w.push({pkg:a,name:f})};g._getGregorianBundle=function(a){var f=
{};m.forEach(w,function(e){e=s.getLocalization(e.pkg,e.name,a);f=l.mixin(f,e)},this);return f};g.addCustomFormats(v.id.replace(/\/date\/locale$/,".cldr"),"gregorian");g.getNames=function(a,f,e,c){var k;c=g._getGregorianBundle(c);a=[a,e,f];"standAlone"==e&&(e=a.join("-"),k=c[e],1==k[0]&&(k=void 0));a[1]="format";return(k||c[a.join("-")]).concat()};g.isWeekend=function(a,f){var e=u.getWeekend(f),c=(a||new Date).getDay();e.end<e.start&&(e.end+=7,c<e.start&&(c+=7));return c>=e.start&&c<=e.end};g._getDayOfYear=
function(a){return r.difference(new Date(a.getFullYear(),0,1,a.getHours()),a)+1};g._getWeekOfYear=function(a,f){1==arguments.length&&(f=0);var e=(new Date(a.getFullYear(),0,1)).getDay(),c=Math.floor((g._getDayOfYear(a)+(e-f+7)%7-1)/7);e==f&&c++;return c};return g});
//# sourceMappingURL=locale.js.uncompressed.js.map