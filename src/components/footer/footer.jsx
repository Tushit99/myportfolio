import "./footer.css"
import React from 'react' 
import {FaFacebookF} from "react-icons/fa" 
import {FiInstagram} from "react-icons/fi" 
import {IoLogoTwitter} from "react-icons/io" 

export const Footer = () =>{
  return (
    <footer>
        <a href="#" className="footer_logo"> Tushit </a> 

        <ul className="permalinks">
            <li><a href="#"> Home </a></li>
            <li><a href="#about"> About </a></li>
            <li><a href="services"> Portfolio </a></li>
            <li><a href="#contact"> Contacts </a></li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.facebook.com/tushit.saxena/"> <FaFacebookF/> </a>  
          <a href="https://www.instagram.com/tushit_saxena"> <FiInstagram/> </a>  
          <a href="https://twitter.com/Tushit84308444"> <IoLogoTwitter/> </a>  
        </div>

        <div className="footer_copyright">
          <small>  </small>
        </div>

    </footer>
  )
}


// Nav/> 
// <Header/>  
// <About/>  
// <Language/> 
// <Portfolio/> 
// <Contact/>



