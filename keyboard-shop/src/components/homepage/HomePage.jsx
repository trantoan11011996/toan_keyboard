import React from "react";
import { Link } from "react-router-dom";
import SliderHomePage from "./SliderHomePage";
import "../homepage/homepage.css"
import "../homepage/reponsiveHomepage.css"
export default function HomePage() {
  return(
      <div className="home-page">
        <SliderHomePage/>
      </div>
    ) 
    
}
