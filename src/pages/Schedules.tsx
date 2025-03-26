
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Search, Calendar, ChevronDown } from "lucide-react";

const Schedules = () => {
  const [selectedDay, setSelectedDay] = useState("weekday");
  const [selectedLine, setSelectedLine] = useState("001");

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

  const scheduleData = {
    "001": {
      name: "Terminal Zona Sul → Centro",
      weekday: [
        "04:30", "05:00", "05:20", "05:40", "06:00", "06:15", "06:30", "06:45", 
        "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:00", 
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
        "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", 
        "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "19:00", "19:30",
        "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
      ],
      saturday: [
        "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", 
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
        "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
        "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", 
        "21:00", "21:30", "22:00", "22:30", "23:00"
      ],
      sunday: [
        "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", 
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", 
        "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", 
        "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", 
        "21:30", "22:00"
      ]
    },
    "002": {
      name: "Shopping Jardins → Terminal Centro",
      weekday: [
        "05:00", "05:30", "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", 
        "07:30", "07:45", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
        "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:15", "17:30", "17:45", 
        "18:00", "18:15", "18:30", "18:45", "19:00", "19:30", "20:00", "20:30", 
        "21:00", "21:30", "22:00", "22:30", "23:00"
      ],
      saturday: [
        "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", 
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", 
        "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", 
        "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", 
        "21:30", "22:00", "22:30"
      ],
      sunday: [
        "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", 
        "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", 
        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
      ]
    },
    "003": {
      name: "Universidade Federal → Terminal Centro",
      weekday: [
        "05:15", "05:45", "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", 
        "07:30", "07:45", "08:00", "08:15", "08:30", "09:00", "09:30", "10:00", 
        "10:30", "11:00", "11:30", "12:00", "12:15", "12:30", "12:45", "13:00", 
        "13:15", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
        "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "19:00", 
        "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
      ],
      saturday: [
        "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", 
        "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", 
        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", 
        "22:00"
      ],
      sunday: [
        "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", 
        "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", 
        "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", 
        "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
      ]
    }
  };

  const busLines = [
    { id: "001", name: "Terminal Zona Sul → Centro" },
    { id: "002", name: "Shopping Jardins → Terminal Centro" },
    { id: "003", name: "Universidade Federal → Terminal Centro" },
    { id: "004", name: "Mercado → Atalaia" },
    { id: "005", name: "Bugio → Centro" },
    { id: "006", name: "Mosqueiro → Terminal Sul" },
    { id: "007", name: "Santa Maria → Centro" },
    { id: "008", name: "Terminal Zona Oeste → Centro" },
    { id: "009", name: "Terminal DIA → Terminal Centro" },
    { id: "010", name: "Augusto Franco → Terminal Centro" }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Horários de Ônibus</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Consulte os horários de todas as linhas de ônibus que circulam em Aracaju.
            Os horários podem variar em feriados e datas especiais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por número ou nome da linha"
                  className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
                <Button className="absolute right-1 top-1 rounded-md" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <div className="flex h-full">
                <Button 
                  variant={selectedDay === "weekday" ? "default" : "outline"} 
                  className="flex-1 rounded-r-none"
                  onClick={() => setSelectedDay("weekday")}
                >
                  Dias Úteis
                </Button>
                <Button 
                  variant={selectedDay === "saturday" ? "default" : "outline"} 
                  className="flex-1 rounded-none border-x-0"
                  onClick={() => setSelectedDay("saturday")}
                >
                  Sábados
                </Button>
                <Button 
                  variant={selectedDay === "sunday" ? "default" : "outline"} 
                  className="flex-1 rounded-l-none"
                  onClick={() => setSelectedDay("sunday")}
                >
                  Domingos
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 glass-card rounded-xl p-4 animate-on-scroll opacity-0">
              <h3 className="font-semibold mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Linhas de Ônibus
              </h3>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {busLines.map(line => (
                  <div 
                    key={line.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedLine === line.id 
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedLine(line.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-primary">{line.id}</span>
                      </div>
                      <span className="text-sm">{line.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 glass-card rounded-xl p-4 animate-on-scroll opacity-0">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Horários da Linha {selectedLine}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {selectedDay === "weekday" ? "Segunda a Sexta" : 
                     selectedDay === "saturday" ? "Sábados" : "Domingos e Feriados"}
                  </div>
                </div>
                <p className="text-gray-600 mt-1">{scheduleData[selectedLine as keyof typeof scheduleData]?.name}</p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                {scheduleData[selectedLine as keyof typeof scheduleData]?.[selectedDay as keyof typeof scheduleData["001"]].map((time, index) => (
                  <div key={index} className="text-center p-2 rounded-md bg-gray-50 hover:bg-primary/5 transition-colors">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedules;
