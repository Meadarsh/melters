'use client'
import React from 'react'
import  '@/app/style/navigation.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import { IoPersonCircleSharp } from "react-icons/io5";
const Navbar = () => {
  const { user } = useUser();
  return (
   <>
    <div className={`mainnav`}>
        <div  className={`navbutton1`}>
        <a href={user?"/api/auth/logout":"/api/auth/login"}>< IoPersonCircleSharp/></a>   
        </div>
        <div className={'NCdiv '}>
        <div className={'margintop'}>
        
           <a href={user?"/shop":"/api/auth/login?returnTo=/shop"}> <h2 >Shop</h2>
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