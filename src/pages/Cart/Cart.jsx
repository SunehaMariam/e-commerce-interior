import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopFilter from '../../components/ShopFilter/ShopFilter'
import ProductImages from '../../components/ProductImages/ProductImages'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ProductCard from '../../components/ProductCard/ProductCard'
import Shop1 from "../../assets/images/Shop1.png"
import Product2 from "../../assets/images/Product2.png"
import Shop3 from "../../assets/images/Shop3.png"
import Shop4 from "../../assets/images/Shop4.png"
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'

const Cart = () => {
  return (
    <>
    <Navbar/>
    <ShopFilter/>
    <ProductImages/>
    <ProductInfo/>
    <h1 className='related-pro-head'>Related Products</h1>
  <div className="products">
    
  <ProductCard
    image={Shop1}
      name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        oldPrice="Rp 3.500.000"
  />

  <ProductCard
    image={Product2}
  name="Leviosa"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
  />

  <ProductCard
    image={Shop3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
  />
     
  <ProductCard
    image={Shop4}
name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
  />
</div>
  <Button/>
  <Footer/>
  <Sidebar/>
    
    
    </>
  )
}

export default Cart
