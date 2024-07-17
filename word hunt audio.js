let anime = document.getElementById("maindiv"); // animation div
let anime1 = document.getElementById("maindiv1"); // animation div
let height1 = 0;
let height2 = 0;
function animation() {
	height1 += 0.5;
	height2 += 0.9;
	anime.style.height = height1 + "px";
	anime1.style.height = height2 + "px";
	requestAnimationFrame(animation);

	if (height1 >= 500 || height2 >= 510) {
		document.getElementById("gameover").style.display = "block";
		document.getElementById("answer-1").style.display = "none";
		document.getElementById("answer-2").style.display = "none";
		document.getElementById("input").style.display = "none";
	}
}

function myFunction() {
	location.replace("file:///C:/java%20script/word%20hunt%20game%20audio/word%20hunt%20audio.html");
}

const array = ["hi", "ok", "hello", "book", "happy", "pink", "red", "may", "june", "day", "night"];
let y = 0;
let j1 = Math.floor(Math.random() * array.length);
let j2 = Math.floor(Math.random() * array.length);
document.getElementById("answer-1").innerHTML = array[j1];
document.getElementById("answer-2").innerHTML = array[j2];
let sounds = [];
let currentAudio;
var userinput;

function playmusic() {
	const source = ["hi.mp3", "ok.mp3", "hello.mp3", "book.mp3", "happy.mp3", "pink.mp3", "red.mp3", "may.mp3", "june.mp3", "day.mp3", "night.mp3"];
	for (let i = 0; i < source.length; i++) {
		sounds[i] = new Audio(source[i]);
	}
}

function playaudio(word) {
	let position = array.indexOf(word);
	if (position !== -1) {
		let music = sounds[position];
		music.play();
	}
}		
		
function abc() {
	var userinput = document.getElementById("input").value;
	var word1 = document.getElementById("answer-1").innerHTML;
	var word2 = document.getElementById("answer-2").innerHTML;

	if (word1 === userinput) {
		height1 = 0;
		height1++;
		y++;
		playaudio(array[j1]);
		j1 = Math.floor(Math.random() * array.length);
		document.getElementById("answer-1").innerHTML = array[j1];
		document.getElementById("score").innerHTML = "score:" + y;
		document.getElementById("input").value = '';
		document.getElementById("rest").innerHTML = "score:" + y;
	} 
	else if (word2 === userinput) {
		height2 = 0;
		height2++;
		y++;
		playaudio(array[j2]);
		j2 = Math.floor(Math.random() * array.length);
		document.getElementById("answer-2").innerHTML = array[j2];
		document.getElementById("score").innerHTML = "SCORE:" + y;
		document.getElementById("input").value = '';
		document.getElementById("rest").innerHTML = "SCORE:" + y;
	} 

	if (y >= 50) {
		document.getElementById("youwon").style.display = "block";
		document.getElementById("gameover").style.display = "none";
		document.getElementById("input").style.display = "none";
		document.getElementById("answer-1").style.display = "none";
		document.getElementById("answer-2").style.display = "none";
		document.getElementById("rest1").innerHTML = "SCORE:" + y;
	}
}		
	
	document.getElementById("input").addEventListener("keyup", abc);
	playmusic();
	animation();