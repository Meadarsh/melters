"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { FiFilter, FiChevronDown,FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { IoBagOutline } from "react-icons/io5";
import {BiCartAlt ,BiHeart,BiStore} from "react-icons/bi"
import { addRender } from "../toolkit/slice";
import { useSelector } from "react-redux";



const Searchf = ({sendDataToParent}) => {
  const handleClick = (val) => {
    sendDataToParent(val);
    setNavigate(val)
  };
  const [navigate,setNavigate]=useState(0)
  const dispatch=useDispatch();
  const cartCount=useSelector((item)=>item.cart.cart)

    const [searchTerm, setSearchTerm] = useState(".");
  useEffect(() => {
    gsap.to(".filter", {
      yPercent: -100,
    });
   
    async function  fetchData(){
     
      try {
        let name = searchTerm;
        const response = await fetch('../api/search', {
          method: 'POST',
          body: JSON.stringify({ name }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let result = await response.json();
        result =  Object.values(result) ;
        if (Array.isArray(result)) {
          dispatch(addRender(result[0]))
        } else {
          dispatch(addRender([]))
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
   fetchData();
 
  },[searchTerm]);
  
  

  let value = "close";
  function openfilter() {
    if (value == "close") {
      gsap.to(".filter", {
        yPercent: 0,
        duration: 0.3,
      });
      value = "open";
    } else if (value == "open") {
      gsap.to(".filter", {
        yPercent: -100,
        duration: 0.3,
      });
      value = "close";
    }
  }

  function searching(val) {
    setSearchTerm(val);
  }

  return (
    <div className="leftCpannel">
     
   {navigate ===0?<form className="form">
        <label >
          <input
            className="input"
            onChange={(e) => {
              searching(e.target.value);
            }}
            value={searchTerm}
            type="text"
            required=""
            placeholder="Search Icecream"
            id="search"
          />
          <div className="fancy-bg"></div>
          <div className="search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <button className="close-btn" onClick={()=>{setSearchTerm(".")}} type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
       
      </form>: <div onClick={()=>handleClick(0)} className={`cursor-pointer w-28 ${navigate===0?'text-purple-600':'text-black' } hover:text-purple-600 cart-order mt-5 flex items-center justify-between `}>
     
     <h2 className="text-xl ">Shop</h2><BiStore />
      </div>}
       <div onClick={()=>handleClick(1)} className={`cursor-pointer w-28  ${navigate===1?'text-purple-600':'text-black' } hover:text-purple-600 cart-order mt-5 flex items-center justify-between `}>
     
     <h2 className="text-xl ">Wishlist</h2><BiHeart />
      </div>
     <div onClick={()=>handleClick(2)} className={`cursor-pointer w-28 ${navigate===2?'text-purple-600':'text-black' } hover:text-purple-600 cart-order mt-5 flex items-center justify-between `}>
     
     <h1 className="text-xl  ">Cart</h1> <BiCartAlt />
      </div>
    <a href="/order">
    <div className={`cursor-pointer w-28 hover:text-purple-600 cart-order mt-5 flex items-center justify-between `}>
     
     <h1 className="text-xl  ">Orders</h1> <IoBagOutline />
      </div>
    </a>
      <div className="filterOC cursor-pointer" onClick={openfilter}>
        <FiFilter />
        <FiChevronDown />
      </div>
      <div className="openclose">
        <div className="filter">
          <h1>Flavours</h1>
          <div className="FlavrList">
            <h2>Chocolate</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Vanilla</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Pistachio</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Strawberry</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Mint Choco Chip</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Rocky Road</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Coffee</h2>
            <label className="container">
              <input type="checkbox"/>
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Salted Caramel</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Butterscotch</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="FlavrList">
            <h2>Bubblegum</h2>
            <label className="container">
              <input type="checkbox" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Searchf;
