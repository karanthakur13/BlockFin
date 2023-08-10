"use client"

import { useState} from "react";

import React from 'react';
import axios from "axios";
import bootstrap from "bootstrap"

const page = () => {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login, setLogin] = useState(true);

const handleNewAccount = () => {
  // Implement your logic for creating a new account here
  setLogin(false);
};
const handleLogin=async (e)=>{
  e.preventDefault();
  try {
      const { data } = await axios.post(
        `http://localhost:5000/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

        }
      );      
      console.log(data);
      // setIsAuthenticated(true);
      // setLoading(false);
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
      // setIsAuthenticated(false);
      // setLoading(false);
    }
}
return (
  <div>
    {login ? (
      <div>
        <form
          style={{
            width: "40%",
            position: "absolute",
            top: "20%",
            left: "30%",
          }}
          onSubmit={handleLogin}
        >
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Login
          </button>
          {/* <h4 style={{ marginTop: "1rem" }}>Or</h4/> */}
        </form>
        <p>
          New to this platform?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleNewAccount}
          >
            Create New Account
          </span>
        </p>
        <p>or</p>
        <h3>Login</h3>
      </div>
    ) : (
      <div>
        <form
          style={{
            width: "40%",
            position: "absolute",
            top: "20%",
            left: "30%",
          }}
        >
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary">NEXT</button>
          {/* <h4 style={{ marginTop: "1rem" }}>Or</h4> */}
        </form>
      </div>
    )}
  </div>
);
}

export default page
