import mongoose, { connect } from "mongoose";
import { connStr } from "../mongodb";
import { NextResponse } from "next/server";
import { OrderM } from "../model/order";
import { CartM } from "../model/cartmodel";
import { Product } from "../model/product";

export  async function POST(req,res){
   let request=await req.json()
   await mongoose.connect(connStr)
   
  const data={
   userId:request.user,
  }
 try {
  if(request.dataFetch){
    const orderProduct= await OrderM.find(data)
    let n = (orderProduct.length)?(orderProduct.length)-1:0
    console.log(n)
    const search={_id:orderProduct[n].productIds}
    const result=await Product.find(search)
    
    const send={
      products:result,
      totalPrice:orderProduct[n].totalPrice,
      quantity:orderProduct[n].quantity,
      orderId:orderProduct[n]._id

    }
    return NextResponse.json({send, success: true })
 }
    const cartItem=await CartM.find(data)
    const product={
        _id:cartItem.map((cartItem) => cartItem.productId)
    }
    const ordered={   
      quantity:request.quantities,
      totalPrice:request.total,
      userId:request.user,
      productIds:product._id
}
const result= new OrderM(ordered)
     await result.save();
     await CartM.deleteMany(data)
  
     return NextResponse.json({success:true})
 } catch (error) {
   console.log(error)
   
 } 
}