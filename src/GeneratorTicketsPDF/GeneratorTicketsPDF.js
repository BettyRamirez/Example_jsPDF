import jsPDF from 'jspdf';
import ZonaUno from "./ZonaUno";
import ZonaDos from "./ZonaDos";
import ZonaTres from "./ZonaTres";
import ZonaCuatro from "./ZonaCuatro";

function GeneratorTicketsPDF( dataTicket = [] ) {

    const doc = new jsPDF('landscape', 'in', [7.99,3.12]);
    doc.setTextColor(0,0,0);
    doc.setLineWidth(0.02);

    ZonaUno(doc);
    ZonaDos(doc);
    ZonaTres(doc);
    ZonaCuatro(doc);

    doc.save("ok.pdf");

}

export default GeneratorTicketsPDF;
