import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StaggerItem from '@components/motion/StaggerItem';
import Section from '@components/primitives/Section';
import Button from '@components/primitives/Button';
import {
  IconDocument,
  IconOrgChart,
  IconPeople,
  IconBadge,
} from '@components/primitives/CapabilityIcons';
import jessPortrait from '@assets/jess-about-portrait.png';
import badgeHumanRights from '@assets/Certification/badge-human-rights-consultant.png';
import badgeAntiTrafficking from '@assets/Certification/badge-anti-trafficking-consultant.png';
import badgeDisabilityRights from '@assets/Certification/badge-disability-accessibility-consultant.png';
import badgePMI from '@assets/Certification/badge-PMI-membership.png';
import styles from './About.module.css';

const credentials = [
  { image: badgeHumanRights, label: 'Human Rights' },
  { image: badgeAntiTrafficking, label: 'Anti-Trafficking' },
  { image: badgeDisabilityRights, label: 'Disability Rights' },
  { image: badgePMI, label: 'PMI Certified' },
];

const specializedTraining = [
  'Trauma-Informed Organizational Leadership',
  'Conflict Resolution & Restorative Practices',
  'Advanced Systems Mapping & Complexity Theory',
];

const academicBackground = [
  'Master of Science in International Development',
  'Certified Professional Project Manager (PMP)',
];

const testimonials = [
  {
    quote:
      "Jess is very action oriented, focusing her energy on getting things done. She has very high personal standards and is very diligent to address any situation or action item that requires attention.",

  },
  {
    quote:
      "Jess has amazing passion and drive. She uses those qualities to help inspire and motivate the team.",

  },
  {
    quote:
      "Jess's focus and leadership drove significant growth and tangible business impact.",

  },

  {
    quote:
      "Jess's energy and drive for measurable results helped achieve targets and exceed expectations year over year.",

  },

  {
    quote:
      "Jess excels at managing competing priorities and driving team success. She consistently led teams to accomplish goals ahead of schedule with significant measurable growth.",
  },

  {
    quote:
      "Jess demonstrates genuine concern and empathy for every member of her team, creating an environment where people feel valued.",
  },

];

