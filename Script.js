//Ogge är ful i mun
document.addEventListener("DOMContentLoaded", function(event) { 
		var spelPlan = document.getElementById("spelPlan");
		var context = spelPlan.getContext("2d");
		var planBild = "Monopol.png";
		context.drawImage(planBild, 120, 100)
		alert("HEJ")
});