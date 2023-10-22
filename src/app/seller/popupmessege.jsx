// components/Popup.js

import { useEffect, useState } from 'react';
import gsap from 'gsap';
const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    gsap.to(".timerdiv",{
      width:'100%',
      duration:3,
      ease:"power2.inOut"
    })
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="popup-seller">
      
      <div className="popup-content-seller">
        {message}
      </div>
      <div className="timerdiv">
        </div>
    </div>
  );
};

export default Popup;
