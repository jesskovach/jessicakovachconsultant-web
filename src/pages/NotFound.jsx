import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Button from '@components/primitives/Button';
import Section from '@components/primitives/Section';

export default function NotFound() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="404"
        title="This page is off the path."
        lead="The page you're looking for isn't here — or isn't here anymore."
      />
      <Section tone="alt">
        <Button to="/" variant="primary">Back to home</Button>
      </Section>
    </PageTransition>
  );
}
