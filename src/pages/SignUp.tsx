
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      setIsLoading(false);
      return;
    }
    
    // Simulate signup process
    setTimeout(() => {
      console.log("Signup attempt with:", { name, email, password });
      // In a real app, would connect to authentication service
      setIsLoading(false);
      setIsSuccess(true);
      
      // Redirect to login after delay
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen font-inter">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-md">
            <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para a página inicial
            </Link>
            
            <div className="glass-card rounded-xl p-8 animate-fade-in">
              {isSuccess ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Cadastro concluído!</h2>
                  <p className="text-gray-600 mb-6">
                    Sua conta foi criada com sucesso. Você será redirecionado para a página de login.
                  </p>
                  <Link to="/login">
                    <Button className="w-full py-6 text-base rounded-lg">
                      Ir para o Login
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Criar uma nova conta</h1>
                    <p className="text-gray-600">
                      Preencha os campos abaixo para se cadastrar
                    </p>
                  </div>
                  
                  <form onSubmit={handleSignUp}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nome completo
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="name"
                            type="text"
                            placeholder="Digite seu nome completo"
                            className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          E-mail
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="email"
                            type="email"
                            placeholder="seu.email@exemplo.com"
                            className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                          Senha
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Crie uma senha segura"
                            className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                          Confirmar senha
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirme sua senha"
                            className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            minLength={6}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 mt-1"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                          Concordo com os{" "}
                          <Link to="/terms" className="text-primary hover:underline">
                            Termos de Uso
                          </Link>{" "}
                          e{" "}
                          <Link to="/privacy" className="text-primary hover:underline">
                            Política de Privacidade
                          </Link>
                        </label>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full py-6 text-base rounded-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processando...
                          </span>
                        ) : (
                          "Criar conta"
                        )}
                      </Button>
                    </div>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Já tem uma conta?{" "}
                      <Link to="/login" className="text-primary font-medium hover:underline">
                        Fazer login
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
