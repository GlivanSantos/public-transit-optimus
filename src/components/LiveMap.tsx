
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

// Simulated data - would be replaced with real-time data from an API
const mockBusStops = [
  { id: 1, name: "Terminal Zona Sul", lat: -10.9472, lng: -37.0731 },
  { id: 2, name: "Shopping Jardins", lat: -10.9362, lng: -37.0621 },
  { id: 3, name: "Universidade Federal", lat: -10.9272, lng: -37.1021 },
  { id: 4, name: "Mercado Central", lat: -10.9172, lng: -37.0521 },
  { id: 5, name: "Hospital São Lucas", lat: -10.9372, lng: -37.0621 },
];

const mockBuses = [
  { id: 101, line: "001", lat: -10.9372, lng: -37.0675, occupancy: "medium" },
  { id: 102, line: "002", lat: -10.9292, lng: -37.0771, occupancy: "high" },
  { id: 103, line: "003", lat: -10.9452, lng: -37.0621, occupancy: "low" },
];

const LiveMap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading map data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden animate-fade-in">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Map placeholder - would be replaced with an actual map library like Google Maps or Mapbox */}
          <div className="absolute inset-0 bg-blue-50">
            <div className="w-full h-full relative">
              {/* Stylized map visualization */}
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
              
              {/* Mock bus stops */}
              {mockBusStops.map((stop) => (
                <div 
                  key={stop.id}
                  className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-all"
                  style={{ 
                    left: `${((stop.lng + 37.11) / 0.1) * 100}%`, 
                    top: `${((stop.lat + 11) / 0.1) * 100}%`,
                  }}
                  title={stop.name}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 whitespace-nowrap bg-white px-2 py-1 rounded text-xs font-medium shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    {stop.name}
                  </div>
                </div>
              ))}
              
              {/* Mock buses */}
              {mockBuses.map((bus) => (
                <div 
                  key={bus.id}
                  className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold bg-white shadow-md cursor-pointer transition-all hover:scale-110 animate-pulse-slow`}
                  style={{ 
                    left: `${((bus.lng + 37.11) / 0.1) * 100}%`, 
                    top: `${((bus.lat + 11) / 0.1) * 100}%`,
                    boxShadow: `0 0 0 4px rgba(59, 130, 246, 0.2)`,
                    borderColor: bus.occupancy === "low" ? "green" : bus.occupancy === "medium" ? "yellow" : "red",
                    backgroundColor: bus.occupancy === "low" ? "rgba(34, 197, 94, 0.2)" : bus.occupancy === "medium" ? "rgba(234, 179, 8, 0.2)" : "rgba(239, 68, 68, 0.2)",
                    color: bus.occupancy === "low" ? "rgb(34, 197, 94)" : bus.occupancy === "medium" ? "rgb(234, 179, 8)" : "rgb(239, 68, 68)"
                  }}
                  title={`Linha ${bus.line}`}
                >
                  {bus.line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Map overlay with UI controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-4 py-2 text-sm font-medium flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
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
        </div>
      )}
    </div>
  );
};

export default LiveMap;
