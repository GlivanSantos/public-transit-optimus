
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Map, Users, Trophy, Bus, BarChart } from "lucide-react";

const About = () => {
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 animate-fade-in">
              Sobre o TransitOptimus
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in delay-100">
              Transformando o transporte público em Aracaju
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in delay-200">
              Somos uma plataforma digital desenvolvida para facilitar a vida dos usuários
              do transporte público em Aracaju, oferecendo informações em tempo real e 
              planejamento inteligente de rotas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-on-scroll opacity-0">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-600 mb-6">
                Transformar a experiência do transporte público em Aracaju, tornando-o mais 
                eficiente, confortável e acessível para todos os cidadãos. Queremos reduzir o 
                tempo de espera, melhorar o planejamento de viagens e contribuir para uma 
                cidade mais sustentável.
              </p>
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-600 mb-6">
                Ser reconhecidos como a principal plataforma de mobilidade urbana de Aracaju, 
                integrando todos os modais de transporte e tornando-se indispensável no dia a dia 
                dos cidadãos. Nosso objetivo é que o transporte público seja a opção preferida 
                para deslocamentos na cidade.
              </p>
              <h2 className="text-2xl font-bold mb-4">Nossos Valores</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">•</div>
                  <span><strong>Inovação:</strong> Buscamos constantemente novas soluções tecnológicas para melhorar a mobilidade urbana.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">•</div>
                  <span><strong>Acessibilidade:</strong> Trabalhamos para que o transporte público seja acessível a todos, independente de condição física ou social.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">•</div>
                  <span><strong>Sustentabilidade:</strong> Promovemos o transporte coletivo como forma de reduzir emissões e melhorar a qualidade de vida na cidade.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">•</div>
                  <span><strong>Transparência:</strong> Compartilhamos informações precisas e em tempo real com nossos usuários.</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Parceria com a SMTT Aracaju</h3>
                <p className="text-gray-600">
                  O TransitOptimus é desenvolvido em parceria com a Superintendência Municipal 
                  de Transportes e Trânsito (SMTT) de Aracaju, integrando dados oficiais e 
                  trabalhando juntos para melhorar a mobilidade urbana.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="h-20 w-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Logo SMTT Aracaju
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Bus className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Linhas</h4>
                      <p className="text-2xl font-bold">70+</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Map className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Pontos</h4>
                      <p className="text-2xl font-bold">1000+</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Usuários</h4>
                      <p className="text-2xl font-bold">50 mil+</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tempo Economizado</h4>
                      <p className="text-2xl font-bold">30 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl font-bold mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Ana Silva", position: "CEO & Fundadora", image: "F" },
                { name: "Carlos Santos", position: "CTO", image: "M" },
                { name: "Mariana Costa", position: "Cientista de Dados", image: "F" },
                { name: "João Oliveira", position: "Desenvolvedor Full Stack", image: "M" }
              ].map((member, index) => (
                <div key={index} className="glass-card rounded-xl p-4 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500 text-2xl font-bold">
                    {member.image}
                  </div>
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
