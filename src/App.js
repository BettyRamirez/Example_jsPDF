import React from 'react';
import GeneratorTicketsPDF from "./GeneratorTicketsPDF/GeneratorTicketsPDF";

function App() {

    const generarPDF =  () => {
        GeneratorTicketsPDF();
    };

    return (
        <div>
            <button onClick={generarPDF}>Comprar tickets</button>
        </div>
    );
};

export default App;
