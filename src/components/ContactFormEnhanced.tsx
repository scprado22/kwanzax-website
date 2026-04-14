import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export function ContactFormEnhanced() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Por favor preencha todos os campos obrigatórios");
      return;
    }

    setIsSubmitting(true);
    console.log("Contact form submitted:", formData);

    try {
      // IMPORTANTE: Substitui pelo teu URL do Supabase
      const response = await fetch(
        "https://gqfuwomeoucompeirwkd.supabase.co/functions/v1/send-quote-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Error response:", errorData);
        throw new Error(`Erro ao enviar: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      // Mostra mensagem de sucesso
      toast.success("Mensagem enviada com sucesso! Entraremos em contacto em breve.");

      // Limpa o formulário após 2 segundos
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar mensagem. Por favor tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  required
                  placeholder="João Silva"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  required
                  placeholder="joao@exemplo.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telemóvel
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="+351 900 000 000"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="projeto">Novo Projeto</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="suporte">Suporte</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  rows={4}
                  required
                  placeholder="Conte-nos sobre o seu projeto ou necessidade..."
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* ... resto do código dos cards permanece igual ... */}
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-blue-600">info@kwanzax.com</p>
                  <p className="text-sm text-gray-600 mt-1">Resposta em 24-48h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <a href="tel:+971529658882" className="text-blue-600 hover:text-blue-700 transition-colors">+971 52 965 8882</a>
                  <p className="text-sm text-gray-600">Dubai, UAE</p>
                  <a href="tel:+351938032161" className="text-blue-600 hover:text-blue-700 transition-colors mt-2 block">+351 938 032 161</a>
                  <p className="text-sm text-gray-600">Lisboa, Portugal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/971529658882" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">+971 52 965 8882</a>
                  <p className="text-sm text-gray-600">Chat direto</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Escritórios</h3>
                  <p className="text-sm text-gray-700 mb-2">Dubai, UAE</p>
                  <p className="text-sm text-gray-700 mb-2">Lisboa, Portugal</p>
                  <p className="text-sm text-gray-700">Luanda, Angola</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}