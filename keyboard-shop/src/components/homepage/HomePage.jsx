import React from "react";
import { Link } from "react-router-dom";
import SliderHomePage from "./SliderHomePage";
import "../homepage/homepage.css";
import "../homepage/reponsiveHomepage.css";
import Annoucements from "./Annoucements";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import ProductHomePage from "./ProductHomePage";
export default function HomePage() {
  const [productData,setProductData] = useState([])
  const [categoryData,setCategoryData] = useState([])

  const getAllProduct = () =>{
    const products =  axios.get(`https://keyboard-shop.herokuapp.com/api/products`)
    .then((res)=>{
      return res.data
    }).then((data)=>{
      setProductData(data.allProduct)
      setCategoryData(data.allCategory)

    })
    return products
  }
  useEffect(()=>{
    getAllProduct()
  },[])
  return (
    <AuthContext.Provider value={{productData,categoryData}}>
      <div className="home-page">
        <SliderHomePage />
        <Annoucements />
        <ProductHomePage/>
      </div>
    </AuthContext.Provider>
  );
}
