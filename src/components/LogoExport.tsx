import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export function LogoExport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = React.useState(512);
  const [bgColor, setBgColor] = React.useState('white');
  const [logoColor, setLogoColor] = React.useState('#2563eb');

  useEffect(() => {
    drawLogo();
  }, [size, bgColor, logoColor]);

  const drawLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    if (bgColor !== 'transparent') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);
    } else {
      ctx.clearRect(0, 0, size, size);
    }

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    if (logoColor === 'gradient') {
      gradient.addColorStop(0, '#2563eb');
      gradient.addColorStop(1, '#1d4ed8');
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = logoColor;
    }

    ctx.font = `bold ${size * 0.7}px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('K', size / 2, size / 2);
  };

  const downloadLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `kwanzax-logo-${size}px.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exportar Logo KwanzaX
          </h1>
          <p className="text-lg text-gray-600">
            Personaliza e faz download do logo em diferentes tamanhos e cores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">Configurações</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamanho (pixels)
                  </label>
                  <input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    min="64"
                    max="2048"
                    step="64"
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Recomendado: 512px ou 1024px
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cor de Fundo
                  </label>
                  <select
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  >
                    <option value="white">Branco</option>
                    <option value="transparent">Transparente</option>
                    <option value="#1e3a8a">Azul Escuro</option>
                    <option value="#2563eb">Azul</option>
                    <option value="black">Preto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cor do Logo
                  </label>
                  <select
                    value={logoColor}
                    onChange={(e) => setLogoColor(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  >
                    <option value="gradient">Gradiente Azul (Padrão)</option>
                    <option value="#2563eb">Azul</option>
                    <option value="#1e3a8a">Azul Escuro</option>
                    <option value="white">Branco</option>
                    <option value="black">Preto</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={downloadLogo}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PNG
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-sm text-gray-900 mb-2">💡 Dicas de uso:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fundos claros: logo azul ou preto</li>
                  <li>• Fundos escuros: logo branco</li>
                  <li>• Redes sociais: 512px ou 1024px</li>
                  <li>• Favicon: 64px ou 128px</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">Pré-visualização</h2>
              <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8 min-h-[400px]">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                {size}x{size} pixels
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
