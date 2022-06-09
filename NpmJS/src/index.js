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
        return new Uint8Array(buffer);
    });
}
