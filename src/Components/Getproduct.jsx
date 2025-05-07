import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/porsche.jpg";
import img from "../images/m5 (1) (1).jpg";
import pic from "../images/amg.png";
import { useCart } from "../contexts/CartContext";


// Custom Arrows for Carousel
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const Getproduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const img_url = "https://amirisatori.pythonanywhere.com/static/images/";
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();


const handleAddToCart = (product) => {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.product_name} has been added to your cart.`);
};

  const getProducts = async () => {
    setLoading("connecting...");
    try {
      const response = await axios.get(
        "https://amirisatori.pythonanywhere.com/api/get_products_details"
      );
      setProducts(response.data.products);
      setLoading("");
    } catch (error) {
      setError("Failed to fetch products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid row tinos-regular-italic">
      <h2 className="tinos-bold-italic">Explore Cars</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for a car..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Carousel Section with Custom Arrows */}
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        <div>
          <img
            src={image}
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src={img}
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src={pic}
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </Slider>

      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}

      {/* Product Cards */}
      {filteredProducts.map((product, index) => (
        <div className="col-md-3 col-lg-3 mb-4" key={index}>
          <div className="card shadow p-2">
            <img
              src={img_url + product.product_photo}
              alt={product.product_photo}
              className="mt-4"
            />
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning"> ksh {product.product_cost}</b> <br />
              <button
                className="btn btn-outline-success w-100 mt-2"
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
              >
                Show details
              </button>
              <button
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getproduct;
