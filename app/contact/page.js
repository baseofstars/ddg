import ContactForm from '../../components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'

export const metadata = {
  title: 'Contact Us | DD FREIGHT LLC',
  description: 'Get in touch with DD FREIGHT LLC for logistics solutions.',
}

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <p className={styles.tag}>CONTACT</p>
          <h1>Get in Touch</h1>
          <p>Ready to move your cargo? Let's talk.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className={styles.info}>
              <h3>Contact Details</h3>
              <div className={styles.infoItem}>
                <strong>Email</strong>
                <p>info@ddfreight.com</p>
              </div>
              <div className={styles.infoItem}>
                <strong>Phone</strong>
                <p>+971 55 223 3124</p>
              </div>
              <div className={styles.infoItem}>
                <strong>Address</strong>
                <p>Port Saeed, Deira, Dubai, UAE</p>
              </div>
              <div className={styles.infoItem}>
                <strong>Office Hours</strong>
                <p>Sunday – Thursday, 9AM – 6PM</p>
              </div>

              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.65159617!2d54.89782829253498!3d25.076280448382037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DD Freight LLC - Dubai, UAE"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
