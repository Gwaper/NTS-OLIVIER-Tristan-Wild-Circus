import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import moment from 'moment';
import './Reservation.css'

function Reservation () {
    const [shows, setShows]= useState([]);
    const[showId, setShowId]= useState();
    const[priceP,setPriceP]=useState(0);
    const [priceC, setPriceC]=useState(0)
    const[firstName,setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[quantityChildren, setQuantityChildren]=useState(0);
    const[quantityAdult,setQuantityAdult]=useState(0);
    const[referent,setReferent]= useState('');
    const [compagnyName, setCompagnyName]=useState('');
    const [numberAdult, setNumberAdult]=useState(0);
    const[numberChildren, setNumberChildren]=useState(0);


 
    

    useEffect(() => {
        M.AutoInit();
            Axios.get('http://localhost:8000/spectacle')
            .then((result)=>{
                setShows(result.data)
            }
            )
      },[]);
useEffect(()=>{
  if(quantityAdult>0||quantityChildren>0){
    setPriceP((quantityAdult*8)+(quantityChildren*5))
  }

},[quantityAdult,quantityChildren])
useEffect(()=>{
  if(numberAdult>0||numberChildren>0){
    setPriceP((numberAdult*5)+(numberChildren*3))
  }

},[numberAdult,numberChildren])

      const addReservation = {
        firstName,
        lastName,
        quantityChildren,
        quantityAdult

      }
      const sendRegistration =() =>{
        Axios.post('http://localhost:8000/spectaclecompagny', addReservation)
        .then((res) => {
          if (res.status === 200) {
           console.log('La reservation a bien été prise en compte');
          } else {
            console.log(res.status,);
          }
        })
        .catch(() => {
          console.log("Une erreur s'est produite. Merci de réessayer");
        });
      }
      const addReservationCompagny = {
        referent,
        compagnyName,
        numberChildren,
        numberAdult

      }
      const sendRegistrationCompagny =() =>{
        Axios.post('http://localhost:8000/spectaclecompagny', addReservationCompagny)
        .then((res) => {
          if (res.status === 200) {
           console.log('La reservation a bien été prise en compte');
          } else {
            console.log(res.status,);
          }
        })
        .catch(() => {
          console.log("Une erreur s'est produite. Merci de réessayer");
        });
      }
     
  
    return(
        <div className="container">
          <h2 className='gt1'>Reservation</h2>
          <h3 className='gt3'>Choose a date </h3>
              <div className=" input-field col s4 noFuckingmargin">
          <select id="show" className="browser-default bg_select " value={showId} onChange={changeEvent => setShowId(changeEvent.target.value)}>
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
        <h3 className="title gt2">Take your seat for your family</h3>
            
           <div className="row family">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                        <input 
                        id="first_name" 
                        type="text" 
                        className="validate"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        value={firstName}
                        />
                        <label className="" for="first_name">LastName</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                        <input 
                        id="first_name2"
                         type="text" 
                         className="validate"
                         onChange={(e) => {
                           setLastName(e.target.value);
                         }}
                         value={lastName}
                         />
                        <label className="" for="first_name2">First Name</label>
                        </div>
            </div>
            <div className="row">
                        <div className="input-field col s6">
                            <select 
                                className="browser-default bg_select"
                                value={quantityAdult}
                                onChange ={e=>setQuantityAdult(e.target.value)}
                            >
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
                            <select 
                            className="browser-default bg_select"
                            value={quantityChildren}
                            onChange={e=>setQuantityChildren(e.target.value)}
                            >
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
                        <button onClick={sendRegistration}>Save Reservation</button>
                        <p className="price">total:{priceP}€</p>

                 
            </div>
            <h3 className="title gt2">Take your seat for group</h3>
            <div className="row ">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">face</i>
                            <input 
                            id="referent" 
                            type="text" 
                            className="validate"
                            onChange={(e) => {
                              setReferent(e.target.value);
                            }}
                            value={referent}
                            />
                            <label className="" for="referent">Referent</label>
                        </div>

                        <div className="input-field col s6">
                            <i className="material-icons prefix"> account_balance</i>
                            <input 
                               id="compagnyName" 
                               type="text" 
                               className="validate"
                               onChange={(e) => {
                                setCompagnyName(e.target.value);
                              }}
                              value={compagnyName}
                               />
                            <label className="" for="compagnyName">Compagny Name</label>
                        </div>
            </div>
            <div className="row">
                        <div className="input-field col s6">
                            <select
                             className="browser-default bg_select"
                             value={numberAdult}
                             onChange ={e=>setNumberAdult(e.target.value)}
                            >
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
                            <select 
                            className="browser-default bg_select"
                            value={numberChildren}
                            onChange={e=>setNumberChildren(e.target.value)}
                            >
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
                        <button onClick={sendRegistrationCompagny}>Save Reservation</button>
                        <p className="price">total:{priceC}€</p>
                
            </div>


            
        </div>
    )

}

export default Reservation;