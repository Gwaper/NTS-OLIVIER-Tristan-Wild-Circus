import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import Axios from 'axios';
import './Artist.css'

function ArtistPage () {
    const [artists, setArtists]= useState([])
    // const [pseudo, setPseudo]= useState()
    // const [name, setName]= useState()
    // const [image, setImage]= useState()
    // const [video, setVideo]= useState()

    useEffect(() => {
        M.AutoInit();
       Axios.get('http://localhost:8000/artist')
            .then((result)=>{
                setArtists(result.data)
            }
            )
      },[]);

      console.log(artists)
    return(
        <div>
  <div>
       {artists.map((artist, index) => {
         return (
            <div className="col s6 m4 xl4">
            <h2 className="header">{artist.pseudo}</h2>
            <div className="card horizontal">
              <div className="card-image">
                <img src={artist.photo} className="img_size"></img>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>real name: {artist.fullname}</p>
                </div>
                <div className="card-action">
                  <a href={artist.video}>watch his work and be terrified</a>
                </div>
              </div>
            </div>
            </div>

             )
           })}
     </div>
        </div>
    )
    
}

export default ArtistPage;



        //    <div className="card mb-3 centerCard">
        //    <div className="row no-gutters">
        //      <div className="col-md-4">
        //        <img src={artist.photo} className="card-img" alt={artist.pseudo} />
        //      </div>
        //        <div className="col-md-8">
        //          <div className="card-body">
        //            <h5 className="card-title"> Artist name:{artist.pseudo}</h5>
        //            <p className="card-text"> real name{artist.fullname}</p>
        //            <p className="card-text"> some exemple of work:{artist.video}</p>
        //          </div>
        //        </div>
        //      </div>
        //    </div>
        