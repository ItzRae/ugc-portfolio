'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Contact.module.css'

const packages = [
  { name: 'Starter Pack',     detail: '3 videos' },
  { name: 'Content Bundle',   detail: '6 videos + photos' },
  { name: 'Monthly Partner',  detail: 'Ongoing retainer' },
  { name: 'Custom',           detail: "Let's talk" },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.left}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let's Collaborate
        </motion.p>
        <motion.h2
          className={`${styles.title} display`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to<br /><em>work together?</em>
        </motion.h2>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you need a one-off deliverable or an ongoing content
          partnership — let's talk!!
        </motion.p>
        <motion.a
          href="mailto:ugc.rachellin@gmail.com"
          className={`${styles.email} display`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ugc.rachellin@gmail.com
        </motion.a>
      </div>

      <div className={styles.right}>
        <p className={styles.packagesLabel}>Packages</p>
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            className={styles.packageRow}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
          >
            <span className={`${styles.packageName} display`}>{p.name}</span>
            <span className={styles.packageDetail}>{p.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}