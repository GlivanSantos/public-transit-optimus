
// Chat webhook configuration
export const CHAT_CONFIG = {
  // Update this URL with your actual webhook endpoint
  webhookUrl: "https://n8n.jetsalesbrasil.com/webhook/evento",
  
  // Initial greeting message
  greeting: "Olá! Como posso ajudar você hoje?",
  
  // Customize these messages as needed
  messages: {
    loading: "Estou pensando...",
    error: "Desculpe, ocorreu um erro. Tente novamente mais tarde.",
    formPrompt: "Preencha seus dados para iniciar a conversa",
    chatPrompt: "Como podemos ajudar?",
  }
};
