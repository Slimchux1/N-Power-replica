import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
  
    render() { 
        return ( 
            <div id="nav-bar-align">
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="k"><img id="logo" src="https://res.cloudinary.com/chux/image/upload/v1593264510/np_b8gsyk.png" alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="j">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kk">PROGRAMMES</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
            
         );
    }
}
 
export default Navbar;