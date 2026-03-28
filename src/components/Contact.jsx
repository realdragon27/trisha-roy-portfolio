import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'trishachitradip@gmail.com',
    href: 'mailto:trishachitradip@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    label: 'Location',
    value: 'Southampton, UK',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Add your LinkedIn URL',
    href: 'https://linkedin.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-muted leading-relaxed">
              I'm currently open to Business Analyst, Operations Analyst, and BI Analyst opportunities.
              Whether you have a question or just want to say hello — my inbox is always open.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-muted text-xs">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-light text-sm hover:text-teal transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-light text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-light placeholder-slate-muted/50 focus:outline-none focus:border-teal transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-teal text-sm text-center">Message sent! I'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try emailing directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
