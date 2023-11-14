"use client"
import React, { useEffect, useState } from 'react'
import '../shopping.css'
import Shopheading from '../../components/shopheading'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../toolkit/cartSlice'
import Itemcard from '../../components/Itemcard'
import { useUser } from '@auth0/nextjs-auth0/client'
function RenderDisp() {
  const { user, error, isLoading } = useUser();
    const dispatchUid=useDispatch()
    const[product,setProduct]=useState([1]);
    const produc = useSelector((state) => state.search.render.data);
  useEffect(() => {
   // dispatchUid(addToCart(user))
    const fetchDataWithDelay = () => {
      
      
        let data;
        if(!produc||produc.length==0){
            data=[1]
        }
        else{
            data=produc
        }
        setProduct(data);
     
    };

    fetchDataWithDelay();
  }, [produc]);
 
  if(product[0]==1){
    return (
      <div className='render-main-loader'>
      <div class="loader">
   <div class="box1"></div>
   <div class="box2"></div>
   <div class="box3"></div>
 </div>
     </div>
    );
  }

  return (
    <>
     <div className='render-main-box'>
        <Shopheading/>
       { product&&product.map((item)=>(
    <Itemcard 
    key={item._id}
    userName={user}
    id={item._id}
    name={item.name}
    discrip={item.discription}
    img={item.image_url}
    price={item.price_in_rupees}
    rating={item.rating}
    />
      
 ))
         
       }
</div>
    </>
  )
}

export default RenderDisp