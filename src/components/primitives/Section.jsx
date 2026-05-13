import Container from './Container.jsx';
import styles from './Section.module.css';

export default function Section({
  as: Tag = 'section',
  tone = 'default',
  size = 'default',
  containerSize = 'default',
  className = '',
  children,
  ...rest
}) {
  const toneClass = styles[`tone_${tone}`] ?? '';
  const sizeClass = styles[`size_${size}`] ?? '';
  return (
    <Tag className={`${styles.section} ${toneClass} ${sizeClass} ${className}`.trim()} {...rest}>
      <Container size={containerSize}>{children}</Container>
    </Tag>
  );
}
