function setRoomKey()
{
	ROOM_KEY = document.getElementById("roomKeyInput").value;
	joinRoom(ROOM_KEY); // how do we know this even exists
}

function initListening(listenBoolean)
{
	console.log(listenBoolean);

	setListening(ROOM_KEY, listenBoolean);
	console.log(ROOM_KEY +": " + listenBoolean);
	startListening();
}

var reference;
function printResults(device)
{
	console.log("PRINT RESULTS:");
	console.log(device);
	document.write("<h2>" + device.key + "</h2>")
	document.write("<ul>")
	var size = device.results.length;
	for(var r = 0; r < size; r++){
		document.write(resultToHTML(device.results[r]))
	}
	document.write("</ul>")
}

//init();

console.log('LOADED FRONTEND');