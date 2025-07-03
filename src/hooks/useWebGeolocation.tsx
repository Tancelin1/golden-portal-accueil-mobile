
import { useState, useEffect } from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

export const useWebGeolocation = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let watchId: number;

    const startWatching = () => {
      if (!navigator.geolocation) {
        setError('Géolocalisation non supportée');
        setLoading(false);
        return;
      }

      // Get initial position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          });
          setLoading(false);
        },
        (err) => {
          console.error('Erreur géolocalisation:', err);
          setError('Erreur de géolocalisation');
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 3000
        }
      );

      // Watch position changes
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          });
        },
        (err) => {
          console.error('Erreur géolocalisation:', err);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 3000
        }
      );
    };

    startWatching();

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return { position, error, loading };
};
