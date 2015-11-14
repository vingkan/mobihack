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
	reference = document.getElementById('text-here');
	//reference.innerHTML = "";
	console.log(device);
	$.each(device, function(key, value){
		console.log(key +": "+ value);
		reference.innerHTML += "<p>"+key+"</p>";
	});
	/**
	var html = '';
	html += '<div id="' + this.id + '" class="tower preset" onclick="setFocusObject(\'towers\', \'' + this.id + '\');">' + this.size + '</div>';
	return html;
	**/ // Same thing from Troops.js from conquiz??
	// somehow call resultToHTML
}

init();

console.log('LOADED FRONTEND');