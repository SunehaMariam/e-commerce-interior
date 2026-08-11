import React from 'react'
import Blog1 from "../../assets/images/Blog1.png"
import "../Blogs/Blogs.css"

const Blogs = ({Heading}) => {
  return (
    <>

      <div className="blogs">

        <div className="blog-left">

          <img src={Blog1} alt="" className="blog-image" />

          <div className="blog-meta">
              <span>
    <i className="fa-solid fa-user"></i>
    Admin
  </span>
          <span>
    <i className="fa-solid fa-calendar-days"></i>
    14 Oct 2022
  </span>

  <span>
    <i className="fa-solid fa-tag"></i>
    Wood
  </span>
          </div>

          <h2>{Heading}</h2>

          <p className="blog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc.
            In nulla posuere sollicitudin aliquam ultrices.
          </p>

          <button className="read-btn">
            Read more
          </button>

        </div>


      </div>

    </>
  )
}

export default Blogs