import React from 'react';
import './footerComp.css';


const Footer = () => {
    return(
  <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-pad">
              <ul className="list-unstyled">
                    <p>We are developers aspiring to 
                    combine coding with the Father..
                     </p>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="footer-pad">
             <img src="ChefLogo.png" alt="logo"></img>
             <br/>
             <br/>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="bst-links">
              <h4>Follow Bethel Tech</h4>
              <ul className="social-network social-circle">
                <li><a href="https://www.facebook.com/bethelschooloftechnology/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/company/bethel-school-of-technology/" className="icoLinkedin"  title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">&copy; Copyright 2020 - &#60;CodeChefs&#47;&#62;. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  </footer>
    )}


    
  export default Footer;