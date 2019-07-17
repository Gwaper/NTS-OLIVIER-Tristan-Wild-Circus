import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

function Menu () {
    return(
        <div className="bg">
                <nav className='navbar'>
        <div className="navbar navbar-dark bg-primary">
        <ul className="navbar-nav" >
            <li className="nav-item active"><NavLink exact to="/">Accueil</NavLink></li>
            <li className="nav-item active"><NavLink exact to="/reservation">Réservation</NavLink></li>
            <li className="nav-item active"><NavLink exact to="/goldenbook">Goldenbook</NavLink></li>
            <li className="nav-item active"><NavLink exact to="/artistpage">Artist</NavLink></li>
        </ul>
        </div>
        </nav>
        </div>
    )

}

export default Menu;




