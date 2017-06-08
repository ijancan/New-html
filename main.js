


define(function (require, exports, module) {
    "use strict";
    var commandName         = "newHtml";
	 var newForm = "newForm";
    var Menus               = brackets.getModule("command/Menus"),
        CommandManager      = brackets.getModule("command/CommandManager"),
        EditorManager       = brackets.getModule("editor/EditorManager");
    
    var template, template2;
    /*
     * Implementation
     */
    function loadhtml() {
        template = require('text!html-template.html');
      EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
    }
	function loadform() {
		template2 = require('text!form-template.html');
		EditorManager.getCurrentFullEditor()._codeMirror.replaceSelection(template2);
	}
    /*
     * Command
     */
CommandManager.register("New html", commandName, loadhtml); 
CommandManager.register("New form", newForm, loadform); 
    /*
     * Custom menu
     */
var menu = Menus.addMenu("Html", "edgedocks.custom.menu" );  
 menu.addMenuItem(commandName);
 menu.addMenuItem(newForm);
});
/*var menu2 = Menus.addMenu("Form", "edgedocks.custom.menu" );  
 
});*/


