import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StaggerItem from '@components/motion/StaggerItem';
import Section from '@components/primitives/Section';
import Button from '@components/primitives/Button';
import { IconSpeaking, IconCheckCircle } from '@components/primitives/CapabilityIcons';
import jessPortrait from '@assets/jess-about-portrait.png';
import styles from './Services.module.css';

const CALENDLY_URL = 'https://calendly.com/kovachconsulting';
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

const serviceDetails = [
  {
    id: 'courses',
    title: 'Courses (Self-Paced)',
    description:
      "A structured path into the methodology for managers, team leads, and individual contributors who want to lead differently but don't need the full weight of a 1:1 engagement. Each course produces usable outputs — not just ideas. Worksheets, frameworks, and 30-day action plans you can apply the same week.",
    pricing: [
      { label: 'Leadership Course', price: '$297', action: 'Enroll' },
      { label: 'Full Course Bundle', price: '$697', action: 'Enroll' },
      { label: 'Team Bundle (up to 10 seats)', price: '$1,497', action: 'Enroll' },
      { label: 'Larger teams', price: 'Request custom quote' },
    ],
    tagline: 'Skills are defined by the work, not by the catalog.',
  },
  {
    id: 'cohort',
    title: 'Group Cohort (6-Month)',
    description:
      'A six-month structural clarity program for leaders who want peer context alongside the work. Capped at eight participants so feedback is specific, not generic. Monthly workshops, individualized development plan, cohort community hub inside the KCG app.',
    pricing: [
      { label: 'Standard', price: '$4,997' },
      { label: 'Accessible rate', price: '$3,500' },
      { label: 'Employer-sponsored', price: '$7,500' },
      { label: 'Equity seats', price: 'Request custom quote' },
    ],
    tagline: "The cohort isn't a shortcut to the 1:1 work — it's a different shape of it.",
  },
  {
    id: 'retainer',
    title: 'Retainer Advisory',
    description:
      "Ongoing structural support for clients who've completed a cohort or 1:1 engagement and want a standing place to bring the next decision. Month-to-month, 30 days' notice to end.",
    pricing: [
      { label: '2 sessions / month', price: '$3,500/mo' },
      { label: '4 sessions / month', price: '$5,500/mo' },
    ],
    tagline: 'Advisory that stays with you past the engagement that built it.',
  },
  {
    id: 'engagement',
    title: '1:1 Leadership Engagement',
    description:
      "Most leadership failure is not a character problem. It's a structure problem held by a person. You are accountable for outcomes the system around you was never designed to produce, and the cost of that gap lands on you personally. Sixteen weeks of weekly 1:1 work, built around your specific role, organization, and context. Tier placement for B and C is determined through a brief private application.",
    pricing: [
      { label: 'Tier A — Standard', price: '$18,000', planPrice: '$19,000' },
      { label: 'Tier B — Accessible', price: '$12,000', planPrice: '$12,800' },
      { label: 'Employer-sponsored', price: '$28,000', planPrice: '$29,200' },
      { label: 'Tier C — Equity', price: 'Request custom quote' },
      { label: 'Scholarship (2 / quarter)', price: 'No cost' },
    ],
    tagline: 'Leadership capacity is built by structure, not absorbed by the leader.',
  },
  {
    id: 'orgdev',
    title: 'Organizational Development',
    description:
      'When a team is straining, the instinct is to manage the people harder. The diagnostic is almost always the opposite: roles, decision rights, and accountability lines have drifted out of alignment with what the organization is now responsible for. People are doing the best they can inside a structure that no longer fits. Three scopes available, always preceded by a scoped proposal.',
    pricing: [
      { label: 'Structural Diagnostic (6–8 weeks)', price: '$35,000–$60,000' },
      { label: '6-Month Redesign', price: '$75,000–$150,000' },
      { label: 'Enterprise (8–12 months)', price: '$150,000–$350,000' },
    ],
    tagline: "Strain is a design signal. We redesign the system that's producing it.",
  },
  {
    id: 'speaking',
    title: 'Speaking & Facilitation',
    description:
      'Talks and workshops on leadership under pressure, ethical decision-making, institutional accountability, and building systems that protect the people inside them. Each one is built around the specific structural conditions the audience is operating inside, not generic frameworks lifted from a slide deck.',
    pricing: [
      { label: '30-min keynote', price: '$5,000–$10,000' },
      { label: '90-min workshop', price: '$10,000–$18,000' },
      { label: 'Half-day deep-dive', price: 'Request quote' },
    ],
  },
];

