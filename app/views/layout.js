define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    "dojo/parser","dijit/layout/AccordionContainer", "dijit/layout/ContentPane","dijit/layout/BorderContainer",
			"dijit/layout/TabContainer", "dojox/layout/ExpandoPane"
], function(parser,AccordionContainer,ContentPane,BorderContainer,TabContainer){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.
 
 
    // This returned object becomes the defined value of this module
    return {
        initlayout: function () {
		var me=this;
		require(["app/model/layout"],
			function(layout){
				
				var aContainer = new AccordionContainer({style:"height: 100%"}, "markup");
				layout.getAccordionStore().query().forEach(function(Accordion){
					aContainer.addChild(new ContentPane({
					title: Accordion.title,
					searchkey:Accordion.title,
					tooltip:Accordion.title,
					iconClass:Accordion.iconcss,
					onShow:function(){
						me.initLeftTree(this)
					}	,
					content: Accordion.content
				    }));
				});
				var tContainer=new TabContainer({style:"height: 100%",region: 'center', tabStrip:'true',tabPosition: 'top'}, "maintab");
				layout.getMainTabStore().query().forEach(function(mainTab){
					tContainer.addChild(new ContentPane({
					title: mainTab.title,
					content: mainTab.content
				    }));
				});
				
							
				
				tContainer.startup();
				aContainer.startup();
				
				parser.parse();
				//console.log(document.getElementById('tree1'));				
			});
		
				
        },
	initLeftTree:function(obj){
		//console.log(obj);
		//testobj=obj;
		require(["app/model/layout","dijit/Tree"],
			function(layout,Tree){
			dojo.query('.navtree',obj.domNode).forEach(function(treeitem){
				var navTree = new Tree({
							model: layout.getGovernmentModel(obj.searchkey),
							//onOpenClick: true,
							onLoad: function(){
								//dom.byId('image').src = '../resources/images/root.jpg';
							},
							onClick: function(item){

								//alert(1);
                                var maintab=dijit.byId('maintab');
                                require(["dojo/text!app/views/html/content.html"],function(html){
					//console.log(html);
					var panel=new ContentPane({
						title: '11',
						closable:true,
						selected: true,
						content: html
					});
					maintab.addChild(panel);
					maintab.selectChild(panel);
					
					});

                                
								//dom.byId('image').src = '../resources/images/'+item.id+'.jpg';

							},
							persist: false
						}, treeitem);
				navTree.startup();
			})	
			
	      });
			
        }
 
        
    };
});