import mongoose from "mongoose";
const CartModel=new mongoose.Schema({
    userId:String,
    productId:String
})
export const CartM=mongoose.models.cartpro|| mongoose.model('cartpro',CartModel)