
$(document).ready(function(){
	
	//for menu dropdown ar li a caret Icon
	$("#mainID").find(".dropdown ul#subMenu").prev().append("<i id='caretIcon' class='fas fa-caret-down'></i>");
	

	$(".mobileMenuBar i").click(function(){

		$("#mainID").toggle();
		$(this).toggleClass("fas fa-times");    //for X button
		$(this).toggleClass("fas");				// for class maching
		
	});	
	
	
	
	
	$("i#caretIcon").click(function(){
		
		$(this).toggleClass("fa-caret-up");     // for caret icon up
		$(this).parent().next().toggle();      // for subMenu show & hide
		
	});
	
	
	
	
	
});