import logo from '../Images/zonaTicket.png';

function ZonaCuatro(doc = {}, dataTicket = [], textSize = 8, lineWidth = 0.02, fontFamily = 'times' ) {
    // Posiciones de 6.60 a 7.92

    /**
     * agregar imagen logos
     */
    doc.addImage(logo, 'JPEG', 6.70, 1, 1.25, 0.90 );
}

export default ZonaCuatro;
