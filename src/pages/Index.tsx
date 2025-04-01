import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import UserBanner from "@/components/UserBanner";
import RouteSearch from "@/components/RouteSearch";
import BusCard from "@/components/BusCard";
import LiveMap from "@/components/LiveMap";
import Footer from "@/components/Footer";
import { Bus, Clock, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Simple animation for sections as they come into view
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

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-mint/10 text-mint-600 text-sm font-medium rounded-full mb-6 animate-fade-in">
                Transporte Público de Aracaju
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in delay-100">
                Viaje com <span className="text-primary">inteligência</span> e praticidade
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-200">
                Planeje suas viagens, acompanhe os ônibus em tempo real e economize tempo com o sistema integrado de transporte público de Aracaju.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <Link to="/signup">
                  <Button size="lg" className="rounded-full px-6 py-6 text-base bg-primary hover:bg-primary/90">
                    Começar a usar
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-10 animate-fade-in delay-400">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mint/10 flex items-center justify-center mr-3">
                    <Bus className="h-5 w-5 text-mint" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Linhas</p>
                    <p className="text-xl font-bold">70+</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tempo economizado</p>
                    <p className="text-xl font-bold">30 min</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Usuários ativos</p>
                    <p className="text-xl font-bold">50 mil+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-mint/20 rounded-3xl transform rotate-3 scale-95 blur-xl opacity-30"></div>
              <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 scale-90"></div>
              <div className="relative z-10">
                <RouteSearch />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">Funcionalidades Principais</h2>
            <p className="text-lg text-gray-600">
              Descubra como o TransJet torna sua experiência de transporte público mais eficiente e confortável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-mint/30 transition-all animate-on-scroll opacity-0">
              <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tempo Real</h3>
              <p className="text-gray-600">
                Acompanhe a localização e o tempo de chegada dos ônibus em tempo real, evitando longas esperas nos pontos.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-mint/30 transition-all animate-on-scroll opacity-0">
              <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rotas Inteligentes</h3>
              <p className="text-gray-600">
                Planeje suas viagens com rotas otimizadas, combinando diferentes linhas de ônibus e meios de transporte.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-mint/30 transition-all animate-on-scroll opacity-0">
              <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center mb-4">
                <Bus className="h-6 w-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ocupação dos Ônibus</h3>
              <p className="text-gray-600">
                Visualize o nível de ocupação dos ônibus antes mesmo de sair de casa, escolhendo o horário mais confortável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-gradient-to-b from-white to-mint/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0">
            <div className="inline-block px-3 py-1 bg-mint/10 text-mint-600 text-sm font-medium rounded-full mb-4">
              Demonstração
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Veja o mapa ao vivo de Aracaju
            </h2>
            <p className="text-lg text-gray-600">
              Acompanhe em tempo real a localização dos ônibus e planeje sua viagem de forma eficiente.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <LiveMap />
          </div>
        </div>
      </section>

      {/* User Interface Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll opacity-0">
              <UserBanner />
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Próximos ônibus</h3>
                <div className="space-y-4">
                  <BusCard 
                    lineNumber="001" 
                    destination="Terminal Zona Sul" 
                    estimatedArrival="Chegando em 3 min" 
                    occupancy="low" 
                  />
                  <BusCard 
                    lineNumber="002" 
                    destination="Shopping Jardins" 
                    estimatedArrival="Chegando em 5 min" 
                    occupancy="medium" 
                  />
                  <BusCard 
                    lineNumber="003" 
                    destination="Universidade Federal" 
                    estimatedArrival="Chegando em 12 min" 
                    occupancy="full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <RouteSearch />
              
              <div className="glass-card rounded-2xl p-6 mt-8">
                <h3 className="text-lg font-semibold mb-4">Linhas Favoritas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-mint/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-mint-600">001</span>
                      </div>
                      <span className="text-sm font-medium">Terminal Zona Sul</span>
                    </div>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-mint/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-mint-600">002</span>
                      </div>
                      <span className="text-sm font-medium">Shopping Jardins</span>
                    </div>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-mint/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-mint-600">003</span>
                      </div>
                      <span className="text-sm font-medium">Universidade Federal</span>
                    </div>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mint/5">
        <div className="container mx-auto px-4 text-center max-w-3xl animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para melhorar suas viagens?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Baixe o aplicativo agora e comece a aproveitar o transporte público de Aracaju de forma mais eficiente e confortável.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 py-7 text-base mint-button">
              Baixar para Android
            </Button>
            <Button size="lg" className="rounded-full px-8 py-7 text-base mint-button">
              Baixar para iOS
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
