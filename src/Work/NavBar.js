import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component{

  state={
    toggle:false
  }
  menuToggle=()=>{
    this.setState({toggle: !this.state.toggle})
  }
  render(){
    const {toggle}=this.state;
    return(
      <>
        <header>
          <div className='logo'>
          <h5>MexDev.</h5>
          </div>
          <ul className={toggle ? "toggle" : ""}> 
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/Work'>WORK</Link></li>
            <li><Link to='/Contact'>CONTACT</Link></li>
            <li><Link to='/Resume'>RESUME</Link></li>
            <li className='close' onClick={this.menuToggle}>X</li>
            </ul>
            <div className='menu' onClick={this.menuToggle}><FontAwesomeIcon icon={faGripLines} /></div>
          </header>
        </>
    )
  }
}


export default NavBar;