import React from 'react';
import { Link } from 'react-router-dom';

import Landing from './Landing';

import HeaderCSS from './Header.css';

const Header = () => {
   return (
      <div className="hero">
         <nav className="navi-container">
               <Link to="/" className="logo"> 🐮 </Link> 
               <Link to="/" className="navi-item"> React </Link> 
               <Link to="/" className="navi-item"> CSS </Link> 
               <Link to="/" className="navi-item"> Workflow </Link>          
               <Link to="/" className="cta"> Subscribe </Link>                  
         </nav>
         <Landing/>
      </div>
   );
}

export default Header;