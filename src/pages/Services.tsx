import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, Check, Cpu, Workflow, Database, PenTool } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const icons = [Cpu, Workflow, Database, PenTool];
const gradients = [
  "from-[#03409C] to-[#35A2F5]",
  "from-cyan-600 to-sky-400",
  "from-sky-700 to-blue-400",
  "from-blue-700 to-[#35A2F5]",
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-32 h-[500px] w-[500px] rounded-full bg-[#03409C]/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {t.services.title}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight tracking-tight whitespace-pre-line"
            >
              {t.services.pageHeading}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed"
            >
              {t.services.pageSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE ITEMS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {t.services.items.map((service, idx) => {
            const Icon = icons[idx];
            const isEven = idx % 2 === 0;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative overflow-hidden min-h-[280px] bg-gradient-to-br ${gradients[idx]} flex items-center justify-center ${!isEven ? "lg:order-2" : ""}`}>
                    <Icon size={120} className="text-white/15" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                          0{idx + 1}
                        </span>
                        <div className="text-3xl font-bold text-white mt-1">{service.title}</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-10 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Icon size={20} className="text-[#03409C]" />
                      </div>
                      <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                        {t.services.title}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">{service.summary}</p>

                    <ul className="space-y-3 mb-8">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check size={18} className="text-[#35A2F5] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contactos"
                      className="inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm w-fit"
                    >
                      {t.services.talkAboutService} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03409C] py-24 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#35A2F5]/20 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.services.ctaHeading}
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              {t.services.ctaSubtitle}
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-white text-[#03409C] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t.services.ctaButton} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
