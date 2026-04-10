'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import CountUp from '@/components/CountUp'
import ScrollReveal from '@/components/ScrollReveal'
import ProgressiveImage from '@/components/ProgressiveImage'

const stats = [
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 50000, suffix: 'T', label: 'Cargo Handled Monthly' },
  { number: 4, suffix: '', label: 'Countries Covered' },
]

const services = [
  {
    title: 'Event & Exhibition Logistics',
    desc: 'End-to-end precision transport for concerts, trade fairs, fine art, and sporting events across the GCC.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    title: 'Air & Sea Freight',
    desc: 'Seamless supply chain management via major shipping lines and airlines.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  },
  {
    title: 'Land Transport & Warehousing',
    desc: 'Door-to-door delivery across the GCC with professional storage.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  },
]

const eventTypes = [
  {
    title: 'Concerts & Live Shows',
    desc: 'Stage equipment, lighting rigs, sound systems — delivered on time for load-in, every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Trade Fairs & Exhibitions',
    desc: 'Booth materials, displays, and products from origin to exhibition floor — customs cleared and ready.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Fine Art & Museum Exhibits',
    desc: 'Climate-controlled, white-glove transport for irreplaceable artwork and cultural artifacts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Sporting Events',
    desc: 'Broadcast equipment, infrastructure, and team logistics for regional and international events.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
]

const process = [
  { step: '01', title: 'Inquiry & Planning', desc: 'Share your event details — we map every milestone, deadline, and compliance requirement.' },
  { step: '02', title: 'Coordination & Booking', desc: 'We secure cargo space, handle documentation, and coordinate with venues and organizers.' },
  { step: '03', title: 'Transport & Execution', desc: 'Your cargo moves via air, sea, or land with real-time tracking and 24/7 support.' },
  { step: '04', title: 'On-Site & Return', desc: 'We deliver to booth or stage, assist with setup, and manage return logistics when the event closes.' },
]

export default function Home() {
  const heroImgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrain} />
        <div ref={heroImgRef} className={styles.heroImgWrap}>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Event logistics"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroOverlay}>
          <p className={styles.heroSub}>EVENT & EXHIBITION LOGISTICS</p>
          <h1 className={styles.heroTitle}>Precision in Motion</h1>
          <p className={styles.heroSub2}>From Stage to Booth — We Deliver</p>
          <div className={styles.heroBtns}>
            <a href="/contact" className={styles.btnPrimary}>Get a Quote</a>
            <a href="/services" className={styles.btnOutline}>Our Services</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>
                    <CountUp end={s.number} suffix={s.suffix} duration={2000} />
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.blob1} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <ScrollReveal>
              <p className={styles.sectionTag}>OUR EXPERTISE</p>
              <h2 className={styles.sectionTitle}>Event Logistics is Our Core</h2>
            </ScrollReveal>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImgWrap}>
                    <ProgressiveImage src={s.image} alt={s.title} className={styles.serviceImg} />
                    <div className={styles.serviceImgOverlay} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="/services">
                    Learn More <span className={styles.arrow}>&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className={styles.eventTypes}>
        <div className="container">
          <ScrollReveal>
            <p className={styles.sectionTag}>WHAT WE HANDLE</p>
            <h2 className={styles.sectionTitle}>Events We Power</h2>
          </ScrollReveal>
          <div className={styles.eventGrid}>
            {eventTypes.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 100}>
                <div className={styles.eventCard}>
                  <div className={styles.eventIcon}>{e.icon}</div>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.process}>
        <div className="container">
          <ScrollReveal>
            <p className={styles.sectionTagDark}>HOW IT WORKS</p>
            <h2 className={styles.processTitle}>From Inquiry to On-Site</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 100}>
                <div className={styles.processCard}>
                  <span className={styles.processStep}>{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {i < process.length - 1 && <div className={styles.processLine} />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className={styles.global}>
        <div className={styles.blob2} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <ScrollReveal>
              <p className={styles.sectionTag}>OUR REACH</p>
              <h2 className={styles.sectionTitle}>Global Presence – Local Strategy</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={100}>
            <div className={styles.countries}>
              {['UAE', 'KSA', 'QATAR', 'OMAN'].map((c) => (
                <span key={c} className={styles.country}>{c}</span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={styles.globalText}>
              Serving the expanding markets of the Middle East and beyond with deep local expertise and global network.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <ScrollReveal>
            <h2>Planning your next event?</h2>
            <a href="/contact" className={styles.btnPrimary}>Get in Touch</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
