import React, {useState, useEffect } from "react";

const Product = ( {match} ) => {
    
    useEffect(() => {
        fetchItems();
    },[]);
    
    const apiKey = '95022892-ec860967-8130e140-2445c59a';
    const productId = match.params.id;
    const [item, setItem] = useState({
        images:{}
    });

    const fetchItems = async () => {
        const items = await fetch(`https://fortniteapi.io/v1/items/get?id=${ productId }&lang=en`,{headers:{ Authorization:apiKey }});
        const item = await items.json();
        setItem(item.item)
        
    }

    return(
        <div>
            <h1>item</h1>
            <h2>{item.name}</h2>
            <img
             className="logo"
             src={item.images.icon}
             alt="imag"
            />
        </div>
    );
    



}
export default Product;