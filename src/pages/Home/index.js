import React from 'react';
import { Link } from 'react-router-dom'




const Home = () => {
    return (
        <div className="shop">
            <h1 className="title">
                Welcome to my first React App
            </h1>
            <h4 className="title_sub">
                Here we fetched some cool stuff from the porpular PC game fortnite.
            </h4>

            <div className="product">
                
                <h3>click on <Link to='/shop'>Shop</Link> at the top to Browse around </h3>
            </div>
        </div>
    );
}
export default Home;