import React from "react";
import {Link} from "react-router-dom";



const Nav = () => {
  return (
   <nav>
     <Link to="/">
       <h3 className='btn'>Home</h3>
     </Link>
       <ul>
         <Link to="/about">
           <li className='btn' >About</li>
         </Link>
         <Link to="/shop">
           <li className='btn' >Shop</li>
         </Link>
         <Link to='/product'>
           <li className='btn' >Product</li>
         </Link>
       </ul>
   </nav>
  );
}

export default Nav;