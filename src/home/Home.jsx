import React from 'react'
import Layout from '../layout/Layout'
import BannerScreen from './Banner/BannerScreen'
import Portfolio from './portfolio/Portfolio'

const Home = () => {
  return (
    <>
<Layout>
<BannerScreen/>
<Portfolio/>
</Layout>
   
   
    </>
  )
}

export default Home