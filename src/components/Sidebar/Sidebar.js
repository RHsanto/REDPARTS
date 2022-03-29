import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      

      <div className="sidebar my-5 px-4">
        {/* here search */}
        <form class="d-flex border shadow ">
      <input class="form-control " id="search"  type="search" placeholder='Blog search..' aria-label="Search"/>
      <div class="btn s-btn fs-5" type="submit"><BiSearchAlt2/></div>
        </form>
        {/* here card */}
        <div className="about text-start my-5 shadow-lg p-4">
          <h4>
          About Blog
          </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, 
            est erat faucibus purus, eget viverra nulla 
            sem vitae neque. Quisque id sodales libero.</p>

            <ul className='d-flex justify-content-start p-0'>
              <li className='s-icons bg-primary text-light'><FaFacebookF/></li>
              <li className='s-icons instra'><AiOutlineInstagram/></li>
              <li className='s-icons bg-danger text-light'><AiFillYoutube/></li>
              <li className='s-icons bg-info text-light'><AiOutlineTwitter/></li>
             
            </ul>
        </div>
         
         <div className="Categories text-start my-5 shadow-lg p-4">
           <h4>Categories</h4>
           <ul className=' c-list'>
             <li>Latest News</li>
             <li>Special Offers</li>
             <li>New Arrivals</li>
             <li>Reviews</li>
             <li>Wheels & Tires</li>
             <li>Engine & Drivetrain</li>
             <li>Transmission</li>
             <li>Performance</li>
           </ul>
         </div>
         <div className="latest-post text-start my-5 shadow-lg p-3">
           <h4>Latest Posts</h4>
            <div className="all">
              <div className="all-1 my-3 d-flex">
                <div className="lp-img">
                <img src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/posts/post-1.jpg" alt="" />
                </div>
                <div className="text">
                 <div className='lp-dep'>Philosophy That Addresses Topics Such As Goodness</div>
                 <><small className='text-secondary'>October 19, 2019</small></>
                </div>
              </div>
              <div className="all-1  my-3 d-flex">
                <div className="lp-img">
                <img src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/posts/post-1.jpg" alt="" />
                </div>
                <div className="text">
                 <div className='lp-dep'>Philosophy That Addresses Topics Such As Goodness</div>
                 <><small className='text-secondary'>October 19, 2019</small></>
                </div>
              </div>
              <div className="all-1  my-3 d-flex">
                <div className="lp-img">
                <img src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/posts/post-1.jpg" alt="" />
                </div>
                <div className="text">
                 <div className='lp-dep'>Philosophy That Addresses Topics Such As Goodness</div>
                 <><small className='text-secondary'>October 19, 2019</small></>
                </div>
              </div>
              <div className="all-1  my-3 d-flex">
                <div className="lp-img">
                <img src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/posts/post-1.jpg" alt="" />
                </div>
                <div className="text">
                 <div className='lp-dep'>Philosophy That Addresses Topics Such As Goodness</div>
                 <><small className='text-secondary'>October 19, 2019</small></>
                </div>
              </div>
            </div>
         </div>

      </div>
    </div>
  );
};

export default Sidebar;