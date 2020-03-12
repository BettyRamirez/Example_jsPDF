function ZonaUno( doc = '', dataTicket = [] ) {
    doc.setDrawColor(255, 0, 0);
    doc.line(0.02, 0, 0.02, 3.10);
    doc.line(1.45, 0, 1.45, 3.10);
    doc.text(0.2, 3.10, 'Zona uno', null, 90);
}

export default ZonaUno;
