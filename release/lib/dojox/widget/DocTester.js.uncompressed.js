//>>built
define("dojox/widget/DocTester",["dijit","dojo","dojox","dojo/require!dojo/string,dijit/_Widget,dijit/_Templated,dojox/form/BusyButton,dojox/testing/DocTest"],function(g,a,h){a.provide("dojox.widget.DocTester");a.require("dojo.string");a.require("dijit._Widget");a.require("dijit._Templated");a.require("dojox.form.BusyButton");a.require("dojox.testing.DocTest");a.declare("dojox.widget.DocTester",[g._Widget,g._Templated],{templateString:a.cache("dojox.widget","DocTester/DocTester.html",'\x3cdiv dojoAttachPoint\x3d"domNode" class\x3d"dojoxDocTester"\x3e\n\t\x3cdiv dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n\t\x3cbutton dojoType\x3d"dojox.form.BusyButton" busyLabel\x3d"Testing..." dojoAttachPoint\x3d"runButtonNode"\x3eRun tests\x3c/button\x3e\n\t\x3cbutton dojoType\x3d"dijit.form.Button" dojoAttachPoint\x3d"resetButtonNode" style\x3d"display:none;"\x3eReset\x3c/button\x3e\n\t\x3cspan\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"numTestsNode"\x3e0\x3c/span\x3e tests,\n\t\t\x3cspan dojoAttachPoint\x3d"numTestsOkNode"\x3e0\x3c/span\x3e passed,\n\t\t\x3cspan dojoAttachPoint\x3d"numTestsNokNode"\x3e0\x3c/span\x3e failed\n\t\x3c/span\x3e\n\x3c/div\x3e'),
widgetsInTemplate:!0,_fillContent:function(f){var c=f.innerHTML;this.doctests=new h.testing.DocTest;this.tests=this.doctests.getTestsFromString(this._unescapeHtml(c));f=a.map(this.tests,"return item.line-1");for(var c=c.split("\n"),b='\x3cpre class\x3d"testCase testNum0 odd"\x3e',d=0;d<c.length;d++){var e=a.indexOf(f,d);if(0<e&&-1!=e)var g=e%2?"even":"odd",b=b+'\x3cdiv class\x3d"actualResult"\x3eFAILED, actual result was: \x3cspan class\x3d"result"\x3e\x3c/span\x3e\x3c/div\x3e',b=b+('\x3c/pre\x3e\x3cpre class\x3d"testCase testNum'+
e+" "+g+'"\x3e');b+=c[d].replace(/^\s+/,"")+"\n"}this.containerNode.innerHTML=b+'\x3cdiv class\x3d"actualResult"\x3eFAILED, actual result was: \x3cspan class\x3d"result"\x3e\x3c/span\x3e\x3c/div\x3e\x3c/pre\x3e'},postCreate:function(){this.inherited("postCreate",arguments);a.connect(this.runButtonNode,"onClick",a.hitch(this,"runTests"));a.connect(this.resetButtonNode,"onClick",a.hitch(this,"reset"));this.numTestsNode.innerHTML=this.tests.length},runTests:function(){for(var f=0,c=0,b=0;b<this.tests.length;b++){var d=
this.doctests.runTest(this.tests[b].commands,this.tests[b].expectedResult);a.query(".testNum"+b,this.domNode).addClass(d.success?"resultOk":"resultNok");if(d.success)f++,this.numTestsOkNode.innerHTML=f;else{c++;this.numTestsNokNode.innerHTML=c;var e=a.query(".testNum"+b+" .actualResult",this.domNode)[0];a.style(e,"display","inline");a.query(".result",e)[0].innerHTML=a.toJson(d.actualResult)}}this.runButtonNode.cancel();a.style(this.runButtonNode.domNode,"display","none");a.style(this.resetButtonNode.domNode,
"display","")},reset:function(){a.style(this.runButtonNode.domNode,"display","");a.style(this.resetButtonNode.domNode,"display","none");this.numTestsOkNode.innerHTML="0";this.numTestsNokNode.innerHTML="0";a.query(".actualResult",this.domNode).style("display","none");a.query(".testCase",this.domNode).removeClass("resultOk").removeClass("resultNok")},_unescapeHtml:function(a){return a=String(a).replace(/&amp;/gm,"\x26").replace(/&lt;/gm,"\x3c").replace(/&gt;/gm,"\x3e").replace(/&quot;/gm,'"')}})});
//# sourceMappingURL=DocTester.js.uncompressed.js.map