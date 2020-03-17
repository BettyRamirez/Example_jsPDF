import 'jspdf-autotable';

function ZonaUno( doc = '', dataTicket = [] ) {

    /**
     * las constantes se llenaran con datos de dataTicket
     * @type {string}
     */
    const ciudad = 'Mexicali';
    const fecha  = '19/Mar/2020';
    const hora   = '08:00 p.m.';

    const seccion = '0000';
    const zona = 'PREVENTA GENERAL';
    const fila = '00';
    const asiento = '00';
    const mesa = 'MESA';
    const resinto = 'ESTADIO PFS';

    const folio = '000000000';

    const precio = '$999,999.00';
    const cargo = '$999,999.00';
    const total = '$999,999.00';

    //todo: al terminar eliminar esta linea
    doc.line(1.50, 0, 1.50, 2.90);

    /**Texto horizontal ciudad, fecha, hora*/
    doc.text(0.11, 2.82, `Ciudad: ${ciudad}, Fecha: ${fecha}, Hora: ${hora}`, null, 90);


    /**
     * se crea tabla con seccion, zona etc, para que al crecer el texto se expanda hacia abajo
     * */
    const columnsUbicacion = [{ title: '', dataKey: "tablaUbicacion" }];
    const rowsUbicacion = [];

    if(seccion){
        rowsUbicacion.unshift({
            tablaUbicacion: `Sección: ${seccion} `
        })
    }

    if(zona){
        rowsUbicacion.push({
            tablaUbicacion: `Zona: ${zona}`
        })
    }

    if(fila){
        rowsUbicacion.push({
            tablaUbicacion: `Fila: ${fila}`
        })
    }

    if(mesa){
        rowsUbicacion.push({
            tablaUbicacion: `Mesa:  ${mesa}`
        })
    }

    if(asiento){
        rowsUbicacion.push({
            tablaUbicacion: `Asiento: ${asiento}`
        })
    }

    if(resinto){
        rowsUbicacion.push({
            tablaUbicacion: `Resinto: ${asiento}`
        })
    }

    doc.autoTable(columnsUbicacion, rowsUbicacion, {
        margin: {top: -0.13, left: 0.14},
        willDrawCell: ( data ) => {
            if (data.section === 'head') {
                return false
            }
            doc.setTextColor(0,0,0);
            doc.setFont("times");
        },
        styles: {
            overflow: 'linebreak', fontSize: 8.5, cellPadding: 0, overflowColumns: 'linebreak'
            ,fontFamily: 'times'
        },
        tableWidth: 1.35
    });

    /**
     * se inserta el QR
     **/

    /**
     * el texto de el folio
     **/
    doc.setFontType('bold');
    doc.text(1.3, 2.45, 'Folio:', null, 90);
    doc.setFontType('normal');
    doc.text(1.4, 2.45, `${folio ? folio : '#'}`, null, 90);

    /**
     * texto para precios, cargos y totales
     **/
    doc.setFontType('bold');
    doc.text(0.14, 2.63, 'Precio:');
    doc.text(0.14, 2.75, 'Cgo./Serv.:');
    doc.text(0.14, 2.88, 'Total:');
    doc.setFontType('normal');
    doc.text(0.56, 2.63, `${precio}`);
    doc.text(0.78, 2.75, `${cargo}`);
    doc.text(0.48, 2.88, `${total}`);
}

export default ZonaUno;
