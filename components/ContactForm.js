'use client'
import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  if (sent) {
    return (
      <div className={styles.formWrap}>
        <div className={styles.success}>
          <svg className={styles.checkmark} viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="none" stroke="var(--navy)" strokeWidth="2" />
            <path fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          <h2>Message Sent!</h2>
          <p>We will get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.formWrap}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <input type="text" id="name" placeholder=" " required value={form.name} onChange={handleChange('name')} />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className={styles.field}>
            <input type="email" id="email" placeholder=" " required value={form.email} onChange={handleChange('email')} />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <input type="tel" id="phone" placeholder=" " value={form.phone} onChange={handleChange('phone')} />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className={styles.field}>
            <input type="text" id="subject" placeholder=" " required value={form.subject} onChange={handleChange('subject')} />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className={styles.field}>
          <textarea id="message" placeholder=" " rows={6} required value={form.message} onChange={handleChange('message')} />
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" className={styles.submit}>Send Message</button>
      </form>
    </div>
  )
}
