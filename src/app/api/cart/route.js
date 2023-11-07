import { NextResponse } from "next/server";
import { connStr } from "../mongodb";
import { CartM } from "../model/cartmodel";
import { Product } from "../model/product";
import mongoose from "mongoose";

export async function POST(req,res){
    try {
        const body = await req.json();
        const data={ 
            userId:body.user
        }
        await mongoose.connect(connStr);
        console.log("database Connected")
        const cartItem=await CartM.find(data)
        const product={
            _id:cartItem.map((cartItem) => cartItem.productId)
        }
        const result=await Product.find(product)
        await mongoose.connection.close();
        return NextResponse.json({ result:result, success: true }); 
      } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message });
      }    
      
};