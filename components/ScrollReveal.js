'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null)
  const [isIntersected, setIsIntersected] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersected(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  const shouldHide = isMounted && !isIntersected

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: shouldHide ? 0 : 1,
        transform: shouldHide ? 'translateY(28px)' : 'translateY(0)',
        transition: isMounted
          ? `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
          : 'none',
      }}
    >
      {children}
    </Tag>
  )
}
