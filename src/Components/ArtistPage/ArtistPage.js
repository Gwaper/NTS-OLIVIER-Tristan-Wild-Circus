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
    <div ClassName="card background_Card">
    <img src={artist.photo} ClassName="card-img-top, test" alt="..."></img>
    <div ClassName="card-body">
      <h5 ClassName="card-title">{artist.pseudo}</h5>
      <p ClassName="card-text">his real name is: {artist.fullname}</p>
      <button type="button" class="btn btn-success"><a href={artist.video} ClassName="btn btn-primary">Go somewhere</a></button>
    </div>
  </div>
      )
    })}
</div>
        </div>
    )
    
}


export default ArtistPage;



{/* <div>
{artists.map((artist, index) => {
  return (
    <div className="card mb-3 centerCard">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={artist.photo} className="card-img" alt={artist.name} />
        </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{artist.name}</h5>
              <p className="card-text">{artist.fullname}</p>
              <p className="card-text">{artist.description}</p>
            </div>
          </div>
        </div>
      </div>
      )
    })}
</div> */}