'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: "It was so much fun working with Rachel! We love her attention to detail and creative thought process. She definitely brought our vision to life! We couldn't recommend Rachel enough! Thank you for all your hard work! She's the best!",
    brand: 'Lechery',
    niche: 'Fashion',

  },
  {
    quote: 'Rachel was an absolute dream to work with! She delivered a fun, top-notch video that perfectly captures the essence of our company! Her dedication, quick turnaround, and creativity made the whole project effortless. Could not be happier with the final result and would 100% collaborate with her again! 💕',
    brand: 'IHAI',
    niche: 'Tech',
  },
  {
    quote: "Rachel is incredible to work with! She has fantastic communication, delivers professional-quality videos, and shows great attention to detail. She went above and beyond to make sure everything was exactly what we needed. Would absolutely work with her again!!",
    brand: 'Healthee',
    niche: 'Food/Beverage',
  },
  {
    quote: "We just checked out both videos and wanted to say we seriously loved them!! The voiceover walkthrough was such a fun surprise — thank you for taking the time to make that extra one. We really appreciate how you explored the app so thoroughly and brought out some of its unique features :)",
    brand: "MoodStream",
    niche: 'Apps/Entertainment',
  },
  {
    quote: "Working with Rachel was great! Super professional and nice, delivered what we asked and was flexible with our request. Loved it! Thanks!",
    brand: "SSetter",
    niche: 'Tech/AI',
  },
  {
    quote: "Omg – you nailed this! This was a tough concept, I am very impressed!!",
    brand: "Perplexity AI",
    niche: 'Tech/AI',
  }
]
export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [loopNotice, setLoopNotice] = useState(false)

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ]

  const next = () => {
    setDirection(1)

    if (index === testimonials.length - 1) {
      setLoopNotice(true)
      setIndex(0)
      setTimeout(() => setLoopNotice(false), 1200)
    } else {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    setDirection(-1)

    if (index === 0) {
      setLoopNotice(true)
      setIndex(testimonials.length - 1)
      setTimeout(() => setLoopNotice(false), 1200)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className={`${styles.title} display`}>
            What brands <em>say</em> about working with me
          </h2>

          <AnimatePresence>
            {loopNotice && (
              <motion.p
                className={styles.loopNotice}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                Back to the beginning
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.arrows}>
          <button onClick={prev} aria-label="Previous testimonials">
            ←
          </button>
          <button onClick={next} aria-label="Next testimonials">
            →
          </button>
        </div>
      </motion.div>

      <div className={styles.viewport}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className={styles.slider}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {visibleTestimonials.map((t, i) => (
              <div key={`${t.brand}-${i}`} className={styles.item}>
                <div className={`${styles.quoteMark} display`}>"</div>
                <p className={`${styles.quoteText} display`}>{t.quote}</p>

                <div>
                  <div className={styles.author}>{t.author}</div>
                  <div className={styles.brand}>— {t.brand}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}