'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { videos, portfolioTabs } from './lib/data'
import type { VideoItem, TabKey } from './lib/data'
import VideoLightbox from './VideoLightbox'
import styles from './Portfolio.module.css'
import Image from 'next/image'


export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState<TabKey>('all')
  const [selected, setSelected] = useState<VideoItem | null>(null)

  const filtered = activeTab === 'all'
    ? videos
    : videos.filter(v => v.tab === activeTab)

  return (
    <>
      <section id="portfolio" ref={ref} className={styles.section}>
        {/* Header */}
        <div className={styles.header}>
          <motion.h2
            className={`${styles.title} display`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Selected <em>Work</em>
          </motion.h2>

          {/* Tabs */}
          <motion.div
            className={styles.tabs}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {portfolioTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={styles.card}
                onClick={() => setSelected(video)}
              >
                {/* Thumbnail */}
                <div className={styles.thumb}>
                  {/* Replace with your actual thumbnail once files are in /public/images/thumbnails/ */}
                  <Image
                    src={`/images/thumbnails/${video.thumbnail}`}
                    alt={video.brand}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />

                  {/* Play button */}
                  <div className={styles.playBtn}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 3.5L14.5 9 5 14.5V3.5Z" fill="white" />
                    </svg>
                  </div>

                  {/* Content type badge */}
                  <span className={styles.typeBadge}>{video.contentType}</span>
                </div>

                {/* Card info */}
                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <span className={styles.category}>{video.category}</span>
                    <span className={styles.brand}>{video.brand}</span>
                  </div>

                  {/* Metrics — only shown if present */}
                  {video.metrics && (
                    <div className={styles.metrics}>
                      {video.metrics.reach && (
                        <span className={styles.metric}>
                          <strong>{video.metrics.reach}</strong> reach
                        </span>
                      )}
                      {video.metrics.engagement && (
                        <span className={styles.metric}>
                          <strong>{video.metrics.engagement}</strong> eng.
                        </span>
                      )}
                      {video.metrics.signups && (
                        <span className={styles.metric}>
                          <strong>{video.metrics.signups}</strong> signups
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <VideoLightbox video={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}