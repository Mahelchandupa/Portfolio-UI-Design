import React from 'react'
import './about.css'
import ME from '../../assets/me-pasindu.jpg'
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
              <small>Not Yet</small>
            </article>
          </div>

          <p>Hello and welcome to my portfolio! I am an Aspiring software engineer and full-stack developer skilled in Java, JavaScript, and Python.
            Experienced in React. Committed to delivering quality solutions, I thrive in collaborative, dynamic environments. Eager to contribute my skills to innovative projects and embrace new challenges.
          </p>

          <a href="#content" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default about