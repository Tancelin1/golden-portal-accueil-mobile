
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ArrowLeft } from 'lucide-react';

const ARScenePage = () => {
  const navigate = useNavigate();
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Automatically launch camera when arriving at location
    launchCamera();
  }, []);

  const launchCamera = async () => {
    try {
      // For web demo, we'll simulate camera activation
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      }
    } catch (error) {
      console.log('Camera not available, using Capacitor camera');
      // Fallback to Capacitor camera for mobile
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera
        });
        setCapturedImage(image.dataUrl || null);
      } catch (capacitorError) {
        console.error('Error accessing camera:', capacitorError);
      }
    }
  };

  const capturePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      setCapturedImage(image.dataUrl || null);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-yellow-400 bg-opacity-90 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-black">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-black font-bold">Scène AR</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative">
        {cameraActive && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        )}

        {!cameraActive && !capturedImage && (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white rounded-full"></div>
              </div>
              <p className="text-white font-bold mb-4">Caméra AR activée</p>
              <p className="text-white text-sm mb-6">
                Pointez votre caméra vers l'environnement<br />
                pour découvrir les easter eggs cachés
              </p>
              <button
                onClick={launchCamera}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold"
              >
                Lancer la caméra
              </button>
            </div>
          </div>
        )}

        {/* AR Overlay Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Simulated AR portal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 border-4 border-blue-400 rounded-full animate-pulse">
              <div className="w-full h-full bg-blue-400 bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PORTAIL AR</span>
              </div>
            </div>
          </div>
          
          {/* Corner indicators */}
          <div className="absolute top-20 left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-400"></div>
          <div className="absolute top-20 right-4 w-8 h-8 border-r-4 border-t-4 border-yellow-400"></div>
          <div className="absolute bottom-20 left-4 w-8 h-8 border-l-4 border-b-4 border-yellow-400"></div>
          <div className="absolute bottom-20 right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-400"></div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="flex justify-center space-x-4">
          <button
            onClick={capturePhoto}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
          </button>
          <button
            onClick={() => navigate('/info-point')}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold"
          >
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ARScenePage;
