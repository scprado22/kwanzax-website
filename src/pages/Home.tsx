import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ArrowRight,
  Cpu,
  Workflow,
  Database,
  PenTool,
  Globe,
  TrendingUp,
  ShieldCheck,
  CircleCheck as CheckCircle2,
} from "lucide-react";
import WireframeDottedGlobe from "@/components/ui/wireframe-dotted-globe";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cpu,
      title: t.services.items[0].title,
      summary: t.services.items[0].summary,
      color: "bg-blue-50",
      iconColor: "text-[#03409C]",
    },
    {
      icon: Workflow,
      title: t.services.items[1].title,
      summary: t.services.items[1].summary,
      color: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      icon: Database,
      title: t.services.items[2].title,
      summary: t.services.items[2].summary,
      color: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: PenTool,
      title: t.services.items[3].title,
      summary: t.services.items[3].summary,
      color: "bg-blue-50",
      iconColor: "text-[#35A2F5]",
    },
  ];

  const trustPoints = [
    { icon: Globe, label: "Dubai · Luanda · Lisboa" },
    { icon: TrendingUp, label: "50+ projetos entregues" },
    { icon: ShieldCheck, label: "Entrega garantida" },
    { icon: CheckCircle2, label: "15+ sectores" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-48 h-[700px] w-[700px] rounded-full bg-[#03409C]/5 blur-3xl" />
          <div className="absolute top-1/2 -left-32 h-[500px] w-[500px] rounded-full bg-[#35A2F5]/6 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-7"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contactos"
                className="inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-base"
              >
                {t.hero.cta}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#03409C] text-gray-700 hover:text-[#03409C] font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-base"
              >
                {t.hero.secondaryCta}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-gray-100"
            >
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon size={16} className="text-[#35A2F5] flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#03409C]/8 to-[#35A2F5]/8 blur-3xl scale-110 pointer-events-none" />
              <WireframeDottedGlobe size={440} className="drop-shadow-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {t.services.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                Quatro capacidades.<br />Um parceiro.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map(({ icon: Icon, title, summary, color, iconColor }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group p-7 rounded-2xl bg-white border border-gray-100 hover:border-[#35A2F5]/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                    <Icon size={24} className={iconColor} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{summary}</p>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[#03409C] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Ver mais <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 text-center">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#03409C] bg-white text-gray-700 hover:text-[#03409C] font-semibold px-7 py-3 rounded-full transition-colors duration-200 text-sm"
              >
                Ver todos os serviços <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOW PREVIEW */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                  {t.flow.title}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                  Processo claro.<br />Entrega garantida.
                </h2>
              </div>
              <Link
                to="/fluxo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#03409C] hover:gap-3 transition-all"
              >
                Ver processo completo <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {t.flow.steps.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  variants={fadeUp}
                  className="flex flex-col p-6 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#03409C] text-white text-sm font-bold flex-shrink-0 mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{step.phase}</h3>
                  <p className="text-xs text-[#35A2F5] font-semibold mt-1">{step.duration}</p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                  {t.portfolio.title}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                  {t.portfolio.subtitle}
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#03409C] hover:gap-3 transition-all"
              >
                Ver portfólio completo <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "AJS Transportes e Logística", category: "Transformação Digital", gradient: "from-[#03409C] to-[#35A2F5]", result: "Zero a presença digital em 2 semanas" },
                { title: "ERP Retalho Multi-País", category: "Software Empresarial", gradient: "from-cyan-600 to-sky-400", result: "45 lojas em visibilidade unificada" },
                { title: "FinTech Pagamentos", category: "Tecnologia Financeira", gradient: "from-blue-700 to-[#35A2F5]", result: "$50M+ volume de transações" },
              ].map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${p.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <span className="absolute top-4 left-4 text-xs font-semibold text-white/90 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
                    <p className="text-sm text-[#35A2F5] font-semibold mt-2">{p.result}</p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 mt-4 text-sm text-gray-500 hover:text-[#03409C] transition-colors font-medium"
                    >
                      Ver caso <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#03409C] py-28 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#35A2F5]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-7">
              Pronto para transformar<br />o seu negócio?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
              Fale connosco e em 48h terá uma proposta personalizada com roadmap e business case.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contactos"
                className="inline-flex items-center gap-2 bg-white text-[#03409C] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-colors duration-200 text-base"
              >
                {t.hero.cta} <ArrowRight size={18} />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
              >
                {t.nav.services}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
