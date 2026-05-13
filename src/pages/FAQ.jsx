import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/primitives/Section';
import FadeIn from '@components/motion/FadeIn';

export default function FAQ() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="FAQ"
        title="Questions worth answering."
        lead="What clients ask before they commit — and what we want them to know first."
      />
      <Section tone="alt">
        <FadeIn>
          <h2>Common questions</h2>
          <p>FAQ accordion goes here.</p>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
