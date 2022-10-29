import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, autoLogin } from "../../context/AuthContext";
import "../loginpage/login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [alertUser, setAlertUser] = useState(false);
  const {currentUser,setCurrentUser} = useContext(AuthContext)
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
        setUser(data);

        localStorage.setItem("CurrentUser", JSON.stringify(data));
        return data;
      });
    return userLogin;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const user = await login(email, password);
      if (user.email) {
        console.log("user", user);
        const current = JSON.parse(localStorage.getItem("CurrentUser"));
        setCurrentUser(current)
        navigate("/");
      } else {
        setAlertUser(true);
      }
    }
  };
  useEffect(() => {
    const current = autoLogin();
    setUser(current);
  }, []);

  return (
    <div className="login-page">
      {user ? (
        <>
          <h1>{user.email}</h1>
        </>
      ) : (
        <>
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
              <Form.Text className="text-muted link-forgot-pass">
                <a>Fogot your password ? </a>
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
        </>
      )}
    </div>
  );
}
