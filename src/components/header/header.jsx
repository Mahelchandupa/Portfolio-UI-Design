import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Model from 'react-3dmodelx';
import "@google/model-viewer";  
import Robo from '../../assets/RobotExpressive.glb'


const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahel Chandupa</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <model-viewer style={{ maxWidth: 400, width: '85%', height: 400,  margin: 'auto' }} src={Robo} camera-controls animation-name="Wave" autoplay>
         </model-viewer>

        </div>

        <a href="#" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header