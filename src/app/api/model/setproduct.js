import mongoose from "mongoose";
const ProductModel=new mongoose.Schema({
    name:String,
    description:String,
    image_url:String,
    price_in_rupees:Number,
    sellerName:String,
    sellerEmail:String
    })
    export const SetProduct=mongoose.models.unapproveds|| mongoose.model('unapproveds',ProductModel)