"use client"
import Searchf from '@/app/components/Search-f'
import './shopping.css'
import RenderDisp from './renderDisp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Cart from './cart'
import { BsTypeH1 } from 'react-icons/bs'
const  ShoppingP =  () => {

  return (
   
   
    <div className='MainshopP'>
     
       
        <BrowserRouter>
        <Searchf/> 
        <Routes>
            <Route path="shop/" element={<RenderDisp />} />
            <Route path="shop/Cart/*" element={<Cart />} />
          </Routes>
       </BrowserRouter>
          
        </div>
        
    
  )
}

export default ShoppingP