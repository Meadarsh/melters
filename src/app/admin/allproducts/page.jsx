"use client"

import React, { useEffect, useState } from 'react'
import '../pagesStyle.css'
const page = () => {
    const [Data,setData]=useState([])
    useEffect(()=>{
     async function dataFetch (){
        let data= await fetch("../api/admin")
         data= await data.json()
         setData(data.result)
     } 
      dataFetch()
    
      
    },[])
  return (  
    <div className='AllProductMain'>
              <h1 className='adminPtitle'>All products</h1>
       {
         Data.map((item)=>{
           return( 
            console.log(item),
            <div className='AllProductC' key={item._id}>
            <div className='AproductCardd'> 
             
            <img src={`${item.image_url}`} height={30} width={30} alt="n/a" />

           <div> <h2>{item.name}</h2>
            <p>{item.description}</p></div>
            </div>
            <div><h2>{item.price_in_rupees}₹</h2></div>
            </div>
           )
        })
       }
        
    </div>
  )
}

export default page