"use client"
import React, { useState } from 'react'
import Map from './map'
import Cancle from './Cancle'
import {FaBars} from "react-icons/fa"
import {FaS, FaXmark} from "react-icons/fa6"
import DCard from './deliveryCard';
import "./style.css";
const page = () => {
        const[navCondition,setNavCondition]=useState([<FaBars className='icon-order'/>,1,''])
        function openClose(){
            if(navCondition[1]===1){
            setNavCondition ([ <FaXmark className='icon-order' />,0 ,'opacityChange', <div className={` ${navCondition[4]}  order-actions`}>
            <button onClick={neww} type="submit" class="btn btn-primary">Delay Order</button>
            <button onClick={cancleBox} class="btn btn-secondary">Decline Order</button>
        </div>,'open-button']);
        }
        else{
                setNavCondition([<FaBars className='icon-order'/>,1,''])}
          
        }
        function neww(){
            alert('New Function')
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
        
    let ab=[1,1,1,1,1,1,1,1,1,1,]
  return (
    <div className='mainOrderPage'>
         {boxCondition&&<Cancle cancleBox={cancleBox} />}
       
        <div onClick={openClose} className={`${navCondition[4]} nav-Button`}>
            {navCondition[0]}
            {navCondition[3]}

        </div>
        <div className="top-order-page">
        <div className='order-detail-pannel'>
        <div className="order-detail">
         {
            ab.map((item, index) => (
              <DCard key={index} /> 
            ))
            
         } 
       
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