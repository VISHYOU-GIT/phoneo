'use strict';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import { BarChartOutlined } from '@ant-design/icons';
import { Rate, Popover } from 'antd';
import {Link}  from 'react-router-dom'
export default function Product() {
  const [data, setData] = useState([]);
const setID =  (item)=>{
  localStorage.setItem("Itemsid", item.id);
}
 

  useEffect(() => {
    axios
      .get("/data/mobiles.json")
      .then((res) => setData(res.data), localStorage.setItem("Itemsid",null))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container py-5'>
      {/* <div className="position-sticky top">dded</div> */}
      <center>
        <h4 className="fw-bold"><BarChartOutlined /> TOP PHONES</h4>
      </center>
      <br />

      <div className="row row-cols-1 row-gap-md-3 row-gap-5 row-cols-md-5 row-cols-lg-6">
        {data.map((item, index) => (
          <div key={index} className="col box">
            <Popover placement="rightTop" content={<p>Ram : {item.RAM} <br /> Storage : {item.ROM} <br /> <Link to={`/product`} onClick={() => setID(item)}> <small className='text-primary link' role="button"> See more </small> </Link></p>} title="Specifications">
              <div className="card border" >
                <img src={item.image} className="card-img-top border " alt="..." />
                <div className="card-body">
                  <code className="px-1 float-end bg-black rounded-pill text-white"> {item.discount_percent} off</code>
                  <small className="card-title d-block text-muted">{item.brand}</small>
                  <b className="card-title text-truncate">{item.name}</b>
                  <p className="card-text">{item.category}</p>
                  <div>
                    <b>₹{item.discounted_price}</b>
                    <del><small className="text-muted"> ₹{item.price}</small></del>

                  </div>
                  <small> <Rate style={{ fontSize: 14 }} disabled defaultValue={`${item.rating}`} allowHalf /> </small>
                </div>
              </div></Popover></div>
        ))}
      </div>

    </div>
  );
}



