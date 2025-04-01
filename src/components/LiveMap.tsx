
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
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-fade-in">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Map of Aracaju */}
          <div className="absolute inset-0 bg-gray-100">
            <img 
              src="/lovable-uploads/01ecac51-d8a0-4b9d-9c7f-dd782b4e4907.png" 
              alt="Mapa de Aracaju" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bus stops */}
          {mockBusStops.map((stop) => (
            <div 
              key={stop.id}
              className={`absolute w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                selectedStop === stop.id ? "scale-150 z-10 shadow-lg ring-2 ring-mint" : "border border-mint hover:scale-125"
              }`}
              style={{ 
                left: `${((stop.lng + 37.11) / 0.1) * 100}%`, 
                top: `${((stop.lat + 11) / 0.1) * 100}%`,
              }}
              title={stop.name}
              onClick={() => setSelectedStop(selectedStop === stop.id ? null : stop.id)}
            >
              {selectedStop === stop.id && (
                <div className="absolute whitespace-nowrap bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white px-2 py-1 rounded text-xs font-medium shadow z-20 border border-mint/20">
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
            
            const getBusColor = (occupancy: string) => {
              switch(occupancy) {
                case "low": return "#00FF66";
                case "medium": return "#FFD700";
                case "high": return "#FF4D4D";
                default: return "#00FF66";
              }
            };
            
            const busColor = getBusColor(bus.occupancy);
            
            return (
              <div 
                key={bus.id}
                className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold shadow-md cursor-pointer transition-all ${
                  selectedBus === bus.id ? "scale-150 z-10" : "hover:scale-110"
                } ${isMoving ? "animate-pulse-slow" : ""}`}
                style={{ 
                  left: `${((jitter.lng + 37.11) / 0.1) * 100}%`, 
                  top: `${((jitter.lat + 11) / 0.1) * 100}%`,
                  backgroundColor: "white",
                  boxShadow: `0 0 0 2px ${busColor}`,
                  color: busColor,
                  borderWidth: "1px",
                  borderColor: busColor
                }}
                title={`Linha ${bus.line} - ${bus.destination}`}
                onClick={() => setSelectedBus(selectedBus === bus.id ? null : bus.id)}
              >
                {bus.line}
                
                {selectedBus === bus.id && (
                  <div className="absolute whitespace-nowrap bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white px-2 py-1 rounded text-xs font-medium shadow z-20 border border-gray-200">
                    <div className="font-medium">Linha {bus.line}</div>
                    <div className="text-gray-600">→ {bus.destination}</div>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Map overlay with UI controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-4 py-2 text-sm font-medium flex items-center border border-gray-100">
              <MapPin className="h-4 w-4 mr-2 text-mint" />
              Aracaju, SE
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-1 border border-gray-100">
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
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-4 py-3 border border-gray-100">
            <div className="text-sm font-medium mb-2">Ocupação</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: "#00FF66" }}></div>
                <span className="text-xs">Baixa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: "#FFD700" }}></div>
                <span className="text-xs">Média</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: "#FF4D4D" }}></div>
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
