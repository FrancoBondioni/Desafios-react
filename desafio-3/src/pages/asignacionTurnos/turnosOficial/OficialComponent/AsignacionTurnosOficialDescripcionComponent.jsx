import { useDispatch } from "react-redux";
import { turnoOficialFinalizar } from "../../../../redux/turnos/turnoOficialSlice";

const TurnosOficialDetailComponent = ({turno}) => {
    const dispatcher = useDispatch();
    const finalizarTurno = ()=> {
        dispatcher(turnoOficialFinalizar(turno.id));
    };

    return (
        <li
            className='AspectoTurno_li'
        >
            <h2>
                Turno Siendo Atendido 
            </h2>
            <h3
                className='AspectoTurno_h3'
            >
                <span>ID:</span> {turno.id}
            </h3>
            <i
                className='AspectoTurno_i'
            >
                <span>Fecha:</span> {turno.date}
            </i>
            <h3
                className='AspectoTurno_h3'
            >
               <span> Nombre:</span> {turno.first_name} 
            </h3>
            <h3
                className='AspectoTurno_h3'
            >
                <span>Apellido:</span> {turno.last_name}
            </h3>
            <i
                className='AspectoTurno_i'
            >
                <span>Horario:</span> {turno.time}
            </i>
            <i
                className='AspectoTurno_i'
            >
                <span>Sector:</span> {turno.type}
            </i>
            <p
                className='AspectoTurno_p'
            >
                <span>Motivo:</span> {turno.reason}
            </p>
            <div
            className='AspectoTurno_botonera'
            >
                <button
                    type="button"
                    onClick={finalizarTurno}
                >
                    Finalizar Atención
                </button>
            </div>
        </li>
    );
};

export default TurnosOficialDetailComponent;