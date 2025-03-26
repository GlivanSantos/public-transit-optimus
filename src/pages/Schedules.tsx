
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { safeMap } from "@/utils/arrayUtils";

const Schedules = () => {
  const [activeDay, setActiveDay] = useState("weekday");
  
  const busSchedules = {
    weekday: [
      {
        lineNumber: "001",
        name: "Terminal Central / Atalaia",
        schedule: ["05:00", "05:30", "06:00", "06:20", "06:40", "07:00", "07:20", "07:40", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]
      },
      {
        lineNumber: "002",
        name: "Marcos Freire / Centro",
        schedule: ["05:10", "05:40", "06:10", "06:30", "06:50", "07:10", "07:30", "07:50", "08:10", "08:40", "09:10", "09:40", "10:10", "10:40", "11:10", "11:40", "12:10", "12:40", "13:10", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:30", "16:50", "17:10", "17:30", "17:50", "18:10", "18:40", "19:10", "19:40", "20:10", "20:40", "21:10", "21:40", "22:10", "22:40", "23:10"]
      },
      {
        lineNumber: "003",
        name: "Augusto Franco / Centro",
        schedule: ["05:15", "05:45", "06:15", "06:35", "06:55", "07:15", "07:35", "07:55", "08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15", "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:35", "16:55", "17:15", "17:35", "17:55", "18:15", "18:45", "19:15", "19:45", "20:15", "20:45", "21:15", "21:45", "22:15", "22:45", "23:15"]
      },
      {
        lineNumber: "004",
        name: "Bugio / Centro",
        schedule: ["05:05", "05:35", "06:05", "06:25", "06:45", "07:05", "07:25", "07:45", "08:05", "08:35", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:25", "16:45", "17:05", "17:25", "17:45", "18:05", "18:35", "19:05", "19:35", "20:05", "20:35", "21:05", "21:35", "22:05", "22:35", "23:05"]
      },
      {
        lineNumber: "701",
        name: "Circular / Centro",
        schedule: ["05:30", "06:00", "06:30", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]
      }
    ],
    saturday: [
      {
        lineNumber: "001",
        name: "Terminal Central / Atalaia",
        schedule: ["05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]
      },
      {
        lineNumber: "002",
        name: "Marcos Freire / Centro",
        schedule: ["05:40", "06:10", "06:40", "07:10", "07:40", "08:10", "08:40", "09:10", "09:40", "10:10", "10:40", "11:10", "11:40", "12:10", "12:40", "13:10", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10", "17:40", "18:10", "18:40", "19:10", "19:40", "20:10", "20:40", "21:10", "21:40", "22:10", "22:40", "23:10"]
      },
      {
        lineNumber: "003",
        name: "Augusto Franco / Centro",
        schedule: ["05:45", "06:15", "06:45", "07:15", "07:45", "08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15", "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15", "17:45", "18:15", "18:45", "19:15", "19:45", "20:15", "20:45", "21:15", "21:45", "22:15", "22:45", "23:15"]
      },
      {
        lineNumber: "004",
        name: "Bugio / Centro",
        schedule: ["05:35", "06:05", "06:35", "07:05", "07:35", "08:05", "08:35", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35", "18:05", "18:35", "19:05", "19:35", "20:05", "20:35", "21:05", "21:35", "22:05", "22:35", "23:05"]
      },
      {
        lineNumber: "701",
        name: "Circular / Centro",
        schedule: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]
      }
    ],
    sunday: [
      {
        lineNumber: "001",
        name: "Terminal Central / Atalaia",
        schedule: ["06:00", "06:40", "07:20", "08:00", "08:40", "09:20", "10:00", "10:40", "11:20", "12:00", "12:40", "13:20", "14:00", "14:40", "15:20", "16:00", "16:40", "17:20", "18:00", "18:40", "19:20", "20:00", "20:40", "21:20", "22:00", "22:40", "23:20"]
      },
      {
        lineNumber: "002",
        name: "Marcos Freire / Centro",
        schedule: ["06:10", "06:50", "07:30", "08:10", "08:50", "09:30", "10:10", "10:50", "11:30", "12:10", "12:50", "13:30", "14:10", "14:50", "15:30", "16:10", "16:50", "17:30", "18:10", "18:50", "19:30", "20:10", "20:50", "21:30", "22:10", "22:50", "23:30"]
      },
      {
        lineNumber: "003",
        name: "Augusto Franco / Centro",
        schedule: ["06:15", "06:55", "07:35", "08:15", "08:55", "09:35", "10:15", "10:55", "11:35", "12:15", "12:55", "13:35", "14:15", "14:55", "15:35", "16:15", "16:55", "17:35", "18:15", "18:55", "19:35", "20:15", "20:55", "21:35", "22:15", "22:55", "23:35"]
      },
      {
        lineNumber: "004",
        name: "Bugio / Centro",
        schedule: ["06:05", "06:45", "07:25", "08:05", "08:45", "09:25", "10:05", "10:45", "11:25", "12:05", "12:45", "13:25", "14:05", "14:45", "15:25", "16:05", "16:45", "17:25", "18:05", "18:45", "19:25", "20:05", "20:45", "21:25", "22:05", "22:45", "23:25"]
      },
      {
        lineNumber: "701",
        name: "Circular / Centro",
        schedule: ["06:30", "07:10", "07:50", "08:30", "09:10", "09:50", "10:30", "11:10", "11:50", "12:30", "13:10", "13:50", "14:30", "15:10", "15:50", "16:30", "17:10", "17:50", "18:30", "19:10", "19:50", "20:30", "21:10", "21:50", "22:30", "23:10"]
      }
    ]
  };

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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Horários de Ônibus</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Consulte os horários das principais linhas de ônibus que circulam em Aracaju.
            Os horários podem variar em feriados e datas especiais.
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-on-scroll opacity-0">
            <Tabs defaultValue="weekday" value={activeDay} onValueChange={setActiveDay}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="weekday">Dias Úteis</TabsTrigger>
                <TabsTrigger value="saturday">Sábados</TabsTrigger>
                <TabsTrigger value="sunday">Domingos/Feriados</TabsTrigger>
              </TabsList>
              
              {["weekday", "saturday", "sunday"].map((day) => (
                <TabsContent key={day} value={day} className="space-y-6">
                  {safeMap(busSchedules[day as keyof typeof busSchedules], (route, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                      <div className="bg-primary/5 px-4 py-3 flex justify-between items-center">
                        <div>
                          <span className="inline-block bg-primary text-white text-xs font-semibold px-2 py-1 rounded mr-2">
                            {route.lineNumber}
                          </span>
                          <span className="font-medium">{route.name}</span>
                        </div>
                        <Button variant="outline" size="sm">Ver no mapa</Button>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-500 mb-3">Horários de saída:</h4>
                        <div className="flex flex-wrap gap-2">
                          {safeMap(route.schedule, (time, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-2">Informações importantes</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Os horários acima são aproximados e podem sofrer variações devido ao tráfego.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Em dias de eventos especiais na cidade, algumas linhas podem ter horários especiais.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Para informações em tempo real, utilize o nosso mapa ao vivo ou aplicativo.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedules;
