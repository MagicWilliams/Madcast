window.onload = function() {
  generateSentence();
};

var archetypes = ["cat", "homie", "muppet", "trendsetter", "unicorn", "expert", "listener"];
var firstSentence = [document.getElementById("sentenceOne"), false];
var secSentence = [document.getElementById("sentenceTwo"), false];
var elems = [firstSentence[0], secSentence[0]];
var arrayOfSentenceObjects = [firstSentence, secSentence];
var showMe = 1;


function gimmeResult(){
	randomIndex = Math.floor(Math.random() * archetypes.length);
	document.getElementById("archetype").src = "/img/" + archetypes[randomIndex] + ".png";
}

function generateSentence(){
	if (elems.length) {
  			$(document.getElementById("sentenceTwo")).hide();
  			$(document.getElementById("sentenceThree")).hide();

	}
}

function altGenerateSentence(){

	console.log(showMe);

	if (showMe === 1){

		$(document.getElementById("sentenceOne")).hide();
		$(document.getElementById("sentenceTwo")).show();
		showMe++;

	} else {

		$(document.getElementById("sentenceTwo")).hide();
		$(document.getElementById("swapper")).hide();
		$(document.getElementById("sentenceThree")).show();

	}

}

function allGone() {
	for (var i = 0; i < arrayOfSentenceObjects.length; i++){
		var sent = arrayOfSentenceObjects[i];
		if (sent[1] === false){
			console.log("nah not yet");
			return false;
		}
	}
	return true;
}

function swapSentence(){
	$(document.getElementById("sentenceOne")).toggle();
	$(document.getElementById("sentenceTwo")).toggle();
	
}


