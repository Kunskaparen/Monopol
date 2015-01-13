//Ogge är ful i mun
window.onload = function init() {
	var spelPlan = document.getElementById("spelPlan");
	var context = spelPlan.getContext("2d");
	var planBild = new Image();
	planBild.src = "Monopol.svg";
	planBild.onload = function() {
	context.drawImage(planBild,  0, 0, 250, 250);
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
	
}