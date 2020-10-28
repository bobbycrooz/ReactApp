import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";






const Shop = (props) => {
  
  useEffect(() => {
    fecthItem();
  },[])


  const apiKey = '95022892-ec860967-8130e140-2445c59a';
  const [items, setItem] = useState([]);


  const fecthItem = async () => {
    const data = await fetch('https://fortniteapi.io/v1/items/upcoming?lang=en',{headers:{ Authorization:apiKey }});
    const items = await data.json();
   
    setItem(items.items)
  }

  return (
    // console.log(props)
    <div className='Shop'>
      <h1>Shopping Page</h1>
      
      <h3>
        <code>
          Please wait while we fetch the list for you
          </code>
      </h3>
    <div>
    {items.map(item => (
        <h1 
          className="product product_mt"
          key={item.id}
        >
          <Link className='btn' to={`/shop/${ item.id }`}>{ item.name }</Link>         
          <h6><code>you can click this item to view it</code></h6> 
        </h1>
        
      ))}
    </div>
    </div>
  )
}

export default Shop;