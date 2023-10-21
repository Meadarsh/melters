'use client'
import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap/all'
const Shopheading = () => {
    useEffect(()=>{
        gsap.to('.paragra',{
          xPercent:50,
          delay:.5,
          duration:.6
        })
      })
  return (
    <div className='rightCpannelHeading'> <div className='positionRel'><h1>Shop</h1><div className='paragraphHide'><p className='paragra'>That fulfills your desire</p></div></div></div>

  )
}

export default Shopheading