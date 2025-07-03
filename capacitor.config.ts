
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1e12a70876454da2b407fa1f0604260b',
  appName: 'golden-portal-accueil-mobile',
  webDir: 'dist',
  server: {
    url: 'https://1e12a708-7645-4da2-b407-fa1f0604260b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera']
    },
    Geolocation: {
      permissions: ['location']
    }
  }
};

export default config;
