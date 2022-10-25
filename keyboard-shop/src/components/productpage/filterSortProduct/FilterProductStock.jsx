import React from "react";
import { Checkbox, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function FilterProductStock() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const menu = (
    <div className="checkbox-filter-stock checkbox-filter">
      <div className="checkbox-selected">
        <div className="selected-content">
          <p>0</p>
          <p>selected</p>
        </div>
      </div>
      <div className="checkbox-container-stock ">
        <Checkbox className="dropdown-checkbox" onChange={onChange}>
          In Stock
        </Checkbox>
        <Checkbox className="dropdown-checkbox" onChange={onChange}>
          Out of Stock
        </Checkbox>
      </div>
    </div>
  );
  return (
    <div className="filter-field">
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="filter-filed-content">
            Availability
            <DownOutlined className="dropdown-icon"/>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
