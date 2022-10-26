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
  const [isLoading, setIsLoading] = useState(undefined);
  const [complete, setComplete] = useState(undefined);

  const getAllProduct = () =>{
    const products =  axios.get(`https://keyboard-shop.herokuapp.com/api/products`)
    .then((res)=>{
      return res.data
    }).then((data)=>{
      setProductData(data.allProduct)
      setCategoryData(data.allCategory) 
      setTimeout(()=>{
        setComplete(true)
      },1500)
      localStorage.setItem("product-list",JSON.stringify(data.allProduct))
      localStorage.setItem('category-list',JSON.stringify(data.allCategory))
    })
    return products
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  return (
    <AuthContext.Provider value={{productData,categoryData,complete}}>
      <div className="home-page">
        <SliderHomePage />
        <Annoucements />
        <ProductHomePage/>
      </div>
    </AuthContext.Provider>
  );
}
