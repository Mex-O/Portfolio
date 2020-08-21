import React from 'react';
import Me from './Me.jpg';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faArrowRight  } from "@fortawesome/free-solid-svg-icons";


function Home(){
return(
    <div className='col-md-12 text-center'>
    <img src={Me} alt="Me" className='round-image' />
    <div className='col-md-12 text-center' id="text">
    <b>Hello! I'm Aderibigbe Oluwaseun</b> 
    <p>I'm a frontend developer, I spend most of my time writing codes for applications using <br/>
        Javascript, <code>React js</code> and a little <code>PHP</code>. I use <a href='https://www.css.com'>CSS</a> and <a href='https://www.Sass.com' >SASS</a> to design<br/>
        efficient user interface. I love talking about tech and also <br/>write on my facebook page about tech occassionlly.</p>
    </div>
    <div className='col-md-12 text-center'>
    <Link to="/Work"><button className='btn btn-second'>Explore <FontAwesomeIcon icon={faArrowRight} className="arr"/></button></Link>
    </div>
        </div>
 )
}




 export default Home;