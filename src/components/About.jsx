import { motion } from 'framer-motion'
import StatCounter from './StatCounter'
import { aboutStats, aboutBadges } from '../data/stats'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const professionalBullets = [
  'Process optimisation specialist with experience across private and public sector',
  'Data-driven operations reporting using Power BI and Advanced Excel',
  'Cross-functional stakeholder management and requirements gathering',
  'Power BI & Excel dashboard development and automation',
  'NHS & private sector experience delivering measurable improvements',
]

const personalBullets = [
  'Southampton based, open to hybrid and remote opportunities',
  'Passionate about continuous improvement and operational excellence',
  'Love turning messy data into clear, actionable insights',
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

      {/* Bullets grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Professional */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-teal font-semibold mb-4 text-lg">Professional</h3>
          <ul className="space-y-3">
            {professionalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Personal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-teal font-semibold mb-4 text-lg">Personal</h3>
          <ul className="space-y-3 mb-8">
            {personalBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-muted">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Badge cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutBadges.map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-navy-light border border-navy-lighter rounded-lg p-4 text-center hover:border-teal/40 transition-colors"
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-slate-light text-sm font-medium">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated stats banner */}
      <div className="bg-navy-light border border-navy-lighter rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {aboutStats.map((stat, i) => (
          <StatCounter
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
