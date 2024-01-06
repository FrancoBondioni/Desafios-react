import { Link } from 'react-router-dom';
import styles from './NavbarComponent.module.css';
import logotipo from './assets/logotipo.png'
const NavbarComponent = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href={'/'} className="nav-link" > <img src={logotipo} alt=""  /></a>

  <div className=" navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link "href={'/turno'}>SOLICITUD DE TURNOS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"href={'/turnero'}>TURNOS ASIGNADOS</a>
      </li>
    </ul>
  </div>
</nav>

    );
};

export default NavbarComponent;