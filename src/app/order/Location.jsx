"use client"
import { useGeolocated } from "react-geolocated";

export function useGeolocation() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated();
window = {};
  if (typeof window !== 'undefined') {
   
    return {
      isAvailable: isGeolocationAvailable,
      isEnabled: isGeolocationEnabled,
      coordinates: coords,
    };
  } else {
    
    return {
      isAvailable: false,
      isEnabled: false,
      coordinates: null,
    };
  }
}

