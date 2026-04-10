'use client'
import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const Tag = as

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
