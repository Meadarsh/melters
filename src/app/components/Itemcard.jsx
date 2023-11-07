'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import {BiCartAdd} from "react-icons/bi"


const Itemcard = (item) => {
  const[ratingg,setRating]=useState([])


let rati=item.rating;
useEffect(()=>{

  let arr=[]
for(let a=0;a<rati;a++){
 arr[a]=a;

}
setRating(arr)

gsap.to('.shopcard',{
  opacity:1,
  delay:.2,
  duration:1
})

},[])
function addCart(item){
  fetch("./../api/addcart",{
    method:"POST",
    body:JSON.stringify({item})
     
  }) .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); 
  })
  .then((data) => {
   console.log(data)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  }

  return (
   <>
   <div className="shopcard relative flex flex-col items-center "  >
   
    
   <div className='addtocartdiv h-6 w-10 flex items-center pl-1 bg-purple-500 absolute right-0 top-5 cursor-pointer' onClick={()=>addCart({id:item.id,user:item.userName.email})}>
   <BiCartAdd className=' text-white 3xl'/>
   </div>
    <div className="img">
       <Image src={item.img} width={250}
       loading='lazy'
       height={250}
       alt='Image :(' />
    </div>
   <div className=' w-11/12'>
   <h2>{item.name}</h2>
   <div className="dispflex">
  { 
  ratingg.map(()=>(
<div className="rating" key={Math.random()}>
  <input value="5" name="rate" id="star5" type="radio" defaultChecked='true'/>
  <label title="text" htmlFor="star5"></label>
</div>
  ))
   }
<h2>{`₹${item.price}`}</h2>
   </div>
   </div>
    
   </div>
   </>
  )
}

export default Itemcard