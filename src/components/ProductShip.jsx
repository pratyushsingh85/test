import React, {useState} from 'react'
import "../components/header.css";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { SimilarPeoducts } from './SimilarPeoducts';

export const ProductShip = () => {

    const [activeMenu, setActiveMenu] = useState("Bis HallMark");
    const menuIcon = (menu) => {
      setActiveMenu(menu);
    };

  return (
    <>
    <hr className="mt-3" />
    <span>icon</span>
    <span>Ready to ship</span>
    <div className="d-flex justify-content-between">
      <div>
        <p className="ms-4">
          Select any of the combination. if you looking for a fast Delivery
        </p>
        <div className="d-flex gap-3">
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
      <div>
        <span>more 18</span>
        <span>View</span>
        <div className="d-flex">
          <p>ring</p>
          <p>rins</p>
          <p>rih</p>
        </div>
        <span>More Yellow</span>
        <span>View All</span>
        <p>rings</p>
      </div>
    </div>
    <hr className="mt-3" />
      {/* table components */}

      <div>
        <p>Table here</p>
      </div>

      {/* nav pills */}
      <div className="d-flex">
        <Nav fill pills>
          <NavItem>
            <NavLink
              onClick={() => {
                menuIcon("Bis HallMark");
              }}
              active={activeMenu === "Bis HallMark"}
            >
              Bis Hallmark
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                menuIcon("IGI");
              }}
              active={activeMenu === "IGI"}
            >
              IGI
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                menuIcon("SGL");
              }}
              active={activeMenu === "SGL"}
            >
              SGL
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <SimilarPeoducts/>
    </>
  )
}
