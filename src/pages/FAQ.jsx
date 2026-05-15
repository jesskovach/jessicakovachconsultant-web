import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Section from '@components/primitives/Section';
import styles from './FAQ.module.css';

const faqCategories = [
  {
    id: 'fit',
    label: 'Fit & Qualification',
    items: [
      {
        q: 'Who is this actually for?',
        a: "Leaders and organizations whose problems live in the structure, not the individual — first-time team leaders, founders without playbooks, HR leaders navigating growth, and mission-driven organizations whose systems can't keep up with their commitments. If you're looking for a motivational coach or a quick performance fix, this isn't the right fit.",
      },
      {
        q: 'Do you work with individuals, or only organizations?',
        a: 'Both. Individual leadership coaching engagements run separately from organizational development work. Individuals can also bring the methodology into their organizations as a second engagement.',
      },
      {
        q: 'What size organization do you work with?',
        a: 'Teams of 5 to 500. Most engagements are with organizations in the 25–250 range — large enough to have structural problems, small enough that a single engagement can move the needle.',
      },
      {
        q: 'What industries do you serve?',
        a: 'Technology, healthcare, nonprofits, mission-driven companies, and professional services firms. The methodology applies anywhere structure, values, and people converge.',
      },
      {
        q: 'Is this coaching, consulting, or therapy?',
        a: "Coaching and consulting. Not therapy. The work is practical — diagnosing systems, redesigning roles, building structures — not processing personal history. If therapy is what you need, I'll say so on our first call.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Engagement',
    items: [
      {
        q: 'What does this cost?',
        a: 'Self-paced courses start at $297. A six-month group cohort runs $3,500–$7,500 depending on access tier. Retainer advisory is $3,500–$5,500/month. A 16-week 1:1 leadership engagement runs $12,000–$28,000. Organizational development engagements range from $35,000 for a diagnostic to $350,000 for enterprise-scale redesign. Pricing is based on scope, timeline, and organizational complexity — not hours billed. See the Services page for the full breakdown.',
      },
      {
        q: 'How long is a typical engagement?',
        a: "Self-paced courses: work at your own pace. Group cohort: 6 months. Retainer advisory: monthly, 30 days' notice to end. 1:1 leadership engagement: 16 weeks. Organizational development: 4–12 months depending on scope. Speaking and facilitation: one-time or multi-session depending on format.",
      },
      {
        q: 'Do you offer a free consultation?',
        a: "Yes — a 30-minute fit conversation at no cost. I commit to honest feedback: either we move forward with engagement details, or I candidly tell you this isn't the right fit and point you to someone better suited.",
      },
      {
        q: 'How do payments work?',
        a: 'Monthly invoicing for coaching engagements, milestone-based for organizational work, and net-30 for all invoices. I accept ACH, wire, and credit card. Full payment terms are spelled out in the engagement letter before any work begins.',
      },
      {
        q: "Can I get a refund if it's not working?",
        a: "Every engagement includes a mid-point review where we assess whether the work is producing what you need. If it isn't, we either restructure the engagement or end it — with prorated refund for unused scope. I won't hold anyone in an engagement that isn't working.",
      },
    ],
  },
  {
    id: 'process',
    label: 'Process & Deliverables',
    items: [
      {
        q: 'What does a typical engagement look like?',
        a: "Week 1–2: Discovery — I interview key stakeholders and review your current structure, roles, and decision pathways. Week 3–4: Diagnosis — I map what I found, where strain concentrates, and what's producing it. Week 5 onward: Design and implementation — we build the structural changes together, one layer at a time.",
      },
      {
        q: 'What do I actually get?',
        a: "Tangible artifacts. For organizational work: a structural map, role definitions, decision-rights matrices, and accountability frameworks. For coaching: a personalized leadership practice document plus ongoing 1:1 work. Every engagement produces documents your team can use after I'm gone.",
      },
      {
        q: 'How involved do I need to be?',
        a: 'Organizational work requires 2–4 hours per week from senior sponsors for the first 6 weeks, then 1–2 hours per week. Coaching is a 60–90 minute session every 2–3 weeks plus async work. I structure engagements so they fit into real schedules, not on top of them.',
      },
      {
        q: 'Who does the work — you or a team?',
        a: 'I do. Kovach Consulting Group is me — no junior consultants, no handoffs. When an engagement requires additional expertise (legal, compliance, specialized skills), I bring in vetted specialists with your explicit agreement.',
      },
      {
        q: 'What happens after the engagement ends?',
        a: 'You keep everything we built. Light-touch quarterly check-ins are available to maintain the systems we designed. New engagements are an option when you scale, pivot, or hit the next structural inflection point.',
      },
    ],
  },
  {
    id: 'credibility',
    label: 'Credibility & Approach',
    items: [
      {
        q: 'Why should I trust you with this?',
        a: '20+ years in leadership roles — primarily in retail operations, team leadership, and navigating rapid growth, M&A transitions, and organizational change from inside the system. Certifications in Human Rights, Anti-Trafficking, Disability Rights, and Neurodiversity Coaching. The methodology draws on legal frameworks and organizational design theory — not just coaching practice. Full bio and background on the About page.',
      },
      {
        q: 'How are you different from other coaches or consultants?',
        a: `Most leadership coaches treat organizational problems as individual problems. Most organizational consultants treat them as process problems. I treat them as structural problems — because that's usually what they are. The diagnostic asks "what is the system producing?" before it asks "what should this person do differently?"`,
      },
      {
        q: "What's your theoretical grounding?",
        a: 'Universal human rights frameworks (UDHR, CRPD), organizational design theory, behavioral economics, and two decades of applied practice. The methodology is rigorous but not academic — everything is tested in the real work of leading organizations.',
      },
      {
        q: 'Do you have case studies I can review?',
        a: `KCG is a new consulting practice. Client case studies aren't public yet because I'm still building the initial engagements. What's public now: Examples from the work — structural diagnostics drawn from 20+ years of retail and operations leadership, and Research & Applied Work — certifications, writing, keynotes, and research that ground the methodology.

If transparency about where I am in building this practice matters to you — good. That's the work. Founding clients get preferential rates and direct access as the practice takes shape.`,
      },
      {
        q: 'What if our situation is too complicated?',
        a: "Complexity is the work. If your situation looks messy from the outside — competing values, misaligned incentives, political stakes — that's usually where structural clarity produces the most value. Come as you are.",
      },
    ],
  },
  {
    id: 'speaking',
    label: 'Speaking & Events',
    items: [
      {
        q: 'What keynotes do you offer?',
        a: `Signature talks include "Psychological Safety Is Not What You Think," "Leadership That Works for Different Minds," "Beyond Accommodation," and "Root Cause Analysis for Workplace Dysfunction." All can be adapted for 30-minute keynote, 90-minute workshop, or half-day deep-dive.`,
      },
      {
        q: "What's your speaking fee?",
        a: 'Keynotes range from $5,000–$25,000 depending on format, audience, travel, and licensing rights. Nonprofit and community rates available for aligned organizations. Contact me to discuss specifics.',
      },
      {
        q: 'Can you customize a talk for our event?',
        a: "Yes. Customization is included for engagements over $10,000 and typically involves a 30-minute call with the event organizer to match the talk to your audience's specific context.",
      },
    ],
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <PageTransition>
      {/* Hero */}
      <Section size="lg" className={styles.heroSection}>
        <FadeIn className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroLead}>
            Questions people ask before working with KCG — answered directly.
            If yours isn&apos;t here,{' '}
            <Link to="/contact" className={styles.heroLink}>
              ask me
            </Link>
            .
          </p>
        </FadeIn>
      </Section>

      {/* Categorized accordion */}
      <Section className={styles.faqSection}>
        <div className={styles.categoryList}>
          {faqCategories.map((category) => (
            <section key={category.id} className={styles.category}>
              <div className={styles.categoryLabel}>{category.label}</div>
              <div className={styles.items}>
                {category.items.map((item, i) => {
                  const id = `${category.id}-${i}`;
                  const isExpanded = expandedId === id;
                  return (
                    <div key={id} className={styles.item}>
                      <button
                        type="button"
                        className={styles.itemToggle}
                        aria-expanded={isExpanded}
                        onClick={() => toggle(id)}
                      >
                        <span className={styles.itemQuestion}>{item.q}</span>
                        <span
                          className={styles.itemIcon}
                          aria-hidden="true"
                        >
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ overflow: 'hidden' }}
                          >
                            {item.a.split(/\n\n+/).map((para, idx) => (
                              <p key={idx} className={styles.itemAnswer}>
                                {para}
                              </p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Section>

      {/* Ready to do the work — CTA */}
      <Section className={styles.readySection}>
        <FadeIn className={styles.readyCard}>
          <h2 className={styles.readyTitle}>Ready to do the work?</h2>
          <p className={styles.readyBody}>
            Whether you&apos;re navigating a leadership transition, a cultural
            shift, or a moment of organizational inflection — let&apos;s start
            with what&apos;s actually happening.
          </p>
          <Link to="/contact" className={styles.readyButton}>
            Schedule a Conversation
          </Link>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
