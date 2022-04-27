var twelveHourTime;
twelveHourTime = true;
document.body.style.backgroundSize = "cover";

function clock(){
	// document.getElementById("year").innerHTML = "2016";

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();
	//console.log(year);

	var month;
	month = today.getMonth();
	//console.log(month);

	var monthOfTheYear;
	monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();
	//console.log(date);

	var day;
	day = today.getDay();
	//console.log(day);

	var dayOfTheWeek;
	dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


	var hour;
	hour = today.getHours();
	//console.log(hour);

	var minute;
	minute = today.getMinutes();
	//console.log(minute);

	var second;
	second = today.getSeconds();
	//console.log(second);


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthOfTheYear[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayOfTheWeek[day];

	if(monthOfTheYear[month] == 'Mar' || monthOfTheYear[month] == 'Apr' || monthOfTheYear[month] == 'May'){
		document.body.style.backgroundImage = "url('img/spring.png')";
	}

	if(monthOfTheYear[month] == 'Jun' || monthOfTheYear[month] == 'Jul'|| monthOfTheYear[month] == 'Aug'){
		document.body.style.backgroundImage = "url('img/summer.jpg')";
	}

	if(monthOfTheYear[month] == 'Sep' || monthOfTheYear[month] == 'Oct'|| monthOfTheYear[month] == 'Nov'){
		document.body.style.backgroundImage = "url('img/fall.jpg')";
	}

	if(monthOfTheYear[month] == 'Dec' || monthOfTheYear[month] == 'Jan'|| monthOfTheYear[month] == 'Feb'){
		document.body.style.backgroundImage = "url('img/winter.jpg')";
	}
	
	var hourColor;
	hourColor = Math.round(hour * 11.086);
	//console.log(hourColor);


	if(twelveHourTime == true){


		if(hour >= 12){
			document.getElementById("meridiem").innerHTML = "pm";
		}else{
			document.getElementById("meridiem").innerHTML = "am";
		}

		if(hour > 12){
			hour = hour - 12;
		}


	}else{
		document.getElementById("meridiem").innerHTML = "mil";
	}

	

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	var minuteColor;
	minuteColor = Math.round(minute * 4.322);
	//console.log(minuteColor);

	var secondColor;
	secondColor = Math.round(second * 4.322);
	//console.log(secondColor);
	document.body.style.color = "rgb(" + secondColor + "," + minuteColor + "," + hourColor + ")";
	document.getElementById("wrapper").style.backgroundColor = "white";
	document.getElementById("wrapper").style.display = "inline-block";
	document.getElementById("wrapper").style.borderRadius = "8px";
	document.getElementById("wrapper").style.fontSize = "1.3em";
	document.getElementById("wrapper").style.padding = "10px";

	var fonts = [
	"Times New Roman",
	"Georgia",
	"Comic Sans",
	"Helvetica",
	"serif",
]

 var counter = 0;
	for(i=0; i<year; i++){
		counter++;
		if(counter > 4){
			counter = 0
		}
	}

	document.body.style.fontFamily = fonts[counter];
}


function toggleTwelve(){
	//console.log("Toggle, YAY!");

	if(twelveHourTime == true){
		twelveHourTime = false;
		//console.log(twelveHourTime);
	}else{
		twelveHourTime = true;
		//console.log(twelveHourTime);
	}
}

clock();
setInterval(clock, 10);

// var counter = 0;

// function countTest(){
// 	counter++;
// 	console.log(counter);
// }

// countTest();
// setInterval(countTest, 1000);





