import { useSelector } from 'react-redux';
import TurnosListItemComponent from '../../../common/listarTurno/listarTurnoComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { turnoOnlineAtender } from '../../../redux/turnos/turnoOnlineSlice';
import AsignacionTurnosOnlineDescripcionComponent from './OnlineComponent/AsignacionTurnosOnlineDescripcionComponent';

const TurnosOnlineComponent = () => {
    const turnosOnline = useSelector(store=> store.turnosOnline);
    const [turnosPendientes, setTurnosPendientes] = useState([]);
    const [turnosAtendiendo, setTurnosAtendiendo] = useState([]);

    useEffect(()=> {
        setTurnosPendientes(turnosOnline.filter(turno => turno.turnState === 'Pendiente'));
        setTurnosAtendiendo(turnosOnline.filter(turno => turno.turnState === 'Atendiendo'));
    }, [turnosOnline])

    return (
        <section className='turneroSection'>
            <h2>
                Administrar Turnos Online
            </h2>
            <div
                className='administradorTurnosContenedor'
            >
                <ul
                    className='administradorTurnos'
                >
                    {
                        turnosPendientes.map(turno => (
                            <TurnosListItemComponent
                                key={turno.id}
                                turno={turno}
                                action = {turnoOnlineAtender}
                            />
                        ))
                    }
                </ul>
                <ul>
                    {
                        turnosAtendiendo.map(turno => (
                            <AsignacionTurnosOnlineDescripcionComponent
                                key={turno.id}
                                turno = {turno}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default TurnosOnlineComponent;