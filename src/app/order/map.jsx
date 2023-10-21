"use client";
import React, { useEffect, useState ,useRef} from "react";
import "leaflet/dist/leaflet.css";
import "./style.css";
//import { useGeolocation } from "./Location";
import { MapContainer, TileLayer, Circle, } from "react-leaflet";
const Map = () => {
 // const { isAvailable, isEnabled, coordinates } = useGeolocation();
  const mapRef = useRef(null);
 
 const[clientLocation,setClientLocation]=useState([20,80,4]);
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
  
  if (mapRef.current) {
    mapRef.current.flyTo([clientLocation[0],clientLocation[1]], clientLocation[2]);
  }
  const zoom=4.5;
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
    </>
  );
};

export default Map;
