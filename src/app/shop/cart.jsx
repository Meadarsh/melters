import { useState,useEffect } from 'react'
import React from 'react'
import Image from "next/image";

import { useUser } from '@auth0/nextjs-auth0/client';
const Cart = () => {
  const { user, error, isLoading } = useUser();
  const[product,setProduct]=useState()
  

    useEffect(() => {
      if (!isLoading && user) {
        async function fetchCartData() {
          try {
            const response = await fetch("./../api/cart", {
              method: "POST",
              body: JSON.stringify({ user: user.email }),
            });
  
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
  
            const data = await response.json();
            setProduct(data.result);
          } catch (error) {
            console.error("Error:", error);
          }
        }
  
        fetchCartData(); 
      }
    }, [isLoading, user]);
  
   console.log(product)

  return (
    <>
    <div className="  h-full w-full">
        <div className="cartProList rounded h-4/5 overflow-y-scroll">

       {
        product?.map((item)=>(
          <div className=" h-24 w-full bg-slate-100 pr-3 overflow-hidden flex items-center mt-3 justify-between  rounded">
           
          <div className=" h-24 flex items-center  w-11/12">
          <Image className="h-24 mr-2"
              src={item.image_url}
              width={96}
              loading="lazy"
              height={96}
              alt="Image"
            />
           <div>
           <h1 className=" text-2xl">{item.name}</h1>
             <p >{item.description}</p>
           </div>
           </div>
            <div className="flex flex-col gap-2 items-end ">
            <p className=' text-lg'>{item.price_in_rupees}₹</p>
           
           <input className="AUbuttonA bg-slate-300 hover:bg-slate-200 h-7 w-20 rounded-lg "  type="button" value="Remove" />
          
            </div>
             </div>
        ))
       }
       
        </div>
        <div className=' h-28 w-full flex flex-col items-end justify-end'>
         <div className='flex'>
         <h2 className='mr-8 text-2xl  mb-5'>Total items: {product ? product.length : 0}</h2>
          <h2 className='mr-10 text-2xl  mb-5'>Total price:10</h2>
      
         </div>
          <div className='w-full flex items-end justify-end'>
       <input type="button" className=' bg-slate-300 w-40 h-10 mr-10 rounded' value="Cancle" />
        <input type="button" className='bg-purple-300 w-40 h-10 mr-10 rounded' value="Order" />
         </div> 
        </div>
    </div>
    </>
   
  )
}

export default Cart