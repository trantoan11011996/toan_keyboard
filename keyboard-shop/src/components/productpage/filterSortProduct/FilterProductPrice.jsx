import React from "react";
import { Checkbox, Dropdown, Menu, Space } from "antd";
import { InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import "../productreponsive.css"
export default function FilterProductPrice({ setParamsKey,setPriceFrom,priceFrom,setPriceTo,priceTo }) {

  const menuPrice = (
    <div className="checkbox-filter-stock checkbox-filter">
      <div className="checkbox-selected">
        <div className="selected-content">
          <p>The highest price is $1,735.00</p>
        </div>
      </div>
      <div className="checkbox-container-price">
        $
        <input
          type="number"
          min={1}
          className="dropdown-checkbox"
          placeholder="From"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        $
        <input
          type="number"
          min={1}
          className="dropdown-checkbox"
          placeholder="To"
          value={priceTo}
          onChange={(e) =>setPriceTo(e.target.value)}
        />
      </div>
    </div>
  );
  return (
    <div className="filter-field">
      <Dropdown overlay={menuPrice} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="filter-filed-content">
            Price
            <DownOutlined className="dropdown-icon" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
