import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CategoryHomeList from "./CategoryHomeList/CategoryHomeList";


export default function ProductHomePage(){
    const {productData,categoryData} = useContext(AuthContext)
    console.log('category',categoryData);
    return(
        <div className="product-homepage">
           {categoryData == [] ? <h1>Loading...</h1> : (
            <>
                <CategoryHomeList name={categoryData[2]?.name} id={categoryData[2]?._id}/>
                <CategoryHomeList name={categoryData[0]?.name} id={categoryData[0]?._id}/>
            </>
           )}
        </div>
    )
}