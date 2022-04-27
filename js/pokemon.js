var points = 0;
var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;
var questionNumber = 0;

function startover(){

 points = 0;
 answer1 = 0;
 answer2 = 0;
 answer3 = 0;
 answer4 = 0;
 questionNumber = 0;

 document.getElementById("whos-that").style.marginLeft = "";
	document.getElementById("whos-that").style.marginTop = "";
	document.getElementById("whos-that").style.fontSize = "";

	document.getElementById("title").width = "150";
	document.getElementById("header").style.fontSize = "2em";
	document.getElementById("header").style.webkitTextStrokeWidth = "1px";
	document.getElementById("header").style.textAlign = "left";
	document.body.style.backgroundImage = "none";
	
	document.getElementById("question-number").innerHTML =  "Question One";	
	document.getElementById("question-number").style.marginRight = "500px";
	document.getElementById("question-number-check").innerHTML =  "<br><select class='question2' id='questioncheck'><option selected value='0'>Question Number</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select>";
	document.getElementById("question-number-check").innerHTML += "<input class='question3' type='button' value='Go' onClick='go()''>";

	document.getElementById("about-me").innerHTML = "";
	document.getElementById("extra").innerHTML = "";

	document.body.style.backgroundColor = "#6a82c0";
	document.body.style.backgroundImage = "url('img/water-type.png')";

	var questionNumber = document.getElementById("questioncheck").value;

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question1'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Piplup</option><option value='2'>Squirtle</option><option value='3'>Lapras</option><option value='4'>Mudkip</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/squirtle.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question2()''><br>";
}

function quizcheck(){

	document.getElementById("title").width = "150";
	document.getElementById("header").style.fontSize = "2em";
	document.getElementById("header").style.webkitTextStrokeWidth = "1px";
	document.getElementById("header").style.textAlign = "left";
	document.body.style.backgroundImage = "none";
	
	document.getElementById("question-number").innerHTML =  "Question One";	
	document.getElementById("question-number").style.marginRight = "500px";
	document.getElementById("question-number-check").innerHTML =  "<br><select class='question2' id='questioncheck'><option selected value='0'>Question Number</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select>";
	document.getElementById("question-number-check").innerHTML += "<input class='question3' type='button' value='Go' onClick='go()''>";

	document.getElementById("about-me").innerHTML = "";
	document.getElementById("extra").innerHTML = "";

	document.body.style.backgroundColor = "#6a82c0";
	document.body.style.backgroundImage = "url('img/water-type.png')";

	var questionNumber = document.getElementById("questioncheck").value;

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question1'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Piplup</option><option value='2'>Squirtle</option><option value='3'>Lapras</option><option value='4'>Mudkip</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/squirtle.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question2()''><br>";
}

function go(){
	//concept (not actually to be used yet)
	
	var questionNumber = document.getElementById("questioncheck").value;

	if(questionNumber == 1){
		quizcheck()
	}
	if(questionNumber == 2){
		question2()
	}
	if(questionNumber == 3){
		question3()
	}
	
}	

function question2(){

	answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	if(answer1 == 2){
		points++
	}

	document.getElementById("question-number").innerHTML =  "Question Two";

	document.body.style.backgroundColor = "#a9ba36";
	document.body.style.backgroundImage = "url('img/bug.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question2'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Caterpie</option><option value='2'>Scyther</option><option value='3'>Sewaddle</option><option value='4'>Metapod</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/sewaddle.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question3()''><br>";

}

