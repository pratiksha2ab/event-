import React from 'react'
import ImageSlider from '../Components/carousel'
import Eventcard from '../Components/Card';
import Header from '../Components/Header';
import ContactUs from '../Components/contact-us';
import Footer from '../Components/Footer';






function Homepage() {
    
    
    return (
        <React.Fragment>
        
            <ImageSlider />
            <h2 style={{textAlign:'center'}}> Best Event Happening In Town </h2>
            <Eventcard />
            <ContactUs/>
            <Footer/>

        </React.Fragment>
    )
}

export default Homepage


