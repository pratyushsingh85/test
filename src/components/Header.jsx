import React, { useState } from "react";
// import { flagIcon, locationIcon } from '../lib/Icon';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/header.css";
import { Product } from "./Product";
import { cart, contact, delivery, logo, mapIcon, offers, verifyReport, wishlist} from "../assets/Icons";
// import { useState } from "react";

// import '../components/header.css'
function Header() {
 
  return (
    <>
      {/* upper header */}

      <div className="d-flex justify-content-around align-items-center px-5 gap-3  grad">
        <div>
          <p className="mt-2 mid-text">
            Refer and earn extra discount <a href="#">Click here...</a>
          </p>
        </div>
        <div className="d-flex gap-4">
          <p className="pinCode mt-3">Pincode</p>
          <div className="map mt-2">
           {mapIcon}
            {/* {locationIcon} */}
          </div>
          <div className="profile mt-3">
           {/* {profileIcon} */}
            {/* {flagIcon} */}
          </div>
        </div>
      </div>

      {/* sub header */}

      <div className="d-flex grad1">
        <div>
          <span className="logo">{logo}</span>
        </div>
        <div>
          <span className="logo-text">GARNET LANEE</span>
          <p className="sub-text">Dazzling you Today, Tomorrow & Forever</p>
        </div>
        <div> 
          <input className="search" placeholder="search Products" />
        </div>
        <div className="ms-3">
          <span className="offer-icon">{offers}</span>
          <p className="offer-text">OFFERS</p>
        </div>
        <div className="ms-3">
          <span className="contact-icon">{contact}</span>
          <p className="contact-text">CONTACT US</p>
        </div>
        <div className="ms-3">
          <span className="wishlist">{wishlist}</span>
          <p className="wishlist-text">WISHLIST</p>
        </div>
        <div className="ms-3">
          <span className="delivery">{delivery}</span>
          <p className="delivery-text">DELIVERY</p>
        </div>
        <div className="ms-3">
          <span className="cart" >{cart}</span>
          <p className="delivery-text">Cart</p>
        </div>
        <div className="ms-3">
          <span className="verify">{verifyReport}</span>
          <p className="delivery-text">VERIFY REPORT</p>
        </div>
        <div className="ms-5 mt-3">
          <span className="username">Hi, Pratyush Singh</span>
          <hr />
        </div>
      </div>

      {/* items names */}

      <div className="d-flex  justify-content-between align-items-center grad2">
        <span>NEW ARRIVALS</span>
        <span>RINGS</span>
        <span>BRACELTES</span>
        <span>EARRINGS</span>
        <span>PENDANTS</span>
        <span>BRACELETS & BANGLES</span>
        <span>SOLITIARES</span>
        <span>GOLD COINS</span>
        <span>ALL JEWELLERY</span>
      </div>
<Product/>
      {/* image and another section */}


      {/* product infoooo */}

 

      {/* here new sector hr */}

     

    

      {/* social media section */}

     

      {/* footer start here */}


    </>
  );
}

export default Header;
