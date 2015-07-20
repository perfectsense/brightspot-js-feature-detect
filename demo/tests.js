import ua from 'bsp-useragent';

var output = document.getElementById('output');

function writeMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	output.appendChild(div);
}

writeMessage('isTouchDevice = ' + ua.isTouchDevice);
writeMessage('currentBreakpoint = ' + ua.currentBreakpoint);