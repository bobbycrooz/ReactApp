import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons"

import React from 'react';
import { Link } from 'react-router-dom'



const About = () => {
    return (
        <div className="product product_mt">
           <h2>
             This app was created explicitly to practice React concept and APIs
             <h5>you can contact developer on:</h5>
             <div className="contact">
               <Link to="github" ><FontAwesomeIcon icon={faGithub} size="3x" className="c_icon" /></Link>
               <Link to="google.com" ><FontAwesomeIcon icon={faLinkedin} size="3x" className="c_icon" /></Link>
               <Link to="google.com" ><FontAwesomeIcon icon={faTwitter} size="3x" className="c_icon" /></Link>

             </div>
           </h2>

           
        </div>
    );
}
export default About;