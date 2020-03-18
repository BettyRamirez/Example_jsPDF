import qrImage from '../Images/qrp3.png';
import logo from '../Images/zonaTicket.png';

function ZonaDos(doc = {}, dataTicket = [], textSize = 8, lineWidth = 0.02, fontFamily = 'times'  ) {
    // Posiciones de 1.75 a 2.85

    /**
     * las constantes se llenaran con datos de dataTicket
     * @type {string}
     */

    const folio = '000000000';

    const ciudad = 'Mexicali';
    const dia = '00';
    const mes = 'SEP';
    const anio = '2020';
    const hora   = '24:00';

    const titulo = 'NOMBRE DEL EVENTO LARGO LARGO LARGO';
    const subtitulo = 'El subtítulo de evento';

    const precio = '$1111,999.00';
    const cargo = '$2222,999.00';
    const total = '$3333,999.00';

    const resinto = 'ESTADIO PFS';
    const zona = 'PREVENTA-GENERAL';
    const seccion = 'AA';
    const mesa = 'AA';
    const fila = 'AA';
    const asiento = 'AA';

    /**
     * Textos horizontales, ciudad y folio
     */
    doc.text(1.64, 0.90, `Folio: ${folio}`, null, 90);
    doc.text(1.64, 2.87, `Ciudad: ${ciudad ? ciudad.toUpperCase(): ''}`, null, 90);

    /**
     * Titulo y subtitulo del evento, se crea en tabla para que quede centrado indepencientemente del texto
     */
    const columnsTitulo = [{ title: '', dataKey: "tablaTitulo" }];
    const rowsTitulo = [
        {tablaTitulo: `${titulo}`},
        {tablaTitulo: `${subtitulo}`}
    ];

    doc.autoTable( columnsTitulo, rowsTitulo, {
        startY: -0.13,
        margin: {left: 2.65},
        willDrawCell: ( data ) => {
            if (data.section === 'head') {
                return false
            }

            doc.setFontType("bold");
            doc.setTextColor(0,0,0);
            doc.setFont(fontFamily);
        },
        columnStyles: {
            0: { fontWeight: 'bold', align: "bottom", halign: 'center' },
        },
        tableWidth: 2.35,
        styles: {
            overflow: 'linebreak',
            fontSize: textSize,
            cellPadding: 0,
            overflowColumns: 'linebreak'
        },
    });
    doc.setFontType('normal');

    /**
     * insercion de imagenes
     */
    doc.addImage(qrImage, 'JPEG', 1.69, 0, 0.9, 0.9);
    doc.addImage(logo, 'JPEG', 2.79, 0.5, 1.90, 1);

    /**
     * Texto para precios, cargos y totales
     **/
    doc.setFontType('bold');
    doc.text(1.69, 1.05, 'Precio:');
    doc.text(1.69, 1.35, 'Cgo./Serv.:');
    doc.text(1.69, 1.63, 'Total:');
    doc.setFontType('normal');
    doc.text(1.69, 1.20, `${precio}`);
    doc.text(1.69, 1.47, `${cargo}`);
    doc.text(1.69, 1.73, `${total}`);

    /**
     * Dibuja lineas H y V
     **/
    doc.setLineWidth(lineWidth);
    //Vertical
    doc.line(1.69, 1.85, 4.99, 1.85);
    doc.line(1.69, 2.05, 4.99, 2.05);
    doc.line(1.69, 2.25, 4.36, 2.25);
    //horizontal
    doc.line(4.36, 2.05, 4.36, 2.92);

    /**
     * Dibuja cuadrados
     */
    doc.rect(1.75, 2.30, 0.55, 0.55, 0.05, 0.05, 'FD');
    doc.rect(2.42, 2.30, 0.55, 0.55);
    doc.rect(3.09, 2.30, 0.55, 0.55);
    doc.rect(3.76, 2.30, 0.55, 0.55);

    /**
     * Texto resinto y zona
     */
    doc.setFontSize(10.5);
    doc.text(1.69, 2.00, 'Resinto:');
    doc.text(1.69, 2.20, 'Zona:');
    doc.setFontType('bold');
    doc.text(2.19, 2.00, `${resinto ? resinto.toUpperCase() : '//'}`);
    doc.text(2.05, 2.20, `${zona ? zona.toUpperCase() : '//'}`);
    doc.setFontType('normal');
    doc.setFontSize(8.5);

    /**
     * Titulos de cuadros
     */
    doc.setFontSize(6.5);
    doc.text(1.73, 2.67, 'Secc.', null, 90);
    doc.text(2.40, 2.67, 'Mesa', null, 90);
    doc.text(3.07, 2.63, 'Fila', null, 90);
    doc.text(3.74, 2.71, 'Asiento', null, 90);
    doc.setFontSize(8.5);

    /**
     * Informacion de cuadros (seccion, mesa, fila, asiento)
     */
    doc.setFontSize(26);
    doc.setFontType('bold');
    doc.text(1.77, 2.71, `${seccion}`);
    doc.text(2.44, 2.71, `${mesa}`);
    doc.text(3.11, 2.71, `${fila}`);
    doc.text(3.78, 2.71, `${asiento}`);
    doc.setFontSize(8.5);

    /**
     * fecha
     */
    doc.setFontType('bold');
    doc.setFontSize(21);
    doc.text(4.44, 2.42, `${dia}`);
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(4.44, 2.59, `${mes}`);
    doc.setFontSize(14);
    doc.text(4.91, 2.60, `${anio}`, null, 90);
    doc.setFontSize(15);
    doc.text(4.43, 2.78, `${hora}`);

}

export default ZonaDos;
