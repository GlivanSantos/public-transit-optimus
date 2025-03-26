
import { useState } from "react";
import { Search, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const RouteSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching route from", origin, "to", destination);
    // Implement actual search functionality
  };

  return (
    <div className="glass-card rounded-2xl p-6 transition-all hover:shadow-lg animate-fade-in">
      <h2 className="text-lg font-semibold mb-4">Planejar Trajeto</h2>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <input
            type="text"
            placeholder="Origem"
            className="pl-10 w-full py-3 bg-white rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>

        <div className="relative my-4 flex justify-center">
          <div className="absolute top-0 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
            <ArrowDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="relative mb-4">
          <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Destino"
            className="pl-10 w-full py-3 bg-white rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full py-6 text-base rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
        >
          <Search className="mr-2 h-5 w-5" />
          Buscar Rotas
        </Button>
      </form>
    </div>
  );
};

export default RouteSearch;
