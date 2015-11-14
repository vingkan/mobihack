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
}

function init(){
	ROOM_KEY = 'roomkey';
	DEVICE_KEY = '127-0-0-1';
}






