'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './ProgressiveImage.module.css'

export default function ProgressiveImage({ src, alt, className = '', priority = false }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`${styles.wrapper} ${loaded ? styles.loaded : ''} ${className}`}>
      <div className={styles.shimmer} />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.img}
        onLoad={() => setLoaded(true)}
        priority={priority}
      />
    </div>
  )
}
