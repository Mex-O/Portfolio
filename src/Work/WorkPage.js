import React from 'react';
import NavBar from './NavBar';
import MyWork from './MyWork';
import Footer from '../components/Footer';

class WorkPage extends React.Component{
  render(){
    return(
      <div>
      <NavBar />
      <MyWork />
      <Footer />
      </div>
    )
  }
}

export default WorkPage;