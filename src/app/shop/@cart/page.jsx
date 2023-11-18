"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import {BsTrash3Fill} from "react-icons/bs"
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
const Cart =  () => {
  const [itemsAvail,setItemavil] =useState(false)
  const [loadingItems, setLoadingItems] = useState({});
  const [quantities, setQuantities] = useState({});
  const [orderLoading,setOrderLoading]=useState(true)
  const [total,setTotal]=useState(0)
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
         if(data.length===0){ setProduct();
          setItemavil(true) }
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
    }, [user,isLoading,remove,orderLoading]);
    async function orderApprove(){
      setOrderLoading(false)
      
      try {
       const data= await fetch("../../api/order",{
         method:"POST",
         body:JSON.stringify({quantities,user:user.email,total})
       })
       let status= await data.json()
       if(status.success){
        setOrderLoading(true)
        setTotal(0)
       }

      } catch (error) {
       console.log("unable to proccess order ",error)
      }
    }
function removeP(val){
  setLoadingItems({ ...loadingItems, [val]: true });
  setRemove({data:val,status:true})
  const updatedQuantities = { ...quantities };
  delete updatedQuantities[val];
  setQuantities(updatedQuantities);
}  
useEffect(() => {
  if (product) {
    const totalPrice = product.reduce((acc, item) => acc + item.price_in_rupees, 0);
    setTotal(totalPrice);
  }

}, [product]);
 
 const handleDecrease = async (itemId) => {
   if (quantities[itemId] && quantities[itemId] >1) {
     setQuantities({
      ...quantities,
      [itemId]: quantities[itemId] - 1,
    })
    const products =await product.find((item) => item._id === itemId);
    if (products) {
      setTotal(total - products.price_in_rupees);
    }
  }
};

const handleIncrease = async (itemId) => {
  
  setQuantities({
    ...quantities,
    [itemId]: (quantities[itemId] || 1) + 1,
  });
  const products = await product.find((item) => item._id === itemId);
  if (products) {
    setTotal(total + products.price_in_rupees);
  }
};


  return (
    <>
    <div className=" ml-3 relative h-full w-9/12">
  
   
        <div className="cartProList rounded h-4/5 overflow-y-scroll">

       {
        product?product.map((item)=>(
          <div key={item._id} className=" h-36 w-full border-b border-black pl-10 pr-10  flex items-center justify-between">
           
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
           <div className=' w-26 h-16  flex justify-center items-end'>
            <button className=' w-8 h-7 rounded-l-md flex items-center justify-center text-3xl bg-purple-300'  onClick={() => handleDecrease(item._id)}
            disabled={!quantities[item._id] || quantities[item._id] <= 1} >-</button>
           <div className='h-7 flex items-center justify-center w-10 bg-purple-100'><p>{quantities[item._id] || 1 }</p></div>
            <button className=' text-3xl w-8 h-7 rounded-e-md flex items-center justify-center bg-purple-300' onClick={() => handleIncrease(item._id)} >+</button>
           </div>
            <div className="flex flex-col gap-2 items-end ">
            <p className=' text-lg'>{item.price_in_rupees}₹</p>
          <div>
           <div className=' h-8 w-8 flex items-center justify-center hover:text-red-600' onClick={()=>removeP(item._id)}>
           {
           loadingItems[item._id] ?<div className='remloader'></div>:<BsTrash3Fill/>
           
          }
            </div>  
          
          </div>
            </div>
             </div>
        )):<div className='h-full w-full flex items-center justify-center gap-3'>{itemsAvail? <div className='flex justify-center gap-10' ><h1 className=' text-gray-500 text-3xl'>No product </h1> <a href="/shop"><div className=' h-10 flex items-center justify-center rounded w-28 bg-purple-300 hover:bg-purple-400'>Go to shop</div></a></div> :<div className='remloader'></div>  }</div> }
       
        </div>
      { product&& <div className=' h-28 w-full flex flex-col items-end justify-end'>
         <div className='flex'>
         <h2 className='mr-8 text-2xl  mb-5'>Total items: {product ? product.length : 0}</h2>
          <h2 className='mr-10 text-2xl  mb-5'>Total price:{total}₹</h2>
      
         </div>
          <div className='w-full flex items-end justify-end'>
       <input type="button" className=' bg-slate-300 w-40 h-10 mr-10 rounded' value="Cancle" />
      <div  className='bg-purple-300 w-40 h-10 mr-10 rounded flex items-center justify-center' onClick={orderApprove}  >{orderLoading?<h2>Order</h2>:<div className='remloader' ></div>}</div>
         </div> 
        </div>}
    </div> 
    </>
   
  )
}

export default Cart