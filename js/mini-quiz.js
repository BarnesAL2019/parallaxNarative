var dolphin = 0;

var falcon = 0;

var snake = 0;

var lion = 0;

function quizcheck() {

	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

	var answer4 = document.getElementById("question4").value;
	console.log("Answer 3: " + answer3);

        
	//if(answer1==0){ //Alerts the user if they did not answer question 1.
	// 	alert("You have not answered question 1");
	//}
	//if(answer2==0){ //Alerts the user if they did not answer question 2.
	//	alert("You have not answered question 2");
	//}
	//if(answer3==0){ //Alerts the user if they did not answer question 3.
	//	alert("You have not answered question 3");
	//} 


	 if(answer1==0 || answer2==0 || answer3==0 || answer4==0){ //Alerts the user if they did not answer question 3.
	 	alert("You have not answered all of the questions");
	 } 

	if(answer1 > 0 && answer2 > 0 && answer3 > 0){
	
		if (answer1==1){
			dolphin++;
		}

		if (answer1==2){
			falcon++;
		}

		if (answer1==3){
			snake++;
		}

		if (answer1==4){
			lion++;
		}

//question 2
		if (answer2==1){
			dolphin++;
		}

		if (answer2==2){
			falcon++;
		}

		if (answer2==3){
			snake++;
		}

		if (answer2==4){
			lion++;
		}
//question 3
		if (answer3==1){
			snake++;
		}

		if (answer3==2){
			falcon++;

		}

		if (answer4==1){
			lion++; 
		}

		if (answer4==2){
			dolphin++;

		}
	
		if(dolphin > falcon && dolphin > lion && dolphin > snake){
			document.getElementById("result").innerHTML = "Your spirit animal is a Dolphin!"
		}

		if(falcon > dolphin && falcon > lion && falcon > snake){
			document.getElementById("result").innerHTML = "Your spirit animal is a Falcon!"
		}

		if(snake > falcon && snake > lion && snake > dolphin){
			document.getElementById("result").innerHTML = "Your spirit animal is a Snake!"
		}

		if(lion > falcon && lion > snake && lion > dolphin){
			document.getElementById("result").innerHTML = "Your spirit animal is a Lion!"
		}

		if(lion == falcon && lion == snake && lion == dolphin){
			document.getElementById("result").innerHTML = "Results inconclusive -- try again"
		}

		if(lion == falcon && lion == snake && lion == dolphin){
			document.getElementById("result").innerHTML = "Results inconclusive -- try again"
		}


		console.log("dolphin: " + dolphin + " falcon: " + falcon + " snake: " + snake + " lion: " + lion)
		
		dolphin = 0;
		falcon = 0;
		snake = 0;
		lion = 0;
	}
}