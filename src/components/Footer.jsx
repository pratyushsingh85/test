import React from 'react'
import "../components/header.css";
import { gold, payment, finance, digital, assurance } from '../assets/Icons';

export const Footer = () => {
  return (
    <>
          <div className="d-flex  footer-container">
            <div className='d-flex  mt-5 gap-5'>
        <div >
          <h6 className='footer-heading'>Our Services</h6>
          <div>
            <span>{gold}</span>
            <span className='f-text ms-2'>GOLD RATES</span>
          </div>
          <div>
            <span >{payment}</span>
            <span className='f-text ms-2'>DIGITAL GOLD</span>
          </div>
          <div>
            <span>{digital}</span>
            <span className='f-text ms-2'>VARIOUS PAYMENT METHOD</span>
          </div>
          <div>
            <span>{finance}</span>
            <span className='f-text ms-2'>FINANCING OPTIONS</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>GARNET LANEE ASSURANCE</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>FRANCHISE ENQUIRY</span>
          </div>
        </div>
        <div>
          <h6 className='footer-heading'>Our Policies</h6>
          <div>
            <span>{gold}</span>
            <span className='f-text ms-2'>GOLD RATES</span>
          </div>
          <div>
            <span>{payment}</span>
            <span className='f-text ms-2'>DIGITAL GOLD</span>
          </div>
          <div>
            <span>{digital}</span>
            <span className='f-text ms-2'>VARIOUS PAYMENT METHOD</span>
          </div>
          <div>
            <span>{finance}</span>
            <span className='f-text ms-2'>FINANCING OPTIONS</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>GARNET LANEE ASSURANCE</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>FRANCHISE ENQUIRY</span>
          </div>
        </div>
        <div>
          <h6 className='footer-heading'>Jewellery Knowledge</h6>
          <div>
            <span>{gold}</span>
            <span className='f-text ms-2'>GOLD RATES</span>
          </div>
          <div>
            <span>{payment}</span>
            <span className='f-text ms-2'>DIGITAL GOLD</span>
          </div>
          <div>
            <span>{digital}</span>
            <span className='f-text ms-2'>VARIOUS PAYMENT METHOD</span>
          </div>
          <div>
            <span>{finance}</span>
            <span className='f-text ms-2'>FINANCING OPTIONS</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>GARNET LANEE ASSURANCE</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>FRANCHISE ENQUIRY</span>
          </div>
        </div>
        <div>
          <h6 className='footer-heading'>About Us</h6>
          <div>
            <span>{gold}</span>
            <span className='f-text ms-2'>GOLD RATES</span>
          </div>
          <div>
            <span>{payment}</span>
            <span className='f-text ms-2'>DIGITAL GOLD</span>
          </div>
          <div>
            <span>{digital}</span>
            <span className='f-text ms-2'>VARIOUS PAYMENT METHOD</span>
          </div>
          <div>
            <span>{finance}</span>
            <span className='f-text ms-2'>FINANCING OPTIONS</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>GARNET LANEE ASSURANCE</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>FRANCHISE ENQUIRY</span>
          </div>
        </div>
        <div>
          <h6 className='footer-heading'>Get in touch</h6>
          <div>
            <span>{gold}</span>
            <span className='f-text ms-2'>GOLD RATES</span>
          </div>
          <div>
            <span>{payment}</span>
            <span className='f-text ms-2'>DIGITAL GOLD</span>
          </div>
          <div>
            <span>{digital}</span>
            <span className='f-text ms-2'>VARIOUS PAYMENT METHOD</span>
          </div>
          <div>
            <span>{finance}</span>
            <span className='f-text ms-2'>FINANCING OPTIONS</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>GARNET LANEE ASSURANCE</span>
          </div>
          <div>
            <span>{assurance}</span>
            <span className='f-text ms-2'>FRANCHISE ENQUIRY</span>
          </div>
        </div>
        </div>
      </div>

      {/* footer text */}

      <div className="d-flex justify-content-around align-items-center px-5 gap-3  footer">
        <p className="text-align-center mt-3">
          Refer and earn extra discount <a href="#">Click here...</a>
        </p>
      </div>
    </>
  )
}
