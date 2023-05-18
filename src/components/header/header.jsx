import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Model from 'react-3dmodelx';
import "@google/model-viewer";  
import Robo from '../../assets/RobotExpressive.glb'


const Header = () => {
  // const [roboRun, setroboRun] = useState('Wave')

  // const robostates = ['Wave','Runing', 'Stop']

  // const robowavestate = ()=>{
  //   let i = 0;
  //     for (i = 0; i < 3 ; i++) {
  //       setTimeout(() => {
  //        setroboRun(robostates[i])
  //       }, 5000);

  //       if(i=3){
  //         i=0;
  //       }
  //     }
      

  // }

  // useEffect(() => {
  //   robowavestate()
  // }, [])
  

  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahel Chandupa</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          {/* <img src={ME} alt="me" camera-controls/> */}
          <model-viewer style={{width: '100%',  margin: 'auto' }} className="robo" src={Robo}  animation-name="Wave"  autoplay>
         </model-viewer>

        </div>

        <a href="#" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header