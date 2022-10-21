import { List, Space } from "antd";
import React from "react";
import ProductItem from "../product-item/ProductItem";

export default function ProductList({ data,totalPage }) {
  return (
    <div className="product-list">
      <Space>
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
      </Space>
    </div>
  );
}
