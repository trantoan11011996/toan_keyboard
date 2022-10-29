import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CategoryHomeList from "./CategoryHomeList/CategoryHomeList";
import Lottie from "lottie-react";
import location from "./animationJsonHomePage/79794-world-locations.json";
export default function ProductHomePage() {
  const { productData, categoryData, isLoading, complete } =
    useContext(AuthContext);

  return (
    <div className="product-homepage">
     {!complete ? (
        <div className="loading-product-homepage">
        <Lottie 
        animationData={location}
        className="lottie-location-homepage"></Lottie>
        </div>
     ) : (
        <>
        <CategoryHomeList
          name={categoryData[2]?.name}
          id={categoryData[2]?._id}
        />
        <CategoryHomeList
          name={categoryData[0]?.name}
          id={categoryData[0]?._id}
        />
      </>
     )}
    </div>
  );
}
