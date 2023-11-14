import mongoose, { connect } from "mongoose";
import { connStr } from "../mongodb";
import { NextResponse } from "next/server";

export default async function POST(req,res){
   await mongoose.connect(connStr)
   
}