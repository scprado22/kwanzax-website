import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const caseGradients: Record<string, string> = {
  "ajs-case-study": "from-[#03409C] to-[#35A2F5]",
  "retail-erp": "from-cyan-700 to-sky-500",
  "fintech-platform": "from-gray-800 to-gray-600",
  "ai-analytics": "from-blue-700 to-[#35A2F5]",
};

const caseUrls: Record<string, string> = {
  "ajs-case-study": "https://ajstl.com",
};

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-32 h-[500px] w-[500px] rounded-full bg-[#35A2F5]/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {t.portfolio.title}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              {t.portfolio.subtitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mt-6 leading-relaxed"
            >
              {t.portfolio.pageSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.portfolio.metrics.map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-[#03409C]">{val}</div>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {t.portfolio.cases.map((project) => (
              <motion.article
                key={project.slug}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-400"
              >
                <div className={`relative h-56 bg-gradient-to-br ${caseGradients[project.slug]} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white/70 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.duration && (
                          <span className="flex items-center gap-1 text-xs text-white/70 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                            <Clock size={11} />
                            {project.duration}
                          </span>
                        )}
                        <span className="text-xs text-white/50">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      {project.slug === "ajs-case-study" && (
                        <div className="flex-shrink-0 ml-4">
                          <div className="bg-white rounded-xl px-3 py-2 shadow-lg">
                            <svg width="80" height="32" viewBox="0 0 220 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <text x="0" y="70" fontFamily="Georgia, serif" fontWeight="900" fontSize="82" fill="#1a3a8c" fontStyle="italic" letterSpacing="-4">AJS</text>
                              <circle cx="185" cy="38" r="28" fill="#f5d800" stroke="#1a3a8c" strokeWidth="2"/>
                              <line x1="157" y1="38" x2="213" y2="38" stroke="#1a3a8c" strokeWidth="1.2"/>
                              <line x1="185" y1="10" x2="185" y2="66" stroke="#1a3a8c" strokeWidth="1.2"/>
                              <ellipse cx="185" cy="38" rx="14" ry="28" fill="none" stroke="#1a3a8c" strokeWidth="1.2"/>
                              <ellipse cx="185" cy="38" rx="22" ry="28" fill="none" stroke="#1a3a8c" strokeWidth="1.2"/>
                              <path d="M168 22 Q175 18 185 17 Q195 18 202 22 Q205 28 205 38 Q205 50 202 54 Q195 58 185 59 Q175 58 168 54 Q165 50 165 38 Q165 28 168 22Z" fill="#1a3a8c"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      {t.portfolio.resultsLabel}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#35A2F5] flex-shrink-0 mt-1.5" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {caseUrls[project.slug] && (
                      <a
                        href={caseUrls[project.slug]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#03409C] hover:text-[#35A2F5] transition-colors"
                      >
                        {t.portfolio.viewWebsite} <ExternalLink size={13} />
                      </a>
                    )}
                    <Link
                      to="/contactos"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#03409C] hover:gap-3 transition-all"
                    >
                      {t.portfolio.similarProject} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03409C] py-24 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.portfolio.ctaHeading}
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              {t.portfolio.ctaSubtitle}
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-white text-[#03409C] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t.portfolio.ctaButton} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
