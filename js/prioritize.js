

var wo = (function packageTodo() {

	// initialize parse
	Parse.initialize("GNkDUoC0Q3ToyKVtMiavGFCSAqO7JSz8tzh139aR", 
					 "1QV6cFHk4MsExOzENqSvPKCCyXTz6ldPL268XXF6");

	/* CLASS DECLARATIONS */
	var ToDo = Parse.Object.extend("ToDo",
		// instance methods
		{
			finishTask: function() {
				this.set("completed", true);
				this.save(null, {
					success: function() {
						alert("task has been marked completed in the database");
					}, // end success
					error: function(error) {
						alert("Task could not be marked complete in the database");
					} // end error
				}); // end save
			} // end finishTask function
		}); // end ToDo Class

	var Tag = Parse.Object.extend("Tag");

	// variable declarations
	var currentUser, tempUser, uName, pass;
	// function declarations
	var createNewTag, createNewTodo;

	
	// jQuery dialog login functions
	$(function () {
		/***JQUERY DIALOG CODE JQUERY DIALOG CODE JQUERY DIALOG CODE JQUERY DIALOG CODE JQUERY DIALOG CODE ***/
		$("#loginPopup").dialog({
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
				of: $('#loginDiv')
			},
			buttons: [
				{
					text: "Login",
					click: function() {
						uName = $("#usernameInput").val().toString();
						pass = $("#passwordInput").val().toString();
						Parse.User.logIn(uName, pass, {
							success: function(user) {
								$("#loginPopup").dialog("close");
								currentUser = Parse.User.current();
								// change login button to log out
								$(".loginBtnClass").val(currentUser.getUsername()).attr('class', 'userBtnClass');
							}
						});
					} // end click function 
				}, // end Log in button
				{
					text: "Close",
					click: function() {
						$(this).dialog("close");
					} // end click function
				} // end Close button
			], // end button array
			open: function() {
				$(this).parent().find('button:nth-child(1)').focus();
			}
		}); // end loginPopup dialog select
		$(".ui-dialog-titlebar").hide();
		// login/register button click
		$(document).on('click', '.loginBtnClass', function() {
			$("#loginPopup").dialog("open"); 
		}); // end #loginBtn select
		// register div jquery dialog
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
				of: $('#loginDiv')
			},
			buttons: [
				{
					text: "Finish",
					click: function() {
						$(this).dialog("close");
						tempUser = new Parse.User();
						tempUser.set("firstname", $("#newFNameInput").val().toString());
						tempUser.set("lastname", $("#newLNameInput").val().toString());
						tempUser.set("username", $("#newUnameInput").val().toString());
						tempUser.set("password", $("#newPassInput").val().toString());

						user.signUp(null, {
							success: function(user) {
								$("#registerPopup").dialog("close");
								currentUser = Parse.User.current();
								alert("Current user is " + currentUser.getUsername());
							},
							error: function(user, error) {
								alert("There was an error: " + error.code + " " + error.message);
							}
						}); // end user signup
					}
				},
				{
					text: "Cancel",
					click: function() {
						$(this).dialog("close");
					}
				}
			]
		}); // end registerPopup dialog select
		$(".ui-dialog-titlebar").hide();
		$("#registerBtn").click(function() {
			$("#loginPopup").dialog("close"); 
			$("#registerPopup").dialog("open"); 
		}); // end #loginBtn select
		// logout div jquery dialog
		$("#logoutPopup").dialog({
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
			width: 175,
			height: 75,
			position: {
				my: 'top',
				at: 'right bottom',
				of: $('#loginDiv')
			}
		}); // end logoutPopup dialog select
		$(".ui-dialog-titlebar").hide();
		$(document).on('click', '.userBtnClass', function() {
			$("#logoutPopup").dialog("open");
		}); // end #looutBtn select
		// logout event handling
		$("#logoutBtn").click(function() {
			Parse.User.logOut();
			$(".userBtnClass").val("Login/Register").attr('class', 'loginBtnClass');
			$("#logoutPopup").dialog("close");
		});
		/***JQUERY SORTABLE CODE JQUERY SORTABLE CODE JQUERY SORTABLE CODE JQUERY SORTABLE CODE JQUERY SORTABLE CODE ***/
		$( "#tagSortable" ).sortable({
      		placeholder: "ui-state-highlight",
      		start: function (e,ui){        // new lines to
      			$(ui.placeholder).slideUp(); // remove popping
			},                             // effect on start
			change: function (e,ui){
					$(ui.placeholder).hide().slideDown();
			}
   		});
    	$( "#tagSortable" ).disableSelection();
    	$( "#todoSortable" ).sortable({
      		placeholder: "ui-state-highlight",
      		start: function (e,ui){        // new lines to
      			$(ui.placeholder).slideUp(); // remove popping
			},                             // effect on start
			change: function (e,ui){
					$(ui.placeholder).hide().slideDown();
			}
   		});
    	$( "#todoSortable" ).disableSelection();
	}); // end anonymous jquery dialog funciton

	/***FUNCTIONS FOR CALLING IN THE DOM***/
	return {
		createNewTag: function () {
			var tagTitle = $('#tagInput').val().toString();
			$('#tagSortable').prepend("<li class='ui-state-default sortableItem'><input class='sortableItem' type='button' value='" + tagTitle + "' /></li><br>");
			$('#tagInput').val('');
			var tag = new Tag();
			tag.set('title', tagTitle);
			tag.set('user', currentUser);

		},
		createNewTodo: function () {
			var todoTitle = $('#todoInput').val().toString();
			if(todoTitle.trim() !== '') {
				$('#todoSortable').prepend("<li class='ui-state-default sortableItem'><input class='checkImg' type='image' src='img/whitecheckmark.png' /><input class='sortableItem' type='button' value='" + todoTitle + "' /></li><br>");
				$('#todoInput').val('');
			}
		}
	}
}()); // end wo 