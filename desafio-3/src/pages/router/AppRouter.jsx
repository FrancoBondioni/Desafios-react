import { Routes, Route } from "react-router-dom";
import TurnoComponent from "../turno/TurnoComponent";
import TurnosComponent from "../asignacionTurnos/asignacionesTurnosComponent";
import LayoutComponent from "../../layout/LayoutComponent";
import HomeComponent from "../inicio/inicioComponent";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutComponent/>}>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/turno" element={<TurnoComponent/>}/>
                <Route path="/turnero" element={<TurnosComponent/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;