import { Link } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StaggerItem from '@components/motion/StaggerItem';
import Section from '@components/primitives/Section';
import Button from '@components/primitives/Button';
import jessicaPortrait from '@assets/jessica-portrait.png';
import {
  IconCoaching,
  IconOrgChart,
  IconPeople,
  IconStrategy,
  IconSpeaking,
  IconBook,
  IconCheckCircle,
} from '@components/primitives/CapabilityIcons';
import styles from './Home.module.css';

const principles = ['20+ Years', 'Systems Thinking', 'Human-Centered'];

const interventions = [
  {
    icon: IconCoaching,
    title: 'Leadership Coaching',
    body: 'Personalized advisory for executives navigating high-stakes transitions and cultural evolution.',
  },
  {
    icon: IconOrgChart,
    title: 'Organizational Development',
    body: 'Systems-level architecture to align structure, strategy, and soul within your organization.',
  },
  {
    icon: IconPeople,
    title: 'Behavioral Skills Development',
    body: 'Training teams in the essential soft skills that drive hard results and interpersonal clarity.',
  },
  {
    icon: IconStrategy,
    title: 'Strategic Advisory',
    body: 'Outside-in perspective on complex organizational challenges and vision casting.',
  },
  {
    icon: IconSpeaking,
    title: 'Speaking + Facilitation',
    body: 'Dynamic keynotes and workshop facilitation that sparks dialogue and drives action.',
  },
  {
    icon: IconBook,
    title: 'Thought Leadership',
    body: 'Custom research and editorial content designed to position your brand as a leading voice.',
  },
];

export default function Home() {
  return (
    <PageTransition>
      <Section size="lg" className={styles.heroSection}>
        <div className={styles.hero}>
          <FadeIn className={styles.heroCopy}>
            <span className={styles.heroEyebrow}>Kovach Consulting Group</span>
            <h1 className={styles.heroTitle}>
              Making sense<br />of what matters.
            </h1>
            <p className={styles.heroLead}>
              We partner with leaders to build cultures of integrity through clarity,
              systems thinking, and a human-centered approach to organizational evolution.
            </p>
            <div className={styles.heroActions}>
              <Button to="/contact" variant="primary" className={styles.heroBtnPrimary}>
                Work with us
              </Button>
              <Button to="/services" variant="secondary" className={styles.heroBtnSecondary}>
                Read our approach
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className={styles.heroQuote}>
            <p className={styles.quoteText}>
              Every system tells a story — the question is whether we&apos;re paying
              attention.
            </p>
            <hr className={styles.quoteDivider} />
            <span className={styles.quoteAttribution}>KCG Philosophy</span>
          </FadeIn>
        </div>
      </Section>

      <Section tone="alt" size="sm">
        <Stagger className={styles.principles}>
          {principles.map((label) => (
            <StaggerItem key={label} className={styles.principle}>
              <span className={styles.principleLabel}>{label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="alt" className={styles.approachSection}>
        <div className={styles.approach}>
          <FadeIn className={styles.approachVisual}>
            <img
              src={jessicaPortrait}
              alt="Jess Kovach, founder of Kovach Consulting Group"
              className={styles.approachImage}
              loading="lazy"
            />
          </FadeIn>
          <FadeIn delay={0.1} className={styles.approachCopy}>
            <span className={styles.sectionEyebrow}>The Approach</span>
            <h2 className={styles.approachTitle}>
              Leadership can repair what systems have fractured.
            </h2>
            <p className={styles.approachBody}>
              I help organizations move beyond transactional, surface-level changes to
              deep, relational transformation that lasts.
            </p>

            <hr className={styles.approachDivider} />

            <span className={styles.sectionEyebrow}>Core Principles</span>
            <ul className={styles.principlesList}>
              {[
                'Systems are only as healthy as the people within them.',
                'Integrity is a practice, not a static destination.',
                'Clarity is the ultimate act of leadership care.',
              ].map((item) => (
                <li key={item} className={styles.principleItem}>
                  <IconCheckCircle className={styles.principleIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <hr className={styles.approachDivider} />

            <Link to="/about" className={styles.approachLink}>
              Learn more about Jess <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </Section>

      <Section tone="muted" className={styles.capabilities}>
        <FadeIn className={styles.capabilitiesHeader}>
          <span className={styles.capabilitiesEyebrow}>Our Capabilities</span>
          <h2 className={styles.capabilitiesTitle}>
            Focused Interventions for Complex Growth.
          </h2>
        </FadeIn>
        <Stagger className={styles.capabilitiesGrid}>
          {interventions.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} className={styles.capabilityCard}>
              <span className={styles.capabilityIcon} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.capabilityTitle}>{title}</h3>
              <p className={styles.capabilityBody}>{body}</p>
              <hr className={styles.capabilityDivider} />
              <a href="#" className={styles.capabilityLink}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="accent" size="lg" className={styles.ctaSection}>
        <FadeIn className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Ready to do the work?</h2>
          <p className={styles.ctaCopy}>
            Transformation requires honesty and a willingness to look beneath the surface.
            If you are ready to build a culture that lasts, we are ready to partner with you.
          </p>
          <Button to="/contact" variant="inverse" size="lg">Work with us</Button>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
