import React from 'react'
import Hero from '../Components/components/Franklin/Hero'
import SalesPanel from '../Components/components/Segun/SalesPanel'
import ThirdComp from '../Components/components/Richard/ThirdComp'
import Props from '../Components/components/Richard/Props'
import SpecialOffer from '../Components/components/Wiiliams/SpecialOffer'
import Customer from '../Components/components/Wiiliams/Customer'
import PlaceHolder from '../Components/components/Akin/PlaceHolder'

const LandingScreen = () => {
  return (
    <div>
      <Hero />
      <SalesPanel />
      <ThirdComp />
      <Props />
      <SpecialOffer />
      <Customer />
      <PlaceHolder />
    </div>
  )
}

export default LandingScreen
