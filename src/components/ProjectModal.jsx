import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="bg-navy-light border border-navy-lighter rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-navy-lighter">
            <div>
              <span className="text-teal text-xs font-semibold tracking-widest uppercase">{project.type}</span>
              <h2 className="text-xl font-bold text-slate-light mt-1">{project.title}</h2>
              <span className="text-slate-muted text-sm">{project.company}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-slate-muted hover:text-teal transition-colors ml-4 shrink-0"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Screenshot placeholder */}
            <div className="w-full aspect-video bg-navy rounded-xl border border-navy-lighter flex items-center justify-center">
              <div className="text-center text-slate-muted/50">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Screenshot coming soon</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-muted leading-relaxed">{project.description}</p>

            {/* Metrics */}
            <div>
              <h3 className="text-slate-light font-semibold mb-3">Key Metrics</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-navy rounded-lg p-3 text-center border border-navy-lighter">
                    <div className="text-teal font-bold text-lg">{m.value}</div>
                    <div className="text-slate-muted text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-slate-light font-semibold mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="px-3 py-1 bg-teal/10 border border-teal/30 text-teal text-sm rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal hover:underline text-sm">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal hover:underline text-sm">
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
