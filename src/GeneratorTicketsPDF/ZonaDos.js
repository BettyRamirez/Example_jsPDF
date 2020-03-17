function ZonaDos( doc = '', dataTicket = [] ) {

    /**
     * las constantes se llenaran con datos de dataTicket
     * @type {string}
     */

    const folio = '0000000000';

    const ciudad = 'Mexicali';
    const fecha  = '19/Mazr/2020';
    const hora   = '08:00 p.m.';



    const precio = '$999,999.00';
    const cargo = '$999,999.00';
    const total = '$999,999.00';


    doc.setDrawColor(0, 255, 0);

    doc.line(1.55, 0, 1.55, 2.90);
    doc.line(5.00, 0, 5.00, 2.90);

    /**
     * Textos horizontales, ciudad y folio
     */
    doc.text(1.7, 0.95, `Folio: ${folio}`, null, 90);
    doc.text(1.7, 2.87, `Ciudad: ${ciudad ? ciudad.toUpperCase(): ''}`, null, 90);

    /**
     * insercion de QR
     */

    /**
     * Titulo del evento
     */

    /**
     * texto para precios, cargos y totales
     **/
    doc.setFontType('bold');
    doc.text(1.9, 2.63, 'Precio:');
    doc.text(0.14, 2.75, 'Cgo./Serv.:');
    doc.text(0.14, 2.88, 'Total:');
    doc.setFontType('normal');
    doc.text(0.56, 2.63, `${precio}`);
    doc.text(0.78, 2.75, `${cargo}`);
    doc.text(0.48, 2.88, `${total}`);
}

export default ZonaDos;
