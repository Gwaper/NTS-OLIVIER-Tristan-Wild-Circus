import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

function Menu () {
    return(
        <div>
                <nav>
        <div className="nav-wrapper white">
        <ul className="right hide-on-med-and-down" style={{ display: 'flex', alignItems: 'center' }}>
            <li><NavLink exact to="/">Accueil</NavLink></li>
            <li><NavLink exact to="/reservation">Réservation</NavLink></li>
            <li><NavLink exact to="/goldenbook">Goldenbook</NavLink></li>
            <li><NavLink exact to="/artistpage">Artist</NavLink></li>
        </ul>
        </div>
        </nav>
        </div>
    )

}

export default Menu;




