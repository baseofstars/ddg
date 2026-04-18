'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import CountUp from '@/components/CountUp'
import ScrollReveal from '@/components/ScrollReveal'
import ProgressiveImage from '@/components/ProgressiveImage'

const stats = [
  { 
    number: 2, 
    suffix: '+', 
    label: 'Years Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  { 
    number: 5000, 
    suffix: 'T', 
    label: 'Cargo Handled Monthly',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
        <path d="M21 10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10" />
      </svg>
    )
  },
  { 
    number: 1000, 
    suffix: '+', 
    label: 'Delivered Packages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    )
  },
  { 
    number: 365, 
    suffix: '', 
    label: 'Days Support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  },
]

const partners = [
  'Emirates SkyCargo', 'Etihad Cargo', 'Air Arabia', 'Qatar Airways', 'Korean Air', 'Turkish Airlines', 'Lufthansa Cargo', 'FedEx', 'DHL'
]

const sportsServices = [
  {
    title: 'Time-Critical Freight',
    desc: 'Express forwarding via Air, Sea & Land to meet tight broadcast deadlines.',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Customs & Permits',
    desc: 'Expert handling of ATA Carnet, CPD & Temporary Permits for global movement.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Sensitive Equipment',
    desc: 'Safe transport of high-value broadcast gear, cameras, and drones.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
  },
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
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1920&auto=format&fit=crop"
            alt="Mighty container ship at sea"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroOverlay}>
          <ScrollReveal>
            <p className={styles.heroSub}>SPECIALIZED SOLUTIONS</p>
            <h1 className={styles.heroTitle}>Media & Sports Logistics</h1>
            <p className={styles.heroSub2}>Precision in Motion. Speed on Demand. Reliability You Trust.</p>
            <div className={styles.heroBtns}>
              <a href="/contact" className={styles.btnPrimary}>Get a Quote</a>
              <a href="/services" className={styles.btnOutline}>Our Services</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statIcon}>{s.icon}</div>
                  <div className={styles.statContent}>
                    <span className={styles.statNum}>
                      <CountUp end={s.number} suffix={s.suffix} duration={2000} />
                    </span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className={styles.partners}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className={styles.partnerName}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Content Section */}
      <section className={styles.spotlight}>
        <div className="container">
          <div className={styles.spotlightGrid}>
            <ScrollReveal>
              <div className={styles.spotlightText}>
                <p className={styles.sectionTag}>WHAT WE DO</p>
                <h2>We Move the Moments That Matter</h2>
                <p className={styles.lead}>
                  In the adrenaline-fueled world of live broadcasts and global sporting events, logistics isn’t just about transport — it’s about delivering the show, flawlessly.
                </p>
                <p>
                  At DD Freight, we specialize in moving the equipment that makes the magic happen. From sensitive broadcast equipment and stage setups to OB vans and athletic gear, we provide tailored logistics that keep your production running like clockwork — wherever in the world it happens.
                </p>
                <p>
                  Whether it’s cameras or drones for a film set, props for a live concert, or mobile broadcast units for a telecast, our team ensures every move is handled with precision, care, and urgency. Wherever the spotlight shines — DD Freight moves your vision with confidence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.spotlightFeatures}>
                <h3>Our Specialized Services</h3>
                <ul className={styles.featureList}>
                  <li>
                    <strong>Time-Critical Freight Forwarding</strong>
                    <span>Air, Sea & Land solutions for urgent requirements.</span>
                  </li>
                  <li>
                    <strong>Import/Export Clearance</strong>
                    <span>ATA Carnet, CPD & Temporary Permits experts.</span>
                  </li>
                  <li>
                    <strong>Safe Transport of Sensitive Gear</strong>
                    <span>White-glove handling for high-value equipment.</span>
                  </li>
                  <li>
                    <strong>On-Site Delivery & Support</strong>
                    <span>Professional setup and dismantling support at venues.</span>
                  </li>
                  <li>
                    <strong>Secure Storage & Returns</strong>
                    <span>Complete reverse logistics and short-term storage.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sports Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {sportsServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImgWrap}>
                    <ProgressiveImage src={s.image} alt={s.title} className={styles.serviceImg} />
                    <div className={styles.serviceImgOverlay} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className={styles.quickQuote}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.quoteCard}>
              <div className={styles.quoteInfo}>
                <p className={styles.sectionTag}>REQUEST A QUOTE</p>
                <h2>Ready to Move Your Cargo?</h2>
                <p>Get a customized shipping quote within 24 hours from our team of experts.</p>
              </div>
              <form className={styles.quoteForm} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <select required defaultValue="">
                  <option value="" disabled>Service Type</option>
                  <option value="media">Media & Sports</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="land">Land Transport</option>
                </select>
                <button type="submit" className={styles.btnPrimary}>Submit Request</button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Presence */}
      <section className={styles.global}>
        <div className={styles.blob2} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <ScrollReveal>
              <p className={styles.sectionTag}>OUR REACH</p>
              <h2>From Dubai to the World — We Deliver</h2>
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
              Rooted in the UAE, reaching across the GCC and beyond — we move cargo with local precision and global ambition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <ScrollReveal>
            <h2>Planning your next event?</h2>
            <p>Our team is ready to provide you with the most efficient logistics strategy.</p>
            <a href="/contact" className={styles.btnPrimary}>Contact Us Today</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
