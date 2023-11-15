"use client"
import React, { useEffect, useState } from 'react'
import Map from './Indexmap'
import Cancle from './Cancle'
import {FaBars} from "react-icons/fa"
import { FaXmark} from "react-icons/fa6"
import DCard from './deliveryCard';
import { useUser } from '@auth0/nextjs-auth0/client'
import "./style.css";
const page = () => {
  const { user, error, isLoading } = useUser();
  const[data,setData]=useState()
  useEffect(()=>{
    async function fetchData(){
     try {
       const response= await fetch('../api/order',{
         method:'POST',
         body:JSON.stringify({user:user.email,dataFetch:true})
       })
       if(response){
        const dataa= await response.json()
        setData(dataa.send);
     }
     } catch (error) {
      console.log("ye error hai",error)
      
     }}
     fetchData()
  
  },[user])
  /***************************************************************************** */
   
  /***************************************************************************** */
    
        const[navCondition,setNavCondition]=useState([<FaBars className='icon-order'/>,1,''])
        function openClose(){
            if(navCondition[1]===1){
            setNavCondition ([ <FaXmark className='icon-order' />,0 ,'opacityChange', <div className={` ${navCondition[4]}  order-actions`}>
            <button onClick={neww} type="submit" className="btn btn-primary">Delay Order</button>
            <button onClick={cancleBox} className="btn btn-secondary">Decline Order</button>
        </div>,'open-button']);
        }
        else{
                setNavCondition([<FaBars className='icon-order'/>,1,''])}
          
        }
        function neww(){
           console.log(data)
        }
        /********************  canclilation Box ************************************* */
        const [boxCondition,setBoxCondition]=useState(false)
        function cancleBox() {
            if (boxCondition) {
              setBoxCondition(false);
            } else {
              setBoxCondition(true);
            }
          }
        
   
  return (
    <div className='mainOrderPage'>
         {boxCondition&&<Cancle cancleBox={cancleBox} />}
       
        <div onClick={openClose} className={`${navCondition[4]} nav-Button`}>
            {navCondition[0]}
            {navCondition[3]}

        </div>
        <div className="top-order-page">
        <div className='order-detail-pannel ml-10 -mt-10'>
        <div className="order-detail">
         {
           data&&data.products.map((item) => (
              <DCard key={item._id}
              item={item} quantity={data.quantity[item._id] } /> 
            ))
            
         } 
       
        </div>
        <div className=' h-14 totalBox m-auto text-3xl flex items-center justify-end'>
        <h1>Total Price:{data&&data.totalPrice}</h1>
        </div>
        </div>
        <div>
      
    <Map/>

        <div className="delivery-progress">
            <h2>Delivery Progress</h2>
           

        </div>
        </div>
        </div>
    </div>
  )
}

export default page