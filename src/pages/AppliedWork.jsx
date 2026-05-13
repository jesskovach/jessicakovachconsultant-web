import { Link } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StaggerItem from '@components/motion/StaggerItem';
import Section from '@components/primitives/Section';
import styles from './AppliedWork.module.css';

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

export default function AppliedWork() {
  return (
    <PageTransition>
      {/* Hero — Research & Applied Work */}
      <Section size="lg" className={styles.heroSection}>
        <div className={styles.hero}>
          <FadeIn className={styles.heroCopy}>
            <span className={styles.eyebrow}>Portfolio of Impact</span>
            <h1 className={styles.heroTitle}>Research &amp; Applied Work</h1>
            <p className={styles.heroBody}>
              KCG is a new consulting practice. The methodology behind the work —
              structural clarity, rights-based leadership, the diagnostic that
              separates personal from structural — is grounded in two decades of
              applied leadership experience, academic case study work, and ongoing
              research into organizational design and human rights frameworks.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.heroQuote}>
            <p className={styles.heroQuoteText}>
              This page collects the public-facing work. The private work —
              engagements, founding-client case studies in development research —
              is discussed during KCG conversations.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Research & Book in Progress */}
      <Section className={styles.researchSection}>
        <div className={styles.research}>
          <FadeIn className={styles.researchHeader}>
            <span className={styles.researchEyebrow}>Current Research</span>
            <h2 className={styles.researchTitle}>
              Research &amp; Book in Progress
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.bookCard}>
            <span className={styles.bookBadge}>Drafting 2026</span>
            <h3 className={styles.bookTitle}>Book: Working Title TBD</h3>
            <p className={styles.bookBody}>
              A book-length treatment of structural clarity as a leadership practice — how systems produce the outcomes people are blamed for, and what it takes to redesign the structure instead of the people. Draws on 20+ years of applied leadership experience, human rights frameworks, and organizational design theory.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Human Rights Advocacy — UN Special Procedures Submissions */}
      <Section className={styles.advocacySection}>
        <FadeIn className={styles.advocacyHeader}>
          <span className={styles.eyebrow}>Accountability Frameworks</span>
          <h2 className={styles.advocacyTitle}>
            Human Rights Advocacy · UN Special Procedures Submissions
          </h2>
          <p className={styles.advocacyLead}>
            Formal written communications filed with the United Nations Human
            Rights Council&apos;s Special Procedures mandate holders — Special
            Rapporteurs and Independent Experts — documenting alleged human
            rights violations by the United States.
          </p>
          <p className={styles.advocacyMeta}>
            Submitted in coordinated waves between January and March 2026. All
            sources are public. The Universal Declaration of Human Rights (UDHR)
            is used as the evaluative baseline.
          </p>
        </FadeIn>

        <div className={styles.wavesGrid}>
          {submissionWaves.map((wave) => (
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

        <FadeIn className={styles.advocacyCallout}>
          <p className={styles.advocacyCalloutText}>
            All Special Procedures submissions document the gap between
            stated democratic values and realized human rights outcomes,
            providing a roadmap for structural redesign.
          </p>
        </FadeIn>
      </Section>

      {/* Certifications & Formal Training */}
      <Section className={styles.certsSection}>
        <FadeIn className={styles.certsHeader}>
          <h2 className={styles.certsTitle}>Certifications &amp; Formal Training</h2>
          <span className={styles.certsRule} aria-hidden="true" />
        </FadeIn>

        <Stagger className={styles.certsGrid}>
          {[
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
          ].map((cert) => (
            <StaggerItem key={cert.title} className={styles.certCard}>
              <span className={styles.certEyebrow}>Professional Credential</span>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>
              <p className={styles.certBody}>{cert.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Public Writing & Thought Leadership */}
      <Section className={styles.writingSection}>
        <div className={styles.writingGrid}>
          <FadeIn className={styles.writingHeader}>
            <h2 className={styles.writingTitle}>
              Public Writing &amp; Thought Leadership
            </h2>
            <p className={styles.writingLead}>
              Essays and systemic analyses exploring organizational
              dysfunction, institutional accountability, and structural
              clarity in the public sphere.
            </p>
          </FadeIn>

          <Stagger className={styles.writingList}>
            {[
              {
                kind: 'Substack',
                status: 'Ongoing',
                title: 'Not Here to Whisper',
                body:
                  "Essay-length writing on institutional accountability, political systems, organizational dysfunction, and what structural clarity looks like when applied to the public sphere. Recent topics include 'The Collapse Was Tokenized' and 'Re-wilding Belonging'.",
                link: { href: '#', label: 'Read on Substack' },
              },
              {
                kind: 'White Paper',
                status: 'Policy Analysis',
                title:
                  "Defending America's Core Values Against Unconstitutional Attacks",
                body:
                  'An analysis of constitutional frameworks, executive overreach, and the structural conditions required for institutional accountability in governance systems.',
              },
              {
                kind: 'Keynote & Workbook',
                status: 'In Development',
                title: 'Reclaiming the Truth',
                body:
                  'Keynote and companion workbook on institutional truth-telling, accountability, and the structural cost of organizational dishonesty.',
              },
            ].map((item) => (
              <StaggerItem
                key={item.title}
                as="article"
                className={styles.writingItem}
              >
                <div className={styles.writingItemMeta}>
                  <span className={styles.writingItemKind}>{item.kind}</span>
                  <span className={styles.writingItemMetaSep}>/</span>
                  <span className={styles.writingItemStatus}>
                    {item.status}
                  </span>
                </div>
                <h3 className={styles.writingItemTitle}>{item.title}</h3>
                <p className={styles.writingItemBody}>{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    className={styles.writingItemLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link.label}
                    <span
                      aria-hidden="true"
                      className={styles.writingItemLinkArrow}
                    >
                      →
                    </span>
                  </a>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Signature Keynotes & Facilitator Guides */}
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
          <StaggerItem
            as="article"
            className={`${styles.keynoteCard} ${styles.keynoteCardLg}`}
          >
            <span className={styles.keynoteEyebrow}>
              <span className={styles.keynoteEyebrowKind}>
                Keynote &amp; Workshop
              </span>
            </span>
            <h3 className={styles.keynoteTitle}>
              Psychological Safety is Not What You Think
            </h3>
            <p className={styles.keynoteBody}>
              When measurable performance and impression-based feedback
              diverge, what is the organization actually optimizing for? A
              redefinition of psychological safety as a structural
              condition, not a cultural vibe.
            </p>
          </StaggerItem>

          <StaggerItem
            as="article"
            className={`${styles.keynoteCard} ${styles.keynoteCardMd}`}
          >
            <span className={styles.keynoteEyebrow}>
              <span className={styles.keynoteEyebrowKind}>3-Module Course</span>
            </span>
            <h3 className={styles.keynoteTitle}>
              Structural Clarity — A Rights-Based Leadership Program
            </h3>
            <p className={styles.keynoteBody}>
              A comprehensive curriculum teaching structural vs. personal
              diagnostic, rights-based practice, and organizational
              intervention design.
            </p>
          </StaggerItem>

          <StaggerItem
            as="article"
            className={`${styles.keynoteCard} ${styles.keynoteCardMd}`}
          >
            <span className={styles.keynoteEyebrow}>
              <span className={styles.keynoteEyebrowKind}>Keynote</span>
            </span>
            <h3 className={styles.keynoteTitle}>
              When Systems Confuse Perception
            </h3>
            <p className={styles.keynoteBody}>
              On the diagnostic difference between what organizations
              measure and what they actually reward — and what that gap
              costs the people operating inside it.
            </p>
          </StaggerItem>

          <StaggerItem
            as="article"
            className={`${styles.keynoteCard} ${styles.keynoteCardImg}`}
          >
            <div className={styles.keynoteImage} aria-hidden="true" />
            <div className={styles.keynoteImageCopy}>
              <span className={styles.keynoteEyebrow}>
                <span className={styles.keynoteEyebrowKind}>In Development</span>
              </span>
              <h3 className={styles.keynoteTitle}>
                Beyond Accommodation: Systemic Change
              </h3>
              <p className={styles.keynoteBody}>
                Why accommodation is a patch and universal design is the
                system — and what that distinction means for organizational
                stewardship.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem
            as="article"
            className={`${styles.keynoteCard} ${styles.keynoteCardFull}`}
          >
            <span className={styles.keynoteEyebrow}>
              <span className={styles.keynoteEyebrowKind}>Keynote</span>
              <span className={styles.keynoteEyebrowSep}>/</span>
              <span className={styles.keynoteEyebrowStatus}>
                In Development
              </span>
            </span>
            <h3 className={styles.keynoteTitle}>
              Leadership That Works for Different Minds
            </h3>
            <p className={styles.keynoteBody}>
              Neurodiversity, cognitive load, and what it takes to design
              leadership structures that don&apos;t require a particular mind
              to succeed.
            </p>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* Academic Research & Case Analysis */}
      <Section className={styles.academicSection}>
        <FadeIn className={styles.academicHeader}>
          <h2 className={styles.academicTitle}>
            Academic Research &amp; Case Analysis
          </h2>
          <p className={styles.academicLead}>
            Selected graduate coursework from Southern New Hampshire
            University. Each paper applied the structural diagnostic to a
            real organization, industry, or policy question.
          </p>
        </FadeIn>

        <Stagger className={styles.academicList}>
          {[
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
              title:
                'Regenerative Leadership & Community Food Equity Initiative',
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
                'Legal memorandum for a growing LLC preparing for an IPO under active litigation exposure. Identifies three interconnected legal issues: (1) a Title VII sex-discrimination claim requiring settlement and remediation before public disclosure, (2) securities regulation requirements including SOX compliance and Form S-1 filing, and (3) fiduciary duty risks inherent in transitioning from closely-held LLC to publicly held corporation. Demonstrates how federal securities law, employment law, and governance obligations intersect when private companies move to public structure — and why unresolved employment claims complicate IPO readiness.',
            },
            {
              kind: 'ENG 123 · English Composition II',
              subkind: 'Persuasive research paper',
              title:
                'The Case for Servant Leadership Over Authoritarian Leadership',
              body:
                "Scholarly argument that servant leadership outperforms authoritarian approaches across engagement, creativity, and organizational outcomes. Draws on research (Fatimaa; Obi; Robertson) connecting servant leadership to modern workforce values — meaningful work, understanding why, psychological safety. Foundational to KCG's position that integrity-based leadership is strategy, not sentiment.",
            },
            {
              kind: 'HRM 200 · Human Resource Functions',
              subkind: 'Comparative SWOT analysis',
              title: 'HR Technology SWOT: Interview Stream & Gender Decoder',
              body:
                'Dual SWOT analyses of HR technology platforms evaluated through the lens of organizational strategy and inclusive hiring. Interview Stream (video interview platform) assessed on operational benefits and data security risks. Gender Decoder (bias detection tool for job postings) evaluated for strengths and limitations in addressing structural bias. Integrates HR technology with talent acquisition strategy and risk management.',
            },
          ].map((paper) => (
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

      {/* Leadership Reflection & Philosophy */}
      <Section className={styles.reflectionSection}>
        <FadeIn className={styles.reflectionHeader}>
          <h2 className={styles.reflectionTitle}>
            Leadership Reflection &amp; Philosophy
          </h2>
          <hr className={styles.reflectionRule} aria-hidden="true" />
        </FadeIn>

        <Stagger className={styles.reflectionGrid}>
          <StaggerItem as="article" className={styles.reflectionCard}>
            <h3 className={styles.reflectionCardTitle}>
              Statement of Leadership
            </h3>
            <p className={styles.reflectionCardBody}>
              Reflection on personal evolution as a leader — moving from viewing leadership as authority to understanding it as modeling behavior and building trust. Identifies emotional intelligence as central to effectiveness; outlines a democratic leadership style grounded in leading from the front, creating psychological safety through feedback-seeking, and delegating as a development opportunity.
            </p>
            <span className={styles.reflectionCardMeta}>
              Personal Leadership Philosophy • 2023
            </span>
            <span className={styles.reflectionCardMeta}>
              BUS 210 · Principles of Leadership & Management
            </span>
          </StaggerItem>

          <StaggerItem
            as="article"
            className={`${styles.reflectionCard} ${styles.reflectionCardDark}`}
          >
            <h3 className={styles.reflectionCardTitle}>
              The Five Practices of Exemplary Leadership
            </h3>
            <p className={styles.reflectionCardBody}>
              Reflective analysis applying Kouzes and Posner's Five Practices to real-world leadership experience. Demonstrates "Model the Way" through transparency and accountability during setbacks, "Inspire a Shared Vision" by reframing organizational change as development opportunity, "Challenge the Process" by proposing agile approaches to rigid timelines, and "Enable Others to Act" through empowerment and trust.
            </p>
            <span className={styles.reflectionCardMeta}>
              Exemplary Leadership Analysis • 2023
            </span>
            <span className={styles.reflectionCardMeta}>
              Applied reflection · Kouzes & Posner framework
            </span>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* Ready to do the work? — CTA */}
      <Section className={styles.readySection}>
        <FadeIn className={styles.readyInner}>
          <h2 className={styles.readyTitle}>Ready to do the work?</h2>
          <p className={styles.readyBody}>
            Whether you&apos;re navigating a leadership transition, a
            cultural shift, or a moment of organizational reflection —
            let&apos;s start with what&apos;s actually happening.
          </p>
          <Link to="/contact" className={styles.readyButton}>
            Schedule a Conversation
          </Link>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
