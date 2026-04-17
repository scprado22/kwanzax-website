import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, Linkedin, Zap, TrendingUp, Eye, Target, CircleCheck as CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const valueIcons = [Zap, TrendingUp, Eye, Target];

const team = [
  {
    name: "Serafim Correia Do Prado",
    role: { pt: "CEO & Founder", en: "CEO & Founder" },
    bio: {
      pt: "Visão estratégica e liderança de produto. Da ideia à execução, garantindo que cada projeto entrega valor real.",
      en: "Strategic vision and product leadership. From idea to execution, ensuring every project delivers real value.",
    },
    linkedin: "https://www.linkedin.com/in/serafim-correia-do-prado-831658338/",
    photo: "/WhatsApp_Image_2026-04-09_at_19.55.19.jpeg",
    initials: "SC",
    color: "bg-[#03409C]",
  },
  {
    name: "José Salvador",
    role: { pt: "Operations & Finance Lead", en: "Operations & Finance Lead" },
    bio: {
      pt: "Rigor financeiro e excelência operacional. Assegura que cada decisão tem fundamento sólido e cada projeto é sustentável.",
      en: "Financial rigour and operational excellence. Ensures every decision has a solid foundation and every project is sustainable.",
    },
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-salvador-a76197224/",
    photo: "/WhatsApp_Image_2026-04-09_at_17.28.39.jpeg",
    initials: "JS",
    color: "bg-[#35A2F5]",
  },
  {
    name: "Weza Paulo",
    role: { pt: "Strategy Analyst", en: "Strategy Analyst" },
    bio: {
      pt: "Análise estratégica e inteligência de mercado. Transforma dados em insights que nos mantêm sempre um passo à frente.",
      en: "Strategic analysis and market intelligence. Transforms data into insights that keep us always one step ahead.",
    },
    linkedin: "https://www.linkedin.com/in/weza-paulo-2ab3b0233/",
    photo: "/WhatsApp_Image_2026-04-09_at_18.55.14.jpeg",
    initials: "WP",
    color: "bg-cyan-600",
  },
  {
    name: "Rita da Silva",
    role: { pt: "Business Analyst", en: "Business Analyst" },
    bio: {
      pt: "Ponte entre negócio e tecnologia. Garante que cada solução resolve problemas reais e gera resultados mensuráveis.",
      en: "Bridge between business and technology. Ensures every solution solves real problems and generates measurable results.",
    },
    linkedin: "https://www.linkedin.com/in/rita-da-silva-055828258/",
    photo: "/WhatsApp_Image_2026-04-09_at_17.10.19.jpeg",
    initials: "RS",
    color: "bg-sky-600",
  },
];

export default function About() {
  const { t, language } = useLanguage();
  const a = t.about;

  const storyParagraphs = a.storyText.split("\n\n").filter(Boolean);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-32 h-[500px] w-[500px] rounded-full bg-[#03409C]/5 blur-3xl" />
          <div className="absolute bottom-0 -left-24 h-[300px] w-[300px] rounded-full bg-[#35A2F5]/5 blur-3xl" />
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
                {a.heroTitle}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              {a.heroSubtitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mt-6 leading-relaxed max-w-2xl"
            >
              {a.heroText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* A HISTÓRIA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                {a.storyTitle}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.div variants={fadeUp} className="space-y-5">
                {storyParagraphs.slice(0, 3).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-5">
                {storyParagraphs.slice(3).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src="/WhatsApp_Image_2026-04-09_at_19.55.19.jpeg"
                    alt="Serafim Correia"
                    className="h-10 w-10 rounded-full object-cover object-top flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Serafim Correia</p>
                    <p className="text-xs text-gray-500">Founder, KwanzaX</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EQUIPA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                {a.teamTitle}
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl">{a.teamIntro}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  className="group rounded-2xl border border-gray-100 bg-white hover:border-[#35A2F5]/40 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${member.color}`} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#35A2F5] mt-1 mb-3">
                      {member.role[language as "pt" | "en"]}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {member.bio[language as "pt" | "en"]}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#03409C] hover:text-[#35A2F5] transition-colors"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                03
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                {a.valuesTitle}
              </h2>
            </motion.div>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {a.values.map((val, idx) => {
                const Icon = valueIcons[idx];
                return (
                  <motion.div
                    key={val.title}
                    variants={fadeUp}
                    className="p-7 rounded-2xl bg-white border border-gray-100 hover:border-[#35A2F5]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#03409C]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{val.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{val.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PORQUÊ CONFIAR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                04
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                {a.trustTitle}
              </h2>
              <p className="text-gray-500 mt-3">{a.trustIntro}</p>
            </motion.div>

            <motion.div variants={stagger} className="mt-10 space-y-4">
              {a.trustPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#35A2F5]/40 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-[#35A2F5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{point.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#03409C] py-24 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {a.ctaTitle}
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              {a.ctaSubtitle}
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-white text-[#03409C] hover:bg-gray-50 font-bold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {a.ctaButton} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
