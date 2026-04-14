import React from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function LiveChat() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Chat ao Vivo</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-blue-50 rounded text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Olá! Como podemos ajudar?
              </p>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg text-sm text-blue-900 placeholder-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}
