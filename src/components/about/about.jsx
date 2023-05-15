import React from 'react'
import './about.css'
import ME from '../../assets/me-7.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
             <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about_icon' />
               <h5>Experience</h5>
               <small>Not Yet</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about_icon' />
               <h5>Clients</h5>
               <small>Not Yet</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about_icon' />
               <h5>Projects</h5>
               <small>5 Completed</small>
            </article>
          </div>

              <p>Hello and welcome to my portfolio! I am an undergraduate software engineering student with a passion for coding and problem-solving. 
                Throughout my studies, I have developed proficiency in programming languages such as Java, Python, and JavaScript. 
                My focus is on web and mobile app development, where I have experience using frameworks such as React, Angular, and React Native.
              </p>
          
              <a href="#content" className='btn btn-primary'>Let's Talk</a>

        </div>

     </div>
    </section>
  )
}

export default about