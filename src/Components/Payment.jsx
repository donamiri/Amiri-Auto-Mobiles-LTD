import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const img_url = "https://amirisatori.pythonanywhere.com/static/images/";
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const handlesubmit = async (e) => {
    setLoading("connecting");
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);
      const response = await axios.post(
        "https://amirisatori.pythonanywhere.com/api/mpesa_payment",
        formData
      );
      console.log(response.data);
      setLoading("");
    } catch (error) {
      setError("");
    }
  };

  return (
    <div className="row justify-content-center mt-5 tinos-regular-italic">
      {loading}
      {error}
      <h1 className="m-2">Mpesa payment - LIPA NA MPESA</h1>
      <div className="card shadow col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <img
          src={img_url + product.product_photo}
          alt={product.product_photo}
          className="mt-4"
        />
        <h3 className="text-secondary">{product.product_name}</h3>
        <p className="text-danger">KSH {product.product_cost}</p>

        <form onSubmit={handlesubmit}>
          <input
            type="tel"
            placeholder="+254******"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <button className="btn btn-outline-success">Buy now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
