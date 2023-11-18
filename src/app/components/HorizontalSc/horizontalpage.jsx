"use client"
import React, { useEffect, useRef } from "react";
import styles from "./Secondp.module.css";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import Image from "next/image";
import "./horizontalpage.css"
import  gsap  from "gsap";
import "@/app/style/visitbutton.css";
const SecondP = () => {
  gsap.registerPlugin(ScrollTrigger);

  const racesRef = useRef(null);


  useEffect(() => {
    const races = racesRef.current;
    console.log(races.offsetWidth);

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "11% top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
    /******************Backg Color */

    gsap.to(".races", {
      backgroundColor: "chocolate",
      scrollTrigger: {
        trigger: ".maind",
        start: "-5% top",
        end: "18% center",
        onEnter: () => {
          gsap.to(".races ", { backgroundColor: "chocolate" });
          gsap.to('.maindiv',{backgroundColor:'chocolate'});
        },
        onEnterBack: () => {
          gsap.to(".races", { backgroundColor: "chocolate" });
        },
        onLeaveBack:()=>{
          gsap.to(".races", { backgroundColor: "rgb(255, 223, 245)" });
          gsap.to('.maindiv',{backgroundColor:'rgb(255, 223, 245)'});
        }
      },
    });

    gsap.to(".races", {
      
      scrollTrigger: {
        trigger: ".maind",
        start: "18% top",
        end: "45% center",

        onEnter: () => {
          gsap.to(".races", { backgroundColor: "rgb(243, 229, 171)" });
        },
        onEnterBack: () => {
          gsap.to(".races", { backgroundColor: "rgb(243, 229, 171)" });
        },
      },
    });

    gsap.to(".races", {
     
      scrollTrigger: {
        trigger: ".maind",
        start: "47% top",
        end: "72% center",
        onEnter: () => {
          gsap.to(".races", { backgroundColor: "rgb(201,127,127)" });
        },
        onEnterBack: () => {
          gsap.to(".races", { backgroundColor: "rgb(201,127,127)" });
        },
      },
    });
    gsap.to(".races", {
     
      scrollTrigger: {
        trigger: ".maind",
        start: "72% top",
        end: "99% center",
        onEnter: () => {
          gsap.to(".races", { backgroundColor: "rgb(147,197,114)" });
        },
        onEnterBack: () => {
          gsap.to(".races", { backgroundColor: "rgb(147,197,114)" });
        },
      },
    });

  })

  return (
   
    <div data-scroll-container className={`${styles.maindiv}  maind`}>
      <div  ref={racesRef} className={`${styles.wrapper} races`}>
        <div  className={`${styles.div1} div1`}>
          <div className="animatedBox2" >
          <div className={`animatedBox`}>
            <Image
              src="/Image/Chocolate.png"
              priority
              alt="N/A"
              width={200}
              height={0}
            />
          </div>
          </div>
          <div className={`${styles.innerdiv0} inerdiv1`}>
            <h1 data-cursor-text="Chocolate" data-cursor-size="100px">Chocolate</h1>
            <p>
            Indulge in pure bliss with our rich and creamy chocolate ice cream. Irresistibly decadent, a scoop of happiness in every bite!
            </p>
            <button className="button">
              <span className="button-content">Explore</span>
            </button>
          </div>
        </div>
        <div className={`${styles.div1} div2`}>
        <div className="animatedBox2" >
          <div className={`animatedBox`}>
            <Image
              src="/Image/vanilla.png"
              priority
              alt="N/A"
              width={300}
              height={0}
            />
          </div>
          </div>
          <div className={`${styles.innerdiv2} ${styles.innerdiv0} inerdiv1`}>
            <h1 data-cursor-text="Vanila" data-cursor-size="100px" >Vanilla</h1>
            <p>
            Vanilla makes a justifiable runner-up. After all, vanilla ice cream is so refreshing on a warm summer's day.
            </p>
            <button className="button">
              <span className="button-content">Explore</span>
            </button>
          </div>
        </div>
        <div className={`${styles.div1} div3`}>
        <div className="animatedBox2" >
          <div className={`animatedBox`}>
            <Image
              src="/Image/strawberry.png"
              priority
              alt="N/A"
              width={700}
              height={0}
            />
          </div>
          </div>
          <div className={`${styles.innerdiv0} inerdiv1`}>
            <h1 data-cursor-text="Strawberry" data-cursor-size="100px">Strawberry</h1>
            <p>
            Rounding out the quintessential Neapolitan ingredients is strawberry-flavored ice cream. It's a great flavor if you want a few fruit chunks in your cone or cup; clearly, it's one of the most popular flavors.
            </p>
            <button className="button">
              <span className="button-content">Explore</span>
            </button>
          </div>
        </div>
        <div className={`${styles.div1} div4`}>
        <div className="animatedBox2" >
          <div className={`animatedBox`}>
            <Image
              src="/Image/pistachio.png"
              priority
              alt="N/A"
              width={350}
              height={0}
            />
          </div>
          </div>
          <div className={`${styles.innerdiv0} ${styles.innerdiv2} inerdiv1`}>
            <h1 data-cursor-text="Pistachio" data-cursor-size="100px">Pistachio</h1>
            <p>
            Pistachio—you either love it or you hate it. Well, according to You Gov, a surprising amount of adults love pistachio. 
            </p>
            <button className="button">
              <span className="button-content">Explore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
     );
};

export default SecondP;
