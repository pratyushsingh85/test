import React, {useState, useMemo} from 'react'
import "../components/header.css";
// import { Nav, NavItem, NavLink } from "react-bootstrap";
import { SimilarPeoducts } from './SimilarPeoducts';
import Nav from 'react-bootstrap/Nav';
import DataTable from 'react-data-table-component';
import { roseGold, shipBtn, siIcon, sizeIcon } from '../assets/Icons';

export const ProductShip = () => {


    const [activeKey, setActiveKey] = useState("link");
  
    const handleTabClick = (key) => {
      setActiveKey(key);
    };

    const columns = useMemo(
      () => [
        {
          name: "emp_id",
          sortable: true,
          width: "10%",
          cell: ({ emp_id }) => <p>start</p>,
        },
        {
          name: "fullName ",
          sortable: true,
          width: "12%",
          cell: ({ fullName}) => <p>pendat</p>,
        },
        {
          name: "order_status",
          sortable: true,
          width: "12%",
          cell: ({ order_status }) => <p>bracelet</p>,
        },
        {
          name: "bill_status",
          sortable: true,
          width: "10%",
          cell: ({ bill_status }) => <p>rings</p>,
        },
        {
          name: "item_name",
          sortable: true,  
          width: "15%",
          cell: ({ order_rec }) => (
            <div>
             item
            </div>
          )
        },
        {
          name:"item_price",
          sortable: true,
          width:"10%",
          cell: ({ order_rec }) => (
            <div>
              product
            </div>
          )
        },
        {
          name:"item_quantity",
          sortable: true,
          width:"15%",
          cell: ({ order_rec }) => (
            <div>
             list
            </div>
          )
        },
        {
          name: "totalBalance",
          sortable: true,
          width: "15%",
          cell: ({ totalBalance }) => <p>itemname</p>,
        },
      ],
      []);
    

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
          <div className="ship-cards">
            <div className='mt-3'>
          <span className='ms-4'>{roseGold}</span>
          <span className='ms-2'> Rose Gold</span>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{siIcon}</span>
          <span className='ms-2'>iJ-Sl</span><br/>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{sizeIcon}</span>
          <span className='ms-2'>Size</span>
          </div>
          <div className='mt-3'>
          <p>{shipBtn}</p>
          </div>
          </div>
             <div className="ship-cards">
            <div className='mt-3'>
          <span className='ms-4'>{roseGold}</span>
          <span className='ms-2'> Rose Gold</span>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{siIcon}</span>
          <span className='ms-2'>iJ-Sl</span><br/>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{sizeIcon}</span>
          <span className='ms-2'>Size</span>
          </div>
          <div className='mt-3'>
          <p>{shipBtn}</p>
          </div>
          </div>
             <div className="ship-cards">
            <div className='mt-3'>
          <span className='ms-4'>{roseGold}</span>
          <span className='ms-2'> Rose Gold</span>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{siIcon}</span>
          <span className='ms-2'>iJ-Sl</span><br/>
          </div>
          <div className='mt-2'>
          <span className='ms-4'>{sizeIcon}</span>
          <span className='ms-2'>Size</span>
          </div>
          <div className='mt-3'>
          <p>{shipBtn}</p>
          </div>
          </div>
        </div>
      </div>
      <div>
    
        <span>more 18 Rings</span>
        <span className='ms-2 me-2'>View All</span>
        <div className="d-flex gap-2">
          <p className='rings-box'>ring</p>
          <p className='rings-box'>rins</p>
          <p className='rings-box'>rih</p>
        </div>
        <span>More Yellow Gold Rings</span>
        <span className='ms-2 me-2'>View All</span>
        <p className='rings-box'>rings</p>
      </div>
    </div>
    <hr className="mt-3" />
      {/* table components */}

      <div>
        <p>Price Breakup <span className='ms-2'>Show less</span></p>
        <DataTable
          columns={columns}
          data={columns}
         
        />
      </div>

      {/* nav pills */}
      <div className="d-flex">
   

      <Nav variant="underline">
      <Nav.Item>
        <Nav.Link
          eventKey="link"
          active={activeKey === "link"}
          onClick={() => handleTabClick("link")}
        >
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          active={activeKey === "link-1"}
          onClick={() => handleTabClick("link-1")}
        >
          Option 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          active={activeKey === "link-2"}
          onClick={() => handleTabClick("link-2")}
        >
          Option 3
        </Nav.Link>
      </Nav.Item>
      <div className='mt-4 bg-warning'>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis, ipsam esse alias excepturi exercitationem temporibus, similique odit aliquam expedita natus corrupti in atque dolores illum deleniti est laboriosam dolore delectus perspiciatis beatae numquam ipsa illo. Fugit commodi aliquam error sequi dignissimos placeat id odit, sint veritatis quod ex enim accusantium excepturi.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, similique!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit accusantium quisquam perspiciatis ut reiciendis earum sapiente. Accusantium, deserunt hic.</p>
    </div>
    </Nav>
 
      {/* <Nav fill pills>
        <NavItem>
          <NavLink
            onClick={() => {
              menuIcon("Bis HallMark");
            }}
            active={activeMenu === "Bis HallMark"}
          >
            Bis Hallmark
          </NavLink>
          {activeMenu === "Bis HallMark" && (
            <span></span>
            // <p>
            //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur exercitationem fugiat. Hic incidunt repellendus neque voluptate facilis reprehenderit perspiciatis sed cum architecto, veritatis nesciunt corporis dolores sapiente mollitia quos tempore inventore?
            // </p>
          )}
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
          {activeMenu === "IGI" && (
            <span></span>
            // <p>
            //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur exercitationem fugiat. Hic incidunt repellendus neque voluptate facilis reprehenderit perspiciatis sed cum architecto, veritatis nesciunt corporis dolores sapiente mollitia quos tempore inventore?
            // </p>
          )}
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
          {activeMenu === "SGL" && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur exercitationem fugiat. Hic incidunt repellendus neque voluptate facilis reprehenderit perspiciatis sed cum architecto, veritatis nesciunt corporis dolores sapiente mollitia quos tempore inventore?
            </p>
          )}
        </NavItem>
      </Nav> */}
    </div>
      <SimilarPeoducts/>
    </>
  )
}
