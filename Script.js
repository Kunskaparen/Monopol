//Ogge är ful i mun
document.addEventListener("DOMContentLoaded", function(event) { 
		//Det här autostartas
		var spelPlan = document.getElementById("spelPlan");
		var context = spelPlan.getContext("2d");
		var planBild = "Monopol.png";
		context.drawImage(planBild, 120, 100)
});

function die() {
	antalRullningar = 20 //Hur många gånger tärningen rullar innan den stannar
	results = [] //Alla rullningar tärningen gör
	for (i = 0; i<antalRullningar;i++){
	    //genererar alla resultat, sista i results är det som man flyttar efter
		results.push(Math.floor((Math.random() * 6) +1);
	}
	for
}