
import { useState, useEffect } from 'react';
import { Geolocation } from '@capacitor/geolocation';

interface Position {
  latitude: number;
  longitude: number;
}

export const useGeolocation = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let watchId: string;

    const startWatching = async () => {
      try {
        const permission = await Geolocation.checkPermissions();
        if (permission.location !== 'granted') {
          await Geolocation.requestPermissions();
        }

        // Get initial position
        const initialPosition = await Geolocation.getCurrentPosition();
        setPosition({
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude
        });
        setLoading(false);

        // Watch position changes
        watchId = await Geolocation.watchPosition({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 3000
        }, (position) => {
          if (position) {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          }
        });

      } catch (err) {
        setError('Erreur de géolocalisation');
        setLoading(false);
        console.error('Geolocation error:', err);
      }
    };

    startWatching();

    return () => {
      if (watchId) {
        Geolocation.clearWatch({ id: watchId });
      }
    };
  }, []);

  return { position, error, loading };
};
