

var wo = (function packageTodo() {
	
	Parse.$ = jQuery;

	// initialize parse
	Parse.initialize("GNkDUoC0Q3ToyKVtMiavGFCSAqO7JSz8tzh139aR", 
					 "1QV6cFHk4MsExOzENqSvPKCCyXTz6ldPL268XXF6");

	/* CLASS DECLARATIONS */

	// Todo model has content, completed, duedate, notes
	var Todo = Parse.Object.extend("Todo", {
		defaults: {
			content: "nothing here",
			completed: false,
			duedate: null,
			notes: "no notes"
		}, // end defaults
		// make sure each todo list item has content
		initialize: function() {
			if (!this.get("content")){
				this.set({"content": this.defaults.content)};
			} // end if
		}, // end initialize
		// toggle the 'completed' state of this todo
		toggle: function() {
			this.save({
				"completed" : !this.get("completed") 
			}); // end toggle
		}
	}),  // end Todo Class

	// Todo list collection 
	TodoList = Parse.Collection.extend({
		// reference the class model
		model: Todo,
		// Filter the list of all todo's that are finished
		completed: function() {
			return this.filter(function(todo){return todo.get("completed"); });
		}, // end completed function
		// Filter the list of all todo's that are not finished
		remaining: function() {
			return this.without.apply(this, this.completed());
		},
		// generate next order number for new items
		nextOrder: function() {
			if(!this.length) return 1;
			return this.last().get("order") + 1;
		}, // end nextOrder function
		comparator: function(todo) {
			return todo.get("order");
		} // end comparator funciton

	}); // end TodoList

	// variable declarations

	// function declarations

	// underscore.js templates

}); // end wo 