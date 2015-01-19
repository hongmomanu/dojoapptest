//>>built
define("dojox/editor/plugins/SpellCheck","dojo dijit dojo/io/script dijit/popup dijit/_Widget dijit/_Templated dijit/_editor/_Plugin dijit/form/TextBox dijit/form/DropDownButton dijit/TooltipDialog dijit/form/MultiSelect dijit/Menu dojo/i18n!dojox/editor/plugins/nls/SpellCheck".split(" "),function(d,m,B,x,y,z,A){d.experimental("dojox.editor.plugins.SpellCheck");var s=d.declare("dojox.editor.plugins._spellCheckControl",[y,z],{widgetsInTemplate:!0,templateString:"\x3ctable role\x3d'presentation' class\x3d'dijitEditorSpellCheckTable'\x3e\x3ctr\x3e\x3ctd colspan\x3d'3' class\x3d'alignBottom'\x3e\x3clabel for\x3d'${textId}' id\x3d'${textId}_label'\x3e${unfound}\x3c/label\x3e\x3cdiv class\x3d'dijitEditorSpellCheckBusyIcon' id\x3d'${id}_progressIcon'\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd class\x3d'dijitEditorSpellCheckBox'\x3e\x3cinput dojoType\x3d'dijit.form.TextBox' required\x3d'false' intermediateChanges\x3d'true' class\x3d'dijitEditorSpellCheckBox' dojoAttachPoint\x3d'unfoundTextBox' id\x3d'${textId}'/\x3e\x3c/td\x3e\x3ctd\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'skipButton'\x3e${skip}\x3c/button\x3e\x3c/td\x3e\x3ctd\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'skipAllButton'\x3e${skipAll}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd class\x3d'alignBottom'\x3e\x3clabel for\x3d'${selectId}'\x3e${suggestions}\x3c/td\x3e\x3c/label\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'toDicButton'\x3e${toDic}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3cselect dojoType\x3d'dijit.form.MultiSelect' id\x3d'${selectId}' class\x3d'dijitEditorSpellCheckBox listHeight' dojoAttachPoint\x3d'suggestionSelect'\x3e\x3c/select\x3e\x3c/td\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'replaceButton'\x3e${replace}\x3c/button\x3e\x3cdiv class\x3d'topMargin'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'replaceAllButton'\x3e${replaceAll}\x3c/button\x3e\x3cdiv\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3cdiv class\x3d'topMargin'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'cancelButton'\x3e${cancel}\x3c/button\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
constructor:function(){this.isOpen=this.isChanged=this.ignoreChange=!1;this.closable=!0},postMixInProperties:function(){this.id=m.getUniqueId(this.declaredClass.replace(/\./g,"_"));this.textId=this.id+"_textBox";this.selectId=this.id+"_select"},postCreate:function(){var a=this.suggestionSelect;d.removeAttr(a.domNode,"multiple");a.addItems=function(a){var c=this,h=null;a&&0<a.length&&d.forEach(a,function(a,b){h=d.create("option",{innerHTML:a,value:a},c.domNode);0==b&&(h.selected=!0)})};a.removeItems=
function(){d.empty(this.domNode)};a.deselectAll=function(){this.containerNode.selectedIndex=-1};this.connect(this,"onKeyPress","_cancel");this.connect(this.unfoundTextBox,"onKeyPress","_enter");this.connect(this.unfoundTextBox,"onChange","_unfoundTextBoxChange");this.connect(this.suggestionSelect,"onKeyPress","_enter");this.connect(this.skipButton,"onClick","onSkip");this.connect(this.skipAllButton,"onClick","onSkipAll");this.connect(this.toDicButton,"onClick","onAddToDic");this.connect(this.replaceButton,
"onClick","onReplace");this.connect(this.replaceAllButton,"onClick","onReplaceAll");this.connect(this.cancelButton,"onClick","onCancel")},onSkip:function(){},onSkipAll:function(){},onAddToDic:function(){},onReplace:function(){},onReplaceAll:function(){},onCancel:function(){},onEnter:function(){},focus:function(){this.unfoundTextBox.focus()},_cancel:function(a){a.keyCode==d.keys.ESCAPE&&(this.onCancel(),d.stopEvent(a))},_enter:function(a){a.keyCode==d.keys.ENTER&&(this.onEnter(),d.stopEvent(a))},_unfoundTextBoxChange:function(){var a=
this.textId+"_label";this.ignoreChange?d.byId(a).innerHTML=this.unfound:(d.byId(a).innerHTML=this.replaceWith,this.isChanged=!0,this.suggestionSelect.deselectAll())},_setUnfoundWordAttr:function(a){this.unfoundTextBox.set("value",a||"")},_getUnfoundWordAttr:function(){return this.unfoundTextBox.get("value")},_setSuggestionListAttr:function(a){var b=this.suggestionSelect;a=a||[];b.removeItems();b.addItems(a)},_getSelectedWordAttr:function(){var a=this.suggestionSelect.getSelected();return a&&0<a.length?
a[0].value:this.unfoundTextBox.get("value")},_setDisabledAttr:function(a){this.skipButton.set("disabled",a);this.skipAllButton.set("disabled",a);this.toDicButton.set("disabled",a);this.replaceButton.set("disabled",a);this.replaceAllButton.set("disabled",a)},_setInProgressAttr:function(a){d.toggleClass(this.id+"_progressIcon","hidden",!a)}}),w=d.declare("dojox.editor.plugins._SpellCheckScriptMultiPart",null,{ACTION_QUERY:"query",ACTION_UPDATE:"update",callbackHandle:"callback",maxBufferLength:100,
delimiter:" ",label:"response",_timeout:3E4,SEC:1E3,constructor:function(){this.serviceEndPoint="";this._queue=[];this.isWorking=!1;this.exArgs=null;this._counter=0},send:function(a,b){var c=this,h=this.delimiter,e=this.maxBufferLength,f=this.label,m=this.serviceEndPoint,t=this.callbackHandle,r=this.exArgs,u=this._timeout,q=0,g=0;this._result||(this._result=[]);b=b||this.ACTION_QUERY;var k=function(){var n=[],l=0;if(a&&0<a.length){c.isWorking=!0;var k=a.length;do{q=g+1;if((g+=e)>k)g=k;else for(;h&&
a.charAt(g)!=h&&g<=k;)g++;n.push({l:q,r:g});l++}while(g<k);d.forEach(n,function(e,h){var g={url:m,action:b,timeout:u,callbackParamName:t,handle:function(a,b){if(++c._counter<=this.size&&!(a instanceof Error)&&a[f]&&d.isArray(a[f])){var e=this.offset;d.forEach(a[f],function(a){a.offset+=e});c._result[this.number]=a[f]}c._counter==this.size&&(c._finalizeCollection(this.action),c.isWorking=!1,0<c._queue.length&&c._queue.shift()())}};g.content=r?d.mixin(r,{action:b,content:a.substring(e.l-1,e.r)}):{action:b,
content:a.substring(e.l-1,e.r)};g.size=l;g.number=h;g.offset=e.l-1;d.io.script.get(g)})}};c.isWorking?c._queue.push(k):k()},_finalizeCollection:function(a){for(var b=this._result,c=b.length,h=0;h<c;h++)var e=b.shift(),b=b.concat(e);if(a==this.ACTION_QUERY)this.onLoad(b);this._counter=0;this._result=[]},onLoad:function(a){},setWaitingTime:function(a){this._timeout=a*this.SEC}}),p=d.declare("dojox.editor.plugins.SpellCheck",[A],{url:"",bufferLength:100,interactive:!1,timeout:30,button:null,_editor:null,
exArgs:null,_cursorSpan:'\x3cspan class\x3d"cursorPlaceHolder"\x3e\x3c/span\x3e',_cursorSelector:"cursorPlaceHolder",_incorrectWordsSpan:"\x3cspan class\x3d'incorrectWordPlaceHolder'\x3e${text}\x3c/span\x3e",_ignoredIncorrectStyle:{cursor:"inherit",borderBottom:"none",backgroundColor:"transparent"},_normalIncorrectStyle:{cursor:"pointer",borderBottom:"1px dotted red",backgroundColor:"yellow"},_highlightedIncorrectStyle:{borderBottom:"1px dotted red",backgroundColor:"#b3b3ff"},_selector:"incorrectWordPlaceHolder",
_maxItemNumber:3,constructor:function(){this._spanList=[];this._cache={};this._enabled=!0;this._iterator=0},setEditor:function(a){this._editor=a;this._initButton();this._setNetwork();this._connectUp()},_initButton:function(){var a=this,b=this._strings=d.i18n.getLocalization("dojox.editor.plugins","SpellCheck"),c=this._dialog=new m.TooltipDialog;c.set("content",this._dialogContent=new s({unfound:b.unfound,skip:b.skip,skipAll:b.skipAll,toDic:b.toDic,suggestions:b.suggestions,replaceWith:b.replaceWith,
replace:b.replace,replaceAll:b.replaceAll,cancel:b.cancel}));this.button=new m.form.DropDownButton({label:b.widgetLabel,showLabel:!1,iconClass:"dijitEditorSpellCheckIcon",dropDown:c,id:m.getUniqueId(this.declaredClass.replace(/\./g,"_"))+"_dialogPane",closeDropDown:function(b){if(a._dialogContent.closable){a._dialogContent.isOpen=!1;if(d.isIE){var c=a._iterator,f=a._spanList;c<f.length&&0<=c&&d.style(f[c],a._normalIncorrectStyle)}this._opened&&(x.close(this.dropDown),b&&this.focus(),this._opened=
!1,this.state="")}}});a._dialogContent.isOpen=!1;c.domNode.setAttribute("aria-label",this._strings.widgetLabel)},_setNetwork:function(){var a=this.exArgs;if(!this._service){var b=this._service=new w;b.serviceEndPoint=this.url;b.maxBufferLength=this.bufferLength;b.setWaitingTime(this.timeout);a&&(delete a.name,delete a.url,delete a.interactive,delete a.timeout,b.exArgs=a)}},_connectUp:function(){var a=this._editor,b=this._dialogContent;this.connect(this.button,"set","_disabled");this.connect(this._service,
"onLoad","_loadData");this.connect(this._dialog,"onOpen","_openDialog");this.connect(a,"onKeyPress","_keyPress");this.connect(a,"onLoad","_submitContent");this.connect(b,"onSkip","_skip");this.connect(b,"onSkipAll","_skipAll");this.connect(b,"onAddToDic","_add");this.connect(b,"onReplace","_replace");this.connect(b,"onReplaceAll","_replaceAll");this.connect(b,"onCancel","_cancel");this.connect(b,"onEnter","_enter");a.contentPostFilters.push(this._spellCheckFilter);d.publish(m._scopeName+".Editor.plugin.SpellCheck.getParser",
[this]);this.parser||console.error("Can not get the word parser!")},_disabled:function(a,b){"disabled"==a&&(b?(this._iterator=0,this._spanList=[]):this.interactive&&(!b&&this._service)&&this._submitContent(!0),this._enabled=!b)},_keyPress:function(a){if(this.interactive){var b=a.charCode;!a.altKey&&b==d.keys.SPACE?this._submitContent():(a.ctrlKey&&(118==b||86==b)||!a.ctrlKey&&a.charCode)&&this._submitContent(!0)}},_loadData:function(a){var b=this._cache,c=this._editor.get("value"),h=this._dialogContent;
this._iterator=0;d.forEach(a,function(a){b[a.text]=a.suggestion;b[a.text].correct=!1});this._enabled&&(h.closable=!1,this._markIncorrectWords(c,b),h.closable=!0,this._dialogContent.isOpen&&(this._iterator=-1,this._skip()))},_openDialog:function(){var a=this._dialogContent;a.ignoreChange=!0;a.set("unfoundWord","");a.set("suggestionList",null);a.set("disabled",!0);a.set("inProgress",!0);a.isOpen=!0;a.closable=!1;this._submitContent();a.closable=!0},_skip:function(a,b){var c=this._dialogContent,h=this._spanList||
[],e=h.length,f=this._iterator;c.closable=!1;c.isChanged=!1;c.ignoreChange=!0;for(!b&&(0<=f&&f<e)&&this._skipWord(f);++f<e&&!0==h[f].edited;);f<e?(this._iterator=f,this._populateDialog(f),this._selectWord(f)):(this._iterator=-1,c.set("unfoundWord",this._strings.msg),c.set("suggestionList",null),c.set("disabled",!0),c.set("inProgress",!1));setTimeout(function(){d.isWebKit&&c.skipButton.focus();c.focus();c.ignoreChange=!1;c.closable=!0},0)},_skipAll:function(){this._dialogContent.closable=!1;this._skipWordAll(this._iterator);
this._skip()},_add:function(){var a=this._dialogContent;a.closable=!1;a.isOpen=!0;this._addWord(this._iterator,a.get("unfoundWord"));this._skip()},_replace:function(){var a=this._dialogContent,b=this._iterator,c=a.get("selectedWord");a.closable=!1;this._replaceWord(b,c);this._skip(null,!0)},_replaceAll:function(){var a=this._dialogContent,b=this._spanList,c=b.length,d=b[this._iterator].innerHTML.toLowerCase(),e=a.get("selectedWord");a.closable=!1;for(a=0;a<c;a++)b[a].innerHTML.toLowerCase()==d&&this._replaceWord(a,
e);this._skip(null,!0)},_cancel:function(){this._dialogContent.closable=!0;this._editor.focus()},_enter:function(){this._dialogContent.isChanged?this._replace():this._skip()},_query:function(a){var b=this._service,c=this._cache;a=this.parser.parseIntoWords(this._html2Text(a))||[];var h=[];d.forEach(a,function(a){a=a.toLowerCase();c[a]||(c[a]=[],c[a].correct=!0,h.push(a))});0<h.length?b.send(h.join(" ")):b.isWorking||this._loadData([])},_html2Text:function(a){for(var b=[],c=!1,d=a?a.length:0,e=0;e<
d;e++)"\x3c"==a.charAt(e)&&(c=!0),!0==c?b.push(" "):b.push(a.charAt(e)),"\x3e"==a.charAt(e)&&(c=!1);return b.join("")},_getBookmark:function(a){var b=this._editor,c=this._cursorSpan;b.execCommand("inserthtml",c);for(var b=b.get("value"),c=b.indexOf(c),d=-1;++d<c&&a.charAt(d)==b.charAt(d););return d},_moveToBookmark:function(){var a=this._editor,b=d.query("."+this._cursorSelector,a.document);if(b=b&&b[0])a._sCall("selectElement",[b]),a._sCall("collapse",[!0]),(a=b.parentNode)&&a.removeChild(b)},_submitContent:function(a){if(a){var b=
this;this._delayHandler&&(clearTimeout(this._delayHandler),this._delayHandler=null);setTimeout(function(){b._query(b._editor.get("value"))},3E3)}else this._query(this._editor.get("value"))},_populateDialog:function(a){var b=this._spanList,c=this._cache,d=this._dialogContent;d.set("disabled",!1);a<b.length&&0<b.length&&(a=b[a].innerHTML,d.set("unfoundWord",a),d.set("suggestionList",c[a.toLowerCase()]),d.set("inProgress",!1))},_markIncorrectWords:function(a,b){for(var c=this,h=this.parser,e=this._editor,
f=this._incorrectWordsSpan,p=this._normalIncorrectStyle,t=this._selector,r=h.parseIntoWords(this._html2Text(a).toLowerCase()),h=h.getIndices(),u=this._cursorSpan,q=this._getBookmark(a),g=!1,k=a.split(""),n=null,n=r.length-1;0<=n;n--){var l=r[n];if(b[l]&&!b[l].correct){var l=h[n],s=r[n].length,v=l+s;v<=q&&!g&&(k.splice(q,0,u),g=!0);k.splice(l,s,d.string.substitute(f,{text:a.substring(l,v)}));l<q&&(q<v&&!g)&&(g=k[l].split(""),g.splice(39+q-l,0,u),k[l]=g.join(""),g=!0)}}g||(k.splice(q,0,u),g=!0);e.set("value",
k.join(""));e._cursorToStart=!1;this._moveToBookmark();n=this._spanList=d.query("."+this._selector,e.document);n.forEach(function(a,b){a.id=t+b});this.interactive||delete p.cursor;n.style(p);this.interactive&&(c._contextMenu&&(c._contextMenu.uninitialize(),c._contextMenu=null),c._contextMenu=new m.Menu({targetNodeIds:[e.iframe],bindDomNode:function(a){a=d.byId(a);var h,f;"iframe"==a.tagName.toLowerCase()?(f=a,this._iframeContentWindow(f),h=d.body(e.document)):h=a==d.body()?d.doc.documentElement:a;
var g={node:a,iframe:f};d.attr(a,"_dijitMenu"+this.id,this._bindings.push(g));var k=d.hitch(this,function(a){return[d.connect(a,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(a){var h=a.target,g=c._strings;if(d.hasClass(h,t)&&!h.edited){d.stopEvent(a);var k=c._maxItemNumber,l=h.id.substring(t.length),n=b[h.innerHTML.toLowerCase()],q=n.length;this.destroyDescendants();if(0==q)this.addChild(new m.MenuItem({label:g.iMsg,disabled:!0}));else for(var p=0;p<k&&p<q;p++)this.addChild(new m.MenuItem({label:n[p],
onClick:function(){var a=n[p];return function(){c._replaceWord(l,a);e.focus()}}()}));this.addChild(new m.MenuSeparator);this.addChild(new m.MenuItem({label:g.iSkip,onClick:function(){c._skipWord(l);e.focus()}}));this.addChild(new m.MenuItem({label:g.iSkipAll,onClick:function(){c._skipWordAll(l);e.focus()}}));this.addChild(new m.MenuSeparator);this.addChild(new m.MenuItem({label:g.toDic,onClick:function(){c._addWord(l);e.focus()}}));this._scheduleOpen(h,f,{x:a.pageX,y:a.pageY})}}),d.connect(a,"onkeydown",
this,function(a){a.shiftKey&&a.keyCode==d.keys.F10&&(d.stopEvent(a),this._scheduleOpen(a.target,f))})]});g.connects=h?k(h):[];f&&(g.onloadHandler=d.hitch(this,function(){this._iframeContentWindow(f);var a=d.body(e.document);g.connects=k(a)}),f.addEventListener?f.addEventListener("load",g.onloadHandler,!1):f.attachEvent("onload",g.onloadHandler))}}))},_selectWord:function(a){var b=this._editor,c=this._spanList;a<c.length&&0<c.length&&(b._sCall("selectElement",[c[a]]),b._sCall("collapse",[!0]),this._findText(c[a].innerHTML,
!1,!1),d.isIE&&d.style(c[a],this._highlightedIncorrectStyle))},_replaceWord:function(a,b){var c=this._spanList;c[a].innerHTML=b;d.style(c[a],this._ignoredIncorrectStyle);c[a].edited=!0},_skipWord:function(a){var b=this._spanList;d.style(b[a],this._ignoredIncorrectStyle);this._cache[b[a].innerHTML.toLowerCase()].correct=!0;b[a].edited=!0},_skipWordAll:function(a,b){var c=this._spanList,d=c.length;b=b||c[a].innerHTML.toLowerCase();for(var e=0;e<d;e++)!c[e].edited&&c[e].innerHTML.toLowerCase()==b&&this._skipWord(e)},
_addWord:function(a,b){var c=this._service;c.send(b||this._spanList[a].innerHTML.toLowerCase(),c.ACTION_UPDATE);this._skipWordAll(a,b)},_findText:function(a,b,c){var d=this._editor,e=d.window,f=!1;a&&(e.find?f=e.find(a,b,c,!1,!1,!1,!1):(e=d.document,e.selection&&(this._editor.focus(),d=e.body.createTextRange(),(f=e.selection?e.selection.createRange():null)&&(c?d.setEndPoint("EndToStart",f):d.setEndPoint("StartToEnd",f)),b=b?4:0,c&&(b|=1),(f=d.findText(a,d.text.length,b))&&d.select())));return f},
_spellCheckFilter:function(a){return a.replace(/<span class=["']incorrectWordPlaceHolder["'].*?>(.*?)<\/span>/g,"$1")}});p._SpellCheckControl=s;p._SpellCheckScriptMultiPart=w;d.subscribe(m._scopeName+".Editor.getPlugin",null,function(a){!a.plugin&&"spellcheck"===a.args.name.toLowerCase()&&(a.plugin=new p({url:"url"in a.args?a.args.url:"",interactive:"interactive"in a.args?a.args.interactive:!1,bufferLength:"bufferLength"in a.args?a.args.bufferLength:100,timeout:"timeout"in a.args?a.args.timeout:30,
exArgs:a.args}))});return p});
//# sourceMappingURL=SpellCheck.js.uncompressed.js.map