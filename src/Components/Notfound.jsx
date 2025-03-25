import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pic from "../images/electrocuted-caveman-animation-404-error-page.gif";

const Notfound = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      <div className="App tinos-regular-italic">
        <img src={pic} alt="404 Error" />
      </div>
      <h2>Page Not Found</h2>
      <button
        className="App"
        onClick={() => navigate("/getproducts")} // Redirect to Getproduct
      >
        Home
      </button>
    </div>
  );
};

export default Notfound;
