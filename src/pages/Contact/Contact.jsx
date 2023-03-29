import React from 'react'
import Layout from '../../layout/Layout'
import '../Contact/contact.css'
import { Link } from 'react-router-dom';
import '../../home/Banner/banner.css'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import BannerScreen from '../../home/Banner/BannerScreen';
const Contact = () => {
    const data = ['1','2','3','4']
  return (
    <Layout>
        <section className='contact'>
            <div className="contact-container">
                {
                    data.map((el,i)=>(
                        <div className="contact-box" key={i}>
                        <BsTelephone className='icon-1'/>
                        <h2>Phone Number</h2>
                        <p>234-9876-5400</p>
                         <p>888-0123-4567 (Toll Free)</p>
                      </div>
                    ))
                }
            </div>
            <div className="contact-form">
                <div className="contact-body">
                <form>
                    <div className="contact-input-box">
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="contact-input-box">
                        <label htmlFor="name">Name</label> <br />
                        <input type="name" name="name" id="" /> <br />
                    </div>
                    <div className="contact-input-box">
                        <label htmlFor="number">Mobile Number</label> <br />
                        <input type="number" name="number" id="" />
                    </div>
                    <div className="contact-input-box">
                        <label htmlFor="message">Message</label> <br />
                        <textarea type="text" name="message" id="" />
                    </div>
                    <div className="contact-btn">
                    <button type='submit' className='cv-btn'>Submit</button>
                    </div>
                </form>
                </div>
                <div className="contact-para">
                    <h2>Get in touch</h2>
                    <p className='para-one'>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</p>
                    <p className='para-two'>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                    <div className="social-media">
      <Link to="#" > <BsFacebook className='icon'/> </Link>
      <Link to="#" > <BsTwitter className='icon'/> </Link>
      <Link to="#" > <BsLinkedin className='icon'/> </Link>
      <Link to="#"> <BsInstagram className='icon'/> </Link>
     </div>
                </div>
            </div>
            <div className="box"></div>
            {/* <div className="">
          <input type="checkbox" name="" id="animation"/>
          <label htmlFor="animation" style={{color:"#fff"}}></label>
          <div className="match" role="img" aria-label='A drawing of a match burning'></div>
            </div> */}
        </section>
    </Layout>
  )
}

export default Contact