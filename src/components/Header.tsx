import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, type TargetAndTransition } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface NavPosition {
  left: number;
  width: number;
  opacity: number;
}

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [position, setPosition] = useState<NavPosition>({ left: 0, width: 0, opacity: 0 });
  const location = useLocation();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.services, path: "/servicos" },
    { label: t.nav.flow, path: "/fluxo" },
    { label: t.nav.portfolio, path: "/portfolio" },
    { label: t.nav.about, path: "/sobre-nos" },
    { label: t.nav.contact, path: "/contactos" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/Logo_KwanzaX.png" alt="KwanzaX" className="h-8 w-auto" />
        </Link>

        <ul
          className="hidden md:flex items-center relative"
          onMouseLeave={() => setPosition((p) => ({ ...p, opacity: 0 }))}
        >
          {navItems.map((item) => (
            <NavTab
              key={item.path}
              item={item}
              active={location.pathname === item.path}
              setPosition={setPosition}
            />
          ))}
          <motion.li
            animate={position as TargetAndTransition}
            className="absolute z-0 h-8 rounded-full bg-blue-50 pointer-events-none"
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#03409C] hover:text-[#03409C] transition-all duration-200"
            aria-label="Switch language"
          >
            <span className={language === "pt" ? "text-[#03409C] font-bold" : "text-gray-400"}>PT</span>
            <span className="text-gray-300">/</span>
            <span className={language === "en" ? "text-[#03409C] font-bold" : "text-gray-400"}>EN</span>
          </button>

          <Link
            to="/contactos"
            className="hidden md:inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            {t.hero.cta}
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-[#03409C] text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-600"
                >
                  <span className={language === "pt" ? "text-[#03409C] font-bold" : "text-gray-400"}>PT</span>
                  <span className="text-gray-300">/</span>
                  <span className={language === "en" ? "text-[#03409C] font-bold" : "text-gray-400"}>EN</span>
                </button>
                <Link
                  to="/contactos"
                  className="bg-[#03409C] text-white text-sm font-semibold px-5 py-2 rounded-full"
                >
                  {t.hero.cta}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavTab({
  item,
  active,
  setPosition,
}: {
  item: { label: string; path: string };
  active: boolean;
  setPosition: (p: NavPosition) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10"
    >
      <Link
        to={item.path}
        className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          active ? "text-[#03409C] font-semibold" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {item.label}
      </Link>
    </li>
  );
}
