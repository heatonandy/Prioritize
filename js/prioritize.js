

var wo = (function packageTodo() {

	// initialize parse
	Parse.initialize("GNkDUoC0Q3ToyKVtMiavGFCSAqO7JSz8tzh139aR", 
					 "1QV6cFHk4MsExOzENqSvPKCCyXTz6ldPL268XXF6");

	/* CLASS DECLARATIONS */
	/*var ToDo = Parse.Object.extend("ToDo"
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
		}); // end ToDo Class*/


	// variable declarations
	var currentUser, tempUser, uName, pass;
	// function declarations
	$(function () {
		$("#signinPopup").dialog({
			autoOpen: false,
			show: {
				effect: "drop",
				duration: 500
			},
			hide: {
				effect: "drop",
				duration: "500"
			}, 
			modal: true,
			width: 315,
			position: {
				my: 'top',
				at: 'right bottom',
				of: $('#signinDiv')
			},
			buttons: [
				{
					text: "Sign In",
					click: function() {
						uName = $("#usernameInput").val().toString();
						pass = $("#passwordInput").val().toString();
						Parse.User.logIn(uName, pass, {
							success: function(user) {
								$("#signinPopup").dialog("close");
							}
						});
					} // end click function 
				}, // end button 1
				{
					text: "Close",
					click: function() {
						$(this).dialog("close");
					}
				}
			]
		}); // end signinPopup dialog select
		$(".ui-dialog-titlebar").hide();
		// signin/register button click
		$("#signinBtn").click(function() {
			$("#signinPopup").dialog("open"); 
		}); // end #signingBtn select
		$("#registerPopup").dialog({
			autoOpen: false,
			show: {
				effect: "drop",
				duration: 500
			},
			hide: {
				effect: "drop",
				duration: "500"
			}, 
			modal: true,
			width: 315,
			height: 300,
			position: {
				my: 'top',
				at: 'right bottom',
				of: $('#signinDiv')
			},
			buttons: [
				{
					text: "Finish",
					click: function() {
						$(this).dialog("close");
						tempUser = new Parse.User();
						user.set("firstname", $("#newFNameInput").val().toString());
						alert("first name: " + $("#newFNameInput").val().toString());
						user.set("lastname", $("#newLNameInput").val().toString());
						user.set("username", $("#newUnameInput").val().toString());
						user.set("password", $("#newPassInput").val().toString());

						user.signUp(null, {
							success: function(user) {
								$("#registerPopup").dialog("close");
							},
							error: function(user, error) {
								alert("There was an error: " + error.code + " " + error.message);
							}
						}); // end user signup
					}
				}
			]
		}); // end signinPopup dialog select
		$(".ui-dialog-titlebar").hide();
		$("#registerBtn").click(function() {
			$("#signinPopup").dialog("close"); 
			$("#registerPopup").dialog("open"); 
		}); // end #signingBtn select
	}); // end anonymous jquery dialog funciton
}()); // end wo 