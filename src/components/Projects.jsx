import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Projects</h2>
        </motion.div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="bg-navy border border-navy-lighter rounded-xl p-6 cursor-pointer hover:border-teal/40 hover:-translate-y-1 transition-all group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4 gap-2">
                <div>
                  <span className="text-teal text-xs font-semibold tracking-widest uppercase">{project.type}</span>
                  <h3 className="text-slate-light font-bold text-lg mt-1 group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 px-2 py-1 bg-teal/10 text-teal text-xs rounded-full border border-teal/20 whitespace-nowrap">
                  {project.company}
                </span>
              </div>

              {/* Description snippet */}
              <p className="text-slate-muted text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-navy-light border border-navy-lighter text-slate-muted text-xs rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <p className="text-teal text-sm font-medium flex items-center gap-1">
                View details
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
