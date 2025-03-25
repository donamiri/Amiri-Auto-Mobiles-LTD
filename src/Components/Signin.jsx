import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  //create hooks that will enable you to store the diffrent states of your application
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //create three additional hooks that will help you store the diffrent states of your application
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //below hook will direct a user to a given page when the details entered are correct
  const navigate = useNavigate();

  //create funtion to handle submit event
  const submit = async (e) => {
    //below we prevent page reload
    e.preventDefault();

    //we update the loading hook with a message
    setLoading("Please wait we log you In...");

    //have a try and catch block
    try {
      //create a form data object
      const data = new FormData();

      //insert records to the new object created
      data.append("email", email);
      data.append("password", password);

      //post your data through your API
      const response = await axios.post(
        "https://amirisatori.pythonanywhere.com/api/signin",
        data
      );

      //set the loading state back to default
      setLoading("");

      //have an if statement that check whether thre is a record with the details passed
      if (response.data.user) {
        //setSuccess(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        //reddirect the user to another page,the primary page if the data is correct
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4 tinos-regular-italic">
      <div className="col-md-6 card shadow p-4">
        <h2>Sign in</h2>
        <form onSubmit={submit}>
          {loading}
          {success}
          {error}
          <input
            type="email"
            placeholder="Enter your Email "
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
          <br />
          {/*{email}*/}
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-control "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /> <br />
          {/*{password}*/}
          <button type="submit" className="btn btn-outline-success">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
