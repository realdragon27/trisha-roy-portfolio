import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, prefix = '', suffix = '', label, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const startTime = performance.now()
    let raf

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-teal">
        {prefix}{count}<span>{suffix}</span>
      </div>
      <div className="text-sm text-slate-muted mt-1">{label}</div>
    </div>
  )
}
