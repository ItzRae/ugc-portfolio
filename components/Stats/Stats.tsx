'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Stats.module.css'

const stats = [
  { num: '4M+', label: 'Views Combined' },
  { num: '8.4%',  label: 'Avg. Engagement' },
  { num: '45+',   label: 'Brands Worked With' },
  { num: '4 days',   label: 'Avg. Turnaround' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className={styles.bar} ref={ref}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className={styles.item}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={`${styles.num} display`}>{s.num}</div>
          <div className={styles.label}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}