
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const signUpSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  terms: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos de uso",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const handleSignUp = (values: SignUpFormValues) => {
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      console.log("Signup attempt with:", values);
      setIsLoading(false);
      setIsSuccess(true);
      
      toast({
        title: "Conta criada com sucesso!",
        description: "Você será redirecionado para a página de login.",
      });
      
      // Redirect to login after delay
      setTimeout(() => {
        navigate("/login");
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
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                              </div>
                              <FormControl>
                                <Input
                                  placeholder="Digite seu nome completo"
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
                            <FormLabel>Senha</FormLabel>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                              </div>
                              <FormControl>
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Crie uma senha segura"
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
                      
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirmar senha</FormLabel>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                              </div>
                              <FormControl>
                                <Input
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Confirme sua senha"
                                  className="pl-10"
                                  {...field}
                                />
                              </FormControl>
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                id="terms"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel htmlFor="terms" className="text-sm text-gray-600">
                                Concordo com os{" "}
                                <Link to="/terms" className="text-primary hover:underline">
                                  Termos de Uso
                                </Link>{" "}
                                e{" "}
                                <Link to="/privacy" className="text-primary hover:underline">
                                  Política de Privacidade
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
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
                            Processando...
                          </span>
                        ) : (
                          "Criar conta"
                        )}
                      </Button>
                      
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                          Já tem uma conta?{" "}
                          <Link to="/login" className="text-primary font-medium hover:underline">
                            Fazer login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </Form>
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
