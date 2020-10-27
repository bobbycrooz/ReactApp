import React from "react";
import {Link} from "react-router-dom";



const Nav = () => {
  return (
   <nav>
     <Link to="/">
       <h3>Home</h3>
     </Link>
       <ul>
         <Link to="/about">
           <li>About</li>
         </Link>
         <Link to="/shop">
           <li>Shoppings</li>
         </Link>
         <Link to='/product'>
           <li>Product Details</li>
         </Link>
       </ul>
   </nav>
  );
}

export default Nav;