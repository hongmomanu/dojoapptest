//>>built
require({cache:{"url:dojox/form/resources/FileInput.html":'\x3cdiv class\x3d"dijitFileInput"\x3e\n\t\x3cinput id\x3d"${id}" class\x3d"dijitFileInputReal" type\x3d"file" dojoAttachPoint\x3d"fileInput" name\x3d"${name}" /\x3e\n\t\x3cdiv class\x3d"dijitFakeInput"\x3e\n\t\t\x3cinput class\x3d"dijitFileInputVisible" type\x3d"text" dojoAttachPoint\x3d"focusNode, inputNode" /\x3e\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputText" dojoAttachPoint\x3d"titleNode"\x3e${label}\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputButton" dojoAttachPoint\x3d"cancelNode" \n\t\t\tdojoAttachEvent\x3d"onclick:reset"\x3e${cancelText}\x3c/div\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
require({cache:{"url:dojox/form/resources/FileInput.html":'\x3cdiv class\x3d"dijitFileInput"\x3e\n\t\x3cinput id\x3d"${id}" class\x3d"dijitFileInputReal" type\x3d"file" dojoAttachPoint\x3d"fileInput" name\x3d"${name}" /\x3e\n\t\x3cdiv class\x3d"dijitFakeInput"\x3e\n\t\t\x3cinput class\x3d"dijitFileInputVisible" type\x3d"text" dojoAttachPoint\x3d"focusNode, inputNode" /\x3e\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputText" dojoAttachPoint\x3d"titleNode"\x3e${label}\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputButton" dojoAttachPoint\x3d"cancelNode" \n\t\t\tdojoAttachEvent\x3d"onclick:reset"\x3e${cancelText}\x3c/div\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/form/FileInput","dojo/_base/declare dojo/_base/kernel dojo/_base/fx dojo/dom-attr dojo/dom-class dojo/text!./resources/FileInput.html dijit/form/_FormWidget dijit/_Templated".split(" "),function(b,c,a,g,d,e,f,h){c.experimental("dojox.form.FileInput");return b("dojox.form.FileInput",f,{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:e,startup:function(){this._listener=this.connect(this.fileInput,"onchange","_matchValue");this._keyListener=this.connect(this.fileInput,
"onkeyup","_matchValue")},postCreate:function(){},_matchValue:function(){this.inputNode.value=this.fileInput.value;this.inputNode.value&&(this.cancelNode.style.visibility="visible",a.fadeIn({node:this.cancelNode,duration:275}).play())},setLabel:function(a,b){this.titleNode.innerHTML=a},reset:function(b){this.disconnect(this._listener);this.disconnect(this._keyListener);this.fileInput&&this.domNode.removeChild(this.fileInput);a.fadeOut({node:this.cancelNode,duration:275}).play();this.fileInput=document.createElement("input");
this.fileInput.setAttribute("type","file");this.fileInput.setAttribute("id",this.id);this.fileInput.setAttribute("name",this.name);d.add(this.fileInput,"dijitFileInputReal");this.domNode.appendChild(this.fileInput);this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue");this._listener=this.connect(this.fileInput,"onchange","_matchValue");this.inputNode.value=""}})});
//# sourceMappingURL=FileInput.js.uncompressed.js.map