import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



function Form(){
    const msg=()=>{
        this.open('mailto:niyiolamicheal@gmail.com')
    }
    return(
        <div>
            <form>
                <div className='container-fluid p-4'>
                <div className='row d-flex justify-content-center '>
                <div className='col-sm-6'>
                <label>Your Name*</label><br/>
                <input type="name" className='name' id='name' placeholder='Enter your name' required/>
                </div>
                <div className='col-sm-6'>
                <label>Your Email*</label><br/>
                <input type="email" className='email' id='name' placeholder='Enter your email' required/>
                </div>
                <div className='col-sm-12'>
                <label>Your Message*</label><br/>
                <textarea></textarea>
                </div>
                <div className='col-sm-12 text-center'>
                <button onSubmit={msg} className='btn-shoot'>Shoot</button>
                </div>
                </div>
                </div>
                </form>
                <div className='col-md-12 text-center' id="option">
    <Link to="/Work"><button className='btn btn-second'><FontAwesomeIcon icon={faArrowLeft} className="arr"/> Work</button></Link>
    <Link to="/Resume"><button className='btn btn-second'>Resume <FontAwesomeIcon icon={faArrowRight} className="arr"/></button></Link>
    </div>
            </div>
    )
}


export default Form;