var myButton = document.getElementById("my-button");

var pics = [
	"img/me-1.jpg",
	"img/me-2.jpg",
	"img/me-3.jpg",
	"img/me-4.jpg",
	"img/me-5.jpg",
	"img/me-6.jpg",
	"img/me-7.jpg",
	"img/me-8.jpg",
	"img/me-9.jpg",
	"img/me-10.jpg"
]

var descriptions = [
	"Baby me",
	"I can't even believe this picture is me",
	"I never wear cute hats like this anymore",
	"That's a pretty waterfall",
	"I'm pretty sure this is Daniel's Park",
	"Me at the zoo",
	"I used to be on the summer swim team",
	"Me foreshadowing my future school by sitting by a big Boulder",
	"Fall isn't complete without corn mazes",
	"Christmas time is my favorite",
]

function createGallery(){
	document.getElementById("pics").innerHTML = "";
	var myNumber = document.getElementById("question1").value;

	for(i=0; i<myNumber; i++){
	//myPicture.src = pictures[i];
	//document.getElementById("counter-check").innerHTML = descriptions[i];	
	console.log("The loop has run " + (i+1) + " number of times");

	//rando = Math.random();
	//rando = Math.round(Math.random(100)*100);
	//console.log(rando);

	//document.getElementById("pics").innerHTML = "<img src='http://via.placeholder.com/350x150'>";
	//document.getElementById("pics").innerHTML += "<img src='http://via.placeholder.com/350x150'>";
	document.getElementById("pics").innerHTML += "<figure><img src='" + pics[i] + "'><figcaption>" + descriptions[i] + "</figcaption></figure>";
	}
}