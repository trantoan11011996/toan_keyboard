import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, autoLogin } from "../../context/AuthContext";
import "../loginpage/login.css";

export default function LoginPage() {
  const [alertUser, setAlertUser] = useState(false);
  const {
    currentUser,
    setCurrentUser,
    email,
    setEmail,
    password,
    setPassword,
    setDisplayHeaderFooter
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password) => {
    let item = { email: email, password: password };
    let userLogin = await fetch(
      "http://keyboard-shop.herokuapp.com/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("CurrentUser", JSON.stringify(data));
          return data;
        } else {
          console.log("not correct");
        }
      });
    return userLogin;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const user = await login(email, password);
      if (!user.message) {
        setEmail("");
        setPassword("");
        const current = JSON.parse(localStorage.getItem("CurrentUser"));
        setCurrentUser(current);
        navigate("/");
      } else {
        setAlertUser(true);
      }
    }
  };

  const resetField = () => {
    setEmail("");
    setPassword("");
  };
  useEffect(()=>{
    setDisplayHeaderFooter(true)
  },[])

  return (
    <div className="login-page">
      <h1 className="login-title">Login</h1>
      <div className="form-login-page">
        <Form className="form-control-login" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              className="form-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Text className="link-forgot-pass">
            <Link
              to={"/reset-password"}
              className="text-forgot-pass"
              onClick={() => resetField()}
            >
              Fogot your password ?
            </Link>
          </Form.Text>
          {alertUser && (
            <Form.Text className="text-danger link-wrong-pass">
              <a>Your password or email is not correct</a>
            </Form.Text>
          )}
          <button className="btn-login" type="submit">
            Sign in
          </button>
        </Form>
      </div>
      <Link to={"/register-page"}>
        <p className="create-account">Create account</p>
      </Link>
      <a href="http://keyboardshop.herokuapp.com/api/auth/facebook" target="blank">
            login facebook
      </a>
    </div>
  );
}
