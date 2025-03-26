
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in a real app
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Estamos sempre disponíveis para ajudar, responder perguntas ou ouvir sugestões para melhorar
            o sistema de transporte público de Aracaju.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="animate-on-scroll opacity-0">
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Envie uma Mensagem
                </h2>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Dúvida">Dúvida</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Problema">Relatar um problema</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Digite sua mensagem detalhada aqui..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-base rounded-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="glass-card rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-gray-600">(79) 3179-1000</p>
                      <p className="text-gray-600">Horário: Seg-Sex, 08:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">E-mail</h3>
                      <p className="text-gray-600">contato@transitoptimus.com.br</p>
                      <p className="text-gray-600">suporte@transitoptimus.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-gray-600">Av. Beira Mar, 1000</p>
                      <p className="text-gray-600">Aracaju, SE - CEP: 49000-000</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Pontos de Atendimento</h2>
                
                <div className="space-y-4">
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Terminal Rodoviário Governador José Rollemberg Leite</h3>
                    <p className="text-gray-600 text-sm">Centro de Aracaju - Horário: 06:00-22:00</p>
                  </div>
                  
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Terminal de Integração do Mercado</h3>
                    <p className="text-gray-600 text-sm">Centro de Aracaju - Horário: 06:00-22:00</p>
                  </div>
                  
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium">Sede da SMTT Aracaju</h3>
                    <p className="text-gray-600 text-sm">Centro de Aracaju - Horário: 08:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-on-scroll opacity-0">
            <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-4">
                <h3 className="font-medium mb-2">Como posso relatar um problema com um ônibus?</h3>
                <p className="text-gray-600">
                  Você pode relatar problemas através do formulário de contato, informando o número da linha, 
                  horário e descrição detalhada do ocorrido. Também é possível fazer reclamações diretamente 
                  nos terminais de integração.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-4">
                <h3 className="font-medium mb-2">Como faço para solicitar uma nova linha de ônibus?</h3>
                <p className="text-gray-600">
                  Solicitações para novas linhas devem ser encaminhadas por escrito à SMTT Aracaju. Você também 
                  pode iniciar o processo através do nosso formulário de contato, selecionando "Sugestão" 
                  como assunto.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-4">
                <h3 className="font-medium mb-2">Posso sugerir melhorias no aplicativo?</h3>
                <p className="text-gray-600">
                  Sim! Valorizamos o feedback dos usuários. Utilize o formulário de contato ou envie-nos 
                  um e-mail com suas sugestões detalhadas. Analisamos todas as propostas recebidas.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-4">
                <h3 className="font-medium mb-2">Como recupero minha senha de acesso?</h3>
                <p className="text-gray-600">
                  Na tela de login, clique em "Esqueci minha senha" e siga as instruções enviadas ao seu e-mail. 
                  Se precisar de ajuda adicional, entre em contato com nosso suporte técnico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
