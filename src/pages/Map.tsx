
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveMap from "@/components/LiveMap";
import { MapPin, Bus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Map = () => {
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

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-b from-mint/5 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Mapa ao Vivo</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Acompanhe em tempo real a localização dos ônibus, pontos de parada e rotas em Aracaju.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filtrar Linhas</span>
              </Button>
              <Button className="mint-button flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Minha Localização</span>
              </Button>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 mb-8">
            <LiveMap />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-on-scroll opacity-0">
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-mint/10 flex items-center justify-center">
                  <Bus className="h-5 w-5 text-mint" />
                </div>
                <div>
                  <h3 className="font-medium">Ônibus Ativos</h3>
                  <p className="text-2xl font-bold">42</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Pontos de Parada</h3>
                  <p className="text-2xl font-bold">215</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 20H17C18.1046 20 19 19.1046 19 18V9C19 7.89543 18.1046 7 17 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Linhas Disponíveis</h3>
                  <p className="text-2xl font-bold">70</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Map;
