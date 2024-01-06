import {useDispatch, useSelector} from 'react-redux';
import { nanoid } from 'nanoid';
import { turnoOnlineManager } from '../../../rxjs/shared-services';
import { turnoOnlineAdd } from '../../../redux/turnos/turnoOnlineSlice';

const TurnoOnlineComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = nanoid();;
        const date = event.target.elements.date.value;
        const type = 'Online';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const newTurno = {id, date, type, reason, turnState};
        dispatch(turnoOnlineAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoOnline = ()=> {
        turnoOnlineManager.next(false);
    };

    return (
        <section
            className={'turneroSection'}
        >
            <h1>
                Solicitud de turno online
            </h1>
            <form 
                action=""
                onSubmit={addTurno}
            >
                
                <label htmlFor="date">
                    <h3>Fecha del Turno:</h3>
                    <input 
                        type="date"
                        name='date'
                        required
                        min={date}
                    />
                </label>
                <label htmlFor="reason">
                    <textarea name="reason" id="reason" cols="20" rows="5" placeholder='Detalle del turno' className='m-3'>
                    </textarea>
                </label>
                <button
                    type='submit'
                >
                    Agendar Turno
                </button>
                <button
                    className={'cancelButton'}
                    type='button'
                    onClick={handleCloseTurnoOnline}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoOnlineComponent;