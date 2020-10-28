import React from "react";
import About from "./pages/About";
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
       <Route path="/about" component={About} exact/>
       <Route path="/shop" component={Shop} exact />
       <Route path="/shop/:id" component={Product} exact />
     </div> 
    </Router>
    
    
  )
}

export default App;