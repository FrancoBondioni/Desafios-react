import { useSelector } from 'react-redux';
import TurnosListItemComponent from '../../../common/listarTurno/listarTurnoComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import AsignacionTurnosOficialDescripcionComponent from './OficialComponent/AsignacionTurnosOficialDescripcionComponent';
import { turnoOficialAtender } from '../../../redux/turnos/turnoOficialSlice';

const TurnosOficialComponent = () => {
    const turnosOficial = useSelector(store=> store.turnosOficial);
    const [turnosPendientes, setTurnosPendientes] = useState([]);
    const [turnosAtendiendo, setTurnosAtendiendo] = useState([]);

    useEffect(()=> {
        setTurnosPendientes(turnosOficial.filter(turno => turno.turnState === 'Pendiente'));
        setTurnosAtendiendo(turnosOficial.filter(turno => turno.turnState === 'Atendiendo'));
    }, [turnosOficial])

    return (
        <section className='turneroSection'>
            <h2>
                Administrar Turnos de Oficial
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
                                action = {turnoOficialAtender}
                            />
                        ))
                    }
                </ul>
                <ul>
                    {
                        turnosAtendiendo.map(turno => (
                            <AsignacionTurnosOficialDescripcionComponent
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

export default TurnosOficialComponent;