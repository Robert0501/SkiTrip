$(document).ready(function(){
	$('#loginButton').click(function(){
 		location.href = 'loginPanel.html';
 	});

 	$('#skiTrip').click(function(){
 		location.href = 'MainPage.html';
 	});

 	$('#loginButton').click(function(){
 		location.href = "registerPanel.html";
 	})

 	$("#loginButton").hover(function(){
 		$(this).css("cursor", "pointer");
 	});

 	$("#registerButton").hover(function(){
 		$(this).css("cursor", "pointer");
 	});

 	$("#skiTrip").hover(function(){
 		$(this).css("cursor", "pointer");
 	});

 	$("#forgotPassword").hover(function(){
 		$(this).css("cursor", "pointer");
 	});
 });

