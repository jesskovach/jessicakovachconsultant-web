import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StaggerItem from '@components/motion/StaggerItem';
import Section from '@components/primitives/Section';
import styles from './WritingPortfolio.module.css';

const researchBook = {
  badge: 'Drafting 2026',
  title: 'The Naming Work: A Diagnostic Practice for Rights-Based Leadership.',
  body:
    'A book-length treatment of structural clarity as a leadership practice — how systems produce the outcomes people are blamed for, and what it takes to redesign the structure instead of the people. Draws on 20+ years of applied leadership experience, human rights frameworks, and organizational design theory.',
};

const submissionWaves = [
  {
    id: 'wave-1',
    label: 'Wave 1 • Jan 27, 2026',
    cards: [
      {
        kind: 'Master Overview',
        title: 'Systemic and Lawful Erosion of Rights',
        articles: 'UDHR Articles 1, 2, 7, 10, 21, 28',
        body:
          'Establishes the analytical and evidentiary framework for a series of communications to UN Special Rapporteurs. Documents systemic, lawful, and normalized processes through which democratic accountability and human rights protections have been weakened in the United States. Uses the UDHR as the evaluative baseline, treating harm as structural rather than content-based. UDHR Articles 19, 21, 12, 26, 28.',
      },
      {
        kind: 'Addendum I',
        title: 'Comparative Analysis of State Compliance',
        articles: 'UDHR Articles 8, 28, 30',
        body:
          'Introduces epistemic capture — the structural corruption of information environments — as a cross-cutting mechanism operating across complaints on democratic exception, information integrity, oligarchic capture, religious nationalism, and suppression of dissent. Identifies the 1987 repeal of the Fairness Doctrine as a critical inflection point, and establishes that dismantling truth obligations in media, failing to regulate algorithmic information systems, and permitting ideological or economic interests to dominate narrative production violates the right to education under UDHR Article 26.',
      },
      {
        kind: 'Complaint #1',
        title:
          'Systematic Undermining of Democratic Self-Determination Through Foreign Intervention',
        articles: 'UDHR Article 8',
        body:
          'Documents a sustained pattern of U.S. foreign intervention (Iran 1953, Guatemala 1954, Chile 1973, Nicaragua 1980s, Venezuela 2000s–present) drawn from declassified materials, congressional investigations, and academic scholarship. Argues these interventions produced institutional precedents that treat democratic norms as conditional, use legal and bureaucratic processes to obscure accountability, and manage public narratives to maintain legitimacy while democratic outcomes are overridden. UDHR Articles 1, 2, 21, 28.',
      },
    ],
  },
  {
    id: 'wave-2',
    label: 'Wave 2 • Feb 1, 2026',
    cards: [
      {
        kind: 'Complaint #2',
        title: 'Arbitrary Interference with Privacy & Communication',
        articles: 'UDHR Article 12',
        body:
          'Alleges the United States has, through deliberate deregulation of broadcast media and sustained failure to regulate dominant digital platforms, dismantled public-interest safeguards essential to information integrity and democratic participation. Traces the removal of truth obligations from broadcast media and the rise of unregulated algorithmically mediated content. UDHR Articles 19, 21, 12, 26, 28.',
      },
      {
        kind: 'Complaint #7',
        title:
          'Epistemic Capture: The Systematic Undermining of the Right to Education',
        articles: 'UDHR Article 19',
        body:
          "Alleges the United States has systematically undermined the public's right to education, informed participation, and democratic self-determination by dismantling truth obligations in the media, failing to regulate algorithmically mediated information systems, and tolerating narrative manipulation driven by political and economic interests. Argues the resulting epistemic collapse constitutes a violation of the right to education — not through denial of schooling, but through corruption of the conditions under which learning, understanding, and democratic judgment occur, with particular harm to children and young people. UDHR Articles 26, 19, 21, 12, 28, 1–2.",
      },
    ],
  },
  {
    id: 'wave-3-4',
    label: 'Waves 3 & 4 • Feb 14 – 21, 2026',
    cards: [
      {
        kind: 'Complaint #4',
        title:
          'Judicial Insulation of Power, Procedural Failure, and the Collapse of the Right to an Effective Remedy',
        articles: 'UDHR Article 20',
        body:
          'Alleges the United States has, through judicial doctrine, procedural design, and institutional practice, systematically insulated state and private power from accountability, resulting in the effective collapse of the right to an effective remedy. Combined with procedural delays, jurisdictional dismissals, and asymmetric enforcement — cumulatively preventing adjudication on the merits in cases involving state violence, corporate misconduct, or systemic discrimination. Argues remedy now exists in form but not in function. UDHR Articles 7, 8, 21, 28.',
      },
      {
        kind: 'Complaint #3',
        title:
          'Oligarchic Capture of Democratic Governance and Economic Rights Erosion',
        articles: 'UDHR Articles 1, 7, 22, 25, 36, 28',
        body:
          'Alleges that since the 1970s, the United States has progressively aligned governance structures with the interests of concentrated private wealth, producing systemic erosion of economic and social rights, democratic accountability, and equal protection under the law. Argues this oligarchic capture has been sustained through epistemic manipulation — distortion of public understanding regarding inequality, austerity, deregulation, and corruption — which enables economic coercion while suppressing informed resistance. Frames the combined effect of economic policy, misinformation, and regulatory design as producing structural deprivation and intergenerational harm.',
      },
      {
        kind: 'Complaint #5',
        title:
          'State-Enabled Religious Nationalism, Epistemic Capture, and Targeted Dehumanization',
        articles: 'UDHR Articles 22, 23, 25',
        body:
          "Alleges the United States has increasingly enabled the fusion of state power with a dominant religious-nationalist ideology, producing systemic discrimination, dehumanization, and heightened risk of violence against LGBTQIA+ people, immigrants, women, and religious minorities. Documents the pathway by which religious belief is reframed as entitlement, encoded into law and policy, amplified through deregulated media and algorithms, and reinforced through educational degradation — with the state's failure to counter or regulate these dynamics allowing systemic harm.",
      },
      {
        kind: 'Complaint #6',
        title:
          'Suppression of Dissent, Criminalization of Assembly, and the Constriction of Democratic Participation',
        recipient: 'Special Rapporteur on peaceful assembly and association',
        cc: 'Freedom of opinion and expression',
        articles: 'UDHR Articles 19, 20, 21, 12, 28',
        body:
          'Alleges that through law, policy, policing practices, and surveillance, the United States has increasingly constrained the practical exercise of peaceful assembly, association, and political dissent. Documents expanded protest policing and criminalization, selective enforcement that treats marginalized organizers more harshly than ideologically aligned gatherings, and surveillance practices that collect and retain data on organizers beyond any criminal-conduct justification. Argues these practices produce a chilling effect that disproportionately impacts marginalized communities, political organizers, journalists, and human rights defenders. UDHR Articles 19, 20, 21, 12, 28.',
      },
    ],
  },
];

