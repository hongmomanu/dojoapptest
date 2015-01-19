//>>built
require({cache:{"url:dojox/grid/enhanced/templates/FilterStatusPane.html":'\x3cdiv class\x3d"dojoxGridFStatusTip"\n\t\x3e\x3cdiv class\x3d"dojoxGridFStatusTipHead"\n\t\t\x3e\x3cspan class\x3d"dojoxGridFStatusTipTitle" dojoAttachPoint\x3d"statusTitle"\x3e\x3c/span\n\t\t\x3e\x3cspan class\x3d"dojoxGridFStatusTipRel" dojoAttachPoint\x3d"statusRel"\x3e\x3c/span\n\t\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dojoxGridFStatusTipDetail" dojoAttachPoint\x3d"statusDetailNode"\n\t\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
require({cache:{"url:dojox/grid/enhanced/templates/FilterStatusPane.html":'\x3cdiv class\x3d"dojoxGridFStatusTip"\n\t\x3e\x3cdiv class\x3d"dojoxGridFStatusTipHead"\n\t\t\x3e\x3cspan class\x3d"dojoxGridFStatusTipTitle" dojoAttachPoint\x3d"statusTitle"\x3e\x3c/span\n\t\t\x3e\x3cspan class\x3d"dojoxGridFStatusTipRel" dojoAttachPoint\x3d"statusRel"\x3e\x3c/span\n\t\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dojoxGridFStatusTipDetail" dojoAttachPoint\x3d"statusDetailNode"\n\t\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dojox/grid/enhanced/plugins/filter/FilterStatusTip","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/query dojo/string dojo/date/locale dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/TooltipDialog dijit/form/Button dijit/_base/popup dojo/text!../../templates/FilterStatusPane.html dojo/i18n!../../nls/Filter".split(" "),function(h,k,f,l,m,u,n,p,v,q,r,g,s){var t=h("dojox.grid.enhanced.plugins.filter.FilterStatusPane",[n,p],{templateString:s});return h("dojox.grid.enhanced.plugins.filter.FilterStatusTip",
null,{constructor:function(a){a=this.plugin=a.plugin;this._statusHeader=["\x3ctable border\x3d'0' cellspacing\x3d'0' class\x3d''\x3e\x3cthead\x3e\x3ctr class\x3d''\x3e\x3cth class\x3d''\x3e\x3cdiv\x3e",a.nls.statusTipHeaderColumn,"\x3c/div\x3e\x3c/th\x3e\x3cth class\x3d' lastColumn'\x3e\x3cdiv\x3e",a.nls.statusTipHeaderCondition,"\x3c/div\x3e\x3c/th\x3e\x3c/tr\x3e\x3c/thead\x3e\x3ctbody\x3e"].join("");this._removedCriterias=[];this._rules=[];this.statusPane=new t;this._dlg=new q({"class":"dijitTooltipBelow dojoxGridFStatusTipDialog",
content:this.statusPane,autofocus:!1});this._dlg.connect(this._dlg.domNode,"onmouseleave",f.hitch(this,this.closeDialog));this._dlg.connect(this._dlg.domNode,"click",f.hitch(this,this._modifyFilter))},destroy:function(){this._dlg.destroyRecursive()},showDialog:function(a,b,d){this._pos={x:a,y:b};g.close(this._dlg);this._removedCriterias=[];this._rules=[];this._updateStatus(d);g.open({popup:this._dlg,parent:this.plugin.filterBar,onCancel:function(){},x:a-12,y:b-3})},closeDialog:function(){g.close(this._dlg);
this._removedCriterias.length&&(this.plugin.filterDefDialog.removeCriteriaBoxes(this._removedCriterias),this._removedCriterias=[],this.plugin.filterDefDialog.onFilter())},_updateStatus:function(a){var b,d=this.plugin,c=d.nls,e=this.statusPane;b=d.filterDefDialog;if(0===b.getCriteria())e.statusTitle.innerHTML=c.statusTipTitleNoFilter,e.statusRel.innerHTML="",b=d.grid.layout.cells[a],b=m.substitute(c.statusTipMsg,[b?"'"+(b.name||b.field)+"'":c.anycolumn]);else{e.statusTitle.innerHTML=c.statusTipTitleHasFilter;
e.statusRel.innerHTML="logicall"==b._relOpCls?c.statusTipRelAll:c.statusTipRelAny;this._rules=[];c=0;for(a=b.getCriteria(c++);a;)a.index=c-1,this._rules.push(a),a=b.getCriteria(c++);b=this._createStatusDetail()}e.statusDetailNode.innerHTML=b;this._addButtonForRules()},_createStatusDetail:function(){return this._statusHeader+k.map(this._rules,function(a,b){return this._getCriteriaStr(a,b)},this).join("")+"\x3c/tbody\x3e\x3c/table\x3e"},_addButtonForRules:function(){1<this._rules.length&&l(".dojoxGridFStatusTipHandle",
this.statusPane.statusDetailNode).forEach(f.hitch(this,function(a,b){(new r({label:this.plugin.nls.removeRuleButton,showLabel:!1,iconClass:"dojoxGridFStatusTipDelRuleBtnIcon",onClick:f.hitch(this,function(a){a.stopPropagation();this._removedCriterias.push(this._rules[b].index);this._rules.splice(b,1);this.statusPane.statusDetailNode.innerHTML=this._createStatusDetail();this._addButtonForRules()})})).placeAt(a,"last")}))},_getCriteriaStr:function(a,b){return["\x3ctr class\x3d' ",b%2?"dojoxGridFStatusTipOddRow":
"","'\x3e\x3ctd class\x3d''\x3e",a.colTxt,"\x3c/td\x3e\x3ctd class\x3d''\x3e\x3cdiv class\x3d'dojoxGridFStatusTipHandle'\x3e\x3cspan class\x3d'dojoxGridFStatusTipCondition'\x3e",a.condTxt,"\x26nbsp;\x3c/span\x3e",a.formattedVal,"\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e"].join("")},_modifyFilter:function(){this.closeDialog();var a=this.plugin;a.filterDefDialog.showDialog(a.filterBar.getColumnIdx(this._pos.x))}})});
//# sourceMappingURL=FilterStatusTip.js.uncompressed.js.map