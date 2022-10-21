import { Pagination } from "antd";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import FilterProduct from "./filterSortProduct/FilterProduct";
import SortProduct from "./filterSortProduct/SortProduct";
import ProductItem from "./product-item/ProductItem";
import ProductList from "./productlist/ProductList";
import "../productpage/productpage.css";
import axios from "axios";

export default function ProductPgae() {
  const [productListData, setProductListData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [search, setSearch] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("");

  const getAllProduct = () => {
    const product = axios
      .get(
        `https://keyboard-shop.herokuapp.com/api/products?pageNumber=${pageNumber}&&countInStock=${countInStock}&&priceFrom=${priceFrom}&&priceTo=${priceTo}&&fieldSort=${fieldSort}&&typeSort=${typeSort}`
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data) {
          setProductListData(data.allProduct);
          setTotalPage(data.pageTotal);
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }
      });
    return product;
  };
  useEffect(() => {
    getAllProduct();
  }, [pageNumber]);

  const getPage = (page) => {
    setIsLoading(true);
    setPageNumber(page);
  };
  return (
    <div className="product-page">
      <Container className="container-product-page" fluid>
        <div>productpage</div>
        <div className="filer-sort-product">
          <div className="filter-product">
            <FilterProduct />
          </div>
          <div className="sort-product">
            <SortProduct />
          </div>
        </div>
        <div className="product-list-container">
          <ProductList data={productListData} />
        </div>
        <Pagination
          defaultCurrent={1 * 10}
          total={totalPage * 10}
          onChange={getPage}
        />
        ;
      </Container>
    </div>
  );
}
