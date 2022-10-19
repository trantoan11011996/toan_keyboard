import React from "react";
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
      localStorage.setItem("product-list",JSON.stringify(data.allProduct))
      localStorage.setItem('category-list',JSON.stringify(data.allCategory))
    })
    return products
  }

  useEffect(()=>{
    getAllProduct()
    // const productsLocal = JSON.parse(localStorage.getItem('product-list'))
    // const categorysLocal = JSON.parse(localStorage.getItem('category-list'))
    // setProductData(productsLocal)
    // setCategoryData(categorysLocal) 
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
