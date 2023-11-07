"use client"
import Searchf from '@/app/components/Search-f'
import './shopping.css'
import RenderDisp from './renderDisp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Cart from './cart'
import { BsTypeH1 } from 'react-icons/bs'
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
export default withPageAuthRequired(function  ShoppingP  ({user}){

  return (
   
   
    <div className='MainshopP'>
     
       
        <BrowserRouter>
        <Searchf/> 
        <Routes>
            <Route path="shop/" element={<RenderDisp user={user} />} />
            <Route path="shop/Cart/*" element={<Cart />} />
          </Routes>
       </BrowserRouter>
          
        </div>
        
    
  )
})

