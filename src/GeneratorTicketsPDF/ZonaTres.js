import logo from '../Images/zonaTicket.png';

function ZonaTres(doc = {}, dataTicket = [], textSize = 8, lineWidth = 0.02, fontFamily = 'times'  ) {
    // Posiciones de 5.05 a 6.55

    /**
     * agregar imagen logos
     */
    doc.addImage(logo, 'JPEG', 5.18, 1, 1.25, 0.90 );

}

export default ZonaTres;
