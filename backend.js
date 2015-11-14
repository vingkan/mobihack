var firebase = new Firebase("https://claritk.firebaseio.com/");
var firebaseRooms = firebase.child("Rooms");

function setListening(room, bool) {
	var newListener = firebaseRooms.child(room+"/LISTENING");
	newListener.set(bool);
}

function notifyDevices(room) {
	var listenDir = firebaseRooms.child(room+"/LISTENING");
	listenDir.on("child_changed", function(snapshot){
		console.log("entered child changed");
		var changedPost = snapshot.val();
		console.log("Listening updated: "+ changedPost);
	});
}

function addDevice(room, userIp) {
	var newDevice = firebaseRooms.child(room+"/"+userIp);
	newDevice.push(0);
}