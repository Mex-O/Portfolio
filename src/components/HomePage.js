import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home';

class HomePage extends React.Component{
  render(){
    return(
      <div>
      <NavBar />
      <Home />
      <Footer />
      </div>
    )
  }
}

export default HomePage;