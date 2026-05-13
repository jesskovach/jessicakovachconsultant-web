import PageTransition from '@components/motion/PageTransition';
import PageHeader from '@components/sections/PageHeader';
import Section from '@components/primitives/Section';
import Button from '@components/primitives/Button';
import FadeIn from '@components/motion/FadeIn';
import { siteConfig } from '@lib/siteConfig';

export default function Contact() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title="Let's start with a conversation."
        lead="Whether you're navigating a leadership transition, a cultural shift, or a moment of organizational inflection — we start with what's actually happening."
      />
      <Section tone="alt">
        <FadeIn>
          <h2>Get in touch</h2>
          <p>Reach us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p>
          <div style={{ marginTop: 'var(--space-5)' }}>
            <Button href={`mailto:${siteConfig.contact.email}`} variant="primary">
              Book a consultation
            </Button>
          </div>
        </FadeIn>
      </Section>
    </PageTransition>
  );
}
