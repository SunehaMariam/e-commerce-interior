import React from 'react'
import hero from "../../assets/images/hero.png"
import '../Hero-section/Hero.css'
const Hero= () => {
  return (
   <>
   <img className='hero-image' src={hero} alt="" />
   <div className='box'>
    <div className='box-2'>
       <h4 className='text-1'>New Arrival</h4>
       <h1 className='text-2'>Discover Our <br/> New Collection</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button className='box-btn'>Buy now</button>
    </div>
   
   </div>
   </>
  )
}

export default Hero
