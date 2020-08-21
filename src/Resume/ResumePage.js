import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Resume from './Resume';

function ResumePage(){
    return(
        <div>
            <NavBar />
            <Resume />
            <Footer />
            </div>
    )
}

export default ResumePage;