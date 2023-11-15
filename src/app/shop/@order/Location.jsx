
import { useGeolocated } from "react-geolocated";

export function useGeolocation() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated();

  return {
    isAvailable: isGeolocationAvailable,
    isEnabled: isGeolocationEnabled,
    coordinates: coords,
  };
}

