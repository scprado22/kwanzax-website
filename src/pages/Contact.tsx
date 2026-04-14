import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/serafimcorreia123/30min";
const PHONE = "+971529658882";
const EMAIL = "serafimcorreia123@gmail.com";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Contact() {
  const { t, language } = useLanguage();

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      action: `mailto:${EMAIL}`,
      actionLabel: language === "pt" ? "Enviar email" : "Send email",
      color: "bg-blue-50",
      iconColor: "text-[#03409C]",
    },
    {
      icon: Phone,
      label: language === "pt" ? "Telefone" : "Phone",
      value: PHONE,
      action: `tel:${PHONE}`,
      actionLabel: language === "pt" ? "Ligar agora" : "Call now",
      color: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: PHONE,
      action: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
      actionLabel: language === "pt" ? "Abrir WhatsApp" : "Open WhatsApp",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: MapPin,
      label: language === "pt" ? "Escritórios" : "Offices",
      value: t.brand.offices,
      action: undefined,
      actionLabel: undefined,
      color: "bg-blue-50",
      iconColor: "text-[#35A2F5]",
    },
  ];

  const bookingHeading = language === "pt" ? "Marcar chamada" : "Book a call";
  const bookingText = language === "pt"
    ? "Agende uma breve chamada para falarmos sobre o seu projecto."
    : "Schedule a short call to discuss your project.";
  const bookingCta = language === "pt" ? "Marcar no Calendly" : "Book on Calendly";

  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[#03409C]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#35A2F5]/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {t.nav.contact}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              {t.contact.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mt-6 leading-relaxed max-w-xl"
            >
              {t.contact.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {contactCards.map(({ icon: Icon, label, value, action, actionLabel, color, iconColor }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group rounded-2xl border border-gray-100 bg-white p-8 hover:border-[#35A2F5]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center mb-6`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  {label}
                </p>
                <p className="text-base font-semibold text-gray-900 leading-snug">{value}</p>
                {action && actionLabel && (
                  <a
                    href={action}
                    target={action.startsWith("http") ? "_blank" : undefined}
                    rel={action.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#03409C] hover:text-[#35A2F5] transition-colors"
                  >
                    {actionLabel} <ArrowRight size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOOKING BLOCK */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-blue-50 border border-blue-100 rounded-2xl px-8 py-7"
          >
            <div className="flex items-start gap-5">
              <div className="h-11 w-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <CalendarDays size={20} className="text-[#03409C]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{bookingHeading}</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-sm">{bookingText}</p>
              </div>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm whitespace-nowrap"
            >
              {bookingCta} <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESPONSE TIME BANNER */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <p className="text-gray-700 font-medium text-sm">
              {language === "pt"
                ? <>Respondemos a todos os pedidos em menos de <span className="text-[#03409C] font-bold">24 horas úteis</span>.</>
                : <>We respond to all requests within <span className="text-[#03409C] font-bold">24 business hours</span>.</>
              }
            </p>
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#03409C] hover:gap-3 transition-all flex-shrink-0"
          >
            {language === "pt" ? "Ver os nossos serviços" : "View our services"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03409C] py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#35A2F5]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {language === "pt" ? "Prefere uma conversa directa?" : "Prefer a direct conversation?"}
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              {language === "pt"
                ? "Envie-nos uma mensagem via WhatsApp ou email e entraremos em contacto em breve."
                : "Send us a message via WhatsApp or email and we'll be in touch shortly."
              }
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#03409C] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-colors duration-200"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
