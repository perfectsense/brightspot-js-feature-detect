import BspFeatureDetect from '/assets/js/BspFeatureDetect';

var output = document.getElementById('output');

var message = (msg) => {
	var div = document.createElement('div');
	div.innerHTML = msg;
	return div.outerHTML;
};

var writeMessage = () => {
	var html = '';
	html += message('breakpoint = ' + BspFeatureDetect.breakpoint());
	html += message('IEVersion() = ' + BspFeatureDetect.IEVersion());
	html += message('isIE = ' + BspFeatureDetect.isIE());
	html += message('isHttps = ' + BspFeatureDetect.isHttps());
	html += message('isSafari = ' + BspFeatureDetect.isSafari());
	html += message('isTouchDevice = ' + BspFeatureDetect.isTouchDevice());
	html += message('orientation = ' + BspFeatureDetect.orientation());
	output.innerHTML = html;
};

writeMessage();

setInterval(writeMessage, 250);