import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,30 Q720,80 1440,30 L1440,0 Z" fill="var(--white)" />
        </svg>
      </div>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="DD FREIGHT LLC" />
          <p>GLOBAL LOGISTICS | EVENT SPECIALISTS</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>info@ddfreight.com</p>
          <p>+971 4 XXX XXXX</p>
          <p>Dubai, UAE</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} DD FREIGHT LLC. All rights reserved.</p>
        <p className={styles.credit}>
          Shipped & Delivered by{' '}
          <a href="https://www.baseofstars.com/" target="_blank" rel="noopener noreferrer">
            Base of Stars
          </a>
        </p>
      </div>
    </footer>
  )
}
