import React from 'react'
import "./testmonials.css"
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'



const data=[
  {
   avatar:AVTR1,
   name:'Tina Snow',
   review:'Lorem fadsfs fdsf fdsf dfdsaf fdsf fdsaf fasdf fdsaf dfdsaf  dsfdsf gg rth  rth trhfdsaf fdsf fsdaf'
  },
  {
    avatar:AVTR2,
    name:'Tina Snow',
    review:'Lorem fadsfs fdsf fdsf dfdsaf fdsf fdsaf fasdf fdsaf dfdsaf  dsfdsf gg rth  rth trhfdsaf fdsf fsdaf'
  },
  {
    avatar:AVTR3,
    name:'Tina Snow',
    review:'Lorem fadsfs fdsf fdsf dfdsaf fdsf fdsaf fasdf fdsaf dfdsaf  dsfdsf gg rth  rth trhfdsaf fdsf fsdaf'
  },
  {
    avatar:AVTR4,
    name:'Tina Snow',
    review:'Lorem fadsfs fdsf fdsf dfdsaf fdsf fdsaf fasdf fdsaf dfdsaf  dsfdsf gg rth  rth trhfdsaf fdsf fsdaf'
   }
]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <article article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='adsfd'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Testimonials