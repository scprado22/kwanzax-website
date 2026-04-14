import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.services, path: "/servicos" },
    { label: t.nav.flow, path: "/fluxo" },
    { label: t.nav.portfolio, path: "/portfolio" },
    { label: t.nav.contact, path: "/contactos" },
  ];

  const serviceLinks = [
    "AI Consulting & Strategy",
    "Automations & RPA",
    "Data Platforms & Analytics",
    "Product & UX Engineering",
  ];

  return (
    <footer className="bg-[#021e4a] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src="/Logo_KwanzaX.png" alt="KwanzaX" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <a
                href={`mailto:${t.brand.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-[#35A2F5] flex-shrink-0" />
                {t.brand.email}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`tel:${t.brand.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-[#35A2F5] flex-shrink-0" />
                {t.brand.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[#35A2F5] flex-shrink-0" />
                {t.brand.offices}
              </div>
              <a
                href="https://www.linkedin.com/company/kwanzax/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Linkedin size={16} className="text-[#35A2F5] flex-shrink-0" />
                LinkedIn
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/servicos"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 space-y-1.5">
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                KX DESENVOLVE –<br />PRESTAÇÃO DE SERVIÇOS, LDA
              </p>
              <p className="text-xs text-gray-600">NIF: 5003003582</p>
              <p className="text-xs text-gray-600">Luanda, Angola</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} KwanzaX. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#35A2F5] animate-pulse" />
            <span className="text-xs text-gray-600">Dubai · Luanda · Lisboa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
