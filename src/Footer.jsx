import React, { Component } from 'react';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
    
    render() { 
        return ( 
            <div id="footer">
           <div className="footer">
            <div className="about">
            <h2 className="foot-head">
                       About N-Power
            </h2>
                  <iframe title="npower" id="utube" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe>
            </div>
            <div className="navigation">
            <h2 className="foot-head">Navigation</h2>
                    <p>Home</p>
                  <p>About Us</p>
                   <p>Programme</p>
                   <p>Contact Us</p>
            </div>
            <div className="program">
            <h2 className="foot-head">Programme</h2>
        <p>N-POWER AGRO</p>
        <p>N-POWER TAX</p>
        <p>N-POWER BUILD</p>
        <p>N-POWER CREATIVE</p>
        <p>N-POWER HEALTH </p>
        <p>N-POWER TEACH</p>
        <p>N-POWER TECH HARDWARE</p>
        <p>N-POWER TECH SOFTWARE</p>
            </div>
            <div className="follow">
            <h2 className="foot-head">FOLLOW US</h2>
        <p>FACEBOOK</p>
        <p>TWITTER</p>
        <p>INSTAGRAM</p>
            </div> 
            </div>
            <div className="foot-line"></div>    
            <p className="foot-text"> &copy;copyright 2016 - 2017 N-Power - Empowering Nigerian Youth for Prosperity</p>
            
            </div>
         );
    }
}
 
export default Footer;