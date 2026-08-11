import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../../components/Shop-hero/ShopHero'
import ContactPage from '../../components/ContactPage/ContactPage'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Banner from '../../components/Banner/BAnner'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <>
<Navbar/>
<ShopHero
title="Contact"
currpage="Contact"

/>
<ContactPage/>
<ContactInfo/>
<Banner/>
<Footer/>

</>
  )
}

export default Contact
