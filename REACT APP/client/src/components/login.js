import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      setLoginUser(res.data.user);
      console.log("send");
      navigate("/");
    });
  };
  return (
    <body className="container">
      <div className="side">
          <br/>
          
         
         <button  className="button" onClick={login}>SIGNUP </button>
        </div>
      <div className="form" style={{padding:"center"}}>
      
        <h2>Login</h2>
        <h5>Enter your credentials</h5>
        <br/>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
        
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
          <br></br>
          <button className="button" onClick={login}>
            LOGIN
          </button>
        </div>
        
    </body>
  );
};

export default Login;