function question3(){

	answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	if(answer2 == 3){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Three";

	document.body.style.backgroundColor = "#abad7b";
	document.body.style.backgroundImage = "url('img/normal.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question3'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Snorlax</option><option value='2'>Ditto</option><option value='3'>Pidgey</option><option value='4'>Chansey</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/snorlax2.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question4()''><br>";

}

function question4(){

	answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

	if(answer3 == 1){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Four";

	document.body.style.backgroundColor = "#605597";
	document.body.style.backgroundImage = "url('img/dragon-type.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question4'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Bagon</option><option value='2'>Dragonite</option><option value='3'>Kingdra</option><option value='4'>Zygarde</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/dragonite.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question5()''><br>";
}

function question5(){

	answer4 = document.getElementById("question4").value;
	console.log("Answer 4: " + answer4);

	if(answer4 == 2){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Five";

	document.body.style.backgroundColor = "#b7b7d1";
	document.body.style.backgroundImage = "url('img/steel.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question5'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Aron</option><option value='2'>Dialga</option><option value='3'>Skarmory</option><option value='4'>Jirachi</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/jirachi.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question6()''><br>";
}

function question6(){

	answer5 = document.getElementById("question5").value;
	console.log("Answer 5: " + answer5);

	if(answer5 == 4){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Six";

	document.body.style.backgroundColor = "#7ac04e";
	document.body.style.backgroundImage = "url('img/grass.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question6'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Celebi</option><option value='2'>Fomantis</option><option value='3'>Chikorita</option><option value='4'>Chespin</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/Fomantis.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question7()''><br>";
}

function question7(){

	answer6 = document.getElementById("question6").value;
	console.log("Answer 6: " + answer6);

	if(answer6 == 2){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Seven";

	document.body.style.backgroundColor = "#745946";
	document.body.style.backgroundImage = "url('img/dark.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question7'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Duskull</option><option value='2'>Houndour</option><option value='3'>Sableye</option><option value='4'>Zoura</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/Duskull.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question8()''><br>";
}

function question8(){

	answer7 = document.getElementById("question7").value;
	console.log("Answer 7: " + answer7);

	if(answer7 == 1){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Eight";

	document.body.style.backgroundColor = "#c4302e";
	document.body.style.backgroundImage = "url('img/fighting.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question8'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Machop</option><option value='2'>Lucario</option><option value='3'>Pancham</option><option value='4'>Scrafty</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/pancham.jpg'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question9()''><br>";
}

function question9(){

	answer8 = document.getElementById("question8").value;
	console.log("Answer 8: " + answer8);

	if(answer8 == 3){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Nine";

	document.body.style.backgroundColor = "#ee5685";
	document.body.style.backgroundImage = "url('img/psych..png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question9'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Espeon</option><option value='2'>Meowstic</option><option value='3'>Mew</option><option value='4'>Jynx</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/meowstic.jpg'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='question10()''><br>";
}

function question10(){

	answer9 = document.getElementById("question9").value;
	console.log("Answer 9: " + answer9);

	if(answer9 == 2){
		points++
	}
	
	document.getElementById("question-number").innerHTML =  "Question Ten";

	document.body.style.backgroundColor = "#9f4092";
	document.body.style.backgroundImage = "url('img/poision.png')";

	document.getElementById("whos-that").innerHTML = "<audio autoplay><source src='media/whos-that-pokemon_.mp3' type='audio/mpeg'></audio>";
	document.getElementById("whos-that").innerHTML += "<br><select class='select' id='question10'><option selected value='0'>Choose a Pokémon...</option><option value='1'>Haunter</option><option value='2'>Arbok</option><option value='3'>Koffing</option><option value='4'>Scolipede</option></select>";
	document.getElementById("whos-that").innerHTML += "<img class='pokemon' width='500' src='img/Scolipede.png'>";
	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Next Question' onClick='finalscore()''><br>";
}

function finalscore(){

	answer10 = document.getElementById("question10").value;
	console.log("Answer 10: " + answer10);

	if(answer10 == 4){
		points++
	}

	document.body.style.backgroundImage = "url('img/poke-repeat.png')";
	document.getElementById("question-number").innerHTML =  "Result";

	document.getElementById("whos-that").innerHTML = "<p> Final Score: " + points + "/10 </p>";
	document.getElementById("whos-that").style.marginLeft = "300px";
	document.getElementById("whos-that").style.marginTop = "-50px";
	document.getElementById("whos-that").style.fontSize = "5em";

	document.getElementById("whos-that").innerHTML += "<input class='next' type='button' value='Try Again' onClick='startover()''><br>";
}