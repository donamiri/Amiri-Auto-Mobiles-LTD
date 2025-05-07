import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage on mount
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

 const removeFromCart = (productId) => {
   const confirmRemove = window.confirm(
     "Are you sure you want to remove this item?"
   );
   if (!confirmRemove) return;

   const updatedCart = cartItems.filter(
     (item) => item.product_id !== productId
   );
   setCartItems(updatedCart);
   localStorage.setItem("cart", JSON.stringify(updatedCart));
 };


  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://amirisatori.pythonanywhere.com/static/images/${item.product_photo}`}
                  className="card-img-top"
                  alt={item.product_name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.product_description}</p>
                  <p className="text-warning">ksh {item.product_cost}</p>
                  <button
                    className="btn btn-danger btn-sm float-start"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    Remove
                  </button>

                  <button
                    className="btn btn-success btn-sm float-end"
                    onClick={() =>
                      navigate("/payment", { state: { product: item } })
                    }
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
