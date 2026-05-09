import { motion } from 'framer-motion'
import StatCounter from './StatCounter'
import { impactStats } from '../data/stats'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ImpactNumbers() {
  return (
    <section id="impact" className="py-24 px-6 bg-navy-light">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Measurable outcomes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Impact by Numbers</h2>
          <p className="text-slate-muted mt-3 text-base">Data-driven results that speak for themselves</p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-navy border border-navy-lighter rounded-2xl p-6 text-center hover:border-teal/30 transition-colors"
            >
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
