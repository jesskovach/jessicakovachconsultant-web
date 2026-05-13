import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/primitives/Section';
import FadeIn from '@components/motion/FadeIn';

export default function AppliedWork() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Research & Applied Work"
        title="Where theory meets institutional reality."
        lead="Original research, advisory engagements, and public scholarship on leadership under pressure."
      />
      <Section tone="alt">
        <FadeIn>
          <h2>Human Rights Advocacy</h2>
          <p>Applied work case studies and writing go here.</p>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
