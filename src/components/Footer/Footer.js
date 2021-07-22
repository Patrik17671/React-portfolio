import React from 'react';
import "./Footer.css";
import ig from "../../Images/instagram.svg";
import gh from "../../Images/github.svg";
import ln from "../../Images/linkedin.svg";
import gmail from "../../Images/gmail.svg";
import phone from "../../Images/phone-call.svg"

const Footer = () => {
    return (
        <>
           <footer>
               <div className="footer-container">
                   <ul className="footer-contact">
                       <li><img src={phone} alt="" height="30px"/>0903872083</li>
                       <li><img src={gmail} alt="" height="30px"/>patrik.spilka@gmail.com</li>
                   </ul>
                    <ul className="footer-links">
                       <li><a href="https://www.instagram.com/patrik_spilus/" target="_blank"><img src={ig} alt="" height="30px"/></a></li>
                       <li><a href="https://github.com/Patrik17671" target="_blank"><img src={gh} alt="" height="30px"/></a></li>
                       <li><a href="https://www.linkedin.com/in/patrik-spilka-7baaa320a/" target="_blank"><img src={ln} alt="" height="30px"/></a></li>
                   </ul>
               </div>
           </footer>
        </>
    );
};

export default Footer;
