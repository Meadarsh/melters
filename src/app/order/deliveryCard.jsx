import React from 'react'

const DCard = () => {
  return (
    <div className='delivery-card'>
        <div className="imageCont"></div>
        <div className="ordered-product-detail">
            <h2>nameOfProduct</h2>
            <p>description of product</p>
            <span>$10.99</span>
        </div>
    </div>
  )
}

export default DCard