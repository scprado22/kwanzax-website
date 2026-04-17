import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const content = {
  pt: {
    back: "Voltar ao início",
    eyebrow: "Legal",
    title: "Política de Privacidade",
    updated: "Última actualização: 14 de Abril de 2026",
    intro: <>Esta Política de Privacidade descreve como a <strong>KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA</strong> (NIF: 5003003582), que opera sob o nome comercial <strong>KwanzaX</strong>, recolhe, utiliza e protege os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Protecção de Dados (RGPD) e a legislação angolana aplicável.</>,
    s1title: "1. Responsável pelo Tratamento",
    s1: [
      { label: "Nome legal", val: "KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA" },
      { label: "Nome comercial", val: "KwanzaX" },
      { label: "NIF", val: "5003003582" },
      { label: "Sede", val: "Luanda, Angola" },
      { label: "Email", val: "serafimcorreia123@gmail.com" },
      { label: "Website", val: "kwanzax.com" },
    ],
    s2title: "2. Dados Recolhidos",
    s2intro: "Recolhemos apenas os dados estritamente necessários para prestar os nossos serviços:",
    s2items: [
      { bold: "Dados de identificação:", rest: " nome, email, empresa, telefone (quando fornecidos via formulário de contacto)." },
      { bold: "Dados de navegação:", rest: " endereço IP, tipo de browser, páginas visitadas (via cookies de análise, se activos)." },
      { bold: "Comunicações:", rest: " conteúdo das mensagens enviadas através dos nossos canais de contacto." },
    ],
    s3title: "3. Finalidade e Base Legal",
    s3headers: ["Finalidade", "Base Legal"],
    s3rows: [
      ["Responder a pedidos de contacto e orçamentos", "Interesse legítimo / Execução de pré-contrato"],
      ["Prestação de serviços contratados", "Execução de contrato"],
      ["Cumprimento de obrigações legais e fiscais", "Obrigação legal"],
      ["Envio de comunicações comerciais (newsletter)", "Consentimento (opt-in explícito)"],
    ],
    s4title: "4. Conservação dos Dados",
    s4: <>Os seus dados são conservados pelo período mínimo necessário à finalidade para que foram recolhidos. Dados de contacto são mantidos por um máximo de <strong>3 anos</strong> após o último contacto. Dados relacionados com contratos são conservados pelo período legalmente exigido (mínimo 5 anos para efeitos fiscais em Angola).</>,
    s5title: "5. Partilha com Terceiros",
    s5intro: "Não vendemos nem partilhamos os seus dados pessoais com terceiros para fins comerciais. Os seus dados podem ser partilhados com:",
    s5items: [
      "Prestadores de serviços tecnológicos que nos auxiliam na operação do website (ex: Supabase para base de dados, alojados na UE/EUA com garantias adequadas).",
      "Autoridades competentes, quando legalmente exigido.",
    ],
    s6title: "6. Os Seus Direitos",
    s6intro: "Nos termos do RGPD e da legislação angolana aplicável, tem os seguintes direitos:",
    s6rights: [
      { title: "Acesso", desc: "Solicitar uma cópia dos dados que temos sobre si." },
      { title: "Rectificação", desc: "Corrigir dados incorrectos ou incompletos." },
      { title: "Apagamento", desc: "Solicitar a eliminação dos seus dados (direito ao esquecimento)." },
      { title: "Oposição", desc: "Opor-se ao tratamento baseado em interesse legítimo." },
      { title: "Portabilidade", desc: "Receber os seus dados num formato estruturado e legível." },
      { title: "Limitação", desc: "Restringir o tratamento dos seus dados em determinadas circunstâncias." },
    ],
    s6outro: "Para exercer estes direitos, contacte-nos através de:",
    s7title: "7. Cookies",
    s7: "O nosso website pode utilizar cookies técnicos essenciais para o seu funcionamento. Não utilizamos cookies de rastreamento ou publicidade sem o seu consentimento explícito. Pode gerir as preferências de cookies nas definições do seu browser.",
    s8title: "8. Segurança",
    s8: "Adoptamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda acidental ou destruição. Toda a comunicação com o nosso website é encriptada via HTTPS/TLS.",
    s9title: "9. Alterações a esta Política",
    s9: "Reservamo-nos o direito de actualizar esta política a qualquer momento. Alterações significativas serão comunicadas de forma proeminente no website. A data da última revisão está indicada no topo desta página.",
    s10title: "10. Contacto e Reclamações",
    s10: <>Para qualquer questão relacionada com a protecção dos seus dados, contacte-nos em <a href="mailto:serafimcorreia123@gmail.com" className="text-[#03409C] font-semibold hover:underline">serafimcorreia123@gmail.com</a>. Se considerar que o tratamento dos seus dados viola a legislação aplicável, tem o direito de apresentar reclamação à autoridade de controlo competente.</>,
    footerText: "KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA · NIF 5003003582 · Luanda, Angola",
    footerCta: "Fale connosco",
  },
  en: {
    back: "Back to home",
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 14 April 2026",
    intro: <>This Privacy Policy describes how <strong>KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA</strong> (Tax ID: 5003003582), operating under the trade name <strong>KwanzaX</strong>, collects, uses and protects your personal data, in compliance with the General Data Protection Regulation (GDPR) and applicable Angolan legislation.</>,
    s1title: "1. Data Controller",
    s1: [
      { label: "Legal name", val: "KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA" },
      { label: "Trade name", val: "KwanzaX" },
      { label: "Tax ID", val: "5003003582" },
      { label: "Registered office", val: "Luanda, Angola" },
      { label: "Email", val: "serafimcorreia123@gmail.com" },
      { label: "Website", val: "kwanzax.com" },
    ],
    s2title: "2. Data Collected",
    s2intro: "We collect only the data strictly necessary to provide our services:",
    s2items: [
      { bold: "Identification data:", rest: " name, email, company, phone number (when provided via contact form)." },
      { bold: "Browsing data:", rest: " IP address, browser type, pages visited (via analytics cookies, if active)." },
      { bold: "Communications:", rest: " content of messages sent through our contact channels." },
    ],
    s3title: "3. Purpose and Legal Basis",
    s3headers: ["Purpose", "Legal Basis"],
    s3rows: [
      ["Responding to contact and quote requests", "Legitimate interest / Pre-contractual execution"],
      ["Provision of contracted services", "Contract execution"],
      ["Compliance with legal and fiscal obligations", "Legal obligation"],
      ["Sending commercial communications (newsletter)", "Consent (explicit opt-in)"],
    ],
    s4title: "4. Data Retention",
    s4: <>Your data is retained for the minimum period necessary for the purpose for which it was collected. Contact data is kept for a maximum of <strong>3 years</strong> after the last contact. Contract-related data is retained for the legally required period (minimum 5 years for tax purposes in Angola).</>,
    s5title: "5. Sharing with Third Parties",
    s5intro: "We do not sell or share your personal data with third parties for commercial purposes. Your data may be shared with:",
    s5items: [
      "Technology service providers that assist us in operating the website (e.g. Supabase for database, hosted in the EU/USA with adequate safeguards).",
      "Competent authorities, when legally required.",
    ],
    s6title: "6. Your Rights",
    s6intro: "Under the GDPR and applicable Angolan legislation, you have the following rights:",
    s6rights: [
      { title: "Access", desc: "Request a copy of the data we hold about you." },
      { title: "Rectification", desc: "Correct inaccurate or incomplete data." },
      { title: "Erasure", desc: "Request the deletion of your data (right to be forgotten)." },
      { title: "Objection", desc: "Object to processing based on legitimate interest." },
      { title: "Portability", desc: "Receive your data in a structured, machine-readable format." },
      { title: "Restriction", desc: "Restrict the processing of your data under certain circumstances." },
    ],
    s6outro: "To exercise these rights, contact us at:",
    s7title: "7. Cookies",
    s7: "Our website may use essential technical cookies necessary for its operation. We do not use tracking or advertising cookies without your explicit consent. You can manage cookie preferences in your browser settings.",
    s8title: "8. Security",
    s8: "We implement appropriate technical and organisational measures to protect your data against unauthorised access, accidental loss or destruction. All communication with our website is encrypted via HTTPS/TLS.",
    s9title: "9. Changes to this Policy",
    s9: "We reserve the right to update this policy at any time. Significant changes will be communicated prominently on the website. The date of the last revision is indicated at the top of this page.",
    s10title: "10. Contact and Complaints",
    s10: <>For any questions regarding the protection of your data, contact us at <a href="mailto:serafimcorreia123@gmail.com" className="text-[#03409C] font-semibold hover:underline">serafimcorreia123@gmail.com</a>. If you believe that the processing of your data violates applicable legislation, you have the right to lodge a complaint with the competent supervisory authority.</>,
    footerText: "KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA · Tax ID 5003003582 · Luanda, Angola",
    footerCta: "Contact us",
  },
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const c = content[language as keyof typeof content] ?? content.pt;

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-[400px] w-[400px] rounded-full bg-[#03409C]/4 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#03409C] transition-colors mb-8"
          >
            <ArrowLeft size={16} /> {c.back}
          </Link>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                {c.eyebrow}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              {c.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 text-sm">
              {c.updated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="prose prose-gray max-w-none space-y-10"
          >
            <motion.div variants={fadeUp} className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">{c.intro}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s1title}</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm text-gray-700">
                {c.s1.map(({ label, val }) => (
                  <p key={label}><strong>{label}:</strong> {val}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s2title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.s2intro}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {c.s2items.map(({ bold, rest }) => (
                  <li key={bold} className="flex items-start gap-2">
                    <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                    <span><strong>{bold}</strong>{rest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s3title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">{c.s3headers[0]}</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">{c.s3headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {c.s3rows.map(([purpose, basis], i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                        <td className="p-3 border border-gray-100">{purpose}</td>
                        <td className="p-3 border border-gray-100">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s4title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{c.s4}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s5title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.s5intro}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {c.s5items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s6title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.s6intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.s6rights.map(({ title, desc }) => (
                  <div key={title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{title}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {c.s6outro}{" "}
                <a href="mailto:serafimcorreia123@gmail.com" className="text-[#03409C] font-semibold hover:underline">
                  serafimcorreia123@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s7title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{c.s7}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s8title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{c.s8}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s9title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{c.s9}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{c.s10title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{c.s10}</p>
            </motion.div>
          </motion.div>

          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-400">{c.footerText}</div>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              {c.footerCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
