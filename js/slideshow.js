var myPicture = document.getElementById("my-picture");
var counter = 0;

var pictures;
pictures = [
			"img/team.jpg", 
			"img/abby2.jpg", 
			"img/me-14.jpg", 
			];

var descriptions;
descriptions = [
			"Me and my team, The Wolf Pack.", 
			"Me in Arizona on a road trip to California", 
			"Graduation at Red Rocks!", 
			];

var links;
links = [
			"https://realcolorado.net/", 
			"https://creative.colorado.edu/~abba6449/", 
			"https://www.redrocksonline.com/", 
			];


function changePicture(){
	if(counter >= 2){
		counter = -1;
	}
	counter++;
	myPicture.src = pictures[counter];
	document.getElementById("counter-check").innerHTML = descriptions[counter];
	document.getElementById("link-check").href = links[counter];
	if(counter >= 2){
		counter = -1;
	}
}

function changePicture2(){
	if(counter <= 0){
		counter = 3;
	}
	counter--;
	myPicture.src = pictures[counter];
	document.getElementById("counter-check").innerHTML = descriptions[counter];
	if(counter <= -1){
		counter = 3;
	}
}