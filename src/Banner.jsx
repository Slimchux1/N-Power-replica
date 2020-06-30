import React, { Component } from 'react';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Banner extends Component {
    
    render() { 
        return ( 
            <div className="Banner">
            <div className="banner-first">
               <h1 id="welcome-msg">
               Welcome to the<br />
                  N-Power Programme 
               </h1>
               <div id="border"></div>
               <p className="banner-first-msg">
               Decades of neglect on the right drivers of job creation has left a huge number
                      of our youths without the skill, job, or economic means to survive. 
                        President Muhammadu Buhari's led government is making deliberate efforts
                        to address this vacuum through various social intervention programmes.</p> <p className="banner-first-msg">
                        The COVID-19 pandemic has unravelled a number of challenges but it’s our duty as 
                        Government to intervene and support young people who are unable to find jobs and 
                        accelerate efforts to provide an enabling environment for businesses to create sustainable jobs.</p>
                        <p className="banner-first-msg">Everyone deserves an opportunity to rise no matter their circumstance, educational background or belief.
               </p>
            </div>
            <div className="banner-second">
            <p className="banner-second-msg">
                         Since inception, N-Power has trained over 500,000 beneficiaries in various vocational areas - farming,
                        agro-processing, financial literacy, communication, digital skills amongst a host of others.</p>
                        <p className="banner-second-msg"> About 109,823 beneficiaries have gone on to set up businesses within
                         their communities as a result of their training and time in the N-Power Programme. 
                         We are proud of the results so far and look forward to impacting even more Nigerians
                         as we commence efforts to register a new batch of beneficiaries.</p>
                      <p className="banner-second-msg"> My team and I at the Ministry are committed to this
                       programme and all efforts geared towards supporting the vulnerable. We are stronger
                     together and we will make it through these trying times.
                      </p>
            <div className="minister">
            <div className="coll1">
                     <h2 id="minister-name">Sadiya Umar Farouq</h2>
                       <p id="minister-title">HONOURABLE MINISTER</p>  
                        <p id="minister-content">Humanitarian Affairs, Disaster Management and Social Development
                         </p>
                     </div>
                   <div className="coll2">
                    <img id="content2-pic" src="https://res.cloudinary.com/chux/image/upload/v1593264524/minister_bq2ixl.jpg" alt="pics" />
                     </div>
            </div>
            </div>
                  
            </div>
         );
    }
}
 
export default Banner;