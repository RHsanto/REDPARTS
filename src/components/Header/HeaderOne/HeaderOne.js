/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HeaderOne = () => {
  return (
    <div>
     <div className="container">
       <div className="row ">
         <div className="col-lg-5 one ">
           <ul className='d-flex navbars text-light '>
              <li>Call Us: (800) 060-0730</li>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Track Order</li>
           </ul>
         </div>
         <div className="col-lg-2 two">
           <p className='small '>AUTO PARTS FOR CARS,  MOTORCYCLES</p>
         </div>
         <div className="col-lg-5 three">
           <ul className='d-flex align-items-center navbars'>
             <li>Confirm: 0</li>
             <li><div class="dropdown">
  <div class="  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </div>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item " href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
              </div>
              </li>
             <li><div class="dropdown">
  <div class="  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
              </div>
              </li>
           </ul>
         </div>
       </div>
     </div>
    </div>
  );
};

export default HeaderOne;