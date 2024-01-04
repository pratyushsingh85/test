import React, { useState } from "react";
// import { flagIcon, locationIcon } from '../lib/Icon';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/header.css";
import { Product } from "./Product";
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
          <div className="pinCode mt-3">
            Map
            {/* {locationIcon} */}
          </div>
          <div className="pinCode mt-3">
            profile
            {/* {flagIcon} */}
          </div>
        </div>
      </div>

      {/* sub header */}

      <div className="d-flex grad1">
        <div>
          <span>logo</span>
        </div>
        <div>
          <span>GraentHomes</span>
          <p>this is paragraph</p>
        </div>
        <div>
          <input placeholder="search here" />
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>Offers</p>
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>Contact Us</p>
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>WishList</p>
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>Delivery</p>
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>Cart</p>
        </div>
        <div className="ms-3">
          <span>Icon</span>
          <p>Verify Report</p>
        </div>
        <div className="ms-5 mt-3">
          <span>Hi Pratyush Singh</span>
          <hr />
        </div>
      </div>

      {/* items names */}

      <div className="d-flex  justify-content-between align-items-center grad2">
        <span>NEW ARRIVALS</span>
        <span>RINGS</span>
        <span>BRACELTES</span>
        <span>EARRINGS</span>
        <span>DUMMY</span>
        <span>DEMO</span>
        <span>NEW TREND</span>
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
