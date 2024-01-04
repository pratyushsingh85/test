import React from 'react'
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
          <div className="cards">
            <p>icon</p>
            <p>text</p>
          </div>
          <div className="cards">
            <p>icon</p>
            <p>text</p>
          </div>
          <div className="cards">
            <p>icon</p>
            <p>text</p>
          </div>
          <div className="cards">
            <p>icon</p>
            <p>text</p>
          </div>
        </div>
      </div>
      <ProductShip/>
</>
  )
}
