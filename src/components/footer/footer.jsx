import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PASINDU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/pasindu-akalanka"><FaLinkedinIn/></a>
        <a href=""><FiInstagram/></a>
        <a href="https://github.com/PasinduAR"><FaGithub/></a>
      </div>
 
      <div className="footer_copyright">
        <small>&copy; Pasindu Akalanka. All rights reserved.</small>
      </div>

    </footer>  
  )
}

export default footer