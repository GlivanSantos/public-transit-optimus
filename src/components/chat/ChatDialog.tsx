
import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { CHAT_CONFIG } from "@/config/chat";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatDialogProps {
  onClose: () => void;
}

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(10, { message: "Informe um número de telefone válido" }),
});

export const ChatDialog = ({ onClose }: ChatDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"form" | "chat">("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: CHAT_CONFIG.greeting,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartChat = () => {
    try {
      formSchema.parse({ name, phone });
      setStep("chat");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Campos inválidos",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Create the payload with the message and user data
      const payload = {
        message: userMessage.content,
        name,
        phone,
        timestamp: userMessage.timestamp,
      };
      
      console.log("Sending message to webhook:", payload);
      
      // Try to use fetch with standard CORS first
      const response = await fetch(CHAT_CONFIG.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        try {
          // Try to parse the response as JSON
          const responseData = await response.json();
          console.log("Webhook response:", responseData);
          
          // Add the response message to the chat
          const assistantMessage: Message = {
            role: "assistant",
            content: responseData.message || responseData.response || responseData.reply || "Mensagem recebida.",
            timestamp: new Date(),
          };
          
          setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
          console.log("Non-JSON response from webhook:", response);
          // If we can't parse the JSON, use response text
          const text = await response.text();
          
          const assistantMessage: Message = {
            role: "assistant",
            content: text || "Mensagem recebida. Aguarde um momento.",
            timestamp: new Date(),
          };
          
          setMessages((prev) => [...prev, assistantMessage]);
        }
      } else {
        // Fallback to no-cors mode if standard request fails
        console.log("Standard fetch failed, trying no-cors mode");
        await fetch(CHAT_CONFIG.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
        });
        
        // Since we can't get the response with no-cors, use a default message
        const assistantMessage: Message = {
          role: "assistant",
          content: "Mensagem enviada com sucesso. Aguardando resposta...",
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Erro",
        description: CHAT_CONFIG.messages.error,
        variant: "destructive",
      });
      
      // Add a fallback message to inform the user
      const errorMessage: Message = {
        role: "assistant",
        content: "Desculpe, tivemos um problema ao processar sua mensagem. Por favor, tente novamente mais tarde.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 h-96 sm:w-96 sm:h-[450px] overflow-hidden animate-scale-in">
      <div className="bg-primary p-4 text-white flex items-center justify-between">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left text-white">
          <h2 className="text-lg font-semibold leading-none tracking-tight">Atendimento</h2>
          <p className="text-primary-foreground/80">
            {step === "form" 
              ? CHAT_CONFIG.messages.formPrompt 
              : CHAT_CONFIG.messages.chatPrompt}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {step === "form" ? (
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Telefone
              </label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
              />
            </div>
            <Button onClick={handleStartChat} className="mt-2">
              Iniciar conversa
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-3 border-t flex gap-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="min-h-[50px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                size="icon" 
                onClick={handleSendMessage} 
                disabled={isLoading || !message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
