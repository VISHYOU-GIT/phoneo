'use strict';
import './productDetail.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Image } from 'antd'
import Notfound from '../../components/404/404.jsx'
export default function productDetail() {
    const [getID, setGetID] = useState(localStorage.getItem("Itemsid"));
    const [data, setData] = useState(null);
    const [pageNotfound , setPageNotfound ]= useState(false);
    useEffect(() => {
        axios
        .get("/data/mobiles.json")
        .then((res) => {
            const item = res.data.find(item => item.id === getID);
            if (!item) {
                setPageNotfound(true);
            }
            else {
                setData(item);
            }
        })
        .catch((err) => {
            setPageNotfound(true)
        })
    }, [getID])
  return (
    <>
   
    {pageNotfound && <div className='min-vh-100 bg-light d-grid  notfound'><Notfound/></div> } 
    
    
    {data && <div className='container'>
        <br />
        <div>{data.brand}</div>
        <h3>{data.name}</h3>
        <div className="row row-cols-md-2 row-cols-1">
            <div className="col">
            <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <Image  className='product-main-image object-fit-contain ' src={data.image} />
<br />
<div className="space-between d-flex">

    <Image
       
      src={data.image2}
      className='object-fit-contain p-2 border product-image w-100'
    />
    <Image
       
      src={data.image3}
      className='object-fit-contain p-2 border product-image w-100'
    />
    <Image
       
      src={data.image4}
      className='object-fit-contain p-2 border product-image w-100'
    /></div>
  </Image.PreviewGroup>

            </div>
            <div className="col">

            </div>
        </div>
        
        
        
        

    

    </div> }</>
  )
}



