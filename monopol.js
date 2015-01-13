//Ogge är ful i mun
window.onload = function init() {
	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "spelPlan")
	canvas.height = 300; //Ändra planens storlek här
	canvas.width = 300;  //Och här
	document.getElementById("farsa").appendChild(canvas)
	var spelPlan = document.getElementById("spelPlan");
	var context = spelPlan.getContext("2d");
	var planBild = new Image();
	planBild.src = "Monopol.png";
	planBild.onload = function() {
	context.drawImage(planBild,  0, 0, canvas.height, canvas.height);
	};
};

function die() {
	antalRullningar = 20; //Hur många gånger tärningen rullar innan den stannar
	results = []; //Alla rullningar tärningen gör
	for (i = 0; i<antalRullningar;i++){
	    //genererar alla resultat, sista i results är det som man flyttar efter
		randomSlag = Math.floor((Math.random() * 6) +1);
		if (randomSlag !== results[results.length-1]){ 
			results.push(randomSlag);
		}
		else {
			i--;
		}
	}
	console.log(results);
	for (item in results){
		console.log("HEJ")
	}
}