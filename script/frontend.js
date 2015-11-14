console.log('LOADED FRONTEND');
// global variable room key

var ROOM_KEY;

function setRoomKey()
{
	ROOM_KEY = document.getElementById("ROOM_KEY").value;
	joinRoom(ROOM_KEY); // how do we know this even exists
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