import React from 'react';
import footerComp from './footerComp.css';


const Footer = () => {
    return(
  <footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
      <div class="container">
        <div className="row">
          <div class="col-md-4">
            <div class="footer-pad">
              <ul class="list-unstyled">
                    <p>We are developers aspiring to 
                    combine coding with the Father..
                     </p>
                <li><a>About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div class="footer-pad">
             <img src="ChefLogo.png" alt=""></img>
             <br/>
             <br/>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="bst-links">
              <h4>Follow Bethel Tech</h4>
              <ul class="social-network social-circle">
                <li><a href="https://www.facebook.com/bethelschooloftechnology/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/company/bethel-school-of-technology/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2020 - &#60;CodeChefs&#47;&#62;. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  </footer>
    )}


    
  export default Footer;