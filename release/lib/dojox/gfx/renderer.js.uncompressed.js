//>>built
define("dojox/gfx/renderer",["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(m,n,f,k,d){var g=null;f.add("vml",function(b,d,c){c.innerHTML='\x3cv:shape adj\x3d"1"/\x3e';b="adj"in c.firstChild;c.innerHTML="";return b});return{load:function(b,p,c){function l(){p(["dojox/gfx/"+a],function(b){m.renderer=a;g=b;c(b)})}if(g&&"force"!=b)c(g);else{var a=d.forceGfxRenderer;b=!a&&(n.isString(d.gfxRenderer)?d.gfxRenderer:"svg,vml,canvas,silverlight").split(",");
for(var h,e;!a&&b.length;)switch(b.shift()){case "svg":"SVGAngle"in k.global&&(a="svg");break;case "vml":f("vml")&&(a="vml");break;case "silverlight":try{f("ie")?(h=new ActiveXObject("AgControl.AgControl"))&&h.IsVersionSupported("1.0")&&(e=!0):navigator.plugins["Silverlight Plug-In"]&&(e=!0)}catch(q){e=!1}finally{h=null}e&&(a="silverlight");break;case "canvas":k.global.CanvasRenderingContext2D&&(a="canvas")}"canvas"===a&&!1!==d.canvasEvents&&(a="canvasWithEvents");"svg"==a&&"undefined"!=typeof window.svgweb?
window.svgweb.addOnLoad(l):l()}}}});
//# sourceMappingURL=renderer.js.uncompressed.js.map