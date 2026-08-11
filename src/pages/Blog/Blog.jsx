import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../../components/Shop-hero/ShopHero'
import Blogs from '../../components/Blogs/Blogs'
import BlogCategories from '../../components/BlogCategories/BlogCategories'
import RecentPost from '../../components/RecentPost/RecentPost'
import Pagination from "../../components/Pagination/Pagination"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner"
import BlogPro1 from "../../assets/images/BlogPro1.png"
import BlogPro2 from "../../assets/images/BlogPro2.png"
import BlogPro3 from "../../assets/images/BlogPro3.png"
import BlogPro4 from "../../assets/images/BlogPro4.png"
import BlogPro5 from "../../assets/images/BlogPro5.png"

import "../../components/Blogs/Blogs.css"

const Blog = () => {
  return (
    <>
      <Navbar />
      <ShopHero title="Blog" currpage="Blog" />

      <div className="blog-page">

        {/* Left Side */}
        <div className="blog-left">
          <Blogs Heading="Handmade pieces that took time to make" />
          <Blogs Heading="Exploring new ways of decorating" />
          <Blogs Heading="Going all-in with millennial design" />
        </div>

        {/* Right Side */}
        <div className="blog-right">
          <BlogCategories />

          <RecentPost
            image={BlogPro1}
            title="Going all-in with millennial design"
            date="03 Aug 2022"
          />

          <RecentPost
            image={BlogPro2}
            title="Exploring new ways of decorating"
            date="03 Aug 2022"
          />

          <RecentPost
            image={BlogPro3}
            title="Handmade pieces that took time to make"
            date="03 Aug 2022"
          />

          <RecentPost
            image={BlogPro4}
            title="Modern home in Milan"
            date="03 Aug 2022"
          />

          <RecentPost
            image={BlogPro5}
            title="Colorful office redesign"
            date="03 Aug 2022"
          />
        </div>
        </div>
        <Pagination/>
        <Banner/>
        <Footer/>
    </>
  );
};

export default Blog;