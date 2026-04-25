'use client'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
 
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.logo} display`}>Rachel Lin</div>
      <ul className={styles.links}>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#specialties">About</a></li>
        <li><a href="#contact">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className={styles.cta}>Book a Collab</a>
    </nav>
  )
}
 