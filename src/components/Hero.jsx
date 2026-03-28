import { motion } from 'framer-motion'
import CarouselPlaceholder from './CarouselPlaceholder'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          {/* Location badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal/30 text-teal text-sm mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Southampton, UK
          </motion.div>

          {/* Title */}
          <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold text-slate-light leading-tight mb-4">
            Operations &{' '}
            <span className="text-teal">Business Analyst</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p {...fadeUp(0.3)} className="text-slate-muted text-lg mb-8 leading-relaxed">
            Transforming operational data into strategic decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-teal text-navy font-semibold rounded hover:bg-teal-dark transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-teal text-teal font-semibold rounded hover:bg-teal hover:text-navy transition-all"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social icons + experience badge */}
          <motion.div {...fadeUp(0.5)} className="flex items-center flex-wrap gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-muted hover:text-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:trishachitradip@gmail.com"
              aria-label="Email"
              className="text-slate-muted hover:text-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Experience badge */}
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal/20 animate-ping opacity-60" />
              <span className="relative px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-semibold whitespace-nowrap">
                5+ Years Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <CarouselPlaceholder />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal/50 hover:text-teal transition-colors hidden md:block"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  )
}
