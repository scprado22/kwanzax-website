import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, Clock, Users, ChartBar as BarChart3, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const stepIcons = [Clock, Users, BarChart3, Rocket];
const stepColors = [
  { bg: "bg-[#03409C]", light: "bg-blue-50", text: "text-[#03409C]" },
  { bg: "bg-[#35A2F5]", light: "bg-sky-50", text: "text-sky-600" },
  { bg: "bg-cyan-600", light: "bg-cyan-50", text: "text-cyan-600" },
  { bg: "bg-gray-800", light: "bg-gray-100", text: "text-gray-700" },
];

export default function Flow() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-[400px] w-[400px] rounded-full bg-[#35A2F5]/6 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {t.flow.title}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              Metodologia clara.<br />Resultados garantidos.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mt-6 leading-relaxed"
            >
              Cada projeto segue um processo estruturado e transparente para garantir a entrega dentro do prazo, orçamento e qualidade esperados.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* METRICS BAR */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "8–12", unit: "semanas", label: "tempo médio de entrega" },
              { val: "2", unit: "semanas", label: "por sprint de desenvolvimento" },
              { val: "100%", unit: "", label: "transparência e comunicação" },
              { val: "30", unit: "dias", label: "de suporte pós-lançamento" },
            ].map(({ val, unit, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#03409C]">
                  {val}<span className="text-lg ml-1 text-gray-400">{unit}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-[#03409C] via-[#35A2F5] to-gray-200 hidden md:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-12"
            >
              {t.flow.steps.map((step, idx) => {
                const Icon = stepIcons[idx];
                const color = stepColors[idx];
                return (
                  <motion.div
                    key={step.phase}
                    variants={fadeUp}
                    className="relative flex gap-10 md:gap-16 items-start"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`flex items-center justify-center h-20 w-20 rounded-2xl ${color.bg} shadow-lg`}>
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1 pt-3 pb-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          Fase 0{idx + 1}
                        </span>
                        <span className={`text-xs font-semibold ${color.text} ${color.light} px-3 py-1 rounded-full`}>
                          {step.duration}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.phase}
                      </h2>
                      <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-10">O que pode esperar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Equipa dedicada desde o primeiro dia",
                "Demos semanais com feedback contínuo",
                "Relatórios de progresso regulares",
                "Documentação técnica completa",
                "Formação das equipas do cliente",
                "Suporte pós-lançamento de 30 dias",
                "Código-fonte entregue ao cliente",
                "SLA e métricas acordadas no contrato",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <div className="h-2 w-2 rounded-full bg-[#35A2F5] flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Agende uma chamada de discovery gratuita e receba uma proposta detalhada em 48h.
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white font-bold px-8 py-4 rounded-full transition-colors duration-200"
            >
              Iniciar projeto <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
