"use client"
import React, {useState, useEffect } from "react";
import "./style.css";
import Image from 'next/image'
import Popup from "./popupmessege";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
export default withPageAuthRequired(function Seller({user}) {
  const [data, setData] =useState();
  const [sellerName,setSellerName]=useState()
  const [sellerEmail,setsellerEmail]=useState()
  const [name, setName] =useState('');
  const [price_in_rupees,setPrice]=useState('')
  const [description,setDiscription] =useState('');
  const [messege,setMessege]=useState('');
  const [image_url,setUrl]=useState('')
  const dis="Discription length must be above 15 words."
  const nameP="Enter name between a-z or A-Z."
  const priceP="Enter valid number for price."
  let regex = /^[a-zA-Z\s]+$/; 
 
  function Submit(){
  setShowPopup(true)
  if(regex.test(name) ){
    if(40< description.length){
    if(0<price_in_rupees){
      if (20<image_url.length) {
        setData({name,description,image_url,price_in_rupees,sellerName,sellerEmail})
        setMessege("Submiting..")
       
        return
      } else {
        setMessege('Invalid image url')
      }

      
    }
     else{
      setMessege(priceP) 
     }
    }
  else{
    setMessege(dis)
  }}
  else{
    setMessege(nameP)
  }
}

 useEffect(()=>{
  setSellerName(user.name)
  setsellerEmail(user.email)
 const postApiData = async () => {
 if(data!=undefined){
  try {
  const responce= await fetch("../api/adddata", {
        method: "POST",
        body: JSON.stringify({data}),
      })
      const result= await responce.json()
      if(result.success){
        
      setMessege('Submited for Approval')
      setShowPopup(true)
 }
    }
   
      catch (err) {
        setMessege(err)
        throw err;   
        }
        
        
    }}
    postApiData();
  },[data])
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="sellerPage-main">
      <Image src='/Image/MeltersSeller.png' width={1920} height={1080} alt="Image" ></Image>
      {showPopup && (
        <Popup message={messege} onClose={closePopup} />
      )}
      
        <div className="sellerPage-innner">

       
                <p className="sellername">Hello,{user.name}</p>
                <div className="sellerPage-innnerdiv">     
                <h2>Enter product Details</h2>
                <input
                  className="name-sellerProdut"
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                />
                <textarea
                  name="disc"
                  className="textArea-seller"
                  cols="30"
                  rows="10"
                  value={description}
                  placeholder="Describe your product"
                  onChange={(e)=>{
                    setDiscription(e.target.value)
                  }}
              
                ></textarea>
                <input className="name-sellerProdut" type="number" placeholder="Enter Price" value={price_in_rupees}  onChange={(e)=>{
                    setPrice(e.target.value)
                  }} name="pric" id="" />
                  <input
                  className="name-sellerProdut"
                  type="text"
                  placeholder="Image url"
                  value={image_url}
                  onChange={(e)=>{
                    setUrl(e.target.value)
                  }}
                />
                <input
                  type="button"
                  value="Submit"
                  className="submitButton-seller"
                  onClick={Submit}
                />
                </div>
              </div>
              </div>
  );

}

);


