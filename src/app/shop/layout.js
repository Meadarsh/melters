"use client"
import React, { useEffect, useState } from 'react'
import Curso from '../components/cursor'
import Searchf from '../components/Search-f'

import { useUser } from '@auth0/nextjs-auth0/client'
import "./shopping.css"


const layout = (props) => {
 const { user, error, isLoading } = useUser();
 const [cartData, setCartData] = useState(null);

  const[navVal,setNavVal]=useState(0)
  const DataFromChild = (data) => {
    setNavVal(data);
  };

  return (
  
<>

{user&&<div className='MainshopP'>

  <Searchf sendDataToParent={DataFromChild} />
  {props.children}
  {navVal===3?props.order:null}
  {navVal===2?props.cart:null}
  {navVal===0?props.shop:null}
  </div>}

</>
  )
}

export default layout