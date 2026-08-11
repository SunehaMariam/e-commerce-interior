import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
  return (
<>
<div className='Footer'>
    <div>
        <h1>Funiro</h1>
        <p>400 University Drive Suite 200 Coral Gables,<br />
FL 33134 USA</p>
    </div>
    <div className='Footer-links'>
        <h2>Link</h2>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Products</li>
        <li>Contact</li>
    </div>
    <div  className='Footer-link'>
        <h2>Help</h2>
        <li>Payment Options</li>
        <li>Return</li>
        <li>Privacy policies</li>
       
    </div>
    <div className='newsletter'>
        <h2>Newsletter</h2>
        <input type="text" placeholder='Enter your email address' />
        <button>SUBSCRIBE</button>
    </div>
</div>
<footer className='copyright'>
    2023 furino. All rights reverved
</footer>


</>
  )
}

export default Footer
