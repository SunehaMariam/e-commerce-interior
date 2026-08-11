import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ShopHero from '../../components/Shop-hero/ShopHero'
import ShopFilter from '../../components/ShopFilter/ShopFilter'
import ProductCard from "../../components/ProductCard/ProductCard"
import Shop1 from "../../assets/images/Shop1.png"
import Product2 from "../../assets/images/Product2.png"
import Shop3 from "../../assets/images/Shop3.png"
import Shop4 from "../../assets/images/Shop4.png"
import Pagination from '../../components/Pagination/Pagination'
import Banner from '../../components/Banner/BAnner'
import Footer from '../../components/Footer/Footer'
const Shop = ({title,currpage}) => {
  return (
   <>
<Navbar/>
<ShopHero 
title="Shop"
currpage="Shop"
/>

<ShopFilter/>
<div className="products">
  <ProductCard
        id={1}
        image={Shop1}
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
        isNew={true}
      />


      <ProductCard
        id={3}
        image={Shop3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
      />


      <ProductCard
        id={4}
        image={Shop4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
        isNew={true}
      />
</div>
{/* 2nd row */}
<div className="products">
 <ProductCard
        id={1}
        image={Shop1}
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
        isNew={true}
      />


      <ProductCard
        id={3}
        image={Shop3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
      />


      <ProductCard
        id={4}
        image={Shop4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
        isNew={true}
      />
</div>

{/* 3rd row */}
<div className="products">
  <ProductCard
        id={1}
        image={Shop1}
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
        isNew={true}
      />


      <ProductCard
        id={3}
        image={Shop3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
      />


      <ProductCard
        id={4}
        image={Shop4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
        isNew={true}
      />
</div>

{/* 4th row */}
<div className="products">
  <ProductCard
        id={1}
        image={Shop1}
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
        isNew={true}
      />


      <ProductCard
        id={3}
        image={Shop3}
        name="Lolito"
        description="Luxury big sofa"
        price="Rp 7.000.000"
        oldPrice="Rp 14.000.000"
      />


      <ProductCard
        id={4}
        image={Shop4}
        name="Respira"
        description="Outdoor bar table and stool"
        price="Rp 500.000"
        isNew={true}
      />
  
</div>
<Pagination/>
<Banner/>
<Footer/>
   </>
  )
}

export default Shop
