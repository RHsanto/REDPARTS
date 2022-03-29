import React from 'react';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';

const Header = () => {
  return (
    <div className='shadow'>
      <HeaderOne/>
      <HeaderTwo/>
    </div>
  );
};

export default Header;