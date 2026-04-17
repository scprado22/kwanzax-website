import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader as Loader2, CircleCheck as CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function QuoteForm() {
  const { t } = useLanguage();
  const f = t.forms.quoteForm;

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(f.validationError);
      return;
    }

    setLoading(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(
        `${supabaseUrl}/functions/v1/send-quote-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || undefined,
            company: formData.company || undefined,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error sending message");
      }

      setSubmitted(true);
      toast.success(f.successToast);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          message: "",
        });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      toast.error(f.errorToast);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{f.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{f.email}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{f.message}</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={loading || submitted}
              className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none disabled:opacity-50"
              rows={4}
              required
            />
          </div>

          {submitted ? (
            <div className="w-full py-3 px-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-2 text-green-700 font-medium">
              <CheckCircle2 className="h-5 w-5" />
              {f.successMessage}
            </div>
          ) : (
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {f.sending}
                </>
              ) : (
                f.send
              )}
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
