import React from 'react'
import { Footer } from './Footer'
import "../components/header.css";

export const SimilarPeoducts = () => {
  return (
   <>
    <div className="d-flex justify-content-center align-items-center">
        <div>
          <p>100% Certified International</p>
          <p>we would love to meet</p>
          <div>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </div>

      {/* content  */}
      <div className="d-flex justify-content-between">
        <p>Similar Styles</p>
        <button>hello</button>
      </div>

      {/* similar card container */}

      <div className="d-flex gap-4">
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
        <div className="cards">
          <p>icon</p>
          <p>text</p>
        </div>
      </div>

      {/* another similar section */}
      <div className="d-flex justify-content-between">
        <p>Similar Styles</p>
        <button>hello</button>
      </div>

      {/* similar card container */}

      <div className="d-flex gap-4">
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
        <div className="cards">
          <p>icon</p>
          <p>text</p>
        </div>
      </div>
      <Footer/>
      </>
  )
}