const certifications = [
  {
    title: 'Certified Human Rights Consultant',
    issuer: 'US Institute of Diplomacy & Human Rights • 2023',
    body:
      'Trained in the international human rights framework — Universal Declaration of Human Rights, UN treaty bodies, state obligations, and the rights-based approach to organizational and institutional accountability.',
  },
  {
    title: 'Certified Anti-Trafficking Consultant',
    issuer: 'US Institute of Diplomacy & Human Rights • 2023',
    body:
      'Trained in anti-trafficking policy, protection frameworks, and the structural conditions that produce exploitation. Informs the ethical operations & compliance service line.',
  },
  {
    title: 'Certified Disability Rights & Accessibility Consultant',
    issuer: 'US Institute of Diplomacy & Human Rights • 2023',
    body:
      'Trained in the Convention on the Rights of Persons with Disabilities (CRPD) and the broader model of disability. Informs how KCG thinks about organizational access, neurodiversity, and structural accommodation.',
  },
];

const keynotes = [
  {
    variant: 'lg',
    kind: 'Keynote & Workshop',
    title: 'Psychological Safety is Not What You Think',
    body:
      'When measurable performance and impression-based feedback diverge, what is the organization actually optimizing for? A redefinition of psychological safety as a structural condition, not a cultural vibe.',
  },
  {
    variant: 'md',
    kind: '3-Module Course',
    title: 'Structural Clarity — A Rights-Based Leadership Program',
    body:
      'A comprehensive curriculum teaching structural vs. personal diagnostic, rights-based practice, and organizational intervention design.',
  },
  {
    variant: 'md',
    kind: 'Keynote',
    title: 'When Systems Confuse Perception',
    body:
      'On the diagnostic difference between what organizations measure and what they actually reward — and what that gap costs the people operating inside it.',
  },
  {
    variant: 'img',
    kind: 'In Development',
    title: 'Beyond Accommodation: Systemic Change',
    body:
      'Why accommodation is a patch and universal design is the system — and what that distinction means for organizational stewardship.',
  },
  {
    variant: 'full',
    kind: 'Keynote',
    status: 'In Development',
    title: 'Leadership That Works for Different Minds',
    body:
      "Neurodiversity, cognitive load, and what it takes to design leadership structures that don't require a particular mind to succeed.",
  },
];

