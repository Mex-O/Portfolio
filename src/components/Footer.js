import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import {faTwitter,faFacebook,faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className='col-sm float-center text-center' id="footer">
        <div className="column d-flex justify-content-center text-center">
        <div className='col-sm-4'>
        <a href="https://twitter.com/Micheal46777232?s=09"><FontAwesomeIcon icon ={faTwitter} className="icons" /></a>
        <a href="https://www.facebook.com/aderibigbe.horluwarsheun"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
        <a href="https://github.com/mex200"><FontAwesomeIcon icon={faGithub} className="icons" /></a>
        </div>
        </div>
        </div>
    )
}



export default Footer;