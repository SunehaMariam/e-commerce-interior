import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Product from './pages/Products/Product'
// import ProductImages from './components/ProductImages/ProductImages'
import Cart from './pages/Cart/Cart'
import Compare from './pages/CompareProduct/Compare'
import CartMain from "./pages/CartMain/CartMain"
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
const App = () => {
  return (
    <>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        {/* <Route path="" element={<ProductImages />} /> */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/cartmain" element={<CartMain/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
         </Routes>
  </>
  )
}

export default App
