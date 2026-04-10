'use client'
import { useState } from 'react'
import styles from './ProgressiveImage.module.css'

export default function ProgressiveImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`${styles.wrapper} ${loaded ? styles.loaded : ''} ${className}`}>
      <div className={styles.shimmer} />
      <img
        src={src}
        alt={alt}
        className={styles.img}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  )
}
