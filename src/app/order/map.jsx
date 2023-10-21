"use client";
import React, { useEffect, useState ,useRef} from "react";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { MapContainer, TileLayer, Circle, } from "react-leaflet";
const Map = () => {
  const mapRef = useRef(null);
 
 const[clientLocation,setClientLocaton]=useState([20,80,4]);
  async function getLocation() {
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
          );
        });
  
        return position;
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error('Geolocation is not supported.');
    }
  }
  
 
    const [Position, setPosition] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const position = await getLocation();
          setPosition(position);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchLocation();
    }, []);
   
  
  
 
  setInterval(()=>{
    let location = Position;
    if(location.coords.latitude!=undefined){
      setClientLocaton([location.coords.latitude,location.coords.longitude,15])
        console.log(clientLocation)
      }
  },5000)
  
  if (mapRef.current) {
    mapRef.current.flyTo(clientLocation, clientLocation[2]);
  }
  const zoom=4.5;
  return (
    <>
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
