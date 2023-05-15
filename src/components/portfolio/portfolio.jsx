import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/game-distribution.webp'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
   {
    id: 1,
    image: IMG1,
    title: 'Game Distribution Platform',
    github: 'https://github.com/Mahelchandupa/Game-Distribution-Platform.git',
    demo: 'https://github.com'
   },

   {
    id: 2,
    image: IMG2,
    title: 'Hospital Queue Managment',
    github: 'https://github.com/Mahelchandupa/University-Managment-System.git',
    demo: 'https://github.com'
   },

   {
    id: 3,
    image: IMG3,
    title: 'University Managment',
    github: 'https://github.com/Mahelchandupa/University-Managment-System.git',
    demo: 'https://github.com'
   },

   {
    id: 4,
    image: IMG4,
    title: 'CRUD Application',
    github: 'https://github.com/Mahelchandupa/EAD2-CW-2.git',
    demo: 'https://github.com'
   }
   //,

  //  {
  //   id: 5,
  //   image: IMG5,
  //   title: 'CRUD Application',
  //   github: 'https://github.com/Mahelchandupa/EAD2-CW-2.git',
  //   demo: 'https://github.com'
  //  },

  //  {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Game Distribution Platform',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  //  }

]


const portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My React Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio_container">
         
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='portfolio_item'>
                    <div className="portfolio_item-image">
                       <img src={image} alt="" />
                    </div>
               <h3>{title}</h3>
               <div className='portfolio_item-cta'>
                 <a href={github} className='btn' target='_blank'>Github</a>
                 <a href={demo} className='btn btn-primary' target='_blank'>Live</a>
               </div>
          </article>
              )
            })
          }

       </div>
    </section>
  )
}

export default portfolio