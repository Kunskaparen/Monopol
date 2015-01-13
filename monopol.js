//Ogge är ful i mun 
window.onload = function init() {
	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "spelPlan");
	canvas.height = 400; //Ändra planens storlek här
	canvas.width = 400;  //Och här
	
	document.getElementById("farsa").appendChild(canvas);
	var context = document.getElementById("spelPlan").getContext("2d");
	var planBild = new Image();
	planBild.src = "Monopol.png";
	planBild.onload = function() { 
	context.drawImage(planBild, canvas.width / 2 - 200, 0, canvas.height, canvas.height);
	
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
	var etta = new Image();
	var tvåa = new Image();
	var trea = new Image();
	var fyra = new Image();
	var femma = new Image();
	var sexa = new Image();
	etta.src = "etta.png"
	tvåa.src = "tvåa.png"
	trea.src = "trea.png"
	fyra.src = "fyra.png"
	femma.src = "femma.png"
	sexa.src = "sexa.png"
	for (item in results){
		if (item === 1){
			context.drawImage("etta.png");
		}
		else if (item === 2){
			context.drawImage("tvåa.png");
		}
		else if (item === 3){
			context.drawImage("trea.png");
		}
		else if (item === 4){
			context.drawImage("fyra.png");
		}
		else if (item === 5){
			context.drawImage("femma.png");
		}
		else if (item === 6){
			context.drawImage("sexa.png");
		}
		
	}
}
function ritaPjäs(ruta) {
				//0 = Gå. Varje rutas storlek är 85*85
	var rutor = {0:"25 25", 1:"135 25", 2:"244 25", 3:"353 25", 4:"462 25", 5:"570 25", 6:"680 25", 7:"788 25", 
				8:"897 25", 9:"897 135", 10:"897 244", 11:"897 354", 12:"897 463", 13:"897 571", 14:"897 680", 15:"897 789",
				16:"897 897", 17:"788 898", 18:"680 898"}
	
	}
}
