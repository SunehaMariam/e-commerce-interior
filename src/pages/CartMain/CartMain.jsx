import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../../components/Shop-hero/ShopHero'
import CartPage from '../../components/CartPage/CartPage'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

const CartMain = () => {
  return (
    <>
    <Navbar/>
    <ShopHero 
title="Cart"
currpage="Cart"
/>
    
    <CartPage/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default CartMain
