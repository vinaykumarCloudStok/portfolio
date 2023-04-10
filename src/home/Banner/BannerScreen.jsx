import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';
import '../Banner/banner.css'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'
const BannerScreen = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Youtuber", "Blogger", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
 
  return (
    <>
    <section className='home'>
<Fade top big>
<div className="home-content">
  <h3>Hello, It's Me</h3>
  <h1>Vinay Kumar</h1>
  <h3>And I'm a  <span ref={el}></span></h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sequi quo veniam eius,
     officia atque <br /> beatae consequatur laboriosam repellendus recusandae
     culpa doloremque voluptatibus, iure sapiente, <br /> labore nam esse tenetur vel.</p>
     <div className="social-media">
      <Link to="#" > <BsFacebook className='icon'/> </Link>
      <Link to="#" > <BsTwitter className='icon'/> </Link>
      <Link to="#" > <BsLinkedin className='icon'/> </Link>
      <Link to="#"> <BsInstagram className='icon'/> </Link>
     </div>
     <Link className='cv-btn'> Download CV </Link>
</div>

<div className="home-img">
  <div className="border-img"></div>
</div>
</Fade>
    </section>
    </>
  )
}

export default BannerScreen