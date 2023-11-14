"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/style/firstpage.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Curso from "./components/cursor";
import Navbar from "./components/Navbar";
import SecondP from "./components/HorizontalSc/horizontalpage";
import ThirdP from "./components/ImageScroller/ThirdP";
import Fourth from "./components/Fourth";
export const Firstpage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.to("body", {
      backgroundColor: "white",
      delay: 1,
    });

    gsap.from(".melter", {
      marginLeft: 300,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(".world", {
      delay: 1.3,
      translateY: 40,
    });
    gsap.to(".icecream", {
      delay: 1.3,
      translateY: 60,
    });

   /* gsap.from(".maindiv", {
      scale: 0.95,
      y: 150,
      duration: 0.6,
    });*/
    gsap.from(".mainnav", {
      backgroundColor: "transparent",
      delay: 0.6,
    });
    gsap.from(".navbutton1", {
      x: -50,
      duration: 0.3,
      delay: 1.3,
    });
    gsap.from(".margintop", {
      x: -50,
      duration: 0.3,
      delay: 1.5,
    });
    gsap.from(".navbutton", {
      x: -50,
      duration: 0.3,
      delay: 1.7,
    });
    gsap.to(".mainnav", {
      width: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".mainSdiv",
        start: "0% 80%",
        end: "-90% center",
        scrub: true,
      },
    });
  });

  let inputStyle = {
    backgroundColor: "rgb(255, 223, 245)",
  };
  let inputStyle2 = {
    backgroundColor: "rgb(255,255, 255)",
  };
  const [backc, setbackc] = useState(inputStyle);

  function fillcolorM() {
    setbackc(inputStyle);
  }
  function remcolorM() {
    setbackc(inputStyle2);
  }

  return (
    <>
      <Curso />
      <Navbar />
      <div
        data-scroll-container
        style={backc}
        className={`${styles.mainPbox} maindiv`}
      >
        <div className={styles.leftdiv}>
          <div className={styles.sizer2}>
            
            <h2 className={`${styles.leftdh2} world`}>
              Welcome to the world of
            </h2>
          </div>
          <h1 className={`${styles.leftdh1} melter`}> M€LTERS</h1>
          <br />
          <div data-scroll data-scroll-speed=".3" className={styles.sizer3}>
          
            <h2 className={`${styles.leftdh3} icecream`}>iCECREAM</h2>
          </div>
        </div>
      
      </div>
      <SecondP />
      <ThirdP />
      <Fourth />
    </>
  );
};

export default Firstpage;
