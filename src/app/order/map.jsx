"use client";
import React, { useEffect, useState ,useRef} from "react";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { MapContainer, TileLayer, Circle, } from "react-leaflet";
const Map = () => {
  const mapRef = useRef(null);
  const [position, setposition] = useState([20, 78.9629]);
  function got(loaction) {
   
      setposition( [loaction.coords.latitude, loaction.coords.longitude]);
    
  }
  function failed() {
  
   console.log ("failed to fetch location. Please give acess");
   
  }
  
    useEffect(()=>{
      setInterval(() => {
      window.navigator.geolocation.getCurrentPosition(got, failed);
    }, 5000);
    })
  
  if (mapRef.current) {
    mapRef.current.flyTo(position, 15);
  }
  const zoom=4.5;
  return (
    <>
    <div className="map-container">
        <MapContainer center={position} zoom={zoom} ref={mapRef}>
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
    </>
  );
};

export default Map;
