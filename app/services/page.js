import styles from './page.module.css'
import ScrollReveal from '@/components/ScrollReveal'
import ProgressiveImage from '@/components/ProgressiveImage'

const services = [
  {
    title: 'Event & Exhibition Logistics',
    desc: 'Our core expertise. We specialize in the precision transport of goods for international concerts, trade fairs, fine art movements, conventions, and sporting events. We provide end-to-door solutions including customs clearance, ATA Carnet handling, and on-site material handling with 24/7 support.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    bullets: ['Concerts, trade fairs & symposiums', 'Fine art & museum exhibits', 'ATA Carnet management', '24/7 on-site support', 'Stage & booth delivery'],
  },
  {
    title: 'Air & Sea Freight',
    desc: 'We offer seamless supply chain management via major shipping lines and airlines. From LCL consolidation to full vessel chartering, our licensed customs brokers ensure your cargo clears international borders without a hitch. We prioritize guaranteed space for urgent, time-sensitive event shipments.',
    image: 'https://images.unsplash.com/photo-1574684532296-1c290a613292?q=80&w=800&auto=format&fit=crop',
    bullets: ['LCL & FCL consolidation', 'Full vessel chartering', 'Customs clearance', 'Guaranteed space for urgent shipments'],
  },
  {
    title: 'Vessel & Cargo Chartering',
    desc: 'For urgent, time-critical freight, we offer dedicated vessel and cargo flight chartering. Our global network allows us to pick up from the country of origin and deliver directly to the booth or stage, ensuring your event cargo arrives exactly when needed.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop',
    bullets: ['Dedicated vessel chartering', 'Cargo flight chartering', 'Origin pickup to booth delivery', 'Time-critical freight specialists'],
  },
  {
    title: 'Land Transport & Warehousing',
    desc: 'Our dependable fleet provides cost-effective, door-to-door delivery across the GCC. Our warehousing solutions include short-term and long-term storage, professional packing and crating, Pick & Pack services, and forklift/man-lift equipment for on-site logistics.',
    image: 'https://images.unsplash.com/photo-1519003722824-192d9920105b?q=80&w=800&auto=format&fit=crop',
    bullets: ['Door-to-door GCC delivery', 'Short & long-term storage', 'Packing, crating & palletizing', 'Forklift & man-lift equipment'],
  },
  {
    title: 'Project & Heavy Lift Logistics',
    desc: 'We manage complex projects for the oil & gas, energy, and construction sectors, handling upwards of 50,000 tons of cargo per month. Our expertise includes site evaluation, decommissioning, and the transport of oversized/overweight machinery using specialized equipment and a state-of-the-art fleet.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop',
    bullets: ['50,000+ tons/month capacity', 'Oversized/overweight transport', 'Site evaluation & decommissioning', 'State-of-the-art fleet'],
  },
  {
    title: 'Customs & Compliance',
    desc: 'We provide comprehensive customs formalities and ATA Carnet management. Our IOR & EOR services (Importer/Exporter of Record) ensure your cargo complies with all international trade regulations, reducing delays and ensuring smooth cross-border movement.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    bullets: ['IOR & EOR services', 'ATA Carnet management', 'Full customs formalities', 'International trade compliance'],
  },
]

export const metadata = {
  title: 'Our Services | DD FREIGHT LLC',
  description: 'Event & exhibition logistics, air freight, cargo chartering, and customs compliance across the GCC.',
}

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.tag}>OUR SERVICES</p>
          <h1>Endless Freight Solutions</h1>
          <p className={styles.intro}>
            From air and sea freight to specialized event logistics, we provide comprehensive, zero-delay solutions across the GCC and beyond.
          </p>
        </div>
      </div>
      <div className="container">
        <ScrollReveal>
          <div className={styles.whyUs}>
            <p className={styles.tag}>WHY CHOOSE US</p>
            <h2 className={styles.whyTitle}>The DD Freight Difference</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>24/7 Operations</h3>
                <p>Round-the-clock support because your cargo never sleeps — and neither do we.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>4 Countries, 1 Partner</h3>
                <p>Seamless coverage across UAE, KSA, Qatar & Oman with deep local expertise.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3>50,000T Monthly</h3>
                <p>Proven capacity to handle massive cargo volumes without breaking a sweat.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Zero-Delay Standard</h3>
                <p>Built on event-industry precision where every minute counts and delays are not an option.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className={`${styles.card} ${i % 2 === 1 ? styles.reverse : ''}`}>
                <ProgressiveImage src={s.image} alt={s.title} className={styles.img} />
                <div className={styles.content}>
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <ul>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
