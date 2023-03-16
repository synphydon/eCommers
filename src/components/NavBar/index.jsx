import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';

import ImagenLogo from "../../assets/images/Logo.jpg"

import './navbar.css';

function NavBar ({cantidadArticulos}) {
    return (
        <div style={{"width":"100%"}}>
            <NavigationBar cantidadArticulos={cantidadArticulos} />
        </div>
    )
}

function Logo() {
    return (
        <img  className='logo' src={ImagenLogo}></img>
    )
}

function NavigationBar({cantidadArticulos}) {
    return (
      <div style={{"display": "inline", "width": "100%"}}>
        <div>
          <Logo />
          <div style={{"display": "inline"}}>
            <div style={{"display": "inline"}}>
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div style={{"display": "inline", "marginLeft":"15px"}}>
              <NavLink to="/category/mochila">Mochilas</NavLink>
            </div>
            <div style={{"display": "inline", "marginLeft":"15px"}}>
              <NavLink to="/category/remera">Vestidos</NavLink>
            </div>
            <div style={{"display": "inline", "marginLeft":"15px"}}>
              <NavLink to="/about">Quienes Somos</NavLink>
            </div>
          </div>
        </div>
      </div>

    )
}

export default NavBar