"use client"
import React, { useRef, useEffect, useState } from 'react';
import { useGeolocation } from "./Location";

function LocationComponent() {
  const { isAvailable, isEnabled, coordinates } = useGeolocation();
  const mapRef = useRef(null);
  const [clientLocation, setClientLocation] = useState([20, 80, 4]);

  useEffect(() => {
    const updateClientLocation = () => {
      if (isAvailable && isEnabled && coordinates) {
        setClientLocation([coordinates.latitude, coordinates.longitude, 4]);
      }
    };

    // Initial update
    updateClientLocation();

    // Set up an interval to periodically update the location
    const intervalId = setInterval(updateClientLocation, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isAvailable, isEnabled, coordinates]);

  return (
    <div>
      {clientLocation ? (
        <div>
          <p>Latitude: {clientLocation[0]}</p>
          <p>Longitude: {clientLocation[1]}</p>
          <p>Altitude: {clientLocation[2]}</p>
        </div>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
}

export default LocationComponent;
