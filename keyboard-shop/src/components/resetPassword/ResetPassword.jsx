import React from "react";
import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../resetPassword/resetpassword.css";

export default function ResetPassword() {
  const { emailReset, setEmailReset, submitEmail } = useContext(AuthContext);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (emailReset) {
      const email = await submitEmail(emailReset);
      if (email) {
        console.log("email", email);
      } else {
        console.log("else", email);
      }
    }
  };
  const resetField = ()=>{
    setEmailReset("")
  }
  return (
    <div className="reset-password-page">
      <h1 className="reset-title">Reset your password</h1>
      <p>We will send you an email to reset your password</p>
      <div className="form-reset-page">
        <Form onSubmit={handleSendEmail}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              className="form-reset"
              value={emailReset}
              onChange={(e) => setEmailReset(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <button className="btn-reset" type="submit" >
            Submit
          </button>
        </Form>
        <Link to={"/login-page"}>
          <button className="btn-cancel" onClick={()=>resetField()}>Cancel</button>
        </Link>
      </div>
    </div>
  );
}
