
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: LoginFormValues) => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log("Login attempt with:", values);
      setIsLoading(false);
      
      toast({
        title: "Login realizado com sucesso!",
        description: "Você será redirecionado para sua área do cliente.",
      });
      
      // Redirect to client area after successful login
      setTimeout(() => {
        navigate("/client");
      }, 1000);
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
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Acessar minha conta</h1>
                <p className="text-gray-600">
                  Entre com suas credenciais para acessar todos os recursos
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <FormControl>
                            <Input
                              placeholder="seu.email@exemplo.com"
                              className="pl-10"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between mb-1">
                          <FormLabel>Senha</FormLabel>
                          <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                            Esqueceu a senha?
                          </Link>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Digite sua senha"
                              className="pl-10"
                              {...field}
                            />
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                        Entrando...
                      </span>
                    ) : (
                      "Entrar"
                    )}
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Ainda não tem uma conta?{" "}
                      <Link to="/signup" className="text-primary font-medium hover:underline">
                        Criar conta
                      </Link>
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
