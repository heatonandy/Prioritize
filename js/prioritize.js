

var wo = (function packageTodo() {

	// initialize parse
	Parse.initialize("GNkDUoC0Q3ToyKVtMiavGFCSAqO7JSz8tzh139aR", 
					 "1QV6cFHk4MsExOzENqSvPKCCyXTz6ldPL268XXF6");

	/* CLASS DECLARATIONS */
	var ToDo = Parse.Object.extend("ToDo"
		// instance methods
		{
			finishTask: function() {
				this.set("completed", true);
				this.save(null, {
					success: function(this){
						alert(this.task + " has been marked completed in the database");
					}, // end success
					error: function(this, error) {
						alert("Task could not be marked complete in the database");
					} // end error
				}); // end save
			} // end finishTask function
		}); // end ToDo Class


	// variable declarations

	// function declarations
	$(function () {
		
	}); // end anonymous jquery dialog signin funciton
}); // end wo 