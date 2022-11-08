import React from "react";
import { List, Space } from "antd";
import ProductCart from "./ProductCart";
import { Row, Col } from "react-bootstrap";

export default function ProductListHome({ data, id, key }) {
  return (
    <div className="product-list-home">
      <div className="product-list">
        {/* <Space>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4 }}
            dataSource={data}
            pagination={{
                
                pageSize : 4 
            }}
            renderItem={(item, index) => (
              <List.Item>
                <ProductCart product={item} key={index} />
              </List.Item>
            )}
          />
        </Space> */}
        <Row>
          {data.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={6} sm={12}>
                <ProductCart product={item} key={index} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
