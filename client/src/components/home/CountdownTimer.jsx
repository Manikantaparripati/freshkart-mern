import { useState, useEffect } from 'react'

export default function CountdownTimer({ endsAt }) {
  const calculateTime = () => {
    const diff = new Date(endsAt) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / 1000 / 60) % 60),
      secs: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(calculateTime)

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTime()), 1000)
    return () => clearInterval(timer)
  }, [endsAt])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-2">
      {[
        { label: 'Days', value: time.days },
        { label: 'Hrs', value: time.hours },
        { label: 'Min', value: time.mins },
        { label: 'Sec', value: time.secs },
      ].map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[52px]">
            <div className="text-2xl font-extrabold text-white leading-none">{pad(value)}</div>
            <div className="text-[10px] text-white/80 font-semibold uppercase tracking-wider mt-0.5">{label}</div>
          </div>
          {i < 3 && <span className="text-2xl font-bold text-white/60">:</span>}
        </div>
      ))}
    </div>
  )
}
