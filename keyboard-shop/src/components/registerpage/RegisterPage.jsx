import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../registerpage/register.css";

export default function RegisterPage() {
  const {
    createNewUser,
    setCurrentUser,
    setEmailRegister,
    emailRegister,
    setPasswordRegister,
    passwordRegister,
  } = useContext(AuthContext);
  const [alertValidation, setAlertValidation] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordRegister && emailRegister) {
      const newUser = await createNewUser(emailRegister, passwordRegister);
      if (!newUser.message) {
        setEmailRegister('')
        setPasswordRegister('')
        const current = JSON.parse(localStorage.getItem("CurrentUser"));
        setCurrentUser(current);
        navigate("/");
      } else {
        setAlertMessage(newUser.message);
        setAlertValidation(true);
      }
    }
  };

  return (
    <div className="register-page">
      <h1 className="register-title">Register</h1>
      <div className="form-register-page">
        <Form className="form-control-register" onSubmit={handleRegister}>
          <Form.Control
            type="email"
            placeholder="Email"
            className="form-register"
            onChange={(e) => setEmailRegister(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-register"
            onChange={(e) => setPasswordRegister(e.target.value)}
          ></Form.Control>
          <button className="btn-register" type="submit">
            Create
          </button>
          {alertValidation && (
            <Form.Text className="text-danger alert-validation">
              <a>{alertMessage} !!!</a>
            </Form.Text>
          )}
        </Form>
      </div>
    </div>
  );
}
