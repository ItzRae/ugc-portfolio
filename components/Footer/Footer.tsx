import styles from './Footer.module.css'
 
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.logo} display`}>Rachel Lin — UGC</div>
      <div className={styles.social}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="/media-kit.pdf" target="_blank">Media Kit</a>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Rachel Lin</div>
    </footer>
  )
}
 