"use client"
import React, { useEffect, useState } from 'react'
import './shopping.css'
import Shopheading from '../components/shopheading'
import { useSelector } from 'react-redux'
import Itemcard from '../components/Itemcard'
const RenderDisp = () => {  
    const[product,setProduct]=useState([1]);
    const produc = useSelector((state) => state.render.data);

  useEffect(() => {
    const fetchDataWithDelay = () => {
      setTimeout(() => {
        let data;
        if(!produc||produc.length==0){
            data=[1]
        }
        else{
            data=produc
        }
        setProduct(data);
      }, 1000); // Delay of 100 milliseconds
    };

    fetchDataWithDelay();
  }, [produc]);
 
  if(product[0]==1){
    return (<div className='render-main-loader'>
      <div class="spinner"></div>

    </div>
    );
  }

  return (
    <div className='render-main-box'>
        <Shopheading/>
       {
 product.map((item)=>(
    <Itemcard 
    key={item._id}
    name={item.name}
    discrip={item.discription}
    img={item.image_url}
    price={item.price_in_rupees}
    rating={item.rating}
    />
      
 ))
         
        }

    </div>
  )
}

export default RenderDisp