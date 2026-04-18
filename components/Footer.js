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
        <div className={styles.brandCol}>
          <Link href="/">
            <img src="/logo.png" alt="DD FREIGHT LLC" className={styles.logo} />
          </Link>
          <p className={styles.tagline}>GLOBAL LOGISTICS | EVENT SPECIALISTS</p>
          <p className={styles.desc}>
            Trusted Shipping and Logistics Services in UAE. We provide end-to-end precision transport across the GCC and beyond.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">LN</a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">IG</a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">FB</a>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/contact" className={styles.quoteLink}>Get a Quote</Link>
        </div>

        <div className={styles.linkCol}>
          <h4>Services</h4>
          <Link href="/services">Air Freight</Link>
          <Link href="/services">Sea Freight</Link>
          <Link href="/services">Land Transport</Link>
          <Link href="/services">Customs Brokerage</Link>
          <Link href="/services">Warehousing</Link>
          <Link href="/services">Event Logistics</Link>
        </div>

        <div className={styles.contactCol}>
          <h4>Contact Us</h4>
          <div className={styles.contactItem}>
            <strong>Address</strong>
            <p>Port Saeed, Deira, Dubai, UAE</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Phone</strong>
            <p>+971 55 223 3124</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Email</strong>
            <p>info@ddfreight.com</p>
            <p>sales@ddfreight.com</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>&copy; {new Date().getFullYear()} DD FREIGHT SHIPPING LLC. All rights reserved.</p>
          <p className={styles.credit}>
            Shipped & Delivered by{' '}
            <a href="https://www.baseofstars.com/" target="_blank" rel="noopener noreferrer">
              Base of Stars
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
