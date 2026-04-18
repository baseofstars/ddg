import styles from './page.module.css'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'About Us | DD FREIGHT LLC',
  description: 'Learn about DD FREIGHT LLC — our story, vision, mission, and leadership.',
}

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.tag}>ABOUT US</p>
          <h1>Our Story</h1>
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <section className={styles.ceo}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              alt="CEO"
              className={styles.ceoImg}
            />
            <div className={styles.ceoContent}>
              <p className={styles.tag}>CEO'S MESSAGE</p>
              <blockquote>
                "To maintain our standing for integrity and unmatched service, we invest in the most dedicated professionals who understand that in the event industry, there is no room for delay."
              </blockquote>
              <p>
                At DD FREIGHT LLC, we have built an uncompromising reputation as a premier provider of total logistics solutions, with a deep-rooted expertise in the high-pressure world of Event and Exhibition Logistics. The global supply chain is becoming increasingly sophisticated; to stay ahead, a freight forwarder must do more than move cargo—they must innovate.
              </p>
              <p>
                Our status as a premier service provider depends on our ability to react to changing market conditions faster than our competitors while maintaining affordable, quality service. I am proud of the milestones our team has achieved, and I invite you to experience the reliability and precision that define DD FREIGHT.
              </p>
              <p className={styles.sig}>— CEO, DD FREIGHT LLC</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <section className={styles.overview}>
            <p className={styles.tag}>COMPANY OVERVIEW</p>
            <h2>Local Expertise, Global Reach</h2>
            <p>
              Founded on the principles of local expertise and global reach, DD FREIGHT LLC serves the expanding markets of the Middle East and beyond. We have established ourselves as a leader in handling complex cargo and heavy machinery.
            </p>
            <p>
              We offer a turnkey approach for event organizers and industrial clients alike. Whether it is a world-class concert, a massive trade exhibition, or heavy industrial equipment, we manage the entire lifecycle: from rigging and international transport to on-site setup and storage. Our goal is to exceed your expectations and ensure your project commitments are met on time, every time.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <section className={styles.vm}>
            <div className={styles.vmCard}>
              <h3>Our Vision</h3>
              <p>
                To be the most flexible and reliable logistics partner in the region, recognized for our ability to handle time-critical freight with absolute quality consciousness.
              </p>
            </div>
            <div className={styles.vmCard}>
              <h3>Our Mission</h3>
              <p>
                To provide innovative, effective, and seamless logistics solutions led by a workforce committed to the "Zero-Delay" standard of the event industry.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <section className={styles.commitment}>
            <blockquote>
              "We say what we mean, and we honor our word."
            </blockquote>
            <p>
              Integrity is our foundation. At DD FREIGHT LLC, we believe that business conduct is only ethical when based on transparency, accountability, and continuous improvement. We don't just deliver your cargo; we deliver peace of mind.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className={styles.fleet}>
            <p className={styles.tag}>OUR REACH</p>
            <h2>Global Network & Fleet</h2>
            <p className={styles.fleetDesc}>
              With a robust network of partners and a state-of-the-art fleet, we ensure your cargo moves seamlessly across air, sea, and land. Our global reach combined with local strategy makes us the preferred choice for complex logistics.
            </p>
            <div className={styles.fleetGrid}>
              <div className={styles.fleetItem}>
                <img src="https://images.unsplash.com/photo-1574684532296-1c290a613292?q=80&w=800&auto=format&fit=crop" alt="Sea Freight" />
                <span>Ocean Carriers</span>
              </div>
              <div className={styles.fleetItem}>
                <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=800&auto=format&fit=crop" alt="Air Freight" />
                <span>Air Cargo</span>
              </div>
              <div className={styles.fleetItem}>
                <img src="https://images.unsplash.com/photo-1519003722824-192d9920105b?q=80&w=800&auto=format&fit=crop" alt="Land Transport" />
                <span>Ground Fleet</span>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  )
}
