import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../loginpage/login.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1 className="login-title">Login</h1>
      <div className="form-login-page">
        <Form className="form-control-login">
          <Form.Control
            type="email"
            placeholder="Email"
            className="form-login"
          ></Form.Control>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-login"
          ></Form.Control>
          <Form.Text className="text-muted link-forgot-pass">
            <a >Fogot your password ? </a>
          </Form.Text>
          <button className="btn-login" type="submit">
            Sign in
          </button>
        </Form>
      </div>
      <Link to={"/register-page"}>
        <p className="create-account">Create account</p>
      </Link>
    </div>
  );
}
