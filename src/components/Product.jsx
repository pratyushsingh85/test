import React from "react";
import "../components/header.css";
import { ProductInfo } from "./ProductInfo";
import Regalia from "../assets/Regalia_Diamond_Band_YA_2.png";
import { descRing, imgCircle } from "../assets/Icons";
export const Product = () => {
  return (
    <>
      <div className="d-flex gap-4">
        <div className="img-container">
          <img src={Regalia} alt="bracelet" />
          <div className="d-flex justify-content-between">
            <span className="item-card-icon ms-2">Trending</span>
            <span className="item-card-icon me-2">Trending</span>
          </div>
          <span className="circle-img">{imgCircle}</span>
          <span className="">{descRing}</span>
        </div>
        <div className="text-section">
          <div className="d-flex justify-content-between">
          <span>Dainty Crown Diamond Bond Ring</span>
          <div className="d-flex justify-content-end">
          <span>icon</span>
          <span>icon</span>
          </div>
          </div>
          <span>Floral shine that can Entice</span>
          <p>Rs. 34948 <strike>rs.36029</strike><span>Save rs.1,081</span></p>
          <span>MRP(Inclusive all Taxes)</span>
          <span className="ms-3">FLAT 3% on MRP</span>
        </div>
      </div>
      <ProductInfo />
    </>
  );
};
