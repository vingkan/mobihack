var url = "https://claritk.firebaseio.com/";
var firebase = new Firebase("https://claritk.firebaseio.com/");
var firebaseRooms = new Firebase("https://claritk.firebaseio.com/Rooms");
var listening;

function addDevice(room, userIp) {
	var newDevice = firebaseRooms.child(room+"/"+userIp);
	newDevice.push(0);
}

function pushResult(room, userIp, parseData) {
	var pushData = new Firebase(url+"Rooms/"+room+"/"+userIp);
	pushData.push(parseData);
}

function setListening(room, bool) {
	var newListener = firebaseRooms.child(room+"/LISTENING");
	newListener.set(bool);
}

function notifyDevices(room) {
	var listenDir = new Firebase("https://claritk.firebaseio.com/Rooms/"+room+"/LISTENING");
	listenDir.on('value', function(snapshot){
		alert(snapshot.val());
		if (snapshot.val()) {
			startListening();
		}
	});
}


// function notifyDevices(room) {
// 	var listenDir = firebaseRooms.child(room+"/LISTENING");
// 	console.log("Getting child changed status");
// 	listenDir.on("child_changed", function(snapshot){
// 		console.log("entered child changed");
// 		var changedPost = snapshot.val();
// 		console.log("Listening updated: "+ changedPost);
// 	});
// }




