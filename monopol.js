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
	planBild = new Image();
	planBild.src = "Monopol.png";
	planBild.width = 600; //Ändra planens storlek här
	planBild.height = 600; // Och här
	planBild.onload = function() { //Gör allt efter planen laddats
		context.drawImage(planBild, canvas.width / 2 - planBild.width/2, 0, planBild.width, planBild.height);
		context.rect(canvas.width / 2 + planBild.width/2+10, 150,300,150); //De två sista värdena ska vara sizen av rektanglen
		context.stroke();
		antalSpelare = prompt("Hur många spelare?", "1, 2, 3 eller 4");
		while (antalSpelare != 1 && antalSpelare != 2 && antalSpelare != 3 && antalSpelare != 4) {
			antalSpelare = prompt("Felaktigt antal spelare. Hur många spelare?", "1, 2, 3 eller 4");
		}
		document.getElementById("gatFarsa").style.left=String(canvas.width / 2 + planBild.width/2+30)+"px";
		gatNamn = document.createElement("h3");
		gatPris = document.createElement("p");
		gatÄgare = document.createElement("p");
		gatNamn.setAttribute("id", "gatNamn");
		gatPris.setAttribute("id", "gatPris");
		gatÄgare.setAttribute("id", "gatÄgare");
		document.getElementById("gatFarsa").appendChild(gatNamn);
		document.getElementById("gatFarsa").appendChild(gatPris);
		document.getElementById("gatFarsa").appendChild(gatÄgare);
		currentLocation = [];
		for (var i = 1; i <= antalSpelare; i++) {
			currentLocation[i] = 0;
		}
		
		saldo = [];
		for (var i = 1; i <= antalSpelare; i++) {
			saldo[i] = 30000;
		}
		
		playerTurn = 1;
		/*(function ritaUtÖverför() {
		överförSumma = document.createElement("input");
		överförCheck = document.createElement("input");
		överförGivare = document.createElement("input");
		överförTagare = document.createElement("input");
		överförSumma.setAttribute("id", "överförSumma");
		överförCheck.setAttribute("id", "överförCheck");
		överförGivare.setAttribute("id", "överförGivare");
		överförTagare.setAttribute("id", "överförTagare");
		document.getElementById("farsa").appendChild(överförSumma);
		document.getElementById("farsa").appendChild(överförCheck);
		document.getElementById("farsa").appendChild(överförGivare);
		document.getElementById("farsa").appendChild(överförTagare);
		}())*/
		saldoPrint();
		slåTobbe();
		ritaOm();
		
		
	};
	
	
	
	//window.setTimeout(speletsGång(), 3000);
};

//HERE BE GATA
function GatJävel(namn, pris, index) {
	this.namn = namn;
	this.pris = pris;
	this.index = index;
}

a = new GatJävel("Ekonomigatan", 1000, 1);
b = new GatJävel("Webbutvecklingssalen", 1000, 2);
c = new GatJävel("Franskan", 2000, 5);
d = new GatJävel("Husseins håla", 2000, 6);
e = new GatJävel("Svenskan", 2000, 7);
f = new GatJävel("Disneyföreningen", 2500, 9);
g = new GatJävel("Programmeringsgrottan", 2500, 10);
h = new GatJävel("Biologin", 3000, 11);
i = new GatJävel("Svenskan", 3500, 13);
j = new GatJävel("Fotbollsplanen", 3500, 14);
k = new GatJävel("Staffans lya", 3800, 15);
l = new GatJävel("Trapphuset", 4200, 17);
m = new GatJävel("Amfiteater", 4200, 18);
n = new GatJävel("SYV:en", 4500, 19);
o = new GatJävel("Kansliet", 5000, 21);
p = new GatJävel("N1B", 5000, 22);
q = new GatJävel("Aulan", 5300, 23);
r = new GatJävel("Biblioteket", 6000, 25);
s = new GatJävel("Matte med Kenneth", 6000, 26);
t = new GatJävel("Ljushallen", 6000, 27);
u = new GatJävel("Örngottet", 6500, 29);
v = new GatJävel("Naturgatan", 8000, 31);
allaGator = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v];
//HERE BE SPELARKLASS
function Spelare(HereBeArgs) {
	this.position = 0;
	this.saldo = 30000;
	//färg om man vill ändra
	
}

function ritaGata(){
	for (var i = 0; i < 7;i++){
		nuGata = allaGator[i];
		if (nuGata.index === currentLocation[playerTurn]){
			gatNamn.innerHTML = nuGata.namn;
			gatPris.innerHTML = nuGata.pris;
			if (typeof nuGata.ägare != "undefined") {
				gatÄgare.innerHTML = "Ägare: " + String(nuGata.ägare);
			}
		}
	}
}

