import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import LoginPage from "../loginpage/LoginPage";
import "../userinfo/userinfo.css"

export default function UserInfo (){
    const {currentUser} = useContext(AuthContext)

    return(
        <>
        {currentUser ? (<div className="user-info">
        <Container>
            <h1>Your Email</h1>
            <p>{currentUser.email}</p>
        </Container>
    </div>): <LoginPage/>}
        </>
    )
}