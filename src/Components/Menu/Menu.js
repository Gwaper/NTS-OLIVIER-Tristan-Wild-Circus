import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

function Menu () {
    return(
        <div className="">
                <nav className="orange accent-4 navbar-fixed">
        <div className="nav-wrapper ">
        <ul className="right hide-on-med-and-down  ">
            <li className="yellow accent-3"><NavLink exact to="/">Accueil</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/reservation">Réservation</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/goldenbook">Goldenbook</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/artistpage">Artist</NavLink></li>
        </ul>
        </div>
        </nav>
        </div>
    )

}

export default Menu;