const methodSteps = [
  {
    icon: IconDocument,
    step: '01',
    label: 'Discovery',
    title: 'Deep Diagnosis',
    body: 'We start by looking beneath the surface symptoms. I conduct thorough organizational audits that map the formal and informal systems at play, identifying the true points of friction that stall progress.',
  },
  {
    icon: IconOrgChart,
    step: '02',
    label: 'Design',
    title: 'Integrative Strategy',
    body:
      "Strategy isn't a document; it's a living practice. I help you design frameworks that integrate your values into every operational touchpoint.",
  },
  {
    icon: IconPeople,
    step: '03',
    label: 'Coaching',
    title: 'Capacity Building',
    body: 'I coach leaders to develop the emotional intelligence and systems-thinking required to lead through uncertainty.',
  },
  {
    icon: IconBadge,
    step: '04',
    label: 'Legacy',
    title: 'Sustainable Implementation',
    body: 'Success is measured by what happens after I leave. We build robust systems that allow your team to maintain clarity and high performance without external intervention.',
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero — "Clarity and Care" */}
      <Section size="lg" className={styles.heroSection}>
        <div className={styles.hero}>
          <FadeIn className={styles.heroCopy}>
            <span className={styles.eyebrow}>Clarity and Care</span>
            <h1 className={styles.heroTitle}>
              I&apos;ve spent more than two decades inside the systems I now help
              people navigate.
            </h1>
            <p className={styles.heroLead}>
              Leadership is rarely about having all the answers. It&apos;s about
              building the internal capacity to hold complex, often contradictory
              truths, while moving toward a shared goal with relentless integrity.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.heroVisual}>
            <div className={styles.portraitFrame}>
              <img
                src={jessPortrait}
                alt="Jess Kovach, reviewing notes at her desk"
                className={styles.portraitImage}
                loading="lazy"
              />
              <span className={styles.portraitBracket} aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why I started KCG */}
      <Section className={styles.whySection}>
        <div className={styles.why}>
          <FadeIn className={styles.whyTitleCol}>
            <h2 className={styles.whyTitle}>Why I started KCG</h2>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.whyBodyCol}>
            <p className={styles.whyBody}>
              I saw a recurring pattern: organizations with profound missions were being
              dismantled from the inside by unresolved tension, stagnant hierarchies, and
              a lack of clear-eyed leadership. Kovach Consulting Group was born out of a
              desire to bridge the gap between high-level strategy and deep human care.
            </p>
            <p className={styles.whyBody}>
              Authority is not something granted by a title; it is earned through clarity
              of purpose and the consistent application of values. I help leaders find
              their voice not by shouting louder, but by listening deeper and structuring
              their systems to support their most vital work.
            </p>

            <blockquote className={styles.pullQuote}>
              Systems change only happens when the people within them find the
              courage to change themselves.
            </blockquote>
          </FadeIn>
        </div>
      </Section>

      {/* How I work */}
      <Section className={styles.howSection}>
        <FadeIn className={styles.howHeader}>
          <h2 className={styles.howTitle}>How I work</h2>
          <span className={styles.howAccent} aria-hidden="true" />
        </FadeIn>

        <Stagger className={styles.howGrid}>
          {methodSteps.map(({ icon: Icon, step, label, title, body }) => (
            <StaggerItem key={step} className={styles.methodCard}>
              <span className={styles.methodIcon} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.methodTitle}>{title}</h3>
              <p className={styles.methodBody}>{body}</p>
              <hr className={styles.methodDivider} />
              <span className={styles.methodMeta}>
                <span className={styles.methodStep}>{step}</span>
                <span className={styles.methodSeparator}>/</span>
                <span className={styles.methodLabel}>{label}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* From People I've Led — testimonials carousel */}
      <TestimonialsCarousel />

      {/* Credentials & Certifications */}
      <Section className={styles.credentialsSection}>
        <FadeIn className={styles.credentialsHeader}>
          <h2 className={styles.credentialsTitle}>Credentials &amp; Certifications</h2>
          <p className={styles.credentialsLead}>
            Rooted in rigorous training and international standards to ensure the
            highest quality of service.
          </p>
        </FadeIn>

        <Stagger className={styles.credentialsGrid}>
          {credentials.map(({ image, label }) => (
            <StaggerItem key={label} className={styles.credentialCard}>
              <span className={styles.credentialBadge}>
                <img src={image} alt={`${label} certification badge`} loading="lazy" />
              </span>
              <span className={styles.credentialLabel}>{label}</span>
            </StaggerItem>
          ))}
        </Stagger>

        <hr className={styles.credentialsDivider} />

        <div className={styles.trainingGrid}>
          <FadeIn className={styles.trainingCard}>
            <h3 className={styles.trainingTitle}>Specialized Training</h3>
            <ul className={styles.trainingList}>
              {specializedTraining.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1} className={styles.trainingCard}>
            <h3 className={styles.trainingTitle}>Academic Background</h3>
            <ul className={styles.trainingList}>
              {academicBackground.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* A note on who I work with + Ready to do the work CTA */}
      <Section className={styles.noteSection}>
        <div className={styles.noteGrid}>
          <FadeIn className={styles.noteLeft}>
            <h2 className={styles.noteTitle}>A note on who I work with</h2>
            <p className={styles.noteBody}>
              I am most effective when working with leaders who are prepared to be
              uncomfortable. Change is a rigorous process that demands honesty and a
              willingness to dismantle what no longer serves the mission. If you are
              ready to prioritize integrity over optics, we will do great work together.
            </p>
            <p className={styles.noteQuote}>Integrity is strategy.</p>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.ctaCard}>
            <h3 className={styles.ctaCardTitle}>Ready to do the work?</h3>
            <p className={styles.ctaCardBody}>
              Book an introductory consultation to discuss your organization&apos;s
              needs and how we can align your operations with your values.
            </p>
            <Button to="/contact" className={styles.ctaCardButton}>
              Schedule a call
            </Button>
          </FadeIn>
        </div>
      </Section>
    </PageTransition>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;
  const current = testimonials[index];

  const goTo = (next) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => goTo((index - 1 + total) % total);
  const next = () => goTo((index + 1) % total);

  return (
    <section className={styles.testimonialsSection} aria-label="Client testimonials">
      <FadeIn className={styles.testimonialsInner}>
        <div className={styles.testimonialsLabel}>
          <span className={styles.testimonialsLabelBar} aria-hidden="true" />
          <span className={styles.testimonialsLabelText}>From People I&apos;ve Led</span>
        </div>

        <button
          type="button"
          onClick={prev}
          className={`${styles.testimonialsNav} ${styles.testimonialsNavPrev}`}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className={`${styles.testimonialsNav} ${styles.testimonialsNavNext}`}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className={styles.testimonialsStage} aria-live="polite">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: 24 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 * direction }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={styles.testimonialFigure}
            >
              <blockquote className={styles.testimonialQuote}>
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              {current.author ? (
                <>
                  <hr className={styles.testimonialDivider} />
                  <figcaption className={styles.testimonialAuthor}>
                    — {current.author}
                  </figcaption>
                </>
              ) : (
                <hr className={styles.testimonialDivider} />
              )}
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className={styles.testimonialsDots} role="tablist" aria-label="Testimonial pagination">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`${styles.testimonialsDot} ${i === index ? styles.testimonialsDotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
