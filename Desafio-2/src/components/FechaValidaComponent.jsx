import React, { useRef, useState } from 'react';
import { toFecha } from '../util/ValidacionFechas';
import Mensaje from './Mensaje';


function FechaValidaComponent() {

    const fechaR = useRef(null);
    const [mensaje, setMensaje] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const fecha = fechaR.current.value;

        const fechaValidada = toFecha(fecha);

        if (fechaValidada) {
            setMensaje("La Fecha ingresada es correcta \n" + " " + "Día: " + fechaValidada.dia + " / Mes: " + fechaValidada.mes + " / Año: " + fechaValidada.anio + " ");
        } else {
            setMensaje("Fecha inválida.");
        }
    }

    return (
        <div className="mt-5">
            <h1 className='Titulo'>VALIDADOR DE FECHA</h1>
            <form className="d-flex gap-2 justify-content-center mt-4" onSubmit={handleFormSubmit}>
                <input type="text" className='fecha' ref={fechaR} placeholder="Ingrese una fecha" />
                <button id='boton' type="submit">Validar Fecha</button>
            </form>
            <p className="mt-2">El formato de fecha dd/mm/aaaa</p>
            {mensaje && <Mensaje>{mensaje}</Mensaje>}
        </div>
    )
}

export default FechaValidaComponent