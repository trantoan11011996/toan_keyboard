import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext,logOut } from "../../context/AuthContext";
import LoginPage from "../loginpage/LoginPage";
import "../userinfo/userinfo.css"

export default function UserInfo (){
    const {currentUser,setCurrentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const logOutUser = () => {
        logOut();
        setCurrentUser(null);
        navigate("/")
      };
    return(
        <>
        {currentUser ? (<div className="user-info">
        <Container>
            <h1>Your Email</h1>
            <p>{currentUser.email}</p>
            <button onClick={logOutUser}>log out</button>
        </Container>
    </div>): <LoginPage/>}
        </>
    )
}