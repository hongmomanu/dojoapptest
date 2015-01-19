define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    "app/views/layout",
"dojo/on",  "dojo/domReady!"
], function(layout,on){
    
       layout.initlayout(); 
	
       //on(dojo.query('.navtree')[0], "onShow", function(){alert(1)});
    
});