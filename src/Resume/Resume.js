import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquare,faArrowRight, faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Resume(){
    return(
        <div>
        <div id="resume">
            <div className="container-fluid">
            <h3>Aderibigbe Oluwaseun</h3> 
            <p>Frontend Developer</p>
            <h6>Frontend developer, passionate and dedicated in bringing ideas from<br/>
            pixels to live scalable products. I develop responsive applications with user<br/>
            experience as top priority. I'm always ready to adabt according to project specifications <br/>
            irrespective of stack.</h6>
            <br/>
            <b>Skills</b><br/>
            <code>HTML, Css, Sass, Javascript[ES6], Bootstrap, React.js, Jquery, Git, Netlify, Wordpress, PHP and Search Engine Optimization</code>
            <br/><b>Experience</b><br/>
            <code>Gbtech.inc - Lead Frontend Developer</code>
            <h6>January 2018 - June 2020</h6>
                <p>I worked and partnered with the founder of Gbtech.inc and i'm building a small<br/>
                team of junior developers to work on a new user interface for the company's web applications.</p>
                <p><FontAwesomeIcon icon={faSquare} id='ass'/> Redisigned company website and improved search engine visibility. </p>
                <p><FontAwesomeIcon icon={faSquare} id='ass'/> Designed website for local and international SMEs with wordpress. </p>
                <p><FontAwesomeIcon icon={faSquare} id='ass'/> Provided strategic eCommerce solutions for small businesss. </p>
                <p><FontAwesomeIcon icon={faSquare} id='ass'/> Wrote Searc Engine Optimised articles for the company's blog. </p>
                <br/><b>Education</b><br/>
                <p>Federal University of Agriculture Abeokuta, Ogun</p>
                <p>2019-Till Date</p><br/>
                <b>Projects</b><br/>
                <p>Link to my work can be found on  <Link to="/Work">Mexdev/Work</Link></p>
                <a href='https://www.filesharing.com/file/details/888806/Mexdev-resume.pdf'>Download CV<FontAwesomeIcon icon={faDownload}/></a>
        </div>
        </div>
        <div className='col-md-12 text-center' id="option">
    <Link to="/Contact"><button className='btn btn-second'><FontAwesomeIcon icon={faArrowLeft} className="arr"/> Contact</button></Link>
    <Link to="/"><button className='btn btn-second'>Home <FontAwesomeIcon icon={faArrowRight} className="arr"/></button></Link>
    </div>
    </div>
    )
}

export default Resume;