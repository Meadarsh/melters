import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { setProduct } from "../model/setproduct";
import { connStr } from "../mongodb";

export async function POST(req,res){
    try {
        await mongoose.connect(connStr);
        let payload = await req.json();
        let product = new setProduct(payload.data);
        const result = await product.save();
        
        if (result) {
          // If the database operation was successful, return success true
          return NextResponse.json({ success: true, result });
        } else {
          // If there was an issue with the database operation, return an error response
          return NextResponse.json({ success: false, error: "Database operation failed" });
        }
      } catch (error) {
        // Handle any other errors
        return NextResponse.json({ success: false, error: error.message });
      }
}