function onButtonDown() {
	document.getElementById("slåKnapp").disabled = true; //disablar knappen
	var flyttningar = die();
	setTimeout(function(){
		function gåEttStegITagetTix(i) {
			setTimeout(function(){
				flyttaPjäs(playerTurn, 1);
				ritaOm();
				i = i - 1;
				if (i !== 0) {
					gåEttStegITagetTix(i);
				}
				else {
					speletsGång();	//speletsGång körs när slag och förflyttning är klart.
				}
			/*ritaGata();*/
			}, 300);
		}
		gåEttStegITagetTix(flyttningar);
		//FLYTTAD TILL SPELETSGÅNG document.getElementById("slåKnapp").disabled = false;
	}, 7000);
	//enablar knappen
}
function gatuKöp(){
	var listIndex;
	if (ärGatanSåld()){
		for (var i = 0; i < 22; i++) {
			if (allaGator[i].index === currentLocation[playerTurn]) {
				listIndex = i;
				break;
			}
		}
		if (allaGator[listIndex].ägare === playerTurn){
				console.log("Du äger redan gatan");
			}
		else {
				console.log("Betala som fan");
				/*här blir det svinhög hyra*/
		}
	}
	else {
		if (confirm("Gatan är ledig.\nVill du köpa den?")){
			if (saldo[playerTurn] - parseInt(allaGator[currentLocation[playerTurn]-1].pris) >= 0){
				saldo[playerTurn] = saldo[playerTurn] - parseInt(allaGator[currentLocation[playerTurn]-1].pris)
				allaGator[currentLocation[playerTurn]-1].ägare = playerTurn;
				saldoPrint();
			}
			else{
				alert("En fattiglapp som du är sist innan du ens börjat.\nDu har inte råd.");
			}
		}
	}
	
}

function ärGatanSåld(){
		for (var i = 0; i < 22; i++) {
			if (allaGator[i].index === currentLocation[playerTurn]) {
				listIndex = i;
				break;
			}
		}
		if (typeof allaGator[i].ägare == "undefined"){
			return false;
		}
		else {
			return true;
		}
}

function speletsGång() {
	setTimeout(function(){
		var gameOver = false;
		while (!gameOver) {
			/*Kör en listlookup som kollar aktiv spelares ruta och ritar ut motsvarande gata*/
			//die()
			setTimeout(ritaGata(),5);
			/*if (confirm("Vill du överföra?")) {
				överföring(prompt("Betalare"), prompt("Mottagare"), prompt("Summa"));
			}
			saldoPrint();
			*/
			gatuKöp();
			for (var k = 1; k <= antalSpelare; k++) {
				ritaPjäs(k);
			}
			console.log("antalSpelare = " + antalSpelare);
			console.log("Spelare " + playerTurn + "'s tur");
			nextPlayer();
			document.getElementById("slåKnapp").disabled = false;
			console.log("Spelare " + playerTurn + "'s tur");
		gameOver = true;
		}
	}, 500);
}

function nextPlayer() {
	if (playerTurn !== parseInt(antalSpelare)) {
		playerTurn = playerTurn + 1;
	}
	else {
		playerTurn = 1;
	}
}

function flyttaPjäs(spelare, tärningsSlag) {
	console.log(tärningsSlag);
	if (currentLocation[spelare] + tärningsSlag > 31) {
		currentLocation[spelare] += tärningsSlag - 32;
	}
	else {
		currentLocation[spelare] += tärningsSlag;
	}
}

function saldoPrint() {
	if (document.getElementById("spelarSaldo1") === null){
		for (var i = 1; i <= antalSpelare; i++) {
			spelarSaldo = document.createElement("p");
			spelarSaldo.setAttribute("id", "spelarSaldo" + i);
			document.getElementById("farsa").appendChild(spelarSaldo);
		}
	}
	for (var i = 1; i <= antalSpelare; i++) {
	document.getElementById("spelarSaldo" + i).innerHTML = "Spelare " + i + " har " + saldo[i] + " paulingar";
	}
		//Ogge, innerHTML är fan ingen funktion, det är ett attributes
}

// skapar button-tagg samt en fin knapp
function slåTobbe() {
	//Gör en knapp som kallar tärningen
	slåKnapp = document.createElement("button");
	slåKnapp.setAttribute("type", "button");
	slåKnapp.setAttribute("id", "slåKnapp");
	document.getElementById("farsa").appendChild(slåKnapp);
	document.getElementById("slåKnapp").innerHTML = "Slå tärningen!";
	document.getElementById("slåKnapp").style.top = String(30*antalSpelare)+"px";
	document.getElementById("slåKnapp").addEventListener("click", onButtonDown);
	//var bajs = antalSpelare * 30; //HENKE ADDA DIT TIX HÄR. JAG BRYR MIG INTE OM ATT VARA BRA PÅ BAJSSCRIPT.
	//document.getElementById("slåKnapp").style.top = bajs.toString(); 
}

