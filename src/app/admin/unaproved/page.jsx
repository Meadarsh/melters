"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
const Unaproved = () => {
  const [product, setProduct] = useState();
  const [aprove,setAprove]=useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../api/unaproved", {
          method: "POST",
          body: JSON.stringify({aprove,product}),
        });

        if (response.ok) {
          let data = await response.json();
          return data;
        }
      } catch (error) {
        console.log("Error", error);
      }
    }

    async function getData() {
      try {
        let data = await fetchData();
        setProduct(data.result);
      } catch (error) {
        console.log("Error", error);
      }
    }

    getData();
  }, [aprove]);
  function Aprove(data){
   setAprove({data:data,status:true})
  }
  function Reject(data){
   setAprove({data:data,status:false})
  }
console.log(aprove)


  return (
    <>
      <div>unaprovedd</div>
      {product &&
        product.map((i) => (
          <div className="AUnapproveCard" key={i._id}>
           
         <div className="AunapprovedCardd">
          <Image className=" h-5/6"
              src={i.image_url}
              width={150}
              loading="lazy"
              height={150}
              alt="Image"
            />
          <div>
          <h1 className=" text-3xl">{i.name}</h1>
            <p >{i.description}</p>
            <p>Requested by: <span className="text-purple-700">{i.sellerName}</span></p>
          </div>
          </div>
           <div className="AunaprovedBt">
           <p>{i.price_in_rupees}₹</p>
          <div className="flex gap-2">
          <input onClick={()=>Aprove(i._id)} className="AUbuttonA bg-purple-200 hover:bg-purple-400" type="button" value="Aprove" />
          <input className="AUbuttonA bg-red-200 hover:bg-red-400 " onClick={()=>Reject(i._id)} type="button" value="Reject" />
          </div>
           </div>
            </div>
          
        ))}
    </>
  );
};

export default Unaproved;
