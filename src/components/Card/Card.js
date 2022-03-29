import React from 'react';
import News from '../News/News';
import Sidebar from '../Sidebar/Sidebar';

const Card = () => {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-9">
          <News/>
      
          </div>
          <div className="col-lg-3">
          <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;