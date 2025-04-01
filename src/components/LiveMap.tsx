
import { useState, useEffect } from "react";
import { MapPin, Bus } from "lucide-react";

// Simulated data for Aracaju, Sergipe - would be replaced with real-time data from an API
const mockBusStops = [
  { id: 1, name: "Terminal Zona Sul", lat: -10.9472, lng: -37.0731 },
  { id: 2, name: "Shopping Jardins", lat: -10.9362, lng: -37.0621 },
  { id: 3, name: "Universidade Federal", lat: -10.9272, lng: -37.1021 },
  { id: 4, name: "Mercado Central", lat: -10.9172, lng: -37.0521 },
  { id: 5, name: "Hospital São Lucas", lat: -10.9372, lng: -37.0621 },
  { id: 6, name: "Terminal Centro", lat: -10.9122, lng: -37.0671 },
  { id: 7, name: "Orla de Atalaia", lat: -10.9762, lng: -37.0391 },
  { id: 8, name: "Terminal DIA", lat: -10.9242, lng: -37.0741 },
  { id: 9, name: "Terminal Zona Oeste", lat: -10.9012, lng: -37.0891 },
  { id: 10, name: "Conjunto Augusto Franco", lat: -10.9332, lng: -37.0821 },
];

const mockBuses = [
  { id: 101, line: "001", lat: -10.9372, lng: -37.0675, occupancy: "medium", destination: "Terminal Centro" },
  { id: 102, line: "002", lat: -10.9292, lng: -37.0771, occupancy: "high", destination: "Shopping Jardins" },
  { id: 103, line: "003", lat: -10.9452, lng: -37.0621, occupancy: "low", destination: "Universidade Federal" },
  { id: 104, line: "004", lat: -10.9222, lng: -37.0551, occupancy: "medium", destination: "Atalaia" },
  { id: 105, line: "005", lat: -10.9072, lng: -37.0611, occupancy: "high", destination: "Centro" },
  { id: 106, line: "006", lat: -10.9662, lng: -37.0421, occupancy: "low", destination: "Terminal Sul" },
  { id: 107, line: "007", lat: -10.9382, lng: -37.0791, occupancy: "medium", destination: "Centro" },
  { id: 108, line: "008", lat: -10.9142, lng: -37.0831, occupancy: "low", destination: "Centro" },
];

