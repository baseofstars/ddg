'use client'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.animation}>
        <div className={styles.container}>
          <div className={styles.lid} />
          <div className={styles.body} />
          <div className={styles.shadow} />
        </div>
        <div className={styles.particles}>
          <span /><span /><span /><span /><span />
        </div>
      </div>

      <h1 className={styles.title}>404 — Wrong Turn</h1>
      <p className={styles.subtitle}>This page took a detour. Our cargo always arrives on time — this one just got redirected.</p>

      <div className={styles.btns}>
        <Link href="/" className={styles.btnPrimary}>Return Home</Link>
        <Link href="/contact" className={styles.btnOutline}>Get a Quote</Link>
      </div>
    </div>
  )
}
