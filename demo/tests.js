import detect from 'bsp-feature-detect';

var output = document.getElementById('output');

function writeMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	output.appendChild(div);
}

writeMessage('isTouchDevice = ' + detect.isTouchDevice);
writeMessage('currentBreakpoint = ' + detect.currentBreakpoint);