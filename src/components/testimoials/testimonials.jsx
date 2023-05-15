import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data =[
   {
    avatar: AVTR1,
    name: 'Jennifer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur beatae dignissimos eum vel minima reprehenderit molestias  repellat sequi eius repellendus hic cupiditate, pariatur, blanditiis exercitationem suscipit labore sapiente, ipsam quaerat!',
   },

   {
    avatar: AVTR2,
    name: 'Jennifer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur beatae dignissimos eum vel minima reprehenderit molestias  repellat sequi eius repellendus hic cupiditate, pariatur, blanditiis exercitationem suscipit labore sapiente, ipsam quaerat!',
   },

   {
    avatar: AVTR3,
    name: 'Jennifer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur beatae dignissimos eum vel minima reprehenderit molestias  repellat sequi eius repellendus hic cupiditate, pariatur, blanditiis exercitationem suscipit labore sapiente, ipsam quaerat!',
   },

   {
    avatar: AVTR4,
    name: 'Jennifer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur beatae dignissimos eum vel minima reprehenderit molestias  repellat sequi eius repellendus hic cupiditate, pariatur, blanditiis exercitationem suscipit labore sapiente, ipsam quaerat!',
   }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container" 
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{clickable: true}}
       >
       
         {
          data.map(({avatar, name, review}, index) =>{

             return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>  
             </SwiperSlide>
             )
          })
         }
        
      </Swiper>
    </section>
  )
}

export default testimonials