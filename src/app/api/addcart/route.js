import { NextResponse } from "next/server";
import { connStr } from "../mongodb";
import { CartM } from "../model/cartmodel";
import mongoose from "mongoose";

export async function POST(req,res){
    try {
        const body = await req.json();
        const data={
            productId:body.item.id, 
            userId:body.item.user
        }
       
        await mongoose.connect(connStr);
        console.log("database Connected")
        const newItem = new CartM(data);
        await newItem.save();
        const cartItem=await CartM.find(data)
       
        return NextResponse.json({ result:cartItem, success: true }); 
      } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message });
      }    
      
};