import React, { useState } from 'react'
import Layout from '../layout/Layout'

const About = () => {
  const [user,setUser] = useState()
  const handleChange=()=>{
    
  }
  return (
    <Layout>
        <section>
        <div className="stack-container">
          <div className="stack-input-box">
            <input type="text" name="" id="" onChange={handleChange}/>
            <button>Add</button>
          </div>
          <div className="container">
         
          </div>
        </div>
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