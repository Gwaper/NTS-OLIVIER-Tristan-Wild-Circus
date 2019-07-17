import React, { useEffect, useState } from 'react';
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
            <div className="col-s4 col-m4 lg4">
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



        