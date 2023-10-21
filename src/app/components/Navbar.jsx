'use client'
import React from 'react'
import  '@/app/style/navigation.css'
import { IoPersonCircleSharp } from "react-icons/io5";
const Navbar = () => {
  return (
   <>
    <div className={`mainnav`}>
        <div  className={`navbutton1`}>
       < IoPersonCircleSharp/>  
        </div>
        <div className={'NCdiv'}>
        <div className={'margintop'}>
        
           <a href="/shop"> <h2 >Shop</h2>
           </a>
           
        </div>
        <div className={'navbutton'}>
            <h2>Customize</h2>
           
        </div>
        </div>
    </div>
   </>
  )
}

export default Navbar