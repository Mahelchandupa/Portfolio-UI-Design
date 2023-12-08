import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
   {
    id: 1,
    image: IMG1,
    title: 'Fashion Land Online Store',
    github: 'https://github.com/PasinduAR/Fashion-Land-Online-Store',
    demo: 'https://github.com/PasinduAR/Fashion-Land-Online-Store'
   },

   {
    id: 2,
    image: IMG2,
    title: 'Games Management System',
    github: 'https://github.com/PasinduAR/Games-Management-System',
    demo: 'https://github.com/PasinduAR/Games-Management-System'
   },

   {
    id: 3,
    image: IMG3,
    title: 'Employee Details Management System',
    github: 'https://github.com/PasinduAR/Employee-Details-Management-Crud',
    demo: 'https://github.com/PasinduAR/Employee-Details-Management-Crud'
   },

   {
    id: 4,
    image: IMG4,
    title: 'Barber Shop Web Site',
    github: 'https://github.com/PasinduAR/Barber-Shop-Web-Site',
    demo: 'https://github.com/PasinduAR/Barber-Shop-Web-Site'
   }
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