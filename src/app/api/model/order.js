import mongoose from "mongoose";
const OrderModel= new mongoose.Schema({
    order_id: String ,
    userId : {type:String,required:true},
    productIds:{type:Object, required: true},
    totalPrice:Number,
    quantity:Object,
    
})
export const OrderM=mongoose.models.orders||mongoose.model("orders",OrderModel)