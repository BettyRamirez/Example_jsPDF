import jsPDF from 'jspdf';
import ZonaUno from "./ZonaUno";
import ZonaDos from "./ZonaDos";
import ZonaTres from "./ZonaTres";
import ZonaCuatro from "./ZonaCuatro";

function GeneratorTicketsPDF( dataTicket = [] ) {
    const textSize = 8.5;
    const lineWidth = 0.01;
    const fontFamily = 'times';

    const doc = new jsPDF('landscape', 'in', [7.99, 3.12]);

    doc.setTextColor(0,0,0);
    doc.setFontSize(textSize);
    doc.setFont(fontFamily);
    doc.setFontType("normal");

    /**
     * con dataTicket se creara un ciclo en esta area dentro del cual contendra estos 4 metodos
     **/
    ZonaUno(doc, dataTicket, textSize, lineWidth, fontFamily);
    ZonaDos(doc, dataTicket, textSize, lineWidth, fontFamily);
    ZonaTres(doc, dataTicket, textSize, lineWidth, fontFamily);
    ZonaCuatro(doc, dataTicket, textSize, lineWidth, fontFamily);

    doc.save("zonaTicket.pdf");

}

export default GeneratorTicketsPDF;
