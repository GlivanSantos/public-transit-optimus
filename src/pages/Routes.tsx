
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusRoutes from "@/components/BusRoutes";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Routes = () => {
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

      <section className="pt-28 pb-10 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Rotas de Ônibus em Aracaju</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Encontre informações sobre todas as linhas de ônibus que circulam em Aracaju.
            Consulte trajetos, pontos de parada e horários.
          </p>

          <div className="relative max-w-lg mb-10">
            <input
              type="text"
              placeholder="Buscar por número ou nome da linha"
              className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
            <Button className="absolute right-1 top-1 rounded-md" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="animate-on-scroll opacity-0">
            <BusRoutes />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Routes;
