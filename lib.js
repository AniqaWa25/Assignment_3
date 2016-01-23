$(document).ready(function(){
	console.log("I'm totally working, honestly")

// only if you need the page to load bbefore you need the whatevers in here

// hides the paragraph text on click
	$("p").click(function(){
		$('p').fadeOut(1000);
	})


	$("h1").click(function(){
		$('p').fadeToggle(1000);
	})

	
	$("h1").click( function(){
		$(this).animate({
			fontSize: "100px",
			opacity: .75
		})

	})


	$("h2").click( function(){
		$("h2").fadeOut(1000);
	})

	$("h3").click(function(){
		$(this).slideUp(1000);
	})

	$("h5").click(function(){
		$(this).slideToggle(1000);
	})

	$(".batman").click(function(){
		$(this).slideDown(2000);
	})


	$(".nav").click( function() {
		console.log("working?")
		$(this).animate({
			fontSize: "100px",
			opacity: .75
			
		})
	})
	
})





