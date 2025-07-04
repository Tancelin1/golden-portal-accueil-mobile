
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Eye, RotateCcw } from 'lucide-react';

const VRScenePage = () => {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVRActive, setIsVRActive] = useState(false);
  const [scene, setScene] = useState<'portal' | 'city' | 'treasure'>('portal');

  useEffect(() => {
    initVRScene();
  }, [scene]);

  const initVRScene = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adapter le canvas à la taille de l'écran
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawVRScene(ctx, canvas.width, canvas.height);
  };

  const drawVRScene = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Nettoyer le canvas
    ctx.clearRect(0, 0, width, height);

    switch (scene) {
      case 'portal':
        drawPortalScene(ctx, width, height);
        break;
      case 'city':
        drawCityScene(ctx, width, height);
        break;
      case 'treasure':
        drawTreasureScene(ctx, width, height);
        break;
    }
  };

  const drawPortalScene = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Fond dégradé cosmic
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
    gradient.addColorStop(0, '#1e1b4b');
    gradient.addColorStop(0.5, '#312e81');
    gradient.addColorStop(1, '#0f0f23');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Portail central
    const centerX = width / 2;
    const centerY = height / 2;
    const portalRadius = 120;

    // Effet de rotation du portail
    const time = Date.now() * 0.001;
    
    // Cercles concentriques du portail
    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * (i % 2 === 0 ? 1 : -1));
      
      ctx.strokeStyle = `hsl(${180 + i * 30}, 70%, ${50 + i * 10}%)`;
      ctx.lineWidth = 3;
      ctx.setLineDash([20, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, portalRadius - i * 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Centre du portail
    const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50);
    centerGradient.addColorStop(0, '#00ffff');
    centerGradient.addColorStop(0.5, '#0080ff');
    centerGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = centerGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
    ctx.fill();

    // Particules flottantes
    for (let i = 0; i < 20; i++) {
      const x = (Math.sin(time + i) * 200) + centerX;
      const y = (Math.cos(time * 0.5 + i) * 150) + centerY;
      ctx.fillStyle = `hsla(${(time * 50 + i * 20) % 360}, 70%, 60%, 0.8)`;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawCityScene = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Fond ciel
    const skyGradient = ctx.createLinearGradient(0, 0, 0, height);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#98FB98');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, width, height);

    // Bâtiments de la ville
    const buildings = [
      { x: 50, width: 80, height: 200, color: '#FF6B6B' },
      { x: 150, width: 100, height: 250, color: '#4ECDC4' },
      { x: 270, width: 60, height: 180, color: '#45B7D1' },
      { x: 350, width: 90, height: 220, color: '#96CEB4' },
      { x: 460, width: 70, height: 160, color: '#FFEAA7' }
    ];

    buildings.forEach(building => {
      ctx.fillStyle = building.color;
      ctx.fillRect(building.x, height - building.height, building.width, building.height);
      
      // Fenêtres
      ctx.fillStyle = '#FFF';
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < Math.floor(building.height / 40); j++) {
          ctx.fillRect(
            building.x + 10 + i * 20,
            height - building.height + 20 + j * 40,
            8, 12
          );
        }
      }
    });

    // Texte de découverte
    ctx.fillStyle = '#2D3436';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Bienvenue à ${cityName || 'la ville'} !`, width/2, 100);
    ctx.font = '16px Arial';
    ctx.fillText('Explorez cette version virtuelle de votre destination', width/2, 130);
  };

  const drawTreasureScene = (ctx: CanvasRenderingContext2D, width: number, height: height) => {
    // Fond mystique
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.3, '#FFA500');
    gradient.addColorStop(1, '#8B4513');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Coffre au trésor
    const chestX = width/2 - 60;
    const chestY = height/2 - 40;
    
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(chestX, chestY, 120, 80);
    
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(chestX + 10, chestY + 10, 100, 60);
    
    // Gemmes qui brillent
    const time = Date.now() * 0.003;
    const gems = [
      { x: chestX + 30, y: chestY + 30, color: '#FF0000' },
      { x: chestX + 60, y: chestY + 25, color: '#00FF00' },
      { x: chestX + 90, y: chestY + 35, color: '#0000FF' }
    ];
    
    gems.forEach((gem, i) => {
      const glow = Math.sin(time + i) * 0.5 + 0.5;
      ctx.fillStyle = gem.color;
      ctx.globalAlpha = 0.5 + glow * 0.5;
      ctx.beginPath();
      ctx.arc(gem.x, gem.y, 8 + glow * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Message de félicitations
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeText('TRÉSOR DÉCOUVERT !', width/2, height/2 + 120);
    ctx.fillText('TRÉSOR DÉCOUVERT !', width/2, height/2 + 120);
  };

  const nextScene = () => {
    const scenes: Array<'portal' | 'city' | 'treasure'> = ['portal', 'city', 'treasure'];
    const currentIndex = scenes.indexOf(scene);
    const nextIndex = (currentIndex + 1) % scenes.length;
    setScene(scenes[nextIndex]);
  };

  const toggleVR = () => {
    setIsVRActive(!isVRActive);
    if (!isVRActive) {
      // Simuler l'activation VR
      document.documentElement.requestFullscreen?.();
    }
  };

  // Animation continue
  useEffect(() => {
    const animate = () => {
      if (canvasRef.current) {
        initVRScene();
      }
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [scene]);

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Header VR */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-purple-600 bg-opacity-90 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="text-white font-bold">Scène VR</h1>
              {isVRActive && (
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </div>
            <div className="text-white text-sm">
              {scene === 'portal' && 'Portail'}
              {scene === 'city' && 'Ville'}
              {scene === 'treasure' && 'Trésor'}
            </div>
          </div>
        </div>
      </div>

      {/* Canvas VR */}
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0"
        style={{ 
          filter: isVRActive ? 'hue-rotate(30deg) saturate(1.2)' : 'none',
          transform: isVRActive ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Overlay VR Effects */}
      {isVRActive && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Simulation casque VR */}
          <div className="absolute inset-x-4 top-20 bottom-20 border-2 border-purple-400 rounded-lg opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-20 bg-purple-400 opacity-50"></div>
        </div>
      )}

      {/* Controls VR */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleVR}
            className={`px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all ${
              isVRActive 
                ? 'bg-red-500 text-white' 
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            <Eye className="w-5 h-5" />
            <span>{isVRActive ? 'Arrêter VR' : 'Activer VR'}</span>
          </button>
          
          <button
            onClick={nextScene}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-blue-600 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Scène suivante</span>
          </button>
        </div>
      </div>

      {/* Info overlay */}
      <div className="absolute top-24 left-4 right-4 z-10">
        <div className="bg-black-500 bg-opacity-70 rounded-lg p-4 text-center">
          <p className="text-white text-sm">
            {scene === 'portal' && '🌀 Traversez le portail mystique'}
            {scene === 'city' && '🏙️ Explorez la ville virtuelle'}
            {scene === 'treasure' && '💎 Vous avez trouvé le trésor !'}
          </p>
          <p className="text-gray-300 text-xs mt-1">
            Utilisez les contrôles en bas pour naviguer
          </p>
        </div>
      </div>
    </div>
  );
};

export default VRScenePage;
