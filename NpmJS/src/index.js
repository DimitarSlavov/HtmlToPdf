import { jsPDF } from "jspdf";

window.convertHtmlToPdf = function () {
    var doc = new jsPDF();
    var elementHTML = document.getElementById('content').value;

    var buffer;

    return doc.html(elementHTML, {
        callback: function (doc) {
            buffer = doc.output('arraybuffer');
        }
    }).then(function ()
    {
        return arrayBufferToBase64(buffer);
    });
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