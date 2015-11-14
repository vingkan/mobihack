/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/

var ROOM_KEY;
var DEVICE_KEY;

/*--------------------------------------------*/
/*---> STEP ONE <-----------------------------*/
/*--------------------------------------------*/

function joinRoom(roomKey){
	DEVICE_KEY = addDevice(roomKey);
}

var currentResult = null;

function getResultTranscript(){
	return currentResult.results[0][0]['transcript'];
}

function getResultConfidence(){
	return currentResult.results[0][0]['confidence'];
}

var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
	currentResult = event;
	console.log("Returned Result:");
	console.log(currentResult);
	console.log(getResultTranscript());
	console.log(getResultConfidence());
}
recognition.start();

console.log('LOADED APPLICATION');

/*--------------------------------------------*/
/*---> SUBSTITUTES <--------------------------*/
/*--------------------------------------------*/

function addDevice(roomKey){
	return 'device-key1';
}

console.log('LOADED SUBSTITUTES');