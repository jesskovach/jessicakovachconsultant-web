import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/primitives/Section';
import FadeIn from '@components/motion/FadeIn';

export default function Writing() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Writing"
        title="This is where the work goes public."
        lead="Essays on leadership under pressure, organizational systems, ethical decision-making, and what it takes to build structures that protect the people inside them."
      />
      <Section tone="alt">
        <FadeIn>
          <h2>Essays</h2>
          <p>Writing previews and Substack link go here.</p>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
