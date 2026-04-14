import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function PrivacyPolicy() {
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
            <ArrowLeft size={16} /> Voltar ao início
          </Link>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold text-[#35A2F5] uppercase tracking-widest">
                Legal
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight tracking-tight"
            >
              Política de Privacidade
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 text-sm">
              Última actualização: 14 de Abril de 2026
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
              <p className="text-sm text-gray-700 leading-relaxed">
                Esta Política de Privacidade descreve como a <strong>KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA</strong> (NIF: 5003003582), que opera sob o nome comercial <strong>KwanzaX</strong>, recolhe, utiliza e protege os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Protecção de Dados (RGPD) e a legislação angolana aplicável.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Responsável pelo Tratamento</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm text-gray-700">
                <p><strong>Nome legal:</strong> KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA</p>
                <p><strong>Nome comercial:</strong> KwanzaX</p>
                <p><strong>NIF:</strong> 5003003582</p>
                <p><strong>Sede:</strong> Luanda, Angola</p>
                <p><strong>Email:</strong> serafimcorreia123@gmail.com</p>
                <p><strong>Website:</strong> kwanzax.com</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Dados Recolhidos</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Recolhemos apenas os dados estritamente necessários para prestar os nossos serviços:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                  <span><strong>Dados de identificação:</strong> nome, email, empresa, telefone (quando fornecidos via formulário de contacto).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                  <span><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas (via cookies de análise, se activos).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                  <span><strong>Comunicações:</strong> conteúdo das mensagens enviadas através dos nossos canais de contacto.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Finalidade e Base Legal</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100 rounded-tl-lg">Finalidade</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">Base Legal</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="p-3 border border-gray-100">Responder a pedidos de contacto e orçamentos</td>
                      <td className="p-3 border border-gray-100">Interesse legítimo / Execução de pré-contrato</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-100">Prestação de serviços contratados</td>
                      <td className="p-3 border border-gray-100">Execução de contrato</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-100">Cumprimento de obrigações legais e fiscais</td>
                      <td className="p-3 border border-gray-100">Obrigação legal</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-100">Envio de comunicações comerciais (newsletter)</td>
                      <td className="p-3 border border-gray-100">Consentimento (opt-in explícito)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Conservação dos Dados</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Os seus dados são conservados pelo período mínimo necessário à finalidade para que foram recolhidos. Dados de contacto são mantidos por um máximo de <strong>3 anos</strong> após o último contacto. Dados relacionados com contratos são conservados pelo período legalmente exigido (mínimo 5 anos para efeitos fiscais em Angola).
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Partilha com Terceiros</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Não vendemos nem partilhamos os seus dados pessoais com terceiros para fins comerciais. Os seus dados podem ser partilhados com:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                  <span>Prestadores de serviços tecnológicos que nos auxiliam na operação do website (ex: Supabase para base de dados, alojados na UE/EUA com garantias adequadas).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35A2F5] font-bold mt-0.5">–</span>
                  <span>Autoridades competentes, quando legalmente exigido.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Os Seus Direitos</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Nos termos do RGPD e da legislação angolana aplicável, tem os seguintes direitos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Acesso", desc: "Solicitar uma cópia dos dados que temos sobre si." },
                  { title: "Rectificação", desc: "Corrigir dados incorrectos ou incompletos." },
                  { title: "Apagamento", desc: "Solicitar a eliminação dos seus dados (direito ao esquecimento)." },
                  { title: "Oposição", desc: "Opor-se ao tratamento baseado em interesse legítimo." },
                  { title: "Portabilidade", desc: "Receber os seus dados num formato estruturado e legível." },
                  { title: "Limitação", desc: "Restringir o tratamento dos seus dados em determinadas circunstâncias." },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{title}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                Para exercer estes direitos, contacte-nos através de: <a href="mailto:serafimcorreia123@gmail.com" className="text-[#03409C] font-semibold hover:underline">serafimcorreia123@gmail.com</a>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                O nosso website pode utilizar cookies técnicos essenciais para o seu funcionamento. Não utilizamos cookies de rastreamento ou publicidade sem o seu consentimento explícito. Pode gerir as preferências de cookies nas definições do seu browser.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Segurança</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adoptamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda acidental ou destruição. Toda a comunicação com o nosso website é encriptada via HTTPS/TLS.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Alterações a esta Política</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reservamo-nos o direito de actualizar esta política a qualquer momento. Alterações significativas serão comunicadas de forma proeminente no website. A data da última revisão está indicada no topo desta página.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contacto e Reclamações</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Para qualquer questão relacionada com a protecção dos seus dados, contacte-nos em <a href="mailto:serafimcorreia123@gmail.com" className="text-[#03409C] font-semibold hover:underline">serafimcorreia123@gmail.com</a>. Se considerar que o tratamento dos seus dados viola a legislação aplicável, tem o direito de apresentar reclamação à autoridade de controlo competente.
              </p>
            </motion.div>
          </motion.div>

          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-400">
              KX DESENVOLVE – PRESTAÇÃO DE SERVIÇOS, LDA · NIF 5003003582 · Luanda, Angola
            </div>
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 bg-[#03409C] hover:bg-[#02357f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Fale connosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
