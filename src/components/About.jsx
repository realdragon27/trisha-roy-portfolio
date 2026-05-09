import { motion } from 'framer-motion'
import { aboutBadges } from '../data/stats'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const professionalBullets = [
  '5 years in Business Analysis across IT, operations & healthcare',
  'Cross-sector BA delivering Power BI, SQL & process solutions',
  'Requirements specialist — BRDs, FRDs, stakeholder workshops',
  '4x Annual Top Performer at HPE',
  "Dean's List — MSc Business Analytics, University of Southampton",
]

const personalBullets = [
  'Based in United Kingdom, open to hybrid and remote roles',
  'Passionate about continuous improvement and turning complexity into clarity',
  'Traveller — always seeking new cultures and perspectives',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">About Me</h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Professional card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-navy-light border border-navy-lighter rounded-2xl p-8 hover:border-teal/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-teal font-semibold text-lg">Professional</h3>
          </div>
          <ul className="space-y-3">
            {professionalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Personal card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-navy-light border border-navy-lighter rounded-2xl p-8 hover:border-teal/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-teal font-semibold text-lg">Personal</h3>
          </div>
          <ul className="space-y-3">
            {personalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Achievement badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {aboutBadges.map((badge, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="bg-navy-light border border-teal/20 rounded-xl p-4 text-center hover:border-teal/50 hover:bg-teal/5 transition-all"
          >
            <div className="text-teal font-bold text-base leading-snug">{badge.title}</div>
            <div className="text-slate-muted text-xs mt-1">{badge.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