const LiveMap = () => {
  const [loading, setLoading] = useState(true);
  const [selectedStop, setSelectedStop] = useState<number | null>(null);
  const [selectedBus, setSelectedBus] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    // Simulate loading map data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate bus movement
    if (!loading) {
      const intervalId = setInterval(() => {
        setIsMoving(prev => !prev);
      }, 2000);
      
      return () => clearInterval(intervalId);
    }
  }, [loading]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden animate-fade-in">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Map of Aracaju */}
          <div className="absolute inset-0">
            <img 
              src="https://cdn.discordapp.com/attachments/1244467760173375549/1254838142785134632/aracaju_map.jpg?ex=668e8ace&is=668d3944&hm=cf5bef7357962af24b07b8b2a2e410d379ebb66c2970ed5c841b6632b7f00a62&" 
              alt="Mapa de Aracaju" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
          </div>
          
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-30">
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              Array.from({ length: 12 }).map((_, colIndex) => (
                <div 
                  key={`${rowIndex}-${colIndex}`} 
                  className="border border-blue-200"
                />
              ))
            ))}
          </div>

          {/* Main routes and landmarks overlay */}
          <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.4 }}
          >
            {/* Main avenues of Aracaju */}
            <path
              d="M30,35 L70,65"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
            <path
              d="M40,25 L60,75"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
            <path
              d="M25,45 L75,55"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
            
            {/* Rio Sergipe */}
            <path
              d="M60,15 C65,25 70,35 75,45 C80,55 75,65 70,75"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.5"
            />
            
            {/* Avenida Beira Mar */}
            <path
              d="M65,20 C67,30 68,40 65,50 C62,60 60,70 55,80"
              fill="none"
              stroke="#00FF66"
              strokeWidth="1"
              strokeDasharray="2"
            />
            
            {/* Avenida Hermes Fontes */}
            <path
              d="M30,30 L50,50 L70,40"
              fill="none"
              stroke="#00FF66"
              strokeWidth="1"
              strokeDasharray="2"
            />
            
            {/* Avenida Tancredo Neves */}
            <path
              d="M20,60 L40,60 L60,55 L75,45"
              fill="none"
              stroke="#00FF66"
              strokeWidth="1"
              strokeDasharray="2"
            />
          </svg>
              
          {/* Bus stops */}
          {mockBusStops.map((stop) => (
            <div 
              key={stop.id}
              className={`absolute w-4 h-4 bg-white border-2 border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                selectedStop === stop.id ? "scale-150 z-10" : "hover:scale-125"
              }`}
              style={{ 
                left: `${((stop.lng + 37.11) / 0.1) * 100}%`, 
                top: `${((stop.lat + 11) / 0.1) * 100}%`,
              }}
              title={stop.name}
              onClick={() => setSelectedStop(selectedStop === stop.id ? null : stop.id)}
            >
              {selectedStop === stop.id && (
                <div className="absolute whitespace-nowrap bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white px-2 py-1 rounded text-xs font-medium shadow z-20">
                  {stop.name}
                </div>
              )}
            </div>
          ))}
          
          {/* Buses */}
          {mockBuses.map((bus) => {
            // Add subtle movement effect
            const jitter = isMoving ? { 
              lat: bus.lat + (Math.random() * 0.001 - 0.0005),
              lng: bus.lng + (Math.random() * 0.001 - 0.0005) 
            } : { lat: bus.lat, lng: bus.lng };
            
            return (
              <div 
                key={bus.id}
                className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold bg-white shadow-md cursor-pointer transition-all ${
                  selectedBus === bus.id ? "scale-150 z-10" : "hover:scale-110"
                } ${isMoving ? "animate-pulse-slow" : ""}`}
                style={{ 
                  left: `${((jitter.lng + 37.11) / 0.1) * 100}%`, 
                  top: `${((jitter.lat + 11) / 0.1) * 100}%`,
                  boxShadow: `0 0 0 4px rgba(59, 130, 246, 0.2)`,
                  borderColor: bus.occupancy === "low" ? "#00FF66" : bus.occupancy === "medium" ? "yellow" : "red",
                  backgroundColor: bus.occupancy === "low" ? "rgba(0, 255, 102, 0.2)" : bus.occupancy === "medium" ? "rgba(234, 179, 8, 0.2)" : "rgba(239, 68, 68, 0.2)",
                  color: bus.occupancy === "low" ? "#00FF66" : bus.occupancy === "medium" ? "rgb(234, 179, 8)" : "rgb(239, 68, 68)"
                }}
                title={`Linha ${bus.line} - ${bus.destination}`}
                onClick={() => setSelectedBus(selectedBus === bus.id ? null : bus.id)}
              >
                {bus.line}
                
                {selectedBus === bus.id && (
                  <div className="absolute whitespace-nowrap bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white px-2 py-1 rounded text-xs font-medium shadow z-20">
                    <div>Linha {bus.line}</div>
                    <div className="text-gray-500">→ {bus.destination}</div>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Map overlay with UI controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-4 py-2 text-sm font-medium flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-mint" />
              Aracaju, SE
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-3 py-1">
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <span className="text-xl font-medium">+</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <span className="text-xl font-medium">−</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Map legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-3 py-2">
            <div className="text-xs font-medium mb-1">Ocupação</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-mint/30 border border-mint"></div>
                <span className="text-xs">Baixa</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-300/30 border border-yellow-400"></div>
                <span className="text-xs">Média</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500"></div>
                <span className="text-xs">Alta</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMap;
