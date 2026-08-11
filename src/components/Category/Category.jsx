import React from 'react'
import "../Category/Category.css"
import categoryImage1 from "../../assets/images/categoryImage1.png"
import categoryImage2 from "../../assets/images/categoryImage2.png"
import categoryImage3 from "../../assets/images/categoryImage3.png"
const Category = () => {
  return (
  <>
  <div className='Category-head'>
    <h1>
        Browse your Range 
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  </div>
  <div className='Category-images'>
  <div className='Category-image'>
    <img src={categoryImage1} alt="categoryImage1" />
    <h3>Dinning</h3>
  </div>
    <div className='Category-image'>
    <img src={categoryImage2} alt="categoryImage2" />
    <h3>Living</h3>
  </div>

  <div className='Category-image'>
    <img src={categoryImage3} alt="categoryImage3" />
    <h3>Bedroom</h3>
  </div>  </div>
  
  
  
  </>
  )
}

export default Category
