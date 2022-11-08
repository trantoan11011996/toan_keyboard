import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCategoryItem from "./ProductCategoryItem";

export default function ProductCategoryList({data}) {
  
    return(
        <div className="product-list">
        {/* <Space>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 4,
            }}
            dataSource={data}
            renderItem={(item) => {
              return (
                <List.Item>
                  <ProductItem product={item} />
                </List.Item>
              );
            }}
          ></List>
        </Space> */}
       <Row>
        {data?.map((item,index)=>{
          return(
            <Col xl={3} md={6} xs={12}>
              <ProductCategoryItem product={item} id={item._id} key={index}/>
            </Col>
          )
        })}
       </Row>
    </div>
    )
}
