'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Hero.module.css'
 
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
}
 
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <motion.p
          className={styles.eyebrow}
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          UGC Creator — Lifestyle, Beauty, and Tech
        </motion.p>
 
        <motion.h1
          className={`${styles.title} display`}
          initial="hidden"
          animate="visible"
          custom={0.22}
          variants={fadeUp}
        >
          Content<br />that <em>converts</em>
        </motion.h1>
 
        <motion.p
          className={styles.sub}
          initial="hidden"
          animate="visible"
          custom={0.34}
          variants={fadeUp}
        >
          I create authentic, scroll-stopping content that feels native to the
          feed - and gets brands real results :)
        </motion.p>
 
        <motion.div
          className={styles.actions}
          initial="hidden"
          animate="visible"
          custom={0.46}
          variants={fadeUp}
        >
          <a href="#portfolio" className={styles.btnPrimary}>View Work</a>
          <a href="#contact" className={styles.btnGhost}>See Packages →</a>
        </motion.div>
      </div>
 
      <div className={styles.visual}>
        <div className={styles.visualBg} />
 
        {/* 
          Replace the placeholder below with your actual photo:
          <Image src="/images/rachellin.jpg" alt="Rachel Lin" fill style={{ objectFit: 'cover' }} />
        */}
        <motion.div
          className={styles.photoPlaceholder}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <Image
            src="/images/rachellin.jpg"
            alt="Rachel Lin"
            fill
            style={{ objectFit: "cover" }}
        />
        </motion.div>
 
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className={`${styles.badgeNum} display`}>45+</div>
          <div className={styles.badgeLabel}>Brand Collabs</div>
        </motion.div>
      </div>
    </section>
  )
}