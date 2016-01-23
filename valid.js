setInterval(function(){
	
	var da = new Date();
	

	if(da.getHours() > 12){
	document.getElementById("hours").innerHTML = da.getHours() - 12;
	} else 
	document.getElementById("hours").innerHTML = da.getHours();
	document.getElementById("seconds").innerHTML = da.getSeconds();
	document.getElementById("minutes").innerHTML = da.getMinutes();
	document.getElementById("milliseconds").innerHTML = da.getMilliseconds();


	var minutes = da.getMinutes();

	if(minutes % 2 === 0){
		document.body.style.backgroundColor = "#6495ED"
		console.log(minutes +" EVEN");
	} else {
		document.body.style.backgroundColor = "pink"
		console.log(minutes + " ODD");
	}

}, 1000)


$(document).ready(function(){
	console.log("I'm totally working, honestly")


var correctPassword = "12345";

$("form").submit(function(e){

	e.preventDefault();

	var firstname = $("#firstname").val()
	var password = $("#password").val()
	console.log(firstname + " " + password);

	if(firstname ===""){
	$("h1").html("Please fill it out?")
	} else if (correctPassword === password){
		console.log(firstname + " YES")
		$("h1").html("GOOD JOB, DARNIT")

	} else{
		console.log(password + " NOOOOOOOOOOO")
		$("h1").html("INCORRECT")
	}


	//  var date = $("#dates").val()
	// console.log(date);
	// if(date[2] === "/" && date[5] == "/"){
	// $("h2").html("Yes, you filled it properly")
	// } else{
	// 	console.log( "Nope, reevaluate your life")
	// 	$("h2").html("Incorrect")
	// }

})

	$(document).keypress(function(e){

		if(e.keyCode >= 48 && e.keyCode <= 57){
			console.log(" Number?")
			$("h3").html("Number")
		} else if (e.keyCode >= 65 && e.keyCode <= 122){
			console.log("Letter")
			$("h3").html("Letter")
		}


	})
	 
})





