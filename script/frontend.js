function setRoomKey()
{
	ROOM_KEY = document.getElementById("roomKeyInput").value;
	joinRoom(ROOM_KEY); // how do we know this even exists
}

function startListening(listenBoolean)
{
	console.log(listenBoolean);
	//setListening(ROOM_KEY, listenBoolean);
}

function printResults(device)
{

	/**
	var html = '';
	html += '<div id="' + this.id + '" class="tower preset" onclick="setFocusObject(\'towers\', \'' + this.id + '\');">' + this.size + '</div>';
	return html;
	**/ // Same thing from Troops.js from conquiz??
	// somehow call resultToHTML
}

console.log('LOADED FRONTEND');