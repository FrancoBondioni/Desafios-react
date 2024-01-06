import { useDispatch } from 'react-redux';
import styles from './listarTurnoComponent.module.css';

const listarTurnoComponent = ({turno, action}) => {
    const dispatch = useDispatch();
    const atenderTurno = ()=> {
        dispatch(action(turno.id));
    };
    
    return (
        <li
            className={styles.turno}
        >
            <h4
                className={styles.turnoID}
            >
              <span>ID</span>  {turno.id}
            </h4>
            <i
                className={styles.turnoFecha}
            >
                <span>Fecha:</span>{turno.date}
            </i>
            <p
                className={styles.turnoMotivo}
            >
               <span>Motivos:</span> {turno.reason}
            </p>
            <div
                className={styles.botones}
            >
                <button
                    type='button'
                    onClick={atenderTurno}
                >
                    Atender
                </button>
            </div>
        </li>
    );
};

export default listarTurnoComponent;