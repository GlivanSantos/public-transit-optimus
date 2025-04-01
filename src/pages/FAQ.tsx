import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
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

  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "Como funciona o aplicativo TransJet?",
      answer: "O TransJet é uma plataforma que oferece informações em tempo real sobre o transporte público em Aracaju. Você pode consultar horários de ônibus, planejar suas rotas, acompanhar a localização dos veículos no mapa ao vivo e visualizar o nível de ocupação dos ônibus, tudo isso para tornar sua experiência de transporte público mais eficiente e confortável."
    },
    {
      question: "É necessário criar uma conta para usar o aplicativo?",
      answer: "Não é obrigatório criar uma conta para acessar as funcionalidades básicas como consulta de horários e visualização do mapa ao vivo. No entanto, criar uma conta permite salvar suas rotas favoritas, receber notificações personalizadas sobre suas linhas mais usadas e acessar recursos adicionais que melhoram sua experiência."
    },
    {
      question: "Como são calculados os horários de chegada dos ônibus?",
      answer: "Os horários de chegada são calculados com base na localização GPS em tempo real dos ônibus, considerando a velocidade atual, o tráfego e a distância até o ponto de parada. Utilizamos algoritmos que aprendem com dados históricos para melhorar constantemente a precisão das previsões, levando em conta padrões de tráfego em diferentes horários e dias da semana."
    },
    {
      question: "O que significam os diferentes níveis de ocupação dos ônibus?",
      answer: "Os níveis de ocupação indicam aproximadamente quantos passageiros estão no ônibus: 'Vazio' (menos de 25% da capacidade), 'Baixo' (25-50%), 'Médio' (50-75%), 'Alto' (75-90%) e 'Lotado' (acima de 90%). Essa informação é atualizada em tempo real baseada em sensores nos veículos e algoritmos de estimativa."
    },
    {
      question: "Como posso relatar um problema ou enviar sugestões?",
      answer: "Você pode relatar problemas ou enviar sugestões através da seção 'Contato' no aplicativo. Sua opinião é muito importante para melhorarmos continuamente o serviço. Alternativamente, você também pode enviar um e-mail para suporte@transjet.com.br ou usar nossas redes sociais para entrar em contato."
    },
    {
      question: "O aplicativo funciona offline?",
      answer: "Algumas funcionalidades básicas como horários programados e mapas de rotas podem funcionar offline após o primeiro carregamento, mas recursos em tempo real como localização de ônibus e previsões de chegada necessitam de conexão com a internet para fornecer dados atualizados."
    },
    {
      question: "Como são determinadas as rotas sugeridas?",
      answer: "Nossas rotas sugeridas consideram múltiplos fatores: tempo total de viagem (incluindo esperas e transbordos), número de transbordos necessários, distância a pé, nível de conforto (ocupação dos veículos) e preferências que você configurar no aplicativo, como maximizar conforto ou minimizar tempo."
    },
    {
      question: "Quais cidades são atendidas pelo TransJet?",
      answer: "Atualmente, o TransJet está disponível apenas para a cidade de Aracaju e sua região metropolitana. Temos planos de expansão para outras cidades brasileiras no futuro próximo."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Perguntas Frequentes</h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o TransJet e o sistema de transporte público de Aracaju.
          </p>

          <div className="max-w-xl mx-auto mb-10 animate-on-scroll opacity-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar pergunta ou palavra-chave"
                className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="absolute right-1 top-1 rounded-md" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl p-4 transition-all"
                  >
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                    >
                      <h3 className="font-medium text-lg pr-8">{faq.question}</h3>
                      {expandedQuestion === index ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedQuestion === index && (
                      <div className="mt-4 text-gray-600 animate-accordion-down">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-gray-400">Nenhuma pergunta encontrada para "{searchTerm}"</p>
                <p className="mt-2">Tente outro termo ou entre em contato conosco para ajuda.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-4">Não encontrou o que procurava?</h3>
            <p className="text-gray-600 mb-6">
              Entre em contato com nossa equipe de suporte. Estamos sempre prontos para ajudar.
            </p>
            <Button size="lg" className="rounded-full px-6">
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
