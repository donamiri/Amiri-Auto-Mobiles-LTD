import axios from "axios";
import React, { useState } from "react";

const Addproducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Connecting....");
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://amirisatori.pythonanywhere.com/api/add_product",
        formData
      );

      setLoading("");
      setSuccess(response.data.message);
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
    } catch (error) {
      setLoading("");
      setSuccess("");
      setError(error.message);
    }
  };
  return (
    <div
      className="row justify-content-center mt-4"
      style={{ fontFamily: "'Roboto', sans-serif", fontStyle: "italic" }}
    >
      <div className="col-md-6 card shadow p-4 tinos-regular-italic">
        <h2 class="fst-italic">Add Car Details</h2>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Car Name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />{" "}
          <br />
          <textarea
            placeholder="Enter Car Description"
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter Car cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="file"
            placeholder="Enter Car image"
            className="form-control"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
            }}
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-success">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;
