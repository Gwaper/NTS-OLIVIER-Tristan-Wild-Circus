import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import moment from 'moment'
import './GoldenBook.css'

function GoldenBook () {
   const [pseudo, setPseudo]=useState('');
   const [comment, setComment]=useState('');
   const [dateComment, setDateComment]= useState(moment(Date()).calendar());
    const [goldenMessage, setGoldenMessage]=useState([]);
  
  

  

   const newComment= {
       pseudo,
       comment,
       dateComment,
   }
   useEffect(() => {
    M.AutoInit();
        Axios.get('http://localhost:8000/goldenbook')
        .then((result)=>{
            setGoldenMessage(result.data)
         
        }   
        )
  },[]);
console.log({goldenMessage})
   const sendComment = ()=>{
       Axios.post('http://localhost:8000/goldenbook', newComment)
       .then((res) => {
        if (res.status === 200) {
         console.log('thx');
        } else {
          console.log(res.status,);
        }
      })
      .catch(() => {
        console.log("try again");
      });
    }

    return(
        <div className='container'>
            <h3 className="t1">Give us you opinion</h3>
             <div className="row">
                    <form className="col s6">
                        <div className="input-field col s6">
                        <input 
                        id="name" 
                        type="text" 
                        className="validate"
                        onChange={(e)=>setPseudo(e.target.value)}
                        value={pseudo}
                        />
                        <label for="name">name</label>
                        </div>
                    </form>  
                    <form className="col s6">
                        <div className="input-field col s6">
                        <input id="Date" type="text" className="validate"
                        value={dateComment}/>
                        {/* <label 
                            for="date">{dateComment}
                         </label> */}
                        </div>
                    </form>

                </div>
             <div className="row">
                    <form className="col s12">
                        <div className="input-field col s12">
                        <input 
                        id="comment" 
                        type="text" 
                        className="validate"
                        onChange={(e)=>setComment(e.target.value)}
                        value={comment}
                        />
                        <label for="comment">your comment</label>
                        </div>
                    </form>
                </div>
                <button onClick={sendComment}>thank you for your opinion</button>
            <div className= 'row'>
            {goldenMessage.map((message, index) => {
         return (
            <div className="col-s4 col-m4 lg4 comment">
            <h2 className="header date_comment">{message.pseudo}</h2>
            <div className="card horizontal">
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p className="name_comment"> {message.pseudo}</p>
                </div>
                <div className="card-content">
                  <p className='golden_comment'>{moment(message.date_comment).calendar()}</p>
                  <button value={message.id_goldenBook} >{message.id_goldenBook}</button>
                </div>
              </div>
            </div>
            

             )
           })}
            </div>
        </div>
    )
    
}

export default GoldenBook;