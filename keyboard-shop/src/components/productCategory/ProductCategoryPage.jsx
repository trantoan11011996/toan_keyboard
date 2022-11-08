import React,{useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import {Container,Row,Col} from "react-bootstrap"
import ProductCategoryList from "./ProductCategoryList";
import "../productpage/productpage.css"
import Lottie from "lottie-react"
import location from "./animationJson/79794-world-locations.json";
export default function ProductCategoryPage(){
  const [productCategory, setProductCategory] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const [complete, setComplete] = useState(undefined);

  const { id } = useParams();
  const getNameCategory = async (value) => {
    const data = await fetch(
      `https://keyboard-shop.herokuapp.com/api/products/category/${value}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("productCategory", JSON.stringify(data));
        setTimeout(() => {
            setComplete(true);
          }, 1500);
        return data;
      });
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getNameCategory(id);
      setProductCategory(data.product);
      setCategoryInfo(data.category);
    };
    getData();
  }, [id]);
  return (
    <div className="product-page">
        <Container className="container-product-page" fluid>
          <h1 className="product-page-title">{categoryInfo?.name}</h1>
          <div className="filer-sort-product">
            <div className="filter-container">
              <p className="filter-title">Filter :</p>
              <div className="filter-product-price">
                {/* <FilterProductStock /> */}
              </div>
              <div className="filter-product-price">
                {/* <FilterProductPrice /> */}
              </div>
            </div>
            <div className="sort-container">
              <p className="sort-title">Sort by : </p>
              <div className="sort-product">
                {/* <SortProduct /> */}
              </div>
              {/* <p className="total-product">{productCounts} products</p> */}
            </div>
          </div>
          {!complete ? (
            <div className="loading-product">
              {/* <ReactLoading
                type={"bars"}
                color={"rgb(209,209,209)"}
                height={50}
                width={50}
              /> */}
              <Lottie
                animationData={location}
                className="lottie-location"
              />
            </div>
          ) : (
            <div className="product-list-container">
              <ProductCategoryList data={productCategory} />
            </div>
          )}
          {/* <Pagination
            defaultCurrent={1 * 10}
            total={totalPage * 10}
            onChange={(page) => setParamsKey("page", page)}
          /> */}
          ;
        </Container>
      </div>
  );

}