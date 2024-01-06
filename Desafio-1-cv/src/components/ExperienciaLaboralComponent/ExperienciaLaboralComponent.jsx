import React from "react";
import data from "../../utils/data";
import ExperienciaItemComponent from "./ExperienciaItemComponent";
import ExperienciaLaboralStyle from "./ExperienciaLaboral.module.css"

function ExperienciaLaboralComponent() {
    return (
        <div className="d-flex flex-column gap-1 p-3">
            <h3 className="fw-medium fs-2 text-danger">Experiencia Laboral</h3>
            {
                data.experienciaLaboral.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ExperienciaItemComponent experiencia={item} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ExperienciaLaboralComponent