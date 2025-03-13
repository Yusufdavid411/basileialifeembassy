import React from 'react'
import './header.css'
// import Logo from './Logo'
import Navbar from './Navbar'


const Header = () => {
  return ( 
    <div className="navigation" id="navigation">

      {/* <Logo /> */}

      <Navbar />

      <div className='sublogo'>
        <h2>Basileia Life Embassy</h2>
        <span>Contending For The Emergence Of The True Church</span>
      </div>

    </div>
      
  );
}
 
export default Header;