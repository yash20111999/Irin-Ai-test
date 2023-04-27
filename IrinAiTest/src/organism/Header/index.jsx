import React, { useState, useEffect } from 'react';
import { SvgComponenet } from '../../assets';

const Header = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='header'>
      <div className='container'>
        <span className='company-name'>Irin</span>

        <div className='text-container'><span className='text'>Company </span><SvgComponenet.DownArrow /></div>
        <div className='text-container'><span className='text'>Help</span></div>
      </div>
      <div className='container'>
        <div className='text-container'> <SvgComponenet.EarthIcon /> <span className='text'>EN </span></div>
        <div className='text-container'> <SvgComponenet.ProductIcon /><span className='text'>Products </span></div>
        <div className='text-container'><span className='text'>Login</span></div>
        <button className='signup'>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
