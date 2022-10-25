import React from "react";
import { Checkbox, Dropdown, Menu, Space } from "antd";
import { InputNumber } from "antd";
import { DownOutlined } from '@ant-design/icons';

export default function FilterProductPrice() {
  const onChange = (value) => {
    console.log("changed", value);
  };
  const menuPrice = (
    <div className="checkbox-filter-stock checkbox-filter">
      <div className="checkbox-selected">
        <div className="selected-content">
          <p>The highest price is $1,735.00</p>
        </div>
      </div>
      <div className="checkbox-container-price">
        $<InputNumber
          min={1}
          className="dropdown-checkbox"
          max={10}
          defaultValue={0}
          placeholder="From"
          onChange={onChange}
        />
        $<InputNumber
          min={1}
          className="dropdown-checkbox"
          max={10}
          defaultValue={0}
          placeholder="To"
          onChange={onChange}
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
