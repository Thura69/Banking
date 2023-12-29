import React, { useEffect } from 'react'
import Layout from '../Components/Layouts'
import HeroSection from '../Components/HeroSection'
import KBZMoneyAlerts from '../Components/KBZMoneyAlerts'


function Home() {


  useEffect(() => { });

  return (
      <Layout> 
          <HeroSection />  
          <KBZMoneyAlerts/>
      </Layout>
  )
}

export default Home