import { NextResponse } from "next/server";
import { connStr } from "../mongodb";
import { SetProduct } from "../model/setproduct";
import mongoose from "mongoose";
import { Product } from "../model/product";
export async function POST(req,res){
    const Req= await req.json()
    var del;
    var message='';
    let newSetProduct;
    if (Req.aprove){ 
    del= Req.aprove.data
    newSetProduct={
        name:Req.product[0].name,
        price:Req.product[0].price_in_rupees,
        image_url:Req.product[0].image_url,
        description:Req.product[0].description,
        sellerName:Req.product[0].sellerName
        };
        console.log(Req.aprove.status)
}
   
    
    try{
        await mongoose.connect(connStr)
    
    if(Req.aprove) {  try{
        await SetProduct.deleteOne({ _id: del });
     }
     catch(err){
        message="Unable to delete :("
     }
      if(Req.aprove.status)  try {
            await Product.create(newSetProduct)
        } catch (error) {
            message='Unable to add, Try again'
        }}
        let reqProduct= await SetProduct.find()
       return  NextResponse.json({result:reqProduct,message})
    }
    catch(err){
        console.log('unable to connect', err)
        }
            
}