import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/primitives/Section';
import FadeIn from '@components/motion/FadeIn';

export default function FoundingClients() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="The Cohort"
        title="Founding Clients"
        lead="KCG is a new consulting practice. The methodology is grounded in two decades of applied leadership experience, formal human-rights training, and active research — but the consulting engagements are just beginning."
      />
      <Section tone="alt">
        <FadeIn>
          <h2>What founding clients get</h2>
          <p>Founding-client benefits and terms go here.</p>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
