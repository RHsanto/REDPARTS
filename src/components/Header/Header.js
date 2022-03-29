import React from 'react';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className='shadow d-none d-sm-block'>
      <HeaderOne/>
      <HeaderTwo/>
    </div>
     <div className="mobile d-block d-sm-none">
      <div className="d-flex justify-content-between mx-3">
      

      <div  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <h3> <AiOutlineBars/> REDPARTS</h3>
    </div>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="off d-flex justify-content-around fs-4 mb-5">
      <AiOutlineUser/>
    <FaRegHeart/>
    <BiSearchAlt2/>
    <AiOutlineShoppingCart/>
    </div>
   <ul className='text-start m-text'>
     <li>Home</li>
     <li>Shop</li>
     <li>Blog</li>
     <li>Account</li>
   </ul>
  </div>
</div>
       <div>
       <div className='fs-3'> 
       <BiSearchAlt2/>
       <AiOutlineShoppingCart/>
       </div>
       
       </div>
      </div>
     </div>
    </div>
  );
};

export default Header;