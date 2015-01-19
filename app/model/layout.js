define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    "dojo/json",
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel",
    "dojo/store/JsonRest",
    "dojo/store/Cache"
], function( json, Memory, ObjectStoreModel,JsonRest,Cache){
    
	
	
		
       var accordionStore = new Cache(new JsonRest({
		target: "app/model/data/accordion.json"
	}), new Memory({}));
	var maintabStore = new Cache(new JsonRest({
		target: "app/model/data/maintab.json"
	}), new Memory({}));	
		
	
					
	var governmentModel = function(key){
		var treeDataStore=new Cache(new JsonRest({
			target: "app/model/data/treedata.json?key="+key,
			getChildren: function(object){
							return object.children || [];
						}
		}), new Memory({}));
			
		return new ObjectStoreModel({
							store: treeDataStore,
							query: {id: 'root'},
							mayHaveChildren: function(item){
								return "children" in item;
							}
					
						});
		
	}
						
	return {
		getAccordionStore:function(){
		       return accordionStore;	
		},
		getMainTabStore:function(){
		       return maintabStore;	
		},
		getGovernmentModel:function(key){
			return governmentModel(key);
		}
		
        }				
        				
    
});