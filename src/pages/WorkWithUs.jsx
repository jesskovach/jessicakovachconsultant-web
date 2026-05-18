import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Section from '@components/primitives/Section';
import styles from './WorkWithUs.module.css';

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

export default function WorkWithUs() {
  return (
    <PageTransition>
      {/* Hero */}
      <Section size="lg" className={styles.heroSection}>
        <FadeIn className={styles.heroCopy}>
          <span className={styles.eyebrow}>Let&apos;s get started</span>
          <h1 className={styles.heroTitle}>
            Two ways to
            <br />
            begin the work.
          </h1>
          <p className={styles.heroBody}>
            Whether you&apos;re ready to dive in or just want to explore
            what&apos;s possible — pick the path that fits where you are right
            now.
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
    </PageTransition>
  );
}