const academicPapers = [
  {
    kind: 'Business plan',
    subkind: 'OL 320 · Organizational Leadership',
    title:
      'Kovach Consulting Group — Opportunity Analysis for a Leadership-Sense Making Consultancy',
    body:
      'The original business case for KCG. Identifies the core problem: leaders overwhelmed by competing demands (performance outcomes, continuous change, employee well-being, cultural dynamics). Lacks frameworks for interpretation and meaning-making.',
  },
  {
    kind: 'OL 330 · Grant Writing',
    subkind: 'Grant proposal · NCCN Strategic Innovation Fund',
    title: 'Regenerative Leadership & Community Food Equity Initiative',
    body:
      'Comprehensive grant proposal for a multi-component Community Food Equity Initiative. Addresses interconnected challenges of food insecurity, limited leadership development, and social fragmentation disproportionately affecting low-income immigrant, LGBTQ+, BIPOC, and disabled residents.',
  },
  {
    kind: 'OL 322 · Managing Organizational Change',
    subkind: 'Change management analysis',
    title:
      'Analyzing Leadership & Organizational Change at Twitter Under Elon Musk',
    body:
      "Change management analysis of the $44B Twitter acquisition using Kotter's 8-Step Model, Lewin's Change Theory, and Population Ecology Theory. Demonstrates how misapplication of change management principles, combined with disruptive leadership style, undermines organizational stability.",
  },
  {
    kind: 'OL 324 · Managing Quality',
    subkind: 'Operational case analysis',
    title:
      'When Just-in-Time Breaks: Retail Supply Chain Resilience During COVID-19',
    body:
      "Analysis of retail supply chain disruption during COVID-19, examining how reliance on just-in-time logistics exposed vulnerability to global shocks. Documents factory shutdowns, transportation bottlenecks, and labor shortages, then connects upstream operational failure to retail-level customer impact during demand surges. Examines JIT's benefits against its risks when supply-chain assumptions break down — offering insights on the resilience-versus-efficiency trade-off in retail operations.",
  },
  {
    kind: 'BUS 307 · Business Law for Entrepreneurs',
    subkind: 'Legal memorandum',
    title:
      'IPO Readiness Under Active Litigation: Title VII, SOX, and Fiduciary Risk in a Closely-Held Business',
    body:
      'Legal memorandum for a growing LLC preparing for an IPO under active litigation exposure. Identifies three interconnected legal issues: (1) a Title VII sex-discrimination claim requiring settlement and remediation before public disclosure, (2) securities regulation requirements including SOX compliance and Form S-1 filing, and (3) fiduciary duty risks inherent in transitioning from closely-held LLC to publicly held corporation.',
  },
  {
    kind: 'ENG 123 · English Composition II',
    subkind: 'Persuasive research paper',
    title: 'The Case for Servant Leadership Over Authoritarian Leadership',
    body:
      "Scholarly argument that servant leadership outperforms authoritarian approaches across engagement, creativity, and organizational outcomes. Draws on research (Fatimaa; Obi; Robertson) connecting servant leadership to modern workforce values. Foundational to KCG's position that integrity-based leadership is strategy, not sentiment.",
  },
  {
    kind: 'HRM 200 · Human Resource Functions',
    subkind: 'Comparative SWOT analysis',
    title: 'HR Technology SWOT: Interview Stream & Gender Decoder',
    body:
      'Dual SWOT analyses of HR technology platforms evaluated through the lens of organizational strategy and inclusive hiring. Interview Stream (video interview platform) assessed on operational benefits and data security risks. Gender Decoder (bias detection tool for job postings) evaluated for strengths and limitations in addressing structural bias.',
  },
];

