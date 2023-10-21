"use client";
import React, { useEffect, useState ,useRef} from "react";

import "./style.css";

const Map = () => {
 // const { isAvailable, isEnabled, coordinates } = useGeolocation();
 
 

 /*
 useEffect(() => {
  const updateClientLocation = () => {
    if (isAvailable && isEnabled && coordinates) {
     setClientLocation([coordinates.latitude, coordinates.longitude, 15]);
    }
  };

  updateClientLocation();

  const intervalId = setInterval(updateClientLocation, 5000);

  return () => {
    clearInterval(intervalId);
  };
}, [isAvailable, isEnabled, coordinates]);
 
  */ 
  
  
  return (
    <>
     {/*isAvailable ? (
        isEnabled ? (
          <div className="map-container">
          <MapContainer center={[20, 80]} zoom={zoom} ref={mapRef}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
              attribution='&copy;  <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>"> contributors'
            />
          </MapContainer>
        </div>
        ) : (
          <p>Geolocation is not enabled in your browser.</p>
        )
      ) : (
        <p>Your browser does not support geolocation.</p>
      )*/}
   <div className="map-container">
          <h1>Hello</h1>
        </div>
    </>
  );
};

export default Map;
