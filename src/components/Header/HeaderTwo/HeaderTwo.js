import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
const HeaderTwo = () => {
  return (
    <div>
      <div className="container mt-2 p-2">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <ul className=' d-flex menu'>
              <li><RiBarChartHorizontalLine/> Menu</li>
              <li>Home</li> 
              <li>Shop</li> 
              <li>Blog</li> 
              <li>Account</li> 
              <li>Pages</li> 
            </ul>
          </div>
          <div className="col-lg-2">
            <h1><span className='red'>RED</span><span>PARTS</span></h1>
          </div>
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
         
          <div className="hart fs-2 ">
          <FaRegHeart/>
          </div>
          
           <div className="hello d-flex">
               <div className="icon fs-2">
               <AiOutlineUser/>
               </div>
               <div className="">
                 <small>hello Log in</small> 
                 <h6>My Account</h6>
               </div>
           </div>
           <div className="cart d-flex">
               <div className="cIcons fs-2">
                <AiOutlineShoppingCart/>
               </div>
               <div className="">
                 <small>Shopping cart</small> 
                 <h6>My Account</h6>
               </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;