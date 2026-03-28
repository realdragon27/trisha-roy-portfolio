import { motion } from 'framer-motion'
import { education, certifications } from '../data/education'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Academic background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Education</h2>
      </motion.div>

      {/* Degree cards */}
      <div className="space-y-4 mb-12">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light border border-navy-lighter rounded-xl p-6 hover:border-teal/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-slate-light font-bold text-lg">{item.qualification}</h3>
                <p className="text-teal/80 text-sm font-medium mt-1">{item.institution}</p>
                <p className="text-slate-muted text-sm mt-3">{item.detail}</p>
              </div>
              <span className="shrink-0 text-teal text-sm font-medium">{item.period}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-slate-light mb-6"
      >
        Certifications
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light border border-navy-lighter rounded-xl p-4 flex items-center gap-4 hover:border-teal/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-light text-sm font-medium">{cert.name}</p>
              <p className="text-slate-muted text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
