"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import {BsTrash3Fill} from "react-icons/bs"
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
const Cart =  () => {
  const { user, error, isLoading } = useUser();
  const[remove,setRemove]=useState();
  const[product,setProduct]=useState()
    useEffect(() => {
      if (!isLoading && user) {
        async function fetchCartData() {
          try {
            const response = await fetch("/../../api/cart", {
              method: "POST",
              body: JSON.stringify({ user:user.email ,remove }),
            });
  
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
  
            let data = await response.json();
            data=data.result
         if(data.length===0){ setProduct();}
         else{
          setProduct(data)
        }
        }
       
           catch (error) {
            console.error("Error:", error);
          }
        }

        fetchCartData(); 
      }
    }, [user,isLoading,remove]);
function removeP(val){
  setRemove({data:val,status:true})
}  
console.log(product)
  return (
    <>
    <div className="  h-full w-full">
        <div className="cartProList rounded h-4/5 overflow-y-scroll">

       {
        product?product.map((item)=>(
          <div className=" h-36 w-full border-b border-black pl-10 pr-10  flex items-center justify-between">
           
          <div className=" h-24 flex  w-8/12">
          <Image className="h-24 mr-2"
              src={item.image_url}
              width={96}
              loading="lazy"
              height={96}
              alt="Image"
            />
           <div>
           <h1 className=" text-2xl">{item.name}</h1>
             <p className=' text-gray-600 text-sm'>{item.description}</p>
           </div>
           </div>
            <div className="flex flex-col gap-2 items-end ">
            <p className=' text-lg'>{item.price_in_rupees}₹</p>
          <div>
             
           <BsTrash3Fill  className=' hover:text-red-600' onClick={()=>removeP(item._id)} />
          
          </div>
            </div>
             </div>
        )):<div className='h-full w-full flex items-center justify-center'><h1 className=' text-gray-500 text-3xl'>No product :(</h1></div> }
       
        </div>
        <div className=' h-28 w-full flex flex-col items-end justify-end'>
         <div className='flex'>
         <h2 className='mr-8 text-2xl  mb-5'>Total items: {product ? product.length : 0}</h2>
          <h2 className='mr-10 text-2xl  mb-5'>Total price:10</h2>
      
         </div>
          <div className='w-full flex items-end justify-end'>
       <input type="button" className=' bg-slate-300 w-40 h-10 mr-10 rounded' value="Cancle" />
       <a href={"/order"} > <input type="button" className='bg-purple-300 w-40 h-10 mr-10 rounded' value="Order" /></a>
         </div> 
        </div>
    </div> 
    </>
   
  )
}

export default Cart