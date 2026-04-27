'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { VideoItem } from './lib/data'
import styles from './VideoLightbox.module.css'

type Props = {
  video: VideoItem
  onClose: () => void
}

export default function VideoLightbox({ video, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={e => e.stopPropagation()} // prevent backdrop close when clicking modal
      >
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.headerCategory}>{video.category}</p>
            <h3 className={`${styles.headerBrand} display`}>{video.brand}</h3>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Video player — portrait 9:16 */}
        <div className={styles.videoWrap}>
          <video
            ref={videoRef}
            src={`/videos/${video.file}`}
            controls
            autoPlay
            playsInline
            className={styles.video}
          />
        </div>

        {/* Metrics footer — only if present */}
        {video.metrics && (
          <div className={styles.metricsRow}>
            <span className={styles.metricsLabel}>Results</span>
            <div className={styles.metricsList}>
              {video.metrics.reach && (
                <div className={styles.metricItem}>
                  <strong>{video.metrics.reach}</strong>
                  <span>Reach</span>
                </div>
              )}
              {video.metrics.engagement && (
                <div className={styles.metricItem}>
                  <strong>{video.metrics.engagement}</strong>
                  <span>Engagement</span>
                </div>
              )}
              {video.metrics.signups && (
                <div className={styles.metricItem}>
                  <strong>{video.metrics.signups}</strong>
                  <span>Sign-ups</span>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}