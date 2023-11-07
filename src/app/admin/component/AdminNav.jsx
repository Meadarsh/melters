"use client"
import React from "react";
import './admin.css'
import {BsFillPersonFill} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
function AdminNav(){
    return(
        <div className="adminNav-main">
             <a href="/admin/">
             <div className="admin-icon">
             <BsFillPersonFill className="admin-icon-cont"/>
             <p>Admin</p>
             </div>
             </a>
            <a href='/admin/allproducts'><h1>All products</h1></a>
            <a href='/admin/unaproved'><h1>Unaproved</h1></a>
            <a href='/admin/manage-products'><h1>Manage-product</h1></a>
            <a href='/admin/users'><h1>Users</h1></a>
            <a href='/admin/orders'><h1>Orders</h1></a>
        </div>
    )
}
export default AdminNav;