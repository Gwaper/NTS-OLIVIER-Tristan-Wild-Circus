import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';


import 'materialize-css/dist/css/materialize.min.css';
import './Hompage.css';

function HomePage() {
    return (
        <div>
            <div className="container">
                <h1>Welcome in the Wild-Song-Circus</h1>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://i.ytimg.com/vi/HJ-6JsOdGoI/hqdefault.jpg"></img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Our Story<i className="material-icons right">more_vert</i></span>
                                <p><a href="/reservation">Do you want to see us</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Our Story<i class="material-icons right">close</i></span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                      </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://www.revanchamag.com/wp-content/uploads/2016/11/Balada-triste-de-trompeta-2.jpg"></img>
                                    <span className="card-title">Our artist</span>
                                </div>
                                <div className="card-content">
                                    <p>we have artists who will terrify you by their music</p>
                                </div>
                                <div className="card-action">
                                    <a href="/artistpage">do you want to know them</a>
                                </div>
                            </div>
                        </div>
                    </div>


                

            </div>
        </div>
      </div >
    )

}

export default HomePage;
