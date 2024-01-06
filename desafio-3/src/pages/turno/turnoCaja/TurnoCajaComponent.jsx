import {useDispatch, useSelector} from 'react-redux';
import { turnoCajaAdd } from '../../../redux/turnos/turnoCajaSlice';
import { nanoid } from 'nanoid';
import { turnoCajaManager } from '../../../rxjs/shared-services';

const TurnoCajaComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = nanoid();
        const date = event.target.elements.date.value;
        const time = event.target.elements.time.value;
        const type = 'Caja';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const newTurno = {id, date, type, reason, time,turnState};
        dispatch(turnoCajaAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoCaja = ()=> {
        turnoCajaManager.next(false);
    };

    return (
        <section
            className={'turneroSection'}
        >
            <h2>
               USTED ESTA SOLICITANDO UN TURNO PARA CAJA
            </h2>
            <form 
                action=""
                onSubmit={addTurno}
            >
                <label htmlFor="date">
                    <h3>Fecha de reserva de turno:</h3>
                    <input 
                        type="date"
                        name='date'
                        required
                        min={date}
                    />
                </label>
                <label htmlFor="reason">
                    <h5>Motivos del turno</h5>
                    <textarea name="reason" id="reason" 
                        cols="20" 
                        rows="5" 
                        placeholder='Motivos'
                        required
                    >
                    </textarea>
                </label>
                <label htmlFor="date">
                    <h3>Horario del Turno:</h3>
                    <input 
                        type="time"
                        name='time'
                        required
                        max={'15:00'}
                        min={'10:00'}
                        step={600}
                        
                    />
                    <hr />
                    <span>
                      El horario de atencion es de 10:00 a 15:00. ¡POR FAVOR SEA PUNTUAL!
                    </span>
                </label>
                <button
                    type='submit'
                >
                    Agendar Turno
                </button>
                <button
                    className={'cancelButton'}
                    type='button'
                    onClick={handleCloseTurnoCaja}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoCajaComponent;