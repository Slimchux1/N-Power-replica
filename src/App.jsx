import React, { Component } from 'react';
import Navbar from './Navbar'
import Section from './Section'
import Footer from './Footer'
import Banner from './Banner'


class App extends Component {
    render() { 
        return ( 
            <div className="fullscreen" id="fullscreen"> 
                <Navbar />
                <Banner />
                <Section />
                <Footer /> 
            </div>
         );
    }
}
 
export default App;