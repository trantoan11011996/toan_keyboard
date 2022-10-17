import React from "react";
import { List, Space } from "antd";
import ProductCart from "./ProductCart";
import { Row,Col} from "react-bootstrap";

export default function ProductListHome({data,id}){

    return(
        <div className="product-list-home">
           <div className="product-list">
					{/* <Space>
						<List
							grid={{ gutter: 16, column: 4 }}
							dataSource={data}
							renderItem={(item) => (
								<List.Item>
									<ProductCart product={item} />
								</List.Item>
							)}
						/>
					</Space> */}
                    <Row>
                        {data.map((item,index)=>{
                            return(
                                <Col xl={3} lg={6} md={6} sm={12}>
                                    <ProductCart product={item} key={index}/>
                                </Col>
                            )
                        })}
                    </Row>
				</div>
        </div>
    )
}