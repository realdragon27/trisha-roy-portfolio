import { motion } from 'framer-motion'
import { experiences } from '../data/experience'

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">My journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-navy-lighter md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex gap-6 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-teal border-2 border-navy-light -translate-x-1.5 md:-translate-x-1.5 z-10" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-navy border border-navy-lighter rounded-xl p-6 hover:border-teal/30 transition-colors cursor-default"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                      <h3 className="text-slate-light font-bold text-lg">{exp.company}</h3>
                      <span className="text-teal text-sm font-medium whitespace-nowrap shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-teal/80 text-sm font-medium mb-4">{exp.role}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-slate-muted text-sm">
                          <span className="text-teal shrink-0 mt-0.5">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Impact box */}
                    <div className="border-l-2 border-teal bg-teal/5 rounded-r-lg pl-4 pr-3 py-3">
                      <p className="text-teal text-xs font-semibold uppercase tracking-wide mb-1">Key Impact</p>
                      <p className="text-slate-muted text-sm leading-relaxed">{exp.keyImpact}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
