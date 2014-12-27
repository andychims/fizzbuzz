$(document).ready(function() {

	console.log("yo");
	console.log("yo2");


	//count to 100
	for (var i = 1; i <= 100; i++) {
		var out = i;

		if (i%3 === 0 && i%5 === 0) {out = "fizzbuzz"} 
		 	else if (i%3 === 0) {out = "fizz"}
		 	else if (i%5 === 0) {out = "buzz"}
		 	else {out = i};
		console.log(out);
		$("#main").append(out + "<br>");
	};

});