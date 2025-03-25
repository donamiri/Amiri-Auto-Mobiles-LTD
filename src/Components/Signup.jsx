import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//arrow function
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //response states
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    //update loading hook with a message
    setLoading("connecting...");
    try {
      //fetching data from form
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", Phone);
      formData.append("password", password);

      //posting data
      const response = await axios.post(
        "https://amirisatori.pythonanywhere.com/api/signup",
        formData
      );
      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4 tinos-regular-italic">
      <div className="shadow card col-md-6 p-4">
        <h2>Signup form</h2>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          {/**username input */}
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          {/**email input */}
          <input
            type="email"
            placeholder="Enter email"
            id=""
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {/**tel input */}
          <input
            type="tel"
            placeholder="Enter Phone number "
            className="form-control"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          {/**password input */}
          <input
            type="password"
            placeholder="Enter password"
            name=""
            id=""
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn btn-outline-success">
            Signup
          </button>
          <p>
            Already have an account?<Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
