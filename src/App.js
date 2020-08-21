import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import './index.css';
import HomePage from  "./components/HomePage";
import WorkPage from  "./Work/WorkPage";
import MyContact from "./Contact/MyContact";
import ResumePage from "./Resume/ResumePage";

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  exact path='/Work' component={WorkPage} />
        <Route exact path='/Contact' component={MyContact} />
        <Route exact path='/Resume' component={ResumePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;