/*function betala(spelare, summa) {
		if(saldo[spelare]-summa<0){
			alert("ERROR: lack of money");
		}
		else {
			saldo[spelare] = saldo[spelare] - summa;
		}
}*/


function fåBetalt(spelare, summa) {
	saldo[spelare] = saldo[spelare] + summa;
}

function överföring(betalare, mottagare, summa) {
	if(saldo[betalare] - summa<0) {
		alert("ERROR: lack of money");
	}
	else {
		saldo[betalare] = parseInt(saldo[betalare]) - parseInt(summa);
	saldo[mottagare] = parseInt(saldo[mottagare]) + parseInt(summa);
	}
}

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
	etta = new Image();
	tvåa = new Image();
	trea = new Image();
	fyra = new Image();
	femma = new Image();
	sexa = new Image();
	etta.src = "etta.png";
	tvåa.src = "tvåa.png";
	trea.src = "trea.png";
	fyra.src = "fyra.png";
	femma.src = "femma.png";
	sexa.src = "sexa.png";
	var tärningssidor = {1:etta, 2:tvåa, 3:trea, 4:fyra, 5:femma, 6:sexa};
	function slåTärning(i) {
		setTimeout(function(){
			slag = results[i];
			if (slag === 1){
					context.drawImage(etta, canvas.width / 2 + planBild.width/2+10, 0);
			}
			else if (slag === 2){
					context.drawImage(tvåa,canvas.width / 2 + planBild.width/2+10, 0);
			}
			else if (slag === 3){
					context.drawImage(trea,canvas.width / 2 + planBild.width/2+10, 0);
			}
			else if (slag === 4){
					context.drawImage(fyra,canvas.width / 2 + planBild.width/2+10, 0);
			}
			else if (slag === 5){
					context.drawImage(femma,canvas.width / 2 + planBild.width/2+10, 0);
			}
			else if (slag === 6){
					context.drawImage(sexa,canvas.width / 2 + planBild.width/2+10, 0);
			}
			if (--i) {
				slåTärning(i);
			}
		}, 300);
	}
	slåTärning(antalRullningar);
	console.log("Returnar: " + results[1] + " när i = " + i);
	return results[1];
}
function ritaPjäs(pjäs) {
	var avstånd = 0.03;
	if (pjäs === 1) {
		 a = planBild.width * avstånd;
		 b = planBild.width * avstånd;
		 color = "#008744";
	}
	if (pjäs === 2) {
		 a = planBild.width * avstånd * 2;
		 b = planBild.width * avstånd;
		 color = "#0057e7";
	}
	if (pjäs === 3) {
		 a = planBild.width * avstånd;
		 b = planBild.width * avstånd * 2;
		 color = "#d62d20";
	}
	if (pjäs === 4) {
		 a = planBild.width * avstånd * 2;
		 b = planBild.width * avstånd * 2;
		 color = "#ffa700";
	}
	
	
				//0 = Gå. Varje rutas storlek är 85*85
	var rutor = {0:"25 25", 1:"135 25", 2:"244 25", 3:"353 25", 4:"462 25", 5:"570 25", 6:"680 25", 7:"788 25", 
				8:"897 25", 9:"897 135", 10:"897 244", 11:"897 354", 12:"897 463", 13:"897 571", 14:"897 680", 15:"897 789",
				16:"897 897", 17:"788 898", 18:"680 898", 19:"570 898", 20:"460 898", 21:"354 898", 22:"245 898", 23:"136 898", 
				24:"28 898", 25:"28 789", 26:"28 680", 27:"28 571", 28:"28 463", 29:"28 354", 30:"28 244", 31:"28 135"};
	
	var cool = rutor[currentLocation[pjäs]];
	
	// Rita ut pjäs
	context.beginPath();//Till kanten på planen		en bit in		förhållande				koordinat enligt paintbild 1000*1000
	
	context.fillStyle = color;
	context.arc(canvas.width / 2 - planBild.width / 2 + a + (planBild.width * 0.001) * parseInt(cool.substring(0,cool.indexOf(" "))), // X-koordinat
										b + (planBild.width * 0.001) * parseInt(cool.substring(cool.indexOf(" ") + 1, parseInt(cool.length))), // Y-koordinat
										8, // Pjässtorlek
										0, // Rör ej
										2*Math.PI); // Rör ej
	context.closePath();
	context.fill();
}

function ritaOm() {
	context.drawImage(planBild, canvas.width / 2 - planBild.width/2, 0, planBild.width, planBild.height);
	for (var k = 1; k <= antalSpelare; k++) {
		ritaPjäs(k);
	}
};