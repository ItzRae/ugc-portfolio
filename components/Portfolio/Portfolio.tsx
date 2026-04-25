'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Portfolio.module.css'

// Replace these with your real video thumbnails/images in /public/images/
const items = [
  { tag: 'Tech', title: 'Julius AI Campaign', bg: 'linear-gradient(135deg, #C8A898 0%, #A8876A 100%)', span: true },
  { tag: 'Wellness',  title: 'Morning Ritual',       bg: 'linear-gradient(135deg, #8A9E8B 0%, #6B7E6C 100%)' },
  { tag: 'Fashion',   title: 'OOTD Series',           bg: 'linear-gradient(135deg, #B5B0A8 0%, #8A857E 100%)' },
  { tag: 'Food & Drink', title: 'Matcha Moments',     bg: 'linear-gradient(135deg, #C4A99A 0%, #9A7B68 100%)' },
  { tag: 'Home',      title: 'Lifestyle Unboxing',    bg: 'linear-gradient(135deg, #A8B8C0 0%, #7A9098 100%)' },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" ref={ref}>
      <div className={styles.header}>
        <motion.h2
          className={`${styles.title} display`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected <em>Work</em>
        </motion.h2>
        <a href="#" className={styles.link}>Full Portfolio →</a>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className={`${styles.item} ${item.span ? styles.span : ''}`}
            style={{ background: item.bg }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.08 }}
          >
            <div className={styles.overlay}>
              <span className={styles.tag}>{item.tag}</span>
              <span className={`${styles.name} display`}>{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}