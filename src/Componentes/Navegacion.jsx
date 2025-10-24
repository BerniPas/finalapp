import AD from '../assets/AD.png';
import { NavLink } from 'react-router-dom';

const Navegacion = () => {
    return (
        <nav>
            <div>
                <img src={AD} alt="logo de la empresa" />
            </div>

            <div id="desplegable">
                <span className="icon-cerrar" onClick="cerrar();"></span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/testimonios">Testimonios</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/personajes">Personajes</NavLink>
                <NavLink to="/productos">Productos</NavLink>
                <NavLink to="/productos-local">Productos Local</NavLink>
            </div>

            <span className="icon-menu" onClick="abrir();"></span>
        </nav>
    );
}

export default Navegacion;