import React, { useEffect, useState ,useRef} from "react";
import "leaflet/dist/leaflet.css";
import "./style.css";
 import { IoLocationSharp } from "react-icons/io5";
import { useGeolocation } from "./Location";
import { MapContainer, TileLayer, Circle,Marker } from "react-leaflet";
import { icon } from "leaflet";
const Map = () => {
  const { isAvailable, isEnabled, coordinates } = useGeolocation();
  const mapRef = useRef(null);
 
 const[clientLocation,setClientLocation]=useState([20,80,4]);
 
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
 

  
const customIcon = icon({
  iconUrl:"/Image/locationIcon.png",
  iconSize: [20, 20],
});


  if (mapRef.current) {
    mapRef.current.flyTo([clientLocation[0],clientLocation[1]], clientLocation[2]);
  }
  const zoom=4.5;
  return (
    <>
     {isAvailable ? (
        isEnabled ? (
          <div className="map-container relative" >
            <div className=" absolute top-1  left-3">refresh</div>
         <MapContainer center={[20, 80]} zoom={zoom} ref={mapRef}>
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
              attribution='&copy;  <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>"> contributors'
            /> 
            <Marker position={[clientLocation[0],clientLocation[1]]} icon={customIcon} />
          </MapContainer>
        </div>
        ) : (
          <p>Geolocation is not enabled in your browser.</p>
        )
      ) : (
        <p>Your browser does not support geolocation.</p>
      )}
 
    </>
  );
};

export default Map;
