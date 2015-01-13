//Ogge är ful i mun 
window.onload = function init() {
	canvas = document.createElement("canvas");
	canvas.setAttribute("id", "spelPlan");
	//canvas.height = 400; 
	//canvas.width = 400;  
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.getElementById("farsa").appendChild(canvas);
	context = document.getElementById("spelPlan").getContext("2d");
	var planBild = new Image();
	planBild.src = "Monopol.png";
	planBild.width = 600; //Ändra planens storlek här
	planBild.height = 600; // Och här
	planBild.onload = function() {
		context.drawImage(planBild, canvas.width / 2 - planBild.width/2, 0, planBild.width, planBild.height);
	
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
	etta.src = "etta.png";
	tvåa.src = "tvåa.png";
	trea.src = "trea.png";
	fyra.src = "fyra.png";
	femma.src = "femma.png";
	sexa.src = "sexa.png";
	var tärningssidor = {1:etta, 2:tvåa, 3:trea, 4:fyra, 5:femma, 6:sexa};
	for (var item in results){
		item = results[item]
		console.log(item)
		if (item === 1){
			context.drawImage("etta.png",canvas.width / 2 + planBild.width/2, 0);
		}
		else if (item === 2){
			context.drawImage("tvåa.png",canvas.width / 2 + planBild.width/2, 0);
		}
		else if (item === 3){
			context.drawImage("trea.png",canvas.width / 2 + planBild.width/2, 0);
		}
		else if (item === 4){
			context.drawImage("fyra.png",canvas.width / 2 + planBild.width/2, 0);
		}
		else if (item === 5){
			context.drawImage("femma.png",canvas.width / 2 + planBild.width/2, 0);
		}
		else if (item === 6){
			context.drawImage("sexa.png",canvas.width / 2 + planBild.width/2, 0);
		}
		
	}
}
function ritaPjäs(ruta) {
				//0 = Gå. Varje rutas storlek är 85*85
	var rutor = {0:"25 25", 1:"135 25", 2:"244 25", 3:"353 25", 4:"462 25", 5:"570 25", 6:"680 25", 7:"788 25", 
				8:"897 25", 9:"897 135", 10:"897 244", 11:"897 354", 12:"897 463", 13:"897 571", 14:"897 680", 15:"897 789",
				16:"897 897", 17:"788 898", 18:"680 898"}
	
	}
