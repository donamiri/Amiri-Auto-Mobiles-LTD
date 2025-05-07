import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./Components/Chatbot";

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
import Cart from "./Components/Cart"; // ✅ Add this line

import { CartProvider, useCart } from "./contexts/CartContext"; // ✅ Import useCart

// ✅ Create a header component to use the hook (React rules don't allow hooks inside the main function body unless it's a component)
const Header = () => {
  const { cartItems } = useCart();

  // Total quantity (sum all item quantities)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="App-header tinos-bold-italic">
      <div className="logo-container">
        <a
          href="/getproducts"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/getproducts";
          }}
        >
          <img src={image} alt="Website Logo" className="logo" />
        </a>
      </div>

      <br />

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
        <Link to="/cart" className="Link4">
          Go to Cart{" "}
          {totalItems > 0 && (
            <span className="badge bg-danger">{totalItems}</span>
          )}
        </Link>
      </nav>
      <h1 className="bold-text text">Amiri Auto Mobiles</h1>
    </header>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header /> {/* ✅ Use the new header component */}
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <Chatbot />
      </div>
    </CartProvider>
  );
}

export default App;
