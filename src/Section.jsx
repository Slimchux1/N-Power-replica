import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Section extends Component {
    
    render() { 
        return ( 
            <div className="section">
            <div className="section-content">
            <h2 id="section-head">Applying for the N-Power Volunteer programme</h2>
            <p className="section-p"><span><img className="svg-logo"src="https://res.cloudinary.com/chux/image/upload/v1593366039/500_F_240021728_MSNV9J7ZcTzzItnKJOBwjuskhaXXNJZZ_mm3ywu.jpg" alt="" /></span>
            Get your unique 11 digit Bank Verification Number (BVN) from your bank 
            </p>
            <p className="section-p"><span><img className="svg-logo" src="https://res.cloudinary.com/chux/image/upload/v1593366039/500_F_240021728_MSNV9J7ZcTzzItnKJOBwjuskhaXXNJZZ_mm3ywu.jpg" alt="" /></span>
            Ensure you have your school certificates, valid means of identification, 
            and NYSC Certificate. 
            </p>
            <p className="section-p"><span><img className="svg-logo" src="https://res.cloudinary.com/chux/image/upload/v1593366039/500_F_240021728_MSNV9J7ZcTzzItnKJOBwjuskhaXXNJZZ_mm3ywu.jpg" alt="" /></span>
            Disclaimer: Picking a programme is not a guarnatee that you will be selected for it 
            </p>
            <p className="section-p"><span><img className="svg-logo" src="https://res.cloudinary.com/chux/image/upload/v1593366039/500_F_240021728_MSNV9J7ZcTzzItnKJOBwjuskhaXXNJZZ_mm3ywu.jpg" alt="" /></span>
            N-Power application is FREE and you should pay no one to apply 
            </p>
            <p className="section-p"><span><img className="svg-logo" src="https://res.cloudinary.com/chux/image/upload/v1593366039/500_F_240021728_MSNV9J7ZcTzzItnKJOBwjuskhaXXNJZZ_mm3ywu.jpg" alt="" /></span>
            N-Power is a tenured programme and you will exit after the duration of the programme
            </p>
            <form>
            <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        I agree
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-light">Apply for N-Power</button>
</form>
            </div>
            <div className="section-pic">
            <img id="plenty-people" src="https://res.cloudinary.com/chux/image/upload/v1593264511/image_fs2tub.jpg" alt="" />
            </div>

            </div>
         );
    }
}
 
export default Section;