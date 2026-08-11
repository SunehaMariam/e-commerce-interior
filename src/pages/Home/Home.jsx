import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero-section/Hero'
import Category from '../../components/Category/Category'
// import ProductSection from "../../components/ProductSection/ProductSection"
import ProductCard from '../../components/ProductCard/ProductCard'
import Product1 from "../../assets/images/Product1.png"
import Product2 from "../../assets/images/Product2.png"
import Product3 from "../../assets/images/Product3.png"
import Product4 from "../../assets/images/Product4.png"
import "../Home/Home.css"
import Inspiration from '../../components/Inspiration/Inspiration'
import Furniture from '../../components/Furniture/Furniture'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
    
  <Navbar/>
  <Hero/>
  <Category/>
  {/* <ProductSection/> */}
  <h1 className='Pro-head'>Our products</h1>
  <div className='products'> <ProductCard
  id={1}
        image={Product1}
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        oldPrice="Rp 3.500.000"
        discount="30%"
      />
       <ProductCard
       id={2}
        image={Product2}
        name="Leviosa"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
      />
       <ProductCard
       id={3}
        image={Product3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
        discount="30%"
      />
       <ProductCard
       id={4}
        image={Product4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
          isNew={true}
      />
      </div>
        <div className='products'> <ProductCard
        id={1}
        image={Product1}
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        oldPrice="Rp 3.500.000"
          isNew={true}
      />
       <ProductCard
       id={2}
        image={Product2}
        name="Leviosa"
        description="Stylish cafe chair"
        price="Rp 2.500.000"

      />
       <ProductCard
       id={3}
        image={Product3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
        discount="30%"
      />
       <ProductCard
       id={4}
        image={Product4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
          isNew={true}
      />
      </div>
      <div className='pro-btn'>
    <button>Shop now</button></div>
    <Inspiration/>
    <Furniture/>
    
   <Footer/>   
  </>
 

  )
}

export default Home
