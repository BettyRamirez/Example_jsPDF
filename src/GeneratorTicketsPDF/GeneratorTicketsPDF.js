import jsPDF from 'jspdf';
import ZonaUno from "./ZonaUno";
import ZonaDos from "./ZonaDos";
import ZonaTres from "./ZonaTres";
import ZonaCuatro from "./ZonaCuatro";

function GeneratorTicketsPDF( dataTicket = [] ) {

    const doc = new jsPDF('landscape', 'in', [7.99, 3.12]);
    doc.setTextColor(0,0,0);
    doc.setLineWidth(0.02);
    doc.setFontSize(8.5);
    doc.setFont("times");
    doc.setFontType("normal");

    /**
     * con dataTicket se creara un ciclo en esta area dentro del cual contendra estos 4 metodos
     **/
    ZonaUno(doc, dataTicket);
    ZonaDos(doc, dataTicket);
    ZonaTres(doc, dataTicket);
    ZonaCuatro(doc, dataTicket);

    doc.save("ok.pdf");

}

export default GeneratorTicketsPDF;
