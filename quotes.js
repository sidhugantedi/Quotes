var Quotes = ["You can do anything but not everything.",

"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",

"You miss 100 percent of the shots you never take.",

"You must be the change you wish to see in the world.",

"We are what we repeatedly do; excellence, then, is not an act but a habit.",

"A wise man gets more use from his enemies than a fool from his friends.",

"Do not seek to follow in the footsteps of the men of old; seek what they sought.",

"Always forgive your enemies; nothing annoys them so much.",

"Those who believe in telekinetics, raise my hand.",

"My pessimism extends to the point of even suspecting the sincerity of the pessimists.",

"I quit therapy because my analyst was trying to help me behind my back.",

"If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",

"There are many who dare not kill themselves for fear of what the neighbors will say.",

"There’s so much comedy on television. Does that cause comedy in the streets?",

"All men are frauds. The only difference between them is that some admit it. I myself deny it.",

"I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.",

"Believe those who are seeking the truth. Doubt those who find it.",

"I’d rather live with a good question than a bad answer.",

"I have made this letter longer than usual because I lack the time to make it shorter."];

var authors = ["David Allen", "Antoine de Saint", "Exupery", "Wayne Gretzky", "Gandhi", "Aristotle",
 "Baltasar Gracian", "Basho", "Oscar Wilde", "Kurt Vonnegut", "Jean Rostand", "Richard Lewis", 
 "Anon", "Cyril Connolly", "Dick Cavett", "H. L. Mencken", "Woody Allen", "Andre Gide", 
 "Aryeh Frimer", "Blaise Pascal"];


 var colors = ["#FFE900", "#E53D00", "#FCFFF7", "#F2545B", "#E4FF1A", "#1BE7FF",
  "#214296", "#7F157D", "#F9DE02"];

var randomNumber, randomColors;
init();
function init () {

randomNumber = Math.floor(Math.random() * (Quotes.length));

document.getElementById('display-quote').innerHTML = Quotes[randomNumber];
document.getElementById('author').innerHTML = authors[randomNumber];
}


function newQuote () {
	randomNumber = Math.floor(Math.random() * (Quotes.length));

	randomColors = Math.floor(Math.random() * (colors.length));

	document.getElementById('display-quote').innerHTML = Quotes[randomNumber];
	document.getElementById('author').innerHTML = authors[randomNumber];
	document.querySelector('#display-quote').style.color = colors[randomColors];
	document.querySelector('#author').style.color = colors[randomColors];
}
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var ampm = "";
	m = checkTime(m);

	if(h > 12) {
		h = h - 12;
		ampm =" PM";
	}
	else if(h == 12) {
		h = 12;
		ampm = " AM";
	}
	else if(h < 12) {
		h = h - 12;
		ampm = " AM"
	}
	else {
		ampm = " PM"
	};

	if(h == 0) {
		h = 12;
	}

	document.getElementById('time').innerHTML = h + " :" + m + ampm;
	var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
	if(i < 10) {
		i = "0" + i;
	};
	return i;
}
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+ d.getDate()+ " "+ months[d.getMonth()]+", "+d.getFullYear();
}

