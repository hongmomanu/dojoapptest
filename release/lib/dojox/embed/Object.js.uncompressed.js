//>>built
define("dojox/embed/Object","dojo/_base/kernel dojo/_base/declare dojo/dom-geometry dijit/_Widget ./Flash ./Quicktime".split(" "),function(d,e,f,g,h,k){d.experimental("dojox.embed.Object");return e("dojox.embed.Object",g,{width:0,height:0,src:"",movie:null,params:null,reFlash:/\.swf|\.flv/gi,reQtMovie:/\.3gp|\.avi|\.m4v|\.mov|\.mp4|\.mpg|\.mpeg|\.qt/gi,reQtAudio:/\.aiff|\.aif|\.m4a|\.m4b|\.m4p|\.midi|\.mid|\.mp3|\.mpa|\.wav/gi,postCreate:function(){if(!this.width||!this.height){var a=f.getMarginBox(this.domNode);
this.width=a.w;this.height=a.h}a=h;if(this.src.match(this.reQtMovie)||this.src.match(this.reQtAudio))a=k;if(!this.params&&(this.params={},this.domNode.hasAttributes()))for(var d={dojoType:"",width:"",height:"","class":"",style:"",id:"",src:""},c=this.domNode.attributes,b=0,e=c.length;b<e;b++)d[c[b].name]||(this.params[c[b].name]=c[b].value);this.movie=new a({path:this.src,width:this.width,height:this.height,params:this.params},this.domNode)}})});
//# sourceMappingURL=Object.js.uncompressed.js.map