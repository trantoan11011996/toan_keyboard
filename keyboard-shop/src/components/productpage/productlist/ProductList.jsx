import {  List, Space } from "antd";
import React from "react";
import ProductItem from "../product-item/ProductItem";
import {useSearchParams } from "react-router-dom"
;
import { Row,Col } from "react-bootstrap";
export default function ProductList({ data }) {
  
  return (
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
      {data?.map((item)=>{
        return(
          <Col xl={3} md={6} xs={12}>
            <ProductItem product={item} id={item._id}/>
          </Col>
        )
      })}
     </Row>
  </div>
  );
}
