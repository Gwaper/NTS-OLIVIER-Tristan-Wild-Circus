import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import moment from 'moment'

function GoldenBook () {
    var date = new Date().getDate(); 
    return(
        <div className='container'>
             <div className="row">
                    <form className="col s6">
                        <div className="input-field col s6">
                        <input id="name" type="text" className="validate"/>
                        <label for="name">name</label>
                        </div>
                    </form>  
                    <form className="col s6">
                        <div className="input-field col s6">
                        <input id="comment" type="text" className="validate"/>
                        <label for="comment">{moment(date).calendar()}</label>
                        </div>
                    </form>

                </div>
             <div className="row">
                    <form className="col s12">
                        <div className="input-field col s12">
                        <input id="comment" type="text" className="validate"/>
                        <label for="comment">your comment</label>
                        </div>
                    </form>
                </div>
            
        </div>
    )
    
}

export default GoldenBook;