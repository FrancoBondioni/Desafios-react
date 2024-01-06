import { useDispatch } from "react-redux";
import { turnoOnlineFinalizar } from "../../../../redux/turnos/turnoOnlineSlice";

const TurnosOnlineDetailComponent = ({turno}) => {
    const dispatcher = useDispatch();
    const finalizarTurno = ()=> {
        dispatcher(turnoOnlineFinalizar(turno.id));
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

export default TurnosOnlineDetailComponent;