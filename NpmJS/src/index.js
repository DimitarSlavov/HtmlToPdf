import { jsPDF } from "jspdf";

window.convertHtmlToPdf = function () {
    var doc = new jsPDF();
    var elementHTML = document.getElementById('content');

    doc.html(elementHTML, {
        'width': 170
    });

    doc.save('sample-document.pdf');
}
