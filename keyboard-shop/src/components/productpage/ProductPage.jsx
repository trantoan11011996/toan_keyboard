import { Pagination } from "antd";
import React from "react";
import ReactLoading from "react-loading";
import { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import ProductList from "./productlist/ProductList";
import "../productpage/productpage.css";
import axios from "axios";
import FilterProductStock from "./filterSortProduct/FilterProductStock";
import FilterProductPrice from "./filterSortProduct/FilterProductPrice";
import SortProduct from "./filterSortProduct/SortProduct";
import Lottie from "lottie-react";
import location from "./animationJson/79794-world-locations.json";
import success from "./animationJson/97240-success.json";

export default function ProductPage() {
  const [productListData, setProductListData] = useState();
  const [productCounts, setProductCounts] = useState("");
  const [isLoading, setIsLoading] = useState(undefined);
  const [complete, setComplete] = useState(undefined);
  const [pageNumber, setPageNumber] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [search, setSearch] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [params, setParams] = useSearchParams();

  // console.log('params',page);
  const getAllProduct = (page, inStock) => {
    const product = axios
      .get(
        `https://keyboard-shop.herokuapp.com/api/products?pageNumber=${page}&&countInStock=${inStock}&&priceFrom=${priceFrom}&&priceTo=${priceTo}&&fieldSort=${fieldSort}&&typeSort=${typeSort}`
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data) {
          setProductListData(data.allProduct);
          setTotalPage(data.pageTotal);
          setProductCounts(data.totalProduct);
          setIsLoading(true);
          setTimeout(() => {
            setComplete(true);
          }, 1500);
        }
      });
    return product;
  };
  useEffect(() => {
    const page = params.get("page");
    const inStock = params.get("inStock");
    getAllProduct(page, inStock);
  }, [params]);

  const setParamsKey = (key, value) => {
    // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };

  const option1 = {
    animationData: location,
    loop: true,
  };
  const option2 = {
    animationData: success,
    loop: true,
  };
  return (
      <div className="product-page">
        <Container className="container-product-page" fluid>
          <h1 className="product-page-title">Products</h1>
          <div className="filer-sort-product">
            <div className="filter-container">
              <p className="filter-title">Filter :</p>
              <div className="filter-product-price">
                <FilterProductStock />
              </div>
              <div className="filter-product-price">
                <FilterProductPrice />
              </div>
            </div>
            <div className="sort-container">
              <p className="sort-title">Sort by : </p>
              <div className="sort-product">
                <SortProduct />
              </div>
              <p className="total-product">{productCounts} products</p>
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
              <ProductList data={productListData} />
            </div>
          )}
          <button onClick={() => setParamsKey("inStock", 2)}>Click me</button>
          <Pagination
            defaultCurrent={1 * 10}
            total={totalPage * 10}
            onChange={(page) => setParamsKey("page", page)}
          />
          ;
        </Container>
      </div>
  );
}
