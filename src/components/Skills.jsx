import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillTabs } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id)
  const current = skillTabs.find((t) => t.id === activeTab)

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">What I work with</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Skills</h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="relative flex gap-1 bg-navy-light rounded-lg p-1 border border-navy-lighter">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2 text-sm font-medium rounded-md transition-colors z-10 ${
                tab.id === activeTab ? 'text-navy' : 'text-slate-muted hover:text-slate-light'
              }`}
            >
              {tab.id === activeTab && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-teal rounded-md"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skill pills */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {current.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-4 py-2 rounded-full border border-teal/30 text-slate-light text-sm font-medium hover:border-teal hover:text-teal hover:bg-teal/5 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
