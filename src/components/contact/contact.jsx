import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_io7prnc', 'template_q47gqfk', form.current, 'Pp9o8WixXKt1xlQdF')
      
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact_options">
          <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>Pasinduakalanka08@gmail.com</h5>
              <a href="" target='_blank'>Sned a message</a>
          </article>

          <article className='contact_option'>
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>pasindu</h5>
              <a href="" target='_blank'>Sned a message</a>
          </article>

          <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+785240365</h5>
              <a href="https://api.whatsapp.com/send?phone=+94785240365" target='_blank'>Sned a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="email" name="email" id="" placeholder='Your Email' required />
           <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact