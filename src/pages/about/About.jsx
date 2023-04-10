import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import '../about/about.css'
const About = () => {
  const [user,setUser] = useState()
  const handleChange=()=>{
    
  }
  return (
    <Layout>
  <section>
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
      </div>
      <div className="about-img"></div>
    </div>
  {/* <div class="turtle">
  <div class="head"></div>
  <div class="tail"></div>
  <div class="foot front"></div>
  <div class="foot back"></div>
</div> */}
     {/* <div className='wrapper'>
      <div className='thred'></div>
      <div className='thred-1'></div>
  <div className="wrapper-body">
  <div className='wrapper-content'> 
  </div>
  <div className='wrapper-content'>
  </div>
     </div>
     <div className="wrapper-body-2">
  <div className='wrapper-content'> 
  </div>
  <div className='wrapper-content'>
  </div>
     </div>
     <div className="content">
   <p>  plant for tree</p>
     </div>
  </div> */}
   </section>
    </Layout>
  )
}

export default About