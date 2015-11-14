var firebase = new Firebase("https://claritk.firebaseio.com/");
var firebaseRooms = firebase.child("Rooms");
var listening;

function addDevice(room, userIp) {
	var newDevice = firebaseRooms.child(room+"/"+userIp);
	newDevice.push(0);
}


function setListening(room, bool) {
	var newListener = firebaseRooms.child(room+"/LISTENING");
	newListener.set(bool);
}

firebaseRooms.child("roomkey/LISTENING").on("value", notify);

function notify(snapshot) {
	console.log(snapshot.key());
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




