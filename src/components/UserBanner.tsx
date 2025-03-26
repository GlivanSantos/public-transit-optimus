
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface UserBannerProps {
  className?: string;
}

const UserBanner = ({ className = "" }: UserBannerProps) => {
  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    // Update time initially
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }));
  };

  return (
    <div className={`glass-card rounded-2xl overflow-hidden animate-fade-in ${className}`}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">Olá, Usuário</h2>
            <p className="text-gray-500 mt-1 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{currentTime}</span>
            </p>
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">A</span>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-lg bg-primary/5 px-4 py-3 flex-1 min-w-[120px]">
            <span className="text-xs text-gray-500">Favoritos</span>
            <p className="text-lg font-semibold mt-1">3 Rotas</p>
          </div>
          <div className="rounded-lg bg-secondary/5 px-4 py-3 flex-1 min-w-[120px]">
            <span className="text-xs text-gray-500">Economia</span>
            <p className="text-lg font-semibold mt-1">R$ 54,00</p>
          </div>
          <div className="rounded-lg bg-green-500/5 px-4 py-3 flex-1 min-w-[120px]">
            <span className="text-xs text-gray-500">Viagens</span>
            <p className="text-lg font-semibold mt-1">12 este mês</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
