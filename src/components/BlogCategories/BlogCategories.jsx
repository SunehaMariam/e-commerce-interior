import React from 'react'
import "../BlogCategories/BlogCategories.css"
const BlogCategories = ({ image, title, date }) => {
  return (
   <>
    <div className="blog-right">

         <div className="search-box">
  <input type="text" placeholder="" />
  <i className="fa-solid fa-magnifying-glass search-icon"></i>
</div>

          <div className="categories">

            <h3>Categories</h3>

            <div className="category">
              <span>Crafts</span>
              <span>2</span>
            </div>

            <div className="category">
              <span>Design</span>
              <span>8</span>
            </div>

            <div className="category">
              <span>Handmade</span>
              <span>7</span>
            </div>

            <div className="category">
              <span>Interior</span>
              <span>1</span>
            </div>

            <div className="category">
              <span>Wood</span>
              <span>6</span>
            </div>

          </div>
</div>
      
   
   
   </>
  )
}

export default BlogCategories
