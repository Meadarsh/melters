import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connStr } from "../mongodb";
import { Product } from "../model/product";

export async function POST(req,resp){
let request= await req.json()

  const agg = [
    {
      '$search': {
        'text': {
          'query':`${request.name||_}`, 
          'path': [
            'name', 'keywords'
          ],
          fuzzy:{}
        }
      }
    }, {
      '$sort': {
        'price_in_rupees': 1
      }
    }
  ];

  
  
  await mongoose.connect(connStr)
    console.log("Connected")
  const data = await Product.find()
  const dataS = await Product.aggregate(agg)
  var dataDisplay
  if(dataS.length!=0){
    dataDisplay=dataS 
  }
  else{
    dataDisplay=data
  }
  
  
    return NextResponse.json({result:dataDisplay,success:true});
}
