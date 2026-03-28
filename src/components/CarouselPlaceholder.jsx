import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = Array.from({ length: 5 }, (_, i) => ({ id: i, label: 'Dashboard coming soon' }))

export default function CarouselPlaceholder() {
  const [current, setCurrent] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [direction, setDirection] = useState(1)

  const goTo = (index, dir) => {
    setDirection(dir)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1)
  const next = () => goTo((current + 1) % SLIDES.length, 1)

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full rounded-xl overflow-hidden bg-navy-light border border-navy-lighter aspect-video select-none">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-zoom-in"
            onClick={() => setZoomed(true)}
          >
            {/* Placeholder graphic */}
            <div className="w-16 h-16 rounded-full border-2 border-teal/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-teal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-slate-muted text-sm font-medium">Dashboard coming soon</p>
            <p className="text-slate-muted/50 text-xs mt-1">Click to zoom</p>
            <p className="text-teal/40 text-xs mt-3">{current + 1} / {SLIDES.length}</p>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 flex items-center justify-center hover:bg-teal/20 transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/70 flex items-center justify-center hover:bg-teal/20 transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            data-testid="carousel-dot"
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'bg-teal w-4' : 'bg-slate-muted/40 w-2'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Zoom lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out"
            onClick={() => setZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-3xl mx-4 aspect-video bg-navy-light rounded-xl flex flex-col items-center justify-center border border-teal/20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-slate-muted text-lg font-medium">Dashboard coming soon</p>
              <p className="text-slate-muted/50 text-sm mt-2">Slide {current + 1} of {SLIDES.length}</p>
              <button
                onClick={() => setZoomed(false)}
                className="mt-6 px-4 py-2 border border-teal text-teal rounded hover:bg-teal hover:text-navy transition-all text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
