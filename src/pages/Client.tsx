
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BusCard from "@/components/BusCard";
import LiveMap from "@/components/LiveMap";
import { Clock, Star, MapPin, Bell, User, LogOut, History, Ticket } from "lucide-react";

const Client = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userName, setUserName] = useState("João Silva");

  useEffect(() => {
    // Animation for sections as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    // In a real app, would handle logout logic here
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="glass-card rounded-xl p-4 animate-on-scroll opacity-0">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl mb-3">
                  {userName.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="font-bold text-lg">{userName}</h2>
                <p className="text-gray-500 text-sm">Usuário Premium</p>
              </div>

              <div className="space-y-2">
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === "dashboard" 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Painel Principal</span>
                </button>
                
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === "favorites" 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("favorites")}
                >
                  <Star className="h-5 w-5 mr-3" />
                  <span>Linhas Favoritas</span>
                </button>
                
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === "trips" 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("trips")}
                >
                  <History className="h-5 w-5 mr-3" />
                  <span>Histórico de Viagens</span>
                </button>
                
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === "tickets" 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("tickets")}
                >
                  <Ticket className="h-5 w-5 mr-3" />
                  <span>Meus Tickets</span>
                </button>
                
                <button
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                    activeTab === "notifications" 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="h-5 w-5 mr-3" />
                  <span>Notificações</span>
                </button>
                
                <hr className="my-3" />
                
                <button
                  className="flex items-center w-full px-4 py-2 rounded-lg text-left text-red-500 hover:bg-red-50 transition-colors"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Sair</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "dashboard" && (
                <div className="space-y-6 animate-on-scroll opacity-0">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Bem-vindo, {userName.split(' ')[0]}!</h2>
                    <p className="text-gray-600 mb-4">
                      Aqui você pode acompanhar suas linhas favoritas, ver a localização de ônibus em tempo real e receber alertas sobre seu transporte público.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-primary/5 rounded-lg p-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <History className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Viagens este mês</p>
                          <p className="text-xl font-bold">42</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Tempo economizado</p>
                          <p className="text-xl font-bold">12h 30min</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Star className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Linhas favoritas</p>
                          <p className="text-xl font-bold">5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Próximos ônibus perto de você</h3>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <MapPin className="h-4 w-4 mr-1" />
                        Atualizar
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <BusCard 
                        lineNumber="001" 
                        destination="Terminal Zona Sul" 
                        estimatedArrival="Chegando em 2 min" 
                        occupancy="low" 
                      />
                      <BusCard 
                        lineNumber="002" 
                        destination="Shopping Jardins" 
                        estimatedArrival="Chegando em 7 min" 
                        occupancy="medium" 
                      />
                      <BusCard 
                        lineNumber="003" 
                        destination="Universidade Federal" 
                        estimatedArrival="Chegando em 15 min" 
                        occupancy="high" 
                      />
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Mapa ao vivo perto de você</h3>
                    <LiveMap />
                  </div>
                </div>
              )}

              {activeTab === "favorites" && (
                <div className="space-y-6 animate-on-scroll opacity-0">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Suas Linhas Favoritas</h2>
                    <p className="text-gray-600 mb-4">
                      Acesse rapidamente as linhas que você mais usa.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-semibold text-primary">001</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Terminal Zona Sul</h4>
                              <p className="text-xs text-gray-500">Tempo médio: 25 min</p>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-semibold text-primary">002</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Shopping Jardins</h4>
                              <p className="text-xs text-gray-500">Tempo médio: 15 min</p>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-semibold text-primary">003</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Universidade Federal</h4>
                              <p className="text-xs text-gray-500">Tempo médio: 30 min</p>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-semibold text-primary">006</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Mosqueiro</h4>
                              <p className="text-xs text-gray-500">Tempo médio: 45 min</p>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-semibold text-primary">008</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Terminal Zona Oeste</h4>
                              <p className="text-xs text-gray-500">Tempo médio: 35 min</p>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "trips" && (
                <div className="space-y-6 animate-on-scroll opacity-0">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Histórico de Viagens</h2>
                    <p className="text-gray-600 mb-4">
                      Veja todas as suas viagens recentes.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { date: "Hoje, 14:30", from: "Shopping Jardins", to: "Terminal Centro", line: "002", duration: "18 min" },
                        { date: "Hoje, 08:15", from: "Terminal Zona Sul", to: "Universidade Federal", line: "001", duration: "25 min" },
                        { date: "Ontem, 18:45", from: "Universidade Federal", to: "Terminal Zona Sul", line: "003", duration: "28 min" },
                        { date: "Ontem, 12:30", from: "Terminal Centro", to: "Shopping Jardins", line: "002", duration: "20 min" },
                        { date: "20/07/2023, 16:20", from: "Terminal Zona Oeste", to: "Mercado", line: "008", duration: "35 min" }
                      ].map((trip, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{trip.date}</div>
                              <div className="flex items-center">
                                <div className="flex flex-col items-center mr-2">
                                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  <div className="w-0.5 h-6 bg-gray-300"></div>
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                                <div>
                                  <div className="font-medium">{trip.from}</div>
                                  <div className="font-medium">{trip.to}</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs font-semibold text-primary">{trip.line}</span>
                              </div>
                              <div className="text-sm text-gray-500">{trip.duration}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tickets" && (
                <div className="space-y-6 animate-on-scroll opacity-0">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Meus Tickets</h2>
                    <p className="text-gray-600 mb-4">
                      Gerencie seus tickets de transporte público.
                    </p>
                    
                    <div className="bg-primary/5 rounded-lg p-6 mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">Ticket Mensal</h3>
                          <p className="text-sm text-gray-600">Válido até 15/08/2023</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Button className="w-full md:w-auto">Renovar</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>42 viagens usadas</span>
                          <span>23 viagens restantes</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-3">Histórico de Tickets</h3>
                    <div className="space-y-3">
                      {[
                        { type: "Mensal", date: "01/07/2023 - 31/07/2023", price: "R$ 150,00", status: "Expirado" },
                        { type: "Semanal", date: "01/06/2023 - 07/06/2023", price: "R$ 50,00", status: "Expirado" },
                        { type: "Diário", date: "15/05/2023", price: "R$ 10,00", status: "Expirado" }
                      ].map((ticket, index) => (
                        <div key={index} className="flex justify-between p-3 border-b border-gray-100">
                          <div>
                            <div className="font-medium">{ticket.type}</div>
                            <div className="text-xs text-gray-500">{ticket.date}</div>
                          </div>
                          <div className="text-right">
                            <div>{ticket.price}</div>
                            <div className="text-xs text-gray-500">{ticket.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6 animate-on-scroll opacity-0">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Notificações</h2>
                    <p className="text-gray-600 mb-4">
                      Fique atualizado sobre seu transporte público.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { time: "Agora", message: "A linha 001 está com atraso de 5 minutos devido ao tráfego.", read: false },
                        { time: "1 hora atrás", message: "Seu ticket mensal irá expirar em 3 dias. Lembre-se de renová-lo.", read: false },
                        { time: "3 horas atrás", message: "A linha 002 mudou temporariamente seu trajeto devido a obras na Av. Barão de Maruim.", read: true },
                        { time: "Ontem", message: "Desconto especial de 10% na compra do ticket semanal. Aproveite!", read: true },
                        { time: "2 dias atrás", message: "A linha 003 está operando com frota reduzida hoje devido a manutenção programada.", read: true }
                      ].map((notification, index) => (
                        <div 
                          key={index} 
                          className={`border rounded-lg p-4 transition-colors ${
                            notification.read ? "border-gray-100" : "border-primary/20 bg-primary/5"
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0 ${
                              notification.read ? "bg-gray-300" : "bg-primary"
                            }`}></div>
                            <div>
                              <p className="text-sm mb-1">{notification.message}</p>
                              <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Client;
