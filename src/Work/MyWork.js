import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft, faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MyWork(){
    return(
        <div>
        <div className="container-fluid p-5 float-center">
        <div className="row d-flex justify-content-center float-center">
        <div className="col-md-4">
        <div className="card">
        <h5>Mexdev.dev</h5>
        <code>React</code>
        <p>My Portfolio</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"> <FontAwesomeIcon icon={faEye}/> Live</span>
        <span><Link to='/'><FontAwesomeIcon icon={faCodeBranch}/> Code</Link></span>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card">
        <h5>Church</h5>
        <code>Html + Javascript + Css </code>
        <p>A website for Church</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"><a href='https://mexdev.github.io/Church/'> <FontAwesomeIcon icon={faEye}/> Live</a></span>
        <span><a href='https://github.com/Mexdev/Church'><FontAwesomeIcon icon={faCodeBranch}/> Code</a></span>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card">
        <h5>Iwatch</h5>
        <code>Html + Javascript + AOS</code>
        <p>A static LandingPage</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"><a href='https://mex-dev.github.io/Iwatch/'> <FontAwesomeIcon icon={faEye}/> Live</a></span>
        <span><a href='https://github.com/Mex-dev/Iwatch'><FontAwesomeIcon icon={faCodeBranch}/> Code</a></span>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card">
        <h5>Construction Website</h5>
        <code>Wordpress</code>
        <p>Mobile App Page</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"><a href='https://b24-jpis6I.bitrix24.site/'><FontAwesomeIcon icon={faEye}/> Live</a></span>
        <span><FontAwesomeIcon icon={faCodeBranch}/> Code</span>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card">
        <h5>Tip Calculator</h5>
        <code>Javascript</code>
        <p>Tip Calculator App</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"> <a href='https://mex-dev.github.io/Tip-calc/'><FontAwesomeIcon icon={faEye}/> Live</a></span>
        <span><a href='https://github.com/Mex-dev/Tip_calc'><FontAwesomeIcon icon={faCodeBranch}/> Code</a></span>
        </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card">
        <h5>Agico</h5>
        <code>Html + Css + Php</code>
        <p>A multipage website</p>
        <div className='column d-flex justify-content-left' id='work'>
       <span className="span"><a href='https://mexdev.netlify.app/'><FontAwesomeIcon icon={faEye}/> Live</a></span>
        <span><a href='https://github.com/Mex-dev/Agico'><FontAwesomeIcon icon={faCodeBranch}/> Code</a></span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='col-md-12 text-center'>
    <Link to="/"><button className='btn btn-second'><FontAwesomeIcon icon={faArrowLeft} className="arr"/> Home</button></Link>
    <Link to="/Contact"><button className='btn btn-second'>Contact <FontAwesomeIcon icon={faArrowRight} className="arr"/></button></Link>
    </div>
    </div>
    );

}

export default MyWork;