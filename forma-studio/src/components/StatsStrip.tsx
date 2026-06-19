import { useInView, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 48, label: 'Projects' },
  { value: 12, label: 'Countries' },
  { value: 2023, label: 'RIBA Award', isYear: true },
  { value: 2014, label: 'Est.', isYear: true },
]

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const springValue = useSpring(0, { damping: 20, stiffness: 100 })

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  return (
    <span ref={ref}>
      {String(Math.floor(springValue.get()))}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-bold text-white text-4xl md:text-5xl mb-2">
                <CountUp value={stat.value} />
              </div>
              <p className="label-text text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
