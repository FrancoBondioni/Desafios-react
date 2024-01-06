import React from "react";

function ExperienciaItemComponent( { experiencia } ) {
    const { puesto, empresa, fechas } = experiencia;

    return (
        <div className="pb-3">
            <p className="fw-bold mb-1 text-light bg-secondary">{puesto}</p>
            <div className="d-flex flex-col justify-content-between">
                <p className="d-inline fw-bold text-info">{empresa}</p>
                <p className="d-inline fw-bold">{fechas}</p>
            </div>
        </div>
    )
}

export default ExperienciaItemComponent