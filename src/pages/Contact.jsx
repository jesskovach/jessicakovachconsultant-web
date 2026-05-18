import { useState } from 'react';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Section from '@components/primitives/Section';
import { siteConfig } from '@lib/siteConfig';
import styles from './Contact.module.css';

const PORTAL_URL = 'https://kovachconsultingapp.pages.dev/register';
const PORTAL_SIGNIN_URL = 'https://kovachconsultingapp.pages.dev/login';
const CALENDLY_URL = 'https://calendly.com/kovachconsulting';

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="3.5" />
      <path d="M5.5 20c.5-3.5 3.4-5.5 6.5-5.5s6 2 6.5 5.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.5" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="8.5" y1="3" x2="8.5" y2="6.5" />
      <line x1="15.5" y1="3" x2="15.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const email = siteConfig.contact.email;
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `KCG contact from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageTransition>
      {/* Hero */}
      <Section size="lg" className={styles.heroSection}>
        <FadeIn className={styles.heroCopy}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.heroTitle}>
            Let&apos;s start with a conversation.
          </h1>
          <p className={styles.heroBody}>
            If you&apos;re navigating something complex — a leadership
            transition, a team that&apos;s lost its footing, a system that
            stopped working for the people inside it — let&apos;s talk.
          </p>
          <p className={styles.heroBody}>
            I work with a small number of clients at a time so I can give each
            engagement the attention it requires. The first conversation is
            about fit. There&apos;s no pitch, no pressure.
          </p>
          <p className={styles.heroBody}>
            You can reach me directly at{' '}
            <a href={`mailto:${email}`} className={styles.heroLink}>
              {email}
            </a>{' '}
            or schedule time below.
          </p>
        </FadeIn>
      </Section>

      {/* Two-card structure — Client Portal + First Conversation */}
      <Section className={styles.optionsSection}>
        <div className={styles.optionsGrid}>
          {/* Card 1 — Client Portal */}
          <FadeIn className={styles.optionCard}>
            <span className={styles.optionIcon} aria-hidden="true">
              <UserIcon />
            </span>
            <span className={styles.optionEyebrow}>Client Portal</span>
            <h3 className={styles.optionTitle}>Create your portal account</h3>
            <ul className={styles.optionList}>
              <li>Access your session materials and notes</li>
              <li>Track goals and progress between sessions</li>
              <li>View resources and coursework assigned to you</li>
              <li>No password — just your email</li>
            </ul>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.optionButtonPrimary}
            >
              Create my account
            </a>
            <p className={styles.optionFooter}>
              Already have an account?{' '}
              <a
                href={PORTAL_SIGNIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.optionFooterLink}
              >
                Sign in here.
              </a>
            </p>
          </FadeIn>

          {/* Card 2 — First Conversation */}
          <FadeIn delay={0.1} className={styles.optionCard}>
            <span className={styles.optionIcon} aria-hidden="true">
              <CalendarIcon />
            </span>
            <span className={styles.optionEyebrow}>First Conversation</span>
            <h3 className={styles.optionTitle}>Schedule a conversation</h3>
            <ul className={styles.optionList}>
              <li>Explore whether this work is the right fit</li>
              <li>Talk through what you&apos;re navigating</li>
              <li>No commitment required</li>
              <li>30-minute introductory call</li>
            </ul>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.optionButtonOutline}
            >
              Schedule a call
            </a>
            <p className={styles.optionFooter}>
              Opens Calendly to find a time that works.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Send a message */}
      <Section className={styles.formSection}>
        <div className={styles.formGrid}>
          <FadeIn className={styles.formHeader}>
            <h2 className={styles.formTitle}>Send a message</h2>
            <p className={styles.formLead}>
              Prefer to write? Tell me a little about what you&apos;re working
              with and I&apos;ll be in touch within two business days.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={styles.formInput}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={styles.formInput}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="organization" className={styles.formLabel}>
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className={styles.formInput}
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="message" className={styles.formLabel}>
                  Tell me what you&apos;re navigating
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={styles.formTextarea}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.formButton}>
                Submit message
              </button>
            </form>
          </FadeIn>
        </div>
      </Section>

      {/* What to expect */}
      <Section className={styles.expectSection}>
        <FadeIn className={styles.expectInner}>
          <h2 className={styles.expectTitle}>What to expect</h2>
          <p className={styles.expectBody}>
            I&apos;ll respond within two business days. If what you&apos;re
            navigating feels urgent, say so in your message and I&apos;ll
            prioritize accordingly.
          </p>
          <p className={styles.expectBody}>
            The first conversation is 30 minutes — to understand what
            you&apos;re working with and whether this is the right fit. If it
            is, we&apos;ll talk about what working together would look like.
            If it isn&apos;t, I&apos;ll tell you honestly.
          </p>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
