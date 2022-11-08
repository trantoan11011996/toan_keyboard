import React from "react";
import { Checkbox, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function FilterProductStock({setParamsKey}) {

  const [selected,setSelected] = useState([])
  
  

  const menu = (
    <div className="checkbox-filter-stock checkbox-filter">
      <div className="checkbox-selected">
        <div className="selected-content">
          <p>0</p>
          <p>selected</p>
        </div>
      </div>
      <div className="checkbox-container-stock ">
        <Checkbox value="1" className="dropdown-checkbox" onChange={()=>setParamsKey("inStock",1)}>
          In Stock
        </Checkbox>
        <Checkbox value="2" className="dropdown-checkbox" onChange={()=>setParamsKey("inStock",2)}>
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
