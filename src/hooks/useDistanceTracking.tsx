
import { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';
import { calculateDistance, POI_COORDINATES } from '../services/distanceService';

interface DistanceData {
  distance: number;
  isHot: boolean; // true si < 100m, false si > 500m
  direction: number;
  formattedDistance: string;
}

export const useDistanceTracking = (cityName: string) => {
  const { position } = useGeolocation();
  const [distanceData, setDistanceData] = useState<DistanceData>({
    distance: 0,
    isHot: false,
    direction: 0,
    formattedDistance: '0m'
  });

  useEffect(() => {
    if (!position || !cityName) return;

    const updateDistance = async () => {
      try {
        const poiKey = cityName.toLowerCase().replace(/\s+/g, '-');
        const poiCoords = POI_COORDINATES[poiKey as keyof typeof POI_COORDINATES];
        
        if (!poiCoords) return;

        const result = await calculateDistance(
          { lat: position.latitude, lng: position.longitude },
          poiCoords
        );

        const isHot = result.distance < 100;
        const formattedDistance = result.distance < 1000 
          ? `${result.distance}m` 
          : `${(result.distance / 1000).toFixed(1)}km`;

        setDistanceData({
          distance: result.distance,
          isHot,
          direction: result.direction,
          formattedDistance
        });

      } catch (error) {
        console.error('Erreur de calcul de distance:', error);
      }
    };

    updateDistance();
    
    // Mettre à jour toutes les 5 secondes
    const interval = setInterval(updateDistance, 5000);
    
    return () => clearInterval(interval);
  }, [position, cityName]);

  return distanceData;
};
