import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import KeyBoardApp from "./components/keyboardapp/KeyBoardApp";
import Button from "react-bootstrap/Button";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [display, setDisplay] = useState(true);

  return (

      <div className="App">
  
          <KeyBoardApp />
  
      </div>
  );
}

export default App;