const substackPosts = [
  {
    kind: 'Essay',
    date: 'Recent',
    title: 'The Collapse Was Tokenized',
    body:
      'On how institutional decline gets repackaged as cultural symbolism — and what gets lost when symptoms become brand identity.',
    href: '#',
  },
  {
    kind: 'Essay',
    date: 'Recent',
    title: 'Re-wilding Belonging',
    body:
      "Belonging isn't a culture initiative. It's a structural condition we have to design for — and most organizations have unlearned how.",
    href: '#',
  },
];

const writingThemes = [
  {
    title: 'Leadership under pressure',
    body:
      "What happens to decision-making, communication, and accountability when the stakes are high and the structure isn't holding.",
  },
  {
    title: 'Organizational systems',
    body:
      'Why capable people fail in broken systems, and what it takes to fix the structure rather than blame the person.',
  },
  {
    title: 'Ethical decision-making',
    body:
      "How leaders navigate the gap between stated values and actual practice — and what it costs when they don't.",
  },
  {
    title: 'Institutional accountability',
    body:
      'Who gets held responsible, how accountability gets distributed or avoided, and what transparent leadership looks like in practice.',
  },
  {
    title: 'Structures that protect people',
    body:
      'Compliance, operations, and design choices that make organizations safer and more sustainable for everyone inside them.',
  },
];

const speakingTopics = [
  'Leadership under pressure and in transition',
  'Sense-making and organizational diagnosis',
  'Ethical decision-making and institutional accountability',
  'Building equitable, transparent systems',
  'Neurodivergent and LGBTQIA+ leadership in institutional contexts',
];

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'applied', label: 'Applied Work' },
  { id: 'keynotes', label: 'Keynotes' },
  { id: 'academic', label: 'Academic' },
  { id: 'substack', label: 'Substack' },
];

const TAB_LABEL = Object.fromEntries(TABS.map((t) => [t.id, t.label]));

const searchSuggestions = [
  'Human rights',
  'Leadership',
  'Psychological safety',
  'Twitter',
  'Disability',
  'Servant leadership',
  'Substack',
];

function getAllItems() {
  return [
    ...writingThemes.map((t) => ({ ...t, _tab: 'overview' })),
    ...speakingTopics.map((t) => ({ title: t, _tab: 'overview' })),
    { ...researchBook, _tab: 'applied' },
    ...submissionWaves.flatMap((w) =>
      w.cards.map((c) => ({ ...c, _tab: 'applied' })),
    ),
    ...certifications.map((c) => ({ ...c, _tab: 'applied' })),
    ...keynotes.map((k) => ({ ...k, _tab: 'keynotes' })),
    ...academicPapers.map((p) => ({ ...p, _tab: 'academic' })),
    ...substackPosts.map((p) => ({ ...p, _tab: 'substack' })),
  ];
}


function matchesQuery(item, q) {
  if (!q) return true;
  const fields = [
    item.title,
    item.body,
    item.kind,
    item.subkind,
    item.status,
    item.articles,
    item.recipient,
    item.cc,
    item.issuer,
    item.date,
  ].filter(Boolean);
  return fields.some((f) => f.toLowerCase().includes(q));
}

function filterItems(items, q) {
  if (!q) return items;
  return items.filter((item) => matchesQuery(item, q));
}

function countAppliedMatches(q) {
  const bookCount = matchesQuery(researchBook, q) ? 1 : 0;
  const waveCardCount = submissionWaves.reduce(
    (sum, w) => sum + filterItems(w.cards, q).length,
    0,
  );
  const certCount = filterItems(certifications, q).length;
  return bookCount + waveCardCount + certCount;
}

