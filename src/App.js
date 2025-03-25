import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Addproducts from "./Components/Addproducts";
import Getproduct from "./Components/Getproduct";
import Payment from "./Components/Payment";
import image from "./images/logo.jpg";
import Notfound from "./Components/Notfound";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header tinos-bold-italic">
          <div className="logo-container">
            <a
              href="/getproducts"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                window.location.href = "/getproducts"; // Navigate to the getproducts page
              }}
            >
              <img src={image} alt="Website Logo" className="logo" />
            </a>
          </div>
          
          <br/>

          <nav className="Links">
            <Link to="/Signup" className="Link1">
              Signup
            </Link>
            <Link to="/Signin" className="Link2">
              Signin
            </Link>
            <Link to="/Addproducts" className="Link3">
              Add A Car
            </Link>
            <Link to="/Getproducts" className="Link4">
              Get A Car
            </Link>
          </nav>
          <h1 className="bold-text text">Amiri Auto Mobiles</h1>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Getproduct />} />
          <Route path="/getproducts" element={<Getproduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
