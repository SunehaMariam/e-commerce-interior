
import React from 'react'
import "../ProductInfo/productInfo.css"
import Sofa from "../../assets/images/Sofa.png"
import { useLocation } from "react-router-dom"

const ProductInfo = () => {

  const location = useLocation();

  const product = location.state;

  return (
    <>

      <div className='Add-info'>

        <h2>Description</h2>

        <h3>Additinal information</h3>

        <h3>Reviews [5]</h3>

      </div>


      <div className='Add-info-para'>

        <p>
          Embodying the raw, wayward spirit of rock 'n' roll,
          the Kilburn portable active stereo speaker takes the
          unmistakable look and sound of Marshall, unplugs the
          chords, and takes the show on the road.
        </p>

        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight
          piece of vintage styled engineering. Setting the bar as
          one of the loudest speakers in its class, the Kilburn is
          a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a
          sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal
          preferences while the guitar-influenced leather strap
          enables easy and stylish travel.
        </p>

      </div>


      <div className='Add-info-Sofa'>

        <div className='Add-info-Box'>

          <img
            src={product?.image || Sofa}
            alt={product?.name || "Product"}
          />

        </div>


        <div className='Add-info-Box'>

          <img
            src={product?.image || Sofa}
            alt={product?.name || "Product"}
          />

        </div>

      </div>

    </>
  )
}


export default ProductInfo