const investmentTiers = [
  {
    title: 'Courses',
    body: 'Self-paced. Individual or team.',
    price: '$297',
  },
  {
    title: 'Group Cohort',
    body: '6 months. Capped at 8.',
    price: '$3,500',
  },
  {
    title: 'Retainer',
    body: 'Ongoing structural support.',
    price: '$3,500',
    suffix: '/mo',
  },
];

const featuredTiers = [
  {
    title: '1:1 Engagement',
    body: '16 weeks. Tiered access.',
    price: '$12,000',
  },
  {
    title: 'Organizational Dev.',
    body: 'Diagnostic to enterprise redesign.',
    price: '$35,000',
    dark: true,
  },
];

export default function Services() {
  return (
    <PageTransition>
      {/* Hero — "One body of work applied at three scales." */}
      <Section size="lg" className={styles.heroSection}>
        <div className={styles.hero}>
          <FadeIn className={styles.heroCopy}>
            <span className={styles.eyebrow}>Our Services</span>
            <h1 className={styles.heroTitle}>
              One body of work applied at three scales.
            </h1>
            <p className={styles.heroLead}>
              People are not failing the system. The system is producing the
              outcome it was built—or allowed—to produce. We rebuild the structure
              inside your organization through clarity and care.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.heroVisual}>
            <div className={styles.portraitFrame}>
              <img
                src={jessPortrait}
                alt="Jess Kovach, founder of Kovach Consulting Group"
                className={styles.portraitImage}
                loading="lazy"
              />
              <span className={styles.portraitTag}>
                <em>Authority through care.</em>
              </span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Founding Clients callout */}
      <Section className={styles.foundingSection}>
        <FadeIn className={styles.foundingCard}>
          <div className={styles.foundingCopy}>
            <h2 className={styles.foundingTitle}>Founding Clients.</h2>
            <p className={styles.foundingBody}>
              KCG is a new practice. Founding clients get preferential pricing,
              direct access, and co-designed engagements. Cohort capped at five.
            </p>
          </div>
          <Button to="/founding-clients" className={styles.foundingBtn}>
            Learn more <span aria-hidden="true">→</span>
          </Button>
        </FadeIn>
      </Section>

      {/* Investment Tiers */}
      <Section className={styles.investmentSection}>
        <FadeIn className={styles.investmentHeader}>
          <h2 className={styles.investmentTitle}>Investment Tiers</h2>
          <p className={styles.investmentLead}>
            Engagements are scoped before any commitment. The ranges below are
            directional and follow the fit conversation.
          </p>
        </FadeIn>

        {/* Top row — 3 tiers */}
        <Stagger className={styles.tierGrid}>
          {investmentTiers.map((tier) => (
            <StaggerItem key={tier.title} className={styles.tierCard}>
              <h3 className={styles.tierTitle}>{tier.title}</h3>
              <p className={styles.tierBody}>{tier.body}</p>
              <hr className={styles.tierDivider} />
              <div className={styles.tierPrice}>
                <span className={styles.tierFrom}>From</span>
                <span className={styles.tierAmount}>
                  {tier.price}
                  {tier.suffix && (
                    <span className={styles.tierSuffix}>{tier.suffix}</span>
                  )}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Second row — 2 featured tiers (one dark) */}
        <Stagger className={styles.featuredGrid}>
          {featuredTiers.map((tier) => (
            <StaggerItem
              key={tier.title}
              className={`${styles.tierCard} ${tier.dark ? styles.tierCardDark : ''}`}
            >
              <h3 className={styles.tierTitle}>{tier.title}</h3>
              <p className={styles.tierBody}>{tier.body}</p>
              <hr className={styles.tierDivider} />
              <div className={styles.tierPrice}>
                <span className={styles.tierFrom}>From</span>
                <span className={styles.tierAmount}>{tier.price}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Speaking — horizontal */}
        <FadeIn className={styles.speakingCard}>
          <span className={styles.speakingIcon} aria-hidden="true">
            <IconSpeaking />
          </span>
          <h3 className={styles.speakingTitle}>Speaking</h3>
          <p className={styles.speakingBody}>
            Keynote, workshop, or half-day.
          </p>
          <div className={styles.speakingPrice}>
            <span className={styles.tierFrom}>From</span>
            <span className={styles.tierAmount}>$5,000</span>
          </div>
        </FadeIn>
      </Section>

      {/* Detailed Scopes — tabbed accordion */}
      <DetailedScopes />

      {/* Take the next step — booking */}
      <NextStep />
    </PageTransition>
  );
}

function NextStep() {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );
    if (existing) {
      if (window.Calendly?.initInlineWidgets) {
        window.Calendly.initInlineWidgets();
      }
      return;
    }
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Section className={styles.nextStepSection}>
      <div className={styles.nextStepGrid}>
        <FadeIn className={styles.nextStepCopy}>
          <span className={styles.nextStepEyebrow}>Take the next step</span>
          <h2 className={styles.nextStepTitle}>Ready to do the work?</h2>
          <p className={styles.nextStepBody}>
            Whether you&apos;re navigating a leadership transition, a cultural
            shift, or a moment of organizational inflection — let&apos;s start
            with what&apos;s actually happening.
          </p>
          <ul className={styles.nextStepList}>
            {[
              '30-minute discovery call',
              'Zero-obligation assessment',
              'Direct conversation with leadership',
            ].map((item) => (
              <li key={item}>
                <IconCheckCircle className={styles.nextStepIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1} className={styles.bookingCard}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ width: '100%', height: '100%', minWidth: '320px' }}
          />
        </FadeIn>
      </div>
    </Section>
  );
}

function DetailedScopes() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section className={styles.scopesSection}>
      <FadeIn className={styles.scopesInner}>
        <h2 className={styles.scopesTitle}>Detailed Scopes</h2>

        <ul className={styles.accordion}>
          {serviceDetails.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className={styles.accordionItem}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className={styles.accordionTrigger}
                >
                  <span className={styles.accordionTitle}>{item.title}</span>
                  <motion.span
                    aria-hidden="true"
                    className={styles.accordionIcon}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={styles.accordionPanel}
                    >
                      <div className={styles.scopePanel}>
                        {item.description && (
                          <p className={styles.scopeDescription}>{item.description}</p>
                        )}
                        {item.pricing && item.pricing.length > 0 && (
                          <ul className={styles.scopePricing}>
                            {item.pricing.map((row) => (
                              <li key={row.label} className={styles.scopePriceRow}>
                                <span className={styles.scopePriceLabel}>{row.label}</span>
                                <span className={styles.scopePriceRight}>
                                  <span className={styles.scopePriceValue}>
                                    {row.price}
                                    {row.planPrice && (
                                      <span className={styles.scopePriceNote}>
                                        {' '}
                                        (plan {row.planPrice})
                                      </span>
                                    )}
                                  </span>
                                  {row.action && (
                                    <Link
                                      to="/work-with-us"
                                      className={styles.scopePriceAction}
                                    >
                                      {row.action}
                                    </Link>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.tagline && (
                          <p className={styles.scopeTagline}>{item.tagline}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className={styles.scopesNote}>
          <p>
            Not sure where you fit? A 30-minute fit conversation is free. If this
            isn&apos;t the right match, I&apos;ll say so — and point you to someone
            better suited.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
