import { jsPDF } from "jspdf";

window.convertHtmlToPdf = function () {
    var doc = new jsPDF();
    var elementHTML = document.getElementById('content').value;
    var parser = new DOMParser;
    var html = parser.parseFromString(elementHTML, 'text/html');

    doc.html(html);

    var buffer = doc.output('arraybuffer');

    return arrayBufferToBase64(buffer);
}

function arrayBufferToBase64(buffer) {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}