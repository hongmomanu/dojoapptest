//>>built
define("dojox/fx/split","dojo/_base/lang dojo/dom dojo/_base/window dojo/_base/html dojo/dom-geometry dojo/dom-construct dojo/dom-attr dojo/_base/fx dojo/fx ./_base dojo/fx/easing dojo/_base/connect".split(" "),function(u,t,B,l,z,A,C,y,D,E,v,s){var m=u.getObject("dojox.fx");u.mixin(m,{_split:function(a){a.rows=a.rows||3;a.columns=a.columns||3;a.duration=a.duration||1E3;for(var b=a.node=t.byId(a.node),g=b.parentNode,n=B.body();g&&g!=n&&"static"==l.style(g,"position");)g=g.parentNode;for(var d=g!=n?
z.position(g,!0):{x:0,y:0},g=z.position(b,!0),r=l.style(b,"height"),c=l.style(b,"width"),x=l.style(b,"borderLeftWidth")+l.style(b,"borderRightWidth"),f=l.style(b,"borderTopWidth")+l.style(b,"borderBottomWidth"),n=Math.ceil(r/a.rows),e=Math.ceil(c/a.columns),h=A.create(b.tagName,{style:{position:"absolute",padding:0,margin:0,border:"none",top:g.y-d.y+"px",left:g.x-d.x+"px",height:r+f+"px",width:c+x+"px",background:"none",overflow:a.crop?"hidden":"visible",zIndex:l.style(b,"zIndex")}},b,"after"),d=
[],x=A.create(b.tagName,{style:{position:"absolute",border:"none",padding:0,margin:0,height:n+x+"px",width:e+f+"px",overflow:"hidden"}}),f=0,r=a.rows;f<r;f++)for(var c=0,w=a.columns;c<w;c++){var k=u.clone(x),p=u.clone(b),q=f*n,m=c*e;p.style.filter="";C.remove(p,"id");l.style(k,{border:"none",overflow:"hidden",top:q+"px",left:m+"px"});l.style(p,{position:"static",opacity:"1",marginTop:-q+"px",marginLeft:-m+"px"});k.appendChild(p);h.appendChild(k);k=a.pieceAnimation(k,c,f,g);u.isArray(k)?d=d.concat(k):
d.push(k)}b=D.combine(d);s.connect(b,"onEnd",b,function(){h.parentNode.removeChild(h)});a.onPlay&&s.connect(b,"onPlay",b,a.onPlay);a.onEnd&&s.connect(b,"onEnd",b,a.onEnd);return b},explode:function(a){var b=a.node=t.byId(a.node);a.rows=a.rows||3;a.columns=a.columns||3;a.distance=a.distance||1;a.duration=a.duration||1E3;a.random=a.random||0;a.fade||(a.fade=!0);"undefined"==typeof a.sync&&(a.sync=!0);a.random=Math.abs(a.random);a.pieceAnimation=function(b,d,r,c){var x=c.h/a.rows,f=c.w/a.columns,e=2*
a.distance,h=a.duration,g=b.style,k=parseInt(g.top),p=parseInt(g.left),q=0,m=0,s=0;a.random&&(q=Math.random()*a.random+Math.max(1-a.random,0),e*=q,h*=q,q=a.unhide&&a.sync||!a.unhide&&!a.sync?a.duration-h:0,m=Math.random()-0.5,s=Math.random()-0.5);r=(c.h-x)/2-x*r;d=(c.w-f)/2-f*d;c=Math.sqrt(Math.pow(d,2)+Math.pow(r,2));var t=parseInt(k-r*e+c*s),u=parseInt(p-d*e+c*m),e=y.animateProperty({node:b,duration:h,delay:q,easing:a.easing||(a.unhide?v.sinOut:v.circOut),beforeBegin:a.unhide?function(){a.fade&&
l.style(b,{opacity:"0"});g.top=t+"px";g.left=u+"px"}:void 0,properties:{top:a.unhide?{start:t,end:k}:{start:k,end:t},left:a.unhide?{start:u,end:p}:{start:p,end:u}}});return a.fade?(h=y.animateProperty({node:b,duration:h,delay:q,easing:a.fadeEasing||v.quadOut,properties:{opacity:a.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}}}),a.unhide?[h,e]:[e,h]):e};var g=m._split(a);a.unhide?s.connect(g,"onEnd",null,function(){l.style(b,{opacity:"1"})}):s.connect(g,"onPlay",null,function(){l.style(b,{opacity:"0"})});
return g},converge:function(a){a.unhide=!0;return m.explode(a)},disintegrate:function(a){var b=a.node=t.byId(a.node);a.rows=a.rows||5;a.columns=a.columns||5;a.duration=a.duration||1500;a.interval=a.interval||a.duration/(a.rows+2*a.columns);a.distance=a.distance||1.5;a.random=a.random||0;"undefined"==typeof a.fade&&(a.fade=!0);var g=Math.abs(a.random),n=a.duration-(a.rows+a.columns)*a.interval;a.pieceAnimation=function(b,c,d,f){var e=Math.random()*(a.rows+a.columns)*a.interval,h=b.style;c=a.reverseOrder||
0>a.distance?(c+d)*a.interval:(a.rows+a.columns-(c+d))*a.interval;var e=e*g+Math.max(1-g,0)*c,w={};a.unhide?(w.top={start:parseInt(h.top)-f.h*a.distance,end:parseInt(h.top)},a.fade&&(w.opacity={start:"0",end:"1"})):(w.top={end:parseInt(h.top)+f.h*a.distance},a.fade&&(w.opacity={end:"0"}));return y.animateProperty({node:b,duration:n,delay:e,easing:a.easing||(a.unhide?v.sinIn:v.circIn),properties:w,beforeBegin:a.unhide?function(){a.fade&&l.style(b,{opacity:"0"});h.top=w.top.start+"px"}:void 0})};var d=
m._split(a);a.unhide?s.connect(d,"onEnd",d,function(){l.style(b,{opacity:"1"})}):s.connect(d,"onPlay",d,function(){l.style(b,{opacity:"0"})});return d},build:function(a){a.unhide=!0;return m.disintegrate(a)},shear:function(a){var b=a.node=t.byId(a.node);a.rows=a.rows||6;a.columns=a.columns||6;a.duration=a.duration||1E3;a.interval=a.interval||0;a.distance=a.distance||1;a.random=a.random||0;"undefined"==typeof a.fade&&(a.fade=!0);var g=Math.abs(a.random),n=a.duration-(a.rows+a.columns)*Math.abs(a.interval);
a.pieceAnimation=function(b,c,d,f){var e=!(c%2),h=!(d%2),l=Math.random()*n;c=a.reverseOrder?(a.rows+a.columns-(c+d))*a.interval:(c+d)*a.interval;var l=l*g+Math.max(1-g,0)*c,k={},p=b.style;a.fade&&(k.opacity=a.unhide?{start:"0",end:"1"}:{end:"0"});1==a.columns?e=h:1==a.rows&&(h=!e);c=parseInt(p.left);d=parseInt(p.top);var q=a.distance*f.w;f=a.distance*f.h;a.unhide?e==h?k.left=e?{start:c-q,end:c}:{start:c+q,end:c}:k.top=e?{start:d+f,end:d}:{start:d-f,end:d}:e==h?k.left=e?{end:c-q}:{end:c+q}:k.top=e?
{end:d+f}:{end:d-f};return y.animateProperty({node:b,duration:n,delay:l,easing:a.easing||v.sinInOut,properties:k,beforeBegin:a.unhide?function(){a.fade&&(p.opacity="0");e==h?p.left=k.left.start+"px":p.top=k.top.start+"px"}:void 0})};var d=m._split(a);a.unhide?s.connect(d,"onEnd",d,function(){l.style(b,{opacity:"1"})}):s.connect(d,"onPlay",d,function(){l.style(b,{opacity:"0"})});return d},unShear:function(a){a.unhide=!0;return m.shear(a)},pinwheel:function(a){var b=a.node=t.byId(a.node);a.rows=a.rows||
4;a.columns=a.columns||4;a.duration=a.duration||1E3;a.interval=a.interval||0;a.distance=a.distance||1;a.random=a.random||0;"undefined"==typeof a.fade&&(a.fade=!0);var g=a.duration-(a.rows+a.columns)*Math.abs(a.interval);a.pieceAnimation=function(b,r,c,n){var f=n.h/a.rows,e=n.w/a.columns,h=!(r%2),m=!(c%2);n=Math.random()*g;r=0>a.interval?-1*(a.rows+a.columns-(r+c))*a.interval:(r+c)*a.interval;r=n*a.random+Math.max(1-a.random,0)*r;c={};var k=b.style;a.fade&&(c.opacity=a.unhide?{start:0,end:1}:{end:0});
1==a.columns?h=!m:1==a.rows&&(m=h);var p=parseInt(k.left),q=parseInt(k.top);h&&(m?c.top=a.unhide?{start:q+f*a.distance,end:q}:{start:q,end:q+f*a.distance}:c.left=a.unhide?{start:p+e*a.distance,end:p}:{start:p,end:p+e*a.distance});h!=m?c.width=a.unhide?{start:e*(1-a.distance),end:e}:{start:e,end:e*(1-a.distance)}:c.height=a.unhide?{start:f*(1-a.distance),end:f}:{start:f,end:f*(1-a.distance)};return y.animateProperty({node:b,duration:g,delay:r,easing:a.easing||v.sinInOut,properties:c,beforeBegin:a.unhide?
function(){a.fade&&l.style(b,"opacity",0);h?m?k.top=q+f*(1-a.distance)+"px":k.left=p+e*(1-a.distance)+"px":(k.left=p+"px",k.top=q+"px");h!=m?k.width=e*(1-a.distance)+"px":k.height=f*(1-a.distance)+"px"}:void 0})};var n=m._split(a);a.unhide?s.connect(n,"onEnd",n,function(){l.style(b,{opacity:"1"})}):s.connect(n,"play",n,function(){l.style(b,{opacity:"0"})});return n},unPinwheel:function(a){a.unhide=!0;return m.pinwheel(a)},blockFadeOut:function(a){var b=a.node=t.byId(a.node);a.rows=a.rows||5;a.columns=
a.columns||5;a.duration=a.duration||1E3;a.interval=a.interval||a.duration/(a.rows+2*a.columns);a.random=a.random||0;var g=Math.abs(a.random),n=a.duration-(a.rows+a.columns)*a.interval;a.pieceAnimation=function(b,c,d,f){f=Math.random()*a.duration;c=a.reverseOrder?(a.rows+a.columns-(c+d))*Math.abs(a.interval):(c+d)*a.interval;c=f*g+Math.max(1-g,0)*c;return y.animateProperty({node:b,duration:n,delay:c,easing:a.easing||v.sinInOut,properties:{opacity:a.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}},beforeBegin:a.unhide?
function(){l.style(b,{opacity:"0"})}:function(){b.style.filter=""}})};var d=m._split(a);a.unhide?s.connect(d,"onEnd",d,function(){l.style(b,{opacity:"1"})}):s.connect(d,"onPlay",d,function(){l.style(b,{opacity:"0"})});return d},blockFadeIn:function(a){a.unhide=!0;return m.blockFadeOut(a)}});return E});
//# sourceMappingURL=split.js.uncompressed.js.map