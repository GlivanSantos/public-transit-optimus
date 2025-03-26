
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Lock } from "lucide-react";

const Terms = () => {
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
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
            </div>
            
            <p className="text-gray-600 mb-8">
              Última atualização: 10 de agosto de 2023
            </p>

            <div className="prose prose-lg max-w-none animate-on-scroll opacity-0">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o TransitOptimus ("o Serviço"), você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, você não deve utilizar o Serviço.
              </p>

              <h2>2. Descrição do Serviço</h2>
              <p>
                O TransitOptimus é uma plataforma que fornece informações sobre o transporte público em Aracaju, incluindo horários de ônibus, planejamento de rotas, localização em tempo real dos veículos e dados sobre ocupação.
              </p>

              <h2>3. Cadastro e Contas</h2>
              <p>
                Para utilizar determinadas funcionalidades do Serviço, você precisará criar uma conta. Ao fazê-lo, você concorda em:
              </p>
              <ul>
                <li>Fornecer informações precisas, atuais e completas;</li>
                <li>Manter e atualizar prontamente seus dados de cadastro;</li>
                <li>Manter a segurança de sua senha e aceitar responsabilidade por todas as atividades que ocorram em sua conta;</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
              </ul>

              <h2>4. Utilização do Serviço</h2>
              <p>
                Você concorda em utilizar o Serviço apenas para os fins permitidos por estes Termos e por leis, regulamentos e práticas geralmente aceitas na jurisdição relevante.
              </p>
              <p>
                Você não poderá:
              </p>
              <ul>
                <li>Usar o Serviço para qualquer finalidade ilegal ou não autorizada;</li>
                <li>Interferir ou interromper a integridade ou o desempenho do Serviço;</li>
                <li>Tentar obter acesso não autorizado ao Serviço, contas de usuários ou sistemas de computador;</li>
                <li>Coletar ou armazenar dados pessoais de outros usuários sem sua autorização;</li>
                <li>Disseminar malware, vírus ou outros códigos maliciosos.</li>
              </ul>

              <h2>5. Conteúdo e Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponibilizado através do Serviço, incluindo textos, gráficos, logotipos, ícones, imagens e dados, é de propriedade do TransitOptimus ou de seus licenciadores e é protegido por leis de direitos autorais e propriedade intelectual.
              </p>
              <p>
                Você não poderá modificar, reproduzir, distribuir, criar obras derivadas, exibir publicamente ou explorar comercialmente qualquer conteúdo do Serviço sem autorização prévia por escrito.
              </p>

              <h2>6. Precisão das Informações</h2>
              <p>
                Embora nos esforcemos para fornecer informações precisas e atualizadas sobre o transporte público, não garantimos a exatidão, integridade ou atualidade dessas informações. O serviço é fornecido "como está" e deve ser usado apenas como uma referência.
              </p>
              <p>
                As informações em tempo real dependem dos dados fornecidos pelas empresas de transporte e podem estar sujeitas a atrasos, interrupções ou imprecisões.
              </p>

              <h2>7. Privacidade</h2>
              <p>
                Nossa Política de Privacidade, disponível separadamente, descreve como coletamos, usamos e compartilhamos suas informações pessoais quando você utiliza nosso Serviço.
              </p>

              <h2>8. Modificações do Serviço e dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o Serviço ou qualquer parte dele, com ou sem aviso prévio.
              </p>
              <p>
                Podemos atualizar estes Termos periodicamente. A continuação do uso do Serviço após tais alterações constitui aceitação dos novos Termos.
              </p>

              <h2>9. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância, o TransitOptimus, seus diretores, funcionários ou agentes serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso, resultantes de sua utilização do Serviço.
              </p>

              <h2>10. Lei Aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais de Aracaju, Sergipe.
              </p>

              <h2>11. Contato</h2>
              <p>
                Se você tiver perguntas sobre estes Termos, entre em contato conosco através do e-mail juridico@transitoptimus.com.br.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <div className="flex-1 glass-card rounded-xl p-4 animate-on-scroll opacity-0">
                <div className="flex items-center mb-4">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-medium">Segurança</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Protegemos seus dados com criptografia de ponta a ponta e seguimos as melhores práticas de segurança da informação.
                </p>
              </div>
              
              <div className="flex-1 glass-card rounded-xl p-4 animate-on-scroll opacity-0">
                <div className="flex items-center mb-4">
                  <Lock className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-medium">Privacidade</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Sua privacidade é importante para nós. Não compartilhamos seus dados pessoais com terceiros sem seu consentimento.
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

export default Terms;
