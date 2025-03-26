
import { useState, useEffect } from 'react';

type OccupancyLevel = 'empty' | 'low' | 'medium' | 'high' | 'full';

interface OccupancyIndicatorProps {
  level: OccupancyLevel;
  className?: string;
}

const OccupancyIndicator = ({ level, className = '' }: OccupancyIndicatorProps) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [level]);

  const getColor = () => {
    switch (level) {
      case 'empty':
        return 'bg-green-500';
      case 'low':
        return 'bg-green-400';
      case 'medium':
        return 'bg-yellow-400';
      case 'high':
        return 'bg-orange-500';
      case 'full':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getLabel = () => {
    switch (level) {
      case 'empty':
        return 'Vazio';
      case 'low':
        return 'Pouco ocupado';
      case 'medium':
        return 'Ocupação média';
      case 'high':
        return 'Bastante ocupado';
      case 'full':
        return 'Lotado';
      default:
        return 'Desconhecido';
    }
  };

  const getFillWidth = () => {
    switch (level) {
      case 'empty':
        return 'w-0';
      case 'low':
        return 'w-1/4';
      case 'medium':
        return 'w-2/4';
      case 'high':
        return 'w-3/4';
      case 'full':
        return 'w-full';
      default:
        return 'w-0';
    }
  };

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Ocupação</span>
        <span className={`text-xs font-semibold ${getColor().replace('bg-', 'text-')}`}>
          {getLabel()}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${getColor()} ${getFillWidth()} ${animate ? 'animate-pulse' : ''}`} 
        />
      </div>
    </div>
  );
};

export default OccupancyIndicator;
