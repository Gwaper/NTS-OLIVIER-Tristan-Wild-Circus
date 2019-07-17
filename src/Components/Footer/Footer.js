import React from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './Footer.css';

const Footer = () => (
  <footer>
       <ul className="right hide-on-med-and-down  ">
            <li className="yellow accent-3"><NavLink exact to="/">Accueil</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/reservation">Réservation</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/goldenbook">Goldenbook</NavLink></li>
            <li className="yellow accent-3"><NavLink exact to="/artistpage">Artist</NavLink></li>
        </ul>
  </footer>
);

export default Footer;