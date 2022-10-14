import React from "react";
import {Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../registerpage/register.css"
export default function RegisterPage() {
  return (
    <div className="register-page">
      <h1 className="register-title">Register</h1>
      <div className="form-register-page">
        <Form className="form-control-register">
        <Form.Control
            type="string"
            placeholder="Name"
            className="form-register"
          ></Form.Control>
          <Form.Control
            type="email"
            placeholder="Email"
            className="form-register"
          ></Form.Control>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-register"
          ></Form.Control>
          <button className="btn-register" type="submit">
            Create
          </button>
        </Form>
      </div>
    </div>
  );
}
