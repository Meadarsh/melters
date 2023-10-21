import React, {useEffect} from 'react'

import styles from '@/app/style/FourthP.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Fourth = () => {
  gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
      gsap.from('#we',{
        y:-200,
        duration:.5,
        scrollTrigger:{
          trigger:'#we',
          start:'10% top',
           end:'bottom bottom',
        
           toggleActions:"restart none none reverse"
        }})
      gsap.from('#buy',{
        x:-320,
        delay:.2,
        duration:.5,
        scrollTrigger:{
          trigger:'#we',
          start:'10% top',
           end:'bottom bottom',
         
           toggleActions:"restart none none reverse"
        }

      })
      gsap.from('#produce',{
        x:-750,
        duration:.5,
        delay:.5,
        scrollTrigger:{
          trigger:'#we',
          start:'10% top',
           end:'bottom bottom',
        
           toggleActions:"restart none none reverse"
        }

      })
      gsap.from('#deliver',{
        x:-750,
        duration:.5,
        delay:.8,
        scrollTrigger:{
          trigger:'#we',
          start:'10% top',
           end:'bottom bottom',
           toggleActions:"restart none none reverse"
        }

      })
    })

  return (
    <div data-scroll-container className={`${styles.maindiv} maind`}>
     <h2 data-cursor-text="MELTERS" data-cursor-magnetic data-cursor-size="100px"  id='we'>WE</h2>
     <div data-cursor-background-image="Image/buy.jpg" data-cursor-size="200px"><h1 className={styles.buy} id='buy'>BUY</h1></div>
     <h1 data-cursor-background-image='Image/produce.jpg ' data-cursor-size="200px" id='produce'>PRODUCE</h1>
     <h1 data-cursor-background-image='Image/deliver.jpg ' data-cursor-size="200px" id='deliver'>DELIVER</h1>    
    </div>
    



  
  );
};


 

export default Fourth