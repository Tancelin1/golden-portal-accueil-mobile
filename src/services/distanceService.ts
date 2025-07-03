
interface DistanceResult {
  distance: number; // en mètres
  duration: number; // en secondes
  direction: number; // angle en degrés (0-360)
}

export const calculateDistance = async (
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number }
): Promise<DistanceResult> => {
  // Utilisation directe du calcul de Haversine (pas besoin d'API)
  return calculateDistanceApprox(origin, destination);
};

// Calcul de direction entre deux points
const calculateBearing = (
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
): number => {
  const lat1 = (start.lat * Math.PI) / 180;
  const lat2 = (end.lat * Math.PI) / 180;
  const deltaLng = ((end.lng - start.lng) * Math.PI) / 180;

  const x = Math.sin(deltaLng) * Math.cos(lat2);
  const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

  let bearing = Math.atan2(x, y);
  bearing = (bearing * 180) / Math.PI;
  bearing = (bearing + 360) % 360;

  return bearing;
};

// Calcul de distance avec la formule de Haversine
const calculateDistanceApprox = (
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number }
): DistanceResult => {
  const R = 6371e3; // Rayon de la Terre en mètres
  const lat1 = (origin.lat * Math.PI) / 180;
  const lat2 = (destination.lat * Math.PI) / 180;
  const deltaLat = ((destination.lat - origin.lat) * Math.PI) / 180;
  const deltaLng = ((destination.lng - origin.lng) * Math.PI) / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  const direction = calculateBearing(origin, destination);

  return {
    distance: Math.round(distance),
    duration: Math.round(distance / 1.4), // Approximation: 1.4 m/s de marche
    direction
  };
};

// Points d'intérêt avec leurs coordonnées
export const POI_COORDINATES = {
  'wazemmes': { lat: 50.6263, lng: 3.0556 },
  'gare-lille-flandres': { lat: 50.6365, lng: 3.0707 },
  'vieux-lille': { lat: 50.6429, lng: 3.0628 },
  'citadelle': { lat: 50.6459, lng: 3.0459 },
  'grand-place': { lat: 50.6367, lng: 3.0633 },
  'euralille': { lat: 50.6388, lng: 3.0763 }
};
