var url = "https://claritk.firebaseio.com/";
var firebase = new Firebase("https://claritk.firebaseio.com/");
var firebaseRooms = new Firebase("https://claritk.firebaseio.com/Rooms");
var listening;

// This function may not need to be used
function addDevice(room, userIp) {
	var newDevice = new Firebase(url+"Rooms/"+room+"/"+userIp);
	newDevice.push(0);
}

function pushResult(room, userIp, parseData) {
	console.log(room + "/" + userIp)
	var pushData = new Firebase(url+"Rooms/"+room+"/"+userIp);
	pushData.push({confidence: parseData['confidence'],
					transcript: parseData['transcript']});

}

function setListening(room, bool) {
	var newListener = new Firebase(url+"Rooms/"+room+"/LISTENING");
	console.log("set listening to: "+bool);
	newListener.set(bool);
}

function notifyDevices(room) {
	var listenDir = new Firebase(url+"Rooms/"+room+"/LISTENING");
	listenDir.on('value', function(snapshot){
		alert(snapshot.val());
		if (snapshot.val()) {
			startListening();
		}
	});
}

function getResults(room) {
	var results = new Firebase(url+"Rooms/"+room);
	var valuePairs = [];
	results.once("value", function(snapshot){ // Array of objects of IP/Keys to a specified room
		console.log(snapshot.val());
		$.each(snapshot.val(), function(index, value){ // Array of all {confidence, transcript} pair 

			if (index != "LISTENING") {
				var resultArray = [];
				console.log("key: "+index);
				//valuePairs.push({key:index});
				$.each(value, function(index, value){
					console.log(value['confidence'] +": " + value['transcript']);
					resultArray.push({results: 
						{transcript: value['transcript'], confidence: value['confidence']}
					});
				});
				var device = {
					key: index,
					results: resultArray
				}
				valuePairs.push(device);
			}
		});
	});
	return valuePairs;
}

function init(){
	ROOM_KEY = 'roomkey';
	DEVICE_KEY = '192-1-1-1';
}


console.log('LOADED BACKEND');

