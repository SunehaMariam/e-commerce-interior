import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../../components/Shop-hero/ShopHero'
import ProductCompare from '../../components/ProductCompare/ProductCompare'
import ListItems from '../../components/ListItems/ListItems'
import "../../components/ListItems/ListItems.css"
import  Banner from "../../components/Banner/Banner"
import Footer from '../../components/Footer/Footer'
const Compare = ({title,currpage}) => {
  return (
  <>
 <Navbar/>
<ShopHero 
title="Product Comparison "
currpage="Comparison"
/>
<ProductCompare/>
 <ListItems
        title="General"
        labels={[
          "Sales Package",
          "Model Number",
          "Secondary Material",
          "Configuration",
          "Upholstery Material",
          "Upholstery Color",
        ]}
        product1={[
          "1 sectional sofa",
          "TFCBLIGRBL6SRHS",
          "Solid Wood",
          "L-Shaped",
          "Fabric + Cotton",
          "Bright Grey and Lion",
        ]}
        product2={[
          "1 Three Seater, 2 Single Seater",
          "DTUBLIGRBL568",
          "Solid Wood",
          "L-Shaped",
          "Fabric + Cotton",
          "Bright Grey and Lion",
        ]}
      />

      <ListItems
        title="Product"
        labels={[
          "Filling Material",
          "Finish Type",
          "Adjustable Headrest",
          "Maximum Load Capacity",
          "Origin of Manufacture",
        ]}
        product1={[
          "Foam",
          "Bright Grey & Lion",
          "No",
          "280 KG",
          "India",
        ]}
        product2={[
          "Matter",
          "Bright Grey & Lion",
          "Yes",
          "300 KG",
          "India",
        ]}
      />
      <ListItems
  title="Warranty"
  labels={[
    "Warranty Summary",
    "Warranty Service Type",
    "Covered in Warranty",
    "Not Covered in Warranty",
    "Domestic Warranty",
    ""
  ]}
  product1={[
    "1 Year Manufacturing Warranty",
    "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
    "Warranty Against Manufacturing Defect",
    "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    "1 Year",
    <button className="compare-btn">Add To Cart</button>
  ]}
  product2={[
    "1.2 Year Manufacturing Warranty",
    "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
    "Warranty of the product is limited to manufacturing defects only.",
    "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    "3 Months",
    <button className="compare-btn">Add To Cart</button>
  ]}
/>
<Banner/>
<Footer/>
  </>
  )
}

export default Compare
