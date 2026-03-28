import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = duration / value
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-teal">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-slate-muted mt-1">{label}</div>
    </div>
  )
}
