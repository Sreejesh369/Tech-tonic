import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { SplitText } from '../ui/SplitText';
import { Reveal } from '../ui/Reveal';
import { contact } from '../../data/site';
import styles from './Contact.module.css';

const budgets = ['< $25k', '$25k–$75k', '$75k–$150k', '$150k+'];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder submit — wire to your backend / form service here.
    setSent(true);
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.layout}>
          {/* Left: pitch + direct channels */}
          <div className={styles.pitch}>
            <Reveal className={styles.meta}>
              <span className={styles.index}>07 — Contact</span>
              <span className="eyebrow">Start a Project</span>
            </Reveal>
            <SplitText
              as="h2"
              lines={['Let’s build', 'something that', 'lasts.']}
              className={styles.title}
              staggerAmount={0.06}
            />
            <Reveal as="p" delay={0.1} className={`lead ${styles.lead}`}>
              Tell us what you’re building. We’ll get back within one business day with next steps —
              no decks, no runaround.
            </Reveal>

            <Reveal className={styles.channels} delay={0.16}>
              <a className={styles.channel} href={`mailto:${contact.email}`}>
                <span className={styles.channelLabel}>Email</span>
                <span className={styles.channelValue}>{contact.email}</span>
              </a>
              <a className={styles.channel} href="#" aria-label="WhatsApp">
                <span className={styles.channelLabel}>WhatsApp</span>
                <span className={styles.channelValue}>{contact.whatsapp}</span>
              </a>
            </Reveal>

            <Reveal className={styles.socials} delay={0.2}>
              {contact.socials.map((s) => (
                <a key={s.label} href={s.href} className={styles.social}>
                  {s.label}
                </a>
              ))}
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal className={styles.formWrap} delay={0.1}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={styles.successMark} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <h3 className={styles.successTitle}>Message received.</h3>
                  <p className={styles.successText}>
                    Thanks for reaching out. We’ll be in touch within one business day.
                  </p>
                  <Button variant="ghost" onClick={() => setSent(false)}>
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>Name</span>
                      <input className={styles.input} type="text" name="name" required placeholder="Jane Doe" />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Email</span>
                      <input className={styles.input} type="email" name="email" required placeholder="jane@company.com" />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span className={styles.label}>Company</span>
                    <input className={styles.input} type="text" name="company" placeholder="Company (optional)" />
                  </label>

                  <div className={styles.field}>
                    <span className={styles.label}>Budget</span>
                    <div className={styles.budgets} role="radiogroup" aria-label="Budget range">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          role="radio"
                          aria-checked={budget === b}
                          className={`${styles.budget} ${budget === b ? styles.budgetActive : ''}`}
                          onClick={() => setBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className={styles.field}>
                    <span className={styles.label}>Project</span>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      rows={4}
                      required
                      placeholder="What are you building, and what does success look like?"
                    />
                  </label>

                  <input type="hidden" name="budget" value={budget ?? ''} />
                  <Button type="submit" variant="primary" arrow className={styles.submit}>
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
