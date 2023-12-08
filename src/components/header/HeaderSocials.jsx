import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/PasinduAR" target=''><FaGithub/></a>
        <a href="" target=''><FaDribbble/></a>

    </div>
  )
}

export default HeaderSocials