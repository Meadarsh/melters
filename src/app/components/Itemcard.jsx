'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
const Itemcard = (item) => {
const[ratingg,setRating]=useState([])


let rati=item.rating;
useEffect(()=>{

  let arr=[]
for(let a=0;a<rati;a++){
 arr[a]=a;

}
setRating(arr)

gsap.to('.card',{
  opacity:1,
  delay:.2,
  duration:1
})

},[])
console.log(ratingg)
  return (
   <>
   <div className="card"  >
    <div className="img">
       <Image src={item.img} width={300}
       loading='lazy'
       height={250}
       alt='Image' />
    </div>
    <h2>{item.name}</h2>
   <div className="dispflex">
  { 
  ratingg.map(()=>(
<div className="rating">
  <input value="5" name="rate" id="star5" type="radio" defaultChecked='true'/>
  <label title="text" htmlFor="star5"></label>
</div>
  ))
   }
<h2>{`₹${item.price}`}</h2>
   </div>
    
   </div>
   </>
  )
}

export default Itemcard