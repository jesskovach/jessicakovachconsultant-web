import FadeIn from '@components/motion/FadeIn';
import Section from '@components/primitives/Section';
import Eyebrow from '@components/primitives/Eyebrow';
import styles from './PageHeader.module.css';

export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <Section size="lg" containerSize="default">
      <FadeIn className={styles.header}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
        {children ? <div className={styles.extra}>{children}</div> : null}
      </FadeIn>
    </Section>
  );
}
