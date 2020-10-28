import React from "react";
import About from "./pages/About";
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import Nav from "./component/Nav";
import Product from "./pages/proDetails";
import "./App.css";

import {BrowserRouter as Router, Route} from "react-router-dom";


const App = () => {


  return (

    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
       <Nav />
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} exact/>
       <Route path="/shop" component={Shop} exact />
       <Route path="/shop/:id" component={Product} exact />
       <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/bobbycrooz'; 
     return null;
        }}/>
        <Route path='/twitter' component={() => { 
        window.location.href = 'https://twitter.com/idrisloove'; 
        return null;
        }}/>
        <Route path='/linkedin' component={() => { 
        window.location.href = 'https://www.linkedin.com/in/idris-love-b8567b199'; 
        return null;
        }}/>
     </div> 
    </Router>
    
    
  )
}

export default App;