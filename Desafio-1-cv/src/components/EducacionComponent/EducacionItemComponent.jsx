import React from 'react'

function EducacionItemComponent({ educacion }) {
    const { titulo, institucion, fechas, detalles } = educacion;

    return (
        <div className="pb-3">
            <p className="fw-bold mb-1 text-light bg-secondary border-top">{titulo}</p>
            <div className="d-flex flex-col justify-content-between">
                <p className="d-inline fw-bold text-info">{institucion}</p>
                <p className="d-inline fw-bold">{fechas}</p>
            </div>
            <p className='text-light bg-dark'>{detalles}</p>
        </div>
    )
}

export default EducacionItemComponent