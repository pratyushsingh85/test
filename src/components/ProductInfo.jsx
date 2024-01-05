import React from 'react'
import { codIcon, exchangeIcon, hallmarkIcon, returnIcon } from '../assets/Icons';
import "../components/header.css";
import { ProductShip } from './ProductShip';

export const ProductInfo = () => {
  return (
    <>
    <div className="grad3 mt-2">
        <span>Product Informarion</span>
        <p>*Neck chaos dispalted is not part of the product</p>
        <div className="d-flex gap-3">
          <div>
            <p>Dimensions</p>
            <p>Width - 4.80 mm</p>
            <p>height - 5.80 mm</p>
            <p>Size - 4.80 mm</p>
            <p>Size - 132</p>
          </div>

          <div>
            <p>Weight</p>
            <p>Width - 4.80 mm</p>
            <p>height - 5.80 mm</p>
            <p>Size - 4.80 mm</p>
            <p>Size - 132</p>
          </div>
          <div>
            <p>Diamonds & Gemstones</p>
            <p>Width - 4.80 mm</p>
            <p>height - 5.80 mm</p>
            <p>Size - 4.80 mm</p>
            <p>Size - 132</p>
          </div>
          {/* <div className='d-flex  gap-5'> */}
          <div className="product-cards">
            <p className='mt-4'>{codIcon}</p>
            <p className='product-cards-text'>Cash On Delivery</p>
          </div>
          <div className="product-cards">
            <p className='mt-4'>{returnIcon}</p>
            <p className='product-cards-text'>7 Days Return</p>
          </div>
          <div className="product-cards">
            <p className='mt-4'>{exchangeIcon}</p>
            <p className='product-cards-text'>Lifetime Exchange</p>
          </div>
          <div className="product-cards">
            <p className='mt-4'>{hallmarkIcon}</p>
            <p className='product-cards-text'>BIS HAllmark</p>
          </div>
          {/* </div> */}
        </div>
      </div>
      <ProductShip/>
</>
  )
}
