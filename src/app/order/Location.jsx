"use client"
import { useGeolocated } from "react-geolocated";

export function useGeolocation() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = 1


    return {
      isAvailable: true,
      isEnabled: false,
      coordinates: true,
    }

}

