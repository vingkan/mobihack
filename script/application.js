/*--------------------------------------------*/
/*---> GLOBALS <------------------------------*/
/*--------------------------------------------*/

var ROOM_KEY;
var DEVICE_KEY;

var currentResult = null;
var parsedData = {
	transcript: "transcript",
	confidence: 0.5
};

var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
	currentResult = event;
	console.log("Returned Result:");
	console.log(currentResult);
	console.log(getResultTranscript());
	console.log(getResultConfidence());
	parseResult();
}

/*--------------------------------------------*/
/*---> STEP ONE <-----------------------------*/
/*--------------------------------------------*/

function joinRoom(roomKey){
	DEVICE_KEY = addDevice(roomKey);
}

/*--------------------------------------------*/
/*---> STEP TWO <-----------------------------*/
/*--------------------------------------------*/

function startListening(){
	
}

/*--------------------------------------------*/
/*---> STEP THREE <---------------------------*/
/*--------------------------------------------*/

function record(){
	recognition.start();
}

function parseResult(){
	parsedData.transcript = getResultTranscript();
	parsedData.confidence = getResultConfidence();
	pushResult(parsedData);
	record();
}


function getResultTranscript(){
	return currentResult.results[0][0]['transcript'];
}

function getResultConfidence(){
	return currentResult.results[0][0]['confidence'];
}

console.log('LOADED APPLICATION');

/*--------------------------------------------*/
/*---> SUBSTITUTES <--------------------------*/
/*--------------------------------------------*/

function addDevice(roomKey){
	return 'device-key1';
}

function pushResult(resultData){
	console.log("Sent to Database:");
	console.log(resultData);
}

console.log('LOADED SUBSTITUTES');