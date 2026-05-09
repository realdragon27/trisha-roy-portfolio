import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  { id: 0, src: '/carousel/carousel-1.png', title: 'Verra Mobility — Open Tickets Dashboard' },
  { id: 1, src: '/carousel/carousel-2.png', title: 'Verra Mobility — Calibration Overview' },
  { id: 2, src: '/carousel/carousel-3.png', title: 'NHS Cancer Care — Length of Stay Analysis' },
  { id: 3, src: '/carousel/carousel-4.png', title: 'KPI Scorecard & Process Optimisation' },
  { id: 4, src: '/carousel/carousel-5.png', title: 'Video Game Sales — Trend & Forecast' },
  { id: 5, src: '/carousel/carousel-6.png', title: 'Video Game Sales — Executive Overview' },
  { id: 6, src: '/carousel/carousel-7.png', title: 'SLA & Workflow Automation Pipeline' },
]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
}

export default function CarouselPlaceholder() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [zoomed, setZoomed] = useState(false)

  const goTo = (index, dir) => { setDirection(dir); setCurrent(index) }
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1)
  const next = () => goTo((current + 1) % SLIDES.length, 1)

  const slide = SLIDES[current]

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
            className="absolute inset-0 cursor-zoom-in"
            onClick={() => setZoomed(true)}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            {/* Caption row */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-3 pointer-events-none">
              <span className="text-white text-sm font-semibold leading-tight drop-shadow max-w-[60%]">
                {slide.title}
              </span>
              <span className="text-white/70 text-[10px] italic leading-tight text-right max-w-[38%]">
                *Illustrative data only — not actual company figures
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-teal/30 transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-teal/30 transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className={`h-2 rounded-full transition-all ${i === current ? 'bg-teal w-4' : 'bg-slate-muted/40 w-2'}`}
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-zoom-out p-4"
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={slide.src}
              alt={slide.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
