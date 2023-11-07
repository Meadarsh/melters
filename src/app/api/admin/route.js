import { NextResponse } from "next/server";
import { connStr } from "../mongodb";
import { Product } from "../model/product";
import mongoose from "mongoose";

export async function GET(){
    try {
        await  mongoose.connect(connStr)
        const data= await Product.find()
        return NextResponse.json({result:data})
    }
    catch(error){
        console.error("Unable to fetch:", error); 
        return NextResponse.json({ result: "Error occurred" }); 
    }
   
}
