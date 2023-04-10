import React from 'react'
import '../OurServices/ourservices.css'
import { Link } from 'react-router-dom'
import port from '../../assets/portfolio.jpg'
import {BiLinkExternal} from 'react-icons/bi'
const OurServices = () => {
    const data = [{name:"Website Design"},{name:"App Developement"},{name:"Responsive Web Design"},
    {name:"SEO"},{name:"Content Type"},{name:"DevOps"}

]
  return (
    <section className='portfolio'>
        <h2>Latest <span>Project</span></h2>
        <div className="portfolio-container">
            {
                data.map((el,i)=>(
                    <div className="portfolio-box" key={i}>
                    <img src={port} alt="" />
                    <div className="portfolio-layer">
                            <h4>{el.name}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur tempore dignissimos obcaecati, dolores veritatis, </p>
                            <Link className='link-external'> <BiLinkExternal className='icon'/> </Link>
                    </div>
                </div>
                ))
            }
          
        </div>

    </section>
  )
}

export default OurServices