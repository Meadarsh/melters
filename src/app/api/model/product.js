import mongoose from "mongoose";
const ProductModel=new mongoose.Schema({
    
product_id:Number,
name:String,
description:String,
keywords:Array,
image_url:String,
price_in_rupees:Number,
rating:Number,
sellerName:String
})
export const Product=mongoose.models.products|| mongoose.model('products',ProductModel)