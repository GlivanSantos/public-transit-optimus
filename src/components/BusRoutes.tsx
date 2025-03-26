
import { useState } from "react";
import { Search, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusRoutes = () => {
  const [expandedRoute, setExpandedRoute] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const routes = [
    {
      id: "001",
      name: "Terminal Zona Sul → Centro",
      stops: [
        "Terminal Zona Sul",
        "Av. Beira Mar (praia)",
        "Praça Fausto Cardoso",
        "Rua João Pessoa",
        "Mercado Central",
        "Terminal Centro"
      ],
      schedule: "4:30h às 23:00h",
      interval: "15-20 min",
      distance: "7,5 km",
      duration: "25 min"
    },
    {
      id: "002",
      name: "Shopping Jardins → Terminal Centro",
      stops: [
        "Shopping Jardins",
        "Av. Ministro Geraldo Barreto Sobral",
        "Av. Tancredo Neves",
        "13 de Julho",
        "Av. Ivo do Prado",
        "Terminal Centro"
      ],
      schedule: "5:00h às 23:00h",
      interval: "10-15 min",
      distance: "6,2 km",
      duration: "20 min"
    },
    {
      id: "003",
      name: "Universidade Federal → Terminal Centro",
      stops: [
        "Universidade Federal de Sergipe",
        "Av. Marechal Rondon",
        "Av. Hermes Fontes",
        "Av. Barão de Maruim",
        "Praça da Bandeira",
        "Terminal Centro"
      ],
      schedule: "5:15h às 22:30h",
      interval: "20-25 min",
      distance: "8,1 km",
      duration: "30 min"
    },
    {
      id: "004",
      name: "Mercado → Atalaia",
      stops: [
        "Mercado Central",
        "Rua São Cristóvão",
        "Av. Hermes Fontes",
        "Av. Pedro Paes Azevedo",
        "Coroa do Meio",
        "Orla de Atalaia"
      ],
      schedule: "5:30h às 22:00h",
      interval: "20-30 min",
      distance: "9,8 km",
      duration: "35 min"
    },
    {
      id: "005",
      name: "Bugio → Centro",
      stops: [
        "Terminal Bugio",
        "Av. Euclides Figueiredo",
        "Av. São Paulo",
        "Av. João Ribeiro",
        "Av. Coelho e Campos",
        "Terminal Centro"
      ],
      schedule: "4:45h às 22:45h",
      interval: "15-20 min",
      distance: "10,2 km",
      duration: "40 min"
    },
    {
      id: "006",
      name: "Mosqueiro → Terminal Sul",
      stops: [
        "Mosqueiro",
        "Rod. dos Náufragos",
        "Aeroporto",
        "Av. Melício Machado",
        "Aruana",
        "Terminal Zona Sul"
      ],
      schedule: "5:00h às 21:00h",
      interval: "30-40 min",
      distance: "15,5 km",
      duration: "45 min"
    },
    {
      id: "007",
      name: "Santa Maria → Centro",
      stops: [
        "Conjunto Maria do Carmo",
        "Conjunto Orlando Dantas",
        "Av. Tancredo Neves",
        "Av. Gonçalo Prado",
        "Rua Itabaianinha",
        "Terminal Centro"
      ],
      schedule: "4:40h às 22:30h",
      interval: "20-25 min",
      distance: "12,8 km",
      duration: "40 min"
    },
    {
      id: "008",
      name: "Terminal Zona Oeste → Centro",
      stops: [
        "Terminal Zona Oeste",
        "Av. Osvaldo Aranha",
        "Av. Juscelino Kubitschek",
        "Av. Augusto Franco",
        "Av. Hermes Fontes",
        "Terminal Centro"
      ],
      schedule: "4:30h às 23:00h",
      interval: "15-20 min",
      distance: "9,5 km",
      duration: "35 min"
    },
    {
      id: "009",
      name: "Terminal DIA → Terminal Centro",
      stops: [
        "Terminal DIA",
        "Av. José Conrado de Araújo",
        "Av. Augusto Franco",
        "Av. Gonçalo Rollemberg Leite",
        "Av. Francisco Porto",
        "Terminal Centro"
      ],
      schedule: "5:00h às 23:15h",
      interval: "10-15 min",
      distance: "7,8 km",
      duration: "25 min"
    },
    {
      id: "010",
      name: "Augusto Franco → Terminal Centro",
      stops: [
        "Conjunto Augusto Franco",
        "Av. Tancredo Neves",
        "Av. Augusto Franco",
        "Av. Desembargador Maynard",
        "Rua Capela",
        "Terminal Centro"
      ],
      schedule: "5:00h às 22:45h",
      interval: "15-20 min",
      distance: "8,2 km",
      duration: "30 min"
    }
  ];

  const filteredRoutes = routes.filter(route => 
    route.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRoute = (index: number) => {
    setExpandedRoute(expandedRoute === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route, index) => (
            <div key={index} className="glass-card rounded-xl p-4 transition-all hover:shadow-md">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleRoute(index)}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-primary">{route.id}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{route.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{route.schedule}</span>
                      <span className="mx-2">•</span>
                      <span>A cada {route.interval}</span>
                    </div>
                  </div>
                </div>
                {expandedRoute === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
              
              {expandedRoute === index && (
                <div className="mt-6 animate-accordion-down">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tempo estimado</p>
                        <p className="font-medium">{route.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Distância</p>
                        <p className="font-medium">{route.distance}</p>
                      </div>
                    </div>
                    
                    <Button size="sm" className="mt-3 md:mt-0">
                      Ver no Mapa
                    </Button>
                  </div>
                  
                  <h4 className="font-medium mb-3">Pontos de Parada</h4>
                  <div className="relative pl-6">
                    {route.stops.map((stop, stopIndex) => (
                      <div key={stopIndex} className="mb-4 relative">
                        <div className="absolute left-0 top-0 transform -translate-x-6 mt-1.5 w-3 h-3 rounded-full bg-primary"></div>
                        {stopIndex < route.stops.length - 1 && (
                          <div className="absolute left-0 top-0 transform -translate-x-5 mt-4 w-1 h-full bg-gray-200"></div>
                        )}
                        <div>
                          <p className="font-medium">{stop}</p>
                          {stopIndex < route.stops.length - 1 && (
                            <p className="text-xs text-gray-500">↓ 1,2 km • Próxima parada</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-400">Nenhuma rota encontrada para "{searchTerm}"</p>
            <p className="mt-2">Tente outro termo ou ajuste seus filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusRoutes;
