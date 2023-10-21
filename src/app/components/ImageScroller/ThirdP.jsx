"use client"
import React, { useEffect, useState } from "react";
import styles from "./third.module.css";
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ThirdP = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  const [yaxis,setYaxis]=useState(0)

    useEffect(()=>{
      gsap.to('.p3Rdiv',{
        yPercent:yaxis,
        duration:.7
      })
    },[yaxis])
   
  
  
  
  return (
    <div className={`${styles.maindivp3} mainSdiv`}>
      <div className={styles.Pabsolutediv}>
        <div className={`${styles.leftdiv} p3ldiv`}>
          <div className={styles.textbox} onMouseEnter={()=>{setYaxis(0)}}>
          
            <h2 className="text1">Gelato</h2 >
            <div className={styles.underLine}></div>
          </div>
          <div className={styles.textbox} onMouseEnter={()=>{setYaxis(-16.666666)}} >
          
            <h2 className="text2">Kulfi</h2>
             <div className={styles.underLine}></div>
          </div>
          <div className={styles.textbox} onMouseEnter={()=>{setYaxis(-33.333333)}}>
            <h2 className="text3">Sherbet</h2>
             <div className={styles.underLine}></div>
          </div>
          <div className={styles.textbox} onMouseEnter={()=>{setYaxis(-50)}}>
          
            <h2 className="text4">Sorbet</h2>
             <div className={styles.underLine}></div>
          </div>
          <div className={styles.textbox} onMouseEnter={()=>{setYaxis(-66.666666)}}>
            <h2 className="text5">Snow Cream</h2>
             <div className={styles.underLine}></div>
          </div>
          <div className={styles.textbox}onMouseEnter={()=>{setYaxis(-83.3333333)}}>
          
            <h2 className="text6">Italian Ice</h2>
             <div className={styles.underLine}></div>
          </div>
        </div>
        <div className={styles.mainImgDiv}>
        <div className={`${styles.rightdiv} p3Rdiv`}>
     <div className={styles.innerImgdiv}><Image src="/Image/geleto.jpg" width={400} height={800}/></div>
     <div className={styles.innerImgdiv}> <Image src="/Image/kulfi.png" width={500} height={700}/></div>
     <div className={styles.innerImgdiv}> <Image src= "/Image/sherbet.png" width={460} height={0} /></div>
     <div className={styles.innerImgdiv}> <Image src="/Image/sorbet.jpg" width={460} height={0} /></div>
     <div className={styles.innerImgdiv}> <Image src="/Image/snowcream.jpg" width={460} height={0} /></div>
     <div className={styles.innerImgdiv}> <Image src="/Image/geleto.jpg" width={460} height={0} /></div>
    </div> 
        </div>
      </div>
    </div>
  );
};

export default ThirdP;
