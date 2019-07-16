import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import moment from 'moment';

function Reservation () {
    const [shows, setShows]= useState([])
    const[showId, setShowId]= useState()
    const[price,setPrice]=useState()

    useEffect(() => {
        M.AutoInit();
            Axios.get('http://localhost:8000/spectacle')
            .then((result)=>{
                setShows(result.data)
            }
            )
      },[]);
     
      console.log(showId)
    return(
        <div className="container">
              <div className=" input-field col s4 noFuckingmargin">
          <select id="show" className="browser-default color_select" value={showId} onChange={changeEvent => setShowId(changeEvent.target.value)}>
          {shows.map(
              (show, index) => (
                <option
                  key={(show[index])}
                  value={show.id_show}
                >
                  {show.name_show}
                  :
                  {moment(show.date_show).calendar()}
                </option>
              ),
            )}
          </select>
        </div>
            
           <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                        <input value="" id="first_name" type="text" className="validate"/>
                        <label className="" for="first_name">LastName</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                        <input value="" id="first_name2" type="text" className="validate"/>
                        <label className="" for="first_name2">First Name</label>
                        </div>
            </div>
            <div className="row">
                        <div className="input-field col s6">
                            <select className="browser-default">
                            <option value="" disabled selected>number of Adult</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            </select>   
                            
                        </div>
                        <div className="input-field col s6">
                            <select className="browser-default">
                            <option value="" disabled selected>Number of Children</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            </select>
                          
                        </div>
                        <button>Save Reservation</button>

                 
            </div>
            <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                        <input value="" id="referent" type="text" className="validate"/>
                        <label className="" for="referent">Referent</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix"> account_balance</i>
                        <input value="" id="compagnyName" type="text" className="validate"/>
                        <label className="" for="compagnyName">Compagny Name</label>
                        </div>
            </div>
            <div className="row">
                        <div className="input-field col s6">
                            <select className="browser-default">
                            <option value="" disabled selected>number of Adult</option>
                            <option value="10"> 10</option>
                            <option value="20"> 20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            </select>   
                            
                        </div>
                        <div className="input-field col s6">
                            <select className="browser-default">
                            <option value="" disabled selected>Number of Children</option>
                            <option value="10"> 10</option>
                            <option value="20"> 20</option>
                            <option value="30"> 30</option>
                            <option value="40"> 40</option>
                            <option value="50"> 50</option>
                            <option value="60"> 60</option>
                            <option value="70"> 70</option>
                            </select>
                          
                        </div>
                        <button>Save Reservation</button>
                
            </div>


            
        </div>
    )

}

export default Reservation;