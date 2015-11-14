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

var allResults;
function getResults(room, callback) {
	var ref = new Firebase("https://claritk.firebaseio.com/Rooms/" + room);
	allResults = [];
	ref.on("value", function(snapshot){
		var data = snapshot.val();
		console.log(data)
		$.each(data, function(ip, device){
			var resultArray = [];
			$.each(device, function(key, result){
				resultArray.push(result);
			});
			var deviceObject = {
				key: ip,
				results: resultArray
			}
			allResults.push(deviceObject);
		});
		if(callback){
			console.log(allResults)
			callback(allResults);
		}
	});

}

function init(){
	ROOM_KEY = 'roomkey';
	DEVICE_KEY = '192-1-1-1';
}


console.log('LOADED BACKEND');

