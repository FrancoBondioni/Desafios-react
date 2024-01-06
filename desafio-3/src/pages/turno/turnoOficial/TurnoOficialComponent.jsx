import {useDispatch, useSelector} from 'react-redux';
import { nanoid } from 'nanoid';
import { turnoOficialManager } from '../../../rxjs/shared-services';
import { turnoOficialAdd } from '../../../redux/turnos/turnoOficialSlice';

const TurnoOficialComponent = () => {
    const date = useSelector(store => store.date);
    const dispatch = useDispatch();
    const addTurno = (event)=> {
        event.preventDefault();
        const id = nanoid();
        const date = event.target.elements.date.value;
        const time = event.target.elements.time.value;
        const type = 'Oficial';
        const reason = event.target.elements.reason.value;
        const turnState = 'Pendiente'; 
        const first_name = event.target.elements.first_name.value;
        const last_name = event.target.elements.last_name.value;
        const newTurno = {id, date, type, reason, turnState, time, first_name, last_name};
        dispatch(turnoOficialAdd(newTurno));
        event.target.reset();
    };

    const handleCloseTurnoOficial = ()=> {
        turnoOficialManager.next(false);
    };


    return (
        <section
            className={'turneroSection '}
        >

            <h2>
            USTED ESTA SOLICITANDO UN TURNO PARA OFICIAL
            </h2>
            <form 
                action=""
                onSubmit={addTurno}
            >
                <label htmlFor="date">
                    <h5>Nombre del Solicitante:</h5>
                    
                    <input 
                        type="text"
                        name='first_name'
                        required
                    />
                </label>
                <label htmlFor="date">
                <h5>Nombre del Solicitante:</h5>
                    <input 
                        type="text"
                        name='last_name'
                        required
                    />
                </label>
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
                    <textarea name="reason" id="reason" cols="20" rows="5" placeholder='Ingrese aquí el motivo por el cual solicita su turno'>
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
                    onClick={handleCloseTurnoOficial}
                >
                    Cancelar
                </button>
            </form>
        </section>
    );
};

export default TurnoOficialComponent;