function SearchIcon() {
  return (
    <svg
      className={styles.searchIcon}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="11"
        y1="11"
        x2="14.5"
        y2="14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmptyState({ query, scope }) {
  return (
    <Section className={styles.essaysSection}>
      <FadeIn className={styles.empty}>
        <span className={styles.emptyEyebrow}>No matches</span>
        <p className={styles.emptyTitle}>
          Nothing in {scope} matches{' '}
          <span className={styles.emptyQuery}>&ldquo;{query}&rdquo;</span>
        </p>
        <p className={styles.emptyBody}>
          Try a different search term, or switch to another section using the
          tabs above — match counts show how many results are in each.
        </p>
      </FadeIn>
    </Section>
  );
}

function OverviewPanel({ query }) {
  const filteredThemes = filterItems(writingThemes, query);
  const filteredTopics = query
    ? speakingTopics.filter((t) => t.toLowerCase().includes(query))
    : speakingTopics;

  if (query && filteredThemes.length === 0 && filteredTopics.length === 0) {
    return <EmptyState query={query} scope="Overview" />;
  }

  return (
    <>
      {/* Intro — editorial header */}
      <Section className={styles.overviewIntroSection}>
        <FadeIn className={styles.overviewIntro}>
          <span className={styles.overviewEyebrow}>Overview</span>
          <h2 className={styles.overviewTitle}>
            Where the work goes public.
          </h2>
          <p className={styles.overviewKicker}>
            Writing, speaking, and frameworks for leadership under pressure.
          </p>
          <p className={styles.overviewBody}>
            I write and speak about leadership under pressure, organizational
            systems, ethical decision-making, and what it takes to build
            structures that actually protect the people inside them. The
            through line is sense-making — naming what&apos;s happening before
            prescribing what should change.
          </p>
          <a
            href="#"
            className={styles.overviewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read essays on Substack
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </Section>

      {/* What I cover — numbered editorial rows */}
      {filteredThemes.length > 0 && (
        <Section className={styles.themesSection}>
          <FadeIn className={styles.themesHeader}>
            <span className={styles.themesEyebrow}>Series</span>
            <h2 className={styles.themesTitle}>What I cover</h2>
            <p className={styles.themesLead}>
              Five threads the writing keeps returning to.
            </p>
          </FadeIn>

          <Stagger className={styles.themesList}>
            {filteredThemes.map((theme, i) => (
              <StaggerItem
                key={theme.title}
                as="article"
                className={styles.themeRow}
              >
                <span className={styles.themeNumber}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={styles.themeContent}>
                  <h3 className={styles.themeTitle}>{theme.title}</h3>
                  <p className={styles.themeBody}>{theme.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      {/* Speaking & Facilitation — two-column */}
      {filteredTopics.length > 0 && (
        <Section className={styles.speakingSection}>
          <div className={styles.speakingGrid}>
            <FadeIn className={styles.speakingIntro}>
              <span className={styles.speakingEyebrow}>
                For hosts &amp; programs
              </span>
              <h2 className={styles.speakingTitle}>
                Speaking &amp; Facilitation
              </h2>
              <p className={styles.speakingSubtitle}>
                Same themes, built around your room.
              </p>
              <p className={styles.speakingBody}>
                I speak at leadership convenings, organizational offsites, and
                public forums on the same themes the writing covers — with an
                emphasis on practical application over abstract frameworks.
                Talks and workshops are designed around your audience&apos;s
                specific context. I don&apos;t deliver the same keynote twice.
              </p>
              <Link to="/contact" className={styles.speakingButton}>
                Inquire about speaking
                <span aria-hidden="true">→</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className={styles.speakingTopicsBox}>
              <span className={styles.speakingTopicsLabel}>Topics</span>
              <ul className={styles.speakingList}>
                {filteredTopics.map((topic) => (
                  <li key={topic} className={styles.speakingItem}>
                    <span
                      className={styles.speakingItemMark}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Section>
      )}
    </>
  );
}

function AppliedPanel({ query }) {
  const showBook = matchesQuery(researchBook, query);
  const filteredWaves = submissionWaves
    .map((w) => ({ ...w, cards: filterItems(w.cards, query) }))
    .filter((w) => w.cards.length > 0);
  const filteredCerts = filterItems(certifications, query);

  const totalMatches =
    (showBook ? 1 : 0) +
    filteredWaves.reduce((sum, w) => sum + w.cards.length, 0) +
    filteredCerts.length;

  if (query && totalMatches === 0) {
    return <EmptyState query={query} scope="Applied Work" />;
  }

  return (
    <>
      {showBook && (
        <Section className={styles.researchSection}>
          <div className={styles.research}>
            <FadeIn className={styles.researchHeader}>
              <span className={styles.researchEyebrow}>Current Research</span>
              <h2 className={styles.researchTitle}>
                Research &amp; Book in Progress
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className={styles.bookCard}>
              <span className={styles.bookBadge}>{researchBook.badge}</span>
              <h3 className={styles.bookTitle}>{researchBook.title}</h3>
              <p className={styles.bookBody}>{researchBook.body}</p>
            </FadeIn>
          </div>
        </Section>
      )}

      {filteredWaves.length > 0 && (
        <Section className={styles.advocacySection}>
          <FadeIn className={styles.advocacyHeader}>
            <span className={styles.eyebrow}>Accountability Frameworks</span>
            <h2 className={styles.advocacyTitle}>
              Human Rights Advocacy · UN Special Procedures Submissions
            </h2>
            <p className={styles.advocacyLead}>
              Formal written communications filed with the United Nations Human
              Rights Council&apos;s Special Procedures mandate holders —
              Special Rapporteurs and Independent Experts — documenting alleged
              human rights violations by the United States.
            </p>
            <p className={styles.advocacyMeta}>
              Submitted in coordinated waves between January and March 2026.
              All sources are public. The Universal Declaration of Human Rights
              (UDHR) is used as the evaluative baseline.
            </p>
          </FadeIn>

          <div className={styles.wavesGrid}>
            {filteredWaves.map((wave) => (
              <div key={wave.id} className={styles.waveColumn}>
                <header className={styles.waveHeader}>
                  <span className={styles.waveLabel}>{wave.label}</span>
                  <hr className={styles.waveDivider} />
                </header>
                <Stagger className={styles.waveCards}>
                  {wave.cards.map((card) => (
                    <StaggerItem
                      key={card.title}
                      as="article"
                      className={styles.complaintCard}
                    >
                      <span className={styles.complaintKind}>{card.kind}</span>
                      <h3 className={styles.complaintTitle}>{card.title}</h3>
                      {(card.recipient || card.cc) && (
                        <div className={styles.complaintRecipient}>
                          {card.recipient && <span>{card.recipient}</span>}
                          {card.cc && <span>cc: {card.cc}</span>}
                        </div>
                      )}
                      <span className={styles.complaintArticles}>
                        {card.articles}
                      </span>
                      <p className={styles.complaintBody}>{card.body}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>

          {!query && (
            <FadeIn className={styles.advocacyCallout}>
              <p className={styles.advocacyCalloutText}>
                All Special Procedures submissions document the gap between
                stated democratic values and realized human rights outcomes,
                providing a roadmap for structural redesign.
              </p>
            </FadeIn>
          )}
        </Section>
      )}

      {filteredCerts.length > 0 && (
        <Section className={styles.certsSection}>
          <FadeIn className={styles.certsHeader}>
            <h2 className={styles.certsTitle}>
              Certifications &amp; Formal Training
            </h2>
            <span className={styles.certsRule} aria-hidden="true" />
          </FadeIn>

          <Stagger className={styles.certsGrid}>
            {filteredCerts.map((cert) => (
              <StaggerItem key={cert.title} className={styles.certCard}>
                <span className={styles.certEyebrow}>
                  Professional Credential
                </span>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certBody}>{cert.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}
    </>
  );
}

function KeynotesPanel({ query }) {
  const filtered = filterItems(keynotes, query);

  if (query && filtered.length === 0) {
    return <EmptyState query={query} scope="Keynotes" />;
  }

  const variantClassMap = {
    lg: styles.keynoteCardLg,
    md: styles.keynoteCardMd,
    img: styles.keynoteCardImg,
    full: styles.keynoteCardFull,
  };

  return (
    <Section className={styles.keynotesSection}>
      <FadeIn className={styles.keynotesHeader}>
        <h2 className={styles.keynotesTitle}>
          Signature Keynotes &amp; Facilitator Guides
        </h2>
        <p className={styles.keynotesLead}>
          Frameworks for organizational intervention and professional
          development, delivered to global audiences.
        </p>
      </FadeIn>

      <Stagger className={styles.keynotesGrid}>
        {filtered.map((k) => {
          const eyebrow = (
            <span className={styles.keynoteEyebrow}>
              <span className={styles.keynoteEyebrowKind}>{k.kind}</span>
              {k.status && (
                <>
                  <span className={styles.keynoteEyebrowSep}>/</span>
                  <span className={styles.keynoteEyebrowStatus}>
                    {k.status}
                  </span>
                </>
              )}
            </span>
          );

          const content = (
            <>
              {eyebrow}
              <h3 className={styles.keynoteTitle}>{k.title}</h3>
              <p className={styles.keynoteBody}>{k.body}</p>
            </>
          );

          return (
            <StaggerItem
              key={k.title}
              as="article"
              className={`${styles.keynoteCard} ${variantClassMap[k.variant]}`}
            >
              {k.variant === 'img' ? (
                <>
                  <div className={styles.keynoteImage} aria-hidden="true" />
                  <div className={styles.keynoteImageCopy}>{content}</div>
                </>
              ) : (
                content
              )}
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function AcademicPanel({ query }) {
  const filtered = filterItems(academicPapers, query);

  if (query && filtered.length === 0) {
    return <EmptyState query={query} scope="Academic" />;
  }

  return (
    <Section className={styles.academicSection}>
      <FadeIn className={styles.academicHeader}>
        <h2 className={styles.academicTitle}>
          Academic Research &amp; Case Analysis
        </h2>
        <p className={styles.academicLead}>
          Selected graduate coursework from Southern New Hampshire University.
          Each paper applied the structural diagnostic to a real organization,
          industry, or policy question.
        </p>
      </FadeIn>

      <Stagger className={styles.academicList}>
        {filtered.map((paper) => (
          <StaggerItem
            key={paper.title}
            as="article"
            className={styles.academicItem}
          >
            <div className={styles.academicItemMeta}>
              <span className={styles.academicItemKind}>{paper.kind}</span>
              <span className={styles.academicItemSubkind}>
                {paper.subkind}
              </span>
            </div>
            <div className={styles.academicItemContent}>
              <h3 className={styles.academicItemTitle}>{paper.title}</h3>
              <p className={styles.academicItemBody}>{paper.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function SubstackPanel({ query }) {
  const filtered = filterItems(substackPosts, query);
  const hubMatches = !query; // The hub card itself is shown when no search active

  if (query && filtered.length === 0) {
    return <EmptyState query={query} scope="Substack" />;
  }

  return (
    <Section className={styles.substackSection}>
      {hubMatches && (
        <FadeIn className={styles.substackHero}>
          <div>
            <span className={styles.substackHeroEyebrow}>
              Substack · Ongoing
            </span>
            <h2 className={styles.substackHeroTitle}>Not Here to Whisper</h2>
            <p className={styles.substackHeroBody}>
              Essay-length writing on institutional accountability, political
              systems, organizational dysfunction, and what structural clarity
              looks like when applied to the public sphere. More personal in
              voice, more political in subject.
            </p>
          </div>
          <div className={styles.substackHeroAction}>
            <a
              href="#"
              className={styles.substackButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack
              <span aria-hidden="true">→</span>
            </a>
            <span className={styles.substackMeta}>New essays weekly</span>
          </div>
        </FadeIn>
      )}

      <Stagger className={styles.essaysGrid}>
        {filtered.map((post) => (
          <StaggerItem
            key={post.title}
            as="a"
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.postCard}
          >
            <div className={styles.postMeta}>
              <span className={styles.postKind}>{post.kind}</span>
              <span className={styles.postMetaSep}>·</span>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postBody}>{post.body}</p>
            <span className={styles.postLink}>
              Read essay <span aria-hidden="true">→</span>
            </span>
          </StaggerItem>
        ))}
      </Stagger>

      {hubMatches && (
        <p className={styles.substackFooter}>
          Subscribe for new essays as they publish.{' '}
          <a
            href="#"
            className={styles.substackFooterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Substack →
          </a>
        </p>
      )}
    </Section>
  );
}

export default function WritingPortfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const overviewCount =
    filterItems(writingThemes, normalizedQuery).length +
    (normalizedQuery
      ? speakingTopics.filter((t) => t.toLowerCase().includes(normalizedQuery))
          .length
      : speakingTopics.length);

  const counts = {
    overview: overviewCount,
    applied: countAppliedMatches(normalizedQuery),
    keynotes: filterItems(keynotes, normalizedQuery).length,
    academic: filterItems(academicPapers, normalizedQuery).length,
    substack: filterItems(substackPosts, normalizedQuery).length,
  };

  const autocomplete = normalizedQuery
    ? filterItems(getAllItems(), normalizedQuery).slice(0, 6)
    : [];

  const handleSuggestionClick = (text) => {
    setQuery(text);
    setSearchOpen(false);
  };

  const handleAutocompleteClick = (item) => {
    setActiveTab(item._tab);
    setSearchOpen(false);
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setShowBackToTop(scrollPosition >= pageHeight - 500);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      {/* Hero — Writing Portfolio */}
      <Section size="lg" className={styles.heroSection}>
        <div className={styles.hero}>
          <FadeIn className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>Selected Work</h1>
            <p className={styles.heroBody}>
              Applied work, public writing, and frameworks for leadership
              under pressure. The methodology — structural clarity,
              rights-based leadership, the diagnostic that separates personal
              from structural — is grounded in two decades of applied
              leadership experience, academic research, and human rights
              frameworks.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Tabs + Search */}
      <Section className={styles.tabsSection}>
        <div className={styles.tabsRow}>
          <nav
            role="tablist"
            className={styles.tabs}
            aria-label="Portfolio sections"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`.trim()}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className={styles.tabCount}>{counts[tab.id]}</span>
              </button>
            ))}
          </nav>

          <div className={styles.searchWrap}>
            <SearchIcon />
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search the portfolio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
              aria-label="Search portfolio"
            />
            {query && (
              <button
                type="button"
                className={styles.searchClear}
                aria-label="Clear search"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setQuery('')}
              >
                ×
              </button>
            )}

            {searchOpen && (
              <div className={styles.searchDropdown} role="listbox">
                {!normalizedQuery ? (
                  <>
                    <span className={styles.searchDropdownLabel}>
                      Try searching
                    </span>
                    <div className={styles.searchChips}>
                      {searchSuggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={styles.searchChip}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleSuggestionClick(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </>
                ) : autocomplete.length > 0 ? (
                  <>
                    <span className={styles.searchDropdownLabel}>
                      {autocomplete.length} match
                      {autocomplete.length === 1 ? '' : 'es'}
                    </span>
                    {autocomplete.map((item) => (
                      <button
                        key={`${item._tab}-${item.title}`}
                        type="button"
                        role="option"
                        className={styles.searchSuggestion}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleAutocompleteClick(item)}
                      >
                        <span className={styles.searchSuggestionTitle}>
                          {item.title}
                        </span>
                        <span className={styles.searchSuggestionTab}>
                          {TAB_LABEL[item._tab]}
                        </span>
                      </button>
                    ))}
                  </>
                ) : (
                  <p className={styles.searchEmpty}>
                    No matches across any section.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      <div
        key={`${activeTab}-${normalizedQuery}`}
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === 'overview' && (
          <OverviewPanel query={normalizedQuery} />
        )}
        {activeTab === 'applied' && <AppliedPanel query={normalizedQuery} />}
        {activeTab === 'keynotes' && (
          <KeynotesPanel query={normalizedQuery} />
        )}
        {activeTab === 'academic' && (
          <AcademicPanel query={normalizedQuery} />
        )}
        {activeTab === 'substack' && (
          <SubstackPanel query={normalizedQuery} />
        )}
      </div>

      {/* Ready to do the work? — CTA */}
      <Section className={styles.readySection}>
        <FadeIn className={styles.readyInner}>
          <h2 className={styles.readyTitle}>Ready to do the work?</h2>
          <p className={styles.readyBody}>
            Whether you&apos;re navigating a leadership transition, a cultural
            shift, or a moment of organizational reflection — let&apos;s start
            with what&apos;s actually happening.
          </p>
          <Link to="/contact" className={styles.readyButton}>
            Schedule a Conversation
          </Link>
        </FadeIn>
      </Section>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className={styles.backToTop}
            onClick={handleBackToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.backToTopArrow} aria-hidden="true">
              ↑
            </span>
            Back to top
          </motion.button>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
