import React from 'react'

const DCard = (item) => {
  const data=item.item
  return (
    <div className='delivery-card'>
        <div className="imageCont">
          <img className=' h-full w-full' src={data.image_url} alt="N/A" />
        </div>
        <div className="ordered-product-detail flex justify-between">
           <div>
           <h2>{data.name}</h2>
            <p>Quantity:{item.quantity}</p>
           </div>
           <div> <span className=' text-2xl'>{data.price_in_rupees}</span></div>
        </div>
    </div>
  )
}

export default DCard