import { Dropdown, Space, InputNumber, Select } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";

export default function SortProduct() {
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="sort-field">
      <Select
        defaultValue="name-asc"
        onChange={handleChange}
        style={{ width: "fit-content" }} bordered={false}
      >
        <Option value="name-asc">Alphabetically, A-Z</Option>
        <Option value="name-dsc">Alphabetically, Z-A</Option>
        <Option value="price-asc">Price, low to high</Option>
        <Option value="price-dsc">Price, high to low</Option>
      </Select>
    </div>
  );
}
